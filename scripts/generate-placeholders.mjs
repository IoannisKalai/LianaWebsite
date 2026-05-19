import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "projects");

const projects = [
  { slug: "coastal-residence", files: ["cover", "detail-1", "detail-2"], vertical: true },
  { slug: "urban-apartment", files: ["cover", "detail-1"], vertical: false },
  { slug: "gallery-renovation", files: ["cover"], vertical: true },
  { slug: "courtyard-house", files: ["cover", "detail-1"], vertical: false },
  { slug: "workspace-studio", files: ["cover"], vertical: true },
  { slug: "pavilion-garden", files: ["cover"], vertical: false },
];

function svg(width, height, label) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#ebebeb"/>
  <rect x="${width * 0.08}" y="${height * 0.08}" width="${width * 0.84}" height="${height * 0.84}" fill="#d4d4d4"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#737373" font-family="system-ui, sans-serif" font-size="13">${label}</text>
</svg>`;
}

for (const project of projects) {
  const dir = path.join(root, project.slug);
  fs.mkdirSync(dir, { recursive: true });
  const w = project.vertical ? 338 : 450;
  const h = project.vertical ? 450 : 300;
  for (const file of project.files) {
    const label = file === "cover" ? project.slug.replace(/-/g, " ") : file;
    fs.writeFileSync(
      path.join(dir, `${file}.svg`),
      svg(w, h, label),
      "utf-8"
    );
  }
}

console.log("Placeholder images generated.");
