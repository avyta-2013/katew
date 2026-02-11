import { useState, useRef, useEffect } from "react";
import { User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Camera, Upload, ArrowUpRight, Truck, Route, Timer, Sparkles, Ticket, MoreHorizontal, Star, RefreshCw, FileText, Users, Plus, Search, ChevronLeft, ChevronRight, Menu, HelpCircle, MessageSquare, ArrowLeftRight, Zap, Activity, Headphones, Target, ChevronDown, ChevronUp, Navigation, ArrowUpDown, Home } from "lucide-react";
import AGBAcceptanceModal from "@/components/AGBAcceptanceModal";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type NavItem = "uebersicht" | "profil" | "buchungen" | "tickets" | "einstellungen";
type AccountType = "einrichtung" | "privat";

const PartnerDashboard = () => {
  const [activeNav, setActiveNav] = useState<NavItem>("uebersicht");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<AccountType>("einrichtung");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingPage, setBookingPage] = useState(1);
  const BOOKINGS_PER_PAGE = 10;

  // AGB Acceptance state
  const [showAGBModal, setShowAGBModal] = useState(false);
  const [agbAccepted, setAgbAccepted] = useState(false);

  // Check if AGB was already accepted (simulated with localStorage for demo)
  useEffect(() => {
    const accepted = localStorage.getItem("partner_agb_accepted");
    if (accepted === "true") {
      setAgbAccepted(true);
    } else {
      setShowAGBModal(true);
    }
  }, []);

  const handleAGBAccept = () => {
    localStorage.setItem("partner_agb_accepted", "true");
    setAgbAccepted(true);
    setShowAGBModal(false);
  };

  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<typeof bookings.aktiv[0] | null>(null);
  const [dialogBooking, setDialogBooking] = useState<typeof bookings.aktiv[0] | null>(null);
  const [bookingTab, setBookingTab] = useState<"unternehmen" | "klient">("unternehmen");
  const [ratingDialogOpen, setRatingDialogOpen] = useState(false);
  const [repeatDialogOpen, setRepeatDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [repeatDate, setRepeatDate] = useState("");
  const [repeatTime, setRepeatTime] = useState("");
  const [repeatNote, setRepeatNote] = useState("");
  const [selectedProviders, setSelectedProviders] = useState<number[]>([]);
  const [providersExpanded, setProvidersExpanded] = useState(true);

  const navItems = [
    { id: "uebersicht" as NavItem, label: "Übersicht", icon: LayoutDashboard },
    { id: "profil" as NavItem, label: "Profil", icon: User },
    { id: "buchungen" as NavItem, label: "Buchungen", icon: Calendar },
    { id: "einstellungen" as NavItem, label: "Einstellungen", icon: Settings },
    { id: "tickets" as NavItem, label: "Meine Tickets", icon: Ticket },
  ];

  // Tickets data
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Rechnung nicht erhalten", status: "offen", date: "12.01.2026", priority: "hoch", description: "Ich habe die Rechnung für den Transport vom 05.01.2026 noch nicht erhalten. Bitte um Zusendung.", messages: [
      { sender: "user", text: "Ich habe die Rechnung für den Transport vom 05.01.2026 noch nicht erhalten.", date: "12.01.2026 09:30" },
      { sender: "support", text: "Vielen Dank für Ihre Nachricht. Wir prüfen das und melden uns.", date: "12.01.2026 10:15" }
    ]},
    { id: 2, subject: "Stornierung Buchung #1234", status: "bearbeitung", date: "10.01.2026", priority: "mittel", description: "Bitte um Stornierung der Buchung #1234 aufgrund von Terminänderung.", messages: [
      { sender: "user", text: "Bitte stornieren Sie die Buchung #1234.", date: "10.01.2026 14:00" },
      { sender: "support", text: "Die Stornierung wird bearbeitet. Gebühren werden gemäß AGB berechnet.", date: "10.01.2026 15:30" },
      { sender: "user", text: "Verstanden, danke für die schnelle Rückmeldung.", date: "10.01.2026 16:00" }
    ]},
  ]);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketDescription, setNewTicketDescription] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("mittel");
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null);
  const [ticketDetailOpen, setTicketDetailOpen] = useState(false);
  const [newTicketMessage, setNewTicketMessage] = useState("");

  // Mock bookings data
  const bookings = {
    aktiv: [
      { id: 1, patient: "Max Mustermann", date: "15.01.2026", time: "09:00", type: "Liegend", status: "aktiv", from: "Berlin Charité", to: "München Klinikum", provider: "MediTrans GmbH" },
      { id: 2, patient: "Anna Schmidt", date: "16.01.2026", time: "14:30", type: "Sitzend", status: "aktiv", from: "Hamburg UKE", to: "Bremen Klinikum", provider: "Krankentransport Nord" },
    ],
    bestaetigt: [
      { id: 3, patient: "Peter Weber", date: "10.01.2026", time: "11:00", type: "Rollstuhl", status: "bestaetigt", from: "Frankfurt Uniklinik", to: "Mainz Klinikum", provider: "RheinMain Transport" },
    ],
    storniert: [
      { id: 4, patient: "Lisa Müller", date: "05.01.2026", time: "08:00", type: "Tragestuhl", status: "storniert", from: "Köln Uniklinik", to: "Düsseldorf Klinikum", provider: "KölnCare Transporte" },
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

  // Available providers for repeat booking
  const availableProviders = [
    { id: 1, name: "Krankentransport am Main GmbH", price: "0 €" },
    { id: 2, name: "Viamed Go", price: "0 €" },
    { id: 3, name: "Fahrdienst Rumpf", price: "0 €" },
    { id: 4, name: "iqbal-patiententransport", price: "0 €" },
    { id: 5, name: "IKA", price: "0 €" },
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
    <div className="w-72 bg-gradient-to-b from-card via-card to-muted/20 border-r border-border/50 flex flex-col shadow-xl">
      {/* Navigation Section */}
      <div className="px-3 pt-5 mb-2">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3">Navigation</p>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              )}
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                isActive 
                  ? "bg-white/20" 
                  : "bg-muted/50 group-hover:bg-muted"
              )}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium relative z-10">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto p-4 space-y-2">
        <Separator className="mb-4 bg-border/30" />
        <Button
          variant="ghost"
          onClick={() => window.location.href = "/"}
          className="w-full justify-start gap-3 h-11 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl"
        >
          <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
            <LogOut className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">Abmelden</span>
        </Button>
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

    </div>
  );

  const renderProfile = () => (
    <div className="space-y-5">
      <div className="relative">
        <h1 className="text-2xl font-bold text-foreground relative">Profil</h1>
        <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie Ihre persönlichen Daten</p>
      </div>

      {/* Combined Profile Section */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-3 pt-5 px-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold">Kontaktdaten</CardTitle>
              <CardDescription className="text-sm">Verwalten Sie Ihre persönlichen Informationen</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="px-5 pb-5 space-y-6">
          {/* Section: Kontotyp */}
          <div className="p-4 rounded-xl bg-muted/30 border border-muted/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Kontotyp</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Wählen Sie Ihren Kontotyp</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setAccountType("privat")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm border-2",
                    accountType === "privat" 
                      ? "bg-primary text-primary-foreground border-primary shadow-md" 
                      : "bg-background text-muted-foreground border-muted hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  <User className="w-4 h-4" />
                  Privatperson
                </button>
                <button
                  onClick={() => setAccountType("einrichtung")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm border-2",
                    accountType === "einrichtung" 
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-md" 
                      : "bg-background text-muted-foreground border-muted hover:border-secondary/50 hover:text-foreground"
                  )}
                >
                  <Building2 className="w-4 h-4" />
                  Einrichtung
                </button>
              </div>
            </div>
          </div>

          {/* Section: Einrichtung (conditional) */}
          {accountType === "einrichtung" && (
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-secondary" />
                Name der Einrichtung <span className="text-destructive">*</span>
              </Label>
              <Input 
                defaultValue="AVYTA Pflegegesellschaft mbH" 
                className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
              />
            </div>
          )}

          {/* Section: Persönliche Daten */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Persönliche Daten
            </h4>
            
            <div className="grid md:grid-cols-4 gap-4">
              {/* Anrede */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">Anrede</Label>
                <div className="flex gap-1 p-1 bg-muted/50 rounded-lg">
                  <RadioGroup defaultValue="mann" className="flex gap-0.5 w-full">
                    {["Herr", "Frau"].map((option) => (
                      <div key={option} className="flex-1">
                        <RadioGroupItem value={option.toLowerCase()} id={`anrede-${option.toLowerCase()}`} className="peer sr-only" />
                        <Label 
                          htmlFor={`anrede-${option.toLowerCase()}`} 
                          className="cursor-pointer flex items-center justify-center px-3 py-2 rounded-md bg-transparent peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:shadow-sm transition-all duration-200 font-medium text-xs text-muted-foreground hover:text-foreground"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Vorname */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  Vorname <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="Dino" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>

              {/* Nachname */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  Nachname <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="Lalic" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>

              {/* Geburtsdatum */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" />
                  Geburtsdatum
                </Label>
                <Input 
                  type="date" 
                  defaultValue="1992-06-29" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section: Adresse */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Adresse
            </h4>
            
            <div className="grid md:grid-cols-[3fr_1fr_2fr] gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Straße & Hausnummer <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="Allerheiligentor 2-4" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  PLZ <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="60311" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  Stadt <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="Frankfurt Am Main" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section: Kontakt */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Kontaktinformationen
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  Telefon <span className="text-destructive">*</span>
                </Label>
                <Input 
                  defaultValue="+49 69 15391405" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  E-Mail <span className="text-destructive">*</span>
                </Label>
                <Input 
                  type="email" 
                  defaultValue="info@avyta.de" 
                  className="h-11 bg-background border-2 border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl text-sm"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-2">
            <Button className="px-8 h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-sm font-semibold rounded-xl text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              Änderungen speichern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookingDetails = () => {
    if (!selectedBooking) return null;

    return (
      <div className="space-y-5">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => {
            setSelectedBooking(null);
            setBookingTab("unternehmen");
          }}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </Button>

        {/* Header Card */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
          <CardContent className="p-8 relative">
            <div className="flex items-start justify-between">
              <div>
                <Badge className="bg-primary/20 text-primary border-0 mb-4">
                  Transportschein
                </Badge>
                <h1 className="text-4xl font-bold text-background mb-2">
                  Buchung #{49703707 + selectedBooking.id}
                </h1>
                <p className="text-background/60 text-sm">
                  Erstellt am {selectedBooking.date}
                </p>
              </div>
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center backdrop-blur-sm">
                <Truck className="w-14 h-14 text-background/80" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-2">
          <Button
            onClick={() => setBookingTab("unternehmen")}
            className={cn(
              "h-12 px-8 rounded-xl font-semibold transition-all duration-300",
              bookingTab === "unternehmen" 
                ? "bg-foreground text-background shadow-lg" 
                : "bg-transparent text-muted-foreground hover:bg-muted/50 border border-border"
            )}
          >
            Unternehmen
          </Button>
          <Button
            onClick={() => setBookingTab("klient")}
            className={cn(
              "h-12 px-8 rounded-xl font-semibold transition-all duration-300",
              bookingTab === "klient" 
                ? "bg-foreground text-background shadow-lg" 
                : "bg-transparent text-muted-foreground hover:bg-muted/50 border border-border"
            )}
          >
            Klient & Transport
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-5">
            {bookingTab === "unternehmen" && (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
                <CardHeader className="pb-4 pt-6 px-6 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Unternehmen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  {/* Name */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Name</Label>
                    <p className="text-base font-semibold text-foreground mt-2">{selectedBooking.provider}</p>
                  </div>

                  {/* Stadt & Straße */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Stadt</Label>
                      <p className="text-base font-semibold text-foreground mt-2">Frankfurt</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Straße</Label>
                      <p className="text-base font-semibold text-foreground mt-2">Alt-Hausen 34</p>
                    </div>
                  </div>

                  {/* E-Mail */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">E-Mail</Label>
                    <p className="text-base font-semibold text-foreground mt-2">medicalkrankenfahrdienst@gmail.com</p>
                  </div>

                  {/* Mobil & Telefon */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Mobil</Label>
                      <p className="text-base font-semibold text-foreground mt-2">1777888655</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Telefon</Label>
                      <p className="text-base font-semibold text-foreground mt-2">6958700380</p>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Fax</Label>
                    <p className="text-base font-semibold text-foreground mt-2">6936609424</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {bookingTab === "klient" && (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
                <CardHeader className="pb-4 pt-6 px-6 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Klient & Transport</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  {/* Patient Name */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Patient</Label>
                    <p className="text-base font-semibold text-foreground mt-2">{selectedBooking.patient}</p>
                  </div>

                  {/* Datum & Uhrzeit */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-3.5 h-3.5 text-primary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Datum</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">{selectedBooking.date}</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Uhrzeit</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">{selectedBooking.time}</p>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="space-y-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/15 hover:to-secondary/10 transition-all duration-300 border border-secondary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                          <MapPin className="w-3 h-3 text-secondary" />
                        </div>
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Start</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground pl-8">{selectedBooking.from}</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-primary rounded-full" />
                    </div>

                    <div className="group p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 transition-all duration-300 border border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Target className="w-3 h-3 text-primary" />
                        </div>
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Ziel</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground pl-8">{selectedBooking.to}</p>
                    </div>
                  </div>

                  {/* Transportmittel */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-amber-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-3.5 h-3.5 text-amber-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Transportmittel</Label>
                    </div>
                    <p className="text-base font-semibold text-foreground">{selectedBooking.type}</p>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Action Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Transportschein</h3>
                  <p className="text-muted-foreground text-sm mt-1">Summe: <span className="text-xl font-bold text-foreground">0.00</span></p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full h-12 font-semibold rounded-xl border-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-300"
                >
                  <XCircle className="w-5 h-5 mr-2" />
                  Stornieren
                </Button>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Du brauchst Hilfe?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">24 Stunden</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium text-sm">Kontakt</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <Headphones className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="font-medium text-sm">Hilfezentrum</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const renderBookings = () => {
    if (selectedBooking) {
      return renderBookingDetails();
    }

    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="relative">
            <h1 className="text-2xl font-bold text-foreground relative">Buchungen</h1>
            <p className="text-muted-foreground mt-1 text-sm">Übersicht aller Ihrer Transportbuchungen</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buchung suchen..."
              value={bookingSearch}
              onChange={(e) => setBookingSearch(e.target.value)}
              className="pl-9 h-9 w-64 bg-background border-muted"
            />
          </div>
        </div>

        <Tabs defaultValue="aktiv" className="w-full">
          <TabsList className="w-full justify-start bg-muted/30 p-1.5 h-12 rounded-xl border border-muted">
            <TabsTrigger 
              value="aktiv" 
              className="flex-1 h-9 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
            >
              <Clock className="w-3.5 h-3.5" />
              Aktiv ({bookings.aktiv.length})
            </TabsTrigger>
            <TabsTrigger 
              value="bestaetigt" 
              className="flex-1 h-9 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Bestätigt ({bookings.bestaetigt.length})
            </TabsTrigger>
            <TabsTrigger 
              value="storniert" 
              className="flex-1 h-9 rounded-lg data-[state=active]:bg-destructive data-[state=active]:text-white data-[state=active]:shadow-md gap-1.5 font-medium text-sm transition-all duration-300"
            >
              <XCircle className="w-3.5 h-3.5" />
              Storniert ({bookings.storniert.length})
            </TabsTrigger>
          </TabsList>

          {(["aktiv", "bestaetigt", "storniert"] as const).map((status) => {
            const filteredBookings = bookings[status].filter(b => 
              bookingSearch === "" || 
              b.patient.toLowerCase().includes(bookingSearch.toLowerCase()) ||
              b.from.toLowerCase().includes(bookingSearch.toLowerCase()) ||
              b.to.toLowerCase().includes(bookingSearch.toLowerCase()) ||
              b.provider.toLowerCase().includes(bookingSearch.toLowerCase())
            );
            const totalPages = Math.ceil(filteredBookings.length / BOOKINGS_PER_PAGE);
            const paginatedBookings = filteredBookings.slice(
              (bookingPage - 1) * BOOKINGS_PER_PAGE,
              bookingPage * BOOKINGS_PER_PAGE
            );
            
            return (
              <TabsContent key={status} value={status} className="mt-6">
                {filteredBookings.length === 0 ? (
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20">
                    <CardContent className="py-20 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted/50 flex items-center justify-center">
                        <Calendar className="w-10 h-10 text-muted-foreground" />
                      </div>
                      <p className="text-lg text-muted-foreground">Keine {status === "aktiv" ? "aktiven" : status === "bestaetigt" ? "bestätigten" : "stornierten"} Buchungen gefunden</p>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <div className="space-y-4">
                      {paginatedBookings.map((booking) => (
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
                                  <div className="flex items-center gap-2 mb-1">
                                    <Truck className="w-3.5 h-3.5 text-muted-foreground" />
                                    <span className="text-xs font-medium text-muted-foreground">{booking.provider}</span>
                                  </div>
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
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl border-2 hover:bg-muted/50 gap-2">
                                      <MoreHorizontal className="w-4 h-4" />
                                      Optionen
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-48 rounded-xl border-2 shadow-xl bg-card">
                                    <DropdownMenuItem 
                                      className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50"
                                      onClick={() => setSelectedBooking(booking)}
                                    >
                                      <FileText className="w-4 h-4 text-primary" />
                                      <span className="font-medium">Details</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50"
                                      onClick={() => {
                                        setDialogBooking(booking);
                                        setRepeatDialogOpen(true);
                                      }}
                                    >
                                      <RefreshCw className="w-4 h-4 text-secondary" />
                                      <span className="font-medium">Wiederholen</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="gap-3 py-3 px-4 cursor-pointer rounded-lg hover:bg-muted/50 focus:bg-muted/50"
                                      onClick={() => {
                                        setDialogBooking(booking);
                                        setRatingDialogOpen(true);
                                      }}
                                    >
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
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-between mt-6 p-4 bg-card rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">
                          Seite {bookingPage} von {totalPages} ({filteredBookings.length} Einträge)
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                            disabled={bookingPage === 1}
                            onClick={() => setBookingPage(p => Math.max(1, p - 1))}
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Zurück
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                            disabled={bookingPage === totalPages}
                            onClick={() => setBookingPage(p => Math.min(totalPages, p + 1))}
                          >
                            Weiter
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Rating Dialog */}
        <Dialog open={ratingDialogOpen} onOpenChange={setRatingDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Bewertung abgeben</DialogTitle>
              <DialogDescription>Bewerten Sie den Transport für {dialogBooking?.patient}</DialogDescription>
            </DialogHeader>
            <div className="space-y-6 pt-4">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setSelectedRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star 
                      className={cn(
                        "w-10 h-10 transition-colors",
                        star <= selectedRating 
                          ? "text-amber-500 fill-amber-500" 
                          : "text-muted-foreground"
                      )} 
                    />
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold">Kommentar (optional)</Label>
                <Textarea 
                  placeholder="Schreiben Sie hier Ihre Bewertung..."
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                  className="min-h-[100px] rounded-xl"
                />
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 h-11 rounded-xl"
                  onClick={() => {
                    setRatingDialogOpen(false);
                    setSelectedRating(0);
                    setRatingComment("");
                  }}
                >
                  Abbrechen
                </Button>
                <Button 
                  className="flex-1 h-11 rounded-xl bg-primary hover:bg-primary/90"
                  onClick={() => {
                    setRatingDialogOpen(false);
                    setSelectedRating(0);
                    setRatingComment("");
                  }}
                >
                  Bewertung senden
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Repeat Booking Dialog - Modern Redesign */}
        <Dialog open={repeatDialogOpen} onOpenChange={setRepeatDialogOpen}>
          <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-0 shadow-2xl">
            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-6 rounded-t-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-white">Fahrt wiederholen</DialogTitle>
                    <p className="text-white/60 text-sm">Buchung #{dialogBooking ? 49703707 + dialogBooking.id : ""}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6 bg-background">
              {/* Route Section */}
              <div className="relative">
                <div className="absolute left-6 top-[60px] bottom-[60px] w-0.5 bg-gradient-to-b from-secondary via-muted to-primary z-0" />
                
                {/* Start Address */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20" />
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Start (Rückfahrt)</Label>
                  </div>
                  <div className="ml-5">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Input 
                        defaultValue={dialogBooking?.to || "Mainzer Landstraße 265, 60326 Frankfurt am Main"}
                        className="h-14 pl-4 pr-12 rounded-2xl border-2 border-muted bg-card focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/20 text-sm font-medium transition-all"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-muted/50 flex items-center justify-center">
                        <Navigation className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center my-3 relative z-20">
                  <button className="w-12 h-12 rounded-2xl bg-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                    <ArrowUpDown className="w-5 h-5 text-background group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                </div>

                {/* Destination Address */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ziel (Rückfahrt)</Label>
                  </div>
                  <div className="ml-5">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Input 
                        defaultValue={dialogBooking?.from || "Mittlerer Hasenpfad 37, 60598 Frankfurt am Main"}
                        className="h-14 pl-4 pr-12 rounded-2xl border-2 border-muted bg-card focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 text-sm font-medium transition-all"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-muted/50 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distance Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                  <Route className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Entfernung: <span className="text-foreground font-bold">5.5 km</span></span>
                </div>
              </div>

              {/* Quick Option */}
              <div className="flex justify-center">
                <Button className="h-12 px-8 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground gap-3 rounded-2xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-0.5">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Schnellstmöglich</span>
                </Button>
              </div>

              {/* Date & Time Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group p-4 rounded-2xl bg-gradient-to-br from-card to-muted/20 border-2 border-muted hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CalendarDays className="w-4 h-4 text-primary" />
                    </div>
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Datum <span className="text-destructive">*</span></Label>
                  </div>
                  <Input 
                    type="date"
                    value={repeatDate}
                    onChange={(e) => setRepeatDate(e.target.value)}
                    className="h-12 rounded-xl border-0 bg-background/80 focus-visible:ring-2 focus-visible:ring-primary/20 font-medium"
                  />
                </div>
                <div className="group p-4 rounded-2xl bg-gradient-to-br from-card to-muted/20 border-2 border-muted hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Uhrzeit <span className="text-destructive">*</span></Label>
                  </div>
                  <Input 
                    type="time"
                    value={repeatTime}
                    onChange={(e) => setRepeatTime(e.target.value)}
                    className="h-12 rounded-xl border-0 bg-background/80 focus-visible:ring-2 focus-visible:ring-secondary/20 font-medium"
                  />
                </div>
              </div>

              {/* Note Section */}
              <div className="group p-4 rounded-2xl bg-gradient-to-br from-card to-muted/20 border-2 border-muted hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <MessageSquare className="w-4 h-4 text-amber-600" />
                  </div>
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Notiz (Optional)</Label>
                </div>
                <Textarea 
                  placeholder="Besondere Hinweise oder Anforderungen hinzufügen..."
                  value={repeatNote}
                  onChange={(e) => setRepeatNote(e.target.value)}
                  className="min-h-[80px] rounded-xl border-0 bg-background/80 focus-visible:ring-2 focus-visible:ring-amber-500/20 resize-none"
                />
              </div>

              {/* Filter Section */}
              <div className="p-4 rounded-2xl bg-muted/30 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-foreground/10 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-foreground" />
                  </div>
                  <h4 className="font-bold text-sm">Filter</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Anbieter</Label>
                    <Select defaultValue="alle">
                      <SelectTrigger className="h-11 rounded-xl border-2 bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="alle">Alle</SelectItem>
                        <SelectItem value="krankentransport">Krankentransport</SelectItem>
                        <SelectItem value="taxi">Taxi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Transportart</Label>
                    <Select defaultValue="transportschein">
                      <SelectTrigger className="h-11 rounded-xl border-2 bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="transportschein">Transportschein</SelectItem>
                        <SelectItem value="selbstzahler">Selbstzahler</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Transportmittel</Label>
                    <Select defaultValue="sitzend">
                      <SelectTrigger className="h-11 rounded-xl border-2 bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="sitzend">Sitzend</SelectItem>
                        <SelectItem value="liegend">Liegend</SelectItem>
                        <SelectItem value="rollstuhl">Rollstuhl</SelectItem>
                        <SelectItem value="tragestuhl">Tragestuhl</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Available Providers - Collapsible */}
              <Collapsible open={providersExpanded} onOpenChange={setProvidersExpanded}>
                <div className="rounded-2xl border-2 border-border overflow-hidden bg-card">
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Truck className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-sm">Verfügbare Anbieter</h4>
                          <p className="text-xs text-muted-foreground">{availableProviders.length} Anbieter verfügbar • {selectedProviders.length} ausgewählt</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs h-8 rounded-lg border-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (selectedProviders.length === availableProviders.length) {
                              setSelectedProviders([]);
                            } else {
                              setSelectedProviders(availableProviders.map(p => p.id));
                            }
                          }}
                        >
                          {selectedProviders.length === availableProviders.length ? "Keine" : "Alle"}
                        </Button>
                        <div className={cn(
                          "w-8 h-8 rounded-lg bg-muted flex items-center justify-center transition-transform duration-300",
                          providersExpanded && "rotate-180"
                        )}>
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-4 pb-4 space-y-2 max-h-[250px] overflow-y-auto">
                      {availableProviders.map((provider, index) => (
                        <div 
                          key={provider.id}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group animate-fade-in",
                            selectedProviders.includes(provider.id)
                              ? "border-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-md"
                              : "border-transparent bg-muted/30 hover:bg-muted/50 hover:border-muted"
                          )}
                          style={{ animationDelay: `${index * 50}ms` }}
                          onClick={() => {
                            if (selectedProviders.includes(provider.id)) {
                              setSelectedProviders(selectedProviders.filter(id => id !== provider.id));
                            } else {
                              setSelectedProviders([...selectedProviders, provider.id]);
                            }
                          }}
                        >
                          <div className={cn(
                            "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300",
                            selectedProviders.includes(provider.id)
                              ? "bg-primary border-primary"
                              : "border-muted-foreground/30 group-hover:border-primary/50"
                          )}>
                            {selectedProviders.includes(provider.id) && (
                              <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                            )}
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-destructive" />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-sm block">{provider.name}</span>
                            <span className="text-xs text-muted-foreground">Verfügbar</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-lg text-foreground">{provider.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-2xl border-2 font-semibold text-base hover:bg-muted/50 transition-all duration-300"
                  onClick={() => {
                    setRepeatDialogOpen(false);
                    setRepeatDate("");
                    setRepeatTime("");
                    setRepeatNote("");
                    setSelectedProviders([]);
                  }}
                >
                  Abbrechen
                </Button>
                <Button 
                  className={cn(
                    "flex-1 h-14 rounded-2xl font-semibold text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5",
                    selectedProviders.length > 0
                      ? "bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-xl hover:shadow-secondary/30 text-secondary-foreground"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                  disabled={selectedProviders.length === 0}
                  onClick={() => {
                    setRepeatDialogOpen(false);
                    setRepeatDate("");
                    setRepeatTime("");
                    setRepeatNote("");
                    setSelectedProviders([]);
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Buchen ({selectedProviders.length} ausgewählt)
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  const handleCreateTicket = () => {
    if (newTicketSubject.trim()) {
      const newTicket = {
        id: tickets.length + 1,
        subject: newTicketSubject,
        status: "offen" as const,
        date: new Date().toLocaleDateString("de-DE"),
        priority: newTicketPriority,
        description: newTicketDescription,
        messages: [
          { sender: "user", text: newTicketDescription || newTicketSubject, date: new Date().toLocaleString("de-DE") }
        ]
      };
      setTickets([newTicket, ...tickets]);
      setNewTicketSubject("");
      setNewTicketDescription("");
      setNewTicketPriority("mittel");
      setTicketDialogOpen(false);
    }
  };

  const handleOpenTicket = (ticket: typeof tickets[0]) => {
    setSelectedTicket(ticket);
    setTicketDetailOpen(true);
  };

  const handleSendTicketMessage = () => {
    if (newTicketMessage.trim() && selectedTicket) {
      const updatedTickets = tickets.map(t => {
        if (t.id === selectedTicket.id) {
          return {
            ...t,
            messages: [...t.messages, { sender: "user", text: newTicketMessage, date: new Date().toLocaleString("de-DE") }]
          };
        }
        return t;
      });
      setTickets(updatedTickets);
      setSelectedTicket({
        ...selectedTicket,
        messages: [...selectedTicket.messages, { sender: "user", text: newTicketMessage, date: new Date().toLocaleString("de-DE") }]
      });
      setNewTicketMessage("");
    }
  };

  const renderTickets = () => (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="relative">
          <h1 className="text-2xl font-bold text-foreground relative">Meine Tickets</h1>
          <p className="text-muted-foreground mt-1 text-sm">Übersicht Ihrer Support-Tickets</p>
        </div>
        <Dialog open={ticketDialogOpen} onOpenChange={setTicketDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="w-4 h-4" />
              Ticket hinzufügen
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Neues Ticket erstellen</DialogTitle>
              <DialogDescription>Beschreiben Sie Ihr Anliegen</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold">
                  Betreff <span className="text-destructive">*</span>
                </Label>
                <Input 
                  value={newTicketSubject}
                  onChange={(e) => setNewTicketSubject(e.target.value)}
                  placeholder="Kurze Beschreibung Ihres Anliegens..."
                  className="h-11 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold">Beschreibung</Label>
                <Textarea 
                  value={newTicketDescription}
                  onChange={(e) => setNewTicketDescription(e.target.value)}
                  placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
                  className="min-h-24 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold">Priorität</Label>
                <div className="flex gap-1 p-1 bg-muted/50 rounded-lg w-fit">
                  <RadioGroup value={newTicketPriority} onValueChange={setNewTicketPriority} className="flex gap-1">
                    {[
                      { value: "niedrig", label: "Niedrig", color: "from-secondary to-secondary/80" },
                      { value: "mittel", label: "Mittel", color: "from-amber-500 to-amber-500/80" },
                      { value: "hoch", label: "Hoch", color: "from-destructive to-destructive/80" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center">
                        <RadioGroupItem value={option.value} id={`dialog-priority-${option.value}`} className="peer sr-only" />
                        <Label 
                          htmlFor={`dialog-priority-${option.value}`} 
                          className={cn(
                            "cursor-pointer px-4 py-2 rounded-md bg-transparent transition-all duration-300 font-medium text-muted-foreground hover:text-foreground text-sm",
                            newTicketPriority === option.value && `bg-gradient-to-r ${option.color} text-white shadow-md`
                          )}
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button 
                  onClick={handleCreateTicket}
                  disabled={!newTicketSubject.trim()}
                  className="px-6 h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg"
                >
                  Ticket erstellen
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Existing Tickets */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-3 pt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/10 to-violet-500/5 flex items-center justify-center">
              <FileText className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Ticket-Übersicht</CardTitle>
              <CardDescription className="text-xs">Alle Ihre Tickets auf einen Blick</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          {tickets.length === 0 ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center">
                <Ticket className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Keine Tickets vorhanden</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  onClick={() => handleOpenTicket(ticket)}
                  className="p-4 rounded-xl bg-muted/30 border border-muted hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                        ticket.status === "offen" && "bg-gradient-to-br from-amber-500/20 to-amber-500/10",
                        ticket.status === "bearbeitung" && "bg-gradient-to-br from-primary/20 to-primary/10",
                        ticket.status === "geschlossen" && "bg-gradient-to-br from-secondary/20 to-secondary/10"
                      )}>
                        <Ticket className={cn(
                          "w-5 h-5",
                          ticket.status === "offen" && "text-amber-500",
                          ticket.status === "bearbeitung" && "text-primary",
                          ticket.status === "geschlossen" && "text-secondary"
                        )} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{ticket.subject}</h3>
                        <p className="text-xs text-muted-foreground">Erstellt am {ticket.date} • {ticket.messages.length} Nachrichten</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={cn(
                        "px-2 py-1 text-xs font-medium rounded-md border-0",
                        ticket.priority === "hoch" && "bg-destructive/20 text-destructive",
                        ticket.priority === "mittel" && "bg-amber-500/20 text-amber-600",
                        ticket.priority === "niedrig" && "bg-secondary/20 text-secondary"
                      )}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </Badge>
                      <Badge className={cn(
                        "px-2 py-1 text-xs font-medium rounded-md border-0",
                        ticket.status === "offen" && "bg-amber-500/20 text-amber-600",
                        ticket.status === "bearbeitung" && "bg-primary/20 text-primary",
                        ticket.status === "geschlossen" && "bg-secondary/20 text-secondary"
                      )}>
                        {ticket.status === "offen" ? "Offen" : ticket.status === "bearbeitung" ? "In Bearbeitung" : "Geschlossen"}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Ticket Detail Dialog */}
      <Dialog open={ticketDetailOpen} onOpenChange={setTicketDetailOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader className="pb-4 border-b border-border/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  selectedTicket?.status === "offen" && "bg-gradient-to-br from-amber-500/20 to-amber-500/10",
                  selectedTicket?.status === "bearbeitung" && "bg-gradient-to-br from-primary/20 to-primary/10",
                  selectedTicket?.status === "geschlossen" && "bg-gradient-to-br from-secondary/20 to-secondary/10"
                )}>
                  <Ticket className={cn(
                    "w-6 h-6",
                    selectedTicket?.status === "offen" && "text-amber-500",
                    selectedTicket?.status === "bearbeitung" && "text-primary",
                    selectedTicket?.status === "geschlossen" && "text-secondary"
                  )} />
                </div>
                <div>
                  <DialogTitle className="text-lg font-bold">{selectedTicket?.subject}</DialogTitle>
                  <DialogDescription className="text-xs mt-1">
                    Ticket #{selectedTicket?.id} • Erstellt am {selectedTicket?.date}
                  </DialogDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={cn(
                  "px-2 py-1 text-xs font-medium rounded-md border-0",
                  selectedTicket?.priority === "hoch" && "bg-destructive/20 text-destructive",
                  selectedTicket?.priority === "mittel" && "bg-amber-500/20 text-amber-600",
                  selectedTicket?.priority === "niedrig" && "bg-secondary/20 text-secondary"
                )}>
                  {selectedTicket?.priority && selectedTicket.priority.charAt(0).toUpperCase() + selectedTicket.priority.slice(1)}
                </Badge>
                <Badge className={cn(
                  "px-2 py-1 text-xs font-medium rounded-md border-0",
                  selectedTicket?.status === "offen" && "bg-amber-500/20 text-amber-600",
                  selectedTicket?.status === "bearbeitung" && "bg-primary/20 text-primary",
                  selectedTicket?.status === "geschlossen" && "bg-secondary/20 text-secondary"
                )}>
                  {selectedTicket?.status === "offen" ? "Offen" : selectedTicket?.status === "bearbeitung" ? "In Bearbeitung" : "Geschlossen"}
                </Badge>
              </div>
            </div>
          </DialogHeader>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 min-h-[300px]">
            {selectedTicket?.messages.map((message, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3",
                  message.sender === "user" 
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-md" 
                    : "bg-muted/50 border border-border/50 rounded-bl-md"
                )}>
                  <p className="text-sm">{message.text}</p>
                  <p className={cn(
                    "text-[10px] mt-1",
                    message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    {message.sender === "user" ? "Sie" : "Support"} • {message.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Input */}
          {selectedTicket?.status !== "geschlossen" && (
            <div className="pt-4 border-t border-border/50">
              <div className="flex gap-3">
                <Textarea 
                  value={newTicketMessage}
                  onChange={(e) => setNewTicketMessage(e.target.value)}
                  placeholder="Ihre Antwort eingeben..."
                  className="min-h-[60px] bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-xl resize-none"
                />
                <Button 
                  onClick={handleSendTicketMessage}
                  disabled={!newTicketMessage.trim()}
                  className="px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-5">
      <div className="relative">
        <h1 className="text-2xl font-bold text-foreground relative">Einstellungen</h1>
        <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie Ihre Kontoeinstellungen</p>
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

      {/* Notifications */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-3 pt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Benachrichtigungen</CardTitle>
              <CardDescription className="text-xs">Benachrichtigungseinstellungen konfigurieren</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-muted">
            <div className="flex-1">
              <p className="font-semibold text-sm text-foreground">Statusänderungen per E-Mail erhalten</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Benachrichtigungen über Updates zu Ihren Buchungen
              </p>
            </div>
            <Switch 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications}
              className="data-[state=checked]:bg-primary"
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button size="sm" className="px-6 h-9 bg-primary hover:bg-primary/90 text-sm font-medium rounded-lg text-primary-foreground">
              Speichern
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
        <CardHeader className="pb-3 pt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Passwort ändern</CardTitle>
              <CardDescription className="text-xs">Aktualisieren Sie Ihr Passwort</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 px-4 pb-4">
          <div className="space-y-1">
            <Label className="text-xs font-semibold">Aktuelles Passwort</Label>
            <div className="relative">
              <Input 
                type={showCurrentPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-semibold">Neues Passwort</Label>
            <div className="relative">
              <Input 
                type={showNewPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-semibold">Passwort bestätigen</Label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <Button size="sm" className="px-6 h-9 bg-primary hover:bg-primary/90 text-sm font-medium rounded-lg text-primary-foreground">
              Passwort ändern
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAdminHeader = () => (
    <header className="h-16 bg-gradient-to-r from-card via-card to-muted/30 border-b border-border/50 flex items-center px-6 sticky top-0 z-50 backdrop-blur-xl">
      {/* Left side - Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground relative z-10" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-none" style={{ fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: '-0.03em' }}>
              katew
            </span>
            <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.2em]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Partner Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Suchen..." 
            className="w-80 h-10 pl-11 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/30 rounded-xl text-sm relative"
          />
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">{/* Help */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/60 transition-all duration-200">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 rounded-xl border-border/50 shadow-elevated p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Hilfe & Kontakt</p>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">support@katew.de</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">+49 30 1234567</span>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/60 transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-xl border-border/50 shadow-2xl">
            <div className="p-4 border-b border-border/50 bg-gradient-to-r from-muted/50 to-transparent">
              <h4 className="font-bold text-sm">Benachrichtigungen</h4>
              <p className="text-xs text-muted-foreground">3 ungelesene Nachrichten</p>
            </div>
            <div className="py-2 max-h-80 overflow-y-auto">
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Neue Buchungsbestätigung</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Transport #1234 wurde bestätigt</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 10 Minuten</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Transport abgeschlossen</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Fahrt nach München erfolgreich</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 2 Stunden</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Ticket-Antwort</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Support hat geantwortet</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 1 Tag</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary font-medium cursor-pointer py-3">
              Alle Benachrichtigungen anzeigen
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="h-8 mx-2" />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 gap-3 px-3 hover:bg-muted/60 rounded-xl transition-all duration-200">
              <div className="relative">
                <Avatar className="w-8 h-8 border-2 border-primary/20 ring-2 ring-primary/10">
                  <AvatarImage src={profileImage || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold">
                    DL
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border-2 border-card" />
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-semibold">Dino Lalic</span>
                <span className="text-[10px] text-muted-foreground">Partner</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 rounded-xl border-border/50 shadow-2xl">
            <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={profileImage || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                    DL
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">Dino Lalic</p>
                  <p className="text-xs text-muted-foreground">AVYTA Pflegegesellschaft</p>
                  <Badge className="mt-1 text-[9px] bg-secondary/20 text-secondary border-0 px-2">Verifiziert</Badge>
                </div>
              </div>
            </div>
            <div className="py-2">
              <DropdownMenuItem onClick={() => window.location.href = "/"} className="cursor-pointer py-3 px-4">
                <Home className="w-4 h-4 mr-3" />
                Start
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveNav("profil")} className="cursor-pointer py-3 px-4">
                <User className="w-4 h-4 mr-3" />
                Mein Profil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveNav("einstellungen")} className="cursor-pointer py-3 px-4">
                <Settings className="w-4 h-4 mr-3" />
                Einstellungen
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-3 px-4">
                <MessageSquare className="w-4 h-4 mr-3" />
                Support kontaktieren
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = "/"} className="text-destructive cursor-pointer py-3 px-4">
              <LogOut className="w-4 h-4 mr-3" />
              Abmelden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );

  return (
    <>
      <AGBAcceptanceModal open={showAGBModal} onAccept={handleAGBAccept} />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex flex-col">
        {renderAdminHeader()}
        
        <div className="flex flex-1">
          {renderSidebar()}
          
          <main className="flex-1 p-6 max-w-5xl overflow-y-auto">
            {activeNav === "uebersicht" && renderOverview()}
            {activeNav === "profil" && renderProfile()}
            {activeNav === "buchungen" && renderBookings()}
            {activeNav === "tickets" && renderTickets()}
            {activeNav === "einstellungen" && renderSettings()}
          </main>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
