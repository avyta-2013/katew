import { Star, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const companies = [
  { name: "TransportMed", city: "Hamburg" },
  { name: "QuickCare", city: "Berlin" },
  { name: "MediMove", city: "München" },
  { name: "CarePlus", city: "Köln" },
  { name: "VitalTransport", city: "Frankfurt" },
  { name: "HealthRide", city: "Stuttgart" },
];

export const TrustedCompanies = () => {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState<typeof companies>([]);

  useEffect(() => {
    setDuplicatedCompanies([...companies, ...companies, ...companies]);
  }, []);

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-12 animate-scroll items-center">
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 flex items-center gap-3 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <span className="font-semibold text-sm">{company.name.charAt(0)}</span>
              </div>
              <span className="font-medium whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};