import { GrammaticalPerson, StemChangeRuleId, MoodTense, MoodTenseMap, VerbConjugation, VerbConjugationAnnotation, VerbConjugationChanges, VerbForms } from "."
import { FailedTests } from "../test/test-support"
import { VerbAspectModifications } from "./regular-verb-rules"
import { version, license } from "./version.js"



export type InfinitiveClass = "-ar" | "-er" | "-ir"

// A family of verbs that conjugate the same depending on the termination.
// These start with a preceding hyphen to emphasize that the form is not a verb itself.
// However, this doesn't mean that all verbs with this termination conjugate the same way, 
// for example, the model for "-iar" is "vaciar", but "estudiar" is regular. 
export type VerboClaseConjugacional = "-acer" | "-ducir" | "-eer" | "-iar" | "-uir"


// El modelo de la conjugación.
// Para verbos regulares, no especifica un modelo.
export type ModeloConjugacional = 
        | "delinquir"
        | "caber"    | "caer"    | "conducir" | "dar"     | "decir"   | "dormir"
        | "enraizar" | "erguir"  | "estar"
        | "guiar"    | "haber"   | "hacer"    | "huir"    | "ir"      | "jugar"  | "leer"
        | "mover"    | "oír"     | "pedir"    | "poder"   | "poner" 
        | "querer"   | "reír"    | "saber"    | "salir"   | "seguir"  | "ser"
        | "tener"    | "traer"   | "vaciar"   | "venir"   | "ver"     | "volver"

// The rules for conjugating a single form of an irregular verb, such as: "IndPres", "IndImp"
export interface VerbAspectRulesWithFullyIrregularForms extends VerbAspectModifications {
    // morphology
    suffixes?: VerbConjugationChanges
    // suplication
    tema?: string
    forms?: VerbConjugation
    derivations?: {
        preserve_stress_from_base?: GrammaticalPerson[]
    }
}


export interface ReglasDeConjugaciónDeVerboExcepcionesLexicas {
    // irregulares como: "ir", "ser"
    supletivo?: true,
    participio?: string
    gerundio?: string
    // Solo para casos irregulares, sí para "poder", no para "dormir"
    gerundio_tema_cambio_excepcional?: StemChangeRuleId
    imperativo_tú?: string | VerbForms
    vos?: string
    // ideas que probablemente no sirve mucho...
    tema_subjuntivo_yo?: string
    // FIX: narrow this type for exceptions, e.g. disallow add_suffix_to_infinitive
    reglas?: MoodTenseMap<VerbAspectRulesWithFullyIrregularForms>
}


// true means all tests passed, otherwise FailedTests lists the correct results for each failed test.
export type TestResults = true | FailedTests

// FIX: want to explain reason/origin/etemology for each change... this could help learners
export interface ReglasDeConjugaciónDeVerbo {
    // Used only by resolveConjugationClass(), to associate each portion of a collection of rules with the verb to which they apply.
    // These are ordered from most specific (the original infinitivo), to the most basic. Normally there are only one or two.
    // For example: ["retener", "tener"]
    infinitivos?: string[]
    clase_conjugacional?: VerboClaseConjugacional
    modelo?: ModeloConjugacional
    no_admite_prefijos?: true
    tema_presente_yo?: string | [string, string]
    sufijo_presente_yo?: string
    tema_pretérito?: string
    // tema especial del futuro / condicional
    tema_futuro?: string
    alternancia_vocálica?: StemChangeRuleId
    // Propiedades que no se generalizan bien, no productivos, no extrapolable.
    excepciones_léxicas?: ReglasDeConjugaciónDeVerboExcepcionesLexicas
    // Inidica que las pruebas pasan
    ok?: TestResults
}


// if a value is null, the verb is regular
// A verb that appears in this list has been verified with a test
export const verbos_con_cambios_morfológicos : {[infinitivo: string]: ReglasDeConjugaciónDeVerbo} = {
    abrir: { excepciones_léxicas: { participio: "abierto" } },
    absolver: { alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: "absuelto" } },
    abstener: { modelo: "tener" },
    acabar: {},
    aceptar: {},
    acercar: {},
    acertar: { alternancia_vocálica: "e:ie" },
    acompañar: {},
    acordar: { alternancia_vocálica: "o:ue" },
    acostar: { alternancia_vocálica: "o:ue" },
    actuar: {},
    adherir: { alternancia_vocálica: "e:ie" },
    adquirir: { alternancia_vocálica: "i:ie" },
    advenir: { modelo: "venir" },
    advertir: { alternancia_vocálica: "e:ie" },
    afectar: {},
    afirmar: {},
    agarrar: {},
    agregar: {},
    alcanzar: {},
    alentar: { alternancia_vocálica: "e:ie" },
