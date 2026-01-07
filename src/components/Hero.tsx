import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Über 500 zertifizierte Partner deutschlandweit
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Krankenfahrt,</span>
            <br />
            <span className="text-muted-foreground">einfach organisiert.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-normal leading-relaxed animate-fade-in">
            Finden Sie zuverlässige Transportunternehmen in Ihrer Nähe – 
            schnell, transparent und sicher.
          </p>

          {/* Search Card */}
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-elevated border border-border/50 p-6 animate-scale-in">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Startadresse"
                  className="h-14 pl-12 text-base bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex-1 relative">
                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Zieladresse"
                  className="h-14 pl-12 text-base bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                Fahrt finden
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Kostenlose Anfrage
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Geprüfte Unternehmen
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Schnelle Vermittlung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
