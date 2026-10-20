/* =========================================================
SECCIÓN · ESTRUCTURA
Las áreas que integran la Dirección de Estrategia.

PARA ACTUALIZAR EL CONTENIDO edita solo el BLOQUE 1 de este
archivo. El bloque 2 dibuja la página y no suele tocarse.

Cada área admite iniciativas: [{ nombre, avance }] con avance de 0 a 100,
o programas: [{ nombre, sn, total }], y enlace: "#soluciones" para
abrir su página propia.
========================================================= */

/* =====================================================================
BLOQUE 1 · CONTENIDO — edita aquí
===================================================================== */

window.ESTRUCTURA = {

areas: [
{
id: "hub-innovacion",
nombre: "Hub de innovación",
lider: "Subdirección del Hub de Innovación",
enlace: "#hub-innovacion",
mision: "Somos dueños de una capacidad institucional y de la metodología de innovación del Grupo. " +
"Identificamos oportunidades, incubamos, experimentamos, piloteamos y entregamos evidencia " +
"para las decisiones del negocio y de la Alta Dirección.",
focos: [
"Innovación e incubación end to end: de la oportunidad a la recomendación de escalar.",
"Innovación interna: portafolio de iniciativas y convocatoria.",
"Innovación abierta: soluciones y alianzas con el ecosistema.",
"Modelado financiero: caso de negocio y rentabilidad de cada iniciativa.",
"Inteligencia competitiva: cómo innova la industria en productos, servicios y beneficios.",
"Programa Lazos y Banca Mayorista: beneficios, costos y definición de producto."
],
contacto: "1 subdirección · 2 gerencias · 1 especialista",
/* Recuadro lateral de la tarjeta de área */
temas: [
"Plan 2027 hub",
"Autorización iniciativas para Go del año y siguientes pasos"
]
},
{
id: "estrategia",
nombre: "Estrategia",
lider: "Vicepresidencia de Estrategia",
ejemplo: true,
mision: "Definir hacia dónde va la compañía, con qué apuestas compite y cómo se mide el avance.",
focos: [
"Cerrar el marco estratégico 2027 con metas por unidad de negocio.",
"Revisar el mapa competitivo cada trimestre con datos de mercado.",
"Traducir la estrategia a objetivos que los equipos puedan usar."
],
/* Recuadro lateral de la tarjeta de área */
temas: [
"Niveles de servicio y documentos planes por dirección en apoyo a banca minorista.",
"Pulir estrategia de banca mayorista",
"Cerrar KPIs 2027 y revisar estados financieros conforme indicaciones DE con Finanzas",
"Incorporar roadmap de proyectos conforme a la planeación anual",
"Plan de incentivos 2027 por dirección",
"Cierre cifras PAD"
]
},
{
id: "soluciones-negocio",
nombre: "Soluciones de negocio",
lider: "Subdirección de Soluciones de Negocio",
enlace: "#soluciones",
mision:
"Diseñamos y articulamos soluciones integrales que conectan las necesidades del negocio con la " +
"experiencia, los procesos y las capacidades tecnológicas necesarias para su implementación.",
focos: [
"Comprender problemas y oportunidades de negocio.",
"Diseñar soluciones integrales con visión de principio a fin.",
"Convertir las necesidades en definiciones funcionales listas para ejecución.",
"Alinear prioridades, capacidad, dependencias y decisiones.",
"Acompañar la implementación, la adopción y la transferencia del conocimiento a la operación."
],
contacto: "17 recursos · 7 células + UX/UI · 35 proyectos",
/* Recuadro lateral de la tarjeta de área */
temas: [
"Copiloto",
"Cierre de iniciativas",
"Planeacion 2027 en conjunto con PMO",
"Presupuestación lista",
"Hacer informe del año de proyectos en conjunto con PMO para decidir si se incorpora al foro de transformación",
"Realizar una propuesta con base a proyectos 2027 de cómo se estarán visualizando las células en alineación con Miguel Matus"
]
},
{
id: "nuevas-lineas",
nombre: "Nuevas Líneas de negocio",
lider: "Gerencia de Nuevas Líneas de Negocio",
enlace: "#nuevas-lineas",
mision: "Abrir y consolidar nuevas líneas de negocio en banca Empresarial.",
focos: [
"Identificar oportunidades no atendidas en el segmento Pyme dentro de la banca mayorista y dimensionar su potencial de mercado.",
"Diseñar la propuesta de valor, el modelo de negocio.",
"Construir el caso de negocio",
"Definir el modelo de atención y originación: perfil de cliente, oferta de crédito, servicios transaccionales y experiencia.",
"Coordinar con Riesgos, Crédito, Jurídico, Cumplimiento y Finanzas la viabilidad regulatoria y el apetito de riesgo.",
"Diseñar y ejecutar pilotos comerciales controlados para validar demanda, precio, riesgo y rentabilidad antes de escalar.",
"Establecer alianzas con actores del ecosistema —fintechs, cámaras, proveedores y programas de fomento— que aceleren el alcance."
],
contacto: "3 integrantes",
/* Recuadro lateral de la tarjeta de área */
temas: [
"Finalizar BC",
"Assesment DD (para finalizar esta primera etapa de acompañamiento)"
]
},
{
id: "gestion-estrategia",
nombre: "Gestión de la estrategia",
lider: "Oficina de Gestión Estratégica",
ejemplo: true,
mision: "Mantener viva la estrategia: seguimiento, ritmo de revisión, comunicación y rendición de cuentas.",
focos: [
"Sostener el ritmo de revisión mensual con evidencia, no con opiniones.",
"Cerrar la brecha entre lo planeado y lo ejecutado en cada unidad.",
"Mantener este tablero como fuente única de verdad."
],
/* Recuadro lateral de la tarjeta de área */
temas: [
"Cash loans y cómo evoluciona 2027",
"CAN y cómo evoluciona",
"Integrar tablero de estrategia, proyectos e innovación en uno solo así como las actividades",
"Vídeo memorial"
]
},
{
id: "pmo",
nombre: "PMO",
lider: "Oficina de Proyectos",
sinInfo: true,
/* Recuadro lateral de la tarjeta de área */
temas: [
"Proyectos dimensionados con TI divididos por Banca y apuntalando los objetivos estratégicos en conjunto con Soluciones de negocio",
"Taller para dimensionar Business Case Completos.",
"Revisar si el ahorro por proyecto comprometido en el foro pasado se ha estado cumpliendo. Revisar con soluciones de negocio si puede haber ahorros adicionales",
"Presentar el estatus de proyectos al cierre, así como roadmap 2027"
]
}
]
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS.estructura = {
titulo: "Estructura",
ruta: "Dirección de Estrategia",
h1: "Estructura",

render: function () {
var U = window.UI, D = window.ESTRUCTURA || { areas: [] };
var areas = D.areas || [];
if (!areas.length) return '<p class="vacio">No hay áreas registradas.</p>';

var tabs = '<div class="subnav" id="tabs-areas" role="tablist" aria-label="Áreas">' +
areas.map(function (a, i) {
return '<button type="button" role="tab" id="tab-' + U.esc(a.id) + '" ' +
'aria-controls="panel-' + U.esc(a.id) + '" aria-selected="' + (i === 0) + '" ' +
'tabindex="' + (i === 0 ? "0" : "-1") + '">' + U.esc(a.nombre) + "</button>"; }).join("") + "</div>";

var paneles = areas.map(function (a, i) {
/* Recuadro lateral: los temas del área */
var lado = "<h4>Temas del área</h4>" +
((a.temas || []).length
? '<ul class="temas">' + a.temas.map(function (t) {
return '<li><span class="temas__m" aria-hidden="true"></span>' +
"<span>" + U.esc(t) + "</span></li>"; }).join("") + "</ul>"
: '<p class="temas__vacio">No hay información por el momento.</p>');

return '<section class="area" id="panel-' + U.esc(a.id) + '" role="tabpanel" ' +
'aria-labelledby="tab-' + U.esc(a.id) + '" tabindex="0"' + (i === 0 ? "" : " hidden") + ">" +
'<div class="area__intro"><h3>' + U.esc(a.nombre) + "</h3>" +
(a.sinInfo
? '<span class="sello">No hay información por el momento</span>'
: (a.ejemplo ? '<span class="sello">Contenido de ejemplo · pendiente de cargar</span>' : "")) +
(a.mision ? '<p class="area__mision">' + U.esc(a.mision) + "</p>" : "") +
((a.focos || []).length
? '<ul class="area__focos">' + a.focos.map(function (f) {
return "<li>" + U.esc(f) + "</li>"; }).join("") + "</ul>" : "") +
(a.enlace ? '<p class="area__link"><a href="' + U.esc(a.enlace) +
'">Ver la página completa de ' + U.esc(a.nombre) + " →</a></p>" : "") +
"</div>" +
'<div class="area__lado">' + lado +
'<p class="area__contacto">' + U.esc(a.lider || "") +
(a.contacto ? " · " + U.esc(a.contacto) : "") + "</p></div></section>";
}).join("");

return tabs + '<div id="paneles-areas">' + paneles + "</div>";
},

/* Se ejecuta después de pintar: activa las pestañas */
listo: function () {
var cont = document.getElementById("tabs-areas");
if (!cont) return;
var tabs = Array.prototype.slice.call(cont.querySelectorAll('[role="tab"]'));

function activar(i, mover) {
tabs.forEach(function (t, j) {
var on = i === j;
t.setAttribute("aria-selected", String(on));
t.tabIndex = on ? 0 : -1;
var panel = document.getElementById(t.getAttribute("aria-controls"));
if (panel) panel.hidden = !on;
});
if (mover) tabs[i].focus();
}

tabs.forEach(function (t, i) {
t.addEventListener("click", function () { activar(i, false); });
t.addEventListener("keydown", function (ev) {
var k = ev.key;
if (k === "ArrowRight" || k === "ArrowDown") { ev.preventDefault(); activar((i + 1) % tabs.length, true); }
if (k === "ArrowLeft" || k === "ArrowUp") { ev.preventDefault(); activar((i - 1 + tabs.length) % tabs.length, true); }
if (k === "Home") { ev.preventDefault(); activar(0, true); }
if (k === "End") { ev.preventDefault(); activar(tabs.length - 1, true); }
});
});
}
};
