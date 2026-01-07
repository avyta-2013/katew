import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  ArrowLeftRight,
  Star,
  CheckCircle2
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
    price: "0 €",
  },
  {
    id: 2,
    name: "Viamed Go",
    rating: 4,
    price: "0 €",
  },
  {
    id: 3,
    name: "Fahrdienst Rumpf",
    rating: 5,
    price: "0 €",
  },
  {
    id: 4,
    name: "Iqbal-Patiententransport",
    rating: 5,
    price: "0 €",
  },
  {
    id: 5,
    name: "MedTrans Frankfurt",
    rating: 4,
    price: "0 €",
  },
  {
    id: 6,
    name: "Ambulanz Care GmbH",
    rating: 5,
    price: "0 €",
  },
];

const anbieterOptions = ["Alle", "Taxi", "Mietwagen"];
const transportartOptions = ["Transportschein", "Selbstzahler", "Ausschreibung"];
const transportmittelOptions = ["Sitzend", "Rollstuhl", "Tragestuhl", "Liege"];

export default function BookingResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [startAddress, setStartAddress] = useState(searchParams.get("start") || "Frankfurt am Main, Deutschland");
  const [endAddress, setEndAddress] = useState(searchParams.get("end") || "64 Darmstadt, Deutschland");
  
  const [selectedProviders, setSelectedProviders] = useState<number[]>(transportProviders.map(p => p.id));
  const [anbieter, setAnbieter] = useState<string[]>(["Alle"]);
  const [transportart, setTransportart] = useState<string[]>(["Transportschein"]);
  const [transportmittel, setTransportmittel] = useState<string[]>(["Sitzend"]);

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

  const toggleFilter = (
    value: string, 
    current: string[], 
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleConfirm = () => {
    // Navigate to booking confirmation with selected providers
    navigate(`/buchen/bestaetigen?providers=${selectedProviders.join(",")}&start=${encodeURIComponent(startAddress)}&end=${encodeURIComponent(endAddress)}`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Search Header */}
        <section className="pt-24 pb-6 md:pt-28 md:pb-8 bg-muted/30 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl border border-border/50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  {/* Start Address */}
                  <div className="flex-1 w-full">
                    <label className="text-xs text-muted-foreground mb-1 block">Start</label>
                    <div className="relative">
                      <Input
                        value={startAddress}
                        onChange={(e) => setStartAddress(e.target.value)}
                        placeholder="Startadresse"
                        className="h-12 bg-background border border-border rounded-lg text-base"
                      />
                    </div>
                  </div>

                  {/* Distance Indicator */}
                  <div className="flex flex-col items-center px-4">
                    <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                      <ArrowLeftRight className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium mt-1">33.3 KM</span>
                  </div>

                  {/* End Address */}
                  <div className="flex-1 w-full">
                    <label className="text-xs text-muted-foreground mb-1 block">Ziel</label>
                    <div className="relative">
                      <Input
                        value={endAddress}
                        onChange={(e) => setEndAddress(e.target.value)}
                        placeholder="Zieladresse"
                        className="h-12 bg-background border border-border rounded-lg text-base"
                      />
                    </div>
                  </div>

                  {/* Confirm Button */}
                  <Button 
                    onClick={handleConfirm}
                    className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-medium"
                  >
                    bestätigen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                  <div className="space-y-8">
                    {/* Anbieter Filter */}
                    <div>
                      <h3 className="font-bold text-base mb-4">Anbieter*</h3>
                      <div className="space-y-3">
                        {anbieterOptions.map((option) => (
                          <label 
                            key={option} 
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <Checkbox
                              checked={anbieter.includes(option)}
                              onCheckedChange={() => toggleFilter(option, anbieter, setAnbieter)}
                              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50" />

                    {/* Transportart Filter */}
                    <div>
                      <h3 className="font-bold text-base mb-4">Transportart*</h3>
                      <div className="space-y-3">
                        {transportartOptions.map((option) => (
                          <label 
                            key={option} 
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <Checkbox
                              checked={transportart.includes(option)}
                              onCheckedChange={() => toggleFilter(option, transportart, setTransportart)}
                              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50" />

                    {/* Transportmittel Filter */}
                    <div>
                      <h3 className="font-bold text-base mb-4">Transportmittel*</h3>
                      <div className="space-y-3">
                        {transportmittelOptions.map((option) => (
                          <label 
                            key={option} 
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <Checkbox
                              checked={transportmittel.includes(option)}
                              onCheckedChange={() => toggleFilter(option, transportmittel, setTransportmittel)}
                              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/50" />

                    {/* Kostenspanne */}
                    <div>
                      <h3 className="font-bold text-base mb-4">Kostenspanne</h3>
                      <p className="text-sm text-muted-foreground">
                        Preise werden nach Anfrage angezeigt
                      </p>
                    </div>
                  </div>
                </aside>

                {/* Provider List */}
                <div className="flex-1">
                  {/* Select All */}
                  <label className="flex items-center gap-3 cursor-pointer mb-6">
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={toggleAll}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <span className="font-bold text-lg">Alle Auswählen</span>
                  </label>

                  {/* Provider Cards */}
                  <div className="space-y-4">
                    {transportProviders.map((provider) => (
                      <label
                        key={provider.id}
                        className={`flex items-center gap-4 p-4 md:p-5 rounded-xl border cursor-pointer transition-all ${
                          selectedProviders.includes(provider.id)
                            ? "bg-card border-primary/30 shadow-sm"
                            : "bg-card border-border/50 hover:border-border"
                        }`}
                      >
                        <Checkbox
                          checked={selectedProviders.includes(provider.id)}
                          onCheckedChange={() => toggleProvider(provider.id)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        
                        {/* Provider Icon */}
                        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-b from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full opacity-60 blur-[1px]" />
                          </div>
                        </div>

                        {/* Provider Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base md:text-lg truncate">
                            {provider.name}
                          </h4>
                          {renderStars(provider.rating)}
                        </div>

                        {/* Price */}
                        <div className="text-right flex-shrink-0">
                          <span className="text-xl font-bold">{provider.price}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Selected Count */}
                  {selectedProviders.length > 0 && (
                    <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="font-medium">
                            {selectedProviders.length} Anbieter ausgewählt
                          </span>
                        </div>
                        <Button 
                          onClick={handleConfirm}
                          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          Weiter zur Buchung
                        </Button>
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