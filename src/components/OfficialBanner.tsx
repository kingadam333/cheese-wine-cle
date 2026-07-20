"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function OfficialBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #1a0a14 0%, #2b1220 20%, #3a2214 40%, #2b1220 60%, #1a0a14 100%)",
        borderBottom: "1px solid rgba(240,170,0,0.25)",
      }}
    >
      {/* animated gold shimmer sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,201,77,0.08), rgba(255,201,77,0.16), rgba(255,201,77,0.08), transparent)",
          width: "40%",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5">
        <div
          className="hidden h-px max-w-[80px] flex-1 sm:block"
          style={{ background: "linear-gradient(to right, transparent, rgba(240,170,0,0.4))" }}
        />

        <div
          className="h-1.5 w-1.5 flex-shrink-0 rotate-45"
          style={{ background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))" }}
        />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="whitespace-nowrap font-sans text-xs font-bold uppercase tracking-[0.25em] text-tan/70">
            Official Chocolate
          </span>

          <motion.span
            className="text-shimmer-gold font-display text-lg leading-none sm:text-xl"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Malley&apos;s Chocolates
          </motion.span>

          <span className="whitespace-nowrap rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-sans text-xs font-bold uppercase tracking-widest text-gold-light">
            Official Sponsor
          </span>
        </div>

        <div
          className="h-1.5 w-1.5 flex-shrink-0 rotate-45"
          style={{ background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))" }}
        />

        <div
          className="hidden h-px max-w-[80px] flex-1 sm:block"
          style={{ background: "linear-gradient(to left, transparent, rgba(240,170,0,0.4))" }}
        />

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-cream/30 transition-colors duration-200 hover:text-cream/70"
          aria-label="Dismiss banner"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
