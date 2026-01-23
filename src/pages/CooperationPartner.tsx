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

type MainCategory = "anbieter" | "partner";

type ProviderCategory = "Krankenhaus" | "Reha" | "Pflege" | "Software";
type PartnerCategory = "Krankenkasse" | "Verband" | "Dienstleister" | "Behörde";

interface CooperationPartner {
  id: string;
  name: string;
  logo: string;
  category: ProviderCategory | PartnerCategory;
  mainCategory: MainCategory;
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

const providerCategoryIcons: Record<ProviderCategory, React.ComponentType<{ className?: string }>> = {
  "Krankenhaus": Building2,
  "Reha": Activity,
  "Pflege": Heart,
  "Software": Code,
};

const partnerCategoryIcons: Record<PartnerCategory, React.ComponentType<{ className?: string }>> = {
  "Krankenkasse": Heart,
  "Verband": Users,
  "Dienstleister": Code,
  "Behörde": Building2,
};

const providerCategoryColors: Record<ProviderCategory, { bg: string; text: string; border: string }> = {
  "Krankenhaus": { bg: "from-blue-500/10 to-blue-600/5", text: "text-blue-500", border: "border-blue-500/20" },
  "Reha": { bg: "from-purple-500/10 to-purple-600/5", text: "text-purple-500", border: "border-purple-500/20" },
  "Pflege": { bg: "from-rose-500/10 to-rose-600/5", text: "text-rose-500", border: "border-rose-500/20" },
  "Software": { bg: "from-green-500/10 to-green-600/5", text: "text-green-500", border: "border-green-500/20" },
};

const partnerCategoryColors: Record<PartnerCategory, { bg: string; text: string; border: string }> = {
  "Krankenkasse": { bg: "from-emerald-500/10 to-emerald-600/5", text: "text-emerald-500", border: "border-emerald-500/20" },
  "Verband": { bg: "from-amber-500/10 to-amber-600/5", text: "text-amber-500", border: "border-amber-500/20" },
  "Dienstleister": { bg: "from-cyan-500/10 to-cyan-600/5", text: "text-cyan-500", border: "border-cyan-500/20" },
  "Behörde": { bg: "from-indigo-500/10 to-indigo-600/5", text: "text-indigo-500", border: "border-indigo-500/20" },
};

// Provider partners (Für Anbieter)
const providerPartners: CooperationPartner[] = [
  {
    id: "charite-berlin",
    name: "Charité Berlin",
    logo: "CB",
    category: "Krankenhaus",
    mainCategory: "anbieter",
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
    mainCategory: "anbieter",
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
    mainCategory: "anbieter",
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
    id: "mediareha",
    name: "MediaReha",
    logo: "MR",
    category: "Reha",
    mainCategory: "anbieter",
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
    id: "caritas-pflege",
    name: "Caritas Pflege",
    logo: "CP",
    category: "Pflege",
    mainCategory: "anbieter",
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
    id: "connext-vivendi",
    name: "Connext Vivendi",
    logo: "CV",
    category: "Software",
    mainCategory: "anbieter",
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
];
// Partner partners (Für Partner - e.g., hospitals, insurance companies)
const partnerPartners: CooperationPartner[] = [
  {
    id: "aok-bundesverband",
    name: "AOK Bundesverband",
    logo: "AO",
    category: "Krankenkasse",
    mainCategory: "partner",
    verified: true,
    description: "Die AOK ist mit über 27 Millionen Versicherten die größte Krankenversicherung Deutschlands. Durch unsere Partnerschaft profitieren Sie von vereinfachten Genehmigungsprozessen für Krankenfahrten.",
    benefits: [
      "Schnelle Genehmigung von Krankenfahrten",
      "Vereinfachte Abrechnungsprozesse",
      "Direkter Kontakt zu AOK-Sachbearbeitern",
      "Digitale Antragsstellung"
    ],
    discount: "Direkte Abrechnung ohne Vorleistung",
    contact: {
      email: "service@aok.de",
      phone: "+49 800 0265000",
      website: "www.aok.de",
      address: "Rosenthaler Str. 31, 10178 Berlin"
    },
    stats: [
      { label: "Versicherte", value: "27 Mio." },
      { label: "Geschäftsstellen", value: "1.200" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "barmer",
    name: "BARMER",
    logo: "BA",
    category: "Krankenkasse",
    mainCategory: "partner",
    verified: true,
    description: "Die BARMER gehört zu den größten gesetzlichen Krankenkassen in Deutschland. Unsere Kooperation ermöglicht reibungslose Krankenfahrt-Genehmigungen.",
    benefits: [
      "Express-Genehmigungsverfahren",
      "Online-Portal für Anträge",
      "Persönlicher Ansprechpartner",
      "Transparente Abrechnungsübersicht"
    ],
    discount: "Kostenlose Premium-Partnerschaft",
    contact: {
      email: "partner@barmer.de",
      phone: "+49 800 3331010",
      website: "www.barmer.de",
      address: "Lichtscheider Str. 89, 42285 Wuppertal"
    },
    stats: [
      { label: "Versicherte", value: "9 Mio." },
      { label: "Mitarbeiter", value: "15.000" },
      { label: "Partner seit", value: "2021" }
    ]
  },
  {
    id: "techniker-krankenkasse",
    name: "Techniker Krankenkasse",
    logo: "TK",
    category: "Krankenkasse",
    mainCategory: "partner",
    verified: true,
    description: "Die Techniker Krankenkasse ist bekannt für ihre digitalen Lösungen. Nutzen Sie unsere Integration für nahtlose digitale Prozesse.",
    benefits: [
      "Vollständig digitale Prozesse",
      "API-Integration verfügbar",
      "Echtzeit-Statusupdates",
      "Automatische Genehmigungen"
    ],
    discount: "Priorisierte Bearbeitung",
    contact: {
      email: "firmenservice@tk.de",
      phone: "+49 800 2858585",
      website: "www.tk.de",
      address: "Bramfelder Str. 140, 22305 Hamburg"
    },
    stats: [
      { label: "Versicherte", value: "11 Mio." },
      { label: "Digital-Index", value: "#1" },
      { label: "Partner seit", value: "2019" }
    ]
  },
  {
    id: "dkg",
    name: "Deutsche Krankenhausgesellschaft",
    logo: "DK",
    category: "Verband",
    mainCategory: "partner",
    verified: true,
    description: "Die DKG ist der Dachverband aller Krankenhausträger in Deutschland. Als Partner profitieren Sie von Branchenstandards und Netzwerken.",
    benefits: [
      "Zugang zu DKG-Mitgliedskrankenhäusern",
      "Branchenstandards & Best Practices",
      "Netzwerk-Events & Kongresse",
      "Fachpublikationen & Schulungen"
    ],
    discount: "Ermäßigte Kongressgebühren",
    contact: {
      email: "info@dkgev.de",
      phone: "+49 30 39801-0",
      website: "www.dkgev.de",
      address: "Wegelystraße 3, 10623 Berlin"
    },
    stats: [
      { label: "Mitglieder", value: "1.900" },
      { label: "Betten", value: "500.000" },
      { label: "Partner seit", value: "2020" }
    ]
  },
  {
    id: "bpa",
    name: "Bundesverband privater Anbieter",
    logo: "BP",
    category: "Verband",
    mainCategory: "partner",
    verified: false,
    description: "Der bpa vertritt die Interessen privater Anbieter sozialer Dienstleistungen. Nutzen Sie unser Netzwerk für Pflegeheim-Kooperationen.",
    benefits: [
      "Zugang zu 12.000+ Mitgliedseinrichtungen",
      "Branchenlobbying & Interessenvertretung",
      "Fortbildungsangebote",
      "Rechtliche Unterstützung"
    ],
    discount: "Sonderkonditionen für Mitglieder",
    contact: {
      email: "info@bpa.de",
      phone: "+49 30 30877880",
      website: "www.bpa.de",
      address: "Friedrichstraße 148, 10117 Berlin"
    },
    stats: [
      { label: "Mitglieder", value: "12.000" },
      { label: "Pflegeplätze", value: "400.000" },
      { label: "Partner seit", value: "2022" }
    ]
  },
  {
    id: "gematik",
    name: "gematik GmbH",
    logo: "GE",
    category: "Dienstleister",
    mainCategory: "partner",
    verified: true,
    description: "Die gematik verantwortet die Telematikinfrastruktur im Gesundheitswesen. Unsere Kooperation ermöglicht sichere digitale Prozesse.",
    benefits: [
      "Zugang zur Telematikinfrastruktur",
      "ePA-Integration",
      "E-Rezept-Kompatibilität",
      "Sichere Datenübertragung"
    ],
    discount: "Technische Unterstützung inklusive",
    contact: {
      email: "info@gematik.de",
      phone: "+49 30 40041-0",
      website: "www.gematik.de",
      address: "Friedrichstraße 136, 10117 Berlin"
    },
    stats: [
      { label: "Anbindungen", value: "200.000+" },
      { label: "Transaktionen/Tag", value: "1 Mio." },
      { label: "Partner seit", value: "2021" }
    ]
  },
  {
    id: "bmas",
    name: "Bundesministerium für Arbeit",
    logo: "BM",
    category: "Behörde",
    mainCategory: "partner",
    verified: true,
    description: "Das BMAS setzt Rahmenbedingungen für soziale Dienste. Durch unsere Zusammenarbeit sind wir stets über regulatorische Änderungen informiert.",
    benefits: [
      "Frühinformation über Gesetzesänderungen",
      "Teilnahme an Konsultationen",
      "Qualitätssiegel-Möglichkeit",
      "Förderprogramm-Zugang"
    ],
    discount: "Fördermittel-Beratung",
    contact: {
      email: "info@bmas.bund.de",
      phone: "+49 30 18527-0",
      website: "www.bmas.de",
      address: "Wilhelmstraße 49, 10117 Berlin"
    },
    stats: [
      { label: "Förderprogramme", value: "50+" },
      { label: "Budget", value: "€170 Mrd." },
      { label: "Partner seit", value: "2023" }
    ]
  },
];

// Combined partners list
const cooperationPartners: CooperationPartner[] = [...providerPartners, ...partnerPartners];

export default function CooperationPartner() {
  const { partnerId } = useParams<{ partnerId: string }>();
  const navigate = useNavigate();
  
  const currentPartner = cooperationPartners.find(p => p.id === partnerId);
  
  // Determine which main category based on current partner
  const [mainCategory, setMainCategory] = useState<MainCategory>(
    currentPartner?.mainCategory || "anbieter"
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("Alle");
  
  useEffect(() => {
    if (currentPartner) {
      setMainCategory(currentPartner.mainCategory);
      setSelectedSubCategory(currentPartner.category);
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

  // Get current icons and colors based on the current partner's main category
  const isProviderPartner = currentPartner.mainCategory === "anbieter";
  
  // Helper function to get icon
  const getCategoryIcon = (category: string) => {
    if (isProviderPartner) {
      return providerCategoryIcons[category as ProviderCategory];
    }
    return partnerCategoryIcons[category as PartnerCategory];
  };
  
  // Helper function to get color
  const getCategoryColor = (category: string) => {
    if (isProviderPartner) {
      return providerCategoryColors[category as ProviderCategory];
    }
    return partnerCategoryColors[category as PartnerCategory];
  };
  
  const categories = isProviderPartner 
    ? (["Alle", "Krankenhaus", "Reha", "Pflege", "Software"] as const)
    : (["Alle", "Krankenkasse", "Verband", "Dienstleister", "Behörde"] as const);
  
  // Get the partners for the current main category
  const mainCategoryPartners = mainCategory === "anbieter" ? providerPartners : partnerPartners;
  
  const CategoryIcon = getCategoryIcon(currentPartner.category);
  const categoryColor = getCategoryColor(currentPartner.category);
  
  const filteredPartners = selectedSubCategory === "Alle" 
    ? mainCategoryPartners 
    : mainCategoryPartners.filter(p => p.category === selectedSubCategory);

  const currentIndex = filteredPartners.findIndex(p => p.id === partnerId);
  const prevPartner = currentIndex > 0 ? filteredPartners[currentIndex - 1] : null;
  const nextPartner = currentIndex < filteredPartners.length - 1 ? filteredPartners[currentIndex + 1] : null;

  // Handle main category switch
  const handleMainCategorySwitch = (newMainCategory: MainCategory) => {
    setMainCategory(newMainCategory);
    setSelectedSubCategory("Alle");
    // Navigate to first partner in new category
    const firstPartner = newMainCategory === "anbieter" ? providerPartners[0] : partnerPartners[0];
    if (firstPartner) {
      navigate(`/kooperationspartner/${firstPartner.id}`);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to={mainCategory === "anbieter" ? "/fuer-anbieter" : "/fuer-partner"} className="hover:text-primary transition-colors">
              {mainCategory === "anbieter" ? "Für Anbieter" : "Für Partner"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-primary transition-colors">
              Kooperationsvorteile
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentPartner.name}</span>
          </nav>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Main Category Toggle */}
                <div className="bg-card border border-border/50 rounded-2xl p-4">
                  <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">Bereich</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleMainCategorySwitch("anbieter")}
                      className={`flex flex-col items-center gap-2 px-3 py-4 rounded-xl text-sm font-medium transition-all ${
                        mainCategory === "anbieter"
                          ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                      <span>Für Anbieter</span>
                    </button>
                    <button
                      onClick={() => handleMainCategorySwitch("partner")}
                      className={`flex flex-col items-center gap-2 px-3 py-4 rounded-xl text-sm font-medium transition-all ${
                        mainCategory === "partner"
                          ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                      <span>Für Partner</span>
                    </button>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="bg-card border border-border/50 rounded-2xl p-4">
                  <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">Kategorien</h3>
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const count = category === "Alle" 
                        ? mainCategoryPartners.length 
                        : mainCategoryPartners.filter(p => p.category === category).length;
                      const Icon = category === "Alle" ? Users : getCategoryIcon(category);
                      const isActive = selectedSubCategory === category;
                      
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedSubCategory(category)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            {Icon && <Icon className="w-4 h-4" />}
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
                      const Icon = getCategoryIcon(partner.category);
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
                              {Icon && <Icon className="w-3 h-3" />}
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
