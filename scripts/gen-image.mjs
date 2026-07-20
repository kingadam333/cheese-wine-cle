import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const [, , outName, ...promptParts] = process.argv;
if (!outName || promptParts.length === 0) {
  console.error("Usage: node scripts/gen-image.mjs <output-filename.png> <prompt...>");
  process.exit(1);
}
const prompt = promptParts.join(" ");

const model = process.env.GEMINI_IMAGE_MODEL || "gemini-3.1-flash-image";
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

const body = {
  contents: [{ parts: [{ text: prompt }] }],
  generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
};

console.log(`Requesting model=${model}`);
console.log(`Prompt: ${prompt}`);

const res = await fetch(`${endpoint}?key=${apiKey}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const text = await res.text();
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  console.error(text);
  process.exit(1);
}

let json;
try {
  json = JSON.parse(text);
} catch {
  console.error("Failed to parse JSON response:");
  console.error(text.slice(0, 2000));
  process.exit(1);
}

const parts = json?.candidates?.[0]?.content?.parts ?? [];
const imagePart = parts.find((p) => p.inlineData?.data);
const textPart = parts.find((p) => p.text);

if (textPart?.text) {
  console.log("Model text response:", textPart.text);
}

if (!imagePart) {
  console.error("No image returned. Full response:");
  console.error(JSON.stringify(json, null, 2).slice(0, 3000));
  process.exit(1);
}

const outDir = path.join(root, "public", "generated");
mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, outName);
writeFileSync(outPath, Buffer.from(imagePart.inlineData.data, "base64"));
console.log(`Saved: ${outPath}`);
