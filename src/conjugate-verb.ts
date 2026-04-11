import { MoodTense, VerbRulesApplied, VerbConjugation, VerbConjugationAnnotated, VerbConjugationStems, VerbConjugationSuffixes, FormaConjugada, FormaRestringida } from "."
import { getTemaConAlternanciaVocálica, getTemaConAlternanciaVocálica_IndPret3P } from "./alternancia-vocálica.js"
import { applyToFormaConjugada, applyToFormasConjugadas, assert, combinaFormasConjugadas, isValueless, setStem, vowels } from "./lib.js"
import { findIndexOfStress, moveStress, removeStress, stressed_regex } from "./move-stress.js"
import { aplicaPrefijosClaseConjugacional } from "./prefixes.js"
import { getRegularRules, getRegularSuffixes, VerbAspectRules } from "./regular-verb-rules.js"
import { ConjugationAndDerivationRules, Prefixes, resolveConjugationClass } from "./resolve-conjugation-class.js"
import { getTemaFuturo } from "./tema-futuro.js"
import { getSuffixesForPresenteYo, getTemaPresenteYo } from "./tema-presente-yo.js"
import { getSuffixesForStrongPretérito, getTemaPretérito } from "./tema-pretérito.js"
import { getOrthographicChanges, getOrthographicChanges_IndPret3P } from "./ortografía.js"
import { getAnnotations } from "./verbos-con-cambios-morfológicas.js"


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


export function accumulateChangedForms(base: VerbConjugation, updates: VerbConjugation) : VerbConjugation {
    const accumulated: VerbConjugation = {...base}
    for (const key in updates) {
        const gramatical_person = <keyof VerbConjugation> key
        if (accumulated[gramatical_person] !== null) {
            accumulated[gramatical_person] = updates[gramatical_person]
        }
    }
    return accumulated
}


function getTemasRegulares(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[]) : VerbConjugationStems {
    const {modelo, infinitivo_sin_prefijos, cached_tema_pretérito_p3_de_modelo} = conj_and_deriv_rules
    const use_infinitive = ancestor_rule_sets[0].add_suffix_to_infinitive || ancestor_rule_sets[1]?.add_suffix_to_infinitive
    const add_suffix_to_preterite_p3_stem = ancestor_rule_sets[0].add_suffix_to_preterite_p3_stem || ancestor_rule_sets[1]?.add_suffix_to_preterite_p3_stem
    const stress_last_char_of_p1_stem = ancestor_rule_sets[0].stress_last_char_of_p1_stem || ancestor_rule_sets[1]?.stress_last_char_of_p1_stem
    const stress_last_vowel_of_s123p3_stem = ancestor_rule_sets[0].stress_last_vowel_of_s123p3_stem || ancestor_rule_sets[1]?.stress_last_vowel_of_s123p3_stem
    const stress_last_char_of_vos_stem = ancestor_rule_sets[0].stress_last_char_of_vos_riop_stem || ancestor_rule_sets[1]?.stress_last_char_of_vos_riop_stem
    let stem: string;
    const verbo_base = modelo || infinitivo_sin_prefijos
    if (use_infinitive) {
        stem = removeStress(verbo_base)
    } else if (add_suffix_to_preterite_p3_stem) {
        stem = cached_tema_pretérito_p3_de_modelo
    } else {
        stem = verbo_base.slice(0, -2)
    }
    const temas = setStem([stem])
    if (stress_last_char_of_p1_stem || stress_last_vowel_of_s123p3_stem) {
        const match = stem.match(last_vowel_regex)
        if (! match) {
            throw new Error(`stem=${stem} expected to contain vowel`)
        }
        const index_of_last_vowel = match.index
        const stem_w_stressed_last_vowel = moveStress(stem, {to: index_of_last_vowel})
        const gramatical_persons: (keyof typeof temas)[] = []
        if (stress_last_vowel_of_s123p3_stem) {
            gramatical_persons.push("s1", "s2", "s3", "p3", "vos")
        }
        if (stress_last_char_of_p1_stem) {
            gramatical_persons.push("p1")
        }
        if (stress_last_char_of_vos_stem) {
            gramatical_persons.push("vos")
        }
        for (const gramatical_person of gramatical_persons) {
            temas[gramatical_person] = [stem_w_stressed_last_vowel]            
        }
    }
    return temas
}


// FIX: this seems to obviate VerbAspectModifications.stress_last_char_of_p1_stem
function stressLastSylableOfP1Stem(temas: VerbConjugationStems) {
    const p1_stem = temas.p1[0]
    if (typeof p1_stem !== "string") {
        throw new Error(`p1_stem=${p1_stem} must be a string`)
    }
    const last_index = p1_stem.length - 1
    const restressed = moveStress(p1_stem, {to: last_index})
    temas.p1 = [restressed]
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
export function getUnprefixedStemForIndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules) : string {
    const {modelo, infinitivo_sin_prefijos, prefixes, morphological_rules} = conj_and_deriv_rules
    const reglas = morphological_rules?.de_modelo || morphological_rules?.de_infinitivo
    const tema_pretérito_del_modelo = reglas?.tema_pretérito_del_modelo
    if (tema_pretérito_del_modelo) {
        return tema_pretérito_del_modelo
    } else {
    // find the stems without prefixes
        const base_verb = modelo || infinitivo_sin_prefijos
        const stem = base_verb.slice(0, -2)
        const tema_cambiado = getTemaConAlternanciaVocálica_IndPret3P(conj_and_deriv_rules, stem)
        return tema_cambiado
    }
}



