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
lider: { rol: "Líder Soluciones de Negocio", nombre: "Karen de Jesus Ramirez Uscanga" }
},

cifras: [
{ valor: "17", etiqueta: "Recursos", nota: "14 en células · 2 UX/UI · 1 líder de área" },
{ valor: "7", etiqueta: "Células + UX/UI", nota: "organizadas por dominio de negocio" },
{ valor: "6", etiqueta: "Programas", nota: "comprometidos ante Consejo 2026" },
{ valor: "35", etiqueta: "Proyectos", nota: "de 44 que suman los 6 programas" }
],

/* ---------- Células y personas (organigrama, lámina 1) ---------- */
celulas: [
{ id: "clientes", nombre: "Clientes", personas: [
{ rol: "SR", nombre: "Maria Soledad Rojas Villa" },
{ rol: "JR", nombre: "Sheila Paola Flores Enriquez" } ] },

{ id: "core", nombre: "CORE", personas: [
{ rol: "SR", nombre: "Jessica Isai Juarez Gomez" },
{ rol: "JR", nombre: "Maria Fernanda Aguilera Vega" } ] },

{ id: "originacion", nombre: "Originación", personas: [
{ rol: "SR", nombre: "Gamaliel Addi Rosas Mora" },
{ rol: "JR", nombre: "Laura Elena Hernandez Hernandez" } ] },

{ id: "plataformas", nombre: "Plataformas de Venta", personas: [
{ rol: "SR", nombre: "Maria Del Carmen Carmona Lozano" },
{ rol: "JR", nombre: "Erik Cordoba Garcia" } ] },

{ id: "mmp", nombre: "MMP", subtitulo: "Mi Maletín Prospección", personas: [
{ rol: "JR", nombre: "Luis Enrique Hernandez Marin" } ] },

{ id: "puc", nombre: "PUC", personas: [
{ rol: "SR", nombre: "Martin Nieto Gomez" },
{ rol: "JR", nombre: "Karen Mendoza San Emeterio" },
{ rol: "JR", nombre: "Juan Paul García Medrano" } ] },

{ id: "regulatorios", nombre: "Regulatorios", personas: [
{ rol: "SR", nombre: "Edsel Fernando Martinez Lira" },
{ rol: "JR", nombre: "Emily Wendolin Lopez Garcia" } ] }
],

