import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, FileText, CheckCircle, ArrowRight, Play } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren",
    subtitle: "In 30 Sekunden startklar",
    description: "Erstellen Sie Ihr kostenloses katew-Konto. Einfache Anmeldung mit E-Mail – ohne versteckte Kosten.",
    features: ["Kostenlose Registrierung", "Keine Kreditkarte nötig", "Sofortiger Zugang"],
    color: "primary",
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "Unter 2 Minuten",
    description: "Geben Sie Ihre Fahrtdetails ein: Start, Ziel, Transportart und Termin. Wir finden passende Anbieter.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Termine"],
    color: "secondary",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    subtitle: "Alles organisiert",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen Details: Fahrer-Kontakt, Fahrzeuginfos und Abholzeit.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking"],
    color: "primary",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Play className="w-4 h-4 text-primary" />
            <span>So funktioniert's</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              3 einfache Schritte
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Registrierung bis zur bestätigten Fahrt – in wenigen Minuten
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection line - Desktop */}
            <div className="hidden lg:block absolute top-32 left-[16%] right-[16%] h-1">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative group"
                >
                  <motion.div 
                    className="relative h-full bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500"
                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary/5 to-transparent' : 'from-secondary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Number badge */}
                    <motion.div 
                      className="relative mb-8"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary to-primary/80' : 'from-secondary to-secondary/80'} flex items-center justify-center shadow-xl ${step.color === 'primary' ? 'shadow-primary/25' : 'shadow-secondary/25'}`}>
                        <span className="text-4xl font-black text-primary-foreground">{step.number}</span>
                      </div>
                      {/* Floating icon */}
                      <motion.div 
                        className="absolute -right-2 -bottom-2 w-12 h-12 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center"
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className={`w-6 h-6 ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <p className={`text-sm ${step.color === 'primary' ? 'text-primary' : 'text-secondary'} font-bold mb-2 uppercase tracking-wider`}>
                        {step.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.15 + idx * 0.1 }}
                          >
                            <div className={`w-6 h-6 rounded-full ${step.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center`}>
                              <CheckCircle className={`w-4 h-4 ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div 
                      className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${step.color === 'primary' ? 'from-primary to-primary/50' : 'from-secondary to-secondary/50'}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4 text-lg">Bereit loszulegen?</p>
          <motion.a 
            href="/anmelden?register=true" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
