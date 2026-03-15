import { _conjugateVerb } from "./conjugate-verb.js"
import { MoodTenseMap } from "./index.js"
import { findProductiveVerbPrefix } from "./prefixes.js"
import { getInfinitiveClass } from "./regular-verb-rules.js"
import { ModeloConjugacional, InfinitiveClass, ReglasDeConjugaciónDeVerbo, verbos_con_cambios_morfológicos, VerbAspectRulesWithFullyIrregularForms, VerboClaseConjugacional } from "./verbos-con-cambios-morfológicas.js"


function assert(condition, message) {
    if (!condition) {
        throw new Error(message)
    }
}


const descreer_Prefixes: Prefixes = {
    productive_prefixes: ["des"],
    nonproductive_prefix: undefined,
    clase_de_conjugación: {
        prefijo: "cr",
        prefijo_base: "l",
    }
}

// These prefixes can be reconstructed using addPrefixesToForm()
export interface Prefixes {
    // Semantic prefixes (that produce new verbs).
    // This is informational only, and is a guess. 
    // These prefixes are found only though orthographic matches, which is not necessarily accurate.
    productive_prefixes?: string[]
    // Any prefixes that remain after removing the productive_prefixes, but not from the base infinitive.
    // Unfortunately, there doesn't appear to be enough information to find this.
    nonproductive_prefix?: string
    clase_de_conjugación?: {
        // El prefijo del verbo que pertenece a una familia de conjugación.
        // Por ejemplo, "creer" es miembro de la familia "-eer" (modelo "leer"), entonces 'conjugation_family_prefix' es "cr",
        // => implica is_conjugation_family
        prefijo?: string
        // El stem del verbo que es el modelo/base una familia de conjugación.
        // Por ejemplo, para "leer", el conjugation_base_prefix es "l", la parte antes de la clase_conjugacional, aquí "-eer"
        prefijo_base?: string
    }
}


export function addPrefixesToBaseForm(base_form: string, prefixes?: Prefixes) {
    if (prefixes) {
        const {productive_prefixes, nonproductive_prefix, clase_de_conjugación} = prefixes
        const productive = productive_prefixes?.join("") || ""
        const nonproductive = nonproductive_prefix || ""
        let updated_form: string
        if (clase_de_conjugación) {
            const {prefijo, prefijo_base} = clase_de_conjugación
            const terminación = base_form.slice(prefijo_base.length)
            updated_form = prefijo + terminación
        } else {
            updated_form = base_form
        }
        const prefixed = productive + nonproductive + updated_form
        return prefixed
    } else {
        return base_form
    }
}


// e.g.: descreer: 
var descreer: ConjugationAndDerivationRules = 
{
    infinitivo: "descreer", 
    infinitivo_sin_prefijos: "creer", 
    verb_family: "-er", 
    prefixes: descreer_Prefixes,
    // copiado de verbos_con_cambios_morfológicas.leer
    morphological_rules: {
        de_infinitivo: {clase_conjugacional: "-eer", modelo: "leer"}
    }
}
export interface ConjugationAndDerivationRules {
    // The infinitivo that this describes.
    infinitivo: string
    // The infinitivo that is left when any semantic prefixes have been removed.
    infinitivo_sin_prefijos: string
    verb_family: InfinitiveClass
    // // The infinitivo that the conjugation family follows, e.g. "leer" for "-eer".
    // modelo?: ModeloConjugacional
    prefixes?: Prefixes
    morphological_rules: MorphologicalRulesAccumulated  // from verbos_con_cambios_morfológicas[]
    // Calculate and cache the IndPret,p3 stem here, if MorphologicalRulesAccumulated.combinado.tema_pretérito is set
    tema_pretérito_p3?: string    
}


export interface MorphologicalRulesAccumulated {
    // El infinitivo está directamente en verbos_con_cambios_morfológicos[]
    de_infinitivo?: ReglasDeConjugaciónDeVerbo
    // El infinitivo está directamente en verbos_con_cambios_morfológicos[], y tiene un modelo diferente del infinitivo sí mismo
    de_modelo?: ReglasDeConjugaciónDeVerbo
    // El infinitivo no está en verbos_con_cambios_morfológicos[], y tiene un terminación conocida como una regla productiva.
    de_terminación?: ReglasDeConjugaciónDeVerbo
    // El infinitivo empiece con prefijos productivos conocidos, pero, ¡ojo! hay posibilidad de prefijos falsos como este es solo por ortografía.
    de_prefijos?: ReglasDeConjugaciónDeVerbo
    // Las reglas finales, después de combinar las anteriores.
    combinados?: ReglasDeConjugaciónDeVerbo
}


