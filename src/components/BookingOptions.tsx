import { FileText, CreditCard, Building } from "lucide-react";
import { Button } from "./ui/button";

const bookingOptions = [
  {
    icon: FileText,
    title: "Transportschein",
    description: "Direkte Abrechnung mit Ihrer Krankenkasse. Wir übernehmen die komplette Verwaltung und Kommunikation mit der Versicherung.",
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexible Buchung ohne Transportschein. Transparente Preise und sofortige Buchungsbestätigung für Ihre Planung.",
  },
  {
    icon: Building,
    title: "Ausschreibungen",
    description: "Maßgeschneiderte Lösungen für Kliniken und Pflegeeinrichtungen. Effiziente Tender-Verwaltung mit qualitätsgeprüften Partnern.",
  },
];

export const BookingOptions = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Buchungsoptionen
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Wählen Sie die passende Abrechnungsart
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          {bookingOptions.map((option, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-3xl p-10 hover:shadow-elevated hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <option.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {option.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
