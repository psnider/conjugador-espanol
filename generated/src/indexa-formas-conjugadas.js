import { conjugateVerb } from "./conjugate-verb";
import { mood_tenses } from "./lib";
import { removeStress } from "./move-stress";
import { verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas";
const índice_fonético_formas_conjugadas = new Map();
// Reglas de sustitución para español
const simplifica_fonemas = [
    { from: /ü/gu, to: "u" },
    { from: /v/gu, to: "b" },
    { from: /z/gu, to: "s" },
    { from: /qu([eo])/gu, to: "k$1" },
    { from: /qu/gu, to: "k" },
    { from: /cc/gu, to: "ks" },
    { from: /c([eiu])/gu, to: "s$1" },
    { from: /c([ao])/gu, to: "k$1" },
    { from: /ll/gu, to: "y" },
    { from: /h/gu, to: "" },
];
function simplificaFormaFonetica(forma) {
    let normalizada = removeStress(forma);
    for (const cambio of simplifica_fonemas) {
        normalizada = normalizada.replace(cambio.from, cambio.to);
    }
    return normalizada;
}
export function generaIndiceFormasConjugadas() {
    for (const infinitivo in verbos_con_cambios_morfológicos) {
        for (const modo_tiempo of mood_tenses) {
            const conjugaciones = conjugateVerb(infinitivo, modo_tiempo);
            if (conjugaciones) {
                for (const persona in conjugaciones) {
                    const formas_conjugadas = conjugaciones[persona];
                    if (formas_conjugadas) {
                        for (const forma_conjugada of formas_conjugadas) {
                            const forma = ((typeof forma_conjugada === "string") ? forma_conjugada : forma_conjugada.forma);
                            const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso);
                            const uso_tail = (uso ? `,${uso}` : "");
                            const clave_normalizada = simplificaFormaFonetica(forma);
                            const form_id = `${infinitivo},${modo_tiempo},${persona}${uso_tail}`;
                            const lista = índice_fonético_formas_conjugadas.get(clave_normalizada);
                            if (lista) {
                                lista.push(form_id);
                            }
                            else {
                                índice_fonético_formas_conjugadas.set(clave_normalizada, [form_id]);
                            }
                        }
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=indexa-formas-conjugadas.js.map