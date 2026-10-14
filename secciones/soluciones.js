/* =========================================================
SECCIÓN · SOLUCIONES DE NEGOCIO
Organigrama, programas, los 35 proyectos, capacidades y riesgos.

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
bajada: "Estructura, portafolio y capacidades de la Subdirección de Soluciones de Negocio.",
lider: { rol: "Líder Soluciones de Negocio", nombre: "Karen de Jesus Ramirez Uscanga" },
fuentes: [
"Dir. Estrategia · Soluciones de Negocio v2 — propósito, capacidades y modelo funcional (pp. 12-14)",
"Soluciones de Negocio · Asignación 02/10/2026 — estructura, programas, proyectos y beneficios"
]
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
{ rol: "UX / UI", antes: "Capacidad transversal", pendiente: true,
proposito: "Los documentos la declaran transversal a todas las células, sin ficha de rol equivalente.",
responsabilidad: "No documentada en los archivos analizados.",
decisiones: "No documentadas en los archivos analizados.",
entregables: "No documentados en los archivos analizados." }
],
nota: "Las seis disciplinas y la cadena de entrega están declaradas a nivel de área. Los documentos no " +
"establecen qué capacidades cubre cada célula, por lo que no es posible afirmar que las siete las " +
"tengan por igual."
},

/* ---------- Resumen ejecutivo ---------- */
resumen: {
entrada:
"Soluciones de Negocio convierte necesidades de negocio en definiciones funcionales listas para " +
"ejecución. Opera con 17 recursos en 7 células por dominio más UX/UI transversal, y atiende 35 de " +
"los 44 proyectos que componen los 6 programas estratégicos comprometidos ante Consejo 2026.",
puntos: [
"La documentación es internamente consistente: las cifras declaradas en la vista general coinciden " +
"con el detalle de los 35 proyectos, por célula, por programa y en cada nota al pie.",
"Tres concentraciones definen la agenda: una célula de 2 recursos sostiene 11 proyectos y el 100% del " +
"programa de cumplimiento obligatorio; 2 recursos de UX/UI dan servicio a los 35 proyectos; y 16 " +
"proyectos pertenecen a programas sin meta numérica comprometida.",
"El modelo funcional ya definido —Business Designer, Product Owner, UX/UI transversal y una función " +
"reforzada de portafolio, gobierno y priorización— contiene las capacidades para cerrar esas brechas."
]
},

/* ---------- Riesgos ---------- */
riesgos: [
{ id: "R1", nivel: "alto", titulo: "Punto único de falla en Regulatorios",
texto: "Una célula de 2 recursos concentra 11 de los 35 proyectos, es la única que atiende el programa de " +
"cumplimiento obligatorio (11 de 11) y tiene 3 de sus proyectos sin planear. No hay otra célula con " +
"proyectos en ese programa que pueda absorber la carga.",
impacto: "Multas e incumplimientos ante la autoridad, según el propósito declarado del programa.",
evidencia: "11 de 35 proyectos · 2 de 14 recursos" },

{ id: "R2", nivel: "alto", titulo: "Capacidad de UX/UI frente a la demanda declarada",
texto: "El modelo declara a UX/UI transversal a todas las células, y la asignación le da 2 recursos para los " +
"35 proyectos. Los documentos no indican dedicación por proyecto, por lo que no es posible confirmar " +
"si la cobertura es total o selectiva.",
impacto: "Diseño de experiencia como cuello de botella en los programas con metas de NPS, FCR y tiempo de atención.",
evidencia: "2 recursos · 35 proyectos · 7 células" },

{ id: "R3", nivel: "alto", titulo: "Compromisos de Consejo sin planeación",
texto: "6 proyectos están comprometidos ante Consejo 2026 y figuran como «No planeado». Tres pertenecen al " +
"programa de cumplimiento obligatorio.",
impacto: "Riesgo de incumplimiento regulatorio y de las metas de Enfoque al Cliente.",
evidencia: "6 de 35 proyectos · 3 obligatorios" },

{ id: "R4", nivel: "medio", titulo: "Beneficios no verificables en la mitad del portafolio",
texto: "16 proyectos pertenecen a programas cuyos beneficios están redactados en términos cualitativos, sin " +
"valor objetivo ni línea base.",
impacto: "No es posible demostrar la contribución de esos proyectos al cierre del ciclo.",
evidencia: "3 de 6 programas sin meta numérica" },

{ id: "R5", nivel: "medio", titulo: "MMP sin respaldo ni perfil de diseño integral",
texto: "Un solo recurso, sin perfil Sr y, por tanto, sin la figura que el modelo define como responsable de " +
"liderar la definición integral de la solución.",
impacto: "Ausencia no cubierta y diseño de solución sin el perfil previsto por el modelo.",
evidencia: "1 recurso · único caso en las 7 células" },

{ id: "R6", nivel: "medio", titulo: "Dependencia externa no gobernada",
texto: "9 de los 44 proyectos de los seis programas los atienden áreas que los documentos no nombran, con " +
"cobertura de 4 de 9 en Actualización Tecnológica y 1 de 3 en Estrategia de Negocio.",
impacto: "Los beneficios comprometidos de esos programas no dependen solo de Soluciones de Negocio.",
evidencia: "9 de 44 proyectos fuera del área" },

{ id: "R7", nivel: "medio", titulo: "Carga de coordinación en Enfoque al Cliente",
texto: "14 proyectos repartidos en 5 células, con 6 de las 12 métricas numéricas del portafolio y 3 proyectos " +
"sin planear. Es el frente que más coordinación interna exige.",
impacto: "Riesgo de avance desigual entre células sobre un mismo conjunto de métricas.",
evidencia: "14 proyectos · 5 células · 6 métricas" }
],

/* ---------- Recomendaciones ---------- */
recomendaciones: [
{ p: 1, horizonte: "Inmediato", titulo: "Resolver el estatus de los seis proyectos sin planear",
texto: "Empezar por los tres de cumplimiento obligatorio. Para cada uno, definir si entra al ciclo, con qué " +
"capacidad y en qué secuencia, o si se reconoce formalmente como fuera de alcance ante Consejo.",
atiende: ["R3", "R1"] },

{ p: 2, horizonte: "Inmediato", titulo: "Establecer respaldo para la célula Regulatorios",
texto: "Definir cobertura para la célula que sostiene 11 proyectos y el 100% del programa de cumplimiento " +
"obligatorio, de modo que la continuidad no dependa de dos personas.",
atiende: ["R1"] },

{ p: 3, horizonte: "Corto plazo", titulo: "Dimensionar la demanda real de UX/UI",
texto: "Determinar en cuáles de los 35 proyectos participa UX/UI y con qué dedicación. Sin ese dato no es " +
"posible saber si la transversalidad declarada es sostenible con 2 recursos.",
atiende: ["R2"] },

{ p: 4, horizonte: "Corto plazo", titulo: "Definir el esquema de medición de los tres programas sin meta",
texto: "Aplicar el entregable que el modelo ya asigna al Business Designer para dotar de línea base y valor " +
"objetivo a los 16 proyectos que hoy solo tienen beneficios cualitativos.",
atiende: ["R4"] },

{ p: 5, horizonte: "Corto plazo", titulo: "Actualizar la asignación con la nomenclatura del modelo funcional",
texto: "Sustituir Sr y Jr por Business Designer y Product Owner en el instrumento de asignación, y señalar " +
"explícitamente las células donde falta el perfil de Business Designer.",
atiende: ["R5"] },

{ p: 6, horizonte: "Mediano plazo", titulo: "Documentar la ficha de rol de UX/UI y la matriz de capacidades por célula",
texto: "Cerrar las dos brechas de definición: el rol transversal sin ficha y la cobertura de las seis " +
"disciplinas en cada una de las siete células.",
atiende: ["R2", "R5"] },

{ p: 7, horizonte: "Mediano plazo", titulo: "Formalizar el gobierno de la interfaz con otras áreas",
texto: "Identificar a las áreas responsables de los 9 proyectos restantes y acordar el mecanismo de " +
"seguimiento conjunto, dado que los beneficios de esos programas son compartidos.",
atiende: ["R6", "R7"] }
]
};


/* =====================================================================
BLOQUE 2 · CÓMO SE DIBUJA — normalmente no se toca
===================================================================== */