// get the stems of infinitivo_sin_prefijos
export function getUnprefixedStems(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[], suffixes: VerbConjugation, rules_applied: VerbRulesApplied[]) : VerbConjugationStems {
    const {verb_family, infinitivo_sin_prefijos, prefixes, cached_tema_pretérito_p3_de_modelo, morphological_rules} = conj_and_deriv_rules
    let temas_de_modo_tiempo: VerbConjugationStems
    // find the stems without prefixes
    switch (mood_tense) {
    case "IndPret":
        temas_de_modo_tiempo = getTemaPretérito(conj_and_deriv_rules, mood_tense)
        break;
    case "SubImp":
    case "SubFut":
        {
            // add_suffix_to_preterite_p3_stem
            if (cached_tema_pretérito_p3_de_modelo) {
                temas_de_modo_tiempo = setStem([cached_tema_pretérito_p3_de_modelo])
                stressLastSylableOfP1Stem(temas_de_modo_tiempo)
            }
        }
        break;
    case "IndFut":
    case "IndCond":
        temas_de_modo_tiempo = getTemaFuturo(conj_and_deriv_rules, mood_tense)
        break;
    case "IndPres":
    case "SubPres":
    case "CmdPos":
        {
            // const do_use_alternancias = true    //!tema_pretérito_del_modelo
            temas_de_modo_tiempo = getTemaPresenteYo(conj_and_deriv_rules, mood_tense)
            // temas = accumulateChangedForms(temas_alternancia, temas_yo)
        }
        break;
    }
    const temas_regulares = getTemasRegulares(conj_and_deriv_rules, mood_tense, ancestor_rule_sets)
    const temas_prefijadas_clase = applicaPrefijosClaseConjugacional(conj_and_deriv_rules, temas_regulares, rules_applied)
    const temas_con_prefijadas_clase = accumulateChangedForms(temas_regulares, temas_prefijadas_clase)
    const temas_con_alternancias = getTemaConAlternanciaVocálica(conj_and_deriv_rules, mood_tense, temas_con_prefijadas_clase)
    const regulares_con_alternancias = accumulateChangedForms(temas_con_prefijadas_clase, temas_con_alternancias)
    const temas_de_modo_tiempo_prefijadas_clase = applicaPrefijosClaseConjugacional(conj_and_deriv_rules, temas_de_modo_tiempo, rules_applied)
    const temas_de_modo_tiempo_con_prefijos_clase = accumulateChangedForms(temas_de_modo_tiempo, temas_de_modo_tiempo_prefijadas_clase)
    const temas_finales_sin_prefijos_productivos = accumulateChangedForms(regulares_con_alternancias, temas_de_modo_tiempo_con_prefijos_clase)
    rules_applied.push({stems: temas_finales_sin_prefijos_productivos})
    return temas_finales_sin_prefijos_productivos
}


// add any prefixes to the stems
function applicaPrefijosClaseConjugacional(conj_and_deriv_rules: ConjugationAndDerivationRules, unprefixed_stems: VerbConjugation, rules_applied: VerbRulesApplied[]) : VerbConjugation | undefined {
    function getPrefijosClaseConjugacional() {
        const prefijos_clase_conjugacional: VerbConjugation = {}
        if (prefixes.clase_de_conjugación) {
            const grammatical_persons = Object.keys(unprefixed_stems)
            for (const grammatical_person of grammatical_persons) {
                const formas_conjugadas = <FormaConjugada[]> unprefixed_stems[grammatical_person]
                const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                    const prefijada = aplicaPrefijosClaseConjugacional(forma, prefixes)
                    return prefijada
                })
                if (!isValueless(formas_conjugadas_prefijadas)) {
                    prefijos_clase_conjugacional[grammatical_person] = formas_conjugadas_prefijadas
                }
            }
        }
        return prefijos_clase_conjugacional
    }
    const {prefixes} = conj_and_deriv_rules
    if (unprefixed_stems && prefixes) {
        const prefijos_clase_conjugacional = getPrefijosClaseConjugacional()
        let updated_stems = accumulateChangedForms(unprefixed_stems, prefijos_clase_conjugacional)
        if (Object.keys(prefijos_clase_conjugacional).length > 0) {
            rules_applied.push({prefijos_clase_conjugacional})
        }
        return updated_stems
    }
}


