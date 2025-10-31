import { Card, CardContent } from "@/components/ui/card";
import featureOverview from "@/assets/feature-overview.jpg";
import featureTime from "@/assets/feature-time.jpg";
import featureSecurity from "@/assets/feature-security.jpg";
import featureCost from "@/assets/feature-cost.jpg";
import featureTender from "@/assets/feature-tender.jpg";
import featureCooperation from "@/assets/feature-cooperation.jpg";

const features = [
  {
    image: featureOverview,
    title: "Überblick",
    description: "Alle relevanten Unternehmen auf einer Plattform vereint",
  },
  {
    image: featureTime,
    title: "Zeit",
    description: "Gleichzeitige Abfrage mehrerer Unternehmen spart dir wertvolle Zeit",
  },
  {
    image: featureSecurity,
    title: "Sicherheit",
    description: "Durch unser Qualitätsmanagement haben schwarze Schafe keinen Platz bei uns",
  },
  {
    image: featureCost,
    title: "Kosten",
    description: "Vergleiche Unternehmen und spare als Selbstzahler bei deiner Wahl",
  },
  {
    image: featureTender,
    title: "Ausschreibung",
    description: "Erhalte Angebote für eine Sonderfahrt von Unternehmen bundesweit",
  },
  {
    image: featureCooperation,
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
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
