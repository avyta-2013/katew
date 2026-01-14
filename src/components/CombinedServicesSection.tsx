import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  UserPlus, FileText, CheckCircle, ArrowRight, Play, 
  CreditCard, Gavel, Sparkles, CheckCircle2, ChevronRight,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import transport images
import transportSitting from "@/assets/transport-sitting-new.jpg";
import transportWheelchair from "@/assets/transport-wheelchair-new.jpg";
import transportStairchair from "@/assets/transport-stairchair-new.jpg";
import transportStretcher from "@/assets/transport-stretcher-new.jpg";

const categories = [
  {
    id: "how-it-works",
    icon: Play,
    title: "So funktioniert's",
    subtitle: "In 3 einfachen Schritten",
    color: "primary",
  },
  {
    id: "transport",
    icon: Truck,
    title: "Transportarten",
    subtitle: "Passend für jeden Bedarf",
    color: "secondary",
  },
  {
    id: "booking",
    icon: FileText,
    title: "Buchungsoptionen",
    subtitle: "Flexibel & transparent",
    color: "primary",
  },
];

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren",
    subtitle: "In 30 Sekunden startklar",
    description: "Erstellen Sie Ihr kostenloses katew-Konto. Einfache Anmeldung mit E-Mail – ohne versteckte Kosten.",
    features: ["Kostenlose Registrierung", "Keine Kreditkarte nötig", "Sofortiger Zugang"],
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "Unter 2 Minuten",
    description: "Geben Sie Ihre Fahrtdetails ein: Start, Ziel, Transportart und Termin. Wir finden passende Anbieter.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Termine"],
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    subtitle: "Alles organisiert",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen Details: Fahrer-Kontakt, Fahrzeuginfos und Abholzeit.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking"],
  },
];

const transportTypes = [
  {
    image: transportSitting,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Schnelle Verfügbarkeit"],
    color: "from-blue-500 to-blue-600",
  },
  {
    image: transportWheelchair,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Rampen-Ausstattung"],
    color: "from-violet-500 to-violet-600",
  },
  {
    image: transportStairchair,
    title: "Tragestuhl",
    description: "Optimal für enge Treppenhäuser und schwierige Zugänge",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    image: transportStretcher,
    title: "Liegend",
    description: "Vollausgestatteter Transport auf Trage",
    features: ["Keine medizinische Betreuung", "Klimatisiert"],
    color: "from-rose-500 to-rose-600",
  },
];

const bookingOptions = [
  {
    icon: FileText,
    title: "Mit Verordnung",
    description: "Krankenkasse übernimmt die Kosten",
    features: ["Kostenübernahme", "Direkte Abrechnung", "Alle Transportarten"],
    highlight: true,
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexible Buchung ohne Verordnung",
    features: ["Sofortige Buchung", "Transparente Preise", "Flexible Termine"],
    highlight: false,
  },
  {
    icon: Gavel,
    title: "Ausschreibungen",
    description: "Für Kostenträger und öffentliche Auftraggeber",
    features: ["Digitale Ausschreibungen", "Qualifizierte Anbieter", "Transparente Vergabe"],
    highlight: false,
  },
];

export const CombinedServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("how-it-works");

  const renderHowItWorks = () => (
    <div className="space-y-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <motion.div 
              className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              whileHover={{ x: 8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-start gap-5">
                {/* Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-2xl font-black text-primary-foreground">{step.number}</span>
                  </div>
                  <motion.div 
                    className="absolute -right-2 -bottom-2 w-8 h-8 rounded-xl bg-card border border-border shadow-md flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{step.subtitle}</p>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-lg text-xs font-medium text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  const renderTransport = () => (
    <div className="grid sm:grid-cols-2 gap-5">
      {transportTypes.map((type, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="group cursor-pointer"
        >
          <motion.div 
            className="relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden"
            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)" }}
          >
            {/* Image */}
            <div className="relative h-36 overflow-hidden">
              <motion.img 
                src={type.image} 
                alt={type.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              
              {/* Title badge */}
              <div className={`absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-gradient-to-r ${type.color} text-white text-sm font-bold shadow-lg`}>
                {type.title}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
              <ul className="space-y-1.5">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  const renderBooking = () => (
    <div className="space-y-4">
      {bookingOptions.map((option, index) => {
        const Icon = option.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <motion.div 
              className={`relative rounded-2xl p-5 transition-all ${
                option.highlight 
                  ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/20" 
                  : "bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30"
              }`}
              whileHover={{ x: 8, boxShadow: option.highlight ? "0 30px 60px -12px rgba(0,0,0,0.25)" : "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            >
              {option.highlight && (
                <div className="absolute -top-2.5 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-md">
                  Empfohlen
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${option.highlight ? "bg-white/20" : "bg-primary/10"} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${option.highlight ? "text-primary-foreground" : "text-primary"}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className={`text-lg font-bold mb-1 ${!option.highlight && "group-hover:text-primary transition-colors"}`}>
                    {option.title}
                  </h4>
                  <p className={`text-sm mb-3 ${option.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {option.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
                          option.highlight 
                            ? "bg-white/10 text-primary-foreground/90" 
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <CheckCircle2 className={`w-3 h-3 ${option.highlight ? "text-secondary" : "text-secondary"}`} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 ${option.highlight ? "text-primary-foreground/50" : "text-muted-foreground/30"} group-hover:translate-x-1 transition-all flex-shrink-0`} />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/10 to-primary/5 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Alles auf einen Blick</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Services & Ablauf
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere Lösungen für Ihren Krankentransport
          </p>
        </motion.div>

        {/* Main content: Left nav + Right content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
            {/* Left: Category Navigation */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:sticky lg:top-8 space-y-3">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                        isActive 
                          ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/20" 
                          : "bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30"
                      }`}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {/* Shine effect on active */}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                      )}
                      
                      <div className="relative flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${isActive ? "bg-white/20" : "bg-primary/10"} flex items-center justify-center transition-colors`}>
                          <Icon className={`w-6 h-6 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-lg ${!isActive && "group-hover:text-primary transition-colors"}`}>
                            {category.title}
                          </h3>
                          <p className={`text-sm ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {category.subtitle}
                          </p>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-all ${isActive ? "text-primary-foreground rotate-90" : "text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1"}`} />
                      </div>
                    </motion.button>
                  );
                })}

                {/* CTA Button below categories */}
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full h-14 rounded-2xl font-bold shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <a href="/plattform">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content Area */}
            <motion.div 
              className="min-h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                {/* Content header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <h3 className="text-lg font-bold text-muted-foreground">
                    {categories.find(c => c.id === activeCategory)?.title}
                  </h3>
                </div>

                {/* Animated content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeCategory === "how-it-works" && renderHowItWorks()}
                    {activeCategory === "transport" && renderTransport()}
                    {activeCategory === "booking" && renderBooking()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
