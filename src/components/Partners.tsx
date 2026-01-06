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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Partner
            </h2>
            <p className="text-muted-foreground">
              Vertrauen Sie auf bewährte Kooperationen
            </p>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl hover:shadow-card hover:border-border transition-all duration-300 group"
              >
                <partner.icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors mb-3" />
                <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};