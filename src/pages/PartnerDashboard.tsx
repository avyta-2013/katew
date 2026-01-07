import { useState, useRef } from "react";
import { User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Users, Euro, Camera, Upload, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type NavItem = "uebersicht" | "profil" | "buchungen" | "einstellungen";

const PartnerDashboard = () => {
  const [activeNav, setActiveNav] = useState<NavItem>("uebersicht");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { id: "uebersicht" as NavItem, label: "Übersicht", icon: LayoutDashboard },
    { id: "profil" as NavItem, label: "Profil", icon: User },
    { id: "buchungen" as NavItem, label: "Buchungen", icon: Calendar },
    { id: "einstellungen" as NavItem, label: "Einstellungen", icon: Settings },
  ];

  // Mock bookings data
  const bookings = {
    aktiv: [
      { id: 1, patient: "Max Mustermann", date: "15.01.2026", time: "09:00", type: "Liegend", status: "aktiv", from: "Berlin Charité", to: "München Klinikum" },
      { id: 2, patient: "Anna Schmidt", date: "16.01.2026", time: "14:30", type: "Sitzend", status: "aktiv", from: "Hamburg UKE", to: "Bremen Klinikum" },
    ],
    bestaetigt: [
      { id: 3, patient: "Peter Weber", date: "10.01.2026", time: "11:00", type: "Rollstuhl", status: "bestaetigt", from: "Frankfurt Uniklinik", to: "Mainz Klinikum" },
    ],
    storniert: [
      { id: 4, patient: "Lisa Müller", date: "05.01.2026", time: "08:00", type: "Tragestuhl", status: "storniert", from: "Köln Uniklinik", to: "Düsseldorf Klinikum" },
    ],
  };

  // KPI Data
  const kpiData = {
    totalBookings: 156,
    activeBookings: 12,
    completedBookings: 134,
    cancelledBookings: 10,
    revenue: 24580,
    monthlyGrowth: 12.5,
    satisfactionRate: 98,
    avgResponseTime: 2.4,
  };

  const recentActivity = [
    { id: 1, action: "Neue Buchung", patient: "Max Mustermann", time: "vor 2 Stunden", type: "booking" },
    { id: 2, action: "Buchung bestätigt", patient: "Anna Schmidt", time: "vor 4 Stunden", type: "confirmed" },
    { id: 3, action: "Transport abgeschlossen", patient: "Peter Weber", time: "vor 1 Tag", type: "completed" },
    { id: 4, action: "Neue Anfrage", patient: "Lisa Müller", time: "vor 2 Tagen", type: "request" },
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

  const renderSidebar = () => (
    <div className="w-72 bg-card border-r border-border min-h-screen flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <Avatar className="w-20 h-20 border-4 border-primary/20">
              <AvatarImage src={profileImage || ""} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white text-xl font-semibold">
                DL
              </AvatarFallback>
            </Avatar>
            <button
              onClick={triggerFileInput}
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              <Camera className="w-6 h-6 text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="mt-4 font-semibold text-lg text-foreground">Dino Lalic</h2>
          <p className="text-sm text-muted-foreground">AVYTA Pflegegesellschaft</p>
          <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
            Verifizierter Partner
          </Badge>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Abmelden</span>
        </button>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Übersicht</h1>
        <p className="text-muted-foreground mt-1">Willkommen zurück, Dino! Hier ist Ihr Dashboard.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Gesamtbuchungen</p>
                <p className="text-3xl font-bold text-foreground mt-2">{kpiData.totalBookings}</p>
                <div className="flex items-center gap-1 mt-2 text-secondary text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+{kpiData.monthlyGrowth}% diesen Monat</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Aktive Buchungen</p>
                <p className="text-3xl font-bold text-foreground mt-2">{kpiData.activeBookings}</p>
                <div className="flex items-center gap-1 mt-2 text-primary text-sm">
                  <Clock className="w-4 h-4" />
                  <span>In Bearbeitung</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Umsatz (Monat)</p>
                <p className="text-3xl font-bold text-foreground mt-2">€{kpiData.revenue.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-2 text-secondary text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+8.2% vs. Vormonat</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Euro className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Kundenzufriedenheit</p>
                <p className="text-3xl font-bold text-foreground mt-2">{kpiData.satisfactionRate}%</p>
                <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                  <Users className="w-4 h-4" />
                  <span>Basierend auf 89 Bewertungen</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Booking Stats */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Buchungsstatistik</CardTitle>
            <CardDescription>Verteilung Ihrer Buchungen nach Status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Abgeschlossen</span>
                <span className="font-medium">{kpiData.completedBookings} ({Math.round((kpiData.completedBookings / kpiData.totalBookings) * 100)}%)</span>
              </div>
              <Progress value={(kpiData.completedBookings / kpiData.totalBookings) * 100} className="h-2 bg-muted" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Aktiv</span>
                <span className="font-medium">{kpiData.activeBookings} ({Math.round((kpiData.activeBookings / kpiData.totalBookings) * 100)}%)</span>
              </div>
              <Progress value={(kpiData.activeBookings / kpiData.totalBookings) * 100} className="h-2 bg-muted [&>div]:bg-primary" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Storniert</span>
                <span className="font-medium">{kpiData.cancelledBookings} ({Math.round((kpiData.cancelledBookings / kpiData.totalBookings) * 100)}%)</span>
              </div>
              <Progress value={(kpiData.cancelledBookings / kpiData.totalBookings) * 100} className="h-2 bg-muted [&>div]:bg-destructive" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Letzte Aktivitäten</CardTitle>
            <CardDescription>Ihre neuesten Buchungsupdates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    activity.type === "booking" && "bg-primary/10",
                    activity.type === "confirmed" && "bg-secondary/10",
                    activity.type === "completed" && "bg-secondary/10",
                    activity.type === "request" && "bg-amber-500/10"
                  )}>
                    {activity.type === "booking" && <Calendar className="w-5 h-5 text-primary" />}
                    {activity.type === "confirmed" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                    {activity.type === "completed" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                    {activity.type === "request" && <Clock className="w-5 h-5 text-amber-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.patient}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Schnellaktionen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => setActiveNav("buchungen")}
            >
              <Calendar className="w-8 h-8 text-primary" />
              <span className="font-medium">Buchungen anzeigen</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-secondary/5 hover:border-secondary"
              onClick={() => setActiveNav("profil")}
            >
              <User className="w-8 h-8 text-secondary" />
              <span className="font-medium">Profil bearbeiten</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => setActiveNav("einstellungen")}
            >
              <Settings className="w-8 h-8 text-primary" />
              <span className="font-medium">Einstellungen</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profil</h1>
        <p className="text-muted-foreground mt-1">Verwalten Sie Ihre persönlichen Daten</p>
      </div>

      {/* Profile Image Upload Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Profilbild
          </CardTitle>
          <CardDescription>
            Laden Sie ein Profilbild hoch, um Ihr Konto zu personalisieren
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-4 border-primary/20">
                <AvatarImage src={profileImage || ""} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white text-2xl font-semibold">
                  DL
                </AvatarFallback>
              </Avatar>
              <button
                onClick={triggerFileInput}
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              >
                <Camera className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button onClick={triggerFileInput} variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                Bild hochladen
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                JPG, PNG oder GIF. Max. 5MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Persönliche Informationen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Anrede */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Anrede <span className="text-destructive">*</span>
            </Label>
            <RadioGroup defaultValue="einrichtung" className="flex flex-wrap gap-4">
              {["Mann", "Frau", "Divers", "Einrichtung"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Einrichtung Name */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              Name der Einrichtung
            </Label>
            <Input 
              defaultValue="AVYTA Pflegegesellschaft mbH" 
              className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Name Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Vorname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Dino" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Nachname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Lalic" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Date & Address */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-muted-foreground" />
                Geburtsdatum <span className="text-destructive">*</span>
              </Label>
              <Input 
                type="date" 
                defaultValue="1992-06-29" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                Straße <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Allerheiligentor 2-4" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* City & PLZ */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Stadt <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Frankfurt Am Main" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Postleitzahl <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="60311" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                Telefon <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="6915391405" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                E-Mail
              </Label>
              <Input 
                type="email" 
                defaultValue="info@avyta.de" 
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button className="px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Speichern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Buchungen</h1>
        <p className="text-muted-foreground mt-1">Übersicht aller Ihrer Transportbuchungen</p>
      </div>

      <Tabs defaultValue="aktiv" className="w-full">
        <TabsList className="w-full justify-start bg-muted/50 p-1 h-14 rounded-xl">
          <TabsTrigger 
            value="aktiv" 
            className="flex-1 h-12 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md gap-2"
          >
            <Clock className="w-4 h-4" />
            Aktiv
            <Badge variant="secondary" className="ml-1 bg-primary/10 text-primary">
              {bookings.aktiv.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="bestaetigt" 
            className="flex-1 h-12 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            Bestätigt
            <Badge variant="secondary" className="ml-1 bg-secondary/20 text-secondary">
              {bookings.bestaetigt.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="storniert" 
            className="flex-1 h-12 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md gap-2"
          >
            <XCircle className="w-4 h-4" />
            Storniert
            <Badge variant="secondary" className="ml-1 bg-destructive/10 text-destructive">
              {bookings.storniert.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        {(["aktiv", "bestaetigt", "storniert"] as const).map((status) => (
          <TabsContent key={status} value={status} className="mt-6">
            {bookings[status].length === 0 ? (
              <Card className="border-0 shadow-lg">
                <CardContent className="py-16 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Keine {status === "aktiv" ? "aktiven" : status === "bestaetigt" ? "bestätigten" : "stornierten"} Buchungen gefunden</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {bookings[status].map((booking) => (
                  <Card key={booking.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            status === "aktiv" && "bg-primary/10",
                            status === "bestaetigt" && "bg-secondary/10",
                            status === "storniert" && "bg-destructive/10"
                          )}>
                            <Calendar className={cn(
                              "w-6 h-6",
                              status === "aktiv" && "text-primary",
                              status === "bestaetigt" && "text-secondary",
                              status === "storniert" && "text-destructive"
                            )} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{booking.patient}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {booking.date} um {booking.time} Uhr
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {booking.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Badge className={cn(
                          "capitalize",
                          status === "aktiv" && "bg-primary/10 text-primary hover:bg-primary/20",
                          status === "bestaetigt" && "bg-secondary/10 text-secondary hover:bg-secondary/20",
                          status === "storniert" && "bg-destructive/10 text-destructive hover:bg-destructive/20"
                        )}>
                          {status === "aktiv" ? "Aktiv" : status === "bestaetigt" ? "Bestätigt" : "Storniert"}
                        </Badge>
                      </div>
                      <Separator className="my-4" />
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <span className="text-muted-foreground">Von:</span>
                            <p className="font-medium">{booking.from}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                          <div>
                            <span className="text-muted-foreground">Nach:</span>
                            <p className="font-medium">{booking.to}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-muted-foreground mt-1">Verwalten Sie Ihre Kontoeinstellungen</p>
      </div>

      {/* Notifications */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Benachrichtigungen
          </CardTitle>
          <CardDescription>
            Konfigurieren Sie, wie Sie benachrichtigt werden möchten
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
            <div className="flex-1">
              <p className="font-medium">Statusänderungen deiner Buchung per E-Mail erhalten</p>
              <p className="text-sm text-muted-foreground mt-1">
                Erhalten Sie Benachrichtigungen über wichtige Updates zu Ihren Buchungen
              </p>
            </div>
            <Switch 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications}
              className="data-[state=checked]:bg-primary"
            />
          </div>
          <div className="flex justify-end mt-6">
            <Button className="px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Bestätigen
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Passwort ändern
          </CardTitle>
          <CardDescription>
            Aktualisieren Sie Ihr Passwort für mehr Sicherheit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Aktuelles Passwort</Label>
            <div className="relative">
              <Input 
                type={showCurrentPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary pr-12"
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

          <div className="space-y-2">
            <Label className="text-sm font-medium">Neues Passwort</Label>
            <div className="relative">
              <Input 
                type={showNewPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary pr-12"
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

          <div className="space-y-2">
            <Label className="text-sm font-medium">Bestätige Neues Passwort</Label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary pr-12"
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

          <div className="flex justify-end pt-4">
            <Button className="px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Bestätigen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {renderSidebar()}
      
      <main className="flex-1 p-8 max-w-5xl">
        {activeNav === "uebersicht" && renderOverview()}
        {activeNav === "profil" && renderProfile()}
        {activeNav === "buchungen" && renderBookings()}
        {activeNav === "einstellungen" && renderSettings()}
      </main>
    </div>
  );
};

export default PartnerDashboard;
