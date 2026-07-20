import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  const token = process.env.DROPBOX_ACCESS_TOKEN;

  if (!path || !token) {
    return new Response("Not found", { status: 404 });
  }

  const dropboxArg = JSON.stringify({
    resource: { ".tag": "path", path },
    format: "jpeg",
    size: { ".tag": "w1024h768" },
    mode: { ".tag": "strict" },
  });

  const res = await fetch(
    "https://content.dropboxapi.com/2/files/get_thumbnail_v2",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Dropbox-API-Arg": dropboxArg,
      },
    }
  );

  if (!res.ok) {
    return new Response("Failed to fetch image", { status: 502 });
  }

  const buffer = await res.arrayBuffer();
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
