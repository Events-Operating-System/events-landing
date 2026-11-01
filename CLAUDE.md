# CLAUDE.md — events-landing

Landing pública de EventOS (HTML/CSS/JS sin frameworks), con las páginas legales. Deploy: GitHub Pages, al hacer push
a `main`.

> **Reglas comunes de EventOS:** `eventos-reglas/REGLAS.md` (se cargan solas desde `~/Developer/CLAUDE.md`). Acá solo
> lo propio de este repo y su estado actual. Bitácora (qué se hizo en cada sesión): `docs/SESSION_LOG.md` (hasta el
> 2026-10-31 este archivo se llamaba `claude-landing.md`).

## Reglas propias del repo
- Sin frameworks ni build para la página principal: `index.html` + `assets/css/landing.css` + `assets/js/main.js`.
  `assets/css/style.css` lo usan las páginas legales.
- Textos en ES/EN/PT: `data-i18n` (texto) y `data-i18n-html` (solo títulos con `<br>`) contra el objeto
  `translations` de `main.js`. Toda clave nueva, en los tres idiomas.
- **Legales:** se editan las fuentes `legal/src/{es,en,pt}/*.md` y se regenera con `node legal/build.mjs`. Versión
  nueva: subir `VERSION`/`VERSION_DIR` en `build.mjs`, regenerar y cargarla en `legal_documents` con una migración
  (repo de Administración). `legal/v1/` no se reescribe. El español es el original.
- Sin Google Analytics (la Política de Cookies dice que no hay analítica).
- Planes y precios = tabla `plans` de EventOS; si cambian allá, actualizar acá a mano. Sin "gratis".
- Copyright de JBD Investment Corp Inc.

## Estado actual (2026-10-31)
- Rediseño del 2026-10-02 publicado. Enlaces: "Cliente" → Portal `/login`; "Mi organización" → Identity; "Elegir" →
  alta de Administración con `?plan=N`.
- Videos en el objeto `VIDEOS` de `main.js` (vacío = "Video próximamente"); fotos reducidas de eventos reales en
  `assets/images/proof/`.
