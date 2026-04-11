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
      ok:{"SubPres":{"s3":["acaezca"],"p3":["acaezcan"]},"conjugaciones":{"CmdPos":null}},
       defectos: { personas: ["s3", "p3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
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
       tema_presente_yo_del_modelo: ["acontezc"], defectos: { personas: ["s3", "p3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
    acordar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    acostar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
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
                SubPres: { forms: { vos: [{ "forma": "adquieras", "uso": "Riop." }, { "forma": "adquirás", "uso": "C.Am." }] } },
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
       tema_presente_yo_del_modelo: ["agradezc"] },
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
    amanecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["amanezc"] },
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
       tema_presente_yo_del_modelo: ["anochezc"] },
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
    aparecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["aparezc"] },
    apartar: {
      ok:true,
      },
    apercibir: {
      ok:true,
      },
    apetecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["apetezc"] },
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
      ok:{"IndPres":{"s1":["asuelo","asolo"],"s2":["asuelas","asolas"],"s3":["asuela","asola"],"p3":["asuelan","asolan"]},"SubPres":{"s1":["asuele","asole"],"s2":["asueles","asoles"],"vos":["asueles","asolés","asoles"],"s3":["asuele","asole"],"p3":["asuelen","asolen"]},"CmdPos":{"s2":["asuela","asola"],"s3":["asuele","asole"],"p3":["asuelen","asolen"]}},
       alternancia_vocálica: "o:ue" }, // FIX: also supports regular forms! Perhaps add an option to return both forms?
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
      ok:{"gerundio":["atañendo"],"IndPret":{"s3":["atañó"],"p3":["atañeron"]},"SubImp":{"s3":["atañera","atañese"],"p3":["atañeran","atañesen"]},"SubFut":{"s3":["atañere"],"p3":["atañeren"]},"conjugaciones":{"CmdPos":null}},
       defectos: { personas: ["s3", "p3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
    atar: {
      ok:true,
      },
    atardecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["atardezc"], impersonal: true },
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
      }, // FIX: Presente de indicativo: se usa más balbuceo que balbuzco (la forma regular ha desplazado a la irregular)
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
    beber: {
      ok:true,
      },
    besar: {
      ok:true,
      },
    biografiar: {
      ok:true,
       modelo: "vaciar" },
    bordar: {
      ok:true,
      },
    bordear: {
      ok:true,
      },
    borrar: {
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
    chocar: {
      ok:true,
      },
    chupar: {
      ok:true,
      },
    cimentar: {
      ok:{"IndPres":{"s1":["cimiento","cimento"]}},
       alternancia_vocálica: "e:ie" }, // FIX: various irregularities
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
      ok:{"SubPres":{"vos":[{"forma":"cuezas","uso":"Riop."},{"forma":"cozás","uso":"C.Am."}],"p1":["cozamos"],"p2":["cozáis"]},"CmdPos":{"p1":["cozamos"]}},
       alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["cuez"],
        excepciones_léxicas: {
            participio: ["cocido", "cocho"],
            reglas: {
                SubPres: { forms: { p1: ["cozamos"], p2: ["cozáis"], vos: [{ "forma": "cuezas", "uso": "Riop." }, { "forma": "cozás", "uso": "C.Am." }] } },
                CmdPos: { forms: { p1: ["cozamos"] } }
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
    completar: {
      ok:true,
      },
    complicar: {
      ok:true,
      },
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
    concentrar: {
      ok:true,
      },
    conceptuar: {
      ok:true,
      },
    concernir: {
      ok:{"IndPres":{"s3":["concierne"],"p3":["conciernen"]},"SubPres":{"s3":["concierna"],"p3":["conciernan"]},"conjugaciones":{"CmdPos":null}},
       defectos: { personas: ["s3", "p3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
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
                SubPres: { forms: { vos: [{ "forma": "cuentes", "uso": "Riop." }, { "forma": "contés", "uso": "C.Am." }] } }
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
      ok:{"IndPres":{"s1":["corroo","corroigo","corroyo"]},"SubPres":{"vos":["corroas","corroigas","corroyas","corroás","corroigás","corroyás"],"p2":["corroáis","corroigáis","corroyáis"]}},
      },
    cortar: {
      ok:true,
      },
    coser: {
      ok:true,
      },
    costar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    crear: {
      ok:true,
      },
    crecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["crezc"] },
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
                //   forms: {vos: {atípicos: [{forma: "criés"}]}}},
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
            imperativo_tú: ["di"],
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
       tema_presente_yo_del_modelo: ["desaparezc"] },
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
       tema_presente_yo_del_modelo: ["desfallezc"] },
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
      ok:{"gerundio":["desliendo"],"IndPret":{"s3":["deslió"]},"SubPres":{"p2":["desliáis"]}},
       modelo: "reír",
        clase_conjugacional: "-eír",
        excepciones_léxicas: {
            reglas: {
                //                      no existe variante sin tilde proviene de "reír"
                IndPret: { forms: { s3: ["deslió"] } },
                //                      no existe variante sin tilde proviene de "reír"
                SubPres: { forms: { p2: ["desliáis"] } },
            }
        }
    },
    deslizar: {
      ok:true,
      },
    desmontar: {
      ok:true,
      },
    desobedecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["desobedezc"] },
    desosar: {
      ok:{"IndPres":{"s1":["deshueso"],"s2":["deshuesas"],"s3":["deshuesa"],"p3":["deshuesan"]},"SubPres":{"s1":["deshuese"],"s2":["deshueses"],"vos":[{"forma":"deshueses","uso":"Riop."},{"forma":"desosés","uso":"C.Am."}],"s3":["deshuese"],"p3":["deshuesen"]},"CmdPos":{"s2":["deshuesa"],"s3":["deshuese"],"p3":["deshuesen"]}},
       alternancia_vocálica: "o:ue" },
    desparramar: {
      ok:true,
      },
    despedir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    despegar: {
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
      ok:{"participio":["desprovisto"]},
       modelo: "leer" },
    despuntar: {
      ok:true,
      },
    destartalar: {
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
    // desvaír:        {},   // FIX:
    desvariar: {
      ok:{"IndPres":{"s1":["desvarío"],"s2":["desvarías"],"s3":["desvaría"],"p3":["desvarían"]},"SubPres":{"s1":["desvaríe"],"s2":["desvaríes"],"vos":[{"forma":"desvaríes","uso":"Riop."},{"forma":"desvariés","uso":"C.Am."}],"s3":["desvaríe"],"p3":["desvaríen"]},"CmdPos":{"s2":["desvaría"],"s3":["desvaríe"],"p3":["desvaríen"]}},
      },
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
      ok:{"CmdPos":{"s3":["dígne"]}},
      },
    diluir: {
      ok:true,
      },
    dirigir: {
      ok:true,
      },
    discernir: {
      ok:{"gerundio":["discerniendo"],"IndPret":{"s3":["discernió"],"p3":["discernieron"]},"SubPres":{"vos":[{"forma":"disciernas","uso":"Riop."},{"forma":"discernás","uso":"C.Am."}],"p1":["discernamos"],"p2":["discernáis"]},"SubImp":{"s1":["discerniera","discerniese"],"s2":["discernieras","discernieses"],"s3":["discerniera","discerniese"],"p1":["discerniéramos","discerniésemos"],"p2":["discernierais","discernieseis"],"p3":["discernieran","discerniesen"]},"SubFut":{"s1":["discerniere"],"s2":["discernieres"],"s3":["discerniere"],"p1":["discerniéremos"],"p2":["discerniereis"],"p3":["discernieren"]},"CmdPos":{"p1":["discernamos"]}},
       alternancia_vocálica: "e:ie" },
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
    eludir: {
      ok:true,
      },
    embadurnar: {
      ok:true,
      },
    embarcar: {
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
       tema_presente_yo_del_modelo: ["enflaquezc"] },
    enfrentar: {
      ok:true,
      },
    enfriar: {
      ok:true,
       modelo: "vaciar" },
    enfurecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["enfurezc"] },
    engañar: {
      ok:true,
      },
    enganchar: {
      ok:true,
      },
    engordar: {
      ok:true,
      },
    enjugar: {
      ok:true,
       modelo: null }, // regular, no sigue el modelo de "jugar"
    enlazar: {
      ok:true,
      },
    enloquecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["enloquezc"] },
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
                IndPres: { forms: { s1: ["enraízo"], s2: ["enraízas"], s3: ["enraíza"], p3: ["enraízan"] } },
                SubPres: { forms: { s1: ["enraíce"], s2: ["enraíces"], s3: ["enraíce"], p3: ["enraícen"], vos: [{ "forma": "enraíces", "uso": "Riop." }, { "forma": "enraicés", "uso": "C.Am." }] } },
                CmdPos: { forms: { s2: ["enraíza"], s3: ["enraíce"], p3: ["enraícen"] } }
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
    entrever: {
      ok:true,
       modelo: "ver" },
    entrevistar: {
      ok:true,
      },
    entristecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["entristezc"] },
    entumecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["entumezc"] },
    entusiasmar: {
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
                IndPres: { forms: { s1: ["irgo", "yergo"], s2: ["irgues", "yergues"], s3: ["irgue", "yergue"],
                        p3: ["irguen", "yerguen"] } },
                IndPret: { forms: { s3: ["irguió"],
                        p3: ["irguieron"] } },
                SubPres: {
                    // Según ChatGPT: hay un conflicto entre irregularidad heredada vs. regularización del voseo
                    //    sí existe una forma voseante tipo yergás, pero en la práctica, muchas veces se dice ergás o se evita el verbo
                    forms: { vos: [{ "forma": "yergas", "uso": "Riop." }, { "forma": "irgas", "uso": "C.Am." }, { "forma": "irgás", "uso": "C.Am." }] }
                    //    forms: { s1: ["irga", "yerga"],       s2: ["irgas", "yergas"],   s3: ["irga", "yerga"],
                    //             p1:	["irgamos", "yergamos"], p2: ["irgáis", "yergáis"], p3: ["irgan", "yergan"], vos: ["yergas"] }
                },
                SubImp: { tema: ["irguie"], stress_last_char_of_p1_stem: true },
                SubFut: { tema: ["irguie"], stress_last_char_of_p1_stem: true },
                CmdPos: { forms: { s2: ["irgue", "yergue"], s3: ["irga", "yerga"],
                        p1: ["irgamos", "yergamos"], p3: ["irgan", "yergan"] } }
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
    escoger: {
      ok:true,
      },
    esconder: {
      ok:true,
      },
    escribir: {
      ok:{"SubPres":{"vos":["escribas"]}},
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
       tema_presente_yo_del_modelo: ["establezc"] },
    estacionar: {
      ok:true,
      },
    estafar: {
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
            imperativo_tú: ["está"],
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
      ok:{"IndPres":{"s1":["estriego","estrego"],"s2":["estriegas","estregas"],"s3":["estriega","estrega"],"p3":["estriegan","estregan"]},"SubPres":{"s1":["estriegue","estregue"],"s2":["estriegues","estregues"],"vos":["estriegues","estregués","estregues"],"s3":["estriegue","estregue"],"p3":["estrieguen","estreguen"]},"CmdPos":{"s2":["estriega","estrega"],"s3":["estriegue","estregue"],"p3":["estrieguen","estreguen"]}},
       alternancia_vocálica: "e:ie" }, // FIX: multiple forms
    estremecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["estremezc"] },
    estrenar: {
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
       tema_presente_yo_del_modelo: ["fallezc"] },
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
      ok:{"participio":["frito"],"IndPret":{"s3":["frió"]},"SubPres":{"p2":["friáis"]}},
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
       defectos: { personas: ["s3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
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
                    forms: { p2: ["guiais", { "forma": "guiáis", "uso": "pre-2010" }],
                        vos: ["guias", { "forma": "guiás", "uso": "pre-2010" }] } },
                IndPret: { forms: { s1: ["guie", { "forma": "guié", "uso": "pre-2010" }], s3: ["guio", { "forma": "guió", "uso": "pre-2010" }], } },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true,
                    forms: { p2: ["guieis", { "forma": "guiéis", "uso": "pre-2010" }] } },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true,
                    forms: { vos: ["guia"] } }
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
        impersonal: true,
        auxiliar: true,
        excepciones_léxicas: {
            supletivo: true,
            imperativo_tú: [{ "forma": "he", "uso": "arcaico" }, { "forma": "habe", "uso": "arcaico" }],
            reglas: {
                IndPres: { forms: { s1: ["he"], s2: ["has"], s3: ["ha", { forma: "hay", uso: "impersonal" }],
                        p1: ["hemos"], p3: ["han"], vos: null } },
                SubPres: { tema: ["hay"] },
                CmdPos: { tema: ["hay"],
                    forms: { p2: ["habed"], vos: null } }
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
            imperativo_tú: ["haz"],
            reglas: {
                // FIX: linguist: should "hizo" be managed with sound preserving transformations?
                IndPret: { forms: { s3: ["hizo"] } },
                SubPres: { forms: { vos: [{ forma: "hagas", uso: "Riop." }, { forma: "hagás", uso: "C.Am." }] } },
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
      ok:{"gerundio":["hendiendo"],"IndPret":{"s3":["hendió"],"p3":["hendieron"]},"SubPres":{"vos":[{"forma":"hiendas","uso":"Riop."},{"forma":"hendás","uso":"C.Am."}],"p1":["hendamos"],"p2":["hendáis"]},"SubImp":{"s1":["hendiera","hendiese"],"s2":["hendieras","hendieses"],"s3":["hendiera","hendiese"],"p1":["hendiéramos","hendiésemos"],"p2":["hendierais","hendieseis"],"p3":["hendieran","hendiesen"]},"SubFut":{"s1":["hendiere"],"s2":["hendieres"],"s3":["hendiere"],"p1":["hendiéremos"],"p2":["hendiereis"],"p3":["hendieren"]},"CmdPos":{"p1":["hendamos"]}},
       alternancia_vocálica: "e:ie" }, // but not the "e:i" for IndPret...
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
      ok:{"gerundio":["imprimiendo"],"participio":["imprimido","impreso"]},
      
        excepciones_léxicas: { gerundio: ["imprimido", "impreso"] }
    },
    inclinar: {
      ok:true,
      },
    incluir: {
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
    indagar: {
      ok:true,
      },
    indexar: {
      ok:true,
      },
    indicar: {
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
                IndPres: { forms: { s1: ["voy"], s2: ["vas"], s3: ["va"], p1: ["vamos"], p2: ["vais"], p3: ["van"], vos: null } },
                SubPres: { tema: ["vay"],
                    forms: { vos: [{ "forma": "vayas", "uso": "Riop." }, { "forma": "vayás", "uso": "C.Am." }] }
                },
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"], p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                IndImp: { forms: { s1: ["iba"], s2: ["ibas"], s3: ["iba"], p1: ["íbamos"], p2: ["ibais"], p3: ["iban"] } },
                // IndFut: uses regular conjugation
                // IndCond: uses regular conjugation
                CmdPos: { forms: { s2: ["ve"], s3: ["vaya"], p1: ["vayamos", "vamos"], p3: ["vayan"], vos: ["andá"] } }
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
    jubilar: {
      ok:true,
      },
    jugar: {
      ok:true,
      
        // FIX: SubPres: vos spelling differs by region: vos: ["juegues", "*jugués"]
        alternancia_vocálica: "u:ue",
    },
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
       alternancia_vocálica: "o:ue", defectos: { personas: ["s3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
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
      ok:{"IndPres":{"s1":["luzco"]},"SubPres":{"s1":["luzca"],"s2":["luzcas"],"vos":[{"forma":"luzcas","uso":"Riop."},{"forma":"luzcás","uso":"C.Am."}],"s3":["luzca"],"p1":["luzcamos"],"p2":["luzcáis"],"p3":["luzcan"]},"CmdPos":{"s3":["luzca"],"p1":["luzcamos"],"p3":["luzcan"]}},
      },
    lustrar: {
      ok:true,
      },
    maldecir: {
      ok:{"participio":["maldecido"],"IndFut":{"s1":["maldeciré"],"s2":["maldecirás"],"s3":["maldecirá"],"p1":["maldeciremos"],"p2":["maldeciréis"],"p3":["maldecirán"]},"IndCond":{"s1":["maldeciría"],"s2":["maldecirías"],"s3":["maldeciría"],"p1":["maldeciríamos"],"p2":["maldeciríais"],"p3":["maldecirían"]},"CmdPos":{"s2":["maldice"]}},
       modelo: "decir" },
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
      ok:{"IndPres":{"s1":["mezo"]},"SubPres":{"s1":["meza"],"s2":["mezas"],"vos":[{"forma":"mezas","uso":"Riop."},{"forma":"mezás","uso":"C.Am."}],"s3":["meza"],"p1":["mezamos"],"p2":["mezáis"],"p3":["mezan"]},"CmdPos":{"s3":["meza"],"p1":["mezamos"],"p3":["mezan"]}},
      },
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
    menstruar: {
      ok:{"IndPres":{"s1":["menstrúo"],"s2":["menstrúas"],"s3":["menstrúa"],"p3":["menstrúan"]},"SubPres":{"s1":["menstrúe"],"s2":["menstrúes"],"vos":[{"forma":"menstrúes","uso":"Riop."},{"forma":"menstrués","uso":"C.Am."}],"s3":["menstrúe"],"p3":["menstrúen"]},"CmdPos":{"s2":["menstrúa"],"s3":["menstrúe"],"p3":["menstrúen"]}},
      },
    mentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    mentir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    merecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["merezc"] },
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
    molestar: {
      ok:true,
      },
    montar: {
      ok:true,
      },
    morder: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    morir: {
      ok:{"participio":["muerto"]},
       alternancia_vocálica: "o:ue" },
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
       alternancia_vocálica: "e:ie", defectos: { personas: ["s3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
    nombrar: {
      ok:true,
      },
    notar: {
      ok:true,
      },
    nutrir: {
      ok:true,
      },
    obedecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["obedezc"] },
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
       tema_presente_yo_del_modelo: ["ofrezc"] },
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
       tema_presente_yo_del_modelo: ["padezc"] },
    pagar: {
      ok:true,
      },
    parar: {
      ok:true,
      },
    parecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["parezc"] },
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
                SubPres: { forms: { vos: [{ "forma": "pienses", "uso": "Riop." }, { "forma": "pensés", "uso": "C.Am." }] } }
            }
        }
    },
    perder: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    perforar: {
      ok:true,
      },
    permanecer: {
      ok:true,
       tema_presente_yo_del_modelo: ["permanezc"] },
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
       tema_presente_yo_del_modelo: ["pertenezc"] },
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
      ok:{"IndPres":{"vos":["pias"],"p2":["piais"]},"IndPret":{"s1":["pie"],"s3":["pio"]},"SubPres":{"vos":[{"forma":"píes","uso":"Riop."},{"forma":"pies","uso":"C.Am."}],"p2":["pieis"]},"CmdPos":{"vos":["pia"]}},
       modelo: "vaciar" },
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
    planchar: {
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
            imperativo_tú: ["pon"],
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
      ok:{"IndPres":{"s1":["prohíbo"],"s2":["prohíbes"],"s3":["prohíbe"],"p3":["prohíben"]},"SubPres":{"s1":["prohíba"],"s2":["prohíbas"],"vos":[{"forma":"prohíbas","uso":"Riop."},{"forma":"prohibás","uso":"C.Am."}],"s3":["prohíba"],"p3":["prohíban"]},"CmdPos":{"s2":["prohíbe"],"s3":["prohíba"],"p3":["prohíban"]}},
      },
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
      ok:{"participio":["provisto"]},
      }, // tiene dos participios
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
    rebanar: {
      ok:true,
      },
    rebelar: {
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
      ok:{"IndPres":{"s1":["rehílo"],"s2":["rehílas"],"s3":["rehíla"],"p3":["rehílan"]},"SubPres":{"s1":["rehíle"],"s2":["rehíles"],"vos":[{"forma":"rehíles","uso":"Riop."},{"forma":"rehilés","uso":"C.Am."}],"s3":["rehíle"],"p3":["rehílen"]},"CmdPos":{"s2":["rehíla"],"s3":["rehíle"],"p3":["rehílen"]}},
      },
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
            gerundio: ["riendo"],
            participio: ["reído"],
            reglas: {
                // FIX: linguist: are there other reglas I can use?
                // FIX: bring in alternate forms
                // FIX: must formalize the relationship of CmdPos on SubPres
                IndPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true,
                    // FIX: considera un campo "formas_adicionales", para que no tengamos repetir la forma que no cambia
                    // FIX: es posible que podamos usar una regla de ortografía (rompe el diptongo) por el resto?
                    forms: { s1: ["río"], /* s2: ["ríes"], s3: ["ríe"],*/ p1: ["reímos"], p2: ["reís"], /*p3: ["ríen"],   vos: ["reís"], */ } },
                IndPret: { forms: { s3: ["rio", { "forma": "rió", "uso": "pre-2010" }], /* p3: ["rieron"],*/ } },
                SubPres: { tema: ["rí"], stress_last_vowel_of_s123p3_stem: true,
                    forms: { p1: ["riamos"], p2: ["riais", { "forma": "riáis", "uso": "pre-2010" }], /*p3: ["rían"]*/ } },
                CmdPos: { tema: ["rí"],
                    forms: { p1: ["riamos"], p2: ["reíd"], vos: ["reí"] } }
            },
        }
    },
    relajar: {
      ok:true,
      },
    relucir: {
      ok:{"IndPres":{"s1":["reluzco"]},"SubPres":{"s1":["reluzca"],"s2":["reluzcas"],"vos":[{"forma":"reluzcas","uso":"Riop."},{"forma":"reluzcás","uso":"C.Am."}],"s3":["reluzca"],"p1":["reluzcamos"],"p2":["reluzcáis"],"p3":["reluzcan"]},"CmdPos":{"s3":["reluzca"],"p1":["reluzcamos"],"p3":["reluzcan"]}},
      },
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
      ok:{"SubImp":{"s1":["rindiera","rindiese"],"s2":["rindieras","rindieses"],"s3":["rindiera","rindiese"],"p1":["rindiéramos","rindiésemos"],"p2":["rindierais","rindieseis"],"p3":["rindieran","rindiesen"]},"SubFut":{"s1":["rindiere"],"s2":["rindieres"],"s3":["rindiere"],"p1":["rindiéremos"],"p2":["rindiereis"],"p3":["rindieren"]}},
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
    resolver: {
      ok:{"participio":["resuelto"]},
       modelo: "mover" },
    respetar: {
      ok:true,
      },
    respirar: {
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
    rogar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    romper: {
      ok:true,
       excepciones_léxicas: { participio: ["roto"] } },
    rondar: {
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
                IndPres: { forms: { s1: ["sé"] } },
                SubPres: { tema: ["sep"] },
                CmdPos: { forms: { s3: ["sepa"], p1: ["sepamos"], p3: ["sepan"] } }
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
    salir: {
      ok:true,
       modelo: "salir",
        tema_presente_yo_del_modelo: ["salg"],
        tema_futuro_del_modelo: "saldr",
        excepciones_léxicas: { imperativo_tú: ["sal"] }
    },
    salpimentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    saludar: {
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
                IndPres: { forms: { s1: ["soy"], s2: ["eres"], s3: ["es"], p1: ["somos"], p2: ["sois"], p3: ["son"], vos: ["sos"] } },
                IndImp: { forms: { s1: ["era"], s2: ["eras"], s3: ["era"], p1: ["éramos"], p2: ["erais"], p3: ["eran"] } },
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"], p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                SubPres: { tema: ["se"],
                    forms: { vos: [{ "forma": "seas", "uso": "Riop." }, { "forma": "seás", "uso": "C.Am." }] } },
                CmdPos: { forms: { s2: ["sé"], s3: ["sea"], p1: ["seamos"], p3: ["sean"], vos: null } }
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
    situar: {
      ok:true,
      },
    sobrecargar: {
      ok:true,
      },
    sobrecoger: {
      ok:true,
      },
    sobrehilar: {
      ok:{"IndPres":{"s1":["sobrehílo"],"s2":["sobrehílas"],"s3":["sobrehíla"],"p3":["sobrehílan"]},"SubPres":{"s1":["sobrehíle"],"s2":["sobrehíles"],"vos":[{"forma":"sobrehíles","uso":"Riop."},{"forma":"sobrehilés","uso":"C.Am."}],"s3":["sobrehíle"],"p3":["sobrehílen"]},"CmdPos":{"s2":["sobrehíla"],"s3":["sobrehíle"],"p3":["sobrehílen"]}},
      },
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
      ok:{"participio":["sofrito"],"IndPret":{"s3":["sofrió"]},"SubPres":{"p2":["sofriáis"]}},
       modelo: "reír" },
    solar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soldar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soler: {
      ok:{"conjugaciones":{"IndPret":null,"IndFut":null,"IndCond":null,"SubFut":null,"CmdPos":null}},
       alternancia_vocálica: "o:ue" },
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
      ok:{"IndPret":{"s3":["sonrió"]},"SubPres":{"p2":["sonriáis"]}},
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
      ok:{"gerundio":["tañendo"],"IndPret":{"s3":["tañó"],"p3":["tañeron"]},"SubImp":{"s1":["tañera","tañese"],"s2":["tañeras","tañeses"],"s3":["tañera","tañese"],"p1":["tañéramos","tañésemos"],"p2":["tañerais","tañeseis"],"p3":["tañeran","tañesen"]},"SubFut":{"s1":["tañere"],"s2":["tañeres"],"s3":["tañere"],"p1":["tañéremos"],"p2":["tañereis"],"p3":["tañeren"]}},
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
    temblar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    temer: {
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
            imperativo_tú: ["ten"],
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
      ok:{"SubPres":{"vos":[{"forma":"tuerzas","uso":"Riop."},{"forma":"torzás","uso":"C.Am."}],"p1":["torzamos"],"p2":["torzáis"]},"CmdPos":{"p1":["torzamos"]}},
       alternancia_vocálica: "o:ue", tema_presente_yo_del_modelo: ["tuerz"] },
    tornar: {
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
       alternancia_vocálica: "o:ue", defectos: { personas: ["s3"], rasgos: ["IndPres", "IndImp", "IndPret", "IndFut", "IndCond", "SubPres", "SubImp", "SubFut"] } },
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
      ok:{"IndFut":{"s1":["valdré"],"s2":["valdrás"],"s3":["valdrá"],"p1":["valdremos"],"p2":["valdréis"],"p3":["valdrán"]},"IndCond":{"s1":["valdría"],"s2":["valdrías"],"s3":["valdría"],"p1":["valdríamos"],"p2":["valdríais"],"p3":["valdrían"]}},
       tema_presente_yo_del_modelo: ["valg"], tema_futuro_del_modelo: "valdr" },
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
            imperativo_tú: ["ven"],
            reglas: {
                SubPres: { forms: { vos: [{ "forma": "vengas", "uso": "Riop." }, { "forma": "vengás", "uso": "C.Am." }] } },
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } }
            }
        }
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
                SubPres: { tema: ["ve"] },
                // accents dropped
                IndPret: { forms: { s1: ["vi"], s3: ["vio"] },
                    derivations: { preserve_stress_from_base: ["s1", "s3"] }
                },
                IndImp: { tema: ["ve"] },
                CmdPos: { forms: { s3: ["vea"], p1: ["veamos"], p3: ["vean"], vos: null },
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
      ok:{"IndPres":{"s1":["vidrío","vidrio"],"s2":["vidrías","vidrias"],"s3":["vidría","vidria"],"p3":["vidrían","vidrian"]},"SubPres":{"s1":["vidríe","vidrie"],"s2":["vidríes","vidries"],"vos":["vidríes","vidriés","vidries"],"s3":["vidríe","vidrie"],"p3":["vidríen","vidrien"]},"CmdPos":{"s2":["vidría","vidria"],"s3":["vidríe","vidrie"],"p3":["vidríen","vidrien"]}},
       modelo: "vaciar" },
    vigilar: {
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
    votar: {
      ok:true,
      },
    xerografiar: {
      ok:true,
       modelo: "vaciar" },
    yacer: {
      ok:{"IndPres":{"s1":["yazco","yazgo","yago"]},"SubPres":{"s1":["yazca","yazga","yaga"],"s2":["yazcas","yazgas","yagas"],"vos":["yazcas","yazgas","yagas","yazcás","yazgás","yagás"],"s3":["yazca","yazga","yaga"],"p1":["yazcamos","yazgamos","yagamos"],"p2":["yazcáis","yazgáis","yagáis"],"p3":["yazcan","yazgan","yagan"]},"CmdPos":{"s3":["yazca","yazga","yaga"],"p1":["yazcamos","yazgamos","yagamos"],"p3":["yazcan","yazgan","yagan"]}},
      }, // FIX: { tema_presente_yo_del_modelo: ["yazc", "yazg", "yag"] },
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
    zumbar: {
      ok:true,
      },
};
export function getAnnotations(infinitivo, modelo, mood_tense_derivation) {
    const annotations = { infinitivo, mood_tense_derivation, modelo, version, license };
    return annotations;
}
//# sourceMappingURL=verbos-con-cambios-morfol%C3%B3gicas.js.map