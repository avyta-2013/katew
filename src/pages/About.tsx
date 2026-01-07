import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  User, 
  Accessibility, 
  Users, 
  Bed,
  CreditCard,
  Gavel,
  Linkedin,
  Heart,
  Target
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren / Einloggen",
    description: "Erstellen Sie Ihr kostenloses Konto oder melden Sie sich an.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    description: "Geben Sie Start, Ziel und Transportart an – in unter 2 Minuten.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    description: "Erhalten Sie die Bestätigung und alle Details zu Ihrer Fahrt.",
  },
];

const transportTypes = [
  {
    icon: User,
    title: "Sitzend",
    description: "Für gehfähige Patienten mit leichten Einschränkungen. Der Transport erfolgt komfortabel im PKW oder Großraumfahrzeug mit professioneller Begleitung.",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Schnelle Verfügbarkeit", "Klimatisiertes Fahrzeug"],
  },
  {
    icon: Accessibility,
    title: "Rollstuhl",
    description: "Spezialisierter Transport für Rollstuhlfahrer mit barrierefreien Fahrzeugen und geschultem Personal für sicheren Ein- und Ausstieg.",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Rampen-Ausstattung", "Elektrische Hebebühne"],
  },
  {
    icon: Users,
    title: "Tragestuhl",
    description: "Optimal für enge Treppenhäuser und schwierige Zugänge. Erfahrenes Personal sorgt für schonenden Transport über mehrere Etagen.",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal", "Für alle Etagen"],
  },
  {
    icon: Bed,
    title: "Liegend",
    description: "Vollausgestatteter Transport auf Trage für Patienten, die nicht sitzen können. Mit medizinischer Betreuung und Intensiv-Ausstattung.",
    features: ["Medizinische Betreuung", "Klimatisiert", "Intensiv-Ausstattung", "Sauerstoffversorgung"],
  },
];

const bookingOptions = [
  {
    icon: FileText,
    title: "Mit Verordnung",
    description: "Bei ärztlicher Verordnung übernimmt die Krankenkasse die Kosten. Wir rechnen direkt mit den Kostenträgern ab – für Sie entstehen keine Aufwände.",
    features: ["Kostenübernahme durch Kasse", "Direkte Abrechnung", "Alle Transportarten", "Keine Vorleistung nötig"],
  },
  {
    icon: CreditCard,
    title: "Selbstzahler",
    description: "Flexibel und unkompliziert ohne Verordnung buchen. Transparente Preise, sofortige Buchung und flexible Terminwahl für private Fahrten.",
    features: ["Sofortige Buchung", "Transparente Preise", "Flexible Termine", "Online-Bezahlung"],
  },
  {
    icon: Gavel,
    title: "Ausschreibungen",
    description: "Für Kostenträger und öffentliche Auftraggeber: Digitale Ausschreibungsplattform mit qualifizierten Anbietern und transparenter Vergabe.",
    features: ["Digitale Ausschreibungen", "Qualifizierte Anbieter", "Transparente Vergabe", "Automatische Dokumentation"],
  },
];

const teamMembers = [
  {
    name: "Dino Lalic",
    role: "Founder / CEO",
    description: "Mit langjähriger Erfahrung im Bereich Patientenbeförderung treibt Dino die Vision von katew voran.",
    linkedin: "#",
  },
  {
    name: "Chanu De Silva",
    role: "CTO",
    description: "Chanu bringt technische Expertise und Innovationsgeist in die Entwicklung unserer Plattform ein.",
    linkedin: "#",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Über uns
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Unser Beitrag, die Branche für{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Krankenfahrten
              </span>{" "}
              besser zu machen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Patientenmobilität mit modernen digitalen Prozessen verbinden – das ist unsere Mission.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              So funktioniert's
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In drei einfachen Schritten
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Zu Ihrer Krankenfahrt – schnell, einfach und zuverlässig
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-card transition-all duration-300">
                      <div className="text-6xl font-bold text-muted/50 mb-6">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-border" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Funktionen
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Alle Transportarten und Buchungsoptionen im Überblick
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Transport Types */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Transportarten</h3>
              <div className="bg-card border border-border/50 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Left: List */}
                  <div className="border-r border-border/50 bg-muted/30">
                    {transportTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors ${
                            index !== transportTypes.length - 1 ? 'border-b border-border/50' : ''
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium">{type.title}</span>
                        </div>
                      );
                    })}
                  </div>
                  {/* Right: Details */}
                  <div className="p-8 space-y-8">
                    {transportTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <div key={index} className={index !== transportTypes.length - 1 ? 'pb-8 border-b border-border/50' : ''}>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-semibold">{type.title}</h4>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {type.features.map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                                <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Options */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Buchungsoptionen</h3>
              <div className="bg-card border border-border/50 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Left: List */}
                  <div className="border-r border-border/50 bg-muted/30">
                    {bookingOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors ${
                            index !== bookingOptions.length - 1 ? 'border-b border-border/50' : ''
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium">{option.title}</span>
                        </div>
                      );
                    })}
                  </div>
                  {/* Right: Details */}
                  <div className="p-8 space-y-8">
                    {bookingOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <div key={index} className={index !== bookingOptions.length - 1 ? 'pb-8 border-b border-border/50' : ''}>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-semibold">{option.title}</h4>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {option.features.map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                                <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Unser Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Die Menschen hinter katew
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-6">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Anbieter CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Jetzt Anbieter werden
              </h3>
              <p className="text-muted-foreground mb-6">
                Werden Sie Teil unseres Netzwerks und profitieren Sie von digitaler Vermittlung, 
                besserer Auslastung und starken Kooperationen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Kostenlose Registrierung
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Keine Grundgebühr
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Flexible Auftragsannahme
                </li>
              </ul>
              <Button size="lg" className="w-full md:w-auto">
                Als Anbieter registrieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Partner CTA */}
            <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Jetzt Partner werden
              </h3>
              <p className="text-muted-foreground mb-6">
                Kliniken, Pflegeeinrichtungen und Praxen: Vereinfachen Sie die Fahrtenorganisation 
                für Ihre Patienten mit unserer Plattform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Zentrale Koordination
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Digitale Dokumentation
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Transparente Übersicht
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="w-full md:w-auto">
                Als Partner registrieren
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
