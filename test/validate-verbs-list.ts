import { verbos_con_cambios_morfológicos } from "../src/verbos-con-cambios-morfológicas.js";
import {conjugation_families} from "../src/resolve-conjugation-class.js"


function validateVerbsList() {
    let had_error = false
    const infinitives = Object.keys(verbos_con_cambios_morfológicos)
    for (const infinitivo of infinitives) {
        const reglas_de_infinitivo = verbos_con_cambios_morfológicos[infinitivo]
        if (reglas_de_infinitivo == null) {
            had_error = true
            console.log(`verbos_con_cambios_morfológicos[${infinitivo}] must have a value`)
        } else if (reglas_de_infinitivo.modelo) {
            if (reglas_de_infinitivo.modelo !== infinitivo) {
                const reglas_de_modelo = verbos_con_cambios_morfológicos[reglas_de_infinitivo.modelo]
                if (reglas_de_modelo == null) {
                    had_error = true
                    console.log(`${infinitivo} has modelo=${reglas_de_infinitivo.modelo} but that entry is missing from verbos_con_cambios_morfológicos[]`)
                } else {
                    if (reglas_de_infinitivo.modelo !== reglas_de_modelo.modelo) {
                        had_error = true
                        console.log(`${infinitivo} has modelo=${reglas_de_infinitivo.modelo} but verbos_con_cambios_morfológicos[${reglas_de_infinitivo.modelo}].modelo must reference itself`)
                    }
                }
            }
        }
    }
    if (had_error) {
        throw new Error(`Correct the errors listed above...`)
    } else {
        console.log(`validated verbos_con_cambios_morfológicos[]`)
    }
}


function validateConjugationFamiliesVerbsList() {
    let had_error = false
    const verbos = Object.keys(conjugation_families)
    for (const verbo of verbos) {
        const {modelo, clase_conjugacional} = conjugation_families[verbo]
        const reglas_de_modelo = verbos_con_cambios_morfológicos[modelo]
        if (!reglas_de_modelo) {
            had_error = true
            console.log(`modelo=${modelo} from conjugation_families[${verbo}] must be listed verbos_con_cambios_morfológicos[]`)            
        }
        if (clase_conjugacional) {
            if (!clase_conjugacional.startsWith("-")) {
                had_error = true
                console.log(`modelo=${modelo} from conjugation_families[${verbo}] must be listed verbos_con_cambios_morfológicos[]`)            
            } else {
                const ending = clase_conjugacional.slice(1)
                if (!modelo.endsWith(ending)) {
                    had_error = true
                    console.log(`modelo=${modelo} must end with clase_conjugacional=${clase_conjugacional} from conjugation_families[${verbo}]`)            
                }
            }
        }
    }
    if (had_error) {
        throw new Error(`Correct the errors listed above...`)
    } else {
        console.log(`validated conjugation_families[]`)
    }
}


validateVerbsList()
validateConjugationFamiliesVerbsList()

