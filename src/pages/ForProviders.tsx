import { 
  TrendingUp, 
  Users, 
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
  Building2,
  Sparkles,
  MousePointerClick,
  Layers,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CounterCard } from "@/components/CounterCard";
import { ContactFormCTA } from "@/components/ContactFormCTA";
import { PartnersLogoSlider } from "@/components/PartnersLogoSlider";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mehr Aufträge",
    description: "Erhalten Sie Zugang zu einem stetig wachsenden Netzwerk von Patienten und Einrichtungen.",
    stat: "+45%",
    statLabel: "mehr Buchungen",
  },
  {
    icon: Euro,
    title: "Höhere Einnahmen",
    description: "Optimieren Sie Ihre Auslastung und steigern Sie Ihren Umsatz durch effiziente Routenplanung.",
    stat: "+30%",
    statLabel: "Umsatzsteigerung",
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
    title: "Sicherheit",
    description: "Alle Zahlungen sind garantiert. Wir sorgen für pünktliche Auszahlungen.",
    stat: "100%",
    statLabel: "Zahlungssicherheit",
  },
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-semibold mb-6">
          <Layers className="w-4 h-4" />
          Alles aus einer Hand
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
            Unsere Leistungen
          </span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Alles was du brauchst, um erfolgreich zu sein – von der Buchung bis zur Abrechnung
        </p>
      </motion.div>

      {/* Interactive Feature Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isHighlight = 'highlight' in feature && feature.highlight;
          const isActive = activeFeature === index;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative cursor-pointer ${isHighlight ? 'md:col-span-2 lg:col-span-2 xl:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveFeature(isActive ? null : index)}
            >
              {/* Animated Glow Effect */}
              <motion.div 
                className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${
                  isHighlight 
                    ? 'from-primary via-secondary to-primary' 
                    : 'from-primary/60 via-secondary/60 to-primary/60'
                } blur-xl`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isHovered ? 0.6 : 0, 
                  scale: isHovered ? 1 : 0.8 
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Main Card */}
              <motion.div 
                className={`relative h-full rounded-3xl border backdrop-blur-xl overflow-hidden transition-colors duration-500 ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary/15 via-card to-secondary/15 border-primary/40' 
                    : 'bg-card/90 border-border/50 hover:border-primary/50'
                }`}
                animate={{ 
                  scale: isHovered ? 1.02 : 1,
                  y: isHovered ? -8 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}
                    animate={{ 
                      backgroundPosition: isHovered ? ['0px 0px', '24px 24px'] : '0px 0px'
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Floating Orb */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
                    animate={{ 
                      opacity: isHovered ? 1 : 0.3,
                      scale: isHovered ? 1.2 : 1,
                      x: isHovered ? -10 : 0,
                      y: isHovered ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Highlight Badge */}
                {isHighlight && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <motion.div 
                      className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-b-2xl flex items-center gap-2 shadow-lg shadow-primary/30"
                      initial={{ y: -30 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      EXKLUSIV FÜR MITGLIEDER
                    </motion.div>
                  </div>
                )}

                <div className={`relative p-6 md:p-8 ${isHighlight ? 'pt-12' : ''}`}>
                  {/* Icon with 3D Effect */}
                  <div className="mb-6 relative">
                    <motion.div 
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative ${
                        isHighlight 
                          ? 'bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/40' 
                          : 'bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20'
                      }`}
                      animate={{ 
                        rotateY: isHovered ? 10 : 0,
                        rotateX: isHovered ? -5 : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 ${isHighlight ? 'text-primary-foreground' : 'text-primary'}`} />
                      
                      {/* Icon Glow */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl"
                        animate={{ opacity: isHovered ? 0.8 : 0 }}
                      />
                    </motion.div>

                    {/* Animated Rings */}
                    <motion.div 
                      className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary/30"
                      animate={{ 
                        rotate: isHovered ? 360 : 0,
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute -inset-5 rounded-3xl border border-secondary/20"
                      animate={{ 
                        rotate: isHovered ? -360 : 0,
                        opacity: isHovered ? 0.5 : 0
                      }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Content */}
                  <motion.h4 
                    className={`font-bold text-xl md:text-2xl mb-3 ${
                      isHighlight ? 'text-primary' : 'text-foreground'
                    }`}
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.title}
                  </motion.h4>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Interactive CTA */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-semibold text-primary"
                    animate={{ x: isHovered ? 8 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MousePointerClick className="w-4 h-4" />
                    <span>Mehr erfahren</span>
                    <motion.div animate={{ x: isHovered ? 4 : 0 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Corner Accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent"
                  animate={{ opacity: isHovered ? 1 : 0.3 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Stats Bar */}
      <motion.div 
        className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
          <div className="flex -space-x-3">
            {['MS', 'AK', 'TL', 'RB'].map((initials, i) => (
              <motion.div 
                key={i} 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-sm font-bold border-2 border-background shadow-lg"
                initial={{ scale: 0, x: 20 }}
                animate={isInView ? { scale: 1, x: 0 } : {}}
                transition={{ delay: 1 + i * 0.1, type: "spring" }}
              >
                {initials}
              </motion.div>
            ))}
          </div>
          <div className="text-left">
            <div className="font-bold text-lg text-foreground">500+ Anbieter</div>
            <div className="text-sm text-muted-foreground">vertrauen auf katew</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/50">
          <Rocket className="w-6 h-6 text-secondary" />
          <div>
            <div className="font-bold text-foreground">Starte noch heute</div>
            <div className="text-sm text-muted-foreground">Keine versteckten Kosten</div>
          </div>
        </div>
      </motion.div>
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

      {/* Redesigned Benefits Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background with mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Was hast du zu verlieren?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Deine <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">Vorteile</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecke alle Vorteile einer Mitgliedschaft bei katew
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

          {/* Features - Premium Interactive Section */}
          <FeaturesShowcase features={features} />
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
