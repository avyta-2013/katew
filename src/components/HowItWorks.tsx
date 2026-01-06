import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Daten eingeben",
    description: "Geben Sie Start, Ziel und weitere Details zu Ihrem Transport an.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Angebote erhalten",
    description: "Erhalten Sie Angebote von qualifizierten Krankentransport-Unternehmen.",
    icon: Users,
  },
  {
    number: "03",
    title: "Transport buchen",
    description: "Wählen Sie das beste Angebot und bestätigen Sie Ihre Buchung.",
    icon: CheckCircle,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Large Dashboard Image Placeholder */}
          <div className="bg-card rounded-3xl shadow-elevated border border-border/50 p-8 mb-16 overflow-hidden">
            <div className="aspect-[16/9] bg-muted/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Dashboard Vorschau</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <span className="text-5xl font-bold text-muted/50 mb-4 block">{step.number}</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};