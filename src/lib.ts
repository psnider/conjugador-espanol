import { FormaConjugada, GrammaticalPerson, MoodTense, VerbConjugation, VerbConjugationStems, FormaRestringida, Participios} from "."


export const vowels = "aáeéiíoóuúü"
export const consonantes = "bcdfghjklmnñpqrstvwxyz"
export const verb_terminations_normalized = ["ar", "er", "ir"]
export const verb_terminations_all = ["ar", "er", "ir", "ír"]

export const persons_standard = <(keyof VerbConjugation)[]> ["s1", "s2", "s3", "p1", "p2", "p3"]
export const persons_w_vos = <(keyof VerbConjugation)[]> ["s1", "s2", "s3", "p1", "p2", "p3", "vos"]
export const persons_w_vos_index: {[person: string]: 1} = {s1: 1, s2: 1, s3: 1, p1: 1, p2: 1, p3: 1, vos: 1}
export const mood_tenses : MoodTense[] = ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres" , "SubImp" , "SubFut", "CmdPos", "CmdNeg"]


export function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message)
    }
}


// Applies a change to a conjugated form, and returns the changed, but returns undefined if there was no change.
// @param change applies a transformation to the input, and returns either a changed value or undefined.
export function applyToFormaConjugada(form: FormaConjugada, i: number, change: (form: string | null | undefined, i: number) => string | null | undefined) : FormaConjugada | undefined {
    const es_restringida = (typeof form !== "string")
    const uso = (<FormaRestringida> form).uso
    const original = (es_restringida ? (<FormaRestringida> form).forma : form)
    const changed = change(original, i)
    if (changed && (changed !== original)) {
        return (es_restringida ? {forma: changed, uso} : changed)
    }
}


// FIX: there is a mess here that has bled into different parts of the code, making it confusing.
// FIX: There is a need to specify "no alternancía" for a form of stem of vos.
// FIX: But this crept into FormaRestringida, and I think a better typing is have a parallel form of StemChangeRuleIdRestringida
// Apply a change to each verb form is a list.
// The number of forms is preserved.
// The returned array only contains changed forms, and has 'undefined' in positions corresponding to unchanged forms.
// @param source_forms The starting verb forms. This is not modified.
// @change: Returns the changed form, or undefined if there is no change.
// @return The 'FormaConjugada' after applying the change()
export function applyToFormasConjugadas(source_forms: FormaConjugada[], change: (form: string | null | undefined, i: number) => string | null | undefined) : (FormaConjugada | undefined)[] | undefined {
    if (source_forms) {
        const changed_forms = source_forms.map((source_form, i) => {
            return applyToFormaConjugada(source_form, i, change)
        })
        return changed_forms!
    }
}


export function setStem(temas_modelo: FormaConjugada[], only_persons?: GrammaticalPerson[]) {
    const temas_base : VerbConjugationStems = {}
    const persons = only_persons || persons_w_vos
    for (const key of persons) {
        const persona_gramatical = <GrammaticalPerson> key
        temas_base[persona_gramatical] = temas_modelo
    }
    return temas_base
}


export function formaConjugadaIgual(lhs: FormaConjugada | undefined, rhs: FormaConjugada | undefined) {
    if (!lhs && !rhs) {
        return true
    }
    if (!lhs || !rhs) {
        return false
    }
    const lhs_str = ((typeof lhs === "string") ? lhs : lhs.forma)
    const rhs_str = ((typeof rhs === "string") ? rhs : rhs.forma)
    return (lhs_str === rhs_str)
}


// Compara las formas de una conjugación.
// Esto no compara el FormaRestringido.uso
export function formasConjugadasIgual(lhs: FormaConjugada[] | undefined, rhs: FormaConjugada[] | undefined) : boolean {
    function getFormas(slot: FormaConjugada[]) {
        if (!Array.isArray(slot)) {
            throw new Error(`obsolete data form found: ${JSON.stringify(slot)}`)
        }
        const formas = slot.map((entry) => {
            if (entry != null) {
                if (typeof entry === "string") {
                    return entry
                } else {
                    const is_obsolete = ("estándar" in entry) || ("atípicos" in entry)
                    if (is_obsolete) {
                        throw new Error(`obsolete data form found: ${JSON.stringify(entry)}`)
                    }
                    return entry.forma
                }
            }
        })
        return formas
    }
    // handle degenerate cases
    if ((lhs == null) && (rhs == null)) {
        return true
    } else if ((lhs == null) || (rhs == null)) {
        return false
    }
    // both have values
    // normalize to array of strings
    const lhs_all = getFormas(lhs)
    const rhs_all = getFormas(rhs)
    lhs_all.sort()
    rhs_all.sort()
    for (let i = 0 ; i < lhs_all.length ; ++i) {
        if (lhs_all[i] !== rhs_all[i]) {
            return false
        }
    }
    return true
}


