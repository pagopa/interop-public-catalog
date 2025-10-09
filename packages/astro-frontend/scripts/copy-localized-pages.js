import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const supportedLanguages = ['it', 'en']

const srcDir = path.join(__dirname, `../src/pages/it`)
const pagesDir = path.join(__dirname, '../src/pages')

function copyRecursiveSync(src, dest) {
  if (fs.existsSync(src)) {
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest)
      fs.readdirSync(src).forEach((child) =>
        copyRecursiveSync(path.join(src, child), path.join(dest, child))
      )
    } else {
      fs.copyFileSync(src, dest)
    }
  }
}

supportedLanguages.forEach((lang) => {
  const destDir = path.join(pagesDir, lang)
  copyRecursiveSync(srcDir, destDir)
  console.log(`Copied pages to ${destDir}`)
})
