import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export const MobileApp = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Von überall den passenden Krankentransport finden
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mit unserer mobilen App haben Sie immer und überall Zugriff auf unser
                umfassendes Netzwerk an Krankentransport-Unternehmen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background font-semibold h-14 px-8"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-foreground hover:text-background font-semibold h-14 px-8"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative z-10 flex justify-center">
                <div className="w-64 h-[500px] rounded-[3rem] bg-gradient-to-br from-primary to-secondary p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] bg-background flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-10 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
