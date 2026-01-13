import { Scale, FileCheck, UserPlus, Truck, Calendar, AlertTriangle, Shield, Gavel } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

const sections = [
  { id: "geltungsbereich", title: "§ 1 Geltungsbereich" },
  { id: "vertragsgegenstand", title: "§ 2 Vertragsgegenstand" },
  { id: "registrierung", title: "§ 3 Registrierung" },
  { id: "buchung", title: "§ 4 Buchung & Vermittlung" },
  { id: "stornierung", title: "§ 5 Stornierung" },
  { id: "haftung", title: "§ 6 Haftung" },
  { id: "datenschutz", title: "§ 7 Datenschutz" },
  { id: "schlussbestimmungen", title: "§ 8 Schlussbestimmungen" },
];

export default function AGB() {
  return (
    <LegalPageLayout
      title="Allgemeine Geschäftsbedingungen"
      subtitle="Die rechtlichen Rahmenbedingungen für die Nutzung der katew Plattform"
      badge="AGB"
      icon={<Scale className="w-10 h-10 text-primary" />}
      lastUpdated="Januar 2026"
      sections={sections}
    >
      <LegalSection id="geltungsbereich" title="§ 1 Geltungsbereich">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge, die zwischen der katew GmbH (nachfolgend „Anbieter") und dem Nutzer (nachfolgend „Kunde") über die Plattform katew.de geschlossen werden.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertragsgegenstand" title="§ 2 Vertragsgegenstand">
        <LegalInfoCard icon={<Truck className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Was ist katew?</p>
          <p>
            katew ist eine Vermittlungsplattform für Krankenfahrten. Der Anbieter vermittelt Transportleistungen zwischen Kunden und registrierten Transportunternehmen (nachfolgend „Dienstleister").
          </p>
        </LegalInfoCard>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              <span className="font-medium text-foreground">Wichtig:</span> Der Beförderungsvertrag kommt ausschließlich zwischen dem Kunden und dem jeweiligen Dienstleister zustande. Der Anbieter ist nicht Vertragspartei des Beförderungsvertrages.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="registrierung" title="§ 3 Registrierung und Nutzerkonto">
        <LegalInfoCard icon={<UserPlus className="w-5 h-5" />}>
          <p>
            Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Der Kunde ist verpflichtet, wahrheitsgemäße Angaben zu machen und diese aktuell zu halten.
          </p>
        </LegalInfoCard>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Verantwortung des Nutzers
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Geheimhaltung der Zugangsdaten</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Haftung für alle Aktivitäten unter dem eigenen Konto</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Sofortige Meldung bei Verdacht auf unbefugte Nutzung</span>
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="buchung" title="§ 4 Buchung und Vermittlung">
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Der Kunde kann über die Plattform Anfragen für Krankenfahrten stellen. Nach Eingang einer Anfrage erhalten geeignete Dienstleister die Möglichkeit, Angebote abzugeben.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Mit Annahme eines Angebots durch den Kunden kommt ein Beförderungsvertrag zwischen dem Kunden und dem jeweiligen Dienstleister zustande.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-sm">✓</span>
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex-1">
              <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                Die Nutzung der Vermittlungsplattform ist für Kunden kostenlos.
              </p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="stornierung" title="§ 5 Stornierung">
        <LegalInfoCard icon={<Calendar className="w-5 h-5" />}>
          <p>
            Stornierungen sind nach Maßgabe der jeweiligen Stornierungsbedingungen des Dienstleisters möglich.
          </p>
        </LegalInfoCard>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Bei kurzfristigen Stornierungen können Stornogebühren anfallen, die vom Dienstleister festgelegt werden.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="haftung" title="§ 6 Haftung">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Der Anbieter haftet als Vermittler nicht für die Durchführung der Beförderung. Die Haftung für die Beförderung liegt beim jeweiligen Dienstleister.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
            </p>
          </div>
        </div>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-3">Haftungsausschluss gilt nicht bei:</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Vorsatz", "Grobe Fahrlässigkeit", "Körperschäden", "Wesentliche Vertragspflichten"].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </LegalSection>

      <LegalSection id="datenschutz" title="§ 7 Datenschutz">
        <LegalInfoCard icon={<Shield className="w-5 h-5" />}>
          <p>
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
          </p>
        </LegalInfoCard>
        <p className="mt-4">
          Ausführliche Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-primary hover:underline font-medium">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="schlussbestimmungen" title="§ 8 Schlussbestimmungen">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Berlin.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
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
