import { 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  Euro, 
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
  Building2,
  Sparkles,
  Check,
  Gift,
  Rocket,
  Crown,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactFormCTA } from "@/components/ContactFormCTA";
import { PartnersLogoSlider } from "@/components/PartnersLogoSlider";

const pricingFeatures = [
  "Unbegrenzte Auftragsannahme",
  "Zugang zum gesamten Netzwerk",
  "Automatische Routenplanung",
  "Zentrale Abrechnung",
  "24/7 Kunden-Support",
  "Exklusive Mitgliedsvorteile",
  "Kooperationsverträge",
  "Pünktliche Auszahlungen",
];

const features = [
  {
    icon: FileText,
    title: "Transportschein",
    description: "Erhalte Buchungsanfragen via Transportschein direkt über die Plattform.",
  },
  {
    icon: Euro,
    title: "Selbstzahler",
    description: "Akzeptiere Buchungen von Selbstzahlern zu deinen eigenen Tarifen.",
  },
  {
    icon: Briefcase,
    title: "Ausschreibungen",
    description: "Biete mit bei bundesweiten lukrativen Ausschreibungen für Sonderfahrten.",
  },
  {
    icon: Building2,
    title: "Kooperationen",
    description: "Kostenträger, Pflege- und Gesundheitseinrichtungen vertrauen auf uns.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Arbeitszeiten",
    description: "Melde dich ab und genieße den Feierabend – du entscheidest, wann du fährst.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Kunden-Support",
    description: "Unser Team steht dir bei allen Fragen zur Seite – rund um die Uhr.",
  },
  {
    icon: Award,
    title: "Exklusive Mitgliedsvorteile",
    description: "Profitiere von Kooperationsverträgen mit Fahrzeugbauern, Verbrauchsmaterial-Lieferanten und mehr.",
    highlight: true,
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
    rating: 5,
    avatar: "MS",
  },
  {
    quote: "Die Integration war einfach und der Support ist hervorragend. Wir können katew jedem Transportdienst empfehlen.",
    author: "Sandra Müller",
    role: "Dispositionsleiterin",
    company: "Sanitäts-Dienst Hamburg",
    rating: 5,
    avatar: "SM",
  },
];

// Premium Features Showcase Component
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: boolean;
}

