import { Handshake, AlertTriangle, Shield, Gavel, Truck, CreditCard, FileText, Ban, Star, Settings, Lock, Users, XCircle } from "lucide-react";
import { 
  LegalPageLayout, 
  LegalSection,
  LegalInfoCard 
} from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

const sections = [
  { id: "geltungsbereich", title: "§ 1 Geltungsbereich, Begriffe" },
  { id: "rolle", title: "§ 2 Rolle von katew.de" },
  { id: "nutzung", title: "§ 3 Zulässige Nutzung" },
  { id: "buchung", title: "§ 4 Buchungsanfrage & Vermittlung" },
  { id: "keine-krankentransporte", title: "§ 5 Keine Krankentransporte" },
  { id: "preise", title: "§ 6 Preise & Abrechnung" },
  { id: "stornierung", title: "§ 7 Stornierung & Änderungen" },
  { id: "inhalte", title: "§ 8 Inhalte & Bewertungen" },
  { id: "verfuegbarkeit", title: "§ 9 Verfügbarkeit & Wartung" },
  { id: "datenschutz", title: "§ 10 Datenschutz" },
  { id: "haftung", title: "§ 11 Haftung" },
  { id: "sperrung", title: "§ 12 Sperrung/Beendigung" },
  { id: "schlussbestimmungen", title: "§ 13 Schlussbestimmungen" },
];

