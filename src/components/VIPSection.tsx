import { Clock, UtensilsCrossed, Wine as WineIcon, Sparkles } from "lucide-react";

const PERKS = [
  {
    icon: Clock,
    title: "1 Hour Early Access",
    description:
      "VIP doors open at 6:00 PM — a full hour before general admission, so you get first pour.",
  },
  {
    icon: UtensilsCrossed,
    title: "Exclusive VIP Snacks & Food",
    description:
      "A private spread of VIP-only bites and food throughout the night, on top of everything general admission gets.",
  },
  {
    icon: WineIcon,
    title: "Premium Wine Lounge",
    description:
      "Relax in our private VIP lounge and sample an elevated pour list you won't find on the main floor.",
  },
];

const PREMIUM_WINES = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: "Premium Pour",
  detail: "Details coming soon",
}));

export default function VIPSection() {
  return (
    <section
      id="vip"
      className="relative overflow-hidden bg-gradient-to-b from-wine via-[#5a1420] to-ink px-6 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            VIP Experience
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Go VIP
          </h2>
          <p className="mt-3 font-sans text-base text-tan sm:text-lg">
            Early entry, exclusive food, and a private lounge stocked with
            premium wines — the best way to experience the fest.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PERKS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-cream/5 p-6 text-center ring-1 ring-cream/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-tan/80">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
            In the VIP Lounge
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
            Premium Wines Being Poured
          </h3>
          <p className="mt-2 font-sans text-sm text-tan/70">
            Our premium wine lineup is still being finalized — check back
            soon for the full list.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PREMIUM_WINES.map(({ id, name, detail }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gold/30 bg-cream/5 px-3 py-6 text-center"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-gold-light">
                <WineIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-semibold text-cream">
                {name} #{id}
              </span>
              <span className="font-sans text-xs text-tan/60">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
