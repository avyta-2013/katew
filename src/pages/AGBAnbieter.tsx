import { Truck, AlertTriangle, Shield, Gavel, Clock, UserPlus, CreditCard, FileText, Ban, Star, Lock, Eye } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

const sections = [
  { id: "vertragsgegenstand", title: "§ 1 Vertragsgegenstand" },
  { id: "selbststaendigkeit", title: "§ 2 Selbstständigkeit" },
  { id: "voraussetzungen", title: "§ 3 Rechtliche Voraussetzungen" },
  { id: "vermittlung", title: "§ 4 Vermittlungsmechanismus" },
  { id: "verguetung", title: "§ 5 Vergütung" },
  { id: "abrechnung", title: "§ 6 Abrechnung" },
  { id: "stornierung", title: "§ 7 Stornierungen" },
  { id: "umgehungsverbot", title: "§ 8 Umgehungsverbot" },
  { id: "haftung", title: "§ 9 Haftung" },
  { id: "qualitaet", title: "§ 10 Qualitätssicherung" },
  { id: "datenschutz", title: "§ 11 Datenschutz" },
  { id: "laufzeit", title: "§ 12 Vertragslaufzeit" },
  { id: "geheimhaltung", title: "§ 13 Geheimhaltung" },
  { id: "schlussbestimmungen", title: "§ 14 Schlussbestimmungen" },
];

