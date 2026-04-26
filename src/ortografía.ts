import { MoodTense, VerbConjugation, VerbConjugationSuffixes, CambiosPorPersona, CambiosPorRegla, FormaConjugada } from ".";
import { accumulateChangedForms } from "./conjugate-verb";
import { applyToFormasConjugadas, combinaFormasConjugadas, asFormaConjugada, extraeTema, isValueless, getForma, formasConjugadasIgual, assert } from "./lib.js";
import { ReglasDeConjugaciónDeVerbo } from "./verbos-con-cambios-morfológicas";

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
    // Limit an orthographical change rule to verbs with a certain form.
    match_infinitivo?: RegExp
    // A pattern describing what to replace.
    // The entire matching text will be replaced by the text described by "replacement".
    match_pattern: RegExp
    // A pattern describing the text that replaces what is matched by match_pattern.
    // A replacement pattern uses the syntax of MS VS Code, e.g.: "c$1"
    // This may contain one capture group index.
    // (The "$" indicates the index of the capture group from the RegExp.)
    replacement_pattern: string
    cambio_sufijo?: string // rule // FIX: yet unused, formalize or remove
}




// Vocal cerrada átona + vocal abierta
const diptongos_creciente =   ["ia", "ie", "io", "ua", "ue", "uo"]
// Vocal abierta + vocal cerrada átona
const diptongos_decreciente = ["ai", "au", "ei", "eu", "oi", "ou"]
// Dos vocales cerradas diferentes
const diptongos_homogéneo =   ["iu", "ui"]


// A mapping of the last 3-5 characters of an infinitivo to the possible orthographic change rule.
// NOTE: these are searched in the same order that they are presented in this list, and the first match is selected.
const infinitive_ending_sound_rules: {[ending: string]: string} = {
    humar: "u → uy (hiato)",
    husar: "u → uy (hiato)",
    quir: "preserve-hard-c-sound-of-q",
    guar: "break-ue-dipthong-after-gu",
    guir: "preserve-hard-g-sound",
    ecer: "preserve-soft-c-sound-of-ecer",
    car: "preserve-hard-c-sound-of-c",
    cir: "soften-hard-c-sound",
    gar: "preserve-hard-g-sound",
    ger: "preserve-soft-g-sound",
    gir: "preserve-soft-g-sound",
    uar: "break-u-dipthong-after-hard-sound",
    uir: "u → uy (hiato)",    
    zar: "replace-disallowed-ze-zi",
    aír: "separa a + vocal-abierto"
}


// FIX: linguist: are these patterns correct?
// Verb changes made solely for phonetic reasons, and using changes in orthography.
// Note that these change only the stems.
const orthographical_change_rules_for_terminations : {[rule_name: string]: OrthographicalChangeRule[]} = {
    "preserve-soft-c-sound-of-ecer": [{
        // example: amanecer,IndPres,s1: amanezco => amanezco
        // counter-example: hacer,IndPret,s3: hico !=> hizco
        // NOTE: this rule is only for verb terminations
        match_pattern: /c([aáoóuú](s|mos|is|n)?)$/u, 
        replacement_pattern: "zc$1"
    }],
    // {
    //     // example: cocer,IndPres,s1: cueco => cuezo
    //     // example: torcer,IndPres,s1: tuerco => tuerzo
    //     match_pattern: /c([aáoóuú](s|mos|is|n)?)$/u, 
    //     replacement_pattern: "z$1"
    // }],
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
        // anticuar
        // example: actuar,IndPres,s1: actuo => actúo
        // counter-example: aguar,IndPres,s1: aguo !=> agúo
        // NOTE: this rule is only for verb terminations
        match_pattern: /([cdlnst])u([aeo](s|n)?)$/u, 
        replacement_pattern: "$1ú$2"
    }],
    "break-ue-dipthong-after-gu": [{
        // example: aguar,IndPret,s1: agué => agüé
        // NOTE: this rule is only for verb terminations
        match_pattern: /gu([eé](s|mos|is|n)?)$/u,
        replacement_pattern: "gü$1"
    }],
    "separa a + vocal-abierto": [{
        // This was added to support the idea that desvaír is regular, but unusual ortografía aplica
        match_pattern: /a([aáeéoó](s|mos|is|n)?)$/u,
        replacement_pattern: "ay$1"
    }]
}
type OrthographicalChangeRuleForTerminationName = keyof typeof orthographical_change_rules_for_terminations


