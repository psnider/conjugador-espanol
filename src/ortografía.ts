import { Participios, MoodTense, VerbConjugation, VerbConjugationSuffixes, VerbRulesApplied, ParticipleRulesApplied, VerbForms } from ".";
import { applyToVerbForms } from "./lib.js";

// ============================================================
// REGLAS ORTOGRÁFICAS DE PRESERVACIÓN EN LA CONJUGACIÓN ESPAÑOLA
// Estas reglas NO son irregularidades.
// Son transformaciones productivas que preservan sonido o acento.
// Deben aplicarse después de formar el tema y antes de añadir tilde final.
// ============================================================


// ============================================================
// 1. PRESERVAR SONIDO CONSONÁNTICO FINAL DE LA RAÍZ
// Evitan que c/g/z cambien de sonido ante e o i.
// ============================================================

// c → qu
// preservar sonido /k/
// ejemplo: buscar → busqué
// condición:
//   raíz termina en "c"
//   terminación empieza con "e" o "i"


// g → gu
// preservar sonido /g/
// ejemplo: pagar → pagué
// condición:
//   raíz termina en "g"
//   terminación empieza con "e" o "i"


// z → c
// preservar sonido /θ/ o /s/
// ejemplo: empezar → empecé
// condición:
//   raíz termina en "z"
//   terminación empieza con "e" o "i"


// gu → gü
// preservar sonido /gw/
// ejemplo: averiguar → averigüé
// condición:
//   raíz termina en "gu"
//   terminación empieza con "e" o "i"


// ============================================================
// 2. PRESERVAR SONIDO VOCÁLICO (EVITAR DIPTONGOS INCORRECTOS)
// ============================================================

// i → í  (hiato obligatorio en participio)
// ejemplo: creer → creído
// condición:
//   tema termina en vocal
//   terminación empieza con "ido" o "ida"
// efecto:
//   marcar "í" con tilde


// i → y  (y epentética entre vocales)
// ejemplo:
//   leer → leyendo
//   leer → leyó
// condición:
//   tema termina en vocal
//   terminación empieza con "i"
// efecto:
//   reemplazar "i" por "y"


// ============================================================
// 3. CAMBIO ORTOGRÁFICO PRODUCTIVO EN PRETÉRITO (-ducir)
// preservar sonido velar fuerte
// ============================================================

// c → j
// ejemplo: conducir → conduje
// condición:
//   infinitivo termina en "-ducir"
//   antes de terminaciones del pretérito fuerte


// ============================================================
// 4. PRESERVAR ACENTUACIÓN (REGLAS GENERALES DEL ESPAÑOL)
// Estas reglas dependen de la estructura silábica final.
// ============================================================

// agregar tilde para preservar sílaba tónica
// ejemplo:
//   creido → creído
//   dimelo → dímelo


// hiato con vocal cerrada tónica siempre lleva tilde
// ejemplo:
//   leído
//   oído
//   creído


// ============================================================
// NOTAS DE ARQUITECTURA
// ============================================================

// Estas reglas:
//   - son completamente productivas
//   - no dependen de verbos específicos
//   - no deben almacenarse en la tabla de verbos
//   - pertenecen a un módulo ortográfico separado
//
// orden de ejecución:
//   1. formar tema morfológico
//   2. añadir terminación
//   3. aplicar reglas ortográficas de preservación
//   4. aplicar reglas generales de acentuación
//


// The form of a orthographical change rule.
// These rules are only applied to the conjugated forms of verbs.
export interface OrthographicalChangeRule {
    // A pattern describing what to replace.
    // The entire matching text will be replaced by the text described by "replacement".
    match_pattern: RegExp
    // A pattern describing the text that replaces what is matched by match_pattern.
    // A replacement pattern uses the syntax of MS VS Code, e.g.: "c$1"
    // This may contain one capture group index.
    // (The "$" indicates the index of the capture group from the RegExp.)
    replacement_pattern: string
}



// A mapping of the last 3-5 characters of an infinitivo to the possible typographic change rule.
// NOTE: these are searched in the same order that they are presented in this list, and the first match is selected.
const infinitive_ending_sound_rules: {[ending: string]: string} = {
    humar: "u → uy (hiato)",
    husar: "u → uy (hiato)",
    quir: "preserve-hard-c-sound-of-q",
    guar: "break-ue-dipthong-after-gu",
    guir: "preserve-hard-g-sound",
    car: "preserve-hard-c-sound-of-c",
    cer: "preserve-soft-c-sound",
    cir: "preserve-soft-c-sound",
    gar: "preserve-hard-g-sound",
    ger: "preserve-soft-g-sound",
    gir: "preserve-soft-g-sound",
    uar: "break-u-dipthong-after-hard-sound",
    uir: "u → uy (hiato)",    
    zar: "replace-disallowed-ze-zi",
}


