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
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Top bewertete Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Vertrauen Sie auf geprüfte Qualität in Ihrer Region
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-6 animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{company.city}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-sm font-semibold">{company.rating}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                {company.reviews} Bewertungen
              </p>

              <div className="flex flex-wrap gap-2">
                {company.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md"
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
