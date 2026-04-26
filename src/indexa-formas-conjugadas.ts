import { conjugateVerb } from "./conjugate-verb.js"
import { ConjugaciónEstándarYAtípico, GrammaticalPerson } from "./index.js"
import { getForma, mood_tenses } from "./lib.js"
import { removeStress } from "./move-stress.js"
import { ReglasDeConjugaciónDeVerbo, verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas.js"


// un identificador de una forma conjugada.
// Consiste del infinitivo , modo_tiempo , persona_conjugada [ , uso ]
// ..ej.: "amo,IndPres,s1"
type FormaID = string


export const índice_fonético_formas_conjugadas = new Map<string, FormaID[]>()


// Reglas de sustitución para español
const simplifica_fonemas: {from: RegExp, to: string}[] = [
    {from: /ü/gu, to: "u"},
    {from: /v/gu, to: "b"},
    {from: /z/gu, to: "s"},
    {from: /qu([eo])/gu, to: "k$1"},
    {from: /qu/gu, to: "k"},
    {from: /cc/gu, to: "ks"},
    {from: /c([eiu])/gu, to: "s$1"},
    {from: /c([ao])/gu, to: "k$1"},
    {from: /ll/gu, to: "y"},
    {from: /h/gu, to: ""},
]


function simplificaFormaFonetica(forma: string) {
    let normalizada = removeStress(forma)
    for (const cambio of simplifica_fonemas) {
        normalizada = normalizada.replace(cambio.from, cambio.to)
    }
    return normalizada
}


function getStems(infinitivo: string, formas: ConjugaciónEstándarYAtípico, reglas_conjugacional: ReglasDeConjugaciónDeVerbo) : string[] {
    // function findRulesApplied(name: string) {
    //     for (const rule_applied of rules_applied) {
    //         const value = rule_applied[name]
    //         if (value) {
    //             return value
    //         }
    //     }
    // }
    const temas = []
    const keys = Object.keys(reglas_conjugacional)
    const is_regular = (keys.length === 0)
    if (is_regular) {
        // FIX: for now use the stem of the infinitive, but there could be orthographic changes
        const tema_regular = infinitivo.slice(0, -2)
        temas.push(tema_regular)
    } else {
        // const suffixes = findRulesApplied("suffixes")
        // const lexical_exceptions_suffixes = findRulesApplied("lexical_exceptions_suffixes")
        // const forms = conjugaciones.forms
        // for (const gramatical_person in forms) {
        //     const formas_conjugadas = forms[gramatical_person]

        // }
    }
    return temas
}


export function generaIndiceFormasConjugadas() {
    for (const infinitivo in verbos_con_cambios_morfológicos) {
        const reglas_conjugacional = verbos_con_cambios_morfológicos[infinitivo]
        for (const modo_tiempo of mood_tenses) {
            const conjugaciones = conjugateVerb(infinitivo, modo_tiempo)
            const formas = conjugaciones?.forms
            if (formas) {
                // const temas = getStems(infinitivo, formas, conjugaciones.notes.reglas_aplicadas_primaria, reglas_conjugacional)
                // FIX
                for (const key in formas) {
                    const persona = <GrammaticalPerson> key
                    const formas_conjugadas = formas[persona]
                    if (formas_conjugadas) {
                        for (const forma_conjugada of formas_conjugadas) {
                            const forma = getForma(forma_conjugada)
                            const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso)
                            const uso_tail = (uso ? `,${uso}` : "")
                            const clave_normalizada = simplificaFormaFonetica(forma)
                            const form_id = `${infinitivo},${modo_tiempo},${persona}${uso_tail}`
                            const lista = índice_fonético_formas_conjugadas.get(clave_normalizada)
                            if (lista) {
                                lista.push(form_id)
                            } else {
                                índice_fonético_formas_conjugadas.set(clave_normalizada, [form_id])
                            }
                        }
                    }
                }
            }
        }
    }
}
