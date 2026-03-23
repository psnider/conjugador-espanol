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
//   (No aplicar a s1 si existe tema_presente_yo)
// 3. Base de aplicación
//   La alternancia se aplica sobre:
//   - tema_regular
//   Nunca sobre:
//   - tema_presente_yo
//   - tema_pretérito
//   - tema_futuro
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
//   - Seleccionar tema (tema_presente_yo si corresponde)
//   - Si no hay tema_presente_yo, aplicar alternancia_vocálica
//   - Aplicar reglas ortográficas
//   - Añadir terminaciones
import { applyStemChangePattern, getStemChangesFromRule, stem_change_descriptions } from "./stem-changes.js";
const domains_alternancia_vocálica = ["IndPres", "SubPres", "CmdPos", "CmdNeg"];
export function getTemaConAlternanciaVocálica(conj_and_deriv_rules, mood_tense) {
    const changed_stems = {};
    if (domains_alternancia_vocálica.includes(mood_tense)) {
        const { infinitivo_sin_prefijos, verb_family, morphological_rules } = conj_and_deriv_rules;
        const alternancia_vocálica = morphological_rules?.combinados?.alternancia_vocálica;
        if (alternancia_vocálica) {
            const stem_regular = infinitivo_sin_prefijos.slice(0, -2);
            const tema_presente_yo = morphological_rules?.combinados?.tema_presente_yo;
            const sufijo_presente_yo = morphological_rules?.combinados?.sufijo_presente_yo;
            const dont_apply_to_yo = (mood_tense === "IndPres") && (tema_presente_yo || sufijo_presente_yo);
            // FIX: linguist: vocal_en_sílaba_tónica is implied by the existance of alternancia_vocálica, which is manually applied to verbs in verbos_con_cambios_morfológicas[]
            const stem_changes_per_form = getStemChangesFromRule(mood_tense, alternancia_vocálica);
            for (const key in stem_changes_per_form) {
                const gramatical_person = key;
                const do_apply = (!dont_apply_to_yo || (gramatical_person !== "s1"));
                if (do_apply) {
                    const stem_change_rule = stem_changes_per_form?.[gramatical_person];
                    if (stem_change_rule) {
                        const rule_description = stem_change_descriptions[stem_change_rule];
                        if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
                            let changed = applyStemChangePattern(stem_regular, rule_description);
                            if (changed !== stem_regular) {
                                changed_stems[gramatical_person] = [changed];
                            }
                        }
                    }
                }
            }
        }
    }
    return changed_stems;
}
//# sourceMappingURL=alternancia-voc%C3%A1lica.js.map