import { listGalleryImages } from "@/lib/dropbox";
import { getLocalGalleryImages } from "@/lib/local-gallery";

type GalleryMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
};

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default async function Gallery() {
  const dropboxImages = await listGalleryImages();

  const media: GalleryMedia[] =
    dropboxImages.length > 0
      ? dropboxImages.map((img) => ({
          src: `/api/dropbox-image?path=${encodeURIComponent(img.path)}`,
          alt: img.name,
          type: "image" as const,
        }))
      : getLocalGalleryImages();

  const shuffled = shuffle(media);

  return (
    <section id="gallery" className="bg-tan/30 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-wine">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Moments From Past Festivals
          </h2>
          <p className="mt-3 font-sans text-base text-ink/70">
            A taste of what to expect — straight from previous years&apos;
            Cheese, Wine &amp; Chocolate Fest.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {shuffled.map(({ src, alt, type }, i) => (
            <div
              key={src}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-ink/5"
            >
              {type === "video" ? (
                <video
                  src={src}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={alt}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- dimensions vary per source photo (static + Dropbox), masonry relies on natural aspect ratio
                <img
                  src={src}
                  alt={alt}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
