import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  ArrowLeftRight,
  Star,
  CheckCircle2,
  Sparkles,
  Clock,
  Shield,
  Zap,
  LogIn,
  User,
  Phone,
  Calendar,
  FileText,
  ChevronRight,
  CheckCircle,
  Truck,
  Users,
  Armchair
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

const filterOptions = {
  anbieter: ["Alle", "Taxi", "Mietwagen"],
  transportart: ["Transportschein", "Selbstzahler", "Ausschreibung"],
  transportmittel: ["Sitzend", "Rollstuhl", "Tragestuhl", "Liegend"],
};

const grundOptions = [
  "Arztbesuch",
  "Krankenhaus",
  "Dialyse",
  "Rehabilitation",
  "Therapie",
  "Sonstiges",
];

const pflegegradOptions = ["Keiner", "1", "2", "3", "4", "5"];

export default function BookingResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Mock: User is logged in
  const isLoggedIn = true;
  
  const [startAddress, setStartAddress] = useState(searchParams.get("start") || "Frankfurt am Main");
  const [endAddress, setEndAddress] = useState(searchParams.get("end") || "Darmstadt");
  
  const [selectedProviders, setSelectedProviders] = useState<number[]>(transportProviders.map(p => p.id));
  
  // Dialog states
  const [currentStep, setCurrentStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Filter selections
  const [selectedFilters, setSelectedFilters] = useState({
    anbieter: "Alle",
    transportart: "Transportschein",
    transportmittel: "Sitzend",
  });
  
  // Personal data form
  const [formData, setFormData] = useState({
    datum: "",
    uhrzeit: "",
    schnellstmoeglich: false,
    grund: "",
    anrede: "Herr",
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    pflegegrad: "",
    krankenkasse: "",
    telefon: "",
    notiz: "",
  });

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

  const handleConfirm = () => {
    if (!isLoggedIn) return;
    setCurrentStep(1);
    setDialogOpen(true);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentStep(0);
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

  // Step 1: Filter Selection
  const renderFilterStep = () => (
    <div className="space-y-6">
      {/* Anbieter */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary-foreground" />
          </div>
          <Label className="text-base font-semibold">Anbieter</Label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.anbieter.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, anbieter: option }))}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedFilters.anbieter === option
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Transportart */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
            <Truck className="w-4 h-4 text-secondary-foreground" />
          </div>
          <Label className="text-base font-semibold">Transportart</Label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.transportart.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, transportart: option }))}
              className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedFilters.transportart === option
                  ? "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Transportmittel */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-500/80 flex items-center justify-center">
            <Armchair className="w-4 h-4 text-white" />
          </div>
          <Label className="text-base font-semibold">Transportmittel</Label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filterOptions.transportmittel.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, transportmittel: option }))}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedFilters.transportmittel === option
                  ? "bg-gradient-to-r from-amber-500 to-amber-500/90 text-white shadow-lg shadow-amber-500/25"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Step 2: Personal Data
  const renderPersonalDataStep = () => (
    <div className="space-y-5">
      {/* Header with Profile Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Persönliche Daten</h3>
        <Button variant="outline" size="sm" className="rounded-full">
          <User className="w-4 h-4 mr-2" />
          Profildaten übernehmen
        </Button>
      </div>

      {/* Date and Time Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Datum*</Label>
          <div className="relative">
            <Input
              type="date"
              value={formData.datum}
              onChange={(e) => setFormData(prev => ({ ...prev, datum: e.target.value }))}
              className="h-12 bg-muted/50 border-0 rounded-xl"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">Uhrzeit (Abholung)*</Label>
            <button
              onClick={() => setFormData(prev => ({ ...prev, schnellstmoeglich: !prev.schnellstmoeglich }))}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                formData.schnellstmoeglich
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary/20"
              }`}
            >
              Schnellstmöglich
            </button>
          </div>
          <Input
            type="time"
            value={formData.uhrzeit}
            onChange={(e) => setFormData(prev => ({ ...prev, uhrzeit: e.target.value }))}
            disabled={formData.schnellstmoeglich}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Grund */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Grund*</Label>
        <Select
          value={formData.grund}
          onValueChange={(value) => setFormData(prev => ({ ...prev, grund: value }))}
        >
          <SelectTrigger className="h-12 bg-muted/50 border-0 rounded-xl">
            <SelectValue placeholder="Option auswählen" />
          </SelectTrigger>
          <SelectContent>
            {grundOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Anrede, Vorname, Nachname */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Anrede</Label>
          <div className="flex bg-muted/50 rounded-xl p-1">
            <button
              onClick={() => setFormData(prev => ({ ...prev, anrede: "Herr" }))}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                formData.anrede === "Herr"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Herr
            </button>
            <button
              onClick={() => setFormData(prev => ({ ...prev, anrede: "Frau" }))}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                formData.anrede === "Frau"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Frau
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Vorname*</Label>
          <Input
            value={formData.vorname}
            onChange={(e) => setFormData(prev => ({ ...prev, vorname: e.target.value }))}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Nachname*</Label>
          <Input
            value={formData.nachname}
            onChange={(e) => setFormData(prev => ({ ...prev, nachname: e.target.value }))}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Geburtsdatum, Pflegegrad, Krankenkasse */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Geburtsdatum*</Label>
          <Input
            type="date"
            value={formData.geburtsdatum}
            onChange={(e) => setFormData(prev => ({ ...prev, geburtsdatum: e.target.value }))}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Pflegegrad*</Label>
          <Select
            value={formData.pflegegrad}
            onValueChange={(value) => setFormData(prev => ({ ...prev, pflegegrad: value }))}
          >
            <SelectTrigger className="h-12 bg-muted/50 border-0 rounded-xl">
              <SelectValue placeholder="Option auswählen" />
            </SelectTrigger>
            <SelectContent>
              {pflegegradOptions.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Krankenkasse*</Label>
          <Input
            value={formData.krankenkasse}
            onChange={(e) => setFormData(prev => ({ ...prev, krankenkasse: e.target.value }))}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Kontakt and Notiz */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Kontakt*</Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={formData.telefon}
              onChange={(e) => setFormData(prev => ({ ...prev, telefon: e.target.value }))}
              placeholder="Telefonnummer"
              className="h-12 pl-12 bg-muted/50 border-0 rounded-xl"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Notiz (Wichtige Informationen)*</Label>
          <Input
            value={formData.notiz}
            onChange={(e) => setFormData(prev => ({ ...prev, notiz: e.target.value }))}
            className="h-12 bg-muted/50 border-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );

  // Step 3: Confirmation
  const renderConfirmationStep = () => (
    <div className="text-center py-8 space-y-6">
      <div className="relative inline-flex">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-2xl shadow-secondary/25">
          <CheckCircle className="w-12 h-12 text-secondary-foreground" />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">Anfrage gesendet!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Ihre Buchungsanfrage wurde erfolgreich an <span className="font-semibold text-foreground">{selectedProviders.length} Anbieter</span> gesendet.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border/50 max-w-md mx-auto">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-semibold">Was passiert als Nächstes?</p>
            <p className="text-sm text-muted-foreground mt-1">
              Sobald ein Anbieter Ihre Anfrage angenommen hat, erhalten Sie eine Bestätigung per E-Mail und in Ihrem Dashboard.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <Button
          variant="outline"
          onClick={handleCloseDialog}
          className="rounded-xl"
        >
          Weitere Buchung
        </Button>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl"
        >
          Zum Dashboard
        </Button>
      </div>
    </div>
  );

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

                    {/* Confirm Button or Login Button */}
                    {isLoggedIn ? (
                      <Button 
                        onClick={handleConfirm}
                        disabled={selectedProviders.length === 0}
                        className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl text-base font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                      >
                        Bestätigen
                      </Button>
                    ) : (
                      <Link to="/anmelden">
                        <Button 
                          className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl text-base font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                          <LogIn className="w-5 h-5 mr-2" />
                          Zur Anmeldung
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Providers Only (No Sidebar) */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Info Cards Row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex-1 min-w-[200px] bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Sichere Buchung</p>
                      <p className="text-xs text-muted-foreground">Alle Daten verschlüsselt</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px] bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-sm">Schnelle Antwort</p>
                      <p className="text-xs text-muted-foreground">Innerhalb 48 Stunden</p>
                    </div>
                  </div>
                </div>
              </div>

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
                        {isLoggedIn ? (
                          <Button 
                            onClick={handleConfirm}
                            size="lg"
                            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                          >
                            Weiter zur Buchung
                          </Button>
                        ) : (
                          <Link to="/anmelden">
                            <Button 
                              size="lg"
                              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                            >
                              <LogIn className="w-5 h-5 mr-2" />
                              Zur Anmeldung
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Multi-Step Booking Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">
                {currentStep === 1 && "Filter auswählen"}
                {currentStep === 2 && "Persönliche Daten"}
                {currentStep === 3 && "Buchungsbestätigung"}
              </DialogTitle>
              {currentStep < 3 && (
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        step === currentStep
                          ? "bg-primary w-6"
                          : step < currentStep
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </DialogHeader>

          <div className="py-4">
            {currentStep === 1 && renderFilterStep()}
            {currentStep === 2 && renderPersonalDataStep()}
            {currentStep === 3 && renderConfirmationStep()}
          </div>

          {currentStep < 3 && (
            <div className="flex justify-between pt-4 border-t">
              {currentStep > 1 ? (
                <Button variant="outline" onClick={handlePreviousStep} className="rounded-xl">
                  Zurück
                </Button>
              ) : (
                <div />
              )}
              <Button
                onClick={handleNextStep}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8"
              >
                Weiter
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
