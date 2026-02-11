import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, AlertTriangle, Zap, Clock, HeartHandshake,
  Monitor, ListChecks, Building2, Users, Stethoscope, Heart, Wallet,
  TrendingUp, Shield, Target, Handshake, BarChart3, DollarSign,
  Repeat, Globe, Rocket, Flag, Eye, ArrowRight, Maximize, Minimize,
  Brain, Layers, UserCheck, Lightbulb, Network, LineChart, Package,
  Download, Loader2
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logoTransparent from "@/assets/katew-logo-transparent.png";
import teamDino from "@/assets/team-dino.png";

const TOTAL_SLIDES = 12;

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, TOTAL_SLIDES - 1)), []);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") exitFullscreen();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };
  const exitFullscreen = () => { if (document.fullscreenElement) document.exitFullscreen(); };

  const exportPDF = async () => {
    setIsExporting(true);
    try {
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });
      const container = document.createElement("div");
      container.style.cssText = "position:fixed;left:-9999px;top:0;width:1920px;height:1080px;overflow:hidden;";
      document.body.appendChild(container);

      const allSlides = [
        <SlideCover />, <SlideProblem />, <SlideSolution />, <SlideTargetGroups />,
        <SlideValue />, <SlideUSP />, <SlideGTM />, <SlideBusinessModel />,
        <SlideMarket />, <SlideTeam />, <SlideRoadmap />, <SlideVision />,
      ];

      for (let i = 0; i < allSlides.length; i++) {
        // Render slide into container using a temporary root
        const { createRoot } = await import("react-dom/client");
        const wrapper = document.createElement("div");
        wrapper.className = "h-screen w-screen bg-foreground overflow-hidden relative";
        wrapper.style.cssText = "width:1920px;height:1080px;";
        container.innerHTML = "";
        container.appendChild(wrapper);

        const root = createRoot(wrapper);
        root.render(allSlides[i]);
        await new Promise(r => setTimeout(r, 500)); // wait for render

        const canvas = await html2canvas(wrapper, {
          width: 1920, height: 1080, scale: 1,
          backgroundColor: null, useCORS: true,
        });

        root.unmount();

        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, 1920, 1080);
      }

      document.body.removeChild(container);
      pdf.save("katew-praesentation.pdf");
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const slides = [
    <SlideCover />,
    <SlideProblem />,
    <SlideSolution />,
    <SlideTargetGroups />,
    <SlideValue />,
    <SlideUSP />,
    <SlideGTM />,
    <SlideBusinessModel />,
    <SlideMarket />,
    <SlideTeam />,
    <SlideRoadmap />,
    <SlideVision />,
  ];

  return (
    <div className="h-screen w-screen bg-foreground overflow-hidden relative select-none">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="h-full w-full"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-50">
        <div className="flex items-center gap-3">
          <img src={logoTransparent} alt="katew" className="h-6 opacity-40" />
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-primary-foreground/40 text-sm font-medium mr-2">
            {current + 1} / {TOTAL_SLIDES}
          </span>
          <button onClick={prev} disabled={current === 0} className="p-2 rounded-lg text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-20 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} disabled={current === TOTAL_SLIDES - 1} className="p-2 rounded-lg text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-20 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={toggleFullscreen} className="p-2 rounded-lg text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all ml-1">
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
          <button
            onClick={exportPDF}
            disabled={isExporting}
            className="p-2 rounded-lg text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-50 transition-all"
            title="Als PDF herunterladen"
          >
            {isExporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Shared layout ────────────────────────────── */
const SlideLayout = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`h-full w-full flex flex-col items-center justify-center px-8 md:px-20 lg:px-32 py-16 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border ${className}`}
  >
    {children}
  </motion.span>
);

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Slide 1: Cover ──────────────────────────── */
const SlideCover = () => (
  <SlideLayout>
    <FadeUp className="text-center">
      <img src={logoTransparent} alt="katew" className="h-16 md:h-20 mx-auto mb-8" />
    </FadeUp>
    <FadeUp delay={0.15} className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight">
        Deutschlands führende Plattform für{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Krankenfahrten
        </span>
      </h1>
    </FadeUp>
    <FadeUp delay={0.3} className="text-center mt-6">
      <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl">
        Digitale Vermittlung von Krankenfahrten im Gesundheits- & Sozialwesen
      </p>
    </FadeUp>
    <FadeUp delay={0.45} className="flex flex-wrap justify-center gap-3 mt-10">
      {["B2B", "B2G", "Plattformmodell", "Infrastruktur-Ansatz"].map(tag => (
        <span key={tag} className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          {tag}
        </span>
      ))}
    </FadeUp>
    <FadeUp delay={0.6} className="mt-12">
      <p className="text-primary-foreground/30 text-sm italic">
        „Wir sind Infrastruktur, kein Tool."
      </p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 2: Problem ────────────────────────── */
const SlideProblem = () => (
  <SlideLayout>
    <Badge className="border-destructive/30 text-destructive bg-destructive/10 mb-6">
      <AlertTriangle className="w-3.5 h-3.5 mr-2" /> Das Problem
    </Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Analoge Ineffizienz</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg max-w-2xl mx-auto">
        Krankenfahrten werden heute manuell organisiert – ein Prozess aus dem letzten Jahrhundert.
      </p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {[
        { icon: Monitor, title: "Kommunikations-Chaos", text: "Telefon, Fax, WhatsApp und Excel statt digitaler Prozesse. Keine Standardisierung." },
        { icon: Clock, title: "Massiver Zeitaufwand", text: "Pflegekräfte verbringen Stunden mit der Suche nach verfügbaren Fahrdiensten." },
        { icon: Zap, title: "Operativer Stress", text: "Wiederkehrende Unsicherheit und Abhängigkeit von einzelnen Anbietern." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
            <item.icon className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="text-primary-foreground font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.6} className="mt-8">
      <p className="text-primary-foreground/30 italic text-sm">„Nicht die Fahrt ist das Problem – die Vermittlung davor."</p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 3: Solution ───────────────────────── */
const SlideSolution = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Die Lösung</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Digitale Vermittlung</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg max-w-2xl mx-auto">
        katew digitalisiert den Vermittlungsprozess und schafft Struktur statt Telefonchaos.
      </p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {[
        { icon: ListChecks, title: "Strukturierte digitale Anfrage", text: "Keine Freitexttelefonate mehr. Alle Informationen werden digital und einheitlich erfasst." },
        { icon: Shield, title: "Einheitliche Pflichtfelder", text: "Art der Fahrt, Mobilität und Zeitfenster werden sofort abgefragt – vollständige Daten von Anfang an." },
        { icon: Layers, title: "Zentrale Plattform", text: "Alle Anfragen und Angebote an einem Ort. Dokumentierte Historie für volle Nachvollziehbarkeit." },
        { icon: Package, title: "Schlankes Modell", text: "Keine Disposition, kein Fahrbetrieb, keine operative Haftung. katew vermittelt – Fahrdienste führen aus." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm flex gap-5"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-primary-foreground font-semibold mb-1">{item.title}</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 4: Target Groups ──────────────────── */
const SlideTargetGroups = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Zielgruppen</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Wer katew nutzt</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg">Ein Ökosystem für alle Akteure im Krankentransport</p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {[
        { icon: Stethoscope, title: "Gesundheitswesen", color: "primary", items: ["Pflegedienste & Sozialstationen", "Krankenhäuser & Entlassmanagement", "Arztpraxen & MVZs", "Dialyse- & Reha-Zentren"] },
        { icon: Heart, title: "Pflege & Betreuung", color: "secondary", items: ["Pflegeheime & Tagespflege", "Betreutes Wohnen", "Eingliederungshilfe", "Behinderteneinrichtungen"] },
        { icon: Wallet, title: "Kostenträger", color: "primary", items: ["Sozialämter & Kommunen", "Gesetzliche & private Kassen", "Pflege- & Unfallkassen", "Beihilfestellen"] },
      ].map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <div className={`w-12 h-12 rounded-xl bg-${group.color}/10 flex items-center justify-center mb-4`}>
            <group.icon className={`w-6 h-6 text-${group.color}`} />
          </div>
          <h3 className="text-primary-foreground font-semibold text-lg mb-3">{group.title}</h3>
          <ul className="space-y-2">
            {group.items.map(item => (
              <li key={item} className="text-primary-foreground/50 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.6} className="mt-6">
      <div className="px-6 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
        <p className="text-primary-foreground/40 text-sm">
          <Users className="w-4 h-4 inline mr-2 text-primary" />
          <strong className="text-primary-foreground/60">Indirekte Nutzer:</strong> Patienten · Angehörige · Gesetzliche Betreuer
        </p>
      </div>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 5: Value ──────────────────────────── */
const SlideValue = () => (
  <SlideLayout>
    <Badge className="border-secondary/30 text-secondary bg-secondary/10 mb-6">Mehrwert</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Weniger Aufwand. Mehr Struktur.</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg">Win-Win-Situation für alle Beteiligten im Ökosystem.</p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {[
        {
          title: "Für Pflege & Einrichtungen",
          items: [
            { icon: Zap, label: "Massive Zeitersparnis", text: "Keine endlosen Telefonate mehr." },
            { icon: Shield, label: "Weniger Rückfragen", text: "Vollständige Infos durch Pflichtfelder." },
            { icon: ListChecks, label: "Standardisierte Abläufe", text: "Prozesssicherheit im Pflegealltag." },
          ]
        },
        {
          title: "Für Fahrdienste",
          items: [
            { icon: UserCheck, label: "Qualifizierte Anfragen", text: "Alle fahrtrelevanten Daten sofort." },
            { icon: TrendingUp, label: "Neue Nachfrage", text: "Zugang zu neuen Kunden ohne Vertrieb." },
            { icon: HeartHandshake, label: "Weniger Störungen", text: "Strukturierte Kommunikation." },
          ]
        },
        {
          title: "Für katew",
          items: [
            { icon: Layers, label: "Schlankes Modell", text: "Fokus auf Technologie." },
            { icon: Shield, label: "Geringes Risiko", text: "Reine Vermittlung." },
            { icon: Globe, label: "Hohe Skalierbarkeit", text: "Keine physische Infrastruktur nötig." },
          ]
        },
      ].map((col, i) => (
        <motion.div
          key={col.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <h3 className="text-primary-foreground font-semibold text-lg mb-4 pb-3 border-b border-primary-foreground/10">{col.title}</h3>
          <div className="space-y-4">
            {col.items.map(item => (
              <div key={item.label} className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-medium">{item.label}</p>
                  <p className="text-primary-foreground/40 text-xs">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 6: USP ────────────────────────────── */
const SlideUSP = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">USP</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Warum katew relevant ist</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg max-w-3xl mx-auto">
        Nicht generisches Buchungstool, sondern spezialisierte Infrastruktur für das Gesundheitswesen.
      </p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {[
        { icon: Brain, title: "Branchenspezifische Logik", text: "Berücksichtigung von Mobilitätsanforderungen, Pflegegraden und Kostenträger-Strukturen direkt im Prozess." },
        { icon: Target, title: "Niedrige Einstiegshürden", text: "Einfaches Onboarding für Fahrdienste ohne komplexe Software-Installationen oder hohe Fixkosten." },
        { icon: Lightbulb, title: "Fokus auf Alltags-Pain", text: "Lösung des echten Vermittlungsproblems statt unnötigem Feature-Bloat. Pragmatisch und effizient." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mx-auto mb-5">
            <item.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-primary-foreground font-bold text-xl mb-3">{item.title}</h3>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.6} className="mt-10">
      <p className="text-primary-foreground/30 italic text-sm">
        „Wir schaffen die digitale Basis für einen heute analogen Prozess."
      </p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 7: Go-to-Market ───────────────────── */
const SlideGTM = () => (
  <SlideLayout>
    <Badge className="border-secondary/30 text-secondary bg-secondary/10 mb-6">Go-to-Market</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Partnerschaften als Hebel</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg">Effiziente Skalierung durch strategische Kooperationen.</p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
      {[
        { icon: Building2, title: "Verbände & Träger", text: "Kooperation mit Pflege- und Wohlfahrtsverbänden für direkten Zugang zu Einrichtungen." },
        { icon: Monitor, title: "Software-Integration", text: "Partnerschaften mit Pflegesoftware-Anbietern zur Integration in bestehende Workflows." },
        { icon: TrendingUp, title: "CAC-reduzierter Vertrieb", text: "Durch strategische Integrationen minimieren wir die Akquisitionskosten massiv." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
            <item.icon className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-primary-foreground font-semibold mb-2">{item.title}</h3>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.5} className="flex flex-wrap gap-6 justify-center">
      {[
        { icon: Handshake, label: "Co-Selling Ansatz", sub: "Gemeinsame Vermarktung statt Kaltakquise" },
        { icon: Network, label: "Netzwerk-Skalierung", sub: "Exponentielles Wachstum durch bestehende Netzwerke" },
      ].map(item => (
        <div key={item.label} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
          <item.icon className="w-5 h-5 text-primary" />
          <div>
            <p className="text-primary-foreground text-sm font-medium">{item.label}</p>
            <p className="text-primary-foreground/40 text-xs">{item.sub}</p>
          </div>
        </div>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 8: Business Model ─────────────────── */
const SlideBusinessModel = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Geschäftsmodell</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Monetarisierung</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg">Entlang der digitalen Vermittlungskette.</p>
    </FadeUp>
    <FadeUp delay={0.2} className="w-full max-w-4xl">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
            <DollarSign className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-primary-foreground font-bold text-xl">Transaktionsgebühren</h3>
            <p className="text-primary-foreground/50 text-sm">Umsatzbeteiligung pro erfolgreich vermittelter Krankenfahrt</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-primary-foreground/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        <p className="text-primary-foreground/30 text-xs mt-2">Skaliert direkt mit dem Plattformvolumen</p>
      </div>
    </FadeUp>
    <FadeUp delay={0.35} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
      {[
        { icon: Repeat, title: "B2B-Abonnements", text: "Wiederkehrende Erlöse durch SaaS-Modelle für Pflegeeinrichtungen." },
        { icon: Handshake, title: "Partnerschafts-Modelle", text: "Zusätzliche Erlösströme durch Integrationen mit Software-Partnern." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-primary-foreground font-semibold mb-1">{item.title}</h3>
            <p className="text-primary-foreground/50 text-sm">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.55} className="flex flex-wrap gap-4 justify-center">
      {["Keine eigenen Fahrzeuge", "Kein Fahrpersonal", "Kein Vorfinanzierungsrisiko", "Keine operative Haftung"].map(tag => (
        <span key={tag} className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
          ✓ {tag}
        </span>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 9: Market ─────────────────────────── */
const SlideMarket = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Markt & Wettbewerb</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Groß, fragmentiert, unterdigitalisiert</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
      {[
        { icon: BarChart3, value: "Mio.", label: "Krankenfahrten / Jahr", sub: "in Deutschland" },
        { icon: Repeat, value: "Hoch", label: "Wiederholfrequenz", sub: "Dialyse, Reha, etc." },
        { icon: AlertTriangle, value: "Status Quo", label: "Hauptkonkurrent", sub: "Telefon, Fax, manuelle Prozesse" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-2xl font-bold text-primary-foreground">{item.value}</p>
          <p className="text-primary-foreground/60 text-sm font-medium">{item.label}</p>
          <p className="text-primary-foreground/30 text-xs mt-1">{item.sub}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.5} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
        <h3 className="text-primary-foreground font-semibold mb-3">Marktmerkmale</h3>
        <ul className="space-y-2">
          {["Stark fragmentierter Anbietermarkt", "Kaum digitale Vermittlungsstandards", "Hoher Leidensdruck bei Kostenträgern"].map(t => (
            <li key={t} className="text-primary-foreground/50 text-sm flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
        <h3 className="text-primary-foreground font-semibold mb-3">Insellösungen</h3>
        <p className="text-primary-foreground/50 text-sm leading-relaxed">
          Einzelne Tools ohne Plattformansatz. Keine Skalierung, keine Netzwerkeffekte.
        </p>
        <p className="text-primary font-medium text-sm mt-3">
          katew positioniert sich als neutraler Standard für alle Akteure.
        </p>
      </div>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 10: Team ──────────────────────────── */
const SlideTeam = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Team</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Praxisnah & umsetzungsstark</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl">
      <div className="shrink-0">
        <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(221_83%_53%/0.2)]">
          <img src={teamDino} alt="Dino Lalic" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-primary-foreground">Dino Lalic</h3>
          <p className="text-primary text-sm font-medium">Gründer & Visionär</p>
        </div>
        <p className="text-primary-foreground/50 text-sm leading-relaxed">
          Langjähriger Unternehmer im Pflege- & Gesundheitsumfeld mit tiefem Einblick in reale Abläufe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Network, label: "Direkter Marktzugang", text: "Netzwerk zu Pflegediensten, Kliniken und Fahrdienstanbietern" },
            { icon: Rocket, label: "Umsetzungsfokus", text: "Pragmatische Problemlösung statt Buzzwords" },
          ].map(item => (
            <div key={item.label} className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-primary-foreground text-sm font-medium">{item.label}</span>
              </div>
              <p className="text-primary-foreground/40 text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
    <FadeUp delay={0.5} className="mt-8">
      <p className="text-primary-foreground/30 italic text-sm max-w-xl text-center">
        „Wir verstehen die täglichen Schmerzen der Pflegekräfte und Fahrdienste, weil wir sie selbst erlebt haben."
      </p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 11: Roadmap ───────────────────────── */
const SlideRoadmap = () => (
  <SlideLayout>
    <Badge className="border-primary/30 text-primary bg-primary/10 mb-6">Roadmap</Badge>
    <FadeUp className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Schrittweise Skalierung</h2>
      <p className="text-primary-foreground/50 mt-3 text-lg">Risikoarmer Plan von der Pilotregion zur nationalen Marktführerschaft.</p>
    </FadeUp>
    <FadeUp delay={0.2} className="w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
        {[
          {
            phase: "01", title: "Pilot", color: "primary",
            items: ["MVP & Pilotregion", "Erste zahlende Nutzer", "Prozess-Validierung"],
          },
          {
            phase: "02", title: "Scaling", color: "primary",
            items: ["Regionale Skalierung", "Standard-Onboarding", "Partner-Netzwerke"],
          },
          {
            phase: "03", title: "Expansion", color: "secondary",
            items: ["Nationale Expansion", "Verbands-Kooperationen", "Marktstandard-Etablierung"],
          },
        ].map((p, i) => (
          <motion.div
            key={p.phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="relative p-8 rounded-2xl md:rounded-none md:first:rounded-l-2xl md:last:rounded-r-2xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            <div className="text-5xl font-black text-primary/10 mb-2">{p.phase}</div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Phase {parseInt(p.phase)}: {p.title}
            </h3>
            <ul className="space-y-2">
              {p.items.map(item => (
                <li key={item} className="text-primary-foreground/50 text-sm flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {i < 2 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 rounded-full bg-foreground border-2 border-primary/30 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </FadeUp>
    <FadeUp delay={0.6} className="mt-8">
      <p className="text-primary-foreground/30 text-sm">
        Vom Pilotprojekt zum digitalen Standard für Krankenfahrten in Deutschland.
      </p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 12: Vision ────────────────────────── */
const SlideVision = () => (
  <SlideLayout>
    <FadeUp className="text-center">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-8">
        <Eye className="w-10 h-10 text-primary" />
      </div>
    </FadeUp>
    <FadeUp delay={0.1} className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Der Standard für Krankenfahrten</h2>
      <p className="text-primary-foreground/50 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
        katew digitalisiert einen alltäglichen, aber ungelösten Teil des Gesundheitswesens und schafft die Infrastruktur der Zukunft.
      </p>
    </FadeUp>
    <FadeUp delay={0.25} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-10">
      {[
        { icon: Layers, title: "Infrastruktur", text: "Nationale Basis für alle Vermittlungsprozesse" },
        { icon: Zap, title: "Entlastung", text: "Reduktion administrativer Last" },
        { icon: Heart, title: "Menschlichkeit", text: "Mehr Zeit für die eigentliche Pflege" },
        { icon: Flag, title: "Standard", text: "Einheitliche digitale Prozesse" },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 + i * 0.1 }}
          className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-1">{item.title}</h4>
          <p className="text-primary-foreground/40 text-xs">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.7}>
      <div className="px-8 py-5 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
          Mehr Zeit für Menschen, weniger für Organisation.
        </p>
      </div>
    </FadeUp>
  </SlideLayout>
);

export default Presentation;
