const fs = require("fs/promises")
const path = require("path")
const sharp = require("sharp")

const INPUT_DIR = path.join(process.cwd(), "public")
const JPG_REGEX = /\.(jpe?g)$/i

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(fullPath)
      return fullPath
    })
  )
  return files.flat()
}

async function optimizeImages() {
  const allFiles = await walk(INPUT_DIR)
  const jpgFiles = allFiles.filter((file) => JPG_REGEX.test(file))

  if (jpgFiles.length === 0) {
    console.log("No JPG/JPEG files found in /public")
    return
  }

  console.log(`Found ${jpgFiles.length} JPG/JPEG files. Starting WebP conversion...`)

  await Promise.all(
    jpgFiles.map(async (inputFile) => {
      const outputFile = inputFile.replace(JPG_REGEX, ".webp")
      await sharp(inputFile)
        .rotate()
        .webp({ quality: 75, effort: 6 })
        .toFile(outputFile)

      console.log(`Converted: ${path.relative(process.cwd(), inputFile)} -> ${path.relative(process.cwd(), outputFile)}`)
    })
  )

  console.log("Image optimization complete.")
}

optimizeImages().catch((err) => {
  console.error("Image optimization failed:", err)
  process.exit(1)
})
