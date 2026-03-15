import { applyOrthographicalChangesToConjugatedForm, findInfinitiveBaseEndingSoundRule } from "../src/ortografía.js"

export function test_applyOrthographicalChanges(args: {conjugated_form: string, suffix: string, infinitivo: string}) {
    const {conjugated_form, suffix, infinitivo} = args
    const rule = findInfinitiveBaseEndingSoundRule(infinitivo)
    if (rule) {
        const changed = applyOrthographicalChangesToConjugatedForm(infinitivo, conjugated_form, suffix, true, true)
        return changed
    }
}

