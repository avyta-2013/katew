import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PatientHero } from "@/components/patient/PatientHero";
import { PatientTrustSection } from "@/components/patient/PatientTrustSection";
import { PatientServicesSection } from "@/components/patient/PatientServicesSection";
import { PatientHowItWorks } from "@/components/patient/PatientHowItWorks";
import { PatientTestimonials } from "@/components/patient/PatientTestimonials";
import { PatientFAQ } from "@/components/patient/PatientFAQ";
import { PatientCTA } from "@/components/patient/PatientCTA";

const Startseite2 = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PatientHero />
      <PatientTrustSection />
      <PatientServicesSection />
      <PatientHowItWorks />
      <PatientTestimonials />
      <PatientFAQ />
      <PatientCTA />
      <Footer />
    </main>
  );
};

export default Startseite2;
