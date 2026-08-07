import "server-only";
import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const VIDEO_EXTENSIONS = [".mp4"];

export type LocalGalleryMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export function getLocalGalleryImages(): LocalGalleryMedia[] {
  const dir = path.join(process.cwd(), "public", "gallery");

  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) || VIDEO_EXTENSIONS.includes(ext);
    })
    .sort()
    .map((f): LocalGalleryMedia => {
      const ext = path.extname(f).toLowerCase();
      return {
        src: `/gallery/${f}`,
        alt: "Photo from a past Cheese, Wine & Chocolate Fest",
        type: VIDEO_EXTENSIONS.includes(ext) ? "video" : "image",
      };
    });
}
