/* =========================================================
SECCIÓN · SOLUCIONES DE NEGOCIO
Organigrama, capacidades, los 35 proyectos y la carga por persona.

PARA ACTUALIZAR EL CONTENIDO edita solo el BLOQUE 1 de este
archivo. El bloque 2 dibuja la página y no suele tocarse.

"celula" debe coincidir con un id de celulas; "programa", con un id de
programas. estatus: "En proceso" | "Planeado" | "No planeado".
========================================================= */

/* =====================================================================
BLOQUE 1 · CONTENIDO — edita aquí
===================================================================== */

window.SOLUCIONES = {

meta: {
titulo: "Soluciones de Negocio",
subtitulo: "Propuesta funcional · Octubre 2026"
},

/* ---------- Funciograma (Matriz Funciograma Soluciones de Negocio) ---------- */
funciograma: {

liderazgo: {
puesto: "Subdirección de Soluciones de Negocio",
nombre: "Karen de Jesús Ramírez Uscanga",
responsabilidad: "Conducir la estrategia del área, acordar prioridades y gestionar capacidad, dependencias y escalaciones."
},

proposito: "Transformar las necesidades del negocio en soluciones que mejoren la experiencia, los procesos y los " +
"resultados del banco, articulando su definición, priorización y seguimiento con las áreas participantes.",

funciones: [
{ nombre: "Gestión de demanda y portafolio",
puntos: ["Recibir y clarificar necesidades de negocio.",
"Integrar iniciativas y proponer prioridades.",
"Dar visibilidad a capacidad, dependencias y compromisos."],
participantes: "Subdirección + Product Owners" },

{ nombre: "Diseño de soluciones y procesos",
puntos: ["Entender el problema y analizar el proceso actual.",
"Diseñar el proceso futuro y definir reglas y alcance.",
"Detallar requerimientos y criterios de aceptación."],
participantes: "Product Owners + UX/UI + Negocio" },

{ nombre: "Gestión de producto y entrega de valor",
puntos: ["Gestionar y ordenar el backlog.",
"Coordinar definiciones y dar seguimiento a entregas.",
"Validar resultados y medir beneficios."],
participantes: "Product Owners + TI + Negocio" },

{ nombre: "Experiencia y diseño UX/UI",
puntos: ["Investigar necesidades de los usuarios.",
"Diseñar journeys, flujos y prototipos.",
"Realizar pruebas de usabilidad e identificar mejoras."],
participantes: "UX/UI · Participación transversal" }
],

/* Ámbitos de atención y equipo asignado. "id" enlaza con los proyectos. */
ambitos: [
{ id: "clientes", nombre: "Clientes", personas: [
{ rol: "PO Sr.", nombre: "María Soledad Rojas Villa" },
{ rol: "PO Jr.", nombre: "Sheila Paola Flores Enríquez" } ] },

{ id: "core", nombre: "CORE Captación y Crédito", personas: [
{ rol: "PO Sr.", nombre: "Jessica Isaí Juárez Gómez" },
{ rol: "PO Jr.", nombre: "María Fernanda Aguilera Vega" } ] },

{ id: "originacion", nombre: "Originación", personas: [
{ rol: "PO Sr.", nombre: "Gamaliel Addi Rosas Mora" },
{ rol: "PO Jr.", nombre: "Laura Elena Hernández Hernández" } ] },

{ id: "plataformas", nombre: "Plataformas de Ventas", personas: [
{ rol: "PO Sr.", nombre: "Carmen Carmona Lozano" },
{ rol: "PO Jr.", nombre: "Erik Córdoba García" },
{ rol: "PO Jr.", nombre: "Luis Enrique Hernández Marín" } ] },

{ id: "puc", nombre: "PUC · Plataformas de Clientes", personas: [
{ rol: "PO Sr.", nombre: "Martín Nieto Gómez" },
{ rol: "PO Jr.", nombre: "Juan Paul García Medrano" },
{ rol: "PO Jr.", nombre: "Karen Mendoza San Emeterio" } ] },

/* Regulatorios y SPEI se agrupan visualmente conservando la asignación individual */
{ id: "regulatorios", nombre: "Regulatorios / SPEI", personas: [
{ rol: "PO Sr.", nombre: "Edsel Fernando Martínez Lira", ambito: "Regulatorios" },
{ rol: "PO Sr.", nombre: "Emily Wendolin López García", ambito: "Regulatorios / SPEI",
puesto: "Product Owner Sr. Regulatorio" } ] }
],

transversal: {
nombre: "UX/UI",
etiqueta: "Función transversal",
personas: [
{ rol: "Diseñadora UX/UI", nombre: "María José León Arévalo" },
{ rol: "Diseñador UX/UI", nombre: "Zadkiel Sánchez Soto" }
]
},

roles: [
{ rol: "Product Owner Sr.",
d: "Liderar la definición de la solución y gestionar el producto en su ámbito, articulando negocio, experiencia y tecnología." },
{ rol: "Product Owner Jr.",
d: "Desarrollar análisis y documentación, detallar historias y criterios, dar seguimiento y apoyar las validaciones." },
{ rol: "UX/UI",
d: "Asegurar que las soluciones respondan a las necesidades de los usuarios mediante investigación, diseño y pruebas." }
],

notas: [
"Propuesta funcional: los bloques no representan nuevas jefaturas ni establecen líneas de reporte.",
"Las asignaciones de Regulatorios y SPEI se conservan diferenciadas dentro del mismo bloque visual."
]
},

/* ---------- Programas (láminas 1 a 7) ---------- */
programas: [
{ id: "lazos", nombre: "Programa Lazos", total: 3, obligatorio: false,
beneficios: [ { t: "Clientes Lazos", v: "12,438" }, { t: "Churn Rate Lazos", v: "1.01%" },
{ t: "Captación", v: "$97,735,840" } ] },

{ id: "enfoque", nombre: "Enfoque al Cliente", total: 15, obligatorio: false,
beneficios: [ { t: "NPS", v: "60" }, { t: "FCR", v: "40%" }, { t: "Churn Rate general", v: "1.19%" },
{ t: "Contactabilidad", v: "25%" }, { t: "Quejas por servicio", v: "7%" },
{ t: "Tiempo de atención", v: "10 min" } ] },

{ id: "estrategia-neg", nombre: "Estrategia de Negocio", total: 3, obligatorio: false,
beneficios: [ { t: "Ahorro en el costo de captación" } ] },

{ id: "actualizacion", nombre: "Actualización Tecnológica", total: 9, obligatorio: false,
beneficios: [ { t: "Habilitador de la estrategia de banca de gobierno y menor dependencia de servicios profesionales del proveedor (Fiserv)" },
{ t: "Continuidad operativa, evolución tecnológica y estabilidad" } ] },

{ id: "plataformas-prog", nombre: "Nueva Generación de Plataformas", total: 3, obligatorio: false,
beneficios: [ { t: "Tiempo de apertura de cuenta", v: "15 min" }, { t: "Productividad", v: "0.60" },
{ t: "Reprocesos", v: "<25%" } ] },

{ id: "control", nombre: "Control Interno y Riesgos", total: 11, obligatorio: true,
beneficios: [ { t: "Garantiza el cumplimiento de lo que dicta la regulación" },
{ t: "Evita multas e incumplimientos ante la autoridad" } ] }
],

/* ---------- Los 35 proyectos (láminas 2 a 7) ---------- */
proyectos: [
{ nombre: "Automatización Programa Lazos", programa: "lazos", celula: "clientes", estatus: "En proceso" },
{ nombre: "Campaña Perimetral: Trazabilidad WhatsApp creación de lead en Salesforce", programa: "lazos", celula: "clientes", estatus: "En proceso" },
{ nombre: "Apertura de cuenta + Crédito", programa: "lazos", celula: "puc", estatus: "Planeado" },

{ nombre: "Automatización de procesos (3 sows)", programa: "enfoque", celula: "clientes", estatus: "En proceso" },
{ nombre: "Vista Integral 360", programa: "enfoque", celula: "clientes", estatus: "En proceso" },
{ nombre: "Canal de soporte a Back office con Agente Numia", programa: "enfoque", celula: "clientes", estatus: "En proceso" },
{ nombre: "Reingeniería IVR", programa: "enfoque", celula: "clientes", estatus: "En proceso" },
{ nombre: "NPS", programa: "enfoque", celula: "clientes", estatus: "No planeado" },
{ nombre: "Automatización proceso trxs POS", programa: "enfoque", celula: "core", estatus: "En proceso" },
{ nombre: "Actualización y consulta de comprobantes de inversión", programa: "enfoque", celula: "core", estatus: "En proceso" },
{ nombre: "Generación de tablero de resultados de Banca patrimonial", programa: "enfoque", celula: "core", estatus: "No planeado" },
{ nombre: "Reportes Control Central de Cuentas - Mesa de Control", programa: "enfoque", celula: "originacion", estatus: "En proceso" },
{ nombre: "Identificación de tipo de solicitudes de Control Central de Cuentas", programa: "enfoque", celula: "originacion", estatus: "En proceso" },
{ nombre: "Optimización Apertura Cuenta Personas Físicas", programa: "enfoque", celula: "originacion", estatus: "En proceso" },
{ nombre: "Excepción biométrica y biométrico dactilar - 2026", programa: "enfoque", celula: "plataformas", estatus: "Planeado" },
{ nombre: "Resolución de incidencias SPEI", programa: "enfoque", celula: "plataformas", estatus: "Planeado" },
{ nombre: "Homologación en Flujos transaccionales Digitales (Circulares 9/2026 y 10/2026) / CODI y DIMI Actualización", programa: "enfoque", celula: "puc", estatus: "No planeado" },

{ nombre: "Cuenta Rocket", programa: "estrategia-neg", celula: "core", estatus: "En proceso" },

{ nombre: "Nuevo Core Bancario & Bca Empresarial", programa: "actualizacion", celula: "core", estatus: "En proceso" },
{ nombre: "CRM Objetivo", programa: "actualizacion", celula: "originacion", estatus: "En proceso" },
{ nombre: "Content Manager Objetivo (Filenet)", programa: "actualizacion", celula: "originacion", estatus: "En proceso" },
{ nombre: "Migración a BAW en Contenedores", programa: "actualizacion", celula: "originacion", estatus: "En proceso" },

{ nombre: "Oferta Dinámica 2.0", programa: "plataformas-prog", celula: "plataformas", estatus: "En proceso" },
{ nombre: "Aplicación de Inversiones", programa: "plataformas-prog", celula: "puc", estatus: "En proceso" },

{ nombre: "Control de Cambios Proceso de Seguimiento Articulo 61", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Consultoría en PCI DSS", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Reportes Regulatorios Reportware", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Nuevos requerimientos regulatorios", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Monitor Plus", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Controles de Integridad de Software Core Bancario", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "DIMO", programa: "control", celula: "regulatorios", estatus: "En proceso" },
{ nombre: "Migración Campo c63 al c57", programa: "control", celula: "regulatorios", estatus: "No planeado" },
{ nombre: "2FA en Flujo de Cargos No Presenciales -3D Secure 2.0 - Monitor Plus", programa: "control", celula: "regulatorios", estatus: "No planeado" },
{ nombre: "CODI", programa: "control", celula: "regulatorios", estatus: "No planeado" },
{ nombre: "Implementación: PUI -Protocolo de Alerta Nacional de Búsqueda de Personas Desaparecidas", programa: "control", celula: "regulatorios", estatus: "En proceso" }
],

/* ---------- Capacidades y modelo funcional (pp. 12-14) ---------- */
capacidades: {
proposito: "Diseñamos y articulamos soluciones integrales que conectan las necesidades del negocio con la " +
"experiencia, los procesos y las capacidades tecnológicas necesarias para su implementación.",
verbos: [
{ n: "01", v: "Comprender", d: "Problemas y oportunidades de negocio." },
{ n: "02", v: "Diseñar", d: "Soluciones integrales con visión de principio a fin." },
{ n: "03", v: "Convertir", d: "Las necesidades en definiciones funcionales listas para ejecución." },
{ n: "04", v: "Alinear", d: "Prioridades, capacidad, dependencias y decisiones." },
{ n: "05", v: "Acompañar", d: "La implementación, la adopción y la transferencia del conocimiento a la operación." }
],
disciplinas: [
{ t: "Conocimiento del negocio", d: "Estrategia, mercado, productos, regulación y operación, para asegurar que la solución responda a una necesidad real." },
{ t: "Innovación e ideación", d: "Exploración de alternativas, generación de ideas y evaluación de oportunidades de mayor impacto." },
{ t: "Procesos y capacidades", d: "Análisis del funcionamiento actual y diseño de capacidades, procesos y modelos operativos del estado futuro." },
{ t: "Viabilidad de negocio", d: "Validación de que cada solución genere valor, sea sostenible y tenga una justificación sólida." },
{ t: "Diseño de experiencias y procesos", d: "Experiencias consistentes para clientes, colaboradores y aliados, alineadas con los objetivos del negocio." },
{ t: "Conexión y alineación", d: "Alineación entre estrategia, negocio y tecnología para una ejecución coordinada y una adopción efectiva." }
],
cadena: [
{ t: "Comprendemos", d: "el negocio y el problema" },
{ t: "Estructuramos", d: "la oportunidad" },
{ t: "Diseñamos", d: "la solución integral" },
{ t: "Validamos", d: "valor, viabilidad y alineación estratégica" },
{ t: "Habilitamos", d: "la ejecución" }
],
roles: [
{ rol: "Business Designer", antes: "Antes Product Owner Sr.",
proposito: "Diseñar la solución correcta, asegurando que responda a un problema relevante, genere valor para el negocio y sea viable para la organización.",
responsabilidad: "Liderar la definición integral de la solución, conectando estrategia, cliente, procesos, operación, experiencia y tecnología.",
decisiones: "Define el problema y la oportunidad, la propuesta de valor, el alcance del MVP, el proceso futuro, las reglas de negocio y la experiencia objetivo.",
entregables: "Diagnóstico del problema, caso de negocio, diseño integral de la solución, journey y proceso futuro, alcance funcional, reglas de negocio, definición del MVP y esquema de medición de beneficios." },
{ rol: "Product Owner", antes: "Antes Product Owner Jr.",
proposito: "Convertir la solución definida en entregas funcionales de valor, asegurando claridad, calidad y continuidad durante la ejecución.",
responsabilidad: "Gestionar la definición funcional y el backlog, acompañar a la célula y validar que cada incremento cumpla con el alcance y los criterios acordados.",
decisiones: "Define la secuencia y prioridad del backlog, las historias de usuario, los criterios de aceptación y la aceptación funcional de los incrementos. Escala las decisiones que modifiquen el alcance, los beneficios o las reglas definidas.",
entregables: "Backlog priorizado, historias de usuario, criterios de aceptación, evidencias de validación e incrementos funcionales aceptados." },
{ rol: "UX / UI", antes: "Capacidad transversal a todas las células",
proposito: "Diseñar la experiencia integral del usuario, asegurando que cada solución sea intuitiva, " +
"accesible, consistente y alineada con los objetivos de negocio y las necesidades del cliente.",
responsabilidades: [
"Definir la arquitectura de información, flujos de navegación e interacciones, garantizando recorridos simples, eficientes y centrados en el usuario.",
"Traducir las necesidades funcionales en experiencias digitales, colaborando con el Product Owner Sr. para asegurar que la solución funcional y la experiencia evolucionen de manera integrada.",
"Diseñar y mantener los componentes visuales, patrones de interacción y lineamientos de experiencia, promoviendo consistencia entre productos digitales mediante el uso del Design System institucional.",
"Validar la experiencia de usuario durante todo el ciclo de vida de la iniciativa, participando en sesiones de descubrimiento, definición, refinamiento y validación antes de la liberación.",
"Incorporar criterios de accesibilidad, usabilidad y mejores prácticas de diseño, asegurando que las soluciones sean inclusivas, claras y fáciles de utilizar.",
"Generar prototipos, wireframes y diseños de alta fidelidad, facilitando la validación temprana de las soluciones y reduciendo retrabajos durante el desarrollo.",
"Medir y promover la mejora continua de la experiencia digital, incorporando hallazgos derivados de métricas, pruebas con usuarios y retroalimentación del negocio."
] }
]
}
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS.soluciones = (function () {
"use strict";

var SUB = [
{ id: "funciograma", n: "Funciograma" },
{ id: "capacidades", n: "Objetivo" },
{ id: "carga", n: "Carga por persona" }
];

function D() { return window.SOLUCIONES || {}; }
function programa(id) {
return (D().programas || []).filter(function (p) { return p.id === id; })[0] || { nombre: id };
}
function deAmbito(id) {
return (D().proyectos || []).filter(function (p) { return p.celula === id; });
}

/* ================= FUNCIOGRAMA ================= */
function vistaFunciograma() {
var U = window.UI, F = D().funciograma || {}, H = [];

/* Liderazgo */
H.push('<div class="lider-box">' +
'<span class="lider-box__p">' + U.esc(F.liderazgo.puesto) + "</span>" +
'<b class="lider-box__n">' + U.esc(F.liderazgo.nombre) + "</b>" +
'<span class="lider-box__r">' + U.esc(F.liderazgo.responsabilidad) + "</span></div>");

/* Propósito */
H.push('<div class="proposito"><p class="sub" style="margin:0 0 6px">Propósito</p>' +
U.esc(F.proposito) + "</div>");

/* 01 · Funciones del área */
H.push(U.bloque("Funciones del área", null,
'<div class="funcs">' + (F.funciones || []).map(function (f) {
return '<article class="func"><h4>' + U.esc(f.nombre) + "</h4>" +
'<ul class="func__lista">' + (f.puntos || []).map(function (p) {
return "<li>" + U.esc(p) + "</li>"; }).join("") + "</ul>" +
'<p class="func__part">' + U.esc(f.participantes) + "</p></article>";
}).join("") + "</div>", "funciones"));

/* 02 · Ámbitos de atención y equipo asignado */
H.push(U.bloque("Ámbitos de atención y equipo asignado", null,
'<div class="ambitos">' + (F.ambitos || []).map(function (a) {
return '<article class="ambito"><h4>' + U.esc(a.nombre) + "</h4>" +
'<ul class="ambito__gente">' + (a.personas || []).map(function (p) {
return "<li>" +
'<span class="tag ' + (/Sr\./.test(p.rol) ? "tag--sr" : "tag--jr") + '">' +
U.esc(p.rol) + "</span>" +
'<span class="ambito__n">' + U.esc(p.nombre) +
(p.ambito ? '<span class="ambito__sub">' + U.esc(p.ambito) + "</span>" : "") +
"</span></li>"; }).join("") + "</ul></article>";
}).join("") + "</div>" +

/* UX/UI transversal */
(F.transversal
? '<div class="transversal"><p class="transversal__t">' + U.esc(F.transversal.nombre) +
' <span>' + U.esc(F.transversal.etiqueta) + "</span></p>" +
'<ul class="transversal__gente">' + (F.transversal.personas || []).map(function (p) {
return "<li><b>" + U.esc(p.nombre) + "</b><span>" + U.esc(p.rol) + "</span></li>";
}).join("") + "</ul></div>"
: "")));

/* 03 · Responsabilidad por rol */
H.push(U.bloque("Responsabilidad por rol", null,
'<div class="disc">' + (F.roles || []).map(function (r) {
return '<div class="disc__c"><p class="disc__t">' + U.esc(r.rol) + "</p><p>" +
U.esc(r.d) + "</p></div>"; }).join("") + "</div>"));

if ((F.notas || []).length) {
H.push('<ul class="notas">' + F.notas.map(function (n) {
return "<li>" + U.esc(n) + "</li>"; }).join("") + "</ul>");
}

return H.join("");
}

/* ================= CARGA POR PERSONA ================= */
function vistaCarga() {
var U = window.UI, d = D(), F = d.funciograma || {}, H = [];

var tarjetas = (F.ambitos || []).map(function (a) {
var srs = (a.personas || []).filter(function (p) { return /Sr\./.test(p.rol); });
var proys = deAmbito(a.id);

return '<article class="pcard pcard--sr">' +
'<div class="pcard__cab"><div class="pcard__id">' +
'<p class="pcard__n">' + U.esc(a.nombre) + "</p>" +
'<p class="pcard__c">' + srs.map(function (p) {
return U.esc(p.nombre) + (p.ambito ? " · " + U.esc(p.ambito) : ""); }).join(" &nbsp;·&nbsp; ") +
"</p></div>" +
'<div class="pcard__num"><b>' + proys.length + "</b><span>proyectos</span></div>" +
"</div>" +
(proys.length
? '<ul class="pcard__lista">' + proys.map(function (x) {
return '<li><span class="pcard__p">' + U.esc(x.nombre) +
'<span class="pcard__prog">' + U.esc(programa(x.programa).nombre) + "</span></span>" +
'<span class="pill ' + (x.estatus === "No planeado" ? "pill--alta" :
x.estatus === "Planeado" ? "pill--media" : "pill--info") + '">' +
U.esc(x.estatus) + "</span></li>"; }).join("") + "</ul>"
: '<p class="pcard__vacio">Sin proyectos registrados en el documento de asignación.</p>') +
"</article>";
}).join("");

H.push(U.bloque("Product Owner Sr. por ámbito de atención", null,
'<div class="personas">' + tarjetas + "</div>"));

/* Proyectos cuya célula no existe en la estructura nueva */
var ids = (F.ambitos || []).map(function (a) { return a.id; });
var huerfanos = (d.proyectos || []).filter(function (p) { return ids.indexOf(p.celula) === -1; });
if (huerfanos.length) {
H.push(U.bloque("Proyectos sin ámbito en la estructura propuesta", null,
'<ul class="acts acts--sig">' + huerfanos.map(function (x) {
return '<li><span class="acts__m" aria-hidden="true"></span>' +
'<span class="acts__t">' + U.esc(x.nombre) +
'<span class="pcard__prog">' + U.esc(programa(x.programa).nombre) + "</span></span></li>";
}).join("") + "</ul>" +
'<p class="aviso">Estos proyectos tienen una célula que no corresponde a ningún ámbito ' +
'de la estructura funcional. Revisa el campo <code>celula</code> en el bloque de datos.</p>'));
}

return H.join("");
}

/* ================= CAPACIDADES ================= */
function vistaCapacidades() {
var U = window.UI, C = D().capacidades || {}, H = [];

H.push('<div class="cita">' + U.esc(C.proposito) + "</div>");

H.push(U.bloque("Propósito", null,
'<ul class="verbos">' + (C.verbos || []).map(function (v) {
return '<li><span class="verbos__n">' + U.esc(v.n) + "</span>" +
'<span class="verbos__v">' + U.esc(v.v) + "</span>" +
'<span class="verbos__d">' + U.esc(v.d) + "</span></li>"; }).join("") + "</ul>"));

H.push(U.bloque("¿Qué hacemos?", null,
'<div class="disc">' + (C.disciplinas || []).map(function (x) {
return '<div class="disc__c"><p class="disc__t">' + U.esc(x.t) + "</p><p>" + U.esc(x.d) + "</p></div>";
}).join("") + "</div>"));

H.push(U.bloque("La cadena de entrega", null,
'<ul class="cadena">' + (C.cadena || []).map(function (x) {
return "<li><b>" + U.esc(x.t) + "</b><span>" + U.esc(x.d) + "</span></li>"; }).join("") + "</ul>"));

H.push(U.bloque("Modelo funcional · evolución de roles", null,
'<div class="roles">' + (C.roles || []).map(function (r) {
var cuerpo = "<dt>Propósito del rol</dt><dd>" + U.esc(r.proposito) + "</dd>";
if (r.responsabilidades) {
cuerpo += "<dt>Responsabilidades</dt><dd><ul class=\"rol__lista\">" +
r.responsabilidades.map(function (x) { return "<li>" + U.esc(x) + "</li>"; }).join("") +
"</ul></dd>";
} else {
cuerpo += "<dt>Responsabilidad central</dt><dd>" + U.esc(r.responsabilidad) + "</dd>" +
"<dt>Decisiones que toma</dt><dd>" + U.esc(r.decisiones) + "</dd>" +
"<dt>Entregables</dt><dd>" + U.esc(r.entregables) + "</dd>";
}
return '<article class="rol">' +
'<div class="rol__cab"><h5>' + U.esc(r.rol) + "</h5><span>" + U.esc(r.antes) + "</span></div>" +
"<dl>" + cuerpo + "</dl></article>"; }).join("") + "</div>"));

return H.join("");
}

var MAPA = { funciograma: vistaFunciograma, capacidades: vistaCapacidades, carga: vistaCarga };

return {
titulo: "Soluciones de Negocio",
ruta: "Dirección de Estrategia · Estructura",
h1: "Soluciones de Negocio",
subvistas: SUB,

render: function (sub) {
var U = window.UI;
var activa = MAPA[sub] ? sub : SUB[0].id;
var nav = '<div class="subnav" role="tablist" aria-label="Vistas de Soluciones de Negocio">' +
SUB.map(function (s) {
return '<button type="button" role="tab" data-sub="' + U.esc(s.id) + '" ' +
'aria-selected="' + (s.id === activa) + '">' + U.esc(s.n) + "</button>"; }).join("") + "</div>";
return nav + '<div id="sub-cuerpo">' + MAPA[activa]() + "</div>";
},

listo: function (sub) {
var nav = document.querySelector(".subnav[aria-label^='Vistas']");
if (!nav) return;
nav.addEventListener("click", function (ev) {
var b = ev.target.closest("button[data-sub]");
if (!b) return;
location.hash = "#soluciones/" + b.getAttribute("data-sub");
});
}
};
})();
