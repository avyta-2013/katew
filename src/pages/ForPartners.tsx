import { 
  Handshake, 
  Building2, 
  Network, 
  Shield, 
  Clock, 
  Euro, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Award,
  HeartHandshake,
  CalendarClock,
  Star,
  Quote,
  Sparkles,
  Users,
  HeartPulse,
  Stethoscope,
  Hospital,
  Globe,
  Smartphone,
  Settings,
  Gift,
  Crown,
  Check,
  BadgeCheck,
  Infinity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactFormCTA } from "@/components/ContactFormCTA";
import { PartnersLogoSlider } from "@/components/PartnersLogoSlider";

// Pricing features for the membership
const pricingFeatures = [
  {
    icon: Network,
    title: "Alle Anbieter auf einen Blick",
    description: "Zugang zu sämtlichen regionalen Krankenfahrt-Unternehmen über eine zentrale Plattform.",
  },
  {
    icon: Euro,
    title: "Transparenter Kostenvergleich",
    description: "Vergleichen Sie Preise verschiedener Anbieter und sparen Sie bei jeder Buchung.",
  },
  {
    icon: Clock,
    title: "Schnelle Buchung",
    description: "Buchen Sie Transporte in Minuten statt Stunden – mit automatischer Bestätigung.",
  },
  {
    icon: Shield,
    title: "Geprüfte Qualität",
    description: "Jeder Anbieter wird verifiziert. Bewertungen und Erfahrungsberichte für Ihre Sicherheit.",
  },
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

const partnerMethods = [
  {
    icon: Globe,
    title: "WebApp nutzen",
    description: "Die einfachste Art zu starten – direkt im Browser",
    color: "from-blue-500 to-cyan-500",
    steps: [
      { number: "01", title: "Registrieren", description: "Kostenloses Konto in wenigen Minuten erstellen" },
      { number: "02", title: "Daten hinterlegen", description: "Einrichtungsdaten und Ansprechpartner angeben" },
      { number: "03", title: "Buchungen anfragen", description: "Sofort Krankenfahrten buchen und verwalten" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App nutzen",
    description: "Flexibel unterwegs buchen – für iOS und Android",
    color: "from-purple-500 to-pink-500",
    steps: [
      { number: "01", title: "App herunterladen", description: "Im App Store oder Google Play verfügbar" },
      { number: "02", title: "Profil einrichten", description: "Einrichtungsdaten und Präferenzen speichern" },
      { number: "03", title: "Mobil buchen", description: "Jederzeit und überall Transporte organisieren" },
    ],
  },
  {
    icon: Settings,
    title: "Systemintegration",
    description: "Nahtlose Anbindung an Ihre bestehenden Systeme",
    color: "from-orange-500 to-red-500",
    highlight: true,
    steps: [
      { number: "01", title: "Erstgespräch", description: "Wir analysieren Ihre Anforderungen" },
      { number: "02", title: "Konzeption", description: "Maßgeschneiderte Integrationslösung entwickeln" },
      { number: "03", title: "Integration", description: "Nahtlose Einbindung in Ihre Prozesse" },
    ],
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
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-secondary/25">
                Partnerschaft anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Pricing Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
        
        {/* Animated floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-emerald-500/40 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-secondary/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6">
              <Gift className="w-4 h-4" />
              100% Kostenlos für Partner
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ihre <span className="bg-gradient-to-r from-emerald-500 via-secondary to-primary bg-clip-text text-transparent">kostenlose Mitgliedschaft</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Als Partner genießen Sie alle Vorteile komplett kostenfrei – für Einrichtungen und Privatpersonen
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-secondary/20 to-primary/20 rounded-[3rem] blur-2xl opacity-60" />
              
              <div className="relative bg-card/80 backdrop-blur-xl border-2 border-emerald-500/30 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Top Banner */}
                <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-secondary p-6 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                    <Crown className="w-6 h-6 text-white" />
                    <span className="text-white font-bold text-lg">Partner Mitgliedschaft</span>
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  {/* Pricing Display */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-emerald-500/20 rounded-full blur-xl" />
                        <div className="relative flex items-baseline gap-2">
                          <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">0</span>
                          <span className="text-4xl md:text-5xl font-bold text-emerald-500">€</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Infinity className="w-6 h-6 text-emerald-500" />
                      <span className="text-xl font-semibold text-muted-foreground">Für immer kostenlos</span>
                    </div>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      Keine versteckten Kosten, keine Abonnements – alle Funktionen komplett gratis für Sie als Partner
                    </p>
                  </div>

                  {/* Two Column Partner Types */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Einrichtungen */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                            <Hospital className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Für Einrichtungen</h3>
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">0€ / kostenlos</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Krankenhäuser, Pflegeeinrichtungen, Arztpraxen & Krankenkassen
                        </p>
                      </div>
                    </div>

                    {/* Privatpersonen */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-2xl p-6 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg shadow-secondary/25">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Für Privatpersonen</h3>
                            <p className="text-sm text-secondary font-medium">0€ / kostenlos</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Patienten, Angehörige & alle, die Krankenfahrten benötigen
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg px-10 py-7 h-auto shadow-xl shadow-emerald-500/30 group"
                      onClick={() => window.location.href = '/auth'}
                    >
                      <Gift className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      Jetzt kostenlos starten
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-border hover:border-secondary text-lg px-8 py-7 h-auto group"
                      onClick={() => window.location.href = '/kontakt'}
                    >
                      Beratung anfragen
                      <ArrowRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </div>

                  {/* All Features Grid */}
                  <div className="border-t border-border/50 pt-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm font-semibold mb-4">
                        <BadgeCheck className="w-4 h-4 text-emerald-500" />
                        Alles inklusive
                      </div>
                      <h3 className="text-2xl font-bold">Ihre Vorteile als Partner</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pricingFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        const isHighlight = feature.highlight;
                        return (
                          <div
                            key={index}
                            className={`group relative flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ${
                              isHighlight 
                                ? 'bg-gradient-to-br from-secondary/15 to-primary/15 border-2 border-secondary/40 ring-2 ring-secondary/10' 
                                : 'bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-secondary/30'
                            }`}
                          >
                            {isHighlight && (
                              <div className="absolute -top-2 right-4 px-2 py-0.5 bg-gradient-to-r from-secondary to-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                TOP
                              </div>
                            )}
                            <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                              isHighlight 
                                ? 'bg-gradient-to-br from-secondary to-primary' 
                                : 'bg-gradient-to-br from-emerald-500/20 to-secondary/20 border border-emerald-500/30'
                            }`}>
                              <Icon className={`w-5 h-5 ${isHighlight ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-semibold mb-1 transition-colors ${isHighlight ? 'text-secondary' : 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                                {feature.title}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">{feature.description}</p>
                            </div>
                            <Check className={`w-5 h-5 shrink-0 self-start mt-1 ${isHighlight ? 'text-secondary' : 'text-emerald-500'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="bg-gradient-to-r from-emerald-500/10 via-secondary/10 to-primary/10 border-t border-border/50 px-8 py-6">
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="font-medium">100% Kostenlos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-medium">Sofortiger Zugang</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <HeartHandshake className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Network className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="font-medium">850+ Anbieter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Slider */}
      <PartnersLogoSlider />

      {/* How to Join - 3 Methods */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              3 Wege zur Partnerschaft
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              So werden Sie <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie die Methode, die am besten zu Ihrer Einrichtung passt
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerMethods.map((method, methodIndex) => {
                const Icon = method.icon;
                const isHighlight = 'highlight' in method && method.highlight;
                return (
                  <div 
                    key={methodIndex}
                    className={`relative bg-card rounded-3xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                      isHighlight 
                        ? 'border-primary/40 ring-2 ring-primary/20 shadow-xl shadow-primary/10' 
                        : 'border-border/50 hover:border-primary/40'
                    }`}
                  >
                    {isHighlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        EMPFOHLEN
                      </div>
                    )}
                    
                    {/* Method Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    
                    {/* Steps */}
                    <div className="space-y-4">
                      {method.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="relative">
                          {stepIndex < method.steps.length - 1 && (
                            <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent" />
                          )}
                          <div className="flex gap-4">
                            <div className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                              {step.number}
                            </div>
                            <div className="flex-1 pt-1">
                              <h4 className="font-semibold mb-1">{step.title}</h4>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-8">
                      <Button 
                        className={`w-full ${
                          isHighlight 
                            ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                            : 'bg-card border border-border hover:border-primary hover:text-primary'
                        }`}
                        variant={isHighlight ? "default" : "outline"}
                      >
                        {isHighlight ? "Beratung anfragen" : "Jetzt starten"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
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