export function aplicaPrefijosProductivosAFormas(formas_conjugadas: FormaConjugada[], prefixes: Prefixes) {
    if (prefixes) {
        const {productive_prefixes, nonproductive_prefix} = prefixes
        if (productive_prefixes || nonproductive_prefix) {
            const productive = productive_prefixes?.join("") || ""
            const nonproductive  = nonproductive_prefix || ""
            const prefix = productive + nonproductive 
            if (prefix.length > 0) {
                const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                    return prefix + forma
                })
                // No necesesitamos llamar combinaFormasConjugadas(), porque (prefix.length > 0)
                return formas_conjugadas_prefijadas
            }
        }
    }
}

// add any prefixes to the stems
function aplicaPrefijosProductivos(conj_and_deriv_rules: ConjugationAndDerivationRules, unprefixed_stems: VerbConjugation, rules_applied: VerbRulesApplied[]) : VerbConjugation | undefined {
    function aplicaPrefijosProductivosYNo(stems: VerbConjugation) : VerbConjugation {
        const {productive_prefixes, nonproductive_prefix} = prefixes
        const prefijos_productivos_y_no: VerbConjugation = {}
        if (prefixes?.productive_prefixes || prefixes?.nonproductive_prefix) {
            const productive = productive_prefixes?.join("") || ""
            const nonproductive  = nonproductive_prefix || ""
            const prefix = productive + nonproductive 
            if (prefix.length > 0) {
                const grammatical_persons = Object.keys(stems)
                for (const grammatical_person of grammatical_persons) {
                    const formas_conjugadas = <FormaConjugada[]> stems[grammatical_person]
                    const formas_conjugadas_prefijadas = applyToFormasConjugadas(formas_conjugadas, (forma) => {
                        return prefix + forma
                    })
                    // No necesesitamos llamar combinaFormasConjugadas(), porque (prefix.length > 0)
                    prefijos_productivos_y_no[grammatical_person] = formas_conjugadas_prefijadas
                }
            }
        }
        return prefijos_productivos_y_no
    }
    const {prefixes} = conj_and_deriv_rules
    if (prefixes) {
        const prefijos_productivos_y_no = aplicaPrefijosProductivosYNo(unprefixed_stems)
        if (Object.keys(prefijos_productivos_y_no).length > 0) {
            unprefixed_stems = accumulateChangedForms(unprefixed_stems, prefijos_productivos_y_no)
            rules_applied.push({prefijos_productivos_y_no})
        }
        return unprefixed_stems
    }
}


export function conjugateVerb(infinitivo: string, mood_tense: MoodTense): VerbConjugationAnnotated | undefined {
    console.log(`conjugateVerb(${infinitivo}, ${mood_tense})`)
    const conj_and_deriv_rules = resolveConjugationClass(infinitivo)
    if (!conj_and_deriv_rules) {
        return undefined
    }
    const modelo = conj_and_deriv_rules.modelo
    const notes = getAnnotations(infinitivo, modelo, mood_tense)
    const {forms, rules_applied} = _conjugateVerb(conj_and_deriv_rules, mood_tense)
    notes.rules_applied = rules_applied
    return { notes, forms }
}


