import { useEffect, useRef, useState } from "react";

const partnerLogos = [
  { name: "Mercedes-Benz", logo: "M" },
  { name: "Volkswagen", logo: "VW" },
  { name: "Ford", logo: "F" },
  { name: "Opel", logo: "O" },
  { name: "Fiat", logo: "FI" },
  { name: "Stryker", logo: "ST" },
  { name: "Hartmann", logo: "H" },
  { name: "Dräger", logo: "DR" },
  { name: "B. Braun", logo: "BB" },
  { name: "Fresenius", logo: "FR" },
  { name: "Siemens", logo: "SI" },
  { name: "GE Healthcare", logo: "GE" },
];

export const PartnersLogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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
  }, [isPaused]);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Kooperationspartner
          </p>
          <h3 className="text-2xl md:text-3xl font-bold">
            Exklusive <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partnervorteile</span>
          </h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Als Mitglied profitieren Sie von unseren Rahmenverträgen mit führenden Unternehmen
          </p>
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
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
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

        {/* Partner Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["Fahrzeugbauer", "Verbrauchsmaterial", "Medizintechnik", "Software"].map((category) => (
            <div 
              key={category}
              className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
