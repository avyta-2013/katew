import { Building2, MapPin, Phone, Mail, User, FileText, Scale, Link as LinkIcon, Copyright, Globe } from "lucide-react";
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
      lastUpdated="Februar 2026"
      sections={sections}
    >
      <LegalSection id="angaben" title="Angaben gemäß § 5 TMG">
        <div className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/20">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-foreground">katew GmbH</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary/60" />
                <span>Allerheiligentor 2-4</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-4" />
                <span>60311 Frankfurt</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary/60" />
                <span>Deutschland</span>
              </div>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="kontakt" title="Kontakt">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Telefon</span>
            <a href="tel:+4915115561231" className="block mt-1 text-foreground font-semibold hover:text-primary transition-colors">
              +49 151 155 612 31
            </a>
          </div>
          <div className="group p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">E-Mail</span>
            <a href="mailto:support@katew.de" className="block mt-1 text-foreground font-semibold hover:text-primary transition-colors">
              support@katew.de
            </a>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertreten" title="Vertreten durch">
        <div className="p-5 bg-card rounded-2xl border border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Geschäftsführer</span>
              <p className="text-foreground font-semibold text-lg">Max Mustermann</p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="register" title="Registereintrag">
        <div className="p-5 bg-card rounded-2xl border border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-3">Eintragung im Handelsregister</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-muted/30 rounded-xl">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Registergericht</span>
                  <p className="text-foreground font-medium mt-0.5">Amtsgericht Frankfurt am Main</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Registernummer</span>
                  <p className="text-foreground font-medium font-mono mt-0.5">HRB 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="umsatzsteuer" title="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        </p>
        <div className="mt-3 inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <Scale className="w-4 h-4 text-primary" />
          <span className="font-mono text-foreground font-semibold tracking-wider">DE 123 456 789</span>
        </div>
      </LegalSection>

      <LegalSection id="verantwortlich" title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <div className="p-5 bg-card rounded-2xl border border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-semibold">Max Mustermann</p>
              <p className="text-sm text-muted-foreground">Allerheiligentor 2-4, 60311 Frankfurt</p>
            </div>
          </div>
        </div>
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