// The minimum length of a verb that might have prefixes.
// Segun ChatGPT, hay solo un verbo de largo 2, "ir", que no puede tener prefijos.
// y solo hay estos de largo 3: dar, ser, ver, oír
const MIN_BASE_VERB_LENGTH = 3


// These are regular.
// NOTE: If an irregular form is found, the code must be updated.
const verbs_with_false_prefixes = new Set([
    "coser",
    "delinquir",
])


// This indicates the different components of a verb that are used to reconstruct it for conjugation.
// If the verb belongs to a conjugation_family, then: infinitivo = prefix + conjugation_family_prefix + conjugation_family
// Otherwise: infinitivo = prefix + base
export interface BaseWPrefix {
    // a semantic prefix
    prefixes?: string[]
    // If the infinitivo belongs to a conjugation_family, then this is the part before the conjugation_family, but after the prefix.
    conjugation_family_prefix?: string
    // If the infinitivo belongs to a conjugation_family,this is the conjugation_family.
    // Otherwise this is the base infinitivo.
    base?: string
}


interface ModeloYInfinitivoConjugable {
    modelo: ModeloConjugacional
    // // NOTE: only one of base_infinitive and conjugation_family_infinitive may be set
    // // The infinitivo that remains after prefixes have been removed.
    // // This is what is conjugated, prefixes will be reapplied afterwards.
    // infinitivo_sin_prefijos?: string
    // // The infinitivo that a conjugation family follows if the conjugation family itself is an incomplete ending of a verb.
    // conjugation_family_infinitive?: string
    clase_conjugacional?: VerboClaseConjugacional
}


// FIX: shouldn't this be merged into verbos_con_cambios_morfológicas[]
// longer keys must appear before shorter ones that match as a suffix.
export const conjugation_families: {[conjugation_family: string]: ModeloYInfinitivoConjugable} = {
    satisfacer: {modelo: "hacer",     clase_conjugacional: "-acer"}, 
    delinquir:  {modelo: "delinquir", },  // prevents mismatch with "huir"
    erguir:     {modelo: "erguir",    },        // prevents mismatch with "huir"
    seguir:     {modelo: "seguir",    },        // prevents mismatch with "huir"
    caber:      {modelo: "caber",     },          // its own modelo
    caer:       {modelo: "caer",      },            // its own modelo
    // estar:      {modelo: "estar",     },          // its own modelo
    haber:      {modelo: "haber",     },          // its own modelo
    // jugar:      {modelo: "jugar",     },          // its own modelo
    poder:      {modelo: "poder",     },          // its own modelo
    querer:     {modelo: "querer",    },        // its own modelo
    saber:      {modelo: "saber",     },          // its own modelo
    salir:      {modelo: "salir",     },          // its own modelo
    venir:      {modelo: "venir",     },          // ChatGPT said that all "-venir" verbs conjugate the same
    tener:      {modelo: "tener",     },          // ChatGPT said that there are no modern "-tener" verbs that conjugate differently, but that the origin of the word could make a difference
    poner:      {modelo: "poner",     },          // ChatGPT said that all "-poner" verbs conjugate the same, that this is 100% reliable
    decir:      {modelo: "decir",     },          // ChatGPT said that all "-decir" verbs conjugate the same
    traer:      {modelo: "traer",     },          // ChatGPT said that all "-traer" verbs conjugate the same
    // FIX: linguist: hacer verbs are a different family from -acer? e.g. "nacer"
    // FIX: linguist: change modelo from "-acer" to "hacer"
    // FIX: perhaps this requires a partner rule for "-facer" ?
    hacer:      {modelo: "hacer",     clase_conjugacional: "-acer"},          // ChatGPT said that all "-hacer" verbs conjugate the same, but "satisfacer" follows this model as well
    ducir:      {modelo: "conducir",  clase_conjugacional: "-ducir"},       // ChatGPT said that all "-ducir" verbs conjugate like conducir
    eer:        {modelo: "leer",      clase_conjugacional: "-eer"},           // ChatGPT said that all "-eer" verbs conjugate like leer
    oír:        {modelo: "oír",       },            // ChatGPT said that all "-oír" verbs conjugate the same
    uir:        {modelo: "huir",      clase_conjugacional: "-uir"},           // ChatGPT said that all "-uir" verbs conjugate like huir
    // NOT valid conjugation families:
    // -iar NOT => vaciar, e.g.: cambiar, estudiar
    // FIX: linguistics: consider all of these
    //     -aer / -oer
    //     -ocer 
}



