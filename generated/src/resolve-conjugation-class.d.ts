import type { ModeloConjugacional, PrefijosDeClaseConjugacional } from "./index";
import type { InfinitiveClass, ReglasDeConjugaciónDeVerbo, VerboClaseConjugacional } from "./verbos-con-cambios-morfológicas.js";
export interface Prefixes {
    productive_prefixes?: string[];
    nonproductive_prefix?: string;
    clase_de_conjugación?: PrefijosDeClaseConjugacional;
}
export interface ConjugationAndDerivationRules {
    infinitivo: string;
    modelo?: ModeloConjugacional;
    infinitivo_sin_prefijos: string;
    verb_family: InfinitiveClass;
    prefixes?: Prefixes;
    morphological_rules: MorphologicalRulesAccumulated;
    cached_tema_pretérito_p3_de_modelo?: string;
    cached_tema_pretérito_p3_de_infinitivo?: string;
}
export interface MorphologicalRulesAccumulated {
    de_infinitivo?: ReglasDeConjugaciónDeVerbo;
    de_modelo?: ReglasDeConjugaciónDeVerbo;
}
export interface BaseWPrefix {
    prefixes?: string[];
    conjugation_family_prefix?: string;
    base?: string;
}
interface ModeloYInfinitivoConjugable {
    modelo: ModeloConjugacional;
    clase_conjugacional?: VerboClaseConjugacional;
}
export declare const conjugation_families: {
    [conjugation_family: string]: ModeloYInfinitivoConjugable;
};
export declare function resolveConjugationClass(infinitivo: string): ConjugationAndDerivationRules;
export {};
//# sourceMappingURL=resolve-conjugation-class.d.ts.map