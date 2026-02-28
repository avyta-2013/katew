import { Building2, MapPin, Phone, Mail, User, FileText, Scale, Globe, Info } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection, 
  LegalInfoCard 
} from "@/components/LegalPageLayout";

const sections = [
  { id: "angaben", title: "Angaben gemäß § 5 TMG" },
  { id: "kontakt", title: "Kontakt" },
  { id: "vertreten", title: "Vertreten durch" },
  { id: "register", title: "Registereintrag" },
  { id: "umsatzsteuer", title: "Umsatzsteuer-ID" },
  { id: "verantwortlich", title: "Verantwortlich für Inhalt" },
  { id: "hinweis", title: "Hinweis zur Tätigkeit" },
];

export default function Impressum() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Rechtliche Informationen und Kontaktdaten der AVYTA GmbH"
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
              <p className="text-lg font-bold text-foreground">AVYTA GmbH</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary/60" />
                <span>Allerheiligentor 2–4</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-4" />
                <span>60311 Frankfurt am Main</span>
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
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">E-Mail</span>
            <a href="mailto:support@katew.de" className="block mt-1 text-foreground font-semibold hover:text-primary transition-colors">
              support@katew.de
            </a>
          </div>
          <div className="group p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Telefon</span>
            <a href="tel:+496915045409" className="block mt-1 text-foreground font-semibold hover:text-primary transition-colors">
              +49 69 150 454 09
            </a>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="vertreten" title="Vertreten durch den Geschäftsführer">
        <div className="p-5 bg-card rounded-2xl border border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Geschäftsführer</span>
              <p className="text-foreground font-semibold text-lg">Dino Lalic</p>
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
                  <p className="text-foreground font-medium font-mono mt-0.5">HRB 96683</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="umsatzsteuer" title="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
        </p>
        <div className="mt-3 inline-flex items-center gap-3 px-5 py-3 bg-muted/30 border border-border/50 rounded-xl">
          <Scale className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">Derzeit nicht vorhanden.</span>
        </div>
      </LegalSection>

      <LegalSection id="verantwortlich" title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <div className="p-5 bg-card rounded-2xl border border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-semibold">Dino Lalic</p>
              <p className="text-sm text-muted-foreground">Anschrift wie oben</p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="hinweis" title="Hinweis zur Tätigkeit">
        <LegalInfoCard icon={<Info className="w-5 h-5" />}>
          <p>
            Die AVYTA GmbH betreibt unter „katew" eine digitale Vermittlungsplattform für Kranken- und Patientenfahrten. Es werden keine Krankentransporte im Sinne der Rettungsdienstgesetze der Länder angeboten oder durchgeführt.
          </p>
        </LegalInfoCard>
      </LegalSection>
    </LegalPageLayout>
  );
}
