import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactFormCTA } from "@/components/ContactFormCTA";
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
  Target,
  Sparkles,
  Clock,
  Shield,
  MapPin
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Registrieren / Einloggen",
    subtitle: "Ihr Zugang zur Plattform",
    description: "Erstellen Sie in wenigen Sekunden Ihr kostenloses katew-Konto. Einfache Anmeldung mit E-Mail – ohne versteckte Kosten oder Verpflichtungen.",
    detailedDescription: "Der erste Schritt zu Ihrer stressfreien Krankenfahrt beginnt mit der Registrierung auf unserer Plattform. Der Prozess ist bewusst einfach gehalten: Geben Sie Ihre E-Mail-Adresse ein, wählen Sie ein sicheres Passwort und bestätigen Sie Ihre Anmeldung. Innerhalb von Sekunden haben Sie vollen Zugang zu allen Funktionen der katew-Plattform. Es entstehen keine versteckten Kosten, keine Abonnements und keine Verpflichtungen. Für bereits registrierte Nutzer genügt ein einfacher Login, um sofort mit der Buchung fortzufahren.",
    features: ["Kostenlose Registrierung", "Keine Kreditkarte nötig", "Sofortiger Zugang", "SSL-verschlüsselt"],
    highlights: [
      { icon: Shield, text: "Datenschutz garantiert" },
      { icon: Clock, text: "Unter 30 Sekunden" },
    ]
  },
  {
    icon: FileText,
    number: "02",
    title: "Anfrage stellen",
    subtitle: "In unter 2 Minuten erledigt",
    description: "Geben Sie Ihre Fahrtdetails ein: Startadresse, Ziel, gewünschte Transportart und Termin. Unsere intelligente Plattform findet passende Anbieter in Ihrer Region.",
    detailedDescription: "Die Buchung einer Krankenfahrt war noch nie so einfach. Unser intuitives Buchungsformular führt Sie Schritt für Schritt durch den Prozess. Geben Sie zunächst Ihre Abholadresse ein – unser System schlägt automatisch Adressen vor und validiert diese. Anschließend wählen Sie Ihr Ziel, beispielsweise eine Klinik, Arztpraxis oder Dialyseeinrichtung. Bestimmen Sie die benötigte Transportart basierend auf Ihren körperlichen Anforderungen und wählen Sie Ihren Wunschtermin. Bei Serienterminen wie Dialyse oder Chemotherapie können Sie direkt wiederkehrende Fahrten einrichten. Unsere intelligente Matching-Technologie findet in Echtzeit verfügbare, qualifizierte Fahrdienstanbieter in Ihrer Region.",
    features: ["Intuitive Eingabe", "Alle Transportarten", "Flexible Terminwahl", "Serientermine möglich"],
    highlights: [
      { icon: MapPin, text: "Adress-Autovervollständigung" },
      { icon: Clock, text: "Echtzeit-Verfügbarkeit" },
    ]
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Bestätigung erhalten",
    subtitle: "Alles organisiert – Sie können sich entspannen",
    description: "Erhalten Sie Ihre Buchungsbestätigung mit allen wichtigen Details: Fahrer-Kontakt, Fahrzeuginfos und genaue Abholzeit. Tracking und Support inklusive.",
    detailedDescription: "Nach erfolgreicher Buchung erhalten Sie umgehend eine detaillierte Bestätigung per E-Mail und in Ihrem persönlichen Dashboard. Diese enthält alle relevanten Informationen: den Namen Ihres Fahrers, das Kennzeichen des Fahrzeugs, die exakte Abholzeit sowie eine direkte Kontaktmöglichkeit. Am Tag der Fahrt können Sie den Standort Ihres Transporters in Echtzeit verfolgen. Sollten Änderungen notwendig sein, können Sie diese bequem über Ihr Dashboard vornehmen oder unseren Kundenservice kontaktieren. Nach der Fahrt haben Sie die Möglichkeit, Ihren Fahrdienstanbieter zu bewerten und so anderen Nutzern bei der Auswahl zu helfen.",
    features: ["Sofortige Bestätigung", "Fahrer-Kontakt", "Live-Tracking", "Bewertungssystem"],
    highlights: [
      { icon: Shield, text: "Verifizierte Anbieter" },
      { icon: Clock, text: "24/7 Support" },
    ]
  },
];

