import Image from "next/image";

export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-[center_42%]"
      />

      {/* color-graded overlay so text pops while the photo still reads through */}
      <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/35 to-ink/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(160,31,44,0.25),transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />
    </div>
  );
}
