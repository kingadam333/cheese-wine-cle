import { CalendarDays, Clock, Crown, MapPin, Ticket } from "lucide-react";

const DETAILS = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "Saturday, October 31, 2026",
  },
  {
    icon: Clock,
    label: "General Admission",
    value: "7:00 PM – 11:00 PM",
  },
  {
    icon: Crown,
    label: "VIP Early Access",
    value: "Doors at 6:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cleveland, Ohio",
  },
];

export default function EventDetails() {
  return (
    <section
      id="tickets"
      className="relative overflow-hidden bg-ink-light px-6 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/40 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
          Save the Date
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
          One Night. Every Indulgence.
        </h2>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {DETAILS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-cream/5 px-4 py-6 text-center ring-1 ring-cream/10"
            >
              <Icon className="h-6 w-6 text-gold-light" aria-hidden="true" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-cream/50">
                {label}
              </span>
              <span className="font-display text-base font-semibold text-cream">
                {value}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://tastecle.com/events/cheese-wine-chocolate-fest-cleveland-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-9 font-display text-lg font-semibold text-ink shadow-lg shadow-gold/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
        >
          <Ticket className="h-5 w-5" aria-hidden="true" />
          Get Your Tickets
        </a>
        <p className="mt-4 font-sans text-xs text-cream/40">
          Tickets on sale soon — check back for pricing &amp; VIP options.
        </p>
      </div>
    </section>
  );
}