// aliar: { modelo: "vaciar" }, FIX: ADD
    almorzar: { alternancia_vocálica: "o:ue" },
// alquilar: {},
    amar: {},
// amnistiar: { modelo: "vaciar" },  FIX: ADD
    ampliar: { modelo: "vaciar" },
    andar: { tema_pretérito: "anduv" },
// ansiar: { modelo: "vaciar" },  FIX: ADD
    apacentar: { alternancia_vocálica: "e:ie" },
    aparecer: {},
    aplicar: {},
    apostar: { alternancia_vocálica: "o:ue" },
    aprender: {},
    apretar: { alternancia_vocálica: "e:ie" },
    aprobar: { alternancia_vocálica: "o:ue" }, // Remove once a- prefixes are handled correctly
    aprovechar: {},
    arreglar: {},
    arrendar: { alternancia_vocálica: "e:ie" },
    arrepentir: { alternancia_vocálica: "e:ie" },
// arriesgar: {},
    ascender: { alternancia_vocálica: "e:ie" },
    asegurar: {},
    asentir: { alternancia_vocálica: "e:ie" },
    asistir: {},
    asolar: { alternancia_vocálica: "o:ue" },      // FIX: also supports regular forms! Perhaps add an option to return both forms?
    atender: { alternancia_vocálica: "e:ie" },
    atravesar: { alternancia_vocálica: "e:ie" },
    aumentar: {},
    avenir:     { modelo: "venir" },
    avergonzar: { alternancia_vocálica: "o:ue" },    // FIX: must ADD diérisis
// averiar: { modelo: "vaciar" }, FIX: ADD
    ayudar: {},
    añadir: {},
    bailar: {},
    bajar: {},
// biografiar: { modelo: "vaciar" }, FIX: ADD
    // bruñir: { alternancia_vocálica: "e:i" },
    // bullir: { alternancia_vocálica: "e:i" },
    buscar: {},
    caber: {
        tema_presente_yo: "quep",
        tema_pretérito: "cup",
        tema_futuro: "cabr"
    },
    caer: { tema_presente_yo: "caig" },
    calentar: { alternancia_vocálica: "e:ie" },
    cambiar: {},
    caminar: {},
    cantar: {},
    casar: {},
    causar: {},
    cegar: { alternancia_vocálica: "e:ie" },
    celebrar: {},
    cerner: { alternancia_vocálica: "e:ie" },
    cerrar: { alternancia_vocálica: "e:ie" },
    ceñir:   { alternancia_vocálica: "e:i" },
// chirriar: { modelo: "vaciar" }, FIX: ADD
    cimentar: { alternancia_vocálica: "e:ie" },    // FIX: various irregularities
    circunvenir: { modelo: "venir" },
    cobrar: {},
    cocer: { alternancia_vocálica: "o:ue" },       // FIX: various irregularities
    colgar: { alternancia_vocálica: "o:ue" },
    colocar: {},
    comenzar: { alternancia_vocálica: "e:ie" },
    comer: {},
    competir: { alternancia_vocálica: "e:i" },
    comprar: {},
    comprender: {},
    comprobar: { alternancia_vocálica: "o:ue" },
    concertar: { alternancia_vocálica: "e:ie" },
    concordar: { alternancia_vocálica: "o:ue" },
    condescender: { alternancia_vocálica: "e:ie" },
    conducir: { clase_conjugacional: "-ducir", tema_pretérito: "conduj" },  // FIX: linguist: how can this pattern be generalized: "pretérito fuerte con -j" ?
    conferir: { alternancia_vocálica: "e:ie" },
    confesar: { alternancia_vocálica: "e:ie" },
    confiar: { modelo: "vaciar" },
    conjugar: { modelo: null },
    conmover: { alternancia_vocálica: "o:ue" },
// conquirir: { alternancia_vocálica: "i:ie" },
    conocer: {},
    conseguir: { alternancia_vocálica: "e:i" },
    consentir: { alternancia_vocálica: "e:ie" },
    conservar: {},
    considerar: {},
    consistir: {},
    consolar: { alternancia_vocálica: "o:ue" },
    constituir: {},
    construir: {},
    contar: { alternancia_vocálica: "o:ue" },
    contender: { alternancia_vocálica: "e:ie" },
    contener: {},
    contestar: {},
    continuar: {},
