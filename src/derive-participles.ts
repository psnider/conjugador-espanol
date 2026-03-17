import { Participios, ParticipleRulesApplied, VerbRulesApplied } from "."
import { applyOrthographicalChangesForParticiples } from "./ortografía.js"
import { addPrefixesToBaseForm } from "./prefixes.js"
import { regular_verb_suffixes } from "./regular-verb-rules.js"
import { ConjugationAndDerivationRules, resolveConjugationClass } from "./resolve-conjugation-class.js"
import { applyStemChangeToGerundStem, stem_change_patterns } from "./stem-changes.js"
import { InfinitiveClass } from "./verbos-con-cambios-morfológicas"


function getRegularParticiples(conj_and_deriv_rules: ConjugationAndDerivationRules, rules_applied: ParticipleRulesApplied[]): Participios {
    const {infinitivo, verb_family} = conj_and_deriv_rules
    const stem = infinitivo.slice(0, -2)
    const suffixes = regular_verb_suffixes[verb_family].participle_rules
    const gerundio_base = stem + suffixes.pres.suffix
    const participio_base = stem + suffixes.past.suffix
    const regular: Participios = {gerundio: gerundio_base, participio: participio_base}
    rules_applied.push({regular})
    return regular

    // // if (infinitivo !== infinitivo_sin_prefijos) {
    // if (prefixes) {
    //     const prefixed: Participios = {}

    //     const gerundio_prefixed = addPrefixesToBaseForm(gerundio_base, prefixes)
    //     if (gerundio_prefixed !== gerundio_base) {
    //         prefixed.gerundio = gerundio_prefixed
    //     }
    //     const participio_prefixed =  addPrefixesToBaseForm(participio_base, prefixes)
    //     if (participio_prefixed !== participio_base) {
    //         prefixed.participio = participio_prefixed
    //     }
    //     if (Object.keys(prefixed).length > 0) {
    //         rules_applied.push({prefixed})
    //     }
    //     return {...regular, ...prefixed}
    // } else {
    //     return regular
    // }
}


function getParticipiosExcepcionales(conj_and_deriv_rules: ConjugationAndDerivationRules, rules_applied: ParticipleRulesApplied[]): Participios | undefined {
    const reglas_combinado = conj_and_deriv_rules.morphological_rules?.combinados
    const excepciones_léxicas = reglas_combinado?.excepciones_léxicas
    if (!excepciones_léxicas) return
    const {gerundio, participio} = excepciones_léxicas
    if (gerundio || participio) {
        const {prefixes} = conj_and_deriv_rules
        rules_applied.push({excepciones_léxicas: {gerundio, participio}})
        const result: Participios = {}
        const prefixed: Participios = {}
        if (excepciones_léxicas.gerundio) {
            result.gerundio = addPrefixesToBaseForm(excepciones_léxicas.gerundio, prefixes)
            if (result.gerundio !== excepciones_léxicas.gerundio) {
                prefixed.gerundio = result.gerundio
            }
        }
        if (excepciones_léxicas.participio) {
            result.participio = addPrefixesToBaseForm(excepciones_léxicas.participio, prefixes)
            if (result.participio !== excepciones_léxicas.participio) {
                prefixed.participio = result.participio
            }
        }
        if (Object.keys(prefixed).length > 0) {
            rules_applied.push({prefixed})
        }
        return result
    }
}


function getOrthographicChangesForParticiples(rules: ConjugationAndDerivationRules, regulares: Participios, rules_applied: ParticipleRulesApplied[]): Participios | undefined {
    function splitGerund(form: string, verb_family: InfinitiveClass) {
        const len = verb_family === "-ar" ? 4 : 5
        return {
            gerund_stem: form.slice(0, -len),
            ending: form.slice(-len)
        }
    }
    const {infinitivo, verb_family, morphological_rules} = rules
    const alternancia = morphological_rules?.combinados?.alternancia_vocálica
    const {gerund_stem, ending} = splitGerund(regulares.gerundio, verb_family)
    const excepcion = morphological_rules?.combinados?.excepciones_léxicas?.gerundio_tema_cambio_excepcional
    const gerundio_tema_cambio = excepcion ?? stem_change_patterns[alternancia!]?.gerund_rule
    const excepcional = !!excepcion
    const gerundio = gerundio_tema_cambio
            ? applyStemChangeToGerundStem({gerund_stem, verb_family, gerundio_tema_cambio,excepcional, rules_applied}) + ending
            : regulares.gerundio
    // const do_correct_diéresis = infinitivo.includes("ü")
    const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll")
    const do_correct_ñi_yi = infinitivo.endsWith("ñir") || infinitivo.endsWith("llir")
    const orthographical_changes = applyOrthographicalChangesForParticiples({...regulares, gerundio}, ending, do_correct_diéresis, do_correct_ñi_yi, rules_applied)
    const result = {...regulares, gerundio, ...orthographical_changes}
    if (result.gerundio === regulares.gerundio) delete result.gerundio
    if (result.participio === regulares.participio) delete result.participio
    return result
}


function _deriveParticiples(rules: ConjugationAndDerivationRules): {participles: Participios, rules_applied: ParticipleRulesApplied[]} {
    const rules_applied: ParticipleRulesApplied[] = []
    const excepcionales = getParticipiosExcepcionales(rules, rules_applied)
    if (excepcionales?.gerundio && excepcionales?.participio) {
        return {participles: excepcionales, rules_applied}
    }
    const regulares = getRegularParticiples(rules, rules_applied)
    const ortográficos = getOrthographicChangesForParticiples(rules, regulares, rules_applied)
    const final_forms = {...regulares, ...ortográficos, ...excepcionales}
    return {participles: final_forms, rules_applied}
}


export function deriveParticiples(infinitivo: string): {participles: Participios, rules_applied: ParticipleRulesApplied[]} {
    console.log(`deriveParticiples(${infinitivo})`)
    const conj_and_deriv_rules = resolveConjugationClass(infinitivo)
    if (!conj_and_deriv_rules) {
        return undefined
    }
    let {participles, rules_applied} = _deriveParticiples(conj_and_deriv_rules)
    return {participles, rules_applied}
}
