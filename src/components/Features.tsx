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
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Warum <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KATEW</span>?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Modernste Technologie für Ihre Gesundheit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur overflow-hidden animate-scale-in hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-60" />
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
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
