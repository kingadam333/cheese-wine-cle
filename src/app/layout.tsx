import type { Metadata } from "next";
import { Fredoka, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://cheesewinechocolatefestcleveland.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cheese, Wine & Chocolate Fest | Cleveland",
  description:
    "50+ wines, 50+ cheeses, chocolate vendors, pizza & snacks, and live music — all in one night in Cleveland, Ohio. Grab your tickets to the ultimate foodie festival.",
  openGraph: {
    title: "Cheese, Wine & Chocolate Fest | Cleveland",
    description:
      "50+ wines, 50+ cheeses, chocolate vendors, pizza & snacks, and live music — all in one night in Cleveland, Ohio.",
    url: siteUrl,
    siteName: "Cheese, Wine & Chocolate Fest",
    images: [{ url: "/og-image.jpg", width: 1200, height: 675 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheese, Wine & Chocolate Fest | Cleveland",
    description:
      "50+ wines, 50+ cheeses, chocolate vendors, pizza & snacks, and live music — all in one night in Cleveland, Ohio.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
