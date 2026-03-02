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
    try {
      const element = pageRef.current;
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.position = "fixed";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      document.body.appendChild(clone);
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
        width: clone.scrollWidth,
        height: clone.scrollHeight,
        removeContainer: true,
      });
      
      document.body.removeChild(clone);
      
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      pdf.save("katew-anbieter-stammdaten.pdf");
    } catch (err) {
      console.error("PDF export error:", err);
      // Fallback: try without clone
      const canvas = await html2canvas(pageRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
      });
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      pdf.save("katew-anbieter-stammdaten.pdf");
    }
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
        background: `linear-gradient(135deg, ${color}, ${color}dd)`, boxShadow: `0 2px 8px ${color}30`
      }}>
        <Icon style={{ width: "12px", height: "12px", color: "white" }} />
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
