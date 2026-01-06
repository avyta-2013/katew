import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TransportTypes } from "@/components/TransportTypes";
import { BookingOptions } from "@/components/BookingOptions";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { MobileApp } from "@/components/MobileApp";
import { FAQ } from "@/components/FAQ";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <TransportTypes />
      <BookingOptions />
      <TrustedCompanies />
      <MobileApp />
      <FAQ />
      <Partners />
      <Footer />
    </main>
  );
};

export default Index;
