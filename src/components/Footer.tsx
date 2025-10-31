import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KATEW
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              Die moderne Plattform für Krankentransport in Deutschland.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Unternehmen</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors text-base">Über uns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">Karriere</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">Partner werden</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors text-base">Hilfe-Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">Kontakt</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Rechtliches</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors text-base">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-base">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p className="flex items-center gap-2 text-base">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> in Germany
          </p>
          <p className="text-base">© 2024 KATEW. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