// contrariar: { modelo: "vaciar" }, FIX: ADD
    contravenir: { modelo: "venir" },
    contribuir: {},
    convenir: { modelo: "venir" },
    convertir: { alternancia_vocálica: "e:ie" },
    corregir: { alternancia_vocálica: "e:i" },
    correr: {},
    corresponder: {},
    cortar: {},
    costar: { alternancia_vocálica: "o:ue" },
    crear: {},
    crecer: {},
    creer: {},
    criar: { modelo: "vaciar" },
    cualquier: {},
    cubrir: { excepciones_léxicas: { participio: "cubierto" } },
    cuidar: {},
    cumplir: {},
    dar: {
        modelo: "dar",
        // FIX: linguist: unclear
        excepciones_léxicas: {
            reglas: {
                // The default "-ar" verb pattern of accent the last sylable doesn't apply to vos forms of "dar", since "dás" is only one sylable
                IndPres: { suffixes: { s1: ["oy"],                                           p2: ["ais"],                       vos: null } },
                SubPres: { suffixes: { s1: ["é"],                s3: ["é"],                  p2: ["eis"] } },
                IndPret: { suffixes: { s1: ["i"], s2: ["iste"],  s3: ["io"],   p1: ["imos"], p2: ["isteis"], p3: ["ieron"] } },
                CmdPos:  { suffixes: {                           s3: ["é"],                                                     vos: null  } },
                CmdNeg:  { suffixes: {                           s3: ["é"],                  p2: ["eis"]} },
            }
        }
    },
    deber: {},
    decidir: {},
    decir: {
        modelo: "decir", 
        tema_presente_yo: "dig",
        tema_pretérito: "dij",
        tema_futuro: "dir",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            participio: "dicho",
            gerundio: "diciendo",
            imperativo_tú: "di"
        }
    },
    dedicar: {},
    defender: { alternancia_vocálica: "e:ie" },
    deferir: { alternancia_vocálica: "e:ie" },
    degollar: { alternancia_vocálica: "o:ue" },
    dejar: {},
    delinquir: {},
    demoler: { alternancia_vocálica: "o:ue" },
    demostrar: { alternancia_vocálica: "o:ue" },
    denegar: { alternancia_vocálica: "e:ie" },
    depender: {},
    derretir: { alternancia_vocálica: "e:i" },
// desafiar: { modelo: "vaciar" },
    desalentar: { alternancia_vocálica: "e:ie" },
    desaparecer: {},
    desaprobar: { alternancia_vocálica: "o:ue" },
    desarrollar: {},
    desatender: { alternancia_vocálica: "e:ie" },
    desavenir: { modelo: "venir" },
    descender: { alternancia_vocálica: "e:ie" },
    descolgar: { alternancia_vocálica: "o:ue" },
    desconfiar: { modelo: "vaciar" },
    descontar: { alternancia_vocálica: "o:ue" },
// descreer:
    describir: { excepciones_léxicas: { participio: "descrito" } },
    descubrir: { excepciones_léxicas: { participio: "descubierto" } },
    desear: {},
    desenvolver: { modelo: "volver" },
// deshacer: {  }, FIX ADD
// deslizar: {  }, FIX ADD
    desosar:    { alternancia_vocálica: "o:ue" },
    despedir:   { alternancia_vocálica: "e:i" },
    despertar:  { alternancia_vocálica: "e:ie" },
    desplegar:  { alternancia_vocálica: "e:ie" },
    desterrar:  { alternancia_vocálica: "e:ie" },
    desviar:    { modelo: "vaciar" },
    detener:    {},    // FIX: setting modelo causes a failure, but it should work     {modelo: "tener"},
    determinar: {},
    devenir:    { modelo: "venir" },
    devolver:   { modelo: "volver" },
    diferir:    { alternancia_vocálica: "e:ie" },
    digerir:    { alternancia_vocálica: "e:ie" },
    dirigir:    {},
    discernir:  { alternancia_vocálica: "e:ie" },
    disentir:   { alternancia_vocálica: "e:ie" },
    disolver:   { modelo: "volver" },
    disponer:   {},
    distender:  { alternancia_vocálica: "e:ie" },
    divertir:   { alternancia_vocálica: "e:ie" },
    doler:      { alternancia_vocálica: "o:ue" },
    dormir:     { modelo: "dormir", alternancia_vocálica: "o:ue" },
    durar:      {},
    echar:      {},
    efectuar:   {},
    elegir:     { alternancia_vocálica: "e:i" },
    // elevar:      {alternancia_vocálica: "e:ie"},  // FIX: linguist:  solo en varios regiones
    empezar:    { alternancia_vocálica: "e:ie" },
    emplear:    {},
    encender:   { alternancia_vocálica: "e:ie" },
    encerrar:   { alternancia_vocálica: "e:ie" },
    encomendar: { alternancia_vocálica: "e:ie" },
    encontrar:  { alternancia_vocálica: "o:ue" },
