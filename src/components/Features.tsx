import { Eye, Clock, Shield, Euro, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  { icon: Eye, title: "Volle Transparenz", description: "Echtzeit-Übersicht aller verfügbaren Fahrzeuge und transparente Preisgestaltung." },
  { icon: Clock, title: "Zeitersparnis", description: "Automatisierte Prozesse reduzieren den Aufwand um bis zu 80%." },
  { icon: Shield, title: "Maximale Sicherheit", description: "Geprüfte Unternehmen mit aktuellen Zertifizierungen." },
  { icon: Euro, title: "Kostenoptimierung", description: "Intelligente Algorithmen für beste Preis-Leistung." },
];

const tabs = ["Kundenportal", "KPI Tracking", "Automatisierung", "Team Management"];

export const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Entwickelt für höchste Leistung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              KATEW bietet Ihrem Team alles, um Transporte effizient zu organisieren, Leistung zu verfolgen und mit Zuversicht zu skalieren.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  idx === 0 
                    ? 'bg-foreground text-background' 
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Feature Card */}
          <div className="bg-card rounded-3xl shadow-elevated border border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Image/Preview */}
              <div className="bg-muted/30 p-8 flex items-center justify-center min-h-[400px]">
                <div className="bg-card rounded-2xl shadow-card p-6 max-w-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full" />
                    <div>
                      <p className="font-medium">Kundenportal</p>
                      <p className="text-sm text-muted-foreground">Zentraler Zugang</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Teilen Sie Fortschritte, Dateien und Zeitpläne sicher mit allen Beteiligten.
                  </p>
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-sm font-medium text-muted-foreground mb-3">Kundenportal</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Zentraler Zugang für Teams und Kunden
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Teilen Sie Fortschritte, Dateien, Feedback und Zeitpläne sicher mit allen Beteiligten. Halten Sie alle auf dem gleichen Stand ohne Plattformwechsel.
                </p>
                <Button variant="outline" className="rounded-full w-fit">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-card hover:border-border transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};