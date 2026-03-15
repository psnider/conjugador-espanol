import { MoodTense, VerbConjugationStems } from ".";
import { setStem } from "./lib.js";
import { aplicaPrefijosClaseConjugacional } from "./prefixes.js";
import { ConjugationAndDerivationRules } from "./resolve-conjugation-class.js";

//   - Futuro simple (todas las personas)
//   - Condicional simple (todas las personas)

const domains_tema_futuro: MoodTense[] = ["IndFut", "IndCond"]


export function getTemaFuturo(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) : VerbConjugationStems | undefined {
    const {prefixes, morphological_rules} = conj_and_deriv_rules
    const tema_futuro = morphological_rules?.combinados?.tema_futuro
    if (tema_futuro && domains_tema_futuro.includes(mood_tense)) {
        const tema_base = aplicaPrefijosClaseConjugacional(tema_futuro, prefixes)
        const temas = setStem([tema_base])
        return temas
    }
}