// The regular_suffixes determine the forms. For example, if the suffix is missing for "s1", then that form is not produced.
// This also corrects stress accents according to standard Spanish stress rules.
export function appendSuffixesToStems(infinitivo: string, stems: VerbConjugationStems, regular_suffixes: VerbConjugationSuffixes, rules_applied: VerbRulesApplied[]) {
    function appendPreferingStressFromSuffix(stem: string, suffix: string) {
        if (suffix.match(stressed_regex)) {
            const unstressed_stem = removeStress(stem)
            return unstressed_stem + suffix
        } else {
            return stem + suffix
        }
    }
    function combineStemWithSuffixes(stem_forma: FormaConjugada, suffix_forms: FormaConjugada[]) : FormaConjugada[] {
        // es posible que el tema no existe, como para "ir"
        const stem = ((typeof stem_forma === "string") ? stem_forma : stem_forma.forma)
        const w_suffixes = applyToFormasConjugadas(suffix_forms, (suffix) => {
            let stem_w_suffix = appendPreferingStressFromSuffix(stem, suffix)
            return stem_w_suffix
        })
        const combined = combinaFormasConjugadas(suffix_forms, w_suffixes)
        return combined
    }
    function combineStemsWithSuffix(stem_forms: FormaConjugada[], suffix_form: FormaConjugada) : FormaConjugada[] {
        const suffix = ((typeof suffix_form === "string") ? suffix_form : suffix_form.forma)
        const combined = applyToFormasConjugadas(stem_forms, (stem) => {
            let stem_w_suffix = appendPreferingStressFromSuffix(stem, suffix)
            return stem_w_suffix
        })
        return combined
    }
    // 
    function combine2StemsWith2Suffixes(stem_forms: FormaConjugada[], suffix_forms: FormaConjugada[]) : FormaConjugada[] {
        // if the stem forms are FormaRestingida, then they are paired sequentially: stem_forms[0]+suffix_forms[0],stem_forms[1]+suffix_forms[1],etc.
        // but if they are strings, then they are paired as a matrix, that is all possible pairs: stem_forms[0]+suffix_forms[0], stem_forms[0]+suffix_forms[1],stem_forms[1]+suffix_forms[0],etc.
        const tipo_combinacional = ((typeof stem_forms[0] === "string") && (typeof stem_forms[1] === "string")) ? "matrice" : "secuencial"
        const combined: FormaConjugada[] = []
        if (tipo_combinacional === "secuencial") {
            for (let i = 0 ; i < stem_forms.length ; ++i) {
                const stem_forma_conjugada = stem_forms[i]
                const suffix_forma_conjugada = suffix_forms[i]
                if ((typeof stem_forma_conjugada === "string") && (typeof suffix_forma_conjugada === "string")) {
                    let stem_w_suffix = appendPreferingStressFromSuffix(stem_forma_conjugada, suffix_forma_conjugada)
                    combined[i] = stem_w_suffix
                } else if ((typeof stem_forma_conjugada === "object") && (typeof suffix_forma_conjugada === "object")) {
                    if (stem_forma_conjugada.uso !== suffix_forma_conjugada.uso) {
                        throw new Error(`expected usos of multiple stems to match types of mulltiple suffixes, stems=${stem_forma_conjugada} suffixes=${suffix_forma_conjugada}`)
                    }
                    let forma = appendPreferingStressFromSuffix(stem_forma_conjugada.forma, suffix_forma_conjugada.forma)
                    const uso = stem_forma_conjugada.uso
                    combined[i] = {forma, uso}
                } else {
                    throw new Error(`expected types of multiple stems to match types of mulltiple suffixes, stems=${JSON.stringify(stem_forms)} suffixes=${JSON.stringify(suffix_forms)}`)
                }
            }
        } else {
            // It's possible that this is never used, if there are explicit excepciones_léxicas specified 
            for (let stem_i = 0 ; stem_i < stem_forms.length ; ++stem_i) {
                const stem = stem_forms[stem_i]
                if (typeof stem !== "string") {
                    throw new Error(`For matrix type combination, expect stem to be a string, stems=${JSON.stringify(stem_forms)} suffixes=${JSON.stringify(suffix_forms)}`)
                }
                const formas_combinadas = applyToFormasConjugadas(suffix_forms, (suffix: string) => {
                    let stem_w_suffix = appendPreferingStressFromSuffix(stem, suffix)
                    return stem_w_suffix
                })
                combined.push(...formas_combinadas)
            }
        }
        return combined
    }
    let combined_stems_w_suffixes: VerbConjugation = {}
    const suffix_keys = <(keyof VerbConjugationSuffixes)[]> Object.keys(regular_suffixes)
    // if (stem_keys.length !== suffix_keys.length) {
    //     throw new Error(`infinitivo=${infinitivo} has stem_keys=${stem_keys} !== suffix_keys=${suffix_keys}`)
    // }
    for (const key of suffix_keys) {
        const gramatical_person = key as keyof typeof stems
        let stem_forms = stems[gramatical_person]
        const suffix_forms = regular_suffixes[gramatical_person]
        if (stem_forms && suffix_forms) {
            if ((stem_forms.length === 2) && (stem_forms[0] === stem_forms[1])) {
                stem_forms = [stem_forms[0]]
            }
            if (stem_forms.length === 1) {
                let stem = stem_forms[0]
                if (gramatical_person === "vos") {
                    const stem_s2 = stems.s2[0]
                    stem = stem || stem_s2
                    if (!stem && (stems.s2.length != 1)) {
                        // FIX: remove this if it no longer occurs...
                        throw new Error(`document exactly when this occurs `)
                    }
                }
                const combined = combineStemWithSuffixes(stem, suffix_forms)
                combined_stems_w_suffixes[gramatical_person] = combined
            } else {
                if (suffix_forms.length == 1) {
                    const combined = combineStemsWithSuffix(stem_forms, suffix_forms[0])
                    combined_stems_w_suffixes[gramatical_person] = combined
                } else if ((stem_forms.length == 2) && (suffix_forms.length == 2)) {
                    // const tipo_combinacional = (gramatical_person === "vos") ? "matrice" : "secuencial"
                    const combined = combine2StemsWith2Suffixes(stem_forms, suffix_forms)
                    combined_stems_w_suffixes[gramatical_person] = combined
                } else {
                    throw new Error(`FIX: ${infinitivo},${gramatical_person}: support multiple stems=${JSON.stringify(stem_forms)} with mulltiple suffixes=${JSON.stringify(suffix_forms)}`)
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
    rules_applied.push({combined_stems_w_suffixes})
    return combined_stems_w_suffixes
}


function collectSuffixSets(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) {
    const suffix_sets = []
    const {morphological_rules} = conj_and_deriv_rules
    if (morphological_rules?.de_modelo) {
        const suffixes = {...morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]?.suffixes}
        if (suffixes) {
            suffix_sets.push({...suffixes})
        }
    }
    if (morphological_rules?.de_infinitivo) {
        const suffixes = {...morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.[mood_tense]?.suffixes}
        if (suffixes) {
            suffix_sets.push({...suffixes})
        }
    }
    return suffix_sets
}


function getSuffixesForLexicalExceptions(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, forms_to_stress_last_char_of_stem?: (keyof VerbConjugation)[]) : VerbConjugationSuffixes {
    const exceptional_suffixes_for_mood_tense: VerbConjugationSuffixes = {}
    // Añade el estrés a las temas de los sufijos que lo exigen 
    if (forms_to_stress_last_char_of_stem?.length > 0) {
        for (const gramatical_person of forms_to_stress_last_char_of_stem) {
            const exceptional_suffixes = exceptional_suffixes_for_mood_tense[gramatical_person]
            if (exceptional_suffixes) {
                const changed_forms = applyToFormasConjugadas(exceptional_suffixes, (exceptional_suffix: string) => {
                    const unstressed = removeStress(exceptional_suffix)
                    return unstressed
                })
                const combined = combinaFormasConjugadas(exceptional_suffixes, changed_forms)
                exceptional_suffixes_for_mood_tense[gramatical_person] = combined           
            }
        }
    }
    // Recoge los sufijos excepcionales
    const suffix_sets = collectSuffixSets(conj_and_deriv_rules, mood_tense)
    for (const suffix_set of suffix_sets) {
        for (const gramatical_person in suffix_set) {
            exceptional_suffixes_for_mood_tense[gramatical_person] = suffix_set[gramatical_person]
        }
    }
    return exceptional_suffixes_for_mood_tense
}


function getPersonsTosStressLastCharOfStem(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) : (keyof VerbConjugationStems)[] {
    const lexical_exceptions_suffixes_de_modelo = conj_and_deriv_rules?.morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]
    const lexical_exceptions_suffixes_de_infinitivo = conj_and_deriv_rules?.morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.[mood_tense]
    const stress_last_char_of_p1_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_char_of_p1_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_char_of_p1_stem
    const stress_last_vowel_of_s123p3_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_vowel_of_s123p3_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_vowel_of_s123p3_stem
    const stress_last_char_of_vos_riop_stem = lexical_exceptions_suffixes_de_modelo?.stress_last_char_of_vos_riop_stem || lexical_exceptions_suffixes_de_infinitivo?.stress_last_char_of_vos_riop_stem
    if (stress_last_char_of_p1_stem || stress_last_vowel_of_s123p3_stem || stress_last_char_of_vos_riop_stem) {
        const forms_to_stress_last_char_of_stem: (keyof VerbConjugationStems)[] = []
        if (stress_last_vowel_of_s123p3_stem) {
            forms_to_stress_last_char_of_stem.push("s1", "s2", "s3", "p3")
        }
        if (stress_last_char_of_p1_stem) {
            forms_to_stress_last_char_of_stem.push("p1")
        }
        if (stress_last_char_of_vos_riop_stem) {
            forms_to_stress_last_char_of_stem.push("vos")
        }
        return forms_to_stress_last_char_of_stem
    }
}


// /[aáeéiíoóuúü]([^aáeéiíoóuúü]*)$/u

const last_vowel_regex = new RegExp(`[${vowels}]([^${vowels}]*)$`, "u")

function getStemsForLexicalExceptions(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, stems: VerbConjugationStems, forms_to_stress_last_char_of_stem?: (keyof VerbConjugation)[]) : VerbConjugationStems {
    let exceptional_stems : VerbConjugationStems = {}
    const {morphological_rules, prefixes, cached_tema_pretérito_p3_de_modelo} = conj_and_deriv_rules
    const lexical_exceptions_for_stems_for_mood_tense = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]
    if (lexical_exceptions_for_stems_for_mood_tense?.tema) {
        const temas_excepcionales = lexical_exceptions_for_stems_for_mood_tense.tema
        const prefijados = applyToFormasConjugadas(temas_excepcionales, (tema: string) => {
            const tema_base = aplicaPrefijosClaseConjugacional(tema, prefixes)
            return tema_base
        })
        const temas_base = combinaFormasConjugadas(temas_excepcionales, prefijados)
        exceptional_stems = setStem(temas_base)
    } else {
        const add_suffix_to_preterite_p3_stem = lexical_exceptions_for_stems_for_mood_tense?.add_suffix_to_preterite_p3_stem
        if (add_suffix_to_preterite_p3_stem) {
            const stem = cached_tema_pretérito_p3_de_modelo
            const tema_con_cambios_clase_conjugcional = aplicaPrefijosClaseConjugacional(stem, prefixes)
            exceptional_stems = setStem([tema_con_cambios_clase_conjugcional])
        }
    }
    if (forms_to_stress_last_char_of_stem?.length > 0) {
        for (const gramatical_person of forms_to_stress_last_char_of_stem) {
            const stems_to_stress = exceptional_stems[gramatical_person] || stems[gramatical_person]
            const changed_forms = applyToFormasConjugadas(stems_to_stress, (stem: string) => {
                const match = stem.match(last_vowel_regex)
                if (! match) {
                    throw new Error(`stem=${stem} expected to contain vowel`)
                }
                const index_of_last_vowel = match.index
                const stem_w_stressed_last_vowel = moveStress(stem, {to: index_of_last_vowel})
                return stem_w_stressed_last_vowel
            })
            const combined = combinaFormasConjugadas(stems_to_stress, changed_forms)
            exceptional_stems[gramatical_person] = combined           
        }
    }
    return exceptional_stems
}


export function getSuffixes(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[], rules_applied: VerbRulesApplied[]) {
    const regular_suffixes = getRegularSuffixes(conj_and_deriv_rules.infinitivo_sin_prefijos, mood_tense, ancestor_rule_sets)
    const strong_pretérito_suffixes = getSuffixesForStrongPretérito(conj_and_deriv_rules, mood_tense)
    const presente_yo_suffixes = getSuffixesForPresenteYo(conj_and_deriv_rules, mood_tense)
    const regular_w_pretérito = accumulateChangedForms(regular_suffixes, strong_pretérito_suffixes)
    const suffixes = accumulateChangedForms(regular_w_pretérito, presente_yo_suffixes)
    rules_applied.push({suffixes})
    return suffixes
}


export function getSuffixFor3p(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[]) {
    let accumulated_suffixes: VerbConjugationSuffixes = {...ancestor_rule_sets[0].suffixes}
    const regular_suffixes = getRegularSuffixes(conj_and_deriv_rules.infinitivo_sin_prefijos, mood_tense, ancestor_rule_sets)
    const strong_pretérito_suffixes = getSuffixesForStrongPretérito(conj_and_deriv_rules, mood_tense)
    const suffixes = {p3: strong_pretérito_suffixes?.p3 || regular_suffixes.p3 }
    return suffixes
}


export function applyLexicalExceptions(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, unprefixed_stems: VerbConjugation, suffixes: VerbConjugation, rules_and_prefixes: VerbRulesApplied[]) : void {
    const rules_applied : VerbRulesApplied[] = []
    const forms_to_stress_last_char_of_stem = getPersonsTosStressLastCharOfStem(conj_and_deriv_rules, mood_tense)
    const lexical_exceptions_stems = getStemsForLexicalExceptions(conj_and_deriv_rules, mood_tense, unprefixed_stems, forms_to_stress_last_char_of_stem)
    for (const key in lexical_exceptions_stems) {
        const grammatical_person = <keyof typeof unprefixed_stems> key
        unprefixed_stems[grammatical_person] = lexical_exceptions_stems[grammatical_person]
    }
    if (Object.keys(lexical_exceptions_stems).length > 0) {
        rules_applied.push({lexical_exceptions_stems})
    }
    const lexical_exceptions_suffixes = getSuffixesForLexicalExceptions(conj_and_deriv_rules, mood_tense, forms_to_stress_last_char_of_stem)
    for (const key in lexical_exceptions_suffixes) {
        const grammatical_person = <keyof typeof lexical_exceptions_suffixes> key
        suffixes[grammatical_person] = lexical_exceptions_suffixes[grammatical_person]
    }
    if (Object.keys(lexical_exceptions_stems).length > 0) {
        rules_applied.push({lexical_exceptions_suffixes})
    }
}


export function getLexicalSuplications_IndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules) : {form?: string, suffix?: string} {
    const {infinitivo, prefixes, morphological_rules} = conj_and_deriv_rules
    const formas_IndPret_p3_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.IndPret?.forms?.p3
    const formas_IndPret_p3_de_infinitivo = morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.IndPret?.forms?.p3
    const sufijos_IndPret_p3_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.IndPret?.suffixes?.p3
    const sufijos_IndPret_p3_de_infinitivo = morphological_rules?.de_infinitivo?.excepciones_léxicas?.reglas?.IndPret?.suffixes?.p3
    const forma_de_modelo_está_inesperado = (formas_IndPret_p3_de_modelo && ((formas_IndPret_p3_de_modelo?.length > 1) || (typeof formas_IndPret_p3_de_modelo[0] !== "string")))
    if (forma_de_modelo_está_inesperado) {
        throw new Error(`expected only one form de_modelo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(formas_IndPret_p3_de_modelo)}`)
    }
    const forma_de_infinitivo_está_inesperado = (sufijos_IndPret_p3_de_infinitivo && ((sufijos_IndPret_p3_de_infinitivo?.length > 1) || (typeof sufijos_IndPret_p3_de_infinitivo[0] !== "string")))
    if (forma_de_infinitivo_está_inesperado) {
        throw new Error(`expected only one form de_infinitivo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_infinitivo)}`)
    }
    const sufjio_de_modelo_está_inesperado = (sufijos_IndPret_p3_de_modelo && ((sufijos_IndPret_p3_de_modelo?.length > 1) || (typeof sufijos_IndPret_p3_de_modelo[0] !== "string")))
    if (sufjio_de_modelo_está_inesperado) {
        throw new Error(`expected only one suffix de_modelo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_modelo)}`)
    }
    const sufjio_de_infinitivo_está_inesperado = (sufijos_IndPret_p3_de_infinitivo && ((sufijos_IndPret_p3_de_infinitivo?.length > 1) || (typeof sufijos_IndPret_p3_de_infinitivo[0] !== "string")))
    if (sufjio_de_infinitivo_está_inesperado) {
        throw new Error(`expected only one suffix de_infinitivo of type string for ${infinitivo},IndPret,p3=${JSON.stringify(sufijos_IndPret_p3_de_infinitivo)}`)
    }
    const forma_sin_prefijos_de_clase = <string> formas_IndPret_p3_de_infinitivo?.[0] || <string> formas_IndPret_p3_de_modelo?.[0]
    const form = forma_sin_prefijos_de_clase && aplicaPrefijosClaseConjugacional(forma_sin_prefijos_de_clase, prefixes)
    const suffix = <string> sufijos_IndPret_p3_de_infinitivo?.[0] || <string> sufijos_IndPret_p3_de_modelo?.[0]
    return {form, suffix}
}


