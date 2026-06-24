import { ParticipioComoAdjetivo } from ".";
import { deriveParticiples } from "./derive-participles.js";
import { getForma } from "./lib.js";
import { verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas.js";


export function derivaAdjetivosDeParticipios() : ParticipioComoAdjetivo[] {
    const adjetivos: ParticipioComoAdjetivo[] = []
    for (let infinitivo in verbos_con_cambios_morfológicos) {
        const verbo = verbos_con_cambios_morfológicos[infinitivo]
        let adj = verbo?.adj
        if (typeof adj === "string") {
            adjetivos.push({adj, infinitivo}) 
        } else if (typeof adj === "boolean") {
            const participios = deriveParticiples(infinitivo)
            adj = getForma(participios.participles.participio[0])
            adjetivos.push({adj, infinitivo}) 
        }
    }
    return adjetivos
}
