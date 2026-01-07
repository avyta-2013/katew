import { Button } from "@/components/ui/button";
import { MapPin, Zap, TrendingUp, Handshake, ArrowRight, Globe, Navigation, Star } from "lucide-react";
import { useState } from "react";

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

const deutschlandweiteUnternehmen = [
  { name: "MediTrans Deutschland", city: "Berlin", rating: 4.9, reviews: 234 },
  { name: "Bundesweiter Krankenfahrdienst", city: "Hamburg", rating: 4.8, reviews: 189 },
  { name: "CareMobil Pro", city: "München", rating: 4.9, reviews: 312 },
  { name: "TransMed Services", city: "Frankfurt", rating: 4.7, reviews: 156 },
  { name: "AllCare Transport", city: "Köln", rating: 4.8, reviews: 201 },
  { name: "NationCare Fahrten", city: "Stuttgart", rating: 4.9, reviews: 178 },
];

const regionaleUnternehmen = [
  { name: "Frankfurt Krankenfahrt", city: "Frankfurt", rating: 4.9, reviews: 89 },
  { name: "Main-Taunus Care", city: "Hofheim", rating: 4.8, reviews: 67 },
  { name: "Rhein-Main MediTaxi", city: "Offenbach", rating: 4.7, reviews: 54 },
  { name: "Hessen Mobil Plus", city: "Wiesbaden", rating: 4.9, reviews: 112 },
  { name: "Darmstadt Fahrservice", city: "Darmstadt", rating: 4.8, reviews: 78 },
  { name: "Wetterau Krankenfahrten", city: "Bad Nauheim", rating: 4.7, reviews: 45 },
];

export const ProvidersSection = () => {
  const [viewMode, setViewMode] = useState<"deutschland" | "regional">("deutschland");

  const companies = viewMode === "deutschland" ? deutschlandweiteUnternehmen : regionaleUnternehmen;

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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Werden Sie Teil unseres Netzwerks
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Über 500 Krankenfahrt- und Pflegeunternehmen deutschlandweit 
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

            {/* Right visual - Company showcase */}
            <div className="relative">
              <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-elevated">
                {/* Toggle */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => setViewMode("deutschland")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      viewMode === "deutschland"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Deutschlandweit
                  </button>
                  <button
                    onClick={() => setViewMode("regional")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      viewMode === "regional"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Navigation className="w-4 h-4" />
                    Regional
                  </button>
                </div>

                {/* Companies list */}
                <div className="space-y-3 mb-6">
                  {companies.slice(0, 4).map((company, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{company.rating}</span>
                        <span className="text-muted-foreground">({company.reviews})</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Aktive Partner</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-secondary">98%</p>
                    <p className="text-sm text-muted-foreground">Zufriedenheit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
