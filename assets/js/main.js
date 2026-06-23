/* ============================================================
   EventOS Landing — main.js
   ============================================================ */

const translations = {
  es: {
    nav_modulos: "Módulos",
    nav_planes: "Planes",
    nav_contacto: "Contacto",
    nav_login: "Iniciar sesión",
    nav_cta: "Empezar gratis",

    hero_badge: "Sistema operativo para productoras de eventos",
    hero_title: "Produce eventos de clase mundial, sin caos.",
    hero_sub: "Agentes de AI + 20 años de experiencia en producción de eventos. Un sistema operativo diseñado para tu productora.",
    hero_btn1: "Empezar gratis →",
    hero_btn2: "▶ Ver demo",
    hero_trust: "Ya usado en producciones reales con clientes reales",
    hc_label: "Presupuesto activo",
    hc_status: "● En producción",
    hc_meta: "Matrimonio · 200 pax",
    hc2_name: "EventOS AI",
    hc2_desc: "Presupuesto generado en 8 segundos",

    stat1_num: "+20",
    stat1_label: "Años de experiencia",
    stat2_num: "500+",
    stat2_label: "Eventos producidos",
    stat3_num: "5",
    stat3_label: "Módulos integrados",
    stat4_num: "100%",
    stat4_label: "AI nativa en todo",

    problem_eyebrow: "01 — EL PROBLEMA",
    problem_h2: "Los eventos mueven millones de dólares al año y se gestionan por WhatsApp, sheets, PDFs y hojas sueltas — sin aprovechar la data.",
    prob1_title: "Sin sistema central",
    prob1_desc: "Todo fragmentado en herramientas distintas. Sin visión unificada de tus operaciones.",
    prob2_title: "Presupuestos manuales",
    prob2_desc: "Horas calculando en Excel, errores costosos, versiones desactualizadas compartidas por correo.",
    prob3_title: "Cero visibilidad",
    prob3_desc: "No sabes el estado real de tu evento en tiempo real. Las decisiones se toman a ciegas.",

    solution_eyebrow: "02 — LA SOLUCIÓN",
    solution_h2: "EventOS centraliza todo. Ventas, presupuestos, layouts, inventario y operaciones — en un solo sistema nativo de AI.",
    mod1_name: "Ventas",
    mod1_desc: "Pipeline de ventas con precios calculados por AI. Cotizaciones en minutos, no en horas.",
    mod2_name: "Eventos",
    mod2_desc: "Hoja de trabajo con 36 partidas por evento. Control total de cada detalle operativo.",
    mod3_name: "Inventarios",
    mod3_desc: "Control de activos propios, arrendados y consumibles. Sin pérdidas, sin sorpresas.",
    mod4_name: "Layout Engine",
    mod4_desc: "Editor 2D de planos de venue con export PDF. Diseña antes de producir.",
    mod5_name: "Agentes AI",
    mod5_desc: "Captura leads, califica prospectos y genera cotizaciones automáticamente. 24/7.",
    mod6_name: "Multi-tenant",
    mod6_desc: "Cada productora con su espacio aislado y seguro. Escala sin límites.",

    galeria_eyebrow: "Eventos reales",
    galeria_h2: "Más de 20 años produciendo eventos de clase mundial",
    galeria_caption: "Cada evento producido con el mismo sistema que hoy está disponible para tu productora.",

    layout_eyebrow: "Layout Engine",
    layout_h2: "Diseña el venue antes de producirlo",
    layout_desc: "Editor 2D profesional. Planos con medidas reales, distribución de mobiliario y zonas. Export PDF listo para el equipo.",
    layout_f1: "Canvas interactivo con 40+ assets",
    layout_f2: "Medidas reales escala 1/100",
    layout_f3: "Export PDF con cajetín técnico",
    layout_f4: "Compartible con todo el equipo",
    layout_btn: "Ver Layout Engine →",
    layout_badge: "EventOS Layout Engine · Esc. 1/100",

    cred_eyebrow: "Por qué EventOS",
    cred_h2: "Construido desde adentro de la industria",
    cred_text: "No somos una empresa de software que descubrió los eventos. Somos un equipo con más de 20 años produciendo eventos de clase mundial en Lima y el Perú. Sabemos el caos porque lo vivimos. EventOS es el sistema que siempre necesitamos y que no existía.",
    cred_s1_label: "Años",
    cred_s2_label: "Eventos",
    cred_s3_label: "Pax por evento",

    agente_name: "EventOS AI",
    agente_msg: "Hola, soy el asistente de EventOS. ¿Qué tipo de evento produces? Te muestro el plan ideal para ti.",
    pill1: "Eventos sociales",
    pill2: "Corporativos",
    pill3: "Local de eventos",
    pill4: "Ver todos los planes",

    planes_eyebrow: "Planes",
    planes_h2: "Simple. Sin sorpresas.",
    plan1_name: "Starter",
    plan1_period: "/mes",
    plan1_f1: "Ventas + Presupuestos",
    plan1_f2: "Hasta 3 usuarios",
    plan1_f3: "50 eventos/año",
    plan1_btn: "Empezar gratis",
    plan2_name: "Pro",
    plan2_badge: "Más popular",
    plan2_period: "/mes",
    plan2_f1: "Todos los módulos",
    plan2_f2: "Hasta 10 usuarios",
    plan2_f3: "Agentes AI incluidos",
    plan2_f4: "Eventos ilimitados",
    plan2_btn: "Empezar gratis",
    plan3_name: "Enterprise",
    plan3_f1: "Multi-sede",
    plan3_f2: "Usuarios ilimitados",
    plan3_f3: "SLA dedicado",
    plan3_btn: "Contactar",

    footer_modulos: "Módulos",
    footer_planes: "Planes",
    footer_contacto: "Contacto",
    footer_terms: "Términos",
    footer_privacy: "Privacidad",
    footer_copy: "© 2026 Reality Near. Todos los derechos reservados.",
  },

  en: {
    nav_modulos: "Modules",
    nav_planes: "Plans",
    nav_contacto: "Contact",
    nav_login: "Sign in",
    nav_cta: "Get started free",

    hero_badge: "Operating system for event production companies",
    hero_title: "Produce world-class events, without the chaos.",
    hero_sub: "AI agents + 20 years of event production expertise. One operating system built for your company.",
    hero_btn1: "Get started free →",
    hero_btn2: "▶ Watch demo",
    hero_trust: "Already used in real productions with real clients",
    hc_label: "Active budget",
    hc_status: "● In production",
    hc_meta: "Wedding · 200 pax",
    hc2_name: "EventOS AI",
    hc2_desc: "Budget generated in 8 seconds",

    stat1_num: "+20",
    stat1_label: "Years of experience",
    stat2_num: "500+",
    stat2_label: "Events produced",
    stat3_num: "5",
    stat3_label: "Integrated modules",
    stat4_num: "100%",
    stat4_label: "AI-native throughout",

    problem_eyebrow: "01 — THE PROBLEM",
    problem_h2: "Events move billions of dollars a year and are managed through WhatsApp, spreadsheets, PDFs and loose papers — without leveraging the data.",
    prob1_title: "No central system",
    prob1_desc: "Everything fragmented across different tools. No unified view of your operations.",
    prob2_title: "Manual budgets",
    prob2_desc: "Hours in Excel, costly mistakes, outdated versions shared via email.",
    prob3_title: "Zero visibility",
    prob3_desc: "You don't know the real-time status of your event. Decisions made in the dark.",

    solution_eyebrow: "02 — THE SOLUTION",
    solution_h2: "EventOS centralizes everything. Sales, budgets, layouts, inventory and operations — in one AI-native system.",
    mod1_name: "Sales",
    mod1_desc: "Sales pipeline with AI-calculated pricing. Quotes in minutes, not hours.",
    mod2_name: "Events",
    mod2_desc: "Work sheet with 36 line items per event. Total control of every operational detail.",
    mod3_name: "Inventory",
    mod3_desc: "Track owned, rented and consumable assets. No losses, no surprises.",
    mod4_name: "Layout Engine",
    mod4_desc: "2D venue floor plan editor with PDF export. Design before you produce.",
    mod5_name: "AI Agents",
    mod5_desc: "Capture leads, qualify prospects and generate quotes automatically. 24/7.",
    mod6_name: "Multi-tenant",
    mod6_desc: "Each company with their own isolated, secure space. Scale without limits.",

    galeria_eyebrow: "Real events",
    galeria_h2: "20+ years producing world-class events",
    galeria_caption: "Every event produced with the same system that is now available for your company.",

    layout_eyebrow: "Layout Engine",
    layout_h2: "Design the venue before you produce it",
    layout_desc: "Professional 2D editor. Floor plans with real measurements, furniture and zone distribution. PDF export ready for your team.",
    layout_f1: "Interactive canvas with 40+ assets",
    layout_f2: "Real measurements at 1/100 scale",
    layout_f3: "PDF export with technical title block",
    layout_f4: "Shareable with the entire team",
    layout_btn: "See Layout Engine →",
    layout_badge: "EventOS Layout Engine · Scale 1/100",

    cred_eyebrow: "Why EventOS",
    cred_h2: "Built from inside the industry",
    cred_text: "We are not a software company that discovered events. We are a team with 20+ years producing world-class events in Lima and Peru. We know the chaos because we lived it. EventOS is the system we always needed and that didn't exist.",
    cred_s1_label: "Years",
    cred_s2_label: "Events",
    cred_s3_label: "Pax per event",

    agente_name: "EventOS AI",
    agente_msg: "Hi, I'm the EventOS assistant. What type of event do you produce? I'll show you the ideal plan for you.",
    pill1: "Social events",
    pill2: "Corporate",
    pill3: "Event venue",
    pill4: "See all plans",

    planes_eyebrow: "Plans",
    planes_h2: "Simple. No surprises.",
    plan1_name: "Starter",
    plan1_period: "/month",
    plan1_f1: "Sales + Budgets",
    plan1_f2: "Up to 3 users",
    plan1_f3: "50 events/year",
    plan1_btn: "Get started free",
    plan2_name: "Pro",
    plan2_badge: "Most popular",
    plan2_period: "/month",
    plan2_f1: "All modules",
    plan2_f2: "Up to 10 users",
    plan2_f3: "AI Agents included",
    plan2_f4: "Unlimited events",
    plan2_btn: "Get started free",
    plan3_name: "Enterprise",
    plan3_f1: "Multi-location",
    plan3_f2: "Unlimited users",
    plan3_f3: "Dedicated SLA",
    plan3_btn: "Contact us",

    footer_modulos: "Modules",
    footer_planes: "Plans",
    footer_contacto: "Contact",
    footer_terms: "Terms",
    footer_privacy: "Privacy",
    footer_copy: "© 2026 Reality Near. All rights reserved.",
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('.lang-toggle button, .nav-mobile-lang button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

/* ===== NAV SCROLL ===== */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ===== MOBILE NAV ===== */
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== HERO SLIDER ===== */
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let sliderTimer;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startSlider() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    goToSlide(i);
    startSlider();
  });
});

startSlider();

/* ===== MODULE CARDS — FADE IN ===== */
const moduleCards = document.querySelectorAll('.module-card');
const moduleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      const i = Array.from(moduleCards).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      moduleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
moduleCards.forEach(card => moduleObserver.observe(card));

/* ===== ANIMATED COUNTERS ===== */
function animateCounter(el, target, prefix, suffix) {
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const val = Math.round(target * eased);
    el.textContent = (prefix || '') + val + (suffix || '');
    if (elapsed < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(
        el,
        parseFloat(el.dataset.counter),
        el.dataset.prefix || '',
        el.dataset.suffix || ''
      );
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObserver.observe(el));

/* ===== AI AGENT PILLS → SCROLL TO PLANES ===== */
document.querySelectorAll('.agente-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelector('#planes').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===== LANGUAGE TOGGLE ===== */
document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ===== INIT ===== */
setLang('es');
