import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesSection } from "@/components/ServicesSection";
import { ProvidersSection } from "@/components/ProvidersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <TrustIndicators />
      <ServicesSection />
      <ProvidersSection />
      <PartnersSection />
      <HowItWorks />
      <BlogNewsletter />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
