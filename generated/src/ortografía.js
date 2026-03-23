import { applyToVerbForms } from "./lib.js";
// A mapping of the last 3-5 characters of an infinitivo to the possible typographic change rule.
// NOTE: these are searched in the same order that they are presented in this list, and the first match is selected.
const infinitive_ending_sound_rules = {
    humar: "u → uy (hiato)",
    husar: "u → uy (hiato)",
    quir: "preserve-hard-c-sound-of-q",
    guar: "break-ue-dipthong-after-gu",
    guir: "preserve-hard-g-sound",
    car: "preserve-hard-c-sound-of-c",
    cer: "preserve-soft-c-sound",
    cir: "preserve-soft-c-sound",
    gar: "preserve-hard-g-sound",
    ger: "preserve-soft-g-sound",
    gir: "preserve-soft-g-sound",
    uar: "break-u-dipthong-after-hard-sound",
    uir: "u → uy (hiato)",
    zar: "replace-disallowed-ze-zi",
};
// FIX: linguist: are these patterns correct?
// Verb changes made solely for phonetic reasons, and using changes in typography.
const orthographical_change_rules = {
    "preserve-soft-c-sound": [{
            // example: conocer,IndPres,s1: conoco => conozco
            // counter-example: hacer,IndPret,s3: hico !=> hizco
            // NOTE: this rule is only for verb terminations
            match_pattern: /c([aáoóuú](s|mos|is|n)?)$/u,
            replacement_pattern: "zc$1"
        }],
    "preserve-hard-c-sound-of-c": [{
            // example: sacar,IndPret,s1: sacé => saqué
            match_pattern: /c([eéií](s|mos|is|n)?)$/u,
            replacement_pattern: "qu$1"
        }],
    "preserve-soft-g-sound": [{
            // example: elegir,IndPres,s1: eligo => elijo
            match_pattern: /g([aáoóuú](s|mos|is|n)?)$/u,
            replacement_pattern: "j$1"
        }],
    "preserve-hard-g-sound": [{
            // example: llegar,IndPret,s1: llegé => llegué
            match_pattern: /g([eéií](s|mos|is|n)?)$/u,
            replacement_pattern: "gu$1"
        },
        {
            // example: extinguir,IndPres,s1: extinguo => extingo
            match_pattern: /gu([aáoó](s|mos|is|n)?)$/u,
            replacement_pattern: "g$1"
        }],
    "replace-disallowed-ze-zi": [{
            // Spanish doesn't have "ze", or "zi"
            // It does have "za" (zanahoria), "zo" (zoo), "zu" (azul)
            // example: empezar,IndPret,s1: empezé => empecé
            match_pattern: /z([eéií](s|mos|is|n)?)$/u,
            replacement_pattern: "c$1"
        }],
    "preserve-hard-c-sound-of-q": [{
            // example: delinquir,IndPres,s1: delinquo -> delinco
            match_pattern: /qu([aáoó](s|mos|is|n)?)$/u,
            replacement_pattern: "c$1"
        }],
    "u → uy (hiato)": [{
            // example: fluir,IndPres,s1: fluo -> fluyo
            match_pattern: /u([aáeéoó](s|mos|is|n)?)$/u,
            replacement_pattern: "uy$1"
        }, {
            // example: rehuir,IndPres,s1: rehuyo -> rehúyo
            // example: sahumar,IndPres,s2: sahumas => sahúmas
            // example: ahusar,IndPres,s1: ahuso => ahúso
            // ignora las formas con estrés en la última sílaba
            match_pattern: /([ae])hu([msy][aeo](s|is|n)?)$/u,
            replacement_pattern: "$1hú$2"
        }],
    "break-u-dipthong-after-hard-sound": [{
            // example: actuar,IndPres,s1: actuo => actúo
            // counter-example: aguar,IndPres,s1: aguo !=> agúo
            // NOTE: this rule is only for verb terminations
            match_pattern: /([dlnt])u([aeo](s|n)?)$/u,
            replacement_pattern: "$1ú$2"
        }],
    "break-ue-dipthong-after-gu": [{
            // example: aguar,IndPret,s1: agué => agüé
            // NOTE: this rule is only for verb terminations
            match_pattern: /gu([eé](s|mos|is|n)?)$/u,
            replacement_pattern: "gü$1"
        }],
};
// Apply any orthographical changes to the given part of a verb conjugation or participle derivation
export function applyOrthographicalChangesCommon(args) {
    const { infinitivo, forms, do_correct_dieresis, do_correct_ñi_yi } = args;
    const changed_forms = applyToVerbForms(forms, (form) => {
        let changed = form;
        if (do_correct_dieresis) {
            changed = correctDiéresis(changed);
        }
        if (do_correct_ñi_yi) {
            changed = correctYir(changed);
        }
        // mantener hiato
        changed = changed.replace(/([aeo])i(ste|mos|steis|do)$/, "$1í$2");
        // vocal débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
        changed = changed.replace(/(?<![gq])([aeouü])i([eó])/, "$1y$2");
        // // u débil → y   after other vowel, but not after "gu" or "qu" which are considered a single consonants
        // changed = changed.replace(/(?<![gq])u([aeo])/, "y$1")
        // vocal débil → y   at start of word, e.g. "erguir", "oyer"
        changed = changed.replace(/^(?:(o)|i)e/, "$1ye");
        // remove accent on single sylable forms with dipthong "ui"
        // This was added to support the idea that huir is regular, but unusual ortografía aplica
        changed = changed.replace(/^([bcdfhjlmnpqrstvwxz]+u)í(s)?$/, "$1i$2");
        // changed = accentuate(full_form, suffix).  FAILED
        return changed;
    });
    return changed_forms;
}
// Apply any orthographical changes to the given form of a verb conjugation.
export function applyOrthographicalChangesToConjugatedForm(infinitivo, form, suffix, do_correct_dieresis, do_correct_ñi_yi) {
    let updated = form;
    const rules = findInfinitiveBaseEndingSoundRule(infinitivo);
    if (rules) {
        for (const rule of rules) {
            updated = updated.replace(rule.match_pattern, rule.replacement_pattern);
        }
    }
    [updated] = applyOrthographicalChangesCommon({ infinitivo, forms: [updated], suffix, do_correct_dieresis, do_correct_ñi_yi });
    return updated;
}
export function applyOrthographicalChangesForParticiples(infinitivo, participles, gerund_ending, do_correct_dieresis, do_correct_ñi_yi, rules_applied) {
    const orthography = {};
    const gerundio = applyOrthographicalChangesCommon({ infinitivo, forms: participles.gerundio, suffix: gerund_ending, do_correct_dieresis, do_correct_ñi_yi });
    if (participles.participio.length !== 1) {
        throw new Error(`${infinitivo}: can't yet handle case of multiple participios: ${participles.participio}`);
    }
    const participio = applyOrthographicalChangesCommon({ infinitivo, forms: participles.participio, suffix: participles.participio[0].slice(-3), do_correct_dieresis, do_correct_ñi_yi });
    if (gerundio && (gerundio !== participles.gerundio)) {
        orthography.gerundio = gerundio;
    }
    if (participio && (participio !== participles.participio)) {
        orthography.participio = participio;
    }
    if (Object.keys(orthography).length > 0) {
        rules_applied.push({ orthography });
    }
    return orthography;
}
export function findInfinitiveBaseEndingSoundRule(infinitivo) {
    for (const len of [5, 4, 3]) {
        if (infinitivo.length > len) {
            let ending = infinitivo.slice(-len);
            let rule_name = infinitive_ending_sound_rules[ending];
            if (rule_name) {
                const rules = orthographical_change_rules[rule_name];
                return rules;
            }
        }
    }
}
export function correctDiéresis(conjugation) {
    // Order matters here: first resolve üi/ü + vowel, then restore güi/güí
    conjugation = conjugation.replace(/üi?([aáeéoó])/, "uy$1");
    return conjugation.replace(/gu([eéií])/, "gü$1");
}
export function correctYir(conjugation) {
    conjugation = conjugation.replace(/([ñy])i([eéoó])/, "$1$2");
    return conjugation;
}
// @return The conjugated forms after applying the orthographical change rules.
// @param @output rules_applied Contains the names of the rules that were applied to the input verb.
// export function __getOrthographicChanges(stem: string, ending: string, form: string, do_correct_dieresis: boolean): string | undefined {
//     return
// }
export function getOrthographicChanges(infinitivo, mood_tense, forms, suffixes, rules_applied) {
    const orthography = {};
    // perhaps this can be merged with other similar tests and changes
    const do_correct_diéresis = infinitivo.includes("ü") || infinitivo.includes("gon") || infinitivo.includes("goll");
    const do_correct_ñi_yi = infinitivo.endsWith("ñir") || infinitivo.endsWith("llir");
    for (const key in forms) {
        const gramatical_person = key;
        const changed_forms = applyToVerbForms(forms[gramatical_person], (form, i) => {
            const suffixes_for_person = suffixes[gramatical_person];
            const suffix = suffixes_for_person[i] || suffixes_for_person[0];
            return applyOrthographicalChangesToConjugatedForm(infinitivo, form, suffix, do_correct_diéresis, do_correct_ñi_yi);
        });
        orthography[gramatical_person] = changed_forms;
    }
    rules_applied.push({ orthography });
    return orthography;
}
//# sourceMappingURL=ortograf%C3%ADa.js.map