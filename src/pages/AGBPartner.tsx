import { Scale, Handshake, FileCheck, CreditCard, AlertTriangle, Shield, Gavel, Clock, UserPlus } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

const sections = [
  { id: "geltungsbereich", title: "§ 1 Geltungsbereich" },
  { id: "vertragsgegenstand", title: "§ 2 Vertragsgegenstand" },
  { id: "registrierung", title: "§ 3 Registrierung als Partner" },
  { id: "leistungen", title: "§ 4 Leistungen der Plattform" },
  { id: "pflichten", title: "§ 5 Pflichten des Partners" },
  { id: "verguetung", title: "§ 6 Vergütung & Abrechnung" },
  { id: "haftung", title: "§ 7 Haftung" },
  { id: "datenschutz", title: "§ 8 Datenschutz" },
  { id: "laufzeit", title: "§ 9 Laufzeit & Kündigung" },
  { id: "schlussbestimmungen", title: "§ 10 Schlussbestimmungen" },
];

export default function AGBPartner() {
  return (
    <LegalPageLayout
      title="AGB für Partner"
      subtitle="Allgemeine Geschäftsbedingungen für Partner der katew Plattform (Krankenhäuser, Kliniken, Praxen)"
      badge="Partner-AGB"
      icon={<Handshake className="w-10 h-10 text-primary" />}
      lastUpdated="Februar 2026"
      sections={sections}
    >
      <LegalSection id="geltungsbereich" title="§ 1 Geltungsbereich">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend „Partner-AGB") gelten für alle Verträge zwischen der katew GmbH (nachfolgend „katew") und Einrichtungen des Gesundheitswesens (nachfolgend „Partner"), die die katew Plattform zur Buchung von Krankenfahrten für ihre Patienten nutzen.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Partner im Sinne dieser AGB sind Krankenhäuser, Kliniken, Arztpraxen, Rehabilitationseinrichtungen und vergleichbare Einrichtungen des Gesundheitswesens.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>
              Abweichende Bedingungen des Partners werden nicht anerkannt, es sei denn, katew stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertragsgegenstand" title="§ 2 Vertragsgegenstand">
        <LegalInfoCard icon={<Handshake className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Partnerschaftsmodell</p>
          <p>
            katew stellt Partnern eine digitale Plattform zur Verfügung, über die Krankenfahrten für Patienten gebucht, verwaltet und nachverfolgt werden können. katew übernimmt die Vermittlung an qualifizierte Beförderungsunternehmen.
          </p>
        </LegalInfoCard>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              <span className="font-medium text-foreground">Wichtig:</span> Der Beförderungsvertrag kommt ausschließlich zwischen dem Patienten bzw. dem Partner und dem jeweiligen Beförderungsunternehmen zustande. katew ist Vermittler, nicht Vertragspartei des Beförderungsvertrages.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="registrierung" title="§ 3 Registrierung als Partner">
        <LegalInfoCard icon={<UserPlus className="w-5 h-5" />}>
          <p>
            Die Nutzung der Plattform als Partner setzt eine Registrierung und Freischaltung durch katew voraus. Der Partner ist verpflichtet, vollständige und wahrheitsgemäße Angaben zu seiner Einrichtung zu machen.
          </p>
        </LegalInfoCard>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Voraussetzungen für die Registrierung
          </h4>
          <ul className="space-y-3">
            {[
              "Nachweis der Zulassung als Gesundheitseinrichtung",
              "Benennung eines verantwortlichen Ansprechpartners",
              "Akzeptanz dieser Partner-AGB",
              "Gültige Betriebshaftpflichtversicherung",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="leistungen" title="§ 4 Leistungen der Plattform">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Buchungsportal", desc: "Einfache Online-Buchung von Krankenfahrten für Patienten" },
            { title: "Echtzeit-Tracking", desc: "Verfolgung des Fahrzeugstatus in Echtzeit" },
            { title: "Abrechnungsübersicht", desc: "Transparente Übersicht aller Fahrten und Kosten" },
            { title: "Prioritäts-Support", desc: "Bevorzugte Bearbeitung bei Anfragen und Problemen" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl">
              <p className="font-medium text-foreground mb-1">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="pflichten" title="§ 5 Pflichten des Partners">
        <div className="space-y-4">
          {[
            "Der Partner stellt sicher, dass alle über die Plattform übermittelten Patientendaten korrekt und vollständig sind.",
            "Der Partner informiert Patienten über die Nutzung der katew Plattform und holt erforderliche Einwilligungen ein.",
            "Der Partner nutzt die Plattform ausschließlich für den vereinbarten Zweck der Krankenfahrten-Buchung.",
            "Der Partner hält seine Zugangsdaten geheim und haftet für alle Aktivitäten unter seinem Konto.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="verguetung" title="§ 6 Vergütung & Abrechnung">
        <LegalInfoCard icon={<CreditCard className="w-5 h-5" />}>
          <p>
            Die Nutzung der Plattform durch Partner ist grundsätzlich kostenfrei. Die Kosten für die Beförderung werden zwischen dem Partner bzw. Patienten und dem Beförderungsunternehmen abgerechnet.
          </p>
        </LegalInfoCard>
        <p className="mt-4">
          Für Premium-Funktionen und erweiterte Services können gesonderte Vergütungsvereinbarungen getroffen werden, die in einem separaten Vertragsdokument geregelt werden.
        </p>
      </LegalSection>

      <LegalSection id="haftung" title="§ 7 Haftung">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              katew haftet als Vermittler nicht für die Durchführung der Beförderung. Die Haftung für die Beförderung liegt beim jeweiligen Beförderungsunternehmen.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              katew haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-3">Haftungsausschluss gilt nicht bei:</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Vorsatz", "Grobe Fahrlässigkeit", "Körperschäden", "Wesentliche Vertragspflichten"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </LegalSection>

      <LegalSection id="datenschutz" title="§ 8 Datenschutz">
        <LegalInfoCard icon={<Shield className="w-5 h-5" />}>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß der DSGVO und unserer Datenschutzerklärung. Für die Verarbeitung von Patientendaten wird ein separater Auftragsverarbeitungsvertrag (AVV) geschlossen.
          </p>
        </LegalInfoCard>
        <p className="mt-4">
          Ausführliche Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-primary hover:underline font-medium">
            Datenschutzerklärung
          </Link>.
        </p>
      </LegalSection>

      <LegalSection id="laufzeit" title="§ 9 Laufzeit & Kündigung">
        <LegalInfoCard icon={<Clock className="w-5 h-5" />}>
          <p>
            Der Partnervertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Seiten mit einer Frist von 3 Monaten zum Monatsende schriftlich gekündigt werden.
          </p>
        </LegalInfoCard>
        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn der Partner gegen wesentliche Pflichten aus diesem Vertrag verstößt.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="schlussbestimmungen" title="§ 10 Schlussbestimmungen">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Frankfurt am Main.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          </div>
        </div>

        <LegalInfoCard icon={<Gavel className="w-5 h-5" />}>
          <p className="font-medium text-foreground">Salvatorische Klausel</p>
          <p className="mt-1">
            An Stelle der unwirksamen Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
          </p>
        </LegalInfoCard>
      </LegalSection>
    </LegalPageLayout>
  );
}
