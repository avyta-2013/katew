import { User, Accessibility, Users, Bed, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const transportTypes = [
  {
    icon: User,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen.",
  },
  {
    icon: Accessibility,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer.",
  },
  {
    icon: Users,
    title: "Tragestuhl",
    description: "Optimal für enge Treppenhäuser und schwierige Zugänge.",
  },
  {
    icon: Bed,
    title: "Liegend",
    description: "Vollausgestatteter Transport auf Trage.",
  },
];

export const TransportTypes = () => {
  return (
    <section id="transport" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transport-Optionen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Für jeden Bedarf die passende Lösung – von sitzend bis liegend.
            </p>
          </div>

          {/* Transport Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-card hover:border-border transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <type.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};