import type { MoodTense } from "./index";
import type { VerbConjugationChanges, VerbConjugationRules, VerbConjugationSuffixes } from "./index-privado";
import type { InfinitiveClass } from "./verbos-con-cambios-morfológicas.js";
export interface VerbAspectModifications {
    add_suffix_to_infinitive?: boolean;
    add_suffix_to_preterite_p3_stem?: boolean;
    stress_last_char_of_p1_stem?: boolean;
    stress_last_vowel_of_s123p3_stem?: boolean;
    stress_last_char_of_vos_riop_stem?: boolean;
}
export interface VerbAspectRules extends VerbAspectModifications {
    base?: InfinitiveClass | MoodTense;
    suffixes?: VerbConjugationChanges;
}
export declare const regular_verb_suffixes: {
    [ending: string]: VerbConjugationRules<VerbAspectRules>;
};
export declare function getInfinitiveClass(infinitivo: string): InfinitiveClass | undefined;
export declare function getRegularRules(infinitivo: string, mood_tense: MoodTense): VerbAspectRules[];
export declare function getRegularSuffixes(infinitivo: string, mood_tense: MoodTense, ancestor_rule_sets: VerbAspectRules[]): VerbConjugationSuffixes;
//# sourceMappingURL=regular-verb-rules.d.ts.map