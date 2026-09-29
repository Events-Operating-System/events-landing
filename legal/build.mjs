// Genera las páginas legales a partir de legal/src/{es,en,pt}/*.md.
//   node legal/build.mjs
// Escribe legal/{lang}/{slug}.html (vigente), legal/v1/{lang}/{slug}.html
// (fija, no se regenera nunca más una vez publicada otra versión) y
// legal/manifest.json (versión + sha256 del original en español, lo que la
// base guarda en legal_documents). Sin dependencias: el markdown de estos
// documentos usa solo títulos, párrafos, listas, tablas, **negrita** y una
// cita (la nota de traducción).
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://events-operating-system.github.io/events-landing'
const VERSION = '1.0'
const VERSION_DIR = 'v1'

const LANGS = ['es', 'en', 'pt']
const DOCS = {
  terms: {
    es: ['terminos', 'Términos de Servicio'],
    en: ['terms', 'Terms of Service'],
    pt: ['termos', 'Termos de Serviço'],
  },
  privacy: {
    es: ['privacidad', 'Política de Privacidad'],
    en: ['privacy', 'Privacy Policy'],
    pt: ['privacidade', 'Política de Privacidade'],
  },
  cookies: {
    es: ['cookies', 'Política de Cookies'],
    en: ['cookies', 'Cookie Policy'],
    pt: ['cookies', 'Política de Cookies'],
  },
  ai: {
    es: ['ia', 'Aviso de Uso de IA'],
    en: ['ai', 'AI Use Notice'],
    pt: ['ia', 'Aviso de Uso de IA'],
  },
}
const UI = {
  es: {
    legal: 'Legal',
    current: `Versión vigente ${VERSION}`,
    archived: `Versión ${VERSION} (enlace permanente)`,
    permalink: 'Enlace permanente de esta versión',
    seeCurrent: 'Ver la versión vigente',
    hash: 'SHA-256 del original en español',
    back: 'Volver a EventOS',
    copy: '© 2026 EventOS — operado por JBD Investment Corp Inc.',
  },
  en: {
    legal: 'Legal',
    current: `Current version ${VERSION}`,
    archived: `Version ${VERSION} (permanent link)`,
    permalink: 'Permanent link to this version',
    seeCurrent: 'See the current version',
    hash: 'SHA-256 of the Spanish original',
    back: 'Back to EventOS',
    copy: '© 2026 EventOS — operated by JBD Investment Corp Inc.',
  },
  pt: {
    legal: 'Legal',
    current: `Versão vigente ${VERSION}`,
    archived: `Versão ${VERSION} (link permanente)`,
    permalink: 'Link permanente desta versão',
    seeCurrent: 'Ver a versão vigente',
    hash: 'SHA-256 do original em espanhol',
    back: 'Voltar ao EventOS',
    copy: '© 2026 EventOS — operado por JBD Investment Corp Inc.',
  },
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function inline(text) {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, (m) => `<a href="mailto:${m}">${m}</a>`)
}

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Párrafo con saltos de línea duros solo en los bloques de cabecera
// (fecha/versión) y de contacto: empiezan en negrita o tienen negrita en
// todas sus líneas. El resto es prosa ajustada a ~72 columnas y se une.
function paragraph(lines) {
  const hard = lines.length > 1 && (lines[0].startsWith('**') || lines.every((l) => l.includes('**')))
  return `<p>${hard ? lines.map(inline).join('<br>\n') : inline(lines.join(' '))}</p>`
}