export default function AGBPartner() {
  return (
    <LegalPageLayout
      title="AGB – Partner"
      subtitle="Allgemeine Geschäftsbedingungen für die Nutzung der Plattform katew.de"
      badge="Partner-AGB"
      icon={<Handshake className="w-10 h-10 text-primary" />}
      lastUpdated="Februar 2026"
      sections={sections}
    >
      {/* Header Info */}
      <div className="mb-10 p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/20">
        <p className="text-sm text-muted-foreground">
          Betreiber: <span className="font-medium text-foreground">katew.de</span>, Allerheiligentor 2–4, 60311 Frankfurt am Main, HRB 96683 (AG Frankfurt am Main) – nachfolgend „katew.de" oder „katew".
        </p>
      </div>

      <LegalSection id="geltungsbereich" title="§ 1 Geltungsbereich, Begriffe">
        <div className="space-y-4">
          <p>
            Diese AGB gelten für sämtliche Nutzer der Plattform „katew.de", insbesondere Privatpersonen, Patienten, Angehörige, gesetzliche Betreuer, Einrichtungen (z. B. Pflegeheime, Pflegedienste, Krankenhäuser, MVZ, Dialyse-/Reha-Zentren), öffentliche Träger, Kostenträger sowie sonstige Institutionen (nachfolgend gemeinsam „Nutzer").
          </p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            { term: "Fahrunternehmen", desc: "Rechtlich selbstständige Dritte, die Personenbeförderungsleistungen durchführen." },
            { term: "Buchungsanfrage", desc: "Eine über katew.de abgegebene Anfrage zur Vermittlung einer Fahrt." },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-card rounded-2xl border border-border/50">
              <p className="font-semibold text-foreground text-sm mb-1">{item.term}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-4">
          Diese AGB gelten ausschließlich für den Nutzungs- und Vermittlungsvertrag zwischen Nutzer und katew.de. Für die Beförderung gelten die Bedingungen des jeweiligen Fahrunternehmens.
        </p>
      </LegalSection>

      <LegalSection id="rolle" title="§ 2 Rolle von katew.de / Vertragsverhältnisse">
        <div className="space-y-4">
          {[
            "katew.de betreibt eine digitale Plattform zur Vermittlung von Kranken- und Patientenfahrten.",
            "katew.de ist ausschließlich Vermittler und nicht Anbieter der Beförderungsleistung. katew.de erbringt keine Beförderung und keine medizinischen Leistungen.",
            "Der Beförderungsvertrag kommt ausschließlich zwischen dem Nutzer (Patient/Einrichtung/Kostenträger) und dem ausführenden Fahrunternehmen zustande. katew.de wird nicht Vertragspartner des Beförderungsvertrages.",
            "katew.de schuldet ausschließlich die Vermittlungsmöglichkeit (Weiterleitung/Matching) und eine ordnungsgemäße Plattformbereitstellung im Rahmen des Zumutbaren, nicht aber die Durchführung oder den Erfolg einer Fahrt.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Soweit katew.de als „Servicepartner" bezeichnet wird, ist damit ausschließlich eine unterstützende Vermittlungs- und Kommunikationsfunktion gemeint. Eine Verantwortung für die Beförderungsleistung wird dadurch nicht begründet.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="nutzung" title="§ 3 Zulässige Nutzung, Nutzerpflichten">
        <div className="space-y-4">
          {[
            "Nutzer dürfen katew.de nur für rechtmäßige Zwecke verwenden und müssen bei der Buchung richtige, vollständige und aktuelle Angaben machen.",
            "Nutzer sind verpflichtet, relevante Informationen zur Durchführung der Fahrt wahrheitsgemäß anzugeben (z. B. Abholort, Mobilität, Hilfsmittel). Medizinische Angaben sollen auf das Notwendige beschränkt werden.",
            "Nutzer dürfen Inhalte (Texte, Bewertungen, Nachrichten) nicht rechtswidrig, beleidigend, irreführend oder diskriminierend gestalten.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="buchung" title="§ 4 Buchungsanfrage, Vermittlungsmechanismus">
        <div className="space-y-4">
          {[
            "Buchungsanfragen werden – je nach Verfügbarkeit – an ein oder mehrere Fahrunternehmen weitergeleitet. Die Weiterleitung kann automatisiert erfolgen.",
            "katew.de nutzt zur fairen Verteilung interne Kriterien (z. B. Verfügbarkeit, Entfernung, Auslastung, Qualitätssignale). Nutzer haben keinen Anspruch auf Vermittlung an ein bestimmtes Fahrunternehmen, sofern nicht ausdrücklich eine Auswahlfunktion angeboten wird.",
            "Ein Anspruch auf erfolgreiche Vermittlung oder Annahme der Buchungsanfrage besteht nicht.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              <span className="font-medium text-foreground">Hinweis:</span> Zeitangaben wie „Vermittlung in der Regel unter 5 Minuten" sind unverbindliche Erfahrungswerte und stellen keine Garantie oder zugesicherte Eigenschaft dar.
            </p>
          </div>
        </div>

        <p className="mt-4">
          Sobald ein Fahrunternehmen eine Buchung annimmt oder dem Nutzer ein Angebot unterbreitet, entsteht das Vertragsverhältnis über die Beförderung ausschließlich zwischen Nutzer und Fahrunternehmen.
        </p>
      </LegalSection>

      <LegalSection id="keine-krankentransporte" title="§ 5 Keine Krankentransporte, keine Notfälle">
        <LegalInfoCard icon={<XCircle className="w-5 h-5" />}>
          <div className="space-y-3">
            <p>Über katew.de werden keine Krankentransporte im Sinne der Rettungsdienstgesetze vermittelt.</p>
            <p className="font-medium text-foreground">katew.de ist nicht für Notfälle bestimmt. In medizinischen Notfällen ist der Rettungsdienst unter 112 zu kontaktieren.</p>
          </div>
        </LegalInfoCard>
      </LegalSection>

      <LegalSection id="preise" title="§ 6 Preise, Abrechnung, Zahlungsfluss">
        <div className="space-y-4">
          {[
            "Preise und Konditionen der Fahrt werden ausschließlich vom jeweiligen Fahrunternehmen festgelegt (z. B. Selbstzahlerpreise, Konditionen bei Transportschein/Verordnung, Sonderleistungen).",
            "Die Abrechnung erfolgt direkt zwischen Nutzer und Fahrunternehmen. katew.de ist weder Zahlungsdienstleister noch Inkassodienstleister und übernimmt keine Gewähr für die Richtigkeit von Preisangaben der Fahrunternehmen.",
            "Etwaige Kostenträger-/Kassenprozesse (z. B. Verordnungen/Transportscheine) betreffen das Verhältnis Nutzer ↔ Fahrunternehmen und sind von diesem eigenverantwortlich zu prüfen und abzuwickeln.",
            "Soweit katew.de zukünftig zusätzliche Zahlungs-/Abrechnungsfunktionen anbietet, gelten hierfür gesonderte Bedingungen.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="stornierung" title="§ 7 Stornierung, Änderungen, Nichtantritt (No-Show)">
        <div className="space-y-4">
          {[
            "Stornierungen und Änderungen von Fahrten sind grundsätzlich direkt mit dem Fahrunternehmen zu klären, sofern das Fahrunternehmen nach Vermittlung bereits feststeht.",
            "Soweit katew.de eine Storno-/Änderungsfunktion bereitstellt, handelt katew.de lediglich als Kommunikationsmittler.",
            "Bei kurzfristigen Stornierungen oder Nichtantritt können dem Nutzer Kosten durch das Fahrunternehmen entstehen. katew.de ist hierfür nicht verantwortlich.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="inhalte" title="§ 8 Inhalte, Bewertungen, Ranking/Sortierung">
        <div className="space-y-4">
          {[
            "katew.de kann Inhalte von Nutzern (z. B. Bewertungen) veröffentlichen und moderieren. Nutzer sind verpflichtet, nur wahrheitsgemäße, sachliche Bewertungen abzugeben.",
            "katew.de ist berechtigt, rechtswidrige oder offensichtlich unzutreffende Inhalte zu entfernen oder zu sperren.",
            "Eine Reihenfolge/Anzeige von Fahrunternehmen (z. B. Vorschläge) kann automatisiert erfolgen und basiert auf internen Kriterien. Ein Anspruch auf eine bestimmte Platzierung besteht nicht.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="verfuegbarkeit" title="§ 9 Verfügbarkeit, Wartung, Änderungen der Plattform">
        <div className="space-y-4">
          {[
            "katew.de bemüht sich um eine hohe Verfügbarkeit der Plattform, schuldet jedoch keine jederzeitige ununterbrochene Verfügbarkeit.",
            "Wartung, Sicherheitsupdates, technische Störungen oder höhere Gewalt können zu Einschränkungen führen.",
            "katew.de ist berechtigt, Funktionen weiterzuentwickeln, zu ändern oder einzustellen, soweit dies für Nutzer zumutbar ist.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="datenschutz" title="§ 10 Datenschutz, Einwilligung bei Gesundheitsdaten">
        <div className="space-y-4">
          <p>
            Informationen zum Datenschutz sind in der{" "}
            <Link to="/datenschutz" className="text-primary hover:underline font-medium">Datenschutzerklärung</Link> geregelt.
          </p>
          <p>
            Nutzer nehmen zur Kenntnis, dass im Rahmen der Vermittlung auch Gesundheitsdaten (Art. 9 DSGVO) verarbeitet werden können, soweit sie vom Nutzer bereitgestellt werden (z. B. Mobilität, Pflegegrad, medizinische Hinweise).
          </p>
          <p>
            Soweit erforderlich, erfolgt die Verarbeitung auf Grundlage einer ausdrücklichen Einwilligung. Ohne Bereitstellung notwendiger Angaben kann eine Vermittlung ggf. nicht erfolgen.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="haftung" title="§ 11 Haftung">
        <div className="space-y-4">
          <p>
            katew.de haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
          </p>
          <p>
            Bei einfacher Fahrlässigkeit haftet katew.de nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) und beschränkt auf den vertragstypischen, vorhersehbaren Schaden.
          </p>
        </div>

        <div className="mt-6 p-5 bg-muted/30 rounded-xl border border-border/50">
          <h4 className="font-medium text-foreground mb-3">katew.de haftet insbesondere nicht für:</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Durchführung der Fahrt (Pünktlichkeit, Sicherheit, Servicequalität)",
              "Verspätungen, Ausfälle, Routenwahl",
              "Medizinische Betreuung oder Beurteilungen",
              "Preisgestaltung, Abrechnung, Erstattungsfähigkeit durch Kostenträger",
              "Verlust/Beschädigung von Gegenständen",
              "Nichterreichbarkeit/fehlende Annahme durch Fahrunternehmen",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4">
          katew.de haftet nicht für Schäden, die auf unrichtigen oder unvollständigen Nutzerangaben beruhen.
        </p>
        <p className="mt-2">
          Haftungsbeschränkungen gelten nicht, soweit zwingende gesetzliche Haftung besteht (z. B. Produkthaftung), oder katew.de eine Garantie übernommen hat (was hier nicht der Fall ist).
        </p>
      </LegalSection>

      <LegalSection id="sperrung" title="§ 12 Sperrung/Beendigung von Nutzungen">
        <LegalInfoCard icon={<Ban className="w-5 h-5" />}>
          <p className="mb-3">katew.de kann Nutzerzugänge oder Buchungsfunktionen vorübergehend sperren, wenn:</p>
        </LegalInfoCard>
        <div className="mt-4 space-y-3">
          {[
            "Missbrauch vorliegt (z. B. falsche Daten, Spam, Umgehung, rechtswidrige Inhalte)",
            "Sicherheitsgründe bestehen",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border/50">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-1.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Eine Sperrung erfolgt nach Möglichkeit mit vorheriger Warnung, sofern dies zumutbar ist.
        </p>
      </LegalSection>

      <LegalSection id="schlussbestimmungen" title="§ 13 Schlussbestimmungen">
        <div className="space-y-4">
          {[
            "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
            "Gerichtsstand ist, soweit rechtlich zulässig, Frankfurt am Main. Für Verbraucher gelten die gesetzlichen Gerichtsstände.",
            "Sollte eine Bestimmung unwirksam sein oder werden, bleibt der Vertrag im Übrigen wirksam. An die Stelle der unwirksamen Regelung tritt die gesetzliche Regelung.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