export function getLexicalSuplications(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, rules_applied: VerbRulesApplied[]) : VerbConjugation{
    const {prefixes, morphological_rules} = conj_and_deriv_rules
    const suplicaciones : VerbConjugation = {}
    const lexical_suplications_de_modelo = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]?.forms
    if (lexical_suplications_de_modelo) {
        for (const key in lexical_suplications_de_modelo) {
            const grammatical_person = <keyof VerbConjugation> key
            const formas_modelo = lexical_suplications_de_modelo[grammatical_person]
            const w_prefijos = applyToFormasConjugadas(formas_modelo, (forma) => {
                const tema_base = aplicaPrefijosClaseConjugacional(forma, prefixes)
                return tema_base
            })
            const formas_base = combinaFormasConjugadas(formas_modelo, w_prefijos)
            const formas_prefijadas = aplicaPrefijosProductivosAFormas(formas_base, prefixes)
            const combined = combinaFormasConjugadas(formas_base, formas_prefijadas)
            suplicaciones[grammatical_person] = combined
        }
    }
    if (Object.keys(suplicaciones).length > 0) {
        rules_applied.push({suplicaciones})
    }
    return suplicaciones
}


export function applyImperativoTú(args: {conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, formas_casi_finales: VerbConjugation, rules_applied: VerbRulesApplied[]}) : void {
    const {conj_and_deriv_rules, mood_tense, formas_casi_finales, rules_applied} = args
    const {prefixes, morphological_rules} = conj_and_deriv_rules
    let imperativo_tú = morphological_rules?.de_modelo?.excepciones_léxicas?.imperativo_tú
    if (imperativo_tú && (mood_tense === "CmdPos")) {
        const productive = prefixes?.productive_prefixes?.join("") || ""
        const nonproductive  = prefixes?.nonproductive_prefix || ""
        const prefijo_productivo_y_no = productive + nonproductive 
        const formas_base = applyToFormasConjugadas(imperativo_tú, (forma) => {
            const tema_base = aplicaPrefijosClaseConjugacional(forma, prefixes)
            return prefijo_productivo_y_no + tema_base
        })
        const combined = combinaFormasConjugadas(imperativo_tú, formas_base)
        formas_casi_finales.s2 = combined
        rules_applied.push({imperativo_tú: {s2: combined}})
    }
}


