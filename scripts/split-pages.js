#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/projects/MONKEYBRAIN/mag');
const outputDir = path.join(__dirname, '../public/projects/MONKEYBRAIN/pages');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function splitImage(inputPath, outputBaseName) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const { width, height } = metadata;

    // Calculate the midpoint
    const halfWidth = Math.floor(width / 2);

    // Extract left half
    await image
      .clone()
      .extract({ left: 0, top: 0, width: halfWidth, height })
      .toFile(path.join(outputDir, `${outputBaseName}_left.png`));

    console.log(`✓ Created ${outputBaseName}_left.png`);

    // Extract right half
    await image
      .clone()
      .extract({ left: halfWidth, top: 0, width: halfWidth, height })
      .toFile(path.join(outputDir, `${outputBaseName}_right.png`));

    console.log(`✓ Created ${outputBaseName}_right.png`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function processAllImages() {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to process...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.basename(file, path.extname(file));

    console.log(`Processing ${file}...`);
    await splitImage(inputPath, baseName);
    console.log();
  }

  console.log('✓ All images processed successfully!');
  console.log(`Output directory: ${outputDir}`);
}

processAllImages().catch(console.error);
