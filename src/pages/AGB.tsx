import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AGB() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
                <p className="text-muted-foreground">
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge, die zwischen 
                  der katew GmbH (nachfolgend „Anbieter") und dem Nutzer (nachfolgend „Kunde") über die Plattform 
                  katew.de geschlossen werden.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer 
                  Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 2 Vertragsgegenstand</h2>
                <p className="text-muted-foreground">
                  (1) katew ist eine Vermittlungsplattform für Krankenfahrten. Der Anbieter vermittelt Transportleistungen 
                  zwischen Kunden und registrierten Transportunternehmen (nachfolgend „Dienstleister").
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Der Beförderungsvertrag kommt ausschließlich zwischen dem Kunden und dem jeweiligen Dienstleister 
                  zustande. Der Anbieter ist nicht Vertragspartei des Beförderungsvertrages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 3 Registrierung und Nutzerkonto</h2>
                <p className="text-muted-foreground">
                  (1) Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Der Kunde ist 
                  verpflichtet, wahrheitsgemäße Angaben zu machen und diese aktuell zu halten.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Der Kunde ist für die Geheimhaltung seiner Zugangsdaten verantwortlich und haftet für alle 
                  Aktivitäten, die unter seinem Konto erfolgen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 4 Buchung und Vermittlung</h2>
                <p className="text-muted-foreground">
                  (1) Der Kunde kann über die Plattform Anfragen für Krankenfahrten stellen. Nach Eingang einer 
                  Anfrage erhalten geeignete Dienstleister die Möglichkeit, Angebote abzugeben.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Mit Annahme eines Angebots durch den Kunden kommt ein Beförderungsvertrag zwischen dem Kunden 
                  und dem jeweiligen Dienstleister zustande.
                </p>
                <p className="text-muted-foreground mt-4">
                  (3) Die Nutzung der Vermittlungsplattform ist für Kunden kostenlos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 5 Stornierung</h2>
                <p className="text-muted-foreground">
                  (1) Stornierungen sind nach Maßgabe der jeweiligen Stornierungsbedingungen des Dienstleisters möglich.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Bei kurzfristigen Stornierungen können Stornogebühren anfallen, die vom Dienstleister festgelegt werden.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 6 Haftung</h2>
                <p className="text-muted-foreground">
                  (1) Der Anbieter haftet als Vermittler nicht für die Durchführung der Beförderung. Die Haftung für 
                  die Beförderung liegt beim jeweiligen Dienstleister.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder 
                  der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 7 Datenschutz</h2>
                <p className="text-muted-foreground">
                  Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">§ 8 Schlussbestimmungen</h2>
                <p className="text-muted-foreground">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-muted-foreground mt-4">
                  (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
                  Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Berlin.
                </p>
                <p className="text-muted-foreground mt-4">
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen 
                  Bestimmungen unberührt.
                </p>
              </section>

              <p className="text-sm text-muted-foreground mt-8">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}