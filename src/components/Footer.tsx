import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="relative h-14 w-14">
          <Image
            src="/logo.png"
            alt="Cheese, Wine & Chocolate Fest"
            fill
            unoptimized
            className="object-contain"
          />
        </div>
        <p className="font-sans text-sm text-cream/50">
          Cheese, Wine &amp; Chocolate Fest &middot; Cleveland, Ohio
        </p>
        <p className="font-sans text-xs text-cream/30">
          &copy; {new Date().getFullYear()} Cheese, Wine &amp; Chocolate Fest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
