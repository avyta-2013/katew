import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Handshake, ArrowRight, MapPin, Star, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const germanCities = [
  { name: "Berlin", partners: 78 },
  { name: "Hamburg", partners: 52 },
  { name: "München", partners: 65 },
  { name: "Köln", partners: 41 },
  { name: "Frankfurt", partners: 48 },
  { name: "Stuttgart", partners: 35 },
  { name: "Düsseldorf", partners: 32 },
  { name: "Leipzig", partners: 28 },
  { name: "Dortmund", partners: 26 },
  { name: "Essen", partners: 22 },
  { name: "Bremen", partners: 19 },
  { name: "Dresden", partners: 24 },
  { name: "Hannover", partners: 29 },
  { name: "Nürnberg", partners: 31 },
  { name: "Duisburg", partners: 18 },
  { name: "Bochum", partners: 16 },
  { name: "Wuppertal", partners: 14 },
  { name: "Bielefeld", partners: 17 },
  { name: "Bonn", partners: 21 },
  { name: "Münster", partners: 23 },
  { name: "Mannheim", partners: 18 },
  { name: "Karlsruhe", partners: 15 },
  { name: "Augsburg", partners: 14 },
  { name: "Wiesbaden", partners: 16 },
  { name: "Mönchengladbach", partners: 12 },
  { name: "Gelsenkirchen", partners: 11 },
  { name: "Aachen", partners: 19 },
  { name: "Braunschweig", partners: 13 },
  { name: "Kiel", partners: 12 },
  { name: "Chemnitz", partners: 10 },
];

const benefits = [
  {
    icon: Handshake,
    title: "Starke Kooperationen",
    description: "Profitieren Sie von unseren Partnerschaften mit Kliniken und Einrichtungen.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Digitale Vermittlung",
    description: "Automatisierte Auftragsvergabe – weniger Aufwand, mehr Effizienz.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Bessere Auslastung",
    description: "Mehr Aufträge, weniger Leerlauf – optimieren Sie Ihre Kapazitäten.",
    color: "from-emerald-500 to-emerald-600",
  },
];

const stats = [
  { value: "500+", label: "Partner", icon: Users },
  { value: "30+", label: "Städte", icon: MapPin },
  { value: "98%", label: "Zufriedenheit", icon: Star },
];

export const ProvidersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="anbieter" className="py-24 md:py-32 bg-background overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Truck className="w-4 h-4 text-primary" />
              <span>Für Anbieter</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Werden Sie Teil unseres Netzwerks
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Über 500 Krankenfahrtunternehmen deutschlandweit vertrauen auf uns
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="flex gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                        whileHover={{ x: 8, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="h-14 px-8 rounded-2xl font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all group"
                >
                  <Link to="/anmelden?type=anbieter">
                    Jetzt Anbieter werden
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl overflow-hidden"
                whileHover={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.2)" }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
                
                {/* Cities List */}
                <ScrollArea className="h-[350px] rounded-2xl">
                  <div className="grid grid-cols-1 gap-2 pr-4">
                    {germanCities.map((city, index) => (
                      <motion.div
                        key={city.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-muted/30 transition-colors group cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{city.name}</span>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                          {city.partners}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="text-center p-4 rounded-2xl bg-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
