import { useEffect, useRef, useState } from "react";

type PartnerCategory = "Alle" | "Krankenhaus" | "Reha" | "Pflege" | "Software";

const partnerLogos = [
  { name: "Charité Berlin", logo: "CB", category: "Krankenhaus" as PartnerCategory },
  { name: "Helios Kliniken", logo: "HK", category: "Krankenhaus" as PartnerCategory },
  { name: "Asklepios", logo: "AS", category: "Krankenhaus" as PartnerCategory },
  { name: "Universitätsklinik", logo: "UK", category: "Krankenhaus" as PartnerCategory },
  { name: "MediaReha", logo: "MR", category: "Reha" as PartnerCategory },
  { name: "Kur + Reha", logo: "KR", category: "Reha" as PartnerCategory },
  { name: "RehaZentrum", logo: "RZ", category: "Reha" as PartnerCategory },
  { name: "Caritas Pflege", logo: "CP", category: "Pflege" as PartnerCategory },
  { name: "AWO Seniorendienste", logo: "AW", category: "Pflege" as PartnerCategory },
  { name: "Korian", logo: "KO", category: "Pflege" as PartnerCategory },
  { name: "Alloheim", logo: "AL", category: "Pflege" as PartnerCategory },
  { name: "Connext Vivendi", logo: "CV", category: "Software" as PartnerCategory },
  { name: "CGM", logo: "CG", category: "Software" as PartnerCategory },
  { name: "Medifox", logo: "MF", category: "Software" as PartnerCategory },
];

export const PartnersLogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>("Alle");

  const filteredPartners = selectedCategory === "Alle" 
    ? partnerLogos 
    : partnerLogos.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, selectedCategory]);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Exclusive Partnerschaften
          </p>
          <h3 className="text-2xl md:text-3xl font-bold">
            Starke <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Branchenpartner</span>
          </h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Als Partner profitieren Sie von unseren Kooperationen mit führenden Unternehmen
          </p>
        </div>

        {/* Partner Categories - Clickable Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(["Alle", "Krankenhaus", "Reha", "Pflege", "Software"] as PartnerCategory[]).map((category) => {
            const count = category === "Alle" 
              ? partnerLogos.length 
              : partnerLogos.filter(p => p.category === category).length;
            const isActive = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive 
                    ? "bg-white/20 text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Logo Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Double the logos for seamless loop */}
            {[...filteredPartners, ...filteredPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-24 bg-card border border-border/50 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {partner.logo}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
