import { Participios } from "../src"
import { conjugateVerb } from "../src/conjugate-verb.js"
import {deriveParticiples} from "../src/derive-participles.js"
import { verbos_con_cambios_morfológicos } from "../src/verbos-con-cambios-morfológicas.js"
import { version } from "../src/version.js"

// var navigator
// var window
// var screen
// var document
// var localStorage

let reportInProgress = false
let themeSlider
let infinitiveInput
let moodTenseSelect
let formasHeaderAnnotation
let conjugationBodyDiv
let reportErrorButton
let lastInfinitive = ""
let latest_conjugated_forms = {}


function updateTableRows(newRows: string[]) {
    const tbody = document.getElementById("conjugation-body")!;
    const existingRows = Array.from(tbody.querySelectorAll("tr"));

    const max = Math.max(existingRows.length, newRows.length);

    for (let i = 0; i < max; i++) {
        const existing = existingRows[i];
        const newHtml = newRows[i];

        // 🟡 actualizar fila existente
        if (existing && newHtml) {
            // fade out
            existing.style.opacity = "0";

            setTimeout(() => {
                existing.innerHTML = newHtml;

                // fade in
                existing.style.opacity = "1";
            }, 120);

        // 🟢 nueva fila
        } else if (!existing && newHtml) {
            const tr = document.createElement("tr");
            tr.innerHTML = newHtml;
            tr.style.opacity = "0";

            tbody.appendChild(tr);

            requestAnimationFrame(() => {
                tr.style.transition = "opacity 0.12s ease";
                tr.style.opacity = "1";
            });

        // 🔴 eliminar fila
        } else if (existing && !newHtml) {
            existing.style.opacity = "0";

            setTimeout(() => {
                existing.remove();
            }, 120);
        }
    }
}

function handleInfinitiveBlur(event) {
    const infinitive = infinitiveInput.value.trim().toLowerCase()
    if (!infinitive || infinitive === lastInfinitive) {
        return
    }
    // resultDiv.innerHTML = "handleInfinitiveBlur()"
    lastInfinitive = infinitive
    // clearConjugation()
    handleConjugate()
}


function handleMoodTenseChange(event) {
    // clearConjugation()
    // resultDiv.innerHTML = "handleMoodTenseChange()"
    handleConjugate()
}




/**
 * Conjuga el verbo actual y muestra la tabla
 */
function handleConjugate() {
    const infinitive = infinitiveInput.value.trim().toLowerCase();
    const mood_tense = moodTenseSelect.value;
    if (!infinitive) {
        conjugationBodyDiv.innerHTML = "<p>Por favor, escriba un infinitivo.</p>";
        return;
    }
    if (mood_tense === "Participios") {
        const participios = deriveParticiples (infinitive)
        renderParticipiosTable(infinitive, mood_tense, participios.participles)

    } else {
        const conj = conjugateVerb(infinitive, mood_tense); // VerbConjugationAnnotated
        if (!conj || !conj.forms) {
            const innerHTML = "<p>No hay formas para este verbo / modo-tiempo.</p>";
            conjugationBodyDiv(innerHTML)
            return;
        }
        latest_conjugated_forms = conj.forms
        renderConjugationTable(infinitive, mood_tense, conj.forms);
    }
}


function handleInfinitiveEnter(event) {
    if (event.key === 'Enter') {
        const infinitive = infinitiveInput.value.trim().toLowerCase()
        if (infinitive && (infinitive !== lastInfinitive)) {
            event.preventDefault()
            handleConjugate()
        }
    }
}



function getFormaHeaderAnnotation(ok, forms, mood_tense) {
    let header_annotation: string
    if (ok === true) {
        header_annotation = "🟢 verificadas"
    } else if (ok == null) {
        header_annotation = "🔵 no verificadas"
    } else {
        const corrections = ok[mood_tense]
        if (corrections) {
            header_annotation = "🔴 incorrectas  ✅ corregidas"
        } else {
            header_annotation = "🟢 verificadas"
        }
    }
    return header_annotation
}


/**
 * Renderiza la tabla de formas
 */
function renderParticipiosTable(infinitive, mood_tense, participios: Participios) {
    const ok = verbos_con_cambios_morfológicos[infinitive]?.ok
    const corrections = ok?.[mood_tense]
    formasHeaderAnnotation.textContent = getFormaHeaderAnnotation(ok, participios, mood_tense)
    let rows = ["gerundio", "participio"]
    let rows_html = []
    for (const key of rows) {
        let span_text = getVerbFormsText(participios[key], corrections?.[key])
        const row_html = `<tr><td>${key}</td><td>${span_text}</td></tr>`
        rows_html.push(row_html)
    }
    updateTableRows(rows_html)
}



/**
 * Renderiza la tabla de formas
 */
