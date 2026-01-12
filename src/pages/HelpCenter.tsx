import { useState, useEffect } from "react";
import { 
  Search, 
  BookOpen, 
  FileText, 
  MessageCircle, 
  Phone,
  Mail,
  ChevronRight,
  HelpCircle,
  Users,
  Truck,
  CreditCard,
  Shield,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp,
  Star,
  Play,
  CheckCircle2,
  Headphones,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Quick links for fast navigation
const quickLinks = [
  { label: "Erste Schritte", icon: Zap },
  { label: "Buchungen", icon: BookOpen },
  { label: "Abrechnung", icon: CreditCard },
  { label: "Account", icon: Users },
];

// Für Anbieter Kategorien
const anbieterCategories = [
  {
    icon: Truck,
    title: "Registrierung & Onboarding",
    description: "So werden Sie Teil unseres Netzwerks",
    articles: 8,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: CreditCard,
    title: "Abrechnung & Provisionen",
    description: "Informationen zu Zahlungen und Abrechnungsmodellen",
    articles: 6,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Qualitätsstandards",
    description: "Anforderungen und Zertifizierungen für Anbieter",
    articles: 5,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Clock,
    title: "Fahrten & Aufträge",
    description: "Auftragsmanagement und Durchführung",
    articles: 10,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "bg-violet-500/20",
  },
];

// Für Partner Kategorien
const partnerCategories = [
  {
    icon: Users,
    title: "Konto & Verwaltung",
    description: "Accounteinrichtung und Nutzerverwaltung",
    articles: 7,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: Truck,
    title: "Buchung & Transport",
    description: "So buchen Sie Krankenfahrten für Ihre Patienten",
    articles: 12,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "Kosten & Abrechnung",
    description: "Kostenübernahme und Rechnungsstellung",
    articles: 8,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Shield,
    title: "Datenschutz & Sicherheit",
    description: "Wie wir Patientendaten schützen",
    articles: 5,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "bg-violet-500/20",
  },
];

const anbieterArticles = [
  {
    title: "Wie registriere ich mich als Anbieter?",
    category: "Registrierung",
    views: "2.4k",
    readTime: "5 min",
    trending: true,
  },
  {
    title: "Welche Anforderungen muss ich erfüllen?",
    category: "Qualitätsstandards",
    views: "1.8k",
    readTime: "8 min",
    trending: false,
  },
  {
    title: "Wie funktioniert die Abrechnung?",
    category: "Abrechnung",
    views: "1.5k",
    readTime: "6 min",
    trending: true,
  },
  {
    title: "Aufträge annehmen und verwalten",
    category: "Fahrten & Aufträge",
    views: "1.2k",
    readTime: "4 min",
    trending: false,
  },
  {
    title: "Fahrzeugflotte optimal einsetzen",
    category: "Fahrten & Aufträge",
    views: "980",
    readTime: "7 min",
    trending: false,
  },
];

const partnerArticles = [
  {
    title: "Wie buche ich eine Krankenfahrt?",
    category: "Buchung",
    views: "3.1k",
    readTime: "3 min",
    trending: true,
  },
  {
    title: "Kostenübernahme durch die Krankenkasse",
    category: "Kosten",
    views: "2.5k",
    readTime: "5 min",
    trending: true,
  },
  {
    title: "Partner-Konto einrichten",
    category: "Konto",
    views: "1.8k",
    readTime: "4 min",
    trending: false,
  },
  {
    title: "Patientendaten sicher verwalten",
    category: "Datenschutz",
    views: "1.4k",
    readTime: "6 min",
    trending: false,
  },
  {
    title: "Mehrere Buchungen auf einmal verwalten",
    category: "Buchung",
    views: "1.1k",
    readTime: "5 min",
    trending: false,
  },
];

const faqs = [
  {
    question: "Wie kann ich eine Krankenfahrt buchen?",
    answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
  },
  {
    question: "Wie schnell kann eine Krankenfahrt organisiert werden?",
    answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote. Bei dringenden Anfragen arbeiten wir mit Partnern zusammen, die auch kurzfristige Buchungen ermöglichen.",
  },
  {
    question: "Ist der Dienst kostenlos?",
    answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos. Wir berechnen nur bei erfolgreicher Vermittlung eine Provision an die Transportunternehmen.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
  {
    question: "Was passiert bei Problemen während der Fahrt?",
    answer: "Unser Support-Team ist für Sie erreichbar. Alle Fahrten sind versichert und unsere Partner sind geschult, um auch mit unvorhergesehenen Situationen umzugehen.",
  },
];

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Live-Chat",
    description: "Sofortige Hilfe von unserem Support-Team",
    action: "Chat starten",
    available: "Mo-Fr 8-18 Uhr",
    gradient: "from-blue-500 to-cyan-500",
    responseTime: "< 2 Min",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Persönliche Beratung durch Experten",
    action: "+49 155 61 231",
    available: "Mo-Fr 8-18 Uhr",
    gradient: "from-emerald-500 to-teal-500",
    responseTime: "Sofort",
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "Ausführliche schriftliche Anfrage",
    action: "support@katew.de",
    available: "24/7 erreichbar",
    gradient: "from-violet-500 to-purple-500",
    responseTime: "< 24h",
  },
];

