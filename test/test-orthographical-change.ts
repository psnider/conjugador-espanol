import { applyOrthographicalChangesToConjugatedForm, findInfinitiveBaseEndingSoundRule } from "../src/ortografía.js"

export function test_applyOrthographicalChanges(args: {conjugated_form: string, suffix: string, infinitive: string}) {
    const {conjugated_form, suffix, infinitive} = args
    const rule = findInfinitiveBaseEndingSoundRule(infinitive)
    if (rule) {
        const changed = applyOrthographicalChangesToConjugatedForm(infinitive, conjugated_form, suffix, true)
        return changed
    }
}

