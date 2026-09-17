# Tablero de estrategia

Sitio estático (HTML + CSS + JavaScript, sin frameworks ni build) para publicar en GitHub Pages.

**URL de publicación:** https://avaguilar-do.github.io/Estrategia/

## Estructura

```
Estrategia/
├── index.html Página principal del tablero
├── 404.html Página de error para GitHub Pages
├── .nojekyll Evita que Jekyll procese el sitio
├── README.md Este archivo
└── assets/
├── styles.css Estilos (tema oscuro y claro)
├── data.js Contenido del tablero ← lo único que editas a diario
├── app.js Render, filtros, búsqueda y pestañas
└── favicon.svg Ícono del sitio
```

## Paleta corporativa

| Color | Hex | Pantone | Uso en el tablero |
|---|---|---|---|
| Azul Profundo | `#1B355D` | 534 C | Fondo y superficie de tarjetas |
| Azul Horizonte | `#7DACE3` | 2142 C | Acento principal: datos, enlaces, avances, pestañas |
| Naranja Legado | `#E75301` | 166 C | Atención: filtro activo, prioridad alta, escalación |
| Rojo Cercanía | `#983920` | 174 C | Severidad crítica y decisiones revertidas |

Los colores viven en variables CSS al inicio de `assets/styles.css`; cambiarlos ahí cambia todo el sitio.

## Secciones

- **Comunicados** — lo que se informa a toda la organización.
- **Temas importantes** — asuntos vivos con seguimiento semanal.
- **Escalaciones** — bloqueos que esperan respuesta de un nivel superior.
- **Decisiones** — bitácora de acuerdos con contexto, decisión e impacto.
- **Áreas** — Hub de innovación, Estrategia, Soluciones de negocio, Gestión de la estrategia y PMO.

## Publicar en GitHub Pages

1. Sube los archivos a la rama `main` (raíz del repositorio).
2. En GitHub: **Settings → Pages**.
3. En *Build and deployment* elige **Source: Deploy from a branch**.
4. En *Branch* selecciona **main** y carpeta **/ (root)**. Guarda con **Save**.
5. Espera 1–2 minutos. Aparecerá el aviso *Your site is live at…*.
6. Marca la casilla **Enforce HTTPS** en la misma pantalla.

## Actualizar el contenido

Edita `assets/data.js` y haz commit en `main`. GitHub Pages republica solo.

- `area` debe coincidir con un `id` de la lista `areas`: `hub-innovacion`, `estrategia`, `soluciones-negocio`, `gestion-estrategia`, `pmo`.
- Fechas en formato `AAAA-MM-DD`.
- Prioridad y severidad: `critica`, `alta`, `media` o `baja`.
- `avance` de cada iniciativa: número de 0 a 100.

## Probar en local

Abre `index.html` con doble clic, o levanta un servidor:

```bash
python3 -m http.server 8080
# luego abre http://localhost:8080
