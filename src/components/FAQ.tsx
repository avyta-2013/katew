import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ist der Dienst kostenlos?",
    answer:
      "Ja, die Nutzung unserer Plattform zur Vermittlung von Krankentransporten ist für Patienten kostenlos.",
  },
  {
    question: "Was ist ein Krankentransport, und wann ist er notwendig?",
    answer:
      "Ein Krankentransport ist ein spezialisierter Transport für Patienten, die aus medizinischen Gründen nicht selbstständig zu Terminen oder zwischen Einrichtungen reisen können. Er ist notwendig bei eingeschränkter Mobilität, nach Operationen oder bei chronischen Erkrankungen.",
  },
  {
    question: "Wie schnell kann ein Transport organisiert werden?",
    answer:
      "Die Geschwindigkeit hängt von der Verfügbarkeit der Unternehmen ab. In der Regel können wir innerhalb von 24 Stunden einen Transport organisieren. Für dringende Fälle arbeiten wir mit Partnern zusammen, die auch kurzfristige Anfragen bearbeiten.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer:
      "Alle auf unserer Plattform registrierten Unternehmen durchlaufen ein strenges Qualitätsmanagement. Sie müssen alle erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
  {
    question: "Kann ich die Kosten mit meiner Krankenkasse abrechnen?",
    answer:
      "In vielen Fällen übernimmt die Krankenkasse die Kosten für medizinisch notwendige Krankentransporte. Wir empfehlen, dies vorab mit Ihrer Krankenkasse zu klären. Unsere Partner unterstützen Sie gerne bei der Abrechnung.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in tracking-tight">
            Fragen & Antworten
          </h2>
          <p className="text-2xl text-muted-foreground text-center mb-20 font-light">
            Alles was Sie wissen müssen
          </p>

          <Accordion type="single" collapsible className="space-y-6 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl px-8 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-xl font-bold hover:no-underline py-8 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
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
