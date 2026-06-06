// Objetivo del módulo
//   Aplicar una alternancia vocálica productiva al tema verbal base.
// 1. Condición de activación
//   - si existe alternancia_vocálica
//   Nada más.
// 2. Dominio de aplicación
//   Aplicar solo a:
//   - Presente indicativo: s2, s3, p3
//   - Presente subjuntivo: todas las personas
//   - Imperativo:
//     - tú
//     - usted / ustedes
//   (No aplicar a s1 si existe tema_presente_yo_del_modelo)
// 3. Base de aplicación
//   La alternancia se aplica sobre:
//   - tema_regular
//   Nunca sobre:
//   - tema_presente_yo_del_modelo
//   - tema_pretérito_del_modelo
//   - tema_futuro_del_modelo
// 4. Condición fonológica
//   Aplicar solo si:
//   - la vocal afectada está en sílaba tónica
//     (No intentes calcular acento aquí; el motor ya sabe qué sílaba es tónica.)
// 5. Tipos comunes de alternancia
//   Ejemplos de StemChangeRuleId: "e:ie", "o:ue", "e:i", "u:ue"
// 6. Exclusiones duras
//   No aplicar nunca a:
//   - imperfecto
//   - pretérito
//   - futuro
//   - condicional
//   - infinitivo
//   - participio
//   - gerundio
// 7. Orden de ejecución (crítico)
//   - Seleccionar tema (tema_presente_yo_del_modelo si corresponde)
//   - Si no hay tema_presente_yo_del_modelo, aplicar alternancia_vocálica
//   - Aplicar reglas ortográficas
//   - Añadir terminaciones


import type { CambiosPorPersona, MoodTense, PersonasGramaticalesConVos, StemChangeRuleId } from "./index"
import type { VerbConjugationStems } from "./index-privado"
import type { ConjugationAndDerivationRules } from "./resolve-conjugation-class.js";
import { applyToFormasConjugadas, combinaFormasConjugadas, getForma, isValueless } from "./lib.js";
import { applyStemChangePattern, getStemChangesFromRule, stem_change_descriptions } from "./stem-changes.js";


const domains_alternancia_vocálica: MoodTense[] = ["IndPres", "SubPres", "CmdPos"]

export function getTemaConAlternanciaVocálica_IndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules, tema_sin_alternancia: string) : string {
    const {verb_family, morphological_rules} = conj_and_deriv_rules
    const alternancia_vocálica = morphological_rules?.de_modelo?.alternancia_vocálica || morphological_rules?.de_infinitivo?.alternancia_vocálica
    const ponga_hiato = morphological_rules?.de_modelo?.ponga_hiato || morphological_rules?.de_infinitivo?.ponga_hiato
    const stem_changes_per_form = getStemChangesFromRule("IndPret", alternancia_vocálica)
    const stem_change_rule_id = stem_changes_per_form?.p3
    if (stem_change_rule_id) {
        const rule_description = stem_change_descriptions[stem_change_rule_id]
        if (rule_description) {
            if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
                const changed = applyStemChangePattern(tema_sin_alternancia, rule_description, ponga_hiato)
                return changed
            }
        }
    }
    return tema_sin_alternancia
}


function moodTenseIsBasedOnIndPret3PStem(mood_tense: MoodTense) {
    return ["SubImp", "SubFut"].includes(mood_tense)
}


interface Result_getTemaConAlternanciaVocálica {
    changed_stems?: VerbConjugationStems
    reglas_aplicadas: CambiosPorPersona
}


