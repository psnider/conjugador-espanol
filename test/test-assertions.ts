
import {GrammaticalPersons, Participios, MoodTense, ConjugaciónEstándarYAtípico, VerbForms} from "../src"
import { conjugateVerb } from "../src/conjugate-verb.js"
import { deriveParticiples } from "../src/derive-participles.js";
import { persons_w_vos_index } from "../src/lib.js";
import { test_applyOrthographicalChanges } from "./test-orthographical-change.js"


export function equal(lhs: string | [string] | [string, string] | undefined, rhs: string | [string] | [string, string] | undefined) {
    // handle degenerate cases
    if ((lhs == null) && (rhs == null)) {
        return true
    } else if ((lhs == null) || (rhs == null)) {
        return false
    }
    // both have values
    const lhs_a = (typeof lhs === 'string') ? [lhs] : lhs
    const rhs_a = (typeof rhs === 'string') ? [rhs] : rhs
    if (lhs_a.length !== rhs_a.length) {
        return false
    }
    for (let i = 0 ; i < lhs_a.length ; ++i) {
        if (lhs_a[i] !== rhs_a[i]) {
            return false
        }
    }
    return true
}


export type VerbConjugationExpected = GrammaticalPersons<string | [string, string]>


export function assert_Participles(infinitivo: string, expected: Participios) {
    const {participles: actual} = deriveParticiples(infinitivo)
    const expected_keys = Object.keys(expected)
    expected_keys.forEach((expected_key: keyof Participios) => {
        if (! equal(actual[expected_key], expected[expected_key])) {
            throw new Error(`${infinitivo},${expected_key}: ${actual[expected_key]} !== ${expected[expected_key]}`)
        }
        delete actual[expected_key]
    })
    const unexpected_keys = Object.keys(actual)
    if (unexpected_keys.length > 0) {
        throw new Error(`${infinitivo}: has more keys than expected, you probably need to add a test for: ${unexpected_keys}`)
    }
}


export function assert_MoodTense(infinitivo: string, mood_tense: MoodTense, expected: ConjugaciónEstándarYAtípico) {
    const {forms: actual} = conjugateVerb(infinitivo, mood_tense)
    const expected_keys = Object.keys(expected)
    const remaining_keys = {...persons_w_vos_index}
    expected_keys.forEach((expected_key: keyof VerbConjugationExpected) => {
        const actual_forms = actual[expected_key]
        const expected_forms = expected[expected_key]
        if (Array.isArray(actual_forms) && Array.isArray(expected_forms)) {
            if ((expected_key === "vos") && !actual.vos) {
                if (Array.isArray(expected.s2)) {
                    if (! equal(expected_forms, expected.s2)) {
                        throw new Error(`${infinitivo},${mood_tense},${expected_key}: expected vos to equal tú: ${expected_forms} !== ${expected.s2}`)
                    }
                } else {
                    const expected_s2_estándar = expected.s2.estándar
                    // as of Mar 8, 2026: only test standard forms, y no los atípicos
                    if (! equal(expected_forms, <VerbForms> expected_s2_estándar)) {
                        throw new Error(`${infinitivo},${mood_tense},${expected_key}: expected vos to equal tú: ${expected_forms} !== ${expected.s2}`)
                    }
                }
            } else {
                if (! equal(actual_forms, expected_forms)) {
                    throw new Error(`${infinitivo},${mood_tense},${expected_key}: ${actual[expected_key]} !== ${expected[expected_key]}`)
                }
            }
            delete remaining_keys[expected_key]
        }
    })
    if (remaining_keys.length > 0) {
        throw new Error(`${infinitivo},${mood_tense}: has more keys than expected, you probably need to add a test for: ${remaining_keys}`)
    }
}


export function assert_orthographicalChange(args: {conjugated_form: string, suffix: string, infinitivo: string}, expected: string) {
    const rules_applied: string[] = []
    const actual = test_applyOrthographicalChanges(args)
    if (actual !== expected) {
        throw new Error(`${actual} !== ${expected} : rules_applied=${rules_applied}`)
    }
}


