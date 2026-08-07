import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import VIPSection from "@/components/VIPSection";
import Gallery from "@/components/Gallery";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";
import OfficialBanner from "@/components/OfficialBanner";

// Gallery order is shuffled per request — keep this page dynamic so
// visitors don't all see the same frozen build-time order.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <OfficialBanner />
      <Hero />
      <Highlights />
      <VIPSection />
      <Gallery />
      <EventDetails />
      <Footer />
    </div>
  );
}
