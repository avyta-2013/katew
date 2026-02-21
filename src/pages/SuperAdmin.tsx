import { useState } from "react";
import {
  LayoutDashboard, Users, Building2, CalendarCheck, Star, FileText, Settings, LogOut,
  Search, Plus, TrendingUp, ArrowUpRight, Eye, Trash2, Edit3,
  Mail, Phone, MapPin, Calendar, EyeOff, ArrowLeft,
  Bold, Italic, Underline, Link as LinkIcon, List, ListOrdered, Type, Menu, X,
  MoreVertical, Smartphone, Globe, Hash
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import logoTransparent from "@/assets/katew-logo-transparent.png";

type Section = "uebersicht" | "kunden" | "unternehmen" | "buchungen" | "bewertungen" | "blog" | "einstellungen" | "kunde-detail" | "unternehmen-detail";

const navItems: { key: Section; label: string; icon: React.ElementType }[] = [
  { key: "uebersicht", label: "Übersicht", icon: LayoutDashboard },
  { key: "kunden", label: "Kunden", icon: Users },
  { key: "unternehmen", label: "Unternehmen", icon: Building2 },
  { key: "buchungen", label: "Buchungen", icon: CalendarCheck },
  { key: "bewertungen", label: "Bewertungen", icon: Star },
  { key: "blog", label: "Blog", icon: FileText },
  { key: "einstellungen", label: "Einstellungen", icon: Settings },
];

// Extended mock data
const mockKunden = [
  { id: 1, vorname: "Tharindu", nachname: "Chanaka", name: "Tharindu Chanaka", registrierung: "17 Feb 2026", stadt: "Fulda", geburtsdatum: "26.02.1993", telefon: "1742059280", plz: "36037", status: "Active", geschlecht: "männlich", strasse: "Hinterburg 5", email: "chanu@barock-academy.de" },
  { id: 2, vorname: "Max", nachname: "Mustermann", name: "Max Mustermann", registrierung: "13 Jan 2026", stadt: "Fulda", geburtsdatum: "16.02.2000", telefon: "1742059280", plz: "36037", status: "Active", geschlecht: "männlich", strasse: "Musterstr. 12", email: "max@muster.de" },
  { id: 3, vorname: "Karin", nachname: "Reinert", name: "Karin Reinert", registrierung: "20 Oct 2025", stadt: "Frankfurt", geburtsdatum: "11.12.1967", telefon: "699133190", plz: "65936", status: "Active", geschlecht: "weiblich", strasse: "Mainzer Str. 8", email: "karin.reinert@web.de" },
  { id: 4, vorname: "Mirko", nachname: "Hoerning", name: "Mirko Hoerning", registrierung: "03 Oct 2025", stadt: "Marburg", geburtsdatum: "03.03.1951", telefon: "1706331225", plz: "35037", status: "Active", geschlecht: "männlich", strasse: "Bahnhofstr. 3", email: "mirko.h@gmx.de" },
  { id: 5, vorname: "Dino", nachname: "Lalic", name: "Dino Lalic", registrierung: "01 Sep 2025", stadt: "Frankfurt", geburtsdatum: "29.06.1992", telefon: "6915391405", plz: "60311", status: "Active", geschlecht: "männlich", strasse: "Allerheiligentor 2", email: "dino@katew.de" },
];

const mockUnternehmen = [
  { id: 1, name: "Main RT Krankentransport", registrierung: "14 Jan 2026", stadt: "Eschborn", telefax: "–", telefon: "1778389366", plz: "65760", status: "Active", vorname: "Bülent", nachname: "Topcu", strasse: "Kölner Str. 1", email: "info@mainrt-fahrdienst.de", mobil: "1778389366", amtsgericht: "–", hubspotId: "–", avgRating: 0, standorte: 4 },
  { id: 2, name: "Taxiunternehmen Florian Schaupp e.K.", registrierung: "17 Dec 2025", stadt: "Pfungstadt", telefax: "61578018013", telefon: "61578018282", plz: "64319", status: "Active", vorname: "Florian", nachname: "Schaupp", strasse: "Hauptstr. 22", email: "info@taxi-schaupp.de", mobil: "61578018282", amtsgericht: "Darmstadt", hubspotId: "–", avgRating: 4.2, standorte: 2 },
  { id: 3, name: "Chanu Kranktransportz", registrierung: "15 Dec 2025", stadt: "Fulda", telefax: "–", telefon: "66123456", plz: "36037", status: "Active", vorname: "Chanu", nachname: "De Silva", strasse: "Hinterburg 5", email: "chanu@transport.de", mobil: "66123456", amtsgericht: "Fulda", hubspotId: "–", avgRating: 5, standorte: 1 },
  { id: 4, name: "Taxi Stern", registrierung: "12 Dec 2025", stadt: "Neu-Anspach", telefax: "–", telefon: "49608194660", plz: "61267", status: "Active", vorname: "Hans", nachname: "Stern", strasse: "Bahnhofstr. 10", email: "info@taxi-stern.de", mobil: "49608194660", amtsgericht: "Bad Homburg", hubspotId: "–", avgRating: 3.8, standorte: 3 },
];

const mockBuchungen = [
  { id: "19727886", datum: "20.02.2026 um 17:03", kunde: "Chanu De Silva", unternehmen: "Chanaka@Technohive.Tech", betrag: "0 €", status: "Offen" },
  { id: "67960934", datum: "20.02.2026 um 16:00", kunde: "Chanu De Silva", unternehmen: "Chanaka@Technohive.Tech", betrag: "0 €", status: "Offen" },
  { id: "47060294", datum: "17.02.2026 um 15:30", kunde: "Chanu De Silva", unternehmen: "Chanaka@Technohive.Tech", betrag: "0 €", status: "Bestätigt" },
  { id: "18459128", datum: "17.02.2026 um 15:30", kunde: "Chanu De Silva", unternehmen: "Fulda Navigator360sl", betrag: "0 €", status: "Offen" },
  { id: "66627039", datum: "13.02.2026 um 14:51", kunde: "Chanu De Silva", unternehmen: "Chanaka@Technohive.Tech", betrag: "0 €", status: "Bestätigt" },
  { id: "03734986", datum: "21.01.2026 um 09:45", kunde: "Dino Lalic", unternehmen: "CKM-Krankenfahrdienst", betrag: "0 €", status: "Storniert" },
];

const mockBewertungen = [
  { id: 1, name: "Chanu", datum: "14.02.2026, 13:50", buchungsId: "66627039", rating: 5, text: "Nice work. love it." },
  { id: 2, name: "Chanu", datum: "13.02.2026, 19:45", buchungsId: "70775942", rating: 3, text: "test" },
  { id: 3, name: "Chanu", datum: "18.11.2025, 15:37", buchungsId: "58500582", rating: 5, text: "good work" },
  { id: 4, name: "Dino", datum: "18.11.2025, 09:28", buchungsId: "80688636", rating: 5, text: "Toller Service, sehr zufrieden!" },
];

// Detail info row component
const InfoField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
    <p className="text-base font-semibold text-foreground">{value}</p>
  </div>
);

