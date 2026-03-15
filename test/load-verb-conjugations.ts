import * as fs from 'node:fs'
import { ConjugaciónEntero } from "."
import { MoodTense } from '../src'
import { assert_MoodTense, assert_Participles } from './test-assertions.js'


export function loadConjugaciónEntero(verb_filename: string) : ConjugaciónEntero {
    const json = fs.readFileSync(verb_filename).toString()
    const entero: ConjugaciónEntero = JSON.parse(json)
    return entero
}


const all_mood_tenses: MoodTense[] = ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut", "CmdPos", "CmdNeg"]


export function runTestsForInfinitive(infinitivo: string, verb_filename: string) : boolean {
    console.log(`runTests(${infinitivo})`)
    let passed: boolean
    const entero = loadConjugaciónEntero(verb_filename)
    delete entero.formas_no_personales.infinitivo
    try {
        assert_Participles(infinitivo, entero.formas_no_personales)
        for (const mood_tense of all_mood_tenses) {
            if ((mood_tense === "CmdNeg") && !entero.formas_personales["CmdNeg"]) {
                entero.formas_personales["CmdNeg"] = {...entero.formas_personales.SubPres}
                delete entero.formas_personales["CmdNeg"].s1
            }
            if (infinitivo == "ver" && mood_tense == "IndPret") debugger
            assert_MoodTense(infinitivo, mood_tense, entero.formas_personales[mood_tense])
        }
        passed = true
    }
    catch (error: any) {
        console.log(error)
        passed = false
    }
    return passed
}

