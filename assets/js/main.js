/* ============================================================
   EventOS Landing — main.js
   Diseño: eventos_landing_demo.html (2026-10-02). Sin frameworks.
   ============================================================ */

/* ===== VIDEOS =====
   Servidos desde la misma landing (assets/videos/), sin servicios externos.
   Cada video es un nombre base; los archivos siguen esta convención:
     <nombre>-1080.mp4 / <nombre>-720.mp4   (720p en pantallas ≤ 767 px)
     <nombre>-poster.webp / <nombre>-poster.jpg (respaldo)
     <nombre>-es.vtt / -en.vtt / -pt.vtt    (subtítulos; audio en español)
   Vacío = placeholder "Video próximamente".
     heroDemo     "▶ Ver demo" del hero (modal): demo general
     productDemo  "▶ Ver demo" de La Solución (modal): recorrido del dashboard
     founder      video del founder (inline)
     layout       video del Layout Engine (inline; "Ver Layout Engine →" lo reproduce)
   El título visible de cada uno es la clave 'video.title.<clave>'. */
const VIDEO_DIR = 'assets/videos/';
const VIDEOS = {
  heroDemo: 'demo',
  productDemo: 'dashboard',
  founder: 'founder',
  layout: 'layout',
};
const SUBTITLE_LANGS = { es: 'Español', en: 'English', pt: 'Português' };
const SMALL_SCREEN = '(max-width: 767px)';