// Note that, except for "remueve tilde single sílaba", these change only the stems.
const orthographical_change_rules_general : {[rule_name: string]: OrthographicalChangeRule[]} = {
    "diéresis": [
        // Order matters here: first resolve üi/ü + vowel, then restore güi/güí
        {match_infinitivo: /ü|gon|goll/, match_pattern: /üi?([aáeéoó])/, replacement_pattern: "uy$1"},
        {match_infinitivo: /ü|gon|goll/, match_pattern: /gu([eéií])/, replacement_pattern: "gü$1"}
    ],
    "elimina 'i/y' después de 'ñ/y/ll'": [
        {match_pattern: /([ñy]|ll)i([eéoó])/, replacement_pattern: "$1$2"}
    ],
    "mantiene hiato": [
        {match_pattern: /([aeo])i(ste|mos|steis|do)$/, replacement_pattern: "$1í$2", cambio_sufijo: "i:í"},
        // ahijar, ahitar, airar, aislar, amohinar, enairar, desairar
        {match_pattern: /([ao]h?)i(([jnrt]|sl)(o|as|a|an|e|es|en))$/, replacement_pattern: "$1í$2"}
    ],
    "vocal débil → 'y'": [
        // after other vowel, but not after "gu" or "qu" which are considered a single consonants
        {match_pattern: /(?<![gq])([aeouü])i([eó])/, replacement_pattern: "$1y$2", cambio_sufijo: "i:y"}
    ],
    "rompe diptongo delantero 'oe', 'ie'": [
        // vocal débil → y   at start of word, e.g. "erguir", "oyer"
        {match_pattern: /^(?:(o)|i)e/, replacement_pattern: "$1ye"}
    ],
    "remueve tilde single sílaba con 'uí'": [
        // remove accent on single sylable forms with dipthong "ui"
        // This was added to support the idea that huir is regular, but unusual ortografía aplica
        {match_pattern: /^([bcdfhjlmnpqrstvwxz]+u)í(s)?$/, replacement_pattern: "$1i$2", cambio_sufijo: "í:i"}
    ],
    "rompe diptongo 'au'": [
        // aullar, aunar, aupar, maullar
        // This was added to support the idea that huir is regular, but unusual ortografía aplica
        {match_pattern: /au(([np]|ll)(o|as|a|an|e|es|en))$/, replacement_pattern: "aú$1"}
    ],
}
type OrthographicalChangeRuleGeneralName = keyof typeof orthographical_change_rules_general


export type OrthographicalChangeRuleName = OrthographicalChangeRuleForTerminationName | OrthographicalChangeRuleGeneralName


interface Result_applyOrthographicalChangesCommon {
    formas_conjugadas_cambiadas?: FormaConjugada[]
    reglas_aplicadas: CambiosPorRegla[]
}

