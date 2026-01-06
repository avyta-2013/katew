import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit loszulegen?
            </h2>
            <p className="text-muted-foreground mb-8">
              Starten Sie noch heute mit KATEW und erleben Sie modernen Krankentransport.
            </p>
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary-foreground text-sm">K</span>
                </div>
                <span className="font-bold text-lg">KATEW</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die moderne Plattform für Krankentransport in Deutschland.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partner werden</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 KATEW. Alle Rechte vorbehalten.</p>
            <p>Made with ❤️ in Germany</p>
          </div>
        </div>
      </div>
    </footer>
  );
};