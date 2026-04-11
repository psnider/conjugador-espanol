// import { _conjugateVerb, accumulateChangedForms, appendSuffixesToStems, applyImperativoTú, applyLexicalExceptions, getLexicalSuplications, getSuffixes, getSuffixFor3p, maintainStressOnLastSylable } from "./conjugate-verb.js"
import { _conjugateVerb } from "./conjugate-verb.js";
// import { getTemaPretérito } from "./tema-pretérito.js"
export function getPreterite3PStem(conj_and_deriv_rules) {
    // Must force _conjugateVerb to only consider the infinitivo_sin_prefijos
    const { infinitivo_sin_prefijos, prefixes } = conj_and_deriv_rules;
    const prefijos_para_clase = { clase_de_conjugación: prefixes?.clase_de_conjugación };
    const conj_and_derviv_rules_conjugable_only = { ...conj_and_deriv_rules, infinitivo: infinitivo_sin_prefijos, prefixes: undefined };
    // FIX: this call is very confusing when debugging. Is there a clean way to get just the single IndPret.p3 form?
    const { forms } = _conjugateVerb(conj_and_derviv_rules_conjugable_only, "IndPret");
    // TODO: is this correct? assuming that there is only ONE form
    const ustedes_form = forms["p3"][0];
    const ustedes_form_str = ((typeof ustedes_form === "string") ? ustedes_form : ustedes_form.forma);
    const tema_base = ustedes_form_str.slice(0, -3);
    return tema_base;
}
// export function getPreterite3PStem(conj_and_deriv_rules: ConjugationAndDerivationRules): string {
//     const mood_tense = "IndPret"
//     const {infinitivo_sin_prefijos, prefixes} = conj_and_deriv_rules
//     const rules_applied: VerbRulesApplied[] = []
//     const ancestor_rule_sets = getRegularRules(infinitivo_sin_prefijos, mood_tense, rules_applied)
//     // resolve suffixes first, as they help determine the forms used by getStems()
//     const suffixes = getSuffixFor3p(conj_and_deriv_rules, mood_tense, ancestor_rule_sets)
//     const suffix = suffixes.p3
//     const stems =  getTemaPretérito(conj_and_deriv_rules, mood_tense)
//     const stem = stems.p3
//     applyLexicalExceptions(conj_and_deriv_rules, mood_tense, stems, suffixes, rules_applied) 
//     // 8. añadir terminaciones morfológicas
//     const combined_stems_w_suffixes = appendSuffixesToStems(infinitivo_sin_prefijos, stems, suffixes, rules_applied)
//     // 9. ortografía
//     // FIX: this is returning all forms, even unchanged ones
//     const orthography = getOrthographicChanges(conj_and_deriv_rules.infinitivo, mood_tense, combined_stems_w_suffixes, suffixes, rules_applied)
//     const forms_w_orthoography = accumulateChangedForms(combined_stems_w_suffixes, orthography)
//     // 11. Supletivo
//     const suplicaciones = getLexicalSuplications(conj_and_deriv_rules, mood_tense, rules_applied) 
//     const formas_finales_sin_prefijos = accumulateChangedForms(forms_w_orthoography, suplicaciones)
//     // add any remaining prefixes to the stems
//     const prefixed = aplicaPrefijosProductivos(formas_finales_sin_prefijos, prefixes, rules_applied)
//     const formas_finales = accumulateChangedForms(formas_finales_sin_prefijos, prefixed)
//     // TODO: is this correct? assuming that there is only ONE form
//     const ustedes_form = formas_finales["p3"][0]
//     const ustedes_form_str = ((typeof ustedes_form === "string") ? ustedes_form : ustedes_form.forma)
//     const tema_base = ustedes_form_str.slice(0, -3)
//     return tema_base
// }
//# sourceMappingURL=getPreterite3PStem.js.map