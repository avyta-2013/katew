import { Eye, Clock, Shield, Euro, Megaphone, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Überblick",
    description: "Alle relevanten Unternehmen auf einer Plattform vereint",
  },
  {
    icon: Clock,
    title: "Zeit",
    description: "Gleichzeitige Abfrage mehrerer Unternehmen spart dir wertvolle Zeit",
  },
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Durch unser Qualitätsmanagement haben schwarze Schafe keinen Platz bei uns",
  },
  {
    icon: Euro,
    title: "Kosten",
    description: "Vergleiche Unternehmen und spare als Selbstzahler bei deiner Wahl",
  },
  {
    icon: Megaphone,
    title: "Ausschreibung",
    description: "Erhalte Angebote für eine Sonderfahrt von Unternehmen bundesweit",
  },
  {
    icon: Handshake,
    title: "Kooperation",
    description: "Unternehmen, Kostenträger, Pflege- und Gesundheitseinrichtungen vertrauen uns",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Die Zukunft hat einen Namen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie die Vorteile unserer innovativen Plattform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
