import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Ecosystem from "@/components/Ecosystem";
import VeraSection from "@/components/VeraSection";
import Studio from "@/components/Studio";
import Music from "@/components/Music";
import Merch from "@/components/Merch";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import VeraChat from "@/components/VeraChat";
import PwaInstall from "@/components/PwaInstall";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <Ecosystem />
        <VeraSection />
        <Studio />
        <Music />
        <Merch />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <VeraChat />
      <PwaInstall />
    </>
  );
}
