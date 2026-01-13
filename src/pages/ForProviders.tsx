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
  Check,
  Gift,
  Crown,
  Sparkles,
  MessageCircle,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactFormCTA } from "@/components/ContactFormCTA";
import { PartnersLogoSlider } from "@/components/PartnersLogoSlider";

// Removed unused arrays - features now directly in pricing section

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

// FeaturesShowcase removed - features now integrated in pricing section

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
                Werde Teil von Katew
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Ganz einfach, transparent und übersichtlich – werde Teil des größten Netzwerks für Krankenfahrten in Deutschland.
            </p>
            
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10">
              <Crown className="w-4 h-4" />
              Premium Mitgliedschaft
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Ein Preis – <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Alles inklusive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starte kostenlos und nutze alle Funktionen ohne Einschränkungen
            </p>
          </div>

          {/* Main Pricing Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-40" />
              
              {/* Main Card */}
              <div className="relative bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
                {/* Top Gradient Line */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
                
                <div className="p-6 md:p-10">
                  {/* Pricing Header with Trial Badge */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-border/50">
                    {/* Left - Trial Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {/* Trial Badge */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-lg opacity-40" />
                        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 text-center min-w-[140px]">
                          <Gift className="w-8 h-8 mx-auto mb-2" />
                          <div className="text-3xl font-black">0€</div>
                          <div className="text-sm opacity-90">3 Monate</div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="hidden sm:flex items-center">
                        <ArrowRight className="w-8 h-8 text-muted-foreground" />
                      </div>
                      
                      {/* Regular Price */}
                      <div className="text-center sm:text-left">
                        <div className="text-sm text-muted-foreground mb-1">Danach nur</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">49€</span>
                          <span className="text-lg text-muted-foreground">/ Monat</span>
                        </div>
                        <div className="text-sm text-muted-foreground">(netto, monatlich kündbar)</div>
                      </div>
                    </div>
                    
                    {/* Right - CTA */}
                    <div className="flex flex-col items-center lg:items-end gap-2">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-xl shadow-primary/25 font-bold group"
                        onClick={() => window.location.href = '/auth'}
                      >
                        <span>Jetzt kostenlos starten</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-sm text-muted-foreground">Keine Kreditkarte erforderlich</p>
                    </div>
                  </div>

                  {/* Package Includes Title */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Gift className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Das ist im Paket enthalten: Buchungen</h3>
                    </div>
                    
                    {/* Package Items Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                      {/* Transportschein */}
                      <div className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-5 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">Transportschein</h4>
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>

                      {/* Selbstzahler */}
                      <div className="group relative bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-5 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Euro className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">Selbstzahler</h4>
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                      </div>

                      {/* Ausschreibungen */}
                      <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-5 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">Ausschreibungen</h4>
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-purple-500" />
                        </div>
                      </div>

                      {/* 24/7 Kunden-Support */}
                      <div className="group relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-5 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">24/7 Support</h4>
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-orange-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vorteile Section */}
                  <div className="border-t border-border/50 pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Das sind die Vorteile</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Anfragen */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Anfragen</h4>
                          <p className="text-sm text-muted-foreground">Erhalte Buchungsanfragen via Transportschein oder Selbstzahlern</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Ausschreibung */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Briefcase className="w-5 h-5 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Ausschreibung</h4>
                          <p className="text-sm text-muted-foreground">Biete mit bei bundesweiten lukrativen Ausschreibungen für Sonderfahrten</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Einrichtungen */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Einrichtungen</h4>
                          <p className="text-sm text-muted-foreground">Kostenträger, Pflege- und Gesundheitseinrichtungen, Verbände vertrauen auf uns</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Tarife */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Euro className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Tarife</h4>
                          <p className="text-sm text-muted-foreground">Kein Tarifzwang: Hinterlege deine eigenen Preise für Buchungen via Selbstzahler</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Flexibel */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CalendarClock className="w-5 h-5 text-cyan-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Flexibel</h4>
                          <p className="text-sm text-muted-foreground">Mit Katew hast du flexible Arbeitszeiten, melde dich ab und genieße den Feierabend</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Vertragslaufzeit */}
                      <div className="group flex items-start gap-4 bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-600/20 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Clock className="w-5 h-5 text-rose-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Vertragslaufzeit</h4>
                          <p className="text-sm text-muted-foreground">Du kannst deine Mitgliedschaft jederzeit flexibel zum Monatsende kündigen</p>
                        </div>
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      </div>

                      {/* Kooperationsrabatte - Highlight */}
                      <div className="group relative flex items-start gap-4 bg-gradient-to-br from-secondary/15 to-primary/15 border-2 border-secondary/40 ring-2 ring-secondary/10 rounded-xl p-5 md:col-span-2">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-secondary to-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          HIGHLIGHT
                        </div>
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg shadow-secondary/25 group-hover:scale-110 transition-transform">
                          <Handshake className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 text-secondary">Kooperationsrabatte</h4>
                          <p className="text-sm text-muted-foreground">Profitiere von unseren Rahmenverträgen mit verschiedensten Dienstleistern</p>
                        </div>
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>100% Sicher</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-5 h-5 text-primary" />
                      <span>Sofortiger Zugang</span>
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
