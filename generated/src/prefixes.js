import { applyToFormasConjugadas, combinaFormasConjugadas, vowels } from "./lib.js";
// Prefixes that precede irregular verbs.
// This isn't a list of all known prefixes.
// These are in order of: first letter, then longest first when there is a prefix match.
// Each entry has a comment giving one example that shows the use of the prefix.
const verb_prefixes = [
    "ante", // anteponer
    "auto", // autoregular, NO irregular
    "abs", // abstener, abstraer
    "ad", // advenir
    // "a",        // atener, atraer, avenir BUT matches amar
    "ben", // bendecir
    "contra", // contradecir, contrahacer, contraponer
    "com", // componer
    "con", // contener, contraer, condecir, convenir
    "co", // cooperar, NO irregular
    "desa", // (des + a ) desavenir
    "des", // desavenir, deshacer, desoír
    "de", // detener, detraer
    "dis", // distraer
    "entre", // entreoír
    "en",
    "extra",
    "ex", // extraer
    "hiper",
    "im", // imponer
    "inter", // interponer, intervenir
    "in",
    "mal", // maldecir
    // mantener
    "micro",
    "mini",
    "mono",
    "multi",
    // oponer
    // obtener
    "post",
    "pos", // posponer
    "pre", // predecir, prevenir
    "pro", // proponer, provenir
    "retro",
    "re", // rehacer, reponer, retener, retraer
    "semi",
    "sobre", // sobresalir, sobrevenir
    "sos", // sostener
    // suponer
    "sub",
    "super", // superponer
    // sustraer
    "tele",
    "trans",
    "ultra",
];
export function findProductiveVerbPrefix(verb_part, min_ending_length) {
    for (const prefix of verb_prefixes) {
        if (verb_part.startsWith(prefix)) {
            const tail = verb_part.slice(prefix.length);
            if (tail.length >= min_ending_length) {
                return { prefix, remainder: tail };
            }
        }
    }
}
export function addPrefixesToBaseForm(base_forms, prefixes) {
    if (prefixes) {
        const { productive_prefixes, nonproductive_prefix, clase_de_conjugación } = prefixes;
        const productive = productive_prefixes?.join("") || "";
        const nonproductive = nonproductive_prefix || "";
        const w_Prefijos_clase_de_conjugación = applyToFormasConjugadas(base_forms, (base_form) => {
            let updated_form;
            if (clase_de_conjugación) {
                const { prefijo_aditivo } = clase_de_conjugación;
                const prefijo_sustractivo = clase_de_conjugación.prefijo_sustractivo || "";
                const terminación = base_form.slice(prefijo_sustractivo.length);
                updated_form = prefijo_aditivo + terminación;
            }
            else {
                updated_form = base_form;
            }
            const prefixed = productive + nonproductive + updated_form;
            return prefixed;
        });
        const updated_forms = combinaFormasConjugadas(base_forms, w_Prefijos_clase_de_conjugación);
        return updated_forms;
    }
    else {
        return base_forms;
    }
}
// // Return prefixed forms, or undefined if there are no prefixes.
// export function aplicaPrefijosProductivos(conjugated_forms: VerbConjugation, prefijos: Prefixes | undefined, rules_applied: VerbRulesApplied[]) : VerbConjugation | undefined {
//     if (prefijos) {
//         const {productive_prefixes, nonproductive_prefix} = prefijos
//         const productive = productive_prefixes?.join("") || ""
//         const nonproductive  = nonproductive_prefix || ""
//         const prefix = productive + nonproductive 
//         if (prefix.length > 0) {
//             const prefixed: VerbConjugation = {}
//             for (const key in conjugated_forms) {
//                 const grammatical_person = key as keyof typeof conjugated_forms
//                 prefixed[grammatical_person] = applyToFormasConjugadas(conjugated_forms[grammatical_person], (base_form: string) => {
//                     return prefix + base_form
//                 })
//             }
//             if (Object.keys(prefixed).length > 1) {
//                 rules_applied.push({prefixed})
//             }
//             return prefixed
//         }
//     }
// }
// Return prefixed forms, or undefined if there are no prefixes.
// Note that it is possible for both the model class and the derived class to have excepciones_léxicas,
// so this must re-prefix the model class but not the derived class
export function aplicaPrefijosClaseConjugacional(model_form, prefijos) {
    const clase_de_conjugación = prefijos?.clase_de_conjugación;
    if (clase_de_conjugación) {
        const { prefijo_aditivo } = clase_de_conjugación;
        let prefijo_sustractivo = clase_de_conjugación.prefijo_sustractivo || "";
        if (!model_form.startsWith(prefijo_sustractivo)) {
            // busca patrón del modelo, preserva los vocales
            const modelo_regex = new RegExp(`^([^${vowels}]+)([${vowels}]+)([^${vowels}]+)([${vowels}]*)?\$`);
            const match_modelo = model_form.match(modelo_regex);
            const infinitivo_regex = new RegExp(`([^${vowels}]+)([${vowels}]+)([^${vowels}]*)\$`);
            const match_infinitivo = prefijo_aditivo.match(infinitivo_regex);
            if (!match_modelo || !match_infinitivo) {
                throw new Error(`cannot match ${model_form} to clase_de_conjugación=${JSON.stringify(clase_de_conjugación)} `);
            }
            // eg: model_form === "pid"  para  "gem" (de "gemir")
            const changed = match_infinitivo[1] + match_modelo[2] + match_infinitivo[3] + match_modelo[4];
            return changed;
        }
        else {
            const ending = model_form.slice(prefijo_sustractivo.length);
            const prefixed = prefijo_aditivo + ending;
            return prefixed;
        }
    }
    else {
        return model_form;
    }
}
//# sourceMappingURL=prefixes.js.map