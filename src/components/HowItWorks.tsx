import { FileText, Users, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Anfrage stellen",
    description: "Geben Sie Start, Ziel und Transportart an – in unter 2 Minuten.",
  },
  {
    icon: Users,
    number: "02",
    title: "Angebote erhalten",
    description: "Qualifizierte Unternehmen aus Ihrer Region melden sich bei Ihnen.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Fahrt bestätigen",
    description: "Wählen Sie das beste Angebot und buchen Sie direkt.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            So funktioniert's
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            In drei einfachen Schritten zu Ihrem Transport
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-card transition-all duration-300">
                    {/* Number badge */}
                    <div className="text-6xl font-bold text-muted/50 mb-6">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-border" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
