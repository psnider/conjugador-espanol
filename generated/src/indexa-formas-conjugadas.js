import { verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas.js";
import { conjugateVerb } from "./conjugate-verb.js";
import { getForma, mood_tenses } from "./lib.js";
import { deriveParticiples } from "./derive-participles.js";
export function deconstruyeIDDeFormaConjugada(id) {
    const partes = id.split(",");
    let atributos = { infinitivo: partes[0], modo_tiempo: partes[1], persona: partes[2] };
    if (partes[3]) {
        atributos.uso = partes[3];
    }
    return atributos;
}
export function generaIndiceDeFormasConjugadas() {
    const indice = {};
    for (const infinitivo in verbos_con_cambios_morfológicos) {
        const id_infinitivo = `${infinitivo},inf`;
        indice[infinitivo] = indice[infinitivo] || [];
        indice[infinitivo].push(id_infinitivo);
        const derivaciones = deriveParticiples(infinitivo);
        const { gerundio, participio } = derivaciones.participles;
        for (let forma_conjugada of gerundio) {
            const forma = getForma(forma_conjugada);
            const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso);
            const uso_tail = (uso ? `,${uso}` : "");
            const id_gerundio = `${infinitivo},ger${uso_tail}`;
            indice[forma] = indice[forma] || [];
            indice[forma].push(id_gerundio);
        }
        for (let forma_conjugada of participio) {
            const forma = getForma(forma_conjugada);
            const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso);
            const uso_tail = (uso ? `,${uso}` : "");
            const id_gerundio = `${infinitivo},part${uso_tail}`;
            indice[forma] = indice[forma] || [];
            indice[forma].push(id_gerundio);
        }
        for (const modo_tiempo of mood_tenses) {
            const conjugaciones = conjugateVerb(infinitivo, modo_tiempo);
            const formas = conjugaciones?.forms;
            if (formas) {
                for (const key in formas) {
                    const persona = key;
                    const formas_conjugadas = formas[persona];
                    if (formas_conjugadas) {
                        for (const forma_conjugada of formas_conjugadas) {
                            const forma = getForma(forma_conjugada);
                            const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso);
                            const uso_tail = (uso ? `,${uso}` : "");
                            const id = `${infinitivo},${modo_tiempo},${persona}${uso_tail}`;
                            indice[forma] = indice[forma] || [];
                            indice[forma].push(id);
                        }
                    }
                }
            }
        }
    }
    return indice;
}
//# sourceMappingURL=indexa-formas-conjugadas.js.map