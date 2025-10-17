import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Mappa delle rotte ITA -> ENG
const routeMap = {
  '': '', // /it -> /en
  catalogo: 'catalog',
  'catalogo/[id]': 'catalog/[id]',
  'buone-pratiche': 'good-practices',
  'buone-pratiche/[slug]': 'good-practices/[slug]',
  normativa: 'legislation',
  ecosistema: 'ecosystem',
  FAQ: 'FAQ',
  404: '404',
  errore: 'error',
  'privacy-policy': 'privacy-policy',
}

// Funzione per copiare e rinominare secondo la mappa
function copyAndMap(srcBase, destBase, map) {
  Object.entries(map).forEach(([itPath, enPath]) => {
    const src = path.join(srcBase, itPath)
    const dest = path.join(destBase, enPath)
    if (fs.existsSync(src)) {
      // Crea la cartella di destinazione se serve
      const destDir = path.dirname(dest)
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
      if (fs.statSync(src).isDirectory()) {
        // Copia ricorsiva per directory
        fs.cpSync(src, dest, { recursive: true })
      } else {
        fs.copyFileSync(src, dest)
      }
      console.log(`Copied ${src} -> ${dest}`)
    }
  })
}

const srcDir = path.join(__dirname, '../src/pages/it')
const destDir = path.join(__dirname, '../src/pages/en')

copyAndMap(srcDir, destDir, routeMap)
