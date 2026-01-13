import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactFormCTA } from "@/components/ContactFormCTA";
import teamChanu from "@/assets/team-chanu.jpeg";
import teamDino from "@/assets/team-dino.png";
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
    image: teamDino,
  },
  {
    name: "Chanu De Silva",
    role: "CTO",
    linkedin: "#",
    image: teamChanu,
  },
];

const About = () => {
  const [activeOption, setActiveOption] = useState("sitzend");

  const selectedOption = allOptions.find(opt => opt.id === activeOption) || allOptions[0];
  const SelectedIcon = selectedOption.icon;

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[200px]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: "3s" }} />
          <div className="absolute top-40 right-[15%] w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
          <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
          <div className="absolute bottom-20 right-[25%] w-24 h-24 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-2xl -rotate-12 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-8 animate-fade-in">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-4 h-4 text-primary opacity-50" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                Über uns
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Unser Beitrag, die Branche für{" "}
              </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Krankenfahrten
              </span>
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                {" "}besser zu machen
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-primary/5" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-24 left-[8%] w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-48 right-[12%] w-3 h-3 bg-secondary/30 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.7s' }} />
          <div className="absolute bottom-40 left-[15%] w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
          <div className="absolute top-1/3 right-[8%] w-4 h-4 bg-secondary/20 rounded-full animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.4s' }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg shadow-primary/5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <Target className="w-4 h-4" />
              Unsere Leistungen
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Alle Optionen im Überblick
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Transportarten und Buchungsoptionen für jeden Bedarf
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full" />

              <div className="grid md:grid-cols-[340px_1fr] relative">
                {/* Left: Navigation List */}
                <div className="border-r border-border/30 bg-gradient-to-b from-muted/50 to-muted/20 backdrop-blur-sm">
                  {/* Transport Types Header */}
                  <div className="p-5 border-b border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-secondary" />
                      <span className="text-xs font-bold text-foreground uppercase tracking-widest">Transportarten</span>
                    </div>
                  </div>
                  {allOptions.filter(opt => opt.category === "transport").map((option, index) => {
                    const Icon = option.icon;
                    const isActive = activeOption === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveOption(option.id)}
                        className={`group w-full flex items-center gap-4 p-5 transition-all duration-500 text-left relative overflow-hidden ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary/15 via-primary/10 to-transparent' 
                            : 'hover:bg-gradient-to-r hover:from-muted/80 hover:to-transparent'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Active indicator bar */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`} />
                        
                        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 scale-105' 
                            : 'bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:scale-105'
                        }`}>
                          <Icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                          {isActive && (
                            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`font-bold block text-base transition-colors duration-300 ${isActive ? 'text-primary' : 'group-hover:text-foreground'}`}>
                            {option.title}
                          </span>
                          <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{option.shortDescription}</span>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${
                          isActive ? 'text-primary opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                        }`} />
                      </button>
                    );
                  })}

                  {/* Booking Options Header */}
                  <div className="p-5 border-b border-t border-border/30 bg-gradient-to-r from-secondary/5 to-transparent">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-secondary to-primary" />
                      <span className="text-xs font-bold text-foreground uppercase tracking-widest">Buchungsoptionen</span>
                    </div>
                  </div>
                  {allOptions.filter(opt => opt.category === "booking").map((option, index) => {
                    const Icon = option.icon;
                    const isActive = activeOption === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveOption(option.id)}
                        className={`group w-full flex items-center gap-4 p-5 transition-all duration-500 text-left relative overflow-hidden ${
                          isActive 
                            ? 'bg-gradient-to-r from-secondary/15 via-secondary/10 to-transparent' 
                            : 'hover:bg-gradient-to-r hover:from-muted/80 hover:to-transparent'
                        }`}
                        style={{ animationDelay: `${(index + 4) * 100}ms` }}
                      >
                        {/* Active indicator bar */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`} />
                        
                        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-br from-secondary to-primary shadow-lg shadow-secondary/30 scale-105' 
                            : 'bg-gradient-to-br from-secondary/10 to-primary/10 group-hover:from-secondary/20 group-hover:to-primary/20 group-hover:scale-105'
                        }`}>
                          <Icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-primary-foreground' : 'text-secondary'}`} />
                          {isActive && (
                            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`font-bold block text-base transition-colors duration-300 ${isActive ? 'text-secondary' : 'group-hover:text-foreground'}`}>
                            {option.title}
                          </span>
                          <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{option.shortDescription}</span>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${
                          isActive ? 'text-secondary opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                        }`} />
                      </button>
                    );
                  })}
                </div>

                {/* Right: Content */}
                <div className="p-8 md:p-12 relative">
                  {/* Background glow for content area */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-[80px] pointer-events-none" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-5 mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/30 group">
                          <SelectedIcon className="w-10 h-10 text-primary-foreground" />
                        </div>
                        {/* Decorative rings */}
                        <div className="absolute -inset-2 rounded-[2rem] border border-primary/20 animate-pulse" />
                        <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/10" />
                      </div>
                      <div className="pt-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground mb-2">
                          {selectedOption.category === "transport" ? "Transportart" : "Buchungsoption"}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                          {selectedOption.title}
                        </h3>
                      </div>
                    </div>

                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 mb-8">
                      <div className="absolute top-0 left-6 w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent -translate-y-full" />
                      <p className="text-lg font-medium text-foreground/90 leading-relaxed">
                        {selectedOption.shortDescription}
                      </p>
                    </div>

                    <div className="prose prose-muted max-w-none mb-10">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {selectedOption.fullDescription}
                      </p>
                    </div>

                    <div className="relative border-t border-border/30 pt-8">
                      {/* Section header with decorative line */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-secondary" />
                        </div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">
                          Leistungsmerkmale
                        </h4>
                        <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedOption.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="group relative flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/30 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                          >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-5 h-5 text-secondary" />
                            </div>
                            <span className="relative text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Premium Design */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5" />
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-[15%] w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-[20%] w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-[10%] w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8">
              <Users className="w-4 h-4" />
              <span>Das Team hinter katew</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Visionäre mit
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Leidenschaft
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gemeinsam gestalten wir die Zukunft der Patientenmobilität – mit Innovation, Hingabe und dem Fokus auf das Wesentliche.
            </p>
          </div>

          {/* Team Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${index === 0 ? 'from-primary/50 to-secondary/50' : 'from-secondary/50 to-primary/50'} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700`} />
                  
                  {/* Main Card */}
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2rem] p-10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }} />
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-primary/5 via-transparent to-secondary/5' : 'from-secondary/5 via-transparent to-primary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative">
                      {/* Avatar Section */}
                      <div className="flex justify-center mb-8">
                        <div className="relative">
                          {/* Rotating Ring */}
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r ${index === 0 ? 'from-primary via-secondary to-primary' : 'from-secondary via-primary to-secondary'} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ 
                            animation: 'spin 8s linear infinite',
                          }} />
                          
                          {/* Avatar Container */}
                          <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${index === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'} p-1 group-hover:scale-105 transition-transform duration-500 shadow-2xl`}>
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Status Indicator */}
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border-4 border-card shadow-lg flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                          </div>
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        
                        {/* Role Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${index === 0 ? 'from-primary/10 to-secondary/10' : 'from-secondary/10 to-primary/10'} border ${index === 0 ? 'border-primary/20' : 'border-secondary/20'} mb-6`}>
                          <Target className={`w-4 h-4 ${index === 0 ? 'text-primary' : 'text-secondary'}`} />
                          <span className={`font-semibold ${index === 0 ? 'text-primary' : 'text-secondary'}`}>
                            {member.role}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                          <Sparkles className="w-4 h-4 text-muted-foreground/50" />
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                        </div>

                        {/* LinkedIn Button */}
                        <a 
                          href={member.linkedin}
                          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${index === 0 ? 'from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10' : 'from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10'} border ${index === 0 ? 'border-primary/20 hover:border-primary/40' : 'border-secondary/20 hover:border-secondary/40'} transition-all duration-300 group/link`}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${index === 0 ? 'from-primary to-primary/80' : 'from-secondary to-secondary/80'} flex items-center justify-center shadow-lg group-hover/link:scale-110 transition-transform duration-300`}>
                            <Linkedin className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-foreground">Auf LinkedIn verbinden</span>
                          <ArrowRight className={`w-4 h-4 ${index === 0 ? 'text-primary' : 'text-secondary'} group-hover/link:translate-x-1 transition-transform duration-300`} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
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