export function getTemaConAlternanciaVocálica(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, temas_sin_alternancias: VerbConjugationStems) : Result_getTemaConAlternanciaVocálica {
    const changed_stems : VerbConjugationStems = {}
    const reglas_aplicadas: CambiosPorPersona = {s1: [], s2: [], s3: [], p1: [], p2: [], p3: [], vos: []}
    if (!moodTenseIsBasedOnIndPret3PStem(mood_tense)) {
        const {verb_family, morphological_rules} = conj_and_deriv_rules
        const alternancia_vocálica = morphological_rules?.de_modelo?.alternancia_vocálica || morphological_rules?.de_infinitivo?.alternancia_vocálica
        const ponga_hiato = morphological_rules?.de_modelo?.ponga_hiato || morphological_rules?.de_infinitivo?.ponga_hiato
        if (alternancia_vocálica) {
            const tema_presente_yo_del_modelo = morphological_rules?.de_modelo?.tema_presente_yo_del_modelo
            const sufijo_presente_yo = morphological_rules?.de_modelo?.sufijo_presente_yo
            const dont_apply_to_yo = (mood_tense === "IndPres") && (tema_presente_yo_del_modelo || sufijo_presente_yo)
            // FIX: linguist: vocal_en_sílaba_tónica is implied by the existance of alternancia_vocálica, which is manually applied to verbs in verbos_con_cambios_morfológicas[]
            // FIX: this seems to overlap with getStemChanges()
            const stem_changes_per_form = getStemChangesFromRule(mood_tense, alternancia_vocálica)
            for (const key in stem_changes_per_form) {
                const persona = key as keyof PersonasGramaticalesConVos<StemChangeRuleId>
                if (persona === "vos") {
                    const stem_change_rule_ids = stem_changes_per_form.vos
                    if (stem_change_rule_ids) {
                        const forma_sonjugada_stem_change_rule_id = stem_change_rule_ids[0]
                        if ((stem_change_rule_ids.length === 1) && (typeof forma_sonjugada_stem_change_rule_id === "string")) {
                            // FIX: this is working for the first 1400 verbs, but this form allows for other rules, in any case this is confusing

                            const rule_description = stem_change_descriptions[forma_sonjugada_stem_change_rule_id]
                            const forma_conjugada_tema_sin_alternancia = temas_sin_alternancias.vos[0]     // FIX: are there other forms here?
                            const tema_sin_alternancia = getForma(forma_conjugada_tema_sin_alternancia)
                            // FIX: this is fairly tricky, try to clarify how FormaRestringida's are preserved
                            let updated = tema_sin_alternancia
                            if (tema_sin_alternancia) {
                                if (rule_description && (!rule_description.only_for_ir_verbs || verb_family === "-ir")) {
                                    updated = applyStemChangePattern(tema_sin_alternancia, rule_description, ponga_hiato)
                                    if (updated !== tema_sin_alternancia) {
                                        changed_stems.vos = [updated]
                                        reglas_aplicadas.vos.push({regla: <StemChangeRuleId> forma_sonjugada_stem_change_rule_id, temas: [updated]})
                                        if (ponga_hiato) {
                                            // FIX: this has the same value for temas, but they must differ for each rule applied
                                            reglas_aplicadas.vos.push({regla: "rompe diptongo 'ue' con 'h'", temas: [updated]})
                                        }
                                    }
                                }
                            }
                        } else {
                            const changes = applyToFormasConjugadas(stem_change_rule_ids, (forma: string, i: number) => {
                                // FIX: perhaps use of "uso" can simplify this?
                                const stem_change_rule = <StemChangeRuleId> forma
                                const rule_description = stem_change_descriptions[stem_change_rule]
                                // FIX: this is too complicated.  In case of two forms, say "Riop." and "C.Am." with one stem, 
                                const forma_conjugada_tema_sin_alternancia = temas_sin_alternancias.vos?.[i] || temas_sin_alternancias.vos?.[0]
                                const tema_sin_alternancia = getForma(forma_conjugada_tema_sin_alternancia)
                                // FIX: this is fairly tricky, try to clarify how FormaRestringida's are preserved
                                if (tema_sin_alternancia) {
                                    let changed
                                    if (rule_description && (!rule_description.only_for_ir_verbs || verb_family === "-ir")) {
                                        changed = applyStemChangePattern(tema_sin_alternancia, rule_description, ponga_hiato)
                                    }
                                    if (changed) {
                                        reglas_aplicadas.vos.push({regla: <StemChangeRuleId> forma_sonjugada_stem_change_rule_id, temas: [changed]})
                                    }
                                    return changed || tema_sin_alternancia
                                } else {
                                    return undefined
                                }
                            })
                            const combined = combinaFormasConjugadas(stem_change_rule_ids, changes)
                            if (!isValueless(changes)) {
                                changed_stems.vos = changes
                            }
                        }
                    }
                } else {
                    const do_apply = (!dont_apply_to_yo || (persona !== "s1"))
                    if (do_apply) {
                        const stem_change_rule_id = stem_changes_per_form?.[persona]
                        if (stem_change_rule_id) {
                            const rule_description = stem_change_descriptions[stem_change_rule_id]
                            if (rule_description) {
                                if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
                                    const forma_conjugada_tema_sin_alternancia = temas_sin_alternancias[persona]
                                    const changes = applyToFormasConjugadas(forma_conjugada_tema_sin_alternancia, (tema) => {
                                        const changed = applyStemChangePattern(tema, rule_description, ponga_hiato)
                                        return changed
                                    })
                                    if (!isValueless(changes)) {
                                        changed_stems[persona] = changes
                                        reglas_aplicadas[persona].push({regla: stem_change_rule_id, temas: changes})
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return {changed_stems, reglas_aplicadas}
}