export default function AGBAnbieter() {
  return (
    <LegalPageLayout
      title="Vermittlungsvertrag"
      subtitle="Allgemeine Geschäftsbedingungen für Fahrunternehmen auf der katew Plattform"
      badge="Anbieter-AGB"
      icon={<Truck className="w-10 h-10 text-primary" />}
      lastUpdated="Februar 2026"
      sections={sections}
    >
      {/* Header Info */}
      <div className="mb-10 p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/20">
        <p className="text-sm text-muted-foreground mb-4 font-medium">Zwischen:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-card/80 rounded-xl border border-border/50">
            <p className="font-bold text-foreground">AVYTA GmbH</p>
            <p className="text-sm text-muted-foreground">Allerheiligentor 2–4, 60311 Frankfurt am Main</p>
            <p className="text-sm text-muted-foreground">HRB 96683 – AG Frankfurt am Main</p>
            <p className="text-sm text-muted-foreground">Geschäftsführer: Dino Lalic</p>
            <p className="text-xs text-primary font-medium mt-2">– nachfolgend „katew" –</p>
          </div>
          <div className="p-4 bg-card/80 rounded-xl border border-border/50">
            <p className="font-bold text-foreground">[Name Fahrunternehmen]</p>
            <p className="text-sm text-muted-foreground">[Adresse]</p>
            <p className="text-sm text-muted-foreground">[Registerdaten, sofern vorhanden]</p>
            <p className="text-xs text-primary font-medium mt-2">– nachfolgend „Fahrunternehmen" –</p>
          </div>
        </div>
      </div>

      <LegalSection id="vertragsgegenstand" title="§ 1 Vertragsgegenstand">
        <div className="space-y-4">
          {[
            "katew betreibt eine digitale Vermittlungsplattform für Kranken- und Patientenfahrten.",
            "Gegenstand dieses Vertrages ist die Vermittlung von Fahrtanfragen an das Fahrunternehmen.",
            "katew erbringt selbst keine Beförderungsleistungen.",
            "Der Beförderungsvertrag kommt ausschließlich zwischen dem jeweiligen Kunden (Patient, Einrichtung, Kostenträger) und dem Fahrunternehmen zustande.",
            "katew ist nicht Vertragspartner des Beförderungsvertrages.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="selbststaendigkeit" title="§ 2 Selbstständigkeit">
        <div className="space-y-4">
          {[
            "Das Fahrunternehmen handelt rechtlich und wirtschaftlich selbstständig.",
            "Es besteht weder ein Arbeitsverhältnis noch eine gesellschaftsrechtliche Verbindung.",
            "Das Fahrunternehmen ist nicht berechtigt, im Namen von katew Erklärungen abzugeben.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="voraussetzungen" title="§ 3 Rechtliche Voraussetzungen">
        <LegalInfoCard icon={<UserPlus className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Das Fahrunternehmen versichert:</p>
        </LegalInfoCard>
        <div className="mt-4 p-5 bg-muted/30 rounded-xl border border-border/50">
          <ul className="space-y-3">
            {[
              "Im Besitz einer gültigen Genehmigung nach PBefG zu sein",
              "Sämtliche gesetzlichen Vorschriften einzuhalten",
              "Über eine gültige Haftpflichtversicherung zu verfügen",
              "Ausschließlich geeignetes und geschultes Personal einzusetzen",
              'Keine geschützten Begriffe wie „Krankentransport" unzulässig zu verwenden',
              "Keine irreführende Werbung im Zusammenhang mit katew zu betreiben",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm">
          Nachweise sind auf Verlangen vorzulegen.
        </p>
      </LegalSection>

      <LegalSection id="vermittlung" title="§ 4 Vermittlungsmechanismus">
        <div className="space-y-4">
          {[
            "Fahrtanfragen werden automatisiert nach fairen, diskriminierungsfreien Kriterien verteilt.",
            "Ein Anspruch auf bestimmte Vermittlungsvolumina besteht nicht.",
            'Angaben zur Vermittlungsdauer („in der Regel unter 5 Minuten") stellen keine Garantie dar.',
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="verguetung" title="§ 5 Vergütung">
        <LegalInfoCard icon={<CreditCard className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Provisionsmodell</p>
          <p>
            Für jede erfolgreich vermittelte Buchung zahlt das Fahrunternehmen an katew eine Provision in Höhe von:
          </p>
        </LegalInfoCard>

        <div className="mt-4 p-5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl text-center">
          <p className="text-2xl font-bold text-foreground">3,69 € netto</p>
          <p className="text-sm text-muted-foreground mt-1">pro Buchung, zzgl. gesetzlicher Umsatzsteuer</p>
        </div>

        <div className="mt-6">
          <p className="font-medium text-foreground mb-3">Eine Buchung gilt als provisionspflichtig, sobald:</p>
          <div className="space-y-3">
            {[
              "Sie vom Fahrunternehmen angenommen wird",
              "Die Fahrt durchgeführt wird",
              "Ein Vertrag zwischen Kunde und Fahrunternehmen aufgrund der Vermittlung zustande kommt",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-1.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Provisionen bleiben geschuldet, wenn das Fahrunternehmen den Vertrag unter Umgehung der Plattform abschließt.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="abrechnung" title="§ 6 Abrechnung">
        <div className="space-y-4">
          {[
            "Die Abrechnung erfolgt monatlich.",
            "katew stellt eine Rechnung über die provisionspflichtigen Buchungen.",
            "Die Zahlungsfrist beträgt 14 Tage ab Rechnungsdatum.",
            "Bei Zahlungsverzug ist katew berechtigt, weitere Vermittlungen auszusetzen.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="stornierung" title="§ 7 Stornierungen">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>Wird eine Fahrt vor Durchführung storniert, entfällt die Provision, sofern die Stornierung nicht vom Fahrunternehmen zu vertreten ist.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>Bei Stornierung durch das Fahrunternehmen bleibt die Provision geschuldet.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="umgehungsverbot" title="§ 8 Umgehungsverbot">
        <LegalInfoCard icon={<Ban className="w-5 h-5" />}>
          <div className="space-y-3">
            <p>Das Fahrunternehmen verpflichtet sich, über katew vermittelte Kunden nicht systematisch außerhalb der Plattform abzuwickeln.</p>
            <p>Bei schuldhafter Umgehung bleibt die Provision geschuldet.</p>
          </div>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="haftung" title="§ 9 Haftung">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>Das Fahrunternehmen haftet für die ordnungsgemäße Durchführung der Fahrten.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>katew haftet ausschließlich für vorsätzliche oder grob fahrlässige Pflichtverletzungen im Rahmen der Vermittlung.</p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-3">katew haftet nicht für:</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Durchführung der Fahrt",
              "Verspätungen oder Ausfälle",
              "Medizinische Betreuung",
              "Preisgestaltung",
              "Vertragsverletzungen des Fahrunternehmens",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4">
          Das Fahrunternehmen stellt katew von sämtlichen Ansprüchen Dritter frei, die aus der Durchführung der Fahrt resultieren.
        </p>
      </LegalSection>

      <LegalSection id="qualitaet" title="§ 10 Qualitätssicherung & Bewertungen">
        <LegalInfoCard icon={<Star className="w-5 h-5" />}>
          <div className="space-y-3">
            <p>katew ist berechtigt, ein Bewertungssystem zu betreiben.</p>
            <p>Bei wiederholten erheblichen Beschwerden kann katew das Fahrunternehmen vorübergehend sperren oder kündigen.</p>
          </div>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="datenschutz" title="§ 11 Datenschutz">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>Beide Parteien sind eigenständige Verantwortliche im Sinne der DSGVO.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>Das Fahrunternehmen verpflichtet sich zur vertraulichen Behandlung sämtlicher personenbezogener Daten.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>Daten dürfen ausschließlich zur Durchführung der Fahrt verwendet werden.</p>
          </div>
        </div>
        <p className="mt-4">
          Ausführliche Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-primary hover:underline font-medium">Datenschutzerklärung</Link>.
        </p>
      </LegalSection>

      <LegalSection id="laufzeit" title="§ 12 Vertragslaufzeit">
        <LegalInfoCard icon={<Clock className="w-5 h-5" />}>
          <div className="space-y-3">
            <p>Der Vertrag wird auf unbestimmte Zeit geschlossen.</p>
            <p>Er kann von beiden Parteien mit einer Frist von einem Monat zum Monatsende gekündigt werden.</p>
            <p>Das Recht zur außerordentlichen Kündigung bleibt unberührt.</p>
          </div>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="geheimhaltung" title="§ 13 Geheimhaltung">
        <LegalInfoCard icon={<Eye className="w-5 h-5" />}>
          <p>
            Vertrauliche Informationen sind vertraulich zu behandeln. Diese Pflicht besteht auch nach Vertragsende fort.
          </p>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="schlussbestimmungen" title="§ 14 Schlussbestimmungen">
        <div className="space-y-4">
          {[
            "Änderungen bedürfen der Textform.",
            "Es gilt deutsches Recht.",
            "Gerichtsstand ist Frankfurt am Main, soweit zulässig.",
            "Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
