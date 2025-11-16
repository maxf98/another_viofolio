#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Get directory from command line argument or use default
const inputDir = process.argv[2] || path.join(__dirname, '../public/projects/elgato/customs /sd');

if (!fs.existsSync(inputDir)) {
  console.error(`Error: Directory not found: ${inputDir}`);
  process.exit(1);
}

async function cropImage(inputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Use trim to automatically remove transparent/empty borders
    const cropped = await image
      .trim()
      .toBuffer();

    // Overwrite the original file
    await sharp(cropped).toFile(inputPath);

    console.log(`✓ Cropped: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Error processing ${path.basename(inputPath)}:`, error.message);
  }
}

async function processAllImages() {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file =>
    /\.(png)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} PNG images to crop in ${inputDir}\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    console.log(`Processing ${file}...`);
    await cropImage(inputPath);
  }

  console.log('\n✓ All images cropped successfully!');
}

processAllImages().catch(console.error);
