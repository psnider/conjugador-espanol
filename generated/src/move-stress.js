const unaccented_vowels_to_accented = {
    a: "á", e: "é", i: "í", o: "ó", u: "ú"
};
const accented_vowels_to_unaccented = {
    á: "a", é: "e", í: "i", ó: "o", ú: "u"
};
function removeAccent(c) {
    return accented_vowels_to_unaccented[c] ?? c;
}
function addAccent(c) {
    return unaccented_vowels_to_accented[c] ?? c;
}
export function moveStress(word, move) {
    const chars = [...word];
    if (move.from != null) {
        chars[move.from] = removeAccent(chars[move.from]);
    }
    if (move.to != null) {
        chars[move.to] = addAccent(chars[move.to]);
    }
    return chars.join("");
}
const stressed_regex = /[áéíóú]/;
const unstressed_regex = /[aeiou][bcdfghjklmnpqrstvwxyz]?$/;
// FIX: add remaining dipthongs
const unstressed_dipthong_regex = /(ei)[bcdfghjklmnpqrstvwxyz]?$/;
function findIndexOfStress(verb_form) {
    let match = verb_form.match(stressed_regex);
    if (match) {
        return match.index;
    }
    else {
        match = verb_form.match(unstressed_dipthong_regex);
        if (match) {
            return match.index;
        }
        else {
            match = verb_form.match(unstressed_regex);
            if (match) {
                return match.index;
            }
        }
    }
}
export function removeStress(original) {
    const old_stress_index = findIndexOfStress(original);
    if (old_stress_index !== undefined) {
        const unstressed = moveStress(original, { from: old_stress_index });
        return unstressed;
    }
    else {
        return original;
    }
}
// export function removeHiatusStressFromAfterDipthong(form: string) {
//     const index = form.indexOf("gui")
//     if (index !== -1) {
//         const accented_ch = form[index + "gui".length] 
//         const unaccented_ch = removeAccent(accented_ch)
//         form = form.replace(`gui` + accented_ch, `gui` + unaccented_ch)
//     }
//     return form
// }
//# sourceMappingURL=move-stress.js.map