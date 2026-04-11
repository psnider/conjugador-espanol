import { FormaConjugada } from "../src";
import { ConjugationAndDerivationRules, MorphologicalRulesAccumulated, Prefixes, resolveConjugationClass } from "../src/resolve-conjugation-class.js";
import { ReglasDeConjugaciónDeVerbo } from "../src/verbos-con-cambios-morfológicas.js";



// interface ConjugationAndDerivationRules_Expected {
//     // The infinitivo that this describes.
//     infinitivo: string
//     // The infinitivo that is left when any semantic prefixes have been removed.
//     infinitivo_sin_prefijos: string
//     verb_family: InfinitiveClass
//     prefixes: Prefixes | null
//     cached_tema_pretérito_p3_de_modelo: string
//     impersonal: true | null
//     auxiliar: true | null
//     // El modelo: ModeloConjugacional está en MorphologicalRulesAccumulated.combinados
//     reglas: ReglasDeConjugaciónDeVerbo_expected  // from verbos_con_cambios_morfológicas[]
// }


function _areEqual(lhs: unknown, rhs: unknown): boolean {
    if ((lhs == null) && (rhs == null)) {
        return true
    }
    if ((lhs == null) || (rhs == null)) {
        return false
    }
    if (typeof lhs === "string" && typeof rhs === "string") {
        return lhs === rhs;
    }
    if (typeof lhs === "boolean" && typeof rhs === "boolean") {
        return lhs === rhs;
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length) return false;
        return lhs.every((lhs_i, i) => {
        const rhs_i = rhs[i];
        if (typeof lhs_i === "string" && typeof rhs_i === "string") {
            return lhs_i === rhs_i;
        }
        // comparación de objetos (simplificada)
        return JSON.stringify(lhs_i) === JSON.stringify(rhs_i);
        })
    } else {
        // comparación de objetos (simplificada)
        return JSON.stringify(lhs) === JSON.stringify(rhs);
    }
    return false;
}


function areEqual(lhs: boolean, rhs: boolean) : boolean;
function areEqual(lhs: string, rhs: string) : boolean;
function areEqual(lhs: string[], rhs: string[]) : boolean;
function areEqual(lhs: FormaConjugada[], rhs: FormaConjugada[]) : boolean;
function areEqual(lhs: Prefixes, rhs: Prefixes) : boolean;
function areEqual(lhs: unknown, rhs: unknown) : boolean {
    return _areEqual(lhs, rhs)
}
function assertEqual(infinitive: string, fieldname: string, obj_actual: object, obj_esperado: object) : void {
    const campo_actual = obj_actual[fieldname]
    const campo_esperado = obj_esperado[fieldname]
    const equal = areEqual(campo_actual, campo_esperado)
    if (!equal) {
        throw new Error(`${infinitive} ${fieldname}: actual=${JSON.stringify(campo_actual)} != expected=${JSON.stringify(campo_esperado)}`)
    }
}


interface Test_ConjugationAndDerivationRules extends Omit<ConjugationAndDerivationRules, "morphological_rules"> {
}



