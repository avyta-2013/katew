import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Handshake, ArrowRight, Globe, Navigation, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GermanyMap } from "./GermanyMap";

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
  { name: "SaniTrans GmbH", city: "Leipzig", rating: 4.8, reviews: 145 },
  { name: "MediMove Express", city: "Dresden", rating: 4.7, reviews: 132 },
];

const regionaleUnternehmen = [
  { name: "Frankfurt Krankenfahrt", city: "Frankfurt", rating: 4.9, reviews: 89 },
  { name: "Main-Taunus Care", city: "Hofheim", rating: 4.8, reviews: 67 },
  { name: "Rhein-Main MediTaxi", city: "Offenbach", rating: 4.7, reviews: 54 },
  { name: "Hessen Mobil Plus", city: "Wiesbaden", rating: 4.9, reviews: 112 },
  { name: "Darmstadt Fahrservice", city: "Darmstadt", rating: 4.8, reviews: 78 },
  { name: "Wetterau Krankenfahrten", city: "Bad Nauheim", rating: 4.7, reviews: 45 },
  { name: "Taunus MediCare", city: "Bad Homburg", rating: 4.8, reviews: 56 },
  { name: "Hanau Transport Plus", city: "Hanau", rating: 4.6, reviews: 38 },
];

export const ProvidersSection = () => {
  const [viewMode, setViewMode] = useState<"deutschland" | "regional">("deutschland");
  const scrollRef = useRef<HTMLDivElement>(null);

  const companies = viewMode === "deutschland" ? deutschlandweiteUnternehmen : regionaleUnternehmen;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="anbieter" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center mb-20">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Für Anbieter
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Werden Sie Teil unseres Netzwerks
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Über 500 Krankenfahrt- und Pflegeeinrichtungen deutschlandweit 
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

              <Button asChild size="lg" className="h-12 px-6 rounded-xl font-semibold">
                <Link to="/anmelden?type=anbieter">
                  Jetzt ausprobieren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Right visual - Germany Network Map */}
            <div className="relative lg:col-span-1">
              <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-elevated overflow-hidden">
                {/* Interactive SVG Map - extended height */}
                <div className="relative h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
                  <GermanyMap />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Partner</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-primary">30+</p>
                    <p className="text-xs text-muted-foreground">Städte</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-primary">98%</p>
                    <p className="text-xs text-muted-foreground">Zufriedenheit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Slider */}
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Unsere Partner sind überall
                </h3>
              </div>
              
              {/* Toggle + Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode("deutschland")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      viewMode === "deutschland"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">Deutschlandweit</span>
                  </button>
                  <button
                    onClick={() => setViewMode("regional")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      viewMode === "regional"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Navigation className="w-4 h-4" />
                    <span className="hidden sm:inline">Regional</span>
                  </button>
                </div>
                
                {/* Scroll buttons */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() => scroll("left")}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] snap-start bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{company.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {company.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {company.city}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      {company.reviews} Bewertungen
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 text-primary hover:text-primary">
                      Profil ansehen
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
