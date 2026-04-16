export const stem_change_descriptions = {
    // FIX: linguist: Cómo los hablantes saben cuáles verbos tienen cambios de la raíz? No los memorizan, es de algún patrón, verdad?
    // se llama "diptongación condicionada fonéticamente"
    // - La "e" debe estar en posición tónica
    // - Las consonantes que siguen a la "e" importan
    // - La terminación del infinitivo importa
    // It appears that this regex picks out the "e:ie" verbs: /([bcfhlmnprstv]|qu)e(br|l|mbl|n|nd|ns|nt|nz|r|rd|rn|rr|rt|s|st|v|z)[aei]r$/
    "e:ie": { from: "e", to: "ie", kind: "diphthongization" },
    // This seems to be related to e:ie, if you look at "qu" as similar to "e": e.g. adquirir, inquirir
    "i:ie": { from: "i", to: "ie", kind: "diphthongization" },
    "o:ue": { from: "o", to: "ue", kind: "diphthongization" },
    "u:ue": { from: "u", to: "ue", kind: "diphthongization" },
    // NO: pensar, perder, SÍ: sentir
    "e:i": { from: "e", to: "i", kind: "vowel raising", only_for_ir_verbs: true },
    // only for "-eír" verbs, for now just "reír"
    "e:í": { from: "e", to: "í", kind: "vowel raising", only_for_ir_verbs: true },
    // only for "-eír" verbs, for now just "reír"
    "e:": { from: "e", to: "", kind: "blending", only_for_ir_verbs: true },
    // SÍ: dormir, poder (excepcional via gerundio_tema_cambio_excepcional)
    "o:u": { from: "o", to: "u", kind: "vowel raising", only_for_ir_verbs: true },
    "i:í": { from: "i", to: "í", kind: "orthographic stress" },
    "u:ú": { from: "u", to: "ú", kind: "orthographic stress" },
    // This rule is only for the case of skipping a stem change for a particular FormaConjugada.uso, e.g. para "vos"
    "no change": { from: "", to: "", kind: "no change" },
};
// The patterns used for stem changes.
// The form is: original_character : replacement_characters
// The changes apply to the last instance of the original_character in a verb stem (root form).
// Nota: 
// - ocurre solo en formas tónicas
// - excluye nosotros / vosotros
// - puede coexistir con yo en -g, pretérito fuerte, etc.
export const stem_change_patterns = {
    "e:i": {
        // "pedir", "decir"
        allowed_transforms: ["e:i"],
        gerund_rule: "e:i",
        IndPres: { s1: "e:i", s2: "e:i", s3: "e:i", p3: "e:i" },
        IndPret: { s3: "e:i", p3: "e:i" },
        SubPres: { s1: "e:i", s2: "e:i", s3: "e:i", p1: "e:i", p2: "e:i", p3: "e:i", vos: ["e:i"] },
        SubImp: { s1: "e:i", s2: "e:i", s3: "e:i", p1: "e:i", p2: "e:i", p3: "e:i" },
        SubFut: { s1: "e:i", s2: "e:i", s3: "e:i", p1: "e:i", p2: "e:i", p3: "e:i" },
        // FIX: simplify by always modeling vos from the perspective of changes from the regular form, instead of having vos follow the form of tú
        CmdPos: { s2: "e:i", s3: "e:i", p1: "e:i", p3: "e:i", /* vos: ["e:i"] */ }
    },
    "e:í": {
        // "reír" sigue un cambio similar a "e:i", exepto por CmdPos, y el estres del "í"
        allowed_transforms: ["e:í", "e:i", "e:"],
        gerund_rule: "e:",
        IndPres: { s1: "e:í", s2: "e:í", s3: "e:í", p3: "e:í" },
        IndPret: { s3: "e:i", p3: "e:" },
        SubPres: { s1: "e:í", s2: "e:í", s3: "e:í", p1: "e:i", p2: "e:i", p3: "e:í", vos: ["e:í"] },
        SubImp: { s1: "e:", s2: "e:", s3: "e:", p1: "e:", p2: "e:", p3: "e:" },
        SubFut: { s1: "e:", s2: "e:", s3: "e:", p1: "e:", p2: "e:", p3: "e:" },
        // FIX: simplify by always modeling vos from the perspective of changes from the regular form, instead of having vos follow the form of tú
        CmdPos: { s2: "e:í", s3: "e:í", p1: "e:i", p3: "e:í", vos: ["e:í"] }
    },
    "e:ie": {
        // "pensar", "perder", "sentir"
        // "reír" sigue un cambio similar a "e:ie", exepto por CmdPos, y el estres del "í"
        allowed_transforms: ["e:ie", "e:i"],
        gerund_rule: "e:i",
        IndPres: { s1: "e:ie", s2: "e:ie", s3: "e:ie", p3: "e:ie" },
        IndPret: { s3: "e:i", p3: "e:i" },
        SubPres: { s1: "e:ie", s2: "e:ie", s3: "e:ie", p1: "e:i", p2: "e:i", p3: "e:ie", vos: [{ "forma": "e:ie", "uso": "Riop." }, { "forma": "e:i", "uso": "C.Am." }] },
        SubImp: { s1: "e:i", s2: "e:i", s3: "e:i", p1: "e:i", p2: "e:i", p3: "e:i" },
        SubFut: { s1: "e:i", s2: "e:i", s3: "e:i", p1: "e:i", p2: "e:i", p3: "e:i" },
        CmdPos: { s2: "e:ie", s3: "e:ie", p1: "e:i", p3: "e:ie" }
    },
    "e:ie (cernir)": {
        // "discernir" sigue un cambio similar a "e:ie", exepto no cambie las formas de IndPret
        allowed_transforms: ["e:ie", "no change"],
        IndPres: { s1: "e:ie", s2: "e:ie", s3: "e:ie", p3: "e:ie" },
        SubPres: { s1: "e:ie", s2: "e:ie", s3: "e:ie", p3: "e:ie", vos: [{ "forma": "e:ie", "uso": "Riop." }, { "forma": "no change", "uso": "C.Am." }] },
        CmdPos: { s2: "e:ie", s3: "e:ie", p3: "e:ie" }
    },
    "i:ie": {
        // This seems to be related to e:ie, if you look at "qu" as similar to "e": e.g. adquirir, inquirir
        allowed_transforms: ["i:ie", "no change"],
        IndPres: { s1: "i:ie", s2: "i:ie", s3: "i:ie", p3: "i:ie" },
        SubPres: { s1: "i:ie", s2: "i:ie", s3: "i:ie", p3: "i:ie", vos: [{ "forma": "i:ie", "uso": "Riop." }, { "forma": "no change", "uso": "C.Am." }] },
        CmdPos: { s2: "i:ie", s3: "i:ie", p3: "i:ie" }
    },
    "o:ue": {
        // "o:u" is only used for vowel raising wihin "o:ue" verbs, and is not a pattern for stem changes generally
        // Stem changes in SubPres,vos are only_for_ir_verbs:
        //             "o:ue"     null
        // poder    => puedas,   podás
        // volver   => vuelvas,  volvás
        //             "o:ue"    "o:u"
        // dormir   => duermas,  durmás
        // morir    => mueras,   murás
        allowed_transforms: ["o:ue", "o:u"],
        gerund_rule: "o:u",
        IndPres: { s1: "o:ue", s2: "o:ue", s3: "o:ue", p3: "o:ue" },
        IndPret: { s3: "o:u", p3: "o:u" },
        SubPres: { s1: "o:ue", s2: "o:ue", s3: "o:ue", p1: "o:u", p2: "o:u", p3: "o:ue", vos: [{ "forma": "o:ue", "uso": "Riop." }, { "forma": "o:u", "uso": "C.Am." }] },
        CmdPos: { s2: "o:ue", s3: "o:ue", p1: "o:u", p3: "o:ue" }
    },
    "u:ú": {
        // "reunir"
        // accent only, not an actual stem change
        // FIX: linguist: maybe this can be handled with stress placement rules? 
        allowed_transforms: ["u:ú", "no change"],
        gerund_rule: null,
        IndPres: { s1: "u:ú", s2: "u:ú", s3: "u:ú", p3: "u:ú" },
        SubPres: { s1: "u:ú", s2: "u:ú", s3: "u:ú", p3: "u:ú", vos: [{ "forma": "u:ú", "uso": "Riop." }, { "forma": "no change", "uso": "C.Am." }] },
        CmdPos: { s1: "u:ú", s2: "u:ú", s3: "u:ú", p3: "u:ú" }
    },
    "u:ue": {
        // "jugar" is the only verb with this stem change
        allowed_transforms: ["u:ue", "no change"],
        gerund_rule: null,
        IndPres: { s1: "u:ue", s2: "u:ue", s3: "u:ue", p3: "u:ue" },
        SubPres: { s1: "u:ue", s2: "u:ue", s3: "u:ue", p3: "u:ue", vos: [{ "forma": "u:ue", "uso": "Riop." }, { "forma": "no change", "uso": "C.Am." }] },
        CmdPos: { s2: "u:ue", s3: "u:ue", p3: "u:ue" }
    },
};
// Get any stem change patterns for the given verb mood and tense.
// @return Stem change patterns for those conjugated forms for which they exist.
//   For example: getStemChanges("IndPres", {stem_change_type: "o:ue"}):
//     {s1: "o:ue", s2: "o:ue", s3: "o:ue", p3: "o:ue"},
export function getStemChangesFromRule(mood_tense, alternancia_vocálica) {
    if (alternancia_vocálica) {
        const stem_changes_for_type = stem_change_patterns[alternancia_vocálica];
        if (!stem_changes_for_type) {
            throw new Error(`stem_change_type=${alternancia_vocálica} does not exist in stem_change_patterns`);
        }
        const stem_changes = stem_changes_for_type[mood_tense];
        return stem_changes;
    }
}
export function getStemChangeForGerrundFromRule(alternancia_vocálica) {
    if (alternancia_vocálica) {
        const stem_changes_for_type = stem_change_patterns[alternancia_vocálica];
        if (!stem_changes_for_type) {
            throw new Error(`stem_change_type=${alternancia_vocálica} does not exist in stem_change_patterns`);
        }
        return stem_changes_for_type.gerund_rule;
    }
}
export function applyStemChangePattern(verb_part, stem_change_description, ponga_hiato) {
    if (stem_change_description.kind !== "no change") {
        const i = verb_part.lastIndexOf(stem_change_description.from);
        if (i === -1) {
            const rule_id = `${stem_change_description.from}:${stem_change_description.to}`;
            throw new Error(`can't apply stem_change_rule_id=${rule_id} to verb_part=${verb_part}`);
        }
        // Spanish doesn't allow a word to start with the dipthong "ue"
        // but apparently this doesn't apply to the dipthong "ie"
        // FIX: perhaps it does? "ie" -> "ye" or "e"?
        const carácter_para_romper_diptongo = ((i === 0) || ponga_hiato) ? "h" : "";
        let changed_part = verb_part.slice(0, i) + carácter_para_romper_diptongo + stem_change_description.to + verb_part.slice(i + stem_change_description.from.length);
        return changed_part;
    }
    else {
        return verb_part;
    }
}
// DUP of 
// @return The root of each conjugation that should be used after applying any stem change.
// This is the unchanged root if there is no stem change.
// regular_suffixes: provides the grammatical persons to be conjugated, as well as the number of forms for each
// export function getStemChanges_DUP_getTemaConAlternanciaVocálica(args: {infinitivo_sin_prefijos: string, verb_family: InfinitiveClass, mood_tense: MoodTense, suffixes: VerbConjugation}) : VerbConjugation {
//     const {infinitivo_sin_prefijos, verb_family, mood_tense, suffixes} = args
//     const verb_root = infinitivo_sin_prefijos.slice(0, -2)
//     const conjugated_stems: VerbConjugation = {}
//     const morphophonemic_conjugation_rules = verbos_con_cambios_morfológicos[infinitivo_sin_prefijos]
//     const alternancia_vocálica = morphophonemic_conjugation_rules?.alternancia_vocálica
//     // FIX: this seems to overlap with getTemaConAlternanciaVocálica()
//     const stem_change_rules = (alternancia_vocálica ? getStemChangesFromRule(mood_tense, alternancia_vocálica) : undefined)
//     // const conjugate_only = morphophonemic_conjugation_rules?.conjugate_only
//     if (stem_change_rules) {
//         for (const key in suffixes) {
//             if (key === "vos") {
//                 let stem: string
//                 const stem_change_rule = stem_change_rules.vos
//                 const do_apply_stem_change = true  // !conjugate_only || conjugate_only.includes(gramatical_person)
//                 if (stem_change_rule && do_apply_stem_change) {
//                     const w_stem_changes = applyToFormasConjugadas(stem_change_rules, (stem_change_rule) => {
//                         const rule_description = stem_change_descriptions[stem_change_rule]
//                         if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
//                             const changed = applyStemChangePattern(stem_regular, rule_description)
//                             return changed
//                         }
//                     })
//                     const changed = combinaFormasConjugadas(stem_change_rules, w_stem_changes)
//                     changed_stems.vos = changed
// // ------
//                     const rule_description = stem_change_descriptions[stem_change_rule]
//                     if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
//                         const changed = applyStemChangePattern(stem_regular, rule_description)
//                         return changed
//                     } else {
//                         stem = verb_root
//                     }
//                 } else {
//                     stem = verb_root
//                 }
//                 const forms_count =  suffixes[gramatical_person]?.length
//                 if (forms_count) {
//                     conjugated_stems[gramatical_person] = <FormaConjugada[]> new Array(forms_count).fill(stem)
//                 }
//             } else {
//                 const gramatical_person = key as keyof typeof suffixes
//                 let stem: string
//                 const stem_change_rule = stem_change_rules?.[gramatical_person]
//                 const do_apply_stem_change = true  // !conjugate_only || conjugate_only.includes(gramatical_person)
//                 if (stem_change_rule && do_apply_stem_change) {
//                     const rule_description = stem_change_descriptions[stem_change_rule]
//                     if (!rule_description.only_for_ir_verbs || verb_family === "-ir") {
//                         stem = applyStemChangePattern(verb_root, rule_description)
//                     } else {
//                         stem = verb_root
//                     }
//                 } else {
//                     stem = verb_root
//                 }
//                 const forms_count =  suffixes[gramatical_person]?.length
//                 if (forms_count) {
//                     conjugated_stems[gramatical_person] = <FormaConjugada[]> new Array(forms_count).fill(stem)
//                 }
//             }
//         }
//     }
//     return conjugated_stems
// }
// Get gerund with any stem changes.
export function applyStemChangeToGerundStem(args) {
    const { verb_family, gerundio_tema_cambio, ponga_hiato, excepcional, rules_applied } = args;
    let gerund_stem = args.gerund_stem;
    if (gerundio_tema_cambio) {
        const stem_change_description = stem_change_descriptions[gerundio_tema_cambio];
        const allowed_transforms = ["vowel raising", "blending"];
        if (!allowed_transforms.includes(stem_change_description.kind)) {
            throw new Error(`for gerund_stem=${gerund_stem} verb_family=${verb_family} expect stem_change_description.kind=${stem_change_description.kind} to be one of ${allowed_transforms},`);
        }
        if (excepcional || !stem_change_description.only_for_ir_verbs || (verb_family === "-ir")) {
            gerund_stem = applyStemChangePattern(gerund_stem, stem_change_description, ponga_hiato);
        }
    }
    if (gerund_stem !== args.gerund_stem) {
        rules_applied.push({ gerund_stem_change: gerund_stem });
    }
    return gerund_stem;
}
//# sourceMappingURL=stem-changes.js.map