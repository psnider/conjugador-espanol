import { VerbAspectRules } from "./regular-verb-rules.js"
import { ModeloConjugacional, VerboClaseConjugacional } from "./verbos-con-cambios-morfológicas.js"


type MoodTense = "IndPres" | "IndImp" | "IndPret" | "IndFut" | "IndCond" | "SubPres"  | "SubImp"  | "SubFut" | "CmdPos" | "CmdNeg" 
type ConjugationOrDerivation = MoodTense | "Participles"


// El verbo tiene dos formas: la de este descripción y la regular, p. ej. "asolar"
// El valor indica si forma regular se considera la forma como primaria o variante.
// Los formas extras se genera solo para estos modos/tiempos ["IndPres", "SubPres", "CmdPos", "CmdNeg"]
type IrregularYRegular = "primaria" | "variante"


interface Participios {
    gerundio?: FormaConjugada[]
    participio?: FormaConjugada[]
}


interface MoodTenseMap<T> {
    IndPres?: T
    IndImp?: T
    IndPret?: T
    IndFut?: T
    IndCond?: T

    SubPres?: T
    SubImp?: T
    SubFut?: T

    CmdPos?: T
}


// Person-number notation:
// s = singular, p = plural
// s1 = 1st person singular, p2 = 2nd person plural, etc.
// Keys of PersonasGramaticalesConVos<T>
// This must match conjugation_keys[]
type GrammaticalPerson = "s1" | "s2" | "s3" | "p1" | "p2" | "p3" | "vos"


interface PersonasGramaticalesConVos<T, T_Vos=T> {
    s1?: T
    s2?: T
    s3?: T
    p1?: T
    p2?: T
    p3?: T
    // This may be set to null, in which case it forces the assumption of the value of the "s2" form.
    vos?: T_Vos | null
}


// A collection of fully or partially conjugated verb forms.
// Depending on the context, this may contain verb stems or suffixes in any stage of procssing.
// In the case of stems, if this contains a single value, it is shared with and applied to all suffixes.
// But in case when stems differ for each suffix, then the number of stems must match the number of suffixes.
// In the case of "vos", the value may be only be either:
// - a single shared value (a string)
// - two FormasRestringidas, one with "uso"=="Riop." and one with "uso"=="C.Am.", in this order
type VerbConjugation = PersonasGramaticalesConVos<FormaConjugada[]>


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


// The conjugated form of a verb, or null if the form is disallowed.
// Two forms occur for:
// - alternations (e.g. SubImp: -ra / -se)
//   - amar,SubImp,p1 has ["amara", "amase"]
// - genuine lexical variants:
//   - haber,IndPres,s2 has ["hay", "ha"]
//   - ir,CmdPos,p1 has ["vayamos", "vamos"]
// null occurs for weather verbs (llover) and commands, and for the s1 forms of Commands.


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


export type ConjugaciónEstándarYAtípico = PersonasGramaticalesConVos<FormaConjugada[]>


export type ConjugaciónTabla = MoodTenseMap<ConjugaciónEstándarYAtípico>


// Formas que no usan normalmente.
// Por ejemplo para "acontecer" o "llover"
export interface Defectos {
    // Las personas que sí conjuga
    personas?: GrammaticalPerson[]
    // Las rasgos que sí conjuga
    rasgos?: MoodTense[]
}

interface VerbConjugationAnnotation {
    infinitivo: string
    mood_tense_derivation?: ConjugationOrDerivation
    modelo: ModeloConjugacional
    defectos?: Defectos
    // The non regular rules applied to this verb
    rules_applied?: any[]
    ok?: 0 | 1
    version: string
    license: string
}

interface VerbConjugationAnnotated {
    notes: VerbConjugationAnnotation
    forms: ConjugaciónEstándarYAtípico
}


// A set of changes that can be applied to a set of conjugations for a verb of a given mood and tense. 
// This is used both for suffixes and stem change rules, and for fully conjugated forms.
type VerbConjugationChanges = VerbConjugation

// A set of stems for a conjugation.
type VerbConjugationStems = VerbConjugation
type VerbConjugationSuffixes = VerbConjugation

// The conjugation clases of verbs.
// These may be presented to users, so they are in Spanish.
type ConjugationClass = 
    // Nivel 0 - Bloqueo (cancela todo: no prefijos, no deducción, no herencia)
      "atómico verdadero"
    // Nivel 1 — Raíz base
    | "pretérito: raíz corta"
    | "futuro: raíz especial"
    // Nivel 2 — Alternancia vocálica
    | "presente: diptongo e → i"
    | "presente: diptongo e → ie"
    | "presente: diptongo o → ue"
    // Nivel 3 — Sufijación regular, no es una clase, es implícito: -ar, -er, -ir
    | "-ar"
    | "-er"
    | "-ir"
    // Nivel 4 — Ortografía
    | "u → ü (diéresis)"
    | "u → y (hiato)"
    | "hiato → y (fonológico)"
    // Nivel 5 - Excepciones puntuales
    | "presente: -go 1.ª p"
    | "presente: -oy 1.ª p"


export interface ParticipleRule {
    // suffix that appends to standard stem
    suffix?: string
    // full form in case of irregular form
    full?: string
}

export interface ParticipleRules {
    pres?: ParticipleRule
    past?: ParticipleRule
}


// Rules describing how a verb (or model) realizes its paradigm.
// T usually represents either suffixes, stem changes, or full forms.
export interface VerbConjugationRules<T> {
    conjugation_classes: ConjugationClass[]
    // The suffix of a family of verbs based on spelling that identifies this conjugation.
    // Only specified for the canonical verb, to which all others in the family refer.
    conjugation_family?: VerboClaseConjugacional
    stem_change_rule_id?: StemChangeRuleId
    participle_rules: ParticipleRules
    aspects: MoodTenseMap<T> 
}


// Each is a name of a conjugation family that uses a fixed pattern of alternancias vocálicas 
export type StemChangeFamily =  "e:i" | "e:í" | "e:ie" | "e:ie (cernir)" | "i:ie" | "o:ue" | "u:ú" | "u:ue"


// This "no change" rule is only for the case of skipping a stem change for a particular FormaConjugada.uso, e.g. para "vos"
// It should not be used generally.
// The special form of "e:" indicates that the "e" should be replaced with nothing, that is, it should be eliminated.
export type StemChangeRuleId = "no change" | "e:" | "e:i" | "e:í" | "e:ie" | "i:í" | "i:ie" | "o:u" | "o:ue" | "u:ú" | "u:ue"
// type SuffixChangeType = "eer"


// Las reglas que producen los cambios que diferen de las formas regulares.
export interface VerbRulesApplied {
    // En caso de "impersonal", el cambio es la eliminación de formas.
    // Entonces cuando este parece, significa la remoción de formas de la conjugación
    impersonal?: MoodTense | GrammaticalPerson[]
    ancestor_rule_sets?: VerbAspectRules[]
    suffixes?: VerbConjugation
    stems?: VerbConjugation
    lexical_exceptions_stems?: VerbConjugation
    lexical_exceptions_suffixes?: VerbConjugation
    combined_stems_w_suffixes?: VerbConjugation
    orthography?: VerbConjugation
    suplicaciones?: VerbConjugation
    imperativo_tú?: VerbConjugation
    maintain_stressed_last_sylable?: VerbConjugation
    prefijos_clase_conjugacional?: VerbConjugation
    prefijos_productivos_y_no?: VerbConjugation
}

export interface ParticipleRulesApplied {
    regular?: Participios
    excepciones_léxicas?: Participios
    prefixed?: Participios
    gerund_stem_change?: string
    orthography?: Participios
}


