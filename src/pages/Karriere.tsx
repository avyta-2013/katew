import { useState, useEffect } from "react";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  MapPin, 
  Clock, 
  TrendingUp,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Rocket,
  Shield,
  Globe,
  Award,
  Star,
  Play,
  ChevronRight,
  Building2,
  Lightbulb,
  HandHeart,
  Calendar,
  PartyPopper,
  Leaf,
  Wifi,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";


const benefits = [
  { icon: Laptop, text: "Remote-First Kultur", description: "Arbeite von überall" },
  { icon: Clock, text: "Flexible Arbeitszeiten", description: "Work-Life-Balance" },
  { icon: PartyPopper, text: "Team-Events", description: "Quarterly Offsites" },
  { icon: Zap, text: "Neueste Tech", description: "Beste Tools & Hardware" },
  { icon: HeartHandshake, text: "Mentoring", description: "Persönliche Entwicklung" },
];

const openPositions = [
  {
    title: "Sales Manager/in",
    department: "Vertrieb",
    location: "Frankfurt / Remote",
    type: "Vollzeit, Teilzeit, Aushilfe",
    slug: "sales-manager",
    urgent: true,
  },
  {
    title: "Assistenz",
    department: "Geschäftsführung",
    location: "Frankfurt",
    type: "Vollzeit, Teilzeit",
    slug: "assistenz",
    urgent: false,
  },
];

const stats = [
  { value: "5+", label: "Teammitglieder", icon: Users },
  { value: "1000+", label: "Fahrten vermittelt", icon: TrendingUp },
  { value: "2025", label: "Gegründet", icon: Calendar },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "Bei katew habe ich die Freiheit, innovative Lösungen zu entwickeln, die echten Impact haben.",
  },
  {
    name: "Michael K.",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Die technischen Herausforderungen und das Team machen jeden Tag spannend.",
  },
  {
    name: "Lisa T.",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Hier kann ich wirklich einen Unterschied im Leben unserer Kunden machen.",
  },
];

const perks = [
  { icon: Coffee, title: "Modernes Büro", desc: "Zentral in Frankfurt mit allem Komfort" },
  { icon: Wifi, title: "Home Office Setup", desc: "Wir statten dich komplett aus" },
  { icon: Award, title: "Equity Programm", desc: "Werde Miteigentümer" },
  { icon: Globe, title: "Workation", desc: "Arbeite von überall auf der Welt" },
];

export default function Karriere() {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[200px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-40 right-[15%] w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
            <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
            <div className="absolute bottom-20 right-[25%] w-24 h-24 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-2xl -rotate-12 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-8 animate-fade-in">
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-4 h-4 text-primary opacity-50" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                  Wir suchen Talente
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="text-foreground">Gestalte die</span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                    Zukunft
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 4 150 0 298 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-foreground"> mit uns</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Bei katew revolutionieren wir die Krankenfahrt in Deutschland. 
                Werde Teil eines Teams, das täglich Leben verbessert.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-2xl px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <span className="relative z-10 flex items-center">
                    Offene Stellen entdecken
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 relative -mt-12 z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 md:p-8 shadow-2xl">
                <div className="grid grid-cols-3 divide-x divide-border/50">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div 
                        key={index} 
                        className={`text-center px-4 md:px-8 transition-all duration-700 ${animatedStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section - Moved here */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  Werde Teil des Teams
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Offene <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stellen</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Finde deine perfekte Rolle bei katew
                </p>
              </div>
              
              {/* Positions List */}
              <div className="space-y-4 mb-12">
                {openPositions.map((position, index) => (
                  <Link
                    key={index}
                    to={`/karriere/${position.slug}`}
                    className="group block"
                  >
                    <div className="relative">
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative bg-card rounded-2xl border border-border/50 p-6 md:p-8 group-hover:border-primary/40 group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                                {position.title}
                              </h3>
                              {position.urgent && (
                                <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                                  Dringend gesucht
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                                <Briefcase className="w-4 h-4 text-primary" />
                                {position.department}
                              </span>
                              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                                <MapPin className="w-4 h-4 text-primary" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                                <Clock className="w-4 h-4 text-primary" />
                                {position.type}
                              </span>
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
                            Details ansehen
                            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  Deine Vorteile
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Was wir <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">bieten</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bei katew investieren wir in unser Team – für ein Arbeitsumfeld, das inspiriert
                </p>
              </div>

              {/* Main Benefits - Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {benefits.slice(0, 3).map((benefit, index) => {
                  const Icon = benefit.icon;
                  const isHovered = hoveredBenefit === index;
                  const gradients = [
                    "from-blue-500 to-cyan-500",
                    "from-violet-500 to-purple-500",
                    "from-rose-500 to-pink-500"
                  ];
                  return (
                    <div
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredBenefit(index)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]}/20 rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                      
                      <div className={`relative h-full bg-card rounded-3xl border border-border/50 p-8 transition-all duration-500 ${isHovered ? "border-primary/40 -translate-y-2 shadow-2xl" : "hover:shadow-lg"}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-6 transition-transform duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="font-bold text-xl mb-2">{benefit.text}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                        
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${gradients[index]} rounded-full transition-all duration-500 ${isHovered ? "w-16" : "w-0"}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Secondary Benefits - Smaller Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.slice(3).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-5 bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-0.5">{benefit.text}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Perks Strip */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-1">
                <div className="bg-card rounded-xl p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {perks.map((perk, index) => {
                      const Icon = perk.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 group">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{perk.title}</h4>
                            <p className="text-xs text-muted-foreground">{perk.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Premium Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Dein nächster Karriereschritt
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Bereit, etwas zu
                <br />
                <span className="relative inline-block">
                  bewegen?
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C40 4 100 0 198 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5"/>
                  </svg>
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Werde Teil eines Teams, das die Gesundheitslogistik in Deutschland neu definiert. 
                Wir freuen uns auf deine Bewerbung!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Link to="/kontakt">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 rounded-2xl px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Jetzt bewerben
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-white/70">
                <CheckCircle className="w-5 h-5" />
                <span>Fragen? Schreib uns an </span>
                <a href="mailto:support@katew.de" className="text-white font-semibold hover:underline">
                  support@katew.de
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
