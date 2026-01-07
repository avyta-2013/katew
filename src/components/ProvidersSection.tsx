import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Handshake, ArrowRight, Globe, Navigation, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

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

// German cities with coordinates for the network map (more accurate positions)
const networkCities = [
  { name: "Berlin", x: 72, y: 28, size: 3 },
  { name: "Hamburg", x: 54, y: 18, size: 2.5 },
  { name: "München", x: 62, y: 82, size: 2.5 },
  { name: "Köln", x: 36, y: 45, size: 2 },
  { name: "Frankfurt", x: 46, y: 52, size: 2.5 },
  { name: "Stuttgart", x: 50, y: 70, size: 2 },
  { name: "Düsseldorf", x: 35, y: 42, size: 2 },
  { name: "Leipzig", x: 66, y: 38, size: 2 },
  { name: "Dresden", x: 74, y: 42, size: 2 },
  { name: "Hannover", x: 52, y: 30, size: 2 },
  { name: "Nürnberg", x: 58, y: 62, size: 2 },
  { name: "Bremen", x: 48, y: 22, size: 1.5 },
  { name: "Dortmund", x: 38, y: 40, size: 1.5 },
  { name: "Essen", x: 36, y: 40, size: 1.5 },
  { name: "Mannheim", x: 46, y: 60, size: 1.5 },
  { name: "Freiburg", x: 42, y: 78, size: 1.5 },
  { name: "Kiel", x: 54, y: 12, size: 1.5 },
  { name: "Rostock", x: 64, y: 14, size: 1.5 },
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

// Germany outline path (simplified but accurate)
const germanyPath = `
  M 54 8 
  L 58 10 L 64 12 L 68 14 L 74 16 L 78 20 
  L 80 26 L 78 32 L 76 38 L 78 44 
  L 76 50 L 72 56 L 68 62 L 66 68 
  L 64 74 L 62 80 L 58 86 L 54 88 
  L 50 86 L 46 82 L 44 78 L 40 74 
  L 36 70 L 34 64 L 32 58 L 30 52 
  L 28 46 L 30 40 L 34 36 L 38 32 
  L 42 26 L 46 20 L 50 14 L 54 8
`;

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
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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

            {/* Right visual - Germany Network Map */}
            <div className="relative">
              <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-elevated overflow-hidden">
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-lg mb-2">Unser Netzwerk</h3>
                  <p className="text-sm text-muted-foreground">Deutschlandweit vertreten</p>
                </div>
                
                {/* SVG Map of Germany with network points */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
                  {/* Decorative background elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                  </div>
                  
                  <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                    {/* Grid pattern */}
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.1" opacity="0.5" />
                      </pattern>
                      <linearGradient id="germanyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.15" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <rect width="100" height="100" fill="url(#grid)" />
                    
                    {/* Germany shape */}
                    <path
                      d={germanyPath}
                      fill="url(#germanyGradient)"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      strokeOpacity="0.5"
                    />
                    
                    {/* Connection lines with gradient */}
                    {networkCities.slice(0, 8).map((city, i) => 
                      networkCities.slice(i + 1, 8).map((otherCity, j) => {
                        const distance = Math.sqrt(
                          Math.pow(city.x - otherCity.x, 2) + Math.pow(city.y - otherCity.y, 2)
                        );
                        if (distance < 25) {
                          return (
                            <line
                              key={`${i}-${j}`}
                              x1={city.x}
                              y1={city.y}
                              x2={otherCity.x}
                              y2={otherCity.y}
                              stroke="hsl(var(--primary))"
                              strokeWidth="0.3"
                              strokeOpacity="0.3"
                              strokeDasharray="2,1"
                            />
                          );
                        }
                        return null;
                      })
                    )}
                    
                    {/* City points with glow effect */}
                    {networkCities.map((city, index) => (
                      <g key={index} filter="url(#glow)">
                        {/* Outer glow */}
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={city.size + 2}
                          fill="hsl(var(--primary))"
                          opacity="0.2"
                          className="animate-pulse"
                          style={{ animationDelay: `${index * 0.15}s`, animationDuration: "2s" }}
                        />
                        {/* Inner solid dot */}
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={city.size}
                          fill="hsl(var(--primary))"
                        />
                        {/* White center */}
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={city.size * 0.4}
                          fill="white"
                        />
                      </g>
                    ))}
                    
                    {/* City labels for major cities */}
                    {networkCities.slice(0, 6).map((city, index) => (
                      <text
                        key={`label-${index}`}
                        x={city.x}
                        y={city.y - city.size - 3}
                        textAnchor="middle"
                        className="fill-foreground font-medium"
                        style={{ fontSize: "3px" }}
                      >
                        {city.name}
                      </text>
                    ))}
                  </svg>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Partner</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-secondary">16</p>
                    <p className="text-xs text-muted-foreground">Bundesländer</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-muted-foreground">Erreichbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Rated Providers Slider */}
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Bestbewertete Anbieter
                </h3>
                <p className="text-muted-foreground">
                  {viewMode === "deutschland" 
                    ? "Top-Partner aus ganz Deutschland" 
                    : "Top-Partner aus Ihrer Region"}
                </p>
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
