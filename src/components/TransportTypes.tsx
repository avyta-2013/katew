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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Alle Transportarten an einem Ort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Egal welche Transportart Sie benötigen – bei uns finden Sie das passende Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {transportTypes.map((type, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
