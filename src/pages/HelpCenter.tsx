import { useState } from "react";
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
  ExternalLink
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

const categories = [
  {
    icon: Truck,
    title: "Buchung & Transport",
    description: "Alles zur Buchung und Durchführung von Krankenfahrten",
    articles: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    title: "Abrechnung & Kosten",
    description: "Informationen zu Preisen, Kostenübernahme und Rechnungen",
    articles: 8,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Für Partner",
    description: "Hilfe für Krankenhäuser, Pflegeheime und Praxen",
    articles: 10,
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Sicherheit & Datenschutz",
    description: "Wie wir Ihre Daten schützen",
    articles: 5,
    color: "from-orange-500 to-red-500",
  },
];

const popularArticles = [
  {
    title: "Wie buche ich eine Krankenfahrt?",
    category: "Buchung & Transport",
    views: "2.4k",
  },
  {
    title: "Kostenübernahme durch die Krankenkasse",
    category: "Abrechnung & Kosten",
    views: "1.8k",
  },
  {
    title: "Welche Unterlagen brauche ich?",
    category: "Buchung & Transport",
    views: "1.5k",
  },
  {
    title: "Stornierung und Umbuchung",
    category: "Buchung & Transport",
    views: "1.2k",
  },
  {
    title: "Partner-Konto einrichten",
    category: "Für Partner",
    views: "980",
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
    icon: MessageCircle,
    title: "Live-Chat",
    description: "Sofortige Hilfe von unserem Team",
    action: "Chat starten",
    available: "Mo-Fr 8-18 Uhr",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Persönliche Beratung",
    action: "0800 123 4567",
    available: "Mo-Fr 8-18 Uhr",
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "Schriftliche Anfrage",
    action: "support@katew.de",
    available: "Antwort in 24h",
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Wir helfen Ihnen gerne
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Hilfe Center
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Finden Sie Antworten, Anleitungen und Support für alle Ihre Fragen
              </p>
              
              {/* Search */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Wie können wir Ihnen helfen?"
                  className="pl-14 pr-6 py-7 text-lg rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                Kategorien durchsuchen
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                           style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {category.articles} Artikel
                        </span>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles & FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Popular Articles */}
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">Beliebte Artikel</h2>
                  </div>
                  <div className="space-y-4">
                    {popularArticles.map((article, index) => (
                      <div
                        key={index}
                        className="group bg-card rounded-xl border border-border/50 p-5 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {article.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {article.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              {article.views} Aufrufe
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <FileText className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl font-bold">Häufige Fragen</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.slice(0, 5).map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-card border border-border/50 rounded-xl px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4 hover:text-primary transition-colors text-sm">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 text-sm">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Noch Fragen? Wir sind für Sie da
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Wählen Sie Ihren bevorzugten Kontaktweg
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {option.description}
                      </p>
                      <Button variant="outline" className="mb-3 w-full group-hover:border-primary group-hover:text-primary">
                        {option.action}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {option.available}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}