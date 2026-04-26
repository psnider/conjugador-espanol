import { ConjugaciónTabla, GrammaticalPerson, MoodTense, Participios, Defectos, FormaConjugada, MoodTenseMap } from "../src"


export interface FormasNoPersonales extends Participios<FormaConjugada[]> {
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
    defectos?: Defectos
    // URLs de los sitios de dondé consiguió esta información
    urls?: string[] 
    // comentarios sobre los conjugaciones inesperadas
    notas?: string[]
}

export type ConjugaciónesFallidas = MoodTenseMap<FormaConjugada[]>


export interface FailedTests {
    gerundio?: FormaConjugada[]
    participio?: FormaConjugada[]
    conjugaciones?: ConjugaciónesFallidas
}