export function test_resolveConjugationClass(infinitivo: string, resolución_esperada: Test_ConjugationAndDerivationRules, reglas_esperadas: ReglasDeConjugaciónDeVerbo) {
    console.log(`test_resolveConjugationClass(${infinitivo})`)
    const resolución_actual = resolveConjugationClass(infinitivo)
    assertEqual(infinitivo, "infinitivo", resolución_actual, resolución_esperada)
    assertEqual(infinitivo, "infinitivo_sin_prefijos", resolución_actual, resolución_esperada)
    assertEqual(infinitivo, "verb_family", resolución_actual, resolución_esperada)
    assertEqual(infinitivo, "prefixes", resolución_actual, resolución_esperada)
    assertEqual(infinitivo, "cached_tema_pretérito_p3_de_modelo", resolución_actual, resolución_esperada)
    // de morphological_rules
    const morphological_rules = resolución_actual?.morphological_rules
    const de_modelo = {...morphological_rules?.de_modelo}
    const de_infinitivo = (morphological_rules?.de_infinitivo ? {...morphological_rules?.de_infinitivo} : de_modelo)
    const combined = {...de_modelo, ...de_infinitivo}
    assertEqual(infinitivo, "infinitivos", combined, reglas_esperadas)
    assertEqual(infinitivo, "modelo", de_modelo, reglas_esperadas)
    assertEqual(infinitivo, "clase_conjugacional", de_infinitivo, reglas_esperadas)
    assertEqual(infinitivo, "auxiliar", de_infinitivo, reglas_esperadas)
    assertEqual(infinitivo, "impersonal", de_infinitivo, reglas_esperadas)
    assertEqual(infinitivo, "no_admite_prefijos", de_modelo, reglas_esperadas)
    assertEqual(infinitivo, "tema_presente_yo_del_modelo", de_modelo, reglas_esperadas)
    assertEqual(infinitivo, "sufijo_presente_yo", de_modelo, reglas_esperadas)
    assertEqual(infinitivo, "tema_pretérito_del_modelo", de_modelo, reglas_esperadas)
    assertEqual(infinitivo, "tema_futuro_del_modelo", de_modelo, reglas_esperadas)
}


test_resolveConjugationClass("amar", {
        infinitivo: "amar",
        infinitivo_sin_prefijos: "amar",
        verb_family: "-ar",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "ama"
    },{
        infinitivos: ["amar"],
        clase_conjugacional: null,
        modelo: null,
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: null,
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: null,
        impersonal: null,
    }
)
test_resolveConjugationClass("andar", {
        infinitivo: "andar",
        infinitivo_sin_prefijos: "andar",
        verb_family: "-ar",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "anduvie",
    },{
        infinitivos: ["andar"],
        clase_conjugacional: null,
        modelo: "andar",
        // existe "desandar"
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "anduv",
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: true,
        impersonal: null,
    }
)

test_resolveConjugationClass("dar", {
        infinitivo: "dar",
        infinitivo_sin_prefijos: "dar",
        verb_family: "-ar",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "die",
    },{
        infinitivos: ["dar"],
        clase_conjugacional: null,
        modelo: "dar",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: "oy",
        tema_pretérito_del_modelo: null,
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: null,
        impersonal: null,
    }
)

test_resolveConjugationClass("decir", {
        infinitivo: "decir",
        infinitivo_sin_prefijos: "decir",
        verb_family: "-ir",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "dije"
    },{
        infinitivos: ["decir"],
        clase_conjugacional: null,
        modelo: "decir",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: ["dig"],
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "dij",
        tema_futuro_del_modelo: "dir",
        alternancia_vocálica: "e:i",
        auxiliar: null,
        impersonal: null,
    }
)


test_resolveConjugationClass("desleír", {
        infinitivo: "desleír",
        infinitivo_sin_prefijos: "desleír",
        verb_family: "-ir",
        prefixes: {clase_de_conjugación: {prefijo_aditivo: "desl", prefijo_sustractivo: "r"}},
        cached_tema_pretérito_p3_de_modelo: "rie"
    },{
        infinitivos: ["desleír","reír"],
        clase_conjugacional: "-eír",
        modelo: "reír",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: null,
        tema_futuro_del_modelo: null,
        alternancia_vocálica: "e:í",
        auxiliar: null,
        impersonal: null,
    }
)

test_resolveConjugationClass("estar", {
        infinitivo: "estar",
        infinitivo_sin_prefijos: "estar",
        verb_family: "-ar",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "estuvie",
    },{
        infinitivos: ["estar"],
        clase_conjugacional: null,
        modelo: "estar",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: "oy",
        tema_pretérito_del_modelo: "estuv",
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: true,
        impersonal: null,
    }
)

