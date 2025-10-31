import { Card, CardContent } from "@/components/ui/card";
import transportSitting from "@/assets/transport-sitting.jpg";
import transportWheelchair from "@/assets/transport-wheelchair.jpg";
import transportStairchair from "@/assets/transport-stairchair.jpg";
import transportStretcher from "@/assets/transport-stretcher.jpg";

const transportTypes = [
  {
    image: transportSitting,
    title: "Sitzend",
    description: "Komfortabler Transport für Patienten, die selbstständig sitzen können",
  },
  {
    image: transportWheelchair,
    title: "Rollstuhl",
    description: "Spezialisierte Fahrzeuge mit barrierefreiem Zugang für Rollstuhlfahrer",
  },
  {
    image: transportStairchair,
    title: "Tragestuhl",
    description: "Professioneller Transport mit speziellen Tragestühlen für Treppen",
  },
  {
    image: transportStretcher,
    title: "Liegend",
    description: "Medizinischer Liegendtransport mit professioneller Betreuung",
  },
];

export const TransportTypes = () => {
  return (
    <section className="py-32 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Jeder Transport
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">perfekt organisiert</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Von sitzend bis liegend – wir haben die passende Lösung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {transportTypes.map((type, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 border-border/50 bg-card/50 backdrop-blur overflow-hidden animate-scale-in hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10 opacity-80" />
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