export function isValueless(forma_conjugadas?: (FormaConjugada | undefined)[] | null) : boolean {
    if (!forma_conjugadas) {
        return true
    } else {
        const index_first_value = forma_conjugadas.findIndex((forma_conjugada) => {
            if (forma_conjugada != null) {
                const es_string = (typeof forma_conjugada === "string")
                return (es_string ? true : (forma_conjugada.forma != null))
            }
        })
        return (index_first_value === -1)
    }
}

// Removes any empty entries (for a gramatical_person) in the given conjugations.
// An entry is empty if it doesn't contain any values, just 'undefined'.
export function removeValuelessEntries(conjugation: VerbConjugation) {
    for (const key in conjugation) {
        const gramatical_person = <keyof typeof conjugation> key
        const formas = conjugation[gramatical_person]
        if (isValueless(formas)) {
            delete conjugation[gramatical_person]
        }
    }
}


export function combinaFormasConjugadas(bases: FormaConjugada[], actualizaciones: FormaConjugada[] | undefined) {
    if ((bases == null) && (actualizaciones == null)) {
        return undefined
    }
    if (bases == null) {
        return actualizaciones
    }
    if (actualizaciones == null) {
        return bases
    }
    // if (base.length !== actualizaciones.length) {
    //     throw new Error(`base=${base} has different length than actualizaciones=${actualizaciones}`)
    // }
    const max_length = Math.max(bases.length, actualizaciones.length)
    const merged = []
    for (let i = 0 ; i < max_length ; ++i) {
        const base = bases[i]
        const actualización = actualizaciones[i]
        if (actualización) {
            if (base) {
                assert((typeof base === typeof actualización), `mismatched types for base=${JSON.stringify(base)} actualización=${JSON.stringify(actualización)}`)
            }
            if (typeof actualización === "string") {
                merged.push(actualización)
            } else {
                assert(((<FormaRestringida> base).uso === actualización.uso), `mismatched types for base=${JSON.stringify(base)} actualización=${JSON.stringify(actualización)}`)
                if (actualización.forma) {
                    merged.push(actualización)
                }
            }
        } else {
            if (base) {
                merged.push(base)
            }
        }
    }
    return merged
}


export function combinaParticipios(base: Participios, actualización?: Participios) : Participios {
    const gerundio = <FormaConjugada[]> combinaFormasConjugadas(base.gerundio!, actualización?.gerundio)
    const participio = <FormaConjugada[]> combinaFormasConjugadas(base.participio!, actualización?.participio)
    return {gerundio, participio}
}



const order: (string | string[])[] = [
    ["a", "á"],
    "b",
    "c",
    "d",
    ["e", "é"],
    "f",
    "g",
    "h",
    ["i", "í"],
    "j",
    "k",
    "l",
    "m",
    ["n", "ñ"],
    ["o", "ó"],
    "p",
    "q",
    "r",
    "s",
    "t",
    ["u", "ú", "ü"],
    "v",
    "w",
    "x",
    "y",
    "z"
]

// rank principal (grupo)
const rank = new Map<string, number>();

// sub-rank (posición dentro del grupo)
const subRank = new Map<string, number>();

// mapa de normalización: cada letra → su representante principal (primero del grupo)
const normalizeMap = new Map<string, string>();

order.forEach((chars, i) => {
    if (typeof chars === "string") {
        rank.set(chars, i);
        subRank.set(chars, 0);
        normalizeMap.set(chars, chars); // se normaliza a sí misma
    } else {
        chars.forEach((char, j) => {
            rank.set(char, i);
            subRank.set(char, j);
            normalizeMap.set(char, chars[0]); // normaliza al primer elemento del grupo
        });
    }
});

/**
 * Normaliza una palabra: cada letra se convierte en su representante principal.
 * Ej: "áñü" → "anu"
 */
function normalize(word: string): string {
    let result = "";
    for (const char of word) {
        const normalized = normalizeMap.get(char);
        if (normalized === undefined) {
            throw new Error(`Caracter inválido: '${char}'`);
        }
        result += normalized;
    }
    return result;
}

export function compareSpanishWords(lhs: string, rhs: string): number {
    const normLhs = normalize(lhs);
    const normRhs = normalize(rhs);

    // Comparar versiones normalizadas
    if (normLhs < normRhs) return -1;
    if (normLhs > normRhs) return 1;

    // Si son iguales, desempatar con subRank
    const len = Math.min(lhs.length, rhs.length);

    for (let i = 0; i < len; i++) {
        const l = lhs[i];
        const r = rhs[i];

        if (l === r) continue;

        const sl = subRank.get(l);
        const sr = subRank.get(r);

        if (sl === undefined || sr === undefined) {
            throw new Error(`carácter inválido: '${l}' o '${r}'`);
        }

        if (sl !== sr) {
            return sl - sr;
        }
    }

    return lhs.length - rhs.length;
}