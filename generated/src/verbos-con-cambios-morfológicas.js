import { version } from "./version.js";
import { license } from "./licencia.js";
// if a value is null, the verb is regular
// A verb that appears in this list has been verified with a test
export const verbos_con_cambios_morfológicos = {
    abandonar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    abarcar: {
      ok:true,
       pronominal: false, tr: true },
    abatir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    abolir: {
      ok:true,
       pronominal: false, tr: true }, // FIX: abolir no se conjuga como abolo, aboles, abola, etc. Se usan perífrasis: va a abolir
    aborrecer: {
      ok:true,
       pronominal: true, tr: true },
    abrasar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    abrazar: {
      ok:true,
       pronominal: true, tr: true },
    abreviar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    abrir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true, excepciones_léxicas: { participio: ["abierto"] } },
    abrumar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    absolver: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["absuelto"] } },
    absorber: {
      ok:true,
       pronominal: false, tr: true },
    abstener: {
      ok:true,
       modelo: "tener", pronominal: true, tr: true },
    abundar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    aburrir: {
      ok:true,
       pronominal: true, tr: true },
    abusar: {
      ok:true,
       pronominal: true, intr: true },
    acabar: {
      ok:true,
       pronominal: true, tr: true, intr: true, auxiliar: true },
    acaecer: {
      ok:true,
       pronominal: false, intr: true, impersonal: "gramatical" },
    acalambrar: {
      ok:true,
       pronominal: true, tr: true },
    acalorar: {
      ok:true,
       pronominal: true, tr: true },
    acampanar: {
      ok:true,
       pronominal: true, tr: true },
    acampar: {
      ok:true,
       pronominal: true, intr: true },
    acariciar: {
      ok:true,
       pronominal: false, tr: true },
    acarrear: {
      ok:true,
       pronominal: true, tr: true },
    acatar: {
      ok:true,
       pronominal: true, tr: true },
    acceder: {
      ok:true,
       pronominal: false, intr: true },
    acechar: {
      ok:true,
       pronominal: false, tr: true },
    acelerar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    acentuar: {
      ok:true,
       pronominal: true, tr: true },
    aceptar: {
      ok:true,
       pronominal: false, tr: true },
    acercar: {
      ok:true,
       pronominal: true, tr: true },
    acertar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    achicar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    acicalar: {
      ok:true,
       pronominal: true, tr: true },
    aclarar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    acoger: {
      ok:true,
       pronominal: true, tr: true },
    acometer: {
      ok:true,
       pronominal: false, tr: true },
    acomodar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    acompañar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    acondicionar: {
      ok:true,
       pronominal: true, tr: true },
    acongojar: {
      ok:true,
       pronominal: true, tr: true },
    aconsejar: {
      ok:true,
       pronominal: true, tr: true },
    acontecer: {
      ok:true,
       pronominal: false, intr: true, impersonal: "gramatical" },
    acordar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    acortar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    acosar: {
      ok:true,
       pronominal: false, tr: true },
    acostar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    acostumbrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    acrecentar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    acreditar: {
      ok:true,
       pronominal: true, tr: true },
    actualizar: {
      ok:true,
       pronominal: true, tr: true },
    actuar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    acuchillar: {
      ok:true,
       pronominal: true, tr: true },
    acudir: {
      ok:true,
       pronominal: false, intr: true },
    acumular: {
      ok:true,
       pronominal: false, tr: true },
    acusar: {
      ok:true,
       pronominal: true, tr: true },
    adaptar: {
      ok:true,
       pronominal: true, tr: true },
    // adecuar:         { pronominal: true, tr: true, adj: true, acepta_sin_hiato: true,
    //                   excepciones_léxicas: {
    //                         reglas: {
    //                             SubPres: { forms: { vos: [{forma:"adecú/es",uso:"Riop."},{"forma": "adecu/es", "uso": "Riop."},{forma:"adecu/és",uso:"C.Am."}]    }},
    //                         }
    //                     }
    //                 },
    adelantar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    adelgazar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    adentrar: {
      ok:true,
       pronominal: "always" },
    adherir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    adicionar: {
      ok:true,
       pronominal: false, tr: true },
    adjudicar: {
      ok:true,
       pronominal: true, tr: true },
    adjuntar: {
      ok:true,
       pronominal: false, tr: true },
    administrar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    admirar: {
      ok:true,
       pronominal: true, tr: true },
    admitir: {
      ok:true,
       pronominal: false, tr: true },
    adobar: {
      ok:true,
       pronominal: true, tr: true },
    adoptar: {
      ok:true,
       pronominal: false, tr: true },
    adorar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    adormecer: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    adquirir: {
      ok:true,
       pronominal: false, tr: true,
        alternancia_vocálica: "i:ie",
        excepciones_léxicas: {
            reglas: {
                // FIX: try to use temas instead
                SubPres: { forms: { vos: [{ forma: "adquier/as", uso: "Riop." }, { forma: "adquir/ás", uso: "C.Am." }] } },
            }
        }
    },
    adueñar: {
      ok:true,
       pronominal: "always" },
    advenir: {
      ok:true,
       modelo: "venir", pronominal: false, intr: true },
    advertir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    afectar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    afeitar: {
      ok:true,
       pronominal: true, tr: true },
    aferrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, acepta_regular: "primaria", alternancia_vocálica: "e:ie", alternancia_vocálica_uso: "arcaico" },
    afincar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    afirmar: {
      ok:true,
       pronominal: true, tr: true },
    afligir: {
      ok:true,
       pronominal: true, tr: true },
    aflojar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aflorar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    afluir: {
      ok:true,
       pronominal: false, intr: true },
    agachar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    agarrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    agasajar: {
      ok:true,
       pronominal: false, tr: true },
    agendar: {
      ok:true,
       pronominal: false, tr: true },
    agilizar: {
      ok:true,
       pronominal: false, tr: true },
    agitar: {
      ok:true,
       pronominal: true, tr: true },
    agolpar: {
      ok:true,
       pronominal: true, tr: true },
    agotar: {
      ok:true,
       pronominal: true, tr: true },
    agradar: {
      ok:true,
       pronominal: true, intr: true },
    agradecer: {
      ok:true,
       pronominal: false, tr: true },
    agrandar: {
      ok:true,
       pronominal: true, tr: true },
    agravar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    agredir: {
      ok:true,
       pronominal: false, tr: true }, // FIX: Similar a abolir: falta presente de indicativo (excepto agredimos, agredís)
    agregar: {
      ok:true,
       pronominal: true, tr: true },
    agriar: {
      ok:true,
       pronominal: true, tr: true },
    agrupar: {
      ok:true,
       pronominal: true, tr: true },
    aguantar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aguar: {
      ok:true,
       pronominal: true, tr: true },
    agudizar: {
      ok:true,
       pronominal: true, tr: true },
    ahijar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ahitar: {
      ok:true,
       pronominal: true, tr: true },
    ahogar: {
      ok:true,
       pronominal: true, tr: true },
    ahorcar: {
      ok:true,
       pronominal: true, tr: true },
    ahorrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ahusar: {
      ok:true,
       pronominal: true, tr: true },
    ahuyentar: {
      ok:true,
       pronominal: true, tr: true },
    airar: {
      ok:true,
       pronominal: true, tr: true },
    aislar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    ajustar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alargar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alarmar: {
      ok:true,
       pronominal: true, tr: true },
    albergar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alcanzar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alcoholizar: {
      ok:true,
       pronominal: "always" },
    alegar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    alegrar: {
      ok:true,
       pronominal: true, tr: true },
    alejar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    alentar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    alertar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    aliar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true },
    alimentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aliviar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    allanar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    almorzar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    alocar: {
      ok:true,
       pronominal: true, tr: true },
    alojar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alquilar: {
      ok:true,
       pronominal: true, tr: true },
    // alquiler:    no es un verbo según el DLE de la RAE
    alterar: {
      ok:true,
       pronominal: true, tr: true },
    alternar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alucinar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alumbrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    alzar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    amaestrar: {
      ok:true,
       pronominal: true, tr: true },
    amalgamar: {
      ok:true,
       pronominal: true, tr: true },
    amanecer: {
      ok:true,
       pronominal: true, tr: "desusado", intr: true, impersonal: "natural" },
    amansar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    amar: {
      ok:true,
       pronominal: false, tr: true },
    amarillar: {
      ok:true,
       pronominal: false, intr: true },
    amarillear: {
      ok:true,
       pronominal: false, intr: true },
    amarrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    amasar: {
      ok:true,
       pronominal: true, tr: true },
    amenazar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    amenguar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    amnistiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    amohinar: {
      ok:true,
       pronominal: true, tr: true },
    amontonar: {
      ok:true,
       pronominal: false, tr: true },
    amortajar: {
      ok:true,
       pronominal: false, tr: true },
    amortiguar: {
      ok:true,
       pronominal: true, tr: true },
    amparar: {
      ok:true,
       pronominal: true, tr: true },
    ampliar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    ampollar: {
      ok:true,
       pronominal: true, tr: true },
    amputar: {
      ok:true,
       pronominal: false, tr: true },
    añadir: {
      ok:true,
       pronominal: false, tr: true },
    analizar: {
      ok:true,
       pronominal: false, tr: true },
    anclar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    andar: {
      ok:true,
       modelo: "andar", pronominal: true, tr: true, intr: true,
        auxiliar: true,
        tema_pretérito_del_modelo: "anduv",
        excepciones_léxicas: {
            reglas: {
                IndPret: { suffixes: { p3: ["ieron"] } },
            }
        }
    },
    anegar: {
      ok:true,
       pronominal: true, tr: true },
    angustiar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    anhelar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    anidar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    animar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    aniquilar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    anochecer: {
      ok:true,
       pronominal: true, tr: true, intr: true, impersonal: "natural" },
    añorar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    anotar: {
      ok:true,
       pronominal: false, tr: true },
    ansiar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true },
    anticipar: {
      ok:true,
       pronominal: true, tr: true },
    anticuar: {
      ok:true,
       pronominal: true, tr: true },
    antojar: {
      ok:true,
       pronominal: "always" },
    anudar: {
      ok:true,
       pronominal: true, tr: true },
    anunciar: {
      ok:true,
       pronominal: false, tr: true },
    apacentar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    apaciguar: {
      ok:true,
       pronominal: true, tr: true },
    apagar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    apalabrar: {
      ok:true,
       pronominal: false, tr: true },
    aparar: {
      ok:true,
       pronominal: true, tr: true },
    aparcar: {
      ok:true,
       pronominal: false, tr: true },
    aparecer: {
      ok:true,
       pronominal: true, intr: true },
    aparejar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    aparentar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    apartar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apasionar: {
      ok:true,
       pronominal: true, tr: true },
    apear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apelar: {
      ok:true,
       pronominal: true, intr: true },
    apercibir: {
      ok:true,
       pronominal: true, tr: true },
    apestar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apetecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aplacar: {
      ok:true,
       pronominal: true, tr: true },
    aplastar: {
      ok:true,
       pronominal: true, tr: true },
    aplaudir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    aplicar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apocopar: {
      ok:true,
       pronominal: false, tr: true },
    apodar: {
      ok:true,
       pronominal: true, tr: true },
    apoderar: {
      ok:true,
       pronominal: true, tr: true },
    apoltronar: {
      ok:true,
       pronominal: "always" },
    aportar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    apostar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    apoyar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apreciar: {
      ok:true,
       pronominal: true, tr: true },
    aprehender: {
      ok:true,
       pronominal: false, tr: true },
    aprender: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    apresar: {
      ok:true,
       pronominal: false, tr: true },
    apresurar: {
      ok:true,
       pronominal: true, tr: true },
    apretar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    aprobar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    aprontar: {
      ok:true,
       pronominal: false, tr: true },
    aprovechar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apuñalar: {
      ok:true,
       pronominal: false, tr: true },
    apuntalar: {
      ok:true,
       pronominal: false, tr: true },
    apuntar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    apurar: {
      ok:true,
       pronominal: true, tr: true },
    aquilatar: {
      ok:true,
       pronominal: false, tr: true },
    argüir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    argumentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    armar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arraigar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arrancar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arrasar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    arrastrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arrear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    arrebatar: {
      ok:true,
       pronominal: true, tr: true },
    arreglar: {
      ok:true,
       pronominal: true, tr: true },
    arrellanar: {
      ok:true,
       pronominal: "always" },
    arremeter: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arrendar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    arrepentir: {
      ok:true,
       pronominal: "always", alternancia_vocálica: "e:ie" },
    arribar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arriesgar: {
      ok:true,
       pronominal: true, tr: true },
    arrimar: {
      ok:true,
       pronominal: true, tr: true },
    arrodillar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    arrojar: {
      ok:true,
       pronominal: true, tr: true },
    arropar: {
      ok:true,
       pronominal: true, tr: true },
    arrugar: {
      ok:true,
       pronominal: true, tr: true },
    arruinar: {
      ok:true,
       pronominal: true, tr: true },
    arrullar: {
      ok:true,
       pronominal: true, tr: true },
    articular: {
      ok:true,
       pronominal: true, tr: true },
    asaltar: {
      ok:true,
       pronominal: false, tr: true },
    ascender: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    asegurar: {
      ok:true,
       pronominal: true, tr: true },
    asemejar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    asentar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    asentir: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    asesinar: {
      ok:true,
       pronominal: false, tr: true },
    asesorar: {
      ok:true,
       pronominal: true, tr: true },
    asfixiar: {
      ok:true,
       pronominal: true, tr: true },
    asignar: {
      ok:true,
       pronominal: false, tr: true },
    asimilar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    asir: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado", tema_presente_yo_del_modelo: ["asg"] },
    asistir: {
      ok:true,
       pronominal: true, tr: true },
    asolar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue", acepta_regular: "variante" },
    asolear: {
      ok:true,
       pronominal: true, tr: true },
    asomar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    asombrar: {
      ok:true,
       pronominal: true, tr: true },
    aspar: {
      ok:true,
       pronominal: true, tr: true },
    asperjar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aspirar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    asustar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atacar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atajar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atañer: {
      ok:true,
       pronominal: false, intr: true, impersonal: "gramatical" },
    atar: {
      ok:true,
       pronominal: true, tr: true },
    atardecer: {
      ok:true,
       pronominal: false, intr: true, impersonal: "natural" },
    atemorizar: {
      ok:true,
       pronominal: true, tr: true },
    atender: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    atentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atenuar: {
      ok:true,
       pronominal: true, tr: true },
    aterir: {
      ok:true,
       pronominal: true, tr: true }, // FIX: Solo se usa en formas donde la raíz no lleva "i" tónica: atería, aterido; No se usa atero, ateres
    aterrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    aterrorizar: {
      ok:true,
       pronominal: true, tr: true },
    atesorar: {
      ok:true,
       pronominal: true, tr: true },
    atestiguar: {
      ok:true,
       pronominal: false, tr: true },
    atiborrar: {
      ok:true,
       pronominal: true, tr: true },
    atinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    atorar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atormentar: {
      ok:true,
       pronominal: true, tr: true },
    atornillar: {
      ok:true,
       pronominal: true, tr: true },
    atraer: {
      ok:true,
       modelo: "traer", pronominal: true, tr: true },
    atrancar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    atrapar: {
      ok:true,
       pronominal: false, tr: true },
    atravesar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    atrever: {
      ok:true,
       pronominal: true, tr: "desusado" },
    atribuir: {
      ok:true,
       pronominal: true, tr: true },
    atrincherar: {
      ok:true,
       pronominal: true, tr: true },
    atropellar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aturdir: {
      ok:true,
       pronominal: true, tr: true },
    auditar: {
      ok:true,
       pronominal: false, tr: true },
    aullar: {
      ok:true,
       pronominal: false, intr: true },
    aumentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aunar: {
      ok:true,
       pronominal: true, tr: true },
    aupar: {
      ok:true,
       pronominal: true, tr: true },
    auscultar: {
      ok:true,
       pronominal: false, tr: true },
    ausentar: {
      ok:true,
       pronominal: true, tr: true },
    autocensurar: {
      ok:true,
       pronominal: true, tr: true },
    autoinfligir: {
      ok:true,
       pronominal: false, tr: true }, // FIX: este caso es raro, no haya entradas en ningún diccionario.
    automatizar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    avanzar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    avenir: {
      ok:true,
       modelo: "venir", pronominal: true, tr: true, intr: true },
    aventajar: {
      ok:true,
       pronominal: true, tr: true },
    aventar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    aventurar: {
      ok:true,
       pronominal: true, tr: true },
    avergonzar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    averiar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true },
    averiguar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    aviar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true },
    avisar: {
      ok:true,
       pronominal: "desusado", tr: true },
    avivar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    avizorar: {
      ok:true,
       pronominal: false, intr: true },
    ayudar: {
      ok:true,
       pronominal: true, tr: true },
    azotar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    babear: {
      ok:true,
       pronominal: false, intr: true },
    bailar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    bajar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    balancear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    balbucear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    balbucir: {
      ok:true,
       pronominal: false, tr: true, intr: true }, // No sigue el modelo "lucir" // FIX: Presente de indicativo: se usa más balbuceo que balbuzco (la forma regular ha desplazado a la irregular)
    bañar: {
      ok:true,
       pronominal: true, tr: true },
    barrer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    basar: {
      ok:true,
       pronominal: true, tr: true },
    bastar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    batallar: {
      ok:true,
       pronominal: false, intr: true },
    batir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    beber: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    bendecir: {
      ok:true,
       modelo: "maldecir", pronominal: false, tr: true },
    besar: {
      ok:true,
       pronominal: true, tr: true },
    biografiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    bisbisear: {
      ok:true,
       pronominal: false, tr: true },
    bloquear: {
      ok:true,
       pronominal: true, tr: true },
    boicotear: {
      ok:true,
       pronominal: false, tr: true },
    borbotar: {
      ok:true,
       pronominal: false, intr: true },
    borbotear: {
      ok:true,
       pronominal: false, intr: true },
    bordar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    bordear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    bornear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    borrar: {
      ok:true,
       pronominal: true, tr: true },
    brillar: {
      ok:true,
       pronominal: false, intr: true },
    brindar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    brotar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    bruñir: {
      ok:true,
       pronominal: false, tr: true },
    bucear: {
      ok:true,
       pronominal: false, intr: true },
    bullir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    burlar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    buscar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    caber: {
      ok:true,
       modelo: "caber", pronominal: false, tr: true, intr: true,
        tema_presente_yo_del_modelo: ["quep"],
        tema_pretérito_del_modelo: "cup",
        tema_futuro_del_modelo: "cabr"
    },
    cabildear: {
      ok:true,
       pronominal: false, intr: true },
    caer: {
      ok:true,
       pronominal: true, tr: true, intr: true, tema_presente_yo_del_modelo: ["caig"] },
    cagar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    calar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    calcular: {
      ok:true,
       pronominal: false, tr: true },
    calentar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    calificar: {
      ok:true,
       pronominal: true, tr: true },
    callar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    calmar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    calzar: {
      ok:true,
       pronominal: true, tr: true },
    cambiar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    caminar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    cancelar: {
      ok:true,
       pronominal: false, tr: true },
    canjear: {
      ok:true,
       pronominal: false, tr: true },
    cantar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    capacitar: {
      ok:true,
       pronominal: true, tr: true },
    capitalizar: {
      ok:true,
       pronominal: false, tr: true },
    carcomer: {
      ok:true,
       pronominal: true, tr: true },
    carecer: {
      ok:true,
       pronominal: false, intr: true },
    cargar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    casar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    castigar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    catalogar: {
      ok:true,
       pronominal: false, tr: true },
    categorizar: {
      ok:true,
       pronominal: false, tr: true },
    causar: {
      ok:true,
       pronominal: true, tr: true },
    cazar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    cebar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ceder: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    cegar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    celebrar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    cenar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ceñir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:i" },
    censurar: {
      ok:true,
       pronominal: false, tr: true },
    centellear: {
      ok:true,
       pronominal: false, intr: true },
    centrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cepillar: {
      ok:true,
       pronominal: true, tr: true },
    cercar: {
      ok:true,
       pronominal: true, tr: true },
    cerner: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    cernir: {
      ok:true,
       modelo: "cernir", pronominal: false, tr: true, alternancia_vocálica: "e:ie (cernir)" },
    cerrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    cesar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    chantajear: {
      ok:true,
       pronominal: false, tr: true },
    chapotear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    charlar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    chatear: {
      ok:true,
       pronominal: false, intr: true },
    chicotear: {
      ok:true,
       pronominal: false, tr: true },
    chirriar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true },
    chismear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    chispear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    chocar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    chorrear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    chupar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cifrar: {
      ok:true,
       pronominal: true, tr: true },
    cimentar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie", acepta_regular: "primaria" },
    circular: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    circundar: {
      ok:true,
       pronominal: false, tr: true },
    circunvenir: {
      ok:true,
       modelo: "venir", pronominal: false, tr: true },
    citar: {
      ok:true,
       pronominal: true, tr: true },
    clavar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cobijar: {
      ok:true,
       pronominal: true, tr: true },
    cobrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cocer: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["cuez"],
        excepciones_léxicas: {
            participio: ["cocido", { forma: "cocho", uso: "arcaico" }],
            reglas: {
                SubPres: { temas: { p1: ["coz"], p2: ["coz"], vos: [{ forma: "cuez", uso: "Riop." }, { forma: "coz", uso: "C.Am." }] } },
                CmdPos: { temas: { p1: ["coz"] } }
            }
        }
    },
    cocinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    codear: {
      ok:true,
       pronominal: true, intr: true },
    codiciar: {
      ok:true,
       pronominal: false, tr: true },
    codificar: {
      ok:true,
       pronominal: false, tr: true },
    coger: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cohibir: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    coincidir: {
      ok:true,
       pronominal: false, intr: true },
    colaborar: {
      ok:true,
       pronominal: false, intr: true },
    colar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    colgar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    colindar: {
      ok:true,
       pronominal: false, intr: true },
    colocar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    colorar: {
      ok:true,
       pronominal: "desusado", tr: true, intr: "desusado" },
    colorear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    combar: {
      ok:true,
       pronominal: true, tr: true },
    comentar: {
      ok:true,
       pronominal: false, tr: true },
    comenzar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    comer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    comparar: {
      ok:true,
       pronominal: false, tr: true },
    compartir: {
      ok:true,
       pronominal: false, tr: true },
    compensar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    competir: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "e:i" },
    complacer: {
      ok:true,
       modelo: "placer", pronominal: true, tr: true },
    complementar: {
      ok:true,
       pronominal: true, tr: true },
    completar: {
      ok:true,
       pronominal: false, tr: true },
    complicar: {
      ok:true,
       pronominal: true, tr: true },
    componer: {
      ok:true,
       modelo: "poner", pronominal: true, tr: true, intr: true, adj: true },
    comportar: {
      ok:true,
       pronominal: true, tr: true },
    comprar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    comprender: {
      ok:true,
       pronominal: true, tr: true },
    comprobar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    comprometer: {
      ok:true,
       pronominal: true, tr: true },
    comulgar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    comunicar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    concebir: {
      ok:true,
       modelo: "pedir", pronominal: false, tr: true, intr: true },
    concentrar: {
      ok:true,
       pronominal: true, tr: true },
    conceptuar: {
      ok:true,
       pronominal: false, tr: true },
    concernir: {
      ok:true,
       modelo: "cernir", pronominal: false, tr: true, intr: true, impersonal: "gramatical" },
    concertar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    concienciar: {
      ok:true,
       pronominal: true, tr: true },
    concluir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    concordar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    concurrir: {
      ok:true,
       pronominal: false, intr: true },
    condenar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    condescender: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    condicionar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    condimentar: {
      ok:true,
       pronominal: false, tr: true },
    condoler: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "o:ue" },
    conducir: {
      ok:true,
       pronominal: true, tr: true, intr: true, clase_conjugacional: "-ducir", tema_presente_yo_del_modelo: ["conduzc"], tema_pretérito_del_modelo: "conduj" }, // FIX: linguist: how can this pattern be generalized: "pretérito fuerte con -j" ?
    conectar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    confabular: {
      ok:true,
       pronominal: true, intr: true },
    confeccionar: {
      ok:true,
       pronominal: false, tr: true },
    conferir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    confesar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    confiar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true },
    confirmar: {
      ok:true,
       pronominal: true, tr: true },
    confiscar: {
      ok:true,
       pronominal: false, tr: true },
    confluir: {
      ok:true,
       pronominal: false, intr: true },
    conformar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    confortar: {
      ok:true,
       pronominal: true, tr: true },
    confundir: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    congelar: {
      ok:true,
       pronominal: true, tr: true },
    congestionar: {
      ok:true,
       pronominal: true, tr: true },
    congregar: {
      ok:true,
       pronominal: true, tr: true },
    conjeturar: {
      ok:true,
       pronominal: false, tr: true },
    conjugar: {
      ok:true,
       modelo: null, pronominal: false, tr: true }, // regular, no sigue el modelo de "jugar"
    conjurar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    conmover: {
      ok:true,
       pronominal: true, adj: true, alternancia_vocálica: "o:ue" },
    conocer: {
      ok:true,
       modelo: "conocer", pronominal: true, tr: true, intr: true, adj: true, tema_presente_yo_del_modelo: ["conozc"] },
    conquerir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    conquistar: {
      ok:true,
       pronominal: false, tr: true },
    consagrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    conseguir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:i" },
    consensuar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    consentir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    conservar: {
      ok:true,
       pronominal: true, tr: true },
    considerar: {
      ok:true,
       pronominal: false, tr: true },
    consistir: {
      ok:true,
       pronominal: false, intr: true },
    consolar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    constatar: {
      ok:true,
       pronominal: false, tr: true },
    consternar: {
      ok:true,
       pronominal: false, tr: true },
    constituir: {
      ok:true,
       pronominal: true, tr: true },
    construir: {
      ok:true,
       pronominal: false, tr: true },
    consultar: {
      ok:true,
       pronominal: false, tr: true },
    consumir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    contabilizar: {
      ok:true,
       pronominal: false, tr: true },
    contactar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    contagiar: {
      ok:true,
       pronominal: true, tr: true },
    contaminar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    contar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue",
        excepciones_léxicas: {
            reglas: {
                // FIX: try to use temas instead
                SubPres: { forms: { vos: [{ forma: "cuent/es", uso: "Riop." }, { forma: "cont/és", uso: "C.Am." }] } }
            }
        }
    },
    contemplar: {
      ok:true,
       pronominal: false, tr: true },
    contender: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    contener: {
      ok:true,
       pronominal: true, tr: true },
    contestar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    continuar: {
      ok:true,
       pronominal: true, adj: true, tr: true },
    contraatacar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    contraer: {
      ok:true,
       pronominal: true, tr: true },
    contrariar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    contrarrestar: {
      ok:true,
       pronominal: false, tr: true },
    contratacar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    contratar: {
      ok:true,
       pronominal: false, tr: true },
    contravenir: {
      ok:true,
       modelo: "venir", pronominal: false, tr: true },
    contribuir: {
      ok:true,
       pronominal: false, tr: "desusado", intr: true },
    controlar: {
      ok:true,
       pronominal: true, adj: true, tr: true },
    convencer: {
      ok:true,
       pronominal: true, adj: true, tr: true, tema_presente_yo_del_modelo: ["convenz"] },
    convenir: {
      ok:true,
       modelo: "venir", pronominal: true, intr: true },
    conversar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    convertir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    convivir: {
      ok:true,
       pronominal: false, intr: true },
    convocar: {
      ok:true,
       pronominal: false, tr: true },
    cooperar: {
      ok:true,
       pronominal: false, intr: true },
    copar: {
      ok:true,
       pronominal: false, tr: true },
    corear: {
      ok:true,
       pronominal: false, tr: true },
    corregir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:i" },
    correr: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    corresponder: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    corretear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    corroer: {
      ok:true,
       modelo: "roer", pronominal: true, tr: true },
    corromper: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cortar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    coser: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    costar: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "o:ue" },
    costear: {
      ok:true,
       pronominal: true, tr: true },
    cotizar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    crear: {
      ok:true,
       pronominal: false, tr: true },
    crecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    creer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    criar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true, // FIX: hay varias formas con dos variantes: tb. pre-2010
        excepciones_léxicas: {
            reglas: {
                IndPres: { suffixes: { p2: ["ais"], vos: ["as"] } }, // elimina tilde por RAE-2010
                IndPret: { suffixes: { s1: ["e"], s3: ["o"] } }, // elimina tilde por RAE-2010
                SubPres: { suffixes: { p2: ["eis"] } }, // elimina tilde por RAE-2010
                CmdPos: { suffixes: { vos: ["a"] } } // elimina tilde por RAE-2010
            }
        }
    },
    crujir: {
      ok:true,
       pronominal: false, intr: true, adj: true },
    cruzar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cuadrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cuajar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    cubrir: {
      ok:true,
       pronominal: true, tr: true, adj: true, excepciones_léxicas: { participio: ["cubierto"] } },
    cuestionar: {
      ok:true,
       pronominal: false, tr: true },
    cuidar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    culpar: {
      ok:true,
       pronominal: true, tr: true },
    cultivar: {
      ok:true,
       pronominal: false, tr: true },
    cumplir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    curar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    currar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    custodiar: {
      ok:true,
       pronominal: false, tr: true },
    dañar: {
      ok:true,
       pronominal: true, tr: true },
    danzar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    dar: {
      ok:true,
       modelo: "dar", pronominal: true, tr: true, intr: true,
        sufijo_presente_yo: "oy",
        excepciones_léxicas: {
            reglas: {
                // The default "-ar" verb pattern of accent the last sylable doesn't apply to vos forms of "dar", since "dás" is only one sylable
                IndPres: { suffixes: { p2: ["ais"], vos: null } },
                SubPres: { suffixes: { s1: ["é"], s3: ["é"], p2: ["eis"], vos: null } },
                IndPret: { suffixes: { s1: ["i"], s2: ["iste"], s3: ["io"], p1: ["imos"], p2: ["isteis"], p3: ["ieron"] } },
                CmdPos: { suffixes: { s3: ["é"], vos: null } }
            }
        },
        frecuencia: 5500
    },
    debatir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    deber: {
      ok:true,
       pronominal: true, tr: true, auxiliar: true },
    debilitar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    decaer: {
      ok:true,
       pronominal: false, intr: true, tema_presente_yo_del_modelo: ["decaig"] },
    decepcionar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    decidir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    decir: {
      ok:true,
       modelo: "decir", pronominal: true, tr: true, intr: true,
        tema_presente_yo_del_modelo: ["dig"],
        tema_pretérito_del_modelo: "dij",
        tema_futuro_del_modelo: "dir",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            participio: ["dicho"],
            gerundio: ["diciendo"],
            imperativo_tú: ["di/"],
        },
        frecuencia: 1400
    },
    declarar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    declinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    dedicar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    defender: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    deferir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    definir: {
      ok:true,
       pronominal: true, tr: true },
    deformar: {
      ok:true,
       pronominal: true, tr: true },
    degollar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    degradar: {
      ok:true,
       pronominal: true, tr: true },
    dejar: {
      ok:true,
       pronominal: true, frecuencia: 15 },
    delatar: {
      ok:true,
       pronominal: true, tr: true },
    deleitar: {
      ok:true,
       pronominal: true, tr: true },
    delinquir: {
      ok:true,
       pronominal: false, intr: true },
    delirar: {
      ok:true,
       pronominal: false, intr: true },
    demandar: {
      ok:true,
       pronominal: false, tr: true },
    demoler: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    demonizar: {
      ok:true,
       pronominal: false, tr: true },
    demorar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    demostrar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    denegar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    depender: {
      ok:true,
       pronominal: false, tr: "desusado", intr: true },
    deportar: {
      ok:true,
       pronominal: true, tr: true },
    depositar: {
      ok:true,
       pronominal: true, tr: true },
    depredar: {
      ok:true,
       pronominal: false, tr: true },
    deprimir: {
      ok:true,
       pronominal: true, tr: true },
    derivar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    derramar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    derretir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:i" },
    derribar: {
      ok:true,
       pronominal: true, tr: true },
    derrotar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    derruir: {
      ok:true,
       pronominal: false, tr: true },
    desaconsejar: {
      ok:true,
       pronominal: false, tr: true },
    desactivar: {
      ok:true,
       pronominal: false, tr: true },
    desafiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    desaguar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desahijar: {
      ok:true,
       pronominal: true, tr: true },
    desahogar: {
      ok:true,
       pronominal: true, tr: true },
    desahuciar: {
      ok:true,
       pronominal: true, tr: true },
    desalentar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    desalojar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desamar: {
      ok:true,
       pronominal: false, tr: true },
    desanudar: {
      ok:true,
       pronominal: false, tr: true },
    desaparecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desaprobar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    desarmar: {
      ok:true,
       pronominal: true, tr: true },
    desarrollar: {
      ok:true,
       pronominal: true, tr: true },
    desasir: {
      ok:true,
       pronominal: true, tr: true, tema_presente_yo_del_modelo: ["desasg"] },
    desatar: {
      ok:true,
       pronominal: true, tr: true },
    desatender: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    desatinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desavenir: {
      ok:true,
       modelo: "venir", pronominal: true, tr: true },
    desayunar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desbalagar: {
      ok:true,
       pronominal: false, tr: true },
    desbandar: {
      ok:true,
       pronominal: "always" },
    desbaratar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desbordar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    descafeinar: {
      ok:true,
       pronominal: false, tr: true,
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    descalzar: {
      ok:true,
       pronominal: true, tr: true },
    descansar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    descarapelar: {
      ok:true,
       pronominal: true, tr: true },
    descarar: {
      ok:true,
       pronominal: "always" },
    descargar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    descartar: {
      ok:true,
       pronominal: true, tr: true },
    descascarar: {
      ok:true,
       pronominal: true, tr: true },
    descender: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    descifrar: {
      ok:true,
       pronominal: false, tr: true },
    descolgar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    descolorar: {
      ok:true,
       pronominal: true, tr: true },
    descombrar: {
      ok:true,
       pronominal: false, tr: true },
    desconcentrar: {
      ok:true,
       pronominal: true, tr: true },
    desconceptuar: {
      ok:true,
       pronominal: true, tr: true },
    desconcertar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    desconchinflar: {
      ok:true,
       pronominal: true, tr: true },
    desconectar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desconfiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, intr: true },
    desconocer: {
      ok:true,
       modelo: "conocer", pronominal: true, tr: true },
    desconsolar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    descontar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    descontrolar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    descorrer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    descreer: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    describir: {
      ok:true,
       pronominal: false, tr: true, excepciones_léxicas: { participio: ["descrito"] } },
    descubrir: {
      ok:true,
       pronominal: true, excepciones_léxicas: { participio: ["descubierto"] } },
    descuidar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desdoblar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    desear: {
      ok:true,
       pronominal: false, tr: true },
    desechar: {
      ok:true,
       pronominal: false, tr: true },
    desembocar: {
      ok:true,
       pronominal: false, intr: true },
    desempeñar: {
      ok:true,
       pronominal: true, tr: true },
    desenroscar: {
      ok:true,
       pronominal: true, tr: true },
    desensillar: {
      ok:true,
       pronominal: false, tr: true },
    desenterrar: {
      ok:true,
       pronominal: false, tr: true, adj: true, alternancia_vocálica: "e:ie" },
    desenvolver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true },
    desesperanzar: {
      ok:true,
       pronominal: true, tr: true },
    desesperar: {
      ok:true,
       pronominal: true, tr: true },
    desestimar: {
      ok:true,
       pronominal: false, tr: true },
    desestructurar: {
      ok:true,
       pronominal: true, tr: true },
    desfallecer: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desfilar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desflorar: {
      ok:true,
       pronominal: false, tr: true },
    desfondar: {
      ok:true,
       pronominal: true, tr: true },
    desgajar: {
      ok:true,
       pronominal: true, tr: true },
    desgarrar: {
      ok:true,
       pronominal: true, tr: true },
    desgastar: {
      ok:true,
       pronominal: true, tr: true },
    desglosar: {
      ok:true,
       pronominal: false, tr: true },
    desgraciar: {
      ok:true,
       pronominal: true, tr: true },
    desgranar: {
      ok:true,
       pronominal: true, tr: true },
    deshabilitar: {
      ok:true,
       pronominal: true, tr: true },
    deshabituar: {
      ok:true,
       pronominal: true, tr: true },
    deshacer: {
      ok:true,
       modelo: "hacer", pronominal: true, tr: true },
    deshierbar: {
      ok:true,
       pronominal: false, tr: true },
    deshuesar: {
      ok:true,
       pronominal: false, tr: true },
    deshumanizar: {
      ok:true,
       pronominal: true, tr: true },
    designar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    desilusionar: {
      ok:true,
       pronominal: true, tr: true },
    desinfectar: {
      ok:true,
       pronominal: true, tr: true },
    desintegrar: {
      ok:true,
       pronominal: true, adj: true },
    desistir: {
      ok:true,
       pronominal: false, intr: true },
    desleír: {
      ok:true,
       modelo: "reír", pronominal: true, tr: true, intr: true,
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
       pronominal: true, tr: true },
    deslucir: {
      ok:true,
       modelo: "lucir", pronominal: true, tr: true },
    deslumbrar: {
      ok:true,
       pronominal: true, tr: true },
    desmadejar: {
      ok:true,
       pronominal: true, tr: true },
    desmentir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    desmenuzar: {
      ok:true,
       pronominal: true, tr: true },
    desmontar: {
      ok:true,
       pronominal: false, tr: true },
    desmoralizar: {
      ok:true,
       pronominal: true, tr: true },
    desobedecer: {
      ok:true,
       pronominal: false, tr: true },
    desocupar: {
      ok:true,
       pronominal: true, tr: true },
    desorientar: {
      ok:true,
       pronominal: true, tr: true },
    desosar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue", ponga_hiato: true },
    despachar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desparramar: {
      ok:true,
       pronominal: true, tr: true },
    despedazar: {
      ok:true,
       pronominal: true, tr: true },
    despedir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:i" },
    despegar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    despejar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    despellejar: {
      ok:true,
       pronominal: true, tr: true },
    desperdiciar: {
      ok:true,
       pronominal: false, tr: true },
    despertar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    desplazar: {
      ok:true,
       pronominal: true, tr: true },
    desplegar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    desplomar: {
      ok:true,
       pronominal: true, tr: true },
    desplumar: {
      ok:true,
       pronominal: true, tr: true },
    // despoblar:       { pronominal: true, tr: true, adj: true, alternancia_vocálica: "o:ue" },
    despojar: {
      ok:true,
       pronominal: true, tr: true },
    desportillar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    despotricar: {
      ok:true,
       pronominal: true, intr: true },
    despreciar: {
      ok:true,
       pronominal: "desusado", tr: true },
    desprender: {
      ok:true,
       pronominal: true, tr: true },
    despreocupar: {
      ok:true,
       pronominal: "always" },
    despresurizar: {
      ok:true,
       pronominal: true, tr: true },
    desproveer: {
      ok:true,
       modelo: "leer", pronominal: false, tr: true, excepciones_léxicas: { participio: ["desprovisto"] } },
    despuntar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    desregular: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    destacar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    destapar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    destartalar: {
      ok:true,
       pronominal: false, tr: true },
    destellar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    desterrar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    destilar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    destituir: {
      ok:true,
       pronominal: false, tr: true },
    destrabar: {
      ok:true,
       pronominal: true, tr: true },
    destrozar: {
      ok:true,
       pronominal: true, tr: true },
    destruir: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    desvaír: {
      ok:true,
       pronominal: true, tr: true }, // FIX:
    desvariar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true },
    desviar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true },
    desvincular: {
      ok:true,
       pronominal: false, tr: true },
    desvirtuar: {
      ok:true,
       pronominal: true, tr: true },
    desvivir: {
      ok:true,
       pronominal: "always" },
    detallar: {
      ok:true,
       pronominal: false, tr: true },
    detener: {
      ok:true,
       pronominal: true, tr: true }, // FIX: setting modelo causes a failure, but it should work     {modelo: "tener"},
    deteriorar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    determinar: {
      ok:true,
       pronominal: true, tr: true },
    detonar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    devaluar: {
      ok:true,
       pronominal: true, tr: true },
    devastar: {
      ok:true,
       pronominal: false, tr: true },
    devenir: {
      ok:true,
       modelo: "venir", pronominal: false, intr: true },
    devolver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true },
    diagnosticar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    dibujar: {
      ok:true,
       pronominal: true, tr: true },
    dictar: {
      ok:true,
       pronominal: false, tr: true },
    diezmar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    diferenciar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    diferir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    dificultar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    digerir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    dignar: {
      ok:true,
       pronominal: "always" },
    diluir: {
      ok:true,
       pronominal: true, tr: true },
    dirigir: {
      ok:true,
       pronominal: true, tr: true },
    discernir: {
      ok:true,
       modelo: "cernir", pronominal: false, tr: true },
    disciplinar: {
      ok:true,
       pronominal: true, tr: true },
    disculpar: {
      ok:true,
       pronominal: true, tr: true },
    discutir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    diseñar: {
      ok:true,
       pronominal: false, tr: true },
    disentir: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    disfrazar: {
      ok:true,
       pronominal: true, tr: true },
    disfrutar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    disgustar: {
      ok:true,
       pronominal: true, tr: true },
    disimilar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    disimular: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    disminuir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    disolver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true },
    disparar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    disponer: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    disputar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    distender: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    distinguir: {
      ok:true,
       pronominal: true, tr: true },
    distorsionar: {
      ok:true,
       pronominal: true, tr: true },
    distraer: {
      ok:true,
       pronominal: true, tr: true },
    distribuir: {
      ok:true,
       pronominal: true, tr: true },
    disuadir: {
      ok:true,
       pronominal: false, tr: true },
    divertir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    dividir: {
      ok:true,
       pronominal: true, tr: true },
    divorciar: {
      ok:true,
       pronominal: true, tr: true },
    divulgar: {
      ok:true,
       pronominal: true, tr: true },
    doblar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    doblegar: {
      ok:true,
       pronominal: true, tr: true },
    documentar: {
      ok:true,
       pronominal: true, tr: true },
    doler: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "o:ue" },
    donar: {
      ok:true,
       pronominal: false, tr: true },
    dorar: {
      ok:true,
       pronominal: true, tr: true },
    dormir: {
      ok:true,
       modelo: "dormir", pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    drenar: {
      ok:true,
       pronominal: false, tr: true },
    drogar: {
      ok:true,
       pronominal: true, tr: true },
    duchar: {
      ok:true,
       pronominal: true, tr: true },
    dudar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    duplicar: {
      ok:true,
       pronominal: true, tr: true },
    durar: {
      ok:true,
       pronominal: false, intr: true },
    echar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    edificar: {
      ok:true,
       pronominal: false, tr: true },
    editar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    educar: {
      ok:true,
       pronominal: false, tr: true },
    edulcorar: {
      ok:true,
       pronominal: true, tr: true },
    efectuar: {
      ok:true,
       pronominal: true, tr: true },
    efluir: {
      ok:true,
       pronominal: false, intr: true },
    ejecutar: {
      ok:true,
       pronominal: false, tr: true },
    ejercer: {
      ok:true,
       pronominal: false, tr: true, intr: true, tema_presente_yo_del_modelo: ["ejerz"] }, // no sigue el modelo de conocer, no usa "zc"
    ejercitar: {
      ok:true,
       pronominal: true, tr: true },
    elaborar: {
      ok:true,
       pronominal: true, tr: true },
    electrocutar: {
      ok:true,
       pronominal: true, tr: true },
    elegir: {
      ok:true,
       pronominal: false, tr: true, adj: true, alternancia_vocálica: "e:i" },
    elevar: {
      ok:true,
       pronominal: true, tr: true, adj: true }, // FIX: linguist: solo en varios regiones hay: alternancia_vocálica: "e:ie"
    eliminar: {
      ok:true,
       pronominal: true, tr: true },
    elogiar: {
      ok:true,
       pronominal: false, tr: true },
    eludir: {
      ok:true,
       pronominal: true, tr: true },
    emancipar: {
      ok:true,
       pronominal: true, tr: true },
    embadurnar: {
      ok:true,
       pronominal: true, tr: true },
    embarcar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    embargar: {
      ok:true,
       pronominal: false, tr: true },
    embarrar: {
      ok:true,
       pronominal: true, tr: true },
    embaucar: {
      ok:true,
       pronominal: false, tr: true },
    embellecer: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    embestir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:i" },
    emborrachar: {
      ok:true,
       pronominal: true, tr: true },
    embullar: {
      ok:true,
       pronominal: true, tr: true },
    emigrar: {
      ok:true,
       pronominal: false, intr: true },
    emitir: {
      ok:true,
       pronominal: false, tr: true },
    emocionar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    empacar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    empachar: {
      ok:true,
       pronominal: true, tr: true },
    empañar: {
      ok:true,
       pronominal: true, tr: true },
    empapar: {
      ok:true,
       pronominal: true, tr: true },
    emparejar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    empatar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    empatizar: {
      ok:true,
       pronominal: false, intr: true },
    empedrar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    empeñar: {
      ok:true,
       pronominal: true, tr: true },
    empeorar: {
      ok:true,
       pronominal: true, tr: true },
    emperejilar: {
      ok:true,
       pronominal: true, tr: true },
    emperifollar: {
      ok:true,
       pronominal: true, tr: true },
    empezar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    emplear: {
      ok:true,
       pronominal: true, tr: true },
    empobrecer: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    emponzoñar: {
      ok:true,
       pronominal: true, tr: true },
    emprender: {
      ok:true,
       pronominal: true, tr: true },
    empujar: {
      ok:true,
       pronominal: false, tr: true },
    empuñar: {
      ok:true,
       pronominal: false, tr: true },
    enajenar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    enaltecer: {
      ok:true,
       pronominal: true, tr: true },
    enamorar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    encajar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    encaminar: {
      ok:true,
       pronominal: true, tr: true },
    encantar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    encaramar: {
      ok:true,
       pronominal: true, tr: true },
    encargar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enceguecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    encender: {
      ok:true,
       pronominal: true, tr: true, adj: true, alternancia_vocálica: "e:ie" },
    encerrar: {
      ok:true,
       pronominal: true, tr: true, adj: true, alternancia_vocálica: "e:ie" },
    enchilar: {
      ok:true,
       pronominal: true, tr: true },
    enchufar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    encimar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enclaustrar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    encoger: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    encomendar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    encontrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    encubrir: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: { participio: ["encubierto"] } },
    enderezar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    endulzar: {
      ok:true,
       pronominal: true, tr: true },
    endurecer: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    enemistar: {
      ok:true,
       pronominal: true, tr: true },
    enfadar: {
      ok:true,
       pronominal: true, tr: true },
    enfermar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    enflaquecer: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    enfocar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    enfrentar: {
      ok:true,
       pronominal: true, tr: true },
    enfriar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, adj: true },
    enfurecer: {
      ok:true,
       pronominal: true, tr: true },
    engañar: {
      ok:true,
       pronominal: true, tr: true },
    enganchar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    englobar: {
      ok:true,
       pronominal: false, tr: true },
    engordar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    engreír: {
      ok:true,
       modelo: "reír", pronominal: true, tr: true, adj: true },
    engurruñar: {
      ok:true,
       pronominal: true, tr: true },
    enhilar: {
      ok:true,
       pronominal: false, tr: true },
    enjuagar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enjugar: {
      ok:true,
       modelo: null, pronominal: true, tr: true }, // regular, no sigue el modelo de "jugar"
    enlazar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enloquecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enlucir: {
      ok:true,
       modelo: "lucir", pronominal: false, tr: true },
    enmarañar: {
      ok:true,
       pronominal: true, tr: true },
    enmarcar: {
      ok:true,
       pronominal: true, tr: true },
    enmascarar: {
      ok:true,
       pronominal: true, tr: true },
    enmendar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    enojar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    enraizar: {
      ok:true,
       modelo: "enraizar", pronominal: true, intr: true,
        excepciones_léxicas: {
            reglas: {
                // FIX: lingüista: hay una regla por esta situación?
                // FIX: perhaps replace this with stress_last_vowel_of_s123p3_stem?
                IndPres: { forms: { s1: ["enraíz/o"], s2: ["enraíz/as"], s3: ["enraíz/a"], p3: ["enraíz/an"] } },
                SubPres: { forms: { s1: ["enraíc/e"], s2: ["enraíc/es"], s3: ["enraíc/e"], p3: ["enraíc/en"], vos: [{ forma: "enraíc/es", uso: "Riop." }, { forma: "enraic/és", uso: "C.Am." }] } },
                CmdPos: { forms: { s2: ["enraíz/a"], s3: ["enraíc/e"], p3: ["enraíc/en"] } }
            },
        }
    },
    enramar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enredar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    enriquecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    enroscar: {
      ok:true,
       pronominal: true, tr: true },
    ensalzar: {
      ok:true,
       pronominal: false, tr: true },
    ensamblar: {
      ok:true,
       pronominal: false, tr: true },
    ensanchar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ensangrentar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    ensartar: {
      ok:true,
       pronominal: false, tr: true },
    enseñar: {
      ok:true,
       pronominal: true, tr: true },
    ensimismar: {
      ok:true,
       pronominal: "always" },
    ensuciar: {
      ok:true,
       pronominal: true, tr: true },
    entablar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    entender: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    enterar: {
      ok:true,
       pronominal: true, tr: true },
    enterrar: {
      ok:true,
       pronominal: true, tr: true, adj: true, alternancia_vocálica: "e:ie" },
    entornar: {
      ok:true,
       pronominal: true, tr: true },
    entorpecer: {
      ok:true,
       pronominal: true, tr: true },
    entrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    entreabrir: {
      ok:true,
       pronominal: true, tr: true, adj: true, excepciones_léxicas: { participio: ["entreabierto"] } },
    entrechocar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    entregar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    entrelucir: {
      ok:true,
       modelo: "lucir", pronominal: false, intr: true },
    entremezclar: {
      ok:true,
       pronominal: true, tr: true },
    entrenar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    // entretener:      { pronominal: true, tr: true,
    //                     excepciones_léxicas: {
    //                         reglas: {
    //                             CmdPos: { forms: { s2: ["entreté/n", {forma: "entretien/e", uso:"no normativo"}]    }},
    //                         }
    //                     }
    //                  },
    entrever: {
      ok:true,
       modelo: "ver", pronominal: false, tr: true },
    entreverar: {
      ok:true,
       pronominal: true, tr: true },
    entrevistar: {
      ok:true,
       pronominal: true, tr: true },
    entristecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    entrometer: {
      ok:true,
       pronominal: true, tr: true },
    entumecer: {
      ok:true,
       pronominal: true, tr: true },
    entusiasmar: {
      ok:true,
       pronominal: true, tr: true },
    envejecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    envenenar: {
      ok:true,
       pronominal: true, tr: true },
    enviar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    envidiar: {
      ok:true,
       pronominal: false, tr: true },
    envolver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true },
    equilibrar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    erguir: {
      ok:true,
       modelo: "erguir", pronominal: true, tr: true,
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
                    forms: { vos: [{ forma: "yerg/as", uso: "Riop." }, { forma: "irg/as", uso: "C.Am." }, { forma: "irg/ás", uso: "C.Am." }] }
                    //    forms: { s1: ["irga", "yerga"],       s2: ["irgas", "yergas"],   s3: ["irga", "yerga"],
                    //             p1:	["irgamos", "yergamos"], p2: ["irgáis", "yergáis"], p3: ["irgan", "yergan"], vos: ["yergas"] }
                },
                SubImp: { tema_supletivo: ["irguie"], stress_last_char_of_p1_stem: true },
                SubFut: { tema_supletivo: ["irguie"], stress_last_char_of_p1_stem: true },
                CmdPos: { forms: { s2: ["irgu/e", "yergu/e"], s3: ["irg/a", "yerg/a"],
                        p1: ["irg/amos", "yerg/amos"], p3: ["irg/an", "yerg/an"] } }
            },
        }
    },
    errar: {
      ok:true,
       pronominal: true, tr: true, intr: true }, // FIX: tiene dos formas
    eructar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    esbozar: {
      ok:true,
       pronominal: false, tr: true },
    escabullir: {
      ok:true,
       pronominal: true, intr: true },
    escalar: {
      ok:true,
       pronominal: false, tr: true },
    escandalizar: {
      ok:true,
       pronominal: true, intr: true },
    escanear: {
      ok:true,
       pronominal: false, tr: true },
    escapar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    escarbar: {
      ok:true,
       pronominal: false, tr: true },
    escarchar: {
      ok:true,
       pronominal: false, tr: true, intr: true, impersonal: "natural" },
    escoger: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    escolar: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "o:ue" },
    escoltar: {
      ok:true,
       pronominal: false, tr: true },
    esconder: {
      ok:true,
       pronominal: true, tr: true },
    escribir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true, excepciones_léxicas: { participio: ["escrito"] } },
    escuchar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    esculcar: {
      ok:true,
       pronominal: false, tr: true },
    esculpir: {
      ok:true,
       pronominal: false, tr: true },
    esforzar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    esfumar: {
      ok:true,
       pronominal: true, tr: true },
    espaciar: {
      ok:true,
       pronominal: true, tr: true },
    espantar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    esparcir: {
      ok:true,
       pronominal: true, tr: true, tema_presente_yo_del_modelo: ["esparz"] },
    especializar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    especificar: {
      ok:true,
       pronominal: false, tr: true },
    esperar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    espiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true },
    esquiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, intr: true },
    esquivar: {
      ok:true,
       pronominal: true, tr: true },
    establecer: {
      ok:true,
       pronominal: true, tr: true },
    estacionar: {
      ok:true,
       pronominal: true, tr: true },
    estafar: {
      ok:true,
       pronominal: false, tr: true },
    estallar: {
      ok:true,
       pronominal: false, intr: true },
    estampar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    estancar: {
      ok:true,
       pronominal: true, tr: true },
    estandarizar: {
      ok:true,
       pronominal: false, tr: true },
    estar: {
      ok:true,
       modelo: "estar", pronominal: true, intr: true,
        auxiliar: true, // copulativo
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
        },
        frecuencia: 2200
    },
    estatuir: {
      ok:true,
       pronominal: false, tr: true },
    estimar: {
      ok:true,
       pronominal: false, tr: true },
    estipular: {
      ok:true,
       pronominal: false, tr: true },
    estirar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    estofar: {
      ok:true,
       pronominal: false, tr: true },
    estorbar: {
      ok:true,
       pronominal: false, tr: true },
    estornudar: {
      ok:true,
       pronominal: false, intr: true },
    estrangular: {
      ok:true,
       pronominal: true, tr: true },
    estrechar: {
      ok:true,
       pronominal: true, tr: true },
    estregar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie", acepta_regular: "variante" },
    estremecer: {
      ok:true,
       pronominal: true, tr: true },
    estrenar: {
      ok:true,
       pronominal: true, tr: true },
    estresar: {
      ok:true,
       pronominal: true, tr: true },
    estropear: {
      ok:true,
       pronominal: true, tr: true },
    estructurar: {
      ok:true,
       pronominal: true, tr: true },
    estudiar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    // evacuar:         { pronominal: false, tr: true, acepta_sin_hiato: true },
    evadir: {
      ok:true,
       pronominal: true, tr: true },
    evaluar: {
      ok:true,
       pronominal: false, tr: true },
    evitar: {
      ok:true,
       pronominal: "desusado", tr: true },
    exacerbar: {
      ok:true,
       pronominal: true, tr: true },
    exagerar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    examinar: {
      ok:true,
       pronominal: true, tr: true },
    exasperar: {
      ok:true,
       pronominal: true, tr: true },
    exceder: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    exceptuar: {
      ok:true,
       pronominal: true, tr: true },
    exclamar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    excluir: {
      ok:true,
       pronominal: true, tr: true },
    exhalar: {
      ok:true,
       pronominal: "desusado", tr: true },
    exhibir: {
      ok:true,
       pronominal: true, tr: true },
    exigir: {
      ok:true,
       pronominal: false, tr: true },
    exiliar: {
      ok:true,
       pronominal: true, tr: true },
    existir: {
      ok:true,
       pronominal: false, intr: true },
    expandir: {
      ok:true,
       pronominal: true, tr: true },
    expedir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:i" },
    experimentar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    expiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    expirar: {
      ok:true,
       pronominal: false, intr: true },
    explicar: {
      ok:true,
       pronominal: true, tr: true },
    explorar: {
      ok:true,
       pronominal: false, tr: true },
    explosionar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    explotar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    exponer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    expresar: {
      ok:true,
       pronominal: true, tr: true },
    exprimir: {
      ok:true,
       pronominal: false, tr: true },
    expulsar: {
      ok:true,
       pronominal: false, tr: true },
    extender: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    extenuar: {
      ok:true,
       pronominal: true, tr: true },
    extinguir: {
      ok:true,
       pronominal: true, tr: true },
    extorsionar: {
      ok:true,
       pronominal: false, tr: true },
    extraer: {
      ok:true,
       pronominal: false, tr: true },
    extrañar: {
      ok:true,
       pronominal: true, tr: true },
    eyectar: {
      ok:true,
       pronominal: true, tr: true },
    fabricar: {
      ok:true,
       pronominal: false, tr: true },
    facilitar: {
      ok:true,
       pronominal: false, tr: true },
    facturar: {
      ok:true,
       pronominal: false, tr: true },
    fallar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    fallecer: {
      ok:true,
       pronominal: false, intr: true },
    faltar: {
      ok:true,
       pronominal: false, intr: true },
    fantasear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    fascinar: {
      ok:true,
       pronominal: false, tr: true },
    felicitar: {
      ok:true,
       pronominal: true, tr: true },
    festejar: {
      ok:true,
       pronominal: "desusado", tr: true },
    figurar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    fijar: {
      ok:true,
       pronominal: true, tr: true },
    filmar: {
      ok:true,
       pronominal: false, tr: true },
    filtrar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    finalizar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    fingir: {
      ok:true,
       pronominal: true, tr: true },
    firmar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    flanquear: {
      ok:true,
       pronominal: false, tr: true },
    flaquear: {
      ok:true,
       pronominal: false, intr: true },
    flexionar: {
      ok:true,
       pronominal: false, tr: true },
    florecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    flotar: {
      ok:true,
       pronominal: false, tr: "desusado", intr: true },
    fluctuar: {
      ok:true,
       pronominal: false, intr: true },
    fluir: {
      ok:true,
       pronominal: false, intr: true },
    formalizar: {
      ok:true,
       pronominal: true, tr: true },
    formar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    formular: {
      ok:true,
       pronominal: false, tr: true },
    forzar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    fotografiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true },
    fragmentar: {
      ok:true,
       pronominal: true, tr: true },
    fraguar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    frecuentar: {
      ok:true,
       pronominal: false, tr: true },
    fregar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    freír: {
      ok:true,
       modelo: "reír", pronominal: true, tr: true, intr: true },
    frotar: {
      ok:true,
       pronominal: true, tr: true },
    fruncir: {
      ok:true,
       pronominal: true, tr: true, tema_presente_yo_del_modelo: ["frunz"] },
    frutar: {
      ok:true,
       pronominal: false, intr: true },
    fulgurar: {
      ok:true,
       pronominal: false, intr: true },
    fumar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    funcionar: {
      ok:true,
       pronominal: false, intr: true },
    fundar: {
      ok:true,
       pronominal: true, tr: true },
    fundir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    fungir: {
      ok:true,
       pronominal: false, intr: true },
    ganar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    garantizar: {
      ok:true,
       pronominal: false, tr: true },
    gastar: {
      ok:true,
       pronominal: true, tr: true },
    gemir: {
      ok:true,
       modelo: "pedir", pronominal: false, intr: true },
    generalizar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    generar: {
      ok:true,
       pronominal: false, tr: true },
    germinar: {
      ok:true,
       pronominal: false, intr: true },
    gestionar: {
      ok:true,
       pronominal: false, tr: true },
    girar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    gobernar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    golpear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    gotear: {
      ok:true,
       pronominal: false, intr: true },
    gozar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    grabar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    graduar: {
      ok:true,
       pronominal: true, tr: true },
    granizar: {
      ok:true,
       pronominal: false, tr: true, intr: true, impersonal: "natural" },
    gritar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    gruir: {
      ok:true,
       pronominal: false, intr: true },
    gruñir: {
      ok:true,
       pronominal: false, intr: true },
    guardar: {
      ok:true,
       pronominal: true, tr: true },
    guiar: {
      ok:true,
       modelo: "guiar", pronominal: true, tr: true,
        // clase_conjugacional: "-iar",
        // TODO: hay formas reformadas en la reforma ortográfica de la RAE de 2010, considera añadir estas formas
        // Otherwise, the accent is the only thing different from the regular forms
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true,
                    // FIX: perhaps replace this with temas o sufijos?
                    forms: { p2: ["guia/is", { forma: "guiá/is", "uso": "pre-2010" }],
                        vos: ["gui/as", { forma: "gui/ás", "uso": "pre-2010" }] } },
                IndPret: { forms: { s1: ["gui/e", { forma: "gui/é", "uso": "pre-2010" }], s3: ["gui/o", { forma: "gui/ó", "uso": "pre-2010" }], } },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true,
                    forms: { p2: ["gui/eis", { forma: "gui/éis", "uso": "pre-2010" }] } },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true,
                    forms: { vos: ["gui/a", { "forma": "gui/á", "uso": "pre-2010" }] } }
            }
        }
    },
    guiñar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    guisar: {
      ok:true,
       pronominal: true, tr: true },
    gustar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    haber: {
      ok:true,
       modelo: "haber", pronominal: true, tr: true, impersonal: "gramatical", // para unas acepciones
        tema_pretérito_del_modelo: "hub",
        tema_futuro_del_modelo: "habr",
        // impersonal: "estricto",  // Note: no modela esta situación rara de dos significados: auxiliar y impersonal estricto
        auxiliar: true,
        excepciones_léxicas: {
            supletivo: true,
            reglas: {
                IndPres: { temas: { p1: ["h"] },
                    forms: { s1: ["h/e"], s2: ["h/as"], s3: ["h/a", { forma: "h/ay", uso: "impersonal" }],
                        p3: ["h/an"], vos: null } },
                SubPres: { tema_supletivo: ["hay"] },
                CmdPos: { arcaico: true,
                    forms: { s2: ["h/e", "hab/e"], vos: null, "s3": ["hay/a"],
                        p1: ["hay/amos"], p2: ["hab/ed"], p3: ["hay/an"] } },
                CmdNeg: { arcaico: true,
                    forms: { s2: ["hya/as"], vos: null, s3: ["hay/a"],
                        p1: ["hay/amos"], p2: ["hab/áis"], p3: ["hay/an"] } },
            }
        },
        frecuencia: 1800
    },
    habilitar: {
      ok:true,
       pronominal: true, tr: true },
    habitar: {
      ok:true,
       pronominal: false, tr: true, intr: true, adj: true },
    habituar: {
      ok:true,
       pronominal: true, tr: true },
    hablar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    hacer: {
      ok:true,
       modelo: "hacer", pronominal: true, tr: true, intr: true,
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
        },
        frecuencia: 1800
    },
    hackear: {
      ok:true,
       pronominal: false, tr: true },
    halar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    hallar: {
      ok:true,
       pronominal: true, tr: true },
    hartar: {
      ok:true,
       pronominal: true, tr: true },
    hechizar: {
      ok:true,
       pronominal: false, tr: true },
    heder: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    helar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    hendir: {
      ok:true,
       modelo: "cernir", pronominal: true, tr: true, intr: true },
    heredar: {
      ok:true,
       pronominal: false, tr: true },
    herir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    hermanar: {
      ok:true,
       pronominal: true, tr: true },
    herrar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    hervir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    hilar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    hilvanar: {
      ok:true,
       pronominal: false, tr: true },
    hincar: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    hipnotizar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    honrar: {
      ok:true,
       pronominal: true, tr: true },
    hornear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    horrorizar: {
      ok:true,
       pronominal: true, tr: true },
    hospedar: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    huir: {
      ok:true,
       pronominal: true, tr: true, intr: true /* se conjuga de forma regular, solo hay reglas especiales de ortografía */ },
    humanizar: {
      ok:true,
       pronominal: true, tr: true },
    humillar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    hundir: {
      ok:true,
       pronominal: true, tr: true },
    husmear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    identificar: {
      ok:true,
       pronominal: true, tr: true },
    ignorar: {
      ok:true,
       pronominal: false, tr: true },
    igualar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    iluminar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    imaginar: {
      ok:true,
       pronominal: true, tr: true },
    imbuir: {
      ok:true,
       pronominal: false, tr: true },
    imitar: {
      ok:true,
       pronominal: false, tr: true },
    impactar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    impedir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:i" },
    imperar: {
      ok:true,
       pronominal: false, intr: true },
    implantar: {
      ok:true,
       pronominal: true, tr: true },
    implementar: {
      ok:true,
       pronominal: false, tr: true },
    implicar: {
      ok:true,
       pronominal: true, tr: true },
    implorar: {
      ok:true,
       pronominal: false, tr: true },
    imponer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    importar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    imposibilitar: {
      ok:true,
       pronominal: false, tr: true },
    impregnar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    impresionar: {
      ok:true,
       pronominal: true, tr: true },
    imprimir: {
      ok:true,
       pronominal: false, tr: true, excepciones_léxicas: { participio: ["imprimido", { forma: "impreso", uso: "adj" }] } },
    improvisar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    impulsar: {
      ok:true,
       pronominal: false, tr: true },
    imputar: {
      ok:true,
       pronominal: false, tr: true },
    incidir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    inclinar: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    incluir: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    incorporar: {
      ok:true,
       pronominal: true, tr: true },
    incrementar: {
      ok:true,
       pronominal: true, tr: true },
    incrustar: {
      ok:true,
       pronominal: true, tr: true },
    incubar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    inculcar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    inculpar: {
      ok:true,
       pronominal: false, tr: true },
    incumbir: {
      ok:true,
       pronominal: false, intr: true },
    indagar: {
      ok:true,
       pronominal: false, tr: true },
    indexar: {
      ok:true,
       pronominal: false, tr: true },
    indicar: {
      ok:true,
       pronominal: false, tr: true },
    indignar: {
      ok:true,
       pronominal: true, tr: true },
    // indisponer:      { modelo: "poner", pronominal: true, tr: true,
    //                     excepciones_léxicas: {
    //                         participio: ["indispuesto"],
    //                         reglas: {
    //                             CmdPos: { forms: { s2: ["indispó/n", {forma: "indispon/e", uso: "no normativo"}]    }},
    //                         }
    //                     }
    //                  },
    inducir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    infectar: {
      ok:true,
       pronominal: true, tr: true },
    inferir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    infestar: {
      ok:true,
       pronominal: true, tr: true },
    infligir: {
      ok:true,
       pronominal: false, tr: true },
    influir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    informar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    infringir: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    infundir: {
      ok:true,
       pronominal: false, tr: true },
    ingeniar: {
      ok:true,
       pronominal: true, tr: true },
    ingerir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    ingresar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    inhalar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    iniciar: {
      ok:true,
       pronominal: true, tr: true },
    injerir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    inmigrar: {
      ok:true,
       pronominal: false, intr: true },
    inmiscuir: {
      ok:true,
       pronominal: true, tr: true },
    inmortalizar: {
      ok:true,
       pronominal: true, tr: true },
    inmunizar: {
      ok:true,
       pronominal: false, tr: true },
    inquietar: {
      ok:true,
       pronominal: true, tr: true },
    inquirir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "i:ie" },
    inscribir: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: { participio: ["inscrito"] } },
    insertar: {
      ok:true,
       pronominal: true, tr: true },
    insinuar: {
      ok:true,
       pronominal: true, tr: true },
    insistir: {
      ok:true,
       pronominal: false, intr: true },
    inspeccionar: {
      ok:true,
       pronominal: false, tr: true },
    inspirar: {
      ok:true,
       pronominal: true, tr: true },
    instalar: {
      ok:true,
       pronominal: true, tr: true },
    instar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    instituir: {
      ok:true,
       pronominal: false, tr: true },
    instruir: {
      ok:true,
       pronominal: true, tr: true },
    instrumentar: {
      ok:true,
       pronominal: false, tr: true },
    integrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    intentar: {
      ok:true,
       pronominal: false, tr: true },
    interactuar: {
      ok:true,
       pronominal: false, intr: true },
    intercalar: {
      ok:true,
       pronominal: false, tr: true },
    intercambiar: {
      ok:true,
       pronominal: false, tr: true },
    interceder: {
      ok:true,
       pronominal: false, intr: true },
    interesar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    interferir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    interpretar: {
      ok:true,
       pronominal: false, tr: true },
    interrogar: {
      ok:true,
       pronominal: false, tr: true },
    interrumpir: {
      ok:true,
       pronominal: true, tr: true },
    intervenir: {
      ok:true,
       modelo: "venir", pronominal: false, tr: true, intr: true },
    intimidar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    intoxicar: {
      ok:true,
       pronominal: true, tr: true },
    intrigar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    introducir: {
      ok:true,
       pronominal: true, tr: true },
    intuir: {
      ok:true,
       pronominal: false, tr: true }, /* modelo: "huir", pero es regular */
    inundar: {
      ok:true,
       pronominal: true, tr: true },
    invadir: {
      ok:true,
       pronominal: false, tr: true },
    inventar: {
      ok:true,
       pronominal: false, tr: true },
    invertir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    investigar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    investir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:i" },
    invitar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    involucrar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    inyectar: {
      ok:true,
       pronominal: false, tr: true },
    ir: {
      ok:true,
       modelo: "ir", pronominal: true, intr: true,
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
                SubPres: { tema_supletivo: ["vay"],
                    forms: { vos: [{ forma: "vay/as", uso: "Riop." }, { forma: "vay/ás", uso: "C.Am." }] }
                },
                IndPret: { forms: { s1: ["fu/i"], s2: ["fu/iste"], s3: ["fu/e"], p1: ["fu/imos"], p2: ["fu/isteis"], p3: ["fu/eron"] } },
                IndImp: { forms: { s1: ["ib/a"], s2: ["ib/as"], s3: ["ib/a"], p1: ["íb/amos"], p2: ["ib/ais"], p3: ["ib/an"] } },
                // IndFut: uses regular conjugation
                // IndCond: uses regular conjugation
                CmdPos: { forms: { s2: ["v/e"], s3: ["vay/a"], p1: ["vay/amos", "v/amos"], p3: ["vay/an"], vos: ["and/á"] } }
            }
        },
        frecuencia: 1100
    },
    irisar: {
      ok:true,
       pronominal: false, intr: true },
    irritar: {
      ok:true,
       pronominal: true, tr: true },
    irrumpir: {
      ok:true,
       pronominal: false, intr: true },
    iterar: {
      ok:true,
       pronominal: false, tr: true },
    jactar: {
      ok:true,
       pronominal: true, tr: "desusado" },
    jadear: {
      ok:true,
       pronominal: false, intr: true },
    jalar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    jaquear: {
      ok:true,
       pronominal: false, tr: true },
    jorobar: {
      ok:true,
       pronominal: true, tr: true },
    josear: {
      ok:true,
       pronominal: false, intr: true },
    jubilar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    jugar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "u:ue" },
    juntar: {
      ok:true,
       pronominal: true, tr: true },
    jurar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    justificar: {
      ok:true,
       pronominal: true, tr: true },
    juzgar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ladrar: {
      ok:true,
       pronominal: false, intr: true },
    lagrimear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    lamentar: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    languidecer: {
      ok:true,
       pronominal: false, intr: true },
    lanzar: {
      ok:true,
       pronominal: true, tr: true },
    largar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    lastimar: {
      ok:true,
       pronominal: true, tr: true },
    lavar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    leer: {
      ok:true,
       modelo: "leer", pronominal: false, tr: true, intr: true, clase_conjugacional: "-eer" },
    legalizar: {
      ok:true,
       pronominal: false, tr: true },
    legitimar: {
      ok:true,
       pronominal: false, tr: true },
    levantar: {
      ok:true,
       pronominal: true, tr: true },
    levitar: {
      ok:true,
       pronominal: false, intr: true },
    lexicalizar: {
      ok:true,
       pronominal: true, tr: true },
    liberar: {
      ok:true,
       pronominal: false, adj: true },
    licenciar: {
      ok:true,
       pronominal: true, tr: true },
    lidiar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ligar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    limpiar: {
      ok:true,
       pronominal: true, tr: true },
    liquidar: {
      ok:true,
       pronominal: true, tr: true },
    llamar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    llegar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    llenar: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    llevar: {
      ok:true,
       pronominal: true, tr: true },
    llorar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    llover: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue", impersonal: "natural" },
    lloviznar: {
      ok:true,
       pronominal: false, intr: true, impersonal: "natural" },
    localizar: {
      ok:true,
       pronominal: true, tr: true },
    lograr: {
      ok:true,
       pronominal: true, tr: true },
    luchar: {
      ok:true,
       pronominal: false, intr: true },
    lucir: {
      ok:true,
       modelo: "lucir", pronominal: true, tr: true, intr: true, tema_presente_yo_del_modelo: ["luzc"] },
    lustrar: {
      ok:true,
       pronominal: false, tr: true },
    madurar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    magnetizar: {
      ok:true,
       pronominal: false, tr: true },
    maldecir: {
      ok:true,
       modelo: "maldecir", pronominal: false, tr: true, intr: true,
        tema_presente_yo_del_modelo: ["maldig"],
        tema_pretérito_del_modelo: "maldij",
        alternancia_vocálica: "e:i",
        excepciones_léxicas: {
            imperativo_tú: ["maldic/e"],
            participio: ["maldecido"], // "maldito" se usa solo como adjetivo o sustantivo
        }
    },
    malgastar: {
      ok:true,
       pronominal: false, tr: true },
    malherir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    malquerer: {
      ok:true,
       modelo: "querer", pronominal: false, tr: true },
    malquistar: {
      ok:true,
       pronominal: true, tr: true },
    manchar: {
      ok:true,
       pronominal: true, tr: true },
    mancomunar: {
      ok:true,
       pronominal: true, tr: true },
    mandar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    manejar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    maniatar: {
      ok:true,
       pronominal: false, intr: true },
    manifestar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    maniobrar: {
      ok:true,
       pronominal: false, intr: true },
    mantener: {
      ok:true,
       pronominal: true, tr: true },
    maquillar: {
      ok:true,
       pronominal: true, tr: true },
    marcar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    marchar: {
      ok:true,
       pronominal: true, intr: true },
    marchitar: {
      ok:true,
       pronominal: true, tr: true },
    martillar: {
      ok:true,
       pronominal: true, tr: true },
    masajear: {
      ok:true,
       pronominal: false, tr: true },
    mascar: {
      ok:true,
       pronominal: true, tr: true },
    masticar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    matar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    matchear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    maullar: {
      ok:true,
       pronominal: false, intr: true },
    mecer: {
      ok:true,
       pronominal: true, tr: true, tema_presente_yo_del_modelo: ["mez"] },
    medir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:i" },
    meditar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    mejorar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    mencionar: {
      ok:true,
       pronominal: false, tr: true },
    mendigar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    menguar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    menoscabar: {
      ok:true,
       pronominal: true, tr: true },
    menospreciar: {
      ok:true,
       pronominal: false, tr: true },
    menstruar: {
      ok:true,
       pronominal: false, intr: true, excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    mentar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    mentir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    merecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    merendar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    mermar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    merodear: {
      ok:true,
       pronominal: false, intr: true },
    meter: {
      ok:true,
       pronominal: true, tr: true },
    mezclar: {
      ok:true,
       pronominal: true, tr: true },
    migrar: {
      ok:true,
       pronominal: false, intr: true },
    minimizar: {
      ok:true,
       pronominal: false, tr: true },
    mirar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    modelar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    modernizar: {
      ok:true,
       pronominal: true, tr: true },
    modificar: {
      ok:true,
       pronominal: true, tr: true },
    moldear: {
      ok:true,
       pronominal: false, tr: true },
    molestar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    monetizar: {
      ok:true,
       pronominal: false, tr: true },
    montar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    morder: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    mordiscar: {
      ok:true,
       pronominal: false, tr: true },
    mordisquear: {
      ok:true,
       pronominal: false, tr: true },
    morir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true, alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["muerto"] } },
    mostrar: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "o:ue" },
    motivar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    mover: {
      ok:true,
       modelo: "mover", pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    movilizar: {
      ok:true,
       pronominal: true, tr: true },
    mudar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    mugir: {
      ok:true,
       pronominal: false, intr: true },
    multiplicar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    murmurar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    musitar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    mutar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    nacer: {
      ok:true,
       pronominal: true, intr: true, tema_presente_yo_del_modelo: ["nazc"] },
    nadar: {
      ok:true,
       pronominal: false, tr: true },
    narrar: {
      ok:true,
       pronominal: false, tr: true },
    navegar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    necesitar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    negar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    negociar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    nevar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie", impersonal: "natural" },
    nombrar: {
      ok:true,
       pronominal: false, tr: true },
    normalizar: {
      ok:true,
       pronominal: false, tr: true },
    notar: {
      ok:true,
       pronominal: false, tr: true },
    nublar: {
      ok:true,
       pronominal: true, tr: true },
    nuclear: {
      ok:true,
       pronominal: true, tr: true },
    nutrir: {
      ok:true,
       pronominal: false, tr: true },
    obedecer: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    obligar: {
      ok:true,
       pronominal: true, tr: true },
    obrar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    obsequiar: {
      ok:true,
       pronominal: false, tr: true },
    observar: {
      ok:true,
       pronominal: false, tr: true },
    obstruir: {
      ok:true,
       pronominal: true, tr: true },
    obtener: {
      ok:true,
       modelo: "tener", pronominal: false, tr: true },
    ocasionar: {
      ok:true,
       pronominal: false, tr: true },
    ocluir: {
      ok:true,
       pronominal: true, tr: true },
    ocultar: {
      ok:true,
       pronominal: true, tr: true },
    ocupar: {
      ok:true,
       pronominal: true, tr: true },
    ocurrir: {
      ok:true,
       pronominal: true, intr: true },
    odiar: {
      ok:true,
       pronominal: false, tr: true },
    ofender: {
      ok:true,
       pronominal: true, tr: true },
    oficiar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ofrecer: {
      ok:true,
       pronominal: true, tr: true },
    ofuscar: {
      ok:true,
       pronominal: true, tr: true },
    oír: {
      ok:true,
       modelo: "oír", pronominal: false, tr: true, intr: true, // FIX: linguist: why is this a class?
        tema_presente_yo_del_modelo: ["oig"],
        excepciones_léxicas: {
            reglas: {
                CmdPos: { suffixes: { p2: ["íd"], } }
            }
        }
    },
    oler: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    olvidar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ondear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    operar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    opinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    oponer: {
      ok:true,
       modelo: "poner", pronominal: true, tr: true },
    optimizar: {
      ok:true,
       pronominal: false, tr: true },
    orar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ordenar: {
      ok:true,
       pronominal: true, tr: true },
    ordeñar: {
      ok:true,
       pronominal: false, tr: true },
    orear: {
      ok:true,
       pronominal: true, tr: true },
    organizar: {
      ok:true,
       pronominal: true, tr: true },
    originar: {
      ok:true,
       pronominal: true, tr: true },
    orinar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    oscilar: {
      ok:true,
       pronominal: false, intr: true },
    oscurecer: {
      ok:true,
       pronominal: true, tr: true, intr: true, impersonal: "natural" },
    otorgar: {
      ok:true,
       pronominal: false, tr: true },
    oxidar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    padecer: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    pagar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    palidecer: {
      ok:true,
       pronominal: false, intr: true },
    palpar: {
      ok:true,
       pronominal: false, tr: true },
    parafrasear: {
      ok:true,
       pronominal: false, tr: true },
    parar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    parecer: {
      ok:true,
       pronominal: true, intr: true },
    parir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    parpadear: {
      ok:true,
       pronominal: false, intr: true },
    participar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    partir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    partyar: {
      ok:true,
       pronominal: false, intr: true },
    pasar: {
      ok:true,
       pronominal: true, tr: true, intr: true, frecuencia: 16 },
    pasear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    pasmar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    patear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    patinar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    patrullar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    pausar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    pautar: {
      ok:true,
       pronominal: false, tr: true },
    pavimentar: {
      ok:true,
       pronominal: false, tr: true },
    pedalear: {
      ok:true,
       pronominal: false, intr: true },
    pedir: {
      ok:true,
       modelo: "pedir", pronominal: false, tr: true, intr: true,
        alternancia_vocálica: "e:i",
    },
    pegar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    peinar: {
      ok:true,
       pronominal: true, tr: true },
    penetrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    pensar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            reglas: {
                SubPres: { forms: { vos: [{ forma: "piens/es", uso: "Riop." }, { forma: "pens/és", uso: "C.Am." }] } }
            }
        }
    },
    percatar: {
      ok:true,
       pronominal: true, tr: "desusado" },
    perder: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    perdonar: {
      ok:true,
       pronominal: false, tr: true },
    perfeccionar: {
      ok:true,
       pronominal: true, tr: true },
    perforar: {
      ok:true,
       pronominal: false, tr: true },
    perjudicar: {
      ok:true,
       pronominal: true, tr: true },
    perlar: {
      ok:true,
       pronominal: true, tr: true },
    permanecer: {
      ok:true,
       pronominal: false, intr: true },
    permitir: {
      ok:true,
       pronominal: true, tr: true },
    perpetrar: {
      ok:true,
       pronominal: false, tr: true },
    perpetuar: {
      ok:true,
       pronominal: true, tr: true },
    perseguir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:i" },
    persuadir: {
      ok:true,
       pronominal: true, tr: true },
    pertenecer: {
      ok:true,
       pronominal: false, intr: true },
    perturbar: {
      ok:true,
       pronominal: true, tr: true },
    pervertir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    pesar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    pescar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    pestañear: {
      ok:true,
       pronominal: false, intr: true },
    petrificar: {
      ok:true,
       pronominal: true, tr: true },
    piafar: {
      ok:true,
       pronominal: false, intr: true },
    piar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true,
        excepciones_léxicas: {
            reglas: {
                IndPres: { forms: { p2: ["pi/ais", { forma: "pi/áis", uso: "pre-2010" }], vos: ["pi/as", { forma: "pi/ás", uso: "pre-2010" }] } },
                IndPret: { forms: { s1: ["pi/e", { forma: "pi/é", uso: "pre-2010" }], s3: ["pi/o", { forma: "pi/ó", uso: "pre-2010" }] } },
                SubPres: { forms: { p2: ["pi/eis", { forma: "pi/éis", uso: "pre-2010" }] } },
                CmdPos: { forms: { vos: ["pi/a", { forma: "pi/á", uso: "pre-2010" }] } }
            },
        }
    },
    picar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    picotear: {
      ok:true,
       pronominal: "desusado", tr: true, intr: true },
    pinchar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    pintar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    piratear: {
      ok:true,
       pronominal: false, intr: true },
    pisar: {
      ok:true,
       pronominal: false, tr: true, intr: true, adj: true },
    pistear: {
      ok:true,
       pronominal: true, tr: true },
    pizcar: {
      ok:true,
       pronominal: false, tr: true },
    placer: {
      ok:true,
       modelo: "placer", pronominal: false, intr: true, tema_presente_yo_del_modelo: ["plazc"] },
    planchar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    planear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    planificar: {
      ok:true,
       pronominal: false, tr: true },
    plantear: {
      ok:true,
       pronominal: true, tr: true, intr: "desusado" },
    plasmar: {
      ok:true,
       pronominal: false, tr: true },
    platicar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    plegar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    pluralizar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    poblar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    podar: {
      ok:true,
       pronominal: false, tr: true },
    poder: {
      ok:true,
       modelo: "poder", pronominal: false, tr: true, intr: true,
        auxiliar: true,
        alternancia_vocálica: "o:ue",
        tema_pretérito_del_modelo: "pud",
        tema_futuro_del_modelo: "podr",
        excepciones_léxicas: { gerundio_tema_cambio_excepcional: "o:u" },
        frecuencia: 1200
    },
    // podrir:         { pronominal: true, tr: true },   // una forma antigua, solo usa en infinitivo y participio
    poner: {
      ok:true,
       modelo: "poner", pronominal: true, tr: true, intr: true,
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
       pronominal: false, intr: true },
    portar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    posar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    poseer: {
      ok:true,
       pronominal: true, tr: true },
    // posponer:        { pronominal: true, tr: true, excepciones_léxicas: {participio: ["pospuesto"]} },
    postergar: {
      ok:true,
       pronominal: true, tr: true },
    // postponer:       { pronominal: true, tr: true },  // variante de posponer poco usado
    potenciar: {
      ok:true,
       pronominal: false, tr: true },
    practicar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    precipitar: {
      ok:true,
       pronominal: true, tr: true },
    precluir: {
      ok:true,
       pronominal: false, intr: true },
    preferir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    preguntar: {
      ok:true,
       pronominal: true, tr: true },
    preñar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    prender: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    preocupar: {
      ok:true,
       pronominal: true, tr: true },
    preparar: {
      ok:true,
       pronominal: true, tr: true },
    presenciar: {
      ok:true,
       pronominal: false, tr: true },
    presentar: {
      ok:true,
       pronominal: true, tr: true },
    presentir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    presionar: {
      ok:true,
       pronominal: false, tr: true },
    prestar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    presumir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    presurizar: {
      ok:true,
       pronominal: false, tr: true },
    pretender: {
      ok:true,
       pronominal: false, tr: true },
    prevenir: {
      ok:true,
       modelo: "venir", pronominal: true, tr: true },
    prever: {
      ok:true,
       modelo: "ver", pronominal: false, tr: true },
    principiar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    probar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    proceder: {
      ok:true,
       pronominal: false, intr: true },
    procesar: {
      ok:true,
       pronominal: false, tr: true },
    procurar: {
      ok:true,
       pronominal: true, tr: true },
    producir: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    proferir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    profesar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    prohibir: {
      ok:true,
       pronominal: false, tr: true, adj: true,
        excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    prohijar: {
      ok:true,
       pronominal: false, tr: true },
    proliferar: {
      ok:true,
       pronominal: false, intr: true },
    prometer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    promocionar: {
      ok:true,
       pronominal: true, tr: true },
    promover: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    pronunciar: {
      ok:true,
       pronominal: true, tr: true },
    proponer: {
      ok:true,
       modelo: "poner", pronominal: true, tr: true },
    proporcionar: {
      ok:true,
       pronominal: true, tr: true },
    propugnar: {
      ok:true,
       pronominal: false, tr: true },
    proseguir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:i" },
    prostituir: {
      ok:true,
       pronominal: true, tr: true },
    proteger: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    proveer: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: { participio: ["proveído", { forma: "provisto", uso: "adj" }] } },
    provenir: {
      ok:true,
       modelo: "venir", pronominal: false, intr: true },
    provocar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    publicar: {
      ok:true,
       pronominal: false, tr: true },
    pudrir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true, excepciones_léxicas: { participio: ["podrido"] } },
    pulir: {
      ok:true,
       pronominal: false, tr: true },
    pulsear: {
      ok:true,
       pronominal: false, intr: true },
    puntuar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    purgar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    quebrantar: {
      ok:true,
       pronominal: true, tr: true },
    quebrar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    quedar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    quejar: {
      ok:true,
       pronominal: true, tr: true },
    quemar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    querer: {
      ok:true,
       modelo: "querer", pronominal: false, tr: true,
        tema_pretérito_del_modelo: "quis",
        tema_futuro_del_modelo: "querr",
        alternancia_vocálica: "e:ie"
    },
    quitar: {
      ok:true,
       pronominal: true, tr: true },
    radicar: {
      ok:true,
       pronominal: true, intr: true },
    ramificar: {
      ok:true,
       pronominal: true, intr: true },
    raspar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    rastrear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    ratificar: {
      ok:true,
       pronominal: true, tr: true },
    razonar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    reaccionar: {
      ok:true,
       pronominal: false, intr: true },
    realizar: {
      ok:true,
       pronominal: true, tr: true },
    reanudar: {
      ok:true,
       pronominal: true, tr: true },
    rearmar: {
      ok:true,
       pronominal: true, tr: true },
    rebanar: {
      ok:true,
       pronominal: false, tr: true },
    rebasar: {
      ok:true,
       pronominal: false, tr: true },
    rebelar: {
      ok:true,
       pronominal: true, tr: true },
    rebosar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    rebotar: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    rebullir: {
      ok:true,
       pronominal: true, intr: true },
    recetar: {
      ok:true,
       pronominal: false, tr: true },
    rechazar: {
      ok:true,
       pronominal: true, tr: true },
    rechinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    recibir: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    reciclar: {
      ok:true,
       pronominal: true, tr: true },
    reclamar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    recluir: {
      ok:true,
       pronominal: true, tr: true },
    recobrar: {
      ok:true,
       pronominal: true, tr: true },
    recocer: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["recuez"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["recoz"], p2: ["recoz"], vos: [{ forma: "recuez", uso: "Riop." }, { forma: "recoz", uso: "C.Am." }] } },
                CmdPos: { temas: { p1: ["recoz"] } }
            }
        }
    },
    recoger: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    recolectar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    recomendar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    recomenzar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    reconfortar: {
      ok:true,
       pronominal: false, tr: true },
    reconocer: {
      ok:true,
       modelo: "conocer", pronominal: true, tr: true },
    reconstituir: {
      ok:true,
       pronominal: true, tr: true },
    reconstruir: {
      ok:true,
       pronominal: false, tr: true },
    recontar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    reconvenir: {
      ok:true,
       modelo: "venir", pronominal: false, tr: true },
    recordar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    recorrer: {
      ok:true,
       pronominal: false, tr: true, intr: "desusado" },
    recostar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    recriminar: {
      ok:true,
       pronominal: true, tr: true },
    rectificar: {
      ok:true,
       pronominal: true, tr: true },
    recuperar: {
      ok:true,
       pronominal: true, tr: true },
    recurrir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    redactar: {
      ok:true,
       pronominal: false, tr: true },
    redimir: {
      ok:true,
       pronominal: true, tr: true },
    redistribuir: {
      ok:true,
       pronominal: false, tr: true },
    redituar: {
      ok:true,
       pronominal: false, tr: true },
    redoblar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    reducir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    reeditar: {
      ok:true,
       pronominal: false, tr: true },
    reemplazar: {
      ok:true,
       pronominal: false, tr: true },
    reenamorar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    reencontrar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    reenviar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    reevaluar: {
      ok:true,
       pronominal: false, tr: true },
    referir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    reflejar: {
      ok:true,
       pronominal: true, tr: true },
    reflexionar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    refluir: {
      ok:true,
       pronominal: false, intr: true },
    reformar: {
      ok:true,
       pronominal: true, tr: true },
    reformular: {
      ok:true,
       pronominal: false, tr: true },
    reforzar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    refugiar: {
      ok:true,
       pronominal: true, tr: true },
    refutar: {
      ok:true,
       pronominal: false, tr: true },
    regalar: {
      ok:true,
       pronominal: true, tr: true },
    regañar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    regar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    regir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:i" },
    registrar: {
      ok:true,
       pronominal: true, tr: true },
    regresar: {
      ok:true,
       pronominal: true, tr: true },
    regular: {
      ok:true,
       pronominal: true, tr: true },
    regularizar: {
      ok:true,
       pronominal: true, tr: true },
    rehilar: {
      ok:true,
       pronominal: false, tr: true, intr: true, excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    rehogar: {
      ok:true,
       pronominal: false, tr: true },
    rehuir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    rehusar: {
      ok:true,
       pronominal: false, tr: true },
    reinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    reinstalar: {
      ok:true,
       pronominal: true, tr: true },
    reintentar: {
      ok:true,
       pronominal: false, tr: true },
    reír: {
      ok:true,
       modelo: "reír", pronominal: true, tr: true, intr: true,
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
                IndPret: { forms: { s3: ["r/io", { forma: "r/ió", uso: "pre-2010" }], /* p3: ["rieron"],*/ } },
                SubPres: { tema_supletivo: ["rí"], stress_last_vowel_of_s123p3_stem: true,
                    forms: { p1: ["ri/amos"], p2: ["ri/ais", { forma: "ri/áis", uso: "pre-2010" }], /*p3: ["rían"]*/ } },
                CmdPos: { tema_supletivo: ["rí"],
                    forms: { p1: ["ri/amos"], p2: ["re/íd"], vos: ["re/í"] } }
            },
        }
    },
    rejuvenecer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    relacionar: {
      ok:true,
       pronominal: true, tr: true },
    relajar: {
      ok:true,
       pronominal: true, tr: true },
    relampaguear: {
      ok:true,
       pronominal: false, intr: true, impersonal: "natural" },
    relegar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    relevar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    relucir: {
      ok:true,
       modelo: "lucir", pronominal: false, intr: true },
    remansar: {
      ok:true,
       pronominal: true, tr: true },
    remar: {
      ok:true,
       pronominal: false, intr: true },
    rememorar: {
      ok:true,
       pronominal: false, tr: true },
    remendar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    remodelar: {
      ok:true,
       pronominal: false, tr: true },
    remojar: {
      ok:true,
       pronominal: true, tr: true },
    remolinear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    remorder: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    remover: {
      ok:true,
       pronominal: true, tr: true, adj: true, alternancia_vocálica: "o:ue" },
    remplazar: {
      ok:true,
       pronominal: false, tr: true },
    renacer: {
      ok:true,
       pronominal: false, intr: true, adj: true, tema_presente_yo_del_modelo: ["renazc"] },
    rencontrar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    renderizar: {
      ok:true,
       pronominal: false, tr: true },
    rendir: {
      ok:true,
       modelo: "pedir", pronominal: true, tr: true, intr: true },
    reñir: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:i" },
    renovar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    rentar: {
      ok:true,
       pronominal: true, tr: true },
    renunciar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    reparar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    repartir: {
      ok:true,
       pronominal: true, tr: true },
    repasar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    repercutir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    repetir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:i" },
    replicar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    reportar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    reposar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    representar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    reprimir: {
      ok:true,
       pronominal: true, tr: true },
    reprobar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    reprochar: {
      ok:true,
       pronominal: true, tr: true },
    requerir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    resaltar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    resbalar: {
      ok:true,
       pronominal: true, intr: true },
    resentir: {
      ok:true,
       pronominal: "always", alternancia_vocálica: "e:ie" },
    resfriar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true },
    residir: {
      ok:true,
       pronominal: false, intr: true },
    resistir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    resollar: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "o:ue" },
    resolver: {
      ok:true,
       modelo: "mover", pronominal: true, tr: true, intr: true, excepciones_léxicas: { participio: ["resuelto"] } },
    respetar: {
      ok:true,
       pronominal: false, tr: true },
    respirar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    resplandecer: {
      ok:true,
       pronominal: false, intr: true },
    responder: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    responsabilizar: {
      ok:true,
       pronominal: true, tr: true },
    resquebrajar: {
      ok:true,
       pronominal: true, tr: true },
    restar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    restaurar: {
      ok:true,
       pronominal: false, tr: true },
    restituir: {
      ok:true,
       pronominal: true, tr: true },
    restregar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    restringir: {
      ok:true,
       pronominal: false, tr: true },
    resultar: {
      ok:true,
       pronominal: false, intr: true },
    resumir: {
      ok:true,
       pronominal: true, tr: true },
    retar: {
      ok:true,
       pronominal: false, tr: true },
    retener: {
      ok:true,
       modelo: "tener", pronominal: true, tr: true },
    retorcer: {
      ok:true,
      
        // FIX: simplifica como prefijo="re" + "torcer"
        pronominal: true, tr: true,
        alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["retuerz"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["retorz"], p2: ["retorz"], vos: [{ forma: "retuerz", uso: "Riop." }, { forma: "retorz", uso: "C.Am." }] } },
                CmdPos: { temas: { p1: ["retorz"] } }
            }
        }
    },
    retornar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    retozar: {
      ok:true,
       pronominal: false, intr: true },
    retrasar: {
      ok:true,
       pronominal: true, tr: true },
    retratar: {
      ok:true,
       pronominal: true, tr: true },
    retribuir: {
      ok:true,
       pronominal: false, tr: true },
    retroceder: {
      ok:true,
       pronominal: false, tr: true },
    retumbar: {
      ok:true,
       pronominal: false, intr: true },
    reunir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "u:ú" },
    revaluar: {
      ok:true,
       pronominal: false, tr: true },
    revelar: {
      ok:true,
       pronominal: false, tr: true },
    reventar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    reverberar: {
      ok:true,
       pronominal: false, intr: true },
    revertir: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "e:ie" },
    revisar: {
      ok:true,
       pronominal: false, tr: true },
    revolcar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" }, // FIX: usa prefijo: "re"
    revolear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    revolotear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    revolver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true, intr: true },
    rezagar: {
      ok:true,
       pronominal: true, tr: true },
    rezar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    rimar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    rizar: {
      ok:true,
       pronominal: true, tr: true },
    robar: {
      ok:true,
       pronominal: "desusado", tr: true, intr: true },
    rociar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true },
    rodar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    rodear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    roer: {
      ok:true,
       modelo: "roer", pronominal: false, tr: true, tema_presente_yo_del_modelo: ["roig", "roy"], acepta_regular: "primaria",
        excepciones_léxicas: {
            reglas: {
                IndPres: { temas: { vos: ["ro"] } },
                SubPres: { forms: { vos: [{ forma: "ro/as", uso: "Riop." }, { forma: "ro/ás", uso: "C.Am." }] } },
                CmdPos: { temas: { vos: ["ro"] } },
            }
        }
    },
    rogar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    romper: {
      ok:true,
       pronominal: true, tr: true, intr: true, excepciones_léxicas: { participio: ["roto"] } },
    roncar: {
      ok:true,
       pronominal: false, intr: true },
    rondar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    rozar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    rugir: {
      ok:true,
       pronominal: false, intr: true },
    saber: {
      ok:true,
       modelo: "saber", pronominal: false, tr: true, intr: true,
        tema_pretérito_del_modelo: "sup",
        tema_futuro_del_modelo: "sabr",
        excepciones_léxicas: {
            reglas: {
                // similar a caber
                IndPres: { forms: { s1: ["s/é"] } },
                SubPres: { tema_supletivo: ["sep"] },
                CmdPos: { forms: { s3: ["sep/a"], p1: ["sep/amos"], p3: ["sep/an"] } }
            }
        }
    },
    saborear: {
      ok:true,
       pronominal: true, tr: true },
    sacar: {
      ok:true,
       pronominal: true, tr: true },
    saciar: {
      ok:true,
       pronominal: true, tr: true },
    sacrificar: {
      ok:true,
       pronominal: true, tr: true },
    sacudir: {
      ok:true,
       pronominal: true, tr: true },
    sahumar: {
      ok:true,
       pronominal: true, tr: true },
    saldar: {
      ok:true,
       pronominal: true, tr: true },
    salir: {
      ok:true,
       modelo: "salir", pronominal: true, intr: true,
        tema_presente_yo_del_modelo: ["salg"],
        tema_futuro_del_modelo: "saldr",
        excepciones_léxicas: { imperativo_tú: ["sal/"] }
    },
    salpicar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    salpimentar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    saltar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    saludar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    salvar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    sanar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sangrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    santiguar: {
      ok:true,
       pronominal: true, tr: true },
    satisfacer: {
      ok:true,
       modelo: "hacer", pronominal: true, tr: true, intr: true },
    sazonar: {
      ok:true,
       pronominal: true, tr: true },
    secar: {
      ok:true,
       pronominal: true, tr: true },
    secuestrar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    seducir: {
      ok:true,
       pronominal: false, tr: true },
    seguir: {
      ok:true,
       pronominal: true, tr: true, intr: true,
        // NOTE: this does not conjugate as a "-uir" clase infinitivo
        tema_presente_yo_del_modelo: ["sig"],
        alternancia_vocálica: "e:i",
        frecuencia: 15
    },
    seleccionar: {
      ok:true,
       pronominal: false, tr: true },
    sellar: {
      ok:true,
       pronominal: false, tr: true },
    sembrar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    señalar: {
      ok:true,
       pronominal: true, tr: true },
    señar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sentar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    sentenciar: {
      ok:true,
       pronominal: false, tr: true },
    sentir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    separar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    ser: {
      ok:true,
       modelo: "ser", pronominal: false, intr: true, aux: true,
        auxiliar: true,
        no_admite_prefijos: true,
        tema_pretérito_del_modelo: "fu",
        excepciones_léxicas: {
            supletivo: true,
            reglas: {
                IndPres: { forms: { s1: ["s/oy"], s2: ["er/es"], s3: ["/es"], p1: ["s/omos"], p2: ["s/ois"], p3: ["s/on"], vos: ["s/os"] } },
                IndImp: { forms: { s1: ["er/a"], s2: ["er/as"], s3: ["er/a"], p1: ["ér/amos"], p2: ["er/ais"], p3: ["er/an"] } },
                IndPret: { forms: { s1: ["fu/i"], s2: ["fu/iste"], s3: ["fu/e"], p1: ["fu/imos"], p2: ["fu/isteis"], p3: ["fu/eron"] } },
                SubPres: { tema_supletivo: ["se"],
                    forms: { vos: [{ forma: "se/as", uso: "Riop." }, { forma: "se/ás", uso: "C.Am." }] } },
                CmdPos: { forms: { s2: ["sé/"], s3: ["s/ea"], p1: ["se/amos"], p3: ["se/an"], vos: null } }
            }
        },
        frecuencia: 5500
    },
    serrar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    servir: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:i" },
    sesgar: {
      ok:true,
       pronominal: false, tr: true },
    significar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    silbar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    simpatizar: {
      ok:true,
       pronominal: false, intr: true },
    simplificar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    simular: {
      ok:true,
       pronominal: false, tr: true },
    sincerar: {
      ok:true,
       pronominal: true, tr: true },
    sintetizar: {
      ok:true,
       pronominal: false, tr: true },
    sisear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    situar: {
      ok:true,
       pronominal: true, tr: true },
    sobar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    sobornar: {
      ok:true,
       pronominal: false, tr: true },
    sobrar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sobrecargar: {
      ok:true,
       pronominal: false, tr: true },
    sobrecoger: {
      ok:true,
       pronominal: true, tr: true },
    sobrecomplicar: {
      ok:true,
       pronominal: true, tr: true },
    sobreexcitar: {
      ok:true,
       pronominal: true, tr: true },
    sobrehilar: {
      ok:true,
       pronominal: false, tr: true, excepciones_léxicas: {
            reglas: {
                IndPres: { stress_last_vowel_of_s123p3_stem: true },
                SubPres: { stress_last_vowel_of_s123p3_stem: true, stress_last_char_of_vos_riop_stem: true },
                CmdPos: { stress_last_vowel_of_s123p3_stem: true }
            }
        } },
    sobrellevar: {
      ok:true,
       pronominal: false, tr: true },
    sobrepasar: {
      ok:true,
       pronominal: false, tr: true },
    sobresalir: {
      ok:true,
       pronominal: false, intr: true },
    sobrevenir: {
      ok:true,
       modelo: "venir", pronominal: false, intr: true },
    sobrevivir: {
      ok:true,
       pronominal: false, intr: true },
    sofreír: {
      ok:true,
       modelo: "reír", pronominal: false, tr: true },
    solapar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    solar: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "o:ue" },
    soldar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    soler: {
      ok:true,
       pronominal: false, intr: true, alternancia_vocálica: "o:ue", impersonal: "soler" },
    solicitar: {
      ok:true,
       pronominal: false, tr: true, intr: "desusado" },
    sollozar: {
      ok:true,
       pronominal: false, intr: true },
    soltar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    solucionar: {
      ok:true,
       pronominal: true, tr: true },
    sombrear: {
      ok:true,
       pronominal: false, tr: true },
    someter: {
      ok:true,
       pronominal: true, tr: true },
    sonar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    soñar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    sonreír: {
      ok:true,
       modelo: "reír", pronominal: true, intr: true },
    sonrojar: {
      ok:true,
       pronominal: true, tr: true },
    soplar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    soportar: {
      ok:true,
       pronominal: false, tr: true },
    sorprender: {
      ok:true,
       pronominal: true, tr: true },
    sortear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sosegar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    sospechar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sostener: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    soterrar: {
      ok:true,
       pronominal: false, tr: true },
    suavizar: {
      ok:true,
       pronominal: true, tr: true },
    subir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true },
    subscribir: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: { participio: ["subscrito", { forma: "subscripto", uso: "Cono Sur" }] } },
    substituir: {
      ok:true,
       pronominal: false, tr: true },
    substraer: {
      ok:true,
       pronominal: true, tr: true },
    subvenir: {
      ok:true,
       modelo: "venir", pronominal: false, tr: true },
    subvertir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    succionar: {
      ok:true,
       pronominal: false, tr: true },
    suceder: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sucumbir: {
      ok:true,
       pronominal: false, intr: true },
    sudar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    sufrir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    sugerir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    sujetar: {
      ok:true,
       pronominal: true, tr: true },
    sumar: {
      ok:true,
       pronominal: true, tr: true },
    sumergir: {
      ok:true,
       pronominal: true, tr: true },
    suministrar: {
      ok:true,
       pronominal: false, tr: true },
    sumir: {
      ok:true,
       pronominal: true, tr: true },
    superar: {
      ok:true,
       pronominal: true, tr: true },
    suplicar: {
      ok:true,
       pronominal: true, tr: true },
    suplir: {
      ok:true,
       pronominal: false, tr: true },
    suponer: {
      ok:true,
       pronominal: false, tr: true },
    suprimir: {
      ok:true,
       pronominal: false, tr: true },
    supurar: {
      ok:true,
       pronominal: "desusado", tr: "desusado", intr: true },
    surgir: {
      ok:true,
       pronominal: false, intr: true },
    suscitar: {
      ok:true,
       pronominal: false, tr: true },
    suscribir: {
      ok:true,
       pronominal: true, tr: true, excepciones_léxicas: { participio: ["suscrito"] } },
    suspender: {
      ok:true,
       pronominal: true, tr: true },
    suspirar: {
      ok:true,
       pronominal: false, intr: true },
    sustentar: {
      ok:true,
       pronominal: true, tr: true },
    sustituir: {
      ok:true,
       pronominal: false, tr: true },
    sustraer: {
      ok:true,
       pronominal: true, tr: true },
    susurrar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    tachar: {
      ok:true,
       pronominal: false, tr: true },
    taconear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    tallar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    tambalear: {
      ok:true,
       pronominal: true, intr: true },
    tañer: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    tantear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    tapar: {
      ok:true,
       pronominal: true, tr: true },
    tapiar: {
      ok:true,
       pronominal: false, tr: true },
    tararear: {
      ok:true,
       pronominal: false, tr: true },
    tardar: {
      ok:true,
       pronominal: true, intr: true },
    tartamudear: {
      ok:true,
       pronominal: false, intr: true },
    tatuar: {
      ok:true,
       pronominal: true, tr: true },
    teclear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    tejer: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    temblar: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    temer: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    templar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    tender: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    tener: {
      ok:true,
       modelo: "tener", pronominal: true, tr: true, intr: true,
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
        },
        frecuencia: 2700
    },
    teñir: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:i" },
    tentalear: {
      ok:true,
       pronominal: false, tr: true },
    tentar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "e:ie" },
    terapear: {
      ok:true,
       pronominal: false, tr: true },
    terciar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    terminar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    textear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    tipificar: {
      ok:true,
       pronominal: false, tr: true },
    tirar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    titubear: {
      ok:true,
       pronominal: false, intr: true },
    tocar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    tokenizar: {
      ok:true,
       pronominal: false, tr: true }, // de informática
    tolerar: {
      ok:true,
       pronominal: false, tr: true },
    tomar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    toquetear: {
      ok:true,
       pronominal: false, tr: true },
    torcer: {
      ok:true,
      
        pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue",
        tema_presente_yo_del_modelo: ["tuerz"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { temas: { p1: ["torz"], p2: ["torz"], vos: [{ forma: "tuerz", uso: "Riop." }, { forma: "torz", uso: "C.Am." }] } },
                CmdPos: { temas: { p1: ["torz"] } }
            }
        }
    },
    tornar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    torturar: {
      ok:true,
       pronominal: true, tr: true },
    toser: {
      ok:true,
       pronominal: false, intr: true },
    tostar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    toxicar: {
      ok:true,
       pronominal: false, intr: true },
    trabajar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    trabar: {
      ok:true,
       pronominal: true, tr: true },
    traducir: {
      ok:true,
       pronominal: false, tr: true },
    traer: {
      ok:true,
       modelo: "traer", pronominal: true, tr: true, tema_presente_yo_del_modelo: ["traig"], tema_pretérito_del_modelo: "traj" },
    trajinar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    tramitar: {
      ok:true,
       pronominal: false, tr: true },
    tranquilizar: {
      ok:true,
       pronominal: true, tr: true },
    transcender: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    transcurrir: {
      ok:true,
       pronominal: false, intr: true },
    transferir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    transfigurar: {
      ok:true,
       pronominal: true, tr: true },
    transformar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    transitar: {
      ok:true,
       pronominal: false, intr: true },
    translucir: {
      ok:true,
       modelo: "lucir", pronominal: true, tr: true },
    transmitir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    transparentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    // transponer:      { pronominal: true, tr: true,
    //                     excepciones_léxicas: {
    //                         participio: ["transpuesto"],
    //                         reglas: {
    //                             CmdPos: { forms: { s2: ["transpó/n", {forma: "transpon/e", uso: "no normativo"}] }},
    //                         }
    //                     }        
    //                  },
    transportar: {
      ok:true,
       pronominal: true, tr: true },
    trapear: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    trascender: {
      ok:true,
       pronominal: false, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    trascurrir: {
      ok:true,
       pronominal: false, intr: true },
    trasferir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    trasfigurar: {
      ok:true,
       pronominal: true, tr: true },
    trasformar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    trasladar: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    traslucir: {
      ok:true,
       modelo: "lucir", pronominal: true, tr: true },
    trasmitir: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    trasparentar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    traspasar: {
      ok:true,
       pronominal: true, tr: true },
    // trasponer:       { pronominal: true, tr: true,
    //                     excepciones_léxicas: {
    //                         participio: ["traspuesto"],
    //                         reglas: {
    //                             CmdPos: { forms: { s2: ["traspó/n", {forma: "traspon/e", uso: "no normativo"}] }},
    //                         }
    //                     }        
    //                  },
    trastabillar: {
      ok:true,
       pronominal: false, intr: true },
    trastumbar: {
      ok:true,
       pronominal: false, tr: true },
    tratar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    trazar: {
      ok:true,
       pronominal: false, tr: true },
    trepar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    triangular: {
      ok:true,
       pronominal: true, tr: true },
    triturar: {
      ok:true,
       pronominal: false, tr: true },
    triunfar: {
      ok:true,
       pronominal: false, intr: true },
    trocar: {
      ok:true,
       pronominal: true, tr: true, alternancia_vocálica: "o:ue" },
    tronar: {
      ok:true,
       pronominal: true, tr: true, intr: true, impersonal: "natural", alternancia_vocálica: "o:ue" },
    tropezar: {
      ok:true,
       pronominal: true, intr: true, alternancia_vocálica: "e:ie" },
    trozar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    tumbar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    turnar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ubicar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    unir: {
      ok:true,
       pronominal: true, adj: true, frecuencia: 5 },
    untar: {
      ok:true,
       pronominal: true, tr: true },
    urgir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    usar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ustedear: {
      ok:true,
       pronominal: false, tr: true },
    utilizar: {
      ok:true,
       pronominal: false, tr: true, adj: true },
    vaciar: {
      ok:true,
       modelo: "vaciar", pronominal: true, tr: true, intr: true,
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
       pronominal: false, tr: true, intr: true },
    vagar: {
      ok:true,
       pronominal: false, intr: true },
    valer: {
      ok:true,
       modelo: "valer", pronominal: true, tr: true, intr: true, tema_presente_yo_del_modelo: ["valg"], tema_futuro_del_modelo: "valdr" },
    validar: {
      ok:true,
       pronominal: false, tr: true },
    valuar: {
      ok:true,
       pronominal: false, tr: true },
    vaporizar: {
      ok:true,
       pronominal: true, tr: true },
    variar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true },
    velar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    vencer: {
      ok:true,
       pronominal: true, tr: true, intr: true, tema_presente_yo_del_modelo: ["venz"] },
    vender: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    venir: {
      ok:true,
       modelo: "venir", pronominal: true, intr: true,
        tema_presente_yo_del_modelo: ["veng"],
        tema_pretérito_del_modelo: "vin",
        tema_futuro_del_modelo: "vendr",
        alternancia_vocálica: "e:ie",
        excepciones_léxicas: {
            gerundio: ["viniendo"],
            imperativo_tú: ["ven/"],
            reglas: {
                SubPres: { forms: { vos: [{ forma: "veng/as", uso: "Riop." }, { forma: "veng/ás", uso: "C.Am." }] } },
                CmdPos: { derivations: { preserve_stress_from_base: ["s2"] } }
            }
        }
    },
    ventear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ventilar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    ver: {
      ok:true,
       modelo: "ver", pronominal: true, tr: true, intr: true,
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
                SubPres: { tema_supletivo: ["ve"] },
                // accents dropped
                IndPret: { forms: { s1: ["v/i"], s3: ["v/io"] },
                    derivations: { preserve_stress_from_base: ["s1", "s3"] }
                },
                IndImp: { tema_supletivo: ["ve"] },
                CmdPos: { forms: { s3: ["ve/a"], p1: ["ve/amos"], p3: ["ve/an"], vos: null },
                    derivations: { preserve_stress_from_base: ["s2"] }
                }
            }
        },
        frecuencia: 700
    },
    verificar: {
      ok:true,
       pronominal: true, tr: true },
    verraquear: {
      ok:true,
       pronominal: false, intr: true },
    verter: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "e:ie" },
    vestir: {
      ok:true,
       pronominal: true, tr: true, intr: true, adj: true, alternancia_vocálica: "e:i" },
    viajar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    vibrar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    vidriar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true, intr: true, acepta_regular: "variante" },
    vigilar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    vincular: {
      ok:true,
       pronominal: true, tr: true, adj: true },
    violar: {
      ok:true,
       pronominal: false, tr: true },
    virar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    visitar: {
      ok:true,
       pronominal: true, tr: true },
    vislumbrar: {
      ok:true,
       pronominal: false, tr: true },
    vivir: {
      ok:true,
       pronominal: false, tr: true, intr: true, sus: "m" },
    volar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    volcar: {
      ok:true,
       pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue" },
    voltear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    volver: {
      ok:true,
       modelo: "volver", pronominal: true, tr: true, intr: true, alternancia_vocálica: "o:ue", excepciones_léxicas: { participio: ["vuelto"] } },
    vomitar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    vosear: {
      ok:true,
       pronominal: true, tr: true },
    votar: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    xerografiar: {
      ok:true,
       modelo: "vaciar", pronominal: false, tr: true },
    yacer: {
      ok:true,
       pronominal: false, intr: true, tema_presente_yo_del_modelo: ["yazc", "yazg", "yag"],
        excepciones_léxicas: {
            reglas: {
                SubPres: { forms: { vos: [{ forma: "yazc/as", uso: "Riop." }, { forma: "yazg/as", uso: "C.Am." }] }
                }
            }
        }
    },
    zafar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    zaherir: {
      ok:true,
       pronominal: false, tr: true, alternancia_vocálica: "e:ie" },
    zambuir: {
      ok:true,
       pronominal: false, tr: true, intr: true },
    zambullir: {
      ok:true,
       pronominal: true, tr: true },
    zampar: {
      ok:true,
       pronominal: true, tr: true },
    zangolotear: {
      ok:true,
       pronominal: true, tr: true, intr: true },
    zarandear: {
      ok:true,
       pronominal: true, tr: true },
    zumbar: {
      ok:true,
       pronominal: true, tr: true, intr: true },
};
export function getAnnotations(infinitivo, modelo, mood_tense_derivation) {
    const annotations = { infinitivo, mood_tense_derivation, modelo, version, license };
    return annotations;
}
//# sourceMappingURL=verbos-con-cambios-morfol%C3%B3gicas.js.map