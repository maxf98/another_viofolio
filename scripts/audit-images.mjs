import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const APP_DIR = path.join(ROOT, "app");
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);
const CODE_EXTS = new Set([".ts", ".tsx", ".mdx"]);

function walk(dir, matcher, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, matcher, out);
      continue;
    }
    if (matcher(fullPath)) out.push(fullPath);
  }
  return out;
}

function bytesToKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function bytesToMB(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function rel(p) {
  return path.relative(ROOT, p);
}

function lineForOffset(content, offset) {
  let line = 1;
  for (let i = 0; i < offset; i++) {
    if (content[i] === "\n") line++;
  }
  return line;
}

const imageFiles = walk(PUBLIC_DIR, (p) => IMAGE_EXTS.has(path.extname(p).toLowerCase()));
const sizedImages = imageFiles.map((file) => ({
  file,
  size: fs.statSync(file).size,
}));

sizedImages.sort((a, b) => b.size - a.size);

const over500KB = sizedImages.filter((img) => img.size > 500 * 1024);
const over1MB = sizedImages.filter((img) => img.size > 1024 * 1024);
const over5MB = sizedImages.filter((img) => img.size > 5 * 1024 * 1024);
const backupFiles = sizedImages.filter((img) =>
  rel(img.file).includes("originals_backup")
);

const codeFiles = walk(APP_DIR, (p) => CODE_EXTS.has(path.extname(p).toLowerCase()));
const priorityHits = [];
const pngSrcHits = [];
const staticPublicImports = [];
const referencedAssets = new Map();

for (const file of codeFiles) {
  const content = fs.readFileSync(file, "utf8");

  const priorityPattern = /<Image[\s\S]*?\bpriority(?:\s|=|\/|>)/g;
  let match = priorityPattern.exec(content);
  while (match) {
    const line = lineForOffset(content, match.index);
    priorityHits.push({ file, line });
    match = priorityPattern.exec(content);
  }

  const pngSrcPattern = /src\s*=\s*["']\/[^"']+\.png["']/g;
  match = pngSrcPattern.exec(content);
  while (match) {
    const line = lineForOffset(content, match.index);
    pngSrcHits.push({ file, line, snippet: match[0] });
    match = pngSrcPattern.exec(content);
  }

  const publicImportPattern = /from\s+["'][^"']*\/public\/[^"']+\.(png|jpg|jpeg|webp|avif)["']/g;
  match = publicImportPattern.exec(content);
  while (match) {
    const line = lineForOffset(content, match.index);
    staticPublicImports.push({ file, line, snippet: match[0] });
    match = publicImportPattern.exec(content);
  }

  const assetRefPattern = /["']\/([^"']+\.(png|jpg|jpeg|webp|avif))["']/g;
  match = assetRefPattern.exec(content);
  while (match) {
    const assetPath = path.join(PUBLIC_DIR, match[1]);
    if (fs.existsSync(assetPath)) {
      referencedAssets.set(assetPath, fs.statSync(assetPath).size);
    }
    match = assetRefPattern.exec(content);
  }
}

const largestReferenced = [...referencedAssets.entries()]
  .map(([file, size]) => ({ file, size }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 20);

console.log("== Image Audit ==");
console.log(`Total image files: ${sizedImages.length}`);
console.log(`> 500KB: ${over500KB.length}`);
console.log(`> 1MB: ${over1MB.length}`);
console.log(`> 5MB: ${over5MB.length}`);
console.log("");

console.log("Top 25 largest files in /public:");
sizedImages.slice(0, 25).forEach((img, i) => {
  console.log(`${String(i + 1).padStart(2, " ")}. ${rel(img.file)} (${bytesToMB(img.size)})`);
});
console.log("");

console.log("Top 20 largest assets referenced from app code:");
largestReferenced.forEach((img, i) => {
  console.log(`${String(i + 1).padStart(2, " ")}. ${rel(img.file)} (${bytesToKB(img.size)})`);
});
console.log("");

console.log(`next/image tags using priority: ${priorityHits.length}`);
priorityHits.slice(0, 30).forEach((hit) => {
  console.log(`- ${rel(hit.file)}:${hit.line}`);
});
if (priorityHits.length > 30) {
  console.log(`- ... ${priorityHits.length - 30} more`);
}
console.log("");

console.log(`Literal PNG src references in app code: ${pngSrcHits.length}`);
pngSrcHits.slice(0, 30).forEach((hit) => {
  console.log(`- ${rel(hit.file)}:${hit.line} (${hit.snippet})`);
});
if (pngSrcHits.length > 30) {
  console.log(`- ... ${pngSrcHits.length - 30} more`);
}
console.log("");

console.log(`Static imports from /public in app code: ${staticPublicImports.length}`);
staticPublicImports.slice(0, 30).forEach((hit) => {
  console.log(`- ${rel(hit.file)}:${hit.line} (${hit.snippet})`);
});
if (staticPublicImports.length > 30) {
  console.log(`- ... ${staticPublicImports.length - 30} more`);
}
console.log("");

if (backupFiles.length > 0) {
  console.log(`Files under originals_backup: ${backupFiles.length}`);
  console.log("These are usually archival and should stay unreferenced in production code.");
}
