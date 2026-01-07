import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  MapPin, 
  Clock, 
  TrendingUp,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Menschen im Fokus",
    description: "Wir verbessern täglich das Leben tausender Patienten durch zuverlässige Krankenfahrten.",
  },
  {
    icon: Zap,
    title: "Innovation leben",
    description: "Wir digitalisieren eine traditionelle Branche und setzen neue Standards.",
  },
  {
    icon: Users,
    title: "Teamgeist",
    description: "Gemeinsam erreichen wir mehr. Offene Kommunikation und gegenseitige Unterstützung.",
  },
  {
    icon: TrendingUp,
    title: "Wachstum",
    description: "Persönliche Entwicklung und Karrierechancen in einem wachsenden Unternehmen.",
  },
];

const benefits = [
  { icon: Laptop, text: "Remote-First & flexible Arbeitszeiten" },
  { icon: Coffee, text: "Moderne Büros in Frankfurt" },
  { icon: GraduationCap, text: "Weiterbildungsbudget" },
  { icon: Heart, text: "Betriebliche Gesundheitsvorsorge" },
  { icon: Users, text: "Team-Events & Offsites" },
  { icon: Zap, text: "Neueste Technologien" },
];

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Frankfurt",
    type: "Vollzeit",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Frankfurt",
    type: "Vollzeit",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Frankfurt",
    type: "Vollzeit",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Frankfurt",
    type: "Vollzeit",
  },
];

export default function Karriere() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Werde Teil unseres Teams
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Gestalte die Zukunft
                </span>
                <br />
                <span className="text-foreground">der Krankenfahrten</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Bei katew revolutionieren wir den Krankentransport in Deutschland. 
                Arbeite mit uns an einer Plattform, die täglich Leben verbessert.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8">
                  Offene Stellen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8">
                  Initiativbewerbung
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Was uns antreibt und wie wir zusammenarbeiten
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-card rounded-2xl border border-border/50 p-8 text-center hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Was wir bieten
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Wir glauben, dass großartige Arbeit ein großartiges Umfeld braucht. 
                    Deshalb investieren wir in unser Team.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-card rounded-3xl border border-border/50 p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Standort Frankfurt</h3>
                        <p className="text-muted-foreground">Allerheiligentor 2-4, 60311</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Flexible Arbeitszeiten</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Laptop className="w-5 h-5 text-primary" />
                        <span>Remote-Option verfügbar</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Coffee className="w-5 h-5 text-primary" />
                        <span>Moderne Arbeitsumgebung</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Offene Stellen</h2>
                <p className="text-lg text-muted-foreground">
                  Finde deine perfekte Rolle bei katew
                </p>
              </div>
              
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                        Details ansehen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground mb-4">
                  Keine passende Stelle gefunden?
                </p>
                <Link to="/kontakt">
                  <Button variant="outline" size="lg" className="rounded-xl">
                    Initiativbewerbung senden
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Werde Teil eines Teams, das die Gesundheitslogistik in Deutschland neu definiert.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8">
                    Jetzt bewerben
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Fragen? Schreib uns an{" "}
                <a href="mailto:support@katew.de" className="text-primary hover:underline">
                  support@katew.de
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
