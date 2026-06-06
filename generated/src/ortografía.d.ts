import type { MoodTense, CambiosPorPersona, CambiosPorRegla, FormaConjugada, ReglaConjugacional } from "./index";
import type { VerbConjugation, VerbConjugationSuffixes } from "./index-privado";
export interface OrthographicalChangeRule {
    match_infinitivo?: RegExp;
    match_pattern: RegExp;
    replacement_pattern: string;
    cambio_sufijo?: string;
}
interface Result_applyOrthographicalChangesCommon {
    formas_conjugadas_cambiadas?: FormaConjugada[];
    reglas_aplicadas: CambiosPorRegla[];
}
export declare function applyOrthographicalChangesCommon(infinitivo: string, formas_conjugadas_completas: FormaConjugada[], sufijos: FormaConjugada[]): Result_applyOrthographicalChangesCommon;
export declare function getCambiosPorRegla(regla: ReglaConjugacional, formas_conjugadas: FormaConjugada[], sufijos_esperados: FormaConjugada[]): CambiosPorRegla | undefined;
interface FormasYReglas {
    formas_conjugadas_cambiadas?: FormaConjugada[];
    cambios?: CambiosPorRegla[];
}
export declare function applyOrthographicalChangesToConjugatedForm(infinitivo: string, formas_conjugadas: FormaConjugada[], suffixes_por_persona: FormaConjugada[]): FormasYReglas;
export declare function getOrthographicChanges_IndPret3P(infinitivo: string, tema: string, sufijo: string): string;
export declare function getOrthographicChanges(infinitivo: string, mood_tense: MoodTense, joined_forms: VerbConjugation, suffixes: VerbConjugationSuffixes, cambios: CambiosPorPersona): VerbConjugation;
export {};
//# sourceMappingURL=ortograf%C3%ADa.d.ts.map