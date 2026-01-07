import { UserPlus, FileText, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren / Einloggen",
    subtitle: "Ihr Zugang zur Plattform",
    description: "Erstellen Sie in wenigen Sekunden Ihr kostenloses katew-Konto. Einfache Anmeldung mit E-Mail – ohne versteckte Kosten oder Verpflichtungen.",
    features: ["Kostenlose Registrierung", "Keine Kreditkarte nötig", "Sofortiger Zugang"],
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "In unter 2 Minuten erledigt",
    description: "Geben Sie Ihre Fahrtdetails ein: Startadresse, Ziel, gewünschte Transportart und Termin. Unsere intelligente Plattform findet passende Anbieter in Ihrer Region.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Terminwahl"],
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    subtitle: "Alles organisiert – Sie können sich entspannen",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen wichtigen Details: Fahrer-Kontakt, Fahrzeuginfos und genaue Abholzeit. Tracking und Support inklusive.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking"],
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Einfach & Schnell
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            So funktioniert's
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In drei einfachen Schritten zu Ihrer Krankenfahrt – digital, transparent und zuverlässig
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step Number & Connection Line */}
                  <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
                    {index > 0 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary/20 to-primary/50" />
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg z-10">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-primary/20" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : ''}`}>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group">
                      {/* Mobile Number */}
                      <div className="md:hidden w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg mb-6">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>

                      <p className="text-sm text-primary font-medium mb-2">{step.subtitle}</p>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {step.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
