import { applyToFormasConjugadas, combinaParticipios, formasConjugadasIgual } from "./lib.js";
import { applyOrthographicalChangesCommon } from "./ortografía.js";
import { addPrefixesToBaseForm } from "./prefixes.js";
import { regular_verb_suffixes } from "./regular-verb-rules.js";
import { resolveConjugationClass } from "./resolve-conjugation-class.js";
import { applyStemChangeToGerundStem, stem_change_patterns } from "./stem-changes.js";
// Merge changed forms into a list of forms.
function accumulateChangedForms(base, updates) {
    const accumulated = [...base];
    if (updates) {
        if (base.length !== updates.length) {
            throw new Error(`expected base and updates to have same length: base=${JSON.stringify(base)} updates=${JSON.stringify(updates)}`);
        }
        for (const i in updates) {
            const update = updates[i];
            if (update) {
                const forma = (typeof update === "string") ? update : update.forma;
                if (forma) {
                    accumulated[i] = update;
                }
            }
        }
    }
    return accumulated;
}
function getRegularParticiples(conj_and_deriv_rules, rules_applied) {
    const { infinitivo, verb_family } = conj_and_deriv_rules;
    const stem = infinitivo.slice(0, -2);
    const suffixes = regular_verb_suffixes[verb_family].participle_rules;
    const gerundio_base = stem + suffixes.pres.suffix;
    const participio_base = stem + suffixes.past.suffix;
    const regular = { gerundio: [gerundio_base], participio: [participio_base] };
    rules_applied.push({ regular });
    return regular;
}
function getParticipiosExcepcionales(conj_and_deriv_rules, rules_applied) {
    const reglas_de_modelo = conj_and_deriv_rules.morphological_rules?.de_modelo;
    const reglas_de_infinitivo = conj_and_deriv_rules.morphological_rules?.de_infinitivo;
    const excepciones_léxicas = reglas_de_infinitivo?.excepciones_léxicas || reglas_de_modelo?.excepciones_léxicas;
    if (!excepciones_léxicas)
        return;
    const { gerundio, participio } = excepciones_léxicas;
    if (gerundio || participio) {
        rules_applied.push({ excepciones_léxicas: { gerundio, participio } });
        const { prefixes } = conj_and_deriv_rules;
        const result = {};
        const prefix_rules_applied = {};
        if (gerundio) {
            result.gerundio = addPrefixesToBaseForm(gerundio, prefixes);
            if (result.gerundio !== excepciones_léxicas.gerundio) {
                prefix_rules_applied.gerundio = result.gerundio;
            }
        }
        if (participio) {
            result.participio = addPrefixesToBaseForm(participio, prefixes);
            if (!formasConjugadasIgual(result.participio, participio)) {
                prefix_rules_applied.participio = result.participio;
            }
        }
        if (Object.keys(prefix_rules_applied).length > 0) {
            rules_applied.push({ prefixed: prefix_rules_applied });
        }
        return result;
    }
}
function getOrthographicChangesForParticiples(conj_and_deriv_rules, regulares, rules_applied) {
    function splitGerund(form, verb_family) {
        const len = verb_family === "-ar" ? 4 : 5;
        return {
            gerund_stem: form.slice(0, -len),
            ending: form.slice(-len)
        };
    }
    const { infinitivo, verb_family, morphological_rules } = conj_and_deriv_rules;
    const reglas_de_modelo = conj_and_deriv_rules.morphological_rules?.de_modelo;
    const reglas_de_infinitivo = conj_and_deriv_rules.morphological_rules?.de_infinitivo;
    const excepciones_léxicas = reglas_de_infinitivo?.excepciones_léxicas || reglas_de_modelo?.excepciones_léxicas;
    const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll");
    const do_correct_ñi_yi = infinitivo.endsWith("ñir") || infinitivo.endsWith("llir");
    const alternancia = reglas_de_modelo?.alternancia_vocálica || reglas_de_infinitivo?.alternancia_vocálica;
    const gerundios_cambiados = applyToFormasConjugadas(regulares.gerundio, (gerundio) => {
        const split = splitGerund(gerundio, verb_family);
        const gerund_stem = split.gerund_stem;
        const gerundio_tema_cambio_excepcional = excepciones_léxicas?.gerundio_tema_cambio_excepcional;
        const gerundio_tema_cambio = gerundio_tema_cambio_excepcional ?? stem_change_patterns[alternancia]?.gerund_rule;
        const excepcional = !!gerundio_tema_cambio_excepcional;
        const w_stem_change = gerundio_tema_cambio
            ? applyStemChangeToGerundStem({ gerund_stem, verb_family, gerundio_tema_cambio, excepcional, rules_applied }) + split.ending
            : gerundio;
        const w_ortography = applyOrthographicalChangesCommon({ infinitivo, forma: w_stem_change, do_correct_diéresis, do_correct_ñi_yi });
        const updated = w_ortography || w_stem_change;
        return updated;
    });
    const gerundios_actualizados = accumulateChangedForms(regulares.gerundio, gerundios_cambiados);
    const participios_cambiados = applyToFormasConjugadas(regulares.participio, (participio) => {
        const updated = applyOrthographicalChangesCommon({ infinitivo, forma: participio, do_correct_diéresis, do_correct_ñi_yi });
        return (updated !== participio) ? updated : undefined;
    });
    const participios_actualizado = accumulateChangedForms(regulares.participio, participios_cambiados);
    return { gerundio: gerundios_actualizados, participio: participios_actualizado };
}
function _deriveParticiples(rules) {
    const rules_applied = [];
    const excepcionales = getParticipiosExcepcionales(rules, rules_applied);
    if (excepcionales?.gerundio && excepcionales?.participio) {
        return { participles: excepcionales, rules_applied };
    }
    // FIX: where are the prefixes applied from clase_de_conjugación?
    const regulares = getRegularParticiples(rules, rules_applied);
    // FIX: this is returning unchanged forms
    const ortográficos = getOrthographicChangesForParticiples(rules, regulares, rules_applied);
    const reg_w_ortográficos = combinaParticipios(regulares, ortográficos);
    const final_forms = combinaParticipios(reg_w_ortográficos, excepcionales);
    return { participles: final_forms, rules_applied };
}
export function deriveParticiples(infinitivo) {
    console.log(`deriveParticiples(${infinitivo})`);
    const conj_and_deriv_rules = resolveConjugationClass(infinitivo);
    if (!conj_and_deriv_rules) {
        return undefined;
    }
    let { participles, rules_applied } = _deriveParticiples(conj_and_deriv_rules);
    return { participles, rules_applied };
}
//# sourceMappingURL=derive-participles.js.map