/* ===== TEXTOS (ES / EN / PT) ===== */
const translations = {
  es: {
    'header.sub': 'AI Operation System', 'header.cliente': 'Cliente', 'header.org': 'Mi organización',
    'hero.badge': 'AI NATIVE EVENTS OPERATION SYSTEM',
    'hero.title': 'La producción de tus eventos<br>ya no cabe en grupos de WhatsApp.',
    'hero.sub': 'Ventas, presupuestos, layouts, inventarios, documentos y contratos en un solo sistema. No repartidos entre WhatsApp, Drive y spreadsheets.',
    'hero.demo': '▶ Ver demo', 'hero.create': 'Crear mi organización',
    'hero.quoteLabel': 'Cotización en vivo', 'hero.quoteMeta': 'Matrimonio · 200 pax',
    'hero.quoteGen': '● generado por EventOS AI en menos de 10 segundos',
    'stats.years': 'años', 'stats.events': 'eventos', 'stats.modules': 'módulos',
    'problem.eyebrow': 'EL PROBLEMA',
    'problem.title': 'Los eventos mueven millones de dólares al año y el caos operativo cada vez es más grande.',
    'problem.c1h': 'Sin sistema central', 'problem.c1p': 'Todo fragmentado.',
    'problem.c2h': 'Tu evento hoy vive entre WhatsApp, Drive, Excel, hojas sueltas, etc.', 'problem.c2p': 'Múltiples herramientas no conectadas.',
    'problem.c3h': 'Cero funcionalidad operativa', 'problem.c3p': 'Sin fuente de la verdad.',
    'solution.eyebrow': 'LA SOLUCIÓN',
    'solution.title': 'EventOS AI Operation System centraliza toda la operación 360°: desde la venta y la creación de layouts, hasta los detalles del evento, el inventario, la operación de campo y el portal del cliente.',
    'modules.more': 'Toca para ver más →',
    'mod.ventas.h': 'Ventas', 'mod.ventas.p': 'Clientes, cotizaciones y oportunidades.',
    'mod.ventas.d': 'Pipeline de ventas con precios calculados por IA, cotizaciones en minutos.',
    'mod.eventos.h': 'Eventos', 'mod.eventos.p': 'Planifica y administra de principio a fin.',
    'mod.eventos.d': 'Hoja de trabajo completa con 36 partidas por evento.',
    'mod.layouts.h': 'Layouts', 'mod.layouts.p': 'Diseña y gestiona planos de tus eventos.',
    'mod.layouts.d': 'Editor 2D de venues, 40+ assets, export PDF escala 1/100.',
    'mod.inventario.h': 'Inventario', 'mod.inventario.p': 'Mobiliario y equipos bajo control.',
    'mod.inventario.d': 'Control de activos propios, arrendados y consumibles.',
    'mod.fieldops.h': 'FieldOps', 'mod.fieldops.p': 'Coordina al equipo en sitio.',
    'mod.fieldops.d': 'Coordinación móvil en sitio, caja chica, evidencia fotográfica.',
    'mod.financiero.h': 'Financiero', 'mod.financiero.p': 'Gestión financiera, facturación y reportes.',
    'mod.financiero.d': 'Facturación, cuentas por cobrar/pagar y reportes financieros.',
    'mod.administrativo.h': 'Administrativo', 'mod.administrativo.p': 'Configuración general de la cuenta.',
    'mod.administrativo.d': 'Configuración de la organización, roles y permisos.',
    'mod.agentes.h': 'Agentes AI', 'mod.agentes.p': 'Automatiza tareas operativas por rol.',
    'mod.agentes.d': 'Agentes de IA que automatizan tareas operativas por rol.',
    'mod.portal.h': 'Portal Cliente', 'mod.portal.p': 'Tus clientes ven el estado de su evento.',
    'mod.portal.d': 'Tus clientes ven en tiempo real el estado de su evento.',
    'founder.eyebrow': 'CONSTRUIDO DESDE ADENTRO DE LA INDUSTRIA', 'founder.role': 'Founder, EventOS',
    'founder.quote': '"+20 años produciendo eventos, desde reuniones pequeñas hasta producciones a gran escala. Por eso construí desde adentro el sistema que yo necesitaba, y que resuelve este dolor para toda la industria."',
    'founder.cred1': 'Full Stack, Ciberseguridad y Transformación digital · MIT',
    'founder.cred2': 'Subcampeón Mundial de Luta Livre Brasil 2022',
    'layout.title': 'Diseña el venue antes de producirlo.',
    'layout.f1': '✓ Canvas interactivo con 40+ assets', 'layout.f2': '✓ Medidas reales escala 1/100',
    'layout.f3': '✓ Export PDF con cajetín técnico', 'layout.f4': '✓ Compartible con todo el equipo',
    'layout.cta': 'Ver Layout Engine →',
    'value.eyebrow': 'VALOR REAL', 'value.title': 'Mejor experiencia para tus clientes, ahorro de tiempo, mayor rentabilidad y cero caos operativo.',
    'value.v1title': 'Presupuestos', 'value.v1before': 'antes 1 hora', 'value.v1after': 'con sistema: 10 segundos',
    'value.v2title': 'Layouts', 'value.v2before': 'antes 1 a 2 horas', 'value.v2after': 'con sistema: creado en minutos',
    'value.v3title': 'Inventarios y Separaciones', 'value.v3before': 'antes 1, 2 o 3 horas', 'value.v3after': 'con sistema: -5 min',
    'value.footnote': 'SIMPLE, FÁCIL Y RÁPIDO DE IMPLEMENTAR',
    'proof.eyebrow': 'EVENTOS REALES DE PRINCIPIO A FIN CON EVENTOS AI OPERATION SYSTEM',
    'plans.eyebrow': 'PLANES — SIMPLE, SIN SORPRESAS', 'plans.popular': 'MÁS POPULAR', 'plans.choose': 'Elegir',
    'plans.perMonth': '/mes', 'plans.agents': '✓ Módulo Agente AI',
    'plans.p1.annual': 'o US$ 700 al año', 'plans.p1.f1': '✓ Módulos esenciales', 'plans.p1.f2': '✓ 1 colaborador',
    'plans.p1.f3': '✓ 100 productos', 'plans.p1.f4': '✓ 20 clientes portal',
    'plans.p2.annual': 'o US$ 1.000 al año', 'plans.p2.f1': '✓ Módulos avanzados', 'plans.p2.f2': '✓ 6 colaboradores',
    'plans.p2.f3': '✓ 500 productos', 'plans.p2.f4': '✓ 50 clientes portal',
    'plans.p3.annual': 'o US$ 2.000 al año', 'plans.p3.f1': '✓ Todos los módulos', 'plans.p3.f2': '✓ 10 colaboradores',
    'plans.p3.f3': '✓ 1.000 productos', 'plans.p3.f4': '✓ 100 clientes portal',
    'footer.terms': 'Términos', 'footer.privacy': 'Privacidad', 'footer.cookies': 'Cookies', 'footer.ai': 'Uso de IA',
    'footer.copy': '© 2026 EventOS — operado por JBD Investment Corp Inc.',
    'video.soonTitle': 'Video próximamente', 'video.soonSub': 'Estamos terminando este video.',
    'video.close': 'Cerrar',
    'video.title.heroDemo': 'Todo en un solo sistema',
    'video.title.productDemo': 'Recorrido por el dashboard: 9 módulos',
    'video.title.founder': 'Javier presenta EventOS',
    'video.title.layout': 'Cómo funciona el Layout Engine',
  },
  en: {
    'header.sub': 'AI Operation System', 'header.cliente': 'Client', 'header.org': 'My organization',
    'hero.badge': 'AI NATIVE EVENTS OPERATION SYSTEM',
    'hero.title': 'Your event production<br>no longer fits in a WhatsApp group.',
    'hero.sub': 'Sales, budgets, layouts, inventory, documents and contracts in one system. Not spread across WhatsApp, Drive and spreadsheets.',
    'hero.demo': '▶ Watch demo', 'hero.create': 'Create my organization',
    'hero.quoteLabel': 'Live quote', 'hero.quoteMeta': 'Wedding · 200 pax',
    'hero.quoteGen': '● generated by EventOS AI in under 10 seconds',
    'stats.years': 'years', 'stats.events': 'events', 'stats.modules': 'modules',
    'problem.eyebrow': 'THE PROBLEM',
    'problem.title': 'Events move millions of dollars a year, and operational chaos keeps getting bigger.',
    'problem.c1h': 'No central system', 'problem.c1p': 'Everything fragmented.',
    'problem.c2h': 'Your event today lives between WhatsApp, Drive, Excel, loose sheets, etc.', 'problem.c2p': 'Multiple disconnected tools.',
    'problem.c3h': 'Zero operational functionality', 'problem.c3p': 'No single source of truth.',
    'solution.eyebrow': 'THE SOLUTION',
    'solution.title': 'EventOS AI Operation System centralizes the full 360° operation: from sales and layout design, to event details, inventory, field operations and the client portal.',
    'modules.more': 'Tap to see more →',
    'mod.ventas.h': 'Sales', 'mod.ventas.p': 'Clients, quotes and opportunities.',
    'mod.ventas.d': 'Sales pipeline with AI-calculated pricing, quotes in minutes.',
    'mod.eventos.h': 'Events', 'mod.eventos.p': 'Plan and manage from start to finish.',
    'mod.eventos.d': 'Complete worksheet with 36 line items per event.',
    'mod.layouts.h': 'Layouts', 'mod.layouts.p': 'Design and manage your event floor plans.',
    'mod.layouts.d': '2D venue editor, 40+ assets, PDF export at 1:100 scale.',
    'mod.inventario.h': 'Inventory', 'mod.inventario.p': 'Furniture and equipment under control.',
    'mod.inventario.d': 'Tracking of owned, rented and consumable assets.',
    'mod.fieldops.h': 'FieldOps', 'mod.fieldops.p': 'Coordinate your on-site team.',
    'mod.fieldops.d': 'Mobile on-site coordination, petty cash, photo evidence.',
    'mod.financiero.h': 'Finance', 'mod.financiero.p': 'Financial management, invoicing and reports.',
    'mod.financiero.d': 'Invoicing, accounts receivable/payable and financial reports.',
    'mod.administrativo.h': 'Administration', 'mod.administrativo.p': 'General account settings.',
    'mod.administrativo.d': 'Organization settings, roles and permissions.',
    'mod.agentes.h': 'AI Agents', 'mod.agentes.p': 'Automate operational tasks by role.',
    'mod.agentes.d': 'AI agents that automate operational tasks by role.',
    'mod.portal.h': 'Client Portal', 'mod.portal.p': 'Your clients see the status of their event.',
    'mod.portal.d': 'Your clients see the status of their event in real time.',
    'founder.eyebrow': 'BUILT FROM INSIDE THE INDUSTRY', 'founder.role': 'Founder, EventOS',
    'founder.quote': '"20+ years producing events, from small gatherings to large-scale productions. That\'s why I built from the inside the system I needed, one that solves this pain for the whole industry."',
    'founder.cred1': 'Full Stack, Cybersecurity and Digital Transformation · MIT',
    'founder.cred2': 'Luta Livre World Championship runner-up, Brazil 2022',
    'layout.title': 'Design the venue before you produce it.',
    'layout.f1': '✓ Interactive canvas with 40+ assets', 'layout.f2': '✓ Real measurements at 1:100 scale',
    'layout.f3': '✓ PDF export with technical title block', 'layout.f4': '✓ Shareable with the whole team',
    'layout.cta': 'See Layout Engine →',
    'value.eyebrow': 'REAL VALUE', 'value.title': 'Better experience for your clients, time saved, higher profitability, and zero operational chaos.',
    'value.v1title': 'Quotes', 'value.v1before': 'before 1 hour', 'value.v1after': 'with system: 10 seconds',
    'value.v2title': 'Layouts', 'value.v2before': 'before 1 to 2 hours', 'value.v2after': 'with system: ready in minutes',
    'value.v3title': 'Inventory & Allocations', 'value.v3before': 'before 1, 2 or 3 hours', 'value.v3after': 'with system: -5 min',
    'value.footnote': 'SIMPLE, EASY AND FAST TO IMPLEMENT',
    'proof.eyebrow': 'REAL EVENTS FROM START TO FINISH WITH EVENTOS AI OPERATION SYSTEM',
    'plans.eyebrow': 'PLANS — SIMPLE, NO SURPRISES', 'plans.popular': 'MOST POPULAR', 'plans.choose': 'Choose',
    'plans.perMonth': '/month', 'plans.agents': '✓ AI Agent module',
    'plans.p1.annual': 'or US$700 per year', 'plans.p1.f1': '✓ Essential modules', 'plans.p1.f2': '✓ 1 collaborator',
    'plans.p1.f3': '✓ 100 products', 'plans.p1.f4': '✓ 20 portal clients',
    'plans.p2.annual': 'or US$1,000 per year', 'plans.p2.f1': '✓ Advanced modules', 'plans.p2.f2': '✓ 6 collaborators',
    'plans.p2.f3': '✓ 500 products', 'plans.p2.f4': '✓ 50 portal clients',
    'plans.p3.annual': 'or US$2,000 per year', 'plans.p3.f1': '✓ All modules', 'plans.p3.f2': '✓ 10 collaborators',
    'plans.p3.f3': '✓ 1,000 products', 'plans.p3.f4': '✓ 100 portal clients',
    'footer.terms': 'Terms', 'footer.privacy': 'Privacy', 'footer.cookies': 'Cookies', 'footer.ai': 'AI Use',
    'footer.copy': '© 2026 EventOS — operated by JBD Investment Corp Inc.',
    'video.soonTitle': 'Video coming soon', 'video.soonSub': 'We are finishing this video.',
    'video.close': 'Close',
    'video.title.heroDemo': 'Everything in one system',
    'video.title.productDemo': 'Dashboard tour: 9 modules',
    'video.title.founder': 'Javier introduces EventOS',
    'video.title.layout': 'How the Layout Engine works',
  },
  pt: {
    'header.sub': 'AI Operation System', 'header.cliente': 'Cliente', 'header.org': 'Minha organização',
    'hero.badge': 'AI NATIVE EVENTS OPERATION SYSTEM',
    'hero.title': 'A produção dos seus eventos<br>já não cabe em um grupo de WhatsApp.',
    'hero.sub': 'Vendas, orçamentos, layouts, inventário, documentos e contratos em um só sistema. Não espalhados entre WhatsApp, Drive e planilhas.',
    'hero.demo': '▶ Ver demo', 'hero.create': 'Criar minha organização',
    'hero.quoteLabel': 'Orçamento ao vivo', 'hero.quoteMeta': 'Casamento · 200 pax',
    'hero.quoteGen': '● gerado pelo EventOS AI em menos de 10 segundos',
    'stats.years': 'anos', 'stats.events': 'eventos', 'stats.modules': 'módulos',
    'problem.eyebrow': 'O PROBLEMA',
    'problem.title': 'Os eventos movimentam milhões de dólares por ano e o caos operacional só cresce.',
    'problem.c1h': 'Sem sistema central', 'problem.c1p': 'Tudo fragmentado.',
    'problem.c2h': 'Seu evento hoje vive entre WhatsApp, Drive, Excel, planilhas soltas, etc.', 'problem.c2p': 'Várias ferramentas desconectadas.',
    'problem.c3h': 'Zero funcionalidade operacional', 'problem.c3p': 'Sem fonte única da verdade.',
    'solution.eyebrow': 'A SOLUÇÃO',
    'solution.title': 'O EventOS AI Operation System centraliza toda a operação 360°: da venda e criação de layouts, até os detalhes do evento, o inventário, a operação de campo e o portal do cliente.',
    'modules.more': 'Toque para ver mais →',
    'mod.ventas.h': 'Vendas', 'mod.ventas.p': 'Clientes, orçamentos e oportunidades.',
    'mod.ventas.d': 'Pipeline de vendas com preços calculados por IA, orçamentos em minutos.',
    'mod.eventos.h': 'Eventos', 'mod.eventos.p': 'Planeje e administre do início ao fim.',
    'mod.eventos.d': 'Planilha de trabalho completa com 36 itens por evento.',
    'mod.layouts.h': 'Layouts', 'mod.layouts.p': 'Desenhe e gerencie as plantas dos seus eventos.',
    'mod.layouts.d': 'Editor 2D de venues, 40+ assets, exportação em PDF na escala 1/100.',
    'mod.inventario.h': 'Inventário', 'mod.inventario.p': 'Mobiliário e equipamentos sob controle.',
    'mod.inventario.d': 'Controle de ativos próprios, alugados e consumíveis.',
    'mod.fieldops.h': 'FieldOps', 'mod.fieldops.p': 'Coordene a equipe no local.',
    'mod.fieldops.d': 'Coordenação móvel no local, caixa pequeno, evidência fotográfica.',
    'mod.financiero.h': 'Financeiro', 'mod.financiero.p': 'Gestão financeira, faturamento e relatórios.',
    'mod.financiero.d': 'Faturamento, contas a receber/pagar e relatórios financeiros.',
    'mod.administrativo.h': 'Administrativo', 'mod.administrativo.p': 'Configuração geral da conta.',
    'mod.administrativo.d': 'Configuração da organização, funções e permissões.',
    'mod.agentes.h': 'Agentes AI', 'mod.agentes.p': 'Automatize tarefas operacionais por função.',
    'mod.agentes.d': 'Agentes de IA que automatizam tarefas operacionais por função.',
    'mod.portal.h': 'Portal do Cliente', 'mod.portal.p': 'Seus clientes veem o status do evento.',
    'mod.portal.d': 'Seus clientes veem em tempo real o status do evento.',
    'founder.eyebrow': 'CONSTRUÍDO DE DENTRO DA INDÚSTRIA', 'founder.role': 'Founder, EventOS',
    'founder.quote': '"+20 anos produzindo eventos, de pequenas reuniões a produções em grande escala. Por isso construí de dentro o sistema que eu precisava, e que resolve essa dor para toda a indústria."',
    'founder.cred1': 'Full Stack, Cibersegurança e Transformação Digital · MIT',
    'founder.cred2': 'Vice-campeão Mundial de Luta Livre Brasil 2022',
    'layout.title': 'Desenhe o venue antes de produzi-lo.',
    'layout.f1': '✓ Canvas interativo com 40+ assets', 'layout.f2': '✓ Medidas reais na escala 1/100',
    'layout.f3': '✓ Exportação em PDF com carimbo técnico', 'layout.f4': '✓ Compartilhável com toda a equipe',
    'layout.cta': 'Ver Layout Engine →',
    'value.eyebrow': 'VALOR REAL', 'value.title': 'Melhor experiência para seus clientes, economia de tempo, mais rentabilidade e zero caos operacional.',
    'value.v1title': 'Orçamentos', 'value.v1before': 'antes 1 hora', 'value.v1after': 'com sistema: 10 segundos',
    'value.v2title': 'Layouts', 'value.v2before': 'antes 1 a 2 horas', 'value.v2after': 'com sistema: pronto em minutos',
    'value.v3title': 'Inventário e Separações', 'value.v3before': 'antes 1, 2 ou 3 horas', 'value.v3after': 'com sistema: -5 min',
    'value.footnote': 'SIMPLES, FÁCIL E RÁPIDO DE IMPLEMENTAR',
    'proof.eyebrow': 'EVENTOS REAIS DO INÍCIO AO FIM COM EVENTOS AI OPERATION SYSTEM',
    'plans.eyebrow': 'PLANOS — SIMPLES, SEM SURPRESAS', 'plans.popular': 'MAIS POPULAR', 'plans.choose': 'Escolher',
    'plans.perMonth': '/mês', 'plans.agents': '✓ Módulo Agente AI',
    'plans.p1.annual': 'ou US$ 700 por ano', 'plans.p1.f1': '✓ Módulos essenciais', 'plans.p1.f2': '✓ 1 colaborador',
    'plans.p1.f3': '✓ 100 produtos', 'plans.p1.f4': '✓ 20 clientes no portal',
    'plans.p2.annual': 'ou US$ 1.000 por ano', 'plans.p2.f1': '✓ Módulos avançados', 'plans.p2.f2': '✓ 6 colaboradores',
    'plans.p2.f3': '✓ 500 produtos', 'plans.p2.f4': '✓ 50 clientes no portal',
    'plans.p3.annual': 'ou US$ 2.000 por ano', 'plans.p3.f1': '✓ Todos os módulos', 'plans.p3.f2': '✓ 10 colaboradores',
    'plans.p3.f3': '✓ 1.000 produtos', 'plans.p3.f4': '✓ 100 clientes no portal',
    'footer.terms': 'Termos', 'footer.privacy': 'Privacidade', 'footer.cookies': 'Cookies', 'footer.ai': 'Uso de IA',
    'footer.copy': '© 2026 EventOS — operado por JBD Investment Corp Inc.',
    'video.soonTitle': 'Vídeo em breve', 'video.soonSub': 'Estamos finalizando este vídeo.',
    'video.close': 'Fechar',
    'video.title.heroDemo': 'Tudo em um só sistema',
    'video.title.productDemo': 'Tour pelo dashboard: 9 módulos',
    'video.title.founder': 'Javier apresenta o EventOS',
    'video.title.layout': 'Como funciona o Layout Engine',
  },
};

