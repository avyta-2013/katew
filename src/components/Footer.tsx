import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  unternehmen: [
    { label: "Wir", href: "#wir" },
    { label: "Blog", href: "#" },
  ],
  produkt: [
    { label: "Für Anbieter", href: "#anbieter" },
    { label: "Für Partner", href: "#partner" },
    { label: "Funktionen", href: "#" },
  ],
  support: [
    { label: "Hilfe-Center", href: "#" },
    { label: "Kontakt", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  rechtliches: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="inline-block mb-4">
                <img src={logo} alt="katew Logo" className="h-8" />
              </a>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Die moderne Plattform für Krankenfahrten in Deutschland.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="mailto:support@katew.de" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  support@katew.de
                </a>
                <a href="tel:+4915561231" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +49 155 61 231
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Frankfurt, Deutschland
                </p>
              </div>
            </div>

            {/* Link columns */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Unternehmen</h4>
              <ul className="space-y-3">
                {footerLinks.unternehmen.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Produkt</h4>
              <ul className="space-y-3">
                {footerLinks.produkt.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Rechtliches</h4>
              <ul className="space-y-3">
                {footerLinks.rechtliches.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} katew. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made in Germany 🇩🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
