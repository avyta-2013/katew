import { Building2, Heart, Shield, Users, Award, Star } from "lucide-react";

const partners = [
  { name: "Krankenhaus Nord", icon: Building2 },
  { name: "Pflegewerk", icon: Heart },
  { name: "Sicherheit Plus", icon: Shield },
  { name: "Sozialverband", icon: Users },
  { name: "Qualität Zertifikat", icon: Award },
  { name: "Premium Partner", icon: Star },
];

export const Partners = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Unsere Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen Sie auf bewährte Kooperationen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <partner.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
              <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
