import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Krankentransport
            </span>
            <br />
            <span className="text-foreground">neu gedacht</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Zuverlässige Transportunternehmen in Ihrer Nähe – schnell, sicher und transparent
          </p>

          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl rounded-3xl shadow-elevated p-8 md:p-12 animate-scale-in border border-border/50">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="start" className="block text-base font-semibold mb-3 text-left text-foreground">
                  Startort
                </label>
                <Input
                  id="start"
                  placeholder="Von wo starten Sie?"
                  className="h-16 text-lg bg-background/50 border-border/50 focus:border-primary transition-all"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="destination" className="block text-base font-semibold mb-3 text-left text-foreground">
                  Zielort
                </label>
                <Input
                  id="destination"
                  placeholder="Wohin möchten Sie?"
                  className="h-16 text-lg bg-background/50 border-border/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            <Button
              size="lg"
              className="w-full mt-6 h-16 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
            >
              <Search className="mr-3 h-6 w-6" />
              Jetzt Fahrt anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};
