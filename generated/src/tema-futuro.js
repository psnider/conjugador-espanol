import { setStem } from "./lib.js";
//   - Futuro simple (todas las personas)
//   - Condicional simple (todas las personas)
const domains_tema_futuro = ["IndFut", "IndCond"];
export function getTemaFuturo(conj_and_deriv_rules, mood_tense) {
    const { prefixes, morphological_rules } = conj_and_deriv_rules;
    const tema_futuro_del_modelo = morphological_rules?.de_modelo?.tema_futuro_del_modelo;
    if (tema_futuro_del_modelo && domains_tema_futuro.includes(mood_tense)) {
        const temas = setStem([tema_futuro_del_modelo]);
        return temas;
    }
}
//# sourceMappingURL=tema-futuro.js.map