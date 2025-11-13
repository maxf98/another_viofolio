const fs = require('fs');
const path = require('path');

// Read files from a directory
function readLetterFiles(letterDir) {
  const fullPath = path.join(__dirname, '..', 'public', 'letters', letterDir);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Directory ${fullPath} does not exist`);
    return [];
  }

  const files = fs.readdirSync(fullPath)
    .filter(file => {
      // Filter for image files only
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    })
    .sort(); // Sort alphabetically for consistent ordering

  return files.map((file, index) => {
    // Remove extension for alt text
    const nameWithoutExt = path.basename(file, path.extname(file));
    return {
      index,
      image: `/letters/${letterDir}/${file}`,
      alt: nameWithoutExt
    };
  });
}

// Generate the letters object
function generateLettersData() {
  const vs = readLetterFiles('V');
  const is = readLetterFiles('I');
  const os = readLetterFiles('O');

  return { V: vs, I: is, O: os };
}

// Read the current graph.tsx file
function updateGraphFile() {
  const graphPath = path.join(__dirname, '..', 'app', 'data', 'graph.tsx');
  let content = fs.readFileSync(graphPath, 'utf8');

  // Generate new letters data
  const lettersData = generateLettersData();

  // Format the letters object as a string
  const formatLetterArray = (arr) => {
    if (arr.length === 0) return '[]';
    return '[\n' + arr.map(item =>
      `    { index: ${item.index}, image: "${item.image}", alt: "${item.alt}" }`
    ).join(',\n') + ',\n  ]';
  };

  const lettersString = `export const letters: Record<"V" | "I" | "O", LetterItem[]> = {
  V: ${formatLetterArray(lettersData.V)},
  I: ${formatLetterArray(lettersData.I)},
  O: ${formatLetterArray(lettersData.O)},
};`;

  // Replace the letters section
  // Match from "export const letters" to the closing "};", handling multiline
  const lettersRegex = /export const letters: Record<"V" \| "I" \| "O", LetterItem\[\]> = \{[\s\S]*?\n\};/;

  if (lettersRegex.test(content)) {
    content = content.replace(lettersRegex, lettersString);
  } else {
    console.error('Could not find letters definition in graph.tsx');
    process.exit(1);
  }

  // Write back to file
  fs.writeFileSync(graphPath, content, 'utf8');

  console.log('✓ Updated graph.tsx with letter data:');
  console.log(`  - V: ${lettersData.V.length} variants`);
  console.log(`  - I: ${lettersData.I.length} variants`);
  console.log(`  - O: ${lettersData.O.length} variants`);
}

// Run the script
try {
  updateGraphFile();
} catch (error) {
  console.error('Error generating letters:', error);
  process.exit(1);
}
