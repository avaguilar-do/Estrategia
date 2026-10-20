/* =========================================================
SECCIÓN · RESUMEN
Objetivo del tablero, comunicados, temas importantes y escalaciones.

PARA ACTUALIZAR EL CONTENIDO edita solo el BLOQUE 1 de este
archivo. El bloque 2 dibuja la página y no suele tocarse.

Agrega objetos dentro de comunicados: [ ], temas: [ ] y escalaciones: [ ].
Las fechas van en formato ISO: "AAAA-MM-DD".
prioridad / severidad: "critica" | "alta" | "media" | "baja".
========================================================= */

/* =====================================================================
BLOQUE 1 · CONTENIDO — edita aquí
===================================================================== */

window.RESUMEN = {

actualizado: "2026-10-13",

objetivo:
"Asegurar la ejecución de la estrategia mediante la revisión y seguimiento de iniciativas " +
"prioritarias, indicadores clave, riesgos y acuerdos, promoviendo la coordinación de las " +
"áreas de la Dirección de Estrategia para una toma de decisiones oportuna.",

/* ---------- Comunicados ----------
{ titulo, fecha, area, autor, etiqueta, resumen } */
comunicados: [],

/* ---------- Temas importantes ----------
{ titulo, area, prioridad, estado, responsable, actualizado, detalle } */
temas: [],

/* ---------- Escalaciones ----------
{ titulo, area, severidad, estado, responsable, abierta, detalle } */
escalaciones: []
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS.resumen = {
titulo: "Resumen",
ruta: "Weekly · Temas Top",
h1: "Weekly - Temas Top",

render: function () {
var U = window.UI, D = window.RESUMEN || {};
var H = [];

/* ---------- Objetivo ---------- */
H.push('<div class="cita" style="margin-bottom:34px">' +
'<p class="sub" style="margin:0 0 7px">Objetivo del tablero</p>' +
U.esc(D.objetivo || "") + "</div>");

/* ---------- Comunicados ---------- */
var com = (D.comunicados || []).slice().sort(function (a, b) {
return String(b.fecha || "").localeCompare(String(a.fecha || "")); });

H.push(U.bloque("Comunicados", "Comunicados importantes del área de estrategia",
com.length
? '<ul class="linea">' + com.map(function (c) {
var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(c.fecha || "");
return "<li>" +
'<div class="linea__f"><b>' + (p ? U.esc(+p[3]) : "") + "</b><span>" +
U.esc(p ? U.fecha(c.fecha).replace(/^\d+\s/, "") : c.fecha) + "</span></div>" +
'<div class="linea__c"><h3>' + U.esc(c.titulo) + "</h3>" +
"<p>" + U.esc(c.resumen) + "</p>" +
'<div class="linea__tags">' +
'<span class="pill pill--info">' + U.esc(c.etiqueta || "Comunicado") + "</span>" +
(c.area ? '<span class="pill">' + U.esc(c.area) + "</span>" : "") +
(c.autor ? '<span class="meta">Publicado por ' + U.esc(c.autor) + "</span>" : "") +
"</div></div></li>"; }).join("") + "</ul>"
: '<p class="vacio">Por ahora no hay comunicados publicados.</p>',
"comunicados"));

/* ---------- Temas importantes ---------- */
var temas = (D.temas || []).slice().sort(function (a, b) {
return String(b.actualizado || "").localeCompare(String(a.actualizado || "")); });

H.push(U.bloque("Temas importantes", "Asuntos que necesitan seguimiento semanal",
temas.length
? '<div class="rejilla">' + temas.map(function (t) {
return '<article class="tema"><h3>' + U.esc(t.titulo) + "</h3>" +
"<p>" + U.esc(t.detalle) + "</p>" +
'<div class="tema__pie"><div style="display:flex;gap:6px;flex-wrap:wrap">' +
'<span class="pill ' + U.nivel(t.prioridad) + '">Prioridad ' + U.esc(t.prioridad) + "</span>" +
(t.estado ? '<span class="pill">' + U.esc(t.estado) + "</span>" : "") +
"</div><span class=\"meta\">" + U.esc(t.responsable || "") +
(t.actualizado ? " · " + U.esc(U.fecha(t.actualizado)) : "") + "</span></div></article>";
}).join("") + "</div>"
: '<p class="vacio">Por ahora no hay temas importantes registrados.</p>',
"temas"));

/* ---------- Escalaciones ---------- */
var orden = { critica: 0, alta: 1, media: 2, baja: 3 };
var esc_ = (D.escalaciones || []).slice().sort(function (a, b) {
var ca = String(a.estado).toLowerCase() === "cerrada" ? 1 : 0;
var cb = String(b.estado).toLowerCase() === "cerrada" ? 1 : 0;
if (ca !== cb) return ca - cb;
var oa = orden[String(a.severidad).toLowerCase()], ob = orden[String(b.severidad).toLowerCase()];
return (oa === undefined ? 9 : oa) - (ob === undefined ? 9 : ob);
});

H.push(U.bloque("Escalaciones",
"Temas críticos, riesgos o dependencias que superan al equipo y requieren decisión o intervención " +
"para asegurar el cumplimiento de los objetivos estratégicos.",
esc_.length
? '<div class="tabla-f">' + esc_.map(function (e) {
var cerrada = String(e.estado).toLowerCase() === "cerrada";
var d = U.dias(e.abierta);
return '<article class="fila fila--' + U.esc(String(e.severidad).toLowerCase()) + '">' +
'<div class="fila__b" aria-hidden="true"></div>' +
'<div class="fila__m"><h3>' + U.esc(e.titulo) + "</h3><p>" + U.esc(e.detalle) + "</p></div>" +
'<div class="fila__d">' + U.esc(e.responsable || "") +
(e.area ? '<br><span class="meta">' + U.esc(e.area) + "</span>" : "") + "</div>" +
'<div class="fila__e"><span class="pill ' + (cerrada ? "pill--baja" : U.nivel(e.severidad)) + '">' +
U.esc(e.estado) + "</span>" +
'<span class="fila__dias">' + (cerrada ? "Cerrada el " + U.esc(U.fecha(e.cerrada || e.abierta))
: (d === null ? "" : "Abierta hace " + d + " días")) + "</span></div></article>";
}).join("") + "</div>"
: '<p class="vacio">Por ahora no hay escalaciones.</p>',
"escalaciones"));

return H.join("");
}
};