// Apply any orthographical changes to the given part of a verb conjugation or participle derivation
export function applyOrthographicalChangesCommon(infinitivo: string, formas_conjugadas_completas: FormaConjugada[], sufijos: FormaConjugada[]) : Result_applyOrthographicalChangesCommon {
    const reglas_aplicadas: CambiosPorRegla[] = []
    // if (do_correct_diéresis) {
    //     const diéresis_corregido = correctDiéresis(updated)
    //     updated = diéresis_corregido || updated
    // }
    // if (do_correct_ñi_yi) {
    //     const ñi_yi_corregido = correctÑiYi(updated)
    //     updated = ñi_yi_corregido || updated
    // }
    // FIX: if possible separate to reduce call complexity
    // mantener hiato
    // changed = changed.replace(/([aeo])i(ste|mos|steis|do)$/, "$1í$2")

    // ahijar, ahitar, airar, aislar, amohinar, enairar, desairar
    // changed = changed.replace(/([ao]h?)i(([jnrt]|sl)(o|as|a|an|e|es|en))$/, "$1í$2")

    // vocal débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
    // changed = changed.replace(/(?<![gq])([aeouü])i([eó])/, "$1y$2")

    // // u débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
    // changed = changed.replace(/(?<![gq])u([aeo])/, "y$1")
    // vocal débil → y   at start of word, e.g. "erguir", "oyer"
    // changed = changed.replace(/^(?:(o)|i)e/, "$1ye")

    // remove accent on single sylable forms with dipthong "ui"
    // This was added to support the idea that huir is regular, but unusual ortografía aplica
    // changed = changed.replace(/^([bcdfhjlmnpqrstvwxz]+u)í(s)?$/, "$1i$2")
    // changed = accentuate(full_form, suffix).  FAILED
    let formas_conjugadas_actualizadas = [...formas_conjugadas_completas]
    for (const regla_nombre in orthographical_change_rules_general) {
        const rules = orthographical_change_rules_general[regla_nombre]
        for (const rule of rules) {
            if (rule.match_infinitivo && !infinitivo.match(rule.match_infinitivo)) {
                break
            }
            const formas_conjugadas_cambiadas = applyToFormasConjugadas(formas_conjugadas_actualizadas, (forma, i, uso) => {
                const updated = forma.replace(rule.match_pattern, rule.replacement_pattern)
                if (updated.length < forma.length) {
                    if (["ieron", "ió"].includes((getForma(sufijos[0])))) {
                        sufijos = [getForma(sufijos[0]).slice(1)]
                    }
                }
                return updated
            })
            if ( ! isValueless(formas_conjugadas_cambiadas)) {
                const regla_aplicada = getCambiosPorRegla(regla_nombre, formas_conjugadas_cambiadas, sufijos)
                if (regla_aplicada) {
                    reglas_aplicadas.push(regla_aplicada)
                }
                formas_conjugadas_actualizadas = combinaFormasConjugadas(formas_conjugadas_actualizadas, formas_conjugadas_cambiadas)
            }
            // const replaced = changed.replace(rule.match_pattern, rule.replacement_pattern)
            // if (replaced !== changed) {
            //     reglas_ortograficas_applicadas.push({regla_nombre, forma: replaced})
            //     changed = replaced
            // }
        }
    }
    const formas_conjugadas_cambiadas = (formasConjugadasIgual(formas_conjugadas_actualizadas, formas_conjugadas_completas) ? undefined : formas_conjugadas_actualizadas)
    return {formas_conjugadas_cambiadas, reglas_aplicadas}
}


export function getCambiosPorRegla(regla: OrthographicalChangeRuleName, formas_conjugadas: FormaConjugada[], sufijos_esperados: FormaConjugada[]) : CambiosPorRegla | undefined {
    if (!isValueless(formas_conjugadas)) {
        const temas: FormaConjugada[] = []
        const sufijos: FormaConjugada[] = []
        for (const forma_conjugada of formas_conjugadas) {
            if (forma_conjugada) {
                const forma_completa = getForma(forma_conjugada)
                const {tema, sufijo} = extraeTema(forma_completa, sufijos_esperados)
                const forma_conjudada_tema = asFormaConjugada(tema, forma_conjugada)
                const forma_conjudada_sufijo = asFormaConjugada(sufijo, forma_conjugada)
                temas.push(forma_conjudada_tema)
                sufijos.push(forma_conjudada_sufijo)
            }
        }
        return {regla, temas, sufijos}
    }
}


// combine these similar types Result_*
interface Result_applyBaseEndingSoundRules {
    formas_conjugadas_cambiadas?: FormaConjugada[]
    reglas_aplicadas?: CambiosPorRegla[]
}


