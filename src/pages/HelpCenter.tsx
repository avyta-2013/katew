import { useState } from "react";
import { 
  Search, 
  BookOpen, 
  FileText, 
  MessageCircle, 
  Phone,
  Mail,
  ChevronRight,
  HelpCircle,
  Users,
  Truck,
  CreditCard,
  Shield,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp,
  Star,
  Play,
  CheckCircle2,
  Headphones,
  Video,
  Newspaper,
  CircleHelp,
  X,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronLeft,
  Eye,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Types for popup content
type ArticleType = {
  title: string;
  excerpt: string;
  readTime: string;
  views: string;
  category: string;
  date: string;
};

type VideoType = {
  title: string;
  duration: string;
  description: string;
  views: string;
  category: string;
};

type QuestionType = {
  question: string;
  answer: string;
  helpful: number;
  category: string;
};

// Quick links for fast navigation
const quickLinks = [
  { label: "Erste Schritte", icon: Zap },
  { label: "Buchungen", icon: BookOpen },
  { label: "Abrechnung", icon: CreditCard },
  { label: "Account", icon: Users },
];

// Für Anbieter Kategorien
const anbieterCategories = [
  {
    icon: Truck,
    title: "Registrierung & Onboarding",
    description: "So werden Sie Teil unseres Netzwerks",
    articles: 8,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: CreditCard,
    title: "Abrechnung & Provisionen",
    description: "Informationen zu Zahlungen und Abrechnungsmodellen",
    articles: 6,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Qualitätsstandards",
    description: "Anforderungen und Zertifizierungen für Anbieter",
    articles: 5,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Clock,
    title: "Fahrten & Aufträge",
    description: "Auftragsmanagement und Durchführung",
    articles: 10,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "bg-violet-500/20",
  },
];

// Für Partner Kategorien
const partnerCategories = [
  {
    icon: Users,
    title: "Konto & Verwaltung",
    description: "Accounteinrichtung und Nutzerverwaltung",
    articles: 7,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: Truck,
    title: "Buchung & Transport",
    description: "So buchen Sie Krankenfahrten für Ihre Patienten",
    articles: 12,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "Kosten & Abrechnung",
    description: "Kostenübernahme und Rechnungsstellung",
    articles: 8,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Shield,
    title: "Datenschutz & Sicherheit",
    description: "Wie wir Patientendaten schützen",
    articles: 5,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "bg-violet-500/20",
  },
];

const anbieterArticles = [
  {
    title: "Wie registriere ich mich als Anbieter?",
    category: "Registrierung",
    views: "2.4k",
    readTime: "5 min",
    trending: true,
  },
  {
    title: "Welche Anforderungen muss ich erfüllen?",
    category: "Qualitätsstandards",
    views: "1.8k",
    readTime: "8 min",
    trending: false,
  },
  {
    title: "Wie funktioniert die Abrechnung?",
    category: "Abrechnung",
    views: "1.5k",
    readTime: "6 min",
    trending: true,
  },
  {
    title: "Aufträge annehmen und verwalten",
    category: "Fahrten & Aufträge",
    views: "1.2k",
    readTime: "4 min",
    trending: false,
  },
  {
    title: "Fahrzeugflotte optimal einsetzen",
    category: "Fahrten & Aufträge",
    views: "980",
    readTime: "7 min",
    trending: false,
  },
];

const partnerArticles = [
  {
    title: "Wie buche ich eine Krankenfahrt?",
    category: "Buchung",
    views: "3.1k",
    readTime: "3 min",
    trending: true,
  },
  {
    title: "Kostenübernahme durch die Krankenkasse",
    category: "Kosten",
    views: "2.5k",
    readTime: "5 min",
    trending: true,
  },
  {
    title: "Partner-Konto einrichten",
    category: "Konto",
    views: "1.8k",
    readTime: "4 min",
    trending: false,
  },
  {
    title: "Patientendaten sicher verwalten",
    category: "Datenschutz",
    views: "1.4k",
    readTime: "6 min",
    trending: false,
  },
  {
    title: "Mehrere Buchungen auf einmal verwalten",
    category: "Buchung",
    views: "1.1k",
    readTime: "5 min",
    trending: false,
  },
];

const faqs = [
  {
    question: "Wie kann ich eine Krankenfahrt buchen?",
    answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab. Sie erhalten innerhalb kurzer Zeit Angebote von qualifizierten Unternehmen.",
  },
  {
    question: "Wie schnell kann eine Krankenfahrt organisiert werden?",
    answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote. Bei dringenden Anfragen arbeiten wir mit Partnern zusammen, die auch kurzfristige Buchungen ermöglichen.",
  },
  {
    question: "Ist der Dienst kostenlos?",
    answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos. Wir berechnen nur bei erfolgreicher Vermittlung eine Provision an die Transportunternehmen.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten. Unsere Partner unterstützen Sie bei der Abrechnung.",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle Partner durchlaufen eine strenge Prüfung. Sie müssen sämtliche erforderlichen Lizenzen, Versicherungen und Zertifizierungen nachweisen.",
  },
  {
    question: "Was passiert bei Problemen während der Fahrt?",
    answer: "Unser Support-Team ist für Sie erreichbar. Alle Fahrten sind versichert und unsere Partner sind geschult, um auch mit unvorhergesehenen Situationen umzugehen.",
  },
];

const contactOptions = [
  {
    icon: Phone,
    title: "Telefon",
    description: "Persönliche Beratung durch Experten",
    action: "+49 151 155 612 31",
    available: "Mo-Fr 8-18 Uhr",
    gradient: "from-blue-500 to-cyan-500",
    responseTime: "Sofort",
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "Ausführliche schriftliche Anfrage",
    action: "support@katew.de",
    available: "24/7 erreichbar",
    gradient: "from-emerald-500 to-teal-500",
    responseTime: "< 24h",
  },
];

// Knowledge Base Data
const allVideos = [
  {
    title: "Erste Schritte mit katew",
    duration: "4:32",
    description: "Lernen Sie die Grundlagen der Plattform kennen",
    views: "12.4k",
    category: "Einführung",
  },
  {
    title: "Buchung Schritt für Schritt",
    duration: "6:15",
    description: "Komplette Anleitung zur Buchung",
    views: "8.2k",
    category: "Buchung",
  },
  {
    title: "Dashboard optimal nutzen",
    duration: "5:48",
    description: "Alle Funktionen des Dashboards erklärt",
    views: "5.1k",
    category: "Dashboard",
  },
  {
    title: "Transportunternehmen auswählen",
    duration: "3:22",
    description: "Wie Sie das richtige Unternehmen finden",
    views: "4.8k",
    category: "Buchung",
  },
  {
    title: "Abrechnung verstehen",
    duration: "7:10",
    description: "Alles über Kosten und Zahlungen",
    views: "3.9k",
    category: "Finanzen",
  },
  {
    title: "Mobile App Einführung",
    duration: "4:55",
    description: "katew unterwegs nutzen",
    views: "2.7k",
    category: "Mobile",
  },
];

const allArticles = [
  {
    title: "Vollständiger Leitfaden zur Buchung",
    excerpt: "Erfahren Sie alles über den Buchungsprozess von A bis Z",
    readTime: "8 min",
    views: "15.2k",
    category: "Buchung",
    date: "12. Jan 2026",
  },
  {
    title: "Kostenübernahme durch Krankenkassen",
    excerpt: "Welche Kosten werden übernommen und wie beantragen Sie die Erstattung",
    readTime: "6 min",
    views: "11.8k",
    category: "Finanzen",
    date: "10. Jan 2026",
  },
  {
    title: "Transportarten im Überblick",
    excerpt: "Sitzend, liegend oder mit Rollstuhl - welche Option passt zu Ihnen",
    readTime: "5 min",
    views: "9.4k",
    category: "Transport",
    date: "8. Jan 2026",
  },
  {
    title: "Partner-Account einrichten",
    excerpt: "Schritt-für-Schritt Anleitung für Kliniken und Praxen",
    readTime: "4 min",
    views: "7.2k",
    category: "Account",
    date: "5. Jan 2026",
  },
  {
    title: "Häufige Buchungsfehler vermeiden",
    excerpt: "Die 10 häufigsten Fehler und wie Sie sie umgehen",
    readTime: "7 min",
    views: "6.1k",
    category: "Tipps",
    date: "3. Jan 2026",
  },
  {
    title: "Datenschutz bei Krankentransporten",
    excerpt: "Wie wir Ihre sensiblen Daten schützen",
    readTime: "5 min",
    views: "4.5k",
    category: "Sicherheit",
    date: "1. Jan 2026",
  },
];

const allQuestions = [
  {
    question: "Wie kann ich eine Krankenfahrt buchen?",
    answer: "Geben Sie einfach Start- und Zieladresse ein, wählen Sie die Transportart und senden Sie Ihre Anfrage ab.",
    helpful: 342,
    category: "Buchung",
  },
  {
    question: "Wie schnell kann eine Krankenfahrt organisiert werden?",
    answer: "In der Regel erhalten Sie innerhalb weniger Stunden erste Angebote von qualifizierten Unternehmen.",
    helpful: 289,
    category: "Buchung",
  },
  {
    question: "Ist der Dienst kostenlos?",
    answer: "Ja, die Nutzung unserer Plattform ist für Patienten und Partner kostenlos.",
    helpful: 256,
    category: "Kosten",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Bei einer ärztlichen Verordnung übernimmt in vielen Fällen die Krankenkasse die Transportkosten.",
    helpful: 234,
    category: "Kosten",
  },
  {
    question: "Welche Qualitätsstandards erfüllen die Unternehmen?",
    answer: "Alle Partner durchlaufen eine strenge Prüfung mit Lizenzen und Zertifizierungen.",
    helpful: 198,
    category: "Qualität",
  },
  {
    question: "Kann ich eine Buchung stornieren?",
    answer: "Ja, Stornierungen sind bis 24 Stunden vor dem Termin kostenlos möglich.",
    helpful: 176,
    category: "Buchung",
  },
  {
    question: "Wie erreiche ich den Support?",
    answer: "Sie erreichen uns per Telefon oder E-Mail. Unsere Hotline ist Mo-Fr von 8-18 Uhr erreichbar.",
    helpful: 165,
    category: "Support",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer: "Wir akzeptieren Überweisung, Lastschrift und bei Selbstzahlern auch Kreditkarte.",
    helpful: 143,
    category: "Kosten",
  },
];

type KnowledgeCategory = "videos" | "articles" | "questions";

const knowledgeCategories = [
  {
    id: "articles" as KnowledgeCategory,
    icon: Newspaper,
    label: "Artikel",
    count: allArticles.length,
    gradient: "from-blue-500 to-cyan-500",
    description: "Ausführliche Anleitungen",
  },
  {
    id: "questions" as KnowledgeCategory,
    icon: CircleHelp,
    label: "Fragen",
    count: allQuestions.length,
    gradient: "from-emerald-500 to-teal-500",
    description: "Häufig gestellte Fragen",
  },
  {
    id: "videos" as KnowledgeCategory,
    icon: Video,
    label: "Videos",
    count: allVideos.length,
    gradient: "from-violet-500 to-purple-500",
    description: "Video-Tutorials",
  },
];


// Article Detail Popup Component
const ArticlePopup = ({ 
  article, 
  isOpen, 
  onClose 
}: { 
  article: ArticleType | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!article) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0 gap-0 bg-background border-border/50">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent p-8 pb-6">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight pr-8">
                {article.title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} Lesezeit
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {article.views} Aufrufe
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[50vh]">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Placeholder article content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold mb-3">Einführung</h3>
            <p className="text-muted-foreground mb-4">
              In diesem ausführlichen Artikel erfahren Sie alles Wichtige zum Thema "{article.title}". 
              Wir haben alle relevanten Informationen zusammengestellt, um Ihnen den bestmöglichen 
              Überblick zu geben.
            </p>
            
            <h3 className="text-lg font-semibold mb-3 mt-6">Schritt für Schritt</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Melden Sie sich in Ihrem Account an oder registrieren Sie sich kostenlos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Navigieren Sie zum entsprechenden Bereich in Ihrem Dashboard.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Folgen Sie den Anweisungen auf dem Bildschirm.</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 mt-6">Wichtige Hinweise</h3>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="text-sm text-muted-foreground">
                Bei Fragen oder Problemen steht Ihnen unser Support-Team jederzeit zur Verfügung. 
                Kontaktieren Sie uns per Telefon oder E-Mail.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border/50 p-6 bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="rounded-xl gap-2">
                <ThumbsUp className="w-4 h-4" />
                Hilfreich
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl gap-2">
                <Share2 className="w-4 h-4" />
                Teilen
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl gap-2">
                <Bookmark className="w-4 h-4" />
                Speichern
              </Button>
            </div>
            <Button onClick={onClose} className="rounded-xl">
              Schließen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Video Player Popup Component
const VideoPopup = ({ 
  video, 
  isOpen, 
  onClose 
}: { 
  video: VideoType | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!video) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 gap-0 bg-background border-border/50">
        {/* Video Player Area */}
        <div className="relative aspect-video bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Play Button */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20">
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </div>
            <p className="text-white/60 text-sm">Klicken zum Abspielen</p>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 text-white text-sm font-medium backdrop-blur-sm">
            {video.duration}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-violet-500/80 text-white text-sm font-medium backdrop-blur-sm">
            {video.category}
          </div>
        </div>

        {/* Video Info */}
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl md:text-2xl font-bold">
              {video.title}
            </DialogTitle>
          </DialogHeader>
          
          <p className="text-muted-foreground mb-4">{video.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {video.views} Aufrufe
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {video.duration} Minuten
            </span>
          </div>

          {/* Related Videos */}
          <div className="border-t border-border/50 pt-6">
            <h4 className="font-semibold mb-4">Weitere Videos</h4>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allVideos.slice(0, 3).map((v, i) => (
                <div key={i} className="flex-shrink-0 w-40 bg-muted/50 rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors">
                  <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg mb-2 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-medium line-clamp-2">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border/50 p-6 bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="rounded-xl gap-2">
                <ThumbsUp className="w-4 h-4" />
                Gefällt mir
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl gap-2">
                <Share2 className="w-4 h-4" />
                Teilen
              </Button>
            </div>
            <Button onClick={onClose} className="rounded-xl">
              Schließen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Question/FAQ Popup Component
const QuestionPopup = ({ 
  question, 
  isOpen, 
  onClose 
}: { 
  question: QuestionType | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  
  if (!question) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0 gap-0 bg-background border-border/50">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <CircleHelp className="w-6 h-6 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium">
                {question.category}
              </span>
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold leading-tight pr-8">
                {question.question}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Answer Content */}
        <div className="p-8">
          <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <p className="text-base leading-relaxed">{question.answer}</p>
            </div>
          </div>

          {/* Helpful Feedback */}
          <div className="mt-8 p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-center text-sm text-muted-foreground mb-4">
              War diese Antwort hilfreich?
            </p>
            <div className="flex justify-center gap-3">
              <Button 
                variant={isHelpful === true ? "default" : "outline"} 
                size="sm" 
                className="rounded-xl gap-2 min-w-24"
                onClick={() => setIsHelpful(true)}
              >
                <ThumbsUp className="w-4 h-4" />
                Ja
              </Button>
              <Button 
                variant={isHelpful === false ? "default" : "outline"} 
                size="sm" 
                className="rounded-xl gap-2 min-w-24"
                onClick={() => setIsHelpful(false)}
              >
                <ThumbsUp className="w-4 h-4 rotate-180" />
                Nein
              </Button>
            </div>
            {isHelpful !== null && (
              <p className="text-center text-xs text-muted-foreground mt-4 animate-fade-in">
                Vielen Dank für Ihr Feedback!
              </p>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{question.helpful} Personen fanden diese Antwort hilfreich</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border/50 p-6 bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="rounded-xl gap-2">
                <Share2 className="w-4 h-4" />
                Teilen
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl gap-2">
                <MessageCircle className="w-4 h-4" />
                Kontakt
              </Button>
            </div>
            <Button onClick={onClose} className="rounded-xl">
              Schließen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"anbieter" | "partner">("partner");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeKnowledgeCategory, setActiveKnowledgeCategory] = useState<KnowledgeCategory>("articles");
  
  // Popup states
  const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionType | null>(null);

  const categories = activeTab === "anbieter" ? anbieterCategories : partnerCategories;
  const articles = activeTab === "anbieter" ? anbieterArticles : partnerArticles;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section - Modernized with Glassmorphism */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.7s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>Wie können wir Ihnen helfen?</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Hilfe
                </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  center
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Antworten, Anleitungen und persönlicher Support – alles an einem Ort
              </p>
              
              {/* Search Box - Glassmorphism Style */}
              <div 
                className={`relative max-w-2xl mx-auto animate-fade-in transition-all duration-500 ${
                  isSearchFocused ? 'scale-[1.02]' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur-lg transition-opacity duration-300 ${
                  isSearchFocused ? 'opacity-100' : 'opacity-0'
                }`} />
                <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl">
                  <Search className={`absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors duration-300 ${
                    isSearchFocused ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <Input
                    type="text"
                    placeholder="Suchen Sie nach Themen, Anleitungen oder Fragen..."
                    className="pl-16 pr-6 py-8 text-lg rounded-2xl border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                      Suchen
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Knowledge Base Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  Wissensdatenbank
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Alles an einem 
                  </span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Ort</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                  Durchsuchen Sie Artikel, FAQs und Video-Tutorials
                </p>

                {/* Partner/Anbieter Toggle - Integrated */}
                <div className="max-w-md mx-auto">
                  <div className="relative p-1.5 bg-card/80 rounded-2xl backdrop-blur-sm border border-border/50 shadow-lg">
                    {/* Animated Background Slider */}
                    <div 
                      className={`absolute top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 transition-all duration-300 ease-out ${
                        activeTab === "partner" ? "left-1.5" : "left-[calc(50%+3px)]"
                      }`}
                    />
                    <div className="relative flex">
                      <button
                        onClick={() => setActiveTab("partner")}
                        className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          activeTab === "partner"
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Users className="w-5 h-5" />
                        Für Partner
                      </button>
                      <button
                        onClick={() => setActiveTab("anbieter")}
                        className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          activeTab === "anbieter"
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Truck className="w-5 h-5" />
                        Für Anbieter
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* Knowledge Base Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Category Sidebar */}
                <div className="lg:col-span-3">
                  <div className="sticky top-24 space-y-3">
                    {knowledgeCategories.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = activeKnowledgeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveKnowledgeCategory(cat.id)}
                          className={`w-full group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-500 ${
                            isActive
                              ? "bg-card border-2 border-primary/30 shadow-xl"
                              : "bg-card/50 border border-border/50 hover:border-primary/20 hover:bg-card hover:shadow-lg"
                          }`}
                        >
                          {/* Active Glow */}
                          {isActive && (
                            <div className={`absolute -inset-1 bg-gradient-to-r ${cat.gradient} opacity-10 blur-xl`} />
                          )}
                          
                          <div className="relative flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className={`font-bold text-base transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                  {cat.label}
                                </h3>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isActive ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                  {cat.count}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                            </div>
                          </div>

                          {/* Active Indicator */}
                          {isActive && (
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${cat.gradient} rounded-r-full`} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9">
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-8 min-h-[600px]">
                    {/* Content Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const activeCat = knowledgeCategories.find(c => c.id === activeKnowledgeCategory);
                          const Icon = activeCat?.icon || BookOpen;
                          return (
                            <>
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeCat?.gradient} flex items-center justify-center`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">Alle {activeCat?.label}</h3>
                                <p className="text-sm text-muted-foreground">{activeCat?.count} Einträge verfügbar</p>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                      <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Durchsuchen..."
                          className="pl-10 w-48 rounded-xl bg-background/50 border-border/50 focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>

                    {/* Videos Grid */}
                    {activeKnowledgeCategory === "videos" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {allVideos.map((video, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedVideo(video)}
                            className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
                          >
                            {/* Video Thumbnail */}
                            <div className="relative h-36 bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                              <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                                <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                              </div>
                              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                                {video.duration}
                              </div>
                              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-violet-500/80 text-white text-xs font-medium backdrop-blur-sm">
                                {video.category}
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                                {video.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
                              <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Play className="w-3 h-3" />
                                  {video.views} Aufrufe
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Articles List */}
                    {activeKnowledgeCategory === "articles" && (
                      <div className="space-y-4">
                        {allArticles.map((article, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedArticle(article)}
                            className="group relative bg-background rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center shrink-0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-colors">
                                <FileText className="w-6 h-6 text-blue-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600">
                                    {article.category}
                                  </span>
                                  <span className="text-xs text-muted-foreground">{article.date}</span>
                                </div>
                                <h4 className="font-semibold text-base group-hover:text-primary transition-colors">
                                  {article.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.excerpt}</p>
                                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime} Lesezeit
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <BookOpen className="w-3 h-3" />
                                    {article.views} Aufrufe
                                  </span>
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Questions/FAQ List */}
                    {activeKnowledgeCategory === "questions" && (
                      <div className="space-y-4">
                        {allQuestions.map((q, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedQuestion(q)}
                            className="group relative bg-background rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center shrink-0">
                                  <CircleHelp className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                                      {q.category}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-base group-hover:text-primary transition-colors">
                                    {q.question}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{q.answer}</p>
                                  <div className="flex items-center gap-2 mt-3">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                      {q.helpful} fanden dies hilfreich
                                    </span>
                                  </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Bottom CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-10 md:p-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }} />
                </div>
                
                <div className="relative text-center text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                    <Star className="w-4 h-4" />
                    Premium Support
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Nicht gefunden, was Sie suchen?
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                    Unser Team beantwortet Ihre individuellen Fragen persönlich und kompetent
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 text-base font-semibold shadow-lg">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Support kontaktieren
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Popup Dialogs */}
      <ArticlePopup 
        article={selectedArticle} 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
      <VideoPopup 
        video={selectedVideo} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
      <QuestionPopup 
        question={selectedQuestion} 
        isOpen={!!selectedQuestion} 
        onClose={() => setSelectedQuestion(null)} 
      />
      
      <Footer />
    </>
  );
}
