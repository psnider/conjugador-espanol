import { verbos_con_cambios_morfológicos } from "./verbos-con-cambios-morfológicas.js";
import { conjugateVerb } from "./conjugate-verb.js";
import { compareSpanishWords, getForma, mood_tenses } from "./lib.js";
import { removeStress } from "./move-stress.js";
// Reglas de sustitución para español
const simplifica_fonemas = [
    { from: /ü/gu, to: "u" },
    { from: /v/gu, to: "b" },
    { from: /z/gu, to: "s" },
    { from: /qu([eo])/gu, to: "k$1" },
    { from: /qu/gu, to: "k" },
    { from: /cc/gu, to: "ks" },
    { from: /c([eiu])/gu, to: "s$1" },
    { from: /c([ao])/gu, to: "k$1" },
    { from: /ll/gu, to: "y" },
    { from: /h/gu, to: "" },
];
function simplificaFormaFonetica(forma) {
    let normalizada = removeStress(forma);
    for (const cambio of simplifica_fonemas) {
        normalizada = normalizada.replace(cambio.from, cambio.to);
    }
    return normalizada;
}
// Estas RegExp's deben ser el más restringiendo posible.
export const sufijos_regexes = {
    //         -ar                     -er,                   -ir                            irregular: estar,haber,prever,ser
    IndPres: /((o|as|a|amos|áis|an|ás)|(es|e|emos|éis|en|és)|([ií]mos|ís|is)|(yo|yes|ye|yen)|(á|án|ay|é|én|omos|on|os|oy))$/,
    //         -ar                         -er,-ir                 irregular: ir
    IndImp: /((aba|abas|abais|aban|ábamos)|(ía|ías|íamos|íais|ían)|(a|as|amos|ais|an))$/,
    //         -ar                         -er,-ir,-aer                        -uír        -ñ-     irregular: tener
    IndPret: /((é|aste|ó|amos|asteis|aron)|(í|iste|ió|[ií]mos|[ií]steis|ieron)|(i|yó|yeron)|(eron)|(e|o))$/,
    //       -ar,-er,-ir
    IndFut: /(é|ás|á|emos|éis|án)$/,
    //       -ar,-er,-ir
    IndCond: /(ía|ías|íamos|íais|ían)$/,
    //       -ar                           -er,-ir                  irregular: estar
    SubPres: /(([eé]|[eé]s|emos|[eé]is|en)|(a|[aá]s|amos|[aá]is|an)|(án|én))$/,
    //       -ar                      -er,-ir 
    SubImp: /((ra|ras|ramos|rais|ran)|(se|ses|semos|seis|sen))$/,
    //       -ar,-er,-ir 
    SubFut: /(re|res|remos|reis|ren)$/,
    // Nota: probablemente esto no va a funcionar bien por los sufijos defectivos
    //       -ar                  -er,          -ir             irregular: dar,hacer,poner,saber,salir,ser,tener,venir,ver
    CmdPos: /(?:(?:s[fh]az|[mosux]pón|[e]sal|[bens]tén|[abdenor]vén)$|^(?:ten|ven|pon|sal|haz|di|ve|s[ée])$|(a|á|e|emos|ad|en|én|amos|ed|an|é|[ií]d|i|í)$)/
};
function getStems(infinitivo, formas, reglas_conjugacional) {
    // function findRulesApplied(name: string) {
    //     for (const rule_applied of rules_applied) {
    //         const value = rule_applied[name]
    //         if (value) {
    //             return value
    //         }
    //     }
    // }
    const temas = [];
    const keys = Object.keys(reglas_conjugacional);
    const is_regular = (keys.length === 0);
    if (is_regular) {
        // FIX: for now use the stem of the infinitive, but there could be orthographic changes
        const tema_regular = infinitivo.slice(0, -2);
        temas.push(tema_regular);
    }
    else {
        // const suffixes = findRulesApplied("suffixes")
        // const lexical_exceptions_suffixes = findRulesApplied("lexical_exceptions_suffixes")
        // const forms = conjugaciones.forms
        // for (const gramatical_person in forms) {
        //     const formas_conjugadas = forms[gramatical_person]
        // }
    }
    return temas;
}
export function generaIndiceDeTemasDeFormasConjugadas() {
    const temas_por_deletreo = {};
    const temas_por_fonética = {};
    for (const infinitivo in verbos_con_cambios_morfológicos) {
        // Note: "ir" no tiene raíz
        const raíz = infinitivo.slice(0, -2);
        for (const modo_tiempo of mood_tenses) {
            const conjugaciones = conjugateVerb(infinitivo, modo_tiempo);
            const formas = conjugaciones?.forms;
            if (formas) {
                const sufijos_regex = sufijos_regexes[modo_tiempo];
                if (sufijos_regex) {
                    // const cambios = conjugaciones.notes.cambios_conjugacional_primaria.cambios
                    // const cambios_2 = conjugaciones.notes.cambios_conjugacional_secundaria?.cambios
                    for (const key in formas) {
                        const persona = key;
                        const formas_conjugadas = formas[persona];
                        // const cambios_de_forma = cambios[persona]
                        // const cambios_2_de_forma = cambios_2?.[persona]
                        if (formas_conjugadas) {
                            for (const forma_conjugada of formas_conjugadas) {
                                const forma = getForma(forma_conjugada);
                                const match = forma.match(sufijos_regex);
                                const sufijo = match[1] || "";
                                const sufijo_length = sufijo.length;
                                const tema = ((sufijo_length === 0) ? forma : forma.slice(0, -sufijo_length));
                                const uso = ((typeof forma_conjugada === "string") ? undefined : forma_conjugada.uso);
                                const uso_tail = (uso ? `,${uso}` : "");
                                const id = `${infinitivo},${modo_tiempo},${persona}${uso_tail}`;
                                // por deletreo
                                temas_por_deletreo[tema] = temas_por_deletreo[tema] || {};
                                const sufijos_por_deletreo = temas_por_deletreo[tema];
                                // FIX: this method doesn't work for:
                                //   'ahíten' from 'ahitar,CmdPos,p3'
                                sufijos_por_deletreo[sufijo] = sufijos_por_deletreo[sufijo] || [];
                                sufijos_por_deletreo[sufijo].push(id);
                                // por fonética
                                const tema_fonética = simplificaFormaFonetica(tema);
                                temas_por_fonética[tema_fonética] = temas_por_fonética[tema_fonética] || {};
                                const sufijos_por_fonética = temas_por_fonética[tema_fonética];
                                sufijos_por_fonética[sufijo] = sufijos_por_fonética[sufijo] || [];
                                sufijos_por_fonética[sufijo].push(id);
                            }
                        }
                    }
                }
            }
        }
    }
    return { temas_por_deletreo, temas_por_fonética };
}
const indices = generaIndiceDeTemasDeFormasConjugadas();
const temas_por_deletreo = indices.temas_por_deletreo;
const temas_de_deltreo = Object.keys(temas_por_deletreo).sort(compareSpanishWords);
const temas_por_fonética = indices.temas_por_fonética;
const temas_de_fonética = Object.keys(temas_por_fonética).sort(compareSpanishWords);
/**
 * Finds the index where `value` should be inserted into `arr`
 * to keep it sorted in ascending order.
 *
 * @param temas_del_indice - Sorted array (ascending order)
 * @param consulta - Value to insert
 * @returns - Index where value should be inserted
 */