// Documentos legales (legal/build.mjs): mismo documento, nombre de archivo por idioma.
const legalSlugs = {
  es: { terms: 'terminos', privacy: 'privacidad', cookies: 'cookies', ai: 'ia' },
  en: { terms: 'terms', privacy: 'privacy', cookies: 'cookies', ai: 'ai' },
  pt: { terms: 'termos', privacy: 'privacidade', cookies: 'cookies', ai: 'ia' },
};

const LANG_KEY = 'eventos.landingLang';
let currentLang = 'es';
let openModule = null;

const t = (key) => translations[currentLang][key] ?? translations.es[key] ?? '';

function initialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) { /* sin storage: se usa el navegador */ }
  const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return translations[browser] ? browser : 'es';
}

function setLang(lang) {
  currentLang = translations[lang] ? lang : 'es';
  try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* opcional */ }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.getAttribute('data-i18n'));
    if (value) el.textContent = value;
  });
  // Solo textos propios con <br> (sin datos de usuarios).
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = t(el.getAttribute('data-i18n-html'));
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll('#langToggle button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
  });
  document.querySelectorAll('[data-legal]').forEach((el) => {
    el.href = `legal/${currentLang}/${legalSlugs[currentLang][el.dataset.legal]}.html`;
  });
  document.querySelectorAll('[data-close]').forEach((el) => {
    if (el.tagName === 'BUTTON') el.setAttribute('aria-label', t('video.close'));
  });
  renderModuleDetails();
  syncSubtitles();
  document.documentElement.lang = currentLang;
}

