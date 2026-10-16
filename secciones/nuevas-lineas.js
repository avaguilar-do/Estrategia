/* =========================================================
SECCIÓN · NUEVAS LÍNEAS DE NEGOCIO
Organigrama, objetivo, carga por equipo y proyecto del área.

PARA ACTUALIZAR EL CONTENIDO edita solo el BLOQUE 1 de este
archivo. El bloque 2 dibuja la página y no suele tocarse.

Fuente: "Gerencia Nuevas Líneas de negocio" (4 láminas).
========================================================= */

/* =====================================================================
BLOQUE 1 · CONTENIDO — edita aquí
===================================================================== */

window.NUEVAS_LINEAS = {

meta: {
titulo: "Nuevas Líneas de Negocio",
bajada: "Organigrama, objetivo, carga de trabajo del equipo y proyecto del área."
},

/* ---------- Organigrama (lámina 1) ---------- */
lider: { rol: "Líder de nuevas líneas de negocio", nombre: "Bernardo Flores Sánchez" },
equipo: [
{ rol: "Especialista nuevas líneas de negocio", nombre: "Emilio Muhlia Alva" },
{ rol: "Especialista nuevas líneas de negocio", nombre: "Pablo Rosendo Rowe" }
],

/* ---------- Objetivo (lámina 2) ---------- */
objetivo: "Abrir y consolidar nuevas líneas de negocio en banca Empresarial.",

responsabilidades: [
"Identificar oportunidades no atendidas en el segmento Pyme dentro de la banca mayorista y dimensionar su potencial de mercado.",
"Diseñar la propuesta de valor, el modelo de negocio.",
"Construir el caso de negocio",
"Definir el modelo de atención y originación: perfil de cliente, oferta de crédito, servicios transaccionales y experiencia.",
"Coordinar con Riesgos, Crédito, Jurídico, Cumplimiento y Finanzas la viabilidad regulatoria y el apetito de riesgo.",
"Diseñar y ejecutar pilotos comerciales controlados para validar demanda, precio, riesgo y rentabilidad antes de escalar.",
"Establecer alianzas con actores del ecosistema —fintechs, cámaras, proveedores y programas de fomento— que aceleren el alcance."
],

/* ---------- Carga por equipo (láminas 3 y 4) ---------- */
actividadesFinalizadas: [
"Benchmark de competencia en el mercado, funnel de tasas, de procesos, de productos, productos de competencia",
"Coordinación de las mesas de banca Empresarial",
"Seguimiento de 6 mesas",
"Información e investigación para construcción de business case proveedores y mujeres",
"Construcción de business case proveedores y mujeres",
"Coordinación de equipo directivo para la construcción preliminar de business case proveedores y mujeres",
"Fase 1 de construcción de business case. Unir información de mesas y equipo directivo.",
"Estructura de presentación de business case a dirección general - Correcciones necesarias para presentar en la planeación estrategica 2027-2031",
"Presentación de business case de cadenas de retail",
"Validación de aliado SilverGreen para posibles adquisiciones para que el lanzamiento de la banca sea más sencillo y menos fricciones",
"Benchmark de posibles candidatos para alianzas",
"Diseñar proceso de due diligence",
"Seguimiento con SilverGreen en un plan de trabajo construido"
],

siguientesActividades: [
"Diseño de los procesos operativos junto con el área de operaciones por tipo de producto y transversalidad con banca mayorista",
"Diseño de condiciones de producto junto con Hub de innovación",
"Diseño de pilotos no funcionales junto con Hub de innovación",
"Diseño financiero coordinado con los costos de tecnología y go to market",
"Coordinación de mesas de trabajo para definiciones necesarias por área",
"Construcción de Statement tecnología",
"Acompañamiento contratación módulos Temenos",
"Definiciones finales de CRM para expediente único de cliente"
],

/* ---------- Proyecto del área ---------- */
proyecto: {
nombre: "Banca Empresarial",
enlace: "https://avaguilar-do.github.io/Banca-Empresarial/#timeline",
textoEnlace: "Abrir el tablero de Banca Empresarial"
}
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS["nuevas-lineas"] = (function () {
"use strict";

var SUB = [
{ id: "organigrama", n: "Organigrama" },
{ id: "objetivo", n: "Objetivo" },
{ id: "carga", n: "Carga por equipo" },
{ id: "proyecto", n: "Proyecto del área" }
];

function D() { return window.NUEVAS_LINEAS || {}; }

/* ================= ORGANIGRAMA ================= */
function vistaOrganigrama() {
var U = window.UI, d = D();

var tarjetas = (d.equipo || []).map(function (p) {
return '<div class="cel">' +
'<div class="cel__cab"><span class="cel__n">' + U.esc(p.rol) + "</span></div>" +
'<div class="cel__gente"><div class="persona">' +
'<span class="tag tag--sr">ESP</span>' +
'<span class="persona__n">' + U.esc(p.nombre) + "</span></div></div></div>";
}).join("");

var org = '<div class="org">' +
'<div class="org__lider"><span>' + U.esc(d.lider.rol) + "</span>" +
"<b>" + U.esc(d.lider.nombre) + "</b></div>" +
'<div class="org__tronco"></div><div class="org__rama org__rama--2"></div>' +
'<div class="org__celulas org__celulas--2">' + tarjetas + "</div></div>";

return U.bloque("Organigrama", null, org);
}

/* ================= OBJETIVO ================= */
function vistaObjetivo() {
var U = window.UI, d = D(), H = [];

H.push('<div class="cita">' +
'<p class="sub" style="margin:0 0 7px">Objetivo</p>' + U.esc(d.objetivo) + "</div>");

H.push(U.bloque("Responsabilidades", null,
'<ol class="resp">' + (d.responsabilidades || []).map(function (r, i) {
return '<li><span class="resp__n">' + (i + 1) + "</span>" +
'<span class="resp__t">' + U.esc(r) + "</span></li>"; }).join("") + "</ol>"));

return H.join("");
}

/* ================= CARGA POR EQUIPO ================= */
function vistaCarga() {
var U = window.UI, d = D(), H = [];
var fin = d.actividadesFinalizadas || [], sig = d.siguientesActividades || [];

H.push(U.cifras([
{ valor: String(fin.length), etiqueta: "Actividades finalizadas" },
{ valor: String(sig.length), etiqueta: "Siguientes actividades" }
]));

function lista(items, clase) {
return '<ol class="acts ' + clase + '">' + items.map(function (t) {
return '<li><span class="acts__m" aria-hidden="true"></span>' +
'<span class="acts__t">' + U.esc(t) + "</span></li>"; }).join("") + "</ol>";
}

H.push(U.bloque("Actividades finalizadas", null, lista(fin, "acts--fin")));
H.push(U.bloque("Siguientes actividades", null, lista(sig, "acts--sig")));

return H.join("");
}

/* ================= PROYECTO DEL ÁREA ================= */
function vistaProyecto() {
var U = window.UI, p = (D().proyecto || {});

var tarjeta = '<article class="proy">' +
"<h3>" + U.esc(p.nombre) + "</h3>" +
'<p class="proy__link"><a href="' + U.esc(p.enlace) + '" target="_blank" rel="noopener">' +
U.esc(p.textoEnlace || "Abrir el tablero") +
' <span aria-hidden="true">↗</span><span class="oculto-visual">, se abre en una pestaña nueva</span>' +
"</a></p></article>";

return U.bloque("Proyecto del área", null, tarjeta);
}

var MAPA = { organigrama: vistaOrganigrama, objetivo: vistaObjetivo,
carga: vistaCarga, proyecto: vistaProyecto };

return {
titulo: "Nuevas Líneas de Negocio",
ruta: "Dirección de Estrategia · Estructura",
h1: (window.NUEVAS_LINEAS && window.NUEVAS_LINEAS.meta.titulo) || "Nuevas Líneas de Negocio",
bajada: (window.NUEVAS_LINEAS && window.NUEVAS_LINEAS.meta.bajada) || "",
subvistas: SUB,

render: function (sub) {
var U = window.UI;
var activa = MAPA[sub] ? sub : SUB[0].id;
var nav = '<div class="subnav" role="tablist" aria-label="Vistas de Nuevas Líneas de Negocio">' +
SUB.map(function (s) {
return '<button type="button" role="tab" data-sub="' + U.esc(s.id) + '" ' +
'aria-selected="' + (s.id === activa) + '">' + U.esc(s.n) + "</button>"; }).join("") + "</div>";
return nav + '<div id="sub-cuerpo">' + MAPA[activa]() + "</div>";
},

listo: function () {
var nav = document.querySelector(".subnav[aria-label^='Vistas de Nuevas']");
if (!nav) return;
nav.addEventListener("click", function (ev) {
var b = ev.target.closest("button[data-sub]");
if (!b) return;
location.hash = "#nuevas-lineas/" + b.getAttribute("data-sub");
});
}
};
})();
