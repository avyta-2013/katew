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
  Armchair,
  Crown
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
    isPremium: true,
  },
  {
    id: 2,
    name: "Viamed Go",
    rating: 4,
    reviews: 189,
    responseTime: "< 10 Min.",
    verified: true,
    isPremium: true,
  },
  {
    id: 3,
    name: "Fahrdienst Rumpf",
    rating: 5,
    reviews: 156,
    responseTime: "< 15 Min.",
    verified: true,
    isPremium: false,
  },
  {
    id: 4,
    name: "Iqbal-Patiententransport",
    rating: 5,
    reviews: 98,
    responseTime: "< 10 Min.",
    verified: true,
    isPremium: true,
  },
  {
    id: 5,
    name: "MedTrans Frankfurt",
    rating: 4,
    reviews: 312,
    responseTime: "< 5 Min.",
    verified: true,
    isPremium: false,
  },
  {
    id: 6,
    name: "Ambulanz Care GmbH",
    rating: 5,
    reviews: 267,
    responseTime: "< 10 Min.",
    verified: true,
    isPremium: true,
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

  // Legal checkboxes
  const [legalAccepted, setLegalAccepted] = useState({
    datenschutz: false,
    agb: false,
    befoerderungsvertrag: false,
  });

  const allLegalAccepted = legalAccepted.datenschutz && legalAccepted.agb && legalAccepted.befoerderungsvertrag;

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
    if (currentStep < 4) {
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

  // Step 1: Filter Selection with Date/Time - Compact version
  const renderFilterStep = () => (
    <div className="space-y-5">
      {/* Date & Time Section */}
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-4 border border-border/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Calendar className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-bold">Wann soll die Fahrt stattfinden?</h3>
            <p className="text-xs text-muted-foreground">Wählen Sie Datum und Uhrzeit</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Datum</Label>
            <Input
              type="date"
              value={formData.datum}
              onChange={(e) => setFormData(prev => ({ ...prev, datum: e.target.value }))}
              className="h-11 bg-background border-2 border-border/50 rounded-xl text-sm font-medium focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-medium">Abholuhrzeit</Label>
              <button
                onClick={() => setFormData(prev => ({ ...prev, schnellstmoeglich: !prev.schnellstmoeglich }))}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  formData.schnellstmoeglich
                    ? "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-md"
                    : "bg-muted hover:bg-secondary/20 text-muted-foreground"
                }`}
              >
                ⚡ Schnellstmöglich
              </button>
            </div>
            <Input
              type="time"
              value={formData.uhrzeit}
              onChange={(e) => setFormData(prev => ({ ...prev, uhrzeit: e.target.value }))}
              disabled={formData.schnellstmoeglich}
              className="h-11 bg-background border-2 border-border/50 rounded-xl text-sm font-medium focus:border-primary transition-colors disabled:opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Anbieter */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
            <Users className="w-4 h-4 text-primary-foreground" />
          </div>
          <Label className="font-bold">Anbieter</Label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.anbieter.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, anbieter: option }))}
              className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm ${
                selectedFilters.anbieter === option
                  ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border-2 border-border/50 hover:border-primary/30 hover:shadow-md text-foreground"
              }`}
            >
              {selectedFilters.anbieter === option && (
                <CheckCircle className="absolute top-2 right-2 w-4 h-4" />
              )}
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Transportart */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-md">
            <Truck className="w-4 h-4 text-secondary-foreground" />
          </div>
          <Label className="font-bold">Transportart</Label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.transportart.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, transportart: option }))}
              className={`relative px-3 py-3 rounded-xl font-medium transition-all duration-300 text-sm ${
                selectedFilters.transportart === option
                  ? "bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/30"
                  : "bg-card border-2 border-border/50 hover:border-secondary/30 hover:shadow-md text-foreground"
              }`}
            >
              {selectedFilters.transportart === option && (
                <CheckCircle className="absolute top-2 right-2 w-4 h-4" />
              )}
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Transportmittel */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
            <Armchair className="w-4 h-4 text-white" />
          </div>
          <Label className="font-bold">Transportmittel</Label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filterOptions.transportmittel.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilters(prev => ({ ...prev, transportmittel: option }))}
              className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm ${
                selectedFilters.transportmittel === option
                  ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-card border-2 border-border/50 hover:border-amber-500/30 hover:shadow-md text-foreground"
              }`}
            >
              {selectedFilters.transportmittel === option && (
                <CheckCircle className="absolute top-2 right-2 w-4 h-4" />
              )}
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Step 2: Personal Data (without date/time - moved to step 1)
  const renderPersonalDataStep = () => (
    <div className="space-y-6">
      {/* Header with Profile Button */}
      <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-2xl p-4 border border-primary/20 shadow-lg shadow-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-lg">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Persönliche Daten</h3>
            <p className="text-sm text-muted-foreground">Angaben zum Fahrgast</p>
          </div>
        </div>
        <Button variant="outline" className="rounded-2xl h-12 px-5 font-semibold border-2 hover:bg-primary/5 hover:border-primary/30">
          <User className="w-4 h-4 mr-2" />
          Profildaten übernehmen
        </Button>
      </div>

      {/* Grund - Big Select Card */}
      <div className="bg-card rounded-2xl border-2 border-primary/10 p-5 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-md">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <Label className="text-base font-bold">Grund der Fahrt</Label>
        </div>
        <Select
          value={formData.grund}
          onValueChange={(value) => setFormData(prev => ({ ...prev, grund: value }))}
        >
          <SelectTrigger className="h-14 bg-muted/30 border-2 border-primary/20 rounded-2xl text-base font-medium focus:border-primary">
            <SelectValue placeholder="Option auswählen" />
          </SelectTrigger>
          <SelectContent className="bg-card border-2 rounded-xl">
            {grundOptions.map((option) => (
              <SelectItem key={option} value={option} className="py-3 text-base">{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Personal Info Grid */}
      <div className="bg-card rounded-2xl border-2 border-primary/10 p-5 space-y-5 shadow-md">
        {/* Anrede, Vorname, Nachname */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Anrede</Label>
            <div className="flex bg-muted/30 rounded-2xl p-1.5 border-2 border-primary/20">
              <button
                onClick={() => setFormData(prev => ({ ...prev, anrede: "Herr" }))}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                  formData.anrede === "Herr"
                    ? "bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Herr
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, anrede: "Frau" }))}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                  formData.anrede === "Frau"
                    ? "bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Frau
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Vorname *</Label>
            <Input
              value={formData.vorname}
              onChange={(e) => setFormData(prev => ({ ...prev, vorname: e.target.value }))}
              className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
              placeholder="Max"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Nachname *</Label>
            <Input
              value={formData.nachname}
              onChange={(e) => setFormData(prev => ({ ...prev, nachname: e.target.value }))}
              className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
              placeholder="Mustermann"
            />
          </div>
        </div>

        {/* Geburtsdatum, Pflegegrad, Krankenkasse */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Geburtsdatum *</Label>
            <Input
              type="date"
              value={formData.geburtsdatum}
              onChange={(e) => setFormData(prev => ({ ...prev, geburtsdatum: e.target.value }))}
              className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Pflegegrad *</Label>
            <Select
              value={formData.pflegegrad}
              onValueChange={(value) => setFormData(prev => ({ ...prev, pflegegrad: value }))}
            >
              <SelectTrigger className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent className="bg-card border-2 rounded-xl">
                {pflegegradOptions.map((option) => (
                  <SelectItem key={option} value={option} className="py-3 text-base">{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Krankenkasse *</Label>
            <Input
              value={formData.krankenkasse}
              onChange={(e) => setFormData(prev => ({ ...prev, krankenkasse: e.target.value }))}
              className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
              placeholder="AOK, TK, etc."
            />
          </div>
        </div>
      </div>

      {/* Contact & Notes */}
      <div className="bg-card rounded-2xl border-2 border-primary/10 p-5 space-y-4 shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-md">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <Label className="text-base font-bold">Kontakt & Hinweise</Label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Telefonnummer *</Label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={formData.telefon}
                onChange={(e) => setFormData(prev => ({ ...prev, telefon: e.target.value }))}
                placeholder="+49 123 456789"
                className="h-14 pl-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-muted-foreground">Besondere Hinweise</Label>
            <Input
              value={formData.notiz}
              onChange={(e) => setFormData(prev => ({ ...prev, notiz: e.target.value }))}
              placeholder="z.B. Rollstuhlgerecht, Sauerstoff benötigt..."
              className="h-14 bg-muted/30 border-2 border-border/50 rounded-2xl text-base font-medium focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Step 3: Summary with legal checkboxes
  const renderSummaryStep = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold">Buchungsübersicht</h3>
        <p className="text-sm text-muted-foreground">Bitte überprüfen Sie Ihre Angaben</p>
      </div>

      {/* Journey Summary */}
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-5 border border-border/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Navigation className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-bold">Fahrtdetails</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border/50">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Start</p>
              <p className="font-medium truncate">{startAddress}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border/50">
            <Navigation className="w-5 h-5 text-secondary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Ziel</p>
              <p className="font-medium truncate">{endAddress}</p>
            </div>
          </div>
        </div>
        {(formData.datum || formData.schnellstmoeglich) && (
          <div className="mt-3 flex items-center gap-3 p-3 bg-background rounded-xl border border-border/50">
            <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Termin</p>
              <p className="font-medium">
                {formData.schnellstmoeglich ? "Schnellstmöglich" : `${formData.datum}${formData.uhrzeit ? ` um ${formData.uhrzeit}` : ""}`}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Personal Data Summary */}
      <div className="bg-card rounded-2xl p-5 border-2 border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
            <User className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-bold">Persönliche Daten</h4>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-muted/30 rounded-xl">
            <p className="text-xs text-muted-foreground">Name</p>
            <p className="font-medium">{formData.anrede} {formData.vorname} {formData.nachname}</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-xl">
            <p className="text-xs text-muted-foreground">Geburtsdatum</p>
            <p className="font-medium">{formData.geburtsdatum || "-"}</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-xl">
            <p className="text-xs text-muted-foreground">Pflegegrad</p>
            <p className="font-medium">{formData.pflegegrad || "-"}</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-xl">
            <p className="text-xs text-muted-foreground">Krankenkasse</p>
            <p className="font-medium">{formData.krankenkasse || "-"}</p>
          </div>
          {formData.telefon && (
            <div className="p-3 bg-muted/30 rounded-xl col-span-2">
              <p className="text-xs text-muted-foreground">Telefon</p>
              <p className="font-medium">{formData.telefon}</p>
            </div>
          )}
        </div>
      </div>

      {/* Filter Summary */}
      <div className="bg-card rounded-2xl p-5 border-2 border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-md">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-bold">Transportdetails</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {selectedFilters.anbieter}
          </span>
          <span className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
            {selectedFilters.transportart}
          </span>
          <span className="px-3 py-1.5 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium">
            {selectedFilters.transportmittel}
          </span>
          {formData.grund && (
            <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm font-medium">
              {formData.grund}
            </span>
          )}
        </div>
        <div className="mt-3 text-sm text-muted-foreground">
          Anfrage an <span className="font-bold text-foreground">{selectedProviders.length} Anbieter</span>
        </div>
      </div>

      {/* Legal Checkboxes */}
      <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl p-5 border border-amber-500/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold">Rechtliche Hinweise</h4>
            <p className="text-xs text-muted-foreground">Bitte bestätigen Sie die folgenden Punkte</p>
          </div>
        </div>
        <div className="space-y-3">
          <label className="flex items-start gap-3 p-3 bg-background rounded-xl border border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
            <Checkbox
              checked={legalAccepted.datenschutz}
              onCheckedChange={(checked) => setLegalAccepted(prev => ({ ...prev, datenschutz: checked === true }))}
              className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm">
              Ich habe die{" "}
              <Link to="/datenschutz" target="_blank" className="text-primary font-medium hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              gelesen und akzeptiere diese.
            </span>
          </label>
          <label className="flex items-start gap-3 p-3 bg-background rounded-xl border border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
            <Checkbox
              checked={legalAccepted.agb}
              onCheckedChange={(checked) => setLegalAccepted(prev => ({ ...prev, agb: checked === true }))}
              className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm">
              Ich akzeptiere die{" "}
              <Link to="/agb" target="_blank" className="text-primary font-medium hover:underline">
                Allgemeinen Geschäftsbedingungen (AGB)
              </Link>.
            </span>
          </label>
          <label className="flex items-start gap-3 p-3 bg-background rounded-xl border border-border/50 cursor-pointer hover:border-primary/30 transition-colors">
            <Checkbox
              checked={legalAccepted.befoerderungsvertrag}
              onCheckedChange={(checked) => setLegalAccepted(prev => ({ ...prev, befoerderungsvertrag: checked === true }))}
              className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm">
              Ich akzeptiere die Bedingungen des{" "}
              <Link to="/personenbefoerderungsvertrag" target="_blank" className="text-primary font-medium hover:underline">
                Personenbeförderungsvertrags
              </Link>.
            </span>
          </label>
        </div>
      </div>

      {/* Book Button */}
      <div className="pt-2">
        <Button
          onClick={handleNextStep}
          disabled={!allLegalAccepted}
          className={`w-full h-14 rounded-2xl text-base font-bold shadow-xl transition-all ${
            allLegalAccepted
              ? "bg-gradient-to-r from-primary via-primary/90 to-secondary hover:opacity-90 shadow-primary/25 hover:shadow-2xl hover:-translate-y-0.5"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Jetzt verbindlich buchen
        </Button>
        {!allLegalAccepted && (
          <p className="text-xs text-center text-muted-foreground mt-2">
            Bitte akzeptieren Sie alle rechtlichen Hinweise, um fortzufahren.
          </p>
        )}
      </div>
    </div>
  );

  // Step 4: Confirmation - Enhanced visual design
  const renderConfirmationStep = () => (
    <div className="relative py-6 space-y-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-secondary/15 to-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-20 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
      
      {/* Success Animation Container */}
      <div className="text-center space-y-6">
        {/* Animated Success Icon */}
        <div className="relative inline-flex">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl opacity-60 animate-pulse" />
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl" />
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-2xl shadow-primary/40">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-white/20">
                <CheckCircle className="w-14 h-14 text-white drop-shadow-lg" />
              </div>
            </div>
            {/* Sparkle decorations */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-3 h-3 text-secondary-foreground" />
            </div>
            <div className="absolute -bottom-1 -left-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce delay-100">
              <Star className="w-2.5 h-2.5 text-primary-foreground fill-primary-foreground" />
            </div>
          </div>
        </div>
        
        {/* Title with gradient */}
        <div className="space-y-2">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Anfrage erfolgreich gesendet!
          </h3>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Ihre Buchungsanfrage wurde an{" "}
            <span className="font-bold text-foreground bg-gradient-to-r from-primary/10 to-secondary/10 px-2 py-0.5 rounded-lg">
              {selectedProviders.length} Anbieter
            </span>{" "}
            übermittelt.
          </p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
        {/* Next Steps Card */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-5 border border-primary/20 shadow-lg shadow-primary/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base">Nächste Schritte</p>
              <p className="text-sm text-muted-foreground mt-1">
                Anbieter prüfen Ihre Anfrage und melden sich innerhalb von 48h.
              </p>
            </div>
          </div>
        </div>

        {/* Email Notification Card */}
        <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-2xl p-5 border border-secondary/20 shadow-lg shadow-secondary/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/30 flex-shrink-0">
              <Zap className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base">Benachrichtigung</p>
              <p className="text-sm text-muted-foreground mt-1">
                Sie erhalten eine E-Mail sobald ein Angebot vorliegt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Summary Card */}
      <div className="bg-gradient-to-r from-card via-card to-card/80 rounded-2xl p-6 border-2 border-border/50 shadow-xl max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Navigation className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-bold text-lg">Ihre Fahrtdetails</h4>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Start</p>
                <p className="font-medium truncate">{startAddress}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <ArrowLeftRight className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-xl border border-secondary/10">
              <Navigation className="w-5 h-5 text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Ziel</p>
                <p className="font-medium truncate">{endAddress}</p>
              </div>
            </div>
          </div>
        </div>
        {formData.datum && (
          <div className="mt-4 flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Termin</p>
              <p className="font-medium">
                {formData.datum}{formData.uhrzeit && ` um ${formData.uhrzeit}`}
                {formData.schnellstmoeglich && " (Schnellstmöglich)"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
        <Button
          variant="outline"
          onClick={handleCloseDialog}
          className="h-14 px-8 rounded-2xl text-base font-semibold border-2 hover:bg-muted/50 transition-all"
        >
          Weitere Buchung
        </Button>
        <Button
          onClick={() => navigate("/")}
          className="h-14 px-8 bg-gradient-to-r from-primary via-primary/90 to-secondary hover:opacity-90 rounded-2xl text-base font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:-translate-y-0.5"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
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
                      
                      <div className={`relative bg-card rounded-2xl border-2 p-5 md:p-6 transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? "border-primary/50 shadow-xl shadow-primary/10"
                          : "border-border/50 hover:border-border hover:shadow-lg"
                      }`}>
                        
                        {/* Premium Badge - Corner tag */}
                        {provider.isPremium && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl shadow-md flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            PREMIUM
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
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                                {provider.name}
                              </h4>
                            </div>
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
                {currentStep === 3 && "Buchungsübersicht"}
                {currentStep === 4 && "Buchungsbestätigung"}
              </DialogTitle>
              {currentStep < 4 && (
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
            {currentStep === 3 && renderSummaryStep()}
            {currentStep === 4 && renderConfirmationStep()}
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
          {currentStep === 3 && (
            <div className="flex justify-start pt-4 border-t">
              <Button variant="outline" onClick={handlePreviousStep} className="rounded-xl">
                Zurück
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