const FeaturesShowcase = ({ features }: { features: FeatureItem[] }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Features - Alternating Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {features.filter((_, i) => i % 2 === 0).map((feature, index) => {
            const Icon = feature.icon;
            const isHighlight = feature.highlight;
            return (
              <div
                key={index}
                className={`group relative flex items-start gap-5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/40 ring-2 ring-primary/20' 
                    : 'bg-card/50 border-border/50 hover:border-primary/40 hover:bg-card'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    TOP
                  </div>
                )}
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary to-secondary' 
                    : 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/50'
                }`}>
                  <Icon className={`w-6 h-6 ${isHighlight ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 transition-colors ${isHighlight ? 'text-primary' : 'group-hover:text-primary'}`}>{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
                <ArrowRight className={`w-5 h-5 shrink-0 self-center transition-all duration-300 ${
                  isHighlight ? 'text-primary opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary'
                }`} />
              </div>
            );
          })}
        </div>
        
        {/* Right Column - Offset */}
        <div className="space-y-6 md:mt-12">
          {features.filter((_, i) => i % 2 === 1).map((feature, index) => {
            const Icon = feature.icon;
            const isHighlight = feature.highlight;
            return (
              <div
                key={index}
                className={`group relative flex items-start gap-5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/40 ring-2 ring-primary/20' 
                    : 'bg-card/50 border-border/50 hover:border-secondary/40 hover:bg-card'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    TOP
                  </div>
                )}
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary to-secondary' 
                    : 'bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 group-hover:border-secondary/50'
                }`}>
                  <Icon className={`w-6 h-6 ${isHighlight ? 'text-primary-foreground' : 'text-secondary'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 transition-colors ${isHighlight ? 'text-primary' : 'group-hover:text-secondary'}`}>{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
                <ArrowRight className={`w-5 h-5 shrink-0 self-center transition-all duration-300 ${
                  isHighlight ? 'text-secondary opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function ForProviders() {
  return (
    <>
      <Header />
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
              <Send className="w-4 h-4" />
              Dein Schritt in die Zukunft
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Premium Mitgliedschaft
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Ganz einfach, transparent und übersichtlich – werde Teil des größten Netzwerks für Krankenfahrten in Deutschland.
            </p>
            
            {/* Pricing Highlight */}
            <div className="inline-flex items-center gap-4 bg-card border border-border/50 rounded-2xl px-8 py-4 mb-10 shadow-lg">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">0€</div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">pro Monat</div>
                <div className="font-semibold text-foreground">Einmaliger Einstiegspreis</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25">
                Jetzt Anbieter werden
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Pricing Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10">
              <Crown className="w-4 h-4" />
              Premium Mitgliedschaft
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Unsere <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]">Preise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Starte jetzt kostenlos und überzeuge dich selbst
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-[2.5rem] blur-2xl opacity-50" />
              
              {/* Main Pricing Card */}
              <div className="relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/20 overflow-hidden">
                {/* Card inner glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-md opacity-75" />
                    <div className="relative flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                      <Gift className="w-4 h-4" />
                      3 Monate kostenlos
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6">
                  {/* Left Side - Pricing */}
                  <div className="text-center md:text-left">
                    {/* Trial Period */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                        <Timer className="w-4 h-4" />
                        Testphase
                      </div>
                      <div className="flex items-end gap-2 justify-center md:justify-start mb-2">
                        <span className="text-7xl md:text-8xl font-black bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent">0€</span>
                        <span className="text-2xl text-muted-foreground mb-3">/ Monat</span>
                      </div>
                      <p className="text-muted-foreground">
                        Die ersten <span className="font-bold text-foreground">3 Monate komplett kostenlos</span> – keine versteckten Kosten
                      </p>
                    </div>

                    {/* Divider with Arrow */}
                    <div className="flex items-center gap-4 my-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30">
                        <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    {/* Regular Price */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
                        <Rocket className="w-4 h-4" />
                        Danach
                      </div>
                      <div className="flex items-end gap-2 justify-center md:justify-start mb-2">
                        <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">49€</span>
                        <span className="text-xl text-muted-foreground mb-2">/ Monat</span>
                        <span className="text-sm text-muted-foreground mb-3 ml-1">(netto)</span>
                      </div>
                      <p className="text-muted-foreground">
                        Monatlich kündbar – volle Flexibilität
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Button 
                        size="lg" 
                        className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-7 h-auto shadow-xl shadow-primary/30 font-bold group"
                        onClick={() => window.location.href = '/auth'}
                      >
                        <span>Jetzt kostenlos starten</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-3">
                        Keine Kreditkarte erforderlich
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Features */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Alles inklusive
                      </h3>
                      <ul className="space-y-4">
                        {pricingFeatures.map((feature, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <div className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                              <Check className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-foreground group-hover:text-primary transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Bonus Badge */}
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                          <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">Exklusive Mitgliedsvorteile</p>
                            <p className="text-xs text-muted-foreground">Rabatte bei Partnern & Lieferanten</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-10 pt-8 border-t border-border/30">
                  <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>100% Sicher</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>Sofortiger Zugang</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HeartHandshake className="w-5 h-5 text-primary" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span>+500 Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid below pricing */}
          <div className="mt-20">
            <FeaturesShowcase features={features} />
          </div>
        </div>
      </section>

      {/* Partners Logo Slider - moved here */}
      <PartnersLogoSlider />

      {/* How to Join */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              In 3 Schritten starten
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              So werden Sie <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Anbieter</span>
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

      {/* Testimonials - Redesigned */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Erfolgsgeschichten
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Das sagen unsere <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Anbieter</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Erfahren Sie, wie andere Unternehmen von katew profitieren
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
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
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section with Contact Form */}
      <ContactFormCTA variant="providers" />
      </div>
      <Footer />
    </>
  );
}
