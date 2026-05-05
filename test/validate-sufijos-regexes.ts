import { verificaSufijos } from "../src/indexa-formas-conjugadas.js"

const errores = verificaSufijos()
if (errores === 0) {
    console.log(`validated sufijos_regexes{}`)
    process.exit(0)
} else {
    console.log(`verificaSufijos() encontró ${errores} errores`)
    process.exit(1)
}

