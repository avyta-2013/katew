import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Star, ArrowRight, ChevronLeft, ChevronRight, Globe, Navigation, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";
import partner4 from "@/assets/partner-4.jpg";
import partner5 from "@/assets/partner-5.jpg";
import partner6 from "@/assets/partner-6.jpg";
import partner7 from "@/assets/partner-7.jpg";
import partner8 from "@/assets/partner-8.jpg";

interface Partner {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  image: string;
  services: string[];
}

const partners: Partner[] = [
  { id: "1", name: "MediTrans Deutschland", location: "Berlin", rating: 4.9, reviewCount: 234, verified: true, image: partner1, services: ["Liegend", "Sitzend"] },
  { id: "2", name: "Bundesweiter Krankenfahrdienst", location: "Hamburg", rating: 4.8, reviewCount: 189, verified: true, image: partner2, services: ["Rollstuhl", "Sitzend"] },
  { id: "3", name: "CareMobil Pro", location: "München", rating: 4.9, reviewCount: 312, verified: true, image: partner3, services: ["Liegend", "Tragestuhl"] },
  { id: "4", name: "TransMed Services", location: "Frankfurt", rating: 4.7, reviewCount: 156, verified: true, image: partner4, services: ["Sitzend", "Rollstuhl"] },
  { id: "5", name: "MobiCare Express", location: "Köln", rating: 4.8, reviewCount: 278, verified: true, image: partner5, services: ["Liegend", "Sitzend"] },
  { id: "6", name: "SaniTrans GmbH", location: "Stuttgart", rating: 4.6, reviewCount: 145, verified: true, image: partner6, services: ["Tragestuhl", "Liegend"] },
  { id: "7", name: "FlexMed Transport", location: "Düsseldorf", rating: 4.9, reviewCount: 203, verified: true, image: partner7, services: ["Sitzend", "Rollstuhl"] },
  { id: "8", name: "VitaCare Fahrdienst", location: "Leipzig", rating: 4.7, reviewCount: 167, verified: true, image: partner8, services: ["Liegend", "Tragestuhl"] },
];

type FilterType = "deutschlandweit" | "regional";

export const HomePartnersSection = () => {
  const [filter, setFilter] = useState<FilterType>("deutschlandweit");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const visibleCards = 4;
  const maxIndex = Math.max(0, partners.length - visibleCards);

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Unsere Anbieter sind{" "}
              <span className="bg-gradient-to-r from-primary via-primary/70 to-accent bg-clip-text text-transparent">überall</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Entdecken Sie verifizierte Krankenfahrtunternehmen in Ihrer Nähe
            </p>
          </div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex rounded-full bg-card/80 backdrop-blur-sm p-1.5 border border-border/50 shadow-lg">
              <Button
                variant={filter === "deutschlandweit" ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === "deutschlandweit"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
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
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setFilter("regional")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Regional
              </Button>
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-11 h-11 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-11 h-11 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Airbnb-style Cards */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: -currentIndex * (100 / visibleCards + 1.25) + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(partner.id, e)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        favorites.has(partner.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      }`}
                    />
                  </button>
                  {/* Verified Badge */}
                  {partner.verified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verifiziert
                    </div>
                  )}
                </div>

                {/* Info below image */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-[15px] truncate pr-2">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                      <span className="text-sm font-semibold text-foreground">{partner.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{partner.location}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {partner.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {partner.reviewCount} Bewertungen
                  </p>
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
          transition={{ delay: 0.3 }}
        >
          <motion.div className="text-center group" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Anbieter deutschlandweit</div>
          </motion.div>
          <motion.div className="text-center group" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50.000+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fahrten pro Monat</div>
          </motion.div>
          <motion.div className="text-center group" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.8</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Durchschnittliche Bewertung</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