const allOptions = [
  {
    id: "sitzend",
    icon: User,
    category: "transport",
    title: "Sitzend",
    shortDescription: "Für gehfähige Patienten mit leichten Einschränkungen",
    fullDescription: "Der sitzende Transport ist die ideale Lösung für Patienten, die grundsätzlich gehfähig sind, aber Unterstützung beim Transport zu Terminen benötigen. Diese Transportart eignet sich besonders für Menschen mit leichten Mobilitätseinschränkungen, Senioren oder Patienten, die nach ambulanten Eingriffen eine sichere Beförderung benötigen. Die Fahrten erfolgen in komfortablen PKWs oder geräumigen Großraumfahrzeugen unserer Partner-Unternehmen, die mit bequemen Sitzen und ausreichend Platz ausgestattet sind. Die geschulten Fahrer der Anbieter unterstützen beim Ein- und Aussteigen und begleiten Sie bei Bedarf bis zur Eingangstür Ihres Ziels. Alle Fahrzeuge sind klimatisiert und verfügen über moderne Sicherheitsausstattung.",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Klimatisiertes Fahrzeug"],
  },
  {
    id: "rollstuhl",
    icon: Accessibility,
    category: "transport",
    title: "Rollstuhl",
    shortDescription: "Spezialisierter Transport für Rollstuhlfahrer",
    fullDescription: "Der Rollstuhltransport wurde speziell für Menschen konzipiert, die dauerhaft oder temporär auf einen Rollstuhl angewiesen sind. Die Fahrzeuge unserer Partner-Anbieter umfassen moderne, barrierefreie Transporter, die mit elektrischen Hebebühnen oder leicht befahrbaren Rampen ausgestattet sind. Die Fahrzeuge bieten ausreichend Platz für verschiedene Rollstuhltypen – von manuellen Rollstühlen bis hin zu elektrischen Modellen. Ein besonderer Fokus liegt auf der sicheren Befestigung: Spezielle Gurtsysteme und Arretierungen halten den Rollstuhl während der gesamten Fahrt stabil und sicher. Die Fahrer unserer Partner sind speziell geschult im Umgang mit Rollstuhlfahrern.",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Geschultes Personal"],
  },
  {
    id: "tragestuhl",
    icon: Users,
    category: "transport",
    title: "Tragestuhl",
    shortDescription: "Optimal für enge Treppenhäuser und schwierige Zugänge",
    fullDescription: "Der Tragestuhl-Transport ist die optimale Lösung für Patienten, die in höheren Etagen wohnen und aufgrund ihrer körperlichen Einschränkungen nicht selbstständig Treppen steigen können. Diese Transportart wird von mindestens zwei erfahrenen Mitarbeitern der Partner-Unternehmen durchgeführt, die in ergonomischen Tragetechniken und sicherem Transport geschult sind. Der Tragestuhl selbst ist ein spezielles Hilfsmittel, das sowohl für den Patienten als auch für das Personal größtmögliche Sicherheit bietet. Enge Treppenhäuser, verwinkelte Korridore oder fehlende Aufzüge stellen für die geschulten Teams kein Hindernis dar.",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
  },
  {
    id: "liegend",
    icon: Bed,
    category: "transport",
    title: "Liegend",
    shortDescription: "Vollausgestatteter Transport auf Trage für bettlägerige Patienten",
    fullDescription: "Der Liegendtransport richtet sich an Patienten, die aus bestimmten Gründen nicht sitzen können und während des Transports eine liegende Position einnehmen müssen. Dies betrifft beispielsweise frisch operierte Patienten, Menschen mit schweren Verletzungen oder Personen, die eine horizontale Lagerung benötigen. Die Transportfahrzeuge unserer Partner sind vollständig ausgerüstet und verfügen über professionelle Tragen mit höhenverstellbaren Kopf- und Fußteilen. Die klimatisierten Fahrzeuge gewährleisten optimale Bedingungen während der gesamten Fahrt. Die Besatzungen der Anbieter sind erfahren im Umgang mit liegenden Patienten.",
    features: ["Professionelle Tragen", "Klimatisiert", "Begleitperson möglich"],
  },
  {
    id: "verordnung",
    icon: FileText,
    category: "booking",
    title: "Mit Verordnung",
    shortDescription: "Bei ärztlicher Verordnung übernimmt die Krankenkasse die Kosten",
    fullDescription: "Wenn Ihr behandelnder Arzt eine Notwendigkeit für Krankenfahrten feststellt, kann er eine sogenannte Verordnung einer Krankenbeförderung ausstellen. Diese Verordnung ist die Grundlage dafür, dass Ihre gesetzliche oder private Krankenversicherung die Kosten für den Transport übernimmt. Typische Gründe für eine Verordnung sind regelmäßige Behandlungen, Fahrten zu ambulanten Operationen oder Termine, bei denen Sie aus gesundheitlichen Gründen nicht selbstständig anreisen können. Bei katew vermitteln wir Sie an Partner-Unternehmen, die direkt mit Ihrer Krankenkasse abrechnen – Sie müssen nicht in Vorleistung treten und haben keinen Papieraufwand.",
    features: ["Kostenübernahme durch Kasse", "Direkte Abrechnung", "Digitaler Upload"],
  },
  {
    id: "selbstzahler",
    icon: CreditCard,
    category: "booking",
    title: "Selbstzahler",
    shortDescription: "Flexibel und unkompliziert ohne Verordnung buchen",
    fullDescription: "Nicht jede Krankenfahrt erfordert eine ärztliche Verordnung – und manchmal möchte man einfach schnell und unkompliziert einen zuverlässigen Transport buchen. Als Selbstzahler genießen Sie maximale Flexibilität: Keine Wartezeit auf Genehmigungen, keine Bürokratie, keine Einschränkungen. Buchen Sie spontan für den gleichen Tag oder planen Sie Ihre Fahrten Wochen im Voraus. Die Preise der Partner-Unternehmen sind transparent und werden Ihnen bereits vor der Buchung angezeigt – es gibt keine versteckten Kosten oder nachträglichen Aufschläge.",
    features: ["Sofortige Buchung", "Transparente Preise", "Online-Bezahlung"],
  },
  {
    id: "ausschreibungen",
    icon: Gavel,
    category: "booking",
    title: "Ausschreibungen",
    shortDescription: "Mit einem Klick mehrere Angebote einholen und vergleichen",
    fullDescription: "Die Ausschreibungsfunktion bietet jedem – ob Einrichtung, Privatkunde, Angehöriger oder sonstige Interessenten – die Möglichkeit, mit nur einem Klick verschiedene Transportunternehmen gleichzeitig anzufragen. Sie setzen eine Frist und erhalten bis dahin mehrere Angebote von qualifizierten Anbietern aus unserem Netzwerk. Danach entscheiden Sie in Ruhe, welches Angebot am besten zu Ihren Anforderungen passt. Volle Transparenz, maximaler Preisvergleich – ganz ohne Aufwand. Kein Telefonieren, kein Vergleichen von Einzelangeboten, keine versteckten Kosten.",
    features: ["Ein Klick – mehrere Angebote", "Volle Transparenz", "Maximaler Preisvergleich"],
  },
];

