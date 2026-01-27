import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, ArrowRight, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const rotatingWords = ["schnell", "sicher", "einfach", "digital"];

export const Hero = () => {
  const navigate = useNavigate();
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    navigate(`/buchen?start=${encodeURIComponent(startAddress)}&end=${encodeURIComponent(endAddress)}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-[150px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <motion.span 
                className="w-2.5 h-2.5 rounded-full bg-secondary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-foreground">
                Über <span className="text-primary font-bold">500</span> zertifizierte Partner deutschlandweit
              </span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[1.05] tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Krankenfahrt
              </span>
              <span className="block text-foreground mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-secondary"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                {" "}organisiert.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Finden Sie zuverlässige Transportunternehmen in Ihrer Nähe – 
            <span className="text-foreground font-medium"> transparent, digital und sicher.</span>
          </motion.p>

          {/* Search Card */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 p-6 md:p-8">
                {/* Transport type tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Sitzend", "Rollstuhl", "Tragestuhl", "Liegend"].map((type, index) => (
                    <motion.button
                      key={type}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        index === 0 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                          : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>

                {/* Address inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-focus-within:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <Input
                      placeholder="Startadresse eingeben"
                      value={startAddress}
                      onChange={(e) => setStartAddress(e.target.value)}
                      className="h-16 pl-16 pr-4 text-base bg-muted/30 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 focus:bg-muted/50 transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-focus-within:bg-secondary/20 transition-colors">
                      <Navigation className="w-5 h-5 text-secondary" />
                    </div>
                    <Input
                      placeholder="Zieladresse eingeben"
                      value={endAddress}
                      onChange={(e) => setEndAddress(e.target.value)}
                      className="h-16 pl-16 pr-4 text-base bg-muted/30 border-0 rounded-2xl focus:ring-2 focus:ring-secondary/30 focus:bg-muted/50 transition-all"
                    />
                  </div>
                </div>

                {/* Date and time row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="relative col-span-1">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="date"
                      className="h-12 pl-11 text-sm bg-muted/30 border-0 rounded-xl"
                    />
                  </div>
                  <div className="relative col-span-1">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="time"
                      className="h-12 pl-11 text-sm bg-muted/30 border-0 rounded-xl"
                    />
                  </div>
                  <motion.div 
                    className="col-span-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      size="lg"
                      onClick={handleSearch}
                      className="w-full h-12 text-base font-bold rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    >
                      Fahrt finden
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>

                {/* Trust indicators inline */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2 border-t border-border/30">
                  {[
                    { text: "500+ Partner", icon: "partners" },
                    { text: "98% Zufriedenheit", icon: "satisfaction" },
                    { text: "<5min Vermittlung", icon: "speed" },
                    { text: "24/7 Erreichbar", icon: "tuv" },
                    { text: "DSGVO Konform", icon: "dsgvo" },
                  ].map((item, index) => (
                    <motion.div 
                      key={item.text}
                      className="flex items-center gap-1.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.08 }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-xs">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