document.querySelectorAll('#langToggle button').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ===== MÓDULOS: tocar para ver el detalle ===== */
function renderModuleDetails() {
  document.querySelectorAll('.module-card').forEach((card) => {
    const key = card.dataset.module;
    const isOpen = key === openModule;
    card.classList.toggle('open', isOpen);
    card.setAttribute('aria-expanded', String(isOpen));
    card.querySelector('.module-detail').textContent = isOpen ? t(`mod.${key}.d`) : t('modules.more');
  });
}

document.querySelectorAll('.module-card').forEach((card) => {
  card.addEventListener('click', () => {
    openModule = openModule === card.dataset.module ? null : card.dataset.module;
    renderModuleDetails();
  });
});

/* ===== VIDEO (componente compartido por el modal y los inline) =====
   preload="none": no se descarga nada hasta que tocan play; antes se ve la portada. */

// Placeholder "Video próximamente" (videos que todavía no están).
function createSoon() {
  const soon = document.createElement('div');
  soon.className = 'video-soon';
  soon.setAttribute('role', 'status');
  const title = document.createElement('strong');
  title.textContent = t('video.soonTitle');
  const sub = document.createElement('span');
  sub.textContent = t('video.soonSub');
  soon.append(title, sub);
  return soon;
}

// Reproductor con portada, 720p/1080p según pantalla y subtítulos ES/EN/PT.
function createVideo(key) {
  const name = VIDEOS[key];
  if (!name) return createSoon();
  const base = VIDEO_DIR + name;
  const small = window.matchMedia && window.matchMedia(SMALL_SCREEN).matches;

  const video = document.createElement('video');
  video.className = 'landing-video';
  video.controls = true;
  video.playsInline = true;
  video.preload = 'none';
  video.poster = `${base}-poster.webp`;
  video.src = `${base}-${small ? 720 : 1080}.mp4`;
  video.dataset.titleKey = `video.title.${key}`;
  video.setAttribute('aria-label', t(video.dataset.titleKey));

  // Portada JPG si el navegador no abre WebP.
  const probe = new Image();
  probe.onerror = () => { video.poster = `${base}-poster.jpg`; };
  probe.src = video.poster;

  Object.entries(SUBTITLE_LANGS).forEach(([lang, label]) => {
    const track = document.createElement('track');
    track.kind = 'subtitles';
    track.srclang = lang;
    track.label = label;
    track.src = `${base}-${lang}.vtt`;
    if (lang === currentLang) track.default = true;
    video.appendChild(track);
  });
  // Chrome activa además los subtítulos del idioma del navegador: si quedan
  // dos visibles, se deja solo el de la landing. Si el visitante elige otro
  // idioma o los apaga desde el reproductor, se respeta.
  video.textTracks.addEventListener('change', () => {
    const showing = Array.from(video.textTracks).filter((tr) => tr.mode === 'showing');
    if (showing.length > 1) syncSubtitles(video.parentElement);
  });
  return video;
}

