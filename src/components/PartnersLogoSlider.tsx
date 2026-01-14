import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Building2, Heart, Activity, Code, Sparkles, CheckCircle, Star, ArrowUpRight, Zap } from "lucide-react";

type PartnerCategory = "Alle" | "Krankenhaus" | "Reha" | "Pflege" | "Software";

const categoryIcons = {
  "Alle": Sparkles,
  "Krankenhaus": Building2,
  "Reha": Activity,
  "Pflege": Heart,
  "Software": Code,
};

const partnerLogos = [
  { name: "Charité Berlin", logo: "CB", category: "Krankenhaus" as PartnerCategory, verified: true, rating: 4.9 },
  { name: "Helios Kliniken", logo: "HK", category: "Krankenhaus" as PartnerCategory, verified: true, rating: 4.8 },
  { name: "Asklepios", logo: "AS", category: "Krankenhaus" as PartnerCategory, verified: true, rating: 4.7 },
  { name: "Universitätsklinik", logo: "UK", category: "Krankenhaus" as PartnerCategory, verified: false, rating: 4.6 },
  { name: "MediaReha", logo: "MR", category: "Reha" as PartnerCategory, verified: true, rating: 4.8 },
  { name: "Kur + Reha", logo: "KR", category: "Reha" as PartnerCategory, verified: false, rating: 4.5 },
  { name: "RehaZentrum", logo: "RZ", category: "Reha" as PartnerCategory, verified: true, rating: 4.7 },
  { name: "Caritas Pflege", logo: "CP", category: "Pflege" as PartnerCategory, verified: true, rating: 4.9 },
  { name: "AWO Seniorendienste", logo: "AW", category: "Pflege" as PartnerCategory, verified: true, rating: 4.6 },
  { name: "Korian", logo: "KO", category: "Pflege" as PartnerCategory, verified: false, rating: 4.4 },
  { name: "Alloheim", logo: "AL", category: "Pflege" as PartnerCategory, verified: true, rating: 4.7 },
  { name: "Connext Vivendi", logo: "CV", category: "Software" as PartnerCategory, verified: true, rating: 4.8 },
  { name: "CGM", logo: "CG", category: "Software" as PartnerCategory, verified: true, rating: 4.5 },
  { name: "Medifox", logo: "MF", category: "Software" as PartnerCategory, verified: false, rating: 4.3 },
];

interface PartnersLogoSliderProps {
  title?: string;
  highlightedWord?: string;
}

const PartnerCard = ({ partner, index }: { partner: typeof partnerLogos[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const CategoryIcon = categoryIcons[partner.category];
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="flex-shrink-0 perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <motion.div 
        className="relative w-72 h-52 cursor-pointer"
        style={{ 
          rotateX: isHovered ? rotateX : 0, 
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d"
        }}
        animate={{ 
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Outer Glow */}
        <motion.div 
          className="absolute -inset-3 rounded-[2rem] blur-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--secondary) / 0.4), hsl(var(--primary) / 0.4))"
          }}
          animate={{ 
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Main Card */}
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/90 to-card/80 backdrop-blur-xl" />
          
          {/* Animated Border */}
          <motion.div 
            className="absolute inset-0 rounded-[1.5rem]"
            style={{
              background: isHovered 
                ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))"
                : "linear-gradient(135deg, hsl(var(--border) / 0.5), hsl(var(--border) / 0.3))",
              padding: "2px"
            }}
          >
            <div className="w-full h-full rounded-[calc(1.5rem-2px)] bg-gradient-to-br from-card via-card/98 to-card/95" />
          </motion.div>
          
          {/* Shine Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            initial={{ x: "-200%" }}
            animate={{ x: isHovered ? "200%" : "-200%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "16px 16px"
          }} />
          
          {/* Content Container */}
          <div className="relative z-10 w-full h-full p-6 flex flex-col">
            {/* Top Row - Category & Verified */}
            <div className="flex items-center justify-between mb-4">
              <motion.div 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30"
                whileHover={{ scale: 1.05 }}
              >
                <CategoryIcon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{partner.category}</span>
              </motion.div>
              
              {partner.verified && (
                <motion.div 
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                  animate={{ 
                    boxShadow: isHovered 
                      ? "0 0 20px hsl(var(--primary) / 0.3)" 
                      : "0 0 0px transparent"
                  }}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary">Verifiziert</span>
                </motion.div>
              )}
            </div>
            
            {/* Center - Logo */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateY: isHovered ? [0, 10, -10, 0] : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-primary/40 to-secondary/40"
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1.2 : 1
                  }}
                />
                
                <motion.div 
                  className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-xl"
                  animate={{
                    borderColor: isHovered ? "hsl(var(--primary) / 0.6)" : "hsl(var(--primary) / 0.3)"
                  }}
                >
                  <span className="text-4xl font-black bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
                    {partner.logo}
                  </span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Bottom Row - Name & Rating */}
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {partner.name}
                </h4>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(partner.rating) ? "text-secondary fill-secondary" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">{partner.rating}</span>
                </div>
              </div>
              
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotate: isHovered ? 0 : 0,
                }}
              >
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const PartnersLogoSlider = ({ 
  title = "Unsere Partner sind", 
  highlightedWord = "überall" 
}: PartnersLogoSliderProps) => {
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)"
          }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary) / 0.15), transparent 70%)"
          }}
          animate={{ 
            x: [0, -40, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border border-primary/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Deutschlandweites Netzwerk
            </span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </motion.div>
          
          {/* Title */}
          <motion.h3 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {title}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                {highlightedWord}
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </span>
          </motion.h3>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Vertrauen Sie auf unser Netzwerk aus über <span className="font-bold text-foreground">500+ verifizierten Partnern</span> in ganz Deutschland
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Glow */}
                {isActive && (
                  <motion.div 
                    className="absolute -inset-1 rounded-2xl blur-md bg-gradient-to-r from-primary via-secondary to-primary opacity-60"
                    layoutId="activeGlow"
                  />
                )}
                
                <div className={`relative px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl"
                    : "bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}>
                  <Icon className="w-4 h-4" />
                  {category}
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    isActive 
                      ? "bg-white/20" 
                      : "bg-muted"
                  }`}>
                    {count}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Partner Cards Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-hidden py-8 px-4"
            style={{ scrollBehavior: 'auto' }}
          >
            <AnimatePresence mode="popLayout">
              {[...filteredPartners, ...filteredPartners].map((partner, index) => (
                <PartnerCard 
                  key={`${partner.name}-${index}`} 
                  partner={partner} 
                  index={index % filteredPartners.length} 
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: "500+", label: "Partner", icon: Building2 },
            { value: "16", label: "Bundesländer", icon: Sparkles },
            { value: "4.8", label: "Ø Bewertung", icon: Star },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
