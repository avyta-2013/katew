import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, Eye, ArrowRight, User, Building, Heart, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Calendar,
    title: "Einfache Buchung",
    description: "Online anfragen, Angebote vergleichen, direkt buchen – alles an einem Ort.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Verlässliche Anbieter",
    description: "Alle Partner sind zertifiziert und erfüllen höchste Qualitätsstandards.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Klare Preise, nachvollziehbare Abläufe und Echtzeit-Updates.",
    color: "from-violet-500 to-violet-600",
  },
];

const partnerTypes = [
  {
    icon: User,
    title: "Privatpersonen",
    subtitle: "Patienten & Angehörige",
    features: ["Schnelle Buchung", "Preisvergleich", "Bewertungen lesen"],
    color: "primary",
  },
  {
    icon: Building,
    title: "Einrichtungen",
    subtitle: "Kliniken, Pflegeheime, Praxen",
    features: ["Volumenrabatte", "API-Anbindung", "Dedizierter Support"],
    color: "secondary",
  },
];

const processSteps = [
  { step: "01", title: "Registrieren", description: "Kostenlos in 30 Sekunden" },
  { step: "02", title: "Anfrage stellen", description: "Fahrtdetails eingeben" },
  { step: "03", title: "Angebote erhalten", description: "Von geprüften Anbietern" },
  { step: "04", title: "Buchen", description: "Bestes Angebot wählen" },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  return (
    <section ref={ref} id="partner" className="py-24 md:py-32 bg-muted/30 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Heart className="w-4 h-4 text-secondary" />
              <span>Für Partner</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Krankenfahrt buchen leicht gemacht
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ob Privatperson oder Einrichtung – katew verbindet Sie mit qualifizierten Transportunternehmen
            </p>
          </motion.div>

          {/* Partner types */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  onMouseEnter={() => setHoveredType(index)}
                  onMouseLeave={() => setHoveredType(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className={`relative h-full p-8 rounded-3xl overflow-hidden ${
                      type.color === 'primary' 
                        ? 'bg-gradient-to-br from-primary to-primary/90' 
                        : 'bg-gradient-to-br from-secondary to-secondary/90'
                    } text-white`}
                    whileHover={{ scale: 1.02, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)" }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                    <div className="relative z-10">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                        animate={{
                          rotate: hoveredType === index ? [0, -5, 5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                      <p className="text-white/80 mb-6">{type.subtitle}</p>

                      <ul className="space-y-3">
                        {type.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-3 text-white/90"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white/80" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Process steps */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">So einfach geht's</h3>
              <p className="text-muted-foreground">In 4 Schritten zur gebuchten Fahrt</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 transition-all"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-secondary to-secondary/60 bg-clip-text text-transparent mb-3">
                      {step.step}
                    </div>
                    <h4 className="font-bold mb-1 group-hover:text-secondary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </motion.div>

                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits and CTA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="space-y-5">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <motion.div 
                        className="flex gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 transition-all"
                        whileHover={{ x: 8, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-3xl p-8 md:p-10 text-white overflow-hidden"
                whileHover={{ boxShadow: "0 30px 60px -20px rgba(34, 197, 94, 0.4)" }}
              >
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    Kostenlos starten
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Die Nutzung unserer Plattform ist für Partner komplett unverbindlich und kostenfrei. 
                    Keine versteckten Gebühren.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild 
                      size="lg" 
                      className="h-14 px-8 rounded-2xl font-bold bg-white text-secondary hover:bg-white/90 shadow-xl"
                    >
                      <Link to="/anmelden?type=partner">
                        Jetzt ausprobieren
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline"
                      className="h-14 px-8 rounded-2xl font-bold border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
                    >
                      <Link to="/kontakt">
                        Kontakt aufnehmen
                      </Link>
                    </Button>
                  </div>

                  <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-white/80" />
                      <span className="text-sm text-white/80">Sofortiger Zugang</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white/80" />
                      <span className="text-sm text-white/80">Keine Kreditkarte</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
