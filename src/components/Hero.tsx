import Image from "next/image";
import { CalendarDays, Clock, MapPin, Ticket, ChevronDown } from "lucide-react";
import Marquee from "./Marquee";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-14 pt-16 text-center sm:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
          Unlimited Cheese &amp; Unlimited Wine Samples
        </span>

        <div className="relative mt-8 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]">
          <Image
            src="/logo.png"
            alt="Cheese, Wine & Chocolate Fest, Cleveland"
            fill
            priority
            unoptimized
            className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
          />
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          A Day of{" "}
          <span className="text-wine-light">Wine</span>,{" "}
          <span className="text-gold-light">Cheese</span> &amp;{" "}
          <span className="font-script text-5xl font-bold text-chocolate-light text-outline-caramel sm:text-6xl md:text-7xl">
            Chocolate
          </span>
        </h1>

        <p className="mt-5 max-w-xl font-sans text-base text-tan sm:text-lg">
          Over 50 wines, 50 cheeses, chocolate vendors, pizza &amp; snacks, and
          live music — all in one unforgettable night in Cleveland.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-light px-4 py-2 font-sans text-sm font-semibold text-cream ring-1 ring-cream/15">
            <CalendarDays className="h-4 w-4 text-gold-light" aria-hidden="true" />
            Saturday, October 31, 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-light px-4 py-2 font-sans text-sm font-semibold text-cream ring-1 ring-cream/15">
            <Clock className="h-4 w-4 text-gold-light" aria-hidden="true" />
            7:00 PM – 11:00 PM
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-light px-4 py-2 font-sans text-sm font-semibold text-cream ring-1 ring-cream/15">
            <MapPin className="h-4 w-4 text-gold-light" aria-hidden="true" />
            Cleveland, Ohio
          </span>
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://tastecle.com/events/cheese-wine-chocolate-fest-cleveland-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-8 font-display text-lg font-semibold text-ink shadow-lg shadow-gold/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
          >
            <Ticket className="h-5 w-5" aria-hidden="true" />
            Get Tickets
          </a>
          <a
            href="#highlights"
            className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-cream/30 px-8 font-display text-lg font-semibold text-cream transition-colors duration-200 hover:border-cream/60 hover:bg-cream/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream/60"
          >
            See What&apos;s Included
          </a>
        </div>

        <a
          href="#highlights"
          className="mt-12 inline-flex cursor-pointer flex-col items-center gap-1 text-cream/50 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
          aria-label="Scroll to festival highlights"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
        </a>
      </div>

      <Marquee />
    </section>
  );
}
