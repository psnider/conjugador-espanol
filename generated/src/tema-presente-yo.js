import { applyToVerbForms, setStem } from "./lib.js";
import { aplicaPrefijosClaseConjugacional } from "./prefixes.js";
// Objetivo del módulo cambio-tema-presente-yo.ts
//   Dado:
//   - un infinitivo
//   - su entrada ReglasDeConjugaciónDeVerbo
//   producir (o no) un tema alternativo para:
//   - presente indicativo (1s)
//   - presente subjuntivo (todas)
//   - imperativo (usted / ustedes)// Reglas claras de la transformación
// 1. Condición de activación
//   si existe tema_presente_yo
//   Nada más.
//   No dependas de tiempo ni modo.
// 2. Valor del tema
//   const tema = reglas.tema_presente_yo
//   string → tema único (teng, dig, salg)
//   [string, string] → variante condicionada (si ya lo usas)
// 3. Formas que sí usan este tema
//   Usa tema_presente_yo para:
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
//   - Seleccionar tema_presente_yo
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
export function getTemaPresenteYo(conj_and_deriv_rules, mood_tense) {
    const { prefixes, morphological_rules } = conj_and_deriv_rules;
    const tema_presente_yo_modelo = morphological_rules?.combinados?.tema_presente_yo;
    if (!tema_presente_yo_modelo) {
        return;
    }
    const normalizadas = (Array.isArray(tema_presente_yo_modelo) ? tema_presente_yo_modelo : [tema_presente_yo_modelo]);
    let temas_presente_yo = applyToVerbForms(normalizadas, (forma) => {
        const forma_base = aplicaPrefijosClaseConjugacional(forma, prefixes);
        return forma_base;
    });
    if (temas_presente_yo) {
        let temas;
        switch (mood_tense) {
            case "IndPres":
                temas = setStem(temas_presente_yo, ["s1"]);
                return temas;
            case "SubPres":
            case "CmdNeg":
                temas = setStem(temas_presente_yo);
                return temas;
            case "CmdPos":
                temas = setStem(temas_presente_yo, ["s3", "p1", "p3"]);
                return temas;
        }
    }
}
export function getSuffixesForPresenteYo(conj_and_deriv_rules, mood_tense) {
    const sufijo_presente_yo = conj_and_deriv_rules.morphological_rules?.combinados?.sufijo_presente_yo;
    if (sufijo_presente_yo) {
        switch (mood_tense) {
            case "IndPres":
                const sufijos = { s1: [sufijo_presente_yo] };
                return sufijos;
        }
    }
}
//# sourceMappingURL=tema-presente-yo.js.map