uxui: {
id: "uxui", nombre: "UX/UI", subtitulo: "Transversal a todas las células",
personas: [
{ rol: "LÍDER", nombre: "Maria Jose Leon Arevalo" },
{ rol: "ESP", nombre: "Zadkiel Sanchez Soto" }
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

{ nombre: "Oferta Dinámica 2.0", programa: "plataformas-prog", celula: "mmp", estatus: "En proceso" },
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
{ id: "organigrama", n: "Organigrama" },
{ id: "capacidades", n: "Objetivo" },
{ id: "programas", n: "Proyectos por programa" },
{ id: "carga", n: "Carga por persona" }
];

/* ---------- Helpers de datos ---------- */
function D() { return window.SOLUCIONES || {}; }
function celula(id) {
var d = D();
if (d.uxui && d.uxui.id === id) return d.uxui;
return (d.celulas || []).filter(function (c) { return c.id === id; })[0] || { nombre: id, personas: [] };
}
function programa(id) {
return (D().programas || []).filter(function (p) { return p.id === id; })[0] || { nombre: id };
}
function deCelula(id) {
return (D().proyectos || []).filter(function (p) { return p.celula === id; });
}
function dePrograma(id) {
return (D().proyectos || []).filter(function (p) { return p.programa === id; });
}
function recursos(c) { return (c.personas || []).length; }

/* ================= PROYECTOS POR PROGRAMA ================= */
function vistaProgramas() {
var U = window.UI, d = D(), H = [];
var total = (d.proyectos || []).length;

H.push(U.cifras(d.cifras || []));

/* Estatus del portafolio */
var est = ["En proceso", "Planeado", "No planeado"].map(function (n) {
return { nombre: n, n: (d.proyectos || []).filter(function (p) { return p.estatus === n; }).length };
});
H.push(U.bloque("Estatus del portafolio",
"Los documentos registran el estatus de cada proyecto pero no definen qué significa cada valor.",
U.figura(U.apilada(est),
"Seis proyectos comprometidos ante Consejo 2026 permanecen sin planear; tres de ellos pertenecen " +
"al programa de cumplimiento obligatorio.")));

/* Cobertura por programa */
var maxTot = Math.max.apply(null, (d.programas || []).map(function (p) { return p.total; })) || 1;
var ordenados = (d.programas || []).slice().sort(function (a, b) {
return dePrograma(b.id).length - dePrograma(a.id).length; });

var cobertura = '<div class="progs">' + ordenados.map(function (p) {
var sn = dePrograma(p.id).length, fuera = p.total - sn;
var np = dePrograma(p.id).filter(function (x) { return x.estatus === "No planeado"; }).length;
var cels = {}; dePrograma(p.id).forEach(function (x) { cels[x.celula] = 1; });
var nc = Object.keys(cels).length;
return '<div class="prog"><div class="prog__cab"><span class="prog__n">' + U.esc(p.nombre) +
(p.obligatorio ? ' <span class="tag tag--ob">Obligatorio</span>' : "") + "</span>" +
'<span class="prog__c">' + sn + " de " + p.total + "</span></div>" +
'<div class="prog__t" style="width:' + (p.total / maxTot * 100).toFixed(1) + '%">' +
'<i class="prog__sn" style="width:' + (sn / p.total * 100).toFixed(1) + '%"></i>' +
(fuera ? '<i class="prog__out" style="width:' + (fuera / p.total * 100).toFixed(1) + '%"></i>' : "") +
"</div>" +
'<div class="prog__pie"><span>' + nc + (nc === 1 ? " célula" : " células") + "</span>" +
(np ? '<span class="warn">' + np + " sin planear</span>" : "") + "</div></div>";
}).join("") + "</div>" +
'<div class="leyenda"><span class="lg"><i class="lg__m s-1"></i>Atendido por Soluciones de Negocio</span>' +
'<span class="lg"><i class="lg__m s-2"></i>Atendido por otras áreas</span></div>';

H.push(U.bloque("Cobertura por programa",
"De los 44 proyectos que suman los seis programas, Soluciones de Negocio atiende " + total +
". Los 9 restantes los atienden áreas que los documentos no identifican.",
U.figura(cobertura, "Las barras son proporcionales al tamaño total de cada programa.")));

/* Detalle: proyectos agrupados por programa */
var detalle = ordenados.map(function (p) {
var lista = dePrograma(p.id);
var np = lista.filter(function (x) { return x.estatus === "No planeado"; }).length;
return '<article class="pgrupo">' +
'<div class="pgrupo__cab"><span class="pgrupo__n">' + lista.length + "</span>" +
"<h3>" + U.esc(p.nombre) + "</h3>" +
(p.obligatorio ? '<span class="tag tag--ob">Cumplimiento obligatorio</span>' : "") +
'<span class="pgrupo__meta">' + lista.length + " de " + p.total + " proyectos del programa" +
(np ? '<br><span class="warn" style="color:var(--alerta);font-weight:600">' + np +
" sin planear</span>" : "") + "</span></div>" +
'<div class="pgrupo__ben">' + (p.beneficios || []).map(function (b) {
return '<span class="ben' + (b.v ? "" : " ben--cual") + '">' + U.esc(b.t) +
(b.v ? " <b>" + U.esc(b.v) + "</b>" : "") + "</span>"; }).join("") + "</div>" +
'<div class="pgrupo__scroll"><table class="tabla-p">' +
'<thead><tr><th scope="col">#</th><th scope="col">Proyecto</th>' +
'<th scope="col">Célula</th><th scope="col">Estatus</th></tr></thead><tbody>' +
lista.map(function (x, i) {
return "<tr><td>" + (i + 1) + '</td><td class="pr">' + U.esc(x.nombre) + "</td>" +
"<td>" + U.esc(celula(x.celula).nombre) + "</td>" +
'<td><span class="pill ' + (x.estatus === "No planeado" ? "pill--alta" :
x.estatus === "Planeado" ? "pill--media" : "pill--info") + '">' +
U.esc(x.estatus) + "</span></td></tr>"; }).join("") +
"</tbody></table></div></article>";
}).join("");

H.push(U.bloque("Relación de proyectos",
"Los " + total + " proyectos que atiende Soluciones de Negocio, agrupados por programa.", detalle));

return H.join("");
}

/* ================= ORGANIGRAMA ================= */
function vistaOrganigrama() {
var U = window.UI, d = D(), H = [];

function tarjeta(c, extra) {
var n = c.id === "uxui" ? null : deCelula(c.id).length;
var progs = {}; deCelula(c.id).forEach(function (p) { progs[p.programa] = 1; });
return '<div class="cel' + (extra || "") + '">' +
'<div class="cel__cab"><span class="cel__n">' + U.esc(c.nombre) + "</span>" +
(c.subtitulo ? '<span class="cel__sub">' + U.esc(c.subtitulo) + "</span>" : "") +
'<div class="cel__cifras"><span><b>' + recursos(c) + "</b> rec.</span>" +
(n === null ? "<span>transversal</span>"
: "<span><b>" + n + "</b> proy.</span><span><b>" +
Object.keys(progs).length + "</b> prog.</span>") +
"</div></div>" +
'<div class="cel__gente">' + (c.personas || []).map(function (p) {
var cls = p.rol === "SR" ? "tag--sr" : p.rol === "JR" ? "tag--jr" : "tag--ux";
return '<div class="persona"><span class="tag ' + cls + '">' + U.esc(p.rol) + "</span>" +
'<span class="persona__n">' + U.esc(p.nombre) + "</span></div>"; }).join("") + "</div></div>";
}

var org = '<div class="org">' +
'<div class="org__lider"><span>' + U.esc(d.meta.lider.rol) + "</span>" +
"<b>" + U.esc(d.meta.lider.nombre) + "</b></div>" +
'<div class="org__tronco"></div><div class="org__rama"></div>' +
'<div class="org__celulas">' +
(d.celulas || []).map(function (c) { return tarjeta(c); }).join("") +
(d.uxui ? tarjeta(d.uxui, " cel--ux") : "") +
"</div></div>";

H.push(U.bloque("Organigrama", null, org));

/* Carga por célula, en número de proyectos */
var datos = (d.celulas || []).map(function (c) {
return { nombre: c.nombre, valor: deCelula(c.id).length,
detalle: recursos(c) + (recursos(c) === 1 ? " recurso" : " recursos") };
}).sort(function (a, b) { return b.valor - a.valor; });

H.push(U.bloque("Carga de trabajo por célula", "Número de proyectos asignados a cada célula.",
U.figura(U.barras(datos)) +
U.tabla("Ver los datos por programa",
["Programa", "Proyectos", "Total del programa", "Células", "En proceso", "Planeado", "No planeado"],
(d.programas || []).slice()
.sort(function (a, b) { return dePrograma(b.id).length - dePrograma(a.id).length; })
.map(function (p) {
var l = dePrograma(p.id), cs = {};
l.forEach(function (x) { cs[x.celula] = 1; });
var n = function (e) { return l.filter(function (x) { return x.estatus === e; }).length; };
return [p.nombre, l.length, p.total, Object.keys(cs).length,
n("En proceso"), n("Planeado"), n("No planeado")]; }))));

return H.join("");
}

/* ================= CARGA POR PERSONA ================= */
function vistaCarga() {
var U = window.UI, d = D(), H = [];

/* Resumen por persona */
var filas = [];
(d.celulas || []).forEach(function (c) {
(c.personas || []).forEach(function (p) {
filas.push({ persona: p, celula: c, proyectos: deCelula(c.id) });
});
});

var tarjetas = filas.map(function (f) {
return '<article class="pcard' + (f.persona.rol === "SR" ? " pcard--sr" : "") + '">' +
'<div class="pcard__cab"><div class="pcard__id">' +
'<p class="pcard__n"><span class="tag ' + (f.persona.rol === "SR" ? "tag--sr" : "tag--jr") + '">' +
U.esc(f.persona.rol) + "</span>" + U.esc(f.persona.nombre) + "</p>" +
'<p class="pcard__c">Célula ' + U.esc(f.celula.nombre) + " · " +
(f.persona.rol === "SR" ? "Business Designer" : "Product Owner") + "</p>" +
"</div>" +
'<div class="pcard__num"><b>' + f.proyectos.length + "</b><span>proyectos</span></div></div>" +
'<ol class="pcard__lista">' + f.proyectos.map(function (x) {
return '<li><span class="pcard__p">' + U.esc(x.nombre) +
'<span class="pcard__prog">' + U.esc(programa(x.programa).nombre) + "</span></span>" +
'<span class="pill ' + (x.estatus === "No planeado" ? "pill--alta" :
x.estatus === "Planeado" ? "pill--media" : "pill--info") + '">' +
U.esc(x.estatus) + "</span></li>"; }).join("") + "</ol></article>";
}).join("");

H.push(U.bloque("Portafolio por persona", null,
'<div class="personas">' + tarjetas + "</div>"));

/* UX/UI aparte */
if (d.uxui) {
var ux = '<div class="personas">' + (d.uxui.personas || []).map(function (p) {
return '<article class="pcard pcard--ux"><div class="pcard__cab"><div class="pcard__id">' +
'<p class="pcard__n"><span class="tag tag--ux">' + U.esc(p.rol) + "</span>" + U.esc(p.nombre) + "</p>" +
'<p class="pcard__c">Transversal a todas las células</p></div></div></article>';
}).join("") + "</div>";

H.push(U.bloque("UX/UI", null, ux));
}

return H.join("");
}

/* ================= CAPACIDADES ================= */
function vistaCapacidades() {
var U = window.UI, C = D().capacidades || {}, H = [];

H.push('<div class="cita">' + U.esc(C.proposito) + "</div>");

H.push(U.bloque("Propósito", null,
'<ol class="verbos">' + (C.verbos || []).map(function (v) {
return '<li><span class="verbos__n">' + U.esc(v.n) + "</span>" +
'<span class="verbos__v">' + U.esc(v.v) + "</span>" +
'<span class="verbos__d">' + U.esc(v.d) + "</span></li>"; }).join("") + "</ol>"));

H.push(U.bloque("¿Qué hacemos?", null,
'<div class="disc">' + (C.disciplinas || []).map(function (x) {
return '<div class="disc__c"><p class="disc__t">' + U.esc(x.t) + "</p><p>" + U.esc(x.d) + "</p></div>";
}).join("") + "</div>"));

H.push(U.bloque("La cadena de entrega", null,
'<ol class="cadena">' + (C.cadena || []).map(function (x) {
return "<li><b>" + U.esc(x.t) + "</b><span>" + U.esc(x.d) + "</span></li>"; }).join("") + "</ol>"));

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

var MAPA = { organigrama: vistaOrganigrama, capacidades: vistaCapacidades,
programas: vistaProgramas, carga: vistaCarga };

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