// enfriar: { modelo: "vaciar" },
    enjugar:    {modelo: null},  // regular, no sigue el modelo de "jugar"
    enmendar:   { alternancia_vocálica: "e:ie" },
    enraizar:   { modelo: "enraizar", alternancia_vocálica: "e:ie" },
    enseñar:    {},
    entender:   { alternancia_vocálica: "e:ie" },
    enterrar:   { alternancia_vocálica: "e:ie" },
    entrar:     {},
    entregar:   {},
    enviar: { modelo: "vaciar" },
    envolver: { modelo: "volver" },
    erguir: {
        alternancia_vocálica: "e:ie",
        tema_presente_yo: "yerg",  // FIX: tema_presente_yo: ["irg", "yerg"],
        excepciones_léxicas: { gerundio: "irguiendo" }
    },
    errar:      {}, // FIX: tiene dos formas
    escribir:   { excepciones_léxicas: { participio: "escrito" } },
    escuchar:   {},
    esforzar:   { alternancia_vocálica: "o:ue" },
    esperar:    {},
    espiar:     { modelo: "vaciar" },
    esquiar:    { modelo: "vaciar" },
    establecer: {},
    estar: {
        sufijo_presente_yo: "oy",
        tema_pretérito: "estuv", 
        excepciones_léxicas: {
            imperativo_tú: "está",
            reglas: {
                IndPres: {suffixes: {           s2: ["ás"], s3: ["á"], p3: ["án"]}},
                SubPres: {suffixes: {s1: ["é"], s2: ["és"], s3: ["é"], p3: ["én"]}},
                CmdPos:  {suffixes: {                       s3: ["é"], p3: ["én"]}},
                CmdNeg:  {suffixes: {           s2: ["és"], s3: ["é"], p3: ["én"]}}
            }
        }
    },
    estregar: { alternancia_vocálica: "e:ie" },  // FIX: multiple forms
// estrenar: {},
    estudiar: {},
    evitar: {},
    exigir: {},
    existir: {},
    expedir: { alternancia_vocálica: "e:i" },
// expiar: { modelo: "vaciar" },
    explicar: {},
    expresar: {},
    extender: { alternancia_vocálica: "e:ie" },
    faltar: {},
    fijar: {},
    fluir: {},
    formar: {},
    forzar: { alternancia_vocálica: "o:ue" },
    fotografiar: { modelo: "vaciar" },
    fregar: { alternancia_vocálica: "e:ie" },
    freír: { modelo: "reír" },
    ganar: {},
    gemir: { modelo: "pedir" },
    gobernar: { alternancia_vocálica: "e:ie" },
    granizar: { alternancia_vocálica: "o:ue" },
    gritar: {},
    // gruñir: { alternancia_vocálica: "e:i" },
    guardar: {},
    guiar: {
        modelo: "guiar",
        // clase_conjugacional: "-iar",
        // TODO: hay formas reformadas en la reforma ortográfica de la RAE de 2010, considera añadir estas formas
        // Otherwise, the accent is the only thing different from the regular forms
        excepciones_léxicas: {
            reglas: {
                IndPres: {stress_last_char_of_s123p3_stem: true,
                          suffixes: {                       s3: ["á"],       p2: ["ais"],           vos: ["as"] }},
                IndPret: {suffixes: {s1: ["e"],             s3: ["o"] }},
                SubPres: {stress_last_char_of_s123p3_stem: true,
                          suffixes: {                                        p2: ["eis"] }},
                CmdPos:  {stress_last_char_of_s123p3_stem: true,
                          suffixes: {                                                               vos: ["a"] }},
                CmdNeg:  {stress_last_char_of_s123p3_stem: true,
                          suffixes: {                                        p2: ["eis"] }},
            }
        }
    },
    gustar: {},
    haber: {
        tema_pretérito: "hub",
        tema_futuro: "habr",
        excepciones_léxicas: {
            supletivo: true,
            imperativo_tú: ["habe", "he"],
            reglas: {
                IndPres: { forms: { s1: ["he"], s2: ["has"], s3: ["hay", "ha"],     p1: ["hemos"],                     p3: ["han"],   vos: null} },
                SubPres: { tema: "hay" },
                CmdPos:  { tema: "hay",
                           forms: {                                                                  p2: ["habed"],                   vos: null} },
                CmdNeg:  { tema: "hay" },
            }
        }
    },
    hablar: {},
    hacer: {
        modelo: "hacer",
        clase_conjugacional: "-acer",
        tema_presente_yo: "hag",
        tema_pretérito: "hic",
        tema_futuro: "har",
        excepciones_léxicas: {
            participio: "hecho",
            imperativo_tú: "haz",
            reglas: {
                // FIX: linguist: should "hizo" be managed with sound preserving transformations?
                IndPret: { forms: {s3: ["hizo"]} }
            }
        }
    },
    hallar: {},
    heder: { alternancia_vocálica: "e:ie" },
    helar: { alternancia_vocálica: "e:ie" },
    hendir: { alternancia_vocálica: "e:ie" },  // but not the "e:i" for IndPret...
    herir: { alternancia_vocálica: "e:ie" },
    herrar: { alternancia_vocálica: "e:ie" },
    hervir: { alternancia_vocálica: "e:ie" },
    huir: {
        modelo: "huir",
        clase_conjugacional: "-uir",
        excepciones_léxicas: {
            reglas: {
                // NOTE: the vos form is not inherited by derived forms!
                IndPres: { suffixes: {p2: ["is"], vos: ["is"]}},
                IndPret: { suffixes: { s1: ["i"] } },
                CmdPos:  { suffixes: { vos: ["i"] } }
            },
        }
    },
    imaginar: {},
    impedir: { alternancia_vocálica: "e:i" },
    imponer: {},
    incluir: {},
    indicar: {},
    inferir: { alternancia_vocálica: "e:ie" },
    informar: {},
    ingerir: { alternancia_vocálica: "e:ie" },
    iniciar: {},
    injerir: { alternancia_vocálica: "e:ie" },
