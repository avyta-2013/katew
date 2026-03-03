import { useRef } from "react";
import { Download, Building2, Phone, MapPin, Car, CreditCard, ShieldCheck, FileText } from "lucide-react";
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
        *{margin:0;padding:0;box-sizing:border-box;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important}
        body{font-family:'Inter',-apple-system,sans-serif;background:white;color:#1e293b}
        @media print{body{margin:0}@page{size:A4 portrait;margin:0}}
        svg{display:inline-block;vertical-align:middle;overflow:visible;width:10px;height:10px}
        .page{width:210mm;min-height:297mm;max-height:297mm;position:relative;overflow:hidden;page-break-after:always;background:white}
        .grid{display:grid}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.col-span-2{grid-column:span 2/span 2}
        .gap-x-\\[16px\\]{column-gap:16px}.gap-y-\\[6px\\]{row-gap:6px}.gap-\\[40px\\]{gap:40px}
      </style></head><body>${content}</body></html>`);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 600);
  };

  const Field = ({ label, required = false, wide = false }: { label: string; required?: boolean; wide?: boolean }) => (
    <div className={wide ? "col-span-2" : ""}>
      <p style={{ fontSize: "6px", letterSpacing: "0.08em", fontWeight: 600, color: "#94a3b8", marginBottom: "2px", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "#3b82f6", marginLeft: "2px" }}>*</span>}
      </p>
      <div style={{ height: "22px", borderBottom: "1.5px solid #e2e8f0", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)", borderRadius: "3px" }} />
    </div>
  );

  const CheckField = ({ label }: { label: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "2px 8px 2px 5px", background: "#f8fafc", borderRadius: "4px", border: "1px solid #f1f5f9" }}>
      <div style={{ width: "12px", height: "12px", border: "1.5px solid #cbd5e1", borderRadius: "2px", background: "white", flexShrink: 0 }} />
      <span style={{ fontSize: "7px", color: "#475569", fontWeight: 500 }}>{label}</span>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, number, color }: { icon: any; title: string; number: string; color: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
      <div style={{ width: "20px", height: "20px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${color}, ${color}dd)`, boxShadow: `0 2px 6px ${color}30`, color: "white" }}>
        <Icon style={{ width: "10px", height: "10px" }} stroke="white" strokeWidth={2} color="white" />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
        <span style={{ fontSize: "6px", fontWeight: 700, color, opacity: 0.6 }}>{number}</span>
        <h3 style={{ fontSize: "9px", fontWeight: 700, color: "#1e293b", letterSpacing: "0.04em", textTransform: "uppercase" }}>{title}</h3>
      </div>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${color}25, transparent)`, marginLeft: "6px" }} />
    </div>
  );

  const footer = (
    <div style={{ position: "absolute", bottom: "8mm", left: "16mm", right: "16mm", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "6px" }}>
      <p style={{ fontSize: "5.5px", color: "#94a3b8" }}>AVYTA GmbH · Allerheiligentor 2-4 · 60311 Frankfurt am Main · support@katew.de</p>
      <p style={{ fontSize: "5.5px", color: "#94a3b8", fontWeight: 600 }}>katew.de</p>
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

            <div style={{ height: "2px", background: "linear-gradient(90deg, #1e40af, #3b82f6, transparent)", margin: "16px 0 22px 0", borderRadius: "1px" }} />

            {/* Recipient */}
            <div style={{ marginBottom: "22px" }}>
              <div style={{ fontSize: "6.5px", color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Empfänger</div>
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "55%", marginBottom: "5px", height: "14px" }} />
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "55%", marginBottom: "5px", height: "14px" }} />
              <div style={{ borderBottom: "1px solid #e2e8f0", width: "40%", height: "14px" }} />
            </div>

            <div style={{ textAlign: "right", fontSize: "8px", color: "#64748b", marginBottom: "26px" }}>
              Frankfurt am Main, den ____.____.________
            </div>

            <p style={{ fontSize: "12.5px", fontWeight: 800, color: "#0f172a", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Einladung zur Partnerschaft – katew.de Vermittlungsplattform für Krankenfahrten
            </p>

            <p style={{ fontSize: "9px", color: "#334155", marginBottom: "14px", lineHeight: 1.7 }}>
              Sehr geehrte Damen und Herren,
            </p>

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

        {/* ==================== PAGE 2: ANMELDEBOGEN (from Stammdaten) ==================== */}
        <div className="page bg-white shadow-2xl" style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", overflow: "hidden", position: "relative", fontFamily: "'Inter', -apple-system, sans-serif" }}>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)" }} />

          {/* Header */}
          <div style={{ padding: "12mm 16mm 8mm 16mm", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logoNew} alt="katew" style={{ height: "30px" }} />
                <div style={{ borderLeft: "2px solid #e2e8f0", paddingLeft: "10px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 800, color: "#1e293b", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Anmeldebogen</p>
                  <p style={{ fontSize: "6.5px", color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "1px" }}>Stammdaten · Standort · Dokumente</p>
                </div>
              </div>
              <div style={{ textAlign: "right", background: "white", padding: "6px 10px", borderRadius: "6px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "6.5px", color: "#94a3b8", marginBottom: "2px" }}>Datum: ____.____.________</p>
                <p style={{ fontSize: "6.5px", color: "#94a3b8" }}>Anbieter-ID: ______________</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "0 16mm 10mm 16mm" }}>
            <SectionHeader icon={Building2} title="Unternehmensdaten" number="01" color="#2563eb" />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[6px]" style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <Field label="Unternehmensname" required wide />
              <Field label="Vorname" required />
              <Field label="Nachname" required />
              <Field label="Straße & Hausnummer" required />
              <Field label="Postleitzahl" required />
              <Field label="Stadt" required />
              <Field label="Amtsgericht" />
            </div>

            <SectionHeader icon={Phone} title="Kontaktdaten" number="02" color="#0ea5e9" />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[6px]" style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <Field label="Telefon" required />
              <Field label="Telefax" />
              <Field label="Mobil / WhatsApp" required />
              <Field label="E-Mail" required />
            </div>

            <SectionHeader icon={Car} title="Dienstleistungskatalog" number="03" color="#6366f1" />
            <div style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                <div style={{ background: "#fafbff", borderRadius: "6px", padding: "7px 10px", border: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: "6px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "5px", textTransform: "uppercase" }}>
                    Anbietertyp <span style={{ color: "#3b82f6" }}>*</span>
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <CheckField label="Taxiunternehmen" />
                    <CheckField label="Mietwagen" />
                  </div>
                </div>
                <div style={{ background: "#fafbff", borderRadius: "6px", padding: "7px 10px", border: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: "6px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "5px", textTransform: "uppercase" }}>
                    Kostenträger <span style={{ color: "#3b82f6" }}>*</span>
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <CheckField label="Transportschein" />
                    <CheckField label="Selbstzahler" />
                  </div>
                </div>
                <div style={{ background: "#fafbff", borderRadius: "6px", padding: "7px 10px", border: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: "6px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "5px", textTransform: "uppercase" }}>
                    Transportmittel <span style={{ color: "#3b82f6" }}>*</span>
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <CheckField label="Sitzend" />
                    <CheckField label="Rollstuhl" />
                    <CheckField label="Tragestuhl" />
                    <CheckField label="Liegend" />
                  </div>
                </div>
              </div>
            </div>

            {/* Selbstzahler-Preise */}
            <div style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #8b5cf6, #8b5cf6dd)", boxShadow: "0 2px 6px #8b5cf630", color: "white" }}>
                  <CreditCard style={{ width: "10px", height: "10px" }} stroke="white" strokeWidth={2} color="white" />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontSize: "6px", fontWeight: 700, color: "#8b5cf6", opacity: 0.6 }}>03b</span>
                  <h3 style={{ fontSize: "9px", fontWeight: 700, color: "#1e293b", letterSpacing: "0.04em", textTransform: "uppercase" }}>Selbstzahler-Preise (pro Fahrt)</h3>
                </div>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #8b5cf625, transparent)", marginLeft: "6px" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px" }}>
                {["Sitzend", "Rollstuhl", "Tragestuhl", "Liegend"].map((t) => (
                  <div key={t} style={{ background: "#faf5ff", borderRadius: "6px", padding: "6px 8px", border: "1px solid #f3e8ff" }}>
                    <p style={{ fontSize: "6px", letterSpacing: "0.08em", fontWeight: 600, color: "#8b5cf6", marginBottom: "4px", textTransform: "uppercase", textAlign: "center" }}>{t}</p>
                    {["Grundpreis", "inkl. KM", "Preis je KM"].map((sub) => (
                      <div key={sub} style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "3px" }}>
                        <span style={{ fontSize: "5.5px", color: "#7c3aed", fontWeight: 500, width: "30px", flexShrink: 0 }}>{sub}</span>
                        <div style={{ height: "16px", flex: 1, borderBottom: "1.5px solid #d8b4fe", background: "linear-gradient(180deg, #faf5ff 0%, #fff 100%)", borderRadius: "2px" }} />
                        <span style={{ fontSize: "7px", fontWeight: 700, color: "#7c3aed" }}>€</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <SectionHeader icon={MapPin} title="Standort & Einsatzgebiet" number="04" color="#0ea5e9" />
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[6px]" style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <Field label="Betriebssitz / Start-Adresse" required />
              <Field label="Umkreis (km)" required />
            </div>

            <SectionHeader icon={ShieldCheck} title="Erforderliche Dokumente" number="05" color="#22c55e" />
            <div style={{ paddingLeft: "2px", marginBottom: "22px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <CheckField label="Taxi- oder Mietwagenkonzession (Kopie)" />
              </div>
            </div>

            <SectionHeader icon={FileText} title="AGB-Akzeptanz" number="06" color="#f59e0b" />
            <div style={{ paddingLeft: "2px", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", background: "#fffbeb", borderRadius: "6px", padding: "6px 10px", border: "1px solid #fef3c7" }}>
                <div style={{ width: "12px", height: "12px", border: "1.5px solid #f59e0b", borderRadius: "2px", background: "white", flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontSize: "6.5px", color: "#78350f", lineHeight: 1.5 }}>
                  Hiermit bestätige ich, dass ich die <span style={{ fontWeight: 700 }}>Allgemeinen Geschäftsbedingungen (AGB)</span> der AVYTA GmbH für Anbieter gelesen habe und diese vollumfänglich akzeptiere. Die AGB sind einsehbar unter <span style={{ fontWeight: 600, color: "#2563eb" }}>katew.de/privacy/agb-anbieter</span>.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div style={{ marginTop: "6px" }}>
              <div style={{ height: "1px", background: "linear-gradient(90deg, #e2e8f0, transparent)", marginBottom: "10px" }} />
              <div className="grid grid-cols-2 gap-[40px]">
                <div>
                  <p style={{ fontSize: "6px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "22px" }}>Ort, Datum</p>
                  <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
                </div>
                <div>
                  <p style={{ fontSize: "6px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "22px" }}>Unterschrift / Stempel</p>
                  <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
                </div>
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
