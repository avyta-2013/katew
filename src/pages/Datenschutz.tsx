import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Datenschutzerklärung
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium mt-6 mb-3">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Verantwortliche Stelle</h2>
                <p className="text-muted-foreground">
                  katew GmbH<br />
                  Musterstraße 123<br />
                  12345 Berlin<br />
                  Deutschland<br /><br />
                  E-Mail: datenschutz@katew.de
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-medium mt-6 mb-3">Cookies</h3>
                <p className="text-muted-foreground">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten 
                  auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                
                <h3 className="text-lg font-medium mt-6 mb-3">Server-Log-Dateien</h3>
                <p className="text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Kontaktformular</h2>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Ihre Rechte</h2>
                <p className="text-muted-foreground">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen 
                  Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf 
                  Berichtigung oder Löschung dieser Daten.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                  des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Änderung unserer Datenschutzbestimmungen</h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
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