import * as fs from 'node:fs'
import { ConjugaciónEntero } from "."
import { GrammaticalPersons, Participios, MoodTense, ConjugaciónEstándarYAtípico, VerbForms, MoodTenseMap} from "../src"
import { conjugateVerb } from "../src/conjugate-verb.js"
import { deriveParticiples } from "../src/derive-participles.js";
import { persons_w_vos_index } from "../src/lib.js";
import { test_applyOrthographicalChanges } from "./test-orthographical-change.js"


export type ConjugaciónesFallidas = MoodTenseMap<VerbForms>


export interface FailedTests {
    gerundio?: string
    participio?: string
    conjugaciones?: ConjugaciónesFallidas
}


export function equal(lhs: string | [string] | [string, string] | undefined, rhs: string | [string] | [string, string] | undefined) {
    // handle degenerate cases
    if ((lhs == null) && (rhs == null)) {
        return true
    } else if ((lhs == null) || (rhs == null)) {
        return false
    }
    // both have values
    const lhs_a = (typeof lhs === 'string') ? [lhs] : [...lhs]
    const rhs_a = (typeof rhs === 'string') ? [rhs] : [...rhs]
    if (lhs_a.length !== rhs_a.length) {
        return false
    }
    lhs_a.sort()
    rhs_a.sort()
    for (let i = 0 ; i < lhs_a.length ; ++i) {
        if (lhs_a[i] !== rhs_a[i]) {
            return false
        }
    }
    return true
}


export function loadConjugaciónEntero(verb_filename: string) : ConjugaciónEntero {
    const json = fs.readFileSync(verb_filename).toString()
    const entero: ConjugaciónEntero = JSON.parse(json)
    return entero
}


export function findFailedTestsForParticiples(infinitivo: string, expected: Participios, errors: FailedTests) {
    const {participles: actual} = deriveParticiples(infinitivo)
    const expected_keys = <Array <keyof FailedTests>> Object.keys(expected)
    expected_keys.forEach((expected_key: keyof Participios) => {
        if (! equal(actual[expected_key], expected[expected_key])) {
            errors[expected_key] = expected[expected_key]
        }
    })
}


export function findFailedTestsForConjugations(infinitivo: string, mood_tense: MoodTense, expected: ConjugaciónEstándarYAtípico, errors: FailedTests) {
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
    for (const expected_key of expected_keys) {
        const actual_forms = actual[expected_key]
        const expected_forms = expected[expected_key]
        if (Array.isArray(actual_forms) && Array.isArray(expected_forms)) {
            if ((expected_key === "vos") && !actual.vos) {
                if (Array.isArray(expected.s2)) {
                    if (! equal(expected_forms, expected.s2)) {
                        errors[mood_tense] = errors[mood_tense] || {}
                        errors[mood_tense].vos = expected_forms
                    }
                } else {
                    const expected_s2_estándar = expected.s2.estándar
                    // as of Mar 8, 2026: only test standard forms, y no los atípicos
                    if (! equal(expected_forms, <VerbForms> expected_s2_estándar)) {
                        errors[mood_tense] = errors[mood_tense] || {}
                        errors[mood_tense].vos = expected_forms
                    }
                }
            } else {
                if (! equal(actual_forms, expected_forms)) {
                    errors[mood_tense] = errors[mood_tense] || {}
                    errors[mood_tense][expected_key] = expected_forms
                }
            }
            delete remaining_keys[expected_key]
        }
    }
    // FIX: is this even possible anymore?
    if (remaining_keys.length > 0) {
        throw new Error(`${infinitivo},${mood_tense}: has more keys than expected, you probably need to add a test for: ${remaining_keys}`)
    }
}


const all_mood_tenses: MoodTense[] = ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut", "CmdPos", "CmdNeg"]


export function runTestsForInfinitive(infinitivo: string, verb_filename: string) : FailedTests {
    console.log(`runTests(${infinitivo})`)
    const errors: FailedTests = {}
    const entero = loadConjugaciónEntero(verb_filename)
    delete entero.formas_no_personales.infinitivo
    findFailedTestsForParticiples(infinitivo, entero.formas_no_personales, errors)
    for (const mood_tense of all_mood_tenses) {
        if ((mood_tense === "CmdNeg") && !entero.formas_personales["CmdNeg"]) {
            entero.formas_personales["CmdNeg"] = {...entero.formas_personales.SubPres}
            delete entero.formas_personales["CmdNeg"].s1
        }
        findFailedTestsForConjugations(infinitivo, mood_tense, entero.formas_personales[mood_tense], errors)
    }
    const has_errors = (Object.keys(errors).length > 0)
    return (has_errors ? errors : undefined)
}
