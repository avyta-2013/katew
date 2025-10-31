import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Eckdaten ausfüllen",
    description: "Geben Sie Start, Ziel und weitere Details zu Ihrem Transport an",
  },
  {
    icon: Users,
    title: "Unternehmen anfragen",
    description: "Erhalten Sie Angebote von qualifizierten Krankentransport-Unternehmen",
  },
  {
    icon: CheckCircle,
    title: "Buchung bestätigen",
    description: "Wählen Sie das beste Angebot und bestätigen Sie Ihre Buchung",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          So funktioniert's
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
