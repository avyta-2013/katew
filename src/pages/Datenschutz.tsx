import { Shield, Eye, Server, Lock, RefreshCw, UserCheck, Database, Share2, BarChart3 } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalSubsection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";

const sections = [
  { id: "verantwortlich", title: "1. Verantwortlicher" },
  { id: "datenarten", title: "2. Art der verarbeiteten Daten" },
  { id: "zwecke", title: "3. Zwecke der Verarbeitung" },
  { id: "rechtsgrundlagen", title: "4. Rechtsgrundlagen" },
  { id: "weitergabe", title: "5. Weitergabe von Daten" },
  { id: "hosting", title: "6. Hosting" },
  { id: "tracking", title: "7. Tracking & Analyse" },
  { id: "speicherdauer", title: "8. Speicherdauer" },
  { id: "rechte", title: "9. Betroffenenrechte" },
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
      <LegalSection id="verantwortlich" title="1. Verantwortlicher">
        <div className="p-6 bg-card rounded-2xl border border-border/50">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-foreground">AVYTA GmbH</p>
              <p className="text-muted-foreground">Allerheiligentor 2–4</p>
              <p className="text-muted-foreground">60311 Frankfurt am Main</p>
              <a href="mailto:support@katew.de" className="inline-flex items-center gap-1.5 mt-2 text-primary hover:underline font-medium text-sm">
                support@katew.de
              </a>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="datenarten" title="2. Art der verarbeiteten Daten">
        <p className="mb-6">
          Im Rahmen der Nutzung von katew werden folgende personenbezogene Daten verarbeitet:
        </p>

        <div className="space-y-4">
          <LegalSubsection title="Stammdaten">
            <div className="grid sm:grid-cols-3 gap-3">
              {["Anrede", "Vor- und Nachname", "Geburtsdatum"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </LegalSubsection>

          <LegalSubsection title="Kontaktdaten">
            <div className="grid sm:grid-cols-2 gap-3">
              {["Telefonnummer", "E-Mail-Adresse"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </LegalSubsection>

          <LegalSubsection title="Transportbezogene Daten">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Abhol- und Zieladresse",
                "Terminangaben",
                "Transportart (sitzend, liegend, Rollstuhl, Tragestuhl)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </LegalSubsection>

          <LegalSubsection title="Gesundheitsbezogene Daten (besondere Kategorien gem. Art. 9 DSGVO)">
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-4">
              <p className="text-sm">
                <span className="font-medium text-foreground">Hinweis:</span> Diese Daten unterliegen einem besonderen Schutzniveau und werden nur mit Ihrer ausdrücklichen Einwilligung verarbeitet.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Medizinische Hinweise",
                "Diagnosen",
                "Pflegegrad",
                "Krankenkasse",
                "Art der Entlassung / Fahrtanlass",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </LegalSubsection>
        </div>
      </LegalSection>

      <LegalSection id="zwecke" title="3. Zwecke der Verarbeitung">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Vermittlung von Kranken- und Patientenfahrten",
            "Weiterleitung an Fahrunternehmen",
            "Kommunikation zwischen Beteiligten",
            "Qualitätssicherung",
            "Abrechnungsunterstützung",
            "Plattformbetrieb",
            "Newsletter (bei gesonderter Einwilligung)",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="rechtsgrundlagen" title="4. Rechtsgrundlagen">
        <div className="space-y-3">
          {[
            { article: "Art. 6 Abs. 1 lit. b DSGVO", desc: "Vertrag / vorvertragliche Maßnahmen" },
            { article: "Art. 9 Abs. 2 lit. a DSGVO", desc: "Ausdrückliche Einwilligung (Gesundheitsdaten)" },
            { article: "Art. 6 Abs. 1 lit. f DSGVO", desc: "Berechtigtes Interesse an effizienter Vermittlung" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-card rounded-2xl border border-border/50">
              <p className="font-mono text-sm text-primary font-medium">{item.article}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="weitergabe" title="5. Weitergabe von Daten">
        <LegalInfoCard icon={<Share2 className="w-5 h-5" />}>
          <p className="mb-3">Daten werden weitergegeben an:</p>
        </LegalInfoCard>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {[
            "Das jeweils ausführende Fahrunternehmen",
            "Hosting-Dienstleister (AWS Deutschland)",
            "CRM-System (HubSpot)",
            "IT-Dienstleister im Rahmen von Auftragsverarbeitung",
            "Google-Dienste (Analytics, Tag Manager) nach Einwilligung",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-1 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Mit allen Auftragsverarbeitern bestehen Verträge nach Art. 28 DSGVO.
        </p>
      </LegalSection>

      <LegalSection id="hosting" title="6. Hosting">
        <LegalInfoCard icon={<Server className="w-5 h-5" />}>
          <p>
            Die Plattform wird über Amazon Web Services (AWS) innerhalb Deutschlands betrieben.
          </p>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="tracking" title="7. Tracking & Analyse">
        <LegalInfoCard icon={<BarChart3 className="w-5 h-5" />}>
          <p className="mb-3">Es werden folgende Dienste eingesetzt:</p>
        </LegalInfoCard>
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {["Google Analytics", "Google Tag Manager", "Google Search Console"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
              Die Verarbeitung erfolgt nur nach Einwilligung über ein Cookie-Banner.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="speicherdauer" title="8. Speicherdauer">
        <LegalInfoCard icon={<Database className="w-5 h-5" />}>
          <p className="mb-3">Personenbezogene Daten werden gespeichert:</p>
        </LegalInfoCard>
        <div className="space-y-3 mt-4">
          {[
            "Solange sie zur Durchführung der Vermittlung erforderlich sind",
            "Solange gesetzliche Aufbewahrungspflichten bestehen",
            "Bis zum Widerruf der Einwilligung",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-1.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="rechte" title="9. Betroffenenrechte">
        <p className="mb-6">
          Sie haben jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Auskunft", icon: "📋" },
            { title: "Berichtigung", icon: "✏️" },
            { title: "Löschung", icon: "🗑️" },
            { title: "Einschränkung", icon: "⏸️" },
            { title: "Datenübertragbarkeit", icon: "📤" },
            { title: "Beschwerde bei der Aufsichtsbehörde", icon: "⚖️" },
          ].map((right, i) => (
            <div key={i} className="group p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform inline-block">{right.icon}</span>
              <p className="font-medium text-foreground">{right.title}</p>
            </div>
          ))}
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