export function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }

    let m
    if ((m = line.match(/^(#{1,3}) (.+)$/))) {
      const level = m[1].length
      const id = level > 1 ? ` id="${slugify(m[2])}"` : ''
      out.push(`<h${level}${id}>${inline(m[2])}</h${level}>`)
      i++
      continue
    }

    if (line.startsWith('>')) {
      const buf = []
      while (i < lines.length && lines[i].startsWith('>')) buf.push(lines[i++].replace(/^>\s?/, ''))
      out.push(`<blockquote class="legal-note">${paragraph(buf)}</blockquote>`)
      continue
    }

    if (line.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++])
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
      const [head, , ...body] = rows
      out.push(
        '<div class="legal-table"><table>',
        `<thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>`,
        `<tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody>`,
        '</table></div>',
      )
      continue
    }

    const bullet = /^-\s+/
    const ordered = /^\d+\.\s+/
    if (bullet.test(line) || ordered.test(line)) {
      const marker = bullet.test(line) ? bullet : ordered
      const tag = marker === bullet ? 'ul' : 'ol'
      const items = []
      while (i < lines.length && (marker.test(lines[i]) || /^\s{2,}\S/.test(lines[i]))) {
        if (marker.test(lines[i])) items.push([lines[i].replace(marker, '')])
        else items[items.length - 1].push(lines[i].trim())
        i++
      }
      out.push(`<${tag}>${items.map((it) => `<li>${inline(it.join(' '))}</li>`).join('')}</${tag}>`)
      continue
    }

    const buf = []
    while (i < lines.length && lines[i].trim() && !/^(#|>|\||-\s|\d+\.\s)/.test(lines[i])) buf.push(lines[i++])
    out.push(paragraph(buf))
  }
  return out.join('\n')
}

function page({ lang, docKey, archived, body, sha256 }) {
  const t = UI[lang]
  const [slug, title] = DOCS[docKey][lang]
  // Profundidad: legal/{lang}/x.html → ../../ ; legal/v1/{lang}/x.html → ../../../
  const up = archived ? '../../../' : '../../'
  const here = archived ? `legal/${VERSION_DIR}/${lang}/${slug}.html` : `legal/${lang}/${slug}.html`
  const permalink = `${BASE_URL}/legal/${VERSION_DIR}/${lang}/${slug}.html`
  const currentUrl = `${up}legal/${lang}/${slug}.html`
  const sibling = (l, k) => `${archived ? `${up}legal/${VERSION_DIR}/` : `${up}legal/`}${l}/${DOCS[k][l][0]}.html`

  const langLinks = LANGS.map((l) =>
    l === lang
      ? `<span class="active" aria-current="true">${l.toUpperCase()}</span>`
      : `<a href="${sibling(l, docKey)}" hreflang="${l}">${l.toUpperCase()}</a>`,
  ).join('')
  const docLinks = Object.keys(DOCS)
    .map((k) =>
      k === docKey
        ? `<span class="active" aria-current="page">${DOCS[k][lang][1]}</span>`
        : `<a href="${sibling(lang, k)}">${DOCS[k][lang][1]}</a>`,
    )
    .join('')

  const versionLine = archived
    ? `${t.archived} · <a href="${currentUrl}">${t.seeCurrent}</a>`
    : `${t.current} · ${t.permalink}: <a href="${permalink}">${permalink.replace(BASE_URL, '')}</a>`

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — EventOS</title>
  <link rel="canonical" href="${BASE_URL}/${here}" />
  <link rel="stylesheet" href="${up}assets/css/style.css" />
</head>
<body class="legal-page">

<nav class="nav scrolled">
  <div class="container">
    <div class="nav-inner">
      <a href="${up}" class="nav-logo">
        <div class="nav-logo-icon"><span></span><span></span><span></span><span></span></div>
        <div class="nav-logo-text">
          <span class="nav-logo-name">EventOS</span>
          <span class="nav-logo-sub">${t.legal}</span>
        </div>
      </a>
      <div class="lang-toggle legal-lang">${langLinks}</div>
    </div>
  </div>
</nav>

<main class="container legal-main">
  <div class="legal-docs">${docLinks}</div>
  <p class="legal-version">${versionLine}</p>
  <article class="legal-body">
${body}
  </article>
  <p class="legal-hash">${t.hash}: <code>${sha256}</code></p>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-bottom">
      <p class="footer-copy">${t.copy}</p>
      <div class="footer-bottom-links"><a href="${up}">${t.back}</a></div>
    </div>
  </div>
</footer>

</body>
</html>
`
}

const manifest = { version: VERSION, version_dir: VERSION_DIR, base_url: BASE_URL, documents: {} }

for (const docKey of Object.keys(DOCS)) {
  const esSource = readFileSync(join(ROOT, 'src', 'es', `${DOCS[docKey].es[0]}.md`))
  const sha256 = createHash('sha256').update(esSource).digest('hex')
  manifest.documents[docKey] = { sha256, urls: {}, permanent_urls: {} }

  for (const lang of LANGS) {
    const [slug] = DOCS[docKey][lang]
    const body = markdownToHtml(readFileSync(join(ROOT, 'src', lang, `${slug}.md`), 'utf8'))

    const currentPath = join(ROOT, lang, `${slug}.html`)
    mkdirSync(dirname(currentPath), { recursive: true })
    writeFileSync(currentPath, page({ lang, docKey, archived: false, body, sha256 }))

    // La copia fija de la versión se escribe una sola vez: si ya existe, no
    // se toca (lo que se publicó en /legal/v1/ no cambia nunca).
    const fixedPath = join(ROOT, VERSION_DIR, lang, `${slug}.html`)
    if (!existsSync(fixedPath) || process.argv.includes('--rewrite-fixed')) {
      mkdirSync(dirname(fixedPath), { recursive: true })
      writeFileSync(fixedPath, page({ lang, docKey, archived: true, body, sha256 }))
    }

    manifest.documents[docKey].urls[lang] = `${BASE_URL}/legal/${lang}/${slug}.html`
    manifest.documents[docKey].permanent_urls[lang] = `${BASE_URL}/legal/${VERSION_DIR}/${lang}/${slug}.html`
  }
}

writeFileSync(join(ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify(manifest, null, 2))
