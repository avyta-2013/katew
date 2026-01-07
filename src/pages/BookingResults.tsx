import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Armchair,
  Accessibility,
  Bed,
  Users,
  Shield,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useSearchParams } from "react-router-dom";

// Mock transport providers
const transportProviders = [
  {
    id: 1,
    name: "MedTrans Frankfurt",
    rating: 4.9,
    reviews: 234,
    distance: "2.3 km",
    price: "Ab 45€",
    estimatedTime: "15-20 Min.",
    types: ["Sitzend", "Rollstuhl", "Liegend"],
    verified: true,
    available: true,
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=120&h=120&fit=crop",
  },
  {
    id: 2,
    name: "Ambulanz Care GmbH",
    rating: 4.8,
    reviews: 189,
    distance: "3.1 km",
    price: "Ab 52€",
    estimatedTime: "20-25 Min.",
    types: ["Sitzend", "Rollstuhl", "Liegend", "Tragestuhl"],
    verified: true,
    available: true,
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=120&h=120&fit=crop",
  },
  {
    id: 3,
    name: "Krankentransport Hessen",
    rating: 4.7,
    reviews: 156,
    distance: "4.5 km",
    price: "Ab 48€",
    estimatedTime: "25-30 Min.",
    types: ["Sitzend", "Rollstuhl"],
    verified: true,
    available: true,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=120&h=120&fit=crop",
  },
  {
    id: 4,
    name: "Rettung & Transport Plus",
    rating: 4.6,
    reviews: 98,
    distance: "5.2 km",
    price: "Ab 55€",
    estimatedTime: "30-35 Min.",
    types: ["Sitzend", "Rollstuhl", "Liegend", "Tragestuhl"],
    verified: false,
    available: true,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=120&h=120&fit=crop",
  },
];

const transportTypes = [
  { id: "sitting", label: "Sitzend", icon: Armchair },
  { id: "wheelchair", label: "Rollstuhl", icon: Accessibility },
  { id: "stretcher", label: "Liegend", icon: Bed },
  { id: "stairchair", label: "Tragestuhl", icon: Users },
];

export default function BookingResults() {
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const startAddress = searchParams.get("start") || "Frankfurt Hauptbahnhof";
  const endAddress = searchParams.get("end") || "Universitätsklinikum Frankfurt";

  const filteredProviders = selectedType
    ? transportProviders.filter(p => 
        p.types.some(t => t.toLowerCase().includes(selectedType.toLowerCase()))
      )
    : transportProviders;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Search Header */}
        <section className="relative pt-28 pb-8 md:pt-32 md:pb-10 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Verfügbare Anbieter
              </h1>
              
              {/* Search Form */}
              <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input
                      defaultValue={startAddress}
                      placeholder="Startadresse"
                      className="h-12 pl-10 bg-muted/50 border-0 rounded-xl"
                    />
                  </div>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                    <Input
                      defaultValue={endAddress}
                      placeholder="Zieladresse"
                      className="h-12 pl-10 bg-muted/50 border-0 rounded-xl"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="date"
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="h-12 pl-10 bg-muted/50 border-0 rounded-xl"
                    />
                  </div>
                  <Button className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl">
                    Suche aktualisieren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {filteredProviders.length} Anbieter gefunden
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="rounded-full"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Transport Type Filter */}
              {showFilters && (
                <div className="bg-card rounded-xl border border-border/50 p-4 mb-6">
                  <p className="text-sm font-medium mb-3">Transportart</p>
                  <div className="flex flex-wrap gap-2">
                    {transportTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(isSelected ? null : type.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/50 text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Provider Cards */}
              <div className="space-y-4">
                {filteredProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="group bg-card rounded-2xl border border-border/50 p-5 md:p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-5">
                      {/* Provider Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                        <img 
                          src={provider.image} 
                          alt={provider.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Provider Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{provider.name}</h3>
                            {provider.verified && (
                              <Badge className="bg-primary/10 text-primary border-0 text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verifiziert
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">{provider.price}</p>
                            <p className="text-xs text-muted-foreground">geschätzt</p>
                          </div>
                        </div>

                        {/* Rating & Stats */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium text-foreground">{provider.rating}</span>
                            <span>({provider.reviews} Bewertungen)</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {provider.distance} entfernt
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {provider.estimatedTime}
                          </span>
                        </div>

                        {/* Transport Types */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {provider.types.map((type) => (
                            <Badge 
                              key={type} 
                              variant="outline" 
                              className="text-xs border-border/50"
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl">
                            Jetzt buchen
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                          <Button variant="outline" className="rounded-xl">
                            <Phone className="w-4 h-4 mr-2" />
                            Anrufen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProviders.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Keine Anbieter gefunden</h3>
                  <p className="text-muted-foreground mb-4">
                    Versuchen Sie, die Filter anzupassen
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedType(null)}
                  >
                    Filter zurücksetzen
                  </Button>
                </div>
              )}

              {/* Info Section */}
              <div className="mt-12 grid md:grid-cols-3 gap-4">
                <div className="bg-card rounded-xl border border-border/50 p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">Sichere Buchung</h4>
                  <p className="text-sm text-muted-foreground">
                    Ihre Daten sind verschlüsselt und geschützt
                  </p>
                </div>
                <div className="bg-card rounded-xl border border-border/50 p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-bold mb-1">Geprüfte Anbieter</h4>
                  <p className="text-sm text-muted-foreground">
                    Alle Partner sind zertifiziert
                  </p>
                </div>
                <div className="bg-card rounded-xl border border-border/50 p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Mo-Fr 8-12 Uhr erreichbar
                  </p>
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