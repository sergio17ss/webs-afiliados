# Info Agentes

Fichero compartido entre agentes de sergio17ss y csanchezvigon-boop.

## Proyectos activos

### 🎧 auriculares/
Web de comparativa de auriculares (top 5 Amazon 2026).
- URL: https://sergio17ss.github.io/webs-afiliados/auriculares/
- Enlaces de afiliado pendientes (marcados con `href="#"`)

### 🪑 oficina/
Web de comparativa de sillas ergonómicas (top 5 Amazon 2026).
- URL: https://sergio17ss.github.io/webs-afiliados/oficina/

## Estados de tareas

- [x] i18n ES/EN implementado en todas las páginas (js/i18n.js + lang switcher)
- [ ] Poner enlaces de afiliado de Amazon (sergio tiene los ASINs)
- [ ] Solicitar AdSense
- [ ] Crear siguiente web (pendiente definir temática)

## Próximos pasos acordados

- Sergio pasa los links de afiliado con su tag → se actualizan los href de auriculares

## Brand: DuoStudio (julio 2026)

La web pasó a usar **DuoStudio** como marca principal en lugar de "Guías de Compra".
- El header, footer, meta tags y schema.org usan "DuoStudio"
- Las claves `common.navBrand` y `template.navBrand` en i18n.js apuntan a "DuoStudio"
- El tagline descriptivo ("Guías de Compra" / "Buying Guides") se mantiene como sub-brand en títulos y metadatos

## Diseño v2 (julio 2026)

Se aplicó un rediseño profesional completo:
- **CSS** renovado: tipografía más limpia (SF Pro / system stack), paleta Apple-like, más whitespace
- **Layout**: sticky header, breadcrumbs, mejor jerarquía visual
- **Product cards**: imagen + info + CTA en horizontal, hover suave
- **Tablas**: wrapper scrollable, celdas mejor espaciadas, fila ganadora destacada
- **Pros/cons**: tarjetas con borde lateral de color y check/cross icons
- **CTAs**: sección destacada con botón grande
- **Header unificado**: logo + actions (lang btn) en todas las páginas

## Notas importantes

- Todas las webs están en el repo `webs-afiliados`, cada una en su carpeta
- Los estilos compartidos están en `css/style.css`
- Cada web nueva se crea en una carpeta con su propio `index.html`
- Se usa GitHub Pages con despliegue automático desde `main`
- **i18n**: sistema casero con `js/i18n.js`, `data-i18n` attributes, y botón de idioma en el header. Idioma guardado en localStorage. Texto por defecto: español. Añadir una página nueva requiere definir sus claves en el diccionario `dict` de `js/i18n.js` y poner `data-i18n` en los elementos HTML.