const teamMembers = [
  {
    name: "Dino Lalic",
    role: "CEO",
    linkedin: "#",
  },
  {
    name: "Chanu De Silva",
    role: "CTO",
    linkedin: "#",
  },
];

const About = () => {
  const [activeOption, setActiveOption] = useState("sitzend");

  const selectedOption = allOptions.find(opt => opt.id === activeOption) || allOptions[0];
  const SelectedIcon = selectedOption.icon;

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

      {/* Die Zukunft hat begonnen - HowItWorks Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Einfach & Schnell
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Die Zukunft hat begonnen
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Passende Lösungen für jeden Bedarf
            </p>
          </div>

          {/* 3 Steps Grid - Like Homepage */}
          <div className="max-w-7xl mx-auto mb-20">
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

              {[
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
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-full bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                          <span className="text-3xl font-bold text-primary-foreground">{step.number}</span>
                        </div>
                        <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-xl bg-card border border-border shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-sm text-secondary font-semibold mb-1 tracking-wide uppercase">{step.subtitle}</p>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {step.description}
                        </p>

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

                      <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
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

      {/* Transportarten & Buchungsoptionen Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Unsere Leistungen
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alle Optionen im Überblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Transportarten und Buchungsoptionen für jeden Bedarf
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* Left: Navigation List */}
                <div className="border-r border-border/50 bg-muted/30">
                  {/* Transport Types */}
                  <div className="p-4 border-b border-border/50">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Transportarten</span>
                  </div>
                  {allOptions.filter(opt => opt.category === "transport").map((option) => {
                    const Icon = option.icon;
                    const isActive = activeOption === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveOption(option.id)}
                        className={`w-full flex items-center gap-4 p-5 transition-all duration-300 text-left ${
                          isActive 
                            ? 'bg-primary/10 border-r-4 border-primary' 
                            : 'hover:bg-muted/50 border-r-4 border-transparent'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`font-semibold block ${isActive ? 'text-primary' : ''}`}>{option.title}</span>
                          <span className="text-xs text-muted-foreground line-clamp-1">{option.shortDescription}</span>
                        </div>
                      </button>
                    );
                  })}

                  {/* Booking Options */}
                  <div className="p-4 border-b border-t border-border/50">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Buchungsoptionen</span>
                  </div>
                  {allOptions.filter(opt => opt.category === "booking").map((option) => {
                    const Icon = option.icon;
                    const isActive = activeOption === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveOption(option.id)}
                        className={`w-full flex items-center gap-4 p-5 transition-all duration-300 text-left ${
                          isActive 
                            ? 'bg-primary/10 border-r-4 border-primary' 
                            : 'hover:bg-muted/50 border-r-4 border-transparent'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`font-semibold block ${isActive ? 'text-primary' : ''}`}>{option.title}</span>
                          <span className="text-xs text-muted-foreground line-clamp-1">{option.shortDescription}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <SelectedIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block mb-1">
                        {selectedOption.category === "transport" ? "Transportart" : "Buchungsoption"}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold">{selectedOption.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    {selectedOption.shortDescription}
                  </p>

                  <div className="prose prose-muted max-w-none mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedOption.fullDescription}
                    </p>
                  </div>

                  <div className="border-t border-border/50 pt-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Leistungsmerkmale
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedOption.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Das Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ohne das Team könnten wir nichts bewirken
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
                  <p className="text-primary font-medium mb-6">{member.role}</p>
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
                  Qualifizierte Anbieter
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

      {/* Contact Form CTA */}
      <ContactFormCTA variant="about" />

      <Footer />
    </main>
  );
};

export default About;
