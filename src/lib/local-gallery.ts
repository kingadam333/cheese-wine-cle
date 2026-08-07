import "server-only";
import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export function getLocalGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => ({
      src: `/gallery/${f}`,
      alt: "Photo from a past Cheese, Wine & Chocolate Fest",
    }));
}
