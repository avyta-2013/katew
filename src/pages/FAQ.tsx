import { useState } from "react";
import { 
  Search, 
  HelpCircle,
  Truck,
  CreditCard,
  Users,
  Shield,
  FileText,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partnerCategories = [
  { id: "booking", label: "Buchung & Transport", icon: Truck, gradient: "from-blue-500 to-cyan-500", count: 5 },
  { id: "costs", label: "Kosten & Abrechnung", icon: CreditCard, gradient: "from-emerald-500 to-teal-500", count: 4 },
  { id: "safety", label: "Sicherheit", icon: Shield, gradient: "from-violet-500 to-purple-500", count: 3 },
];

const anbieterCategories = [
  { id: "registration", label: "Registrierung", icon: FileText, gradient: "from-orange-500 to-amber-500", count: 3 },
  { id: "orders", label: "Aufträge", icon: Truck, gradient: "from-blue-500 to-cyan-500", count: 3 },
  { id: "billing", label: "Abrechnung", icon: CreditCard, gradient: "from-emerald-500 to-teal-500", count: 3 },
];

const partnerFaqData = {
  booking: [
    {
      question: "Wie kann ich eine Krankenfahrt buchen?",
      answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
    },
    {
      question: "Wie schnell kann eine Krankenfahrt organisiert werden?",
      answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote. Bei dringenden Anfragen arbeiten wir mit Partnern zusammen, die auch kurzfristige Buchungen ermöglichen.",
    },
    {
      question: "Kann ich eine Fahrt für jemand anderen buchen?",
      answer: "Ja, Sie können Fahrten für Angehörige, Patienten oder Bewohner buchen. Geben Sie einfach die Kontaktdaten der zu transportierenden Person an.",
    },
    {
      question: "Welche Transportarten werden angeboten?",
      answer: "Wir vermitteln alle Arten von Krankenfahrten: Sitzend-Transport, Rollstuhl-Transport, Tragestuhl-Transport und Liegend-Transport mit qualifiziertem Fachpersonal.",
    },
    {
      question: "Kann ich eine Buchung stornieren oder ändern?",
      answer: "Ja, Stornierungen und Änderungen sind möglich. Je nach Zeitpunkt können Stornierungsgebühren anfallen. Kontaktieren Sie uns oder den Anbieter direkt.",
    },
  ],
  costs: [
    {
      question: "Ist der Dienst kostenlos?",
      answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos. Wir berechnen nur bei erfolgreicher Vermittlung eine Provision an die Transportunternehmen.",
    },
    {
      question: "Übernimmt die Krankenkasse die Kosten?",
      answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
    },
    {
      question: "Wie werden die Preise berechnet?",
      answer: "Die Preise richten sich nach Transportart, Entfernung und ggf. Wartezeit. Sie erhalten vor der Buchung transparente Angebote von verschiedenen Anbietern.",
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer: "Die Zahlungsabwicklung erfolgt direkt mit dem Transportunternehmen. Übliche Methoden sind Rechnung, EC-Karte und bei manchen Anbietern auch Barzahlung.",
    },
  ],
  safety: [
    {
      question: "Wie werden Anbieter geprüft?",
      answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
    },
    {
      question: "Was passiert bei Problemen während der Fahrt?",
      answer: "Unser Support-Team ist für Sie erreichbar. Alle Fahrten sind versichert und unsere Partner sind geschult, um auch mit unvorhergesehenen Situationen umzugehen.",
    },
    {
      question: "Wie werden meine Daten geschützt?",
      answer: "Ihre Daten werden nach höchsten Datenschutzstandards (DSGVO) verarbeitet und verschlüsselt übertragen. Wir geben keine Daten an unbefugte Dritte weiter.",
    },
  ],
};

const anbieterFaqData = {
  registration: [
    {
      question: "Wie registriere ich mich als Anbieter?",
      answer: "Füllen Sie unser Registrierungsformular aus. Nach erfolgreicher Prüfung Ihrer Dokumente werden Sie in unser Netzwerk aufgenommen.",
    },
    {
      question: "Welche Voraussetzungen muss ich erfüllen?",
      answer: "Sie benötigen alle erforderlichen Lizenzen, Versicherungen und Zertifizierungen für Krankenfahrten. Diese werden bei der Registrierung geprüft.",
    },
    {
      question: "Wie lange dauert die Registrierung?",
      answer: "Nach Einreichung aller Unterlagen prüfen wir Ihre Dokumente innerhalb von 3-5 Werktagen. Bei vollständigen Unterlagen geht es oft schneller.",
    },
  ],
  orders: [
    {
      question: "Wie erhalte ich Aufträge?",
      answer: "Sobald Sie registriert sind, erhalten Sie Anfragen in Ihrer Region. Sie können Angebote abgeben und bei Zuschlag den Transport durchführen.",
    },
    {
      question: "Kann ich Aufträge ablehnen?",
      answer: "Ja, Sie entscheiden selbst, welche Aufträge Sie annehmen. Es besteht keine Verpflichtung, jede Anfrage zu bedienen.",
    },
    {
      question: "Welche Qualitätsstandards gelten?",
      answer: "Alle Anbieter müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen und regelmäßige Qualitätsprüfungen durchlaufen.",
    },
  ],
  billing: [
    {
      question: "Welche Provision fällt an?",
      answer: "Wir berechnen nur bei erfolgreicher Vermittlung eine faire Provision. Details erfahren Sie im Registrierungsprozess.",
    },
    {
      question: "Wie funktioniert die Abrechnung?",
      answer: "Die Abrechnung erfolgt monatlich. Sie erhalten eine detaillierte Übersicht aller vermittelten Fahrten und Provisionen.",
    },
    {
      question: "Wann erhalte ich meine Zahlungen?",
      answer: "Zahlungen werden in der Regel zum 15. des Folgemonats überwiesen, nachdem die Fahrt abgeschlossen wurde.",
    },
  ],
};


const contactOptions = [
  {
    icon: Phone,
    title: "Telefon",
    description: "+49 151 155 612 31",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "support@katew.de",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<"partner" | "anbieter">("partner");
  const [selectedCategory, setSelectedCategory] = useState("booking");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);


  const categories = activeTab === "partner" ? partnerCategories : anbieterCategories;
  const faqData = activeTab === "partner" ? partnerFaqData : anbieterFaqData;

  const allFaqs = Object.values(faqData).flat();
  const currentFaqs = faqData[selectedCategory as keyof typeof faqData] || [];
  const filteredFaqs = searchQuery 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFaqs;

  const totalQuestions = Object.values(faqData).flat().length;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section - Premium Design */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
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
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>Wir haben die Antworten</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Häufig gestellte
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Fragen
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Finden Sie schnell Antworten auf alle Ihre Fragen rund um katew
              </p>
              
              {/* Premium Search Box */}
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
                    placeholder="Suchen Sie nach Themen oder Fragen..."
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

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{totalQuestions}</span> Fragen in{" "}
                  <span className="font-bold text-foreground">{categories.length}</span> Kategorien
                </div>
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
                    onClick={() => {
                      setActiveTab("partner");
                      setSelectedCategory("booking");
                    }}
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
                    onClick={() => {
                      setActiveTab("anbieter");
                      setSelectedCategory("registration");
                    }}
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

        {/* Category Cards & FAQ Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Cards - Only show when not searching */}
              {!searchQuery && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`group relative text-left p-6 rounded-3xl border transition-all duration-500 animate-fade-in ${
                          isActive 
                            ? "bg-card border-primary/40 shadow-2xl shadow-primary/10" 
                            : "bg-card/50 border-border/50 hover:border-primary/30 hover:shadow-lg"
                        }`}
                        style={{ animationDelay: `${(index + 4) * 100}ms` }}
                      >
                        {/* Glow effect when active */}
                        {isActive && (
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-5`} />
                        )}
                        
                        <div className="relative">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-primary' : ''}`}>
                              {category.label}
                            </h3>
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                              isActive 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {category.count} Fragen
                            </span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {category.id === "booking" && "Alles rund um Buchungen und Transporte"}
                            {category.id === "costs" && "Preise, Abrechnung und Kostenübernahme"}
                            {category.id === "safety" && "Qualität, Datenschutz und Sicherheit"}
                            {category.id === "registration" && "So werden Sie Teil unseres Netzwerks"}
                            {category.id === "orders" && "Auftragsmanagement und Durchführung"}
                            {category.id === "billing" && "Provisionen und Zahlungsabwicklung"}
                          </p>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <div className="absolute -bottom-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Search Results Label */}
              {searchQuery && (
                <div className="mb-8 text-center">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredFaqs.length}</span> Ergebnisse für "{searchQuery}"
                  </p>
                </div>
              )}

              {/* FAQ Accordion - Premium Style */}
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group bg-card border border-border/50 rounded-2xl px-6 md:px-8 data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5 transition-all duration-300 hover:border-primary/20"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 mt-0.5 group-data-[state=open]:from-primary/20 group-data-[state=open]:to-secondary/20 transition-colors">
                            <HelpCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 pl-12 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
                      <HelpCircle className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Keine Ergebnisse gefunden</h3>
                    <p className="text-muted-foreground mb-6">
                      Versuchen Sie einen anderen Suchbegriff oder kontaktieren Sie unseren Support
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery("")}
                      className="rounded-xl"
                    >
                      Suche zurücksetzen
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section - Premium Design */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Ihre Frage war nicht dabei?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                  Unser Support-Team hilft Ihnen gerne persönlich weiter
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/kontakt">
                  <Button 
                    size="lg" 
                    className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/hilfe">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-14 px-8 text-lg rounded-xl border-2"
                  >
                    Zum Hilfe Center
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
