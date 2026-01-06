import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight, Star } from "lucide-react";

export const MobileApp = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated border border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Text Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 w-fit mb-6">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Verfügbar auf iOS & Android</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Immer und überall verfügbar
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Unsere App bringt professionelle Krankentransporte direkt auf Ihr Smartphone. Schnell, sicher und zuverlässig – wo immer Sie sind.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 h-12">
                    App Store
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-2 px-6 h-12">
                    Google Play
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 von 5 Sternen · 2.400+ Bewertungen</span>
                </div>
              </div>

              {/* Right Side - Phone Mock */}
              <div className="relative flex items-center justify-center p-8 bg-muted/30">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-float">
                    <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex flex-col">
                      {/* Phone Screen Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary-foreground text-sm">K</span>
                          </div>
                          <span className="font-semibold">KATEW</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-muted rounded-xl p-4">
                            <p className="text-xs text-muted-foreground mb-1">Nächster Transport</p>
                            <p className="font-semibold text-sm">Heute, 14:30 Uhr</p>
                          </div>
                          <div className="bg-primary/10 rounded-xl p-4">
                            <p className="text-xs text-muted-foreground mb-1">Status</p>
                            <p className="font-semibold text-sm text-primary">Fahrer unterwegs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Notification */}
                  <div className="absolute -left-12 top-20 bg-card rounded-2xl shadow-elevated p-4 border border-border/50 max-w-[180px]">
                    <p className="text-xs text-secondary font-semibold mb-1">Transport bestätigt ✓</p>
                    <p className="text-xs text-muted-foreground">Ihr Transport wurde erfolgreich gebucht.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};