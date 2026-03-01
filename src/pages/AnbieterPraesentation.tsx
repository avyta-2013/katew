import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Maximize, Minimize, Download, Loader2,
  Truck, Shield, CreditCard, FileText, Clock, Ban, Star, Eye,
  CheckCircle2, AlertTriangle, Users, Zap, ArrowRight, Handshake,
  Building2, Phone, Mail, Globe, UserPlus, Gavel, XCircle
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logoNew from "@/assets/logo-new.png";

const TOTAL_SLIDES = 10;

const AnbieterPraesentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, TOTAL_SLIDES - 1)), []);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
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

  const exportPDF = async () => {
    setIsExporting(true);
    const originalSlide = current;
    try {
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

      for (let i = 0; i < TOTAL_SLIDES; i++) {
        setCurrent(i);
        await new Promise(r => setTimeout(r, 1200));

        const slideEl = document.querySelector("[data-slide-content]") as HTMLElement;
        if (!slideEl) continue;

        const canvas = await html2canvas(slideEl, {
          width: slideEl.scrollWidth,
          height: slideEl.scrollHeight,
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false,
        });

        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 1920, 1080);
      }

      pdf.save("katew-anbieter-praesentation.pdf");
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setCurrent(originalSlide);
      setIsExporting(false);
    }
  };

  const slides = [
    <SlideCover />, <SlideWerIstKatew />, <SlideWieFunktionierts />,
    <SlideVoraussetzungen />, <SlideVermittlung />, <SlideVerguetung />,
    <SlideRechteUndPflichten />, <SlideQualitaet />, <SlideVertrag />,
    <SlideKontakt />,
  ];

  return (
    <div className="h-screen w-screen bg-white overflow-hidden relative select-none" data-slide-content>
      {/* Decorative mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[15%] w-[900px] h-[900px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }} />
        <div className="absolute -bottom-[30%] -left-[15%] w-[700px] h-[700px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)), transparent 70%)" }} />
        <div className="absolute top-[20%] left-[50%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 60%)" }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      {isExporting ? (
        <div className="h-full w-full">
          {slides[current]}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Bottom bar - glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-50 bg-white/60 backdrop-blur-xl border-t border-black/[0.04]">
        <div className="flex items-center gap-3">
          <img src={logoNew} alt="katew" className="h-12 opacity-80" />
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${i === current ? "w-10 h-2.5 bg-gradient-to-r from-primary to-secondary shadow-sm" : "w-2.5 h-2.5 bg-foreground/15 hover:bg-foreground/30"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-foreground/40 text-xs font-medium tracking-wide mr-3 font-mono">{String(current + 1).padStart(2, '0')} / {TOTAL_SLIDES}</span>
          <button onClick={prev} disabled={current === 0} className="p-2.5 rounded-xl text-foreground/40 hover:text-foreground hover:bg-black/[0.04] disabled:opacity-20 transition-all"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={next} disabled={current === TOTAL_SLIDES - 1} className="p-2.5 rounded-xl text-foreground/40 hover:text-foreground hover:bg-black/[0.04] disabled:opacity-20 transition-all"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={toggleFullscreen} className="p-2.5 rounded-xl text-foreground/40 hover:text-foreground hover:bg-black/[0.04] transition-all ml-1">
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
          <button onClick={exportPDF} disabled={isExporting} className="p-2.5 rounded-xl text-foreground/40 hover:text-foreground hover:bg-black/[0.04] disabled:opacity-50 transition-all" title="Als PDF herunterladen">
            {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Shared ──────────────────────────── */
const SlideLayout = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`h-full w-full flex flex-col items-center justify-center px-8 md:px-20 lg:px-32 py-20 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
    className={`inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm ${className}`}
  >{children}</motion.span>
);

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const InfoCard = ({ icon: Icon, title, text, delay = 0, color = "primary" }: { icon: any; title: string; text: string; delay?: number; color?: string }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}
    className="group p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex gap-5"
  >
    <div className={`w-12 h-12 rounded-2xl bg-${color}/8 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
      <Icon className={`w-6 h-6 text-${color}`} />
    </div>
    <div>
      <h3 className="text-foreground font-bold mb-1.5">{title}</h3>
      <p className="text-foreground/50 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
);

/* ── Slide 1: Cover ──────────────────── */
const SlideCover = () => (
  <SlideLayout>
    <FadeUp className="text-center">
      <img src={logoNew} alt="katew" className="h-36 md:h-48 mx-auto mb-10" />
    </FadeUp>
    <FadeUp delay={0.15} className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
        Anbieter-Informationen für{" "}
        <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">Fahrunternehmen</span>
      </h1>
    </FadeUp>
    <FadeUp delay={0.3} className="text-center mt-6">
      <p className="text-lg md:text-xl text-foreground/40 max-w-2xl leading-relaxed">
        Alles, was Sie als Fahrunternehmen über die Zusammenarbeit mit katew wissen müssen
      </p>
    </FadeUp>
    <FadeUp delay={0.45} className="flex flex-wrap justify-center gap-3 mt-12">
      {["Vermittlungsplattform", "3,69 € pro Buchung", "Keine Abo-Pflicht", "Digital & Fair"].map((tag, i) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 + i * 0.08 }}
          className="px-5 py-2.5 rounded-full bg-primary/[0.06] text-primary text-sm font-medium border border-primary/10 backdrop-blur-sm"
        >
          {tag}
        </motion.span>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 2: Wer ist katew? ─────────── */
const SlideWerIstKatew = () => (
  <SlideLayout>
    <Badge className="border-primary/20 text-primary bg-primary/[0.06] mb-8"><Building2 className="w-3.5 h-3.5 mr-2" /> Wer wir sind</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">katew – Digitale Vermittlung</h2>
      <p className="text-foreground/40 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
        katew ist eine Plattform der AVYTA GmbH mit Sitz in Frankfurt am Main. Wir vermitteln Kranken- und Patientenfahrten – digital, schnell und transparent.
      </p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      <InfoCard icon={Globe} title="Reine Vermittlung" text="katew erbringt selbst keine Beförderungsleistungen. Der Beförderungsvertrag entsteht direkt zwischen Kunde und Fahrunternehmen." delay={0.3} />
      <InfoCard icon={Users} title="Zielgruppen" text="Privatpersonen, Pflegeheime, Krankenhäuser, MVZ, Dialysezentren, Sozialämter und Kostenträger nutzen unsere Plattform." delay={0.4} />
      <InfoCard icon={Shield} title="Rechtlich klar" text="AVYTA GmbH, HRB 96683, AG Frankfurt am Main. Geschäftsführer: Dino Lalic. Kein Krankentransport im Sinne der Rettungsdienstgesetze." delay={0.5} />
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 3: Wie funktioniert's? ────── */
const SlideWieFunktionierts = () => (
  <SlideLayout>
    <Badge className="border-secondary/20 text-secondary bg-secondary/[0.06] mb-8"><Zap className="w-3.5 h-3.5 mr-2" /> So funktioniert's</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">In 4 Schritten zum Auftrag</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
      {[
        { step: "01", icon: UserPlus, title: "Registrieren", text: "Anmeldeformular ausfüllen, Unterlagen hochladen (PBefG-Genehmigung, Versicherung)" },
        { step: "02", icon: CheckCircle2, title: "Verifizierung", text: "katew prüft Ihre Dokumente und schaltet Sie frei" },
        { step: "03", icon: FileText, title: "Anfragen erhalten", text: "Automatisierte, diskriminierungsfreie Verteilung der Fahrtanfragen" },
        { step: "04", icon: Handshake, title: "Fahrt durchführen", text: "Sie nehmen den Auftrag an – der Beförderungsvertrag entsteht mit dem Kunden" },
      ].map((item, i) => (
        <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          className="group p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 text-center relative overflow-hidden"
        >
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg shadow-primary/20">{item.step}</div>
          <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-4 mt-3 group-hover:scale-110 transition-transform duration-500">
            <item.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-foreground/45 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 4: Voraussetzungen ────────── */
const SlideVoraussetzungen = () => (
  <SlideLayout>
    <Badge className="border-primary/20 text-primary bg-primary/[0.06] mb-8"><Shield className="w-3.5 h-3.5 mr-2" /> § 3 Voraussetzungen</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Was Sie mitbringen müssen</h2>
      <p className="text-foreground/40 mt-4 text-lg">Rechtliche Anforderungen an Fahrunternehmen auf katew</p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl">
      {[
        { icon: FileText, text: "Gültige Genehmigung nach dem Personenbeförderungsgesetz (PBefG)" },
        { icon: Shield, text: "Gültige Haftpflichtversicherung" },
        { icon: Users, text: "Geeignetes und geschultes Personal" },
        { icon: Gavel, text: "Einhaltung sämtlicher gesetzlichen Vorschriften" },
        { icon: XCircle, text: 'Keine unzulässige Verwendung geschützter Begriffe wie „Krankentransport"' },
        { icon: Eye, text: "Keine irreführende Werbung im Zusammenhang mit katew" },
      ].map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          className="flex items-center gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
        >
          <div className="w-11 h-11 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.7} className="mt-8">
      <p className="text-foreground/30 text-sm italic">Nachweise sind auf Verlangen vorzulegen.</p>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 5: Vermittlung ────────────── */
const SlideVermittlung = () => (
  <SlideLayout>
    <Badge className="border-secondary/20 text-secondary bg-secondary/[0.06] mb-8"><Truck className="w-3.5 h-3.5 mr-2" /> Vermittlung</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Faire Vermittlung</h2>
      <p className="text-foreground/40 mt-4 text-lg max-w-2xl mx-auto">Automatisiert, transparent und diskriminierungsfrei</p>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <InfoCard icon={Zap} title="Automatische Verteilung" text="Fahrtanfragen werden nach fairen, diskriminierungsfreien Kriterien automatisiert verteilt (Verfügbarkeit, Entfernung, Auslastung)." delay={0.3} />
      <InfoCard icon={Clock} title="Schnelle Vermittlung" text='Vermittlung erfolgt in der Regel unter 5 Minuten – dies stellt jedoch keine Garantie dar.' delay={0.4} />
      <InfoCard icon={AlertTriangle} title="Kein Volumen-Anspruch" text="Ein Anspruch auf bestimmte Vermittlungsvolumina besteht nicht. Die Anzahl der Aufträge hängt von Nachfrage und Verfügbarkeit ab." delay={0.5} color="secondary" />
      <InfoCard icon={Handshake} title="Direkter Vertrag" text="Der Beförderungsvertrag kommt ausschließlich zwischen Ihnen und dem Kunden zustande. katew ist nicht Vertragspartner." delay={0.6} />
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 6: Vergütung ──────────────── */
const SlideVerguetung = () => (
  <SlideLayout>
    <Badge className="border-primary/20 text-primary bg-primary/[0.06] mb-8"><CreditCard className="w-3.5 h-3.5 mr-2" /> Vergütung</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Transparentes Preismodell</h2>
    </FadeUp>

    <FadeUp delay={0.2} className="w-full max-w-lg mb-12">
      <div className="p-10 rounded-3xl bg-white/90 backdrop-blur-sm border border-black/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.06)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary" />
        <div className="relative">
          <p className="text-foreground/40 text-sm mb-3 tracking-wide uppercase font-medium">Provision pro vermittelter Buchung</p>
          <p className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">3,69 €</p>
          <p className="text-foreground/30 mt-3 text-sm">netto, zzgl. gesetzlicher USt.</p>
        </div>
      </div>
    </FadeUp>

    <FadeUp delay={0.35} className="w-full max-w-4xl">
      <p className="text-foreground/40 font-medium mb-5 text-center text-sm tracking-wide uppercase">Eine Buchung gilt als provisionspflichtig, sobald:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "Vom Fahrunternehmen angenommen",
          "Die Fahrt durchgeführt wird",
          "Ein Vertrag aufgrund der Vermittlung zustande kommt",
        ].map((text, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
            className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-3" />
            <p className="text-foreground/50 text-sm">{text}</p>
          </motion.div>
        ))}
      </div>
    </FadeUp>

    <FadeUp delay={0.8} className="mt-8">
      <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06]">
        <FileText className="w-5 h-5 text-foreground/30 shrink-0" />
        <p className="text-foreground/40 text-sm">Abrechnung erfolgt monatlich. Zahlungsfrist: 14 Tage ab Rechnungsdatum.</p>
      </div>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 7: Rechte & Pflichten ─────── */
const SlideRechteUndPflichten = () => (
  <SlideLayout>
    <Badge className="border-destructive/20 text-destructive bg-destructive/[0.06] mb-8"><Gavel className="w-3.5 h-3.5 mr-2" /> Rechte & Pflichten</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Was für Sie gilt</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      {/* Pflichten */}
      <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <h3 className="text-foreground font-bold text-lg mb-5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-destructive/[0.08] flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-destructive" />
          </div>
          Ihre Pflichten
        </h3>
        <ul className="space-y-3.5">
          {[
            "Ordnungsgemäße Durchführung der Fahrten",
            "Selbstständiges, rechtlich eigenständiges Handeln",
            "Vertrauliche Behandlung personenbezogener Daten",
            "Daten nur zur Fahrt-Durchführung verwenden",
            "Keine systematische Umgehung der Plattform",
            "Bei Stornierung durch Sie: Provision bleibt geschuldet",
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/50 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Rechte */}
      <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <h3 className="text-foreground font-bold text-lg mb-5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          Ihre Rechte
        </h3>
        <ul className="space-y-3.5">
          {[
            "Eigene Preisgestaltung für Selbstzahler",
            "Monatliche, transparente Abrechnung",
            "Kündigung mit 1 Monat Frist zum Monatsende",
            "Außerordentliches Kündigungsrecht bleibt unberührt",
            "Faire, diskriminierungsfreie Vermittlung",
            "Eigenverantwortliches Handeln – keine Weisungsbindung",
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/50 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 8: Qualität ───────────────── */
const SlideQualitaet = () => (
  <SlideLayout>
    <Badge className="border-secondary/20 text-secondary bg-secondary/[0.06] mb-8"><Star className="w-3.5 h-3.5 mr-2" /> Qualität</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Qualitätssicherung & Haftung</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <InfoCard icon={Star} title="Bewertungssystem" text="katew betreibt ein Bewertungssystem. Bei wiederholten erheblichen Beschwerden kann katew vorübergehend sperren oder kündigen." delay={0.3} />
      <InfoCard icon={Shield} title="Haftung katew" text="katew haftet ausschließlich für vorsätzliche oder grob fahrlässige Pflichtverletzungen im Rahmen der Vermittlung." delay={0.4} />
      <InfoCard icon={Truck} title="Haftung Fahrunternehmen" text="Das Fahrunternehmen haftet für die ordnungsgemäße Durchführung der Fahrten und stellt katew von Ansprüchen Dritter frei." delay={0.5} color="secondary" />
      <InfoCard icon={Ban} title="Keine Haftung katew für" text="Durchführung, Verspätungen, medizinische Betreuung, Preisgestaltung, Vertragsverletzungen des Fahrunternehmens." delay={0.6} color="destructive" />
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 9: Vertrag ────────────────── */
const SlideVertrag = () => (
  <SlideLayout>
    <Badge className="border-primary/20 text-primary bg-primary/[0.06] mb-8"><FileText className="w-3.5 h-3.5 mr-2" /> Vertragliches</Badge>
    <FadeUp className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Vertrag & Datenschutz</h2>
    </FadeUp>
    <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {[
        { icon: Clock, title: "Laufzeit", items: ["Unbefristeter Vertrag", "Kündigung: 1 Monat zum Monatsende", "Außerordentliches Kündigungsrecht bleibt bestehen"] },
        { icon: Shield, title: "Datenschutz", items: ["Beide Parteien sind eigenständige Verantwortliche (DSGVO)", "Vertrauliche Behandlung aller Daten", "Daten nur zur Fahrt-Durchführung"] },
        { icon: Gavel, title: "Schlussbestimmungen", items: ["Änderungen bedürfen der Textform", "Es gilt deutsches Recht", "Gerichtsstand: Frankfurt am Main", "Salvatorische Klausel"] },
      ].map((section, i) => (
        <motion.div key={section.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          className="group p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
            <section.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-foreground font-bold text-lg mb-4">{section.title}</h3>
          <ul className="space-y-2.5">
            {section.items.map((item, j) => (
              <li key={j} className="text-foreground/45 text-sm flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.7} className="mt-8">
      <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06]">
        <Eye className="w-5 h-5 text-foreground/30 shrink-0" />
        <p className="text-foreground/40 text-sm">Geheimhaltungspflicht besteht auch nach Vertragsende fort.</p>
      </div>
    </FadeUp>
  </SlideLayout>
);

/* ── Slide 10: Kontakt ───────────────── */
const SlideKontakt = () => (
  <SlideLayout>
    <FadeUp className="text-center">
      <img src={logoNew} alt="katew" className="h-36 mx-auto mb-8" />
    </FadeUp>
    <FadeUp delay={0.15} className="text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">Jetzt Anbieter werden</h2>
      <p className="text-foreground/40 text-lg mb-12 leading-relaxed">Starten Sie noch heute und erhalten Sie Fahrtanfragen über Deutschlands führende Vermittlungsplattform für Krankenfahrten.</p>
    </FadeUp>
    <FadeUp delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
      {[
        { icon: Mail, label: "E-Mail", value: "support@katew.de" },
        { icon: Phone, label: "Telefon", value: "+49 69 150 454 09" },
        { icon: Globe, label: "Website", value: "katew.de" },
      ].map((item, i) => (
        <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
          className="group p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-foreground/30 text-xs uppercase tracking-widest mb-1.5 font-medium">{item.label}</p>
          <p className="text-foreground font-semibold">{item.value}</p>
        </motion.div>
      ))}
    </FadeUp>
    <FadeUp delay={0.6} className="flex flex-wrap justify-center gap-4">
      <span className="px-7 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/20">
        <ArrowRight className="w-4 h-4" /> katew.de/fuer-anbieter
      </span>
    </FadeUp>
    <FadeUp delay={0.75} className="mt-10">
      <p className="text-foreground/25 text-xs tracking-wide">AVYTA GmbH · Allerheiligentor 2–4 · 60311 Frankfurt am Main · HRB 96683</p>
    </FadeUp>
  </SlideLayout>
);

export default AnbieterPraesentation;
