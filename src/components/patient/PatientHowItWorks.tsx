import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, CalendarCheck, Car, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Fahrt anfragen",
    description: "Geben Sie Start- und Zieladresse, gewünschte Transportart und Termin ein.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Bestätigung erhalten",
    description: "Wir vermitteln Ihnen schnellstmöglich ein geprüftes Fahrtunternehmen.",
  },
  {
    icon: Car,
    number: "03",
    title: "Abgeholt werden",
    description: "Ihr Fahrer holt Sie pünktlich ab und bringt Sie sicher ans Ziel.",
  },
];

export const PatientHowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span>So einfach geht's</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            In 3 Schritten zur{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Krankenfahrt
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keine komplizierten Formulare, kein Telefonmarathon – einfach online buchen
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[60px] top-[60px] bottom-[60px] w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-20" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group"
                  >
                    <motion.div
                      className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
                      whileHover={{ x: 8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                    >
                      <div className="flex items-center gap-6">
                        <div className="relative flex-shrink-0">
                          <div className="w-[120px] h-[120px] rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shadow-primary/20">
                            <Icon className="w-12 h-12 text-primary-foreground" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-9 h-9 rounded-xl bg-card border border-border shadow-md flex items-center justify-center">
                            <span className="text-sm font-black text-primary">{step.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <CheckCircle className="w-6 h-6 text-secondary/30 group-hover:text-secondary transition-colors flex-shrink-0" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
