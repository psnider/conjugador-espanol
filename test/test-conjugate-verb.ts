import { MoodTense } from "../src";
import { conjugateVerb } from "../src/conjugate-verb.js";
import { deriveParticiples } from "../src/derive-participles.js";
import { mood_tenses } from "../src/lib.js";
import { verb_terminations } from "../src/regular-verb-rules.js";



// case "IndPres":
// case "IndImp":
// case "IndPret":
// case "IndFut":
// case "IndCond":
// case "SubPres":
// case "SubImp":
// case "SubFut":
// case "CmdPos":
// case "CmdNeg":
 
let infinitive: string = "satisfacer"
let mood_tense: MoodTense = "IndPres"

if (process.argv.length !== 4) {
    console.log("Usage: infinitive mood_tense")
    if (process.argv.length > 2) {
        process.exit(1)
    }
} else {
    infinitive = process.argv[2]
    mood_tense = <MoodTense> process.argv[3]
}

console.log(`${infinitive} ${mood_tense}`)
let error = false
if ( ! verb_terminations.includes(infinitive.slice(-2))) {
    console.log(`infinitive must end with one of "ar","er","ir"`)
    error = true
}
if ( ! mood_tenses.includes(mood_tense)) {
    console.log(`mood_tense must be one of ${mood_tenses.join(", ")}`)
    error = true
}
if (error) {
    process.exit(1)
}

console.log("⚡ Punto de control ANTES del breakpoint");

let participles = deriveParticiples(infinitive)
console.log(JSON.stringify(participles, null, 4))

let conjugation = conjugateVerb(infinitive, mood_tense)
console.log(JSON.stringify(conjugation, null, 4))

