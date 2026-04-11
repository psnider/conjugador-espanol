import { setStem } from "./lib.js";
// Objetivo del módulo
//   Seleccionar un tema de pretérito no regular cuando exista.
// 1. Condición de activación
//   - si existe tema_pretérito_del_modelo
//   Nada más.
// 2. Dominio de aplicación
//   Usar tema_pretérito_del_modelo para:
//   - Pretérito indefinido (todas las personas)
//     Parece que la forma de "vos" nunca difiere de la de "tú"
//   - Subjuntivo imperfecto (-ra, -se)
//   - Subjuntivo futuro (si lo generas)
// 3. Base de aplicación
//   Este tema de reglas.tema_pretérito_del_modelo:
//   - reemplaza completamente el tema regular
//   - no se combina con alternancias vocálicas
//   - no se modifica aquí
// 4. Terminaciones
//   Este módulo no decide terminaciones.
//   El motor debe:
//   - detectar que el tema es de pretérito fuerte
//   - usar el paradigma fuerte correspondiente (-e, -iste, -o, -eron, etc.)
//   (No pongas terminaciones aquí.)
// 5. Exclusiones duras
//   No aplicar nunca a:
//   - presente (indicativo / subjuntivo)
//   - imperfecto de indicativo
//   - futuro
//   - condicional
//   - imperativo
//   - infinitivo
//   - participio
//   - gerundio
// 6. Interacción con otros módulos
//   Orden obligatorio:
//   - ¿supletivo? → salir
//   - ¿tema_pretérito? → usarlo
//   - Si no, usar tema regular
//   Nunca después de:
//   - alternancia_vocálica
//   - tema_presente_yo_del_modelo
//   - tema_futuro_del_modelo
const domains_pretérito = ["IndPret", "SubImp", "SubFut"];
export function getTemaPretérito(conj_and_deriv_rules, mood_tense) {
    const { prefixes, morphological_rules } = conj_and_deriv_rules;
    const tema_pretérito_modelo = morphological_rules?.de_modelo?.tema_pretérito_del_modelo;
    if (tema_pretérito_modelo && domains_pretérito.includes(mood_tense)) {
        const temas = setStem([tema_pretérito_modelo]);
        return temas;
    }
}
export function getSuffixesForStrongPretérito(conj_and_deriv_rules, mood_tense) {
    const tema_pretérito_del_modelo = conj_and_deriv_rules?.morphological_rules?.de_modelo?.tema_pretérito_del_modelo;
    if (mood_tense === "IndPret" && tema_pretérito_del_modelo) {
        const p3_form = tema_pretérito_del_modelo.endsWith("j") ? "eron" : "ieron";
        // FIX: restrict this to changing and returning just the p3 form
        const suffixes = { s1: ["e"], s2: ["iste"], s3: ["o"], p1: ["imos"], p2: ["isteis"], p3: [p3_form] };
        return suffixes;
    }
}
//# sourceMappingURL=tema-pret%C3%A9rito.js.map