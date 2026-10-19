"use client";

import type { MouseEventHandler, ReactNode } from "react";

const TICKETS_BASE_URL =
  "https://tastecle.com/events/cheese-wine-chocolate-fest-cleveland-2026";

// Ad click IDs and campaign tags we forward to TasteCLE so traffic can still
// be correlated in Ads Manager/Analytics even though the actual purchase
// happens on their domain, not ours. See the cross-domain note in MetaPixel.tsx.
const PASSTHROUGH_PARAMS = [
  "fbclid",
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function buildOutgoingUrl() {
  const incoming = new URLSearchParams(window.location.search);
  const outgoing = new URL(TICKETS_BASE_URL);
  for (const key of PASSTHROUGH_PARAMS) {
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

    const url = buildOutgoingUrl();
    if (url !== TICKETS_BASE_URL) {
      e.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    }
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
