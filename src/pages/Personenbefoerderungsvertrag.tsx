import { FileText, Users, Car, Shield, Clock, AlertTriangle, Euro, XCircle } from "lucide-react";
import { LegalPageLayout, LegalSection, LegalSubsection, LegalInfoCard } from "@/components/LegalPageLayout";

const sections = [
  { id: "geltungsbereich", title: "Geltungsbereich" },
  { id: "vertragsgegenstand", title: "Vertragsgegenstand" },
  { id: "pflichten-auftragnehmer", title: "Pflichten des Auftragnehmers" },
  { id: "pflichten-auftraggeber", title: "Pflichten des Auftraggebers" },
  { id: "haftung", title: "Haftung" },
  { id: "stornierung", title: "Stornierung & Änderungen" },
  { id: "verguetung", title: "Vergütung & Zahlung" },
  { id: "datenschutz", title: "Datenschutz" },
];

const Personenbefoerderungsvertrag = () => {
  return (
    <LegalPageLayout
      title="Personenbeförderungsvertrag"
      subtitle="Vertragsbedingungen für die Beförderung von Personen durch unsere Partnerdienste"
      badge="Beförderungsvertrag"
      icon={<Car className="w-6 h-6" />}
      lastUpdated="19. Januar 2026"
      sections={sections}
    >
      <LegalSection id="geltungsbereich" title="1. Geltungsbereich">
        <LegalInfoCard icon={<FileText className="w-5 h-5 text-primary" />}>
          Dieser Personenbeförderungsvertrag regelt die Rechte und Pflichten zwischen dem Fahrgast 
          (Auftraggeber) und dem Beförderungsunternehmen (Auftragnehmer) bei der Durchführung von 
          Kranken- und Patiententransporten.
        </LegalInfoCard>
        
        <LegalSubsection title="1.1 Anwendungsbereich">
          <p className="text-muted-foreground leading-relaxed">
            Diese Vertragsbedingungen gelten für alle über die KATEW-Plattform vermittelten 
            Personenbeförderungen, einschließlich:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Krankentransporte mit ärztlicher Verordnung</li>
            <li>Patiententransporte zu medizinischen Einrichtungen</li>
            <li>Privatfahrten ohne Verordnung</li>
            <li>Dialysefahrten und regelmäßige Behandlungsfahrten</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="1.2 Vertragsparteien">
          <p className="text-muted-foreground leading-relaxed">
            Der Vertrag kommt zwischen dem Fahrgast und dem jeweiligen Beförderungsunternehmen 
            zustande. KATEW agiert ausschließlich als Vermittlungsplattform und ist nicht 
            Vertragspartei des Beförderungsvertrages.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="vertragsgegenstand" title="2. Vertragsgegenstand">
        <LegalInfoCard icon={<Users className="w-5 h-5 text-primary" />}>
          Der Auftragnehmer verpflichtet sich zur sicheren und pünktlichen Beförderung des 
          Fahrgastes vom vereinbarten Abholort zum vereinbarten Zielort.
        </LegalInfoCard>

        <LegalSubsection title="2.1 Leistungsumfang">
          <p className="text-muted-foreground leading-relaxed">
            Die Beförderungsleistung umfasst:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Abholung am vereinbarten Ort zur vereinbarten Zeit</li>
            <li>Sichere Beförderung zum Zielort</li>
            <li>Hilfestellung beim Ein- und Aussteigen (nach Bedarf)</li>
            <li>Transport von medizinischen Hilfsmitteln (Rollstuhl, Gehhilfen etc.)</li>
            <li>Betreuung während der Fahrt bei Bedarf</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="2.2 Fahrzeugausstattung">
          <p className="text-muted-foreground leading-relaxed">
            Der Auftragnehmer stellt ein für den jeweiligen Transport geeignetes Fahrzeug bereit. 
            Die Fahrzeugauswahl richtet sich nach den bei der Buchung angegebenen Anforderungen 
            (Rollstuhl, Tragestuhl, Liegendtransport etc.).
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="pflichten-auftragnehmer" title="3. Pflichten des Auftragnehmers">
        <LegalInfoCard icon={<Shield className="w-5 h-5 text-primary" />}>
          Der Auftragnehmer ist zur ordnungsgemäßen und sorgfältigen Durchführung der 
          Beförderung verpflichtet.
        </LegalInfoCard>

        <LegalSubsection title="3.1 Sorgfaltspflichten">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Pünktliche Abholung am vereinbarten Ort</li>
            <li>Einhaltung der Straßenverkehrsordnung</li>
            <li>Rücksichtnahme auf den Gesundheitszustand des Fahrgastes</li>
            <li>Diskretion und Wahrung der Privatsphäre</li>
            <li>Sicherstellung eines sauberen und technisch einwandfreien Fahrzeugs</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="3.2 Personal">
          <p className="text-muted-foreground leading-relaxed">
            Der Auftragnehmer setzt ausschließlich geschultes und qualifiziertes Personal ein. 
            Das Fahrpersonal verfügt über alle erforderlichen Führerscheine und Genehmigungen 
            sowie eine Schulung im Umgang mit mobilitätseingeschränkten Personen.
          </p>
        </LegalSubsection>

        <LegalSubsection title="3.3 Versicherungsschutz">
          <p className="text-muted-foreground leading-relaxed">
            Der Auftragnehmer verfügt über eine ausreichende Betriebshaftpflichtversicherung 
            sowie alle gesetzlich vorgeschriebenen Versicherungen für Personenbeförderung.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="pflichten-auftraggeber" title="4. Pflichten des Auftraggebers">
        <LegalInfoCard icon={<Clock className="w-5 h-5 text-primary" />}>
          Der Fahrgast ist zur Mitwirkung bei der ordnungsgemäßen Durchführung der 
          Beförderung verpflichtet.
        </LegalInfoCard>

        <LegalSubsection title="4.1 Informationspflichten">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Vollständige und korrekte Angaben bei der Buchung</li>
            <li>Mitteilung besonderer Beförderungsanforderungen</li>
            <li>Hinweis auf gesundheitliche Einschränkungen</li>
            <li>Bereitstellung erforderlicher Dokumente (Verordnung, Versicherungskarte)</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="4.2 Mitwirkungspflichten">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Pünktliche Bereitschaft am vereinbarten Abholort</li>
            <li>Befolgung der Anweisungen des Fahrpersonals</li>
            <li>Rücksichtnahme auf andere Fahrgäste bei Sammelfahrten</li>
            <li>Sorgfältiger Umgang mit dem Fahrzeug und dessen Ausstattung</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="4.3 Wartezeiten">
          <p className="text-muted-foreground leading-relaxed">
            Bei Nichterscheinen des Fahrgastes am vereinbarten Abholort ist eine Wartezeit 
            von maximal 15 Minuten vorgesehen. Nach Ablauf dieser Zeit kann der Transport 
            als durchgeführt betrachtet und berechnet werden.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="haftung" title="5. Haftung">
        <LegalInfoCard icon={<AlertTriangle className="w-5 h-5 text-primary" />}>
          Die Haftung richtet sich nach den gesetzlichen Bestimmungen für Personenbeförderung.
        </LegalInfoCard>

        <LegalSubsection title="5.1 Haftung des Auftragnehmers">
          <p className="text-muted-foreground leading-relaxed">
            Der Auftragnehmer haftet für Schäden, die durch Verschulden seines Personals 
            entstehen. Die Haftung für Sachschäden ist auf den Zeitwert der beschädigten 
            Gegenstände begrenzt. Für Folgeschäden wird nur bei Vorsatz oder grober 
            Fahrlässigkeit gehaftet.
          </p>
        </LegalSubsection>

        <LegalSubsection title="5.2 Haftungsausschluss">
          <p className="text-muted-foreground leading-relaxed">
            Die Haftung ist ausgeschlossen für Schäden, die entstehen durch:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Höhere Gewalt (Unwetter, Verkehrsstörungen, behördliche Anordnungen)</li>
            <li>Verschulden des Fahrgastes oder Dritter</li>
            <li>Fehlerhafte Angaben des Fahrgastes bei der Buchung</li>
            <li>Gegenstände, die nicht ordnungsgemäß gesichert wurden</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="5.3 Haftung der Plattform">
          <p className="text-muted-foreground leading-relaxed">
            KATEW haftet nicht für die Durchführung der Beförderung. Die Haftung von KATEW 
            beschränkt sich auf die ordnungsgemäße Vermittlung zwischen Fahrgast und 
            Beförderungsunternehmen.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="stornierung" title="6. Stornierung & Änderungen">
        <LegalInfoCard icon={<XCircle className="w-5 h-5 text-primary" />}>
          Stornierungen und Änderungen sind unter Beachtung der folgenden Fristen möglich.
        </LegalInfoCard>

        <LegalSubsection title="6.1 Stornierung durch den Fahrgast">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Bis 24 Stunden vor Fahrtbeginn:</strong> Kostenfreie Stornierung</li>
            <li><strong>12-24 Stunden vor Fahrtbeginn:</strong> 50% Stornogebühr</li>
            <li><strong>Weniger als 12 Stunden:</strong> Volle Berechnung des Fahrpreises</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="6.2 Stornierung durch den Auftragnehmer">
          <p className="text-muted-foreground leading-relaxed">
            Der Auftragnehmer ist berechtigt, die Fahrt zu stornieren bei:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Höherer Gewalt oder unvorhersehbaren Umständen</li>
            <li>Falschen Angaben des Fahrgastes, die die Durchführung unmöglich machen</li>
            <li>Gefährdung der Sicherheit von Fahrgast oder Personal</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            In diesen Fällen wird für eine Ersatzbeförderung gesorgt oder der volle 
            Fahrpreis erstattet.
          </p>
        </LegalSubsection>

        <LegalSubsection title="6.3 Änderungen">
          <p className="text-muted-foreground leading-relaxed">
            Änderungen der Buchung (Zeit, Ort, Anforderungen) sind bis 12 Stunden vor 
            Fahrtbeginn kostenfrei möglich, sofern die geänderte Leistung verfügbar ist.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="verguetung" title="7. Vergütung & Zahlung">
        <LegalInfoCard icon={<Euro className="w-5 h-5 text-primary" />}>
          Die Vergütung richtet sich nach den bei der Buchung angezeigten Preisen.
        </LegalInfoCard>

        <LegalSubsection title="7.1 Preisbildung">
          <p className="text-muted-foreground leading-relaxed">
            Die Preise werden vor Buchungsabschluss transparent angezeigt und setzen sich 
            zusammen aus:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Grundgebühr</li>
            <li>Kilometerpreis</li>
            <li>Ggf. Zuschläge (Tragestuhl, Rollstuhl, Begleitung etc.)</li>
            <li>Ggf. Wartezeitzuschläge</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="7.2 Zahlungsarten">
          <p className="text-muted-foreground leading-relaxed">
            Die Zahlung erfolgt je nach Buchungsart:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li><strong>Kassenfahrten:</strong> Direkte Abrechnung mit der Krankenkasse</li>
            <li><strong>Privatfahrten:</strong> Zahlung per Rechnung, Kreditkarte oder Lastschrift</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="7.3 Zahlungsfrist">
          <p className="text-muted-foreground leading-relaxed">
            Bei Rechnungsstellung beträgt die Zahlungsfrist 14 Tage ab Rechnungsdatum. 
            Bei Zahlungsverzug werden Mahngebühren und Verzugszinsen gemäß den 
            gesetzlichen Bestimmungen erhoben.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="datenschutz" title="8. Datenschutz">
        <LegalInfoCard icon={<Shield className="w-5 h-5 text-primary" />}>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Details finden Sie in 
          unserer Datenschutzerklärung.
        </LegalInfoCard>

        <LegalSubsection title="8.1 Datenverarbeitung">
          <p className="text-muted-foreground leading-relaxed">
            Im Rahmen der Beförderung werden personenbezogene Daten erhoben und verarbeitet. 
            Dies umfasst insbesondere:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Name und Kontaktdaten</li>
            <li>Abhol- und Zieladresse</li>
            <li>Gesundheitsrelevante Informationen (nur soweit für die Beförderung erforderlich)</li>
            <li>Abrechnungsdaten</li>
          </ul>
        </LegalSubsection>

        <LegalSubsection title="8.2 Weitergabe an Dritte">
          <p className="text-muted-foreground leading-relaxed">
            Die Daten werden an das jeweilige Beförderungsunternehmen zur Durchführung 
            des Transports weitergegeben. Bei Kassenfahrten erfolgt eine Übermittlung 
            der erforderlichen Daten an die zuständige Krankenkasse.
          </p>
        </LegalSubsection>

        <LegalSubsection title="8.3 Weitere Informationen">
          <p className="text-muted-foreground leading-relaxed">
            Ausführliche Informationen zum Datenschutz finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </LegalSubsection>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default Personenbefoerderungsvertrag;
