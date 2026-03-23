import { applyToVerbForms } from "./lib.js";
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
        const updated_forms = applyToVerbForms(base_forms, (base_form) => {
            let updated_form;
            if (clase_de_conjugación) {
                const { prefijo_aditivo, prefijo_sustractivo } = clase_de_conjugación;
                const terminación = base_form.slice(prefijo_sustractivo.length);
                updated_form = prefijo_aditivo + terminación;
            }
            else {
                updated_form = base_form;
            }
            const prefixed = productive + nonproductive + updated_form;
            return prefixed;
        });
        return updated_forms;
    }
    else {
        return base_forms;
    }
}
// Return prefixed forms, or undefined if there are no prefixes.
export function aplicaPrefijosProductivos(conjugated_forms, prefijos, rules_applied) {
    if (prefijos) {
        const { productive_prefixes, nonproductive_prefix } = prefijos;
        const productive = productive_prefixes?.join("") || "";
        const nonproductive = nonproductive_prefix || "";
        const prefix = productive + nonproductive;
        if (prefix.length > 0) {
            const prefixed = {};
            for (const key in conjugated_forms) {
                const grammatical_person = key;
                prefixed[grammatical_person] = applyToVerbForms(conjugated_forms[grammatical_person], (base_form) => {
                    return prefix + base_form;
                });
            }
            if (Object.keys(prefixed).length > 1) {
                rules_applied.push({ prefixed });
            }
            return prefixed;
        }
    }
}
// Return prefixed forms, or undefined if there are no prefixes.
export function aplicaPrefijosClaseConjugacional(model_form, prefijos) {
    const clase_de_conjugación = prefijos?.clase_de_conjugación;
    if (clase_de_conjugación) {
        const { prefijo_aditivo, prefijo_sustractivo } = clase_de_conjugación;
        if (!model_form.startsWith(prefijo_sustractivo)) {
            throw new Error(`expected ${model_form}.startsWith(${prefijo_sustractivo}) with prefijo=${prefijo_aditivo} `);
        }
        const ending = model_form.slice(prefijo_sustractivo.length);
        const prefixed = prefijo_aditivo + ending;
        return prefixed;
    }
    else {
        return model_form;
    }
}
//# sourceMappingURL=prefixes.js.map