// Subtítulos visibles en el idioma de la landing (se llama al cambiar ES/EN/PT).
function syncSubtitles(root = document) {
  root.querySelectorAll('video.landing-video').forEach((video) => {
    Array.from(video.textTracks).forEach((track) => {
      track.mode = track.language === currentLang ? 'showing' : 'disabled';
    });
    video.setAttribute('aria-label', t(video.dataset.titleKey));
  });
}

// Algunos navegadores crean las pistas recién al insertar el <video>.
function mountVideo(container, key) {
  const el = createVideo(key);
  container.replaceChildren(el);
  if (el.tagName === 'VIDEO') syncSubtitles(container);
  return el;
}

/* Modal (hero "Ver demo" → heroDemo, Solución "Ver demo" → productDemo). */
const modal = document.getElementById('videoModal');
const modalFrame = document.getElementById('videoModalFrame');
const modalTitle = document.getElementById('videoModalTitle');
let modalReturnFocus = null;

function openVideoModal(key) {
  modalReturnFocus = document.activeElement;
  modalTitle.dataset.i18n = `video.title.${key}`;
  modalTitle.textContent = t(modalTitle.dataset.i18n);
  const el = mountVideo(modalFrame, key);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.video-modal__close').focus();
  // "▶ Ver demo" es el play: recién acá empieza la descarga.
  if (el.tagName === 'VIDEO') el.play().catch(() => { /* queda la portada con controles */ });
}

function closeVideoModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  modalFrame.replaceChildren(); // corta la reproducción y la descarga
  document.body.classList.remove('modal-open');
  if (modalReturnFocus) modalReturnFocus.focus();
}

document.querySelectorAll('[data-video-modal]').forEach((btn) => {
  btn.addEventListener('click', () => openVideoModal(btn.dataset.videoModal));
});
modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeVideoModal));
document.addEventListener('keydown', (event) => {
  if (modal.hidden) return;
  if (event.key === 'Escape') closeVideoModal();
  // El foco queda dentro del modal: "Cerrar" y el video (si hay).
  if (event.key === 'Tab') {
    const focusables = [modal.querySelector('.video-modal__close'), modalFrame.querySelector('video')].filter(Boolean);
    const i = focusables.indexOf(document.activeElement);
    event.preventDefault();
    focusables[(i + (event.shiftKey ? -1 : 1) + focusables.length) % focusables.length].focus();
  }
});

/* Inline (founder, Layout Engine): con video, el reproductor queda puesto desde
   el inicio (solo la portada); sin video, el botón muestra "Video próximamente". */
document.querySelectorAll('[data-video-inline]').forEach((container) => {
  const key = container.dataset.videoInline;
  if (VIDEOS[key]) {
    mountVideo(container, key);
  } else {
    container.querySelector('.video-play')?.addEventListener('click', () => container.replaceChildren(createSoon()));
  }
});

