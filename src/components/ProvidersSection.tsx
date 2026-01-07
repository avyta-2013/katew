import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Handshake, ArrowRight } from "lucide-react";

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

// German cities with coordinates for the network map
const networkCities = [
  { name: "Berlin", x: 78, y: 25 },
  { name: "Hamburg", x: 52, y: 18 },
  { name: "München", x: 65, y: 85 },
  { name: "Köln", x: 32, y: 45 },
  { name: "Frankfurt", x: 45, y: 52 },
  { name: "Stuttgart", x: 48, y: 72 },
  { name: "Düsseldorf", x: 33, y: 40 },
  { name: "Leipzig", x: 70, y: 38 },
  { name: "Dresden", x: 80, y: 42 },
  { name: "Hannover", x: 50, y: 30 },
  { name: "Nürnberg", x: 62, y: 62 },
  { name: "Bremen", x: 45, y: 20 },
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
              <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-elevated">
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-lg mb-2">Unser Netzwerk</h3>
                  <p className="text-sm text-muted-foreground">Deutschlandweit vertreten</p>
                </div>
                
                {/* SVG Map of Germany with network points */}
                <div className="relative aspect-[3/4] bg-gradient-to-b from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
                  {/* Germany outline simplified */}
                  <svg viewBox="0 0 100 120" className="w-full h-full">
                    {/* Germany shape - simplified path */}
                    <path
                      d="M45 5 L55 8 L65 12 L75 15 L82 22 L85 32 L88 45 L85 55 L82 65 L78 75 L72 85 L65 95 L58 105 L50 110 L42 105 L35 100 L28 90 L22 80 L18 70 L15 60 L18 50 L22 40 L28 30 L35 20 L45 5"
                      fill="hsl(var(--primary) / 0.1)"
                      stroke="hsl(var(--primary) / 0.3)"
                      strokeWidth="0.5"
                    />
                    
                    {/* Connection lines */}
                    {networkCities.map((city, i) => 
                      networkCities.slice(i + 1).map((otherCity, j) => (
                        <line
                          key={`${i}-${j}`}
                          x1={city.x}
                          y1={city.y}
                          x2={otherCity.x}
                          y2={otherCity.y}
                          stroke="hsl(var(--primary) / 0.15)"
                          strokeWidth="0.3"
                        />
                      ))
                    )}
                    
                    {/* City points */}
                    {networkCities.map((city, index) => (
                      <g key={index}>
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="2.5"
                          fill="hsl(var(--primary))"
                          className="animate-pulse"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        />
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="4"
                          fill="hsl(var(--primary) / 0.3)"
                        />
                        <text
                          x={city.x}
                          y={city.y - 5}
                          textAnchor="middle"
                          className="fill-foreground text-[3px] font-medium"
                        >
                          {city.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Aktive Partner</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-secondary">16</p>
                    <p className="text-sm text-muted-foreground">Bundesländer</p>
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