// Hay varias casos en que Tiene que mantener el estres en la última sílaba:
// - en caso de un verbo derivado, y la forma del imperativo_tú del base tiene solo una sílaba
// FIX clarifica esta parte
// - en caso de termina with a single vowel/dipthong 
// Nota que en el caso de "ir", la único verbo sin temas, no existe derivaciones prefijadas.

const accentable_single_vowel_sylable_regex = /^[^aeiou]+(a|e|i|o|u|ei)[ns]?$/
const accentable_two_vowel_sylable_regex = /^[^aeiou]+i(o)[ns]?$/


export function maintainStressOnLastSylable(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, formas_casi_finales: VerbConjugation, rules_applied: VerbRulesApplied[]) {
    const {infinitivo, infinitivo_sin_prefijos, morphological_rules} = conj_and_deriv_rules
    if (infinitivo !== infinitivo_sin_prefijos) {
        const derivations_preserve_stress = morphological_rules?.de_modelo?.excepciones_léxicas?.reglas?.[mood_tense]?.derivations?.preserve_stress_from_base
        if (derivations_preserve_stress) {
            const prefixes_len = (infinitivo.length - infinitivo_sin_prefijos.length)
            const maintain_stressed_last_sylable: VerbConjugation = {}
            for (const grammatical_person of derivations_preserve_stress) {
                const formas = formas_casi_finales[grammatical_person]
                const stressed = applyToFormasConjugadas(formas, (forma) => {
                    const sin_prefijos = forma.slice(prefixes_len)
                    let match = sin_prefijos.match(accentable_single_vowel_sylable_regex)
                    if (!match) {
                        match = sin_prefijos.match(accentable_two_vowel_sylable_regex)
                    }
                    if (match) {
                        const vowels_index = sin_prefijos.indexOf(match[1]) + prefixes_len
                        // FIX: linguist: how to determine where to place the accent
                        const accented = moveStress(forma, {to: vowels_index})
                        if (accented !== forma) {
                            return accented
                        }
                    }
                })
                if (!isValueless(stressed)) {
                    const combined = combinaFormasConjugadas(formas, stressed)
                    maintain_stressed_last_sylable[grammatical_person] = combined
                }
            }
            if (Object.keys(maintain_stressed_last_sylable).length > 0) {
                rules_applied.push({maintain_stressed_last_sylable})
                return maintain_stressed_last_sylable
            }
        }
    }
}


