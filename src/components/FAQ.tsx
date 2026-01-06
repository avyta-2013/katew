import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ist der Dienst kostenlos?",
    answer: "Ja, die Nutzung unserer Plattform zur Vermittlung von Krankentransporten ist für Patienten kostenlos.",
  },
  {
    question: "Was ist ein Krankentransport, und wann ist er notwendig?",
    answer: "Ein Krankentransport ist ein spezialisierter Transport für Patienten, die aus medizinischen Gründen nicht selbstständig zu Terminen oder zwischen Einrichtungen reisen können.",
  },
  {
    question: "Wie schnell kann ein Transport organisiert werden?",
    answer: "In der Regel können wir innerhalb von 24 Stunden einen Transport organisieren. Für dringende Fälle arbeiten wir mit Partnern zusammen, die auch kurzfristige Anfragen bearbeiten.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle auf unserer Plattform registrierten Unternehmen durchlaufen ein strenges Qualitätsmanagement. Sie müssen alle erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
  {
    question: "Kann ich die Kosten mit meiner Krankenkasse abrechnen?",
    answer: "In vielen Fällen übernimmt die Krankenkasse die Kosten für medizinisch notwendige Krankentransporte. Unsere Partner unterstützen Sie gerne bei der Abrechnung.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Häufige Fragen
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
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-soft hover:shadow-card transition-shadow data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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