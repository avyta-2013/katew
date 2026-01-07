import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  plattform: [
    { label: "Fahrt buchen", href: "/" },
    { label: "Für Anbieter", href: "/fuer-anbieter" },
    { label: "Für Partner", href: "/fuer-partner" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/wir" },
    { label: "Blog", href: "/blog" },
    { label: "Karriere", href: "/karriere" },
  ],
  support: [
    { label: "Hilfe-Center", href: "/hilfe" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const Footer = () => {

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-muted/50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-secondary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative">

        {/* Main footer */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
            <div className="col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">katew</span>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-xs">
                Die moderne Plattform für Krankenfahrten in Deutschland. Einfach, digital, zuverlässig.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:support@katew.de" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">support@katew.de</span>
                </a>
                <a href="tel:+4915561231" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">+49 155 61 231</span>
                </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm">Allerheiligentor 2-4, 60311 Frankfurt</span>
                </div>
              </div>

            </div>

            {/* Link columns */}
            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground/80">Plattform</h4>
              <ul className="space-y-3">
                {footerLinks.plattform.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground/80">Unternehmen</h4>
              <ul className="space-y-3">
                {footerLinks.unternehmen.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground/80">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground/80">Rechtliches</h4>
              <ul className="space-y-3">
                {footerLinks.rechtliches.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} katew. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                Made with <span className="text-red-500">♥</span> in Germany 🇩🇪
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