/* "Ver Layout Engine →": lleva al video del Layout Engine y lo reproduce. */
const layoutCtaBtn = document.getElementById('layoutCtaBtn');
const layoutVideo = document.getElementById('layoutVideo');
if (layoutCtaBtn && layoutVideo) {
  layoutCtaBtn.addEventListener('click', () => {
    layoutVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const video = layoutVideo.querySelector('video');
    if (video) video.play().catch(() => { /* queda la portada con controles */ });
    else layoutVideo.querySelector('.video-play')?.click();
    layoutVideo.classList.add('is-highlighted');
    setTimeout(() => layoutVideo.classList.remove('is-highlighted'), 900);
  });
}

/* ===== CARRUSEL: se duplica la pista para que el loop no tenga corte ===== */
const proofTrack = document.getElementById('proofTrack');
if (proofTrack) {
  Array.from(proofTrack.children).forEach((img) => {
    const clone = img.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    proofTrack.appendChild(clone);
  });
}

/* ===== STATS: conteo animado al entrar en pantalla =====
   Una sola vez por carga (unobserve después del primer disparo). Los números
   no dependen del idioma: solo cambia la etiqueta de abajo (data-i18n). El
   HTML trae el valor final, así sin JS (o con movimiento reducido) se ve igual.
   data-group: separador de miles con coma también durante el conteo. */
const STATS_DURATION_MS = 1800;
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

function formatStat(el, value) {
  const n = Math.round(value);
  const digits = el.hasAttribute('data-group') ? n.toLocaleString('en-US') : String(n);
  return digits + (el.dataset.suffix || '');
}

function animateStat(el) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / STATS_DURATION_MS, 1);
    el.textContent = formatStat(el, target * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statsSection = document.getElementById('stats');
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (statsSection && 'IntersectionObserver' in window && !reduceMotion) {
  const counters = statsSection.querySelectorAll('[data-count]');
  counters.forEach((el) => { el.textContent = formatStat(el, 0); });
  const statsObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.unobserve(statsSection);
    observer.disconnect();
    counters.forEach(animateStat);
  }, { threshold: 0.4 });
  statsObserver.observe(statsSection);
}

/* ===== INIT ===== */
setLang(initialLang());
