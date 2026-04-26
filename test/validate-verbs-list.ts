import { ReglasDeConjugaciónDeVerbo, verbos_con_cambios_morfológicos } from "../src/verbos-con-cambios-morfológicas.js";
import {conjugation_families} from "../src/resolve-conjugation-class.js"
import { GrammaticalPerson, MoodTense } from "../src/index.js";


function validateFormsField(infinitivo: string, reglas_de_infinitivo: ReglasDeConjugaciónDeVerbo) : boolean {
    let ok = true
    const reglas = reglas_de_infinitivo?.excepciones_léxicas?.reglas
    if (reglas) {
        for (const reglas_key in reglas) {
            const mood_tense = <MoodTense> reglas_key
            const forms = reglas[mood_tense]?.forms
            if (forms) {
                for (const forms_key in forms) {
                    const persona = <GrammaticalPerson> forms_key
                    const formas_conjugadas = forms[persona]
                    if (formas_conjugadas) {
                        for (const forma_conjugada of formas_conjugadas) {
                            const forma = (typeof forma_conjugada === "string") ? forma_conjugada : forma_conjugada?.forma
                            const is_divided_into_stem_w_suffix = forma?.includes("/")
                            if (!is_divided_into_stem_w_suffix) {
                                ok = false
                                console.log(`${infinitivo} has entry missing separator for stem/suffix: in reglas.${mood_tense}.forms.${persona} which includes: ${JSON.stringify(forma)}`)
                            }
                        }
                    }
                }
            }
        }
    }
    return ok
}


function validateVerbsList() {
    let had_error = false
    const infinitives = Object.keys(verbos_con_cambios_morfológicos)
    for (const infinitivo of infinitives) {
        const reglas_de_infinitivo = verbos_con_cambios_morfológicos[infinitivo]
        if (typeof reglas_de_infinitivo !== "object") {
            had_error = true
            console.log(`verbos_con_cambios_morfológicos[${infinitivo}] must have an object value`)
        } else {
            if (reglas_de_infinitivo.modelo) {
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
                const ok = validateFormsField(infinitivo, reglas_de_infinitivo)
                if (!ok) {
                    had_error = true
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