// inquirir: { alternancia_vocálica: "i:ie" },
    interferir: { alternancia_vocálica: "e:ie" },
    intervenir: { modelo: "venir" },
    intuir:     { modelo: "huir" },
    invertir:   { alternancia_vocálica: "e:ie" },
    investir:   { alternancia_vocálica: "e:i" },
    invitar:    {},
    ir: {
        modelo: "ir",
        no_admite_prefijos: true,
        tema_pretérito: "fu",
        sufijo_presente_yo: "oy",
        excepciones_léxicas: {
            supletivo: true,
            participio: "ido",
            gerundio: "yendo",
            reglas: {
                // The default "-ir" verb pattern of accent the last sylable doesn't apply to vos forms of "ir", since "ir" is only one sylable
                IndPres: { forms: { s1: ["voy"], s2: ["vas"],    s3: ["va"],   p1: ["vamos"],  p2: ["vais"],     p3: ["van"], vos: null } },
                SubPres: { tema: "vay" },
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"],  p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                IndImp:  { forms: { s1: ["iba"], s2: ["ibas"],   s3: ["iba"],  p1: ["íbamos"], p2: ["ibais"],    p3: ["iban"] } },
                // IndFut: uses regular conjugation
                // IndCond: uses regular conjugation
                CmdPos:  { forms: {              s2: ["ve"],     s3: ["vaya"], p1: ["vayamos", "vamos"],         p3: ["vayan"], vos: ["andá"] } },
                // FIX: linguist: the relation of CmdNeg being derived from SubPres is a fixed rule, right? If so, I can move this into code...
                CmdNeg:  { tema: "vay" },
            }
        }
    },
    jugar: {
        // FIX: SubPres: vos spelling differs by region: vos: ["juegues", "*jugués"]
        alternancia_vocálica: "u:ue",
    },
    lavar: {},
    leer: { modelo: "leer", clase_conjugacional: "-eer" },
    levantar: {},
    llamar: {},
    llegar: {},
    llenar: {},
    llevar: {},
    llorar: {},
    llover: {alternancia_vocálica: "o:ue"},   // FIX: conjugate_only: ["s3"]},
    lograr: {},
    lugar: {},
    malquerer: { modelo: "querer" },
    mandar: {},
    manejar: {},
    manifestar: { alternancia_vocálica: "e:ie" },
    mantener: {},
    mar: {},
    matar: {},
    medir: { alternancia_vocálica: "e:i" },
    mejorar: {},
    mencionar: {},
    mentar: { alternancia_vocálica: "e:ie" },
    mentir: { alternancia_vocálica: "e:ie" },
    merendar: { alternancia_vocálica: "e:ie" },
    meter: {},
    mirar: {},
    morder: { alternancia_vocálica: "o:ue" },
    morir: { modelo: "dormir" },
    mostrar: { alternancia_vocálica: "o:ue" },
    mover: { modelo: "mover", alternancia_vocálica: "o:ue" },
    mujer: {},
    nacer: {},
    necesitar: {},
    negar: { alternancia_vocálica: "e:ie" },
    nevar: {alternancia_vocálica: "e:ie"},       // FIX: conjugate_only: ["s3"]},
    notar: {},
    obligar: {},
    observar: {},
    obtener: { modelo: "tener" },
    ocupar: {},
    ocurrir: {},
    ofrecer: {},
    oler: { alternancia_vocálica: "o:ue" },
    olvidar: {},
    organizar: {},
    oír: {
        // FIX: linguist: why is this a class?
        modelo: "oír", 
        tema_presente_yo: "oig",
        excepciones_léxicas: {
            reglas: {
                CmdPos:  { suffixes: {                                                      p2: ["íd"],          } },
            }
        }
    },
    oponer: {modelo: "poner"},
    pagar: {},
    parecer: {},
    participar: {},
    particular: {},
    partir: {},
    pasar: {},
    pedir: { modelo: "pedir", alternancia_vocálica: "e:i" },
    pegar: {},
    pensar: { alternancia_vocálica: "e:ie" },
    perder: { alternancia_vocálica: "e:ie" },
    permanecer: {},
    permitir: {},
    perseguir: { alternancia_vocálica: "e:i" },
    pertenecer: {},
    pervertir: { alternancia_vocálica: "e:ie" },
    pesar: {},
