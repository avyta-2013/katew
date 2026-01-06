import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Buchung",
    faqs: [
      {
        question: "Wie kann ich einen Transport buchen?",
        answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
      },
      {
        question: "Wie schnell kann ein Transport organisiert werden?",
        answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote. Bei dringenden Anfragen arbeiten wir mit Partnern zusammen, die auch kurzfristige Buchungen ermöglichen.",
      },
    ],
  },
  {
    category: "Kosten",
    faqs: [
      {
        question: "Ist der Dienst kostenlos?",
        answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos. Wir berechnen nur bei erfolgreicher Vermittlung eine Provision an die Transportunternehmen.",
      },
      {
        question: "Übernimmt die Krankenkasse die Kosten?",
        answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
      },
    ],
  },
  {
    category: "Sicherheit",
    faqs: [
      {
        question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
        answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
      },
      {
        question: "Was passiert bei Problemen während des Transports?",
        answer: "Unser Support-Team ist für Sie erreichbar. Alle Transporte sind versichert und unsere Partner sind geschult, um auch mit unvorhergesehenen Situationen umzugehen.",
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles was Sie wissen müssen
            </p>
          </div>

          <div className="space-y-10">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
