# EventOS — Landing Page

Landing page de alto impacto para EventOS, el sistema operativo AI para productoras de eventos.

**Deploy:** [events-operating-system.github.io/events-landing](https://events-operating-system.github.io/events-landing/)

## Stack

- HTML5 + CSS3 + JavaScript vanilla
- Sin frameworks ni dependencias externas
- Google Fonts — Inter (400, 500, 700)
- Sin analítica (la Política de Cookies v1.0 dice que EventOS no usa analítica)

## Estructura

```
events-landing/
├── index.html                 # landing (diseño de eventos_landing_demo.html)
├── eventos_landing_demo.html  # referencia visual
├── legal/                     # Términos, Privacidad, Cookies, IA (ES/EN/PT, v1)
├── assets/
│   ├── css/
│   │   ├── landing.css        # landing
│   │   └── style.css          # páginas legales
│   ├── js/
│   │   └── main.js            # i18n ES/EN/PT, videos, enlaces
│   └── images/
│       ├── hero-1.jpg
│       ├── hero-2.jpg
│       ├── hero-3.jpg
│       ├── evento-1.jpg … evento-5.jpg
│       ├── layout-plano.png
│       └── layout-engine.png
```

## Secciones

1. Nav fijo con toggle ES/EN
2. Hero — slider 3 fotos, fade 1.2s, cards flotantes
3. Stats bar
4. El Problema
5. La Solución — 6 módulos
6. Galería — grid asimétrico
7. Layout Engine
8. Credibilidad
9. Agente AI
10. Planes — Starter / Pro / Enterprise
11. Footer

## Funcionalidades JS

- Toggle de idioma ES / EN con objeto de traducciones
- Hero slider automático cada 5 segundos
- Nav con box-shadow al hacer scroll
- Módulos con fade-in por IntersectionObserver
- Contadores animados al entrar en viewport
- Nav hamburger en mobile

## Autores

**JBD** — Reality Near  
**Co-autor:** Claude Code (Anthropic)