// piar: { modelo: "vaciar" },
    platicar: {},
    plegar: { alternancia_vocálica: "e:ie" },
    poblar: { alternancia_vocálica: "o:ue" },
    poder: {
        alternancia_vocálica: "o:ue",
        tema_pretérito: "pud",
        tema_futuro: "podr",
        excepciones_léxicas: { gerundio_tema_cambio_excepcional: "o:u" }
    },
    poner: {
        modelo: "poner",
        tema_presente_yo: "pong",
        tema_pretérito: "pus",
        tema_futuro: "pondr",
        excepciones_léxicas: {
            participio: "puesto",
            imperativo_tú: "pon",
            reglas: {
                CmdPos:  { derivations: {preserve_stress_from_base: ["s2"] }},
            }
        }
    },
    popular: {},
    poseer: {},
    preferir: { alternancia_vocálica: "e:ie" },
    preguntar: {},
    preparar: {},
    presentar: {},
    presentir: { alternancia_vocálica: "e:ie" },
    prestar: {},
    pretender: {},
    prevenir: { modelo: "venir" },
    primer: {},
    probar: { alternancia_vocálica: "o:ue" },
    producir: {},
    proferir: { alternancia_vocálica: "e:ie" },
    promover: { alternancia_vocálica: "o:ue" },
    proponer: {},
    proporcionar: {},
    proseguir: { alternancia_vocálica: "e:i" },
    provenir: { modelo: "venir" },
    provocar: {},
    quebrar: { alternancia_vocálica: "e:ie" },
    quedar: {},
    querer: {
        modelo: "querer",
        tema_pretérito: "quis",
        tema_futuro: "querr",
        alternancia_vocálica: "e:ie"
    },
    quitar: {},
    realizar: {},
    recibir: {},
    recoger: {},
    recomendar: { alternancia_vocálica: "e:ie" },
    recomenzar: { alternancia_vocálica: "e:ie" },
    reconocer: {},
    reconvenir: { modelo: "venir" },
    recordar: { alternancia_vocálica: "o:ue" },
    reducir: {},
// reenviar: { modelo: "vaciar" },
    referir: { alternancia_vocálica: "e:ie" },
    reforzar: { alternancia_vocálica: "o:ue" },
    regar: { alternancia_vocálica: "e:ie" },
    regir: { alternancia_vocálica: "e:i" },
    registrar: {},
    regresar: {},
    regular: {},
    reír: {
        modelo: "reír",
        alternancia_vocálica: "e:ie",  // añado po DeepSeek 27 feb 2026
        // alternancia_vocálica: "i:í",  FIX: linguist: is there a vowel change rule?
        excepciones_léxicas: {
            gerundio: "riendo",
            participio: "reído",
            reglas: {
                // FIX: linguist: are there other reglas I can use?
                // FIX: must formalize the relationship of CmdPos on SubPres
                IndPres: {forms: {s1: ["río"], s2: ["ríes"], s3: ["ríe"], p1: ["reímos"], p2: ["reís"],  p3: ["ríen"],   vos: ["reís"], }},
                IndPret: {forms: {                           s3: ["rio"],                                p3: ["rieron"],}},
                SubPres: {tema: "rí",
                        //   forms: {s1: ["ría"], s2: ["rías"], s3: ["ría"], p1: ["riamos"], p2: ["riáis"], p3: ["rían"] }},
                          forms: {                           s3: ["ría"], p1: ["riamos"], p2: ["riáis"], p3: ["rían"] }},
                CmdPos:  {tema: "rí",
                          forms: {                                        p1: ["riamos"], p2: ["reíd"],                  vos: ["reí"]}}
            }
        }
    },
    remendar: { alternancia_vocálica: "e:ie" },
    remorder: { alternancia_vocálica: "o:ue" },
    remover: { alternancia_vocálica: "o:ue" },
    rendir: { modelo: "pedir" },
    reñir: { alternancia_vocálica: "e:i" },
    renovar: { alternancia_vocálica: "o:ue" },
    repercutir: {},
    repetir: { alternancia_vocálica: "e:i" },
    representar: {},
    reprobar: { alternancia_vocálica: "o:ue" },
    requerir: { alternancia_vocálica: "e:ie" },
