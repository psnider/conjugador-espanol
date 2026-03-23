export const persons_standard = ["s1", "s2", "s3", "p1", "p2", "p3"];
export const persons_w_vos = ["s1", "s2", "s3", "p1", "p2", "p3", "vos"];
export const persons_w_vos_index = { s1: 1, s2: 1, s3: 1, p1: 1, p2: 1, p3: 1, vos: 1 };
export const mood_tenses = ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut", "CmdPos", "CmdNeg"];
// Apply a change to each verb form for a single conjugation (for mood + tense + gramatical person).
// The number of forms (1 or 2) is preserved.
// If there are no verb forms, then there is no change.
// @param source_forms The starting verb forms. This is not modified.
// @change: Returns the changed form, or undefined if there is no change.
// @return The VerbForms after applying the change()
export function applyToVerbForms(source_forms, change) {
    if (source_forms) {
        const changed_forms = source_forms.map((source_form, i) => {
            const changed_form = change(source_form, i);
            return (changed_form || source_form);
        });
        return changed_forms;
    }
    else {
        return source_forms;
    }
}
export function setStem(temas_modelo, only_persons) {
    const temas_base = {};
    const persons = only_persons || persons_w_vos;
    for (const key of persons) {
        const persona_gramatical = key;
        temas_base[persona_gramatical] = temas_modelo;
    }
    return temas_base;
}
export function formsAreEqual(lhs, rhs) {
    // handle degenerate cases
    if ((lhs == null) && (rhs == null)) {
        return true;
    }
    else if ((lhs == null) || (rhs == null)) {
        return false;
    }
    // both have values
    // normalize to array copies
    const lhs_a = (typeof lhs === 'string') ? [lhs] : [...lhs];
    const rhs_a = (typeof rhs === 'string') ? [rhs] : [...rhs];
    if (lhs_a.length !== rhs_a.length) {
        return false;
    }
    lhs_a.sort();
    rhs_a.sort();
    for (let i = 0; i < lhs_a.length; ++i) {
        if (lhs_a[i] !== rhs_a[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=lib.js.map