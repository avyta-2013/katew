import { Eye, Clock, Shield, Euro, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Echtzeit-Übersicht aller verfügbaren Fahrzeuge und transparente Preisgestaltung für jeden Transport.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Automatisierte Prozesse reduzieren den Aufwand bei der Transportorganisation um bis zu 80%.",
  },
  {
    icon: Shield,
    title: "Maximale Sicherheit",
    description: "Geprüfte Transportunternehmen mit aktuellen Zertifizierungen und Versicherungen.",
  },
  {
    icon: Euro,
    title: "Kostenoptimierung",
    description: "Intelligente Algorithmen finden die beste Balance zwischen Qualität und Preis.",
  },
  {
    icon: FileText,
    title: "Ausschreibungen",
    description: "Effiziente Verwaltung von Tender-Prozessen für Kliniken und Einrichtungen.",
  },
  {
    icon: Users,
    title: "Zusammenarbeit",
    description: "Nahtlose Kommunikation zwischen allen Beteiligten in Echtzeit.",
  },
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ihre Vorteile
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Moderne Technologie für effiziente Krankentransporte
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur border border-border/50 rounded-3xl p-10 hover:shadow-elevated hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
