import { 
  Handshake, 
  Building2, 
  Network, 
  TrendingUp, 
  Shield, 
  Clock, 
  Euro, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Award,
  HeartHandshake,
  FileText,
  Briefcase,
  Send,
  CalendarClock,
  Star,
  Quote,
  Sparkles,
  Users,
  HeartPulse,
  Stethoscope,
  Hospital
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CounterCard } from "@/components/CounterCard";
import { ContactFormCTA } from "@/components/ContactFormCTA";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mehr Vermittlungen",
    description: "Erhalten Sie Zugang zu einem stetig wachsenden Netzwerk von Patienten und Einrichtungen.",
    stat: "+45%",
    statLabel: "mehr Buchungen",
  },
  {
    icon: Euro,
    title: "Kosteneinsparung",
    description: "Optimieren Sie Ihre Transportkosten durch effiziente digitale Prozesse.",
    stat: "-30%",
    statLabel: "Kostenreduktion",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Reduzieren Sie den Verwaltungsaufwand durch automatisierte Buchungen und zentrale Abrechnung.",
    stat: "5h",
    statLabel: "gespart pro Woche",
  },
  {
    icon: Shield,
    title: "Qualitätsgarantie",
    description: "Alle Partner sind geprüft und zertifiziert. Höchste Standards für Ihre Patienten.",
    stat: "100%",
    statLabel: "geprüfte Partner",
  },
];

const features = [
  {
    icon: Hospital,
    title: "Krankenhäuser",
    description: "Optimieren Sie die Patientenlogistik mit digitaler Transportkoordination.",
  },
  {
    icon: HeartPulse,
    title: "Pflegeeinrichtungen",
    description: "Vereinfachen Sie den Transport Ihrer Bewohner zu Arztterminen.",
  },
  {
    icon: Stethoscope,
    title: "Arztpraxen & MVZ",
    description: "Bieten Sie Ihren Patienten einen komfortablen Transportservice.",
  },
  {
    icon: Building2,
    title: "Krankenkassen",
    description: "Digitalisieren Sie das Fahrtenkostenmanagement effizient.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Planung",
    description: "Buchen Sie Transporte spontan oder im Voraus – 24/7 verfügbar.",
  },
  {
    icon: HeartHandshake,
    title: "Persönlicher Support",
    description: "Ihr dedizierter Ansprechpartner für alle Fragen und Anliegen.",
  },
  {
    icon: Network,
    title: "Großes Netzwerk",
    description: "Zugang zu über 850 geprüften Transportdienstleistern bundesweit.",
    highlight: true,
  },
];

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Wir analysieren Ihre Anforderungen und zeigen Ihnen die Möglichkeiten.",
  },
  {
    number: "02",
    title: "Konzeption",
    description: "Gemeinsam entwickeln wir eine maßgeschneiderte Lösung für Ihre Einrichtung.",
  },
  {
    number: "03",
    title: "Integration",
    description: "Unser Team bindet katew nahtlos in Ihre bestehenden Prozesse ein.",
  },
];

const testimonials = [
  {
    quote: "Die Integration von katew hat unsere Patientenlogistik revolutioniert. Weniger Aufwand, mehr Zufriedenheit.",
    author: "Dr. Anna Weber",
    role: "Klinikleitung",
    company: "Städtisches Klinikum",
    rating: 5,
    avatar: "AW",
  },
  {
    quote: "Endlich ein System, das funktioniert. Unsere Bewohner werden pünktlich und zuverlässig transportiert.",
    author: "Thomas Hartmann",
    role: "Einrichtungsleiter",
    company: "Seniorenresidenz am Park",
    rating: 5,
    avatar: "TH",
  },
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Verbinden Sie Ihre Einrichtung mit dem führenden Netzwerk für Krankenfahrten. Digitale Prozesse, höhere Qualität, weniger Aufwand.
            </p>
            
            {/* Pricing Highlight */}
            <div className="inline-flex items-center gap-4 bg-card border border-border/50 rounded-2xl px-8 py-4 mb-10 shadow-lg">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">0€</div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Einrichtungskosten</div>
                <div className="font-semibold text-foreground">Kostenlose Integration</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-secondary/25">
                Partnerschaft anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Benefits Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background with mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm border border-secondary/20 text-secondary text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Was haben Sie zu gewinnen?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ihre <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">Vorteile</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie alle Vorteile einer Partnerschaft mit katew
            </p>
          </div>

          {/* Main Stats - Floating Cards */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const delays = ['0ms', '100ms', '200ms', '300ms'];
                return (
                  <CounterCard
                    key={index}
                    icon={benefit.icon}
                    stat={benefit.stat}
                    statLabel={benefit.statLabel}
                    title={benefit.title}
                    description={benefit.description}
                    delay={delays[index]}
                  />
                );
              })}
            </div>
          </div>

          {/* Features - Alternating Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {features.filter((_, i) => i % 2 === 0).map((feature, index) => {
                  const Icon = feature.icon;
                  const isHighlight = 'highlight' in feature && feature.highlight;
                  return (
                    <div
                      key={index}
                      className={`group relative flex items-start gap-5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                        isHighlight 
                          ? 'bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/40 ring-2 ring-secondary/20' 
                          : 'bg-card/50 border-border/50 hover:border-secondary/40 hover:bg-card'
                      }`}
                    >
                      {isHighlight && (
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-secondary to-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          TOP
                        </div>
                      )}
                      <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                        isHighlight 
                          ? 'bg-gradient-to-br from-secondary to-primary' 
                          : 'bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 group-hover:border-secondary/50'
                      }`}>
                        <Icon className={`w-6 h-6 ${isHighlight ? 'text-primary-foreground' : 'text-secondary'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-1 transition-colors ${isHighlight ? 'text-secondary' : 'group-hover:text-secondary'}`}>{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                      <ArrowRight className={`w-5 h-5 shrink-0 self-center transition-all duration-300 ${
                        isHighlight ? 'text-secondary opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary'
                      }`} />
                    </div>
                  );
                })}
              </div>
              
              {/* Right Column - Offset */}
              <div className="space-y-6 md:mt-12">
                {features.filter((_, i) => i % 2 === 1).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative flex items-start gap-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:bg-card transition-all duration-300"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 shrink-0 self-center" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              In 3 Schritten starten
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              So werden Sie <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Partner</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-secondary to-primary" />
              
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary/25 relative z-10">
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

      {/* Testimonials - Redesigned */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Erfolgsgeschichten
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Das sagen unsere <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Erfahren Sie, wie andere Einrichtungen von katew profitieren
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <div className="relative">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm font-medium text-secondary">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section with Contact Form */}
      <ContactFormCTA variant="partners" />
      </div>
      <Footer />
    </>
  );
}