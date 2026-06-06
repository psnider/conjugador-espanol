import type { ConjugaciónEstándarYAtípico } from "./index"
import type { VerbAspectRules } from "./regular-verb-rules.js"
import type { ModeloConjugacional, VerboClaseConjugacional } from "./verbos-con-cambios-morfológicas.js"
import type { OrthographicalChangeRuleName } from "./ortografía.js"


// El verbo tiene dos formas: la de este descripción y la regular, p. ej. "asolar"
// El valor indica si forma regular se considera la forma como primaria o variante.
// Los formas extras se genera solo para estos modos/tiempos ["IndPres", "SubPres", "CmdPos", "CmdNeg"]
type IrregularYRegular = "primaria" | "variante"


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
    CmdNeg?: T
}


// A collection of fully or partially conjugated verb forms.
// Siempre solo presenta las formas completas al usuarios.
// Depending on the context, this may contain verb stems or suffixes in any stage of procssing.
// In the case of stems, if this contains a single value, it is shared with and applied to all suffixes.
// But in case when stems differ for each suffix, then the number of stems must match the number of suffixes.
// In the case of "vos", the value may be only be either:
// - a single shared value (a string)
// - two FormasRestringidas, one with "uso"=="Riop." and one with "uso"=="C.Am.", in this order
export type VerbConjugation = ConjugaciónEstándarYAtípico


// The conjugated form of a verb, or null if the form is disallowed.
// Two forms occur for:
// - alternations (e.g. SubImp: -ra / -se)
//   - amar,SubImp,p1 has ["amara", "amase"]
// - genuine lexical variants:
//   - haber,IndPres,s2 has ["hay", "ha"]
//   - ir,CmdPos,p1 has ["vayamos", "vamos"]
// null occurs for weather verbs (llover) and commands, and for the s1 forms of Commands.


export type ConjugaciónTabla = MoodTenseMap<ConjugaciónEstándarYAtípico>

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

