import * as fs from 'node:fs'


// verbs found from verbos_con_cambios_morfológicos[]
const verbs_in_verbos_con_cambios_morfológicos = {}
// verbs that are in verbos_con_cambios_morfológicos, but don't yet have test validation data
const verbs_missing_validation_data = []

const verbos_archivo_nombre = "./generated/src/verbos-con-cambios-morfológicas.js"
const resultados_de_pruebas_archivo_nombre = './generated/test/resultados-de-pruebas.json'

const resultados_de_pruebas_json = fs.readFileSync(resultados_de_pruebas_archivo_nombre).toString()
const resultados_de_pruebas = JSON.parse(resultados_de_pruebas_json)


function annotateVerbAttributesFileWithTestResults() {
    const líneas_originales = fs.readFileSync(verbos_archivo_nombre).toString().split("\n")
    const líneas_anotadas = []
    for (const línea_original of líneas_originales) {
        const match = línea_original.match(/^    ([a-zñáéíóúü]+):(\s+){/)
        if (match) {
            const verbo = match[1]
            verbs_in_verbos_con_cambios_morfológicos[verbo] = true
            if (verbo in resultados_de_pruebas) {
                const resultados_por_verbo = resultados_de_pruebas[verbo]
                const failed_tests_json = JSON.stringify(resultados_por_verbo)
                const index = match[0].length
                const línea_anotada = línea_original.slice(0, index) + `\n      ok:${failed_tests_json},\n      ` + línea_original.slice(index)
                líneas_anotadas.push(línea_anotada)
            } else {
                líneas_anotadas.push(línea_original)
                verbs_missing_validation_data.push(verbo)
            }
        } else {
            líneas_anotadas.push(línea_original)
        }
    }
    const líneas_anotadas_juntado = líneas_anotadas.join("\n")
    fs.writeFileSync(verbos_archivo_nombre, líneas_anotadas_juntado)
    console.log(`added test results as "ok" fields in ${verbos_archivo_nombre}`)
}


function printCommandsToGenerateMissingVerbValidationFiles() {
    if (verbs_missing_validation_data.length > 0) {
        console.log(`Please run the following commands to add missing validation data:`)
        for (const verb of verbs_missing_validation_data) {
            console.log(`curl https://es.wiktionary.org/wiki/${verb} > tmp/verbos/${verb}.html  &&  node generated/test/wiktionary-scraper.js ${verb}  &&  echo finished: ${verb}  &&  sleep 1`)
        }
    }
}


function printDefaultAnnotationsForMissingVerbs() {
    const verbs_to_annotate = []
    for (const verb of Object.keys(resultados_de_pruebas)) {
        if (! (verb in verbs_in_verbos_con_cambios_morfológicos)) {
            verbs_to_annotate.push(verb)
        }
    }
    if (verbs_to_annotate.length > 0) {
        console.log(`Please add the following empty verb annotations to verbos_con_cambios_morfológicos[]:`)
        verbs_to_annotate.sort()
        for (const verb of verbs_to_annotate) {
            // how many spaces are needed after the colon?
            const padding_length = Math.max(1, 20 - verb.length - 5)
            const padding = " ".repeat(padding_length)
            console.log(`    ${verb}:${padding}{},`)
        }
    }
}


annotateVerbAttributesFileWithTestResults()
printCommandsToGenerateMissingVerbValidationFiles()
printDefaultAnnotationsForMissingVerbs()
