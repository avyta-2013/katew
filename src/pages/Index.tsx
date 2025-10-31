import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TransportTypes } from "@/components/TransportTypes";
import { BookingOptions } from "@/components/BookingOptions";
import { MobileApp } from "@/components/MobileApp";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <TransportTypes />
      <BookingOptions />
      <MobileApp />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