function applyBaseEndingSoundRules(infinitivo: string, formas_conjugadas: FormaConjugada[], sufijos_por_persona: FormaConjugada[]) : Result_applyBaseEndingSoundRules {
    function findInfinitiveBaseEndingSoundRule(infinitivo: string) : OrthographicalChangeRuleName | undefined {
        for (const len of [5,4,3]) {
            if (infinitivo.length > len) {
                let ending = infinitivo.slice(-len)
                let rule_name = infinitive_ending_sound_rules[ending]
                if (rule_name) {
                    return rule_name
                }
            }
        }
    }
    let formas_conjugadas_cambiadas: FormaConjugada[]
    const reglas_aplicadas: CambiosPorRegla[] = []
    const regla_nombre = findInfinitiveBaseEndingSoundRule(infinitivo)
    if (regla_nombre) {
        const reglas_ortograficas = orthographical_change_rules_for_terminations[regla_nombre]
        if (reglas_ortograficas) {
            for (const regla_ortografica of reglas_ortograficas) {
                const formas_conjugadas_acumuladas = combinaFormasConjugadas(formas_conjugadas, formas_conjugadas_cambiadas)
                const con_ortografía = applyToFormasConjugadas(formas_conjugadas_acumuladas, (forma, i, uso) => {
                    const updated = forma.replace(regla_ortografica.match_pattern, regla_ortografica.replacement_pattern)
                    return updated
                })
                if ( ! isValueless(con_ortografía)) {
                    const regla_aplicada = getCambiosPorRegla(regla_nombre, formas_conjugadas_cambiadas, sufijos_por_persona)
                    // FIX: remove this guard if it's not needed
                    if (regla_aplicada) {
                        reglas_aplicadas.push(regla_aplicada)
                    }
                    formas_conjugadas_cambiadas = combinaFormasConjugadas(formas_conjugadas_cambiadas, con_ortografía)
                }
            }
        }
        return {formas_conjugadas_cambiadas, reglas_aplicadas}
    } else {
        return {}
    }
}

// combine these similar types Result_*
interface FormasYReglas {
    formas_conjugadas_cambiadas?: FormaConjugada[]
    cambios?: CambiosPorRegla[]
}


// Apply any orthographical changes to the given forms of a verb conjugation.
export function applyOrthographicalChangesToConjugatedForm(infinitivo: string, formas_conjugadas: FormaConjugada[], suffixes_por_persona: FormaConjugada[]) : FormasYReglas {
    const cambios: CambiosPorRegla[] = []
    const resultos_de_terminación = applyBaseEndingSoundRules(infinitivo, formas_conjugadas, suffixes_por_persona)
    let formas_conjugadas_cambiadas = combinaFormasConjugadas(formas_conjugadas, resultos_de_terminación?.formas_conjugadas_cambiadas)
    if (resultos_de_terminación?.reglas_aplicadas) {
        cambios.push(...resultos_de_terminación?.reglas_aplicadas)
    }

    const w_orthographic_changes = applyOrthographicalChangesCommon(infinitivo, formas_conjugadas_cambiadas, suffixes_por_persona)
    formas_conjugadas_cambiadas = combinaFormasConjugadas(formas_conjugadas_cambiadas, w_orthographic_changes?.formas_conjugadas_cambiadas)
    if (w_orthographic_changes?.reglas_aplicadas) {
        cambios.push(...w_orthographic_changes?.reglas_aplicadas)
    }
    return {formas_conjugadas_cambiadas, cambios}
}


// export function correctDiéresis(forma: string) : string | undefined {
//     // Order matters here: first resolve üi/ü + vowel, then restore güi/güí
//     let updated = forma.replace(/üi?([aáeéoó])/, "uy$1")
//     updated = updated.replace(/gu([eéií])/, "gü$1")
//     if (updated !== forma) {
//         return updated
//     }
// }


// export function correctÑiYi(forma: string) : string | undefined {
//     let updated = forma.replace(/([ñy]|ll)i([eéoó])/, "$1$2")
//     if (updated !== forma) {
//         return updated
//     }
// }


