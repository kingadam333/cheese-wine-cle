import { listGalleryImages } from "@/lib/dropbox";

const FALLBACK_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: "Photo from a past Cheese, Wine & Chocolate Fest",
}));

export default async function Gallery() {
  const dropboxImages = await listGalleryImages();

  const images =
    dropboxImages.length > 0
      ? dropboxImages.map((img) => ({
          src: `/api/dropbox-image?path=${encodeURIComponent(img.path)}`,
          alt: img.name,
        }))
      : FALLBACK_IMAGES;

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
          {images.map(({ src, alt }, i) => (
            <div
              key={src}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-ink/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- dimensions vary per source photo (static + Dropbox), masonry relies on natural aspect ratio */}
              <img
                src={src}
                alt={alt}
                className="w-full transition-transform duration-300 group-hover:scale-105"
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
