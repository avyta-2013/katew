import { ReactNode, useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Sparkles, 
  ChevronRight, 
  ArrowUp,
  FileText,
  Shield,
  Scale,
  Building2,
  Mail,
  Phone,
  Clock,
  ExternalLink
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
  icon?: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: ReactNode;
  lastUpdated: string;
  sections: Section[];
  children: ReactNode;
}

const legalPages = [
  { path: "/impressum", label: "Impressum", icon: Building2 },
  { path: "/datenschutz", label: "Datenschutz", icon: Shield },
  { path: "/agb", label: "AGB", icon: Scale },
];

export function LegalPageLayout({
  title,
  subtitle,
  badge,
  icon,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-40 right-[15%] w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
            <div className="absolute bottom-20 right-[20%] w-20 h-20 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-2xl -rotate-12 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-8 animate-fade-in">
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-4 h-4 text-primary opacity-50" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                  {badge}
                </span>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {icon}
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {subtitle}
              </p>

              {/* Last Updated */}
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <Clock className="w-4 h-4" />
                <span>Zuletzt aktualisiert: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-20 z-30 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2">
              {legalPages.map((page) => {
                const isActive = location.pathname === page.path;
                const Icon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                      isActive
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                        : "bg-card border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {page.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12">
                {/* Sidebar - Table of Contents */}
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-44">
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        Inhaltsverzeichnis
                      </h3>
                      <nav className="space-y-1">
                        {sections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2",
                              activeSection === section.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            <ChevronRight className={cn(
                              "w-3 h-3 transition-transform",
                              activeSection === section.id && "rotate-90"
                            )} />
                            <span className="line-clamp-1">{section.title}</span>
                          </button>
                        ))}
                      </nav>
                    </div>

                    {/* Contact Card */}
                    <div className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6">
                      <h3 className="text-sm font-semibold text-foreground mb-3">
                        Fragen?
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4">
                        Kontaktieren Sie uns bei rechtlichen Fragen.
                      </p>
                      <div className="space-y-2">
                        <a href="mailto:support@katew.de" className="flex items-center gap-2 text-xs text-primary hover:underline">
                          <Mail className="w-3 h-3" />
                          support@katew.de
                        </a>
                        <a href="tel:+4915115561231" className="flex items-center gap-2 text-xs text-primary hover:underline">
                          <Phone className="w-3 h-3" />
                          +49 151 155 612 31
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Content */}
                <main className="lg:col-span-9">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300",
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <Footer />
    </>
  );
}

// Reusable Section Component
export function LegalSection({ 
  id, 
  title, 
  children 
}: { 
  id: string; 
  title: string; 
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-12 last:mb-0 scroll-mt-32">
      <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b border-border/50 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

// Subsection Component
export function LegalSubsection({ 
  title, 
  children 
}: { 
  title: string; 
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

// Info Card Component
export function LegalInfoCard({ 
  icon, 
  children 
}: { 
  icon?: ReactNode; 
  children: ReactNode;
}) {
  return (
    <div className="my-6 p-5 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl">
      <div className="flex gap-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

// External Link Component
export function LegalLink({ 
  href, 
  children 
}: { 
  href: string; 
  children: ReactNode;
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-1 text-primary hover:underline"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}
