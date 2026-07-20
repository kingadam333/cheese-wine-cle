import "server-only";

const DROPBOX_API = "https://api.dropboxapi.com/2";
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export type DropboxImage = {
  id: string;
  path: string;
  name: string;
};

type DropboxEntry = {
  ".tag": string;
  id: string;
  path_lower: string;
  name: string;
};

export async function listGalleryImages(): Promise<DropboxImage[]> {
  const token = process.env.DROPBOX_ACCESS_TOKEN;
  if (!token) return [];

  const folder = process.env.DROPBOX_GALLERY_PATH ?? "";
  const images: DropboxImage[] = [];

  try {
    let res = await fetch(`${DROPBOX_API}/files/list_folder`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: folder, limit: 100 }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Dropbox list_folder failed", res.status, await res.text());
      return [];
    }

    let data: { entries: DropboxEntry[]; has_more: boolean; cursor: string } =
      await res.json();
    images.push(...toImages(data.entries));

    while (data.has_more) {
      res = await fetch(`${DROPBOX_API}/files/list_folder/continue`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cursor: data.cursor }),
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      data = await res.json();
      images.push(...toImages(data.entries));
    }
  } catch (err) {
    console.error("Dropbox listGalleryImages error", err);
    return [];
  }

  return images;
}

function toImages(entries: DropboxEntry[]): DropboxImage[] {
  return entries
    .filter(
      (e) =>
        e[".tag"] === "file" &&
        IMAGE_EXTENSIONS.some((ext) => e.name.toLowerCase().endsWith(ext))
    )
    .map((e) => ({ id: e.id, path: e.path_lower, name: e.name }));
}
