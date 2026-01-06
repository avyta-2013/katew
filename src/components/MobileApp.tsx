import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export const MobileApp = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Verfügbar auf iOS & Android
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Immer und überall
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  verfügbar
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Unsere App bringt professionelle Krankentransporte direkt auf Ihr Smartphone.
                Schnell, sicher und zuverlässig.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button
                  size="lg"
                  className="h-16 px-10 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-500 hover:scale-105"
                >
                  <Smartphone className="mr-3 h-6 w-6" />
                  Google Play
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105"
                >
                  <Smartphone className="mr-3 h-6 w-6" />
                  App Store
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in order-1 md:order-2">
              <div className="relative z-10 flex justify-center">
                <div className="w-80 h-[600px] rounded-[4rem] bg-gradient-to-br from-primary via-secondary to-primary p-4 shadow-elevated">
                  <div className="w-full h-full rounded-[3.5rem] bg-card flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <Smartphone className="w-32 h-32 text-primary/30 relative z-10" />
                  </div>
                </div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
