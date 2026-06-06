import type { CambiosPorParticipios, FormaConjugada, MoodTense, PersonasGramaticalesConVos, StemChangeRuleId } from "./index";
import type { MoodTenseMap, StemChangeFamily } from "./index-privado";
import type { InfinitiveClass } from "./verbos-con-cambios-morfológicas.js";
type StemChangeKind = "diphthongization" | "vowel raising" | "orthographic stress" | "blending" | "no change";
export interface StemChangeDescription {
    kind: StemChangeKind;
    from: string;
    to: string;
    only_for_ir_verbs?: boolean;
}
export declare const stem_change_descriptions: Record<StemChangeRuleId, StemChangeDescription>;
export type StemChangesForMoodTense = PersonasGramaticalesConVos<StemChangeRuleId, FormaConjugada<StemChangeRuleId>[]>;
export interface StemChangeRules extends MoodTenseMap<StemChangesForMoodTense> {
    allowed_transforms: StemChangeRuleId[];
    gerund_rule?: StemChangeRuleId;
}
export declare const stem_change_patterns: {
    [stem_change_pattern_name: string]: StemChangeRules;
};
export declare function getStemChangesFromRule(mood_tense: MoodTense, alternancia_vocálica?: StemChangeFamily): StemChangesForMoodTense | undefined;
export declare function getStemChangeForGerrundFromRule(alternancia_vocálica: StemChangeRuleId): StemChangeRuleId;
export declare function applyStemChangePattern(verb_part: string, stem_change_description: StemChangeDescription, ponga_hiato: boolean): string;
export declare function applyStemChangeToGerundStem(args: {
    gerund_stem: string;
    verb_family: InfinitiveClass;
    gerundio_tema_cambio: StemChangeRuleId;
    ponga_hiato: boolean;
    excepcional: boolean;
    cambios: CambiosPorParticipios;
}): string;
export {};
//# sourceMappingURL=stem-changes.d.ts.map