// FIX: linguist: are these patterns correct?
// Verb changes made solely for phonetic reasons, and using changes in typography.
const orthographical_change_rules : {[rule_name: string]: OrthographicalChangeRule[]} = {
    "preserve-soft-c-sound": [{
        // example: conocer,IndPres,s1: conoco => conozco
        // counter-example: hacer,IndPret,s3: hico !=> hizco
        // NOTE: this rule is only for verb terminations
        match_pattern: /c([aáoóuú](s|mos|is|n)?)$/u, 
        replacement_pattern: "zc$1"
    }],
    "preserve-hard-c-sound-of-c": [{
        // example: sacar,IndPret,s1: sacé => saqué
        match_pattern: /c([eéií](s|mos|is|n)?)$/u,
        replacement_pattern: "qu$1"
    }],
    "preserve-soft-g-sound": [{
        // example: elegir,IndPres,s1: eligo => elijo
        match_pattern: /g([aáoóuú](s|mos|is|n)?)$/u,
        replacement_pattern: "j$1"
    }],
    "preserve-hard-g-sound": [{
        // example: llegar,IndPret,s1: llegé => llegué
        match_pattern: /g([eéií](s|mos|is|n)?)$/u,
        replacement_pattern: "gu$1"
    },
    {
        // example: extinguir,IndPres,s1: extinguo => extingo
        match_pattern: /gu([aáoó](s|mos|is|n)?)$/u,
        replacement_pattern: "g$1"
    }],
    "replace-disallowed-ze-zi": [{
        // Spanish doesn't have "ze", or "zi"
        // It does have "za" (zanahoria), "zo" (zoo), "zu" (azul)
        // example: empezar,IndPret,s1: empezé => empecé
        match_pattern: /z([eéií](s|mos|is|n)?)$/u,
        replacement_pattern: "c$1"
    }],
    "preserve-hard-c-sound-of-q": [{
        // example: delinquir,IndPres,s1: delinquo -> delinco
        match_pattern: /qu([aáoó](s|mos|is|n)?)$/u,
        replacement_pattern: "c$1"
    }],
    "u → uy (hiato)": [{
        // example: fluir,IndPres,s1: fluo -> fluyo
        match_pattern: /u([aáeéoó](s|mos|is|n)?)$/u,
        replacement_pattern: "uy$1"
    },{
        // example: rehuir,IndPres,s1: rehuyo -> rehúyo
        // example: sahumar,IndPres,s2: sahumas => sahúmas
        // example: ahusar,IndPres,s1: ahuso => ahúso
        // ignora las formas con estrés en la última sílaba
        match_pattern: /([ae])hu([msy][aeo](s|is|n)?)$/u,
        replacement_pattern: "$1hú$2"

    }],
    "break-u-dipthong-after-hard-sound": [{
        // example: actuar,IndPres,s1: actuo => actúo
        // counter-example: aguar,IndPres,s1: aguo !=> agúo
        // NOTE: this rule is only for verb terminations
        match_pattern: /([dlnt])u([aeo](s|n)?)$/u, 
        replacement_pattern: "$1ú$2"
    }],
    "break-ue-dipthong-after-gu": [{
        // example: aguar,IndPret,s1: agué => agüé
        // NOTE: this rule is only for verb terminations
        match_pattern: /gu([eé](s|mos|is|n)?)$/u,
        replacement_pattern: "gü$1"
    }],
}


// Apply any orthographical changes to the given part of a verb conjugation or participle derivation
export function applyOrthographicalChangesCommon(args: {infinitivo: string, forms: VerbForms, suffix: string, do_correct_dieresis: boolean, do_correct_ñi_yi: boolean}): VerbForms | undefined {
    const {infinitivo, forms, do_correct_dieresis, do_correct_ñi_yi} = args
    const changed_forms = applyToVerbForms(forms, (form) => {
        let changed = form
        if (do_correct_dieresis) {
            changed = correctDiéresis(changed)
        }
        if (do_correct_ñi_yi) {
            changed = correctYir(changed)
        }
        // FIX: if possible separte to reduce call complexity
        // mantener hiato
        changed = changed.replace(/([aeo])i(ste|mos|steis|do)$/, "$1í$2")
        // ahijar, ahitar, airar, enairar, desairar
        changed = changed.replace(/(ah?)i([jrt](o|as|a|an|e|es|en))$/, "$1í$2")
        // vocal débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
        changed = changed.replace(/(?<![gq])([aeouü])i([eó])/, "$1y$2")
        // // u débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
        // changed = changed.replace(/(?<![gq])u([aeo])/, "y$1")
        // vocal débil → y   at start of word, e.g. "erguir", "oyer"
        changed = changed.replace(/^(?:(o)|i)e/, "$1ye")
        // remove accent on single sylable forms with dipthong "ui"
        // This was added to support the idea that huir is regular, but unusual ortografía aplica
        changed = changed.replace(/^([bcdfhjlmnpqrstvwxz]+u)í(s)?$/, "$1i$2")
        // changed = accentuate(full_form, suffix).  FAILED
        return changed
    })
    return changed_forms
}


