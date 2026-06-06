import type { FormaConjugada, GrammaticalPerson, MoodTense, Participios, CambiosPorPersona, ReglaConjugacional, Uso } from "./index";
import type { VerbConjugation } from "./index-privado";
export declare const vowels = "a\u00E1e\u00E9i\u00EDo\u00F3u\u00FA\u00FC";
export declare const consonantes = "bcdfghjklmn\u00F1pqrstvwxyz";
export declare const verb_terminations_normalized: string[];
export declare const verb_terminations_all: string[];
export declare const persons_standard: GrammaticalPerson[];
export declare const persons_w_vos: GrammaticalPerson[];
export declare const persons_w_vos_index: {
    [person: string]: 1;
};
export declare const mood_tenses: MoodTense[];
export declare function assert(condition: boolean, message: string): void;
export declare function applyToFormaConjugada(form: FormaConjugada, i: number, change: (form: string | null | undefined, i: number, uso: Uso) => string | null | undefined): FormaConjugada | undefined;
export declare function applyToFormasConjugadas(source_forms: FormaConjugada[], change: (form: string | null | undefined, i: number, uso?: Uso) => string | null | undefined): (FormaConjugada | undefined)[] | undefined;
export declare function setStem(temas_modelo: FormaConjugada[], only_persons?: GrammaticalPerson[]): import("./index").ConjugaciónEstándarYAtípico;
export declare function formaConjugadaIgual(lhs: FormaConjugada | undefined, rhs: FormaConjugada | undefined): boolean;
export declare function formasConjugadasIgual(lhs: FormaConjugada[] | undefined, rhs: FormaConjugada[] | undefined): boolean;
export declare function isValueless(forma_conjugadas?: (FormaConjugada | undefined)[] | null): boolean;
export declare function removeValuelessEntries(conjugation: VerbConjugation): void;
export declare function combinaFormasConjugadas(bases: FormaConjugada[], actualizaciones: FormaConjugada[] | undefined): FormaConjugada[] | undefined;
export declare function combinaParticipios(base: Participios<FormaConjugada[]>, actualización?: Participios<FormaConjugada[]>): Participios<FormaConjugada[]>;
export declare function compareSpanishWords(lhs: string, rhs: string): number;
export declare function acumulaCambiosPorPersona(args: {
    cambios: CambiosPorPersona;
    persona?: GrammaticalPerson;
    temas?: VerbConjugation;
    sufijos?: VerbConjugation;
    regla: ReglaConjugacional;
}): void;
export declare function añadeCambiosPorPersona(args: {
    acumulado: CambiosPorPersona;
    adicional: CambiosPorPersona;
}): void;
export declare function extraeTema(forma_completa: string, sufijos: FormaConjugada[]): {
    tema: string;
    sufijo: string;
};
export declare function extraeTemas(formas_completas: FormaConjugada[], sufijos: FormaConjugada[]): {
    tema: string;
    sufijo: string;
}[];
export declare function getForma(forma_conjugada: FormaConjugada): string;
export declare function asFormaConjugada(forma: string, model: FormaConjugada): FormaConjugada;
//# sourceMappingURL=lib.d.ts.map