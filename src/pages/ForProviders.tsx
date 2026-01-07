import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Shield, 
  Clock, 
  Euro, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  BarChart3, 
  Smartphone,
  Zap,
  Award,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mehr Aufträge",
    description: "Erhalten Sie Zugang zu einem stetig wachsenden Netzwerk von Patienten und Einrichtungen. Profitieren Sie von unserer Reichweite.",
    stat: "+45%",
    statLabel: "mehr Buchungen",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Euro,
    title: "Höhere Einnahmen",
    description: "Optimieren Sie Ihre Auslastung und steigern Sie Ihren Umsatz durch effiziente Routenplanung und zusätzliche Aufträge.",
    stat: "+30%",
    statLabel: "Umsatzsteigerung",
    gradient: "from-secondary to-secondary/60",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Reduzieren Sie den Verwaltungsaufwand durch automatisierte Buchungen, digitale Dokumentation und zentrale Abrechnung.",
    stat: "5h",
    statLabel: "gespart pro Woche",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Alle Zahlungen sind garantiert. Wir übernehmen das Risiko und sorgen für pünktliche Auszahlungen.",
    stat: "100%",
    statLabel: "Zahlungssicherheit",
    gradient: "from-secondary to-primary",
  },
];

const features = [
  {
    icon: Calendar,
    title: "Intelligente Disposition",
    description: "Optimieren Sie Ihre Touren automatisch mit unserem KI-gestützten Dispositionssystem.",
  },
  {
    icon: Smartphone,
    title: "Mobile App für Fahrer",
    description: "Ihre Fahrer erhalten alle Informationen in Echtzeit auf ihr Smartphone.",
  },
  {
    icon: BarChart3,
    title: "Umfangreiche Statistiken",
    description: "Behalten Sie den Überblick mit detaillierten Auswertungen und Berichten.",
  },
  {
    icon: Building2,
    title: "Klinik-Anbindung",
    description: "Direkte Integration mit Krankenhäusern und Pflegeeinrichtungen.",
  },
  {
    icon: Zap,
    title: "Echtzeit-Updates",
    description: "Live-Tracking und sofortige Benachrichtigungen für alle Beteiligten.",
  },
  {
    icon: HeartHandshake,
    title: "Persönlicher Support",
    description: "Unser Team steht Ihnen bei allen Fragen zur Seite – 7 Tage die Woche.",
  },
];

const steps = [
  {
    number: "01",
    title: "Registrierung",
    description: "Füllen Sie das Anmeldeformular aus und laden Sie Ihre Unterlagen hoch.",
  },
  {
    number: "02",
    title: "Verifizierung",
    description: "Wir prüfen Ihre Dokumente und schalten Sie innerhalb von 24-48 Stunden frei.",
  },
  {
    number: "03",
    title: "Start",
    description: "Beginnen Sie sofort, Aufträge anzunehmen und Ihr Geschäft auszubauen.",
  },
];

const testimonials = [
  {
    quote: "Seit wir katew nutzen, haben wir unsere Auslastung um 40% gesteigert. Die Plattform ist ein echter Gamechanger.",
    author: "Michael Schneider",
    role: "Geschäftsführer",
    company: "MedTrans Berlin GmbH",
  },
  {
    quote: "Die Integration war einfach und der Support ist hervorragend. Wir können katew jedem Transportdienst empfehlen.",
    author: "Sandra Müller",
    role: "Dispositionsleiterin",
    company: "Sanitäts-Dienst Hamburg",
  },
];

export default function ForProviders() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Award className="w-4 h-4" />
              Werden Sie Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Wachsen Sie mit uns
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Schließen Sie sich dem größten Netzwerk für Krankenfahrten in Deutschland an und profitieren Sie von mehr Aufträgen, höheren Einnahmen und weniger Verwaltung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25">
                Jetzt Partner werden
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "850+", label: "Partner bundesweit" },
              { value: "2.5M+", label: "Fahrten pro Jahr" },
              { value: "98%", label: "Zufriedenheit" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ihre Vorteile
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Warum Partner <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">werden?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie die Vorteile einer Partnerschaft mit katew
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative flex gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                          {benefit.stat}
                        </span>
                        <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Alles was Sie <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">brauchen</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unsere Plattform bietet Ihnen alle Tools für erfolgreiches Wachstum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              In 3 Schritten starten
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              So werden Sie <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partner</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
              
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 relative z-10">
                    <span className="text-3xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Das sagen unsere <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partner</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 left-6 text-8xl text-primary/10 font-serif">"</div>
                <div className="relative">
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white/30 rounded-full" />
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white/30 rounded-full" />
            </div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Bereit durchzustarten?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Werden Sie noch heute Teil unseres Netzwerks und profitieren Sie von mehr Aufträgen und weniger Aufwand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-lg">
                  Jetzt registrieren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2 border-white/30 text-primary-foreground hover:bg-white/10">
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}