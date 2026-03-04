# conjugador-español
Nota: los nombres de repositorios git y paquetes npm son restringidos a ASCII caracteres, así que este paquete no se puede escribir con "ñ" 

## Resumen / Overview

es🇪🇸: Esto es un conjugador de verbos, que sigue las reglas léxicas, en lugar de tablas de conjugación. Dado un infinitivo, determina las reglas léxicas que tiene que usar para la conjugación, y las aplica para conseguir las formas conjugadas.

en🇺🇸: This is a conjugator of spanish verb, that conjugates according to lexical rules, rather than look-up tables.  
Given an infinitive, It determines that léxical rules that must be used for its conjugation, and applies them to get the conjugated forms.

## Uso / usage

es🇪🇸: Dado un infinitivo de verbo y un modo y tiempo, el conjugador devuelva las formas conjugadas.
Las formas incluyen las permutaciones de la persona (1a, 2a, 3a) y el número (singular, plural). También devuela la forma para "vos" si es diferente de la forma para "tú".

en🇺🇸: Given a verb infinitive, and a mood and tense, the conjugator returns the conjugated forms of the verb.  
The conjugated forms include each of the six common forms, which are the permutations of the person (1st,2nd,3rd) and the (singular, plural) forms. It also returns the "vos" form, if it differs from the "tú' form.


Por ejemplo:  
```typescript
conjugateVerb("amar", "IndPres")
```
devuelva:  
```json
{"s1": "amo", "s2": "amas", "s3": "ama", "p1": "amamos", "p2": "amáis", "p3": "aman", "vos": "amás"}
```

El modo y tiempo son juntado y debe ser uno de estos códigos:
> "IndPres", "IndImp", "IndPret", "IndFut", "IndCond"
> "SubPres", "SubImp", "SubFut"
> "CmdPos", "CmdNeg"

dondé las partes son de los terminos lingüisticos y significan:  
**modos / moods**:
- "Ind"  = indicativo / indicative
- "Sub"  = subjuntivo / subjunctive
- "Cmd"  = imperativo / imperative 

**tiempos / tenses**:
- "Pres" = presente / present
- "Imp"  = imperfecto / imperfect
- "Pret" = pretérito / preterite
- "Fut"  = futuro / future
- "Cond" = condicional / conditional

**polaridad / polarity**
- "Pos"  = positivo / positive
- "Neg"  = negativo / negative

> Usamos "Cmd" para evitar confusión con "Imp" para imperfecto.

## Reglas lingúisticas / Linguistic Rules 

- [regular_verb_suffixes](./src/regular-verb-rules.ts)
- [stem_change_patterns](./src/stem-changes.ts)
- [verbos_con_cambios_morfológicos](./src/verbos-con-cambios-morfológicas.ts)


