import { FormaConjugada, GrammaticalPerson, StemChangeRuleId } from "../src/index.js"
import { mood_tenses } from "../src/lib.js"
import { stem_change_descriptions, stem_change_patterns } from "../src/stem-changes.js"


// Finds misspelling errors and possibly cut&paste error in the 'StemChangeRuleId's in stem_change_patterns.
function validateStemChangePatterns() {
    for (const [pattern_id, rules] of Object.entries(stem_change_patterns)) {
        const allowed_rule_ids = new Set(rules.allowed_transforms)
        // validate gerund_rule
        if (rules.gerund_rule && !allowed_rule_ids.has(rules.gerund_rule)) {
          throw new Error(
            `stem_change_patterns.${pattern_id}: gerund_rule=${rules.gerund_rule} not in transforms`
          )
        }
        // FIX: this is too complicated, try to simplify
        // validate tiempos / personas
        for (const mood_tense of mood_tenses) {
            const stem_changes = rules[mood_tense]
            if (stem_changes) {
                for (const person in stem_changes) {
                    if (person === "vos") {
                        const stem_change_rule_ids = <FormaConjugada[]> stem_changes[<GrammaticalPerson>person]
                        if (stem_change_rule_ids) {
                            for (const forma_conjugada of stem_change_rule_ids) {
                                const stem_change_rule_id = <StemChangeRuleId> ((typeof forma_conjugada === "string") ? forma_conjugada : forma_conjugada.forma)
                                if (!allowed_rule_ids.has(stem_change_rule_id)) {
                                    throw new Error(
                                        `stem_change_patterns.${pattern_id}.${mood_tense}.${person}: rule ${stem_change_rule_id} not in transforms`
                                    )
                                }
                                if (stem_change_rule_id && !stem_change_descriptions[stem_change_rule_id]) {
                                    throw new Error(
                                        `stem_change_patterns.${pattern_id}.${mood_tense}.${person}: unknown rule ${stem_change_rule_id}`
                                    )
                                }
                            }
                        }
                    } else {
                        const rule_id = <StemChangeRuleId> stem_changes[<GrammaticalPerson>person]
                        if (rule_id == null) continue
                        if (!allowed_rule_ids.has(rule_id)) {
                            throw new Error(
                              `stem_change_patterns.${pattern_id}.${mood_tense}.${person}: rule ${rule_id} not in transforms`
                            )
                        }
                        if (!stem_change_descriptions[rule_id]) {
                            throw new Error(
                              `stem_change_patterns.${pattern_id}.${mood_tense}.${person}: unknown rule ${rule_id}`
                            )
                        }
                    }
                }
            }
        }
    }
    console.log(`validated stem_change_patterns[]`)
}


// Call it immediately to find any errors.
// Según ChatGPT: Código al nivel superior del módulo = constructor del módulo, y we ejecuta una vez y queda cacheado.
validateStemChangePatterns()
