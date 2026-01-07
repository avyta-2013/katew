import { Mail, Phone, MapPin, ArrowRight, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import { useState } from "react";

const footerLinks = {
  plattform: [
    { label: "Fahrt buchen", href: "/" },
    { label: "Für Anbieter", href: "/fuer-anbieter" },
    { label: "Für Partner", href: "/fuer-partner" },
    { label: "Ausschreibungen", href: "#" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/wir" },
    { label: "Blog", href: "#" },
    { label: "Karriere", href: "#" },
    { label: "Presse", href: "#" },
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

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-muted/50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-secondary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Bleiben Sie <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">informiert</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Erhalten Sie Updates zu neuen Funktionen und Branchen-News direkt in Ihr Postfach.
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  {isSubscribed ? (
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Send className="w-4 h-4" />
                      </div>
                      Vielen Dank für Ihre Anmeldung!
                    </div>
                  ) : (
                    <>
                      <Input
                        type="email"
                        placeholder="ihre@email.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary flex-1"
                        required
                      />
                      <Button type="submit" size="lg" className="h-12 px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
            {/* Brand column */}
            <div className="col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={logo} alt="katew Logo" className="h-10" />
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
                  <span className="text-sm">Frankfurt, Deutschland</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </a>
                  );
                })}
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
