import * as fs from 'node:fs'
import { runTestsForInfinitive } from "./test-support.js"
import { TestResults } from '../src/verbos-con-cambios-morfológicas.js'


const verbs_dir = "test/verbos"
const verb_terminations = ["ar", "er", "ir", "ír"]

const test_results: {[infinitive: string]: TestResults} = {}


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
            const first_ch = infinitivo[0]
            const verb_filename = `${verbs_dir}/${first_ch}/${infinitivo}.json`
            if (infinitivo.endsWith("-FIX")) {
                console.log(`skipping infinitivo=${infinitivo}, must repair: ${verb_filename}`)
            } else if (verb_terminations.includes(infinitivo.slice(-2))) {
                const corrections_of_failures = runTestsForInfinitive(infinitivo, verb_filename)
                if (corrections_of_failures) {
                    test_results[infinitivo] = corrections_of_failures
                } else {
                    test_results[infinitivo] = true
                }
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
    const results_filename = `generated/test/resultados-de-pruebas.json`
    const json = JSON.stringify(test_results, null, 2)
    fs.writeFileSync(results_filename, json)
    let error_count = 0
    let infinitives = Object.keys(test_results)
    for (const infinitive of infinitives) {
        const test_result = test_results[infinitive]
        if (test_result !== true) {
            ++error_count
        }
    }
    console.log(`wrote ${results_filename}`)
    console.log(`...with ${infinitives.length} verbs, with ${error_count} errors.`)
}


runTestsForSavedVerbs()
saveTestResults()

