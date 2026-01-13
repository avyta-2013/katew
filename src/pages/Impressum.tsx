import { Building2, MapPin, Phone, Mail, User, FileText, Scale, Link as LinkIcon, Copyright } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection, 
  LegalInfoCard,
  LegalLink 
} from "@/components/LegalPageLayout";

const sections = [
  { id: "angaben", title: "Angaben gemäß § 5 TMG" },
  { id: "kontakt", title: "Kontakt" },
  { id: "vertreten", title: "Vertreten durch" },
  { id: "register", title: "Registereintrag" },
  { id: "umsatzsteuer", title: "Umsatzsteuer-ID" },
  { id: "verantwortlich", title: "Verantwortlich für Inhalt" },
  { id: "streitschlichtung", title: "Streitschlichtung" },
  { id: "haftung-inhalte", title: "Haftung für Inhalte" },
  { id: "haftung-links", title: "Haftung für Links" },
  { id: "urheberrecht", title: "Urheberrecht" },
];

export default function Impressum() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Rechtliche Informationen und Kontaktdaten der katew GmbH"
      badge="Rechtliche Informationen"
      icon={<Building2 className="w-10 h-10 text-primary" />}
      lastUpdated="Januar 2026"
      sections={sections}
    >
      <LegalSection id="angaben" title="Angaben gemäß § 5 TMG">
        <LegalInfoCard icon={<MapPin className="w-5 h-5" />}>
          <p className="font-semibold text-foreground">katew GmbH</p>
          <p>Allerheiligentor 2-4</p>
          <p>60311 Frankfurt</p>
          <p>Deutschland</p>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="kontakt" title="Kontakt">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Telefon</span>
            </div>
            <a href="tel:+4915115561231" className="text-primary hover:underline">
              +49 151 155 612 31
            </a>
          </div>
          <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">E-Mail</span>
            </div>
            <a href="mailto:support@katew.de" className="text-primary hover:underline">
              support@katew.de
            </a>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertreten" title="Vertreten durch">
        <LegalInfoCard icon={<User className="w-5 h-5" />}>
          <p className="font-semibold text-foreground">Geschäftsführer</p>
          <p>Max Mustermann</p>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="register" title="Registereintrag">
        <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
          <div className="flex items-start gap-4">
            <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <p>Eintragung im Handelsregister</p>
              <p><span className="text-foreground font-medium">Registergericht:</span> Amtsgericht Berlin-Charlottenburg</p>
              <p><span className="text-foreground font-medium">Registernummer:</span> HRB 123456</p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="umsatzsteuer" title="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        </p>
        <p className="mt-2 font-mono text-foreground bg-muted/50 px-4 py-2 rounded-lg inline-block">
          DE 123 456 789
        </p>
      </LegalSection>

      <LegalSection id="verantwortlich" title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <LegalInfoCard icon={<User className="w-5 h-5" />}>
          <p className="font-semibold text-foreground">Max Mustermann</p>
          <p>Allerheiligentor 2-4</p>
          <p>60311 Frankfurt</p>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="streitschlichtung" title="Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        </p>
        <p className="mt-3">
          <LegalLink href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </LegalLink>
        </p>
        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <p className="text-sm">
            <span className="font-medium text-foreground">Hinweis:</span> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="haftung-inhalte" title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mt-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
        </p>
      </LegalSection>

      <LegalSection id="haftung-links" title="Haftung für Links">
        <LegalInfoCard icon={<LinkIcon className="w-5 h-5" />}>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </LegalInfoCard>
        <p>
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        </p>
      </LegalSection>

      <LegalSection id="urheberrecht" title="Urheberrecht">
        <LegalInfoCard icon={<Copyright className="w-5 h-5" />}>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </LegalInfoCard>
        <p>
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
