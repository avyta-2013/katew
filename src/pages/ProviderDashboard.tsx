import { useState, useRef, useEffect } from "react";
import { 
  User, Calendar, Settings, LogOut, Bell, Lock, Eye, EyeOff, Building2, Phone, Mail, MapPin, 
  CalendarDays, CheckCircle2, XCircle, Clock, LayoutDashboard, TrendingUp, Camera, Upload, 
  ArrowUpRight, Truck, Route, Timer, Star, FileText, MoreHorizontal, Trophy, MessageSquare,
  MapPinned, Bookmark, BarChart3, PieChart, Euro, ClipboardList, Activity, Users, Zap, Target,
  AlertCircle, ChevronRight, ChevronLeft, Filter, Search, Download, RefreshCw, Accessibility, Armchair, BedDouble, Ticket, Plus, HelpCircle, Home,
  Crown, Gift, CreditCard, Check, AlertTriangle, Sparkles, CalendarX
} from "lucide-react";
import AGBAcceptanceModal from "@/components/AGBAcceptanceModal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";

type NavItem = "uebersicht" | "profil" | "buchungen" | "aktivitaeten" | "bewertungen" | "einstellungen" | "tickets";

const ProviderDashboard = () => {
  const [activeNav, setActiveNav] = useState<NavItem>("uebersicht");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [whatsappNotifications, setWhatsappNotifications] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<typeof bookings.offen[0] | null>(null);
  const [bookingTab, setBookingTab] = useState<"transport" | "klient">("transport");
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingPage, setBookingPage] = useState(1);
  const BOOKINGS_PER_PAGE = 10;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // AGB Acceptance state
  const [showAGBModal, setShowAGBModal] = useState(false);
  const [agbAccepted, setAgbAccepted] = useState(false);

  // Check if AGB was already accepted (simulated with localStorage for demo)
  useEffect(() => {
    const accepted = localStorage.getItem("provider_agb_accepted");
    if (accepted === "true") {
      setAgbAccepted(true);
    } else {
      setShowAGBModal(true);
    }
  }, []);

  const handleAGBAccept = () => {
    localStorage.setItem("provider_agb_accepted", "true");
    setAgbAccepted(true);
    setShowAGBModal(false);
  };

  // Tickets state
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Abrechnung Buchung #1189", status: "offen", date: "12.01.2026", priority: "hoch", description: "Frage zur Abrechnung der Buchung #1189 - Kilometerberechnung scheint nicht korrekt.", messages: [
      { sender: "user", text: "Die Kilometerberechnung für Buchung #1189 stimmt nicht. Es waren 45km, nicht 32km.", date: "12.01.2026 08:45" },
      { sender: "support", text: "Wir prüfen die Route und melden uns zeitnah.", date: "12.01.2026 09:30" }
    ]},
    { id: 2, subject: "Frage zu Transportschein", status: "bearbeitung", date: "10.01.2026", priority: "mittel", description: "Benötige Informationen zum digitalen Transportschein-Upload.", messages: [
      { sender: "user", text: "Wie kann ich Transportscheine digital hochladen?", date: "10.01.2026 11:00" },
      { sender: "support", text: "Im Profil-Bereich finden Sie unter 'Dokumente' die Upload-Funktion.", date: "10.01.2026 12:15" },
      { sender: "user", text: "Perfekt, danke!", date: "10.01.2026 12:30" }
    ]},
  ]);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketDescription, setNewTicketDescription] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("mittel");
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null);
  const [ticketDetailOpen, setTicketDetailOpen] = useState(false);
  const [newTicketMessage, setNewTicketMessage] = useState("");

  // Membership state
  const [membershipStatus] = useState<"trial" | "active" | "cancelled">("active");
  const [currentPlan, setCurrentPlan] = useState<"free" | "premium">("premium");
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showChangePlanDialog, setShowChangePlanDialog] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [editingPaymentMethod, setEditingPaymentMethod] = useState<"card" | "sepa" | null>(null);
  const [editingPaymentId, setEditingPaymentId] = useState<number | null>(null);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "card" as const, label: "Kreditkarte", last4: "4242", brand: "Visa", expiry: "12/27", cardNumber: "•••• •••• •••• 4242", cardName: "Max Mustermann", isDefault: true },
    { id: 2, type: "sepa" as const, label: "SEPA-Lastschrift", iban: "DE89 3704 0044 0532 0130 00", bank: "Deutsche Bank", accountHolder: "MediTrans GmbH", isDefault: false },
  ]);
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardExpiry, setNewCardExpiry] = useState("");
  const [newCardCvc, setNewCardCvc] = useState("");
  const [newCardName, setNewCardName] = useState("");
  const [newIban, setNewIban] = useState("");
  const [newAccountHolder, setNewAccountHolder] = useState("");

  const navItems = [
    { id: "uebersicht" as NavItem, label: "Übersicht", icon: LayoutDashboard },
    { id: "profil" as NavItem, label: "Profil", icon: User },
    { id: "buchungen" as NavItem, label: "Buchungen", icon: Bookmark },
    { id: "aktivitaeten" as NavItem, label: "Aktivitäten", icon: Activity },
    { id: "bewertungen" as NavItem, label: "Bewertungen", icon: Star },
    { id: "einstellungen" as NavItem, label: "Einstellungen", icon: Settings },
    { id: "tickets" as NavItem, label: "Meine Tickets", icon: FileText },
  ];

  // Chart data
  const weeklyBookings = [
    { day: "Mo", buchungen: 12, umsatz: 1200 },
    { day: "Di", buchungen: 18, umsatz: 1800 },
    { day: "Mi", buchungen: 9, umsatz: 900 },
    { day: "Do", buchungen: 24, umsatz: 2400 },
    { day: "Fr", buchungen: 15, umsatz: 1500 },
    { day: "Sa", buchungen: 6, umsatz: 600 },
    { day: "So", buchungen: 3, umsatz: 300 },
  ];

  const monthlyTrend = [
    { month: "Jan", buchungen: 65 },
    { month: "Feb", buchungen: 78 },
    { month: "Mar", buchungen: 92 },
    { month: "Apr", buchungen: 85 },
    { month: "Mai", buchungen: 110 },
    { month: "Jun", buchungen: 125 },
  ];

  const bookingTypes = [
    { name: "Transportschein", value: 65, color: "hsl(var(--primary))" },
    { name: "Selbstzahler", value: 25, color: "hsl(var(--secondary))" },
    { name: "Ausschreibungen", value: 10, color: "hsl(45, 93%, 47%)" },
  ];

  // Mock bookings data
  const bookings = {
    offen: [
      { id: 1, pickup: "18.01.2026 10:30", from: "36 Fulda, Germany", to: "Frankfurt Am Main, Germany", kostentraeger: "Transportschein", preis: "0€", status: "offen", patient: "M. Schmidt" },
      { id: 2, pickup: "20.01.2026 14:00", from: "Kassel, Germany", to: "Marburg, Germany", kostentraeger: "Selbstzahler", preis: "85€", status: "offen", patient: "A. Weber" },
      { id: 5, pickup: "21.01.2026 09:15", from: "Gießen, Germany", to: "Frankfurt, Germany", kostentraeger: "Transportschein", preis: "0€", status: "offen", patient: "K. Müller" },
    ],
    bestaetigt: [
      { id: 3, pickup: "15.01.2026 09:00", from: "Wiesbaden, Germany", to: "Mainz, Germany", kostentraeger: "Transportschein", preis: "0€", status: "bestaetigt", patient: "H. Fischer" },
    ],
    storniert: [
      { id: 4, pickup: "10.01.2026 11:30", from: "Darmstadt, Germany", to: "Frankfurt, Germany", kostentraeger: "Selbstzahler", preis: "45€", status: "storniert", patient: "L. Becker" },
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
    monthlyRevenue: 12450,
    completionRate: 94,
  };

  // Activities
  const activities = [
    { id: 1, message: "Neue Buchung eingegangen", detail: "Transport nach Frankfurt", time: "vor 2 Stunden", type: "booking" },
    { id: 2, message: "Buchungsbestätigung vom Kunden", detail: "Buchung #1234 bestätigt", time: "vor 4 Stunden", type: "confirmed" },
    { id: 3, message: "Die Buchung wurde vom Kunden abgelehnt", detail: "Buchung #1189 storniert", time: "vor 1 Tag", type: "cancelled" },
    { id: 4, message: "Neue Bewertung erhalten", detail: "5 Sterne von Max M.", time: "vor 2 Tagen", type: "rating" },
    { id: 5, message: "Zahlung eingegangen", detail: "85€ für Buchung #1201", time: "vor 3 Tagen", type: "payment" },
  ];

  // Ratings
  const ratings = [
    { id: 1, client: "Max Mustermann", rating: 5, comment: "Sehr pünktlich und freundlich! Der Fahrer war äußerst hilfsbereit.", date: "12.01.2026" },
    { id: 2, client: "Anna Schmidt", rating: 4, comment: "Guter Service, kann ich empfehlen. Kleine Verspätung aber insgesamt zufrieden.", date: "10.01.2026" },
    { id: 3, client: "Peter Weber", rating: 5, comment: "Professioneller Transport. Alles perfekt organisiert.", date: "08.01.2026" },
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
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
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
                  ? "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-lg shadow-secondary/25"
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
              {item.id === "buchungen" && kpiData.offeneBuchungen > 0 && (
                <Badge className="ml-auto text-[10px] h-5 px-1.5 bg-destructive text-destructive-foreground border-0 shadow-md">
                  {kpiData.offeneBuchungen}
                </Badge>
              )}
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
          Willkommen zurück, <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">MediTrans</span>! 🚑
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">Hier ist Ihre aktuelle Dashboard-Übersicht für heute.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Open Bookings */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Offene Buchungen</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.offeneBuchungen}</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-medium bg-amber-500/10 px-1.5 py-0.5 rounded-full">
                    <AlertCircle className="w-3 h-3" />
                    <span>Warten auf Bestätigung</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-500/70 flex items-center justify-center shadow-md">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Revenue */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Monatsumsatz</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.monthlyRevenue.toLocaleString()}€</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-secondary text-xs font-medium bg-secondary/10 px-1.5 py-0.5 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+18% zum Vormonat</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-md">
                <Euro className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erfolgsrate */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Erfolgsrate</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.completionRate}%</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-1.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Abgeschlossen</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/30 overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Durchschnittsbewertung</p>
                <p className="text-2xl font-bold text-foreground mt-1">{kpiData.avgRating} <span className="text-sm font-normal text-muted-foreground">/ 5</span></p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className={cn("w-3 h-3", i <= Math.floor(kpiData.avgRating) ? "fill-amber-400 text-amber-400" : "text-muted")} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1">({kpiData.totalRatings})</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500/70 flex items-center justify-center shadow-md">
                <Trophy className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        {/* Area Chart */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold">Buchungstrend</CardTitle>
                <CardDescription className="text-xs mt-0.5">Letzte 6 Monate</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-xs gap-1 h-8">
                <Download className="w-3 h-3" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrend}>
                  <defs>
                    <linearGradient id="colorBuchungen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px"
                    }} 
                  />
                  <Area type="monotone" dataKey="buchungen" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorBuchungen)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base font-bold">Buchungsarten</CardTitle>
            <CardDescription className="text-xs mt-0.5">Verteilung nach Typ</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex flex-col items-center">
              <div className="h-36 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={bookingTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={3}
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
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {bookingTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: type.color }} />
                    <span className="text-[10px] text-muted-foreground">{type.name} ({type.value}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Open Bookings Table */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold">Offene Buchungen</CardTitle>
                <CardDescription className="text-xs mt-0.5">Warten auf Ihre Bestätigung</CardDescription>
              </div>
              <Button size="sm" variant="outline" className="text-xs h-8" onClick={() => setActiveNav("buchungen")}>
                Alle anzeigen
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-2">
              {bookings.offen.slice(0, 3).map((booking) => (
                <div key={booking.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{booking.from.split(",")[0]} → {booking.to.split(",")[0]}</p>
                    <p className="text-xs text-muted-foreground">{booking.pickup} • {booking.patient}</p>
                  </div>
                  <Badge className="bg-amber-500/20 text-amber-600 border-0 text-[10px]">
                    {booking.kostentraeger}
                  </Badge>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold">Letzte Aktivitäten</CardTitle>
                <CardDescription className="text-xs mt-0.5">Ihre neuesten Updates</CardDescription>
              </div>
              <Button size="sm" variant="outline" className="text-xs h-8" onClick={() => setActiveNav("aktivitaeten")}>
                Alle anzeigen
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-2">
              {activities.slice(0, 4).map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-all duration-200 cursor-pointer"
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    activity.type === "booking" && "bg-primary/15",
                    activity.type === "confirmed" && "bg-secondary/15",
                    activity.type === "cancelled" && "bg-destructive/15",
                    activity.type === "rating" && "bg-amber-500/15",
                    activity.type === "payment" && "bg-secondary/15"
                  )}>
                    {activity.type === "booking" && <Truck className="w-4 h-4 text-primary" />}
                    {activity.type === "confirmed" && <CheckCircle2 className="w-4 h-4 text-secondary" />}
                    {activity.type === "cancelled" && <XCircle className="w-4 h-4 text-destructive" />}
                    {activity.type === "rating" && <Star className="w-4 h-4 text-amber-500" />}
                    {activity.type === "payment" && <Euro className="w-4 h-4 text-secondary" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xs text-foreground">{activity.message}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{activity.detail}</p>
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
        <h1 className="text-2xl font-bold text-foreground relative">Unternehmensprofil</h1>
        <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie Ihre Unternehmensdaten und Standorte</p>
      </div>

      {/* Profile Completion Card */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
        <CardContent className="px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            {/* Left: Progress Circle */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90 absolute">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-muted/30"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#progressGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${65 * 2.51} ${100 * 2.51}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center z-10">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">65%</span>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-foreground">Profil-Vervollständigung</h3>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs font-medium">
                  In Bearbeitung
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Vervollständigen Sie Ihr Profil zu 100%, um freigeschaltet zu werden und Buchungsanfragen zu erhalten.
              </p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '65%' }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">7 von 12 Feldern ausgefüllt</span>
                  <span className="font-medium text-foreground">Noch 35% bis zur Freischaltung</span>
                </div>
              </div>

              {/* Missing Fields */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Fehlend:</span>
                {['Telefax', 'Transportart', 'Transportmittel', 'Tarife', 'Logo'].map((field) => (
                  <Badge key={field} variant="outline" className="bg-destructive/5 text-destructive border-destructive/20 text-[10px] font-medium">
                    {field}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Status Icon */}
            <div className="hidden lg:flex flex-col items-center gap-2 px-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-amber-500" />
              </div>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Nicht aktiv</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="stammdaten" className="w-full">
        <TabsList className="bg-muted/30 p-1 h-11 rounded-xl border border-muted w-fit">
          <TabsTrigger 
            value="stammdaten" 
            className="h-8 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium px-4 text-sm"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Stammdaten
          </TabsTrigger>
          <TabsTrigger 
            value="standort" 
            className="h-8 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium px-4 text-sm"
          >
            <MapPinned className="w-4 h-4 mr-2" />
            Standort
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stammdaten" className="mt-5 space-y-5">
          {/* Unternehmen Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
            <CardHeader className="pb-4 pt-5 px-6 border-b border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Unternehmen</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Ihre Unternehmensdaten</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-5 space-y-5">
              {/* Unternehmensname - Full Width */}
              <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Unternehmensname <span className="text-destructive">*</span></Label>
                <Input 
                  defaultValue="MediTrans GmbH" 
                  className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                />
              </div>

              {/* Two Column Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Vorname <span className="text-destructive">*</span></Label>
                  <Input 
                    defaultValue="Thomas" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Nachname <span className="text-destructive">*</span></Label>
                  <Input 
                    defaultValue="Müller" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Straße <span className="text-destructive">*</span></Label>
                  <Input 
                    defaultValue="Hauptstraße 123" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Postleitzahl <span className="text-destructive">*</span></Label>
                  <Input 
                    defaultValue="60311" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Stadt <span className="text-destructive">*</span></Label>
                  <Input 
                    defaultValue="Frankfurt am Main" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Amtsgericht</Label>
                  <Input 
                    defaultValue="Frankfurt am Main" 
                    className="mt-2 h-11 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
            <CardHeader className="pb-4 pt-5 px-6 border-b border-border/30 bg-gradient-to-r from-secondary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Kontakt</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Ihre Erreichbarkeiten</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-5 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-3.5 h-3.5 text-secondary" />
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Telefon <span className="text-destructive">*</span></Label>
                  </div>
                  <Input 
                    type="tel"
                    defaultValue="+49 69 12345678" 
                    className="h-11 bg-background/80 border border-border/50 focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Telefax</Label>
                  </div>
                  <Input 
                    type="tel"
                    defaultValue="+49 69 12345679" 
                    className="h-11 bg-background/80 border border-border/50 focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-secondary" />
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Mobil/WhatsApp <span className="text-destructive">*</span></Label>
                  </div>
                  <Input 
                    type="tel"
                    defaultValue="+49 170 1234567" 
                    className="h-11 bg-background/80 border border-border/50 focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
                <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-3.5 h-3.5 text-secondary" />
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Email <span className="text-destructive">*</span></Label>
                  </div>
                  <Input 
                    type="email"
                    defaultValue="info@meditrans.de" 
                    className="h-11 bg-background/80 border border-border/50 focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary/20 rounded-lg text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button size="lg" className="px-8 h-11 bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="standort" className="mt-5 space-y-5">
          {/* Katalog & Standort Combined Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
            <CardHeader className="pb-4 pt-5 px-6 border-b border-border/30 bg-gradient-to-r from-amber-500/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shadow-sm">
                  <ClipboardList className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Katalog & Standort</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Dienstleistungskonfiguration und Einsatzgebiet</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-5 space-y-6">
              {/* Katalog Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Dienstleistung
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-orange-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-3.5 h-3.5 text-amber-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Anbieter <span className="text-destructive">*</span></Label>
                    </div>
                    <select className="w-full h-11 bg-background/80 border border-border/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:outline-none rounded-lg text-sm px-3 shadow-sm">
                      <option value="">Bitte wählen</option>
                      <option value="krankentransport">Krankentransport</option>
                      <option value="rettungsdienst">Rettungsdienst</option>
                      <option value="taxiunternehmen">Taxiunternehmen</option>
                      <option value="mietwagen">Mietwagen</option>
                    </select>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-orange-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Route className="w-3.5 h-3.5 text-amber-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Transportart <span className="text-destructive">*</span></Label>
                    </div>
                    <select className="w-full h-11 bg-background/80 border border-border/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:outline-none rounded-lg text-sm px-3 shadow-sm">
                      <option value="">Bitte wählen</option>
                      <option value="qualifiziert">Qualifizierter Krankentransport</option>
                      <option value="nicht-qualifiziert">Nicht-qualifizierter Transport</option>
                    </select>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-orange-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-3.5 h-3.5 text-amber-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Transportmittel <span className="text-destructive">*</span></Label>
                    </div>
                    <select className="w-full h-11 bg-background/80 border border-border/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:outline-none rounded-lg text-sm px-3 shadow-sm">
                      <option value="">Bitte wählen</option>
                      <option value="ktw">KTW (Krankentransportwagen)</option>
                      <option value="rtw">RTW (Rettungswagen)</option>
                      <option value="nef">NEF (Notarzteinsatzfahrzeug)</option>
                      <option value="taxi">Taxi/Mietwagen</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator className="bg-border/30" />

              {/* Standort Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Standort & Umkreis
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-blue-500/10 hover:to-cyan-500/5 transition-all duration-300 border border-transparent hover:border-blue-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Adresse <span className="text-destructive">*</span></Label>
                    </div>
                    <Input 
                      placeholder="Gebe hier deine Betriebssitz Start-Adresse ein"
                      defaultValue="Hauptstraße 123, 60311 Frankfurt am Main" 
                      className="h-11 bg-background/80 border border-border/50 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500/20 rounded-lg text-sm shadow-sm"
                    />
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-blue-500/10 hover:to-cyan-500/5 transition-all duration-300 border border-transparent hover:border-blue-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-3.5 h-3.5 text-blue-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Umkreis festlegen <span className="text-destructive">*</span></Label>
                    </div>
                    <div className="relative">
                      <Input 
                        type="number"
                        defaultValue="50" 
                        className="h-11 bg-background/80 border border-border/50 focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500/20 rounded-lg text-sm pr-12 shadow-sm"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">km</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tarif : Selbstzahler Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
            <CardHeader className="pb-4 pt-5 px-6 border-b border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                  <Euro className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Tarif : Selbstzahler</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Preisgestaltung für private Fahrten</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-5">
              {/* Table Header */}
              <div className="hidden md:grid md:grid-cols-[140px_1fr_1fr_1fr] gap-4 pb-3 mb-4 border-b border-border/30">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Transportart</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Grundpreis</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Inkl. Kilometer</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Preis pro km</div>
              </div>

              <div className="space-y-3">
                {/* Sitzend */}
                <div className="group grid md:grid-cols-[140px_1fr_1fr_1fr] gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Sitzend</span>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">Grundpreis <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 65,00€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">inkl. km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 10 km" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">+ € / km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 1,20€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                </div>

                {/* Rollstuhl */}
                <div className="group grid md:grid-cols-[140px_1fr_1fr_1fr] gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Accessibility className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Rollstuhl</span>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">Grundpreis <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 65,00€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">inkl. km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 10 km" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">+ € / km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 1,20€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                </div>

                {/* Tragestuhl */}
                <div className="group grid md:grid-cols-[140px_1fr_1fr_1fr] gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <Armchair className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Tragestuhl</span>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">Grundpreis <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 65,00€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">inkl. km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 10 km" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">+ € / km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 1,20€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                </div>

                {/* Liege */}
                <div className="group grid md:grid-cols-[140px_1fr_1fr_1fr] gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <BedDouble className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Liege</span>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">Grundpreis <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 65,00€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">inkl. km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 10 km" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wide md:hidden">+ € / km <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="bspw. 1,20€" 
                      className="h-10 bg-background/80 border border-border/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg text-sm text-center shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <Button size="lg" className="px-8 h-11 bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderBookingDetails = () => {
    if (!selectedBooking) return null;
    
    return (
      <div className="space-y-5">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-muted-foreground hover:text-foreground"
          onClick={() => setSelectedBooking(null)}
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
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
                  {selectedBooking.kostentraeger}
                </Badge>
                <h1 className="text-4xl font-bold text-background mb-2">
                  Buchung #{88819703 + selectedBooking.id}
                </h1>
                <p className="text-background/60 text-sm">
                  Erstellt am {selectedBooking.pickup.split(" ")[0]}
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
            onClick={() => setBookingTab("transport")}
            className={cn(
              "h-12 px-8 rounded-xl font-semibold transition-all duration-300",
              bookingTab === "transport" 
                ? "bg-foreground text-background shadow-lg" 
                : "bg-transparent text-muted-foreground hover:bg-muted/50 border border-border"
            )}
          >
            <Truck className="w-4 h-4 mr-2" />
            Transport
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
            <Lock className="w-4 h-4 mr-2" />
            Klient
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-5">
            {bookingTab === "transport" ? (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
                <CardHeader className="pb-4 pt-6 px-6 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Transport</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-3.5 h-3.5 text-primary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Datum</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">{selectedBooking.pickup.split(" ")[0]}</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Uhrzeit</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">{selectedBooking.pickup.split(" ")[1]}</p>
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

                  {/* Transport Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-amber-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-3.5 h-3.5 text-amber-600" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Transportart</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">{selectedBooking.kostentraeger}</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-blue-500/10 hover:to-blue-500/5 transition-all duration-300 border border-transparent hover:border-blue-500/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Transportmittel</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">Sitzend</p>
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-violet-500/10 hover:to-violet-500/5 transition-all duration-300 border border-transparent hover:border-violet-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <ClipboardList className="w-3.5 h-3.5 text-violet-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Grund</Label>
                    </div>
                    <p className="text-base font-semibold text-foreground">Kur- oder Rehaklinik</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 overflow-hidden">
                <CardHeader className="pb-4 pt-6 px-6 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-sm">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Klient</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  {/* Anrede & Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Anrede</Label>
                      <div className="flex gap-2 mt-3">
                        <div className="flex-1 py-2.5 px-4 rounded-xl bg-foreground text-background text-center text-sm font-semibold">
                          Herr
                        </div>
                        <div className="flex-1 py-2.5 px-4 rounded-xl bg-muted/50 text-muted-foreground text-center text-sm font-medium">
                          Frau
                        </div>
                      </div>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Vor- und Nachname</Label>
                      <p className="text-base font-semibold text-foreground mt-2">{selectedBooking.patient}</p>
                    </div>
                  </div>

                  {/* Geburtsdatum, Pflegegrad, Krankenkasse */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-3.5 h-3.5 text-primary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Geburtsdatum</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">07-11-1992</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-3.5 h-3.5 text-secondary" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Pflegegrad</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">Pflegegrad 1</p>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-amber-500/10 hover:to-amber-500/5 transition-all duration-300 border border-transparent hover:border-amber-500/20 hover:shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-3.5 h-3.5 text-amber-600" />
                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Krankenkasse</Label>
                      </div>
                      <p className="text-base font-semibold text-foreground">AOK</p>
                    </div>
                  </div>

                  {/* Kontakt */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-blue-500/10 hover:to-blue-500/5 transition-all duration-300 border border-transparent hover:border-blue-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Kontakt</Label>
                    </div>
                    <p className="text-base font-semibold text-foreground">+49 170 ****567</p>
                  </div>

                  {/* Notiz */}
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 hover:from-violet-500/10 hover:to-violet-500/5 transition-all duration-300 border border-transparent hover:border-violet-500/20 hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-3.5 h-3.5 text-violet-600" />
                      <Label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Notiz</Label>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">Rollstuhlfahrer, bitte auf barrierefreien Zugang achten. Benötigt Hilfe beim Ein- und Aussteigen.</p>
                  </div>

                  {/* Info Banner */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-amber-700 font-semibold">Datenschutzhinweis</p>
                        <p className="text-xs text-amber-600 mt-1">Vollständige Kontaktdaten werden nach Bestätigung der Buchung freigegeben.</p>
                      </div>
                    </div>
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
                  <h3 className="text-2xl font-bold text-foreground">{selectedBooking.kostentraeger}</h3>
                  <p className="text-muted-foreground text-sm mt-1">Summe: <span className="text-xl font-bold text-foreground">{selectedBooking.preis}</span></p>
                </div>
                
                {selectedBooking.status === "offen" && (
                  <>
                    <Button className="w-full h-12 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Bestätigen
                    </Button>
                    <Button variant="outline" className="w-full h-12 font-semibold rounded-xl border-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-300">
                      <XCircle className="w-5 h-5 mr-2" />
                      Ablehnen
                    </Button>
                  </>
                )}
                
                {selectedBooking.status === "bestaetigt" && (
                  <Badge className="w-full py-3 justify-center bg-secondary/20 text-secondary border-0 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Bestätigt
                  </Badge>
                )}
                
                {selectedBooking.status === "storniert" && (
                  <Badge className="w-full py-3 justify-center bg-destructive/20 text-destructive border-0 text-sm">
                    <XCircle className="w-4 h-4 mr-2" />
                    Storniert
                  </Badge>
                )}
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
                      <MessageSquare className="w-5 h-5 text-amber-600" />
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
          <div>
            <h1 className="text-2xl font-bold text-foreground">Buchungen</h1>
            <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie alle Ihre Buchungen</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buchung suchen..."
                value={bookingSearch}
                onChange={(e) => setBookingSearch(e.target.value)}
                className="pl-9 h-9 w-64 bg-background border-muted"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2 h-9">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-3">
          <Card className="border-0 shadow-md bg-gradient-to-br from-amber-500/10 to-amber-500/5 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{kpiData.offeneBuchungen}</p>
                  <p className="text-xs text-muted-foreground">Offen</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{kpiData.transportschein}</p>
                  <p className="text-xs text-muted-foreground">Transportschein</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-secondary/10 to-secondary/5 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Euro className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{kpiData.selbstzahler}</p>
                  <p className="text-xs text-muted-foreground">Selbstzahler</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-violet-500/10 to-violet-500/5 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{kpiData.ausschreibungen}</p>
                  <p className="text-xs text-muted-foreground">Ausschreibung</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Tabs */}
        <Tabs defaultValue="offen" className="w-full">
          <TabsList className="bg-muted/30 p-1 h-11 rounded-xl border border-muted">
            <TabsTrigger 
              value="offen" 
              className="h-8 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium px-6 text-sm"
            >
              Offen ({bookings.offen.length})
            </TabsTrigger>
            <TabsTrigger 
              value="bestaetigt" 
              className="h-8 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium px-6 text-sm"
            >
              Bestätigt ({bookings.bestaetigt.length})
            </TabsTrigger>
            <TabsTrigger 
              value="storniert" 
              className="h-8 rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md font-medium px-6 text-sm"
            >
              Storniert ({bookings.storniert.length})
            </TabsTrigger>
          </TabsList>

          {(["offen", "bestaetigt", "storniert"] as const).map((status) => {
            const filteredBookings = bookings[status].filter(b => 
              bookingSearch === "" || 
              b.from.toLowerCase().includes(bookingSearch.toLowerCase()) ||
              b.to.toLowerCase().includes(bookingSearch.toLowerCase()) ||
              b.patient.toLowerCase().includes(bookingSearch.toLowerCase())
            );
            const totalPages = Math.ceil(filteredBookings.length / BOOKINGS_PER_PAGE);
            const paginatedBookings = filteredBookings.slice(
              (bookingPage - 1) * BOOKINGS_PER_PAGE,
              bookingPage * BOOKINGS_PER_PAGE
            );
            
            return (
              <TabsContent key={status} value={status} className="mt-4">
                <Card className="border-0 shadow-lg bg-card overflow-hidden">
                  <CardContent className="p-0">
                    {filteredBookings.length === 0 ? (
                      <div className="py-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                          <ClipboardList className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">Keine Buchungen gefunden</p>
                      </div>
                    ) : (
                      <>
                        <div className="divide-y divide-border/50">
                          {paginatedBookings.map((booking) => (
                            <div key={booking.id} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                              <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                                <Truck className="w-6 h-6 text-muted-foreground" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-semibold text-sm text-foreground">{booking.from.split(",")[0]}</p>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                  <p className="font-semibold text-sm text-foreground">{booking.to.split(",")[0]}</p>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {booking.pickup}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {booking.patient}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge className={cn(
                                  "border-0 text-xs",
                                  booking.kostentraeger === "Transportschein" && "bg-primary/20 text-primary",
                                  booking.kostentraeger === "Selbstzahler" && "bg-secondary/20 text-secondary"
                                )}>
                                  {booking.kostentraeger}
                                </Badge>
                                <Badge className={cn(
                                  "border-0 text-xs",
                                  status === "offen" && "bg-amber-500/20 text-amber-600",
                                  status === "bestaetigt" && "bg-secondary/20 text-secondary",
                                  status === "storniert" && "bg-destructive/20 text-destructive"
                                )}>
                                  {status}
                                </Badge>
                                <Button 
                                  size="sm" 
                                  className="h-8 text-xs"
                                  onClick={() => setSelectedBooking(booking)}
                                >
                                  Details
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Pagination */}
                        {totalPages > 1 && (
                          <div className="flex items-center justify-between p-4 border-t border-border/50">
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
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    );
  };

  const renderActivities = () => (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Aktivitäten</h1>
          <p className="text-muted-foreground mt-1 text-sm">Alle Benachrichtigungen und Updates</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 h-9">
          <RefreshCw className="w-4 h-4" />
          Aktualisieren
        </Button>
      </div>

      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardContent className="p-0">
          <div className="divide-y divide-border/50">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-5 hover:bg-muted/30 transition-colors">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                  activity.type === "booking" && "bg-primary/15",
                  activity.type === "confirmed" && "bg-secondary/15",
                  activity.type === "cancelled" && "bg-destructive/15",
                  activity.type === "rating" && "bg-amber-500/15",
                  activity.type === "payment" && "bg-secondary/15"
                )}>
                  {activity.type === "booking" && <Truck className="w-5 h-5 text-primary" />}
                  {activity.type === "confirmed" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                  {activity.type === "cancelled" && <XCircle className="w-5 h-5 text-destructive" />}
                  {activity.type === "rating" && <Star className="w-5 h-5 text-amber-500" />}
                  {activity.type === "payment" && <Euro className="w-5 h-5 text-secondary" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{activity.message}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{activity.detail}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRatings = () => (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Bewertungen</h1>
        <p className="text-muted-foreground mt-1 text-sm">Kundenfeedback und Bewertungen</p>
      </div>

      {/* Rating Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500/10 to-amber-500/5 overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                <Trophy className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.avgRating}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={cn("w-4 h-4", i <= Math.floor(kpiData.avgRating) ? "fill-amber-400 text-amber-400" : "text-muted")} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.totalRatings}</p>
                <p className="text-sm text-muted-foreground">Bewertungen insgesamt</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5 overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{kpiData.completionRate}%</p>
                <p className="text-sm text-muted-foreground">Erfolgsrate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ratings List */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardHeader className="pb-3 pt-4 px-5 border-b border-border/50">
          <CardTitle className="text-base font-bold">Kundenbewertungen</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {ratings.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Noch keine Bewertungen vorhanden</p>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {ratings.map((rating) => (
                <div key={rating.id} className="p-5 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-sm font-bold">
                          {rating.client.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{rating.client}</p>
                        <p className="text-xs text-muted-foreground">{rating.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-4 h-4",
                            i < rating.rating ? "fill-amber-400 text-amber-400" : "text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-13">{rating.comment}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );


  const membershipData = {
    plan: "Premium",
    price: 49,
    nextBilling: "01.02.2026",
    startDate: "01.11.2025",
    trialEnds: "01.02.2026",
    features: [
      { name: "Transportschein-Buchungen", included: true },
      { name: "Selbstzahler-Buchungen", included: true },
      { name: "Ausschreibungen", included: true },
      { name: "24/7 Support", included: true },
      { name: "Unbegrenzte Buchungen", included: true },
      { name: "Statistiken & Berichte", included: true },
    ],
    invoices: [
      { id: "INV-2026-001", date: "01.01.2026", amount: "49,00€", status: "bezahlt" },
      { id: "INV-2025-012", date: "01.12.2025", amount: "49,00€", status: "bezahlt" },
      { id: "INV-2025-011", date: "01.11.2025", amount: "0,00€", status: "Testphase" },
    ],
  };

  const renderSettings = () => (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-muted-foreground mt-1 text-sm">Verwalten Sie Ihre Kontoeinstellungen</p>
      </div>

      <Tabs defaultValue="allgemein" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-muted/50 rounded-xl">
          <TabsTrigger value="allgemein" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md font-medium">
            <Settings className="w-4 h-4 mr-2" />
            Allgemein
          </TabsTrigger>
          <TabsTrigger value="mitgliedschaft" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md font-medium">
            <Crown className="w-4 h-4 mr-2" />
            Mitgliedschaft
          </TabsTrigger>
        </TabsList>

        {/* Allgemein Tab */}
        <TabsContent value="allgemein" className="space-y-5 mt-5">
          {/* Logo Upload Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold">Unternehmenslogo</CardTitle>
                  <CardDescription className="text-xs">Logo hochladen</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <Avatar className="w-20 h-20 border-2 border-background ring-1 ring-primary/20">
                    <AvatarImage src={profileImage || ""} />
                    <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-white text-xl font-bold">
                      MT
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
                  <CardDescription className="text-xs">Verwalten Sie Ihre Benachrichtigungseinstellungen</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-3">
              <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Neue Buchungen per E-Mail</span>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Neue Buchungen per WhatsApp</span>
                </div>
                <Switch 
                  checked={whatsappNotifications} 
                  onCheckedChange={setWhatsappNotifications}
                />
              </div>
              <div className="flex justify-end pt-2">
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
                <div className="relative max-w-md">
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
                <div className="relative max-w-md">
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
                <div className="relative max-w-md">
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
        </TabsContent>

        {/* Mitgliedschaft Tab */}
        <TabsContent value="mitgliedschaft" className="space-y-5 mt-5">
          {/* Current Plan Status */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden relative">
            <div className={cn(
              "absolute top-0 left-0 right-0 h-1",
              currentPlan === "premium" 
                ? "bg-gradient-to-r from-primary via-secondary to-primary" 
                : "bg-gradient-to-r from-muted-foreground/40 via-muted-foreground/60 to-muted-foreground/40"
            )} />
            <CardHeader className="pb-3 pt-5 px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
                    currentPlan === "premium" 
                      ? "bg-gradient-to-br from-primary to-secondary" 
                      : "bg-gradient-to-br from-muted-foreground/60 to-muted-foreground/80"
                  )}>
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg font-bold">
                        {currentPlan === "premium" ? "Premium" : "Free"} Plan
                      </CardTitle>
                      {currentPlan === "premium" ? (
                        <Badge className="px-2.5 py-1 text-xs font-bold border-0 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-sm">
                          <Crown className="w-3 h-3 mr-1" />
                          PREMIUM
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="px-2.5 py-1 text-xs font-medium border-muted-foreground/30 text-muted-foreground">
                          FREE
                        </Badge>
                      )}
                      <Badge className={cn(
                        "px-2 py-0.5 text-xs font-semibold border-0",
                        membershipStatus === "active" && "bg-secondary/20 text-secondary",
                        membershipStatus === "trial" && "bg-primary/20 text-primary",
                        membershipStatus === "cancelled" && "bg-destructive/20 text-destructive"
                      )}>
                        {membershipStatus === "active" ? "Aktiv" : membershipStatus === "trial" ? "Testphase" : "Gekündigt"}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs mt-0.5">
                      {currentPlan === "premium" 
                        ? `Mitglied seit ${membershipData.startDate}` 
                        : "Upgrade auf Premium für alle Funktionen"}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      "text-3xl font-black bg-clip-text text-transparent",
                      currentPlan === "premium" 
                        ? "bg-gradient-to-br from-primary to-secondary" 
                        : "bg-gradient-to-br from-muted-foreground to-muted-foreground"
                    )}>
                      {currentPlan === "premium" ? membershipData.price : "0"}€
                    </span>
                    <span className="text-sm text-muted-foreground">/ Monat</span>
                  </div>
                  {currentPlan === "premium" && <p className="text-xs text-muted-foreground">(netto)</p>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {/* Next Billing Info */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-muted mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Nächste Abrechnung</p>
                    <p className="text-xs text-muted-foreground">{membershipData.nextBilling}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Zahlungsmethode</p>
                    <p className="text-xs text-muted-foreground">•••• •••• •••• 4242</p>
                  </div>
                </div>
              </div>

              {/* Included Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Enthaltene Leistungen
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {membershipData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice History */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
            <CardHeader className="pb-3 pt-4 px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">Rechnungshistorie</CardTitle>
                    <CardDescription className="text-xs">Ihre bisherigen Rechnungen</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-2">
                {membershipData.invoices.map((invoice) => (
                  <div 
                    key={invoice.id} 
                    className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-muted hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{invoice.id}</p>
                        <p className="text-xs text-muted-foreground">{invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-semibold">{invoice.amount}</p>
                        <Badge className={cn(
                          "px-1.5 py-0.5 text-[10px] font-medium border-0",
                          invoice.status === "bezahlt" && "bg-secondary/20 text-secondary",
                          invoice.status === "Testphase" && "bg-primary/20 text-primary"
                        )}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
            <CardHeader className="pb-3 pt-4 px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">Zahlungsmethoden</CardTitle>
                    <CardDescription className="text-xs">Verwalten Sie Ihre Zahlungsmethoden</CardDescription>
                  </div>
                </div>
                <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Hinzufügen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        {editingPaymentId ? "Zahlungsmethode bearbeiten" : "Zahlungsmethode hinzufügen"}
                      </DialogTitle>
                      <DialogDescription>
                        {editingPaymentId 
                          ? "Aktualisieren Sie Ihre Zahlungsdaten" 
                          : "Wählen Sie eine Zahlungsart aus"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      {/* Payment Type Selection - only show when adding new */}
                      {!editingPaymentId && (
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setEditingPaymentMethod("card")}
                            className={cn(
                              "p-4 rounded-xl border-2 transition-all duration-300 text-left",
                              editingPaymentMethod === "card" 
                                ? "border-primary bg-primary/5" 
                                : "border-muted hover:border-primary/50"
                            )}
                          >
                            <CreditCard className={cn(
                              "w-6 h-6 mb-2",
                              editingPaymentMethod === "card" ? "text-primary" : "text-muted-foreground"
                            )} />
                            <p className="font-semibold text-sm">Kreditkarte</p>
                            <p className="text-xs text-muted-foreground">Visa, Mastercard, etc.</p>
                          </button>
                          <button
                            onClick={() => setEditingPaymentMethod("sepa")}
                            className={cn(
                              "p-4 rounded-xl border-2 transition-all duration-300 text-left",
                              editingPaymentMethod === "sepa" 
                                ? "border-primary bg-primary/5" 
                                : "border-muted hover:border-primary/50"
                            )}
                          >
                            <Building2 className={cn(
                              "w-6 h-6 mb-2",
                              editingPaymentMethod === "sepa" ? "text-primary" : "text-muted-foreground"
                            )} />
                            <p className="font-semibold text-sm">SEPA-Lastschrift</p>
                            <p className="text-xs text-muted-foreground">Bankeinzug</p>
                          </button>
                        </div>
                      )}

                      {/* Credit Card Form */}
                      {editingPaymentMethod === "card" && (
                        <div className="space-y-3 pt-2">
                          <div className="space-y-1">
                            <Label className="text-xs font-semibold">Karteninhaber</Label>
                            <Input 
                              value={newCardName}
                              onChange={(e) => setNewCardName(e.target.value)}
                              placeholder="Max Mustermann"
                              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                            />
                          </div>
                          {/* Only show card number field when adding new */}
                          {!editingPaymentId && (
                            <div className="space-y-1">
                              <Label className="text-xs font-semibold">Kartennummer</Label>
                              <Input 
                                value={newCardNumber}
                                onChange={(e) => setNewCardNumber(e.target.value)}
                                placeholder="1234 5678 9012 3456"
                                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                              />
                            </div>
                          )}
                          {editingPaymentId && (
                            <div className="p-3 rounded-lg bg-muted/30 border border-muted">
                              <p className="text-xs text-muted-foreground">
                                Kartennummer: •••• •••• •••• {paymentMethods.find(m => m.id === editingPaymentId)?.last4}
                              </p>
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <Label className="text-xs font-semibold">Gültig bis</Label>
                              <Input 
                                value={newCardExpiry}
                                onChange={(e) => setNewCardExpiry(e.target.value)}
                                placeholder="MM/JJ"
                                className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                              />
                            </div>
                            {/* Only show CVC when adding new */}
                            {!editingPaymentId && (
                              <div className="space-y-1">
                                <Label className="text-xs font-semibold">CVC</Label>
                                <Input 
                                  value={newCardCvc}
                                  onChange={(e) => setNewCardCvc(e.target.value)}
                                  placeholder="123"
                                  type="password"
                                  className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* SEPA Form */}
                      {editingPaymentMethod === "sepa" && (
                        <div className="space-y-3 pt-2">
                          <div className="space-y-1">
                            <Label className="text-xs font-semibold">Kontoinhaber</Label>
                            <Input 
                              value={newAccountHolder}
                              onChange={(e) => setNewAccountHolder(e.target.value)}
                              placeholder="Max Mustermann"
                              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs font-semibold">IBAN</Label>
                            <Input 
                              value={newIban}
                              onChange={(e) => setNewIban(e.target.value)}
                              placeholder="DE89 3704 0044 0532 0130 00"
                              className="h-10 bg-muted/30 border border-muted focus-visible:border-primary focus-visible:ring-0 rounded-lg text-sm"
                            />
                          </div>
                          <div className="p-3 rounded-lg bg-muted/30 border border-muted">
                            <p className="text-xs text-muted-foreground">
                              {editingPaymentId 
                                ? "Ihre aktualisierten Bankdaten werden für zukünftige Abbuchungen verwendet."
                                : "Mit dem Hinzufügen dieser Zahlungsmethode ermächtigen Sie uns, Zahlungen von Ihrem Konto einzuziehen."}
                            </p>
                          </div>
                        </div>
                      )}

                      {editingPaymentMethod && (
                        <div className="flex justify-end gap-3 pt-2">
                          <Button variant="outline" onClick={() => {
                            setShowPaymentDialog(false);
                            setEditingPaymentMethod(null);
                            setNewCardNumber("");
                            setNewCardExpiry("");
                            setNewCardCvc("");
                            setNewCardName("");
                            setNewIban("");
                            setNewAccountHolder("");
                          }}>
                            Abbrechen
                          </Button>
                          <Button 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => {
                              if (editingPaymentId) {
                                // Update existing payment method
                                setPaymentMethods(paymentMethods.map(m => {
                                  if (m.id === editingPaymentId) {
                                    if (m.type === "card") {
                                      return {
                                        ...m,
                                        expiry: newCardExpiry || m.expiry,
                                        cardName: newCardName || m.cardName,
                                      };
                                    } else {
                                      return {
                                        ...m,
                                        iban: newIban || m.iban,
                                        accountHolder: newAccountHolder || m.accountHolder,
                                      };
                                    }
                                  }
                                  return m;
                                }));
                              } else if (editingPaymentMethod === "card" && newCardNumber) {
                                const newMethod = {
                                  id: paymentMethods.length + 1,
                                  type: "card" as const,
                                  label: "Kreditkarte",
                                  last4: newCardNumber.slice(-4),
                                  brand: "Visa",
                                  expiry: newCardExpiry,
                                  cardNumber: `•••• •••• •••• ${newCardNumber.slice(-4)}`,
                                  cardName: newCardName,
                                  isDefault: false,
                                };
                                setPaymentMethods([...paymentMethods, newMethod]);
                              } else if (editingPaymentMethod === "sepa" && newIban) {
                                const newMethod = {
                                  id: paymentMethods.length + 1,
                                  type: "sepa" as const,
                                  label: "SEPA-Lastschrift",
                                  iban: newIban,
                                  bank: "Ihre Bank",
                                  accountHolder: newAccountHolder,
                                  isDefault: false,
                                };
                                setPaymentMethods([...paymentMethods, newMethod]);
                              }
                              setShowPaymentDialog(false);
                              setEditingPaymentMethod(null);
                              setEditingPaymentId(null);
                              setNewCardNumber("");
                              setNewCardExpiry("");
                              setNewCardCvc("");
                              setNewCardName("");
                              setNewIban("");
                              setNewAccountHolder("");
                            }}
                          >
                            Speichern
                          </Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id} 
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                      method.isDefault 
                        ? "bg-primary/5 border-primary/30" 
                        : "bg-muted/30 border-muted hover:border-primary/30"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        method.type === "card" ? "bg-gradient-to-br from-primary/20 to-secondary/20" : "bg-gradient-to-br from-secondary/20 to-primary/20"
                      )}>
                        {method.type === "card" ? (
                          <CreditCard className="w-6 h-6 text-primary" />
                        ) : (
                          <Building2 className="w-6 h-6 text-secondary" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm">{method.label}</p>
                          {method.isDefault && (
                            <Badge className="px-1.5 py-0.5 text-[10px] font-medium border-0 bg-primary/20 text-primary">
                              Standard
                            </Badge>
                          )}
                        </div>
                        {method.type === "card" ? (
                          <p className="text-xs text-muted-foreground">
                            {method.brand} •••• {method.last4} • Gültig bis {method.expiry}
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground">
                            {method.iban} • {method.bank}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!method.isDefault && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setPaymentMethods(paymentMethods.map(m => ({
                              ...m,
                              isDefault: m.id === method.id
                            })));
                          }}
                        >
                          Als Standard
                        </Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => {
                              setEditingPaymentId(method.id);
                              setEditingPaymentMethod(method.type);
                              if (method.type === "card") {
                                setNewCardExpiry(method.expiry || "");
                                setNewCardName(method.cardName || "");
                              } else {
                                setNewIban(method.iban || "");
                                setNewAccountHolder(method.accountHolder || "");
                              }
                              setShowPaymentDialog(true);
                            }}
                          >
                            <CreditCard className="w-4 h-4 mr-2" />
                            Bearbeiten
                          </DropdownMenuItem>
                          {!method.isDefault && (
                            <>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                className="cursor-pointer text-destructive focus:text-destructive"
                                onClick={() => {
                                  setPaymentMethods(paymentMethods.filter(m => m.id !== method.id));
                                }}
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Entfernen
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Manage Membership */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20 overflow-hidden">
            <CardHeader className="pb-3 pt-4 px-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold">Mitgliedschaft verwalten</CardTitle>
                  <CardDescription className="text-xs">Plan ändern oder kündigen</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              {/* Change Plan Section */}
              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Plan ändern</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Vergleichen Sie unsere Pläne und wählen Sie den passenden für Ihr Unternehmen.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Dialog open={showChangePlanDialog} onOpenChange={setShowChangePlanDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 border-secondary/30 hover:bg-secondary/10">
                        <Crown className="w-4 h-4" />
                        Plan vergleichen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                          <Crown className="w-5 h-5 text-secondary" />
                          Wählen Sie Ihren Plan
                        </DialogTitle>
                        <DialogDescription>
                          Vergleichen Sie unsere Pläne und wählen Sie den besten für Ihr Unternehmen.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        {/* Free Plan */}
                        <div className={cn(
                          "p-5 rounded-xl border-2 transition-all relative",
                          currentPlan === "free" 
                            ? "border-primary bg-primary/5" 
                            : "border-muted hover:border-muted-foreground/30"
                        )}>
                          {currentPlan === "free" && (
                            <Badge className="absolute -top-2.5 left-4 bg-primary text-primary-foreground text-[10px]">
                              Aktueller Plan
                            </Badge>
                          )}
                          <div className="mb-4">
                            <h3 className="text-lg font-bold">Free Plan</h3>
                            <p className="text-2xl font-bold mt-1">0€<span className="text-sm font-normal text-muted-foreground">/Monat</span></p>
                          </div>
                          <ul className="space-y-2.5 mb-6">
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              Profil sichtbar
                            </li>
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              Basis-Dashboard
                            </li>
                            <li className="text-sm flex items-center gap-2 text-muted-foreground">
                              <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                              Keine Buchungsanfragen
                            </li>
                            <li className="text-sm flex items-center gap-2 text-muted-foreground">
                              <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                              Kein Zugang zu Ausschreibungen
                            </li>
                            <li className="text-sm flex items-center gap-2 text-muted-foreground">
                              <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                              Standard-Support
                            </li>
                          </ul>
                          <Button 
                            variant={currentPlan === "free" ? "secondary" : "outline"} 
                            className="w-full"
                            disabled={currentPlan === "free"}
                            onClick={() => {
                              setShowChangePlanDialog(false);
                              setShowCancelDialog(true);
                            }}
                          >
                            {currentPlan === "free" ? "Aktueller Plan" : "Zu Free wechseln"}
                          </Button>
                        </div>

                        {/* Premium Plan */}
                        <div className={cn(
                          "p-5 rounded-xl border-2 transition-all relative",
                          currentPlan === "premium" 
                            ? "border-secondary bg-secondary/5" 
                            : "border-muted hover:border-secondary/50"
                        )}>
                          {currentPlan === "premium" && (
                            <Badge className="absolute -top-2.5 left-4 bg-secondary text-secondary-foreground text-[10px]">
                              Aktueller Plan
                            </Badge>
                          )}
                          <div className="absolute -top-2.5 right-4">
                            <Badge variant="outline" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-[10px]">
                              Empfohlen
                            </Badge>
                          </div>
                          <div className="mb-4">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                              Premium
                              <Crown className="w-4 h-4 text-secondary" />
                            </h3>
                            <p className="text-2xl font-bold mt-1">49€<span className="text-sm font-normal text-muted-foreground">/Monat</span></p>
                          </div>
                          <ul className="space-y-2.5 mb-6">
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                              Unbegrenzte Buchungsanfragen
                            </li>
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                              Zugang zu allen Ausschreibungen
                            </li>
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                              Prioritäre Anzeige im Netzwerk
                            </li>
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                              Premium-Support
                            </li>
                            <li className="text-sm flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                              Detaillierte Statistiken
                            </li>
                          </ul>
                          <Button 
                            className={cn(
                              "w-full",
                              currentPlan === "premium" 
                                ? "bg-secondary hover:bg-secondary/90" 
                                : "bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70"
                            )}
                            disabled={currentPlan === "premium"}
                            onClick={() => {
                              setCurrentPlan("premium");
                              setShowChangePlanDialog(false);
                            }}
                          >
                            {currentPlan === "premium" ? "Aktueller Plan" : "Zu Premium upgraden"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Cancel Section - Only show for Premium users */}
              {currentPlan === "premium" && (
                <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mitgliedschaft kündigen</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Bei einer Kündigung wechseln Sie zum kostenlosen Free Plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-destructive">
                          <XCircle className="w-4 h-4" />
                          Kündigen
                        </Button>
                      </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                          Wechsel zum Free Plan bestätigen
                        </DialogTitle>
                        <DialogDescription>
                          Sie wechseln von Premium (49€/Monat) zum kostenlosen Free Plan.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        {/* Comparison */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-destructive/5 border border-destructive/20">
                            <p className="text-xs font-semibold text-destructive mb-2 flex items-center gap-1.5">
                              <XCircle className="w-3.5 h-3.5" />
                              Free Plan (Kostenlos)
                            </p>
                            <ul className="space-y-1.5">
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <XCircle className="w-3 h-3 text-destructive flex-shrink-0" />
                                Keine neuen Buchungsanfragen
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <XCircle className="w-3 h-3 text-destructive flex-shrink-0" />
                                Keine Ausschreibungen
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <XCircle className="w-3 h-3 text-destructive flex-shrink-0" />
                                Kein Premium-Support
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                                Profilansicht bleibt
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 rounded-xl bg-secondary/5 border border-secondary/20">
                            <p className="text-xs font-semibold text-secondary mb-2 flex items-center gap-1.5">
                              <Crown className="w-3.5 h-3.5" />
                              Premium (Aktuell)
                            </p>
                            <ul className="space-y-1.5">
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-secondary flex-shrink-0" />
                                Unbegrenzte Buchungsanfragen
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-secondary flex-shrink-0" />
                                Zugang zu Ausschreibungen
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-secondary flex-shrink-0" />
                                Premium-Support
                              </li>
                              <li className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-secondary flex-shrink-0" />
                                Prioritäre Anzeige
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-xs text-amber-700 dark:text-amber-400">
                            <strong>Hinweis:</strong> Ihr Premium-Zugang bleibt bis zum {membershipData.nextBilling} aktiv. Danach wechseln Sie automatisch zum Free Plan.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-semibold">Warum wechseln Sie? (optional)</Label>
                          <Textarea 
                            value={cancelReason}
                            onChange={(e) => setCancelReason(e.target.value)}
                            placeholder="Ihr Feedback hilft uns, besser zu werden..."
                            className="min-h-20 bg-muted/30 border border-muted focus-visible:border-destructive focus-visible:ring-0 rounded-lg resize-none"
                          />
                        </div>
                        <div className="flex justify-end gap-3 pt-2">
                          <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
                            Premium behalten
                          </Button>
                          <Button 
                            variant="destructive" 
                            onClick={() => {
                              setCurrentPlan("free");
                              setShowCancelDialog(false);
                            }}
                          >
                            Zum Free Plan wechseln
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
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
                        <RadioGroupItem value={option.value} id={`provider-priority-${option.value}`} className="peer sr-only" />
                        <Label 
                          htmlFor={`provider-priority-${option.value}`} 
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
              <Ticket className="w-5 h-5 text-violet-500" />
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
                  className="p-4 rounded-xl bg-muted/30 border border-muted hover:border-secondary/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
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
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors">{ticket.subject}</h3>
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
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
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
                    ? "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-br-md" 
                    : "bg-muted/50 border border-border/50 rounded-bl-md"
                )}>
                  <p className="text-sm">{message.text}</p>
                  <p className={cn(
                    "text-[10px] mt-1",
                    message.sender === "user" ? "text-secondary-foreground/70" : "text-muted-foreground"
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
                  className="min-h-[60px] bg-muted/30 border border-muted focus-visible:border-secondary focus-visible:ring-0 rounded-xl resize-none"
                />
                <Button 
                  onClick={handleSendTicketMessage}
                  disabled={!newTicketMessage.trim()}
                  className="px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
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
              Anbieter Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-secondary transition-colors" />
          <Input 
            placeholder="Suchen..." 
            className="w-80 h-10 pl-11 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-secondary/30 rounded-xl text-sm relative"
          />
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        {/* Help */}
        <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/60 transition-all duration-200">
          <HelpCircle className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/60 transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                5
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-xl border-border/50 shadow-2xl">
            <div className="p-4 border-b border-border/50 bg-gradient-to-r from-muted/50 to-transparent">
              <h4 className="font-bold text-sm">Benachrichtigungen</h4>
              <p className="text-xs text-muted-foreground">5 ungelesene Nachrichten</p>
            </div>
            <div className="py-2 max-h-80 overflow-y-auto">
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Neue Buchungsanfrage</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Transport nach Hamburg angefragt</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 5 Minuten</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Neue Bewertung erhalten</p>
                  <p className="text-xs text-muted-foreground mt-0.5">5 Sterne von Max M.</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 1 Stunde</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Ticket-Antwort</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Support hat geantwortet</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Vor 2 Stunden</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-secondary font-medium cursor-pointer py-3">
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
                <Avatar className="w-8 h-8 border-2 border-secondary/20 ring-2 ring-secondary/10">
                  <AvatarImage src={profileImage || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-white text-xs font-bold">
                    MT
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border-2 border-card" />
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-semibold">MediTrans GmbH</span>
                <span className="text-[10px] text-muted-foreground">Anbieter</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 rounded-xl border-border/50 shadow-2xl">
            <div className="p-4 border-b border-border/50 bg-gradient-to-r from-secondary/5 to-primary/5">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-secondary/20">
                  <AvatarImage src={profileImage || ""} />
                  <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-white font-bold">
                    MT
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">MediTrans GmbH</p>
                  <p className="text-xs text-muted-foreground">Krankentransport-Anbieter</p>
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
                Unternehmensprofil
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
            {activeNav === "aktivitaeten" && renderActivities()}
            {activeNav === "bewertungen" && renderRatings()}
            {activeNav === "einstellungen" && renderSettings()}
            {activeNav === "tickets" && renderTickets()}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
