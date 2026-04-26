import { version } from "./version.js";
import { license } from "./licencia.js";
// if a value is null, the verb is regular
// A verb that appears in this list has been verified with a test
export const verbos_con_cambios_morfológicos = {
    abandonar: {
      ok:true,
      },
    abatir: {
      ok:true,
      },
    abolir: {
      ok:true,
      }, // FIX: abolir no se conjuga como abolo, aboles, abola, etc. Se usan perífrasis: va a abolir
    abrasar: {
      ok:true,
      },
    abrazar: {
      ok:true,
      },
    abreviar: {
      ok:true,
      },
    abrir: {
      ok:true,
       excepciones_léxicas: { participio: ["abierto"] } },
    abrumar: {
      ok:true,
      },
    absolver: {
      ok:true,
       alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["absuelto"] } },
    absorber: {
      ok:true,
      },
    abstener: {
      ok:true,
       modelo: "tener" },
    abundar: {
      ok:true,
      },
    aburrir: {
      ok:true,
      },
    acabar: {
      ok:true,
       auxiliar: true },
    acaecer: {
      ok:true,
       impersonal: "gramatical" },
    acampar: {
      ok:true,
      },
    acarrear: {
      ok:true,
      },
    acceder: {
      ok:true,
      },
    acechar: {
      ok:true,
      },
    acelerar: {
      ok:true,
      },
    acentuar: {
      ok:true,
      },
    aceptar: {
      ok:true,
      },
    acercar: {
      ok:true,
      },
    acertar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    achicar: {
      ok:true,
      },
    acicalar: {
      ok:true,
      },
    acoger: {
      ok:true,
      },
    acometer: {
      ok:true,
      },
    acompañar: {
      ok:true,
      },
    acongojar: {
      ok:true,
      },
    aconsejar: {
      ok:true,
      },
    acontecer: {
      ok:true,
       impersonal: "gramatical" },
    acordar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    acostar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    acreditar: {
      ok:true,
      },
    actualizar: {
      ok:true,
      },
    actuar: {
      ok:true,
      },
    acudir: {
      ok:true,
      },
    acumular: {
      ok:true,
      },
    acusar: {
      ok:true,
      },
    adaptar: {
      ok:true,
      },
    adelgazar: {
      ok:true,
      },
    adherir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    adicionar: {
      ok:true,
      },
    adjuntar: {
      ok:true,
      },
    adobar: {
      ok:true,
      },
    adquirir: {
      ok:true,
       alternancia_vocálica: "i:ie",
        excepciones_léxicas: {
            reglas: {
                // FIX: try to use temas instead
                SubPres: { forms: { vos: [{ "forma": "adquier/as", "uso": "Riop." }, { "forma": "adquir/ás", "uso": "C.Am." }] } },
            }
        }
    },
    adueñar: {
      ok:true,
      },
    advenir: {
      ok:true,
       modelo: "venir" },
    advertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    afectar: {
      ok:true,
      },
    afeitar: {
      ok:true,
      },
    aferrar: {
      ok:true,
      },
    afirmar: {
      ok:true,
      },
    afligir: {
      ok:true,
      },
    aflojar: {
      ok:true,
      },
    aflorar: {
      ok:true,
      },
    afluir: {
      ok:true,
      },
    agachar: {
      ok:true,
      },
    agarrar: {
      ok:true,
      },
    agasajar: {
      ok:true,
      },
    agitar: {
      ok:true,
      },
    agolpar: {
      ok:true,
      },
    agradar: {
      ok:true,
      },
    agradecer: {
      ok:true,
      },
    agravar: {
      ok:true,
      },
    agredir: {
      ok:true,
      }, // FIX: Similar a abolir: falta presente de indicativo (excepto agredimos, agredís)
    agregar: {
      ok:true,
      },
    agrupar: {
      ok:true,
      },
    aguantar: {
      ok:true,
      },
    aguar: {
      ok:true,
      },
    agudizar: {
      ok:true,
      },
    ahijar: {
      ok:true,
      },
    ahitar: {
      ok:true,
      },
    ahorrar: {
      ok:true,
      },
    ahusar: {
      ok:true,
      },
    ahuyentar: {
      ok:true,
      },
    airar: {
      ok:true,
      },
    aislar: {
      ok:true,
      },
    ajustar: {
      ok:true,
      },
    alargar: {
      ok:true,
      },
    alarmar: {
      ok:true,
      },
    albergar: {
      ok:true,
      },
    alcanzar: {
      ok:true,
      },
    alcoholizar: {
      ok:true,
      },
    alegrar: {
      ok:true,
      },
    alejar: {
      ok:true,
      },
    alentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    aliar: {
      ok:true,
       modelo: "vaciar" },
    alimentar: {
      ok:true,
      },
    aliviar: {
      ok:true,
      },
    almorzar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    alocar: {
      ok:true,
      },
    alojar: {
      ok:true,
      },
    alquilar: {
      ok:true,
      },
    // alquiler:    no es un verbo según el DEL de la RAE
    alterar: {
      ok:true,
      },
    alucinar: {
      ok:true,
      },
    alumbrar: {
      ok:true,
      },
    amaestrar: {
      ok:true,
      },
    amalgamar: {
      ok:true,
      },
    amanecer: {
      ok:true,
       impersonal: "natural" },
    amar: {
      ok:true,
      },
    amarrar: {
      ok:true,
      },
    amasar: {
      ok:true,
      },
    amnistiar: {
      ok:true,
       modelo: "vaciar" },
    amohinar: {
      ok:true,
      },
    amortiguar: {
      ok:true,
      },
    amparar: {
      ok:true,
      },
    ampliar: {
      ok:true,
       modelo: "vaciar" },
    añadir: {
      ok:true,
      },
    anclar: {
      ok:true,
      },
    andar: {
      ok:true,
       modelo: "andar",
        auxiliar: true,
        tema_pretérito_del_modelo: "anduv",
        excepciones_léxicas: {
            reglas: {
                IndPret: { suffixes: { p3: ["ieron"] } },
            }
        }
    },
    anhelar: {
      ok:true,
      },
    anidar: {
      ok:true,
      },
    animar: {
      ok:true,
      },
    aniquilar: {
      ok:true,
      },
    anochecer: {
      ok:true,
       impersonal: "natural" },
    anotar: {
      ok:true,
      },
    ansiar: {
      ok:true,
       modelo: "vaciar" },
    anticuar: {
      ok:true,
      },
    anudar: {
      ok:true,
      },
    anunciar: {
      ok:true,
      },
    apacentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    apaciguar: {
      ok:true,
      },
    apagar: {
      ok:true,
      },
    aparar: {
      ok:true,
      },
    aparcar: {
      ok:true,
      },
    aparecer: {
      ok:true,
      },
    apartar: {
      ok:true,
      },
    apercibir: {
      ok:true,
      },
    apetecer: {
      ok:true,
      },
    aplastar: {
      ok:true,
      },
    aplaudir: {
      ok:true,
      },
    aplicar: {
      ok:true,
      },
    apoderar: {
      ok:true,
      },
    apostar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    apreciar: {
      ok:true,
      },
    aprehender: {
      ok:true,
      },
    aprender: {
      ok:true,
      },
    apresar: {
      ok:true,
      },
    apresurar: {
      ok:true,
      },
    apretar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    aprobar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    aprovechar: {
      ok:true,
      },
    apuñalar: {
      ok:true,
      },
    apuntalar: {
      ok:true,
      },
    apuntar: {
      ok:true,
      },
    apurar: {
      ok:true,
      },
    aquilatar: {
      ok:true,
      },
    argüir: {
      ok:true,
      },
    argumentar: {
      ok:true,
      },
    armar: {
      ok:true,
      },
    arraigar: {
      ok:true,
      },
    arrancar: {
      ok:true,
      },
    arrasar: {
      ok:true,
      },
    arrastrar: {
      ok:true,
      },
    arreglar: {
      ok:true,
      },
    arremeter: {
      ok:true,
      },
    arrendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    arrepentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    arribar: {
      ok:true,
      },
    arriesgar: {
      ok:true,
      },
    arrimar: {
      ok:true,
      },
    arrojar: {
      ok:true,
      },
    arropar: {
      ok:true,
      },
    arrugar: {
      ok:true,
      },
    arruinar: {
      ok:true,
      },
    arrullar: {
      ok:true,
      },
    asaltar: {
      ok:true,
      },
    ascender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    asegurar: {
      ok:true,
      },
    asentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    asentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    asesinar: {
      ok:true,
      },
    asignar: {
      ok:true,
      },
    asir: {
      ok:true,
       tema_presente_yo_del_modelo: ["asg"] },
    asistir: {
      ok:true,
      },
    asolar: {
      ok:true,
       alternancia_vocálica: "o:ue", acepta_regular: "variante" },
    asolear: {
      ok:true,
      },
    asomar: {
      ok:true,
      },
    asombrar: {
      ok:true,
      },
    aspirar: {
      ok:true,
      },
    asustar: {
      ok:true,
      },
    atajar: {
      ok:true,
      },
    atañer: {
      ok:true,
       impersonal: "gramatical" },
    atar: {
      ok:true,
      },
    atardecer: {
      ok:true,
       impersonal: "natural" },
    atemorizar: {
      ok:true,
      },
    atender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    atenuar: {
      ok:true,
      },
    aterir: {
      ok:true,
      }, // FIX: Solo se usa en formas donde la raíz no lleva "i" tónica: atería, aterido; No se usa atero, ateres
    atestiguar: {
      ok:true,
      },
    atiborrar: {
      ok:true,
      },
    atinar: {
      ok:true,
      },
    atorar: {
      ok:true,
      },
    atormentar: {
      ok:true,
      },
    atornillar: {
      ok:true,
      },
    atraer: {
      ok:true,
       modelo: "traer" },
    atravesar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    atrever: {
      ok:true,
      },
    atribuir: {
      ok:true,
      },
    atropellar: {
      ok:true,
      },
    aullar: {
      ok:true,
      },
    aumentar: {
      ok:true,
      },
    aunar: {
      ok:true,
      },
    aupar: {
      ok:true,
      },
    auscultar: {
      ok:true,
      },
    autoinfligir: {
      ok:true,
      },
    avenir: {
      ok:true,
       modelo: "venir" },
    avergonzar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    averiar: {
      ok:true,
       modelo: "vaciar" },
    averiguar: {
      ok:true,
      },
    avisar: {
      ok:true,
      },
    avizorar: {
      ok:true,
      },
    ayudar: {
      ok:true,
      },
    bailar: {
      ok:true,
      },
    bajar: {
      ok:true,
      },
    balbucear: {
      ok:true,
      },
    balbucir: {
      ok:true,
      }, // No sigue el modelo "lucir" // FIX: Presente de indicativo: se usa más balbuceo que balbuzco (la forma regular ha desplazado a la irregular)
    bañar: {
      ok:true,
      },
    barrer: {
      ok:true,
      },
    basar: {
      ok:true,
      },
    bastar: {
      ok:true,
      },
    batir: {
      ok:true,
      },
    beber: {
      ok:true,
      },
    bendecir: {
      ok:true,
       modelo: "maldecir" },
    besar: {
      ok:true,
      },
    biografiar: {
      ok:true,
       modelo: "vaciar" },
    boicotear: {
      ok:true,
      },
    bordar: {
      ok:true,
      },
    bordear: {
      ok:true,
      },
    borrar: {
      ok:true,
      },
    brillar: {
      ok:true,
      },
    brindar: {
      ok:true,
      },
    brotar: {
      ok:true,
      },
    bruñir: {
      ok:true,
      },
    bucear: {
      ok:true,
      },
    bullir: {
      ok:true,
      },
    buscar: {
      ok:true,
      },
    caber: {
      ok:true,
       modelo: "caber",
        tema_presente_yo_del_modelo: ["quep"],
        tema_pretérito_del_modelo: "cup",
        tema_futuro_del_modelo: "cabr"
    },
    caer: {
      ok:true,
       tema_presente_yo_del_modelo: ["caig"] },
    calcular: {
      ok:true,
      },
    calentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    calificar: {
      ok:true,
      },
    calmar: {
      ok:true,
      },
    calzar: {
      ok:true,
      },
    cambiar: {
      ok:true,
      },
    caminar: {
      ok:true,
      },
    cantar: {
      ok:true,
      },
    capacitar: {
      ok:true,
      },
    carcomer: {
      ok:true,
      },
    cargar: {
      ok:true,
      },
    casar: {
      ok:true,
      },
    catalogar: {
      ok:true,
      },
    categorizar: {
      ok:true,
      },
    causar: {
      ok:true,
      },
    cazar: {
      ok:true,
      },
    cegar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    celebrar: {
      ok:true,
      },
    cenar: {
      ok:true,
      },
    ceñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    censurar: {
      ok:true,
      },
    centrar: {
      ok:true,
      },
    cepillar: {
      ok:true,
      },
    cerner: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    cernir: {
      ok:true,
       modelo: "cernir", alternancia_vocálica: "e:ie (cernir)" },
    cerrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    cesar: {
      ok:true,
      },
    charlar: {
      ok:true,
      },
    chatear: {
      ok:true,
      },
    chirriar: {
      ok:true,
       modelo: "vaciar" },
    chismear: {
      ok:true,
      },
    chispear: {
      ok:true,
      },
    chocar: {
      ok:true,
      },
    chupar: {
      ok:true,
      },
    cimentar: {
      ok:true,
       alternancia_vocálica: "e:ie", acepta_regular: "primaria" },
    circular: {
      ok:true,
      },
    circunvenir: {
      ok:true,
       modelo: "venir" },
    citar: {
      ok:true,
      },
    clavar: {
      ok:true,
      },
    cobrar: {
      ok:true,
      },
    cocer: {
      ok:true,
       alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["cuez"],
        excepciones_léxicas: {
            participio: ["cocido", "cocho"],
            reglas: {
                SubPres: { temas: { p1: ["coz"], p2: ["coz"], vos: [{ "forma": "cuez", "uso": "Riop." }, { "forma": "coz", "uso": "C.Am." }] } },
                CmdPos: { temas: { p1: ["coz"] } }
            }
        }
    },
    cocinar: {
      ok:true,
      },
    codiciar: {
      ok:true,
      },
    codificar: {
      ok:true,
      },
    cohibir: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    coincidir: {
      ok:true,
      },
    colar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    colgar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    colindar: {
      ok:true,
      },
    colocar: {
      ok:true,
      },
    colorar: {
      ok:true,
      },
    colorear: {
      ok:true,
      },
    combar: {
      ok:true,
      },
    comenzar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    comer: {
      ok:true,
      },
    comparar: {
      ok:true,
      },
    compartir: {
      ok:true,
      },
    compensar: {
      ok:true,
      },
    competir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    complacer: {
      ok:true,
       modelo: "placer" },
    completar: {
      ok:true,
      },
    complicar: {
      ok:true,
      },
    componer: {
      ok:true,
       modelo: "poner" },
    comprar: {
      ok:true,
      },
    comprender: {
      ok:true,
      },
    comprobar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    comprometer: {
      ok:true,
      },
    comunicar: {
      ok:true,
      },
    concebir: {
      ok:true,
       modelo: "pedir" },
    concentrar: {
      ok:true,
      },
    conceptuar: {
      ok:true,
      },
    concernir: {
      ok:true,
       modelo: "cernir", impersonal: "gramatical" },
    concertar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    concienciar: {
      ok:true,
      },
    concluir: {
      ok:true,
      },
    concordar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    condenar: {
      ok:true,
      },
    condescender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    condicionar: {
      ok:true,
      },
    conducir: {
      ok:true,
       clase_conjugacional: "-ducir", tema_presente_yo_del_modelo: ["conduzc"], tema_pretérito_del_modelo: "conduj" }, // FIX: linguist: how can this pattern be generalized: "pretérito fuerte con -j" ?
    conectar: {
      ok:true,
      },
    confeccionar: {
      ok:true,
      },
    conferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    confesar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    confiar: {
      ok:true,
       modelo: "vaciar" },
    confirmar: {
      ok:true,
      },
    confiscar: {
      ok:true,
      },
    confluir: {
      ok:true,
      },
    conformar: {
      ok:true,
      },
    confortar: {
      ok:true,
      },
    confundir: {
      ok:true,
      },
    congelar: {
      ok:true,
      },
    congestionar: {
      ok:true,
      },
    congregar: {
      ok:true,
      },
    conjeturar: {
      ok:true,
      },
    conjugar: {
      ok:true,
       modelo: null }, // regular, no sigue el modelo de "jugar"
    conjurar: {
      ok:true,
      },
    conmover: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    conocer: {
      ok:true,
       modelo: "conocer", tema_presente_yo_del_modelo: ["conozc"] },
    conquerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    conquistar: {
      ok:true,
      },
    conseguir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    consensuar: {
      ok:true,
      },
    consentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    conservar: {
      ok:true,
      },
    considerar: {
      ok:true,
      },
    consistir: {
      ok:true,
      },
    consolar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    constatar: {
      ok:true,
      },
    consternar: {
      ok:true,
      },
    constituir: {
      ok:true,
      },
    construir: {
      ok:true,
      },
    consultar: {
      ok:true,
      },
    consumir: {
      ok:true,
      },
    contactar: {
      ok:true,
      },
    contagiar: {
      ok:true,
      },
    contaminar: {
      ok:true,
      },
    contar: {
      ok:true,
       alternancia_vocálica: "o:ue",
        excepciones_léxicas: {
            reglas: {
                // FIX: try to use temas instead
                SubPres: { forms: { vos: [{ "forma": "cuent/es", "uso": "Riop." }, { "forma": "cont/és", "uso": "C.Am." }] } }
            }
        }
    },
    contender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    contener: {
      ok:true,
      },
    contestar: {
      ok:true,
      },
    continuar: {
      ok:true,
      },
    contraer: {
      ok:true,
      },
    contrariar: {
      ok:true,
       modelo: "vaciar" },
    contrarrestar: {
      ok:true,
      },
    contratar: {
      ok:true,
      },
    contravenir: {
      ok:true,
       modelo: "venir" },
    contribuir: {
      ok:true,
      },
    controlar: {
      ok:true,
      },
    convenir: {
      ok:true,
       modelo: "venir" },
    conversar: {
      ok:true,
      },
    convertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    convivir: {
      ok:true,
      },
    cooperar: {
      ok:true,
      },
    corear: {
      ok:true,
      },
    corregir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    correr: {
      ok:true,
      },
    corresponder: {
      ok:true,
      },
    corroer: {
      ok:true,
       modelo: "roer" },
    cortar: {
      ok:true,
      },
    coser: {
      ok:true,
      },
    costar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    cotizar: {
      ok:true,
      },
    crear: {
      ok:true,
      },
    crecer: {
      ok:true,
      },
    creer: {
      ok:true,
      },
    criar: {
      ok:true,
       modelo: "vaciar", // FIX: hay varias formas con dos variantes: tb. pre-2010
        excepciones_léxicas: {
            reglas: {
                IndPres: { suffixes: { p2: ["ais"], vos: ["as"] } }, // elimina tilde por RAE-2010
                IndPret: { suffixes: { s1: ["e"], s3: ["o"] } }, // elimina tilde por RAE-2010
                SubPres: { suffixes: { p2: ["eis"] } }, // elimina tilde por RAE-2010
                CmdPos: { suffixes: { vos: ["a"] } } // elimina tilde por RAE-2010
            }
        }
    },
    cruzar: {
      ok:true,
      },
    cuadrar: {
      ok:true,
      },
    cubrir: {
      ok:true,
       excepciones_léxicas: { participio: ["cubierto"] } },
    cuestionar: {
      ok:true,
      },
    cuidar: {
      ok:true,
      },
    cultivar: {
      ok:true,
      },
    cumplir: {
      ok:true,
      },
    curar: {
      ok:true,
      },
    currar: {
      ok:true,
      },
    custodiar: {
      ok:true,
      },
    dañar: {
      ok:true,
      },
    dar: {
      ok:true,
       modelo: "dar",
        sufijo_presente_yo: "oy",
        excepciones_léxicas: {
            reglas: {
                // The default "-ar" verb pattern of accent the last sylable doesn't apply to vos forms of "dar", since "dás" is only one sylable
                IndPres: { suffixes: { p2: ["ais"], vos: null } },
                SubPres: { suffixes: { s1: ["é"], s3: ["é"], p2: ["eis"], vos: null } },
                IndPret: { suffixes: { s1: ["i"], s2: ["iste"], s3: ["io"], p1: ["imos"], p2: ["isteis"], p3: ["ieron"] } },
                CmdPos: { suffixes: { s3: ["é"], vos: null } }
            }
        }
    },
    debatir: {
      ok:true,
      },
    deber: {
      ok:true,
       auxiliar: true },
    debilitar: {
      ok:true,
      },
    decaer: {
      ok:true,
      },
    decidir: {
      ok:true,
      },
    decir: {
      ok:true,
       modelo: "decir",
        tema_presente_yo_del_modelo: ["dig"],
        tema_pretérito_del_modelo: "dij",
        tema_futuro_del_modelo: "dir",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            participio: ["dicho"],
            gerundio: ["diciendo"],
            imperativo_tú: ["di/"],
        }
    },
    declarar: {
      ok:true,
      },
    declinar: {
      ok:true,
      },
    dedicar: {
      ok:true,
      },
    defender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    deferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    definir: {
      ok:true,
      },
    deformar: {
      ok:true,
      },
    degollar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    dejar: {
      ok:true,
      },
    deleitar: {
      ok:true,
      },
    delinquir: {
      ok:true,
      },
    delirar: {
      ok:true,
      },
    demoler: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    demonizar: {
      ok:true,
      },
    demostrar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    denegar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    depender: {
      ok:true,
      },
    depositar: {
      ok:true,
      },
    depredar: {
      ok:true,
      },
    derramar: {
      ok:true,
      },
    derretir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    derribar: {
      ok:true,
      },
    derrotar: {
      ok:true,
      },
    derruir: {
      ok:true,
      },
    desactivar: {
      ok:true,
      },
    desafiar: {
      ok:true,
       modelo: "vaciar" },
    desaguar: {
      ok:true,
      },
    desahijar: {
      ok:true,
      },
    desahogar: {
      ok:true,
      },
    desahuciar: {
      ok:true,
      },
    desalentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    desaparecer: {
      ok:true,
      },
    desaprobar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    desarrollar: {
      ok:true,
      },
    desasir: {
      ok:true,
       tema_presente_yo_del_modelo: ["desasg"] },
    desatender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    desatinar: {
      ok:true,
      },
    desavenir: {
      ok:true,
       modelo: "venir" },
    desayunar: {
      ok:true,
      },
    desbaratar: {
      ok:true,
      },
    desbordar: {
      ok:true,
      },
    descafeinar: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    descansar: {
      ok:true,
      },
    descargar: {
      ok:true,
      },
    descartar: {
      ok:true,
      },
    descender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    descolgar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    descolorar: {
      ok:true,
      },
    desconcentrar: {
      ok:true,
      },
    desconceptuar: {
      ok:true,
      },
    desconectar: {
      ok:true,
      },
    desconfiar: {
      ok:true,
       modelo: "vaciar" },
    desconocer: {
      ok:true,
       modelo: "conocer" },
    descontar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    descreer: {
      ok:true,
      },
    describir: {
      ok:true,
       excepciones_léxicas: { participio: ["descrito"] } },
    descubrir: {
      ok:true,
       excepciones_léxicas: { participio: ["descubierto"] } },
    desdoblar: {
      ok:true,
      },
    desear: {
      ok:true,
      },
    desembocar: {
      ok:true,
      },
    desempeñar: {
      ok:true,
      },
    desenroscar: {
      ok:true,
      },
    desenvolver: {
      ok:true,
       modelo: "volver" },
    desesperanzar: {
      ok:true,
      },
    desesperar: {
      ok:true,
      },
    desestimar: {
      ok:true,
      },
    desfallecer: {
      ok:true,
      },
    desgajar: {
      ok:true,
      },
    desgarrar: {
      ok:true,
      },
    desgraciar: {
      ok:true,
      },
    deshabituar: {
      ok:true,
      },
    deshacer: {
      ok:true,
       modelo: "hacer" },
    deshierbar: {
      ok:true,
      },
    deshumanizar: {
      ok:true,
      },
    desistir: {
      ok:true,
      },
    desleír: {
      ok:true,
       modelo: "reír",
        clase_conjugacional: "-eír",
        excepciones_léxicas: {
            reglas: {
                // FIX: lingúista: es esto correcto?
                // Note: este no es obvio... por qué hay dos raíces diferentes: "desl" y "desli"
                // FIX: try to use temas y sufijos instead
                //                      no existe variante sin tilde proviene de "reír"
                IndPret: { forms: { s3: ["desl/ió"] } },
                //                      no existe variante sin tilde proviene de "reír"
                SubPres: { forms: { p2: ["desli/áis"] } },
            }
        }
    },
    deslizar: {
      ok:true,
      },
    deslucir: {
      ok:true,
       modelo: "lucir" },
    desmontar: {
      ok:true,
      },
    desobedecer: {
      ok:true,
      },
    desosar: {
      ok:true,
       alternancia_vocálica: "o:ue", ponga_hiato: true },
    despachar: {
      ok:true,
      },
    desparramar: {
      ok:true,
      },
    despedir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    despegar: {
      ok:true,
      },
    despejar: {
      ok:true,
      },
    despellejar: {
      ok:true,
      },
    desperdiciar: {
      ok:true,
      },
    despertar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    desplazar: {
      ok:true,
      },
    desplegar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    desplomar: {
      ok:true,
      },
    desplumar: {
      ok:true,
      },
    despojar: {
      ok:true,
      },
    despotricar: {
      ok:true,
      },
    despreciar: {
      ok:true,
      },
    desprender: {
      ok:true,
      },
    desproveer: {
      ok:true,
       modelo: "leer", excepciones_léxicas: { participio: ["desprovisto"] } },
    despuntar: {
      ok:true,
      },
    destartalar: {
      ok:true,
      },
    destellar: {
      ok:true,
      },
    desterrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    destilar: {
      ok:true,
      },
    destituir: {
      ok:true,
      },
    destrozar: {
      ok:true,
      },
    destruir: {
      ok:true,
      },
    desvaír: {
      ok:true,
      }, // FIX:
    desvariar: {
      ok:true,
       modelo: "vaciar" },
    desviar: {
      ok:true,
       modelo: "vaciar" },
    desvirtuar: {
      ok:true,
      },
    detallar: {
      ok:true,
      },
    detener: {
      ok:true,
      }, // FIX: setting modelo causes a failure, but it should work     {modelo: "tener"},
    deteriorar: {
      ok:true,
      },
    determinar: {
      ok:true,
      },
    devaluar: {
      ok:true,
      },
    devastar: {
      ok:true,
      },
    devenir: {
      ok:true,
       modelo: "venir" },
    devolver: {
      ok:true,
       modelo: "volver" },
    dibujar: {
      ok:true,
      },
    dictar: {
      ok:true,
      },
    diferenciar: {
      ok:true,
      },
    diferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    dificultar: {
      ok:true,
      },
    digerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    dignar: {
      ok:true,
      },
    diluir: {
      ok:true,
      },
    dirigir: {
      ok:true,
      },
    discernir: {
      ok:true,
       modelo: "cernir" },
    disciplinar: {
      ok:true,
      },
    disculpar: {
      ok:true,
      },
    diseñar: {
      ok:true,
      },
    disentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    disfrutar: {
      ok:true,
      },
    disminuir: {
      ok:true,
      },
    disolver: {
      ok:true,
       modelo: "volver" },
    disparar: {
      ok:true,
      },
    disponer: {
      ok:true,
      },
    distender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    distinguir: {
      ok:true,
      },
    distribuir: {
      ok:true,
      },
    disuadir: {
      ok:true,
      },
    divertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    dividir: {
      ok:true,
      },
    divorciar: {
      ok:true,
      },
    divulgar: {
      ok:true,
      },
    doblar: {
      ok:true,
      },
    doblegar: {
      ok:true,
      },
    documentar: {
      ok:true,
      },
    doler: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    dorar: {
      ok:true,
      },
    dormir: {
      ok:true,
       modelo: "dormir", alternancia_vocálica: "o:ue" },
    duchar: {
      ok:true,
      },
    dudar: {
      ok:true,
      },
    durar: {
      ok:true,
      },
    echar: {
      ok:true,
      },
    efectuar: {
      ok:true,
      },
    efluir: {
      ok:true,
      },
    ejercer: {
      ok:true,
       tema_presente_yo_del_modelo: ["ejerz"] }, // no sigue el modelo de conocer, no usa "zc"
    elaborar: {
      ok:true,
      },
    electrocutar: {
      ok:true,
      },
    elegir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    elevar: {
      ok:true,
      }, // FIX: linguist: solo en varios regiones hay: alternancia_vocálica: "e:ie"
    eliminar: {
      ok:true,
      },
    eludir: {
      ok:true,
      },
    embadurnar: {
      ok:true,
      },
    embarcar: {
      ok:true,
      },
    embargar: {
      ok:true,
      },
    embarrar: {
      ok:true,
      },
    embestir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    emborrachar: {
      ok:true,
      },
    emigrar: {
      ok:true,
      },
    emitir: {
      ok:true,
      },
    empacar: {
      ok:true,
      },
    empachar: {
      ok:true,
      },
    empañar: {
      ok:true,
      },
    empapar: {
      ok:true,
      },
    emparejar: {
      ok:true,
      },
    empatar: {
      ok:true,
      },
    empeorar: {
      ok:true,
      },
    emperejilar: {
      ok:true,
      },
    emperifollar: {
      ok:true,
      },
    empezar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    emplear: {
      ok:true,
      },
    emprender: {
      ok:true,
      },
    empujar: {
      ok:true,
      },
    enamorar: {
      ok:true,
      },
    encajar: {
      ok:true,
      },
    encaminar: {
      ok:true,
      },
    encantar: {
      ok:true,
      },
    encaramar: {
      ok:true,
      },
    encargar: {
      ok:true,
      },
    encender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    encerrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    enchufar: {
      ok:true,
      },
    encoger: {
      ok:true,
      },
    encomendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    encontrar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    enderezar: {
      ok:true,
      },
    enfermar: {
      ok:true,
      },
    enflaquecer: {
      ok:true,
      },
    enfrentar: {
      ok:true,
      },
    enfriar: {
      ok:true,
       modelo: "vaciar" },
    enfurecer: {
      ok:true,
      },
    engañar: {
      ok:true,
      },
    enganchar: {
      ok:true,
      },
    engordar: {
      ok:true,
      },
    engreír: {
      ok:true,
       modelo: "reír" },
    enjugar: {
      ok:true,
       modelo: null }, // regular, no sigue el modelo de "jugar"
    enlazar: {
      ok:true,
      },
    enloquecer: {
      ok:true,
      },
    enlucir: {
      ok:true,
       modelo: "lucir" },
    enmascarar: {
      ok:true,
      },
    enmendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    enojar: {
      ok:true,
      },
    enraizar: {
      ok:true,
       modelo: "enraizar",
        excepciones_léxicas: {
            reglas: {
                // FIX: lingüista: hay una regla por esta situación?
                // FIX: perhaps replace this with stress_last_vowel_of_s123p3_stem?
                IndPres: { forms: { s1: ["enraíz/o"], s2: ["enraíz/as"], s3: ["enraíz/a"], p3: ["enraíz/an"] } },
                SubPres: { forms: { s1: ["enraíc/e"], s2: ["enraíc/es"], s3: ["enraíc/e"], p3: ["enraíc/en"], vos: [{ "forma": "enraíc/es", "uso": "Riop." }, { "forma": "enraic/és", "uso": "C.Am." }] } },
                CmdPos: { forms: { s2: ["enraíz/a"], s3: ["enraíc/e"], p3: ["enraíc/en"] } }
            },
        }
    },
    enredar: {
      ok:true,
      },
    enroscar: {
      ok:true,
      },
    ensamblar: {
      ok:true,
      },
    ensanchar: {
      ok:true,
      },
    enseñar: {
      ok:true,
      },
    ensuciar: {
      ok:true,
      },
    entender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    enterar: {
      ok:true,
      },
    enterrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    entrar: {
      ok:true,
      },
    entrechocar: {
      ok:true,
      },
    entregar: {
      ok:true,
      },
    entrelucir: {
      ok:true,
       modelo: "lucir" },
    entrever: {
      ok:true,
       modelo: "ver" },
    entrevistar: {
      ok:true,
      },
    entristecer: {
      ok:true,
      },
    entumecer: {
      ok:true,
      },
    entusiasmar: {
      ok:true,
      },
    envenenar: {
      ok:true,
      },
    enviar: {
      ok:true,
       modelo: "vaciar" },
    envidiar: {
      ok:true,
      },
    envolver: {
      ok:true,
       modelo: "volver" },
    erguir: {
      ok:true,
       modelo: "erguir",
        alternancia_vocálica: "e:ie",
        tema_presente_yo_del_modelo: ["irg", "yerg"],
        excepciones_léxicas: {
            gerundio: ["irguiendo"],
            reglas: {
                // FIX: lingüista: hay una regla por esta situación?
                // FIX: perhaps replace this with temas y sufijos?
                // FIX: it looks like the sufjios are regular?
                IndPres: { forms: { s1: ["irg/o", "yerg/o"], s2: ["irgu/es", "yergu/es"], s3: ["irgu/e", "yergu/e"],
                        p3: ["irgu/en", "yergu/en"] } },
                IndPret: { forms: { s3: ["irgu/ió"],
                        p3: ["irgu/ieron"] } },
                SubPres: {
                    // Según ChatGPT: hay un conflicto entre irregularidad heredada vs. regularización del voseo
                    //    sí existe una forma voseante tipo yergás, pero en la práctica, muchas veces se dice ergás o se evita el verbo
                    forms: { vos: [{ "forma": "yerg/as", "uso": "Riop." }, { "forma": "irg/as", "uso": "C.Am." }, { "forma": "irg/ás", "uso": "C.Am." }] }
                    //    forms: { s1: ["irga", "yerga"],       s2: ["irgas", "yergas"],   s3: ["irga", "yerga"],
                    //             p1:	["irgamos", "yergamos"], p2: ["irgáis", "yergáis"], p3: ["irgan", "yergan"], vos: ["yergas"] }
                },
                SubImp: { tema_suplicativo: ["irguie"], stress_last_char_of_p1_stem: true },
                SubFut: { tema_suplicativo: ["irguie"], stress_last_char_of_p1_stem: true },
                CmdPos: { forms: { s2: ["irgu/e", "yergu/e"], s3: ["irg/a", "yerg/a"],
                        p1: ["irg/amos", "yerg/amos"], p3: ["irg/an", "yerg/an"] } }
            },
        }
    },
    errar: {
      ok:true,
      }, // FIX: tiene dos formas
    eructar: {
      ok:true,
      },
    escabullir: {
      ok:true,
      },
    escalar: {
      ok:true,
      },
    escanear: {
      ok:true,
      },
    escapar: {
      ok:true,
      },
    escarchar: {
      ok:true,
      },
    escoger: {
      ok:true,
      },
    esconder: {
      ok:true,
      },
    escribir: {
      ok:true,
       excepciones_léxicas: { participio: ["escrito"] } },
    escuchar: {
      ok:true,
      },
    esculpir: {
      ok:true,
      },
    esforzar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    espantar: {
      ok:true,
      },
    esparcir: {
      ok:true,
       tema_presente_yo_del_modelo: ["esparz"] },
    esperar: {
      ok:true,
      },
    espiar: {
      ok:true,
       modelo: "vaciar" },
    esquiar: {
      ok:true,
       modelo: "vaciar" },
    establecer: {
      ok:true,
      },
    estacionar: {
      ok:true,
      },
    estafar: {
      ok:true,
      },
    estallar: {
      ok:true,
      },
    estancar: {
      ok:true,
      },
    estandarizar: {
      ok:true,
      },
    estar: {
      ok:true,
       modelo: "estar",
        auxiliar: true,
        sufijo_presente_yo: "oy",
        tema_pretérito_del_modelo: "estuv",
        excepciones_léxicas: {
            imperativo_tú: ["est/á"],
            reglas: {
                IndPres: { suffixes: { s2: ["ás"], s3: ["á"], p3: ["án"] } },
                IndPret: { suffixes: { s1: ["e"], s2: ["iste"], s3: ["o"], p1: ["imos"], p2: ["isteis"], p3: ["ieron"] } },
                SubPres: { suffixes: { s1: ["é"], s2: ["és"], s3: ["é"], p3: ["én"], vos: null } },
                CmdPos: { suffixes: { s3: ["é"], p3: ["én"] } }
            }
        }
    },
    estatuir: {
      ok:true,
      },
    estimar: {
      ok:true,
      },
    estipular: {
      ok:true,
      },
    estofar: {
      ok:true,
      },
    estornudar: {
      ok:true,
      },
    estrangular: {
      ok:true,
      },
    estrechar: {
      ok:true,
      },
    estregar: {
      ok:true,
       alternancia_vocálica: "e:ie", acepta_regular: "variante" },
    estremecer: {
      ok:true,
      },
    estrenar: {
      ok:true,
      },
    estresar: {
      ok:true,
      },
    estropear: {
      ok:true,
      },
    estudiar: {
      ok:true,
      },
    evadir: {
      ok:true,
      },
    evaluar: {
      ok:true,
      },
    evitar: {
      ok:true,
      },
    examinar: {
      ok:true,
      },
    exasperar: {
      ok:true,
      },
    exceder: {
      ok:true,
      },
    exceptuar: {
      ok:true,
      },
    excluir: {
      ok:true,
      },
    exhalar: {
      ok:true,
      },
    exigir: {
      ok:true,
      },
    exiliar: {
      ok:true,
      },
    existir: {
      ok:true,
      },
    expandir: {
      ok:true,
      },
    expedir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    expiar: {
      ok:true,
       modelo: "vaciar" },
    explicar: {
      ok:true,
      },
    explorar: {
      ok:true,
      },
    exponer: {
      ok:true,
      },
    expresar: {
      ok:true,
      },
    extender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    extenuar: {
      ok:true,
      },
    extinguir: {
      ok:true,
      },
    extraer: {
      ok:true,
      },
    extrañar: {
      ok:true,
      },
    fabricar: {
      ok:true,
      },
    facilitar: {
      ok:true,
      },
    facturar: {
      ok:true,
      },
    fallar: {
      ok:true,
      },
    fallecer: {
      ok:true,
      },
    faltar: {
      ok:true,
      },
    fascinar: {
      ok:true,
      },
    felicitar: {
      ok:true,
      },
    festejar: {
      ok:true,
      },
    figurar: {
      ok:true,
      },
    fijar: {
      ok:true,
      },
    finalizar: {
      ok:true,
      },
    fingir: {
      ok:true,
      },
    firmar: {
      ok:true,
      },
    flanquear: {
      ok:true,
      },
    flaquear: {
      ok:true,
      },
    flexionar: {
      ok:true,
      },
    flotar: {
      ok:true,
      },
    fluctuar: {
      ok:true,
      },
    fluir: {
      ok:true,
      },
    formar: {
      ok:true,
      },
    forzar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    fotografiar: {
      ok:true,
       modelo: "vaciar" },
    fraguar: {
      ok:true,
      },
    frecuentar: {
      ok:true,
      },
    fregar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    freír: {
      ok:true,
       modelo: "reír" },
    frotar: {
      ok:true,
      },
    fruncir: {
      ok:true,
       tema_presente_yo_del_modelo: ["frunz"] },
    fulgurar: {
      ok:true,
      },
    fumar: {
      ok:true,
      },
    funcionar: {
      ok:true,
      },
    fundir: {
      ok:true,
      },
    ganar: {
      ok:true,
      },
    gastar: {
      ok:true,
      },
    gemir: {
      ok:true,
       modelo: "pedir" },
    generar: {
      ok:true,
      },
    germinar: {
      ok:true,
      },
    girar: {
      ok:true,
      },
    gobernar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    gotear: {
      ok:true,
      },
    gozar: {
      ok:true,
      },
    grabar: {
      ok:true,
      },
    graduar: {
      ok:true,
      },
    granizar: {
      ok:true,
       impersonal: "natural" },
    gritar: {
      ok:true,
      },
    gruir: {
      ok:true,
      },
    gruñir: {
      ok:true,
      },
    guardar: {
      ok:true,
      },
    guiar: {
      ok:true,
       modelo: "guiar",
        // clase_conjugacional: "-iar",
        // TODO: hay formas reformadas en la reforma ortográfica de la RAE de 2010, considera añadir estas formas
        // Otherwise, the accent is the only thing different from the regular forms
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true,
                    // FIX: perhaps replace this with temas o sufijos?
                    forms: { p2: ["guia/is", { "forma": "guiá/is", "uso": "pre-2010" }],
                        vos: ["gui/as", { "forma": "gui/ás", "uso": "pre-2010" }] } },
                IndPret: { forms: { s1: ["gui/e", { "forma": "gui/é", "uso": "pre-2010" }], s3: ["gui/o", { "forma": "gui/ó", "uso": "pre-2010" }], } },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true,
                    forms: { p2: ["gui/eis", { "forma": "gui/éis", "uso": "pre-2010" }] } },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true,
                    forms: { vos: ["gui/a"] } }
            }
        }
    },
    guisar: {
      ok:true,
      },
    gustar: {
      ok:true,
      },
    haber: {
      ok:true,
       modelo: "haber",
        tema_pretérito_del_modelo: "hub",
        tema_futuro_del_modelo: "habr",
        // impersonal: "estricto",  // Note: no modela esta situación rara de dos significados: auxiliar y impersonal estricto
        auxiliar: true,
        excepciones_léxicas: {
            supletivo: true,
            // FIX: perhaps replace this with temas y sufijos?  
            imperativo_tú: [{ "forma": "h/e", "uso": "arcaico" }, { "forma": "hab/e", "uso": "arcaico" }],
            reglas: {
                IndPres: { forms: { s1: ["h/e"], s2: ["h/as"], s3: ["h/a", { forma: "h/ay", uso: "impersonal" }],
                        p1: ["h/emos"], p3: ["h/an"], vos: null } },
                SubPres: { tema_suplicativo: ["hay"] },
                CmdPos: { tema_suplicativo: ["hay"],
                    forms: { p2: ["hab/ed"], vos: null } }
            }
        }
    },
    habitar: {
      ok:true,
      },
    habituar: {
      ok:true,
      },
    hablar: {
      ok:true,
      },
    hacer: {
      ok:true,
       modelo: "hacer",
        clase_conjugacional: "-acer",
        tema_presente_yo_del_modelo: ["hag"],
        tema_pretérito_del_modelo: "hic",
        tema_futuro_del_modelo: "har",
        excepciones_léxicas: {
            participio: ["hecho"],
            imperativo_tú: ["haz/"],
            reglas: {
                // FIX: linguist: should "hizo" be managed with sound preserving transformations?
                IndPret: { forms: { s3: ["hiz/o"] } },
                SubPres: { forms: { vos: [{ forma: "hag/as", uso: "Riop." }, { forma: "hag/ás", uso: "C.Am." }] } },
            }
        }
    },
    halar: {
      ok:true,
      },
    hallar: {
      ok:true,
      },
    hartar: {
      ok:true,
      },
    heder: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    helar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    hendir: {
      ok:true,
       modelo: "cernir" },
    herir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    herrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    hervir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    hilvanar: {
      ok:true,
      },
    hornear: {
      ok:true,
      },
    hospedar: {
      ok:true,
      },
    huir: {
      ok:true,
       /* se conjuga de forma regular, solo hay reglas especiales de ortografía */},
    humanizar: {
      ok:true,
      },
    humillar: {
      ok:true,
      },
    hundir: {
      ok:true,
      },
    identificar: {
      ok:true,
      },
    ignorar: {
      ok:true,
      },
    igualar: {
      ok:true,
      },
    iluminar: {
      ok:true,
      },
    imaginar: {
      ok:true,
      },
    imbuir: {
      ok:true,
      },
    impedir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    implantar: {
      ok:true,
      },
    implicar: {
      ok:true,
      },
    implorar: {
      ok:true,
      },
    imponer: {
      ok:true,
      },
    importar: {
      ok:true,
      },
    imposibilitar: {
      ok:true,
      },
    impregnar: {
      ok:true,
      },
    impresionar: {
      ok:true,
      },
    imprimir: {
      ok:true,
       excepciones_léxicas: { participio: ["imprimido", "impreso"] } },
    inclinar: {
      ok:true,
      },
    incluir: {
      ok:true,
      },
    incorporar: {
      ok:true,
      },
    incrementar: {
      ok:true,
      },
    incrustar: {
      ok:true,
      },
    incubar: {
      ok:true,
      },
    incumbir: {
      ok:true,
      },
    indagar: {
      ok:true,
      },
    indexar: {
      ok:true,
      },
    indicar: {
      ok:true,
      },
    inducir: {
      ok:true,
      },
    infectar: {
      ok:true,
      },
    inferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    infestar: {
      ok:true,
      },
    infligir: {
      ok:true,
      },
    influir: {
      ok:true,
      },
    informar: {
      ok:true,
      },
    infundir: {
      ok:true,
      },
    ingeniar: {
      ok:true,
      },
    ingerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    ingresar: {
      ok:true,
      },
    inhalar: {
      ok:true,
      },
    iniciar: {
      ok:true,
      },
    injerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    inmigrar: {
      ok:true,
      },
    inmiscuir: {
      ok:true,
      },
    inmortalizar: {
      ok:true,
      },
    inmunizar: {
      ok:true,
      },
    inquietar: {
      ok:true,
      },
    inquirir: {
      ok:true,
       alternancia_vocálica: "i:ie" },
    inscribir: {
      ok:true,
       excepciones_léxicas: { participio: ["inscrito"] } },
    insertar: {
      ok:true,
      },
    insinuar: {
      ok:true,
      },
    insistir: {
      ok:true,
      },
    inspeccionar: {
      ok:true,
      },
    inspirar: {
      ok:true,
      },
    instalar: {
      ok:true,
      },
    instar: {
      ok:true,
      },
    instituir: {
      ok:true,
      },
    instruir: {
      ok:true,
      },
    integrar: {
      ok:true,
      },
    intentar: {
      ok:true,
      },
    interactuar: {
      ok:true,
      },
    intercalar: {
      ok:true,
      },
    intercambiar: {
      ok:true,
      },
    interesar: {
      ok:true,
      },
    interferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    interpretar: {
      ok:true,
      },
    interrogar: {
      ok:true,
      },
    interrumpir: {
      ok:true,
      },
    intervenir: {
      ok:true,
       modelo: "venir" },
    intoxicar: {
      ok:true,
      },
    intrigar: {
      ok:true,
      },
    introducir: {
      ok:true,
      },
    intuir: {
      ok:true,
       /* modelo: "huir" */},
    inundar: {
      ok:true,
      },
    invadir: {
      ok:true,
      },
    invertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    investir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    invitar: {
      ok:true,
      },
    ir: {
      ok:true,
       modelo: "ir",
        auxiliar: true,
        no_admite_prefijos: true,
        tema_pretérito_del_modelo: "fu",
        sufijo_presente_yo: "oy",
        excepciones_léxicas: {
            supletivo: true,
            participio: ["ido"],
            gerundio: ["yendo"],
            reglas: {
                // The default "-ir" verb pattern of accent the last sylable doesn't apply to vos forms of "ir", since "ir" is only one sylable
                IndPres: { forms: { s1: ["v/oy"], s2: ["v/as"], s3: ["v/a"], p1: ["v/amos"], p2: ["v/ais"], p3: ["v/an"], vos: null } },
                SubPres: { tema_suplicativo: ["vay"],
                    forms: { vos: [{ "forma": "vay/as", "uso": "Riop." }, { "forma": "vay/ás", "uso": "C.Am." }] }
                },
                IndPret: { forms: { s1: ["fu/i"], s2: ["fu/iste"], s3: ["fu/e"], p1: ["fu/imos"], p2: ["fu/isteis"], p3: ["fu/eron"] } },
                IndImp: { forms: { s1: ["ib/a"], s2: ["ib/as"], s3: ["ib/a"], p1: ["íb/amos"], p2: ["ib/ais"], p3: ["ib/an"] } },
                // IndFut: uses regular conjugation
                // IndCond: uses regular conjugation
                CmdPos: { forms: { s2: ["v/e"], s3: ["vay/a"], p1: ["vay/amos", "v/amos"], p3: ["vay/an"], vos: ["and/á"] } }
            }
        }
    },
    irritar: {
      ok:true,
      },
    jactar: {
      ok:true,
      },
    jalar: {
      ok:true,
      },
    josear: {
      ok:true,
      },
    jubilar: {
      ok:true,
      },
    jugar: {
      ok:true,
       alternancia_vocálica: "u:ue" },
    juntar: {
      ok:true,
      },
    jurar: {
      ok:true,
      },
    justificar: {
      ok:true,
      },
    juzgar: {
      ok:true,
      },
    lagrimear: {
      ok:true,
      },
    lamentar: {
      ok:true,
      },
    largar: {
      ok:true,
      },
    lastimar: {
      ok:true,
      },
    lavar: {
      ok:true,
      },
    leer: {
      ok:true,
       modelo: "leer", clase_conjugacional: "-eer" },
    levantar: {
      ok:true,
      },
    licenciar: {
      ok:true,
      },
    limpiar: {
      ok:true,
      },
    llamar: {
      ok:true,
      },
    llegar: {
      ok:true,
      },
    llenar: {
      ok:true,
      },
    llevar: {
      ok:true,
      },
    llorar: {
      ok:true,
      },
    llover: {
      ok:true,
       alternancia_vocálica: "o:ue", impersonal: "natural" },
    lloviznar: {
      ok:true,
       impersonal: "natural" },
    localizar: {
      ok:true,
      },
    lograr: {
      ok:true,
      },
    luchar: {
      ok:true,
      },
    lucir: {
      ok:true,
       modelo: "lucir", tema_presente_yo_del_modelo: ["luzc"] },
    lustrar: {
      ok:true,
      },
    maldecir: {
      ok:true,
       modelo: "maldecir",
        tema_presente_yo_del_modelo: ["maldig"],
        tema_pretérito_del_modelo: "maldij",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            imperativo_tú: ["maldic/e"],
            participio: ["maldecido", "maldito"],
        }
    },
    malgastar: {
      ok:true,
      },
    malquerer: {
      ok:true,
       modelo: "querer" },
    mandar: {
      ok:true,
      },
    manejar: {
      ok:true,
      },
    maniatar: {
      ok:true,
      },
    manifestar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    mantener: {
      ok:true,
      },
    maquillar: {
      ok:true,
      },
    marcar: {
      ok:true,
      },
    marchar: {
      ok:true,
      },
    martillar: {
      ok:true,
      },
    matar: {
      ok:true,
      },
    matchear: {
      ok:true,
      },
    maullar: {
      ok:true,
      },
    mecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["mez"] },
    medir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    meditar: {
      ok:true,
      },
    mejorar: {
      ok:true,
      },
    mencionar: {
      ok:true,
      },
    mendigar: {
      ok:true,
      },
    menguar: {
      ok:true,
      },
    menospreciar: {
      ok:true,
      },
    menstruar: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    mentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    mentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    merecer: {
      ok:true,
      },
    merendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    meter: {
      ok:true,
      },
    mirar: {
      ok:true,
      },
    modelar: {
      ok:true,
      },
    modernizar: {
      ok:true,
      },
    modificar: {
      ok:true,
      },
    molestar: {
      ok:true,
      },
    monetizar: {
      ok:true,
      },
    montar: {
      ok:true,
      },
    morder: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    morir: {
      ok:true,
       alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["muerto"] } },
    mostrar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    mover: {
      ok:true,
       modelo: "mover", alternancia_vocálica: "o:ue" },
    mudar: {
      ok:true,
      },
    multiplicar: {
      ok:true,
      },
    murmurar: {
      ok:true,
      },
    nacer: {
      ok:true,
       tema_presente_yo_del_modelo: ["nazc"] },
    nadar: {
      ok:true,
      },
    necesitar: {
      ok:true,
      },
    negar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    nevar: {
      ok:true,
       alternancia_vocálica: "e:ie", impersonal: "natural" },
    nombrar: {
      ok:true,
      },
    normalizar: {
      ok:true,
      },
    notar: {
      ok:true,
      },
    nublar: {
      ok:true,
      },
    nutrir: {
      ok:true,
      },
    obedecer: {
      ok:true,
      },
    obligar: {
      ok:true,
      },
    observar: {
      ok:true,
      },
    obstruir: {
      ok:true,
      },
    obtener: {
      ok:true,
       modelo: "tener" },
    ocasionar: {
      ok:true,
      },
    ocluir: {
      ok:true,
      },
    ocupar: {
      ok:true,
      },
    ocurrir: {
      ok:true,
      },
    odiar: {
      ok:true,
      },
    ofrecer: {
      ok:true,
      },
    ofuscar: {
      ok:true,
      },
    oír: {
      ok:true,
       modelo: "oír", // FIX: linguist: why is this a class?
        tema_presente_yo_del_modelo: ["oig"],
        excepciones_léxicas: {
            reglas: {
                CmdPos: { suffixes: { p2: ["íd"], } }
            }
        }
    },
    oler: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    olvidar: {
      ok:true,
      },
    operar: {
      ok:true,
      },
    oponer: {
      ok:true,
       modelo: "poner" },
    organizar: {
      ok:true,
      },
    originar: {
      ok:true,
      },
    orinar: {
      ok:true,
      },
    padecer: {
      ok:true,
      },
    pagar: {
      ok:true,
      },
    parar: {
      ok:true,
      },
    parecer: {
      ok:true,
      },
    parpadear: {
      ok:true,
      },
    participar: {
      ok:true,
      },
    partir: {
      ok:true,
      },
    partyar: {
      ok:true,
      },
    pasar: {
      ok:true,
      },
    pasear: {
      ok:true,
      },
    pasmar: {
      ok:true,
      },
    patear: {
      ok:true,
      },
    patinar: {
      ok:true,
      },
    patrullar: {
      ok:true,
      },
    pausar: {
      ok:true,
      },
    pedalear: {
      ok:true,
      },
    pedir: {
      ok:true,
       modelo: "pedir",
        alternancia_vocálica: "e:i",
        //   excepciones_léxicas: {
        //         reglas: {
        //             SubPres: { 
        //                 suffixes: { vos: [{"forma":"as","uso":"Riop."},{"forma":"ás","uso":"C.Am."}] }
        //             }
        //         }
        //     }
    },
    pegar: {
      ok:true,
      },
    peinar: {
      ok:true,
      },
    penetrar: {
      ok:true,
      },
    pensar: {
      ok:true,
       alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            reglas: {
                SubPres: { forms: { vos: [{ "forma": "piens/es", "uso": "Riop." }, { "forma": "pens/és", "uso": "C.Am." }] } }
            }
        }
    },
    perder: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    perdonar: {
      ok:true,
      },
    perforar: {
      ok:true,
      },
    permanecer: {
      ok:true,
      },
    permitir: {
      ok:true,
      },
    perpetrar: {
      ok:true,
      },
    perpetuar: {
      ok:true,
      },
    perseguir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    pertenecer: {
      ok:true,
      },
    pervertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    pesar: {
      ok:true,
      },
    pescar: {
      ok:true,
      },
    pestañear: {
      ok:true,
      },
    petrificar: {
      ok:true,
      },
    piar: {
      ok:true,
       modelo: "vaciar",
        excepciones_léxicas: {
            reglas: {
                IndPres: { forms: { p2: ["pi/ais", { "forma": "pi/áis", "uso": "pre-2010" }], vos: ["pi/as", { "forma": "pi/ás", "uso": "pre-2010" }] } },
                IndPret: { forms: { s1: ["pi/e", { "forma": "pi/é", "uso": "pre-2010" }], s3: ["pi/o", { "forma": "pi/ó", "uso": "pre-2010" }] } },
                SubPres: { forms: { p2: ["pi/eis", { "forma": "pi/éis", "uso": "pre-2010" }] } },
                CmdPos: { forms: { vos: ["pi/a", { "forma": "pi/á", "uso": "pre-2010" }] } }
            },
        }
    },
    picar: {
      ok:true,
      },
    picotear: {
      ok:true,
      },
    pintar: {
      ok:true,
      },
    pisar: {
      ok:true,
      },
    placer: {
      ok:true,
       modelo: "placer", tema_presente_yo_del_modelo: ["plazc"] },
    planchar: {
      ok:true,
      },
    planificar: {
      ok:true,
      },
    plasmar: {
      ok:true,
      },
    platicar: {
      ok:true,
      },
    plegar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    poblar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    poder: {
      ok:true,
       modelo: "poder",
        auxiliar: true,
        alternancia_vocálica: "o:ue",
        tema_pretérito_del_modelo: "pud",
        tema_futuro_del_modelo: "podr",
        excepciones_léxicas: { gerundio_tema_cambio_excepcional: "o:u" }
    },
    poner: {
      ok:true,
       modelo: "poner",
        tema_presente_yo_del_modelo: ["pong"],
        tema_pretérito_del_modelo: "pus",
        tema_futuro_del_modelo: "pondr",
        excepciones_léxicas: {
            participio: ["puesto"],
            imperativo_tú: ["pon/"],
            reglas: {
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } }
            }
        }
    },
    pordiosear: {
      ok:true,
      },
    portar: {
      ok:true,
      },
    posar: {
      ok:true,
      },
    poseer: {
      ok:true,
      },
    practicar: {
      ok:true,
      },
    precluir: {
      ok:true,
      },
    preferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    preguntar: {
      ok:true,
      },
    prender: {
      ok:true,
      },
    preocupar: {
      ok:true,
      },
    preparar: {
      ok:true,
      },
    presenciar: {
      ok:true,
      },
    presentar: {
      ok:true,
      },
    presentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    presionar: {
      ok:true,
      },
    prestar: {
      ok:true,
      },
    pretender: {
      ok:true,
      },
    prevenir: {
      ok:true,
       modelo: "venir" },
    prever: {
      ok:true,
       modelo: "ver" },
    principiar: {
      ok:true,
      },
    probar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    proceder: {
      ok:true,
      },
    procesar: {
      ok:true,
      },
    procurar: {
      ok:true,
      },
    producir: {
      ok:true,
      },
    proferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    prohibir: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    prohijar: {
      ok:true,
      },
    proliferar: {
      ok:true,
      },
    prometer: {
      ok:true,
      },
    promover: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    pronunciar: {
      ok:true,
      },
    proponer: {
      ok:true,
      },
    proporcionar: {
      ok:true,
      },
    propugnar: {
      ok:true,
      },
    proseguir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    prostituir: {
      ok:true,
      },
    proteger: {
      ok:true,
      },
    proveer: {
      ok:true,
       excepciones_léxicas: { participio: ["proveído", "provisto"] } },
    provenir: {
      ok:true,
       modelo: "venir" },
    provocar: {
      ok:true,
      },
    publicar: {
      ok:true,
      },
    pudrir: {
      ok:true,
       excepciones_léxicas: { participio: ["podrido"] } },
    pulir: {
      ok:true,
      },
    puntuar: {
      ok:true,
      },
    quebrantar: {
      ok:true,
      },
    quebrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    quedar: {
      ok:true,
      },
    quejar: {
      ok:true,
      },
    quemar: {
      ok:true,
      },
    querer: {
      ok:true,
       modelo: "querer",
        tema_pretérito_del_modelo: "quis",
        tema_futuro_del_modelo: "querr",
        alternancia_vocálica: "e:ie"
    },
    quitar: {
      ok:true,
      },
    radicar: {
      ok:true,
      },
    ramificar: {
      ok:true,
      },
    raspar: {
      ok:true,
      },
    rastrear: {
      ok:true,
      },
    realizar: {
      ok:true,
      },
    reanudar: {
      ok:true,
      },
    rearmar: {
      ok:true,
      },
    rebanar: {
      ok:true,
      },
    rebelar: {
      ok:true,
      },
    rebosar: {
      ok:true,
      },
    recetar: {
      ok:true,
      },
    rechazar: {
      ok:true,
      },
    rechinar: {
      ok:true,
      },
    recibir: {
      ok:true,
      },
    reciclar: {
      ok:true,
      },
    reclamar: {
      ok:true,
      },
    recluir: {
      ok:true,
      },
    recobrar: {
      ok:true,
      },
    recocer: {
      ok:true,
       alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["recuez"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["recoz"], p2: ["recoz"], vos: [{ "forma": "recuez", "uso": "Riop." }, { "forma": "recoz", "uso": "C.Am." }] } },
                CmdPos: { temas: { p1: ["recoz"] } }
            }
        }
    },
    recoger: {
      ok:true,
      },
    recolectar: {
      ok:true,
      },
    recomendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    recomenzar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    reconfortar: {
      ok:true,
      },
    reconocer: {
      ok:true,
       modelo: "conocer" },
    reconstituir: {
      ok:true,
      },
    reconstruir: {
      ok:true,
      },
    recontar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    reconvenir: {
      ok:true,
       modelo: "venir" },
    recordar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    recorrer: {
      ok:true,
      },
    recuperar: {
      ok:true,
      },
    recurrir: {
      ok:true,
      },
    redistribuir: {
      ok:true,
      },
    redituar: {
      ok:true,
      },
    reducir: {
      ok:true,
      },
    reemplazar: {
      ok:true,
      },
    reencontrar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    reenviar: {
      ok:true,
       modelo: "vaciar" },
    reevaluar: {
      ok:true,
      },
    referir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    reflejar: {
      ok:true,
      },
    refluir: {
      ok:true,
      },
    reformar: {
      ok:true,
      },
    reforzar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    refugiar: {
      ok:true,
      },
    refutar: {
      ok:true,
      },
    regalar: {
      ok:true,
      },
    regañar: {
      ok:true,
      },
    regar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    regir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    registrar: {
      ok:true,
      },
    regresar: {
      ok:true,
      },
    regular: {
      ok:true,
      },
    rehilar: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    rehogar: {
      ok:true,
      },
    rehuir: {
      ok:true,
      },
    rehusar: {
      ok:true,
      },
    reinstalar: {
      ok:true,
      },
    reír: {
      ok:true,
       modelo: "reír",
        alternancia_vocálica: "e:í",
        excepciones_léxicas: {
            participio: ["reído"],
            reglas: {
                // FIX: linguist: are there other reglas I can use?
                // FIX: bring in alternate forms
                // FIX: must formalize the relationship of CmdPos on SubPres
                IndPres: { stress_last_vowel_of_s123p3_stem: true,
                    // FIX: considera un campo "formas_adicionales", para que no tengamos repetir la forma que no cambia
                    // FIX: es posible que podamos usar una regla de ortografía (rompe el diptongo) por el resto?
                    forms: { s1: ["rí/o"], /* s2: ["ríes"], s3: ["ríe"],*/ p1: ["re/ímos"], p2: ["re/ís"], /*p3: ["ríen"],   vos: ["reís"], */ } },
                IndPret: { forms: { s3: ["r/io", { "forma": "r/ió", "uso": "pre-2010" }], /* p3: ["rieron"],*/ } },
                SubPres: { tema_suplicativo: ["rí"], stress_last_vowel_of_s123p3_stem: true,
                    forms: { p1: ["ri/amos"], p2: ["ri/ais", { "forma": "ri/áis", "uso": "pre-2010" }], /*p3: ["rían"]*/ } },
                CmdPos: { tema_suplicativo: ["rí"],
                    forms: { p1: ["ri/amos"], p2: ["re/íd"], vos: ["re/í"] } }
            },
        }
    },
    relajar: {
      ok:true,
      },
    relampaguear: {
      ok:true,
      },
    relucir: {
      ok:true,
       modelo: "lucir" },
    rememorar: {
      ok:true,
      },
    remendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    remodelar: {
      ok:true,
      },
    remorder: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    remover: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    remplazar: {
      ok:true,
      },
    rendir: {
      ok:true,
       modelo: "pedir" },
    reñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    renovar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    renunciar: {
      ok:true,
      },
    reparar: {
      ok:true,
      },
    repartir: {
      ok:true,
      },
    repasar: {
      ok:true,
      },
    repercutir: {
      ok:true,
      },
    repetir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    replicar: {
      ok:true,
      },
    reposar: {
      ok:true,
      },
    representar: {
      ok:true,
      },
    reprimir: {
      ok:true,
      },
    reprobar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    requerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    resbalar: {
      ok:true,
      },
    resentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    resfriar: {
      ok:true,
       modelo: "vaciar" },
    resistir: {
      ok:true,
      },
    resollar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    resolver: {
      ok:true,
       modelo: "mover", excepciones_léxicas: { participio: ["resuelto"] } },
    respetar: {
      ok:true,
      },
    respirar: {
      ok:true,
      },
    resplandecer: {
      ok:true,
      },
    responder: {
      ok:true,
      },
    restar: {
      ok:true,
      },
    restaurar: {
      ok:true,
      },
    restituir: {
      ok:true,
      },
    restringir: {
      ok:true,
      },
    resultar: {
      ok:true,
      },
    retener: {
      ok:true,
       modelo: "tener" },
    retorcer: {
      ok:true,
      
        // FIX: simplifica como prefijo="re" + "torcer"
        alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["retuerz"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["retorz"], p2: ["retorz"], vos: [{ "forma": "retuerz", "uso": "Riop." }, { "forma": "retorz", "uso": "C.Am." }] } },
                CmdPos: { temas: { p1: ["retorz"] } }
            }
        }
    },
    retornar: {
      ok:true,
      },
    retozar: {
      ok:true,
      },
    retribuir: {
      ok:true,
      },
    retumbar: {
      ok:true,
      },
    reunir: {
      ok:true,
       alternancia_vocálica: "u:ú" },
    revaluar: {
      ok:true,
      },
    revelar: {
      ok:true,
      },
    reventar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    revertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    revisar: {
      ok:true,
      },
    revolver: {
      ok:true,
       modelo: "volver" },
    rezagar: {
      ok:true,
      },
    rimar: {
      ok:true,
      },
    robar: {
      ok:true,
      },
    rociar: {
      ok:true,
       modelo: "vaciar" },
    rodar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    roer: {
      ok:true,
       modelo: "roer", tema_presente_yo_del_modelo: ["roig", "roy"], acepta_regular: "primaria",
        excepciones_léxicas: {
            reglas: {
                IndPres: { temas: { vos: ["ro"] } },
                SubPres: { forms: { vos: [{ "forma": "ro/as", "uso": "Riop." }, { "forma": "ro/ás", "uso": "C.Am." }] } },
                CmdPos: { temas: { vos: ["ro"] } },
            }
        }
    },
    rogar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    romper: {
      ok:true,
       excepciones_léxicas: { participio: ["roto"] } },
    rondar: {
      ok:true,
      },
    rozar: {
      ok:true,
      },
    rugir: {
      ok:true,
      },
    saber: {
      ok:true,
       modelo: "saber",
        tema_pretérito_del_modelo: "sup",
        tema_futuro_del_modelo: "sabr",
        excepciones_léxicas: {
            reglas: {
                // similar a caber
                IndPres: { forms: { s1: ["s/é"] } },
                SubPres: { tema_suplicativo: ["sep"] },
                CmdPos: { forms: { s3: ["sep/a"], p1: ["sep/amos"], p3: ["sep/an"] } }
            }
        }
    },
    saborear: {
      ok:true,
      },
    sacar: {
      ok:true,
      },
    saciar: {
      ok:true,
      },
    sacudir: {
      ok:true,
      },
    sahumar: {
      ok:true,
      },
    saldar: {
      ok:true,
      },
    salir: {
      ok:true,
       modelo: "salir",
        tema_presente_yo_del_modelo: ["salg"],
        tema_futuro_del_modelo: "saldr",
        excepciones_léxicas: { imperativo_tú: ["sal/"] }
    },
    salpimentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    saludar: {
      ok:true,
      },
    sanar: {
      ok:true,
      },
    sangrar: {
      ok:true,
      },
    santiguar: {
      ok:true,
      },
    satisfacer: {
      ok:true,
       modelo: "hacer" },
    secar: {
      ok:true,
      },
    secuestrar: {
      ok:true,
      },
    seducir: {
      ok:true,
      },
    seguir: {
      ok:true,
      
        // NOTE: this does not conjugate as a "-uir" clase infinitivo
        tema_presente_yo_del_modelo: ["sig"],
        alternancia_vocálica: "e:i",
    },
    seleccionar: {
      ok:true,
      },
    sellar: {
      ok:true,
      },
    sembrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    señalar: {
      ok:true,
      },
    sentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    sentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    separar: {
      ok:true,
      },
    ser: {
      ok:true,
       modelo: "ser",
        auxiliar: true,
        no_admite_prefijos: true,
        tema_pretérito_del_modelo: "fu",
        excepciones_léxicas: {
            supletivo: true,
            reglas: {
                IndPres: { forms: { s1: ["s/oy"], s2: ["er/es"], s3: ["/es"], p1: ["s/omos"], p2: ["s/ois"], p3: ["s/on"], vos: ["s/os"] } },
                IndImp: { forms: { s1: ["er/a"], s2: ["er/as"], s3: ["er/a"], p1: ["ér/amos"], p2: ["er/ais"], p3: ["er/an"] } },
                IndPret: { forms: { s1: ["fu/i"], s2: ["fu/iste"], s3: ["fu/e"], p1: ["fu/imos"], p2: ["fu/isteis"], p3: ["fu/eron"] } },
                SubPres: { tema_suplicativo: ["se"],
                    forms: { vos: [{ "forma": "se/as", "uso": "Riop." }, { "forma": "se/ás", "uso": "C.Am." }] } },
                CmdPos: { forms: { s2: ["sé/"], s3: ["s/ea"], p1: ["se/amos"], p3: ["se/an"], vos: null } }
            }
        }
    },
    serrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    servir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    sesgar: {
      ok:true,
      },
    significar: {
      ok:true,
      },
    simplificar: {
      ok:true,
      },
    sincerar: {
      ok:true,
      },
    situar: {
      ok:true,
      },
    sobar: {
      ok:true,
      },
    sobrecargar: {
      ok:true,
      },
    sobrecoger: {
      ok:true,
      },
    sobrehilar: {
      ok:true,
       excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    sobresalir: {
      ok:true,
      },
    sobrevenir: {
      ok:true,
       modelo: "venir" },
    sobrevivir: {
      ok:true,
      },
    sofreír: {
      ok:true,
       modelo: "reír" },
    solar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soldar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soler: {
      ok:true,
       alternancia_vocálica: "o:ue", impersonal: "soler" },
    solicitar: {
      ok:true,
      },
    sollozar: {
      ok:true,
      },
    soltar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    solucionar: {
      ok:true,
      },
    someter: {
      ok:true,
      },
    sonar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soñar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    sonreír: {
      ok:true,
       modelo: "reír" },
    soportar: {
      ok:true,
      },
    sorprender: {
      ok:true,
      },
    sortear: {
      ok:true,
      },
    sosegar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    sospechar: {
      ok:true,
      },
    sostener: {
      ok:true,
      },
    soterrar: {
      ok:true,
      },
    subir: {
      ok:true,
      },
    substituir: {
      ok:true,
      },
    substraer: {
      ok:true,
      },
    subvenir: {
      ok:true,
       modelo: "venir" },
    subvertir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    succionar: {
      ok:true,
      },
    suceder: {
      ok:true,
      },
    sudar: {
      ok:true,
      },
    sufrir: {
      ok:true,
      },
    sugerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    sujetar: {
      ok:true,
      },
    sumar: {
      ok:true,
      },
    suministrar: {
      ok:true,
      },
    suplicar: {
      ok:true,
      },
    suponer: {
      ok:true,
      },
    supurar: {
      ok:true,
      },
    surgir: {
      ok:true,
      },
    suscribir: {
      ok:true,
       excepciones_léxicas: { participio: ["suscrito"] } },
    suspender: {
      ok:true,
      },
    suspirar: {
      ok:true,
      },
    sustentar: {
      ok:true,
      },
    sustituir: {
      ok:true,
      },
    sustraer: {
      ok:true,
      },
    tallar: {
      ok:true,
      },
    tañer: {
      ok:true,
      },
    tapar: {
      ok:true,
      },
    tapiar: {
      ok:true,
      },
    tardar: {
      ok:true,
      },
    tartamudear: {
      ok:true,
      },
    tatuar: {
      ok:true,
      },
    teclear: {
      ok:true,
      },
    temblar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    temer: {
      ok:true,
      },
    templar: {
      ok:true,
      },
    tender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    tener: {
      ok:true,
       modelo: "tener",
        auxiliar: true,
        tema_presente_yo_del_modelo: ["teng"],
        tema_pretérito_del_modelo: "tuv",
        tema_futuro_del_modelo: "tendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            imperativo_tú: ["ten/"],
            reglas: {
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } }
            }
        }
    },
    teñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    tentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    terminar: {
      ok:true,
      },
    textear: {
      ok:true,
      },
    tipificar: {
      ok:true,
      },
    tirar: {
      ok:true,
      },
    titubear: {
      ok:true,
      },
    tocar: {
      ok:true,
      },
    tolerar: {
      ok:true,
      },
    tomar: {
      ok:true,
      },
    torcer: {
      ok:true,
      
        alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["tuerz"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["torz"], p2: ["torz"], vos: [{ "forma": "tuerz", "uso": "Riop." }, { "forma": "torz", "uso": "C.Am." }] } },
                CmdPos: { temas: { p1: ["torz"] } }
            }
        }
    },
    tornar: {
      ok:true,
      },
    torturar: {
      ok:true,
      },
    toser: {
      ok:true,
      },
    tostar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    trabajar: {
      ok:true,
      },
    traducir: {
      ok:true,
      },
    traer: {
      ok:true,
       modelo: "traer", tema_presente_yo_del_modelo: ["traig"], tema_pretérito_del_modelo: "traj" },
    tramitar: {
      ok:true,
      },
    transcender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    transcurrir: {
      ok:true,
      },
    transferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    transformar: {
      ok:true,
      },
    translucir: {
      ok:true,
       modelo: "lucir" },
    transmitir: {
      ok:true,
      },
    transportar: {
      ok:true,
      },
    trapear: {
      ok:true,
      },
    trascender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    trasferir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    trasladar: {
      ok:true,
      },
    traslucir: {
      ok:true,
       modelo: "lucir" },
    traspasar: {
      ok:true,
      },
    trastabillar: {
      ok:true,
      },
    tratar: {
      ok:true,
      },
    trepar: {
      ok:true,
      },
    triangular: {
      ok:true,
      },
    triturar: {
      ok:true,
      },
    trocar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    tronar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    tropezar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    tumbar: {
      ok:true,
      },
    turnar: {
      ok:true,
      },
    ubicar: {
      ok:true,
      },
    unir: {
      ok:true,
      },
    urgir: {
      ok:true,
      },
    usar: {
      ok:true,
      },
    utilizar: {
      ok:true,
      },
    vaciar: {
      ok:true,
       modelo: "vaciar",
        clase_conjugacional: "-iar",
        // FIX: linguist: The accent is the only thing different from the regular forms
        // Is this due to an orthographic rule? or something else?
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        }
    },
    vacilar: {
      ok:true,
      },
    valer: {
      ok:true,
       modelo: "valer", tema_presente_yo_del_modelo: ["valg"], tema_futuro_del_modelo: "valdr" },
    validar: {
      ok:true,
      },
    valuar: {
      ok:true,
      },
    variar: {
      ok:true,
       modelo: "vaciar" },
    velar: {
      ok:true,
      },
    vencer: {
      ok:true,
       tema_presente_yo_del_modelo: ["venz"] },
    vender: {
      ok:true,
      },
    venir: {
      ok:true,
       modelo: "venir",
        tema_presente_yo_del_modelo: ["veng"],
        tema_pretérito_del_modelo: "vin",
        tema_futuro_del_modelo: "vendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            gerundio: ["viniendo"],
            imperativo_tú: ["ven/"],
            reglas: {
                SubPres: { forms: { vos: [{ "forma": "veng/as", "uso": "Riop." }, { "forma": "veng/ás", "uso": "C.Am." }] } },
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } }
            }
        }
    },
    ventear: {
      ok:true,
      },
    ver: {
      ok:true,
       modelo: "ver",
        // parece que no conforma bien a estas reglas
        // sí prefijo_ind_pres_yo cambia, pero no con "g", y no con los mismos cambios
        // no aplican ni tema_pretérito_del_modelo ni tema_futuro_del_modelo ni alternancia_vocálica
        // el resto son excepciones_léxicas
        excepciones_léxicas: {
            gerundio: ["viendo"],
            participio: ["visto"],
            // hay varias excepciones_léxicas que probablemente tienen que ver con el hecho que ver es solo una sílaba
            reglas: {
                // p2 => accent dropped
                // The default "-er" verb pattern of accent the last sylable doesn't apply to vos forms of "ver", since "vés" is only one sylable
                IndPres: { suffixes: { s1: ["eo"], p2: ["eis"], vos: null },
                    derivations: { preserve_stress_from_base: ["s2", "s3", "p2", "p3"] }
                },
                SubPres: { tema_suplicativo: ["ve"] },
                // accents dropped
                IndPret: { forms: { s1: ["v/i"], s3: ["v/io"] },
                    derivations: { preserve_stress_from_base: ["s1", "s3"] }
                },
                IndImp: { tema_suplicativo: ["ve"] },
                CmdPos: { forms: { s3: ["ve/a"], p1: ["ve/amos"], p3: ["ve/an"], vos: null },
                    derivations: { preserve_stress_from_base: ["s2"] }
                }
            }
        }
    },
    verraquear: {
      ok:true,
      },
    verter: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    vestir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    viajar: {
      ok:true,
      },
    vidriar: {
      ok:true,
       modelo: "vaciar", acepta_regular: "variante" },
    vigilar: {
      ok:true,
      },
    vincular: {
      ok:true,
      },
    violar: {
      ok:true,
      },
    virar: {
      ok:true,
      },
    visitar: {
      ok:true,
      },
    vivir: {
      ok:true,
      },
    volar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    volcar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    voltear: {
      ok:true,
      },
    volver: {
      ok:true,
       modelo: "volver", alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["vuelto"] } },
    vomitar: {
      ok:true,
      },
    votar: {
      ok:true,
      },
    xerografiar: {
      ok:true,
       modelo: "vaciar" },
    yacer: {
      ok:true,
       tema_presente_yo_del_modelo: ["yazc", "yazg", "yag"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { forms: { vos: [{ "forma": "yazc/as", "uso": "Riop." }, { "forma": "yazg/as", "uso": "C.Am." }] }
                }
            }
        }
    },
    zaherir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    zambuir: {
      ok:true,
      },
    zambullir: {
      ok:true,
      },
    zampar: {
      ok:true,
      },
    zarandear: {
      ok:true,
      },
    zumbar: {
      ok:true,
      },
};
export function getAnnotations(infinitivo, modelo, mood_tense_derivation) {
    const annotations = { infinitivo, mood_tense_derivation, modelo, version, license };
    return annotations;
}
//# sourceMappingURL=verbos-con-cambios-morfol%C3%B3gicas.js.map