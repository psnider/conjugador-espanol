import * as fs from 'node:fs'



const verbos_archivo_nombre = "./generated/src/verbos-con-cambios-morfológicas.js"
const resultos_de_pruebas_archivo_nombre = './generated/test/resultos-de-pruebas.json'

const resultos_de_pruebas_json = fs.readFileSync(resultos_de_pruebas_archivo_nombre).toString()
const resultos_de_pruebas = JSON.parse(resultos_de_pruebas_json)

const líneas_originales = fs.readFileSync(verbos_archivo_nombre).toString().split("\n")
const líneas_anotadas = []
for (const línea_original of líneas_originales) {
    const match = línea_original.match(/^    (\w+):(\s+){/)
    if (match) {
        const verbo = match[1]
        if (verbo in resultos_de_pruebas) {
            const resultos_por_verbo = resultos_de_pruebas[verbo]
            const failed_tests_json = JSON.stringify(resultos_por_verbo)
            const index = match[0].length
            const línea_anotada = línea_original.slice(0, index) + `\n      ok:${failed_tests_json},\n      ` + línea_original.slice(index)
            líneas_anotadas.push(línea_anotada)
        } else {
            líneas_anotadas.push(línea_original)
        }
    } else {
        líneas_anotadas.push(línea_original)
    }
}
const líneas_anotadas_juntado = líneas_anotadas.join("\n")
fs.writeFileSync(verbos_archivo_nombre, líneas_anotadas_juntado)
console.log(`added test results as "ok" fields in ${verbos_archivo_nombre}`)
