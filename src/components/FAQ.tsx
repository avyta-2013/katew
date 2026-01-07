import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie kann ich eine Krankenfahrt buchen?",
    answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
  },
  {
    question: "Wie schnell kann eine Krankenfahrt organisiert werden?",
    answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote. Bei dringenden Anfragen arbeiten wir mit Partnern zusammen, die auch kurzfristige Buchungen ermöglichen.",
  },
  {
    question: "Ist der Dienst kostenlos?",
    answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos. Wir berechnen nur bei erfolgreicher Vermittlung eine Provision an die Transportunternehmen.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
  {
    question: "Was passiert bei Problemen während der Fahrt?",
    answer: "Unser Support-Team ist für Sie erreichbar. Alle Fahrten sind versichert und unsere Partner sind geschult, um auch mit unvorhergesehenen Situationen umzugehen.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles was Sie wissen müssen
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
