import { FormaConjugada, Participios, CambiosDerivacionales, CambiosPorRegla } from "."
import { applyToFormasConjugadas, combinaParticipios, extraeTema, formasConjugadasIgual, getForma } from "./lib.js"
import { applyOrthographicalChangesCommon } from "./ortografía.js"
import { addPrefixesToBaseForm } from "./prefixes.js"
import { regular_verb_suffixes } from "./regular-verb-rules.js"
import { ConjugationAndDerivationRules, resolveConjugationClass } from "./resolve-conjugation-class.js"
import { applyStemChangeToGerundStem, stem_change_patterns } from "./stem-changes.js"
import { InfinitiveClass } from "./verbos-con-cambios-morfológicas.js"


const gerundio_sufijos = ["ando", "iendo", "yendo", "endo"]
const participio_sufijos = ["ado", "ido", "ho", "to", "o"]


// Merge changed forms into a list of forms.
function accumulateChangedForms(base: FormaConjugada[], updates?: (FormaConjugada | undefined)[]) : FormaConjugada[] {
    const accumulated: FormaConjugada[] = [...base]
    if (updates) {
        if (base.length !== updates.length) {
            throw new Error(`expected base and updates to have same length: base=${JSON.stringify(base)} updates=${JSON.stringify(updates)}`)
        }
        for (const i in updates) {
            const update = updates[i]
            if (update) {
                const forma = getForma(update)
                if (forma) {
                    accumulated[i] = update
                }
            }
        }
    }
    return accumulated
}


function getRegularParticiples(conj_and_deriv_rules: ConjugationAndDerivationRules, derivaciones: CambiosDerivacionales): Participios<FormaConjugada[]> {
    const {infinitivo, verb_family} = conj_and_deriv_rules
    const stem = infinitivo.slice(0, -2)
    const suffixes = regular_verb_suffixes[verb_family].participle_rules
    const gerundio_base = stem + suffixes.pres!.suffix
    const participio_base = stem + suffixes.past!.suffix
    const regular: Participios<FormaConjugada[]> = {gerundio: [gerundio_base], participio: [participio_base]}
    return regular
}


function getParticipiosExcepcionales(conj_and_deriv_rules: ConjugationAndDerivationRules, derivaciones: CambiosDerivacionales): Participios<FormaConjugada[]> | undefined {
    const reglas_de_modelo = conj_and_deriv_rules.morphological_rules?.de_modelo
    const reglas_de_infinitivo = conj_and_deriv_rules.morphological_rules?.de_infinitivo
    const excepciones_léxicas = reglas_de_infinitivo?.excepciones_léxicas || reglas_de_modelo?.excepciones_léxicas
    if (!excepciones_léxicas) return
    const {gerundio, participio} = excepciones_léxicas
    if (gerundio || participio) {
        const {prefixes} = conj_and_deriv_rules
        const result: Participios<FormaConjugada[]> = {}
        const prefix_rules_applied: Participios<CambiosPorRegla[]> = {}
        if (gerundio) {
            const regla = (reglas_de_infinitivo?.excepciones_léxicas ? "tema excepcional del infinitivo" : "tema excepcional del modelo")
            const temas: FormaConjugada[] = []
            const sufijos: FormaConjugada[] = []
            for (const gerundio_forma of gerundio) {
                const split_gerundios = extraeTema(getForma(gerundio_forma), gerundio_sufijos)
                temas.push(split_gerundios.tema)
                sufijos.push(split_gerundios.sufijo)
            }
            derivaciones.cambios.gerundio.push({regla, temas, sufijos})
            result.gerundio = addPrefixesToBaseForm(gerundio, prefixes)
            if ( ! formasConjugadasIgual(result.gerundio, excepciones_léxicas.gerundio)) {
                const temas_prefijados = addPrefixesToBaseForm(temas, prefixes)
                derivaciones.cambios.gerundio.push({regla: "prefijos de clase conjugacional", temas: temas_prefijados})
            }
        }
        if (participio) {
            const temas: FormaConjugada[] = []
            const sufijos: FormaConjugada[] = []
            for (const participio_forma of participio) {
                const split_participios = extraeTema(getForma(participio_forma), participio_sufijos)
                temas.push(split_participios.tema)
                sufijos.push(split_participios.sufijo)
            }
            if (reglas_de_infinitivo?.excepciones_léxicas?.participio) {
                const regla = "tema excepcional del infinitivo"
                derivaciones.cambios.participio.push({regla, temas, sufijos})
                result.participio = reglas_de_infinitivo?.excepciones_léxicas.participio
            } else {
                const regla = "tema excepcional del modelo"
                derivaciones.cambios.participio.push({regla, temas, sufijos})
                result.participio = addPrefixesToBaseForm(participio, prefixes)
                if (! formasConjugadasIgual(result.participio, participio)) {
                    const temas_prefijados: FormaConjugada[] = []
                    const sufijos_prefijados: FormaConjugada[] = []
                    for (const participio_forma of participio) {
                        const split_participios = extraeTema(getForma(participio_forma), participio_sufijos)
                        temas_prefijados.push(split_participios.tema)
                        sufijos_prefijados.push(split_participios.sufijo)
                    }
                    derivaciones.cambios.participio.push({regla, temas: temas_prefijados, sufijos: sufijos_prefijados})
                }
            }
        }
        if (Object.keys(prefix_rules_applied).length > 0) {
            derivaciones.cambios.gerundio.push(...prefix_rules_applied.gerundio)
            derivaciones.cambios.participio.push(...prefix_rules_applied.participio)
        }
        return result
    }
}


