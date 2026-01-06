import { Button } from "@/components/ui/button";
import { MapPin, Zap, TrendingUp, Handshake, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Handshake,
    title: "Starke Kooperationen",
    description: "Profitieren Sie von unseren Partnerschaften mit Kliniken und Einrichtungen.",
  },
  {
    icon: Zap,
    title: "Digitale Vermittlung",
    description: "Automatisierte Auftragsvergabe – weniger Aufwand, mehr Effizienz.",
  },
  {
    icon: TrendingUp,
    title: "Bessere Auslastung",
    description: "Mehr Aufträge, weniger Leerlauf – optimieren Sie Ihre Kapazitäten.",
  },
];

export const ProvidersSection = () => {
  return (
    <section id="anbieter" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Für Anbieter
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Werden Sie Teil unseres Netzwerks
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Über 500 Krankentransport- und Pflegeunternehmen deutschlandweit 
                vertrauen auf katew. Regional vernetzt, digital organisiert.
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
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
                <span className="font-medium text-foreground">Transparent & fair:</span> Keine Grundgebühr – 
                zahlen Sie nur bei erfolgreicher Vermittlung.
              </p>

              <Button size="lg" className="h-12 px-6 rounded-xl font-semibold">
                Jetzt ausprobieren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Deutschlandweit aktiv</p>
                    <p className="text-sm text-muted-foreground">Regionale Abdeckung</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Aktive Partner</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-secondary">98%</p>
                    <p className="text-sm text-muted-foreground">Zufriedenheit</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold">50K+</p>
                    <p className="text-sm text-muted-foreground">Fahrten/Monat</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm text-muted-foreground">Verfügbarkeit</p>
                  </div>
                </div>

                {/* Regions */}
                <div className="flex flex-wrap gap-2">
                  {["Hamburg", "Berlin", "München", "Köln", "Frankfurt", "+45"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
