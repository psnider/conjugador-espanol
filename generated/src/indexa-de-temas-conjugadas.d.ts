import type { IDDeFormaConjugada } from "./index";
interface IndiceDeSufijos {
    [sufijo: string]: IDDeFormaConjugada[];
}
interface IndiceDeTemas {
    [tema: string]: IndiceDeSufijos;
}
export declare const sufijos_regexes: {
    IndPres: RegExp;
    IndImp: RegExp;
    IndPret: RegExp;
    IndFut: RegExp;
    IndCond: RegExp;
    SubPres: RegExp;
    SubImp: RegExp;
    SubFut: RegExp;
    CmdPos: RegExp;
};
export declare function generaIndiceDeTemasDeFormasConjugadas(): {
    temas_por_deletreo: IndiceDeTemas;
    temas_por_fonética: IndiceDeTemas;
};
export declare function encuentraFormasSimilares(consulta: string): {
    infinitivos: string[];
    formas: {
        [forma: string]: IDDeFormaConjugada[];
    };
};
export {};
//# sourceMappingURL=indexa-de-temas-conjugadas.d.ts.map