test_resolveConjugationClass("haber", {
        infinitivo: "haber",
        infinitivo_sin_prefijos: "haber",
        verb_family: "-er",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "hubie",
    },{
        infinitivos: ["haber"],
        clase_conjugacional: null,
        modelo: "haber",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "hub",
        tema_futuro_del_modelo: "habr",
        alternancia_vocálica: null,
        auxiliar: true,
        impersonal: true
    }
)

test_resolveConjugationClass("hacer", {
        infinitivo: "hacer",
        infinitivo_sin_prefijos: "hacer",
        verb_family: "-er",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "hicie",
    },{
        infinitivos: ["hacer"],
        clase_conjugacional: "-acer",
        modelo: "hacer",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: ["hag"],
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "hic",
        tema_futuro_del_modelo: "har",
        alternancia_vocálica: null,
        auxiliar: null,
        impersonal: null
    }
)

test_resolveConjugationClass("ir", {
        infinitivo: "ir",
        infinitivo_sin_prefijos: "ir",
        verb_family: "-ir",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "fue",
    },{
        infinitivos: ["ir"],
        clase_conjugacional: null,
        modelo: "ir",
        no_admite_prefijos: true,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: "oy",
        tema_pretérito_del_modelo: "fu",
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: true,
        impersonal: null
    }
)

test_resolveConjugationClass("ser", {
        infinitivo: "ser",
        infinitivo_sin_prefijos: "ser",
        verb_family: "-er",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "fue",
    },{
        infinitivos: ["ser"],
        clase_conjugacional: null,
        modelo: "ser",
        no_admite_prefijos: true,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "fu",
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: true,
        impersonal: null
    }
)

test_resolveConjugationClass("tener", {
        infinitivo: "tener",
        infinitivo_sin_prefijos: "tener",
        verb_family: "-er",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "tuvie",
    },{
        infinitivos: ["tener"],
        clase_conjugacional: null,
        modelo: "tener",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: ["teng"],
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "tuv",
        tema_futuro_del_modelo: "tendr",
        alternancia_vocálica: "e:ie",
        auxiliar: true,
        impersonal: null
    }
)

test_resolveConjugationClass("venir", {
        infinitivo: "venir",
        infinitivo_sin_prefijos: "venir",
        verb_family: "-ir",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "vinie",
    },{
        infinitivos: ["venir"],
        clase_conjugacional: null,
        modelo: "venir",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: ["veng"],
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "vin",
        tema_futuro_del_modelo: "vendr",
        alternancia_vocálica: "e:ie",
        auxiliar: null,
        impersonal: null
    }
)

test_resolveConjugationClass("ver", {
        infinitivo: "ver",
        infinitivo_sin_prefijos: "ver",
        verb_family: "-er",
        prefixes: null,
        cached_tema_pretérito_p3_de_modelo: "vie",
    },{
        infinitivos: ["ver"],
        clase_conjugacional: null,
        modelo: "ver",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: null,
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: null,
        tema_futuro_del_modelo: null,
        alternancia_vocálica: null,
        auxiliar: null,
        impersonal: null
    }
)

test_resolveConjugationClass("retener", {
        infinitivo: "retener",
        infinitivo_sin_prefijos: "tener",
        verb_family: "-er",
        prefixes: {clase_de_conjugación: {prefijo_aditivo: "re"}},
        cached_tema_pretérito_p3_de_modelo: "tuvie",
    },{
        infinitivos: ["retener" ,"tener"],
        clase_conjugacional: null,
        modelo: "tener",
        no_admite_prefijos: null,
        tema_presente_yo_del_modelo: ["teng"],
        sufijo_presente_yo: null,
        tema_pretérito_del_modelo: "tuv",
        tema_futuro_del_modelo: "tendr",
        alternancia_vocálica: "e:ie",
        auxiliar: null,
        impersonal: null
    }
)

