import { useRef } from "react";
import { Download, Building2, Phone, Car, ShieldCheck, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoNew from "@/assets/logo-new.png";

const AnbieterBriefbogenPDF = () => {
  const pagesRef = useRef<HTMLDivElement>(null);

  const exportPDF = () => {
    if (!pagesRef.current) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const content = pagesRef.current.innerHTML;
    printWindow.document.write(`<!DOCTYPE html><html><head><title>katew Anschreiben & Anmeldung</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',-apple-system,sans-serif;background:white;color:#1e293b}
        @media print{body{margin:0}@page{size:A4 portrait;margin:0}}
        svg{display:inline-block;vertical-align:middle}
        .page{width:210mm;min-height:297mm;max-height:297mm;position:relative;overflow:hidden;page-break-after:always;background:white}
      </style></head><body>${content}</body></html>`);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 600);
  };

  const s = {
    label: { fontSize: "6.5px", letterSpacing: "0.08em", fontWeight: 600 as const, color: "#64748b", marginBottom: "4px", textTransform: "uppercase" as const },
    fieldBox: { height: "26px", borderBottom: "1.5px solid #e2e8f0", background: "#fafbfc", borderRadius: "4px" },
    checkWrap: { display: "flex", alignItems: "center" as const, gap: "7px", padding: "4px 10px 4px 6px", background: "white", borderRadius: "6px", border: "1px solid #e2e8f0" },
    checkBox: { width: "13px", height: "13px", border: "1.5px solid #cbd5e1", borderRadius: "3px", background: "white", flexShrink: 0 },
    checkLabel: { fontSize: "7.5px", color: "#334155", fontWeight: 500 as const },
    sectionCard: { background: "white", borderRadius: "8px", padding: "10px 12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
    catLabel: { fontSize: "6px", letterSpacing: "0.1em", fontWeight: 700 as const, color: "#6366f1", marginBottom: "7px", textTransform: "uppercase" as const },
  };

  const Field = ({ label, required = false, wide = false }: { label: string; required?: boolean; wide?: boolean }) => (
    <div style={wide ? { gridColumn: "span 2" } : {}}>
      <p style={s.label}>{label}{required && <span style={{ color: "#2563eb", marginLeft: "2px" }}>*</span>}</p>
      <div style={s.fieldBox} />
    </div>
  );

  const Check = ({ label }: { label: string }) => (
    <div style={s.checkWrap}>
      <div style={s.checkBox} />
      <span style={s.checkLabel}>{label}</span>
    </div>
  );

  const SectionHead = ({ icon: Icon, title, num, color }: { icon: any; title: string; num: string; color: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      <div style={{ width: "24px", height: "24px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", background: color, color: "white" }}>
        <Icon style={{ width: "12px", height: "12px" }} stroke="white" strokeWidth={2} color="white" />
      </div>
      <span style={{ fontSize: "7px", fontWeight: 700, color, opacity: 0.5, fontVariantNumeric: "tabular-nums" }}>{num}</span>
      <h3 style={{ fontSize: "10px", fontWeight: 700, color: "#0f172a", letterSpacing: "0.03em", textTransform: "uppercase" }}>{title}</h3>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${color}20, transparent)`, marginLeft: "4px" }} />
    </div>
  );

  const footer = (
    <div style={{ position: "absolute", bottom: "8mm", left: "18mm", right: "18mm", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1.5px solid #f1f5f9", paddingTop: "8px" }}>
      <p style={{ fontSize: "5.5px", color: "#94a3b8" }}>AVYTA GmbH · Allerheiligentor 2-4 · 60311 Frankfurt am Main · HRB 96683 · Geschäftsführer: Dino Lalic</p>
      <p style={{ fontSize: "5.5px", color: "#94a3b8" }}>support@katew.de · +49 69 150 454 09 · katew.de</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center py-8 px-4">
      <div className="mb-6">
        <Button onClick={exportPDF} className="gap-2 bg-gradient-to-r from-[hsl(221,83%,53%)] to-[hsl(221,83%,63%)] text-white hover:opacity-90 rounded-xl px-8 h-12 text-sm font-semibold shadow-lg">
          <Download className="w-4 h-4" />
          Als PDF herunterladen
        </Button>
      </div>

      <div ref={pagesRef}>
        {/* ==================== PAGE 1: ANSCHREIBEN ==================== */}
        <div className="page bg-white shadow-2xl mb-8" style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", overflow: "hidden", position: "relative", fontFamily: "'Inter', -apple-system, sans-serif" }}>
          {/* Top accent bar */}
          <div style={{ height: "5px", background: "linear-gradient(90deg, #1e40af, #2563eb, #3b82f6)" }} />

          {/* Subtle side accent */}
          <div style={{ position: "absolute", top: "5px", left: 0, width: "3px", height: "80px", background: "linear-gradient(180deg, #2563eb, transparent)", borderRadius: "0 2px 2px 0" }} />

          {/* Letterhead header */}
          <div style={{ padding: "16mm 18mm 0 18mm" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <img src={logoNew} alt="katew" style={{ height: "40px", marginBottom: "4px" }} />
                <p style={{ fontSize: "6px", color: "#94a3b8", letterSpacing: "0.2em", textTransform: "uppercase", marginLeft: "2px" }}>Vermittlungsplattform für Krankenfahrten</p>
              </div>
              <div style={{ textAlign: "right", fontSize: "7px", color: "#64748b", lineHeight: 1.9, background: "#f8fafc", padding: "10px 14px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "7.5px" }}>AVYTA GmbH</p>
                <p>Allerheiligentor 2-4</p>
                <p>60311 Frankfurt am Main</p>
                <div style={{ height: "1px", background: "#e2e8f0", margin: "4px 0" }} />
                <p>Tel: +49 69 150 454 09</p>
                <p>E-Mail: support@katew.de</p>
                <p>Web: www.katew.de</p>
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: "2px", background: "linear-gradient(90deg, #1e40af, #3b82f6, transparent)", margin: "16px 0 22px 0", borderRadius: "1px" }} />

            {/* Recipient placeholder */}
            <div style={{ marginBottom: "22px" }}>
              <div style={{ fontSize: "6.5px", color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Empfänger</div>
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "55%", marginBottom: "5px", height: "14px" }} />
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "55%", marginBottom: "5px", height: "14px" }} />
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "40%", height: "14px" }} />
            </div>

            {/* Date */}
            <div style={{ textAlign: "right", fontSize: "8px", color: "#64748b", marginBottom: "26px" }}>
              Frankfurt am Main, den ____.____.________
            </div>

            {/* Subject */}
            <p style={{ fontSize: "12.5px", fontWeight: 800, color: "#0f172a", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Einladung zur Partnerschaft – katew.de Vermittlungsplattform für Krankenfahrten
            </p>

            {/* Salutation */}
            <p style={{ fontSize: "9px", color: "#334155", marginBottom: "14px", lineHeight: 1.7 }}>
              Sehr geehrte Damen und Herren,
            </p>

            {/* Body text */}
            <div style={{ fontSize: "8.5px", color: "#475569", lineHeight: 1.9 }}>
              <p style={{ marginBottom: "10px" }}>
                wir freuen uns, Ihnen <span style={{ fontWeight: 700, color: "#0f172a" }}>katew.de</span> vorzustellen – die digitale Vermittlungsplattform
                für Krankenfahrten in Deutschland. Unsere Plattform verbindet Krankenhäuser, Pflegeeinrichtungen und Patienten
                direkt mit qualifizierten Beförderungsunternehmen wie Ihrem.
              </p>
              <p style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Was bieten wir Ihnen?</span><br />
                Über katew.de erhalten Sie Zugang zu einem wachsenden Netzwerk aus Partnern, die regelmäßig Krankenfahrten
                buchen. Sie profitieren von einer einfachen Auftragsverwaltung, transparenten Prozessen und einer modernen
                Plattform, die Ihnen neue Kundengruppen erschließt – ohne Werbekosten oder aufwendige Akquise.
              </p>
              <p style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Was kostet die Buchung?</span><br />
                Die Anmeldung und Listung auf katew.de ist für Sie als Anbieter <span style={{ fontWeight: 700, color: "#2563eb" }}>kostenlos</span>.
                Pro vermittelte Buchung fällt eine faire Vermittlungsgebühr an, die transparent in unseren AGB geregelt ist.
                Es gibt keine monatlichen Grundgebühren und keine versteckten Kosten.
              </p>
              <p style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: 700, color: "#0f172a" }}>Wie können Sie sich anmelden?</span><br />
                Bitte füllen Sie den beigefügten <span style={{ fontWeight: 700 }}>Anmeldebogen (Seite 2)</span> vollständig aus
                und senden Sie diesen unterschrieben an uns zurück – per E-Mail an{" "}
                <span style={{ fontWeight: 700, color: "#2563eb" }}>support@katew.de</span> oder postalisch an die oben
                genannte Adresse. Nach Prüfung Ihrer Unterlagen schalten wir Ihr Profil zeitnah frei.
              </p>
            </div>

            {/* Highlight box */}
            <div style={{ background: "linear-gradient(135deg, #eff6ff, #f0fdf4)", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "14px 18px", margin: "18px 0" }}>
              <p style={{ fontSize: "8.5px", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>
                📋 Ihre nächsten Schritte:
              </p>
              <div style={{ fontSize: "7.5px", color: "#475569", lineHeight: 1.9 }}>
                <p>1. Anmeldebogen auf Seite 2 ausfüllen und unterschreiben</p>
                <p>2. Taxi- oder Mietwagenkonzession (Kopie) beilegen</p>
                <p>3. Dokumente an support@katew.de senden</p>
              </div>
            </div>

            {/* Closing */}
            <div style={{ fontSize: "8.5px", color: "#475569", lineHeight: 1.9, marginTop: "18px" }}>
              <p style={{ marginBottom: "8px" }}>
                Wir freuen uns auf eine erfolgreiche Zusammenarbeit und stehen Ihnen bei Fragen jederzeit zur Verfügung.
              </p>
              <p style={{ marginBottom: "28px" }}>Mit freundlichen Grüßen</p>
              <p style={{ fontWeight: 800, color: "#0f172a", fontSize: "9.5px" }}>Dino Lalic</p>
              <p style={{ fontSize: "7.5px", color: "#64748b" }}>Geschäftsführer · katew.de</p>
            </div>
          </div>

          {footer}
        </div>

        {/* ==================== PAGE 2: ANMELDEBOGEN ==================== */}
        <div className="page bg-white shadow-2xl" style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", overflow: "hidden", position: "relative", fontFamily: "'Inter', -apple-system, sans-serif" }}>
          <div style={{ height: "5px", background: "linear-gradient(90deg, #1e40af, #2563eb, #3b82f6)" }} />

          {/* Header */}
          <div style={{ padding: "14mm 18mm 10mm 18mm", background: "linear-gradient(180deg, #f8fafc 0%, #fff 100%)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img src={logoNew} alt="katew" style={{ height: "34px" }} />
                <div style={{ borderLeft: "2.5px solid #2563eb", paddingLeft: "14px" }}>
                  <p style={{ fontSize: "15px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Anmeldebogen</p>
                  <p style={{ fontSize: "7px", color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "3px" }}>Stammdaten · Leistungen · Dokumente</p>
                </div>
              </div>
              <div style={{ textAlign: "right", background: "white", padding: "8px 14px", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: "6.5px", color: "#94a3b8", marginBottom: "3px" }}>Datum: ____.____.________</p>
                <p style={{ fontSize: "6.5px", color: "#94a3b8" }}>Anbieter-ID: ______________</p>
              </div>
            </div>
          </div>

          {/* Form content */}
          <div style={{ padding: "0 18mm 10mm 18mm" }}>
            <SectionHead icon={Building2} title="Unternehmensdaten" num="01" color="#2563eb" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: "18px", paddingLeft: "2px" }}>
              <Field label="Unternehmensname" required wide />
              <Field label="Vorname" required />
              <Field label="Nachname" required />
              <Field label="Straße & Hausnummer" required />
              <Field label="Postleitzahl" required />
              <Field label="Stadt" required />
              <Field label="Amtsgericht" />
            </div>

            <SectionHead icon={Phone} title="Kontaktdaten" num="02" color="#0ea5e9" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: "18px", paddingLeft: "2px" }}>
              <Field label="Telefon" required />
              <Field label="Telefax" />
              <Field label="Mobil / WhatsApp" required />
              <Field label="E-Mail" required />
            </div>

            <SectionHead icon={Car} title="Dienstleistungskatalog" num="03" color="#6366f1" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "18px", paddingLeft: "2px" }}>
              <div style={s.sectionCard}>
                <p style={s.catLabel}>Anbietertyp <span style={{ color: "#2563eb" }}>*</span></p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <Check label="Taxiunternehmen" />
                  <Check label="Mietwagen" />
                </div>
              </div>
              <div style={s.sectionCard}>
                <p style={s.catLabel}>Kostenträger <span style={{ color: "#2563eb" }}>*</span></p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <Check label="Transportschein" />
                  <Check label="Selbstzahler" />
                </div>
              </div>
              <div style={s.sectionCard}>
                <p style={s.catLabel}>Transportmittel <span style={{ color: "#2563eb" }}>*</span></p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <Check label="Sitzend" />
                  <Check label="Rollstuhl" />
                  <Check label="Tragestuhl" />
                  <Check label="Liegend" />
                </div>
              </div>
            </div>

            {/* Selbstzahler Preise */}
            <SectionHead icon={Car} title="Selbstzahler-Preise (pro Fahrt)" num="03b" color="#8b5cf6" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px", marginBottom: "18px", paddingLeft: "2px" }}>
              {["Sitzend", "Rollstuhl", "Tragestuhl", "Liegend"].map((t) => (
                <div key={t} style={{ background: "#faf5ff", borderRadius: "8px", padding: "9px 10px", border: "1px solid #ede9fe" }}>
                  <p style={{ fontSize: "6.5px", letterSpacing: "0.08em", fontWeight: 700, color: "#7c3aed", marginBottom: "6px", textTransform: "uppercase", textAlign: "center" }}>{t}</p>
                  {["Grundpreis", "inkl. KM", "Preis je KM"].map((sub) => (
                    <div key={sub} style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "5.5px", color: "#7c3aed", fontWeight: 500, width: "32px", flexShrink: 0 }}>{sub}</span>
                      <div style={{ height: "18px", flex: 1, borderBottom: "1.5px solid #d8b4fe", background: "#faf5ff", borderRadius: "3px" }} />
                      <span style={{ fontSize: "7px", fontWeight: 700, color: "#7c3aed" }}>€</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: "18px", paddingLeft: "2px" }}>
              <Field label="Betriebssitz / Start-Adresse" required wide />
              <Field label="Umkreis (km)" required />
            </div>

            <SectionHead icon={ShieldCheck} title="Erforderliche Dokumente" num="05" color="#22c55e" />
            <div style={{ display: "flex", gap: "8px", marginBottom: "18px", paddingLeft: "2px" }}>
              <Check label="Taxi- oder Mietwagenkonzession (Kopie)" />
            </div>

            {/* AGB Acceptance */}
            <SectionHead icon={FileCheck} title="AGB-Akzeptanz" num="06" color="#f59e0b" />
            <div style={{ background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "10px", padding: "12px 14px", marginBottom: "18px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <div style={{ width: "15px", height: "15px", border: "1.5px solid #f59e0b", borderRadius: "3px", background: "white", flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontSize: "7.5px", color: "#475569", lineHeight: 1.8 }}>
                  Hiermit bestätige ich, dass ich die <span style={{ fontWeight: 700, color: "#0f172a" }}>Allgemeinen Geschäftsbedingungen (AGB) für Anbieter</span> der
                  AVYTA GmbH gelesen und akzeptiert habe. Die AGB sind jederzeit einsehbar unter:{" "}
                  <span style={{ fontWeight: 700, color: "#2563eb" }}>katew.de/privacy/agb-anbieter</span>
                </p>
              </div>
            </div>

            {/* Signature */}
            <div style={{ height: "1.5px", background: "linear-gradient(90deg, #e2e8f0, transparent)", marginBottom: "16px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "26px" }}>Ort, Datum</p>
                <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
              </div>
              <div>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "26px" }}>Unterschrift / Stempel</p>
                <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
              </div>
            </div>
          </div>

          {footer}
        </div>
      </div>
    </div>
  );
};

export default AnbieterBriefbogenPDF;
