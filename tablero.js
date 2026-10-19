/* =========================================================
DIRECCIÓN DE ESTRATEGIA · motor
Utilidades de dibujo, navegación por hash y arranque.
No hace falta editar este archivo para cambiar contenido:
el contenido vive en la carpeta secciones/.
========================================================= */

/* =====================================================================
1 · UTILIDADES COMPARTIDAS
===================================================================== */

window.UI = (function () {
"use strict";

var MESES = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

function esc(v) {
return String(v == null ? "" : v)
.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function partes(iso) {
var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
return m ? { a: +m[1], m: +m[2], d: +m[3] } : null;
}

function fecha(iso) {
var p = partes(iso);
return p ? p.d + " " + MESES[p.m - 1] + " " + p.a : String(iso || "");
}

function dias(iso) {
var p = partes(iso);
if (!p) return null;
var hoy = new Date();
return Math.max(0, Math.round(
(Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) - Date.UTC(p.a, p.m - 1, p.d)) / 86400000));
}

function nivel(n) {
var v = String(n || "").toLowerCase();
if (v === "critica" || v === "crítica") return "pill--critica";
if (v === "alta") return "pill--alta";
if (v === "media") return "pill--media";
if (v === "baja") return "pill--baja";
return "pill--info";
}

/* Tabla de respaldo plegable para cada gráfico */
function tabla(resumen, encabezados, filas) {
return '<details class="datos"><summary>' + esc(resumen) + "</summary>" +
'<div class="datos__scroll"><table class="tabla-d"><thead><tr>' +
encabezados.map(function (h, i) {
return '<th scope="col"' + (i ? ' class="num"' : "") + ">" + esc(h) + "</th>"; }).join("") +
"</tr></thead><tbody>" +
filas.map(function (f) {
return "<tr>" + f.map(function (c, i) {
return i === 0 ? '<th scope="row">' + esc(c) + "</th>"
: '<td class="num">' + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
"</tbody></table></div></details>";
}

/* Gráfico de barras horizontales: una sola serie, un solo tono.
datos: [{ nombre, valor, detalle, destacar }] */
function barras(datos, opciones) {
opciones = opciones || {};
var max = Math.max.apply(null, datos.map(function (d) { return d.valor; })) || 1;
var escala = opciones.escala || 88; // deja sitio a la etiqueta de valor
return '<div class="barras">' + datos.map(function (d) {
return '<div class="bfila' + (d.separar ? " bfila--sep" : "") + '">' +
'<span class="bfila__n">' + esc(d.nombre) +
(d.sufijo ? " <em>" + esc(d.sufijo) + "</em>" : "") + "</span>" +
'<span class="bfila__t"><i class="bfila__b' + (d.destacar ? " es-alta" : "") +
'" style="width:' + (d.valor / max * escala).toFixed(1) + '%"></i>' +
'<b class="bfila__v">' + esc(d.etiqueta != null ? d.etiqueta : d.valor) + "</b></span>" +
'<span class="bfila__d">' + esc(d.detalle || "") + "</span></div>";
}).join("") + "</div>";
}

/* Barra apilada con leyenda. series: [{ nombre, n }] */
function apilada(series) {
var total = series.reduce(function (s, e) { return s + e.n; }, 0) || 1;
return '<div class="apilada">' + series.map(function (e, i) {
return '<span class="apilada__s s-' + (i + 1) + '" style="width:' +
(e.n / total * 100).toFixed(2) + '%"></span>'; }).join("") + "</div>" +
'<div class="leyenda">' + series.map(function (e, i) {
return '<span class="lg"><i class="lg__m s-' + (i + 1) + '"></i><b>' + e.n + "</b> " +
esc(e.nombre) + ' <em>' + Math.round(e.n / total * 100) + "%</em></span>"; }).join("") + "</div>";
}

function figura(contenido, pie) {
return '<figure class="fig">' + contenido +
(pie ? "<figcaption>" + esc(pie) + "</figcaption>" : "") + "</figure>";
}

function cifras(lista) {
return '<div class="cifras">' + lista.map(function (c) {
return '<div class="cifra"><span class="cifra__v">' + esc(c.valor) + "</span>" +
'<span class="cifra__e">' + esc(c.etiqueta) + "</span>" +
(c.nota ? '<span class="cifra__n">' + esc(c.nota) + "</span>" : "") + "</div>"; }).join("") + "</div>";
}

function bloque(titulo, descripcion, contenido, id) {
return '<section class="bloque"' + (id ? ' id="' + esc(id) + '"' : "") + ">" +
'<div class="bloque__cab"><h2>' + esc(titulo) + "</h2>" +
(descripcion ? '<p class="bloque__desc">' + esc(descripcion) + "</p>" : "") + "</div>" +
contenido + "</section>";
}

return { esc: esc, fecha: fecha, dias: dias, nivel: nivel, tabla: tabla,
barras: barras, apilada: apilada, figura: figura, cifras: cifras, bloque: bloque };
})();


/* =====================================================================
2 · NAVEGACIÓN POR HASH
===================================================================== */

/* Cada sección se registra en window.VISTAS; el motor crea el objeto. */
window.VISTAS = window.VISTAS || {};

window.ROUTER = (function () {
"use strict";

/* Menú principal. Las vistas con "hijas" las muestran agrupadas debajo,
para que se vea que esas áreas cuelgan de Estructura. */
var MENU = [
{ id: "resumen" },
{ id: "estructura", hijas: ["hub-innovacion", "soluciones", "nuevas-lineas"] }
];
var INICIO = "resumen";

/* Lista plana, para resolver rutas */
var ORDEN = MENU.reduce(function (acc, m) {
return acc.concat([m.id], m.hijas || []);
}, []);

function partes() {
var h = (location.hash || "").replace(/^#\/?/, "");
var t = h.split("/");
return { vista: t[0] || INICIO, sub: t[1] || null };
}

function enlace(id, actual, clase) {
var v = window.VISTAS[id];
if (!v) return "";
return '<a href="#' + id + '"' + (clase ? ' class="' + clase + '"' : "") +
(id === actual ? ' aria-current="page"' : "") + ">" +
window.UI.esc(v.titulo) + "</a>";
}

function pintarNav(actual) {
var nav = document.getElementById("nav");
if (!nav) return;
nav.innerHTML = MENU.map(function (m) {
var hijas = (m.hijas || []).filter(function (h) { return window.VISTAS[h]; });
if (!hijas.length) return enlace(m.id, actual);

/* El padre y sus áreas quedan dentro de un mismo grupo */
var activoEnGrupo = m.id === actual || hijas.indexOf(actual) !== -1;
return '<span class="nav__grupo' + (activoEnGrupo ? " es-activo" : "") + '">' +
enlace(m.id, actual, "nav__padre") +
'<span class="nav__hijas" role="group" aria-label="Áreas de ' +
window.UI.esc(window.VISTAS[m.id] ? window.VISTAS[m.id].titulo : m.id) + '">' +
hijas.map(function (h) { return enlace(h, actual, "nav__hija"); }).join("") +
"</span></span>";
}).join("");
}

function pintar() {
var p = partes();
var vista = window.VISTAS[p.vista] ? p.vista : INICIO;
var V = window.VISTAS[vista];
var U = window.UI;
var main = document.getElementById("contenido");
if (!V || !main) return;

pintarNav(vista);
document.title = V.titulo + " · Dirección de estrategia";

main.innerHTML =
'<header class="encabezado">' +
(V.ruta ? '<p class="encabezado__ruta">' + U.esc(V.ruta) + "</p>" : "") +
"<h1>" + U.esc(V.h1 || V.titulo) + "</h1>" +
(V.bajada ? '<p class="encabezado__bajada">' + U.esc(V.bajada) + "</p>" : "") +
"</header>" +
'<div id="vista-cuerpo">' + V.render(p.sub) + "</div>";

if (typeof V.listo === "function") V.listo(p.sub);

/* Al cambiar de vista, el foco vuelve al inicio del contenido */
window.scrollTo({ top: 0, behavior: "auto" });
}

function iniciar() {
if (!location.hash) location.replace("#" + INICIO);
window.addEventListener("hashchange", pintar);
pintar();
}

return { iniciar: iniciar, pintar: pintar };
})();


/* =====================================================================
3 · ARRANQUE
===================================================================== */

window.ARRANCAR = function () {
"use strict";

function inicio() {
var main = document.getElementById("contenido");
var faltan = !window.UI || !window.ROUTER ||
!window.VISTAS || !Object.keys(window.VISTAS).length;
if (faltan) {
if (main) main.innerHTML = '<p class="vacio">No se cargaron todos los archivos del tablero. ' +
"Revisa que <code>estilos.css</code>, <code>tablero.js</code> y la carpeta " +
"<code>secciones</code> estén junto a index.html.</p>";
return;
}
window.ROUTER.iniciar();
var a = document.getElementById("anio");
if (a) a.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inicio);
else inicio();
};
