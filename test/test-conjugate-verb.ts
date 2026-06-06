import type { MoodTense } from "../src/index"
import { conjugateVerb } from "../src/conjugate-verb.js";
import { deriveParticiples } from "../src/derive-participles.js";
import { encuentraFormasSimilares } from "../src/indexa-de-temas-conjugadas.js"
import { mood_tenses, verb_terminations_all } from "../src/lib.js";
import { runTestsForInfinitive } from "./test-support.js";


let infinitivo: string = "ver"    // 
// one of: "IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres" , "SubImp" , "SubFut", "CmdPos", "CmdNeg"
let mood_tense: MoodTense = "CmdNeg"


// let consulta = "graba"
// const resultados = encuentraFormasSimilares(consulta)
// debugger


if (process.argv.length !== 4) {
    console.log("Usage: infinitivo mood_tense")
    if (process.argv.length > 2) {
        process.exit(1)
    }
} else {
    infinitivo = process.argv[2]
    mood_tense = <MoodTense> process.argv[3]
}

console.log(`${infinitivo} ${mood_tense}`)
let error = false
if ( ! verb_terminations_all.includes(infinitivo.slice(-2))) {
    console.log(`infinitivo must end with one of "ar","er","ir","ír"`)
    error = true
}
if ( ! mood_tenses.includes(mood_tense)) {
    console.log(`mood_tense must be one of ${mood_tenses.join(", ")}`)
    error = true
}
if (error) {
    process.exit(1)
}



let participles = deriveParticiples(infinitivo)
console.log(JSON.stringify(participles, null, 4))

let conjugation = conjugateVerb(infinitivo, mood_tense)
console.log(JSON.stringify(conjugation, null, 4))

const failed_tests = runTestsForInfinitive(infinitivo, `test/verbos/${infinitivo[0]}/${infinitivo}.json`)
console.log(`runTestsForInfinitive ${failed_tests ? "FAILED" : "ok"}`)
debugger
