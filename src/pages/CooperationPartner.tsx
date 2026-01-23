import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Heart, 
  Activity, 
  Code, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  MapPin,
  ExternalLink,
  Percent,
  Star,
  Users,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

type PartnerCategory = "Krankenhaus" | "Reha" | "Pflege" | "Software";

interface CooperationPartner {
  id: string;
  name: string;
  logo: string;
  category: PartnerCategory;
  verified: boolean;
  description: string;
  benefits: string[];
  discount: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    address: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

const categoryIcons: Record<PartnerCategory, React.ComponentType<{ className?: string }>> = {
  "Krankenhaus": Building2,
  "Reha": Activity,
  "Pflege": Heart,
  "Software": Code,
};

const categoryColors: Record<PartnerCategory, { bg: string; text: string; border: string }> = {
  "Krankenhaus": { bg: "from-blue-500/10 to-blue-600/5", text: "text-blue-500", border: "border-blue-500/20" },
  "Reha": { bg: "from-purple-500/10 to-purple-600/5", text: "text-purple-500", border: "border-purple-500/20" },
  "Pflege": { bg: "from-rose-500/10 to-rose-600/5", text: "text-rose-500", border: "border-rose-500/20" },
  "Software": { bg: "from-green-500/10 to-green-600/5", text: "text-green-500", border: "border-green-500/20" },
};

const cooperationPartners: CooperationPartner[] = [
  {
    id: "charite-berlin",
    name: "Charité Berlin",
    logo: "CB",
    category: "Krankenhaus",
    verified: true,
    description: "Die Charité – Universitätsmedizin Berlin ist eine der größten Universitätskliniken Europas. Als langjähriger Partner profitieren katew-Mitglieder von exklusiven Konditionen bei Krankenfahrten zu allen Charité-Standorten.",
    benefits: [
      "Bevorzugte Vermittlung für Charité-Fahrten",
      "Vereinfachte Abrechnungsprozesse",
      "Direkter Ansprechpartner vor Ort",
      "Reduzierte Wartezeiten bei der Abholung"
    ],
    discount: "15% Rabatt auf Verwaltungsgebühren",
    contact: {
      email: "transport@charite.de",
      phone: "+49 30 450-0",
      website: "www.charite.de",
      address: "Charitéplatz 1, 10117 Berlin"
    },
    stats: [
      { label: "Fahrten/Monat", value: "5.000+" },
      { label: "Standorte", value: "4" },
      { label: "Partner seit", value: "2021" }
    ]
  },
  {
    id: "helios-kliniken",
    name: "Helios Kliniken",
    logo: "HK",
    category: "Krankenhaus",
    verified: true,
    description: "Helios betreibt über 80 Kliniken in ganz Deutschland. Durch unsere Partnerschaft erhalten Sie Zugang zu einem der größten privaten Klinikbetreiber mit garantierten Auftragsvolumen.",
    benefits: [
      "Bundesweites Netzwerk mit 80+ Kliniken",
      "Garantiertes monatliches Auftragsvolumen",
      "Standardisierte Prozesse an allen Standorten",
      "Digitale Auftragsabwicklung"
    ],
    discount: "20% auf Softwarelizenzgebühren",
    contact: {
      email: "logistik@helios-gesundheit.de",
      phone: "+49 30 521321-0",
      website: "www.helios-gesundheit.de",
      address: "Friedrichstraße 136, 10117 Berlin"
    },
    stats: [
      { label: "Kliniken", value: "86" },
      { label: "Betten", value: "37.000" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "asklepios",
    name: "Asklepios",
    logo: "AS",
    category: "Krankenhaus",
    verified: true,
    description: "Asklepios ist einer der führenden privaten Klinikbetreiber in Deutschland. Unsere Kooperation ermöglicht Ihnen bevorzugten Zugang zu Transportaufträgen in der gesamten Asklepios-Gruppe.",
    benefits: [
      "Exklusiver Zugang zu Asklepios-Aufträgen",
      "Vereinheitlichte Buchungsprozesse",
      "Schulungen für Mitarbeiter",
      "Qualitätszertifizierung"
    ],
    discount: "10% auf Versicherungsprämien",
    contact: {
      email: "patiententransport@asklepios.com",
      phone: "+49 40 1818-0",
      website: "www.asklepios.com",
      address: "Rübenkamp 226, 22307 Hamburg"
    },
    stats: [
      { label: "Einrichtungen", value: "170+" },
      { label: "Mitarbeiter", value: "67.000" },
      { label: "Partner seit", value: "2022" }
    ]
  },
  {
    id: "universitaetsklinik",
    name: "Universitätsklinik",
    logo: "UK",
    category: "Krankenhaus",
    verified: false,
    description: "Verschiedene Universitätskliniken in Deutschland sind Teil unseres Kooperationsnetzwerks. Profitieren Sie von speziellen Konditionen für akademische Einrichtungen.",
    benefits: [
      "Zugang zu universitären Einrichtungen",
      "Forschungsprojekt-Beteiligung",
      "Spezielle Ausbildungsprogramme",
      "Netzwerk-Events"
    ],
    discount: "Individuelle Vereinbarungen",
    contact: {
      email: "info@katew.de",
      phone: "+49 800 KATEW-00",
      website: "www.katew.de/universitaeten",
      address: "Verschiedene Standorte"
    },
    stats: [
      { label: "Partner-Unis", value: "12" },
      { label: "Studierende", value: "50.000+" },
      { label: "Partner seit", value: "2023" }
    ]
  },
  {
    id: "mediareha",
    name: "MediaReha",
    logo: "MR",
    category: "Reha",
    verified: true,
    description: "MediaReha ist ein führender Anbieter von Rehabilitationsleistungen. Unsere Partnerschaft sichert Ihnen regelmäßige Aufträge im Bereich der Reha-Transporte.",
    benefits: [
      "Regelmäßige Serien-Fahrten",
      "Planbare Auftragsvolumen",
      "Spezialisierte Reha-Transporte",
      "Flexible Buchungszeiten"
    ],
    discount: "Keine Vermittlungsgebühr bei Serienfahrten",
    contact: {
      email: "transport@mediareha.de",
      phone: "+49 89 12345-678",
      website: "www.mediareha.de",
      address: "Rehastraße 25, 80333 München"
    },
    stats: [
      { label: "Reha-Zentren", value: "15" },
      { label: "Patienten/Jahr", value: "25.000" },
      { label: "Partner seit", value: "2021" }
    ]
  },
  {
    id: "kur-reha",
    name: "Kur + Reha",
    logo: "KR",
    category: "Reha",
    verified: false,
    description: "Kur + Reha verbindet traditionelle Kureinrichtungen mit modernen Rehabilitationsangeboten. Als Partner profitieren Sie von Aufträgen in beliebten Kurorten.",
    benefits: [
      "Aufträge in Kurorten bundesweit",
      "Saisonale Auftragsspitzen",
      "Langstrecken-Transporte",
      "Komfort-Transporte"
    ],
    discount: "5% Bonus bei hohem Volumen",
    contact: {
      email: "buchung@kur-reha.de",
      phone: "+49 7221 930-0",
      website: "www.kur-reha.de",
      address: "Kurhaus-Allee 1, 76530 Baden-Baden"
    },
    stats: [
      { label: "Kurorte", value: "30+" },
      { label: "Fahrten/Jahr", value: "8.000" },
      { label: "Partner seit", value: "2022" }
    ]
  },
  {
    id: "rehazentrum",
    name: "RehaZentrum",
    logo: "RZ",
    category: "Reha",
    verified: true,
    description: "RehaZentrum betreibt spezialisierte Rehabilitationskliniken in ganz Deutschland. Nutzen Sie unsere Kooperation für verlässliche Auftragsströme.",
    benefits: [
      "Verlässliche Auftragsströme",
      "Spezialisierte Anforderungen",
      "Premium-Service für Patienten",
      "Langfristige Verträge möglich"
    ],
    discount: "12% auf Abrechnungsservices",
    contact: {
      email: "logistik@rehazentrum.de",
      phone: "+49 711 8899-0",
      website: "www.rehazentrum.de",
      address: "Gesundheitsweg 10, 70173 Stuttgart"
    },
    stats: [
      { label: "Standorte", value: "22" },
      { label: "Betten", value: "5.500" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "caritas-pflege",
    name: "Caritas Pflege",
    logo: "CP",
    category: "Pflege",
    verified: true,
    description: "Die Caritas ist einer der größten Wohlfahrtsverbände Deutschlands. Durch unsere Kooperation erhalten Sie Zugang zu einem breiten Netzwerk an Pflegeeinrichtungen.",
    benefits: [
      "Zugang zu 1.500+ Einrichtungen",
      "Soziale Projekte-Unterstützung",
      "Gemeinnützige Rabatte",
      "Regionale Aufträge"
    ],
    discount: "Gemeinnütziger Sondertarif",
    contact: {
      email: "pflege@caritas.de",
      phone: "+49 761 200-0",
      website: "www.caritas.de",
      address: "Karlstraße 40, 79104 Freiburg"
    },
    stats: [
      { label: "Einrichtungen", value: "1.500+" },
      { label: "Mitarbeiter", value: "660.000" },
      { label: "Partner seit", value: "2019" }
    ]
  },
  {
    id: "awo-seniorendienste",
    name: "AWO Seniorendienste",
    logo: "AW",
    category: "Pflege",
    verified: true,
    description: "Die AWO bietet umfassende Seniorendienste in ganz Deutschland. Unsere Partnerschaft garantiert Ihnen regelmäßige Aufträge im Bereich Seniorentransport.",
    benefits: [
      "Regelmäßige Seniorentransporte",
      "Tagespflege-Fahrten",
      "Arztfahrten-Vermittlung",
      "Schulungen für Umgang mit Senioren"
    ],
    discount: "10% auf Fortbildungen",
    contact: {
      email: "senioren@awo.org",
      phone: "+49 30 26309-0",
      website: "www.awo.org",
      address: "Heinrich-Albertz-Haus, 10715 Berlin"
    },
    stats: [
      { label: "Ortsvereine", value: "3.300" },
      { label: "Ehrenamtliche", value: "66.000" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "korian",
    name: "Korian",
    logo: "KO",
    category: "Pflege",
    verified: false,
    description: "Korian ist der europäische Marktführer in der Pflege- und Betreuungsbranche. Nutzen Sie unsere Kooperation für europaweite Transportmöglichkeiten.",
    benefits: [
      "Europaweite Möglichkeiten",
      "Standardisierte Qualität",
      "Moderne Einrichtungen",
      "Internationale Expansion"
    ],
    discount: "Verhandlungsbasiert",
    contact: {
      email: "transport@korian.de",
      phone: "+49 89 24418-0",
      website: "www.korian.de",
      address: "Hohenzollernstraße 1, 80801 München"
    },
    stats: [
      { label: "Länder", value: "6" },
      { label: "Einrichtungen", value: "1.000+" },
      { label: "Partner seit", value: "2023" }
    ]
  },
  {
    id: "alloheim",
    name: "Alloheim",
    logo: "AL",
    category: "Pflege",
    verified: true,
    description: "Alloheim ist einer der größten privaten Pflegeheimbetreiber Deutschlands. Durch unsere Partnerschaft profitieren Sie von stabilen Auftragsvolumen.",
    benefits: [
      "Über 200 Einrichtungen bundesweit",
      "Stabile Auftragsvolumen",
      "Digitale Auftragserfassung",
      "Qualitätsstandards"
    ],
    discount: "15% auf Dispositionssoftware",
    contact: {
      email: "logistik@alloheim.de",
      phone: "+49 211 540690-0",
      website: "www.alloheim.de",
      address: "Am Seestern 8, 40547 Düsseldorf"
    },
    stats: [
      { label: "Standorte", value: "240" },
      { label: "Bewohner", value: "22.000" },
      { label: "Partner seit", value: "2021" }
    ]
  },
  {
    id: "connext-vivendi",
    name: "Connext Vivendi",
    logo: "CV",
    category: "Software",
    verified: true,
    description: "Connext Vivendi ist führend in der Sozialwirtschafts-Software. Als Partner erhalten Sie Sonderkonditionen für die Integration unserer Systeme.",
    benefits: [
      "Nahtlose Systemintegration",
      "API-Zugang inklusive",
      "Technischer Support",
      "Regelmäßige Updates"
    ],
    discount: "25% auf Lizenzgebühren",
    contact: {
      email: "integration@connext.de",
      phone: "+49 5251 9885-0",
      website: "www.connext.de",
      address: "Balhorner Feld 11, 33106 Paderborn"
    },
    stats: [
      { label: "Kunden", value: "3.500+" },
      { label: "Nutzer", value: "180.000" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "cgm",
    name: "CGM",
    logo: "CG",
    category: "Software",
    verified: true,
    description: "CompuGroup Medical (CGM) ist einer der weltweit führenden eHealth-Anbieter. Nutzen Sie unsere Kooperation für optimale Softwareintegration.",
    benefits: [
      "Weltweit führende eHealth-Lösung",
      "Kompatibilität mit allen Systemen",
      "Schulungsprogramme",
      "24/7 Technischer Support"
    ],
    discount: "30% auf Erstintegration",
    contact: {
      email: "partner@cgm.com",
      phone: "+49 261 8000-0",
      website: "www.cgm.com",
      address: "Maria Trost 21, 56070 Koblenz"
    },
    stats: [
      { label: "Länder", value: "56" },
      { label: "Mitarbeiter", value: "8.500" },
      { label: "Partner seit", value: "2019" }
    ]
  },
  {
    id: "medifox",
    name: "Medifox",
    logo: "MF",
    category: "Software",
    verified: false,
    description: "Medifox bietet spezialisierte Softwarelösungen für die Pflegebranche. Unsere Kooperation ermöglicht einfache Datenübertragung und Prozessoptimierung.",
    benefits: [
      "Pflegespezifische Lösungen",
      "Einfache Datenübertragung",
      "Mobile Apps verfügbar",
      "Cloud-basierte Lösungen"
    ],
    discount: "20% auf Cloud-Services",
    contact: {
      email: "info@medifox.de",
      phone: "+49 5121 28890-0",
      website: "www.medifox.de",
      address: "Junkersstraße 1, 31137 Hildesheim"
    },
    stats: [
      { label: "Anwender", value: "6.200" },
      { label: "Pflegekräfte", value: "180.000" },
      { label: "Partner seit", value: "2022" }
    ]
  }
];

export default function CooperationPartner() {
  const { partnerId } = useParams<{ partnerId: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory | "Alle">("Alle");
  
  const currentPartner = cooperationPartners.find(p => p.id === partnerId);
  
  useEffect(() => {
    if (currentPartner) {
      setSelectedCategory(currentPartner.category);
    }
  }, [currentPartner]);

  if (!currentPartner) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Partner nicht gefunden</h1>
            <p className="text-muted-foreground mb-8">Der gesuchte Kooperationspartner existiert nicht.</p>
            <Button onClick={() => navigate('/fuer-anbieter')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const CategoryIcon = categoryIcons[currentPartner.category];
  const categoryColor = categoryColors[currentPartner.category];
  
  const filteredPartners = selectedCategory === "Alle" 
    ? cooperationPartners 
    : cooperationPartners.filter(p => p.category === selectedCategory);

  const currentIndex = filteredPartners.findIndex(p => p.id === partnerId);
  const prevPartner = currentIndex > 0 ? filteredPartners[currentIndex - 1] : null;
  const nextPartner = currentIndex < filteredPartners.length - 1 ? filteredPartners[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/fuer-anbieter" className="hover:text-primary transition-colors">
              Für Anbieter
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/fuer-anbieter#kooperationen" className="hover:text-primary transition-colors">
              Kooperationsvorteile
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentPartner.name}</span>
          </nav>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <div className="bg-card border border-border/50 rounded-2xl p-4">
                  <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">Kategorien</h3>
                  <div className="space-y-1">
                    {(["Alle", "Krankenhaus", "Reha", "Pflege", "Software"] as const).map((category) => {
                      const count = category === "Alle" 
                        ? cooperationPartners.length 
                        : cooperationPartners.filter(p => p.category === category).length;
                      const Icon = category === "Alle" ? Users : categoryIcons[category as PartnerCategory];
                      const isActive = selectedCategory === category;
                      
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4" />
                            {category}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            isActive 
                              ? "bg-primary-foreground/20" 
                              : "bg-muted"
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Partner List */}
                <div className="bg-card border border-border/50 rounded-2xl p-4 max-h-[400px] overflow-y-auto">
                  <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">Partner</h3>
                  <div className="space-y-1">
                    {filteredPartners.map((partner) => {
                      const Icon = categoryIcons[partner.category];
                      const isActive = partner.id === partnerId;
                      
                      return (
                        <Link
                          key={partner.id}
                          to={`/kooperationspartner/${partner.id}`}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground"
                              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isActive 
                              ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground" 
                              : "bg-muted"
                          }`}>
                            {partner.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{partner.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Icon className="w-3 h-3" />
                              {partner.category}
                            </div>
                          </div>
                          {partner.verified && (
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <motion.div
                key={partnerId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Partner Header */}
                <div className={`relative bg-gradient-to-br ${categoryColor.bg} border ${categoryColor.border} rounded-3xl p-8 mb-8 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-black text-primary-foreground shadow-xl shadow-primary/25">
                      {currentPartner.logo}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border} border`}>
                          <CategoryIcon className="w-3.5 h-3.5" />
                          {currentPartner.category}
                        </span>
                        {currentPartner.verified && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Verifiziert
                          </span>
                        )}
                      </div>
                      
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentPartner.name}</h1>
                      <p className="text-muted-foreground text-lg leading-relaxed">{currentPartner.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="relative grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/30">
                    {currentPartner.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits & Discount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Benefits */}
                  <div className="bg-card border border-border/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold">Ihre Vorteile</h2>
                    </div>
                    <ul className="space-y-3">
                      {currentPartner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Discount */}
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                        <Percent className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold">Kooperationsvorteil</h2>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5">
                      <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        {currentPartner.discount}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Exklusiv für katew-Mitglieder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-card border border-border/50 rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-bold mb-6">Kontaktdaten</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href={`mailto:${currentPartner.contact.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">E-Mail</div>
                        <div className="font-medium">{currentPartner.contact.email}</div>
                      </div>
                    </a>
                    
                    <a 
                      href={`tel:${currentPartner.contact.phone}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Telefon</div>
                        <div className="font-medium">{currentPartner.contact.phone}</div>
                      </div>
                    </a>
                    
                    <a 
                      href={`https://${currentPartner.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">Website</div>
                        <div className="font-medium flex items-center gap-1">
                          {currentPartner.contact.website}
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Adresse</div>
                        <div className="font-medium">{currentPartner.contact.address}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  {prevPartner ? (
                    <Link
                      to={`/kooperationspartner/${prevPartner.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Vorheriger</div>
                        <div className="font-medium">{prevPartner.name}</div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  
                  {nextPartner ? (
                    <Link
                      to={`/kooperationspartner/${nextPartner.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group text-right"
                    >
                      <div>
                        <div className="text-xs text-muted-foreground">Nächster</div>
                        <div className="font-medium">{nextPartner.name}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
