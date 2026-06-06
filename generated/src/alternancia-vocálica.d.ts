import type { CambiosPorPersona, MoodTense } from "./index";
import type { VerbConjugationStems } from "./index-privado";
import type { ConjugationAndDerivationRules } from "./resolve-conjugation-class.js";
export declare function getTemaConAlternanciaVocálica_IndPret3P(conj_and_deriv_rules: ConjugationAndDerivationRules, tema_sin_alternancia: string): string;
interface Result_getTemaConAlternanciaVocálica {
    changed_stems?: VerbConjugationStems;
    reglas_aplicadas: CambiosPorPersona;
}
export declare function getTemaConAlternanciaVocálica(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense, temas_sin_alternancias: VerbConjugationStems): Result_getTemaConAlternanciaVocálica;
export {};
//# sourceMappingURL=alternancia-voc%C3%A1lica.d.ts.map