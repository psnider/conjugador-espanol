

export type MoodTense = "IndPres" | "IndImp" | "IndPret" | "IndFut" | "IndCond" | "SubPres"  | "SubImp"  | "SubFut" | "CmdPos" | "CmdNeg" 
export type ConjugationOrDerivation = MoodTense | "Participles"

// La persona y pluralidad de una forma conjugada, que se usa para indicar una forma especifica de un conjugación.
// p.ej.: "s1" = 1.a persona singular, p2 = 2.a persona plural, etc.
// La pluralidad se indica con una letra: s = singular, p = plural
// La persona se indica con un numero: 1 = primera, 2 = segunda, 3 = tercera
// Nota: "vos" indica las formas usadas en los dialectos que usan "vos" en lugar de "tú".
type GrammaticalPerson = "s1" | "s2" | "s3" | "p1" | "p2" | "p3" | "vos"


// Las formas de una conjugación.
// Por cierto verbos varias formas no existen. p.ej. "acontecer"
export interface PersonasGramaticalesConVos<T, T_Vos=T> {
    s1?: T
    s2?: T
    s3?: T
    p1?: T
    p2?: T
    p3?: T
    // This may be set to null, in which case it forces the assumption of the value of the "s2" form.
    vos?: T_Vos | null
}



// El modelo de la conjugación.
// Para verbos regulares, no especifica un modelo.
// Es posibile que el modelo de "maldecir" deba ser "bendecir"
export type ModeloConjugacional = 
        | "delinquir"
        | "andar"    | "caber"    | "caer"     | "cernir"   | "conducir" | "conocer"
        | "dar"      | "decir"    | "dormir"   | "enraizar" | "erguir"   | "estar"
        | "guiar"    | "haber"    | "hacer"    | "ir"       | "jugar"    | "leer"     | "lucir"
        | "maldecir" | "mover"    | "oír"      | "pedir"    | "placer"   | "poder"    | "poner"    | "querer"
        | "reír"     | "roer"     | "saber"    | "salir"    | "seguir"   | "ser"
        | "tener"    | "traer"    | "vaciar"   | "valer"    | "venir"    | "ver"      | "volver"


// Formas que no se usan normalmente.
// Por ejemplo para "acontecer" o "llover".
export interface Defectos {
    // Las personas que sí conjuga
    personas?: GrammaticalPerson[]
    // Las rasgos que sí conjuga
    rasgos?: MoodTense[]
}


// Hay dos categorías: verbos que admiten personificación, y los que están restringidos gramaticalmente.
// La categoría determina cómo puede conjugarse.
// Los "naturales" lleva la conjugación completa, pero normalmente solo usa la forma de tercera persona singular, y no hay formas de mandatos.
// Los "gramaticales" lleva una conjugación parcial, porque nunca permiten el uso de otras formas.
// Usa las formas de tercera persona singular y tercera persona plural, y no hay formas de mandatos.
// "soler" es único.
export type Impersonal = "natural" | "gramatical" | "soler"


// This "no change" rule is only for the case of skipping a stem change for a particular FormaConjugada.uso, e.g. para "vos"
// It should not be used generally.
// The special form of "e:" indicates that the "e" should be replaced with nothing, that is, it should be eliminated.
export type StemChangeRuleId = "no change" | "e:" | "e:i" | "e:í" | "e:ie" | "i:í" | "i:ie" | "o:u" | "o:ue" | "u:ú" | "u:ue"

type OrthographicalChangeRuleForTerminationName = "preserve-soft-c-sound-of-ecer" | "preserve-hard-c-sound-of-c" | "preserve-hard-c-sound-of-q"
    | "preserve-soft-g-sound" | "preserve-hard-g-sound"
    | "replace-disallowed-ze-zi"
    | "u → uy (hiato)"
    | "break-u-dipthong-after-hard-sound" | "break-ue-dipthong-after-gu" | "separa a + vocal-abierto"

type OrthographicalChangeRuleGeneralName = "diéresis" | "elimina 'i/y' después de 'ñ/y/ll'"
    | "mantiene hiato" | "vocal débil → 'y'"
    | "rompe diptongo delantero 'oe', 'ie'" | "remueve tilde single sílaba con 'uí'"
    | "rompe diptongo 'au'"
    
    
export type OrthographicalChangeRuleName = OrthographicalChangeRuleForTerminationName | OrthographicalChangeRuleGeneralName

// Estos reglas deben ser legible por usuarios.
export type CambioOrtografico = OrthographicalChangeRuleName | "prefijos de clase conjugacional" | "rompe diptongo 'ue' con 'h'"
type CambioEstrés = "estrese última vocal del tema" | "estrese tema 1.ª persona plural" | "elimina el estrese del tema" | "elimina el estrese del sufijo"
// Note: nombres de reglas que pueden ser del modelo o del infinitivo deben seguir el formato: tipo_de_cambio + "del" + "modelo|infinitivo"
type CambioProductivo = "regular"
                    | "tema excepcional del modelo" | "tema excepcional del infinitivo"
                    | "tema futuro excepcional" 
                    | "tema presente yo" | "imperativo tú"
                    | "tema pretérito excepcional" | "tema pretérito 3.ª persona plural"
                    | "tema con alternancia vocálica"
                    | "tema supletivo"
                    | "supletivo del modelo" | "supletivo del infinitivo"
                    | "sufjio de persente yo" | "sufjio de pretérito fuerte" | "sufjio excepcional del modelo" | "sufjio excepcional del infinitivo"
                    | "añade un sufijo a unos temas" | "añade unos sufijos a un tema" | "añade correspondiente 2 sufijos a 2 temas" | "multiplica 2 sufijos por 2 temas"
                    | "supleción, elimina diferencias de vos" | "elimina formas personales"


                    // Estos reglas deben ser legible por usuarios.
