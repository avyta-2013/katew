import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Clock, Users, CheckCircle2 } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "100% Geprüfte Partner",
    description: "Jeder Anbieter durchläuft strenge Qualitätsprüfungen",
    stat: "500+",
    statLabel: "Zertifizierte Partner",
  },
  {
    icon: Award,
    title: "Qualitätsstandards",
    description: "Alle Lizenzen, Versicherungen und Zertifizierungen verifiziert",
    stat: "98%",
    statLabel: "Zufriedenheitsrate",
  },
  {
    icon: Clock,
    title: "Schnelle Vermittlung",
    description: "Durchschnittlich unter 2 Stunden bis zur Bestätigung",
    stat: "<2h",
    statLabel: "Ø Vermittlungszeit",
  },
  {
    icon: Users,
    title: "Persönlicher Support",
    description: "Unser Team steht Ihnen bei Fragen zur Seite",
    stat: "24/7",
    statLabel: "Erreichbarkeit",
  },
];


export const TrustIndicators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span>Vertrauen & Sicherheit</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ihre Meinung gibt uns Recht
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verlässlichkeit und Qualität stehen bei uns an erster Stelle
          </p>
        </motion.div>

        {/* Trust grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div 
                  className="h-full bg-card border border-border/50 rounded-3xl p-6 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.stat}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>


        {/* Certifications */}
        <motion.div 
          className="mt-16 pt-16 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Zertifizierungen & Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["TÜV Geprüft", "DSGVO Konform", "ISO 27001", "SSL Verschlüsselt"].map((cert, index) => (
              <motion.div 
                key={cert}
                className="flex items-center gap-2 text-muted-foreground"
                whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
