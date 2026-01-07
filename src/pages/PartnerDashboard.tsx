import { useState, useRef } from "react";
import { User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Camera, Upload, ArrowUpRight, Truck, Route, Timer, Sparkles, Ticket, MoreHorizontal, Star, RefreshCw, FileText } from "lucide-react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type NavItem = "uebersicht" | "profil" | "buchungen" | "tickets" | "einstellungen";

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
    { id: "tickets" as NavItem, label: "Tickets", icon: Ticket },
    { id: "einstellungen" as NavItem, label: "Einstellungen", icon: Settings },
  ];

  // Tickets data
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Rechnung nicht erhalten", status: "offen", date: "12.01.2026", priority: "hoch" },
    { id: 2, subject: "Stornierung Buchung #1234", status: "bearbeitung", date: "10.01.2026", priority: "mittel" },
  ]);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketDescription, setNewTicketDescription] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("mittel");

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
    <div className="space-y-5">
      {/* Header */}
      <div className="relative">
        <h1 className="text-2xl font-bold text-foreground relative">
          Willkommen zurück, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dino</span>! 👋
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">Hier ist Ihre aktuelle Dashboard-Übersicht.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Bookings */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Gesamtbuchungen</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.totalBookings}</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-secondary text-xs font-medium bg-secondary/10 px-1.5 py-0.5 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+{kpiData.monthlyGrowth}%</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Bookings */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Aktive Fahrten</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.activeBookings}</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-1.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    <span>In Bearbeitung</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-md">
                <Truck className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Distance */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">⌀ Fahrstrecke</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.avgDistance} <span className="text-sm font-normal text-muted-foreground">km</span></p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-medium bg-amber-500/10 px-1.5 py-0.5 rounded-full">
                    <Route className="w-3 h-3" />
                    <span>Pro Transport</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-500/70 flex items-center justify-center shadow-md">
                <Route className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">⌀ Antwortzeit</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.avgResponseTime} <span className="text-sm font-normal text-muted-foreground">Std</span></p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-violet-600 text-xs font-medium bg-violet-500/10 px-1.5 py-0.5 rounded-full">
                    <Timer className="w-3 h-3" />
                    <span>Schnelle Reaktion</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-500/70 flex items-center justify-center shadow-md">
                <Timer className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Booking Stats */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-1 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold">Buchungsstatistik</CardTitle>
                <CardDescription className="text-xs mt-0.5">Verteilung nach Status</CardDescription>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-2 px-4 pb-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-medium">Abgeschlossen</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.completedBookings}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-secondary rounded-full"
                  style={{ width: `${(kpiData.completedBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Aktiv</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.activeBookings}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  style={{ width: `${(kpiData.activeBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="font-medium">Storniert</span>
                </div>
                <span className="font-bold text-foreground">{kpiData.cancelledBookings}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-destructive rounded-full"
                  style={{ width: `${(kpiData.cancelledBookings / kpiData.totalBookings) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-1 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold">Letzte Aktivitäten</CardTitle>
                <CardDescription className="text-xs mt-0.5">Ihre neuesten Updates</CardDescription>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-2 px-4 pb-4">
            <div className="space-y-2">
              {recentActivity.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className={cn(
                    "flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-all duration-200 cursor-pointer",
                    index === 0 && "bg-primary/5"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    activity.type === "booking" && "bg-primary/15",
                    activity.type === "confirmed" && "bg-secondary/15",
                    activity.type === "completed" && "bg-secondary/15",
                    activity.type === "request" && "bg-amber-500/15"
                  )}>
                    {activity.type === "booking" && <Calendar className="w-4 h-4 text-primary" />}
                    {activity.type === "confirmed" && <CheckCircle2 className="w-4 h-4 text-secondary" />}
                    {activity.type === "completed" && <CheckCircle2 className="w-4 h-4 text-secondary" />}
                    {activity.type === "request" && <Clock className="w-4 h-4 text-amber-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xs text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.patient}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-muted/50 px-2 py-1 rounded-full">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
        <CardHeader className="py-3 px-4">
          <CardTitle className="text-base font-bold">Schnellaktionen</CardTitle>
          <CardDescription className="text-xs">Häufig verwendete Funktionen</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="grid md:grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 border border-dashed hover:border-primary hover:bg-primary/5 transition-all duration-300 group rounded-xl"
              onClick={() => setActiveNav("buchungen")}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm text-foreground">Buchungen</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 border border-dashed hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group rounded-xl"
              onClick={() => setActiveNav("profil")}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium text-sm text-foreground">Profil</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center gap-2 border border-dashed hover:border-violet-500 hover:bg-violet-500/5 transition-all duration-300 group rounded-xl"
              onClick={() => setActiveNav("einstellungen")}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-5 h-5 text-violet-500" />
              </div>
              <span className="font-medium text-sm text-foreground">Einstellungen</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-5">
      <div className="relative">
        <h1 className="text-2xl font-bold text-foreground relative">Profil</h1>
        <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie Ihre persönlichen Daten</p>
      </div>

      {/* Profile Image Upload Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Camera className="w-4 h-4 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Profilbild</CardTitle>
              <CardDescription className="text-xs">Bild hochladen</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <Avatar className="w-20 h-20 border-2 border-background ring-1 ring-primary/20">
                <AvatarImage src={profileImage || ""} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold">
                  DL
                </AvatarFallback>
              </Avatar>
              <button
                onClick={triggerFileInput}
                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Camera className="w-6 h-6 text-white" />
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
              <Button onClick={triggerFileInput} size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Upload className="w-3.5 h-3.5" />
                Hochladen
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                JPG, PNG • Max. 5MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privat Section */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/10 to-violet-500/5 flex items-center justify-center">
              <User className="w-4 h-4 text-violet-500" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Privat</CardTitle>
              <CardDescription className="text-xs">Persönliche Kontaktdaten</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 px-4 pb-4">
          {/* Anrede - Modern Toggle Style */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold">
              Anrede <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-1 p-1 bg-muted/50 rounded-lg w-fit">
              <RadioGroup defaultValue="mann" className="flex gap-0.5">
                {["Mann", "Frau", "Divers"].map((option) => (
                  <div key={option} className="flex items-center">
                    <RadioGroupItem value={option.toLowerCase()} id={`anrede-${option.toLowerCase()}`} className="peer sr-only" />
                    <Label 
                      htmlFor={`anrede-${option.toLowerCase()}`} 
                      className="cursor-pointer px-4 py-2 rounded-md bg-transparent peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:shadow-sm transition-all duration-200 font-medium text-xs text-muted-foreground hover:text-foreground"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Name Grid */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">
                Vorname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Dino" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-semibold">
                Nachname <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Lalic" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Geburtsdatum */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-muted-foreground" />
              Geburtsdatum <span className="text-destructive">*</span>
            </Label>
            <Input 
              type="date" 
              defaultValue="1992-06-29" 
              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm max-w-[200px]"
            />
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                Telefon (privat)
              </Label>
              <Input 
                defaultValue="" 
                placeholder="Optional"
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                E-Mail (privat)
              </Label>
              <Input 
                type="email" 
                defaultValue="" 
                placeholder="Optional"
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Einrichtung Section */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Einrichtung</CardTitle>
              <CardDescription className="text-xs">Firmendaten</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 px-4 pb-4">
          {/* Einrichtung Name */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
              Name der Einrichtung <span className="text-destructive">*</span>
            </Label>
            <Input 
              defaultValue="AVYTA Pflegegesellschaft mbH" 
              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
              Straße <span className="text-destructive">*</span>
            </Label>
            <Input 
              defaultValue="Allerheiligentor 2-4" 
              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
            />
          </div>

          {/* City & PLZ */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">
                Stadt <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="Frankfurt Am Main" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-semibold">
                Postleitzahl <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="60311" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
          </div>

          {/* Business Contact */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                Telefon <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="6915391405" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                E-Mail <span className="text-destructive">*</span>
              </Label>
              <Input 
                type="email" 
                defaultValue="info@avyta.de" 
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <Button size="sm" className="px-6 h-9 bg-primary hover:bg-primary/90 text-sm font-medium rounded-lg text-primary-foreground">
              Speichern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-5">
      <div className="relative">
        <h1 className="text-2xl font-bold text-foreground relative">Buchungen</h1>
        <p className="text-muted-foreground mt-1 text-sm">Übersicht aller Ihrer Transportbuchungen</p>
      </div>

      <Tabs defaultValue="aktiv" className="w-full">
        <TabsList className="w-full justify-start bg-muted/30 p-1.5 h-12 rounded-xl border border-muted">
          <TabsTrigger 
            value="aktiv" 
            className="flex-1 h-9 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
          >
            <Clock className="w-3.5 h-3.5" />
            Aktiv
            <Badge className="ml-1 bg-primary-foreground/20 text-inherit border-0 text-xs px-1.5 py-0">
              {bookings.aktiv.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="bestaetigt" 
            className="flex-1 h-9 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Bestätigt
            <Badge className="ml-1 bg-secondary-foreground/20 text-inherit border-0 text-xs px-1.5 py-0">
              {bookings.bestaetigt.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="storniert" 
            className="flex-1 h-9 rounded-lg data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
          >
            <XCircle className="w-3.5 h-3.5" />
            Storniert
            <Badge className="ml-1 bg-destructive-foreground/20 text-inherit border-0 text-xs px-1.5 py-0">
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
                        <div className="flex items-center gap-3">
                          <Badge className={cn(
                            "capitalize px-4 py-2 text-sm font-semibold rounded-xl",
                            status === "aktiv" && "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-0",
                            status === "bestaetigt" && "bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary border-0",
                            status === "storniert" && "bg-gradient-to-r from-destructive/20 to-destructive/10 text-destructive border-0"
                          )}>
                            {status === "aktiv" ? "Aktiv" : status === "bestaetigt" ? "Bestätigt" : "Storniert"}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl border-2 hover:bg-muted/50 gap-2">
                                <MoreHorizontal className="w-4 h-4" />
                                Optionen
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 rounded-xl border-2 shadow-xl bg-card">
                              <DropdownMenuItem className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50">
                                <FileText className="w-4 h-4 text-primary" />
                                <span className="font-medium">Details</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50">
                                <RefreshCw className="w-4 h-4 text-secondary" />
                                <span className="font-medium">Wiederholen</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50">
                                <Star className="w-4 h-4 text-amber-500" />
                                <span className="font-medium">Bewerten</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
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

  const handleCreateTicket = () => {
    if (newTicketSubject.trim()) {
      const newTicket = {
        id: tickets.length + 1,
        subject: newTicketSubject,
        status: "offen" as const,
        date: new Date().toLocaleDateString("de-DE"),
        priority: newTicketPriority
      };
      setTickets([newTicket, ...tickets]);
      setNewTicketSubject("");
      setNewTicketDescription("");
      setNewTicketPriority("mittel");
    }
  };

  const renderTickets = () => (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <h1 className="text-3xl font-bold text-foreground relative">Tickets</h1>
        <p className="text-muted-foreground mt-2 text-lg">Erstellen und verwalten Sie Support-Tickets</p>
      </div>

      {/* Create Ticket Card */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Neues Ticket erstellen</CardTitle>
              <CardDescription>Beschreiben Sie Ihr Anliegen</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-semibold">
              Betreff <span className="text-destructive">*</span>
            </Label>
            <Input 
              value={newTicketSubject}
              onChange={(e) => setNewTicketSubject(e.target.value)}
              placeholder="Kurze Beschreibung Ihres Anliegens..."
              className="h-14 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold">Beschreibung</Label>
            <Textarea 
              value={newTicketDescription}
              onChange={(e) => setNewTicketDescription(e.target.value)}
              placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
              className="min-h-32 bg-muted/30 border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-base resize-none"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Priorität</Label>
            <div className="flex gap-2 p-1.5 bg-muted/50 rounded-2xl w-fit">
              <RadioGroup value={newTicketPriority} onValueChange={setNewTicketPriority} className="flex gap-1">
                {[
                  { value: "niedrig", label: "Niedrig", color: "from-secondary to-secondary/80" },
                  { value: "mittel", label: "Mittel", color: "from-amber-500 to-amber-500/80" },
                  { value: "hoch", label: "Hoch", color: "from-destructive to-destructive/80" }
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <RadioGroupItem value={option.value} id={`priority-${option.value}`} className="peer sr-only" />
                    <Label 
                      htmlFor={`priority-${option.value}`} 
                      className={cn(
                        "cursor-pointer px-6 py-3 rounded-xl bg-transparent transition-all duration-300 font-medium text-muted-foreground hover:text-foreground",
                        newTicketPriority === option.value && `bg-gradient-to-r ${option.color} text-white shadow-lg`
                      )}
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleCreateTicket}
              disabled={!newTicketSubject.trim()}
              className="px-10 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base font-semibold rounded-xl text-primary-foreground"
            >
              Ticket erstellen
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Tickets */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 flex items-center justify-center">
              <FileText className="w-6 h-6 text-violet-500" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Meine Tickets</CardTitle>
              <CardDescription>Übersicht Ihrer erstellten Tickets</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {tickets.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted/50 flex items-center justify-center">
                <Ticket className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Keine Tickets vorhanden</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="p-5 rounded-2xl bg-muted/30 border-2 border-muted hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        ticket.status === "offen" && "bg-gradient-to-br from-amber-500/20 to-amber-500/10",
                        ticket.status === "bearbeitung" && "bg-gradient-to-br from-primary/20 to-primary/10",
                        ticket.status === "geschlossen" && "bg-gradient-to-br from-secondary/20 to-secondary/10"
                      )}>
                        <Ticket className={cn(
                          "w-6 h-6",
                          ticket.status === "offen" && "text-amber-500",
                          ticket.status === "bearbeitung" && "text-primary",
                          ticket.status === "geschlossen" && "text-secondary"
                        )} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{ticket.subject}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Erstellt am {ticket.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={cn(
                        "px-3 py-1.5 text-xs font-semibold rounded-lg border-0",
                        ticket.priority === "hoch" && "bg-destructive/20 text-destructive",
                        ticket.priority === "mittel" && "bg-amber-500/20 text-amber-600",
                        ticket.priority === "niedrig" && "bg-secondary/20 text-secondary"
                      )}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </Badge>
                      <Badge className={cn(
                        "px-3 py-1.5 text-xs font-semibold rounded-lg border-0",
                        ticket.status === "offen" && "bg-amber-500/20 text-amber-600",
                        ticket.status === "bearbeitung" && "bg-primary/20 text-primary",
                        ticket.status === "geschlossen" && "bg-secondary/20 text-secondary"
                      )}>
                        {ticket.status === "offen" ? "Offen" : ticket.status === "bearbeitung" ? "In Bearbeitung" : "Geschlossen"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
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
        {activeNav === "tickets" && renderTickets()}
        {activeNav === "einstellungen" && renderSettings()}
      </main>
    </div>
  );
};

export default PartnerDashboard;
