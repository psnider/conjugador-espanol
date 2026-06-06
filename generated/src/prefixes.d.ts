import type { FormaConjugada } from "./index";
import type { Prefixes } from "./resolve-conjugation-class";
export declare function findProductiveVerbPrefix(verb_part: string, min_ending_length: number): {
    prefix?: string;
    remainder: string;
} | undefined;
export declare function addPrefixesToBaseForm(base_forms: FormaConjugada[], prefixes?: Prefixes): FormaConjugada[];
export declare function aplicaPrefijosClaseConjugacional(model_form: string, prefijos?: Prefixes): string;
//# sourceMappingURL=prefixes.d.ts.map