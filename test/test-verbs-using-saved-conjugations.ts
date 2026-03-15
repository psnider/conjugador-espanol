import * as fs from 'node:fs'
import { runTestsForInfinitive } from "./load-verb-conjugations.js"


const verbs_dir = "test/verbos"
const verb_terminations = ["ar", "er", "ir", "ír"]
// const persons_order_in_tests = <Array<keyof ConjugaciónModoTiempo>> ["s1", "s2", "s3", "p1", "p2", "p3", "vos"]



// function getTestable_Tú_y_Vos(mood_tense: MoodTense, formas: ConjugaciónModoTiempo) {
//     const {s2, vos} = formas
//     if (mood_tense === "SubImp") {
//         if (Array.isArray(s2) && Array.isArray(vos)) {
//             if ((s2[0] === vos[0]) && (s2[1] === vos[1])) {
//                 return {s2}
//             }
//         }
//         return {s2, vos}
//     } else {
//         const s2_is_array = Array.isArray(s2)
//         const vos_is_array = Array.isArray(vos)
//         // for now only test the standard forms
//         const s2_standard = (s2_is_array ? s2[0] : s2.estándar[0])
//         const vos_standard = (vos_is_array ? vos[0] : vos.estándar[0])
//         const tú_y_vos_differ = (s2_standard !== vos_standard)
//         return {s2: s2_standard, vos: tú_y_vos_differ ? vos_standard : undefined}
//     }
// }

const passed = {}


function getLeadingCharMap() {
    const spanish_letters = "abcdefghijklmnopqrstuvwxyz"
    const leading_chars = {}
    for (let i = 0; i < spanish_letters.length ; ++i) {
        leading_chars[spanish_letters[i]] = true
    }
    return leading_chars
}


// No usamos letras con acentos para colleciones de verbos
const verb_start_char = getLeadingCharMap()

function runTestsForSavedVerbsInDir(dir: string) {
    const verb_files = fs.readdirSync(dir)
    for (const verb_file of verb_files) {
        if (verb_file.endsWith(".json")) {
            let infinitivo = verb_file.slice(0, -5)
            if (infinitivo.endsWith("-FIX")) {
                infinitivo = infinitivo.slice(0,-4)
                passed[infinitivo] = false
            } else if (verb_terminations.includes(infinitivo.slice(-2))) {
                const verb_filename = `${verbs_dir}/${infinitivo[0]}/${infinitivo}.json`
                if (infinitivo === "ver") debugger
                const ok = runTestsForInfinitive(infinitivo, verb_filename)
                passed[infinitivo] = ok
            } else {
                console.log(`unexpected file: ${verb_file}`)
            }
        }
    }
}


function runTestsForSavedVerbs() {
    const subdirs = fs.readdirSync(verbs_dir)
    for (const subdir of subdirs) {
        if (verb_start_char[subdir]) {
            runTestsForSavedVerbsInDir(`${verbs_dir}/${subdir}`)
        }
    }
}


function saveTestResults() {
    const results_filename = `generated/test/resultos-de-pruebas.json`
    const json = JSON.stringify(passed, null, 2)
    fs.writeFileSync(results_filename, json)
    console.log(`wrote ${results_filename}`)
}



runTestsForSavedVerbs()
saveTestResults()

