import { UserPlus, FileText, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren",
    subtitle: "Ihr Zugang zur Plattform",
    description: "Erstellen Sie in wenigen Sekunden Ihr kostenloses katew-Konto. Einfache Anmeldung mit E-Mail – ohne versteckte Kosten.",
    features: ["Kostenlose Registrierung", "Keine Kreditkarte nötig", "Sofortiger Zugang"],
    gradient: "from-primary via-primary/80 to-secondary",
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "In unter 2 Minuten erledigt",
    description: "Geben Sie Ihre Fahrtdetails ein: Start, Ziel, Transportart und Termin. Wir finden passende Anbieter.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Termine"],
    gradient: "from-secondary via-secondary/80 to-primary",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung",
    subtitle: "Alles organisiert",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen Details: Fahrer-Kontakt, Fahrzeuginfos und Abholzeit.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking"],
    gradient: "from-primary via-secondary/80 to-secondary",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Einfach & Schnell
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            So funktioniert's
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In drei einfachen Schritten zu Ihrer Krankenfahrt
          </p>
        </div>

        {/* Steps Grid - Horizontal */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full" />
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <ArrowRight className="w-4 h-4 text-secondary" />
              </div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2">
                <ArrowRight className="w-4 h-4 text-secondary" />
              </div>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className="relative h-full bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    {/* Gradient Glow Background */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                        <span className="text-3xl font-bold text-primary-foreground">{step.number}</span>
                      </div>
                      {/* Floating Icon */}
                      <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-xl bg-card border border-border shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <p className="text-sm text-secondary font-semibold mb-1 tracking-wide uppercase">{step.subtitle}</p>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-2">Bereit loszulegen?</p>
          <a 
            href="/anmelden?register=true" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Jetzt kostenlos registrieren
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
