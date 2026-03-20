import { ConjugaciónTabla } from "../src"

interface FormasNoPersonales {
    infinitivo: string
    gerundio: string
    participio: string
}



export interface ConjugaciónEntero {
    lexicografía: {
        pronunciacion: string
        silabacion: string
        acentuacion: string
        etimologia: string
        modelos: string[]
        impersonal?: true
    }
    formas_no_personales: FormasNoPersonales
    formas_personales: ConjugaciónTabla
    // URLs de los sitios de dondé consiguió esta información
    urls?: string[] 
}

