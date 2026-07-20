const ITEMS = [
  "50+ WINES",
  "50+ CHEESES",
  "CHOCOLATE VENDORS",
  "PIZZA & SNACKS",
  "LIVE MUSIC",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative w-full overflow-hidden bg-wine border-y-2 border-gold/40 py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {[...track, ...track].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-sm sm:text-base font-semibold tracking-widest text-gold-light"
          >
            {item}
            <span className="text-cream/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
