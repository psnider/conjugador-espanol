import { _conjugateVerb } from "./conjugate-verb.js";
import { findProductiveVerbPrefix } from "./prefixes.js";
import { getInfinitiveClass } from "./regular-verb-rules.js";
import { verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas.js";
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
const descreer_Prefixes = {
    productive_prefixes: ["des"],
    nonproductive_prefix: undefined,
    clase_de_conjugación: {
        prefijo_aditivo: "cr",
        prefijo_sustractivo: "l",
    }
};
// e.g.: descreer: 
var descreer = {
    infinitivo: "descreer",
    infinitivo_sin_prefijos: "creer",
    verb_family: "-er",
    prefixes: descreer_Prefixes,
    // copiado de verbos_con_cambios_morfológicas.leer
    morphological_rules: {
        combinados: { clase_conjugacional: "-eer", modelo: "leer" }
    }
};
// The minimum length of a verb that might have prefixes.
// Segun ChatGPT, hay solo un verbo de largo 2, "ir", que no puede tener prefijos.
// y solo hay estos de largo 3: dar, ser, ver, oír
const MIN_BASE_VERB_LENGTH = 3;
// These are regular.
// NOTE: If an irregular form is found, the code must be updated.
const verbs_with_false_prefixes = new Set([
    "coser",
    "delinquir",
]);
// FIX: shouldn't this be merged into verbos_con_cambios_morfológicas[]
// longer keys must appear before shorter ones that match as a suffix.
export const conjugation_families = {
    satisfacer: { modelo: "hacer", clase_conjugacional: "-acer" },
    delinquir: { modelo: "delinquir", }, // prevents mismatch with "huir"
    erguir: { modelo: "erguir", }, // prevents mismatch with "huir"
    seguir: { modelo: "seguir", }, // prevents mismatch with "huir"
    caber: { modelo: "caber", }, // its own modelo
    caer: { modelo: "caer", }, // its own modelo
    // estar:      {modelo: "estar",     },          // its own modelo
    haber: { modelo: "haber", }, // its own modelo
    // jugar:      {modelo: "jugar",     },          // its own modelo
    poder: { modelo: "poder", }, // its own modelo
    querer: { modelo: "querer", }, // its own modelo
    saber: { modelo: "saber", }, // its own modelo
    salir: { modelo: "salir", }, // its own modelo
    venir: { modelo: "venir", }, // ChatGPT said that all "-venir" verbs conjugate the same
    tener: { modelo: "tener", }, // ChatGPT said that there are no modern "-tener" verbs that conjugate differently, but that the origin of the word could make a difference
    poner: { modelo: "poner", }, // ChatGPT said that all "-poner" verbs conjugate the same, that this is 100% reliable
    decir: { modelo: "decir", }, // ChatGPT said that all "-decir" verbs conjugate the same
    traer: { modelo: "traer", }, // ChatGPT said that all "-traer" verbs conjugate the same
    // FIX: linguist: hacer verbs are a different family from -acer? e.g. "nacer"
    // FIX: perhaps this requires a partner rule for "-facer" ?
    hacer: { modelo: "hacer", clase_conjugacional: "-acer" }, // ChatGPT said that all "-hacer" verbs conjugate the same, but "satisfacer" follows this model as well
    ducir: { modelo: "conducir", clase_conjugacional: "-ducir" }, // ChatGPT said that all "-ducir" verbs conjugate like conducir
    eer: { modelo: "leer", clase_conjugacional: "-eer" }, // ChatGPT said that all "-eer" verbs conjugate like leer
    oír: { modelo: "oír", }, // ChatGPT said that all "-oír" verbs conjugate the same
    // uir:        {modelo: "huir",      clase_conjugacional: "-uir"},           // ChatGPT said that all "-uir" verbs conjugate like huir
    // NOT valid conjugation families:
    // -iar NOT => vaciar, e.g.: cambiar, estudiar
    // FIX: linguistics: consider all of these
    //     -aer / -oer
    //     -ocer 
};
// Note that there is no way to know whether these are actual prefixes, especially the single char prefixes: "a", "o"
function findRulesAndProductiveVerbPrefixes(infinitivo, modelo, combinados) {
    let productive_prefixes;
    // check for the special case of "a-", which is the only productive prefix of a single character
    if ((infinitivo[0] === "a") && (infinitivo.length - modelo?.length) === 1) {
        if (infinitivo.endsWith(modelo)) {
            const base_rules = verbos_con_cambios_morfológicos[modelo];
            return { productive_prefixes: ["a"], base: modelo, base_rules };
        }
    }
    // FIX: this use of modelo is obsolete
    const clase_conjugacional = combinados?.clase_conjugacional;
    const is_conjugation_family = (clase_conjugacional?.[0] === "-");
    // NOTE: in case of a productive ending (has a hyphen), at least one more character is needed, so length is correct.
    const min_ending_length = (is_conjugation_family ? modelo.length : MIN_BASE_VERB_LENGTH);
    let remainder = infinitivo;
    // stop as soon as a known verb is found, e.g. "acertar" is in morphophonemic_verb_conjugation_rules, but not "certar"
    let base_rules = verbos_con_cambios_morfológicos[infinitivo];
    if (!base_rules || base_rules.modelo) {
        let do_look_for_prefix = true;
        while (do_look_for_prefix && (remainder.length > min_ending_length)) {
            const prefix_found = findProductiveVerbPrefix(remainder, min_ending_length);
            if (prefix_found) {
                // This happens when an infinitivo with prefixes has a model...
                base_rules = verbos_con_cambios_morfológicos[prefix_found.remainder];
                productive_prefixes = productive_prefixes || [];
                productive_prefixes.push(prefix_found.prefix);
                remainder = prefix_found.remainder;
            }
            do_look_for_prefix = prefix_found && !base_rules;
        }
        const base = remainder;
        // NOTE: it appears that this is the correct place to look for Prefixes.nonproductive_prefix
        // but there doesn't appear to be enough information to find this.
        if (productive_prefixes?.length > 0) {
            return { productive_prefixes, base, base_rules };
        }
    }
    return {};
}
function findSharedEnding(infinitivo, modelo) {
    let terminación = modelo;
    for (; terminación.length > 2; terminación = terminación.slice(1)) {
        if (infinitivo.slice(-terminación.length) === terminación) {
            break;
        }
    }
    // NOTE: terminación.length can degenerate to the InfinitiveClass, e.g. "gemir" follows the model "pedir"
    return terminación;
}
// Determina los prefijos de este verbo, y llena el tipo Prefixes. 
// Separate any productive verb prefixes from this verb, and return the remainder as the base.
// The base must be at least min_ending_length characters long as "ir" is the only shorter verb, and it cannot be prefixed.
// e.g. "prever" has a 3-char base infinitivo.
function determinePrefixes(infinitivo, modelo, morphological_rules) {
    const { combinados } = morphological_rules;
    const clase_conjugacional = combinados?.clase_conjugacional;
    let { productive_prefixes, base, base_rules } = findRulesAndProductiveVerbPrefixes(infinitivo, modelo, combinados);
    if (base_rules) {
        modelo = modelo || base_rules.modelo;
        morphological_rules.de_prefijos = { ...base_rules, infinitivos: [infinitivo, base] };
    }
    const is_ending_conjugation_family = (clase_conjugacional?.[0] === "-");
    // const is_modelo_conjugation_family = (modelo && (!infinitivo.endsWith(modelo)))
    if (is_ending_conjugation_family || modelo) {
        const shared_ending = (clase_conjugacional ? clase_conjugacional?.slice(1) : findSharedEnding(infinitivo, modelo));
        const shared_ending_len = shared_ending.length;
        const prefijo_sustractivo = modelo.slice(0, -shared_ending_len);
        let prefijo_aditivo = infinitivo.slice(0, -shared_ending_len);
        // let prefixes_joined = productive_prefixes?.join("") || ""
        // let unprefixed = infinitivo.slice(prefixes_joined.length)
        // } else {
        //     prefijo_aditivo = productive_prefixes?.pop()
        //     prefixes_joined = productive_prefixes?.join("") || ""
        //     unprefixed = infinitivo.slice(prefixes_joined.length)
        // }
        // any portion not accounted for is considered nonproductive
        // const nonproductive_prefix = unprefixed.slice(0, -(prefijo_aditivo.length + shared_ending.length))
        const clase_de_conjugación = { prefijo_aditivo, prefijo_sustractivo };
        const prefixes = { /* productive_prefixes, /* nonproductive_prefix, */ clase_de_conjugación };
        return { prefixes, base, base_rules };
    }
    else {
        return { base, base_rules };
    }
    // const nonproductive_prefix = getNonProductivePrefix()
    // if (is_ending_conjugation_family || is_modelo_conjugation_family || rules_and_prefixes) {
    //     const productive_prefixes = rules_and_prefixes?.productive_prefixes
    //     const base = rules_and_prefixes?.base
    //     const base_rules = rules_and_prefixes?.base_rules
    //     if (base_rules) {
    //         modelo = modelo || base_rules.modelo
    //         morphological_rules.de_prefijos = {...base_rules, infinitivos: [infinitivo, base]}
    //     }
    //     if (productive_prefixes ||  nonproductive_prefix || clase_de_conjugación) {
    //         const prefixes: Prefixes = {productive_prefixes,  nonproductive_prefix, clase_de_conjugación}
    //         return prefixes
    //     }
    //     // const infinitivo_sin_prefijos = getInfinitivoSinPrefijos(productive_prefixes, infinitivo)
    //     if (productive_prefixes || conjugation_family_prefix || (modelo && (infinitivo !== modelo))) {
    //         let remainder = infinitivo
    //         if (productive_prefixes) {
    //             assert(productive_prefixes.length > 0, `${infinitivo}: productive_prefixes.length==0`)
    //             prefixes.productive_prefixes = productive_prefixes
    //             const productive_prefixes_all = productive_prefixes.join("")
    //             assert(infinitivo.startsWith(productive_prefixes_all), `expected ${infinitivo}.startsWith(${productive_prefixes_all})`)
    //             remainder = infinitivo.slice(productive_prefixes_all.length)
    //         }
    //         if (conjugation_family_prefix) {
    //             const ending_len = (clase_conjugacional.length - 1)
    //             const ending = clase_conjugacional.slice(1)
    //             assert(infinitivo.endsWith(ending), `expected ${infinitivo}.endsWith(${ending})`)
    //             const prefijo_base = (ending_len ? modelo.slice(0, -ending_len) : undefined)
    //             prefixes.clase_de_conjugación = {prefijo: conjugation_family_prefix, prefijo_base}
    //         } else if (infinitivo !== modelo) {
    //             const productive_prefixes_all = prefixes.productive_prefixes?.join("") || ""
    //             const wo_productive_prefixes = infinitivo.slice(productive_prefixes_all.length)
    //             const nonproductive_prefix = wo_productive_prefixes.slice(0, -shared_ending.length)
    //             if (nonproductive_prefix) {
    //                 prefixes.nonproductive_prefix = nonproductive_prefix
    //             }
    //         }
    //         return {prefixes, base, base_rules}
    //     } 
}
// Combine rules sets into combinados without changing the input adicionales.
function combineExcepcionesLéxicasReglas(combinados, adicionales) {
    if (!adicionales)
        return;
    let claves_adicionales = Object.keys(adicionales);
    // FIX: may need to support deeper copying from adicionales, eg. for regionalisms
    for (const mood_tense of claves_adicionales) {
        const reglas_adicionales = adicionales[mood_tense];
        combinados[mood_tense] = combinados[mood_tense] || {};
        const reglas_combinados = combinados[mood_tense];
        // must copy in order to prevent overwriting of sources by later combination
        if (reglas_adicionales?.suffixes) {
            // copy the base, but share the suffix values (as they won't be modified)
            reglas_combinados.suffixes = { ...reglas_combinados?.suffixes, ...reglas_adicionales?.suffixes };
        }
        if (reglas_adicionales?.forms) {
            reglas_combinados.forms = { ...reglas_combinados?.forms, ...reglas_adicionales?.forms };
        }
        if (reglas_adicionales?.derivations) {
            reglas_combinados.derivations = { ...reglas_combinados?.derivations, ...reglas_adicionales?.derivations };
        }
        if (reglas_adicionales?.stress_last_char_of_s123p3_stem) {
            reglas_combinados.stress_last_char_of_s123p3_stem = reglas_adicionales?.stress_last_char_of_s123p3_stem;
        }
        if (reglas_adicionales?.tema) {
            reglas_combinados.tema = reglas_adicionales?.tema;
        }
    }
}
// Merge the overriding rules into the combinados rules.
// The field in the combinados rules must be added as copies of the adicionales rules, to prevent modification of the adicionales.
function _combinaReglasDeConjugaciónDeVerbo(args) {
    function replaceIfAdditive(fieldname, combinado, adicional) {
        const valor_combinado = combinado?.[fieldname];
        const valor_adicional = adicional?.[fieldname];
        if (valor_adicional) {
            if (!valor_combinado) {
                combinado[fieldname] = valor_adicional;
            }
            else {
                if (valor_combinado !== valor_adicional) {
                    throw new Error(`no puede resolver ReglasDeConjugaciónDeVerbo.${fieldname} para: ${combinado?.[fieldname]} << ${adicional?.[fieldname]}`);
                }
            }
        }
    }
    function updateVerfication(combinado, adicional) {
        const ok_combinado = combinado?.ok;
        const ok_adicional = adicional?.ok;
        if (ok_adicional) {
            if (!ok_adicional) {
                combinado.ok = ok_adicional;
            }
            else {
                if (ok_combinado > ok_adicional) {
                    combinado.ok = ok_adicional;
                }
            }
        }
    }
    const { combinados, adicionales } = args;
    if (!adicionales) {
        return;
    }
    if (combinados.infinitivos.length < adicionales.infinitivos.length) {
        combinados.infinitivos = adicionales.infinitivos;
    }
    updateVerfication(combinados, adicionales);
    replaceIfAdditive("clase_conjugacional", combinados, adicionales);
    replaceIfAdditive("modelo", combinados, adicionales);
    replaceIfAdditive("tema_presente_yo", combinados, adicionales);
    replaceIfAdditive("sufijo_presente_yo", combinados, adicionales);
    replaceIfAdditive("tema_pretérito", combinados, adicionales);
    replaceIfAdditive("tema_futuro", combinados, adicionales);
    replaceIfAdditive("alternancia_vocálica", combinados, adicionales);
    const combinados_excepciones_léxicas = combinados?.excepciones_léxicas;
    const adicionales_excepciones_léxicas = adicionales?.excepciones_léxicas;
    if (adicionales_excepciones_léxicas) {
        if (!combinados_excepciones_léxicas) {
            combinados.excepciones_léxicas = { ...adicionales_excepciones_léxicas };
            const adicionales_reglas = adicionales_excepciones_léxicas?.reglas;
            if (adicionales_reglas) {
                combinados.excepciones_léxicas.reglas = {};
                // must prevent polution of source reglas
                combineExcepcionesLéxicasReglas(combinados.excepciones_léxicas.reglas, adicionales_reglas);
            }
        }
        else {
            replaceIfAdditive("supletivo", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("participio", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("gerundio", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("gerundio_tema_cambio_excepcional", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("imperativo_tú", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("vos", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            replaceIfAdditive("tema_subjuntivo_yo", combinados_excepciones_léxicas, adicionales_excepciones_léxicas);
            const reglas_adicionales = adicionales_excepciones_léxicas?.reglas;
            if (reglas_adicionales) {
                combinados_excepciones_léxicas.reglas = combinados_excepciones_léxicas.reglas || {};
                // must prevent polution of source reglas
                combineExcepcionesLéxicasReglas(combinados_excepciones_léxicas.reglas, reglas_adicionales);
            }
        }
    }
}
function collectRulesForInfinitiveAndModel(infinitivo, morphological_rules) {
    let modelo;
    let rules_de_infinitivo = verbos_con_cambios_morfológicos[infinitivo];
    if (rules_de_infinitivo) {
        morphological_rules.de_infinitivo = { ...rules_de_infinitivo, infinitivos: [infinitivo] };
        modelo = rules_de_infinitivo.modelo;
        if (modelo && (modelo !== infinitivo)) {
            const rules_de_modelo = verbos_con_cambios_morfológicos[modelo];
            if (rules_de_modelo) {
                morphological_rules.de_modelo = { ...rules_de_modelo, infinitivos: [infinitivo, modelo] };
            }
        }
        return modelo;
    }
}
function collectRulesByEnding(infinitivo, morphological_rules) {
    let modelo;
    for (const conjugation_family in conjugation_families) {
        if (infinitivo.endsWith(conjugation_family)) {
            ;
            ({ modelo } = conjugation_families[conjugation_family]);
            break;
        }
    }
    if (modelo) {
        const rules_from_ending = verbos_con_cambios_morfológicos[modelo];
        let infinitivos = [infinitivo];
        if (infinitivo !== modelo) {
            infinitivos.push(modelo);
        }
        // NOTE: this must exist, and is checked by validateConjugationFamiliesVerbsList() and validateUniqueVerbsList()
        morphological_rules.de_terminación = { ...rules_from_ending, infinitivos };
        return { modelo };
    }
}
function getInfinitivoSinPrefijos(prefixes, infinitivo) {
    if (prefixes) {
        const { productive_prefixes, nonproductive_prefix } = prefixes;
        const productive = productive_prefixes?.join("") || "";
        const nonproductive = nonproductive_prefix || "";
        const prefix = productive + nonproductive;
        const remainder = infinitivo.slice(prefix.length);
        return remainder;
    }
    else {
        return infinitivo;
    }
}
export function getPreterite3PStem(conj_and_deriv_rules) {
    // Must force _conjugateVerb to only consider the infinitivo_sin_prefijos
    const { infinitivo_sin_prefijos, prefixes } = conj_and_deriv_rules;
    const prefijos_para_clase = { clase_de_conjugación: prefixes?.clase_de_conjugación };
    const conj_and_derviv_rules_conjugable_only = { ...conj_and_deriv_rules, infinitivo: infinitivo_sin_prefijos, prefixes: prefijos_para_clase };
    // FIX: this call is very confusing when debugging. Is there a clean way to get just the single IndPret.p3 form?
    const { forms } = _conjugateVerb(conj_and_derviv_rules_conjugable_only, "IndPret");
    // TODO: is this correct? assuming that there is only ONE form
    const ustedes_form = forms["p3"][0];
    const tema_base = ustedes_form.slice(0, -3);
    return tema_base;
}
// ChatGPT dice: Si ves un verbo que:
// - tiene prefijo claro (pre-, re-, con-, sub-, ante-, etc.)
// - termina como un verbo irregular fuerte
// 👉 Asume que se conjuga como el verbo base, hasta que alguien te demuestre lo contrario.
//    Funciona el 95 %+ del tiempo.
export function resolveConjugationClass(infinitivo) {
    const verb_family = getInfinitiveClass(infinitivo);
    if (!verb_family) {
        return undefined;
    }
    let morphological_rules = {};
    if (verbs_with_false_prefixes.has(infinitivo)) {
        let conj_and_deriv_rules = { infinitivo, infinitivo_sin_prefijos: infinitivo, verb_family, morphological_rules };
        conj_and_deriv_rules.tema_pretérito_p3 = getPreterite3PStem(conj_and_deriv_rules);
        return conj_and_deriv_rules;
    }
    let modelo = collectRulesForInfinitiveAndModel(infinitivo, morphological_rules);
    if (!modelo) {
        const model_by_ending = collectRulesByEnding(infinitivo, morphological_rules);
        if (model_by_ending) {
            ;
            ({ modelo } = model_by_ending);
        }
    }
    const combinados = { infinitivos: [infinitivo] };
    _combinaReglasDeConjugaciónDeVerbo({ combinados, adicionales: morphological_rules.de_infinitivo });
    _combinaReglasDeConjugaciónDeVerbo({ combinados, adicionales: morphological_rules.de_modelo });
    _combinaReglasDeConjugaciónDeVerbo({ combinados, adicionales: morphological_rules.de_terminación });
    const reglas_existe = (Object.keys(morphological_rules).length > 0);
    if (reglas_existe) {
        morphological_rules.combinados = combinados;
    }
    const with_prefixes = determinePrefixes(infinitivo, modelo, morphological_rules);
    const prefixes = with_prefixes?.prefixes;
    _combinaReglasDeConjugaciónDeVerbo({ combinados, adicionales: morphological_rules.de_prefijos });
    const infinitivo_sin_prefijos = getInfinitivoSinPrefijos(prefixes, infinitivo);
    if (morphological_rules.de_prefijos) {
        morphological_rules.combinados = combinados;
    }
    let conj_and_deriv_rules = { infinitivo, infinitivo_sin_prefijos, verb_family, prefixes, morphological_rules };
    conj_and_deriv_rules.tema_pretérito_p3 = getPreterite3PStem(conj_and_deriv_rules);
    return conj_and_deriv_rules;
}
//# sourceMappingURL=resolve-conjugation-class.js.map