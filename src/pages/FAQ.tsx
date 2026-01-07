import { useState } from "react";
import { 
  Search, 
  HelpCircle,
  Truck,
  CreditCard,
  Users,
  Shield,
  FileText,
  Clock,
  ChevronRight
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

const categories = [
  { id: "booking", label: "Buchung & Transport", icon: Truck },
  { id: "costs", label: "Kosten & Abrechnung", icon: CreditCard },
  { id: "partners", label: "Für Partner", icon: Users },
  { id: "providers", label: "Für Anbieter", icon: FileText },
  { id: "safety", label: "Sicherheit", icon: Shield },
];

const faqData = {
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
  partners: [
    {
      question: "Wie werde ich Partner?",
      answer: "Kontaktieren Sie uns über das Partnerformular. Wir analysieren Ihre Anforderungen und integrieren katew nahtlos in Ihre bestehenden Prozesse – kostenlos.",
    },
    {
      question: "Welche Einrichtungen können Partner werden?",
      answer: "Krankenhäuser, Pflegeeinrichtungen, Arztpraxen, MVZ, Krankenkassen und andere Einrichtungen im Gesundheitswesen können Partner werden.",
    },
    {
      question: "Was kostet die Partnerschaft?",
      answer: "Die Integration und Nutzung von katew ist für Partner komplett kostenlos. Es fallen keine Einrichtungsgebühren oder monatliche Kosten an.",
    },
  ],
  providers: [
    {
      question: "Wie registriere ich mich als Anbieter?",
      answer: "Füllen Sie unser Registrierungsformular aus. Nach erfolgreicher Prüfung Ihrer Dokumente werden Sie in unser Netzwerk aufgenommen.",
    },
    {
      question: "Welche Voraussetzungen muss ich erfüllen?",
      answer: "Sie benötigen alle erforderlichen Lizenzen, Versicherungen und Zertifizierungen für Krankenfahrten. Diese werden bei der Registrierung geprüft.",
    },
    {
      question: "Wie erhalte ich Aufträge?",
      answer: "Sobald Sie registriert sind, erhalten Sie Anfragen in Ihrer Region. Sie können Angebote abgeben und bei Zuschlag den Transport durchführen.",
    },
    {
      question: "Welche Provision fällt an?",
      answer: "Wir berechnen nur bei erfolgreicher Vermittlung eine faire Provision. Details erfahren Sie im Registrierungsprozess.",
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

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("booking");
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqs = Object.values(faqData).flat();
  const filteredFaqs = searchQuery 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData[selectedCategory as keyof typeof faqData];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Wir haben die Antworten
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Häufig gestellte Fragen
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Finden Sie schnell Antworten auf Ihre Fragen
              </p>
              
              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Suchen Sie nach einem Thema..."
                  className="pl-14 pr-6 py-6 text-lg rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs & FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Tabs */}
              {!searchQuery && (
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                            : "bg-card border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {category.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Keine Ergebnisse gefunden. Versuchen Sie einen anderen Suchbegriff.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ihre Frage war nicht dabei?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unser Support-Team hilft Ihnen gerne persönlich weiter
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Kontakt aufnehmen
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/hilfe">
                  <Button size="lg" variant="outline">
                    Zum Hilfe Center
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