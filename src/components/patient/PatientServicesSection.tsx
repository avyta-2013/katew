import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Truck } from "lucide-react";

import transportSitting from "@/assets/patient-transport-sitting.jpg";
import transportWheelchair from "@/assets/patient-transport-wheelchair.jpg";
import transportStairchair from "@/assets/patient-transport-stairchair.jpg";
import transportStretcher from "@/assets/patient-transport-stretcher.jpg";

const transportTypes = [
  {
    image: transportSitting,
    title: "Sitzend",
    description: "Für gehfähige Patienten, die Unterstützung beim Transport benötigen.",
    features: ["Komfortabler PKW", "Begleitung möglich", "Ideal für Arztbesuche"],
    color: "from-primary to-primary/80",
  },
  {
    image: transportWheelchair,
    title: "Rollstuhl",
    description: "Barrierefreier Transport mit speziell ausgestatteten Fahrzeugen.",
    features: ["Barrierefreier Zugang", "Sichere Rollstuhlbefestigung", "Rampen-Ausstattung"],
    color: "from-secondary to-secondary/80",
  },
  {
    image: transportStairchair,
    title: "Tragestuhl",
    description: "Optimal wenn enge Treppenhäuser überwunden werden müssen.",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
    color: "from-primary to-secondary",
  },
  {
    image: transportStretcher,
    title: "Liegend",
    description: "Liegendtransport für Patienten, die nicht sitzen können.",
    features: ["Vollausgestattete Trage", "Medizinische Begleitung", "Maximaler Komfort"],
    color: "from-secondary to-primary",
  },
];

export const PatientServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-hidden relative">
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
            <Truck className="w-4 h-4 text-primary" />
            <span>Unsere Transportarten</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Passend für{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              jeden Bedarf
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Egal ob sitzend, im Rollstuhl, auf dem Tragestuhl oder liegend – wir finden die richtige Lösung
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {transportTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                className="h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden"
                whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <motion.img
                    src={type.image}
                    alt={`Krankenfahrt ${type.title}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className={`absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-gradient-to-r ${type.color} text-white text-sm font-bold shadow-lg`}>
                    {type.title}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