export function getOrthographicChanges_IndPret3P(infinitivo: string, tema: string, sufijo: string): string {
    // Nota: no guarda o uso los cambios encontrados para esta forma de IndPret3P, porque es independiente del resto de la conjugación
    const cambios_aplicadas: CambiosPorPersona = {}
    // const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll")
    // const do_correct_ñi_yi = infinitivo.endsWith("ñer") || infinitivo.endsWith("ñir") || infinitivo.endsWith("llir")
    const forma_unidio = tema + sufijo
    const con_ortografía = applyOrthographicalChangesToConjugatedForm(infinitivo, [forma_unidio], [sufijo])  //, do_correct_diéresis, do_correct_ñi_yi)
    if (con_ortografía.formas_conjugadas_cambiadas.length > 0) {
        assert(con_ortografía.formas_conjugadas_cambiadas.length === 1, `expected only one form: ${con_ortografía.formas_conjugadas_cambiadas}`)
        const forma = getForma(con_ortografía.formas_conjugadas_cambiadas[0])
        return forma
    } else {
        return forma_unidio
    }
}


// @return The conjugated forms after applying the orthographical change rules.
// @param @output rules_applied Contains the names of the rules that were applied to the input verb.
// export function __getOrthographicChanges(stem: string, ending: string, form: string, do_correct_diéresis: boolean): string | undefined {
//     return
// }
export function getOrthographicChanges(infinitivo: string, mood_tense: MoodTense, joined_forms: VerbConjugation, suffixes: VerbConjugationSuffixes, cambios: CambiosPorPersona): VerbConjugation {
    const orthography: VerbConjugation = {}
    // // perhaps this can be merged with other similar tests and changes
    // const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll")
    // // FIX: these tests should be specified only once
    // const do_correct_ñi_yi = infinitivo.endsWith("ñer") || infinitivo.endsWith("ñir") || infinitivo.endsWith("llir")
    for (const key in joined_forms) {
        const persona = key as keyof VerbConjugation;
        const joined_forms_por_persona = joined_forms[persona]
        const suffixes_por_persona = suffixes[persona]
        const reglas_aplicadas_por_ortografía = applyOrthographicalChangesToConjugatedForm(infinitivo, joined_forms_por_persona, suffixes_por_persona) // , do_correct_diéresis, do_correct_ñi_yi)
        // FIX: can't this be formalized so only one test is needed?
        if (reglas_aplicadas_por_ortografía?.cambios.length > 0) {
            cambios[persona].push(...reglas_aplicadas_por_ortografía.cambios)
        }
        if (! isValueless(reglas_aplicadas_por_ortografía.formas_conjugadas_cambiadas)) {
            orthography[persona] = combinaFormasConjugadas(orthography[persona], reglas_aplicadas_por_ortografía.formas_conjugadas_cambiadas)
        }

        // if (!isValueless(combinadas)) {
            
        //     orthography[persona] = combinadas
        //     const cambios_temas: FormaConjugadaConRegla[] = []
        //     const cambios_sufijos: FormaConjugadaConRegla[] = []
        //     for (const i in combinadas) {
        //         const combinada = combinadas[i]
        //         const reglas_aplicadas = reglas_aplicadas_por_forma[i]
        //         for (const regla_aplicada of reglas_aplicadas) {
        //             const regla = regla_aplicada.regla_nombre
        //             const sufijos_por_persona = suffixes[persona]
        //             const {tema, sufijo} = extraeTema(regla_aplicada.forma, sufijos_por_persona)
        //             const tema_forma_conjugada = asFormaConjugada(tema, combinada)
        //             const sufijo_forma_conjugada = asFormaConjugada(sufijo, combinada)
        //             cambios_temas.push({forma_conjugada: tema_forma_conjugada, regla})
        //             cambios_sufijos.push({forma_conjugada: sufijo_forma_conjugada, regla})
        //         }
        //     }
        //     cambios_aplicadas[persona] = cambios_aplicadas[persona] || []
        //     cambios_aplicadas[persona].push({temas:})
        // }
    }
    // FIX: this is very likely too simple
    // rules_applied.reglas.push({regla: "", temas: reglas_aplicadas})
    return orthography
}
