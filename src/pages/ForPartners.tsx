import { 
  Handshake, 
  Building2, 
  Network, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Users,
  HeartPulse,
  Stethoscope,
  Hospital,
  BadgeCheck,
  Clock,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const partnerTypes = [
  {
    icon: Hospital,
    title: "Krankenhäuser",
    description: "Optimieren Sie die Patientenlogistik mit digitaler Transportkoordination und Echtzeit-Tracking.",
    features: ["Direkte Integration", "Automatische Buchung", "Qualitätsmonitoring"],
    gradient: "from-primary to-primary/60",
  },
  {
    icon: HeartPulse,
    title: "Pflegeeinrichtungen",
    description: "Vereinfachen Sie den Transport Ihrer Bewohner zu Arztterminen und Therapiesitzungen.",
    features: ["Regelmäßige Transporte", "Flexible Planung", "Betreuungsservice"],
    gradient: "from-secondary to-secondary/60",
  },
  {
    icon: Stethoscope,
    title: "Arztpraxen & MVZ",
    description: "Bieten Sie Ihren Patienten einen komfortablen Transportservice direkt aus der Praxis.",
    features: ["Terminanbindung", "Patientenservice", "Einfache Abrechnung"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Building2,
    title: "Krankenkassen",
    description: "Digitalisieren Sie das Fahrtenkostenmanagement und reduzieren Sie Verwaltungsaufwand.",
    features: ["Digitale Abrechnung", "Kostenkontrolle", "Compliance"],
    gradient: "from-secondary to-primary",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Sofortige Integration",
    description: "Nahtlose Anbindung an Ihre bestehenden Systeme innerhalb weniger Tage.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Höchste Datenschutzstandards und sichere Datenverarbeitung in Deutschland.",
  },
  {
    icon: TrendingUp,
    title: "Messbare Ergebnisse",
    description: "Transparente KPIs und regelmäßige Reportings zu Qualität und Kosten.",
  },
  {
    icon: Users,
    title: "Dedizierter Support",
    description: "Persönlicher Ansprechpartner und schnelle Hilfe bei allen Fragen.",
  },
  {
    icon: Network,
    title: "Großes Netzwerk",
    description: "Zugang zu über 850 geprüften Transportdienstleistern bundesweit.",
  },
  {
    icon: Clock,
    title: "24/7 Verfügbarkeit",
    description: "Rund um die Uhr Transporte buchen – automatisch oder manuell.",
  },
];

const stats = [
  { value: "500+", label: "Einrichtungen" },
  { value: "40%", label: "Zeitersparnis" },
  { value: "99.5%", label: "Verfügbarkeit" },
  { value: "<2min", label: "Buchungszeit" },
];

const integrations = [
  "KIS-Systeme",
  "Praxisverwaltung",
  "Abrechnungssysteme",
  "Terminkalender",
  "ERP-Systeme",
  "Pflegesoftware",
];

export default function ForPartners() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8 animate-fade-in">
              <Handshake className="w-4 h-4" />
              Strategische Partnerschaft
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                Gemeinsam mehr erreichen
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Verbinden Sie Ihre Einrichtung mit dem führenden Netzwerk für Krankenfahrten. Digitale Prozesse, höhere Qualität, weniger Aufwand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-secondary/25">
                Partnerschaft anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
                Demo vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BadgeCheck className="w-4 h-4" />
              Für alle Bereiche
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Unsere <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partnerlösungen</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte Lösungen für Gesundheitseinrichtungen jeder Art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{type.description}</p>
                    
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-secondary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ihre Vorteile
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Warum <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">katew?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-secondary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Network className="w-4 h-4" />
                  Nahtlose Integration
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Verbinden Sie Ihre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">bestehenden Systeme</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unsere API und vorgefertigten Schnittstellen ermöglichen eine schnelle Integration in Ihre IT-Landschaft. Keine Doppelerfassung, keine Medienbrüche.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl" />
                  </div>
                  
                  {/* Central Icon */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                      <Network className="w-16 h-16 text-primary-foreground" />
                    </div>
                    
                    {/* Orbiting Icons */}
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-pulse">
                      <Hospital className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: "0.5s" }}>
                      <Stethoscope className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: "1s" }}>
                      <HeartPulse className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: "1.5s" }}>
                      <Building2 className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Der Weg zur <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partnerschaft</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Erstgespräch", description: "Wir analysieren Ihre Anforderungen und zeigen Ihnen die Möglichkeiten unserer Plattform." },
                { step: "02", title: "Konzeption", description: "Gemeinsam entwickeln wir eine maßgeschneiderte Lösung für Ihre Einrichtung." },
                { step: "03", title: "Integration", description: "Unser technisches Team bindet katew nahtlos in Ihre bestehenden Prozesse ein." },
                { step: "04", title: "Go-Live", description: "Nach Schulung Ihrer Mitarbeiter starten Sie mit voller Unterstützung durch." },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-secondary to-primary rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 border border-white/30 rounded-full" />
              <div className="absolute bottom-0 left-0 w-60 h-60 border border-white/30 rounded-full" />
            </div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Erfahren Sie in einem unverbindlichen Gespräch, wie katew Ihre Patientenlogistik optimieren kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto bg-white text-secondary hover:bg-white/90 shadow-lg">
                  Termin vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2 border-white/30 text-primary-foreground hover:bg-white/10">
                  info@katew.de
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}