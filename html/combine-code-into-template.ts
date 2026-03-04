import * as fs from 'node:fs';
import * as path from 'path';


// --- CONFIGURACIÓN ---
const template_file = "html/página-conjugador-template.html";

const sourceDir = "generated/src";

const version_file = "version.js"

const code_files = [
  "lib.js",
  "move-stress.js",
  "ortografía.js",
  "prefixes.js",
  "regular-verb-rules.js",
  "tema-futuro.js",
  "tema-presente-yo.js",
  "tema-pretérito.js",
  "verbos-con-cambios-morfológicas.js",
  "alternancia-vocálica.js",
  "resolve-conjugation-class.js",
  "stem-changes.js",
  "derive-participles.js",
  "conjugate-verb.js"
];


// get version info ---
const version_path = path.join(sourceDir, version_file);
const versión_y_licencia = fs.readFileSync(version_path, "utf8");
const match_version = versión_y_licencia.match(/version = "([^"]+)"/)
if (!match_version) {
    console.log(`Couldn't find version`)
    process.exit(1)
}
const version_file_suffix = match_version[1].replace(/ /g, "-")


// leer y combinar el código
let combined_code = ""


for (const file of code_files) {
  const fullPath = path.join(sourceDir, file);
  let code = fs.readFileSync(fullPath, "utf8");
  // Eliminar "export " y líneas import
  code = code.replace(/^import.*$/gm, "");
  code = code.replace(/\bexport\s+/g, "");
  // Normalizar sourceMappingURL
  code = code.replace(/^\/\/# sourceMappingURL/g, "// sourceMappingURL");
  combined_code += "\n\n" + code;
}

// --- 2. CARGAR TEMPLATE ---
let template = fs.readFileSync(template_file, "utf8");

// --- 3. INSERTAR version.js ---
template = template.replace(
  /\/\/ INSERT conjugateVerb version here/,
  `// --- versión ---\n${versión_y_licencia}\n// --- fin versión ---`
);

// --- 4. INSERTAR librería completa ---
let página = template.replace(
  /\/\/ INSERT conjugateVerb code here/,
  `// --- librería conjugador ---\n${combined_code}\n// --- fin librería ---`
);

// --- 5. GUARDAR RESULTADO ---
const output_file = `index.html`
fs.writeFileSync(output_file, página, "utf8");

console.log("Página generada:", output_file);
