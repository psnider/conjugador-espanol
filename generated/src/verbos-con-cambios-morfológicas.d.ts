import type { GrammaticalPerson, VerbConjugationAnnotation, ConjugationOrDerivation, Participios, FormaConjugada, ModeloConjugacional, StemChangeRuleId, Impersonal, Uso } from "./index";
import type { MoodTenseMap, VerbConjugation, VerbConjugationChanges, StemChangeFamily, IrregularYRegular } from "./index-privado";
import type { FailedTests } from "../test";
import type { VerbAspectModifications } from "./regular-verb-rules";
export type InfinitiveClass = "-ar" | "-er" | "-ir";
export type VerboClaseConjugacional = "-acer" | "-ducir" | "-eer" | "-eír" | "-iar" | "-uir";
export interface VerbAspectRulesWithFullyIrregularForms extends VerbAspectModifications {
    arcaico?: true;
    suffixes?: VerbConjugationChanges;
    tema_supletivo?: FormaConjugada[];
    temas?: VerbConjugation;
    forms?: VerbConjugation;
    derivations?: {
        preserve_stress_from_base?: GrammaticalPerson[];
    };
}
export interface ReglasDeConjugaciónDeVerboExcepcionesLexicas extends Participios<FormaConjugada[]> {
    supletivo?: true;
    gerundio_tema_cambio_excepcional?: StemChangeRuleId;
    imperativo_tú?: FormaConjugada[];
    tema_subjuntivo_yo?: string;
    reglas?: MoodTenseMap<VerbAspectRulesWithFullyIrregularForms>;
}
export type TestResults = true | FailedTests;
export interface ReglasDeConjugaciónDeVerbo {
    infinitivos?: string[];
    modelo?: ModeloConjugacional | null;
    clase_conjugacional?: VerboClaseConjugacional;
    no_admite_prefijos?: true;
    aux?: true;
    tr?: true | "desusado";
    intr?: true | "desusado";
    pronominal?: boolean | "always" | "desusado";
    adj?: true | string;
    sus?: "m" | "f";
    auxiliar?: true;
    impersonal?: Impersonal;
    tema_presente_yo_del_modelo?: FormaConjugada[];
    sufijo_presente_yo?: string;
    tema_pretérito_del_modelo?: string;
    tema_futuro_del_modelo?: string;
    alternancia_vocálica?: StemChangeFamily;
    alternancia_vocálica_uso?: Uso;
    ponga_hiato?: true;
    excepciones_léxicas?: ReglasDeConjugaciónDeVerboExcepcionesLexicas;
    acepta_sin_hiato?: true;
    acepta_regular?: IrregularYRegular;
    frecuencia?: number;
    ok?: TestResults;
}
export declare const verbos_con_cambios_morfológicos: {
    [infinitivo: string]: ReglasDeConjugaciónDeVerbo;
};
export declare function getAnnotations(infinitivo: string, modelo: ModeloConjugacional, mood_tense_derivation: ConjugationOrDerivation): VerbConjugationAnnotation;
//# sourceMappingURL=verbos-con-cambios-morfolo%CC%81gicas.d.ts.map