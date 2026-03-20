import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PatientCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Jetzt Ihre Krankenfahrt{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              buchen
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Einfach, digital und zuverlässig – ob mit Verordnung oder als Selbstzahler. Starten Sie jetzt.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Kostenlose Vermittlung", "Geprüfte Unternehmen", "Alle Kassen", "Deutschlandweit"].map((item) => (
              <div key={item} className="flex items-center gap-2 px-4 py-2 bg-card/80 border border-border/50 rounded-full text-sm">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-primary/90 shadow-xl shadow-primary/25">
                <Link to="/buchen">
                  Fahrt buchen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-2xl">
                <Link to="/kontakt">Beratung anfordern</Link>
              </Button>
            </motion.div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+496915045409"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Telefon</div>
                <div className="font-semibold">+49 69 150 454 09</div>
              </div>
            </a>
            <a
              href="mailto:support@katew.de"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">E-Mail</div>
                <div className="font-semibold">support@katew.de</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
