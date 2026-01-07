import { useState, useRef } from "react";
import { 
  User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, 
  CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Camera, Upload, 
  ArrowUpRight, Truck, Route, Timer, Star, FileText, MoreHorizontal, Trophy, MessageSquare,
  MapPinned, Bookmark, BarChart3, PieChart, Euro, ClipboardList
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

type NavItem = "uebersicht" | "profil" | "buchungen" | "aktivitaeten" | "bewertungen" | "einstellungen";

const ProviderDashboard = () => {
  const [activeNav, setActiveNav] = useState<NavItem>("uebersicht");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [whatsappNotifications, setWhatsappNotifications] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { id: "uebersicht" as NavItem, label: "Übersicht", icon: LayoutDashboard },
    { id: "profil" as NavItem, label: "Profil", icon: User },
    { id: "buchungen" as NavItem, label: "Buchungen", icon: Bookmark },
    { id: "aktivitaeten" as NavItem, label: "Aktivitäten", icon: Bell },
    { id: "bewertungen" as NavItem, label: "Bewertungen", icon: Star },
    { id: "einstellungen" as NavItem, label: "Einstellungen", icon: Settings },
  ];

  // Chart data
  const weeklyBookings = [
    { day: "Mo", buchungen: 3 },
    { day: "Di", buchungen: 5 },
    { day: "Mi", buchungen: 2 },
    { day: "Do", buchungen: 7 },
    { day: "Fr", buchungen: 4 },
    { day: "Sa", buchungen: 1 },
    { day: "So", buchungen: 0 },
  ];

  const bookingTypes = [
    { name: "Transportschein", value: 65, color: "hsl(var(--primary))" },
    { name: "Selbstzahler", value: 25, color: "hsl(var(--secondary))" },
    { name: "Ausschreibungen", value: 10, color: "hsl(45, 93%, 47%)" },
  ];

  // Mock bookings data
  const bookings = {
    offen: [
      { id: 1, pickup: "18.01.2026 10:30", from: "36 Fulda, Germany", to: "Frankfurt Am Main, Germany", kostentraeger: "Transportschein", preis: "0€", status: "offen" },
      { id: 2, pickup: "20.01.2026 14:00", from: "Kassel, Germany", to: "Marburg, Germany", kostentraeger: "Selbstzahler", preis: "85€", status: "offen" },
    ],
    bestaetigt: [
      { id: 3, pickup: "15.01.2026 09:00", from: "Wiesbaden, Germany", to: "Mainz, Germany", kostentraeger: "Transportschein", preis: "0€", status: "bestaetigt" },
    ],
    storniert: [
      { id: 4, pickup: "10.01.2026 11:30", from: "Darmstadt, Germany", to: "Frankfurt, Germany", kostentraeger: "Selbstzahler", preis: "45€", status: "storniert" },
    ],
  };

  // KPI Data
  const kpiData = {
    offeneBuchungen: 8,
    transportschein: 156,
    selbstzahler: 42,
    ausschreibungen: 12,
    avgRating: 4.8,
    totalRatings: 89,
  };

  // Activities
  const activities = [
    { id: 1, message: "Neue Buchung eingegangen", time: "vor 2 Stunden", type: "booking" },
    { id: 2, message: "Buchungsbestätigung vom Kunden", time: "vor 4 Stunden", type: "confirmed" },
    { id: 3, message: "Die Buchung wurde vom Kunden abgelehnt", time: "vor 1 Tag", type: "cancelled" },
    { id: 4, message: "Neue Bewertung erhalten", time: "vor 2 Tagen", type: "rating" },
    { id: 5, message: "Buchung storniert", time: "vor 3 Tagen", type: "cancelled" },
  ];

  // Ratings
  const ratings = [
    { id: 1, client: "Max Mustermann", rating: 5, comment: "Sehr pünktlich und freundlich!", date: "12.01.2026" },
    { id: 2, client: "Anna Schmidt", rating: 4, comment: "Guter Service, kann ich empfehlen.", date: "10.01.2026" },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const renderNavigation = () => (
    <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-2 mb-8">
      <div className="flex items-center justify-center gap-1 flex-wrap">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-foreground text-background shadow-lg"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Übersicht</h1>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
        {/* Bar Chart */}
        <Card className="border-0 shadow-lg bg-card overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">Monatliche Buchungen</CardTitle>
              <Button variant="outline" size="sm" className="text-xs gap-1">
                Letzte 7 Tage
                <BarChart3 className="w-3 h-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyBookings}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="buchungen" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="border-0 shadow-lg bg-card overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Art</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={bookingTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {bookingTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {bookingTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: type.color }} />
                    <span className="text-xs text-muted-foreground">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ClipboardList className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.offeneBuchungen}</p>
                <p className="text-sm text-muted-foreground">Offene Buchungen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.transportschein}</p>
                <p className="text-sm text-muted-foreground">Transportschein</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.selbstzahler}</p>
                <p className="text-sm text-muted-foreground">Selbstzahler</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.ausschreibungen}</p>
                <p className="text-sm text-muted-foreground">Ausschreibung</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Open Bookings Table */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">Offene Buchungen</CardTitle>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              Alle zeigen
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Abholung</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Start / Ziel</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Kostenträger</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Preis</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.offen.map((booking) => (
                  <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <span className="text-sm font-medium">{booking.pickup}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        <p className="font-medium">Start: {booking.from}</p>
                        <p className="text-muted-foreground">Ziel: {booking.to}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-medium">{booking.kostentraeger}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-secondary/20 text-secondary border-0 font-semibold">
                        {booking.preis}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-amber-500/20 text-amber-600 border-0">
                        {booking.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                        Einzelheiten
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <User className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profil</h1>
          <p className="text-sm text-amber-600">Für jedes Transportmittel wird ein Standort erstellt. Um Änderungen vorzunehmen, löschen Sie den vorhandenen und erstellen einen neuen</p>
        </div>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="stammdaten" className="w-full">
        <TabsList className="bg-transparent border-b border-border rounded-none p-0 h-auto w-full justify-start">
          <TabsTrigger 
            value="stammdaten" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 font-medium"
          >
            <Settings className="w-4 h-4 mr-2" />
            Stammdaten
          </TabsTrigger>
          <TabsTrigger 
            value="standort" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 font-medium"
          >
            <MapPinned className="w-4 h-4 mr-2" />
            Standort
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stammdaten" className="mt-6 space-y-6">
          {/* Unternehmen */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Unternehmen</CardTitle>
            </CardHeader>
            <CardContent className="pt-5 space-y-5">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">
                  Unternehmensname <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="MediTrans GmbH" 
                  className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Vorname <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="Thomas" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Nachname <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="Müller" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Straße <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="Hauptstraße 123" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Postleitzahl <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="60311" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Stadt <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="Frankfurt am Main" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Amtsgericht
                  </Label>
                  <Input 
                    defaultValue="Frankfurt am Main" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="pt-5 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Telefon <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="+49 69 12345678" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Telefax
                  </Label>
                  <Input 
                    defaultValue="+49 69 12345679" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Mobil/WhatsApp <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="+49 170 1234567" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    type="email"
                    defaultValue="info@meditrans.de" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 h-11 rounded-xl font-medium">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="standort" className="mt-6">
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Standort & Fahrzeuge</CardTitle>
            </CardHeader>
            <CardContent className="pt-5 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Standort Adresse <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    defaultValue="Hauptstraße 123, 60311 Frankfurt" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Einsatzradius (km) <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    type="number"
                    defaultValue="100" 
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium text-muted-foreground">Verfügbare Transportarten</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Liegend", "Sitzend", "Rollstuhl", "Tragestuhl"].map((type) => (
                    <div key={type} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border-2 border-muted">
                      <span className="font-medium">{type}</span>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 h-11 rounded-xl font-medium">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Bookmark className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Buchungen</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ClipboardList className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.offeneBuchungen}</p>
                <p className="text-sm text-muted-foreground">Offene Buchungen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.transportschein}</p>
                <p className="text-sm text-muted-foreground">Transportschein</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.selbstzahler}</p>
                <p className="text-sm text-muted-foreground">Selbstzahler</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-background" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.ausschreibungen}</p>
                <p className="text-sm text-muted-foreground">Ausschreibung</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Tabs */}
      <Tabs defaultValue="offen" className="w-full">
        <TabsList className="w-full justify-start bg-muted/30 p-1.5 h-14 rounded-xl border border-muted">
          <TabsTrigger 
            value="offen" 
            className="flex-1 h-10 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium transition-all duration-300"
          >
            Offene Buchungen
          </TabsTrigger>
          <TabsTrigger 
            value="bestaetigt" 
            className="flex-1 h-10 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium transition-all duration-300"
          >
            Bestätigt
          </TabsTrigger>
          <TabsTrigger 
            value="storniert" 
            className="flex-1 h-10 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium transition-all duration-300"
          >
            Storniert
          </TabsTrigger>
        </TabsList>

        {(["offen", "bestaetigt", "storniert"] as const).map((status) => (
          <TabsContent key={status} value={status} className="mt-6">
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Abholung</th>
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Start / Ziel</th>
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Kostenträger</th>
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Preis</th>
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                        <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings[status].length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-muted-foreground">
                            Keine Buchungen gefunden
                          </td>
                        </tr>
                      ) : (
                        bookings[status].map((booking) => (
                          <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-5">
                              <span className="text-sm font-medium">{booking.pickup}</span>
                            </td>
                            <td className="py-4 px-5">
                              <div className="text-sm">
                                <p className="font-medium">Start: {booking.from}</p>
                                <p className="text-muted-foreground">Ziel: {booking.to}</p>
                              </div>
                            </td>
                            <td className="py-4 px-5">
                              <span className="text-sm font-medium">{booking.kostentraeger}</span>
                            </td>
                            <td className="py-4 px-5">
                              <Badge className="bg-secondary/20 text-secondary border-0 font-semibold">
                                {booking.preis}
                              </Badge>
                            </td>
                            <td className="py-4 px-5">
                              <Badge className={cn(
                                "border-0",
                                status === "offen" && "bg-amber-500/20 text-amber-600",
                                status === "bestaetigt" && "bg-secondary/20 text-secondary",
                                status === "storniert" && "bg-destructive/20 text-destructive"
                              )}>
                                {status}
                              </Badge>
                            </td>
                            <td className="py-4 px-5">
                              <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                                Einzelheiten
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Bell className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Aktivitäten</h1>
      </div>

      {/* Activities List */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-lg font-bold">Aktuelle Benachrichtigungen</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-5 hover:bg-muted/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.message}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRatings = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Star className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Bewertungen</h1>
      </div>

      {/* Rating Overview */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-lg font-bold">Auswertung</CardTitle>
        </CardHeader>
        <CardContent className="py-8">
          <div className="flex items-center justify-around">
            <div className="flex items-center gap-4">
              <Trophy className="w-16 h-16 text-muted-foreground" />
              <div>
                <p className="text-4xl font-bold text-foreground">{kpiData.avgRating}</p>
                <p className="text-sm text-muted-foreground">Score</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Star className="w-16 h-16 text-muted-foreground" />
              <div>
                <p className="text-4xl font-bold text-foreground">{kpiData.totalRatings}</p>
                <p className="text-sm text-muted-foreground">Insgesamt</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ratings List */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-lg font-bold">Klienten</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {ratings.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold text-foreground">Bisher keine Bewertungen!</p>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {ratings.map((rating) => (
                <div key={rating.id} className="p-5 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold">
                          {rating.client.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{rating.client}</p>
                        <p className="text-sm text-muted-foreground">{rating.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-5 h-5",
                            i < rating.rating ? "fill-amber-400 text-amber-400" : "text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-muted-foreground">{rating.comment}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Settings className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Einstellungen</h1>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="konto" className="w-full">
        <TabsList className="bg-transparent border-b border-border rounded-none p-0 h-auto w-full justify-start">
          <TabsTrigger 
            value="konto" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 font-medium"
          >
            <User className="w-4 h-4 mr-2" />
            Konto
          </TabsTrigger>
        </TabsList>

        <TabsContent value="konto" className="mt-6 space-y-6">
          {/* Notifications */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Benachrichtigung</CardTitle>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Neue Buchungen per E-Mail erhalten</span>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Neue Buchungen per WhatsApp erhalten</span>
                <Switch 
                  checked={whatsappNotifications} 
                  onCheckedChange={setWhatsappNotifications}
                />
              </div>
              <div className="flex justify-end pt-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 h-11 rounded-xl font-medium">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Email Change */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">E-Mail ändern</CardTitle>
                <p className="text-sm text-muted-foreground">Deine aktuelle Email lautet info@meditrans.de</p>
              </div>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Neue Email Adresse eingeben</Label>
                <Input 
                  type="email"
                  defaultValue="info@meditrans.de" 
                  className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl max-w-md"
                />
                <p className="text-sm text-destructive">Sie müssen sich erneut anmelden, wenn Sie Ihre E-Mail-Adresse ändern</p>
              </div>
              <div className="flex justify-end pt-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 h-11 rounded-xl font-medium">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Password Change */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Passwort ändern</CardTitle>
            </CardHeader>
            <CardContent className="pt-5 space-y-4">
              <div className="space-y-2 max-w-md">
                <Label className="text-sm font-medium text-muted-foreground">Aktuelles Passwort</Label>
                <div className="relative">
                  <Input 
                    type={showCurrentPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <Label className="text-sm font-medium text-muted-foreground">Neues Passwort</Label>
                <div className="relative">
                  <Input 
                    type={showNewPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <Label className="text-sm font-medium text-muted-foreground">Neues Passwort bestätigen</Label>
                <div className="relative">
                  <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="h-12 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 h-11 rounded-xl font-medium">
                  Bestätigen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Logout */}
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <CardContent className="py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Abmelden</p>
                  <p className="text-sm text-muted-foreground">Von Ihrem Konto abmelden</p>
                </div>
                <Button variant="destructive" className="gap-2 px-6 h-11 rounded-xl">
                  <LogOut className="w-4 h-4" />
                  Abmelden
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 pt-24 md:pt-28 pb-12">
        {renderNavigation()}
        
        <div className="max-w-6xl mx-auto">
          {activeNav === "uebersicht" && renderOverview()}
          {activeNav === "profil" && renderProfile()}
          {activeNav === "buchungen" && renderBookings()}
          {activeNav === "aktivitaeten" && renderActivities()}
          {activeNav === "bewertungen" && renderRatings()}
          {activeNav === "einstellungen" && renderSettings()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProviderDashboard;