# Dirección de estrategia

Sitio estático para GitHub Pages. Sin frameworks, sin build, sin dependencias.
Navegación por hash: cada sección tiene su propia dirección, compartible.

**URL:** https://avaguilar-do.github.io/Estrategia/

## Los 6 archivos

```
index.html el cascarón ← no se edita
estilos.css todos los estilos ← solo para cambiar diseño
tablero.js el motor ← no se edita
secciones/
resumen.js ← Comunicados, temas, escalaciones, objetivo
estructura.js ← Las áreas de la Dirección
soluciones.js ← Soluciones de Negocio completo
```

La regla: **una sección, un archivo.** Para actualizar comunicados abres
`secciones/resumen.js` y nada más. Para Soluciones de Negocio, `secciones/soluciones.js`.
Los otros tres archivos se quedan quietos.

Dentro de cada archivo de sección hay dos bloques claramente marcados:

- **BLOQUE 1 · CONTENIDO** — aquí editas.
- **BLOQUE 2 · CÓMO SE DIBUJA** — normalmente no se toca.

## Direcciones

| Página | Dirección |
|---|---|
| Resumen (objetivo, comunicados, temas, escalaciones) | `#resumen` |
| Estructura (las 6 áreas) | `#estructura` |
| Soluciones de Negocio | `#soluciones` |
| → Proyectos por programa | `#soluciones/programas` |
| → Organigrama | `#soluciones/organigrama` |
| → Carga por persona | `#soluciones/carga` |
| → Capacidades | `#soluciones/capacidades` |
| → Riesgos y recomendaciones | `#soluciones/riesgos` |

## Agregar un comunicado

Abre `secciones/resumen.js`, busca `comunicados: [` y escribe dentro:

```js
comunicados: [
{ titulo: "Título del comunicado",
fecha: "2026-10-20",
area: "Estrategia",
autor: "Vicepresidencia de Estrategia",
etiqueta: "Corporativo",
resumen: "Texto del comunicado." }
],
```

Haz commit y listo. Los temas y las escalaciones funcionan igual; los campos de
cada uno están comentados en el archivo.

## Agregar un área nueva

Abre `secciones/estructura.js` y copia uno de los objetos existentes dentro de
`areas: [ ]`. El `id` debe ser único y sin espacios.

## Publicar

1. Sube los archivos a la rama `main`, respetando la carpeta `secciones/`.
2. Settings → Pages → Source: *Deploy from a branch* → Branch `main`, carpeta `/ (root)`.
3. Marca **Enforce HTTPS**.

Falta subir `logo-consubanco.png` a la raíz. Mientras no esté, la cabecera
muestra la palabra «Consubanco» en texto.

## Paleta

| Color | Hex | Pantone |
|---|---|---|
| Azul Profundo | `#1B355D` | 534 C |
| Azul Horizonte | `#7DACE3` | 2142 C |
| Naranja Legado | `#E75301` | 166 C |
| Rojo Cercanía | `#983920` | 174 C |
| Negro | `#000000` | — |

Los valores viven en `:root`, al principio de `estilos.css`.

## Probar en local

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```
