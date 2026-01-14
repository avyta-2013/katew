import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, CheckCircle, Star, ArrowRight, ChevronLeft, ChevronRight, Globe, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Partner {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
}

const partners: Partner[] = [
  { id: "1", name: "MediTrans Deutschland", location: "Berlin", rating: 4.9, reviewCount: 234, verified: true },
  { id: "2", name: "Bundesweiter Krankenfahrdienst", location: "Hamburg", rating: 4.8, reviewCount: 189, verified: true },
  { id: "3", name: "CareMobil Pro", location: "München", rating: 4.9, reviewCount: 312, verified: true },
  { id: "4", name: "TransMed Services", location: "Frankfurt", rating: 4.7, reviewCount: 156, verified: true },
  { id: "5", name: "MobiCare Express", location: "Köln", rating: 4.8, reviewCount: 278, verified: true },
  { id: "6", name: "SaniTrans GmbH", location: "Stuttgart", rating: 4.6, reviewCount: 145, verified: true },
  { id: "7", name: "FlexMed Transport", location: "Düsseldorf", rating: 4.9, reviewCount: 203, verified: true },
  { id: "8", name: "VitaCare Fahrdienst", location: "Leipzig", rating: 4.7, reviewCount: 167, verified: true },
];

type FilterType = "deutschlandweit" | "regional";

export const HomePartnersSection = () => {
  const [filter, setFilter] = useState<FilterType>("deutschlandweit");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleCards = 4;
  const maxIndex = Math.max(0, partners.length - visibleCards);
  
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Unsere Anbieter sind{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">überall</span>
          </motion.h2>
          
          {/* Filter & Navigation */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Filter Buttons */}
            <div className="flex rounded-full bg-card/80 backdrop-blur-sm p-1.5 border border-border/50 shadow-lg">
              <Button
                variant={filter === "deutschlandweit" ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === "deutschlandweit" 
                    ? "bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setFilter("deutschlandweit")}
              >
                <Globe className="w-4 h-4 mr-2" />
                Deutschlandweit
              </Button>
              <Button
                variant={filter === "regional" ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === "regional" 
                    ? "bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setFilter("regional")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Regional
              </Button>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <motion.button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-11 h-11 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-11 h-11 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Partner Cards Grid */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: -currentIndex * (100 / visibleCards + 1.5) + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="group relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                  
                  {/* Top Section - Icon & Rating */}
                  <div className="relative flex items-start justify-between mb-5">
                    {/* Truck Icon */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Truck className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full px-3 py-1.5">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">{partner.rating}</span>
                    </div>
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="relative text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[56px]">
                    {partner.name}
                  </h3>
                  
                  {/* Location */}
                  <div className="relative flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{partner.location}</span>
                  </div>
                  
                  {/* Verified Badge */}
                  {partner.verified && (
                    <div className="relative flex items-center gap-2 mb-5">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Verifizierter Anbieter</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom Section - Reviews & Profile Link */}
                  <div className="relative flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      {partner.reviewCount} Bewertungen
                    </span>
                    <motion.button 
                      className="flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group/link"
                      whileHover={{ x: 3 }}
                    >
                      Profil
                      <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14 pt-10 border-t border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-1">500+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Anbieter deutschlandweit</div>
          </motion.div>
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-1">50.000+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fahrten pro Monat</div>
          </motion.div>
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-1">4.8</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Durchschnittliche Bewertung</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
