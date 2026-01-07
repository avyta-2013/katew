import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn, UserPlus, HelpCircle } from "lucide-react";
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

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="katew Logo" className="h-8 md:h-10" />
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

          {/* Right side - Account dropdown */}
          <div className="flex items-center gap-3">
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