function findInsertionIndex(temas_del_indice, consulta) {
    let low = 0;
    let high = temas_del_indice.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const tema_mid = temas_del_indice[mid];
        const orden = compareSpanishWords(consulta, tema_mid);
        if (orden === 0) {
            return mid;
        }
        else if (orden > 0) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low; // insertion index
}
export function encuentraFormasSimilares(consulta) {
    function temaCoincideConConsulta(tema, consulta) {
        if (tema) {
            const length = Math.min(tema.length, consulta.length);
            const tema_sliced = removeStress(tema.slice(0, length));
            const consulta_sliced = consulta.slice(0, length);
            return (compareSpanishWords(tema_sliced, consulta_sliced) === 0);
        }
    }
    consulta = removeStress(consulta.toLowerCase());
    const infinitivos = new Set();
    const formas = {};
    const inicial = findInsertionIndex(temas_de_deltreo, consulta);
    let final = inicial;
    while (temaCoincideConConsulta(temas_de_deltreo[final + 1], consulta)) {
        ++final;
    }
    for (let i = inicial; i <= final; ++i) {
        const tema = temas_de_deltreo[i];
        const sufijos_con_ids = temas_por_deletreo[tema];
        for (let sufijo in sufijos_con_ids) {
            const forma = tema + sufijo;
            if (removeStress(forma).startsWith(consulta)) {
                formas[forma] = formas[forma] || [];
                formas[forma].push(...sufijos_con_ids[sufijo]);
            }
            for (let id of sufijos_con_ids[sufijo]) {
                const infinitivo = id.split(",")[0];
                infinitivos[infinitivo] = true;
            }
        }
    }
    const infinitivos_sorted = Object.keys(infinitivos).sort(compareSpanishWords);
    return { infinitivos: infinitivos_sorted, formas };
}
//# sourceMappingURL=indexa-de-temas-conjugadas.js.map