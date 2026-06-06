import type { GrammaticalPerson, IDDeFormaConjugada, IndiceDeFormasDeVerbos, MoodTense, Uso } from "./index";
export declare function deconstruyeIDDeFormaConjugada(id: IDDeFormaConjugada): {
    infinitivo: string;
    modo_tiempo: MoodTense;
    persona: GrammaticalPerson;
    uso?: Uso;
};
export declare function generaIndiceDeFormasConjugadas(): IndiceDeFormasDeVerbos;
//# sourceMappingURL=indexa-formas-conjugadas.d.ts.map