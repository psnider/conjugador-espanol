import * as fs from 'node:fs'







// verbs to insert into verbos_con_cambios_morfológicos[]
const verbos_para_insertar = [
    "acceder",
    "acontecer",
    "acudir",
    "adjuntar",
    "aflojar",
    "agasajar",
    "agradar",
    "agudizar",
    "ahuyentar",
    "alargar",
    "albergar",
    "alimentar",
    "aliviar",
    "amarrar",
    "anudar",
    "aplastar",
    "apoderar",
    "apresurar",
    "armar",
    "arribar",
    "asignar",
    "asir",
    "asombrar",
    "aspirar",
    "atenuar",
    "avisar",
    "atemorizar",
    "atornillar",
    "atraer",
    "atropellar",
    "barrer",
    "bordar",
    "brotar",
    "calificar",
    "capacitar",
    "catalogar",
    "categorizar",
    "cazar",
    "centrar",
    "chismear",
    "circular",
    "citar",
    "cocinar",
    "coincidir",
    "colar",
    "colindar",
    "colorar",
    "complicar",
    "condicionar",
    "confeccionar",
    "conformar",
    "confortar",
    "contraer",
    "cruzar",
    "cuadrar",
    "curar",
    "currar",
    "depositar",
    "desbordar",
    "descolorar",
    "desempeñar",
    "desenroscar",
    "desgraciar",
    "desistir",
    "desleír",
    "desperdiciar",
    "desprender",
    "desmontar",
    "desplumar",
    "despojar",
    "destilar",
    "detallar",
    "deteriorar",
    "diferenciar",
    "dificultar",
    "disculpar",
    "dividir",
    "doblegar",
    "dorar",
    "dudar",
    "elaborar",
    "empapar",
    "encoger",
    "enderezar",
    "engañar",
    "enganchar",
    "enmascarar",
    "enroscar",
    "ensamblar",
    "ensanchar",
    "entusiasmar",
    "esforzar",
    "estandarizar",
    "estipular",
    "evaluar",
    "excluir",
    "exhalar",
    "fallecer",
    "fallar",
    "felicitar",
    "festejar",
    "finalizar",
    "gozar",
    "hilvanar",
    "hornear",
    "iluminar",
    "importar",
    "impregnar",
    "impresionar",
    "incubar",
    "indexar",
    "infundir",
    "inhalar",
    "inquietar",
    "instar",
    "interrogar",
    "invadir",
    "lagrimear",
    "lastimar",
    "lucir",
    "modelar",
    "modernizar",
    "molestar",
    "nutrir",
    "operar",
    "pasmar",
    "pedalear",
    "penetrar",
    "picar",
    "posar",
    "presenciar",
    "presentar",
    "procesar",
    "procurar",
    "prometer",
    "quemar",
    "ramificar",
    "raspar",
    "reanudar",
    "rebelar",
    "reconectar",
    "reconfortar",
    "recontar",
    "recorrer",
    "recurrir",
    "reformar",
    "reencender",
    "reinstalar",
    "remodelar",
    "renunciar",
    "repartir",
    "replicar",
    "reposar",
    "reprimir",
    "secar",
    "sellar",
    "simplificar",
    "sobrecoger",
    "sollozar",
    "soportar",
    "sospechar",
    "sujetar",
    "suspender",
    "transcurrir",
    "triangular",
    "velar",
]

const verbs_list_filename = "./src/verbos-con-cambios-morfológicas.ts"
const updated_verbs_list_filename = "./src/verbos-con-cambios-morfológicas-WITH-NEW.ts"


const order = [
    "a", "á",
    "b",
    "c",
    "d",
    "e", "é",
    "f",
    "g",
    "h",
    "i", "í",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o", "ó",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u", "ú", "ü",
    "v",
    "w",
    "x",
    "y",
    "z"
]
const rank = new Map<string, number>();
order.forEach((char, i) => rank.set(char, i));


function compareSpanishWords(lhs: string, rhs: string) : number {
    const len = Math.min(lhs.length, rhs.length);
    for (let i = 0; i < len; i++) {
        const l = lhs[i];
        const r = rhs[i];
        if (l === r) continue;
        const rl = rank.get(l);
        const rr = rank.get(r);
        if (rl === undefined || rr === undefined) {
            throw new Error(`Caracter inválido: '${l}' o '${r}'`);
        }
        return rl - rr;
    }
    // Si uno es prefijo del otro
    return lhs.length - rhs.length;
}


function insertVerbsIntoVerbsFile() {
    function copyUpToVerbsTable() {
        let i = 0
        let línea_original = líneas_originales[i]
        while (! línea_original.startsWith("export const verbos_con_cambios_morfológicos")) {
            líneas_actualizadas.push(línea_original)
            línea_original = líneas_originales[++i]
        } 
        líneas_actualizadas.push(línea_original)
        return ++i
    }
    function getNewVerbLine(verbo: string) {
        const padding_length = Math.max(1, 20 - verbo.length - 5)
        const padding = " ".repeat(padding_length)
        const línea = `    ${verbo}:${padding}{},`
        return línea
    }
    verbos_para_insertar.sort(compareSpanishWords)
    const líneas_originales = fs.readFileSync(verbs_list_filename).toString().split("\n")
    const líneas_actualizadas = []
    let line_index = copyUpToVerbsTable()
    while (line_index < líneas_originales.length) {
        let línea_original = líneas_originales[line_index++]
        const verb_match = línea_original.match(/^    ([a-zñáéíóúü]+):(\s+){/)
        if (verb_match) {
            const verbo_de_lista = verb_match[1]
            let verbo_para_insertar = verbos_para_insertar[0]
            if (verbo_para_insertar) {
                let order = compareSpanishWords(verbo_para_insertar, verbo_de_lista)
                if (order <= 0) {
                    while (order < 0) {
                        const new_verb_line = getNewVerbLine(verbo_para_insertar)
                        líneas_actualizadas.push(new_verb_line)
                        verbos_para_insertar.shift()
                        verbo_para_insertar = verbos_para_insertar[0]
                        order = verbo_para_insertar ? compareSpanishWords(verbo_para_insertar, verbo_de_lista) : 0
                    } 
                    if (verbo_de_lista === verbo_para_insertar) {
                        verbos_para_insertar.shift()
                        console.log(`skipping ${verbo_para_insertar}, already exists`)
                    }
                }
            }
        }
        líneas_actualizadas.push(línea_original)
    }
    const líneas_actualizadas_juntado = líneas_actualizadas.join("\n")
    fs.writeFileSync(updated_verbs_list_filename, líneas_actualizadas_juntado)
    console.log(`added verbs to ${updated_verbs_list_filename}`)
    if (verbos_para_insertar.length > 0) {
        throw new Error(`These verbs were not added:\n$${verbos_para_insertar}`)
    }
}


insertVerbsIntoVerbsFile()
