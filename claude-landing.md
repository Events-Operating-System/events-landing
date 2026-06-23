# Claude Landing — Notas de construcción

Documentación del proceso de construcción de la landing page de EventOS con Claude Code.

## Sesión de trabajo

**Proyecto:** EventOS Landing Page  
**Repo:** events-operating-system/events-landing  
**Deploy:** GitHub Pages  
**Fecha:** Junio 2026  
**Autor:** JBD — Reality Near  
**Co-autor IA:** Claude Code (Anthropic, claude-sonnet-4-6)

## Lo que se construyó

Rebuild completo desde cero de la landing page. Se reemplazó el `index.html` anterior y se creó la estructura `assets/css/`, `assets/js/`, `assets/images/`.

### Decisiones de diseño

- **Stack puro** — HTML/CSS/JS vanilla, sin frameworks. Requisito explícito para simplicidad de deploy en GitHub Pages.
- **Mobile-first** — Nav hamburger, grids de 1 columna, hero sin cards en mobile.
- **Colores** — Paleta azul corporativa: `#1D4ED8` (azul), `#1E3A8A` (oscuro), `#0A0F1E` (negro).
- **Tipografía** — Inter vía Google Fonts, cargada en CSS con `@import`.
- **Imágenes** — Referenciadas en `assets/images/`. Fallback `background: #0A0F1E` si no existen.

### Sistema de traducciones

Objeto `translations` en `main.js` con claves ES/EN. Todos los elementos del DOM tienen `data-i18n="key"`. El toggle actualiza `textContent` de cada elemento y el atributo `lang` del `<html>`.

### Animaciones implementadas

| Efecto | Mecanismo |
|--------|-----------|
| Hero slider | `setInterval` 5s + `opacity` transition 1.2s |
| Nav shadow | `scroll` event + clase `.scrolled` |
| Módulos fade-in | `IntersectionObserver` con delay escalonado |
| Contadores | `requestAnimationFrame` + easing cúbico |
| Hover cards | `translateY(-4px)` + `box-shadow` |
| Galería zoom | `scale(1.04)` en `img` con `transition 0.4s` |

### Galería — estructura final

Grid de 3 columnas × 2 filas:
- `.gallery-item.gallery-large` — columna 1, span 2 filas (imagen principal)
- 4 × `.gallery-item` — columnas 2 y 3, filas 1 y 2

### Commits de la sesión

```
feat: rebuild landing from scratch
fix: update copy - problema, solucion, eyebrow sizes
fix: remove personal photo and client names from gallery and layout section
feat: add event photos and layout images to assets
docs: add README and claude-landing notes
```

## Notas para próxima sesión

- Hero slider usa `assets/images/hero-1/2/3.jpg` — las fotos están subidas.
- Galería usa `evento-1.jpg` a `evento-5.jpg` — subidas.
- Layout Engine usa `layout-plano.png` — subida.
- Para agregar nuevas secciones, seguir el patrón `data-i18n` en HTML y agregar las claves en ambos idiomas en `main.js`.
- El eyebrow class `.eyebrow` aplica a toda la página — cambios de tamaño son globales.