// Apply any orthographical changes to the given form of a verb conjugation.
export function applyOrthographicalChangesToConjugatedForm(infinitivo: string, form: string, suffix: string, do_correct_dieresis: boolean, do_correct_ñi_yi: boolean): string {
    let updated = form
    const rules = findInfinitiveBaseEndingSoundRule(infinitivo)
    if (rules) {
        for (const rule of rules) {
            updated = updated.replace(rule.match_pattern, rule.replacement_pattern)
        }
    }
    [updated] = applyOrthographicalChangesCommon({infinitivo, forms: [updated], suffix, do_correct_dieresis, do_correct_ñi_yi})
    return updated
}


export function applyOrthographicalChangesForParticiples(infinitivo: string, participles: Participios, gerund_ending: string, do_correct_dieresis: boolean, do_correct_ñi_yi: boolean, rules_applied: ParticipleRulesApplied[]): Participios | undefined {
    const orthography : Participios = {}
    const gerundio = applyOrthographicalChangesCommon({infinitivo, forms: participles.gerundio, suffix: gerund_ending, do_correct_dieresis, do_correct_ñi_yi})
    if (participles.participio.length !== 1) {
        throw new Error(`${infinitivo}: can't yet handle case of multiple participios: ${participles.participio}`)
    }
    const participio = applyOrthographicalChangesCommon({infinitivo, forms: participles.participio, suffix: participles.participio[0].slice(-3), do_correct_dieresis, do_correct_ñi_yi})
    if (gerundio && (gerundio !== participles.gerundio)) {
        orthography.gerundio = gerundio
    }
    if (participio && (participio !== participles.participio)) {
        orthography.participio = participio
    }
    if (Object.keys(orthography).length > 0) {
        rules_applied.push({orthography})
    }
    return orthography
}


export function findInfinitiveBaseEndingSoundRule(infinitivo: string) : OrthographicalChangeRule[] | undefined {
    for (const len of [5,4,3]) {
        if (infinitivo.length > len) {
            let ending = infinitivo.slice(-len)
            let rule_name = infinitive_ending_sound_rules[ending]
            if (rule_name) {
                const rules = orthographical_change_rules[rule_name]
                return rules
            }
        }
    }
}


export function correctDiéresis(conjugation: string) {
    // Order matters here: first resolve üi/ü + vowel, then restore güi/güí
    conjugation = conjugation.replace(/üi?([aáeéoó])/, "uy$1")
    return conjugation.replace(/gu([eéií])/, "gü$1")
}


export function correctYir(conjugation: string) {
    conjugation = conjugation.replace(/([ñy])i([eéoó])/, "$1$2")
    return conjugation
}

// @return The conjugated forms after applying the orthographical change rules.
// @param @output rules_applied Contains the names of the rules that were applied to the input verb.
// export function __getOrthographicChanges(stem: string, ending: string, form: string, do_correct_dieresis: boolean): string | undefined {
//     return
// }
export function getOrthographicChanges(infinitivo: string, mood_tense: MoodTense, forms: VerbConjugation, suffixes: VerbConjugationSuffixes, rules_applied: VerbRulesApplied[]): VerbConjugation {
    const orthography: VerbConjugation = {}
    // perhaps this can be merged with other similar tests and changes
    const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll")
    const do_correct_ñi_yi = infinitivo.endsWith("ñir") || infinitivo.endsWith("llir")
    for (const key in forms) {
        const gramatical_person = key as keyof VerbConjugation;
        const changed_forms = applyToVerbForms(forms[gramatical_person], (form: string, i: number) => {
            const suffixes_for_person = suffixes[gramatical_person]
            const suffix = suffixes_for_person[i] || suffixes_for_person[0] 
            return applyOrthographicalChangesToConjugatedForm(infinitivo, form, suffix, do_correct_diéresis, do_correct_ñi_yi)
        })
        orthography[gramatical_person] = changed_forms
    }
    rules_applied.push({orthography})
    return orthography
}
