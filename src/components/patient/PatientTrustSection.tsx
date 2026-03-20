import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Award, HeartHandshake, BadgeCheck, Ambulance } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Geprüfte Unternehmen",
    description: "Alle Fahrtdienstleister werden sorgfältig geprüft – mit gültiger Konzession, Versicherung und geschultem Personal.",
  },
  {
    icon: Clock,
    title: "Schnelle Vermittlung",
    description: "Innerhalb weniger Minuten erhalten Sie ein passendes Fahrzeug. Keine langen Wartezeiten.",
  },
  {
    icon: Award,
    title: "Höchste Qualitätsstandards",
    description: "Regelmäßige Qualitätskontrollen und Bewertungen sichern einen erstklassigen Service.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    description: "Erfahrene Fahrer begleiten Sie einfühlsam von Tür zu Tür – sicher und komfortabel.",
  },
  {
    icon: BadgeCheck,
    title: "Alle Kassen akzeptiert",
    description: "Direkte Abrechnung mit allen gesetzlichen und privaten Krankenkassen möglich.",
  },
  {
    icon: Ambulance,
    title: "Deutschlandweit verfügbar",
    description: "Über 500 zertifizierte Fahrtdienstleister in ganz Deutschland stehen bereit.",
  },
];

export const PatientTrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span>Warum katew?</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Vertrauen, das{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              bewegt
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir setzen alles daran, Ihnen den sichersten und angenehmsten Transport zu ermöglichen
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <motion.div
                  className="h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
