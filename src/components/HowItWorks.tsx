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
    <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-8 animate-fade-in tracking-tight">
          So funktioniert's
        </h2>
        <p className="text-2xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto font-light">
          In nur drei einfachen Schritten zu Ihrem Transport
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-elevated group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-14 h-14 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-5">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Modern connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%]">
                    <div className="h-0.5 bg-gradient-to-r from-primary/40 via-secondary/40 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
