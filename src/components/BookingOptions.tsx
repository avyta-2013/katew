import { Card, CardContent } from "@/components/ui/card";
import bookingPrescription from "@/assets/booking-prescription.jpg";
import bookingSelfpay from "@/assets/booking-selfpay.jpg";
import bookingTender from "@/assets/booking-tender.jpg";

const bookingOptions = [
  {
    image: bookingPrescription,
    title: "Transportschein",
    description: "Kostenloses Buchen mit ärztlicher Verordnung – die Abrechnung erfolgt direkt mit der Krankenkasse",
  },
  {
    image: bookingSelfpay,
    title: "Selbstzahler",
    description: "Flexible Buchung für Privatpersonen mit transparenten Preisen und direkter Bezahlung",
  },
  {
    image: bookingTender,
    title: "Ausschreibung",
    description: "Erhalten Sie Angebote von mehreren Unternehmen für Ihre spezielle Transportanforderung",
  },
];

export const BookingOptions = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            So einfach wie nie
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Wählen Sie Ihre bevorzugte Buchungsmethode
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {bookingOptions.map((option, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevated transition-all duration-500 hover:-translate-y-4 border-border/50 bg-gradient-to-br from-card to-card/30 backdrop-blur overflow-hidden animate-scale-in hover:border-primary/50 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-5 group-hover:text-primary transition-colors">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {option.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    Mehr erfahren →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
