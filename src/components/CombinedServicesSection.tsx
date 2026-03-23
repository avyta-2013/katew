import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  UserPlus, FileText, CheckCircle, ArrowRight, Play, 
  CreditCard, Gavel, Sparkles, CheckCircle2,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  },
  {
    id: "transport",
    icon: Truck,
    title: "Transportarten",
    subtitle: "Passend für jeden Bedarf",
  },
  {
    id: "booking",
    icon: FileText,
    title: "Buchungsoptionen",
    subtitle: "Flexibel & transparent",
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
    image: transportSitting,
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "Unter 2 Minuten",
    description: "Geben Sie Ihre Fahrtdetails ein: Start, Ziel, Transportart und Termin. Wir finden passende Anbieter.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Termine"],
    image: transportWheelchair,
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    subtitle: "Alles organisiert",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen Details: Fahrer-Kontakt, Fahrzeuginfos und Abholzeit.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking"],
    image: transportStairchair,
  },
];

const transportTypes = [
  {
    image: transportSitting,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen. Komfortabler Transport im PKW oder Großraumfahrzeug.",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Schnelle Verfügbarkeit"],
    color: "from-primary to-primary/80",
  },
  {
    image: transportWheelchair,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer mit barrierefreien Fahrzeugen und sicherer Befestigung.",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Rampen-Ausstattung"],
    color: "from-secondary to-secondary/80",
  },
  {
    image: transportStairchair,
    title: "Tragestuhl",
    description: "Optimal für enge Treppenhäuser und schwierige Zugänge. Erfahrenes Personal für schonenden Transport.",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
    color: "from-primary to-secondary",
  },
  {
    image: transportStretcher,
    title: "Liegend",
    description: "Vollausgestatteter Liegendtransport auf Trage für Patienten, die nicht sitzen können.",
    features: ["Sichere Stabilisierung", "Schonender Transport", "Komfortable Liegefläche"],
    color: "from-secondary to-primary",
  },
];

const bookingOptions = [
  {
    icon: FileText,
    title: "Mit Verordnung",
    description: "Die Krankenkasse übernimmt die Kosten bei ärztlicher Verordnung. Wir rechnen direkt ab – kein Aufwand für Sie.",
    features: ["Kostenübernahme", "Direkte Abrechnung", "Alle Transportarten"],
    highlight: true,
    image: transportSitting,
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexible Buchung ohne Verordnung. Transparente Preise und sofortige Buchungsbestätigung.",
    features: ["Sofortige Buchung", "Transparente Preise", "Flexible Termine"],
    highlight: false,
    image: transportWheelchair,
  },
  {
    icon: Gavel,
    title: "Ausschreibungen",
    description: "Für Kostenträger und öffentliche Auftraggeber. Digitale Ausschreibungen mit qualifizierten Anbietern.",
    features: ["Digitale Ausschreibungen", "Qualifizierte Anbieter", "Transparente Vergabe"],
    highlight: false,
    image: transportStretcher,
  },
];

export const CombinedServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("how-it-works");
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const renderContentItem = (
    title: string,
    subtitle: string | undefined,
    description: string,
    features: string[],
    image: string,
    index: number,
    badge?: string,
    isHighlight?: boolean
  ) => (
    <motion.div
      key={`${activeCategory}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Left: Text */}
      <div>
        {subtitle && (
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">{subtitle}</span>
        )}
        {badge && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
            isHighlight 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-muted-foreground"
          }`}>
            {badge}
          </span>
        )}
        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Image */}
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );

  const getItems = () => {
    if (activeCategory === "how-it-works") return steps;
    if (activeCategory === "transport") return transportTypes;
    if (activeCategory === "booking") return bookingOptions;
    return [];
  };

  const items = getItems();
  const currentItem = items[activeSubIndex] || items[0];

  // Reset sub-index when category changes
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSubIndex(0);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/40 overflow-hidden relative">
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Alles auf einen Blick</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Das was Sie{" "}
            <span className="text-primary">benötigen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere Lösungen für Ihre Krankenfahrt
          </p>
        </motion.div>

        {/* Category Tabs - horizontal on top */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Sub-items selector */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {items.map((item: any, index: number) => (
              <motion.button
                key={`${activeCategory}-sub-${index}`}
                onClick={() => setActiveSubIndex(index)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeSubIndex === index
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.number ? `${item.number} – ${item.title}` : item.title}
              </motion.button>
            ))}
          </div>

          {/* Content area: Text left, Image right */}
          <AnimatePresence mode="wait">
            {activeCategory === "how-it-works" && (
              renderContentItem(
                (currentItem as typeof steps[0]).title,
                (currentItem as typeof steps[0]).subtitle,
                (currentItem as typeof steps[0]).description,
                (currentItem as typeof steps[0]).features,
                (currentItem as typeof steps[0]).image,
                activeSubIndex
              )
            )}
            {activeCategory === "transport" && (
              renderContentItem(
                (currentItem as typeof transportTypes[0]).title,
                undefined,
                (currentItem as typeof transportTypes[0]).description,
                (currentItem as typeof transportTypes[0]).features,
                (currentItem as typeof transportTypes[0]).image,
                activeSubIndex
              )
            )}
            {activeCategory === "booking" && (
              renderContentItem(
                (currentItem as typeof bookingOptions[0]).title,
                undefined,
                (currentItem as typeof bookingOptions[0]).description,
                (currentItem as typeof bookingOptions[0]).features,
                (currentItem as typeof bookingOptions[0]).image,
                activeSubIndex,
                (currentItem as typeof bookingOptions[0]).highlight ? "Empfohlen" : undefined,
                (currentItem as typeof bookingOptions[0]).highlight
              )
            )}
          </AnimatePresence>

          {/* CTA */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button 
              asChild
              size="lg" 
              className="h-14 px-8 rounded-2xl font-bold shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
            >
              <a href="/plattform">
                Mehr erfahren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
