import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="bg-card/90 backdrop-blur-xl rounded-full px-2 py-2 shadow-elevated border border-border/50 flex items-center gap-1">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="font-bold text-primary-foreground text-sm">K</span>
          </div>
          <span className="font-bold text-lg">KATEW</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 ml-4">
          <a href="#features" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
            Vorteile
          </a>
          <a href="#transport" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
            Transport
          </a>
          <a href="#pricing" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
            Preise
          </a>
        </div>

        {/* CTA Button */}
        <Button className="ml-4 rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 h-10 font-medium">
          Kontakt
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};