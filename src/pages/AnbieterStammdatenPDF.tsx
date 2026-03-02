import { useRef } from "react";
import { Download, Building2, Phone, Mail, MapPin, Truck, Route, Users, Target, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logoNew from "@/assets/logo-new.png";

const AnbieterStammdatenPDF = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!pageRef.current) return;
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
  };

  const Field = ({ label, required = false, wide = false }: { label: string; required?: boolean; wide?: boolean }) => (
    <div className={wide ? "col-span-2" : ""}>
      <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[3px]">
        {label}{required && <span className="text-[#ef4444] ml-0.5">*</span>}
      </p>
      <div className="h-[22px] border-b border-[#e2e8f0] bg-[#f8fafc] rounded-[3px]" />
    </div>
  );

  const CheckField = ({ label }: { label: string }) => (
    <div className="flex items-center gap-[6px]">
      <div className="w-[13px] h-[13px] border border-[#cbd5e1] rounded-[2px] bg-white shrink-0" />
      <span className="text-[8px] text-[#475569]">{label}</span>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, color }: { icon: any; title: string; color: string }) => (
    <div className="flex items-center gap-[8px] mb-[10px]">
      <div className={`w-[22px] h-[22px] rounded-[5px] flex items-center justify-center`} style={{ background: `${color}15` }}>
        <Icon className="w-[12px] h-[12px]" style={{ color }} />
      </div>
      <h3 className="text-[10px] font-bold text-[#1e293b] tracking-wide uppercase">{title}</h3>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#e2e8f0] to-transparent ml-2" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center py-8 px-4">
      {/* Download Button */}
      <div className="mb-6">
        <Button onClick={exportPDF} className="gap-2 bg-gradient-to-r from-[hsl(221,83%,53%)] to-[hsl(142,76%,46%)] text-white hover:opacity-90 rounded-xl px-8 h-12 text-sm font-semibold shadow-lg">
          <Download className="w-4 h-4" />
          Als PDF herunterladen
        </Button>
      </div>

      {/* A4 Page */}
      <div
        ref={pageRef}
        className="bg-white shadow-2xl"
        style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", overflow: "hidden", padding: "14mm 16mm 14mm 16mm", fontFamily: "'Inter', -apple-system, sans-serif", position: "relative" }}
      >
        {/* Decorative top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, hsl(221,83%,53%), hsl(142,76%,46%))" }} />

        {/* Header */}
        <div className="flex items-center justify-between mb-[16px]">
          <div className="flex items-center gap-[10px]">
            <img src={logoNew} alt="katew" style={{ height: "32px" }} />
            <div>
              <p className="text-[14px] font-bold text-[#1e293b] tracking-tight">Anbieter-Profil</p>
              <p className="text-[7px] text-[#94a3b8] tracking-wider uppercase">Stammdaten & Standort</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[7px] text-[#94a3b8]">Datum: ____.____.________</p>
            <p className="text-[7px] text-[#94a3b8] mt-[2px]">Anbieter-ID: ______________</p>
          </div>
        </div>

        <div style={{ height: "1px", background: "linear-gradient(90deg, hsl(221,83%,53%,0.2), hsl(142,76%,46%,0.1), transparent)", marginBottom: "14px" }} />

        {/* Section 1: Unternehmen */}
        <SectionHeader icon={Building2} title="Unternehmensdaten" color="#2563eb" />
        <div className="grid grid-cols-2 gap-x-[14px] gap-y-[8px] mb-[16px] pl-[4px]">
          <Field label="Unternehmensname" required wide />
          <Field label="Vorname" required />
          <Field label="Nachname" required />
          <Field label="Straße & Hausnummer" required />
          <Field label="Postleitzahl" required />
          <Field label="Stadt" required />
          <Field label="Amtsgericht" />
        </div>

        {/* Section 2: Kontakt */}
        <SectionHeader icon={Phone} title="Kontaktdaten" color="#22c55e" />
        <div className="grid grid-cols-2 gap-x-[14px] gap-y-[8px] mb-[16px] pl-[4px]">
          <Field label="Telefon" required />
          <Field label="Telefax" />
          <Field label="Mobil / WhatsApp" required />
          <Field label="E-Mail" required />
        </div>

        {/* Section 3: Dienstleistung */}
        <SectionHeader icon={Truck} title="Dienstleistungskatalog" color="#f59e0b" />
        <div className="mb-[10px] pl-[4px]">
          <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[6px]">Anbietertyp *</p>
          <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
            <CheckField label="Taxiunternehmen" />
            <CheckField label="Mietwagen" />
          </div>
        </div>
        <div className="mb-[10px] pl-[4px]">
          <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[6px]">Kostenträger *</p>
          <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
            <CheckField label="Transportschein" />
            <CheckField label="Selbstzahler" />
          </div>
        </div>
        <div className="mb-[16px] pl-[4px]">
          <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[6px]">Transportmittel *</p>
          <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
            <CheckField label="Sitzend" />
            <CheckField label="Rollstuhl" />
            <CheckField label="Tragestuhl" />
            <CheckField label="Liegend" />
          </div>
        </div>

        {/* Section 4: Standort */}
        <SectionHeader icon={MapPin} title="Standort & Einsatzgebiet" color="#3b82f6" />
        <div className="grid grid-cols-2 gap-x-[14px] gap-y-[8px] mb-[16px] pl-[4px]">
          <Field label="Betriebssitz / Start-Adresse" required wide />
          <Field label="Umkreis (km)" required />
        </div>

        {/* Section 5: Dokumente */}
        <SectionHeader icon={FileText} title="Erforderliche Dokumente" color="#8b5cf6" />
        <div className="pl-[4px] mb-[16px]">
          <div className="flex flex-wrap gap-x-[16px] gap-y-[4px]">
            <CheckField label="Mietwagenkonzession (Kopie)" />
          </div>
        </div>

        {/* Signature */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, hsl(221,83%,53%,0.15), transparent)", marginBottom: "14px" }} />
        <div className="grid grid-cols-2 gap-[30px]">
          <div>
            <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[20px]">Ort, Datum</p>
            <div className="border-b border-[#cbd5e1]" />
          </div>
          <div>
            <p className="text-[7px] uppercase tracking-[0.12em] font-semibold text-[#64748b] mb-[20px]">Unterschrift / Stempel</p>
            <div className="border-b border-[#cbd5e1]" />
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[10mm] left-[16mm] right-[16mm] flex items-center justify-between">
          <p className="text-[6px] text-[#94a3b8]">AVYTA GmbH · Allerheiligentor 2-4 · 60311 Frankfurt am Main · support@katew.de</p>
          <p className="text-[6px] text-[#94a3b8]">katew.de</p>
        </div>
      </div>
    </div>
  );
};

export default AnbieterStammdatenPDF;
