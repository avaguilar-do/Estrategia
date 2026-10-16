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
lider: "Dirección de Innovación",
ejemplo: true,
mision: "Explorar ideas fuera del negocio actual y convertir las que prueban valor en pilotos con dueño y presupuesto.",
focos: [
"Filtrar la cartera de ideas con un criterio único de valor y esfuerzo.",
"Llevar dos pilotos de IA aplicada a resultado medible antes de diciembre.",
"Publicar el ciclo de convocatorias internas para toda la organización."
],
iniciativas: [
{ nombre: "Laboratorio de pilotos con IA", avance: 62 },
{ nombre: "Convocatoria interna de ideas", avance: 80 },
{ nombre: "Alianzas con universidades", avance: 35 }
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
iniciativas: [
{ nombre: "Marco estratégico 2027", avance: 48 },
{ nombre: "Tablero de indicadores corporativos", avance: 70 },
{ nombre: "Análisis competitivo regional", avance: 55 }
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
programas: [
{ nombre: "Enfoque al Cliente", sn: 14, total: 15 },
{ nombre: "Control Interno y Riesgos", sn: 11, total: 11 },
{ nombre: "Actualización Tecnológica", sn: 4, total: 9 },
{ nombre: "Programa Lazos", sn: 3, total: 3 },
{ nombre: "Nueva Generación de Plataformas", sn: 2, total: 3 },
{ nombre: "Estrategia de Negocio", sn: 1, total: 3 }
],
contacto: "17 recursos · 7 células + UX/UI · 35 proyectos"
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
/* Resumen lateral: pares etiqueta / valor */
cifras: [
{ nombre: "Proyecto del área", valor: "Banca Empresarial" },
{ nombre: "Actividades finalizadas", valor: "13" },
{ nombre: "Siguientes actividades", valor: "8" }
],
contacto: "3 integrantes"
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
iniciativas: [
{ nombre: "Ritmo de seguimiento mensual", avance: 88 },
{ nombre: "Modelo de rendición de cuentas", avance: 52 },
{ nombre: "Comunicación de la estrategia", avance: 60 }
]
},
{
id: "pmo",
nombre: "PMO",
lider: "Oficina de Proyectos",
ejemplo: true,
mision: "Asegurar que el portafolio se ejecuta con método, con recursos claros y con riesgos visibles a tiempo.",
focos: [
"Mantener el portafolio priorizado y sin proyectos huérfanos.",
"Elevar riesgos críticos en menos de 48 horas.",
"Publicar el estado del portafolio cada dos semanas."
],
iniciativas: [
{ nombre: "Priorización del portafolio", avance: 77 },
{ nombre: "Gestión de riesgos y dependencias", avance: 58 },
{ nombre: "Plantillas y gobierno de proyectos", avance: 92 }
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
var lado;
if (a.cifras && a.cifras.length) {
lado = "<h4>En resumen</h4>" + a.cifras.map(function (c) {
return '<div class="iniciativa"><div class="iniciativa__cab">' +
"<span>" + U.esc(c.nombre) + "</span><span>" + U.esc(c.valor) + "</span></div></div>";
}).join("");
} else if (a.programas && a.programas.length) {
lado = "<h4>Programas que atiende</h4>" + a.programas.map(function (p) {
return '<div class="iniciativa"><div class="iniciativa__cab">' +
"<span>" + U.esc(p.nombre) + "</span><span>" + p.sn + " de " + p.total + "</span></div>" +
'<div class="barra" role="img" aria-label="Atiende ' + p.sn + " de " + p.total +
' proyectos"><i style="width:' + Math.round(p.sn / p.total * 100) + '%"></i></div></div>'; }).join("");
} else {
lado = "<h4>Iniciativas en curso</h4>" + (a.iniciativas || []).map(function (x) {
var pct = Math.max(0, Math.min(100, Number(x.avance) || 0));
return '<div class="iniciativa"><div class="iniciativa__cab">' +
"<span>" + U.esc(x.nombre) + "</span><span>" + pct + "%</span></div>" +
'<div class="barra" role="img" aria-label="Avance ' + pct + ' por ciento">' +
'<i style="width:' + pct + '%"></i></div></div>'; }).join("");
}

return '<section class="area" id="panel-' + U.esc(a.id) + '" role="tabpanel" ' +
'aria-labelledby="tab-' + U.esc(a.id) + '" tabindex="0"' + (i === 0 ? "" : " hidden") + ">" +
'<div class="area__intro"><h3>' + U.esc(a.nombre) + "</h3>" +
(a.ejemplo ? '<span class="sello">Contenido de ejemplo · pendiente de cargar</span>' : "") +
'<p class="area__mision">' + U.esc(a.mision) + "</p>" +
'<ul class="area__focos">' + (a.focos || []).map(function (f) {
return "<li>" + U.esc(f) + "</li>"; }).join("") + "</ul>" +
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
