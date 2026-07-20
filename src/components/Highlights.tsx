import Image from "next/image";
import { Wine, Music, Pizza } from "lucide-react";
import { CheeseIcon, ChocolateIcon } from "./icons";

const HIGHLIGHTS = [
  {
    image: "/cards/card-wine.jpg",
    icon: Wine,
    title: "50+ Wines",
    description:
      "Sip your way through reds, whites & rosés from top wineries and local favorites.",
  },
  {
    image: "/cards/card-cheese.jpg",
    icon: CheeseIcon,
    title: "50+ Cheeses",
    description:
      "From sharp cheddars to creamy brie — a cheese board bigger than you can imagine.",
  },
  {
    image: "/cards/card-chocolate.jpg",
    icon: ChocolateIcon,
    title: "Chocolate Vendors",
    description:
      "Handcrafted truffles, dipped treats, and decadent bites from local chocolatiers.",
  },
  {
    image: "/cards/card-pizza.jpg",
    icon: Pizza,
    title: "Pizza & Snacks",
    description:
      "Wood-fired slices and festival bites to keep you fueled between pours.",
  },
  {
    image: "/cards/card-music.jpg",
    icon: Music,
    title: "Live Music",
    description:
      "Local bands set the soundtrack all night long while you eat, drink & mingle.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-cream px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-wine">
            What&apos;s Included
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Everything You Can Eat &amp; Drink, One Ticket
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {HIGHLIGHTS.map(({ image, icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-ink/10 bg-white/70 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-wine/10"
            >
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                </div>
                <span className="absolute -bottom-5 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-wine text-gold-light shadow-md ring-4 ring-cream transition-colors duration-200 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="p-6 pt-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
