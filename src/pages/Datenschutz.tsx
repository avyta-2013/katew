import { Shield, Eye, Cookie, Server, FileText, Lock, RefreshCw, UserCheck } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalSubsection,
  LegalInfoCard,
  LegalLink 
} from "@/components/LegalPageLayout";

const sections = [
  { id: "ueberblick", title: "Datenschutz auf einen Blick" },
  { id: "verantwortlich", title: "Verantwortliche Stelle" },
  { id: "datenerfassung", title: "Datenerfassung auf dieser Website" },
  { id: "kontaktformular", title: "Kontaktformular" },
  { id: "ihre-rechte", title: "Ihre Rechte" },
  { id: "verschluesselung", title: "SSL/TLS-Verschlüsselung" },
  { id: "aenderungen", title: "Änderung der Datenschutzbestimmungen" },
];

export default function Datenschutz() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      subtitle="Transparenz über die Verarbeitung Ihrer personenbezogenen Daten"
      badge="Ihre Privatsphäre ist uns wichtig"
      icon={<Shield className="w-10 h-10 text-primary" />}
      lastUpdated="Februar 2026"
      sections={sections}
    >
      <LegalSection id="ueberblick" title="1. Datenschutz auf einen Blick">
        <LegalSubsection title="Allgemeine Hinweise">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </LegalSubsection>

        <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/20">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Was sind personenbezogene Daten?</p>
              <p className="text-sm text-muted-foreground">
                Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, z.B. Name, E-Mail-Adresse oder IP-Adresse.
              </p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="verantwortlich" title="2. Verantwortliche Stelle">
        <div className="p-6 bg-card rounded-2xl border border-border/50">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-foreground">katew GmbH</p>
              <p className="text-muted-foreground">Allerheiligentor 2-4</p>
              <p className="text-muted-foreground">60311 Frankfurt, Deutschland</p>
              <a href="mailto:datenschutz@katew.de" className="inline-flex items-center gap-1.5 mt-2 text-primary hover:underline font-medium text-sm">
                datenschutz@katew.de
              </a>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="datenerfassung" title="3. Datenerfassung auf dieser Website">
        <LegalSubsection title="Cookies">
          <div className="p-5 bg-card rounded-2xl border border-border/50">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
            </div>
          </div>
        </LegalSubsection>

        <LegalSubsection title="Server-Log-Dateien">
          <div className="p-5 bg-card rounded-2xl border border-border/50 mb-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Browsertyp und Browserversion",
              "Verwendetes Betriebssystem",
              "Referrer URL",
              "Hostname des zugreifenden Rechners",
              "Uhrzeit der Serveranfrage",
              "IP-Adresse"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="kontaktformular" title="4. Kontaktformular">
        <LegalInfoCard icon={<FileText className="w-5 h-5" />}>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </LegalInfoCard>
        <p>
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </LegalSection>

      <LegalSection id="ihre-rechte" title="5. Ihre Rechte">
        <p className="mb-6">
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Auskunft", desc: "Art. 15 DSGVO", icon: "📋" },
            { title: "Berichtigung", desc: "Art. 16 DSGVO", icon: "✏️" },
            { title: "Löschung", desc: "Art. 17 DSGVO", icon: "🗑️" },
            { title: "Einschränkung", desc: "Art. 18 DSGVO", icon: "⏸️" },
            { title: "Datenübertragbarkeit", desc: "Art. 20 DSGVO", icon: "📤" },
            { title: "Widerspruch", desc: "Art. 21 DSGVO", icon: "✋" },
          ].map((right, index) => (
            <div key={index} className="group p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform inline-block">{right.icon}</span>
              <p className="font-medium text-foreground">Recht auf {right.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{right.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="verschluesselung" title="6. SSL- bzw. TLS-Verschlüsselung">
        <LegalInfoCard icon={<Lock className="w-5 h-5" />}>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </LegalInfoCard>
        <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
              Ihre Verbindung zu katew.de ist verschlüsselt
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="aenderungen" title="7. Änderung unserer Datenschutzbestimmungen">
        <LegalInfoCard icon={<RefreshCw className="w-5 h-5" />}>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
          </p>
        </LegalInfoCard>
        <p>
          Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um sich über Änderungen zu informieren.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