// Contact item component
const ContactItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-center gap-4 py-3">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
      <Icon className="w-4.5 h-4.5 text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  </div>
);

const SuperAdmin = () => {
  const [activeSection, setActiveSection] = useState<Section>("uebersicht");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [buchungFilter, setBuchungFilter] = useState("Offen");
  const [selectedKundeId, setSelectedKundeId] = useState<number | null>(null);
  const [selectedUnternehmenId, setSelectedUnternehmenId] = useState<number | null>(null);

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <Card className="relative w-full max-w-md border-0 shadow-2xl bg-card/80 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <CardContent className="relative p-8 space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <img src={logoTransparent} alt="katew" className="w-6 h-6 brightness-0 invert" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-['Outfit']">katew</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Hallo, Master Admin</h2>
              <p className="text-sm text-muted-foreground mt-1">Melden Sie sich an, um auf das Super Admin Panel zuzugreifen.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-Mail</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@katew.de" className="h-12 rounded-xl border-border/50 bg-muted/30 focus:bg-background transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Passwort</label>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••••" className="h-12 rounded-xl border-border/50 bg-muted/30 focus:bg-background transition-colors pr-12" />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button className="text-sm text-primary hover:underline">Passwort vergessen</button>
            </div>
            <Button onClick={() => setIsLoggedIn(true)} className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300">
              Anmelden
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={cn("w-4 h-4", i < rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30")} />
    ));
  };

  const filteredBuchungen = mockBuchungen.filter(b => {
    if (buchungFilter !== "Alle" && b.status !== buchungFilter) return false;
    if (searchQuery && !b.id.includes(searchQuery) && !b.kunde.toLowerCase().includes(searchQuery.toLowerCase()) && !b.unternehmen.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const selectedKunde = selectedKundeId ? mockKunden.find(k => k.id === selectedKundeId) : null;
  const selectedUnternehmen = selectedUnternehmenId ? mockUnternehmen.find(u => u.id === selectedUnternehmenId) : null;

  const sidebarKey = (s: Section): Section => {
    if (s === "kunde-detail") return "kunden";
    if (s === "unternehmen-detail") return "unternehmen";
    return s;
  };

  const renderContent = () => {
    switch (activeSection) {
      // ====== KUNDE DETAIL ======
      case "kunde-detail":
        if (!selectedKunde) return null;
        return (
          <div className="space-y-8 animate-fade-in">
            <button
              onClick={() => setActiveSection("kunden")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Kundenliste
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Profile Card */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary/10 to-secondary/10" />
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl shadow-primary/25">
                      <span className="text-2xl font-bold text-primary-foreground">{selectedKunde.vorname[0]}{selectedKunde.nachname[0]}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/50">
                      <MoreVertical className="w-5 h-5 text-muted-foreground" />
                    </Button>
                  </div>

                  <h2 className="text-xl font-bold text-foreground">{selectedKunde.name}</h2>
                  <Badge className="mt-2 bg-secondary/10 text-secondary border-secondary/30 font-medium">{selectedKunde.status}</Badge>

                  <Separator className="my-6 bg-border/30" />

                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Kontaktdaten</h3>
                  <div className="space-y-1">
                    <ContactItem icon={Phone} label="Telefon" value={selectedKunde.telefon} />
                    <ContactItem icon={Mail} label="Email" value={selectedKunde.email} />
                  </div>
                </CardContent>
              </Card>

              {/* Right: Profile Data */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden lg:col-span-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Profil</h2>
                  <Separator className="mb-8 bg-border/30" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    <InfoField label="Vorname" value={selectedKunde.vorname} />
                    <InfoField label="Nachname" value={selectedKunde.nachname} />
                    <InfoField label="Geschlecht" value={selectedKunde.geschlecht} />
                    <InfoField label="Geburtsdatum" value={selectedKunde.geburtsdatum} />
                    <InfoField label="Straße" value={selectedKunde.strasse} />
                    <InfoField label="Stadt" value={selectedKunde.stadt} />
                    <InfoField label="Postleitzahl" value={selectedKunde.plz} />
                    <InfoField label="Registrierung" value={selectedKunde.registrierung} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      // ====== UNTERNEHMEN DETAIL ======
      case "unternehmen-detail":
        if (!selectedUnternehmen) return null;
        return (
          <div className="space-y-8 animate-fade-in">
            <button
              onClick={() => setActiveSection("unternehmen")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Unternehmensliste
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Company Card */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary/10 to-secondary/10" />
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-xl shadow-secondary/25">
                      <Building2 className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/50">
                      <MoreVertical className="w-5 h-5 text-muted-foreground" />
                    </Button>
                  </div>

                  <h2 className="text-xl font-bold text-foreground">{selectedUnternehmen.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-0.5">{renderStars(Math.round(selectedUnternehmen.avgRating))}</div>
                    <span className="text-sm text-muted-foreground">Ø {selectedUnternehmen.avgRating}</span>
                  </div>

                  <Separator className="my-6 bg-border/30" />

                  <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Kontaktdaten</h3>
                  <div className="space-y-1">
                    <ContactItem icon={Phone} label="Telefon" value={selectedUnternehmen.telefon} />
                    <ContactItem icon={Smartphone} label="Mobil" value={selectedUnternehmen.mobil} />
                    <ContactItem icon={Mail} label="Email" value={selectedUnternehmen.email} />
                    <ContactItem icon={Phone} label="Telefax" value={selectedUnternehmen.telefax} />
                  </div>
                </CardContent>
              </Card>

              {/* Right: Stammdaten */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden lg:col-span-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Stammdaten</h2>
                  <Separator className="mb-8 bg-border/30" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    <InfoField label="Unternehmensname" value={selectedUnternehmen.name} />
                    <InfoField label="Vorname" value={selectedUnternehmen.vorname} />
                    <InfoField label="Nachname" value={selectedUnternehmen.nachname} />
                    <InfoField label="Straße" value={selectedUnternehmen.strasse} />
                    <InfoField label="Stadt" value={selectedUnternehmen.stadt} />
                    <InfoField label="Amtsgericht" value={selectedUnternehmen.amtsgericht} />
                    <InfoField label="HubSpot Company ID" value={selectedUnternehmen.hubspotId} />
                    <InfoField label="Postleitzahl" value={selectedUnternehmen.plz} />
                  </div>

                  {/* Standorte verwalten */}
                  <Separator className="my-8 bg-border/30" />
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-xl font-bold text-foreground">Standorte verwalten</h3>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-xl border-secondary text-secondary hover:bg-secondary/10">
                        HubSpot Import
                      </Button>
                      <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25">
                        <Plus className="w-4 h-4 mr-2" /> Neuer Standort
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6 text-center py-8">
                    <p className="text-muted-foreground">{selectedUnternehmen.standorte} Standorte gefunden</p>
                    <Button variant="outline" className="mt-3 rounded-xl">Alle Standorte anzeigen</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "uebersicht":
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Übersicht</h1>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "Buchungen", value: "77", icon: CalendarCheck, trend: "+12%", color: "primary" as const },
                { label: "Unternehmen", value: "34", icon: Building2, trend: "+5%", color: "secondary" as const },
                { label: "Kunden", value: "8", icon: Users, trend: "+3%", color: "primary" as const },
                { label: "Bewertungen", value: "9", icon: Star, trend: "+2%", color: "secondary" as const },
              ].map((kpi) => (
                <Card key={kpi.label} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer hover:-translate-y-0.5">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-[0.06] group-hover:opacity-[0.1] transition-opacity",
                    kpi.color === "primary" ? "from-primary to-primary/50" : "from-secondary to-secondary/50"
                  )} />
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg",
                        kpi.color === "primary" ? "bg-gradient-to-br from-primary to-primary/80 shadow-primary/25" : "bg-gradient-to-br from-secondary to-secondary/80 shadow-secondary/25"
                      )}>
                        <kpi.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {kpi.trend}
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-foreground">{kpi.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{kpi.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Neue Unternehmen */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Neue Unternehmen</h2>
                <Button variant="outline" size="sm" className="rounded-xl" onClick={() => setActiveSection("unternehmen")}>
                  Alle <ArrowUpRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockUnternehmen.slice(0, 4).map((u) => (
                  <Card key={u.id} className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-0.5" onClick={() => { setSelectedUnternehmenId(u.id); setActiveSection("unternehmen-detail"); }}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{u.name}</h3>
                          <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            {u.stadt}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Registriert: {u.registrierung}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10" onClick={(e) => { e.stopPropagation(); setSelectedUnternehmenId(u.id); setActiveSection("unternehmen-detail"); }}>
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-foreground">Neue Buchungen</h2>
                    <Button variant="outline" size="sm" className="rounded-xl" onClick={() => setActiveSection("buchungen")}>Alle</Button>
                  </div>
                  <div className="space-y-3">
                    {mockBuchungen.slice(0, 3).map((b) => (
                      <div key={b.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div>
                          <p className="font-semibold text-sm text-foreground">Buchungs-ID: {b.id}</p>
                          <p className="text-xs text-muted-foreground">Kunde: {b.kunde}</p>
                          <p className="text-xs text-muted-foreground">{b.datum}</p>
                        </div>
                        <Badge variant="outline" className={cn(
                          "text-xs",
                          b.status === "Offen" && "bg-amber-500/10 text-amber-600 border-amber-500/30",
                          b.status === "Bestätigt" && "bg-secondary/10 text-secondary border-secondary/30",
                          b.status === "Storniert" && "bg-destructive/10 text-destructive border-destructive/30",
                        )}>{b.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-foreground">Neue Kunden</h2>
                    <Button variant="outline" size="sm" className="rounded-xl" onClick={() => setActiveSection("kunden")}>Alle</Button>
                  </div>
                  <div className="space-y-3">
                    {mockKunden.slice(0, 3).map((k) => (
                      <div key={k.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => { setSelectedKundeId(k.id); setActiveSection("kunde-detail"); }}>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{k.name}</p>
                          <p className="text-xs text-muted-foreground">{k.registrierung}</p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-xl text-xs h-8">öffnen</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "kunden":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Kunden</h1>
              <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25">
                <Plus className="w-4 h-4 mr-2" /> Kunden
              </Button>
            </div>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Suchen" className="pl-10 rounded-xl border-border/50 bg-muted/30" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <Card className="border-border/50 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      {["Name", "Registrierung", "Stadt", "Geburtsdatum", "Telefon", "PLZ", "Status", "Optionen"].map(h => (
                        <th key={h} className="text-left p-4 text-sm font-bold text-foreground">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockKunden.filter(k => !searchQuery || k.name.toLowerCase().includes(searchQuery.toLowerCase())).map((k) => (
                      <tr key={k.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer" onClick={() => { setSelectedKundeId(k.id); setActiveSection("kunde-detail"); }}>
                        <td className="p-4 text-sm font-medium text-foreground">{k.name}</td>
                        <td className="p-4 text-sm text-muted-foreground">{k.registrierung}</td>
                        <td className="p-4 text-sm text-muted-foreground">{k.stadt}</td>
                        <td className="p-4 text-sm text-muted-foreground">{k.geburtsdatum}</td>
                        <td className="p-4 text-sm text-muted-foreground">{k.telefon}</td>
                        <td className="p-4 text-sm text-muted-foreground">{k.plz}</td>
                        <td className="p-4"><Badge className="bg-secondary/10 text-secondary border-secondary/30 font-medium">{k.status}</Badge></td>
                        <td className="p-4">
                          <Button variant="outline" size="sm" className="rounded-xl text-xs h-8 font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30" onClick={(e) => { e.stopPropagation(); setSelectedKundeId(k.id); setActiveSection("kunde-detail"); }}>öffnen</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case "unternehmen":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Unternehmen</h1>
              <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25">
                <Plus className="w-4 h-4 mr-2" /> Unternehmen
              </Button>
            </div>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Suchen" className="pl-10 rounded-xl border-border/50 bg-muted/30" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <Card className="border-border/50 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      {["Name", "Registrierung", "Stadt", "Telefax", "Telefon", "PLZ", "Status", "Optionen"].map(h => (
                        <th key={h} className="text-left p-4 text-sm font-bold text-foreground">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockUnternehmen.filter(u => !searchQuery || u.name.toLowerCase().includes(searchQuery.toLowerCase())).map((u) => (
                      <tr key={u.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer" onClick={() => { setSelectedUnternehmenId(u.id); setActiveSection("unternehmen-detail"); }}>
                        <td className="p-4 text-sm font-medium text-foreground">{u.name}</td>
                        <td className="p-4 text-sm text-muted-foreground">{u.registrierung}</td>
                        <td className="p-4 text-sm text-muted-foreground">{u.stadt}</td>
                        <td className="p-4 text-sm text-muted-foreground">{u.telefax}</td>
                        <td className="p-4 text-sm text-muted-foreground">{u.telefon}</td>
                        <td className="p-4 text-sm text-muted-foreground">{u.plz}</td>
                        <td className="p-4"><Badge className="bg-secondary/10 text-secondary border-secondary/30 font-medium">{u.status}</Badge></td>
                        <td className="p-4">
                          <Button variant="outline" size="sm" className="rounded-xl text-xs h-8 font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30" onClick={(e) => { e.stopPropagation(); setSelectedUnternehmenId(u.id); setActiveSection("unternehmen-detail"); }}>öffnen</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case "buchungen":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Buchungen</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-2">
                {["Offen", "Bestätigt", "Storniert", "Alle"].map(f => (
                  <Button key={f} variant={buchungFilter === f ? "default" : "outline"} size="sm"
                    className={cn("rounded-xl", buchungFilter === f && "bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25")}
                    onClick={() => setBuchungFilter(f)}>
                    {f}
                  </Button>
                ))}
              </div>
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Suchen nach Buchungs-ID, Kunde, Unternehmen" className="pl-10 rounded-xl border-border/50 bg-muted/30 text-sm" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredBuchungen.map((b) => (
                <Card key={b.id} className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden hover:-translate-y-0.5">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground">Buchungs-ID {b.id}</h3>
                      <Badge variant="outline" className={cn(
                        "text-[10px]",
                        b.status === "Offen" && "bg-amber-500/10 text-amber-600 border-amber-500/30",
                        b.status === "Bestätigt" && "bg-secondary/10 text-secondary border-secondary/30",
                        b.status === "Storniert" && "bg-destructive/10 text-destructive border-destructive/30",
                      )}>{b.status}</Badge>
                    </div>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {b.datum}</div>
                      <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> {b.kunde}</div>
                      <div className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5" /> {b.unternehmen}</div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground">Transportschein</span>
                      <span className="font-bold text-foreground">{b.betrag}</span>
                    </div>
                    <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-md shadow-primary/20 hover:shadow-lg transition-all">
                      öffnen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "bewertungen":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Bewertungen</h1>
            <div className="space-y-4">
              {mockBewertungen.map((b) => (
                <Card key={b.id} className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{b.name[0]}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-bold text-foreground">{b.name}</h3>
                          <div className="flex items-center gap-0.5">{renderStars(b.rating)}</div>
                          <span className="text-sm text-muted-foreground">{b.rating}/5</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{b.datum} • Bewertung für: <span className="font-semibold text-foreground">Buchungs-ID #{b.buchungsId}</span></p>
                        <p className="text-sm text-foreground/80 mt-2">{b.text}</p>
                        <button className="flex items-center gap-2 text-sm text-destructive hover:text-destructive/80 transition-colors mt-3">
                          <Trash2 className="w-3.5 h-3.5" /> Löschen
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "blog":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Blog-Beitrag erstellen</h1>
              <Button variant="outline" className="rounded-xl">Blog-Liste</Button>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Blogtitel</label>
                <Input placeholder="Geben Sie Ihren Blogtitel ein..." className="rounded-xl border-border/50 bg-muted/30 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Blog-Beschreibung</label>
                <Textarea placeholder="Geben Sie eine kurze Beschreibung für Ihren Blog ein..." className="rounded-xl border-border/50 bg-muted/30 min-h-[120px]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Schlüsselwörter (durch Komma getrennt)</label>
                <Input placeholder="Geben Sie Schlüsselwörter ein..." className="rounded-xl border-border/50 bg-muted/30 h-12" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Autor</label>
                  <Input placeholder="Autor eingeben" className="rounded-xl border-border/50 bg-muted/30 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Veröffentlichungsdatum</label>
                  <Input type="date" defaultValue="2026-02-21" className="rounded-xl border-border/50 bg-muted/30 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Kategorie</label>
                  <Input placeholder="Kategorie eingeben" className="rounded-xl border-border/50 bg-muted/30 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Blog-Inhalt</label>
                <Card className="border-border/50 overflow-hidden">
                  <div className="flex items-center gap-1 p-3 border-b border-border/50 bg-muted/20">
                    <Select defaultValue="normal">
                      <SelectTrigger className="w-28 h-8 rounded-lg text-xs border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="h1">Heading 1</SelectItem>
                        <SelectItem value="h2">Heading 2</SelectItem>
                      </SelectContent>
                    </Select>
                    {[Bold, Italic, Underline, LinkIcon, List, ListOrdered, Type].map((Icon, i) => (
                      <button key={i} className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                  <Textarea placeholder="Schreiben Sie hier Ihren Blog-Inhalt..." className="border-0 rounded-none min-h-[200px] focus-visible:ring-0 bg-transparent" />
                </Card>
              </div>
              <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25 h-12 px-8">
                Beitrag veröffentlichen
              </Button>
            </div>
          </div>
        );

      case "einstellungen":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Einstellungen</h1>
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-bold text-foreground">Profil</h2>
                <Separator className="bg-border/30" />
                <div className="space-y-4 max-w-lg">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input defaultValue="Admin" className="rounded-xl border-border/50 bg-muted/30 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input defaultValue="admin@katew.de" className="rounded-xl border-border/50 bg-muted/30 h-12" />
                  </div>
                  <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25 h-11 px-6">
                    Speichern
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-secondary/3 rounded-full blur-[120px]" />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-lg flex items-center justify-center"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 h-screen w-72 bg-card/80 backdrop-blur-xl border-r border-border/30 flex flex-col z-40 transition-transform duration-300",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
              <img src={logoTransparent} alt="katew" className="w-6 h-6 brightness-0 invert" />
            </div>
            <span className="text-xl font-bold tracking-tight font-['Outfit']">katew</span>
          </div>
        </div>

        <Separator className="bg-border/30 mx-4" />

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActiveSection(item.key); setSidebarOpen(false); setSearchQuery(""); }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                sidebarKey(activeSection) === item.key
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <Separator className="bg-border/30 mx-4" />

        <div className="p-4">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            Ausloggen
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="flex-1 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto p-6 lg:p-10 pt-16 lg:pt-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default SuperAdmin;
