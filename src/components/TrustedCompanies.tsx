import { Star, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const companies = [
  {
    name: "TransportMed Hamburg",
    rating: 4.9,
    reviews: 847,
    city: "Hamburg",
    specialties: ["Rollstuhl", "Liegend"],
  },
  {
    name: "QuickCare Berlin",
    rating: 4.8,
    reviews: 1203,
    city: "Berlin",
    specialties: ["Sitzend", "Tragestuhl"],
  },
  {
    name: "MediMove München",
    rating: 4.9,
    reviews: 956,
    city: "München",
    specialties: ["Liegend", "Rollstuhl"],
  },
  {
    name: "CarePlus Köln",
    rating: 4.7,
    reviews: 674,
    city: "Köln",
    specialties: ["Sitzend", "Rollstuhl"],
  },
  {
    name: "VitalTransport Frankfurt",
    rating: 4.8,
    reviews: 892,
    city: "Frankfurt",
    specialties: ["Tragestuhl", "Liegend"],
  },
  {
    name: "HealthRide Stuttgart",
    rating: 4.9,
    reviews: 1045,
    city: "Stuttgart",
    specialties: ["Rollstuhl", "Sitzend"],
  },
];

export const TrustedCompanies = () => {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState<typeof companies>([]);

  useEffect(() => {
    // Duplicate the array for seamless infinite scroll
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Top bewertete Partner
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Vertrauen Sie auf Excellence in Ihrer Region
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-6 animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[380px] bg-card border border-border rounded-3xl p-8 hover:shadow-elevated hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{company.city}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-gradient-to-br from-primary to-secondary text-primary-foreground px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{company.rating}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {company.reviews} Bewertungen
              </p>

              <div className="flex flex-wrap gap-2">
                {company.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