window.VISTAS.soluciones = (function () {
"use strict";

var SUB = [
{ id: "programas", n: "Proyectos por programa" },
{ id: "organigrama", n: "Organigrama" },
{ id: "carga", n: "Carga por persona" },
{ id: "capacidades", n: "Capacidades" },
{ id: "riesgos", n: "Riesgos y recomendaciones" }
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

/* ================= 1 · PROYECTOS POR PROGRAMA ================= */
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

/* ================= 2 · ORGANIGRAMA ================= */
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

H.push(U.bloque("Organigrama",
"Estructura del área: una célula por dominio de negocio más UX/UI como capacidad transversal.", org));

/* Carga por célula, en número de proyectos */
var datos = (d.celulas || []).map(function (c) {
return { nombre: c.nombre, valor: deCelula(c.id).length,
detalle: recursos(c) + (recursos(c) === 1 ? " recurso" : " recursos"),
destacar: deCelula(c.id).length >= 10 };
}).sort(function (a, b) { return b.valor - a.valor; });

H.push(U.bloque("Carga de trabajo por célula", "Número de proyectos asignados a cada célula.",
U.figura(U.barras(datos),
"Regulatorios concentra 11 de los 35 proyectos del área con dos recursos, y es la única célula " +
"que atiende el programa de cumplimiento obligatorio.") +
U.tabla("Ver los datos de carga por célula",
["Célula", "Recursos", "Proyectos", "Programas"],
datos.map(function (x) {
var c = (d.celulas || []).filter(function (y) { return y.nombre === x.nombre; })[0];
var progs = {}; deCelula(c.id).forEach(function (p) { progs[p.programa] = 1; });
return [c.nombre, recursos(c), deCelula(c.id).length, Object.keys(progs).length]; }))));

return H.join("");
}

/* ================= 3 · CARGA POR PERSONA ================= */
function vistaCarga() {
var U = window.UI, d = D(), H = [];

H.push('<div class="aviso" style="margin:0 0 26px">Los documentos asignan los proyectos a la ' +
'<b>célula</b>, no a cada persona. Cada tarjeta muestra, por lo tanto, el portafolio de la célula ' +
'a la que pertenece. El reparto individual dentro de cada célula no está documentado.</div>');

/* Resumen por persona */
var filas = [];
(d.celulas || []).forEach(function (c) {
(c.personas || []).forEach(function (p) {
filas.push({ persona: p, celula: c, proyectos: deCelula(c.id) });
});
});

var tarjetas = filas.map(function (f) {
var np = f.proyectos.filter(function (x) { return x.estatus === "No planeado"; }).length;
return '<article class="pcard' + (f.persona.rol === "SR" ? " pcard--sr" : "") + '">' +
'<div class="pcard__cab"><div class="pcard__id">' +
'<p class="pcard__n"><span class="tag ' + (f.persona.rol === "SR" ? "tag--sr" : "tag--jr") + '">' +
U.esc(f.persona.rol) + "</span>" + U.esc(f.persona.nombre) + "</p>" +
'<p class="pcard__c">Célula ' + U.esc(f.celula.nombre) + " · " +
(f.persona.rol === "SR" ? "Business Designer" : "Product Owner") + "</p>" +
"</div>" +
'<div class="pcard__num"><b>' + f.proyectos.length + "</b><span>proyectos</span>" +
(np ? '<span class="pcard__np">' + np + " sin planear</span>" : "") +
"</div></div>" +
'<ol class="pcard__lista">' + f.proyectos.map(function (x) {
return '<li><span class="pcard__p">' + U.esc(x.nombre) +
'<span class="pcard__prog">' + U.esc(programa(x.programa).nombre) + "</span></span>" +
'<span class="pill ' + (x.estatus === "No planeado" ? "pill--alta" :
x.estatus === "Planeado" ? "pill--media" : "pill--info") + '">' +
U.esc(x.estatus) + "</span></li>"; }).join("") + "</ol></article>";
}).join("");

H.push(U.bloque("Portafolio por persona",
"Cada integrante con el portafolio de su célula, su rol en el modelo funcional y el estatus de cada proyecto.",
'<div class="personas">' + tarjetas + "</div>"));

/* UX/UI aparte */
if (d.uxui) {
var ux = '<div class="personas">' + (d.uxui.personas || []).map(function (p) {
return '<article class="pcard pcard--ux"><div class="pcard__cab"><div class="pcard__id">' +
'<p class="pcard__n"><span class="tag tag--ux">' + U.esc(p.rol) + "</span>" + U.esc(p.nombre) + "</p>" +
'<p class="pcard__c">UX/UI · transversal a las 7 células</p></div>' +
'<div class="pcard__num"><b>' + (d.proyectos || []).length + "</b><span>del área</span></div>" +
"</div>" +
'<p style="margin-top:13px;padding-top:13px;border-top:1px solid var(--linea-sut);' +
'font-size:.85rem;color:var(--suave)">El modelo declara a UX/UI transversal a todas las células. ' +
'Los documentos no indican en cuáles de los proyectos participa ni con qué dedicación.</p></article>';
}).join("") + "</div>";

H.push(U.bloque("UX/UI", "Capacidad transversal: la asignación no detalla su participación por proyecto.", ux));
}

return H.join("");
}

/* ================= 4 · CAPACIDADES ================= */
function vistaCapacidades() {
var U = window.UI, C = D().capacidades || {}, H = [];

H.push('<div class="cita">' + U.esc(C.proposito) + "</div>");

H.push(U.bloque("El propósito, en cinco movimientos", null,
'<ol class="verbos">' + (C.verbos || []).map(function (v) {
return '<li><span class="verbos__n">' + U.esc(v.n) + "</span>" +
'<span class="verbos__v">' + U.esc(v.v) + "</span>" +
'<span class="verbos__d">' + U.esc(v.d) + "</span></li>"; }).join("") + "</ol>"));

H.push(U.bloque("Seis disciplinas declaradas", null,
'<div class="disc">' + (C.disciplinas || []).map(function (x) {
return '<div class="disc__c"><p class="disc__t">' + U.esc(x.t) + "</p><p>" + U.esc(x.d) + "</p></div>";
}).join("") + "</div>"));

H.push(U.bloque("La cadena de entrega", null,
'<ol class="cadena">' + (C.cadena || []).map(function (x) {
return "<li><b>" + U.esc(x.t) + "</b><span>" + U.esc(x.d) + "</span></li>"; }).join("") + "</ol>"));

H.push(U.bloque("Modelo funcional · evolución de roles", null,
'<div class="roles">' + (C.roles || []).map(function (r) {
return '<article class="rol' + (r.pendiente ? " rol--pend" : "") + '">' +
'<div class="rol__cab"><h5>' + U.esc(r.rol) + "</h5><span>" + U.esc(r.antes) + "</span></div>" +
"<dl><dt>Propósito del rol</dt><dd>" + U.esc(r.proposito) + "</dd>" +
"<dt>Responsabilidad central</dt><dd>" + U.esc(r.responsabilidad) + "</dd>" +
"<dt>Decisiones que toma</dt><dd>" + U.esc(r.decisiones) + "</dd>" +
"<dt>Entregables</dt><dd>" + U.esc(r.entregables) + "</dd></dl></article>"; }).join("") + "</div>" +
'<p class="aviso">' + U.esc(C.nota) + "</p>"));

return H.join("");
}

/* ================= 5 · RIESGOS Y RECOMENDACIONES ================= */
function vistaRiesgos() {
var U = window.UI, d = D(), H = [];
var R = d.resumen || {}, altos = (d.riesgos || []).filter(function (r) { return r.nivel === "alto"; }).length;
var NIV = { alto: "Alto", medio: "Medio", bajo: "Bajo" };

H.push(U.bloque("Resumen ejecutivo", null,
'<p style="font-size:1.02rem;line-height:1.7;max-width:76ch;margin-bottom:14px">' +
U.esc(R.entrada || "") + "</p>" +
'<ul class="lista">' + (R.puntos || []).map(function (p) {
return "<li>" + U.esc(p) + "</li>"; }).join("") + "</ul>"));

H.push(U.bloque("Riesgos observados", altos + " de nivel alto",
'<div class="riesgos">' + (d.riesgos || []).map(function (r) {
return '<article class="rg rg--' + U.esc(r.nivel) + '">' +
'<div class="rg__cab"><span class="rg__id">' + U.esc(r.id) + "</span>" +
'<span class="rg__niv">' + U.esc(NIV[r.nivel] || r.nivel) + "</span></div>" +
"<h4>" + U.esc(r.titulo) + "</h4><p>" + U.esc(r.texto) + "</p>" +
'<p class="rg__imp"><b>Impacto:</b> ' + U.esc(r.impacto) + "</p>" +
'<p class="rg__ev">' + U.esc(r.evidencia) + "</p></article>"; }).join("") + "</div>"));

H.push(U.bloque("Recomendaciones priorizadas", null,
'<ol class="recs">' + (d.recomendaciones || []).map(function (r) {
return '<li class="rec"><span class="rec__p">' + r.p + "</span>" +
'<div class="rec__c"><div class="rec__cab"><h4>' + U.esc(r.titulo) + "</h4>" +
'<span class="rec__h">' + U.esc(r.horizonte) + "</span></div>" +
"<p>" + U.esc(r.texto) + "</p>" +
'<p class="rec__a">Atiende ' + (r.atiende || []).map(U.esc).join(" y ") + "</p></div></li>";
}).join("") + "</ol>"));

H.push('<div class="fuente"><p class="fuente__t">Base documental</p><ul>' +
(d.meta.fuentes || []).map(function (f) { return "<li>" + U.esc(f) + "</li>"; }).join("") +
"</ul></div>");

return H.join("");
}

var MAPA = { programas: vistaProgramas, organigrama: vistaOrganigrama,
carga: vistaCarga, capacidades: vistaCapacidades, riesgos: vistaRiesgos };

return {
titulo: "Soluciones de Negocio",
ruta: "Dirección de Estrategia · Estructura",
h1: "Soluciones de Negocio",
bajada: (window.SOLUCIONES && window.SOLUCIONES.meta.bajada) || "",
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
