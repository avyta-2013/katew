import { useState } from "react";
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
    fullDescription: "Der sitzende Transport ist die ideale Lösung für Patienten, die grundsätzlich gehfähig sind, aber Unterstützung beim Transport zu Terminen benötigen. Diese Transportart eignet sich besonders für Menschen mit leichten Mobilitätseinschränkungen, Senioren oder Patienten, die nach ambulanten Eingriffen eine sichere Beförderung benötigen. Die Fahrten erfolgen in komfortablen PKWs oder geräumigen Großraumfahrzeugen, die mit bequemen Sitzen und ausreichend Platz ausgestattet sind. Unsere geschulten Fahrer unterstützen beim Ein- und Aussteigen und begleiten Sie bei Bedarf bis zur Eingangstür Ihres Ziels. Alle Fahrzeuge sind klimatisiert und verfügen über moderne Sicherheitsausstattung. Bei Bedarf kann eine Begleitperson kostenlos mitfahren. Diese Transportart ist sowohl für Einzelfahrten als auch für regelmäßige Termine wie Arztbesuche, Therapiesitzungen oder Behördengänge geeignet.",
    features: ["Komfortabler Sitzplatz", "Begleitung möglich", "Klimatisiertes Fahrzeug"],
  },
  {
    id: "rollstuhl",
    icon: Accessibility,
    category: "transport",
    title: "Rollstuhl",
    shortDescription: "Spezialisierter Transport für Rollstuhlfahrer",
    fullDescription: "Der Rollstuhltransport wurde speziell für Menschen konzipiert, die dauerhaft oder temporär auf einen Rollstuhl angewiesen sind. Unsere Fahrzeugflotte umfasst moderne, barrierefreie Transporter, die mit elektrischen Hebebühnen oder leicht befahrbaren Rampen ausgestattet sind. Die Fahrzeuge bieten ausreichend Platz für verschiedene Rollstuhltypen – von manuellen Rollstühlen bis hin zu elektrischen Modellen. Ein besonderer Fokus liegt auf der sicheren Befestigung: Spezielle Gurtsysteme und Arretierungen halten den Rollstuhl während der gesamten Fahrt stabil und sicher. Unsere Fahrer sind speziell geschult im Umgang mit Rollstuhlfahrern und kennen die besonderen Anforderungen an einen würdevollen und sicheren Transport. Sie unterstützen beim Verladen, bei der Sicherung und begleiten Sie auf Wunsch bis zum Zielort. Barrierefreie Zugänge an Start- und Zieladresse werden bereits bei der Buchung berücksichtigt.",
    features: ["Barrierefreier Zugang", "Sichere Befestigung", "Geschultes Personal"],
  },
  {
    id: "tragestuhl",
    icon: Users,
    category: "transport",
    title: "Tragestuhl",
    shortDescription: "Optimal für enge Treppenhäuser und schwierige Zugänge",
    fullDescription: "Der Tragestuhl-Transport ist die optimale Lösung für Patienten, die in höheren Etagen wohnen und aufgrund ihrer körperlichen Einschränkungen nicht selbstständig Treppen steigen können. Diese Transportart wird von mindestens zwei erfahrenen Mitarbeitern durchgeführt, die in ergonomischen Tragetechniken und sicherem Transport geschult sind. Der Tragestuhl selbst ist ein spezielles Hilfsmittel, das sowohl für den Patienten als auch für das Personal größtmögliche Sicherheit bietet. Er verfügt über robuste Gurte, ergonomische Griffe und rutschfeste Auflagen. Enge Treppenhäuser, verwinkelte Korridore oder fehlende Aufzüge stellen für unser geschultes Team kein Hindernis dar. Die Mitarbeiter arbeiten behutsam und respektvoll, um dem Patienten einen würdevollen Transport zu ermöglichen. Nach dem Treppenaufgang erfolgt der Transfer in ein barrierefreies Fahrzeug oder direkt zum Rollstuhl. Diese Transportart ist unverzichtbar für viele ältere Menschen in Altbauwohnungen ohne Fahrstuhl.",
    features: ["Treppengängig", "Schonender Transport", "Erfahrenes Personal"],
  },
  {
    id: "liegend",
    icon: Bed,
    category: "transport",
    title: "Liegend",
    shortDescription: "Vollausgestatteter Transport auf Trage für bettlägerige Patienten",
    fullDescription: "Der Liegendtransport richtet sich an Patienten, die aus bestimmten Gründen nicht sitzen können und während des Transports eine liegende Position einnehmen müssen. Dies betrifft beispielsweise frisch operierte Patienten, Menschen mit schweren Verletzungen oder Personen, die eine horizontale Lagerung benötigen. Unsere Transportfahrzeuge sind vollständig ausgerüstet und verfügen über professionelle Tragen mit höhenverstellbaren Kopf- und Fußteilen. Die klimatisierten Fahrzeuge gewährleisten optimale Bedingungen während der gesamten Fahrt. Unsere Besatzungen sind erfahren im Umgang mit liegenden Patienten und arbeiten eng mit Kliniken und Pflegeeinrichtungen zusammen, um einen nahtlosen Übergang zu gewährleisten. Die Fahrzeuge bieten ausreichend Platz für die Trage sowie für eine Begleitperson, die auf Wunsch mitfahren kann.",
    features: ["Professionelle Tragen", "Klimatisiert", "Begleitperson möglich"],
  },
  {
    id: "verordnung",
    icon: FileText,
    category: "booking",
    title: "Mit Verordnung",
    shortDescription: "Bei ärztlicher Verordnung übernimmt die Krankenkasse die Kosten",
    fullDescription: "Wenn Ihr behandelnder Arzt eine Notwendigkeit für Krankenfahrten feststellt, kann er eine sogenannte Verordnung einer Krankenbeförderung ausstellen. Diese Verordnung ist die Grundlage dafür, dass Ihre gesetzliche oder private Krankenversicherung die Kosten für den Transport übernimmt. Typische Gründe für eine Verordnung sind regelmäßige Behandlungen, Fahrten zu ambulanten Operationen oder Termine, bei denen Sie aus gesundheitlichen Gründen nicht selbstständig anreisen können. Bei katew nehmen wir Ihnen den gesamten Abrechnungsaufwand ab: Laden Sie einfach die Verordnung in Ihrem Buchungsprozess hoch oder lassen Sie diese vom Arzt digital übermitteln. Wir rechnen direkt mit Ihrer Krankenkasse ab – Sie müssen nicht in Vorleistung treten und haben keinen Papieraufwand. Lediglich die gesetzliche Zuzahlung von maximal 10 Euro pro Fahrt wird fällig, sofern Sie nicht davon befreit sind. Für Serienbehandlungen wird die Verordnung automatisch für alle Folgetermine verwendet.",
    features: ["Kostenübernahme durch Kasse", "Direkte Abrechnung", "Digitaler Upload"],
  },
  {
    id: "selbstzahler",
    icon: CreditCard,
    category: "booking",
    title: "Selbstzahler",
    shortDescription: "Flexibel und unkompliziert ohne Verordnung buchen",
    fullDescription: "Nicht jede Krankenfahrt erfordert eine ärztliche Verordnung – und manchmal möchte man einfach schnell und unkompliziert einen zuverlässigen Transport buchen. Als Selbstzahler genießen Sie maximale Flexibilität: Keine Wartezeit auf Genehmigungen, keine Bürokratie, keine Einschränkungen. Buchen Sie spontan für den gleichen Tag oder planen Sie Ihre Fahrten Wochen im Voraus. Unsere Preise sind transparent und werden Ihnen bereits vor der Buchung angezeigt – es gibt keine versteckten Kosten oder nachträglichen Aufschläge. Die Bezahlung erfolgt bequem online per Kreditkarte, PayPal oder Lastschrift. Auf Wunsch erhalten Sie eine detaillierte Rechnung, die Sie bei Ihrer Versicherung einreichen können – viele private Krankenversicherungen und Zusatzversicherungen erstatten Krankenfahrten auch ohne Verordnung. Die Selbstzahler-Option eignet sich ideal für Begleitfahrten zu Vorsorgeuntersuchungen, Fahrten zur Reha, Besuche bei Angehörigen in Pflegeeinrichtungen oder alle anderen Situationen, in denen Sie professionellen Transport benötigen.",
    features: ["Sofortige Buchung", "Transparente Preise", "Online-Bezahlung"],
  },
  {
    id: "ausschreibungen",
    icon: Gavel,
    category: "booking",
    title: "Ausschreibungen",
    shortDescription: "Für Kostenträger und öffentliche Auftraggeber",
    fullDescription: "Die Ausschreibungsplattform von katew richtet sich an Krankenkassen, Kliniken, Pflegeeinrichtungen und andere Kostenträger, die regelmäßig Transportdienstleistungen in größerem Umfang benötigen. Unser digitales Ausschreibungsportal ermöglicht eine effiziente, transparente und rechtssichere Vergabe von Fahraufträgen. Definieren Sie Ihre Anforderungen detailliert: Regionen, Transportarten, Qualitätsstandards und Preismodelle. Qualifizierte Fahrdienstanbieter aus unserem geprüften Netzwerk können auf Ihre Ausschreibung bieten. Alle Angebote werden übersichtlich dargestellt und können nach verschiedenen Kriterien verglichen werden. Die gesamte Kommunikation und Dokumentation erfolgt digital und revisionssicher. Vergabeentscheidungen werden automatisch dokumentiert und archiviert. Nach Zuschlagserteilung erfolgt die operative Abwicklung direkt über die katew-Plattform – inklusive Auftragssteuerung, Qualitätsmonitoring und automatisierter Abrechnung. So sparen Sie Zeit, reduzieren Verwaltungskosten und stellen gleichzeitig höchste Qualitätsstandards bei der Patientenbeförderung sicher.",
    features: ["Digitale Ausschreibungen", "Qualifizierte Anbieter", "Transparente Vergabe"],
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

      {/* How It Works Section - Enhanced */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Einfach & Schnell
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In drei einfachen Schritten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zu Ihrer Krankenfahrt – digital, transparent und zuverlässig
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 1;
                return (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Center Timeline */}
                    <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
                      {index > 0 && (
                        <div className="w-1 h-12 bg-gradient-to-b from-primary/30 to-primary/60 rounded-full" />
                      )}
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-2xl shadow-primary/30 z-10 border-4 border-background">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-1 flex-1 bg-gradient-to-b from-primary/60 to-primary/30 rounded-full" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : ''}`}>
                      <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          {/* Mobile Number */}
                          <div className="md:hidden w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-xl mb-6">
                            {step.number}
                          </div>

                          {/* Icon & Subtitle */}
                          <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                              <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                              {step.subtitle}
                            </span>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                          
                          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                            {step.description}
                          </p>

                          <p className="text-xs text-muted-foreground/80 leading-relaxed mb-8">
                            {step.detailedDescription}
                          </p>

                          {/* Highlights */}
                          <div className={`flex gap-6 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                            {step.highlights.map((highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                                    <HighlightIcon className="w-4 h-4 text-secondary" />
                                  </div>
                                  <span className="text-muted-foreground">{highlight.text}</span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Features */}
                          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                            {step.features.map((feature, idx) => (
                              <span 
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                                {feature}
                              </span>
                            ))}
                          </div>
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

      <Footer />
    </main>
  );
};

export default About;