interface ConjugationResult {
    forms: VerbConjugation, 
    rules_applied: VerbRulesApplied[]
}


export function getIndPretP3StemOfModel(conj_and_deriv_rules: ConjugationAndDerivationRules): string {
    function getSuffix(suplicative_suffix: string, tema: string) {
        if (suplicative_suffix) {
            return suplicative_suffix
        } else {
            if (conj_and_deriv_rules.verb_family === "-ar") {
                return "aron"
            } else {
                if (tema.endsWith("j")) {
                    return  "eron"
                } else {
                    return  "ieron"
                }
            }
        }
    }
    const {infinitivo, infinitivo_sin_prefijos, prefixes} = conj_and_deriv_rules
    // const ancestor_rule_sets = getRegularRules(infinitivo_sin_prefijos, "IndPret", [])
    const suplications = getLexicalSuplications_IndPret3P(conj_and_deriv_rules)
    let final_form: string
    if (suplications.form) {
        final_form = suplications.form
    } else {
        const unprefixed_stem = getUnprefixedStemForIndPret3P(conj_and_deriv_rules)
        // // apply prefijos
        // let prefixed_stem = unprefixed_stem
        // if (prefixes?.productive_prefixes || prefixes?.nonproductive_prefix) {
        //     const productive = prefixes.productive_prefixes?.join("") || ""
        //     const nonproductive  = prefixes.nonproductive_prefix || ""
        //     prefixed_stem = productive + nonproductive + unprefixed_stem
        // }
        const suffix = getSuffix(suplications?.suffix, unprefixed_stem)
        const stem_suffixed = unprefixed_stem + suffix     
        const ortografía = getOrthographicChanges_IndPret3P(infinitivo, stem_suffixed)
        final_form = ortografía || stem_suffixed
    }
    const final_stem = final_form.slice(0, -3)
    return final_stem
}


