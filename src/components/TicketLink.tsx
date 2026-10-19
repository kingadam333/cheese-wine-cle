"use client";

import type { MouseEventHandler, ReactNode } from "react";

const TICKETS_BASE_URL =
  "https://tastecle.com/events/cheese-wine-chocolate-fest-cleveland-2026";

// Every outbound ticket click is tagged with a fixed utm_source/utm_medium
// identifying THIS site as the referring page, so TasteCLE can attribute
// sales back to cheesewinechocolatefestcleveland.com specifically (separate
// from which ad, if any, drove the visitor to this site in the first place).
const REFERRAL_SOURCE_PARAMS = {
  utm_source: "cheesewinechocolatefestcleveland",
  utm_medium: "referral",
  utm_campaign: "cwc_2026_site",
};

// Ad click IDs we forward to TasteCLE as-is, so their own Meta/Google pixels
// can still attribute the eventual purchase back to the original ad. See the
// cross-domain note in MetaPixel.tsx.
const AD_CLICK_ID_PARAMS = ["fbclid", "gclid"];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function buildOutgoingUrl() {
  const incoming = new URLSearchParams(window.location.search);
  const outgoing = new URL(TICKETS_BASE_URL);
  for (const [key, value] of Object.entries(REFERRAL_SOURCE_PARAMS)) {
    outgoing.searchParams.set(key, value);
  }
  for (const key of AD_CLICK_ID_PARAMS) {
    const value = incoming.get(key);
    if (value) outgoing.searchParams.set(key, value);
  }
  return outgoing.toString();
}

export default function TicketLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    window.fbq?.("track", "InitiateCheckout", {
      content_name: "Get Tickets",
      content_category: "Ticket Purchase",
    });

    e.preventDefault();
    window.open(buildOutgoingUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={TICKETS_BASE_URL}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