function getOrthographicChangesForParticiples(conj_and_deriv_rules: ConjugationAndDerivationRules, regulares: Participios<FormaConjugada[]>, derivaciones: CambiosDerivacionales): Participios<FormaConjugada[]> {
    function splitGerund(form: string, verb_family: InfinitiveClass) {
        const len = verb_family === "-ar" ? 4 : 5
        return {
            gerund_stem: form.slice(0, -len),
            ending: form.slice(-len)
        }
    }
    const {infinitivo, verb_family, morphological_rules} = conj_and_deriv_rules
    const reglas_de_modelo = conj_and_deriv_rules.morphological_rules?.de_modelo
    const reglas_de_infinitivo = conj_and_deriv_rules.morphological_rules?.de_infinitivo
    const excepciones_léxicas = reglas_de_infinitivo?.excepciones_léxicas || reglas_de_modelo?.excepciones_léxicas
    // const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll")
    // const do_correct_ñi_yi = infinitivo.endsWith("ñer") || infinitivo.endsWith("ñir") || infinitivo.endsWith("llir")
    const alternancia = reglas_de_modelo?.alternancia_vocálica || reglas_de_infinitivo?.alternancia_vocálica
    const ponga_hiato = morphological_rules?.de_modelo?.ponga_hiato || morphological_rules?.de_infinitivo?.ponga_hiato
    const cambios = derivaciones.cambios
    const gerundios_cambiados = applyToFormasConjugadas(regulares.gerundio!, (gerundio) => {
        const split = splitGerund(gerundio, verb_family)
        const gerund_stem = split.gerund_stem
        const gerundio_tema_cambio_excepcional = excepciones_léxicas?.gerundio_tema_cambio_excepcional
        const gerundio_tema_cambio = gerundio_tema_cambio_excepcional ?? stem_change_patterns[alternancia!]?.gerund_rule
        const excepcional = !!gerundio_tema_cambio_excepcional
        const w_stem_change = gerundio_tema_cambio
                ? applyStemChangeToGerundStem({gerund_stem, verb_family, gerundio_tema_cambio, ponga_hiato, excepcional, cambios}) + split.ending
                : gerundio
        return w_stem_change
    })
    let gerundios_actualizados = accumulateChangedForms(regulares.gerundio!, gerundios_cambiados)
    const cambios_gerundios_con_ortografía = applyOrthographicalChangesCommon(infinitivo, gerundios_actualizados, gerundio_sufijos)
    cambios.gerundio.push(...cambios_gerundios_con_ortografía.reglas_aplicadas)
    gerundios_actualizados = accumulateChangedForms(gerundios_actualizados, cambios_gerundios_con_ortografía.formas_conjugadas_cambiadas)

    const cambios_participios_con_ortografía = applyOrthographicalChangesCommon(infinitivo, regulares.participio, participio_sufijos)
    cambios.participio.push(...cambios_participios_con_ortografía.reglas_aplicadas)
    const participios_actualizados = accumulateChangedForms(regulares.participio!, cambios_participios_con_ortografía.formas_conjugadas_cambiadas)

    // const participios_actualizado = accumulateChangedForms(regulares.participio!, participios_cambiados)
    return {gerundio: gerundios_actualizados, participio: participios_actualizados}
}


function _deriveParticiples(conj_and_deriv_rules: ConjugationAndDerivationRules): {participles: Participios<FormaConjugada[]>, derivaciones: CambiosDerivacionales} {
    const {infinitivo, modelo, prefixes, morphological_rules} = conj_and_deriv_rules
    const clase_de_conjugación = prefixes?.clase_de_conjugación
    const de_modelo = morphological_rules?.de_modelo
    const de_infinitivo = morphological_rules?.de_infinitivo
    const impersonal = (de_infinitivo ? de_infinitivo.impersonal : de_modelo?.impersonal)
    const derivaciones: CambiosDerivacionales = {infinitivo, modelo, impersonal, cambios: {gerundio: [], participio: []}}
    const excepcionales = getParticipiosExcepcionales(conj_and_deriv_rules, derivaciones)
    if (excepcionales?.gerundio && excepcionales?.participio) {
        return {participles: excepcionales, derivaciones}
    }
    // FIX: where are the prefixes applied from clase_de_conjugación?
    const regulares = getRegularParticiples(conj_and_deriv_rules, derivaciones)
    // FIX: this is returning unchanged forms
    const ortográficos = getOrthographicChangesForParticiples(conj_and_deriv_rules, regulares, derivaciones)
    const reg_w_ortográficos = combinaParticipios(regulares, ortográficos)
    const final_forms = combinaParticipios(reg_w_ortográficos, excepcionales)
    return {participles: final_forms, derivaciones}
}


export function deriveParticiples(infinitivo: string): {participles: Participios<FormaConjugada[]>, derivaciones: CambiosDerivacionales} | undefined {
    console.log(`deriveParticiples(${infinitivo})`)
    const conj_and_deriv_rules = resolveConjugationClass(infinitivo)
    if (!conj_and_deriv_rules) {
        return undefined
    }
    let {participles, derivaciones} = _deriveParticiples(conj_and_deriv_rules)
    return {participles, derivaciones}
}