export function _conjugateVerb(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense): ConjugationResult {
    function normalizaVos(formas_casi_finales: VerbConjugation) {
        // only show the "vos" form if it differs from "tú"
        if (formas_casi_finales?.vos === null) {
            delete formas_casi_finales.vos
        } else if (formas_casi_finales.s2[0] === formas_casi_finales?.vos?.[0]) {
            if (formas_casi_finales.s2[1] === formas_casi_finales?.vos?.[1]) {
                delete formas_casi_finales.vos
            }
        }
        return formas_casi_finales
    }

    const {infinitivo_sin_prefijos, prefixes} = conj_and_deriv_rules
    const rules_applied: VerbRulesApplied[] = []
    const ancestor_rule_sets = getRegularRules(infinitivo_sin_prefijos, mood_tense, rules_applied)
    // resolve suffixes first, as they help determine the forms used by getStems()
    const suffixes = getSuffixes(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, rules_applied)
    // find the stems, including any prefix changes from the model to the base infinitive
    const unprefixed_stems = getUnprefixedStems(conj_and_deriv_rules, mood_tense, ancestor_rule_sets, suffixes, rules_applied)
    // Este también añada los prefijos de Prefixes.clase_de_conjugación
    applyLexicalExceptions(conj_and_deriv_rules, mood_tense, unprefixed_stems, suffixes, rules_applied) 
    // FIX: this is returning all forms, even unchanged ones
    const prefixed_stems = aplicaPrefijosProductivos(conj_and_deriv_rules, unprefixed_stems, rules_applied)
    const full_stems = accumulateChangedForms(unprefixed_stems, prefixed_stems)
    // 8. añadir terminaciones morfológicas
    const combined_stems_w_suffixes = appendSuffixesToStems(infinitivo_sin_prefijos, full_stems, suffixes, rules_applied)
    // 9. ortografía
    // FIX: this is returning all forms, even unchanged ones
    const orthography = getOrthographicChanges(conj_and_deriv_rules.infinitivo, mood_tense, combined_stems_w_suffixes, suffixes, rules_applied)
    const forms_w_orthoography = accumulateChangedForms(combined_stems_w_suffixes, orthography)
    // 11. Supletivo
    const suplicaciones = getLexicalSuplications(conj_and_deriv_rules, mood_tense, rules_applied) 
    let formas_casi_finales = accumulateChangedForms(forms_w_orthoography, suplicaciones)
    // 10. excepciones léxicas finales
    applyImperativoTú({conj_and_deriv_rules, mood_tense, formas_casi_finales, rules_applied})
    if (prefixes) {
        const con_sílabas_finales_estresadas = maintainStressOnLastSylable(conj_and_deriv_rules, mood_tense, formas_casi_finales, rules_applied)
        formas_casi_finales = accumulateChangedForms(formas_casi_finales, con_sílabas_finales_estresadas)
    }
    const formas_finales = normalizaVos(formas_casi_finales)
    return {forms: formas_finales, rules_applied}
}