function renderConjugationTable(infinitive, mood_tense, forms) {
    function combineTuVos(s2, vos, corrections){
        // if (!s2 && !vos){
        //     const span=document.createElement("span")
        //     span.textContent="—"
        //     span.className="null"
        //     return span
        // }
        const render_s2 = (s2 && !vos) || (JSON.stringify(s2) === JSON.stringify(vos))
        if (render_s2) {
            return getVerbFormsText(s2, corrections?.s2)
        }
        let span_text
        const s2_text = getVerbFormsText(s2, corrections?.s2)
        const vos_text = getVerbFormsText(vos, corrections?.vos)
        span_text = `${s2_text} &nbsp; • &nbsp;  ${vos_text}`
        return span_text
    }
    const ok = verbos_con_cambios_morfológicos[infinitive]?.ok
    formasHeaderAnnotation.textContent = getFormaHeaderAnnotation(ok, forms, mood_tense)
    let rows = [
        ["s1", "yo"],
        ["s2", "tú = vos"],
        ["s2_vos", "tú ≠ vos"], // combinamos
        ["s3", "él, ella, usted"],
        ["p1", "nosotros"],
        ["p2", "vosotros"],
        ["p3", "ellos, ellas, ustedes"]
    ];
    const corrections = ok?.[mood_tense]
    const rows_html = []
    const s2_vos_shared = (!forms.vos || (forms.s2 == forms.vos))
    for (const [key,label] of rows){
        let span_text
        if (s2_vos_shared) {
            if (key === "s2_vos") continue
        } else {
            if (key === "s2") continue
        }
        if (key==="s2_vos")
            span_text = combineTuVos(forms.s2, forms.vos, corrections)
        else
            span_text = getVerbFormsText(forms[key], corrections?.[key])
        const row_html = `<tr><td>${label}</td><td>${span_text}</td></tr>`
        rows_html.push(row_html)
    }
    updateTableRows(rows_html)
}


function getVerbFormsText(verbForms, corrections) {
    let span_text
    if(verbForms==null){
        span_text="—"
        return span_text
    }
    if (verbForms?.length===1) {
        if (corrections) {
            let corrections_text = `✅ ${corrections[0]}`
            if (corrections.length === 2) {
                corrections_text += ` , ✅ ${corrections[1]}`
            }
            span_text = `(🔴 ${verbForms[0]})  ${corrections_text}`
            return span_text
        } else {
            span_text = verbForms[0]
            return span_text
        }
    }
    if (corrections) {
        const form_0_ok = !corrections.includes(verbForms[0])
        const form_1_ok = !corrections.includes(verbForms[1])
        const span_content_0 = form_0_ok ? `🟢 ${verbForms[0]}` : `(🔴 ${verbForms[0]}) ✅ ${corrections[0]}` 
        const span_content_1 = form_1_ok ? `🟢 ${verbForms[1]}` : `(🔴 ${verbForms[1]}) ✅ ${corrections[1]}` 
        span_text = `${span_content_0} , ${span_content_1}`
    } else {
        span_text = `${verbForms[0]} , ${verbForms[1]}`
    }
    return span_text
}

function handleThemeToggle() {
    const dark = themeSlider.checked;  // checked => oscuro
    document.body.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
}


function initTheme() {
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light";  // default oscuro
    document.body.classList.toggle("light", !dark);
    themeSlider.checked = dark;
}



function getBrowserState() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        width: window.innerWidth,
        height: window.innerHeight,
        screen: `${screen.width}x${screen.height}`,
        pixelRatio: window.devicePixelRatio,
        cores: navigator.hardwareConcurrency,
        touch: navigator.maxTouchPoints,
        online: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
}

function prepareErrorReportInGitHub(event) {
    if (reportInProgress) return
    reportInProgress = true
    setTimeout(() => {
        reportInProgress = false
    }, 30000) // 30 segundos
    event.preventDefault()
    const infinitivo = infinitiveInput.value.trim().toLowerCase()
    const modo_tiempo = moodTenseSelect.value
    const title = `Reporte de error: ${infinitivo}`
    const estado_de_navegador = getBrowserState()
    const error_report_wo_forms = {infinitivo, modo_tiempo, formas: "FORMAS", estado_de_navegador}
    let json_wo_forms = JSON.stringify(error_report_wo_forms, null, 2)
    let formas_json = ""
    const personas = Object.keys(latest_conjugated_forms)
    if (personas.length > 0) {
        formas_json = " {\n"
        for (const persona of personas) {
            const formas = latest_conjugated_forms[persona]
            formas_json += `    "${persona}": ${JSON.stringify(formas)},\n`
        }
        formas_json += "  },"
    } else {
        formas_json = "null,"
    }
    const json = json_wo_forms.replace('"FORMAS"', formas_json)
    const body =
`Por favor, añada cualquier comentario aquí... entonces haga clic en el botón 🟢 "Create" abajo.

### Detalles (por favor, no edita esta sección)
\`\`\`json
${json}
\`\`\`
`
    const encoded_title = encodeURIComponent(title)
    const encoded_body = encodeURIComponent(body)
    const url = `https://github.com/psnider/conjugador-espanol/issues/new?title=${encoded_title}&body=${encoded_body}`
    window.open(url, "_blank")
}


function initPage() {
    console.log('initPage()')
    // set variable text content
    document.getElementById("versión").innerText = version
    // set variables for elements
    themeSlider = document.getElementById("themeToggle")
    infinitiveInput = document.getElementById("infinitiveInput")
    moodTenseSelect = document.getElementById("moodTenseSelect")
    formasHeaderAnnotation = document.getElementById("formas-annotation")
    conjugationBodyDiv = document.getElementById("conjugation-body")
    reportErrorButton = document.getElementById("report-error-button")
    // set handlers on HTML elements
    themeSlider.addEventListener("change", handleThemeToggle);
    infinitiveInput.addEventListener("keydown", handleInfinitiveEnter);
    infinitiveInput.addEventListener("blur", handleInfinitiveBlur);
    moodTenseSelect.addEventListener("change", handleMoodTenseChange);
    reportErrorButton.addEventListener("click", prepareErrorReportInGitHub);
    // configure display theme
    initTheme()
}

initPage()


// INSERT conjugateVerb code here
