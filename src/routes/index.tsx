import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import NewsSection from "@/components/NewsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPlansSection from "@/components/AboutPlansSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Simplificateurs Financiers — Assurance internationale de confiance" },
      { name: "description", content: "Assurance santé internationale sur mesure pour les particuliers, familles et entreprises. Couverture dans plus de 200 pays avec un support 24h/24." },
      { property: "og:title", content: "Simplificateurs Financiers — Assurance internationale de confiance" },
      { property: "og:description", content: "Assurance santé internationale sur mesure pour les particuliers, familles et entreprises." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <NewsSection />
        <ServicesSection />
        <AboutPlansSection />
        <WhoWeHelpSection />
        <WhyChooseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
