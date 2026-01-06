import { User, Accessibility, Users, Bed } from "lucide-react";

const transportTypes = [
  {
    icon: User,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen. Komfortabler Transport im Fahrzeug mit Sitzgelegenheit.",
  },
  {
    icon: Accessibility,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer mit professioneller Sicherung und barrierefreiem Zugang.",
  },
  {
    icon: Users,
    title: "Tragestuhl",
    description: "Optimale Lösung für enge Treppenhäuser und schwierige Zugänge. Schonender Transport bei eingeschränkter Mobilität.",
  },
  {
    icon: Bed,
    title: "Liegend",
    description: "Vollausgestatteter Krankentransport auf Trage für bettlägerige Patienten mit medizinischer Betreuung.",
  },
];

export const TransportTypes = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transport-Optionen
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Für jeden Bedarf die passende Lösung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto animate-fade-in-up">
          {transportTypes.map((type, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-elevated hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <type.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
