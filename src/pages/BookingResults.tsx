import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  ArrowLeftRight,
  Star,
  CheckCircle2,
  Sparkles,
  Filter,
  ChevronDown,
  Shield,
  Clock,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSearchParams, useNavigate } from "react-router-dom";

// Mock transport providers
const transportProviders = [
  {
    id: 1,
    name: "Krankentransport Am Main GmbH",
    rating: 5,
    reviews: 234,
    responseTime: "< 5 Min.",
    verified: true,
    premium: true,
  },
  {
    id: 2,
    name: "Viamed Go",
    rating: 4,
    reviews: 189,
    responseTime: "< 10 Min.",
    verified: true,
    premium: false,
  },
  {
    id: 3,
    name: "Fahrdienst Rumpf",
    rating: 5,
    reviews: 156,
    responseTime: "< 15 Min.",
    verified: true,
    premium: true,
  },
  {
    id: 4,
    name: "Iqbal-Patiententransport",
    rating: 5,
    reviews: 98,
    responseTime: "< 10 Min.",
    verified: true,
    premium: false,
  },
  {
    id: 5,
    name: "MedTrans Frankfurt",
    rating: 4,
    reviews: 312,
    responseTime: "< 5 Min.",
    verified: true,
    premium: true,
  },
  {
    id: 6,
    name: "Ambulanz Care GmbH",
    rating: 5,
    reviews: 267,
    responseTime: "< 10 Min.",
    verified: true,
    premium: false,
  },
];

const filterSections = [
  {
    title: "Anbieter",
    options: ["Alle", "Taxi", "Mietwagen"],
  },
  {
    title: "Transportart",
    options: ["Transportschein", "Selbstzahler", "Ausschreibung"],
  },
  {
    title: "Transportmittel",
    options: ["Sitzend", "Rollstuhl", "Tragestuhl", "Liege"],
  },
];

