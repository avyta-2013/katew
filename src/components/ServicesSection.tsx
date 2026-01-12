import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, CreditCard, Gavel, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import transport images
import transportSitting from "@/assets/transport-sitting-new.jpg";
import transportWheelchair from "@/assets/transport-wheelchair-new.jpg";
import transportStairchair from "@/assets/transport-stairchair-new.jpg";
import transportStretcher from "@/assets/transport-stretcher-new.jpg";

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
    features: ["Medizinische Betreuung", "Klimatisiert", "Intensiv-Ausstattung"],
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

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"transport" | "booking">("transport");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Unsere Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Die Zukunft hat begonnen
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Passende Lösungen für jeden Bedarf
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex p-1.5 bg-muted rounded-2xl">
            {[
              { id: "transport", label: "Transportarten" },
              { id: "booking", label: "Buchungsoptionen" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "transport" | "booking")}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === tab.id 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "transport" ? (
            <motion.div
              key="transport"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {transportTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="relative h-full bg-card border border-border/50 rounded-3xl overflow-hidden"
                    animate={{
                      borderColor: hoveredCard === index ? "hsl(var(--primary) / 0.5)" : "hsl(var(--border) / 0.5)",
                      boxShadow: hoveredCard === index ? "0 25px 50px -12px rgba(0,0,0,0.25)" : "none",
                    }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={type.image} 
                        alt={type.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Title badge */}
                      <motion.div 
                        className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-gradient-to-r ${type.color} text-white font-bold shadow-lg`}
                        animate={{
                          y: hoveredCard === index ? -4 : 0,
                        }}
                      >
                        {type.title}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {type.description}
                      </p>

                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Arrow indicator */}
                      <motion.div 
                        className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50 text-primary font-medium text-sm"
                        animate={{
                          x: hoveredCard === index ? 4 : 0,
                        }}
                      >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {bookingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="group"
                  >
                    <motion.div 
                      className={`relative h-full rounded-3xl p-6 ${
                        option.highlight 
                          ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground" 
                          : "bg-card border border-border/50"
                      }`}
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                    >
                      {option.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                          Empfohlen
                        </div>
                      )}

                      <div className={`w-14 h-14 rounded-2xl ${option.highlight ? "bg-white/20" : "bg-primary/10"} flex items-center justify-center mb-5`}>
                        <Icon className={`w-7 h-7 ${option.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      </div>

                      <h3 className={`text-xl font-bold mb-2 ${!option.highlight && "group-hover:text-primary transition-colors"}`}>
                        {option.title}
                      </h3>
                      <p className={`text-sm mb-5 ${option.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {option.description}
                      </p>

                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-center gap-2 text-sm ${option.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                            <CheckCircle2 className={`w-4 h-4 ${option.highlight ? "text-secondary" : "text-secondary"}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 rounded-2xl font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            Mehr erfahren
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
