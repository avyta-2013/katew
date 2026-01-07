import { Button } from "@/components/ui/button";
import { Calendar, Shield, Eye, ArrowRight, User, Building } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Calendar,
    title: "Einfache Buchung",
    description: "Online anfragen, Angebote vergleichen, direkt buchen – alles an einem Ort.",
  },
  {
    icon: Shield,
    title: "Verlässliche Anbieter",
    description: "Alle Partner sind zertifiziert und erfüllen höchste Qualitätsstandards.",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Klare Preise, nachvollziehbare Abläufe und Echtzeit-Updates.",
  },
];

export const PartnersSection = () => {
  return (
    <section id="partner" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <div className="order-2 lg:order-1 relative">
              <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-elevated">
                {/* Partner types */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Privatpersonen</p>
                      <p className="text-sm text-muted-foreground">Patienten & Angehörige</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Einrichtungen</p>
                      <p className="text-sm text-muted-foreground">Kliniken, Pflegeheime, Praxen</p>
                    </div>
                  </div>
                </div>

                {/* Quick booking preview */}
                <div className="border-t border-border/50 pt-6">
                  <p className="text-sm font-medium mb-4">Schnellbuchung</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div className="flex-1 h-3 bg-muted rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="flex-1 h-3 bg-muted rounded-full w-3/4" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      <div className="flex-1 h-3 bg-muted rounded-full w-1/2" />
                    </div>
                  </div>
                  <Button className="w-full mt-4 h-10 rounded-xl" variant="outline">
                    Fahrt anfragen
                  </Button>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Für Partner
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Krankenfahrt buchen leicht gemacht
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ob Privatperson oder Einrichtung – katew verbindet Sie mit 
                qualifizierten Transportunternehmen in Ihrer Region.
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pricing hint */}
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-medium text-foreground">Kostenlos starten:</span> Die Nutzung 
                unserer Plattform ist für Partner unverbindlich und kostenfrei.
              </p>

              <Button asChild size="lg" className="h-12 px-6 rounded-xl font-semibold bg-secondary hover:bg-secondary/90">
                <Link to="/anmelden?type=partner">
                  Jetzt ausprobieren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