export default function BookingResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [startAddress, setStartAddress] = useState(searchParams.get("start") || "Frankfurt am Main");
  const [endAddress, setEndAddress] = useState(searchParams.get("end") || "Darmstadt");
  
  const [selectedProviders, setSelectedProviders] = useState<number[]>(transportProviders.map(p => p.id));
  const [filters, setFilters] = useState<Record<string, string[]>>({
    "Anbieter": ["Alle"],
    "Transportart": ["Transportschein"],
    "Transportmittel": ["Sitzend"],
  });
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["Anbieter", "Transportart", "Transportmittel"]);

  const allSelected = selectedProviders.length === transportProviders.length;
  
  const toggleProvider = (id: number) => {
    setSelectedProviders(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedProviders([]);
    } else {
      setSelectedProviders(transportProviders.map(p => p.id));
    }
  };

  const toggleFilter = (section: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [section]: prev[section]?.includes(value)
        ? prev[section].filter(v => v !== value)
        : [...(prev[section] || []), value]
    }));
  };

  const toggleFilterSection = (section: string) => {
    setExpandedFilters(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleConfirm = () => {
    navigate(`/buchen/bestaetigen?providers=${selectedProviders.join(",")}&start=${encodeURIComponent(startAddress)}&end=${encodeURIComponent(endAddress)}`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/20'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-background">
        {/* Hero Search Section */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  {transportProviders.length} Anbieter verfügbar
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Passende Anbieter
                  </span>
                  {" "}finden
                </h1>
                <p className="text-muted-foreground">
                  Wählen Sie aus unseren zertifizierten Transportpartnern
                </p>
              </div>

              {/* Search Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* Start */}
                    <div className="flex-1 w-full">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Startpunkt
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-focus-within:scale-110 transition-transform">
                          <MapPin className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <Input
                          value={startAddress}
                          onChange={(e) => setStartAddress(e.target.value)}
                          placeholder="Startadresse eingeben"
                          className="h-14 pl-16 bg-muted/50 border-0 rounded-xl text-base focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Distance Indicator */}
                    <div className="flex flex-col items-center lg:px-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground to-foreground/80 text-background flex items-center justify-center shadow-xl">
                        <ArrowLeftRight className="w-6 h-6" />
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full bg-muted text-xs font-bold">
                        33.3 KM
                      </div>
                    </div>

                    {/* End */}
                    <div className="flex-1 w-full">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Zielort
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/25 group-focus-within:scale-110 transition-transform">
                          <Navigation className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <Input
                          value={endAddress}
                          onChange={(e) => setEndAddress(e.target.value)}
                          placeholder="Zieladresse eingeben"
                          className="h-14 pl-16 bg-muted/50 border-0 rounded-xl text-base focus:ring-2 focus:ring-secondary/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Confirm Button */}
                    <Button 
                      onClick={handleConfirm}
                      disabled={selectedProviders.length === 0}
                      className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl text-base font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                      Bestätigen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-72 flex-shrink-0">
                  <div className="lg:sticky lg:top-24">
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Filter className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Filter</h3>
                      </div>

                      <div className="space-y-1">
                        {filterSections.map((section, index) => (
                          <div key={section.title}>
                            <button
                              onClick={() => toggleFilterSection(section.title)}
                              className="w-full flex items-center justify-between py-3 text-left font-semibold hover:text-primary transition-colors"
                            >
                              <span>{section.title}</span>
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform ${
                                  expandedFilters.includes(section.title) ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            
                            {expandedFilters.includes(section.title) && (
                              <div className="pb-4 space-y-2 animate-fade-in">
                                {section.options.map((option) => (
                                  <label 
                                    key={option} 
                                    className="flex items-center gap-3 cursor-pointer group py-1.5 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                                  >
                                    <Checkbox
                                      checked={filters[section.title]?.includes(option)}
                                      onCheckedChange={() => toggleFilter(section.title, option)}
                                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                    />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                      {option}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            )}
                            
                            {index < filterSections.length - 1 && (
                              <div className="border-t border-border/50" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="mt-4 space-y-3">
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-sm">Sichere Buchung</p>
                            <p className="text-xs text-muted-foreground">Alle Daten verschlüsselt</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/20">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-secondary" />
                          <div>
                            <p className="font-medium text-sm">Schnelle Antwort</p>
                            <p className="text-xs text-muted-foreground">Innerhalb 48 Stunden</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Provider List */}
                <div className="flex-1">
                  {/* Select All Header */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <Checkbox
                        checked={allSelected}
                        onCheckedChange={toggleAll}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary w-5 h-5"
                      />
                      <span className="font-bold">Alle auswählen</span>
                    </label>
                    <span className="text-sm text-muted-foreground">
                      {selectedProviders.length} von {transportProviders.length} ausgewählt
                    </span>
                  </div>

                  {/* Provider Cards */}
                  <div className="space-y-4">
                    {transportProviders.map((provider, index) => {
                      const isSelected = selectedProviders.includes(provider.id);
                      return (
                        <div
                          key={provider.id}
                          onClick={() => toggleProvider(provider.id)}
                          className={`group relative cursor-pointer transition-all duration-300 animate-fade-in`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {/* Glow Effect */}
                          {isSelected && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50" />
                          )}
                          
                          <div className={`relative bg-card rounded-2xl border-2 p-5 md:p-6 transition-all duration-300 ${
                            isSelected
                              ? "border-primary/50 shadow-xl shadow-primary/10"
                              : "border-border/50 hover:border-border hover:shadow-lg"
                          }`}>
                            {/* Premium Badge */}
                            {provider.premium && (
                              <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                Premium
                              </div>
                            )}

                            <div className="flex items-center gap-4 md:gap-6">
                              {/* Checkbox */}
                              <div onClick={(e) => e.stopPropagation()}>
                                <Checkbox
                                  checked={isSelected}
                                  onCheckedChange={() => toggleProvider(provider.id)}
                                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary w-5 h-5"
                                />
                              </div>

                              {/* Provider Icon */}
                              <div className="relative flex-shrink-0">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${
                                  isSelected 
                                    ? 'bg-gradient-to-br from-primary to-secondary shadow-primary/25' 
                                    : 'bg-gradient-to-br from-muted to-muted/80'
                                }`}>
                                  <MapPin className={`w-7 h-7 ${isSelected ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                {provider.verified && (
                                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>

                              {/* Provider Info */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg mb-1 truncate group-hover:text-primary transition-colors">
                                  {provider.name}
                                </h4>
                                <div className="flex flex-wrap items-center gap-3">
                                  <div className="flex items-center gap-1.5">
                                    {renderStars(provider.rating)}
                                    <span className="text-sm text-muted-foreground">
                                      ({provider.reviews})
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{provider.responseTime}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Price Indicator */}
                              <div className="text-right flex-shrink-0">
                                <div className="text-xs text-muted-foreground mb-1">Preis</div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                  0 €
                                </div>
                                <div className="text-xs text-muted-foreground">auf Anfrage</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom CTA */}
                  {selectedProviders.length > 0 && (
                    <div className="mt-8 animate-fade-in">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl" />
                        <div className="relative bg-card rounded-2xl border border-primary/30 p-6 shadow-xl">
                          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                                <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <div>
                                <p className="font-bold text-lg">
                                  {selectedProviders.length} Anbieter ausgewählt
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Bereit für Ihre Anfrage
                                </p>
                              </div>
                            </div>
                            <Button 
                              onClick={handleConfirm}
                              size="lg"
                              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                            >
                              Weiter zur Buchung
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}