// FIX: determine if there is any use for the values here, as it seems that they alway equal the key.
// export const unique_conjugations: {[conjugation_family: string]: ModeloYInfinitivoConjugable} = {
//     ir:         {modelo: "ir",   infinitivo_sin_prefijos: "ir"},               // its own modelo, and no prefixes exist
//     dar:        {modelo: "dar",  infinitivo_sin_prefijos: "dar"},              // its own modelo
//     ser:        {modelo: "ser",  infinitivo_sin_prefijos: "ser"},              // its own modelo
//     ver:        {modelo: "ver",  infinitivo_sin_prefijos: "ver"},              // its own modelo
// }


interface MorphophonemicRulesWithPrefixes {
    productive_prefixes?: string[]
    // nonproductive_prefix?: string
    base: string
    base_rules?: ReglasDeConjugaciónDeVerbo
}



// Note that there is no way to know whether these are actual prefixes, especially the single char prefixes: "a", "o"
function findRulesAndProductiveVerbPrefixes(infinitivo: string, modelo: ModeloConjugacional, combinados: ReglasDeConjugaciónDeVerbo) : MorphophonemicRulesWithPrefixes | undefined {
    let productive_prefixes: string[]
    // check for the special case of "a-", which is the only productive prefix of a single character
    if ((infinitivo[0] === "a") && (infinitivo.length - modelo?.length) === 1) {
        if (infinitivo.endsWith(modelo)) {
            const base_rules = verbos_con_cambios_morfológicos[modelo]
            return {productive_prefixes: ["a"], base: modelo, base_rules}
        }
    }
    let remainder = infinitivo
    // FIX: this use of modelo is obsolete
    const clase_conjugacional = combinados?.clase_conjugacional
    const is_conjugation_family = (clase_conjugacional?.[0] === "-")
    // NOTE: in case of a productive ending (has a hyphen), at least one more character is needed, so length is correct.
    const min_ending_length = (is_conjugation_family ? modelo.length : MIN_BASE_VERB_LENGTH)
    // stop as soon as a known verb is found, e.g. "acertar" is in morphophonemic_verb_conjugation_rules, but not "certar"
    let base_rules = verbos_con_cambios_morfológicos[infinitivo]
    if (!base_rules) {
        let do_look_for_prefix = true
        while (do_look_for_prefix && (remainder.length > min_ending_length)) {
            const prefix_found = findProductiveVerbPrefix(remainder, min_ending_length)
            if (prefix_found) {
                // This happens when an infinitivo with prefixes has a model...
                base_rules = verbos_con_cambios_morfológicos[prefix_found.remainder]
                productive_prefixes = productive_prefixes || []
                productive_prefixes.push(prefix_found.prefix)
                remainder = prefix_found.remainder
            }
            do_look_for_prefix = prefix_found && !base_rules
        }
        const base = remainder
        // NOTE: it appears that this is the correct place to look for Prefixes.nonproductive_prefix
        // but there doesn't appear to be enough information to find this.
        if (productive_prefixes?.length > 0) {
            return {productive_prefixes, base, base_rules}
        }
    }
}


interface DeterminePrefixesResult {
    prefixes?: Prefixes
    base?: string
    base_rules?: ReglasDeConjugaciónDeVerbo
}