const videoTutorials = [
  {
    title: "Erste Schritte mit katew",
    duration: "4:32",
    thumbnail: "Einführungsvideo",
  },
  {
    title: "Buchung Schritt für Schritt",
    duration: "6:15",
    thumbnail: "Buchungsanleitung",
  },
  {
    title: "Dashboard optimal nutzen",
    duration: "5:48",
    thumbnail: "Dashboard Guide",
  },
];

const stats = [
  { value: "24/7", label: "Online-Hilfe verfügbar" },
  { value: "< 2h", label: "Durchschnittliche Antwortzeit" },
  { value: "98%", label: "Zufriedenheitsrate" },
  { value: "500+", label: "Hilfe-Artikel" },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"anbieter" | "partner">("partner");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);

  const categories = activeTab === "anbieter" ? anbieterCategories : partnerCategories;
  const articles = activeTab === "anbieter" ? anbieterArticles : partnerArticles;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section - Modernized with Glassmorphism */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.7s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>Wie können wir Ihnen helfen?</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Hilfe
                </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  -Center
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Antworten, Anleitungen und persönlicher Support – alles an einem Ort
              </p>
              
              {/* Search Box - Glassmorphism Style */}
              <div 
                className={`relative max-w-2xl mx-auto animate-fade-in transition-all duration-500 ${
                  isSearchFocused ? 'scale-[1.02]' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur-lg transition-opacity duration-300 ${
                  isSearchFocused ? 'opacity-100' : 'opacity-0'
                }`} />
                <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl">
                  <Search className={`absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors duration-300 ${
                    isSearchFocused ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <Input
                    type="text"
                    placeholder="Suchen Sie nach Themen, Anleitungen oder Fragen..."
                    className="pl-16 pr-6 py-8 text-lg rounded-2xl border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                      Suchen
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 backdrop-blur-sm transition-all duration-700 ${
                      animatedStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tab Switcher - Premium Style */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <div className="relative p-1.5 bg-muted/50 rounded-2xl backdrop-blur-sm border border-border/30">
                {/* Animated Background Slider */}
                <div 
                  className={`absolute top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] bg-gradient-to-r from-card to-card/90 rounded-xl shadow-lg transition-all duration-300 ease-out ${
                    activeTab === "partner" ? "left-1.5" : "left-[calc(50%+3px)]"
                  }`}
                />
                <div className="relative flex">
                  <button
                    onClick={() => setActiveTab("partner")}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === "partner"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    Für Partner
                  </button>
                  <button
                    onClick={() => setActiveTab("anbieter")}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === "anbieter"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Truck className="w-5 h-5" />
                    Für Anbieter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid - Premium Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {activeTab === "anbieter" ? "Hilfe für Anbieter" : "Hilfe für Partner"}
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Wählen Sie eine Kategorie, um relevante Artikel und Anleitungen zu finden
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={index}
                      className="group relative cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 ${category.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative h-full bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1">
                        {/* Background Gradient */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        {/* Icon */}
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {category.articles} Artikel
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    <Play className="w-4 h-4" />
                    Video-Tutorials
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Lernen Sie mit Videos</h2>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80 w-fit">
                  Alle Videos ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoTutorials.map((video, index) => (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Video Thumbnail Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles & FAQ - Modern Split Layout */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Popular Articles */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Beliebte Artikel</h2>
                      <p className="text-sm text-muted-foreground">Meistgelesene Hilfe-Artikel</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {articles.map((article, index) => (
                      <div
                        key={index}
                        className="group relative bg-card rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {article.trending && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                                  <TrendingUp className="w-3 h-3" />
                                  Trending
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                                {article.category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                              {article.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" />
                                {article.readTime} Lesezeit
                              </span>
                              <span>{article.views} Aufrufe</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6 rounded-xl py-6 hover:border-primary hover:text-primary transition-colors">
                    Alle Artikel ansehen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* FAQ */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Häufige Fragen</h2>
                      <p className="text-sm text-muted-foreground">Schnelle Antworten finden</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="group bg-card border border-border/50 rounded-xl px-5 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-5 hover:text-primary transition-colors text-base [&[data-state=open]>svg]:text-primary">
                          <span className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 group-data-[state=open]:text-primary transition-colors" />
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 pl-8 text-sm leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <Button variant="outline" className="w-full mt-6 rounded-xl py-6 hover:border-secondary hover:text-secondary transition-colors">
                    Alle FAQs ansehen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Bottom CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-10 md:p-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }} />
                </div>
                
                <div className="relative text-center text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                    <Star className="w-4 h-4" />
                    Premium Support
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Nicht gefunden, was Sie suchen?
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                    Unser Team beantwortet Ihre individuellen Fragen persönlich und kompetent
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 text-base font-semibold shadow-lg">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Support kontaktieren
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
