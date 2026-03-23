import { setStem } from "./lib.js";
import { aplicaPrefijosClaseConjugacional } from "./prefixes.js";
//   - Futuro simple (todas las personas)
//   - Condicional simple (todas las personas)
const domains_tema_futuro = ["IndFut", "IndCond"];
export function getTemaFuturo(conj_and_deriv_rules, mood_tense) {
    const { prefixes, morphological_rules } = conj_and_deriv_rules;
    const tema_futuro = morphological_rules?.combinados?.tema_futuro;
    if (tema_futuro && domains_tema_futuro.includes(mood_tense)) {
        const tema_base = aplicaPrefijosClaseConjugacional(tema_futuro, prefixes);
        const temas = setStem([tema_base]);
        return temas;
    }
}
//# sourceMappingURL=tema-futuro.js.map