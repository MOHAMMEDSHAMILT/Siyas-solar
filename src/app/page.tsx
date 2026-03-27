import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import VisitCard from "@/components/VisitCard";
import Footer from "@/components/Footer";

import MissionVision from "@/components/MissionVision";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <Hero />
      <MissionVision />
      <Features />
      <Products />
      <VisitCard />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
