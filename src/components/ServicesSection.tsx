import { User, Accessibility, Users, Bed, FileText, CreditCard, Gavel, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const transportTypes = [
  {
    icon: User,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Schnelle Verfügbarkeit"],
  },
  {
    icon: Accessibility,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Rampen-Ausstattung"],
  },
  {
    icon: Users,
    title: "Tragestuhl",
    description: "Optimal für enge Treppenhäuser und schwierige Zugänge",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
  },
  {
    icon: Bed,
    title: "Liegend",
    description: "Vollausgestatteter Transport auf Trage",
    features: ["Medizinische Betreuung", "Klimatisiert", "Intensiv-Ausstattung"],
  },
];

const bookingOptions = [
  {
    icon: FileText,
    title: "Mit Verordnung",
    description: "Krankenkasse übernimmt die Kosten",
    features: ["Kostenübernahme", "Direkte Abrechnung", "Alle Transportarten"],
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexible Buchung ohne Verordnung",
    features: ["Sofortige Buchung", "Transparente Preise", "Flexible Termine"],
  },
  {
    icon: Gavel,
    title: "Ausschreibungen",
    description: "Für Kostenträger und öffentliche Auftraggeber",
    features: ["Digitale Ausschreibungen", "Qualifizierte Anbieter", "Transparente Vergabe"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Die Zukunft hat begonnen
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Passende Lösungen für jeden Bedarf
          </p>
        </div>

        <Tabs defaultValue="transport" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 p-1 bg-muted rounded-xl">
            <TabsTrigger value="transport" className="rounded-lg text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Transportarten
            </TabsTrigger>
            <TabsTrigger value="booking" className="rounded-lg text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Buchungsoptionen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transport" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {transportTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="booking" className="mt-0">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {bookingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Button at the end */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="h-12 px-6 rounded-xl font-semibold">
            Mehr erfahren
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
