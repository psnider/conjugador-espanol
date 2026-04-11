import { FormaConjugada, MoodTense, VerbConjugationStems } from ".";
import { applyToFormasConjugadas, combinaFormasConjugadas, setStem } from "./lib.js";
import { ConjugationAndDerivationRules } from "./resolve-conjugation-class.js";


// Objetivo del módulo cambio-tema-presente-yo.ts
//   Dado:
//   - un infinitivo
//   - su entrada ReglasDeConjugaciónDeVerbo
//   producir (o no) un tema alternativo para:
//   - presente indicativo (1s)
//   - presente subjuntivo (todas)
//   - imperativo (usted / ustedes)// Reglas claras de la transformación
// 1. Condición de activación
//   si existe tema_presente_yo_del_modelo
//   Nada más.
//   No dependas de tiempo ni modo.
// 2. Valor del tema
//   const tema = reglas.tema_presente_yo_del_modelo
//   string → tema único (teng, dig, salg)
//   [string, string] → variante condicionada (si ya lo usas)
// 3. Formas que sí usan este tema
//   Usa tema_presente_yo_del_modelo para:
//   - Presente indicativo: 1ª singular
//   - Presente subjuntivo: todas las personas
//   - Imperativo afirmativo:
//     - usted
//     - ustedes
//     - Imperativo negativo (vía subjuntivo)
// 4. Formas que nunca lo usan
//   No aplicar a:
//   - imperfecto
//   - pretérito
//   - futuro
//   - condicional
//   - infinitivo
//   - participio
//   - gerundio
//   (Regla dura, sin excepciones)
// 5. Interacción con alternancia vocálica
//   Orden obligatorio:
//   - Seleccionar tema_presente_yo_del_modelo
//   - No aplicar alternancia_vocálica encima de ese tema
//   Ejemplo:
//   - decir → dig- (no díg-, no deg-)
//   - tener → teng- (no tiéng-)
// 6. Interacción con ortografía
//   Este módulo:
//   - no pone acentos
//   - no inserta y
//   - no cambia grafías
//   Eso va después, en ortografía.


export function getTemaPresenteYo(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) : VerbConjugationStems | undefined {
    const {prefixes, morphological_rules} = conj_and_deriv_rules
    let tema_presente_yo_del_modelo = morphological_rules?.de_modelo?.tema_presente_yo_del_modelo || morphological_rules?.de_infinitivo?.tema_presente_yo_del_modelo
    if (tema_presente_yo_del_modelo) {
        let temas
        switch (mood_tense) {
        case "IndPres":
            temas = setStem(tema_presente_yo_del_modelo, ["s1"])
            return temas
        case "SubPres":
            temas = setStem(tema_presente_yo_del_modelo)
            return temas
        case "CmdPos":
            temas = setStem(tema_presente_yo_del_modelo, ["s3", "p1", "p3"])
            return temas
        }
    }
}


export function getSuffixesForPresenteYo(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) : VerbConjugationStems | undefined {
    const sufijo_presente_yo = conj_and_deriv_rules.morphological_rules?.de_modelo?.sufijo_presente_yo
    if (sufijo_presente_yo) {
        switch (mood_tense) {
        case "IndPres":
            const sufijos: VerbConjugationStems = {s1: [sufijo_presente_yo]}
            return sufijos
        }
    }
}