type ReglaConjugacional =  CambioOrtografico | CambioEstrés | StemChangeRuleId | CambioProductivo


// FIX: while populating this data, verify that added forms differ from the immediately preceding forms 
// Tiene tema o sufijo, o ambos en caso de un supletivo.
// Estos corresponden con las formas del conjugación.
// p.ej.: si hay dos formas, como por "amar",SubImp,s1: "amara" , "amase", 
//   debe ser dos entradas aquí por sufijos:
//     [{forma_conjugada:"ara", regla: "regular"},
//      {forma_conjugada:"ase", regla: "regular"}]
// Cuando una forma en una lista tiene un cambio y otra no, la sin cambio usa "undefined" para indicar que la forma no cambia.
interface CambiosPorRegla {
    regla: ReglaConjugacional
    temas?: FormaConjugada[]
    sufijos?: FormaConjugada[]
}

export interface PrefijosDeClaseConjugacional {
        // El prefijo del verbo que pertenece a una familia de conjugación.
        // Por ejemplo, "creer" es miembro de la familia "-eer" (modelo "leer"), entonces 'conjugation_family_prefix' es "cr",
        // => implica is_conjugation_family
        prefijo_aditivo?: string
        // El principio de un verbo que es el modelo/base una clase/familia de conjugación, que no es parte del modelo real.
        // Por ejemplo, para "leer", el prefijo_sustractivo es "l", la parte antes de la clase_conjugacional, aquí "-eer"
        prefijo_sustractivo?: string
    }


export interface Cambios_Base {
    infinitivo: string
    modelo?: ModeloConjugacional
    clase_de_conjugación?: PrefijosDeClaseConjugacional
    impersonal?: Impersonal
}

type CambiosPorPersona = PersonasGramaticalesConVos<CambiosPorRegla[]>

export interface CambiosConjugacionales extends Cambios_Base {
    modo_tiempo: MoodTense
    cambios: CambiosPorPersona
}

interface VerbConjugationAnnotation {
    infinitivo: string
    mood_tense_derivation?: ConjugationOrDerivation
    modelo: ModeloConjugacional
    defectos?: Defectos
    // The non regular rules applied to this verb
    cambios_conjugacional_primaria?: CambiosConjugacionales
    cambios_conjugacional_secundaria?: CambiosConjugacionales
    ok?: 0 | 1
    version: string
    license: string
}


export type Region = "Arg." | "C.Am." | "Col." | "Ur." | "Par." | "Riop."
// Ya no incluye "no normativo", porque no contribuye información entendible.
export type Uso = Region | "impersonal" | "arcaico" | "pre-2010"  


// Para el subjuntivo de presente:
// Rioplatense (Argentina, Paraguay y Uruguay) usa el estándar.
// Centroamérica (Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, y Chiapas, MX) y Colombia usa el otro.
export interface FormaRestringida<T=string> {
    // This may be unset/undefined by a transformation that doesnt change the value
    forma?: T
    uso: Uso
}



// The conjugated forms of a verb, or null if the form is disallowed.
// During conjugation, this may also hold a stem or a suffix of a form of a verb.
// In lists of FormaConjugada, two forms occur for:
// - alternations (e.g. SubImp: -ra / -se)
//   - amar,SubImp,p1 has ["amara", "amase"]
// - genuine lexical variants:
//   - haber,IndPres,s2 has ["hay", "ha"]
//   - ir,CmdPos,p1 has ["vayamos", "vamos"]
// In some unusual cases, 3 forms are present, e.g.: yacer,IndPres,s1: ["yazco", "yazgo", "yago"]
// And it appears that in other cases, such as regionalisms, even more forms could exist.
// null is required for disallowed forms, such as for weather verbs (llover), and for the s1 forms of Commands.
// For ease of reading, normal forms are specified with plain strings.
// Restricted forms indicate the type of restriction in way that can be displayed to the user.
export type FormaConjugada<T = string> = (string | FormaRestringida<T>)


// A collection of fully conjugated verb forms.


export type ConjugaciónEstándarYAtípico = PersonasGramaticalesConVos<FormaConjugada[]>


interface VerbConjugationAnnotated {
    notes: VerbConjugationAnnotation
    forms: ConjugaciónEstándarYAtípico
}


interface Participios<T> {
    gerundio?: T
    participio?: T
}


// un identificador de una forma conjugada.
// Consiste del infinitivo , (modo_tiempo | derivación ) [ , persona ] [ , uso ]
// p.ej.: "amar,inf"
// p.ej.: "amar,ger"
// p.ej.: "amar,part"
// p.ej.: "amar,IndPres,s1"
// p.ej.: "amar,SubPres,vos,Riop."
export type IDDeFormaConjugada = string
export interface IndiceDeFormasDeVerbos {[forma: string]: IDDeFormaConjugada[]}


export type CambiosPorParticipios = Participios<CambiosPorRegla[]>

interface CambiosDerivacionales extends Cambios_Base {
    cambios: CambiosPorParticipios
}


// Conjuga un verbo desde el infinitivo hasta las formas de un modo y tiempo.
// También da las reglas aplicadas para conjugar las formas.
export function conjugateVerb(infinitivo: string, mood_tense: MoodTense): VerbConjugationAnnotated | undefined
export function deriveParticiples(infinitivo: string): {participles: Participios<FormaConjugada[]>, cambios_derivacionales: CambiosDerivacionales} | undefined
export function deconstruyeIDDeFormaConjugada(id: IDDeFormaConjugada) : {infinitivo: string, modo_tiempo: MoodTense, persona: GrammaticalPerson, uso?: Uso}
export function generaIndiceDeFormasConjugadas() : IndiceDeFormasDeVerbos
