import type { MoodTense, CambiosConjugacionales, VerbConjugationAnnotated, FormaConjugada, CambiosPorPersona } from "./index";
import type { VerbConjugation, VerbConjugationStems, VerbConjugationSuffixes } from "./index-privado";
import type { ConjugationAndDerivationRules, Prefixes } from "./resolve-conjugation-class.js";
import { VerbAspectRules } from "./regular-verb-rules.js";
export declare function accumulateChangedForms(args: {
    base?: VerbConjugation;
    updates?: VerbConjugation;
}): VerbConjugation;
export declare function getUnprefixedStemForIndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules): string;
export declare function getUnprefixedStems(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, temas_regulares: VerbConjugation, suffixes: VerbConjugation, cambios: CambiosPorPersona): VerbConjugationStems;
export declare function aplicaPrefijosProductivosAFormas(formas_conjugadas: FormaConjugada[], prefixes: Prefixes): FormaConjugada[];
export declare function conjugateVerb(infinitivo: string, mood_tense: MoodTense): VerbConjugationAnnotated | undefined;
export declare function appendSuffixesToStems(infinitivo: string, stems: VerbConjugationStems, regular_suffixes: VerbConjugationSuffixes, cambios: CambiosPorPersona): import("./index").ConjugaciónEstándarYAtípico;
export declare function getSuffixes(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, regular_suffixes: VerbConjugation, cambios: CambiosPorPersona): import("./index").ConjugaciónEstándarYAtípico;
export declare function getSuffixFor3p(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[]): {
    p3: FormaConjugada<string>[];
};
export declare function getSuplecionesLexicales_IndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules): {
    form?: string;
    suffix?: string;
};
export declare function getFormasDeSuplecionesLexicales(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, cambios_aplicadas: CambiosPorPersona): VerbConjugation;
export declare function applyImperativoTú(args: {
    conj_and_deriv_rules: ConjugationAndDerivationRules;
    mood_tense: MoodTense;
    formas_casi_finales: VerbConjugation;
    cambios: CambiosPorPersona;
}): void;
export declare function maintainStressOnLastSylable(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, formas_casi_finales: VerbConjugation, sufijos: VerbConjugation, cambios_aplicadas: CambiosPorPersona): import("./index").ConjugaciónEstándarYAtípico;
interface ConjugationResult {
    forms: VerbConjugation;
    cambios_conjugacionales: CambiosConjugacionales;
}
export declare function getIndPretP3StemOfModel(conj_and_deriv_rules: ConjugationAndDerivationRules): string;
export declare function _conjugateVerb(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense): ConjugationResult;
export {};
//# sourceMappingURL=conjugate-verb.d.ts.map