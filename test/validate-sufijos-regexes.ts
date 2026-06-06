import { conjugateVerb } from "../src/conjugate-verb.js"
import { GrammaticalPerson } from "../src/index"
import { sufijos_regexes } from "../src/indexa-de-temas-conjugadas.js"
import { mood_tenses, getForma } from "../src/lib.js"
import { verbos_con_cambios_morfológicos } from "../src/verbos-con-cambios-morfológicas.js"



export function verificaSufijos() : number {
    let errores = 0
    for (const infinitivo in verbos_con_cambios_morfológicos) {
        // Note: "ir" no tiene raíz
        const raíz = infinitivo.slice(0,-2) 
        for (const modo_tiempo of mood_tenses) {
            const conjugaciones = conjugateVerb(infinitivo, modo_tiempo)
            const formas = conjugaciones?.forms
            if (formas) {
                const sufijos_regex = sufijos_regexes[modo_tiempo]
                if (sufijos_regex) {
                    for (const key in formas) {
                        const persona = <GrammaticalPerson> key
                        const formas_conjugadas = formas[persona]
                        if (formas_conjugadas) {
                            for (const forma_conjugada of formas_conjugadas) {
                                const forma = getForma(forma_conjugada)
                                const match = forma.match(sufijos_regex)
                                if (!match) {
                                    ++errores
                                    console.log(`${infinitivo},${modo_tiempo},${persona}=${forma} no coincide con sufijo_regex`)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return errores
}


const errores = verificaSufijos()
if (errores === 0) {
    console.log(`validated sufijos_regexes{}`)
    process.exit(0)
} else {
    console.log(`verificaSufijos() encontró ${errores} errores`)
    process.exit(1)
}

