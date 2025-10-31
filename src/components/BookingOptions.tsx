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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Buchungsoptionen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie die Buchungsmethode, die am besten zu Ihrer Situation passt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bookingOptions.map((option, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
