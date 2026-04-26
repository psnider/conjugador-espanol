import { getTemaConAlternanciaVocálica, getTemaConAlternanciaVocálica_IndPret3P } from "./alternancia-vocálica.js";
import { acumulaCambiosPorPersona, applyToFormasConjugadas, asFormaConjugada, añadeCambiosPorPersona, combinaFormasConjugadas, formaConjugadaIgual, getForma, isValueless, persons_w_vos, setStem, vowels } from "./lib.js";
import { moveStress, removeStress, stressed_regex } from "./move-stress.js";
import { aplicaPrefijosClaseConjugacional } from "./prefixes.js";
import { getRegularRules, getRegularSuffixes } from "./regular-verb-rules.js";
import { resolveConjugationClass } from "./resolve-conjugation-class.js";
import { getTemaFuturo } from "./tema-futuro.js";
import { getSuffixesForPresenteYo, getTemaPresenteYo } from "./tema-presente-yo.js";
import { getSuffixesForStrongPretérito, getTemaPretérito } from "./tema-pretérito.js";
import { getCambiosPorRegla, getOrthographicChanges, getOrthographicChanges_IndPret3P } from "./ortografía.js";
import { getAnnotations } from "./verbos-con-cambios-morfológicas.js";
// import { getStemChanges } from "./stem-changes.js"
// Orden global de ejecución (pipeline)
// 1. Supletivo
//   si excepciones_léxicas.supletivo === true
//   - usar paradigma supletivo
//   - salir
// 2. Selección de dominio
//   determinar: IndPret / futuro / etc.
// NOTE: that tema-pretérito, tema-futuro, tema-presente-yo apply to different tense/moods
// 3. tema-pretérito
//   si dominio ∈ ["IndPret", "SubImp", "SubFut"]
//   y existe tema_pretérito_del_modelo
//   - usarlo
// 4. tema-futuro
//   si dominio ∈ ["IndFut", "IndCond"]
//   y existe tema_futuro_del_modelo
//   - usarlo
// 5. tema-presente-yo
//   si dominio ∈ ["IndPres", "SubPres", "CmdPos"]
//   y persona = 1s
//   y existe tema_presente_yo_del_modelo
//   - usarlo
// 6. alternancia-vocálica
//   si dominio ∈ presente / subj. pres. / imperativo
//   y existe alternancia_vocálica
//   y no se usó tema_presente_yo_del_modelo
//   - aplicar alternancia
// 7. tema regular
//   si ningún módulo anterior aplicó
//   - usar tema regular del infinitivo
// 8. terminaciones
//   añadir terminaciones morfológicas
// 9. ortografía
//   hiato / y / c-qu / g-gu / z-c / acentos
// 10. excepciones léxicas finales
//   - imperativo_tú
//   - vos
//   - participio / gerundio
export function accumulateChangedForms(args) {
    let base = args.base;
    const updates = args.updates;
    const accumulated = { ...base };
    for (const key in updates) {
        const gramatical_person = key;
        if (accumulated[gramatical_person] !== null) {
            accumulated[gramatical_person] = updates[gramatical_person];
        }
    }
    return accumulated;
}
function getTemasRegulares(conj_and_deriv_rules, mood_tense, ancestor_rule_sets) {
    const { modelo, infinitivo_sin_prefijos, cached_tema_pretérito_p3_de_modelo } = conj_and_deriv_rules;
    const use_infinitive = ancestor_rule_sets[0].add_suffix_to_infinitive || ancestor_rule_sets[1]?.add_suffix_to_infinitive;
    const add_suffix_to_preterite_p3_stem = ancestor_rule_sets[0].add_suffix_to_preterite_p3_stem || ancestor_rule_sets[1]?.add_suffix_to_preterite_p3_stem;
    const stress_last_char_of_p1_stem = ancestor_rule_sets[0].stress_last_char_of_p1_stem || ancestor_rule_sets[1]?.stress_last_char_of_p1_stem;
    const stress_last_vowel_of_s123p3_stem = ancestor_rule_sets[0].stress_last_vowel_of_s123p3_stem || ancestor_rule_sets[1]?.stress_last_vowel_of_s123p3_stem;
    const stress_last_char_of_vos_stem = ancestor_rule_sets[0].stress_last_char_of_vos_riop_stem || ancestor_rule_sets[1]?.stress_last_char_of_vos_riop_stem;
    let stem;
    const verbo_base = modelo || infinitivo_sin_prefijos;
    if (use_infinitive) {
        stem = removeStress(verbo_base);
    }
    else if (add_suffix_to_preterite_p3_stem) {
        stem = cached_tema_pretérito_p3_de_modelo;
    }
    else {
        stem = verbo_base.slice(0, -2);
    }
    const temas = setStem([stem]);
    if (stress_last_char_of_p1_stem || stress_last_vowel_of_s123p3_stem) {
        const match = stem.match(last_vowel_regex);
        if (!match) {
            throw new Error(`stem=${stem} expected to contain vowel`);
        }
        const index_of_last_vowel = match.index;
        const stem_w_stressed_last_vowel = moveStress(stem, { to: index_of_last_vowel });
        const gramatical_persons = [];
        if (stress_last_vowel_of_s123p3_stem) {
            gramatical_persons.push("s1", "s2", "s3", "p3", "vos");
        }
        if (stress_last_char_of_p1_stem) {
            gramatical_persons.push("p1");
        }
        if (stress_last_char_of_vos_stem) {
            gramatical_persons.push("vos");
        }
        for (const gramatical_person of gramatical_persons) {
            temas[gramatical_person] = [stem_w_stressed_last_vowel];
        }
    }
    return temas;
}
// FIX: this seems to obviate VerbAspectModifications.stress_last_char_of_p1_stem
function stressLastSylableOfP1Stem(temas_p1) {
    if ((temas_p1.length !== 1) || (typeof temas_p1[0] !== "string")) {
        throw new Error(`temas_p1=${temas_p1} debe ser de tipo 'string'`);
    }
    const tema_p1 = temas_p1[0];
    const last_index = tema_p1.length - 1;
    const restressed = moveStress(tema_p1, { to: last_index });
    return (restressed !== tema_p1) ? restressed : undefined;
}
// function cambiaTemasDeClaseConjugacional(temas: VerbConjugationStems, prefijos: Prefixes) {
//     let prefijado: VerbConjugationStems = {}
//     for (const key in temas) {
//         const persona_gramatical = key as keyof VerbConjugationStems
//         const formas = temas[persona_gramatical]
//         prefijado[persona_gramatical] = applyToFormasConjugadas(formas, (forma: string) => {
//             const prefijado = aplicaPrefijosClaseConjugacional(forma, prefijos)
//             return prefijado
//         })
//     }
//     return prefijado
// }
// get the stems of modelo or infinitivo_sin_prefijos
export function getUnprefixedStemForIndPret3P(conj_and_deriv_rules) {
    const { modelo, infinitivo_sin_prefijos, prefixes, morphological_rules } = conj_and_deriv_rules;
    const reglas = morphological_rules?.de_modelo || morphological_rules?.de_infinitivo;
    const tema_pretérito_del_modelo = reglas?.tema_pretérito_del_modelo;
    if (tema_pretérito_del_modelo) {
        return tema_pretérito_del_modelo;
    }
    else {
        // find the stems without prefixes
        const base_verb = modelo || infinitivo_sin_prefijos;
        const stem = base_verb.slice(0, -2);
        const tema_cambiado = getTemaConAlternanciaVocálica_IndPret3P(conj_and_deriv_rules, stem);
        return tema_cambiado;
    }
}
// get the stems of infinitivo_sin_prefijos
export function getUnprefixedStems(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, suffixes, reglas_aplicadas) {
    function getTemaDeModoTiempo(conj_and_deriv_rules, mood_tense) {
        let temas_de_modo_tiempo;
        const cambios_aplicadas = {};
        switch (mood_tense) {
            case "IndPret":
                temas_de_modo_tiempo = getTemaPretérito(conj_and_deriv_rules, mood_tense);
                if (temas_de_modo_tiempo) {
                    acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_de_modo_tiempo, regla: "tema pretérito excepcional" });
                }
                break;
            case "SubImp":
            case "SubFut":
                {
                    const { cached_tema_pretérito_p3_de_modelo } = conj_and_deriv_rules;
                    // add_suffix_to_preterite_p3_stem
                    if (cached_tema_pretérito_p3_de_modelo) {
                        temas_de_modo_tiempo = setStem([cached_tema_pretérito_p3_de_modelo]);
                        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_de_modo_tiempo, regla: "tema pretérito 3.ª persona plural" });
                        const tema_p1_estresado = stressLastSylableOfP1Stem(temas_de_modo_tiempo.p1);
                        if (tema_p1_estresado) {
                            temas_de_modo_tiempo.p1 = [tema_p1_estresado];
                            acumulaCambiosPorPersona({ cambios_aplicadas, persona: "p1", temas: temas_de_modo_tiempo, regla: "estrese tema 1.ª persona plural" });
                        }
                    }
                }
                break;
            case "IndFut":
            case "IndCond":
                {
                    temas_de_modo_tiempo = getTemaFuturo(conj_and_deriv_rules, mood_tense);
                    if (temas_de_modo_tiempo) {
                        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_de_modo_tiempo, regla: "tema futuro excepcional" });
                    }
                    break;
                }
            case "IndPres":
            case "SubPres":
            case "CmdPos":
                {
                    temas_de_modo_tiempo = getTemaPresenteYo(conj_and_deriv_rules, mood_tense);
                    if (temas_de_modo_tiempo) {
                        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_de_modo_tiempo, regla: "tema presente yo" });
                    }
                }
                break;
        }
        if (temas_de_modo_tiempo) {
            const temas_prefijadas_clase = applicaPrefijosClaseConjugacional(conj_and_deriv_rules, temas_de_modo_tiempo);
            if (temas_prefijadas_clase) {
                acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_prefijadas_clase, regla: "prefijos de clase conjugacional" });
                temas_de_modo_tiempo = accumulateChangedForms({ base: temas_de_modo_tiempo, updates: temas_prefijadas_clase });
            }
        }
        return { temas_de_modo_tiempo, cambios_aplicadas };
    }
    // find the stems without prefixes
    const temas_regulares = getTemasRegulares(conj_and_deriv_rules, mood_tense, ancestor_rule_sets);
    const cambios_aplicadas = reglas_aplicadas.cambios;
    acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_regulares, regla: "regular" });
    let temas_acumulados = temas_regulares;
    // then convert to use the prefix pattern of the ClaseConjugacional
    const temas_prefijadas_clase = applicaPrefijosClaseConjugacional(conj_and_deriv_rules, temas_regulares);
    if (temas_prefijadas_clase) {
        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_prefijadas_clase, regla: "prefijos de clase conjugacional" });
        temas_acumulados = accumulateChangedForms({ base: temas_acumulados, updates: temas_prefijadas_clase });
    }
    // alternancia debe sigue la adición de los prefijos
    const temas_con_alternancias = getTemaConAlternanciaVocálica(conj_and_deriv_rules, mood_tense, temas_acumulados);
    if (temas_con_alternancias) {
        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_con_alternancias, regla: "tema con alternancia vocálica" });
        temas_acumulados = accumulateChangedForms({ base: temas_acumulados, updates: temas_con_alternancias });
    }
    // las formas exigido por el modo/tiempo domina las otras formas
    const { temas_de_modo_tiempo, cambios_aplicadas: cambios_aplicadas_de_modo_tiempo } = getTemaDeModoTiempo(conj_and_deriv_rules, mood_tense);
    if (temas_de_modo_tiempo) {
        if (cambios_aplicadas_de_modo_tiempo) {
            añadeCambiosPorPersona({ acumulado: cambios_aplicadas, adicional: cambios_aplicadas_de_modo_tiempo });
        }
        temas_acumulados = accumulateChangedForms({ base: temas_acumulados, updates: temas_de_modo_tiempo });
    }
    return temas_acumulados;
}
// add any prefixes to the stems
function applicaPrefijosClaseConjugacional(conj_and_deriv_rules, unprefixed_stems) {
    function getPrefijosClaseConjugacional() {
        const prefijos_clase_conjugacional = {};
        if (prefixes.clase_de_conjugación) {
            const grammatical_persons = Object.keys(unprefixed_stems);
            for (const grammatical_person of grammatical_persons) {
                const formas_conjugadas = unprefixed_stems[grammatical_person];
                const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                    const prefijada = aplicaPrefijosClaseConjugacional(forma, prefixes);
                    return prefijada;
                });
                if (!isValueless(formas_conjugadas_prefijadas)) {
                    prefijos_clase_conjugacional[grammatical_person] = formas_conjugadas_prefijadas;
                }
            }
        }
        return prefijos_clase_conjugacional;
    }
    const { prefixes } = conj_and_deriv_rules;
    if (unprefixed_stems && prefixes) {
        const prefijos_clase_conjugacional = getPrefijosClaseConjugacional();
        let updated_stems = accumulateChangedForms({ base: unprefixed_stems, updates: prefijos_clase_conjugacional });
        return updated_stems;
    }
}
// FIX: 18 abr 2026 es posible que esto no hace nada, está desusado
export function aplicaPrefijosProductivosAFormas(formas_conjugadas, prefixes) {
    if (prefixes) {
        const { productive_prefixes, nonproductive_prefix } = prefixes;
        if (productive_prefixes || nonproductive_prefix) {
            const productive = productive_prefixes?.join("") || "";
            const nonproductive = nonproductive_prefix || "";
            const prefix = productive + nonproductive;
            if (prefix.length > 0) {
                const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                    return prefix + forma;
                });
                // No necesesitamos llamar combinaFormasConjugadas(), porque (prefix.length > 0)
                return formas_conjugadas_prefijadas;
            }
        }
    }
}
// add any prefixes to the stems
function aplicaPrefijosProductivos(conj_and_deriv_rules, unprefixed_stems, rules_applied) {
    function aplicaPrefijosProductivosYNo(stems) {
        const { productive_prefixes, nonproductive_prefix } = prefixes;
        const prefijos_productivos_y_no = {};
        if (prefixes?.productive_prefixes || prefixes?.nonproductive_prefix) {
            const productive = productive_prefixes?.join("") || "";
            const nonproductive = nonproductive_prefix || "";
            const prefix = productive + nonproductive;
            if (prefix.length > 0) {
                const grammatical_persons = Object.keys(stems);
                for (const grammatical_person of grammatical_persons) {
                    const formas_conjugadas = stems[grammatical_person];
                    const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                        return prefix + forma;
                    });
                    // No necesesitamos llamar combinaFormasConjugadas(), porque (prefix.length > 0)
                    prefijos_productivos_y_no[grammatical_person] = formas_conjugadas_prefijadas;
                }
            }
        }
        return prefijos_productivos_y_no;
    }
    const { prefixes } = conj_and_deriv_rules;
    if (prefixes) {
        const prefijos_productivos_y_no = aplicaPrefijosProductivosYNo(unprefixed_stems);
        if (Object.keys(prefijos_productivos_y_no).length > 0) {
            unprefixed_stems = accumulateChangedForms({ base: unprefixed_stems, updates: prefijos_productivos_y_no });
            // rules_applied.push({prefijos_productivos_y_no})
        }
        return unprefixed_stems;
    }
}
function mergeFormas(primario, segudario) {
    function formasIncluyen(formas_primarias, forma_segundaria) {
        for (const forma_primaria of formas_primarias) {
            // Probablemente sea suficiente comprarar solo la forma y no el uso
            if (formaConjugadaIgual(forma_primaria, forma_segundaria)) {
                return true;
            }
        }
        return false;
    }
    for (let key in segudario) {
        const formas_primarias = primario[key];
        const formas_segonarias = segudario[key];
        const formas_combinados = [...formas_primarias];
        for (const forma_segundaria of formas_segonarias) {
            if (!formasIncluyen(formas_primarias, forma_segundaria)) {
                formas_primarias.push(forma_segundaria);
            }
        }
    }
}
const modo_tiempos_por_acepta_regular = ["IndPres", "SubPres", "CmdPos", "CmdNeg"];
export function conjugateVerb(infinitivo, mood_tense) {
    console.log(`conjugateVerb(${infinitivo}, ${mood_tense})`);
    const conj_and_deriv_rules = resolveConjugationClass(infinitivo);
    if (!conj_and_deriv_rules) {
        return undefined;
    }
    const modelo = conj_and_deriv_rules.modelo;
    const notes = getAnnotations(infinitivo, modelo, mood_tense);
    let { forms, cambios_conjugacional } = _conjugateVerb(conj_and_deriv_rules, mood_tense);
    const acepta_regular = conj_and_deriv_rules?.morphological_rules?.de_infinitivo?.acepta_regular || conj_and_deriv_rules?.morphological_rules?.de_modelo?.acepta_regular;
    if (acepta_regular) {
        if (modo_tiempos_por_acepta_regular.includes(mood_tense)) {
            conj_and_deriv_rules.infinitivo_sin_prefijos = conj_and_deriv_rules.infinitivo;
            conj_and_deriv_rules.modelo;
            conj_and_deriv_rules.prefixes;
            delete conj_and_deriv_rules.morphological_rules?.de_infinitivo;
            delete conj_and_deriv_rules.morphological_rules?.de_modelo;
            const secondary = _conjugateVerb(conj_and_deriv_rules, mood_tense);
            if (acepta_regular === "primaria") {
                mergeFormas(secondary.forms, forms);
                forms = secondary.forms;
                notes.cambios_conjugacional_secundaria = notes.cambios_conjugacional_primaria;
                notes.cambios_conjugacional_primaria = secondary.cambios_conjugacional;
            }
            else {
                mergeFormas(forms, secondary.forms);
            }
        }
    }
    else {
        notes.cambios_conjugacional_primaria = cambios_conjugacional;
    }
    return { notes, forms };
}
// The regular_suffixes determine the forms. For example, if the suffix is missing for "s1", then that form is not produced.
// This also corrects stress accents according to standard Spanish stress rules.
export function appendSuffixesToStems(infinitivo, stems, regular_suffixes, cambios_aplicadas) {
    function appendPreferingStressFromSuffix(stem, suffix) {
        if (suffix.match(stressed_regex)) {
            const unstressed_stem = removeStress(stem);
            const did_unstress_stem = (unstressed_stem !== stem);
            const joined = unstressed_stem + suffix;
            return { joined, unstressed_stem: did_unstress_stem ? unstressed_stem : undefined };
        }
        else {
            return { joined: stem + suffix };
        }
    }
    function combineStemWithSuffixes(stem_forma, suffix_forms, gramatical_person) {
        // es posible que el tema no existe, como por "ir"
        const stem = getForma(stem_forma);
        const w_suffixes = applyToFormasConjugadas(suffix_forms, (suffix, i, uso) => {
            const result = appendPreferingStressFromSuffix(stem, suffix);
            if (result.unstressed_stem) {
                const forma = result.unstressed_stem;
                const unstressed_stem_forma_conjugada = (uso ? { forma, uso } : forma);
                unstressed_stems[gramatical_person] = unstressed_stems[gramatical_person] || [];
                unstressed_stems[gramatical_person].push(unstressed_stem_forma_conjugada);
            }
            return result.joined;
        });
        const combined = combinaFormasConjugadas(suffix_forms, w_suffixes);
        return combined;
    }
    function combineStemsWithSuffix(stem_forms, suffix_form, gramatical_person) {
        const suffix = getForma(suffix_form);
        const combined = applyToFormasConjugadas(stem_forms, (stem, i, uso) => {
            const result = appendPreferingStressFromSuffix(stem, suffix);
            if (result.unstressed_stem) {
                const forma = result.unstressed_stem;
                const unstressed_stem_forma_conjugada = (uso ? { forma, uso } : forma);
                unstressed_stems[gramatical_person] = unstressed_stems[gramatical_person] || [];
                unstressed_stems[gramatical_person].push(unstressed_stem_forma_conjugada);
            }
            return result.joined;
        });
        return combined;
    }
    // 
    function combine2StemsWith2Suffixes(stem_forms, suffix_forms, gramatical_person, tipo_combinacional) {
        // if the stem forms are FormaRestingida, then they are paired sequentially: stem_forms[0]+suffix_forms[0],stem_forms[1]+suffix_forms[1],etc.
        // but if they are strings, then they are paired as a matrix, that is all possible pairs: stem_forms[0]+suffix_forms[0], stem_forms[0]+suffix_forms[1],stem_forms[1]+suffix_forms[0],etc.
        const combined = [];
        if (tipo_combinacional === "secuencial") {
            for (let i = 0; i < stem_forms.length; ++i) {
                const stem_forma_conjugada = stem_forms[i];
                const suffix_forma_conjugada = suffix_forms[i];
                if ((typeof stem_forma_conjugada === "string") && (typeof suffix_forma_conjugada === "string")) {
                    let stem_w_suffix = appendPreferingStressFromSuffix(stem_forma_conjugada, suffix_forma_conjugada);
                    const result = appendPreferingStressFromSuffix(stem_forma_conjugada, suffix_forma_conjugada);
                    if (result.unstressed_stem) {
                        unstressed_stems[gramatical_person] = unstressed_stems[gramatical_person] || [];
                        unstressed_stems[gramatical_person].push(result.unstressed_stem);
                    }
                    combined[i] = result.joined;
                }
                else if ((typeof stem_forma_conjugada === "object") && (typeof suffix_forma_conjugada === "object")) {
                    if (stem_forma_conjugada.uso !== suffix_forma_conjugada.uso) {
                        throw new Error(`expected usos of multiple stems to match types of mulltiple suffixes, stems=${stem_forma_conjugada} suffixes=${suffix_forma_conjugada}`);
                    }
                    const result = appendPreferingStressFromSuffix(stem_forma_conjugada.forma, suffix_forma_conjugada.forma);
                    const uso = stem_forma_conjugada.uso;
                    if (result.unstressed_stem) {
                        unstressed_stems[gramatical_person] = unstressed_stems[gramatical_person] || [];
                        unstressed_stems[gramatical_person].push({ forma: result.unstressed_stem, uso });
                    }
                    combined[i] = { forma: result.joined, uso };
                }
                else {
                    throw new Error(`expected types of multiple stems to match types of mulltiple suffixes, stems=${JSON.stringify(stem_forms)} suffixes=${JSON.stringify(suffix_forms)}`);
                }
            }
        }
        else {
            // It's possible that this is never used, if there are explicit excepciones_léxicas specified 
            for (let stem_i = 0; stem_i < stem_forms.length; ++stem_i) {
                const stem = stem_forms[stem_i];
                if (typeof stem !== "string") {
                    throw new Error(`For matrix type combination, expect stem to be a string, stems=${JSON.stringify(stem_forms)} suffixes=${JSON.stringify(suffix_forms)}`);
                }
                const formas_combinadas = applyToFormasConjugadas(suffix_forms, (suffix, i, uso) => {
                    const result = appendPreferingStressFromSuffix(stem, suffix);
                    if (result.unstressed_stem) {
                        unstressed_stems[gramatical_person] = unstressed_stems[gramatical_person] || [];
                        unstressed_stems[gramatical_person].push({ forma: result.unstressed_stem, uso });
                    }
                    return result.joined;
                });
                combined.push(...formas_combinadas);
            }
        }
        return combined;
    }
    let unstressed_stems = {};
    let combined_stems_w_suffixes = {};
    const suffix_keys = Object.keys(regular_suffixes);
    // if (stem_keys.length !== suffix_keys.length) {
    //     throw new Error(`infinitivo=${infinitivo} has stem_keys=${stem_keys} !== suffix_keys=${suffix_keys}`)
    // }
    for (const key of suffix_keys) {
        const gramatical_person = key;
        let stem_forms = stems[gramatical_person];
        const suffix_forms = regular_suffixes[gramatical_person];
        if (stem_forms && suffix_forms) {
            if ((stem_forms.length === 2) && (stem_forms[0] === stem_forms[1])) {
                stem_forms = [stem_forms[0]];
            }
            if (stem_forms.length === 1) {
                let stem = stem_forms[0];
                if (gramatical_person === "vos") {
                    const stem_s2 = stems.s2[0];
                    stem = stem || stem_s2;
                    if (!stem && (stems.s2.length != 1)) {
                        // FIX: remove this if it no longer occurs...
                        throw new Error(`document exactly when this occurs `);
                    }
                }
                const combined = combineStemWithSuffixes(stem, suffix_forms, gramatical_person);
                combined_stems_w_suffixes[gramatical_person] = combined;
                acumulaCambiosPorPersona({ cambios_aplicadas, persona: gramatical_person, temas: stems, sufijos: regular_suffixes, regla: "añade unos sufijos a un tema" });
            }
            else {
                if (suffix_forms.length == 1) {
                    const combined = combineStemsWithSuffix(stem_forms, suffix_forms[0], gramatical_person);
                    combined_stems_w_suffixes[gramatical_person] = combined;
                    acumulaCambiosPorPersona({ cambios_aplicadas, persona: gramatical_person, temas: stems, sufijos: regular_suffixes, regla: "añade un sufijo a unos temas" });
                }
                else if (suffix_forms.length == 2) {
                    if (stem_forms.length == 2) {
                        const tipo_combinacional = ((typeof stem_forms[0] === "string") && (typeof stem_forms[1] === "string")) ? "matrice" : "secuencial";
                        const regla = ((tipo_combinacional === "matrice") ? "multiplica 2 sufijos por 2 temas" : "añade correspondiente 2 sufijos a 2 temas");
                        const combined = combine2StemsWith2Suffixes(stem_forms, suffix_forms, gramatical_person, tipo_combinacional);
                        combined_stems_w_suffixes[gramatical_person] = combined;
                        acumulaCambiosPorPersona({ cambios_aplicadas, persona: gramatical_person, temas: stems, sufijos: regular_suffixes, regla });
                    }
                    else {
                        // Guess that if there are more than 2 stems, this will be replaced later by specific overrides, not yet encountered...
                        // FIX: figure out how to support these combinations more reliably: probably need to gather exceptional forms first, that is reverse of the current order
                        const stem_form_0 = stem_forms[0];
                        const combined = combineStemWithSuffixes(stem_forms[0], suffix_forms, gramatical_person);
                        combined_stems_w_suffixes[gramatical_person] = combined;
                        acumulaCambiosPorPersona({ cambios_aplicadas, persona: gramatical_person, temas: stems, sufijos: regular_suffixes, regla: "añade unos sufijos a un tema" });
                    }
                }
                else {
                    throw new Error(`FIX: ${infinitivo},${gramatical_person}: support multiple stems=${JSON.stringify(stem_forms)} with mulltiple suffixes=${JSON.stringify(suffix_forms)}`);
                }
                // let stem = stem_forms
                // if (gramatical_person === "vos") {
                //     const stem_s2 = stems.s2[0]
                //     if ((stems.s2?.length !== 1) || (typeof stem_s2 !== "string")) {
                //         throw new Error(`expected stems.s2=${stems.s2} to have just one element, a string`)
                //     }
                //     stem = stem || stem_s2
                // }
                // const combined = combineStemWithSuffixes(stem, suffix_forms)
                // combined_stems_w_suffixes[gramatical_person] = combined
            }
        }
    }
    if (Object.keys(unstressed_stems).length > 0) {
        // FIX: does this need to be inserted into the changes before the previous ones (from this function)
        acumulaCambiosPorPersona({ cambios_aplicadas, temas: unstressed_stems, regla: "elimina el estrese del tema" });
    }
    return combined_stems_w_suffixes;
}
function getSuffixesForLexicalExceptions(conj_and_deriv_rules, mood_tense, suffixes, forms_to_stress_last_char_of_stem) {
    const cambios_aplicadas_por_sufijos = {};
    const sufijos_excepcionales = {};
    function eliminaEstrésDeSufijosDeTemasEstresados() {
        // Añade el estrés a las temas de los sufijos que lo exigen 
        if (forms_to_stress_last_char_of_stem?.length > 0) {
            for (const gramatical_person of forms_to_stress_last_char_of_stem) {
                const exceptional_suffixes = suffixes[gramatical_person];
                if (exceptional_suffixes) {
                    const changed_forms = applyToFormasConjugadas(exceptional_suffixes, (exceptional_suffix, i, uso) => {
                        if ((gramatical_person !== "vos") || (uso === "Riop.")) {
                            const unstressed = removeStress(exceptional_suffix);
                            return unstressed;
                        }
                    });
                    if (!isValueless(changed_forms)) {
                        const combined = combinaFormasConjugadas(exceptional_suffixes, changed_forms);
                        // FIX: try to remove the above combinaFormasConjugadas() , and use undefined to mark unchanged forms in a list
                        sufijos_excepcionales[gramatical_person] = combined;
                        cambios_aplicadas_por_sufijos[gramatical_person] = [{ regla: "elimina el estrese del sufijo", sufijos: changed_forms }];
                    }
                }
            }
        }
    }
    function getSufijosExcepcionales(which) {
        const sufijos_de_reglas = {};
        const { morphological_rules } = conj_and_deriv_rules;
        const regla = ((which === "de_modelo") ? "sufjio excepcional del modelo" : "sufjio excepcional del infinitivo");
        if (morphological_rules?.[which]) {
            const suffixes = { ...morphological_rules?.[which]?.excepciones_léxicas?.reglas?.[mood_tense]?.suffixes };
            if (suffixes) {
                for (const key in suffixes) {
                    const gramatical_person = key;
                    const sufijos = suffixes[gramatical_person];
                    sufijos_de_reglas[gramatical_person] = sufijos;
                    sufijos_excepcionales[gramatical_person] = sufijos;
                    cambios_aplicadas_por_sufijos[gramatical_person] = cambios_aplicadas_por_sufijos[gramatical_person] || [];
                    cambios_aplicadas_por_sufijos[gramatical_person].push({ regla, sufijos });
                }
            }
        }
    }
    eliminaEstrésDeSufijosDeTemasEstresados();
    // Recoge los sufijos excepcionales
    getSufijosExcepcionales("de_modelo");
    getSufijosExcepcionales("de_infinitivo");
    return { sufijos_excepcionales, cambios_aplicadas_por_sufijos };
}
function getPersonsTosStressLastCharOfStem(conj_and_deriv_rules, mood_tense) {
    const lexical_exceptions_suffixes_de_modelo = conj_and_deriv_rules?.morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense];
    const lexical_exceptions_suffixes_de_infinitivo = conj_and_deriv_rules?.morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.[mood_tense];
    const stress_last_char_of_p1_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_char_of_p1_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_char_of_p1_stem;
    const stress_last_vowel_of_s123p3_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_vowel_of_s123p3_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_vowel_of_s123p3_stem;
    const stress_last_char_of_vos_riop_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_char_of_vos_riop_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_char_of_vos_riop_stem;
    if (stress_last_char_of_p1_stem || stress_last_vowel_of_s123p3_stem || stress_last_char_of_vos_riop_stem) {
        const forms_to_stress_last_char_of_stem = [];
        if (stress_last_vowel_of_s123p3_stem) {
            forms_to_stress_last_char_of_stem.push("s1", "s2", "s3", "p3");
        }
        if (stress_last_char_of_p1_stem) {
            forms_to_stress_last_char_of_stem.push("p1");
        }
        if (stress_last_char_of_vos_riop_stem) {
            forms_to_stress_last_char_of_stem.push("vos");
        }
        return forms_to_stress_last_char_of_stem;
    }
}
// /[aáeéiíoóuúü]([^aáeéiíoóuúü]*)$/u
const last_vowel_regex = new RegExp(`[${vowels}]([^${vowels}]*)$`, "u");
function getStemsForLexicalExceptions(conj_and_deriv_rules, mood_tense, stems, forms_to_stress_last_char_of_stem) {
    function getTemasExcepcionales(temas_excepcionales, which) {
        if (temas_excepcionales) {
            const de_modelo = (which === "modelo");
            const regla = (de_modelo ? "tema excepcional del modelo" : "tema excepcional del infinitivo");
            const temas_excepcionales_sin_prefijos = {};
            const temas_excepcionales_prefijados = {};
            for (const key in temas_excepcionales) {
                const persona = key;
                const temas = temas_excepcionales[persona];
                temas_excepcionales_sin_prefijos[persona] = temas;
                acumulaCambiosPorPersona({ cambios_aplicadas, persona, temas: temas_excepcionales_sin_prefijos, regla });
                if (de_modelo) {
                    const prefijados = applyToFormasConjugadas(temas, (tema) => {
                        const prefijado = aplicaPrefijosClaseConjugacional(tema, prefixes);
                        return prefijado;
                    });
                    if (prefijados != null) {
                        temas_excepcionales_prefijados[persona] = prefijados;
                        acumulaCambiosPorPersona({ cambios_aplicadas, persona, temas: temas_excepcionales_prefijados, regla });
                    }
                }
            }
            if (Object.keys(temas_excepcionales_prefijados).length > 0) {
                return temas_excepcionales_prefijados;
            }
            if (Object.keys(temas_excepcionales_sin_prefijos).length > 0) {
                return temas_excepcionales_sin_prefijos;
            }
        }
    }
    const cambios_aplicadas = {};
    let exceptional_stems = {};
    const { morphological_rules, prefixes, cached_tema_pretérito_p3_de_modelo } = conj_and_deriv_rules;
    const reglas_excepcionales_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense];
    const reglas_excepcionales_de_infinitivo = morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.[mood_tense];
    const tema_suplicativo = reglas_excepcionales_de_modelo?.tema_suplicativo;
    if (tema_suplicativo) {
        const temas_suplicativos = setStem(tema_suplicativo);
        acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_suplicativos, regla: "tema suplicativo" });
        const formas_prefijados = applyToFormasConjugadas(tema_suplicativo, (tema) => {
            const prefijado = aplicaPrefijosClaseConjugacional(tema, prefixes);
            return prefijado;
        });
        if (formas_prefijados) {
            const tema_suplicativo_prefijado = combinaFormasConjugadas(tema_suplicativo, formas_prefijados);
            const temas_suplicativos_prefijados = setStem(tema_suplicativo_prefijado);
            exceptional_stems = { ...temas_suplicativos_prefijados };
            acumulaCambiosPorPersona({ cambios_aplicadas, temas: temas_suplicativos_prefijados, regla: "prefijos de clase conjugacional" });
        }
    }
    else {
        // FIX: this may be a duplicate of what was done in getTemaDeModoTiempo
        const add_suffix_to_preterite_p3_stem = reglas_excepcionales_de_modelo?.add_suffix_to_preterite_p3_stem;
        if (add_suffix_to_preterite_p3_stem) {
            const stem = cached_tema_pretérito_p3_de_modelo;
            const tema_con_cambios_clase_conjugcional = aplicaPrefijosClaseConjugacional(stem, prefixes);
            exceptional_stems = setStem([tema_con_cambios_clase_conjugcional]);
            acumulaCambiosPorPersona({ cambios_aplicadas, temas: exceptional_stems, regla: "tema pretérito 3.ª persona plural" });
        }
    }
    // FIX: determine how these can combine, in order to limit tests and possible overlap
    const temas_excepcionales_del_modelo = getTemasExcepcionales(reglas_excepcionales_de_modelo?.temas, "modelo");
    if (temas_excepcionales_del_modelo && Object.keys(temas_excepcionales_del_modelo).length > 0) {
        exceptional_stems = accumulateChangedForms({ base: exceptional_stems, updates: temas_excepcionales_del_modelo });
    }
    const temas_excepcionales_del_infinitivo = getTemasExcepcionales(reglas_excepcionales_de_infinitivo?.temas, "infinitivo");
    if (temas_excepcionales_del_infinitivo && Object.keys(temas_excepcionales_del_infinitivo).length > 0) {
        exceptional_stems = accumulateChangedForms({ base: exceptional_stems, updates: temas_excepcionales_del_infinitivo });
    }
    // if (temas_excepcionales) {
    //     for (const key in temas_excepcionales) {
    //         if (exceptional_stems[key]) {
    //             throw new Error(`${conj_and_deriv_rules.infinitivo}: sobreescribiendo con temas=${JSON.stringify(temas_excepcionales[key])}`)
    //         }
    //         exceptional_stems[key] = temas_excepcionales[key]
    //     }
    // }
    if (forms_to_stress_last_char_of_stem?.length > 0) {
        const estrés_cambiado = {};
        for (const gramatical_person of forms_to_stress_last_char_of_stem) {
            const stems_to_stress = exceptional_stems[gramatical_person] || stems[gramatical_person];
            // FIX: this is confusing, and needs to be formalized and cleaned up
            const changed_forms = applyToFormasConjugadas(stems_to_stress, (stem, i, uso) => {
                if ((gramatical_person !== "vos") || ((stems_to_stress.length === 1) || (uso === "Riop."))) {
                    const match = stem.match(last_vowel_regex);
                    if (!match) {
                        throw new Error(`stem=${stem} expected to contain vowel`);
                    }
                    const index_of_last_vowel = match.index;
                    const stem_w_stressed_last_vowel = moveStress(stem, { to: index_of_last_vowel });
                    return stem_w_stressed_last_vowel;
                }
            });
            // const combined = combinaFormasConjugadas(stems_to_stress, changed_forms)
            if (!isValueless(changed_forms)) {
                estrés_cambiado[gramatical_person] = changed_forms;
            }
        }
        if (Object.keys(estrés_cambiado).length > 0) {
            exceptional_stems = accumulateChangedForms({ base: exceptional_stems, updates: estrés_cambiado });
            acumulaCambiosPorPersona({ cambios_aplicadas, temas: estrés_cambiado, regla: "estrese última vocal del tema" });
        }
    }
    return { exceptional_stems, cambios_aplicadas };
}
// function acumulaCambios(args: {reglas_aplicadas: CambiosConjugacionales, cambio: ReglaConjugacional, temas?: VerbConjugation, sufijos?: VerbConjugation}) {
//     const {reglas_aplicadas, cambio, temas, sufijos} = args
//     for (const key in sufijos) {
//         const persona = <GrammaticalPerson> key
//         const formas_conjugadas = sufijos[persona]
//         const cambio_aplicada: CambioPorRegla = {sufijos: formas_conjugadas, cambio}
//         reglas_aplicadas.conjugación[persona].push(cambio_aplicada)
//     }
// }
export function getSuffixes(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, cambios_aplicadas) {
    const regular_suffixes = getRegularSuffixes(conj_and_deriv_rules.infinitivo_sin_prefijos, mood_tense, ancestor_rule_sets);
    const strong_pretérito_suffixes = getSuffixesForStrongPretérito(conj_and_deriv_rules, mood_tense);
    const presente_yo_suffixes = getSuffixesForPresenteYo(conj_and_deriv_rules, mood_tense);
    const regular_w_pretérito = accumulateChangedForms({ base: regular_suffixes, updates: strong_pretérito_suffixes });
    const sufijos = accumulateChangedForms({ base: regular_w_pretérito, updates: presente_yo_suffixes });
    acumulaCambiosPorPersona({ cambios_aplicadas, sufijos, regla: "regular" });
    return sufijos;
}
export function getSuffixFor3p(conj_and_deriv_rules, mood_tense, ancestor_rule_sets) {
    const regular_suffixes = getRegularSuffixes(conj_and_deriv_rules.infinitivo_sin_prefijos, mood_tense, ancestor_rule_sets);
    const strong_pretérito_suffixes = getSuffixesForStrongPretérito(conj_and_deriv_rules, mood_tense);
    const suffixes = { p3: strong_pretérito_suffixes?.p3 || regular_suffixes.p3 };
    return suffixes;
}
// FIX: the name 'unprefixed_stems' is a misnomer, find a better name
function applyLexicalExceptionsForStemsAndSuffixes(conj_and_deriv_rules, mood_tense, unprefixed_stems, suffixes, cambios_aplicadas) {
    const forms_to_stress_last_char_of_stem = getPersonsTosStressLastCharOfStem(conj_and_deriv_rules, mood_tense);
    const result_stems = getStemsForLexicalExceptions(conj_and_deriv_rules, mood_tense, unprefixed_stems, forms_to_stress_last_char_of_stem);
    const { exceptional_stems, cambios_aplicadas: cambios_aplicadas_por_temas } = result_stems;
    if (exceptional_stems) {
        for (const key in exceptional_stems) {
            const grammatical_person = key;
            unprefixed_stems[grammatical_person] = exceptional_stems[grammatical_person];
        }
        añadeCambiosPorPersona({ acumulado: cambios_aplicadas, adicional: cambios_aplicadas_por_temas });
    }
    const resultados_sufijos = getSuffixesForLexicalExceptions(conj_and_deriv_rules, mood_tense, suffixes, forms_to_stress_last_char_of_stem);
    const { sufijos_excepcionales, cambios_aplicadas_por_sufijos } = resultados_sufijos;
    if (sufijos_excepcionales) {
        for (const key in sufijos_excepcionales) {
            const grammatical_person = key;
            suffixes[grammatical_person] = sufijos_excepcionales[grammatical_person];
        }
        añadeCambiosPorPersona({ acumulado: cambios_aplicadas, adicional: cambios_aplicadas_por_sufijos });
    }
}
export function getLexicalSuplications_IndPret3P(conj_and_deriv_rules) {
    const { infinitivo, prefixes, morphological_rules } = conj_and_deriv_rules;
    const formas_IndPret_p3_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.IndPret?.forms?.p3;
    const formas_IndPret_p3_de_infinitivo = morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.IndPret?.forms?.p3;
    const sufijos_IndPret_p3_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.IndPret?.suffixes?.p3;
    const sufijos_IndPret_p3_de_infinitivo = morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.IndPret?.suffixes?.p3;
    const forma_de_modelo_está_inesperado = (formas_IndPret_p3_de_modelo && ((formas_IndPret_p3_de_modelo?.length > 1) || (typeof formas_IndPret_p3_de_modelo[0] !== "string")));
    if (forma_de_modelo_está_inesperado) {
        throw new Error(`expected only one form de_modelo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(formas_IndPret_p3_de_modelo)}`);
    }
    const forma_de_infinitivo_está_inesperado = (sufijos_IndPret_p3_de_infinitivo && ((sufijos_IndPret_p3_de_infinitivo?.length > 1) || (typeof sufijos_IndPret_p3_de_infinitivo[0] !== "string")));
    if (forma_de_infinitivo_está_inesperado) {
        throw new Error(`expected only one form de_infinitivo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_infinitivo)}`);
    }
    const sufjio_de_modelo_está_inesperado = (sufijos_IndPret_p3_de_modelo && ((sufijos_IndPret_p3_de_modelo?.length > 1) || (typeof sufijos_IndPret_p3_de_modelo[0] !== "string")));
    if (sufjio_de_modelo_está_inesperado) {
        throw new Error(`expected only one suffix de_modelo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_modelo)}`);
    }
    const sufjio_de_infinitivo_está_inesperado = (sufijos_IndPret_p3_de_infinitivo && ((sufijos_IndPret_p3_de_infinitivo?.length > 1) || (typeof sufijos_IndPret_p3_de_infinitivo[0] !== "string")));
    if (sufjio_de_infinitivo_está_inesperado) {
        throw new Error(`expected only one suffix de_infinitivo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_infinitivo)}`);
    }
    const forma_sin_prefijos_de_clase = formas_IndPret_p3_de_infinitivo?.[0] || formas_IndPret_p3_de_modelo?.[0];
    let form = forma_sin_prefijos_de_clase && aplicaPrefijosClaseConjugacional(forma_sin_prefijos_de_clase, prefixes);
    form = form?.replace("/", "");
    const suffix = sufijos_IndPret_p3_de_infinitivo?.[0] || sufijos_IndPret_p3_de_modelo?.[0];
    return { form, suffix };
}
function añadeReglaSuplicativo(regla, persona, formas_conjugadas, cambios_aplicadas) {
    const temas = [];
    const sufijos = [];
    for (const forma_conjugada of formas_conjugadas) {
        const [tema, sufijo] = getForma(forma_conjugada).split("/");
        temas.push(asFormaConjugada(tema, forma_conjugada));
        sufijos.push(asFormaConjugada(sufijo, forma_conjugada));
    }
    const cambios = { regla, temas, sufijos };
    cambios_aplicadas[persona].push(cambios);
}
export function getLexicalSuplicationForms(conj_and_deriv_rules, mood_tense, cambios_aplicadas) {
    function getSupplicationFromReglasGrupo(reglas_grupo) {
        const lexical_suplications = morphological_rules?.[reglas_grupo]?.excepciones_léxicas?.reglas?.[mood_tense]?.forms;
        if (lexical_suplications) {
            for (const key in lexical_suplications) {
                const persona = key;
                let combined;
                let formas_prefijadas;
                const formas = lexical_suplications[persona];
                if (formas) {
                    const regla = ((reglas_grupo === "de_modelo") ? "suplicativo del modelo" : "suplicativo del infinitivo");
                    añadeReglaSuplicativo(regla, persona, formas, cambios_aplicadas);
                    let prefijadas = applyToFormasConjugadas(formas, (forma) => {
                        if (reglas_grupo === "de_modelo") {
                            const prefijada = aplicaPrefijosClaseConjugacional(forma, prefixes);
                            return prefijada;
                        }
                        else {
                            return forma;
                        }
                    });
                    if (!isValueless(prefijadas)) {
                        añadeReglaSuplicativo("prefijos de clase conjugacional", persona, formas, cambios_aplicadas);
                    }
                    formas_prefijadas = combinaFormasConjugadas(formas, prefijadas);
                    const prefijadas_sin_barras = applyToFormasConjugadas(formas_prefijadas, (forma) => {
                        const sin_barra = forma.replace("/", "");
                        return sin_barra;
                    });
                    const formas_prefijadas_sin_barras = combinaFormasConjugadas(formas_prefijadas, prefijadas_sin_barras);
                    // FIX: remove if this is not used
                    const prefijadas_productivas = aplicaPrefijosProductivosAFormas(formas_prefijadas_sin_barras, prefixes);
                    combined = combinaFormasConjugadas(formas_prefijadas_sin_barras, prefijadas_productivas);
                    suplicaciones[persona] = combined;
                }
                else if (formas === null) {
                    suplicaciones[persona] = null;
                    cambios_aplicadas[persona].push({ regla: "elimina diferencias de vos" });
                }
            }
        }
    }
    const { prefixes, morphological_rules } = conj_and_deriv_rules;
    const suplicaciones = {};
    getSupplicationFromReglasGrupo("de_modelo");
    getSupplicationFromReglasGrupo("de_infinitivo");
    return suplicaciones;
}
export function applyImperativoTú(args) {
    const { conj_and_deriv_rules, mood_tense, formas_casi_finales, cambios_aplicadas } = args;
    if (formas_casi_finales.s2 != null) {
        const { prefixes, morphological_rules } = conj_and_deriv_rules;
        let imperativo_tú = morphological_rules?.de_modelo?.excepciones_léxicas?.imperativo_tú;
        if (imperativo_tú && (mood_tense === "CmdPos")) {
            const productive = prefixes?.productive_prefixes?.join("") || "";
            const nonproductive = prefixes?.nonproductive_prefix || "";
            const prefijo_productivo_y_no = productive + nonproductive;
            const prefijadas_con_barras = applyToFormasConjugadas(imperativo_tú, (forma) => {
                const forma_base = aplicaPrefijosClaseConjugacional(forma, prefixes);
                return prefijo_productivo_y_no + forma_base;
            });
            const formas_prefijadas_con_barras = combinaFormasConjugadas(imperativo_tú, prefijadas_con_barras);
            añadeReglaSuplicativo("imperativo tú", "s2", formas_prefijadas_con_barras, cambios_aplicadas);
            const sin_barras = applyToFormasConjugadas(formas_prefijadas_con_barras, (forma) => {
                const sin_barra = forma?.replace("/", "");
                return sin_barra;
            });
            const formas_sin_barras = combinaFormasConjugadas(formas_prefijadas_con_barras, sin_barras);
            formas_casi_finales.s2 = formas_sin_barras;
        }
    }
}
// Hay varias casos en que Tiene que mantener el estres en la última sílaba:
// - en caso de un verbo derivado, y la forma del imperativo_tú del base tiene solo una sílaba
// FIX clarifica esta parte
// - en caso de termina with a single vowel/dipthong 
// Nota que en el caso de "ir", la único verbo sin temas, no existe derivaciones prefijadas.
const accentable_single_vowel_sylable_regex = /^[^aeiou]+(a|e|i|o|u|ei)[ns]?$/;
const accentable_two_vowel_sylable_regex = /^[^aeiou]+i(o)[ns]?$/;
export function maintainStressOnLastSylable(conj_and_deriv_rules, mood_tense, formas_casi_finales, sufijos, cambios_aplicadas) {
    const { infinitivo, infinitivo_sin_prefijos, morphological_rules } = conj_and_deriv_rules;
    if (infinitivo !== infinitivo_sin_prefijos) {
        const derivations_preserve_stress = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]?.derivations?.preserve_stress_from_base;
        if (derivations_preserve_stress) {
            const prefixes_len = (infinitivo.length - infinitivo_sin_prefijos.length);
            const maintain_stressed_last_sylable = {};
            for (const persona of derivations_preserve_stress) {
                const formas = formas_casi_finales[persona];
                const stressed = applyToFormasConjugadas(formas, (forma) => {
                    const sin_prefijos = forma.slice(prefixes_len);
                    let match = sin_prefijos.match(accentable_single_vowel_sylable_regex);
                    if (!match) {
                        match = sin_prefijos.match(accentable_two_vowel_sylable_regex);
                    }
                    if (match) {
                        const vowels_index = sin_prefijos.indexOf(match[1]) + prefixes_len;
                        // FIX: linguist: how to determine where to place the accent
                        const accented = moveStress(forma, { to: vowels_index });
                        if (accented !== forma) {
                            return accented;
                        }
                    }
                });
                if (!isValueless(stressed)) {
                    const combined = combinaFormasConjugadas(formas, stressed);
                    maintain_stressed_last_sylable[persona] = combined;
                    const sufijos_esperados = [...sufijos[persona]];
                    if ((persona === "s2") && (mood_tense === "CmdPos")) {
                        // allow no suffix
                        sufijos_esperados.push("");
                    }
                    const regla_aplicada = getCambiosPorRegla("estrese última vocal del tema", stressed, sufijos_esperados);
                    cambios_aplicadas[persona].push(regla_aplicada);
                }
            }
            if (Object.keys(maintain_stressed_last_sylable).length > 0) {
                return maintain_stressed_last_sylable;
            }
        }
    }
}
export function getIndPretP3StemOfModel(conj_and_deriv_rules) {
    function getSuffix(suplicative_suffix, tema) {
        if (suplicative_suffix) {
            return suplicative_suffix;
        }
        else {
            if (conj_and_deriv_rules.verb_family === "-ar") {
                return "aron";
            }
            else {
                if (tema.endsWith("j")) {
                    return "eron";
                }
                else {
                    return "ieron";
                }
            }
        }
    }
    const { infinitivo, infinitivo_sin_prefijos, prefixes } = conj_and_deriv_rules;
    // const ancestor_rule_sets = getRegularRules(infinitivo_sin_prefijos, "IndPret", [])
    const suplications = getLexicalSuplications_IndPret3P(conj_and_deriv_rules);
    let final_form;
    if (suplications.form) {
        final_form = suplications.form;
    }
    else {
        const unprefixed_stem = getUnprefixedStemForIndPret3P(conj_and_deriv_rules);
        // // apply prefijos
        // let prefixed_stem = unprefixed_stem
        // if (prefixes?.productive_prefixes || prefixes?.nonproductive_prefix) {
        //     const productive = prefixes.productive_prefixes?.join("") || ""
        //     const nonproductive  = prefixes.nonproductive_prefix || ""
        //     prefixed_stem = productive + nonproductive + unprefixed_stem
        // }
        const suffix = getSuffix(suplications?.suffix, unprefixed_stem);
        const stem_suffixed = unprefixed_stem + suffix;
        const ortografía = getOrthographicChanges_IndPret3P(infinitivo, unprefixed_stem, suffix);
        final_form = ortografía || stem_suffixed;
    }
    const final_stem = final_form.slice(0, -3);
    return final_stem;
}
// Cuáles formas aceptan las formas impersonales.
const formas_por_defecto = {
    natural: {
        admite_personificación: true,
        personas: ["s3"],
        rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"]
    },
    gramatical: {
        admite_personificación: false,
        personas: ["s3", "p3"],
        rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"]
    },
    soler: {
        admite_personificación: false,
        rasgos: ["IndPres", "IndImp", "SubPres", "SubImp"]
    }
};
export function _conjugateVerb(conj_and_deriv_rules, mood_tense) {
    function conjugaciónExiste(morphological_rules, mood_tense) {
        // Hasta 13 abr 2026, no hay verbos de modelos en la tabla verbos_con_cambios_morfológicos con defectos
        const impersonal = morphological_rules?.de_infinitivo?.impersonal;
        if (impersonal) {
            const restricciones = formas_por_defecto[impersonal];
            if (!restricciones.admite_personificación) {
                const rasgos_admitidas = formas_por_defecto[impersonal].rasgos;
                if (rasgos_admitidas) {
                    if (!rasgos_admitidas.includes(mood_tense)) {
                        // rules_applied.push({impersonal: mood_tense})
                        return false;
                    }
                }
            }
        }
        return true;
    }
    function quitarPersonasPersonales(formas_finales, cambios_aplicadas) {
        const impersonal = morphological_rules?.de_infinitivo?.impersonal;
        if (impersonal) {
            const restricciones = formas_por_defecto[impersonal];
            if (!restricciones.admite_personificación) {
                // Ya ha determinado conjugaciónExiste() que mood_tense está admitido
                const personas_admitidas = formas_por_defecto[impersonal].personas;
                if (personas_admitidas) {
                    for (const persona of persons_w_vos) {
                        if (!personas_admitidas.includes(persona)) {
                            formas_finales[persona] = null;
                            cambios_aplicadas[persona].push({ regla: "elimina formas personales" });
                        }
                    }
                }
            }
        }
    }
    function normalizaVos(formas_casi_finales) {
        // only show the "vos" form if it differs from "tú"
        if (formas_casi_finales?.vos == null) {
            delete formas_casi_finales.vos;
        }
        else if (formas_casi_finales.s2 && formas_casi_finales.vos) {
            if (formas_casi_finales.s2[0] === formas_casi_finales.vos[0]) {
                if (formas_casi_finales.s2[1] === formas_casi_finales.vos[1]) {
                    delete formas_casi_finales.vos;
                }
            }
        }
        return formas_casi_finales;
    }
    const { infinitivo, infinitivo_sin_prefijos, prefixes, morphological_rules } = conj_and_deriv_rules;
    const modelo = morphological_rules?.de_modelo?.modelo || morphological_rules?.de_infinitivo?.modelo;
    const impersonal = morphological_rules?.de_modelo?.impersonal || morphological_rules?.de_infinitivo?.impersonal;
    const clase_de_conjugación = prefixes?.clase_de_conjugación;
    let formas_finales = {};
    const cambios_conjugacional = { infinitivo, modo_tiempo: mood_tense, modelo, clase_de_conjugación, impersonal, cambios: { s1: [], s2: [], s3: [], p1: [], p2: [], p3: [], vos: [] } };
    const cambios_aplicadas = cambios_conjugacional.cambios;
    if (conjugaciónExiste(morphological_rules, mood_tense)) {
        const ancestor_rule_sets = getRegularRules(infinitivo_sin_prefijos, mood_tense);
        // resolve suffixes first, as they help determine the forms used by getStems()
        const suffixes = getSuffixes(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, cambios_aplicadas);
        // find the stems, including any prefix changes from the model to the base infinitive, and alternancia_vocálica
        const unprefixed_stems = getUnprefixedStems(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, suffixes, cambios_conjugacional);
        // Este también añada los prefijos de Prefixes.clase_de_conjugación
        applyLexicalExceptionsForStemsAndSuffixes(conj_and_deriv_rules, mood_tense, unprefixed_stems, suffixes, cambios_aplicadas);
        // FIX: determine exactly what the role is of determining prefixes automatically.
        // FIX: this is returning all forms, even unchanged ones
        // const prefixed_stems = aplicaPrefijosProductivos(conj_and_deriv_rules, unprefixed_stems, reglas_aplicadas)
        // const full_stems = accumulateChangedForms({base: unprefixed_stems, updates: prefixed_stems})
        // 8. añadir terminaciones morfológicas
        const full_stems = unprefixed_stems;
        const combined_stems_w_suffixes = appendSuffixesToStems(infinitivo_sin_prefijos, full_stems, suffixes, cambios_aplicadas);
        // 9. ortografía
        // FIX: this is returning all forms, even unchanged ones
        const orthography = getOrthographicChanges(conj_and_deriv_rules.infinitivo, mood_tense, combined_stems_w_suffixes, suffixes, cambios_aplicadas);
        const forms_w_orthoography = accumulateChangedForms({ base: combined_stems_w_suffixes, updates: orthography });
        // 11. Supletivo
        const suplicaciones = getLexicalSuplicationForms(conj_and_deriv_rules, mood_tense, cambios_aplicadas);
        let formas_casi_finales = accumulateChangedForms({ base: forms_w_orthoography, updates: suplicaciones });
        // 10. excepciones léxicas finales
        applyImperativoTú({ conj_and_deriv_rules, mood_tense, formas_casi_finales, cambios_aplicadas });
        if (prefixes) {
            const con_sílabas_finales_estresadas = maintainStressOnLastSylable(conj_and_deriv_rules, mood_tense, formas_casi_finales, suffixes, cambios_aplicadas);
            formas_casi_finales = accumulateChangedForms({ base: formas_casi_finales, updates: con_sílabas_finales_estresadas });
        }
        formas_finales = normalizaVos(formas_casi_finales);
        if (morphological_rules?.de_infinitivo?.impersonal) { // no existe morphological_rules.de_modelo.impersonal
            quitarPersonasPersonales(formas_finales, cambios_aplicadas);
        }
    }
    else {
        formas_finales = null;
    }
    return { forms: formas_finales, cambios_conjugacional };
}
//# sourceMappingURL=conjugate-verb.js.map