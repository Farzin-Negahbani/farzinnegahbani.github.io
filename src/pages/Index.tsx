import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { TeachingSection } from "@/components/TeachingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ResearchSection />
        <PublicationsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
