import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KateW</h3>
            <p className="text-background/70 leading-relaxed">
              Die moderne Plattform für Krankentransport-Vermittlung in Deutschland.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Partner werden</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Hilfe-Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-background transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Germany
          </p>
          <p className="mt-2">© 2024 KateW. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