// Separate any productive verb prefixes from this verb, and return the remainder as the base.
// The base must be at least min_ending_length characters long as "ir" is the only shorter verb, and it cannot be previxed.
// e.g. "prever" has a 3-char base infinitivo.
function determinePrefixes(infinitivo: string, modelo: ModeloConjugacional, morphological_rules: MorphologicalRulesAccumulated) : DeterminePrefixesResult | undefined {
    const {combinados} = morphological_rules
    let conjugation_family_prefix: string
    let rules_and_prefixes = findRulesAndProductiveVerbPrefixes(infinitivo, modelo, combinados)
    const productive_prefixes = rules_and_prefixes?.productive_prefixes
    const base = rules_and_prefixes?.base
    const base_rules = rules_and_prefixes?.base_rules
    if (base_rules) {
        morphological_rules.de_prefijos = {...base_rules, infinitivos: [infinitivo, base]}
    }
    modelo = modelo || base_rules?.modelo
    // const infinitivo_sin_prefijos = getInfinitivoSinPrefijos(productive_prefixes, infinitivo)
    const clase_conjugacional = combinados?.clase_conjugacional
    const is_conjugation_family = (clase_conjugacional?.[0] === "-")
    if (is_conjugation_family) {
        const ending_len = (clase_conjugacional.length - 1)
        if (productive_prefixes) {
            const prefixes_joined = productive_prefixes.join("")
            const remainder = infinitivo.slice(prefixes_joined.length)
            if (remainder.length > ending_len) {
                conjugation_family_prefix = remainder.slice(0, -ending_len)
            } else {
                conjugation_family_prefix = productive_prefixes.pop()
            }
        } else {
            conjugation_family_prefix = infinitivo.slice(0, -ending_len)
        }
    }
    let prefixes : Prefixes
    if (productive_prefixes || conjugation_family_prefix || (modelo && (infinitivo !== modelo))) {
        prefixes = {}
        let remainder = infinitivo
        if (productive_prefixes) {
            assert(productive_prefixes.length > 0, `${infinitivo}: productive_prefixes.length==0`)
            prefixes.productive_prefixes = productive_prefixes
            const productive_prefixes_all = productive_prefixes.join("")
            assert(infinitivo.startsWith(productive_prefixes_all), `expected ${infinitivo}.startsWith(${productive_prefixes_all})`)
            remainder = infinitivo.slice(productive_prefixes_all.length)
        }
        if (conjugation_family_prefix) {
            const ending_len = (clase_conjugacional.length - 1)
            const ending = clase_conjugacional.slice(1)
            assert(infinitivo.endsWith(ending), `expected ${infinitivo}.endsWith(${ending})`)
            const prefijo_base = (ending_len ? modelo.slice(0, -ending_len) : undefined)
            prefixes.clase_de_conjugación = {prefijo: conjugation_family_prefix, prefijo_base}
        } else if (infinitivo !== modelo) {
            const productive_prefixes_all = prefixes.productive_prefixes?.join("") || ""
            const wo_productive_prefixes = infinitivo.slice(productive_prefixes_all.length)
            assert(infinitivo.endsWith(modelo), `expected ${infinitivo}.endsWith(${modelo})`)
            const nonproductive_prefix = wo_productive_prefixes.slice(0, -modelo.length)
            if (nonproductive_prefix) {
                prefixes.nonproductive_prefix = nonproductive_prefix
            }
        }
        return {prefixes, base, base_rules}
    } 
}


// Combine rules sets into combinados without changing the input adicionales.
function combineExcepcionesLéxicasReglas(combinados: MoodTenseMap<VerbAspectRulesWithFullyIrregularForms>, adicionales?: MoodTenseMap<VerbAspectRulesWithFullyIrregularForms>) : void {
    if (!adicionales) return
    let claves_adicionales = Object.keys(adicionales)
    // FIX: may need to support deeper copying from adicionales, eg. for regionalisms
    for (const mood_tense of claves_adicionales) {
        const reglas_adicionales = adicionales[mood_tense]
        combinados[mood_tense] = combinados[mood_tense] || {}
        const reglas_combinados = combinados[mood_tense]
        // must copy in order to prevent overwriting of sources by later combination
        if (reglas_adicionales?.suffixes) {
            // copy the base, but share the suffix values (as they won't be modified)
            reglas_combinados.suffixes = {...reglas_combinados?.suffixes, ...reglas_adicionales?.suffixes}
        }
        if (reglas_adicionales?.forms) {
            reglas_combinados.forms = {...reglas_combinados?.forms, ...reglas_adicionales?.forms}
        }
        if (reglas_adicionales?.derivations) {
            reglas_combinados.derivations = {...reglas_combinados?.derivations, ...reglas_adicionales?.derivations}
        }
        if (reglas_adicionales?.stress_last_char_of_s123p3_stem) {
            reglas_combinados.stress_last_char_of_s123p3_stem = reglas_adicionales?.stress_last_char_of_s123p3_stem
        }
        if (reglas_adicionales?.tema) {
            reglas_combinados.tema = reglas_adicionales?.tema
        }
    }
}


