import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Heart, Activity, Code, Sparkles, CheckCircle, MapPin, Star, Users, TrendingUp, Shield, Globe } from "lucide-react";

type PartnerCategory = "Alle" | "Krankenhaus" | "Reha" | "Pflege" | "Software";

const categoryIcons = {
  "Alle": Sparkles,
  "Krankenhaus": Building2,
  "Reha": Activity,
  "Pflege": Heart,
  "Software": Code,
};

const partnerLogos = [
  { name: "Charité Berlin", logo: "CB", category: "Krankenhaus" as PartnerCategory, verified: true, city: "Berlin", rating: 4.9, employees: "15.000+" },
  { name: "Helios Kliniken", logo: "HK", category: "Krankenhaus" as PartnerCategory, verified: true, city: "Berlin", rating: 4.8, employees: "80.000+" },
  { name: "Asklepios", logo: "AS", category: "Krankenhaus" as PartnerCategory, verified: true, city: "Hamburg", rating: 4.7, employees: "67.000+" },
  { name: "Universitätsklinik", logo: "UK", category: "Krankenhaus" as PartnerCategory, verified: false, city: "München", rating: 4.8, employees: "12.000+" },
  { name: "MediaReha", logo: "MR", category: "Reha" as PartnerCategory, verified: true, city: "Frankfurt", rating: 4.6, employees: "2.500+" },
  { name: "Kur + Reha", logo: "KR", category: "Reha" as PartnerCategory, verified: false, city: "Baden-Baden", rating: 4.5, employees: "1.800+" },
  { name: "RehaZentrum", logo: "RZ", category: "Reha" as PartnerCategory, verified: true, city: "Köln", rating: 4.7, employees: "3.200+" },
  { name: "Caritas Pflege", logo: "CP", category: "Pflege" as PartnerCategory, verified: true, city: "Freiburg", rating: 4.8, employees: "25.000+" },
  { name: "AWO Seniorendienste", logo: "AW", category: "Pflege" as PartnerCategory, verified: true, city: "Essen", rating: 4.6, employees: "18.000+" },
  { name: "Korian", logo: "KO", category: "Pflege" as PartnerCategory, verified: false, city: "München", rating: 4.4, employees: "23.000+" },
  { name: "Alloheim", logo: "AL", category: "Pflege" as PartnerCategory, verified: true, city: "Düsseldorf", rating: 4.5, employees: "22.000+" },
  { name: "Connext Vivendi", logo: "CV", category: "Software" as PartnerCategory, verified: true, city: "Paderborn", rating: 4.7, employees: "500+" },
  { name: "CGM", logo: "CG", category: "Software" as PartnerCategory, verified: true, city: "Koblenz", rating: 4.6, employees: "8.500+" },
  { name: "Medifox", logo: "MF", category: "Software" as PartnerCategory, verified: false, city: "Hildesheim", rating: 4.5, employees: "400+" },
];

const stats = [
  { icon: Users, value: "500+", label: "Partner", color: "from-primary to-secondary" },
  { icon: Globe, value: "120+", label: "Städte", color: "from-secondary to-primary" },
  { icon: Star, value: "4.8", label: "Bewertung", color: "from-primary to-secondary" },
  { icon: Shield, value: "100%", label: "Verifiziert", color: "from-secondary to-primary" },
];

export const HomePartnersSection = () => {
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
        scrollPosition += 0.4;
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Elaborate Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}>
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            Deutschlands größtes Netzwerk
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Unsere Partner sind{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                überall
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Profitieren Sie von unserem Netzwerk führender Gesundheitseinrichtungen und erleben Sie erstklassigen Service
          </p>
        </motion.div>

        {/* Modern Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-14"
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
                className={`relative px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-500 flex items-center gap-2.5 overflow-hidden ${
                  isActive
                    ? "text-primary-foreground shadow-2xl shadow-primary/40"
                    : "bg-card/90 border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-card backdrop-blur-md"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: isActive ? 1 : 1.05, y: -2 }}
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
                  <span className={`text-xs px-2.5 py-1 rounded-full transition-colors font-bold ${
                    isActive 
                      ? "bg-white/25 text-primary-foreground" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {count}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Logo Slider with Premium Cards */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-hidden py-8"
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
                  >
                    <motion.div 
                      className="relative w-72 md:w-80 h-56 md:h-64 bg-card/95 backdrop-blur-xl border border-border/40 rounded-3xl flex flex-col cursor-pointer overflow-hidden group shadow-xl shadow-black/10"
                      animate={{ 
                        y: isHovered ? -12 : 0,
                        scale: isHovered ? 1.03 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {/* Hover Glow Effect */}
                      <motion.div 
                        className="absolute -inset-3 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-[2rem] blur-2xl"
                        animate={{ opacity: isHovered ? 0.6 : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Card Background Patterns */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                      
                      {/* Top Bar with Category & Verified */}
                      <div className="relative z-10 flex items-center justify-between p-5 pb-0">
                        <div className="flex items-center gap-2 text-muted-foreground/70">
                          <CategoryIcon className="w-4 h-4" />
                          <span className="text-xs font-medium">{partner.category}</span>
                        </div>
                        {partner.verified && (
                          <motion.div 
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold"
                            whileHover={{ scale: 1.05 }}
                          >
                            <CheckCircle className="w-3 h-3" />
                            Verifiziert
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Main Content */}
                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 gap-4">
                        <motion.div 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300 shadow-lg shadow-primary/10"
                          animate={{ rotate: isHovered ? [0, -3, 3, 0] : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {partner.logo}
                          </span>
                        </motion.div>
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                          <div className="flex items-center justify-center gap-1.5 text-muted-foreground mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="text-sm">{partner.city}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Stats Bar */}
                      <div className="relative z-10 flex items-center justify-between px-5 py-4 border-t border-border/30 bg-muted/30">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold text-foreground">{partner.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{partner.employees}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-primary">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">Top Partner</span>
                        </div>
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
