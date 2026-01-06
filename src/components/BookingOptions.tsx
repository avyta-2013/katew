import { FileText, CreditCard, Building, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const bookingOptions = [
  {
    icon: FileText,
    title: "Transportschein",
    description: "Direkte Abrechnung mit Ihrer Krankenkasse.",
    features: ["Keine Vorkasse", "Automatische Abrechnung", "Schnelle Bearbeitung"],
    highlighted: false,
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexible Buchung ohne Transportschein.",
    features: ["Transparente Preise", "Sofortige Bestätigung", "Flexible Zahlung"],
    highlighted: true,
  },
  {
    icon: Building,
    title: "Ausschreibungen",
    description: "Maßgeschneiderte Lösungen für Einrichtungen.",
    features: ["Volumenrabatte", "Dedizierter Support", "Individuelle Verträge"],
    highlighted: false,
  },
];

export const BookingOptions = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Buchungsoptionen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie die passende Abrechnungsart für Ihre Bedürfnisse.
            </p>
            
            <Button className="mt-8 rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Numbered Steps */}
          <div className="flex justify-center gap-12 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">01</span>
              <span>Option wählen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">02</span>
              <span>Details eingeben</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">03</span>
              <span>Transport buchen</span>
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {bookingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 border transition-all duration-300 ${
                  option.highlighted 
                    ? 'border-primary shadow-elevated scale-105' 
                    : 'border-border/50 hover:border-border hover:shadow-card'
                }`}
              >
                {option.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Beliebt
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  option.highlighted ? 'bg-primary' : 'bg-muted'
                }`}>
                  <option.icon className={`w-7 h-7 ${
                    option.highlighted ? 'text-primary-foreground' : 'text-foreground'
                  }`} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-full h-12 ${
                    option.highlighted 
                      ? 'bg-foreground text-background hover:bg-foreground/90' 
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  Auswählen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};