/* =========================================================
SECCIÓN · GESTIÓN DE LA ESTRATEGIA
Organigrama, objetivo y carga por equipo.

PARA ACTUALIZAR EL CONTENIDO edita solo el BLOQUE 1 de este
archivo. El bloque 2 dibuja la página y no suele tocarse.

Fuente: "Gerencia Gestión de la Estrategia" (4 láminas).
========================================================= */

/* =====================================================================
BLOQUE 1 · CONTENIDO — edita aquí
===================================================================== */

window.GESTION_ESTRATEGIA = {

meta: { titulo: "Gestión de la Estrategia" },

/* ---------- Organigrama (lámina 1) ---------- */
lider: { rol: "Líder de Gestión de la estrategia", nombre: "Abigail Vásquez Aguilar" },

/* ---------- Objetivo (lámina 2) ---------- */
gerencia: "Gerencia Gestión de la Estrategia",

responsabilidadCentral:
"Aportar análisis estratégico sobre la evolución de la industria bancaria y sostener el ciclo de " +
"gestión de la estrategia, conectando tendencias, referentes del mercado y decisiones ejecutivas " +
"en un proceso continuo.",

responsabilidades: [
{ n: "1", titulo: "Inteligencia estratégica", puntos: [
"Monitorear las tendencias de la industria Bancaria.",
"Realizar benchmark permanente contra bancos referentes nacionales e internacionales y contra jugadores no bancarios que compiten por el mismo cliente.",
"Identificar brechas y prácticas replicables en el sector bancario, y traducirlas en recomendaciones accionables para el Grupo."
] },
{ n: "2", titulo: "Seguimiento de iniciativas estratégicas", puntos: [
"Dar seguimiento al avance contra compromisos, hitos y beneficios esperados.",
"Gestionar proactivamente los riesgos identificados, asegurando su seguimiento, mitigación y cierre oportuno.",
"Coordinar el seguimiento de los acuerdos ejecutivos, garantizando su cumplimiento y cierre."
] },
{ n: "3", titulo: "Gestión del portafolio estratégico", puntos: [
"Mantener una visión integral y actualizada del portafolio de iniciativas, incluyendo su avance, estatus y dependencias clave.",
"Asegurar una distribución equilibrada de inversiones e iniciativas entre objetivos de corto y largo plazo."
] }
],

/* ---------- Carga por equipo (láminas 3 y 4) ---------- */
actividadesFinalizadas: [
"Estructuración de mesas de trabajo CAN",
"Metodología de trabajo CAN",
"Generación de tablero CAN",
"Generación de tablero Cash Loans",
"Generación de tablero Banca mayorista"
],

enProceso: [
"Seguimiento de Mesas CAN",
"Plan de trabajo CAN",
"Generación de tablero estratégico, proyectos, e innovación.",
"Generación de tablero del área.",
"Proyecto PPR."
]
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS["gestion-estrategia"] = (function () {
"use strict";

var SUB = [
{ id: "organigrama", n: "Organigrama" },
{ id: "objetivo", n: "Objetivo" },
{ id: "carga", n: "Carga por equipo" }
];

function D() { return window.GESTION_ESTRATEGIA || {}; }

/* ================= ORGANIGRAMA ================= */
function vistaOrganigrama() {
var U = window.UI, d = D();
return U.bloque("Organigrama", null,
'<div class="org">' +
'<div class="org__lider"><span>' + U.esc(d.lider.rol) + "</span>" +
"<b>" + U.esc(d.lider.nombre) + "</b></div>" +
"</div>");
}

/* ================= OBJETIVO ================= */
function vistaObjetivo() {
var U = window.UI, d = D(), H = [];

H.push('<div class="cita">' +
'<p class="sub" style="margin:0 0 7px">Responsabilidad central</p>' +
U.esc(d.responsabilidadCentral) + "</div>");

H.push(U.bloque("Responsabilidades", null,
'<div class="resps">' + (d.responsabilidades || []).map(function (r) {
return '<article class="respc">' +
'<div class="respc__cab"><span class="respc__n">' + U.esc(r.n) + "</span>" +
"<h4>" + U.esc(r.titulo) + "</h4></div>" +
'<ul class="respc__lista">' + (r.puntos || []).map(function (p) {
return "<li>" + U.esc(p) + "</li>"; }).join("") + "</ul></article>";
}).join("") + "</div>"));

return H.join("");
}

/* ================= CARGA POR EQUIPO ================= */
function vistaCarga() {
var U = window.UI, d = D(), H = [];
var fin = d.actividadesFinalizadas || [], proc = d.enProceso || [];

H.push(U.cifras([
{ valor: String(fin.length), etiqueta: "Actividades finalizadas" },
{ valor: String(proc.length), etiqueta: "En proceso" }
]));

function lista(items, clase) {
return '<ul class="acts ' + clase + '">' + items.map(function (t) {
return '<li><span class="acts__m" aria-hidden="true"></span>' +
'<span class="acts__t">' + U.esc(t) + "</span></li>"; }).join("") + "</ul>";
}

H.push(U.bloque("Actividades finalizadas", null, lista(fin, "acts--fin")));
H.push(U.bloque("En proceso", null, lista(proc, "acts--sig")));

return H.join("");
}

var MAPA = { organigrama: vistaOrganigrama, objetivo: vistaObjetivo, carga: vistaCarga };

return {
titulo: "Gestión de la Estrategia",
ruta: "Dirección de Estrategia · Estructura",
h1: (window.GESTION_ESTRATEGIA && window.GESTION_ESTRATEGIA.meta.titulo) || "Gestión de la Estrategia",
subvistas: SUB,

render: function (sub) {
var U = window.UI;
var activa = MAPA[sub] ? sub : SUB[0].id;
var nav = '<div class="subnav" role="tablist" aria-label="Vistas de Gestión de la Estrategia">' +
SUB.map(function (s) {
return '<button type="button" role="tab" data-sub="' + U.esc(s.id) + '" ' +
'aria-selected="' + (s.id === activa) + '">' + U.esc(s.n) + "</button>"; }).join("") + "</div>";
return nav + '<div id="sub-cuerpo">' + MAPA[activa]() + "</div>";
},

listo: function () {
var nav = document.querySelector(".subnav[aria-label^='Vistas de Gestión']");
if (!nav) return;
nav.addEventListener("click", function (ev) {
var b = ev.target.closest("button[data-sub]");
if (!b) return;
location.hash = "#gestion-estrategia/" + b.getAttribute("data-sub");
});
}
};
})();
