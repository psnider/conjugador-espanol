import { MoodTense, VerbConjugationStems } from ".";
import { setStem } from "./lib.js";
import { ConjugationAndDerivationRules } from "./resolve-conjugation-class.js";

//   - Futuro simple (todas las personas)
//   - Condicional simple (todas las personas)

const domains_tema_futuro: MoodTense[] = ["IndFut", "IndCond"]


export function getTemaFuturo(conj_and_deriv_rules: ConjugationAndDerivationRules, mood_tense: MoodTense) : VerbConjugationStems | undefined {
    const {prefixes, morphological_rules} = conj_and_deriv_rules
    const tema_futuro_del_modelo = morphological_rules?.de_modelo?.tema_futuro_del_modelo
    if (tema_futuro_del_modelo && domains_tema_futuro.includes(mood_tense)) {
        const temas = setStem([tema_futuro_del_modelo])
        return temas
    }
}