// resfriar: { modelo: "vaciar" },
    resolver: { modelo: "mover" },
    responder: {},
    resultar: {},
    retener: { modelo: "tener" },
    reunir: { alternancia_vocálica: "u:ú" },
    reventar: { alternancia_vocálica: "e:ie" },
    revertir: { alternancia_vocálica: "e:ie" },
    revolver: { modelo: "volver" },
// rociar: { modelo: "vaciar" },
    rodar: { alternancia_vocálica: "o:ue" },
    rogar: { alternancia_vocálica: "o:ue" },
    romper: { excepciones_léxicas: { participio: "roto" } },
    saber: {
        tema_pretérito: "sup",
        tema_futuro: "sabr",
        excepciones_léxicas: {
            reglas: {
                // similar a caber
                IndPres: { forms: { s1: ["sé"] } },
                SubPres: { tema: "sep" },
                CmdPos:  { forms: {                                s3: ["sepa"],  p1: ["sepamos"],                     p3: ["sepan"] } },
                CmdNeg:  { tema: "sep" },
            }
        }
    },
    sacar: {},
    salir: {
        tema_presente_yo: "salg",
        tema_futuro: "saldr",
        excepciones_léxicas: { "imperativo_tú": "sal" }
    },
    salpimentar: { alternancia_vocálica: "e:ie" },
    satisfacer:  {modelo: "hacer"},    // FIX: support rules to generate this verb from this list
    seducir: {},
    seguir: {
        // NOTE: this does not conjugate as a "-uir" clase infinitivo
        tema_presente_yo: "sig",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: { tema_subjuntivo_yo: "sig" }
    },
    sembrar: { alternancia_vocálica: "e:ie" },
    sentar: { alternancia_vocálica: "e:ie" },
    sentir: { alternancia_vocálica: "e:ie" },
    ser: {
        modelo: "ser",
        excepciones_léxicas: {
            supletivo: true,
            reglas: {
                IndPres: { forms: { s1: ["soy"], s2: ["eres"],   s3: ["es"],    p1: ["somos"],  p2: ["sois"],     p3: ["son"],    vos: ["sos"] } },
                IndImp:  { forms: { s1: ["era"], s2: ["eras"],   s3: ["era"],   p1: ["éramos"], p2: ["erais"],    p3: ["eran"]}},
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"],   p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                SubPres: { tema: "se" },
                CmdPos:  { forms: {              s2: ["sé"],     s3: ["sea"],   p1: ["seamos"],                   p3: ["sean"],   vos: null} },
                CmdNeg:  { tema: "se" },
            }
        }
    },
    serrar: { alternancia_vocálica: "e:ie" },
    servir: { alternancia_vocálica: "e:i" },
    significar: {},
    sobrevenir: { modelo: "venir" },
    sofreír: { modelo: "reír" },
    soldar: { alternancia_vocálica: "o:ue" },
    soler: { alternancia_vocálica: "o:ue" },
    soltar: { alternancia_vocálica: "o:ue" },
    sonar: { alternancia_vocálica: "o:ue" },
    soñar: { alternancia_vocálica: "o:ue" },
    sonreír: { modelo: "reír" },
    sosegar: { alternancia_vocálica: "e:ie" },
    sostener: {},
    subir: {},
    subvenir: { modelo: "venir" },
    subvertir: { alternancia_vocálica: "e:ie" },
    suceder: {},
    sufrir: {},
    sugerir: { alternancia_vocálica: "e:ie" },
    suponer: {},
    surgir: {},
    temblar: { alternancia_vocálica: "e:ie" },
    tender: { alternancia_vocálica: "e:ie" },
    tener: {
        modelo: "tener", 
        tema_presente_yo: "teng",
        tema_pretérito: "tuv",
        tema_futuro: "tendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            imperativo_tú: "ten",
            reglas: {
                CmdPos:  { derivations: {preserve_stress_from_base: ["s2"] }},
            }
        }
    },
    tentar: { alternancia_vocálica: "e:ie" },
    terminar: {},
    teñir: { alternancia_vocálica: "e:i" },
    tirar: {},
    tocar: {},
    tomar: {},
    torcer: { alternancia_vocálica: "o:ue" },
    tostar: { alternancia_vocálica: "o:ue" },
    trabajar: {},
    traducir: {},
    traer: { tema_presente_yo: "traig", tema_pretérito: "traj" },
    transcender: { alternancia_vocálica: "e:ie" },
    transferir: { alternancia_vocálica: "e:ie" },
    trascender: { alternancia_vocálica: "e:ie" },
    trasferir: { alternancia_vocálica: "e:ie" },
    tratar: {},
    trocar: { alternancia_vocálica: "o:ue" },
    tronar: { alternancia_vocálica: "o:ue" },
    tropezar: { alternancia_vocálica: "e:ie" },
    unir: {},
    usar: {},
    utilizar: {},
    vaciar: {
        modelo: "vaciar",
        clase_conjugacional: "-iar",
        // FIX: linguist: The accent is the only thing different from the regular forms
        // Is this due to an orthographic rule? or something else?
        excepciones_léxicas: {
            reglas: {
                IndPres: {stress_last_char_of_s123p3_stem: true},
                SubPres: {stress_last_char_of_s123p3_stem: true},
                CmdPos:  {stress_last_char_of_s123p3_stem: true},
                CmdNeg:  {stress_last_char_of_s123p3_stem: true,
                          suffixes: {                                        vos: null }},
            }
        }
    },
    vacilar: {},
    valer: { tema_presente_yo: "valg", tema_futuro: "valdr" },
    variar: { modelo: "vaciar" },
    vender: {},
    venir: {
        modelo: "venir",
        tema_presente_yo: "veng",
        tema_pretérito: "vin",
        tema_futuro: "vendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            gerundio: "viniendo",
            imperativo_tú: "ven",
            reglas: {
                CmdPos:  { derivations: {preserve_stress_from_base: ["s2"] }},
            }
        }
    },
    ver: {
        modelo: "ver",
        // parece que no conforma bien a estas reglas
        // sí prefijo_ind_pres_yo cambia, pero no con "g", y no con los mismos cambios
        // no aplican ni tema_pretérito ni tema_futuro ni alternancia_vocálica
        // el resto con excepciones_léxicas
        excepciones_léxicas: {
            gerundio: "viendo",
            participio: "visto",
            // hay varias excepciones_léxicas que probablemente tienen que ver con el hecho que ver es solo una sílaba
            reglas: {
                // p2 => accent dropped
                // The default "-er" verb pattern of accent the last sylable doesn't apply to vos forms of "ver", since "vés" is only one sylable
                IndPres: { suffixes: { s1: ["eo"],                                              p2: ["eis"],                        vos: null },
                           derivations: {preserve_stress_from_base: ["s2","s3","p2","p3"]}
                         },
                SubPres: { tema: "ve" },
                // accents dropped
                IndPret: { forms: { s1: ["vi"], s3: ["vio"] },
                           derivations: {preserve_stress_from_base: ["s1", "s3"]}
                        },
                IndImp: { tema: "ve" },
                CmdPos: { forms: {                      s3: ["vea"],           p1: ["veamos"],               p3: ["vean"],            vos: null },
                           derivations: {preserve_stress_from_base: ["s2"] }
                        },
                        // FIX: linguist: if CmdNeg always follows SubPres, can codify this
                CmdNeg: { tema: "ve" },
            }
        }
    },
    verter: { alternancia_vocálica: "e:ie" },
    vestir: { alternancia_vocálica: "e:i" },
// vidriar: { modelo: "vaciar" },
    visitar: {},
    vivir: {},
    volar: {alternancia_vocálica: "o:ue"},
    volcar: { alternancia_vocálica: "o:ue" },
    volver: { modelo: "volver", alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: "vuelto" } },
// xerografiar: { modelo: "vaciar" },
    zaherir: { alternancia_vocálica: "e:ie" }
}


// FIX: restore after refactoring complete
export function getAnnotations(infinitivo: string, modelo: ModeloConjugacional, mood_tense: MoodTense) : VerbConjugationAnnotation {
    const annotations: VerbConjugationAnnotation = {version, license, modelo: undefined}
    // const unconfirmed = !(infinitivo in morphophonemic_verb_conjugation_rules) || undefined
    // const annotations: VerbConjugationAnnotation = {model, mood_tense, unconfirmed}
    return annotations
}
