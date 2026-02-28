import { Scale, Truck, FileCheck, CreditCard, AlertTriangle, Shield, Gavel, Clock, UserPlus, CheckCircle } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

const sections = [
  { id: "geltungsbereich", title: "§ 1 Geltungsbereich" },
  { id: "vertragsgegenstand", title: "§ 2 Vertragsgegenstand" },
  { id: "registrierung", title: "§ 3 Registrierung als Anbieter" },
  { id: "qualitaet", title: "§ 4 Qualitätsanforderungen" },
  { id: "pflichten", title: "§ 5 Pflichten des Anbieters" },
  { id: "verguetung", title: "§ 6 Vergütung & Provision" },
  { id: "haftung", title: "§ 7 Haftung & Versicherung" },
  { id: "datenschutz", title: "§ 8 Datenschutz" },
  { id: "laufzeit", title: "§ 9 Laufzeit & Kündigung" },
  { id: "schlussbestimmungen", title: "§ 10 Schlussbestimmungen" },
];

export default function AGBAnbieter() {
  return (
    <LegalPageLayout
      title="AGB für Anbieter"
      subtitle="Allgemeine Geschäftsbedingungen für Beförderungsunternehmen auf der katew Plattform"
      badge="Anbieter-AGB"
      icon={<Truck className="w-10 h-10 text-primary" />}
      lastUpdated="Februar 2026"
      sections={sections}
    >
      <LegalSection id="geltungsbereich" title="§ 1 Geltungsbereich">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend „Anbieter-AGB") gelten für alle Verträge zwischen der katew GmbH (nachfolgend „katew") und Beförderungsunternehmen (nachfolgend „Anbieter"), die über die katew Plattform Krankenfahrten durchführen.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Anbieter im Sinne dieser AGB sind zugelassene Krankenfahrtunternehmen, die über die erforderlichen Genehmigungen und Konzessionen verfügen.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>
              Abweichende Bedingungen des Anbieters werden nicht anerkannt, es sei denn, katew stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertragsgegenstand" title="§ 2 Vertragsgegenstand">
        <LegalInfoCard icon={<Truck className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Vermittlungsmodell</p>
          <p>
            katew betreibt eine digitale Vermittlungsplattform für Krankenfahrten. Über die Plattform werden dem Anbieter Fahrtanfragen von Kunden und Partnern vermittelt. Der Anbieter entscheidet eigenständig über die Annahme von Aufträgen.
          </p>
        </LegalInfoCard>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              <span className="font-medium text-foreground">Wichtig:</span> Der Beförderungsvertrag kommt direkt zwischen dem Anbieter und dem Kunden/Patienten zustande. katew ist ausschließlich Vermittler.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="registrierung" title="§ 3 Registrierung als Anbieter">
        <LegalInfoCard icon={<UserPlus className="w-5 h-5" />}>
          <p>
            Die Nutzung der Plattform als Anbieter setzt eine Registrierung, Prüfung und Freischaltung durch katew voraus.
          </p>
        </LegalInfoCard>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Voraussetzungen für die Registrierung
          </h4>
          <ul className="space-y-3">
            {[
              "Gültige Konzession nach § 49 PBefG für Krankenfahrten",
              "Nachweis einer Betriebshaftpflichtversicherung",
              "Gewerbeanmeldung und Handelsregistereintrag",
              "Nachweis über qualifiziertes Fahrpersonal",
              "Fahrzeuge mit gültiger HU und erforderlicher Ausstattung",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="qualitaet" title="§ 4 Qualitätsanforderungen">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Fahrzeugstandards", desc: "Alle Fahrzeuge müssen den gesetzlichen Anforderungen für Krankenfahrten entsprechen" },
            { title: "Personal", desc: "Fahrer müssen über gültige Personenbeförderungsscheine und Erste-Hilfe-Ausbildung verfügen" },
            { title: "Pünktlichkeit", desc: "Einhaltung der vereinbarten Abhol- und Ankunftszeiten mit max. 15 Min. Toleranz" },
            { title: "Hygiene", desc: "Regelmäßige Reinigung und Desinfektion der Fahrzeuge nach geltenden Standards" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl">
              <p className="font-medium text-foreground mb-1">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="pflichten" title="§ 5 Pflichten des Anbieters">
        <div className="space-y-4">
          {[
            "Der Anbieter führt die vermittelten Fahrten fachgerecht, pünktlich und unter Einhaltung aller gesetzlichen Vorschriften durch.",
            "Der Anbieter hält seine Verfügbarkeiten auf der Plattform aktuell und nimmt nur Aufträge an, die er zuverlässig erfüllen kann.",
            "Der Anbieter behandelt Patientendaten vertraulich und gemäß den Anforderungen der DSGVO.",
            "Der Anbieter meldet Zwischenfälle, Verspätungen oder Ausfälle unverzüglich über die Plattform.",
            "Der Anbieter stellt sicher, dass alle eingesetzten Fahrzeuge und Mitarbeiter ordnungsgemäß versichert sind.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="verguetung" title="§ 6 Vergütung & Provision">
        <LegalInfoCard icon={<CreditCard className="w-5 h-5" />}>
          <p className="font-medium text-foreground mb-2">Provisionsmodell</p>
          <p>
            Für jede über die Plattform erfolgreich vermittelte und durchgeführte Fahrt erhebt katew eine Vermittlungsprovision. Die Höhe der Provision wird im individuellen Anbietervertrag festgelegt.
          </p>
        </LegalInfoCard>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-4">Abrechnungsdetails</h4>
          <ul className="space-y-3">
            {[
              "Monatliche Abrechnung der Vermittlungsprovisionen",
              "Zahlungsziel: 14 Tage nach Rechnungsstellung",
              "Transparente Aufstellung aller vermittelten Fahrten",
              "Automatische Rechnungserstellung über die Plattform",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="haftung" title="§ 7 Haftung & Versicherung">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
            <p>
              Der Anbieter haftet vollumfänglich für die ordnungsgemäße Durchführung der Beförderung und für alle Schäden, die im Zusammenhang mit der Beförderung entstehen.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
            <p>
              Der Anbieter ist verpflichtet, eine Betriebshaftpflichtversicherung mit einer Deckungssumme von mindestens 3 Millionen Euro für Personen- und Sachschäden vorzuhalten.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
            <p>
              katew haftet nicht für Schäden, die durch den Anbieter oder dessen Erfüllungsgehilfen verursacht werden.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="datenschutz" title="§ 8 Datenschutz">
        <LegalInfoCard icon={<Shield className="w-5 h-5" />}>
          <p>
            Der Anbieter verpflichtet sich, alle über die Plattform erhaltenen personenbezogenen Daten gemäß DSGVO zu verarbeiten. Für die Verarbeitung von Patientendaten wird ein separater Auftragsverarbeitungsvertrag (AVV) geschlossen.
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
            Der Anbietervertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Seiten mit einer Frist von 1 Monat zum Monatsende schriftlich gekündigt werden.
          </p>
        </LegalInfoCard>
        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              katew behält sich das Recht vor, den Anbieter bei wiederholten Qualitätsmängeln, Beschwerden oder Verstößen gegen diese AGB mit sofortiger Wirkung von der Plattform auszuschließen.
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
