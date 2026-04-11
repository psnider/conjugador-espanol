import * as fs from 'node:fs'
import { ConjugaciónEntero, FailedTests } from "."
import { Participios, MoodTense, ConjugaciónEstándarYAtípico, MoodTenseMap, FormaConjugada, GrammaticalPerson} from "../src"
import { conjugateVerb } from "../src/conjugate-verb.js"
import { deriveParticiples } from "../src/derive-participles.js";
import { formasConjugadasIgual, persons_w_vos_index } from "../src/lib.js";




export function loadConjugaciónEntero(verb_filename: string) : ConjugaciónEntero {
    const json = fs.readFileSync(verb_filename).toString()
    const entero: ConjugaciónEntero = JSON.parse(json)
    return entero
}


export function findFailedTestsForParticiples(infinitivo: string, expected: Participios, errors: FailedTests) {
    const {participles: actual} = deriveParticiples(infinitivo)
    const expected_keys = <Array <keyof FailedTests>> Object.keys(expected)
    expected_keys.forEach((expected_key: keyof Participios) => {
        const actual_value = actual[expected_key]
        const expected_value = expected[expected_key]
        if (! formasConjugadasIgual(actual_value, expected_value)) {
            errors[expected_key] = expected_value
            console.log(`ERROR: ${infinitivo},${expected_key}: actual=${JSON.stringify(actual_value)} expected=${JSON.stringify(expected_value)}`)
            debugger
        }
    })
}


export function findFailedTestsForConjugations(args: {infinitivo: string, mood_tense: MoodTense, expected: ConjugaciónEstándarYAtípico, defectos_personas?: GrammaticalPerson[], errors: FailedTests}) {
    const {infinitivo, mood_tense, expected, defectos_personas, errors} = args
    const {forms: actual} = conjugateVerb(infinitivo, mood_tense)
    if (!expected) {
        if (actual) {
            errors.conjugaciones = errors.conjugaciones || {}
            errors.conjugaciones[mood_tense] = null
            return
        }
    }
    const expected_keys = <Array <keyof ConjugaciónEstándarYAtípico>> Object.keys(expected)
    const remaining_keys = {...persons_w_vos_index}
    // nota que si una forma no está en la lista canónica, no tiene que probarla
    for (const expected_key of expected_keys) {
        // no evite pruebas para formas que existen en 
        const actual_forms = actual[expected_key]
        let expected_forms = expected[expected_key]
        if ((expected_key === "vos") && !actual.vos) {
            if (! formasConjugadasIgual(expected.vos, expected.s2)) {
                errors[mood_tense] = errors[mood_tense] || {}
                errors[mood_tense][expected_key] = expected.vos
                console.log(`ERROR: ${infinitivo},${mood_tense},${expected_key}: actual=undefined expected=${JSON.stringify(expected.vos)}`)
                debugger
            }
        } else {
            // as of Mar 25, 2026: test all forms
            if (! formasConjugadasIgual(actual_forms, expected_forms)) {
                errors[mood_tense] = errors[mood_tense] || {}
                errors[mood_tense][expected_key] = expected_forms
                console.log(`ERROR: ${infinitivo},${mood_tense},${expected_key}: actual=${JSON.stringify(actual_forms)} expected=${JSON.stringify(expected_forms)}`)
                debugger
            }
        }
        delete remaining_keys[expected_key]
    }
    // FIX: is this even possible anymore?
    if (remaining_keys.length > 0) {
        throw new Error(`${infinitivo},${mood_tense}: has more keys than expected, you probably need to add a test for: ${remaining_keys}`)
    }
}


const all_mood_tenses: MoodTense[] = ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut", "CmdPos"]


export function runTestsForInfinitive(infinitivo: string, verb_filename: string) : FailedTests {
    console.log(`runTests(${infinitivo})`)
    const errors: FailedTests = {}
    const entero = loadConjugaciónEntero(verb_filename)
    delete entero.formas_no_personales.infinitivo
    findFailedTestsForParticiples(infinitivo, entero.formas_no_personales, errors)
    for (const mood_tense of all_mood_tenses) {
        const defectos = entero.defectos
        if (!defectos?.rasgos?.includes(mood_tense)) {
            const defectos_personas = defectos?.personas
            findFailedTestsForConjugations({infinitivo, mood_tense, expected: entero.formas_personales[mood_tense], defectos_personas, errors})
        }
    }
    const has_errors = (Object.keys(errors).length > 0)
    return (has_errors ? errors : undefined)
}
