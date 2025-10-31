import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Die Plattform für
            <br />
            Krankentransport
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Finden Sie schnell und einfach zuverlässige Krankentransport-Unternehmen in Ihrer Nähe
          </p>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg p-6 md:p-8 animate-scale-in border border-border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="start" className="block text-sm font-medium mb-2 text-left">
                  Start
                </label>
                <Input
                  id="start"
                  placeholder="Von wo starten Sie?"
                  className="h-12 text-base"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="destination" className="block text-sm font-medium mb-2 text-left">
                  Ziel
                </label>
                <Input
                  id="destination"
                  placeholder="Wohin möchten Sie?"
                  className="h-12 text-base"
                />
              </div>
              <div className="flex items-end">
                <Button
                  size="lg"
                  className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Suchen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};
