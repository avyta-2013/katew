import { useState, useRef } from "react";
import { User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Camera, Upload, ArrowUpRight, Truck, Route, Timer, Sparkles } from "lucide-react";
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
    monthlyGrowth: 12.5,
    avgDistance: 87,
    patientsThisMonth: 48,
    avgResponseTime: 2.4,
  };

  const recentActivity = [
    { id: 1, action: "Neue Buchung erstellt", patient: "Max Mustermann", time: "vor 2 Stunden", type: "booking" },
    { id: 2, action: "Buchung bestätigt", patient: "Anna Schmidt", time: "vor 4 Stunden", type: "confirmed" },
    { id: 3, action: "Transport abgeschlossen", patient: "Peter Weber", time: "vor 1 Tag", type: "completed" },
    { id: 4, action: "Neue Anfrage erhalten", patient: "Lisa Müller", time: "vor 2 Tagen", type: "request" },
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
    <div className="w-80 bg-gradient-to-b from-card via-card to-muted/30 border-r border-border min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      {/* Profile Section */}
      <div className="p-8 border-b border-border/50 relative">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <Avatar className="w-24 h-24 border-4 border-background relative ring-2 ring-primary/20">
              <AvatarImage src={profileImage || ""} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
                DL
              </AvatarFallback>
            </Avatar>
            <button
              onClick={triggerFileInput}
              className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <Camera className="w-7 h-7 text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center ring-4 ring-background shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="mt-5 font-bold text-xl text-foreground">Dino Lalic</h2>
          <p className="text-sm text-muted-foreground mt-1">AVYTA Pflegegesellschaft</p>
          <Badge className="mt-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-0 px-4 py-1.5">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Verifizierter Partner
          </Badge>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5 space-y-2 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/30"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              )}
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                isActive ? "bg-white/20" : "bg-muted group-hover:bg-primary/10"
              )}>
                <Icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary")} />
              </div>
              <span className="font-semibold relative">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-border/50">
        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-destructive hover:bg-destructive/10 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-semibold">Abmelden</span>
        </button>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="text-3xl font-bold text-foreground relative">
          Willkommen zurück, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dino</span>! 👋
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">Hier ist Ihre aktuelle Dashboard-Übersicht.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Bookings */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Gesamtbuchungen</p>
                <p className="text-4xl font-bold text-foreground mt-3 tracking-tight">{kpiData.totalBookings}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="flex items-center gap-1 text-secondary text-sm font-medium bg-secondary/10 px-2 py-1 rounded-full">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+{kpiData.monthlyGrowth}%</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Bookings */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Aktive Fahrten</p>
                <p className="text-4xl font-bold text-foreground mt-3 tracking-tight">{kpiData.activeBookings}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="flex items-center gap-1 text-primary text-sm font-medium bg-primary/10 px-2 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>In Bearbeitung</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/30">
                <Truck className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Distance */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">⌀ Fahrstrecke</p>
                <p className="text-4xl font-bold text-foreground mt-3 tracking-tight">{kpiData.avgDistance} <span className="text-xl font-normal text-muted-foreground">km</span></p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="flex items-center gap-1 text-amber-600 text-sm font-medium bg-amber-500/10 px-2 py-1 rounded-full">
                    <Route className="w-4 h-4" />
                    <span>Pro Transport</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-500/70 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Route className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">⌀ Antwortzeit</p>
                <p className="text-4xl font-bold text-foreground mt-3 tracking-tight">{kpiData.avgResponseTime} <span className="text-xl font-normal text-muted-foreground">Std</span></p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="flex items-center gap-1 text-violet-600 text-sm font-medium bg-violet-500/10 px-2 py-1 rounded-full">
                    <Timer className="w-4 h-4" />
                    <span>Schnelle Reaktion</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-500/70 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Timer className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Booking Stats */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Buchungsstatistik</CardTitle>
                <CardDescription className="mt-1">Verteilung nach Status</CardDescription>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5 pt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-secondary/70" />
                  <span className="font-medium">Abgeschlossen</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.completedBookings}</span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-secondary/70 rounded-full transition-all duration-500"
                  style={{ width: `${(kpiData.completedBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70" />
                  <span className="font-medium">Aktiv</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.activeBookings}</span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                  style={{ width: `${(kpiData.activeBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-destructive to-destructive/70" />
                  <span className="font-medium">Storniert</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.cancelledBookings}</span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-destructive to-destructive/70 rounded-full transition-all duration-500"
                  style={{ width: `${(kpiData.cancelledBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Letzte Aktivitäten</CardTitle>
                <CardDescription className="mt-1">Ihre neuesten Updates</CardDescription>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-200 group cursor-pointer",
                    index === 0 && "bg-gradient-to-r from-primary/5 to-transparent"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105",
                    activity.type === "booking" && "bg-gradient-to-br from-primary/20 to-primary/10",
                    activity.type === "confirmed" && "bg-gradient-to-br from-secondary/20 to-secondary/10",
                    activity.type === "completed" && "bg-gradient-to-br from-secondary/20 to-secondary/10",
                    activity.type === "request" && "bg-gradient-to-br from-amber-500/20 to-amber-500/10"
                  )}>
                    {activity.type === "booking" && <Calendar className="w-5 h-5 text-primary" />}
                    {activity.type === "confirmed" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                    {activity.type === "completed" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                    {activity.type === "request" && <Clock className="w-5 h-5 text-amber-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.patient}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted/50 px-3 py-1.5 rounded-full">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Schnellaktionen</CardTitle>
          <CardDescription>Häufig verwendete Funktionen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-4 border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all duration-300 group rounded-2xl"
              onClick={() => setActiveNav("buchungen")}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Buchungen anzeigen</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-4 border-2 border-dashed hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group rounded-2xl"
              onClick={() => setActiveNav("profil")}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-semibold text-foreground">Profil bearbeiten</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-4 border-2 border-dashed hover:border-violet-500 hover:bg-violet-500/5 transition-all duration-300 group rounded-2xl"
              onClick={() => setActiveNav("einstellungen")}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-violet-500" />
              </div>
              <span className="font-semibold text-foreground">Einstellungen</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="text-3xl font-bold text-foreground relative">Profil</h1>
        <p className="text-muted-foreground mt-2 text-lg">Verwalten Sie Ihre persönlichen Daten</p>
      </div>

      {/* Profile Image Upload Card */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Profilbild</CardTitle>
              <CardDescription>Laden Sie ein Bild hoch, um Ihr Konto zu personalisieren</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <Avatar className="w-28 h-28 border-4 border-background relative ring-2 ring-primary/20">
                <AvatarImage src={profileImage || ""} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-3xl font-bold">
                  DL
                </AvatarFallback>
              </Avatar>
              <button
                onClick={triggerFileInput}
                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <Camera className="w-10 h-10 text-white" />
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
              <Button onClick={triggerFileInput} className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25">
                <Upload className="w-4 h-4" />
                Bild hochladen
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                JPG, PNG oder GIF • Max. 5MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Persönliche Informationen</CardTitle>
              <CardDescription>Ihre Kontaktdaten und Adresse</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Anrede */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              Anrede <span className="text-destructive">*</span>
            </Label>
            <RadioGroup defaultValue="einrichtung" className="flex flex-wrap gap-3">
              {["Mann", "Frau", "Divers", "Einrichtung"].map((option) => (
                <div key={option} className="flex items-center">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} className="peer sr-only" />
                  <Label 
                    htmlFor={option.toLowerCase()} 
                    className="cursor-pointer px-4 py-2.5 rounded-xl border-2 border-muted bg-muted/30 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary transition-all duration-200 font-medium"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Einrichtung Name */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-2">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              Name der Einrichtung
            </Label>
            <Input 
              defaultValue="AVYTA Pflegegesellschaft mbH" 
              className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
            />
          </div>

          {/* Name Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold">
                Vorname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Dino" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold">
                Nachname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Lalic" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
          </div>

          {/* Date & Address */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-muted-foreground" />
                Geburtsdatum <span className="text-destructive">*</span>
              </Label>
              <Input 
                type="date" 
                defaultValue="1992-06-29" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                Straße <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Allerheiligentor 2-4" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
          </div>

          {/* City & PLZ */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold">
                Stadt <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Frankfurt Am Main" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold">
                Postleitzahl <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="60311" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                Telefon <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="6915391405" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                E-Mail
              </Label>
              <Input 
                type="email" 
                defaultValue="info@avyta.de" 
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
              />
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button className="px-10 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base font-semibold rounded-xl">
              Änderungen speichern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="text-3xl font-bold text-foreground relative">Buchungen</h1>
        <p className="text-muted-foreground mt-2 text-lg">Übersicht aller Ihrer Transportbuchungen</p>
      </div>

      <Tabs defaultValue="aktiv" className="w-full">
        <TabsList className="w-full justify-start bg-muted/30 p-2 h-16 rounded-2xl border-2 border-muted">
          <TabsTrigger 
            value="aktiv" 
            className="flex-1 h-12 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 gap-2 font-semibold transition-all duration-300"
          >
            <Clock className="w-4 h-4" />
            Aktiv
            <Badge className="ml-1 bg-white/20 text-current border-0">
              {bookings.aktiv.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="bestaetigt" 
            className="flex-1 h-12 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-secondary/80 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-secondary/25 gap-2 font-semibold transition-all duration-300"
          >
            <CheckCircle2 className="w-4 h-4" />
            Bestätigt
            <Badge className="ml-1 bg-white/20 text-current border-0">
              {bookings.bestaetigt.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="storniert" 
            className="flex-1 h-12 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-destructive data-[state=active]:to-destructive/80 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-destructive/25 gap-2 font-semibold transition-all duration-300"
          >
            <XCircle className="w-4 h-4" />
            Storniert
            <Badge className="ml-1 bg-white/20 text-current border-0">
              {bookings.storniert.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        {(["aktiv", "bestaetigt", "storniert"] as const).map((status) => (
          <TabsContent key={status} value={status} className="mt-6">
            {bookings[status].length === 0 ? (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20">
                <CardContent className="py-20 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted/50 flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">Keine {status === "aktiv" ? "aktiven" : status === "bestaetigt" ? "bestätigten" : "stornierten"} Buchungen gefunden</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {bookings[status].map((booking) => (
                  <Card key={booking.id} className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-5">
                          <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                            status === "aktiv" && "bg-gradient-to-br from-primary/20 to-primary/10",
                            status === "bestaetigt" && "bg-gradient-to-br from-secondary/20 to-secondary/10",
                            status === "storniert" && "bg-gradient-to-br from-destructive/20 to-destructive/10"
                          )}>
                            <Calendar className={cn(
                              "w-7 h-7",
                              status === "aktiv" && "text-primary",
                              status === "bestaetigt" && "text-secondary",
                              status === "storniert" && "text-destructive"
                            )} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-foreground">{booking.patient}</h3>
                            <p className="text-muted-foreground mt-1">
                              {booking.date} um {booking.time} Uhr
                            </p>
                            <Badge variant="outline" className="mt-3 rounded-lg border-2">
                              {booking.type}
                            </Badge>
                          </div>
                        </div>
                        <Badge className={cn(
                          "capitalize px-4 py-2 text-sm font-semibold rounded-xl",
                          status === "aktiv" && "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-0",
                          status === "bestaetigt" && "bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary border-0",
                          status === "storniert" && "bg-gradient-to-r from-destructive/20 to-destructive/10 text-destructive border-0"
                        )}>
                          {status === "aktiv" ? "Aktiv" : status === "bestaetigt" ? "Bestätigt" : "Storniert"}
                        </Badge>
                      </div>
                      <Separator className="my-5" />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Abholung</span>
                            <p className="font-semibold text-foreground">{booking.from}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Ziel</span>
                            <p className="font-semibold text-foreground">{booking.to}</p>
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
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="text-3xl font-bold text-foreground relative">Einstellungen</h1>
        <p className="text-muted-foreground mt-2 text-lg">Verwalten Sie Ihre Kontoeinstellungen</p>
      </div>

      {/* Notifications */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Benachrichtigungen</CardTitle>
              <CardDescription>Konfigurieren Sie Ihre Benachrichtigungseinstellungen</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-5 rounded-2xl bg-muted/30 border-2 border-muted">
            <div className="flex-1">
              <p className="font-semibold text-foreground">Statusänderungen per E-Mail erhalten</p>
              <p className="text-sm text-muted-foreground mt-1">
                Erhalten Sie Benachrichtigungen über wichtige Updates zu Ihren Buchungen
              </p>
            </div>
            <Switch 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary/80 scale-125"
            />
          </div>
          <div className="flex justify-end mt-6">
            <Button className="px-10 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base font-semibold rounded-xl">
              Speichern
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Passwort ändern</CardTitle>
              <CardDescription>Aktualisieren Sie Ihr Passwort für mehr Sicherheit</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Aktuelles Passwort</Label>
            <div className="relative">
              <Input 
                type={showCurrentPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base pr-14"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold">Neues Passwort</Label>
            <div className="relative">
              <Input 
                type={showNewPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base pr-14"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold">Passwort bestätigen</Label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base pr-14"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button className="px-10 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base font-semibold rounded-xl">
              Passwort ändern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex">
      {renderSidebar()}
      
      <main className="flex-1 p-10 max-w-6xl overflow-y-auto">
        {activeNav === "uebersicht" && renderOverview()}
        {activeNav === "profil" && renderProfile()}
        {activeNav === "buchungen" && renderBookings()}
        {activeNav === "einstellungen" && renderSettings()}
      </main>
    </div>
  );
};

export default PartnerDashboard;
