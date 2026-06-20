import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Method from "@/components/Method";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import SchedulePricing from "@/components/SchedulePricing";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <Hero />
        <About />
        <Programs />
        <Method />
        <Benefits />
        <Stats />
        <SchedulePricing />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
