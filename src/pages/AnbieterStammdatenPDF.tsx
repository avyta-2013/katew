import { useRef } from "react";
import { Download, Building2, Phone, MapPin, Truck, FileText, Car, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logoNew from "@/assets/logo-new.png";

const AnbieterStammdatenPDF = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!pageRef.current) return;
    
    // Use print-based PDF export for reliability
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = pageRef.current.outerHTML;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>katew Anbieter-Stammdaten</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', -apple-system, sans-serif; background: white; }
          @media print {
            body { margin: 0; }
            @page { size: A4 portrait; margin: 0; }
          }
          /* Tailwind grid utilities needed */
          .grid { display: grid; }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .col-span-2 { grid-column: span 2 / span 2; }
          .gap-x-\\[16px\\] { column-gap: 16px; }
          .gap-y-\\[10px\\] { row-gap: 10px; }
          .gap-\\[40px\\] { gap: 40px; }
          .mb-\\[20px\\] { margin-bottom: 20px; }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    
    // Wait for fonts and images to load
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const Field = ({ label, required = false, wide = false }: { label: string; required?: boolean; wide?: boolean }) => (
    <div className={wide ? "col-span-2" : ""}>
      <p style={{ fontSize: "6.5px", letterSpacing: "0.08em", fontWeight: 600, color: "#94a3b8", marginBottom: "4px", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "#3b82f6", marginLeft: "2px" }}>*</span>}
      </p>
      <div style={{ height: "26px", borderBottom: "1.5px solid #e2e8f0", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)", borderRadius: "4px" }} />
    </div>
  );

  const CheckField = ({ label }: { label: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "4px 10px 4px 6px", background: "#f8fafc", borderRadius: "6px", border: "1px solid #f1f5f9" }}>
      <div style={{ width: "14px", height: "14px", border: "1.5px solid #cbd5e1", borderRadius: "3px", background: "white", flexShrink: 0 }} />
      <span style={{ fontSize: "8px", color: "#475569", fontWeight: 500 }}>{label}</span>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, number, color }: { icon: any; title: string; number: string; color: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
      <div style={{
        width: "24px", height: "24px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(135deg, ${color}, ${color}dd)`, boxShadow: `0 2px 8px ${color}30`, color: "white"
      }}>
        <Icon style={{ width: "12px", height: "12px" }} stroke="white" strokeWidth={2} color="white" />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
        <span style={{ fontSize: "7px", fontWeight: 700, color: color, opacity: 0.6 }}>{number}</span>
        <h3 style={{ fontSize: "10px", fontWeight: 700, color: "#1e293b", letterSpacing: "0.04em", textTransform: "uppercase" }}>{title}</h3>
      </div>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${color}25, transparent)`, marginLeft: "8px" }} />
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

      {/* A4 Page */}
      <div
        ref={pageRef}
        className="bg-white shadow-2xl"
        style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", overflow: "hidden", padding: "0", fontFamily: "'Inter', -apple-system, sans-serif", position: "relative" }}
      >
        {/* Top gradient bar */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)" }} />

        {/* Header area with subtle background */}
        <div style={{ padding: "18mm 18mm 12mm 18mm", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={logoNew} alt="katew" style={{ height: "36px" }} />
              <div style={{ borderLeft: "2px solid #e2e8f0", paddingLeft: "12px" }}>
                <p style={{ fontSize: "16px", fontWeight: 800, color: "#1e293b", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Anbieter-Profil</p>
                <p style={{ fontSize: "7.5px", color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>Stammdaten · Standort · Dokumente</p>
              </div>
            </div>
            <div style={{ textAlign: "right", background: "white", padding: "8px 14px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: "7px", color: "#94a3b8", marginBottom: "3px" }}>Datum: ____.____.________</p>
              <p style={{ fontSize: "7px", color: "#94a3b8" }}>Anbieter-ID: ______________</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "0 18mm 14mm 18mm" }}>

          {/* Section 1: Unternehmen */}
          <SectionHeader icon={Building2} title="Unternehmensdaten" number="01" color="#2563eb" />
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px] mb-[20px]" style={{ paddingLeft: "2px" }}>
            <Field label="Unternehmensname" required wide />
            <Field label="Vorname" required />
            <Field label="Nachname" required />
            <Field label="Straße & Hausnummer" required />
            <Field label="Postleitzahl" required />
            <Field label="Stadt" required />
            <Field label="Amtsgericht" />
          </div>

          {/* Section 2: Kontakt */}
          <SectionHeader icon={Phone} title="Kontaktdaten" number="02" color="#0ea5e9" />
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px] mb-[20px]" style={{ paddingLeft: "2px" }}>
            <Field label="Telefon" required />
            <Field label="Telefax" />
            <Field label="Mobil / WhatsApp" required />
            <Field label="E-Mail" required />
          </div>

          {/* Section 3: Dienstleistung */}
          <SectionHeader icon={Car} title="Dienstleistungskatalog" number="03" color="#6366f1" />
          <div style={{ paddingLeft: "2px", marginBottom: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
              {/* Anbietertyp */}
              <div style={{ background: "#fafbff", borderRadius: "8px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "8px", textTransform: "uppercase" }}>
                  Anbietertyp <span style={{ color: "#3b82f6" }}>*</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <CheckField label="Taxiunternehmen" />
                  <CheckField label="Mietwagen" />
                </div>
              </div>
              {/* Kostenträger */}
              <div style={{ background: "#fafbff", borderRadius: "8px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "8px", textTransform: "uppercase" }}>
                  Kostenträger <span style={{ color: "#3b82f6" }}>*</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <CheckField label="Transportschein" />
                  <CheckField label="Selbstzahler" />
                </div>
              </div>
              {/* Transportmittel */}
              <div style={{ background: "#fafbff", borderRadius: "8px", padding: "10px 12px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 700, color: "#6366f1", marginBottom: "8px", textTransform: "uppercase" }}>
                  Transportmittel <span style={{ color: "#3b82f6" }}>*</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <CheckField label="Sitzend" />
                  <CheckField label="Rollstuhl" />
                  <CheckField label="Tragestuhl" />
                  <CheckField label="Liegend" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3b: Selbstzahler-Preise */}
          <div style={{ paddingLeft: "2px", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #8b5cf6, #8b5cf6dd)", boxShadow: "0 2px 8px #8b5cf630", color: "white" }}>
                <CreditCard style={{ width: "12px", height: "12px" }} stroke="white" strokeWidth={2} color="white" />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span style={{ fontSize: "7px", fontWeight: 700, color: "#8b5cf6", opacity: 0.6 }}>03b</span>
                <h3 style={{ fontSize: "10px", fontWeight: 700, color: "#1e293b", letterSpacing: "0.04em", textTransform: "uppercase" }}>Selbstzahler-Preise (pro Fahrt)</h3>
              </div>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #8b5cf625, transparent)", marginLeft: "8px" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
              {["Sitzend", "Rollstuhl", "Tragestuhl", "Liegend"].map((t) => (
                <div key={t} style={{ background: "#faf5ff", borderRadius: "8px", padding: "10px 12px", border: "1px solid #f3e8ff" }}>
                  <p style={{ fontSize: "6.5px", letterSpacing: "0.08em", fontWeight: 600, color: "#8b5cf6", marginBottom: "8px", textTransform: "uppercase", textAlign: "center" }}>{t}</p>
                  {["Grundpreis", "inkl. KM", "Preis je KM"].map((sub) => (
                    <div key={sub} style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "5px" }}>
                      <span style={{ fontSize: "6px", color: "#7c3aed", fontWeight: 500, width: "36px", flexShrink: 0 }}>{sub}</span>
                      <div style={{ height: "20px", flex: 1, borderBottom: "1.5px solid #d8b4fe", background: "linear-gradient(180deg, #faf5ff 0%, #fff 100%)", borderRadius: "3px" }} />
                      <span style={{ fontSize: "8px", fontWeight: 700, color: "#7c3aed" }}>€</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Standort */}
          <SectionHeader icon={MapPin} title="Standort & Einsatzgebiet" number="04" color="#0ea5e9" />
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px] mb-[20px]" style={{ paddingLeft: "2px" }}>
            <Field label="Betriebssitz / Start-Adresse" required wide />
            <Field label="Umkreis (km)" required />
          </div>

          {/* Section 5: Dokumente */}
          <SectionHeader icon={ShieldCheck} title="Erforderliche Dokumente" number="05" color="#22c55e" />
          <div style={{ paddingLeft: "2px", marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <CheckField label="Mietwagenkonzession (Kopie)" />
            </div>
          </div>

          {/* Signature area */}
          <div style={{ marginTop: "10px" }}>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #e2e8f0, transparent)", marginBottom: "16px" }} />
            <div className="grid grid-cols-2 gap-[40px]">
              <div>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "28px" }}>Ort, Datum</p>
                <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
              </div>
              <div>
                <p style={{ fontSize: "6.5px", letterSpacing: "0.1em", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", marginBottom: "28px" }}>Unterschrift / Stempel</p>
                <div style={{ borderBottom: "1.5px solid #cbd5e1" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: "10mm", left: "18mm", right: "18mm", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "8px" }}>
          <p style={{ fontSize: "6px", color: "#94a3b8" }}>AVYTA GmbH · Allerheiligentor 2-4 · 60311 Frankfurt am Main · support@katew.de</p>
          <p style={{ fontSize: "6px", color: "#94a3b8", fontWeight: 600 }}>katew.de</p>
        </div>
      </div>
    </div>
  );
};

export default AnbieterStammdatenPDF;