// Merge the overriding rules into the combinados rules.
// The field in the combinados rules must be added as copies of the adicionales rules, to prevent modification of the adicionales.
function _combinaReglasDeConjugaciónDeVerbo(args: {combinados: ReglasDeConjugaciónDeVerbo, adicionales?: ReglasDeConjugaciónDeVerbo}) : void {
    function replaceIfAdditive(fieldname: string, combinado: object, adicional: object) {
        const valor_combinado = combinado?.[fieldname]
        const valor_adicional = adicional?.[fieldname]
        if (valor_adicional) {
            if (!valor_combinado) {
                combinado[fieldname] = valor_adicional
            } else {
                if (valor_combinado !== valor_adicional) {
                    throw new Error(`no puede resolver ReglasDeConjugaciónDeVerbo.${fieldname} para: ${combinado?.[fieldname]} << ${adicional?.[fieldname]}`)
                }
            }
        }
    }
    const {combinados, adicionales} = args
    if (!adicionales) {
        return
    }
    if (combinados.infinitivos.length < adicionales.infinitivos.length) {
        combinados.infinitivos = adicionales.infinitivos
    }
    replaceIfAdditive("clase_conjugacional", combinados, adicionales)
    replaceIfAdditive("modelo", combinados, adicionales)
    replaceIfAdditive("tema_presente_yo", combinados, adicionales)
    replaceIfAdditive("sufijo_presente_yo", combinados, adicionales)
    replaceIfAdditive("tema_pretérito", combinados, adicionales)
    replaceIfAdditive("tema_futuro", combinados, adicionales)
    replaceIfAdditive("alternancia_vocálica", combinados, adicionales)
    const combinados_excepciones_léxicas = combinados?.excepciones_léxicas
    const adicionales_excepciones_léxicas = adicionales?.excepciones_léxicas
    if (adicionales_excepciones_léxicas) {
        if (!combinados_excepciones_léxicas) {
            combinados.excepciones_léxicas = {...adicionales_excepciones_léxicas}
            const adicionales_reglas = adicionales_excepciones_léxicas?.reglas
            if (adicionales_reglas) {
                combinados.excepciones_léxicas.reglas = {}
                // must prevent polution of source reglas
                combineExcepcionesLéxicasReglas(combinados.excepciones_léxicas.reglas, adicionales_reglas)
            }
        } else {
            replaceIfAdditive("supletivo", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("participio", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("gerundio", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("gerundio_tema_cambio_excepcional", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("imperativo_tú", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("vos", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            replaceIfAdditive("tema_subjuntivo_yo", combinados_excepciones_léxicas, adicionales_excepciones_léxicas)
            const reglas_adicionales = adicionales_excepciones_léxicas?.reglas
            if (reglas_adicionales) {
                combinados_excepciones_léxicas.reglas = combinados_excepciones_léxicas.reglas || {}
                // must prevent polution of source reglas
                combineExcepcionesLéxicasReglas(combinados_excepciones_léxicas.reglas, reglas_adicionales)
            }
        }
    }
}


function collectRulesForInfinitiveAndModel(infinitivo: string, morphological_rules: MorphologicalRulesAccumulated) : ModeloConjugacional | undefined {
    let modelo: ModeloConjugacional
    let rules_de_infinitivo = verbos_con_cambios_morfológicos[infinitivo]
    if (rules_de_infinitivo) {
        morphological_rules.de_infinitivo = {...rules_de_infinitivo, infinitivos: [infinitivo]}
        modelo = rules_de_infinitivo.modelo
        if (modelo && (modelo !== infinitivo)) {
            const rules_de_modelo = verbos_con_cambios_morfológicos[modelo]
            if (rules_de_modelo) {
                morphological_rules.de_modelo = {...rules_de_modelo, infinitivos: [infinitivo, modelo]}
            }
        }
        return modelo
    }
}


function collectRulesByEnding(infinitivo: string, morphological_rules: MorphologicalRulesAccumulated) : ModeloYInfinitivoConjugable | undefined {
    let modelo: ModeloConjugacional
    for (const conjugation_family in conjugation_families) {
        if (infinitivo.endsWith(conjugation_family)) {
            ;({modelo} = conjugation_families[conjugation_family])
            break
        }
    }
    if (modelo) {
        const rules_from_ending = verbos_con_cambios_morfológicos[modelo]
        let infinitivos = [infinitivo]
        if (infinitivo !== modelo) {
            infinitivos.push(modelo)
        }
        // NOTE: this must exist, and is checked by validateConjugationFamiliesVerbsList() and validateUniqueVerbsList()
        morphological_rules.de_terminación = {...rules_from_ending, infinitivos}
        return {modelo}
    }
}


function getInfinitivoSinPrefijos(prefixes: Prefixes | undefined, infinitivo: string) {
    if (prefixes) {
        const {productive_prefixes, nonproductive_prefix} = prefixes
        const productive = productive_prefixes?.join("") || ""
        const nonproductive = nonproductive_prefix || ""
        const prefix = productive + nonproductive
        const remainder = infinitivo.slice(prefix.length)
        return remainder 
    } else {
        return infinitivo
    }
}


export function getPreterite3PStem(conj_and_deriv_rules: ConjugationAndDerivationRules) {
    // Must force _conjugateVerb to only consider the infinitivo_sin_prefijos
    const {infinitivo_sin_prefijos, prefixes} = conj_and_deriv_rules
    const prefijos_para_clase: Prefixes = {clase_de_conjugación: prefixes?.clase_de_conjugación}
    const conj_and_derviv_rules_conjugable_only = {...conj_and_deriv_rules, infinitivo: infinitivo_sin_prefijos, prefixes: prefijos_para_clase}
    // FIX: this call is very confusing when debugging. Is there a clean way to get just the single IndPret.p3 form?
    const {forms} = _conjugateVerb(conj_and_derviv_rules_conjugable_only, "IndPret")
    // TODO: is this correct? assuming that there is only ONE form
    const ustedes_form = forms["p3"][0]
    const tema_base = ustedes_form.slice(0, -3)
    return tema_base
}


// ChatGPT dice: Si ves un verbo que:
// - tiene prefijo claro (pre-, re-, con-, sub-, ante-, etc.)
// - termina como un verbo irregular fuerte
// 👉 Asume que se conjuga como el verbo base, hasta que alguien te demuestre lo contrario.
//    Funciona el 95 %+ del tiempo.
export function resolveConjugationClass(infinitivo: string): ConjugationAndDerivationRules {
    const verb_family = getInfinitiveClass(infinitivo)
    if (!verb_family) {
        return undefined
    }
    let morphological_rules: MorphologicalRulesAccumulated = {}
    if (verbs_with_false_prefixes.has(infinitivo)) {
        let conj_and_deriv_rules: ConjugationAndDerivationRules = {infinitivo, infinitivo_sin_prefijos: infinitivo, verb_family, morphological_rules}
        conj_and_deriv_rules.tema_pretérito_p3 = getPreterite3PStem(conj_and_deriv_rules)
        return conj_and_deriv_rules
    }
    let modelo = collectRulesForInfinitiveAndModel(infinitivo, morphological_rules)
    if (!modelo) {
        const model_by_ending  = collectRulesByEnding(infinitivo, morphological_rules)
        if (model_by_ending) {
            ;({modelo} = model_by_ending)
        }
    }
    const combinados: ReglasDeConjugaciónDeVerbo = {infinitivos: [infinitivo]}
    _combinaReglasDeConjugaciónDeVerbo({combinados, adicionales: morphological_rules.de_infinitivo})
    _combinaReglasDeConjugaciónDeVerbo({combinados, adicionales: morphological_rules.de_modelo})
    _combinaReglasDeConjugaciónDeVerbo({combinados, adicionales: morphological_rules.de_terminación})
    const reglas_existe = (Object.keys(morphological_rules).length > 0)
    if (reglas_existe) {
        morphological_rules.combinados = combinados
    }
    const with_prefixes = determinePrefixes(infinitivo, modelo, morphological_rules)
    const prefixes = with_prefixes?.prefixes
    _combinaReglasDeConjugaciónDeVerbo({combinados, adicionales: morphological_rules.de_prefijos})
    const infinitivo_sin_prefijos = getInfinitivoSinPrefijos(prefixes, infinitivo)
    if (morphological_rules.de_prefijos) {
        morphological_rules.combinados = combinados
    }
    let conj_and_deriv_rules: ConjugationAndDerivationRules = {infinitivo, infinitivo_sin_prefijos, verb_family, prefixes, morphological_rules}
    conj_and_deriv_rules.tema_pretérito_p3 = getPreterite3PStem(conj_and_deriv_rules)
    return conj_and_deriv_rules
}

