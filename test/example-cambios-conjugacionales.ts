import { CambiosPorPersona, CambiosConjugacionales } from "../src";


const cambios_tener_IndPres: CambiosConjugacionales = {
    infinitivo: "tener",
    modo_tiempo: "IndPres",
    modelo: "tener",
    clase_de_conjugación: {prefijo_aditivo: "re"},
    cambios: {
        s1:  [
                { regla: "regular", temas: ["ten"], sufijos: ["o"] },
                { regla: "tems presente yo", temas: ["teng"] },
        ],
        s2: [
                { regla: "regular", temas: ["ten"], sufijos: ["es"] },
                { regla: "e → ie",  temas: ["tien"] },
             ],
        vos: [
                { regla: "regular", temas: ["ten"], sufijos: ["és"] },
             ],
    }
}


const cambios_tener_SubPres: CambiosConjugacionales = {
    infinitivo: "tener",
    modo_tiempo: "SubImp",
    modelo: "tener",
    clase_de_conjugación: {prefijo_aditivo: "re"},
    cambios: {
        p1:  [
            { regla: "regular", temas: ["ten"], sufijos: ["ramos", "semos"] },
            { regla: "tema pretérito 3.ª persona plural", temas: ["tuvie"] },
            { regla: "estresa tema 1.ª persona plural", temas: ["tuvié"] }
        ],
    }
}


const cambios_inquirir_SubPres: CambiosConjugacionales = {
    infinitivo: "inquirir",
    modo_tiempo: "SubPres",
    cambios: {
        vos:  [
            { regla: "regular", temas: ["inquir"], sufijos: [{forma:"as",uso: "Riop."}, {forma:"ás",uso: "C.Am."}] },
            { regla: "i → ie",  temas: ["inquier"] },
        ],
    }
}

