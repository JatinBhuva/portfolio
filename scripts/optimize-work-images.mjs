import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const PROJECT_ROOT = process.cwd()
const WORK_DIR = path.join(PROJECT_ROOT, 'public', 'work')

const WIDTHS = [640, 1024, 1440]
const AVIF_QUALITY = 45
const WEBP_QUALITY = 70

async function listCollagePngs(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...(await listCollagePngs(full)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('-collage.png')) {
      results.push(full)
    }
  }

  return results
}

function formatTargetPath(inputPath, width, ext) {
  const dir = path.dirname(inputPath)
  const base = path.basename(inputPath, path.extname(inputPath))
  return path.join(dir, `${base}.${width}.${ext}`)
}

async function optimizeOne(inputPath) {
  const original = await sharp(inputPath).metadata()
  const originalWidth = original.width ?? 0

  const widths = WIDTHS.filter((w) => originalWidth === 0 || w <= originalWidth)
  if (widths.length === 0) widths.push(WIDTHS[0])

  await Promise.all(
    widths.flatMap((width) => {
      const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true })
      const avifOut = formatTargetPath(inputPath, width, 'avif')
      const webpOut = formatTargetPath(inputPath, width, 'webp')

      return [
        pipeline
          .clone()
          .avif({ quality: AVIF_QUALITY, effort: 4 })
          .toFile(avifOut),
        pipeline.clone().webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpOut),
      ]
    }),
  )

  return { inputPath, widths }
}

async function main() {
  const inputs = await listCollagePngs(WORK_DIR)
  if (inputs.length === 0) {
    console.log('No collage PNGs found under public/work.')
    return
  }

  console.log(`Optimizing ${inputs.length} collage images...`)

  for (const input of inputs) {
    const { widths } = await optimizeOne(input)
    const rel = path.relative(PROJECT_ROOT, input)
    console.log(`- ${rel} -> ${widths.join(', ')}w (avif/webp)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

