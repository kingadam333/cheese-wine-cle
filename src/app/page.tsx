import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";
import OfficialBanner from "@/components/OfficialBanner";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <OfficialBanner />
      <Hero />
      <Highlights />
      <Gallery />
      <EventDetails />
      <Footer />
    </div>
  );
}
