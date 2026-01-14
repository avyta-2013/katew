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
            Unsere Partner sind{" "}
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
            <div className="flex rounded-full bg-muted/50 p-1 border border-border/50">
              <Button
                variant={filter === "deutschlandweit" ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === "deutschlandweit" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setFilter("deutschlandweit")}
              >
                <Globe className="w-4 h-4 mr-2" />
                Deutschlandweit
              </Button>
              <Button
                variant={filter === "regional" ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === "regional" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setFilter("regional")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Regional
              </Button>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
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
                <div className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Top Section - Icon & Rating */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Truck Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Truck className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 bg-muted/50 rounded-full px-3 py-1.5">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">{partner.rating}</span>
                    </div>
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]">
                    {partner.name}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{partner.location}</span>
                  </div>
                  
                  {/* Verified Badge */}
                  {partner.verified && (
                    <div className="flex items-center gap-2 text-primary mb-5">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Verifizierter Partner</span>
                    </div>
                  )}
                  
                  {/* Bottom Section - Reviews & Profile Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      {partner.reviewCount} Bewertungen
                    </span>
                    <button className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all group/link">
                      Profil
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
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
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Partner deutschlandweit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50.000+</div>
            <div className="text-sm text-muted-foreground">Fahrten pro Monat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">Durchschnittliche Bewertung</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
