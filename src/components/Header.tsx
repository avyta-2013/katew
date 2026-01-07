import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn, UserPlus, HelpCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

type Language = "de" | "en";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "de" as Language, label: "Deutsch", flag: "🇩🇪" },
    { code: "en" as Language, label: "English", flag: "🇬🇧" },
  ];

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground relative z-10" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-none">
                katew
              </span>
              <span className="text-[9px] md:text-[10px] font-medium text-muted-foreground uppercase tracking-[0.2em] mt-0.5">
                Medical Transport
              </span>
            </div>
          </a>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Start
            </a>
            <a
              href="/wir"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Die Zukunft hat begonnen
            </a>
            <Link
              to="/fuer-anbieter"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Für Anbieter
            </Link>
            <Link
              to="/fuer-partner"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Für Partner
            </Link>
          </nav>

          {/* Right side - Language, Book & Account */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 h-10 px-3 rounded-xl hover:bg-muted/50">
                  <span className="text-base">{currentLanguage.flag}</span>
                  <span className="hidden sm:inline text-sm">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-xl border-border/50 shadow-elevated">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`gap-3 py-3 cursor-pointer ${language === lang.code ? 'bg-primary/10 text-primary' : ''}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Fahrt buchen Button */}
            <Link
              to="/buchen"
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
            >
              Fahrt buchen
            </Link>

            {/* Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 h-10 px-4 rounded-xl border-border/50 hover:border-primary/30 hover:bg-muted/50">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Mein Konto</span>
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl border-border/50 shadow-elevated">
                <DropdownMenuItem asChild className="gap-3 py-3 cursor-pointer">
                  <Link to="/anmelden">
                    <LogIn className="w-4 h-4" />
                    Anmelden
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="gap-3 py-3 cursor-pointer">
                  <Link to="/anmelden?register=true">
                    <UserPlus className="w-4 h-4" />
                    Registrieren
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-3 py-3 cursor-pointer">
                  <HelpCircle className="w-4 h-4" />
                  Hilfe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
