import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import { CombinedServicesSection } from "@/components/CombinedServicesSection";
import { ProvidersSection } from "@/components/ProvidersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { HomePartnersSection } from "@/components/HomePartnersSection";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <CombinedServicesSection />
      <HomePartnersSection />
      <ProvidersSection />
      <PartnersSection />
      <BlogNewsletter />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
