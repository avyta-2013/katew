import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Heart, Activity, Code, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type PartnerCategory = "Alle" | "Krankenhaus" | "Reha" | "Pflege" | "Software";

const categoryIcons = {
  "Alle": Sparkles,
  "Krankenhaus": Building2,
  "Reha": Activity,
  "Pflege": Heart,
  "Software": Code,
};

const partnerLogos = [
  { id: "charite-berlin", name: "Charité Berlin", logo: "CB", category: "Krankenhaus" as PartnerCategory, verified: true },
  { id: "helios-kliniken", name: "Helios Kliniken", logo: "HK", category: "Krankenhaus" as PartnerCategory, verified: true },
  { id: "asklepios", name: "Asklepios", logo: "AS", category: "Krankenhaus" as PartnerCategory, verified: true },
  { id: "universitaetsklinik", name: "Universitätsklinik", logo: "UK", category: "Krankenhaus" as PartnerCategory, verified: false },
  { id: "mediareha", name: "MediaReha", logo: "MR", category: "Reha" as PartnerCategory, verified: true },
  { id: "kur-reha", name: "Kur + Reha", logo: "KR", category: "Reha" as PartnerCategory, verified: false },
  { id: "rehazentrum", name: "RehaZentrum", logo: "RZ", category: "Reha" as PartnerCategory, verified: true },
  { id: "caritas-pflege", name: "Caritas Pflege", logo: "CP", category: "Pflege" as PartnerCategory, verified: true },
  { id: "awo-seniorendienste", name: "AWO Seniorendienste", logo: "AW", category: "Pflege" as PartnerCategory, verified: true },
  { id: "korian", name: "Korian", logo: "KO", category: "Pflege" as PartnerCategory, verified: false },
  { id: "alloheim", name: "Alloheim", logo: "AL", category: "Pflege" as PartnerCategory, verified: true },
  { id: "connext-vivendi", name: "Connext Vivendi", logo: "CV", category: "Software" as PartnerCategory, verified: true },
  { id: "cgm", name: "CGM", logo: "CG", category: "Software" as PartnerCategory, verified: true },
  { id: "medifox", name: "Medifox", logo: "MF", category: "Software" as PartnerCategory, verified: false },
];

interface PartnersLogoSliderProps {
  title?: string;
  highlightedWord?: string;
}

export const PartnersLogoSlider = ({ 
  title = "Starke", 
  highlightedWord = "Branchenpartner" 
}: PartnersLogoSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>("Alle");
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Exklusive Partnerschaften
          </motion.div>
          
          
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            {title} <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]">{highlightedWord}</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Als Partner profitieren Sie von unseren Kooperationen mit führenden Unternehmen
          </p>
        </motion.div>

        {/* Modern Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {(["Alle", "Krankenhaus", "Reha", "Pflege", "Software"] as PartnerCategory[]).map((category, index) => {
            const count = category === "Alle" 
              ? partnerLogos.length 
              : partnerLogos.filter(p => p.category === category).length;
            const isActive = selectedCategory === category;
            const Icon = categoryIcons[category];
            
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-500 flex items-center gap-2.5 overflow-hidden ${
                  isActive
                    ? "text-primary-foreground shadow-xl shadow-primary/30"
                    : "bg-card/80 border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-card"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: isActive ? 1 : 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]"
                    layoutId="activeCategory"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  {category}
                  <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                    isActive 
                      ? "bg-white/20 text-primary-foreground" 
                      : "bg-muted/80 text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Logo Slider with Enhanced Cards */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Double the logos for seamless loop */}
            <AnimatePresence mode="popLayout">
              {[...filteredPartners, ...filteredPartners].map((partner, index) => {
                const isHovered = hoveredPartner === `${partner.name}-${index}`;
                const CategoryIcon = categoryIcons[partner.category];
                
                  return (
                    <motion.div
                      key={`${partner.name}-${index}`}
                      className="flex-shrink-0"
                      onMouseEnter={() => setHoveredPartner(`${partner.name}-${index}`)}
                      onMouseLeave={() => setHoveredPartner(null)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link to={`/kooperationspartner/${partner.id}`}>
                        <motion.div 
                          className="relative w-48 h-32 bg-card/90 backdrop-blur-md border border-border/40 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden group shadow-md shadow-black/5"
                          animate={{ 
                            y: isHovered ? -8 : 0,
                            scale: isHovered ? 1.05 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {/* Hover Glow */}
                          <motion.div 
                            className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-2xl blur-xl"
                            animate={{ opacity: isHovered ? 0.6 : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Card Background Effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          />
                          
                          {/* Verified Badge */}
                          {partner.verified && (
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-sm">
                              <CheckCircle className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                          
                          {/* Category Icon */}
                          <div className="absolute top-2 left-2">
                            <CategoryIcon className="w-4 h-4 text-muted-foreground/60" />
                          </div>
                          
                          {/* Main Content */}
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <motion.div 
                              className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/25 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300"
                              animate={{ rotate: isHovered ? [0, -3, 3, 0] : 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <span className="text-xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {partner.logo}
                              </span>
                            </motion.div>
                            <span className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors text-center px-2">
                              {partner.name}
                            </span>
                          </div>
                          
                          {/* Bottom Accent Line */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: "center" }}
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
