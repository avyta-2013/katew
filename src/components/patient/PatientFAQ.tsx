import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Wie buche ich eine Krankenfahrt über katew?",
    answer: "Geben Sie einfach Ihre Start- und Zieladresse, die gewünschte Transportart und den Termin auf unserer Plattform ein. Wir vermitteln Ihnen schnellstmöglich ein geprüftes Fahrtunternehmen in Ihrer Nähe.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Ja, bei Vorliegen einer ärztlichen Verordnung übernimmt Ihre Krankenkasse in der Regel die Transportkosten. Die Abrechnung erfolgt direkt zwischen dem Fahrtunternehmen und der Kasse – Sie müssen sich um nichts kümmern.",
  },
  {
    question: "Was kostet eine Fahrt als Selbstzahler?",
    answer: "Die Kosten richten sich nach Entfernung und Transportart. Sie erhalten vor der Buchung eine transparente Preisübersicht. Es gibt keine versteckten Gebühren.",
  },
  {
    question: "Wie kurzfristig kann ich eine Fahrt buchen?",
    answer: "In vielen Fällen ist eine Buchung noch am selben Tag möglich. Je nach Verfügbarkeit und Region empfehlen wir eine Buchung mindestens 24 Stunden im Voraus.",
  },
  {
    question: "Kann ich eine Begleitperson mitnehmen?",
    answer: "Ja, in den meisten Fällen kann eine Begleitperson kostenfrei mitfahren. Bitte geben Sie dies bei der Buchung an, damit ein passendes Fahrzeug bereitgestellt wird.",
  },
  {
    question: "Sind die Fahrer geschult?",
    answer: "Alle Fahrtunternehmen auf unserer Plattform erfüllen strenge Qualitätskriterien. Die Fahrer sind im Umgang mit Patienten geschult und verfügen über alle erforderlichen Qualifikationen.",
  },
];

export const PatientFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              <span>Häufige Fragen</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Wir beantworten Ihre Fragen
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
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
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                            <p className="text-muted-foreground leading-relaxed pt-4">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

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
                <p className="text-sm text-muted-foreground">Unser Team hilft Ihnen gerne weiter</p>
              </div>
              <Button asChild className="rounded-xl font-semibold">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
