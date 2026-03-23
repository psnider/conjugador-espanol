import { ConjugaciónTabla, Participios } from "../src"


export interface FormasNoPersonales extends Participios {
    infinitivo: string
}


export type Registro = "formal" | "neutro" | "coloquial" | "vulgar" | "anticuado" | "literario" | "técnico" | "despectivo" | "eufemístico" | "infantil"


export interface ConjugaciónEntero {
    lexicografía: {
        pronunciacion: string
        silabacion: string
        acentuacion: string
        etimologia: string
        modelos: string[]
        registro?: Registro[]
        impersonal?: true
    }
    formas_no_personales: FormasNoPersonales
    formas_personales: ConjugaciónTabla
    // URLs de los sitios de dondé consiguió esta información
    urls?: string[] 
}

