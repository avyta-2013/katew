import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Wie kann ich eine Krankenfahrt buchen?",
    answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
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
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>FAQ</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Häufig gestellte Fragen
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Alles was Sie wissen müssen – auf einen Blick
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <motion.div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? "border-primary/30 shadow-lg shadow-primary/5" 
                      : "border-border/50 hover:border-border"
                  }`}
                  layout
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        openIndex === index 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-border/50">
                            <p className="text-muted-foreground leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-border/50 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold mb-1">Noch Fragen?</p>
                <p className="text-sm text-muted-foreground">Unser Support-Team hilft Ihnen gerne weiter</p>
              </div>
              <Button asChild className="rounded-xl font-semibold">
                <Link to="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
