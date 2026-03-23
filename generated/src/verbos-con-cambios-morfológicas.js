import { version, license } from "./version.js";
// if a value is null, the verb is regular
// A verb that appears in this list has been verified with a test
export const verbos_con_cambios_morfológicos = {
    abandonar: {
      ok:true,
      },
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
      },
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
      ok:{"conjugaciones":{"CmdPos":null}},
      },
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
       alternancia_vocálica: "i:ie" },
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
      ok:{"IndPres":{"s1":["aferro","afierro"],"s2":["aferras","afierras"],"s3":["aferra","afierra"],"p3":["aferran","afierran"]},"SubPres":{"s1":["aferre","afierre"],"s2":["aferres","afierres"],"s3":["aferre","afierre"],"p3":["aferren","afierren"]},"CmdPos":{"s2":["aferra","afierra"],"s3":["aferre","afierre"],"p3":["aferren","afierren"]},"CmdNeg":{"s2":["aferres","afierres"],"s3":["aferre","afierre"],"p3":["aferren","afierren"]}},
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
      ok:{"IndPres":{"s1":["ahíjo"],"s2":["ahíjas"],"s3":["ahíja"],"p3":["ahíjan"]},"SubPres":{"s1":["ahíje"],"s2":["ahíjes"],"s3":["ahíje"],"p3":["ahíjen"]},"CmdPos":{"s2":["ahíja"],"s3":["ahíje"],"p3":["ahíjen"]},"CmdNeg":{"s2":["ahíjes"],"s3":["ahíje"],"p3":["ahíjen"]}},
      },
    ahitar: {
      ok:{"IndPres":{"s1":["ahíto"],"s2":["ahítas"],"s3":["ahíta"],"p3":["ahítan"]},"SubPres":{"s1":["ahíte"],"s2":["ahítes"],"s3":["ahíte"],"p3":["ahíten"]},"CmdPos":{"s2":["ahíta"],"s3":["ahíte"],"p3":["ahíten"]},"CmdNeg":{"s2":["ahítes"],"s3":["ahíte"],"p3":["ahíten"]}},
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
      ok:{"IndPres":{"s1":["aíro"],"s2":["aíras"],"s3":["aíra"],"p3":["aíran"]},"SubPres":{"s1":["aíre"],"s2":["aíres"],"s3":["aíre"],"p3":["aíren"]},"CmdPos":{"s2":["aíra"],"s3":["aíre"],"p3":["aíren"]},"CmdNeg":{"s2":["aíres"],"s3":["aíre"],"p3":["aíren"]}},
      },
    aislar: {
      ok:{"IndPres":{"s1":["aíslo"],"s2":["aíslas"],"s3":["aísla"],"p3":["aíslan"]},"SubPres":{"s1":["aísle"],"s2":["aísles"],"s3":["aísle"],"p3":["aíslen"]},"CmdPos":{"s2":["aísla"],"s3":["aísle"],"p3":["aíslen"]},"CmdNeg":{"s2":["aísles"],"s3":["aísle"],"p3":["aíslen"]}},
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
    alquiler: {
      ok:{"gerundio":["alquilando"],"participio":["alquilado"],"IndPres":{"s1":["alquiler"],"s2":["alquileres"],"vos":["alquilerés"],"s3":["alquiler"],"p1":["alquileremos"],"p3":["alquileren"]},"IndFut":{"s2":["alquilerés"],"s3":["alquileré"]}},
      },
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
      ok:{"IndPres":{"s1":["amohíno"],"s2":["amohínas"],"s3":["amohína"],"p3":["amohínan"]},"SubPres":{"s1":["amohíne"],"s2":["amohínes"],"s3":["amohíne"],"p3":["amohínen"]},"CmdPos":{"s2":["amohína"],"s3":["amohíne"],"p3":["amohínen"]},"CmdNeg":{"s2":["amohínes"],"s3":["amohíne"],"p3":["amohínen"]}},
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
    anclar: {
      ok:true,
      },
    andar: {
      ok:true,
       tema_pretérito: "anduv" },
    anhelar: {
      ok:true,
      },
    animar: {
      ok:true,
      },
    aniquilar: {
      ok:true,
      },
    anotar: {
      ok:true,
      },
    ansiar: {
      ok:true,
       modelo: "vaciar" },
    anticuar: {
      ok:{"IndPres":{"s1":["anticúo"],"s2":["anticúas"],"s3":["anticúa"],"p3":["anticúan"]},"SubPres":{"s1":["anticúe"],"s2":["anticúes"],"s3":["anticúe"],"p3":["anticúen"]},"CmdPos":{"s2":["anticúa"],"s3":["anticúe"],"p3":["anticúen"]},"CmdNeg":{"s2":["anticúes"],"s3":["anticúe"],"p3":["anticúen"]}},
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
    argumentar: {
      ok:true,
      },
    argüir: {
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
      ok:{"IndPres":{"s1":["asiento"],"s2":["asientas"],"s3":["asienta"],"p3":["asientan"]},"SubPres":{"s1":["asiente"],"s2":["asientes"],"s3":["asiente"],"p3":["asienten"]},"CmdPos":{"s2":["asienta"],"s3":["asiente"],"p3":["asienten"]},"CmdNeg":{"s2":["asientes"],"s3":["asiente"],"p3":["asienten"]}},
      },
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
      ok:{"IndPres":{"s1":["asgo"]},"SubPres":{"s1":["asga"],"s2":["asgas"],"s3":["asga"],"p1":["asgamos"],"p2":["asgáis"],"p3":["asgan"]},"CmdPos":{"s3":["asga"],"p1":["asgamos"],"p3":["asgan"]},"CmdNeg":{"s2":["asgas"],"s3":["asga"],"p1":["asgamos"],"p2":["asgáis"],"p3":["asgan"]}},
      },
    asistir: {
      ok:true,
      },
    asolar: {
      ok:{"IndPres":{"s1":["asuelo","asolo"],"s2":["asuelas","asolas"],"s3":["asuela","asola"],"p3":["asuelan","asolan"]},"SubPres":{"s1":["asuele","asole"],"s2":["asueles","asoles"],"s3":["asuele","asole"],"p3":["asuelen","asolen"]},"CmdPos":{"s2":["asuela","asola"],"s3":["asuele","asole"],"p3":["asuelen","asolen"]},"CmdNeg":{"s2":["asueles","asoles"],"s3":["asuele","asole"],"p3":["asuelen","asolen"]}},
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
    atar: {
      ok:true,
      },
    atardecer: {
      ok:true,
      },
    atemorizar: {
      ok:true,
      },
    atender: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    atenuar: {
      ok:true,
      },
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
      },
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
      ok:{"IndPres":{"s1":["aúllo"],"s2":["aúllas"],"s3":["aúlla"],"p3":["aúllan"]},"SubPres":{"s1":["aúlle"],"s2":["aúlles"],"s3":["aúlle"],"p3":["aúllen"]},"CmdPos":{"s2":["aúlla"],"s3":["aúlle"],"p3":["aúllen"]},"CmdNeg":{"s2":["aúlles"],"s3":["aúlle"],"p3":["aúllen"]}},
      },
    aumentar: {
      ok:true,
      },
    aunar: {
      ok:{"IndPres":{"s1":["aúno"],"s2":["aúnas"],"s3":["aúna"],"p3":["aúnan"]},"SubPres":{"s1":["aúne"],"s2":["aúnes"],"s3":["aúne"],"p3":["aúnen"]},"CmdPos":{"s2":["aúna"],"s3":["aúne"],"p3":["aúnen"]},"CmdNeg":{"s2":["aúnes"],"s3":["aúne"],"p3":["aúnen"]}},
      },
    aupar: {
      ok:{"IndPres":{"s1":["aúpo"],"s2":["aúpas"],"s3":["aúpa"],"p3":["aúpan"]},"SubPres":{"s1":["aúpe"],"s2":["aúpes"],"s3":["aúpe"],"p3":["aúpen"]},"CmdPos":{"s2":["aúpa"],"s3":["aúpe"],"p3":["aúpen"]},"CmdNeg":{"s2":["aúpes"],"s3":["aúpe"],"p3":["aúpen"]}},
      },
    auscultar: {
      ok:true,
      },
    autoinfligir: {
      ok:{"autoinfinitivo":"autoinfligir"},
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
    añadir: {
      ok:true,
      },
    bailar: {
      ok:true,
      },
    bajar: {
      ok:true,
      },
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
      ok:{"gerundio":["bullendo"],"IndPret":{"s3":["bulló"],"p3":["bulleron"]},"SubImp":{"s1":["bullera","bullese"],"s2":["bulleras","bulleses"],"s3":["bullera","bullese"],"p1":["bulléramos","bullésemos"],"p2":["bullerais","bulleseis"],"p3":["bulleran","bullesen"]},"SubFut":{"s1":["bullere"],"s2":["bulleres"],"s3":["bullere"],"p1":["bulléremos"],"p2":["bullereis"],"p3":["bulleren"]}},
      },
    buscar: {
      ok:true,
      },
    caber: {
      ok:true,
      
        tema_presente_yo: "quep",
        tema_pretérito: "cup",
        tema_futuro: "cabr"
    },
    caer: {
      ok:true,
       tema_presente_yo: "caig" },
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
    ceñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
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
      ok:{"IndPres":{"s1":["cuezo"]},"SubPres":{"s1":["cueza"],"s2":["cuezas"],"s3":["cueza"],"p1":["cozamos"],"p2":["cozáis"],"p3":["cuezan"]},"CmdPos":{"s3":["cueza"],"p1":["cozamos"],"p3":["cuezan"]},"CmdNeg":{"s2":["cuezas"],"s3":["cueza"],"p1":["cozamos"],"p2":["cozáis"],"p3":["cuezan"]}},
       alternancia_vocálica: "o:ue" }, // FIX: various irregularities
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
      ok:{"IndPres":{"s1":["cuelo"],"s2":["cuelas"],"s3":["cuela"],"p3":["cuelan"]},"SubPres":{"s1":["cuele"],"s2":["cueles"],"s3":["cuele"],"p3":["cuelen"]},"CmdPos":{"s2":["cuela"],"s3":["cuele"],"p3":["cuelen"]},"CmdNeg":{"s2":["cueles"],"s3":["cuele"],"p3":["cuelen"]}},
      },
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
    combar: {
      ok:true,
      },
    comenzar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    comer: {
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
    comparar: {
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
       clase_conjugacional: "-ducir", tema_pretérito: "conduj" }, // FIX: linguist: how can this pattern be generalized: "pretérito fuerte con -j" ?
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
       modelo: null },
    conjurar: {
      ok:true,
      },
    conmover: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    conocer: {
      ok:true,
      },
    conquerir: {
      ok:{"gerundio":["conquiriendo"],"IndPres":{"s1":["conquiero"],"s2":["conquieres"],"s3":["conquiere"],"p3":["conquieren"]},"IndPret":{"s3":["conquirió"],"p3":["conquirieron"]},"SubPres":{"s1":["conquiera"],"s2":["conquieras"],"s3":["conquiera"],"p1":["conquiramos"],"p2":["conquiráis"],"p3":["conquieran"]},"SubImp":{"s1":["conquiriera","conquiriese"],"s2":["conquirieras","conquirieses"],"s3":["conquiriera","conquiriese"],"p1":["conquiriéramos","conquiriésemos"],"p2":["conquirierais","conquirieseis"],"p3":["conquirieran","conquiriesen"]},"SubFut":{"s1":["conquiriere"],"s2":["conquirieres"],"s3":["conquiriere"],"p1":["conquiriéremos"],"p2":["conquiriereis"],"p3":["conquirieren"]},"CmdPos":{"s2":["conquiere"],"s3":["conquiera"],"p1":["conquiramos"],"p3":["conquieran"]},"CmdNeg":{"s2":["conquieras"],"s3":["conquiera"],"p1":["conquiramos"],"p2":["conquiráis"],"p3":["conquieran"]}},
      },
    conseguir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    consensuar: {
      ok:{"IndPres":{"s1":["consensúo"],"s2":["consensúas"],"s3":["consensúa"],"p3":["consensúan"]},"SubPres":{"s1":["consensúe"],"s2":["consensúes"],"s3":["consensúe"],"p3":["consensúen"]},"CmdPos":{"s2":["consensúa"],"s3":["consensúe"],"p3":["consensúen"]},"CmdNeg":{"s2":["consensúes"],"s3":["consensúe"],"p3":["consensúen"]}},
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
       alternancia_vocálica: "o:ue" },
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
      ok:{"IndPres":{"s1":["corroo","corroigo","corroyo"]},"SubPres":{"s1":["corroa","corroiga","corroya"],"s2":["corroas","corroigas","corroyas"],"s3":["corroa","corroiga","corroya"],"p1":["corroamos","corroigamos","corroyamos"],"p2":["corroáis","corroigáis","corroyáis"],"p3":["corroan","corroigan","corroyan"]},"CmdPos":{"s3":["corroa","corroiga","corroya"],"p1":["corroamos","corroigamos","corroyamos"],"p3":["corroan","corroigan","corroyan"]},"CmdNeg":{"s2":["corroas","corroigas","corroyas"],"s3":["corroa","corroiga","corroya"],"p1":["corroamos","corroigamos","corroyamos"],"p2":["corroáis","corroigáis","corroyáis"],"p3":["corroan","corroigan","corroyan"]}},
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
      },
    creer: {
      ok:true,
      },
    criar: {
      ok:{"IndPres":{"vos":["crias"],"p2":["criais"]},"IndPret":{"s1":["crie"],"s3":["crio"]},"SubPres":{"p2":["crieis"]},"CmdPos":{"vos":["cria"]},"CmdNeg":{"p2":["crieis"]}},
       modelo: "vaciar" },
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
        // FIX: linguist: unclear
        excepciones_léxicas: {
            reglas: {
                // The default "-ar" verb pattern of accent the last sylable doesn't apply to vos forms of "dar", since "dás" is only one sylable
                IndPres: { suffixes: { s1: ["oy"], p2: ["ais"], vos: null } },
                SubPres: { suffixes: { s1: ["é"], s3: ["é"], p2: ["eis"] } },
                IndPret: { suffixes: { s1: ["i"], s2: ["iste"], s3: ["io"], p1: ["imos"], p2: ["isteis"], p3: ["ieron"] } },
                CmdPos: { suffixes: { s3: ["é"], vos: null } },
                CmdNeg: { suffixes: { s3: ["é"], p2: ["eis"] } },
            }
        }
    },
    debatir: {
      ok:true,
      },
    deber: {
      ok:true,
      },
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
        tema_presente_yo: "dig",
        tema_pretérito: "dij",
        tema_futuro: "dir",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            participio: ["dicho"],
            gerundio: ["diciendo"],
            imperativo_tú: "di"
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
    desafiar: {
      ok:true,
       modelo: "vaciar" },
    desaguar: {
      ok:true,
      },
    desahijar: {
      ok:{"IndPres":{"s1":["desahíjo"],"s2":["desahíjas"],"s3":["desahíja"],"p3":["desahíjan"]},"SubPres":{"s1":["desahíje"],"s2":["desahíjes"],"s3":["desahíje"],"p3":["desahíjen"]},"CmdPos":{"s2":["desahíja"],"s3":["desahíje"],"p3":["desahíjen"]},"CmdNeg":{"s2":["desahíjes"],"s3":["desahíje"],"p3":["desahíjen"]}},
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
      ok:{"IndPres":{"s1":["desasgo"]},"SubPres":{"s1":["desasga"],"s2":["desasgas"],"s3":["desasga"],"p1":["desasgamos"],"p2":["desasgáis"],"p3":["desasgan"]},"CmdPos":{"s3":["desasga"],"p1":["desasgamos"],"p3":["desasgan"]},"CmdNeg":{"s2":["desasgas"],"s3":["desasga"],"p1":["desasgamos"],"p2":["desasgáis"],"p3":["desasgan"]}},
      },
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
      ok:{"IndPres":{"s1":["descafeíno"],"s2":["descafeínas"],"s3":["descafeína"],"p3":["descafeínan"]},"SubPres":{"s1":["descafeíne"],"s2":["descafeínes"],"s3":["descafeíne"],"p3":["descafeínen"]},"CmdPos":{"s2":["descafeína"],"s3":["descafeíne"],"p3":["descafeínen"]},"CmdNeg":{"s2":["descafeínes"],"s3":["descafeíne"],"p3":["descafeínen"]}},
      },
    descansar: {
      ok:true,
      },
    descargar: {
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
    desconfiar: {
      ok:true,
       modelo: "vaciar" },
    desconectar: {
      ok:true,
      },
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
      },
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
      ok:{"gerundio":["desliendo"],"IndPres":{"s1":["deslío"],"s2":["deslíes"],"s3":["deslíe"],"p3":["deslíen"]},"IndPret":{"s3":["deslió"],"p3":["deslieron"]},"SubPres":{"s1":["deslía"],"s2":["deslías"],"s3":["deslía"],"p1":["desliamos"],"p2":["desliáis"],"p3":["deslían"]},"SubImp":{"s1":["desliera","desliese"],"s2":["deslieras","deslieses"],"s3":["desliera","desliese"],"p1":["desliéramos","desliésemos"],"p2":["deslierais","deslieseis"],"p3":["deslieran","desliesen"]},"SubFut":{"s1":["desliere"],"s2":["deslieres"],"s3":["desliere"],"p1":["desliéremos"],"p2":["desliereis"],"p3":["deslieren"]},"CmdPos":{"s2":["deslíe"],"s3":["deslía"],"p1":["desliamos"],"p2":["desleíd"],"p3":["deslían"]},"CmdNeg":{"s2":["deslías"],"s3":["deslía"],"p1":["desliamos"],"p2":["desliáis"],"p3":["deslían"]}},
      },
    deslizar: {
      ok:true,
      },
    desmontar: {
      ok:true,
      },
    desobedecer: {
      ok:true,
      },
    desosar: {
      ok:{"IndPres":{"s1":["deshueso"],"s2":["deshuesas"],"s3":["deshuesa"],"p3":["deshuesan"]},"SubPres":{"s1":["deshuese"],"s2":["deshueses"],"s3":["deshuese"],"p3":["deshuesen"]},"CmdPos":{"s2":["deshuesa"],"s3":["deshuese"],"p3":["deshuesen"]},"CmdNeg":{"s2":["deshueses"],"s3":["deshuese"],"p3":["deshuesen"]}},
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
      },
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
    destruir: {
      ok:true,
      },
    desvaír: {
      ok:{"CmdPos":{"p2":["desvaíd"]}},
      },
    desvariar: {
      ok:{"IndPres":{"s1":["desvarío"],"s2":["desvarías"],"s3":["desvaría"],"p3":["desvarían"]},"SubPres":{"s1":["desvaríe"],"s2":["desvaríes"],"s3":["desvaríe"],"p3":["desvaríen"]},"CmdPos":{"s2":["desvaría"],"s3":["desvaríe"],"p3":["desvaríen"]},"CmdNeg":{"s2":["desvaríes"],"s3":["desvaríe"],"p3":["desvaríen"]}},
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
      ok:{"CmdPos":{"s2":["dígnate"],"vos":["dignate"],"s3":["dígnese"],"p1":["dignémonos"],"p2":["dignaos"],"p3":["dígnense"]}},
      },
    diluir: {
      ok:true,
      },
    dirigir: {
      ok:true,
      },
    discernir: {
      ok:{"gerundio":["discerniendo"],"IndPret":{"s3":["discernió"],"p3":["discernieron"]},"SubPres":{"p1":["discernamos"],"p2":["discernáis"]},"SubImp":{"s1":["discerniera","discerniese"],"s2":["discernieras","discernieses"],"s3":["discerniera","discerniese"],"p1":["discerniéramos","discerniésemos"],"p2":["discernierais","discernieseis"],"p3":["discernieran","discerniesen"]},"SubFut":{"s1":["discerniere"],"s2":["discernieres"],"s3":["discerniere"],"p1":["discerniéremos"],"p2":["discerniereis"],"p3":["discernieren"]},"CmdPos":{"p1":["discernamos"]},"CmdNeg":{"p1":["discernamos"],"p2":["discernáis"]}},
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
      ok:{"IndPres":{"s1":["ejerzo"]},"SubPres":{"s1":["ejerza"],"s2":["ejerzas"],"s3":["ejerza"],"p1":["ejerzamos"],"p2":["ejerzáis"],"p3":["ejerzan"]},"CmdPos":{"s3":["ejerza"],"p1":["ejerzamos"],"p3":["ejerzan"]},"CmdNeg":{"s2":["ejerzas"],"s3":["ejerza"],"p1":["ejerzamos"],"p2":["ejerzáis"],"p3":["ejerzan"]}},
      },
    elaborar: {
      ok:true,
      },
    elegir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    electrocutar: {
      ok:true,
      },
    elevar: {
      ok:{"IndPres":{"s1":["elevo"],"s2":["elevas"],"s3":["eleva"],"p3":["elevan"]},"SubPres":{"s1":["eleve"],"s2":["eleves"],"s3":["eleve"],"p3":["eleven"]},"CmdPos":{"s2":["eleva"],"s3":["eleve"],"p3":["eleven"]},"CmdNeg":{"s2":["eleves"],"s3":["eleve"],"p3":["eleven"]}},
       alternancia_vocálica: "e:ie" }, // FIX: linguist:  solo en varios regiones
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
      ok:{"gerundio":["embistiendo"],"IndPres":{"s1":["embisto"],"s2":["embistes"],"s3":["embiste"],"p3":["embisten"]},"IndPret":{"s3":["embistió"],"p3":["embistieron"]},"SubPres":{"s1":["embista"],"s2":["embistas"],"s3":["embista"],"p1":["embistamos"],"p2":["embistáis"],"p3":["embistan"]},"SubImp":{"s1":["embistiera","embistiese"],"s2":["embistieras","embistieses"],"s3":["embistiera","embistiese"],"p1":["embistiéramos","embistiésemos"],"p2":["embistierais","embistieseis"],"p3":["embistieran","embistiesen"]},"SubFut":{"s1":["embistiere"],"s2":["embistieres"],"s3":["embistiere"],"p1":["embistiéremos"],"p2":["embistiereis"],"p3":["embistieren"]},"CmdPos":{"s2":["embiste"],"s3":["embista"],"p1":["embistamos"],"p3":["embistan"]},"CmdNeg":{"s2":["embistas"],"s3":["embista"],"p1":["embistamos"],"p2":["embistáis"],"p3":["embistan"]}},
      },
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
    enganchar: {
      ok:true,
      },
    engañar: {
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
      },
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
      ok:{"IndPres":{"s1":["enraízo"],"s2":["enraízas"],"s3":["enraíza"],"p3":["enraízan"]},"SubPres":{"s1":["enraíce"],"s2":["enraíces"],"s3":["enraíce"],"p3":["enraícen"]},"CmdPos":{"s2":["enraíza"],"s3":["enraíce"],"p3":["enraícen"]},"CmdNeg":{"s2":["enraíces"],"s3":["enraíce"],"p3":["enraícen"]}},
       modelo: "enraizar", alternancia_vocálica: "e:ie" },
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
      ok:{"participio":["entrevisto"],"IndPres":{"s1":["entreveo"],"s2":["entrevés"],"s3":["entrevé"],"p3":["entrevén"]},"IndImp":{"s1":["entreveía"],"s2":["entreveías"],"s3":["entreveía"],"p1":["entreveíamos"],"p2":["entreveíais"],"p3":["entreveían"]},"SubPres":{"s1":["entrevea"],"s2":["entreveas"],"s3":["entrevea"],"p1":["entreveamos"],"p2":["entreveáis"],"p3":["entrevean"]},"CmdPos":{"s2":["entrevé"],"s3":["entrevea"],"p1":["entreveamos"],"p3":["entrevean"]},"CmdNeg":{"s2":["entreveas"],"s3":["entrevea"],"p1":["entreveamos"],"p2":["entreveáis"],"p3":["entrevean"]}},
      },
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
      ok:{"IndPres":{"s1":["yergo","irgo"],"s2":["yergues","irgues"],"s3":["yergue","irgue"],"p3":["yerguen","irguen"]},"SubPres":{"s1":["yerga","irga"],"s2":["yergas","irgas"],"s3":["yerga","irga"],"p1":["irgamos"],"p2":["irgáis"],"p3":["yergan","irgan"]},"CmdPos":{"s2":["yergue","irgue"],"s3":["yerga","irga"],"p1":["irgamos"],"p3":["yergan","irgan"]},"CmdNeg":{"s2":["yergas","irgas"],"s3":["yerga","irga"],"p1":["irgamos"],"p2":["irgáis"],"p3":["yergan","irgan"]}},
      
        alternancia_vocálica: "e:ie",
        tema_presente_yo: "yerg", // FIX: tema_presente_yo: ["irg", "yerg"],
        excepciones_léxicas: { gerundio: ["irguiendo"] }
    },
    errar: {
      ok:{"IndPres":{"s1":["yerro","erro"],"s2":["yerras","erras"],"s3":["yerra","erra"],"p3":["yerran","erran"]},"SubPres":{"s1":["yerre","erre"],"s2":["yerres","erres"],"s3":["yerre","erre"],"p3":["yerren","erren"]},"CmdPos":{"s2":["yerra","erra"],"s3":["yerre","erre"],"p3":["yerren","erren"]},"CmdNeg":{"s2":["yerres","erres"],"s3":["yerre","erre"],"p3":["yerren","erren"]}},
      }, // FIX: tiene dos formas
    eructar: {
      ok:true,
      },
    escabullir: {
      ok:{"gerundio":["escabullendo"],"IndPret":{"s3":["escabulló"],"p3":["escabulleron"]},"SubImp":{"s1":["escabullera","escabullese"],"s2":["escabulleras","escabulleses"],"s3":["escabullera","escabullese"],"p1":["escabulléramos","escabullésemos"],"p2":["escabullerais","escabulleseis"],"p3":["escabulleran","escabullesen"]},"SubFut":{"s1":["escabullere"],"s2":["escabulleres"],"s3":["escabullere"],"p1":["escabulléremos"],"p2":["escabullereis"],"p3":["escabulleren"]}},
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
      ok:{"IndPres":{"s1":["esparzo"]},"SubPres":{"s1":["esparza"],"s2":["esparzas"],"s3":["esparza"],"p1":["esparzamos"],"p2":["esparzáis"],"p3":["esparzan"]},"CmdPos":{"s3":["esparza"],"p1":["esparzamos"],"p3":["esparzan"]},"CmdNeg":{"s2":["esparzas"],"s3":["esparza"],"p1":["esparzamos"],"p2":["esparzáis"],"p3":["esparzan"]}},
      },
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
    estandarizar: {
      ok:true,
      },
    estar: {
      ok:true,
      
        sufijo_presente_yo: "oy",
        tema_pretérito: "estuv",
        excepciones_léxicas: {
            imperativo_tú: "está",
            reglas: {
                IndPres: { suffixes: { s2: ["ás"], s3: ["á"], p3: ["án"] } },
                SubPres: { suffixes: { s1: ["é"], s2: ["és"], s3: ["é"], p3: ["én"] } },
                CmdPos: { suffixes: { s3: ["é"], p3: ["én"] } },
                CmdNeg: { suffixes: { s2: ["és"], s3: ["é"], p3: ["én"] } }
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
      ok:{"IndPres":{"s1":["estriego","estrego"],"s2":["estriegas","estregas"],"s3":["estriega","estrega"],"p3":["estriegan","estregan"]},"SubPres":{"s1":["estriegue","estregue"],"s2":["estriegues","estregues"],"s3":["estriegue","estregue"],"p3":["estrieguen","estreguen"]},"CmdPos":{"s2":["estriega","estrega"],"s3":["estriegue","estregue"],"p3":["estrieguen","estreguen"]},"CmdNeg":{"s2":["estriegues","estregues"],"s3":["estriegue","estregue"],"p3":["estrieguen","estreguen"]}},
       alternancia_vocálica: "e:ie" }, // FIX: multiple forms
    estremecer: {
      ok:true,
      },
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
      ok:{"participio":["frito"],"IndPret":{"s3":["frió"]},"CmdNeg":{"s2":["frías"],"s3":["fría"],"p3":["frían"]}},
       modelo: "reír" },
    frotar: {
      ok:true,
      },
    fruncir: {
      ok:{"IndPres":{"s1":["frunzo"]},"SubPres":{"s1":["frunza"],"s2":["frunzas"],"s3":["frunza"],"p1":["frunzamos"],"p2":["frunzáis"],"p3":["frunzan"]},"CmdPos":{"s3":["frunza"],"p1":["frunzamos"],"p3":["frunzan"]},"CmdNeg":{"s2":["frunzas"],"s3":["frunza"],"p1":["frunzamos"],"p2":["frunzáis"],"p3":["frunzan"]}},
      },
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
      ok:{"IndPret":{"s3":["gimió"],"p3":["gimieron"]},"SubImp":{"s1":["gimiera","gimiese"],"s2":["gimieras","gimieses"],"s3":["gimiera","gimiese"],"p1":["gimiéramos","gimiésemos"],"p2":["gimierais","gimieseis"],"p3":["gimieran","gimiesen"]},"SubFut":{"s1":["gimiere"],"s2":["gimieres"],"s3":["gimiere"],"p1":["gimiéremos"],"p2":["gimiereis"],"p3":["gimieren"]}},
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
      },
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
      ok:{"IndPres":{"vos":["guiás"],"p2":["guiáis"]},"IndPret":{"s1":["guié"],"s3":["guió"]},"SubPres":{"p2":["guiéis"]},"CmdPos":{"vos":["guiá"]},"CmdNeg":{"p2":["guiéis"]}},
      
        modelo: "guiar",
        // clase_conjugacional: "-iar",
        // TODO: hay formas reformadas en la reforma ortográfica de la RAE de 2010, considera añadir estas formas
        // Otherwise, the accent is the only thing different from the regular forms
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_char_of_s123p3_stem: true,
                    suffixes: { s3: ["á"], p2: ["ais"], vos: ["as"] } },
                IndPret: { suffixes: { s1: ["e"], s3: ["o"] } },
                SubPres: { stress_last_char_of_s123p3_stem: true,
                    suffixes: { p2: ["eis"] } },
                CmdPos: { stress_last_char_of_s123p3_stem: true,
                    suffixes: { vos: ["a"] } },
                CmdNeg: { stress_last_char_of_s123p3_stem: true,
                    suffixes: { p2: ["eis"] } },
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
      
        tema_pretérito: "hub",
        tema_futuro: "habr",
        excepciones_léxicas: {
            supletivo: true,
            imperativo_tú: ["habe", "he"],
            reglas: {
                IndPres: { forms: { s1: ["he"], s2: ["has"], s3: ["hay", "ha"], p1: ["hemos"], p3: ["han"], vos: null } },
                SubPres: { tema: "hay" },
                CmdPos: { tema: "hay",
                    forms: { p2: ["habed"], vos: null } },
                CmdNeg: { tema: "hay" },
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
        tema_presente_yo: "hag",
        tema_pretérito: "hic",
        tema_futuro: "har",
        excepciones_léxicas: {
            participio: ["hecho"],
            imperativo_tú: "haz",
            reglas: {
                // FIX: linguist: should "hizo" be managed with sound preserving transformations?
                IndPret: { forms: { s3: ["hizo"] } }
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
      ok:{"gerundio":["hendiendo"],"IndPret":{"s3":["hendió"],"p3":["hendieron"]},"SubPres":{"p1":["hendamos"],"p2":["hendáis"]},"SubImp":{"s1":["hendiera","hendiese"],"s2":["hendieras","hendieses"],"s3":["hendiera","hendiese"],"p1":["hendiéramos","hendiésemos"],"p2":["hendierais","hendieseis"],"p3":["hendieran","hendiesen"]},"SubFut":{"s1":["hendiere"],"s2":["hendieres"],"s3":["hendiere"],"p1":["hendiéremos"],"p2":["hendiereis"],"p3":["hendieren"]},"CmdPos":{"p1":["hendamos"]},"CmdNeg":{"p1":["hendamos"],"p2":["hendáis"]}},
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
      ok:{"participio":["impreso"]},
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
    incrustar: {
      ok:true,
      },
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
    inquietar: {
      ok:true,
      },
    inquirir: {
      ok:true,
       alternancia_vocálica: "i:ie" },
    inscribir: {
      ok:{"participio":["inscrito"]},
      },
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
    interrogar: {
      ok:true,
      },
    interrumpir: {
      ok:true,
      },
    interpretar: {
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
        no_admite_prefijos: true,
        tema_pretérito: "fu",
        sufijo_presente_yo: "oy",
        excepciones_léxicas: {
            supletivo: true,
            participio: ["ido"],
            gerundio: ["yendo"],
            reglas: {
                // The default "-ir" verb pattern of accent the last sylable doesn't apply to vos forms of "ir", since "ir" is only one sylable
                IndPres: { forms: { s1: ["voy"], s2: ["vas"], s3: ["va"], p1: ["vamos"], p2: ["vais"], p3: ["van"], vos: null } },
                SubPres: { tema: "vay" },
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"], p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                IndImp: { forms: { s1: ["iba"], s2: ["ibas"], s3: ["iba"], p1: ["íbamos"], p2: ["ibais"], p3: ["iban"] } },
                // IndFut: uses regular conjugation
                // IndCond: uses regular conjugation
                CmdPos: { forms: { s2: ["ve"], s3: ["vaya"], p1: ["vayamos", "vamos"], p3: ["vayan"], vos: ["andá"] } },
                // FIX: linguist: the relation of CmdNeg being derived from SubPres is a fixed rule, right? If so, I can move this into code...
                CmdNeg: { tema: "vay" },
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
       alternancia_vocálica: "o:ue" }, // FIX: conjugate_only: ["s3"]},
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
      },
    lustrar: {
      ok:true,
      },
    maldecir: {
      ok:{"participio":["maldecido"],"IndFut":{"s1":["maldeciré"],"s2":["maldecirás"],"s3":["maldecirá"],"p1":["maldeciremos"],"p2":["maldeciréis"],"p3":["maldecirán"]},"IndCond":{"s1":["maldeciría"],"s2":["maldecirías"],"s3":["maldeciría"],"p1":["maldeciríamos"],"p2":["maldeciríais"],"p3":["maldecirían"]},"CmdPos":{"s2":["maldice"]}},
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
    maullar: {
      ok:{"IndPres":{"s1":["maúllo"],"s2":["maúllas"],"s3":["maúlla"],"p3":["maúllan"]},"SubPres":{"s1":["maúlle"],"s2":["maúlles"],"s3":["maúlle"],"p3":["maúllen"]},"CmdPos":{"s2":["maúlla"],"s3":["maúlle"],"p3":["maúllen"]},"CmdNeg":{"s2":["maúlles"],"s3":["maúlle"],"p3":["maúllen"]}},
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
      ok:{"IndPres":{"s1":["menstrúo"],"s2":["menstrúas"],"s3":["menstrúa"],"p3":["menstrúan"]},"SubPres":{"s1":["menstrúe"],"s2":["menstrúes"],"s3":["menstrúe"],"p3":["menstrúen"]},"CmdPos":{"s2":["menstrúa"],"s3":["menstrúe"],"p3":["menstrúen"]},"CmdNeg":{"s2":["menstrúes"],"s3":["menstrúe"],"p3":["menstrúen"]}},
      },
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
      ok:{"participio":["muerto"],"IndPret":{"s3":["murió"],"p3":["murieron"]},"SubImp":{"s1":["muriera","muriese"],"s2":["murieras","murieses"],"s3":["muriera","muriese"],"p1":["muriéramos","muriésemos"],"p2":["murierais","murieseis"],"p3":["murieran","muriesen"]},"SubFut":{"s1":["muriere"],"s2":["murieres"],"s3":["muriere"],"p1":["muriéremos"],"p2":["muriereis"],"p3":["murieren"]}},
       modelo: "dormir" },
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
      },
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
       alternancia_vocálica: "e:ie" }, // FIX: conjugate_only: ["s3"]},
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
      
        // FIX: linguist: why is this a class?
        modelo: "oír",
        tema_presente_yo: "oig",
        excepciones_léxicas: {
            reglas: {
                CmdPos: { suffixes: { p2: ["íd"], } },
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
    organizar: {
      ok:true,
      },
    oponer: {
      ok:true,
       modelo: "poner" },
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
       modelo: "pedir", alternancia_vocálica: "e:i" },
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
       alternancia_vocálica: "e:ie" },
    perder: {
      ok:true,
       alternancia_vocálica: "e:ie" },
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
      ok:{"IndPres":{"vos":["pias"],"p2":["piais"]},"IndPret":{"s1":["pie"],"s3":["pio"]},"SubPres":{"p2":["pieis"]},"CmdPos":{"vos":["pia"]},"CmdNeg":{"p2":["pieis"]}},
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
      
        alternancia_vocálica: "o:ue",
        tema_pretérito: "pud",
        tema_futuro: "podr",
        excepciones_léxicas: { gerundio_tema_cambio_excepcional: "o:u" }
    },
    poner: {
      ok:true,
      
        modelo: "poner",
        tema_presente_yo: "pong",
        tema_pretérito: "pus",
        tema_futuro: "pondr",
        excepciones_léxicas: {
            participio: ["puesto"],
            imperativo_tú: "pon",
            reglas: {
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } },
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
      ok:{"IndPres":{"s2":["prevés"],"s3":["prevé"],"p2":["prevéis"],"p3":["prevén"]},"IndPret":{"s1":["preví"],"s3":["previó"]},"CmdPos":{"s2":["prevé"]}},
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
      ok:{"IndPres":{"s1":["prohíbo"],"s2":["prohíbes"],"s3":["prohíbe"],"p3":["prohíben"]},"SubPres":{"s1":["prohíba"],"s2":["prohíbas"],"s3":["prohíba"],"p3":["prohíban"]},"CmdPos":{"s2":["prohíbe"],"s3":["prohíba"],"p3":["prohíban"]},"CmdNeg":{"s2":["prohíbas"],"s3":["prohíba"],"p3":["prohíban"]}},
      },
    prohijar: {
      ok:{"IndPres":{"s1":["prohíjo"],"s2":["prohíjas"],"s3":["prohíja"],"p3":["prohíjan"]},"SubPres":{"s1":["prohíje"],"s2":["prohíjes"],"s3":["prohíje"],"p3":["prohíjen"]},"CmdPos":{"s2":["prohíja"],"s3":["prohíje"],"p3":["prohíjen"]},"CmdNeg":{"s2":["prohíjes"],"s3":["prohíje"],"p3":["prohíjen"]}},
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
      },
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
      ok:{"participio":["podrido"]},
      },
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
        tema_pretérito: "quis",
        tema_futuro: "querr",
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
      },
    reconstituir: {
      ok:true,
      },
    reconstruir: {
      ok:true,
      },
    recontar: {
      ok:{"IndPres":{"s1":["recuento"],"s2":["recuentas"],"s3":["recuenta"],"p3":["recuentan"]},"SubPres":{"s1":["recuente"],"s2":["recuentes"],"s3":["recuente"],"p3":["recuenten"]},"CmdPos":{"s2":["recuenta"],"s3":["recuente"],"p3":["recuenten"]},"CmdNeg":{"s2":["recuentes"],"s3":["recuente"],"p3":["recuenten"]}},
      },
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
      ok:{"IndPres":{"s1":["reencuentro"],"s2":["reencuentras"],"s3":["reencuentra"],"p3":["reencuentran"]},"SubPres":{"s1":["reencuentre"],"s2":["reencuentres"],"s3":["reencuentre"],"p3":["reencuentren"]},"CmdPos":{"s2":["reencuentra"],"s3":["reencuentre"],"p3":["reencuentren"]},"CmdNeg":{"s2":["reencuentres"],"s3":["reencuentre"],"p3":["reencuentren"]}},
      },
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
      ok:{"IndPres":{"s1":["rehílo"],"s2":["rehílas"],"s3":["rehíla"],"p3":["rehílan"]},"SubPres":{"s1":["rehíle"],"s2":["rehíles"],"s3":["rehíle"],"p3":["rehílen"]},"CmdPos":{"s2":["rehíla"],"s3":["rehíle"],"p3":["rehílen"]},"CmdNeg":{"s2":["rehíles"],"s3":["rehíle"],"p3":["rehílen"]}},
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
      ok:{"IndPret":{"s3":["rió"]},"CmdNeg":{"s2":["rías"],"s3":["ría"],"p3":["rían"]}},
      
        modelo: "reír",
        alternancia_vocálica: "e:ie", // añado po DeepSeek 27 feb 2026
        // alternancia_vocálica: "i:í",  FIX: linguist: is there a vowel change rule?
        excepciones_léxicas: {
            gerundio: ["riendo"],
            participio: ["reído"],
            reglas: {
                // FIX: linguist: are there other reglas I can use?
                // FIX: must formalize the relationship of CmdPos on SubPres
                IndPres: { forms: { s1: ["río"], s2: ["ríes"], s3: ["ríe"], p1: ["reímos"], p2: ["reís"], p3: ["ríen"], vos: ["reís"], } },
                IndPret: { forms: { s3: ["rio"], p3: ["rieron"], } },
                SubPres: { tema: "rí",
                    //   forms: {s1: ["ría"], s2: ["rías"], s3: ["ría"], p1: ["riamos"], p2: ["riáis"], p3: ["rían"] }},
                    forms: { s3: ["ría"], p1: ["riamos"], p2: ["riáis"], p3: ["rían"] } },
                CmdPos: { tema: "rí",
                    forms: { p1: ["riamos"], p2: ["reíd"], vos: ["reí"] } }
            }
        }
    },
    relajar: {
      ok:true,
      },
    relucir: {
      ok:true,
      },
    rememorar: {
      ok:true,
      },
    remodelar: {
      ok:true,
      },
    remplazar: {
      ok:true,
      },
    renunciar: {
      ok:true,
      },
    repartir: {
      ok:true,
      },
    repasar: {
      ok:true,
      },
    replicar: {
      ok:true,
      },
    reposar: {
      ok:true,
      },
    reprimir: {
      ok:true,
      },
    resbalar: {
      ok:true,
      },
    resentir: {
      ok:{"gerundio":["resintiendo"],"IndPres":{"s1":["resiento"],"s2":["resientes"],"s3":["resiente"],"p3":["resienten"]},"IndPret":{"s3":["resintió"],"p3":["resintieron"]},"SubPres":{"s1":["resienta"],"s2":["resientas"],"s3":["resienta"],"p1":["resintamos"],"p2":["resintáis"],"p3":["resientan"]},"SubImp":{"s1":["resintiera","resintiese"],"s2":["resintieras","resintieses"],"s3":["resintiera","resintiese"],"p1":["resintiéramos","resintiésemos"],"p2":["resintierais","resintieseis"],"p3":["resintieran","resintiesen"]},"SubFut":{"s1":["resintiere"],"s2":["resintieres"],"s3":["resintiere"],"p1":["resintiéremos"],"p2":["resintiereis"],"p3":["resintieren"]},"CmdPos":{"s2":["resiente"],"s3":["resienta"],"p1":["resintamos"],"p3":["resientan"]},"CmdNeg":{"s2":["resientas"],"s3":["resienta"],"p1":["resintamos"],"p2":["resintáis"],"p3":["resientan"]}},
      },
    resistir: {
      ok:true,
      },
    respirar: {
      ok:true,
      },
    restar: {
      ok:true,
      },
    restaurar: {
      ok:true,
      },
    remendar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    remorder: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    remover: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    rendir: {
      ok:{"IndPret":{"s3":["rindió"],"p3":["rindieron"]},"SubImp":{"s1":["rindiera","rindiese"],"s2":["rindieras","rindieses"],"s3":["rindiera","rindiese"],"p1":["rindiéramos","rindiésemos"],"p2":["rindierais","rindieseis"],"p3":["rindieran","rindiesen"]},"SubFut":{"s1":["rindiere"],"s2":["rindieres"],"s3":["rindiere"],"p1":["rindiéremos"],"p2":["rindiereis"],"p3":["rindieren"]}},
       modelo: "pedir" },
    reñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    renovar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    reparar: {
      ok:true,
      },
    repercutir: {
      ok:true,
      },
    repetir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    representar: {
      ok:true,
      },
    reprobar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    requerir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    resfriar: {
      ok:true,
       modelo: "vaciar" },
    resolver: {
      ok:{"participio":["resuelto"]},
       modelo: "mover" },
    responder: {
      ok:true,
      },
    restituir: {
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
      
        tema_pretérito: "sup",
        tema_futuro: "sabr",
        excepciones_léxicas: {
            reglas: {
                // similar a caber
                IndPres: { forms: { s1: ["sé"] } },
                SubPres: { tema: "sep" },
                CmdPos: { forms: { s3: ["sepa"], p1: ["sepamos"], p3: ["sepan"] } },
                CmdNeg: { tema: "sep" },
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
      
        tema_presente_yo: "salg",
        tema_futuro: "saldr",
        excepciones_léxicas: { "imperativo_tú": "sal" }
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
        tema_presente_yo: "sig",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: { tema_subjuntivo_yo: "sig" }
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
        excepciones_léxicas: {
            supletivo: true,
            reglas: {
                IndPres: { forms: { s1: ["soy"], s2: ["eres"], s3: ["es"], p1: ["somos"], p2: ["sois"], p3: ["son"], vos: ["sos"] } },
                IndImp: { forms: { s1: ["era"], s2: ["eras"], s3: ["era"], p1: ["éramos"], p2: ["erais"], p3: ["eran"] } },
                IndPret: { forms: { s1: ["fui"], s2: ["fuiste"], s3: ["fue"], p1: ["fuimos"], p2: ["fuisteis"], p3: ["fueron"] } },
                SubPres: { tema: "se" },
                CmdPos: { forms: { s2: ["sé"], s3: ["sea"], p1: ["seamos"], p3: ["sean"], vos: null } },
                CmdNeg: { tema: "se" },
            }
        }
    },
    serrar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    servir: {
      ok:true,
       alternancia_vocálica: "e:i" },
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
      ok:{"IndPres":{"s1":["sobrehílo"],"s2":["sobrehílas"],"s3":["sobrehíla"],"p3":["sobrehílan"]},"SubPres":{"s1":["sobrehíle"],"s2":["sobrehíles"],"s3":["sobrehíle"],"p3":["sobrehílen"]},"CmdPos":{"s2":["sobrehíla"],"s3":["sobrehíle"],"p3":["sobrehílen"]},"CmdNeg":{"s2":["sobrehíles"],"s3":["sobrehíle"],"p3":["sobrehílen"]}},
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
      ok:{"participio":["sofrito"],"IndPret":{"s3":["sofrió"]},"CmdNeg":{"s2":["sofrías"],"s3":["sofría"],"p3":["sofrían"]}},
       modelo: "reír" },
    solar: {
      ok:{"IndPres":{"s1":["suelo"],"s2":["suelas"],"s3":["suela"],"p3":["suelan"]},"SubPres":{"s1":["suele"],"s2":["sueles"],"s3":["suele"],"p3":["suelen"]},"CmdPos":{"s2":["suela"],"s3":["suele"],"p3":["suelen"]},"CmdNeg":{"s2":["sueles"],"s3":["suele"],"p3":["suelen"]}},
      },
    soldar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
    soler: {
      ok:{"participio":null},
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
    sonreír: {
      ok:{"IndPret":{"s3":["sonrió"]},"CmdNeg":{"s2":["sonrías"],"s3":["sonría"],"p3":["sonrían"]}},
       modelo: "reír" },
    soñar: {
      ok:true,
       alternancia_vocálica: "o:ue" },
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
      ok:{"IndPres":{"s1":["sotierro","soterro"],"s2":["sotierras","soterras"],"s3":["sotierra","soterra"],"p3":["sotierran","soterran"]},"SubPres":{"s1":["sotierre","soterre"],"s2":["sotierres","soterres"],"s3":["sotierre","soterre"],"p3":["sotierren","soterren"]},"CmdPos":{"s2":["sotierra","soterra"],"s3":["sotierre","soterre"],"p3":["sotierren","soterren"]},"CmdNeg":{"s2":["sotierres","soterres"],"s3":["sotierre","soterre"],"p3":["sotierren","soterren"]}},
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
      ok:{"participio":["suscrito"]},
      },
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
        tema_presente_yo: "teng",
        tema_pretérito: "tuv",
        tema_futuro: "tendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            imperativo_tú: "ten",
            reglas: {
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } },
            }
        }
    },
    tentar: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    terminar: {
      ok:true,
      },
    teñir: {
      ok:true,
       alternancia_vocálica: "e:i" },
    textear: {
      ok:{"IndPres":{"s3":["textean"]},"IndPret":{"p3":["texteron"]},"SubImp":{"s1":["textera","textease"],"s2":["texteras","texteases"],"s3":["textera","textease"],"p2":["texterais","texteaseis"],"p3":["texteran","texteasen"]},"SubFut":{"s1":["textere"],"s2":["texteres"],"s3":["textere"],"p2":["textereis"],"p3":["texteren"]},"CmdPos":{"s2":["texte"]}},
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
      ok:{"IndPres":{"s1":["tuerzo"]},"SubPres":{"s1":["tuerza"],"s2":["tuerzas"],"s3":["tuerza"],"p1":["torzamos"],"p2":["torzáis"],"p3":["tuerzan"]},"CmdPos":{"s3":["tuerza"],"p1":["torzamos"],"p3":["tuerzan"]},"CmdNeg":{"s2":["tuerzas"],"s3":["tuerza"],"p1":["torzamos"],"p2":["torzáis"],"p3":["tuerzan"]}},
       alternancia_vocálica: "o:ue" },
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
       tema_presente_yo: "traig", tema_pretérito: "traj" },
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
                IndPres: { stress_last_char_of_s123p3_stem: true },
                SubPres: { stress_last_char_of_s123p3_stem: true },
                CmdPos: { stress_last_char_of_s123p3_stem: true },
                CmdNeg: { stress_last_char_of_s123p3_stem: true,
                    suffixes: { vos: null } },
            }
        }
    },
    vacilar: {
      ok:true,
      },
    valer: {
      ok:true,
       tema_presente_yo: "valg", tema_futuro: "valdr" },
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
      ok:{"IndPres":{"s1":["venzo"]},"SubPres":{"s1":["venza"],"s2":["venzas"],"s3":["venza"],"p1":["venzamos"],"p2":["venzáis"],"p3":["venzan"]},"CmdPos":{"s3":["venza"],"p1":["venzamos"],"p3":["venzan"]},"CmdNeg":{"s2":["venzas"],"s3":["venza"],"p1":["venzamos"],"p2":["venzáis"],"p3":["venzan"]}},
      },
    vender: {
      ok:true,
      },
    venir: {
      ok:true,
      
        modelo: "venir",
        tema_presente_yo: "veng",
        tema_pretérito: "vin",
        tema_futuro: "vendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            gerundio: ["viniendo"],
            imperativo_tú: "ven",
            reglas: {
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } },
            }
        }
    },
    ver: {
      ok:true,
      
        modelo: "ver",
        // parece que no conforma bien a estas reglas
        // sí prefijo_ind_pres_yo cambia, pero no con "g", y no con los mismos cambios
        // no aplican ni tema_pretérito ni tema_futuro ni alternancia_vocálica
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
                SubPres: { tema: "ve" },
                // accents dropped
                IndPret: { forms: { s1: ["vi"], s3: ["vio"] },
                    derivations: { preserve_stress_from_base: ["s1", "s3"] }
                },
                IndImp: { tema: "ve" },
                CmdPos: { forms: { s3: ["vea"], p1: ["veamos"], p3: ["vean"], vos: null },
                    derivations: { preserve_stress_from_base: ["s2"] }
                },
                // FIX: linguist: if CmdNeg always follows SubPres, can codify this
                CmdNeg: { tema: "ve" },
            }
        }
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
      ok:{"IndPres":{"s1":["vidrío","vidrio"],"s2":["vidrías","vidrias"],"s3":["vidría","vidria"],"p3":["vidrían","vidrian"]},"SubPres":{"s1":["vidríe","vidrie"],"s2":["vidríes","vidries"],"s3":["vidríe","vidrie"],"p3":["vidríen","vidrien"]},"CmdPos":{"s2":["vidría","vidria"],"s3":["vidríe","vidrie"],"p3":["vidríen","vidrien"]},"CmdNeg":{"s2":["vidríes","vidries"],"s3":["vidríe","vidrie"],"p3":["vidríen","vidrien"]}},
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
      ok:{"IndPres":{"s1":["yazco","yazgo","yago"]},"SubPres":{"s1":["yazca","yazga","yaga"],"s2":["yazcas","yazgas","yagas"],"s3":["yazca","yazga","yaga"],"p1":["yazcamos","yazgamos","yagamos"],"p2":["yazcáis","yazgáis","yagáis"],"p3":["yazcan","yazgan","yagan"]},"CmdPos":{"s2":["yace","yaz"],"s3":["yazca","yazga","yaga"],"p1":["yazcamos","yazgamos","yagamos"],"p3":["yazcan","yazgan","yagan"]},"CmdNeg":{"s2":["yazcas","yazgas","yagas"],"s3":["yazca","yazga","yaga"],"p1":["yazcamos","yazgamos","yagamos"],"p2":["yazcáis","yazgáis","yagáis"],"p3":["yazcan","yazgan","yagan"]}},
      },
    zaherir: {
      ok:true,
       alternancia_vocálica: "e:ie" },
    zambuir: {
      ok:true,
      },
    zambullir: {
      ok:{"gerundio":["zambullendo"],"IndPret":{"s3":["zambulló"],"p3":["zambulleron"]},"SubImp":{"s1":["zambullera","zambullese"],"s2":["zambulleras","zambulleses"],"s3":["zambullera","zambullese"],"p1":["zambulléramos","zambullésemos"],"p2":["zambullerais","zambulleseis"],"p3":["zambulleran","zambullesen"]},"SubFut":{"s1":["zambullere"],"s2":["zambulleres"],"s3":["zambullere"],"p1":["zambulléremos"],"p2":["zambullereis"],"p3":["zambulleren"]}},
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