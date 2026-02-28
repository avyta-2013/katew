import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const blogPosts = {
  "krankenfahrt-richtig-beantragen": {
    title: "Krankenfahrt richtig beantragen: Verordnung, Kostenübernahme & Muster 4 erklärt",
    excerpt: "Alles was Sie über Verordnungen und Kostenübernahme wissen müssen – Schritt für Schritt zum genehmigten Krankentransport.",
    category: "Tipps & Ratgeber",
    author: "Redaktion katew",
    authorRole: "Fachredaktion Gesundheitslogistik",
    date: "28. Februar 2026",
    readTime: "12 Min.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Wer aus medizinischen Gründen nicht eigenständig zum Arzt, ins Krankenhaus oder zur Therapie gelangen kann, hat Anspruch auf eine Krankenfahrt. Doch wie genau beantragt man eine solche Fahrt? Welche Voraussetzungen müssen erfüllt sein, damit die Krankenkasse die Kosten übernimmt? Und was hat es mit dem Muster 4 auf sich? In diesem umfassenden Ratgeber erfahren Sie alles, was Sie wissen müssen – von der ärztlichen Verordnung bis zur erfolgreichen Kostenübernahme."
      },
      {
        type: "heading",
        text: "Was ist eine Krankenfahrt und wer hat Anspruch darauf?"
      },
      {
        type: "paragraph",
        text: "Eine Krankenfahrt ist eine medizinisch notwendige Beförderung von Patienten, die aufgrund ihrer gesundheitlichen Einschränkung nicht in der Lage sind, öffentliche Verkehrsmittel oder ein privates Fahrzeug zu nutzen. Der Anspruch auf eine Krankenfahrt ist im Sozialgesetzbuch V (§ 60 SGB V) geregelt und gilt für alle gesetzlich Versicherten."
      },
      {
        type: "paragraph",
        text: "Grundsätzlich besteht ein Anspruch auf Kostenübernahme, wenn die Fahrt im Zusammenhang mit einer Leistung der Krankenkasse steht und aus zwingenden medizinischen Gründen notwendig ist. Das betrifft beispielsweise Fahrten zur stationären Behandlung, zur ambulanten Operation, zur Dialyse, Strahlen- oder Chemotherapie oder bei einer Pflegestufe ab Pflegegrad 3."
      },
      {
        type: "heading",
        text: "Welche Arten von Krankenfahrten gibt es?"
      },
      {
        type: "paragraph",
        text: "Die Krankentransport-Richtlinie des Gemeinsamen Bundesausschusses (G-BA) unterscheidet verschiedene Beförderungsarten, die je nach medizinischer Notwendigkeit verordnet werden:"
      },
      {
        type: "list",
        items: [
          "Taxi oder Mietwagen: Für gehfähige Patienten, die aus medizinischen Gründen kein öffentliches Verkehrsmittel nutzen können.",
          "Krankenfahrt (sitzend): Beförderung im Krankentransportwagen für Patienten, die eine fachliche Betreuung während der Fahrt benötigen, aber nicht liegend transportiert werden müssen.",
          "Krankentransport (liegend): Für Patienten, die während der Fahrt medizinisch-fachlich betreut und liegend transportiert werden müssen.",
          "Rettungsfahrt: Bei akuter Lebensgefahr oder wenn schwere gesundheitliche Schäden zu befürchten sind – hier ist keine vorherige Genehmigung notwendig."
        ]
      },
      {
        type: "heading",
        text: "Das Muster 4: Die ärztliche Verordnung einer Krankenbeförderung"
      },
      {
        type: "paragraph",
        text: "Das Muster 4 ist das offizielle Formular, mit dem Ärzte eine Krankenbeförderung verordnen. Es ist der zentrale Baustein für die Kostenübernahme durch die Krankenkasse. Ohne ein korrekt ausgefülltes Muster 4 wird die Krankenkasse die Fahrtkosten in der Regel nicht übernehmen."
      },
      {
        type: "paragraph",
        text: "Das Formular enthält wichtige Angaben wie die Art der Beförderung (Taxi, KTW, RTW), den medizinischen Grund, die Fahrtstrecke (Abholadresse und Ziel), sowie ob es sich um eine Hin- und Rückfahrt oder nur eine einfache Fahrt handelt. Zudem muss der Arzt bestätigen, warum der Patient auf eine Krankenfahrt angewiesen ist."
      },
      {
        type: "heading",
        text: "Schritt-für-Schritt: So beantragen Sie eine Krankenfahrt"
      },
      {
        type: "list",
        items: [
          "Schritt 1 – Arztbesuch: Sprechen Sie mit Ihrem behandelnden Arzt über die medizinische Notwendigkeit einer Krankenfahrt. Er entscheidet, ob eine Verordnung ausgestellt wird.",
          "Schritt 2 – Verordnung (Muster 4): Der Arzt füllt das Muster 4 aus und vermerkt die Art der Beförderung, den medizinischen Grund und die Fahrtstrecke.",
          "Schritt 3 – Genehmigung durch die Krankenkasse: Bei ambulanten Fahrten muss die Krankenkasse die Verordnung vorab genehmigen. Reichen Sie das Muster 4 rechtzeitig ein – idealerweise mindestens eine Woche vor dem Termin.",
          "Schritt 4 – Transport buchen: Nach der Genehmigung können Sie den Transport buchen. Über Plattformen wie katew finden Sie schnell einen passenden Anbieter in Ihrer Nähe.",
          "Schritt 5 – Fahrt durchführen und abrechnen: Der Transportanbieter rechnet in der Regel direkt mit Ihrer Krankenkasse ab. Sie zahlen nur die gesetzliche Zuzahlung."
        ]
      },
      {
        type: "heading",
        text: "Wann ist eine Genehmigung der Krankenkasse erforderlich?"
      },
      {
        type: "paragraph",
        text: "Nicht jede Krankenfahrt muss vorab von der Krankenkasse genehmigt werden. Die Regelungen unterscheiden sich je nach Fahrtanlass:"
      },
      {
        type: "list",
        items: [
          "Keine Genehmigung nötig: Fahrten zur stationären Behandlung, bei Rettungsfahrten und bei Krankentransporten mit medizinisch-fachlicher Betreuung.",
          "Genehmigung erforderlich: Fahrten zu ambulanten Behandlungen – hier muss die Krankenkasse der Verordnung vorab zustimmen. Ausnahmen gelten bei Dialyse, Strahlen- und Chemotherapie, bei Pflegegrad 3–5 und bei Schwerbehinderung mit den Merkzeichen aG, Bl oder H.",
          "Wichtig: Bei ambulanten Serienbehandlungen (z. B. Dialyse 3x wöchentlich) genügt eine einmalige Genehmigung für die gesamte Behandlungsserie."
        ]
      },
      {
        type: "heading",
        text: "Kosten und Zuzahlung: Was müssen Patienten selbst zahlen?"
      },
      {
        type: "paragraph",
        text: "Versicherte ab 18 Jahren müssen eine gesetzliche Zuzahlung leisten. Diese beträgt 10 % der Fahrtkosten, mindestens 5 Euro und maximal 10 Euro pro Fahrt. Bei einer Hin- und Rückfahrt fällt die Zuzahlung zweimal an. Kinder und Jugendliche unter 18 Jahren sind von der Zuzahlung befreit."
      },
      {
        type: "paragraph",
        text: "Wer die jährliche Belastungsgrenze erreicht hat, kann sich bei seiner Krankenkasse von weiteren Zuzahlungen befreien lassen. Die Belastungsgrenze liegt bei 2 % des Bruttoeinkommens, bei chronisch Kranken bei 1 %."
      },
      {
        type: "heading",
        text: "Häufige Fehler bei der Beantragung vermeiden"
      },
      {
        type: "list",
        items: [
          "Unvollständiges Muster 4: Fehlende Angaben wie die Diagnose, die Beförderungsart oder die Unterschrift des Arztes führen zur Ablehnung. Prüfen Sie das Formular vor der Einreichung.",
          "Zu späte Einreichung: Reichen Sie die Verordnung mindestens 5–7 Werktage vor dem geplanten Termin bei Ihrer Krankenkasse ein.",
          "Falsche Beförderungsart: Der Arzt muss die medizinisch notwendige Beförderungsart angeben. Eine Verordnung für ein Taxi, obwohl ein Krankentransport nötig wäre, kann zu Problemen führen.",
          "Keine Genehmigung eingeholt: Bei ambulanten Fahrten ohne vorherige Genehmigung müssen Sie die Kosten unter Umständen selbst tragen.",
          "Privatfahrten verwechseln: Fahrten zu Vorsorgeuntersuchungen oder Zahnarztbesuchen werden in der Regel nicht übernommen – es sei denn, es liegt eine besondere medizinische Begründung vor."
        ]
      },
      {
        type: "heading",
        text: "Sonderfall: Krankenfahrt bei Privatpatienten"
      },
      {
        type: "paragraph",
        text: "Privatversicherte haben ebenfalls Anspruch auf Erstattung von Krankentransportkosten – allerdings richten sich die Bedingungen nach dem individuellen Versicherungsvertrag. In der Regel erstatten private Krankenversicherungen die Kosten für medizinisch notwendige Transporte. Prüfen Sie vorab Ihren Tarif und klären Sie die Kostenübernahme direkt mit Ihrer Versicherung."
      },
      {
        type: "heading",
        text: "Digitale Buchung: So einfach geht es mit katew"
      },
      {
        type: "paragraph",
        text: "Die Organisation einer Krankenfahrt muss nicht kompliziert sein. Mit der digitalen Plattform katew können Patienten, Angehörige und Gesundheitseinrichtungen Krankenfahrten schnell und unkompliziert buchen. Sie geben einfach Abholadresse, Ziel, Datum und Beförderungsart ein – und erhalten sofort Angebote von geprüften Transportunternehmen in Ihrer Region."
      },
      {
        type: "list",
        items: [
          "Schnelle Online-Buchung in wenigen Minuten",
          "Über 500 geprüfte Transportunternehmen deutschlandweit",
          "Transparente Preise und direkte Abrechnung mit der Krankenkasse",
          "Echtzeit-Tracking und Statusupdates für jede Fahrt"
        ]
      },
      {
        type: "heading",
        text: "Häufig gestellte Fragen (FAQ)"
      },
      {
        type: "paragraph",
        text: "Kann ich eine Krankenfahrt auch ohne Muster 4 buchen? – Nein, für eine Kostenübernahme durch die Krankenkasse ist eine ärztliche Verordnung (Muster 4) zwingend erforderlich. Ohne Verordnung müssen Sie die Kosten selbst tragen, es sei denn, es handelt sich um einen Notfall."
      },
      {
        type: "paragraph",
        text: "Wie lange dauert die Genehmigung durch die Krankenkasse? – In der Regel entscheidet die Krankenkasse innerhalb von 3–5 Werktagen. Bei dringenden Fahrten können Sie eine Eilgenehmigung beantragen."
      },
      {
        type: "paragraph",
        text: "Was passiert, wenn mein Antrag abgelehnt wird? – Sie können innerhalb eines Monats Widerspruch einlegen. Legen Sie eine ausführliche ärztliche Begründung bei, warum die Krankenfahrt medizinisch notwendig ist."
      },
      {
        type: "paragraph",
        text: "Werden auch Fahrten zur Reha übernommen? – Ja, Fahrten zu stationären und ambulanten Rehabilitationsmaßnahmen werden in der Regel von der Krankenkasse übernommen, sofern eine ärztliche Verordnung vorliegt."
      },
      {
        type: "paragraph",
        text: "Kann ein Angehöriger die Krankenfahrt beantragen? – Ja, Angehörige oder gesetzliche Betreuer können die Verordnung beim Arzt beantragen und bei der Krankenkasse einreichen."
      },
      {
        type: "heading",
        text: "Fazit: Gut vorbereitet zur genehmigten Krankenfahrt"
      },
      {
        type: "paragraph",
        text: "Eine Krankenfahrt zu beantragen ist kein Hexenwerk – wenn Sie die richtigen Schritte kennen. Holen Sie sich rechtzeitig eine Verordnung (Muster 4) von Ihrem Arzt, reichen Sie diese bei Ihrer Krankenkasse ein und buchen Sie den Transport über eine verlässliche Plattform wie katew. So stellen Sie sicher, dass Ihre Fahrt genehmigt wird und Sie sich voll auf Ihre Gesundheit konzentrieren können."
      }
    ],
    relatedPosts: [
      {
        title: "Die Zukunft der Krankenfahrten: Digitalisierung im Gesundheitswesen",
        slug: "zukunft-krankenfahrten-digitalisierung",
        category: "Digitalisierung"
      },
      {
        title: "5 Tipps für die optimale Vorbereitung auf eine Krankenfahrt",
        slug: "tipps-vorbereitung-krankenfahrt",
        category: "Tipps & Ratgeber"
      }
    ]
  },
  "zukunft-krankenfahrten-digitalisierung": {
    title: "Die Zukunft der Krankenfahrten: Digitalisierung im Gesundheitswesen",
    excerpt: "Erfahren Sie, wie digitale Plattformen die Patientenlogistik revolutionieren und welche Vorteile sich für alle Beteiligten ergeben.",
    category: "Digitalisierung",
    author: "Dr. Maria Schmidt",
    authorRole: "Head of Product",
    date: "15. Januar 2025",
    readTime: "8 Min.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Die Digitalisierung hat in den letzten Jahren nahezu jeden Bereich unseres Lebens verändert – und das Gesundheitswesen bildet dabei keine Ausnahme. Insbesondere im Bereich der Krankenfahrten und Patientenlogistik eröffnen sich durch digitale Lösungen völlig neue Möglichkeiten, die sowohl für Patienten als auch für Gesundheitseinrichtungen und Transportunternehmen erhebliche Vorteile bieten."
      },
      {
        type: "heading",
        text: "Die Herausforderungen der traditionellen Krankenfahrten"
      },
      {
        type: "paragraph",
        text: "Traditionell war die Organisation von Krankenfahrten ein zeitaufwändiger und oft ineffizienter Prozess. Patienten oder ihre Angehörigen mussten telefonisch Transporte buchen, Kliniken koordinierten Fahrten über Fax oder E-Mail, und Transportunternehmen arbeiteten häufig mit papierbasierten Systemen. Dies führte nicht selten zu Wartezeiten, Kommunikationsproblemen und suboptimaler Routenplanung."
      },
      {
        type: "heading",
        text: "Wie digitale Plattformen die Patientenlogistik revolutionieren"
      },
      {
        type: "paragraph",
        text: "Moderne digitale Plattformen wie katew setzen genau hier an und bieten eine ganzheitliche Lösung für alle Beteiligten. Durch die zentrale Bündelung von Buchungen, automatisierte Prozesse und intelligente Algorithmen wird die gesamte Prozesskette optimiert."
      },
      {
        type: "list",
        items: [
          "Echtzeit-Buchung und -Verfolgung: Patienten und Einrichtungen können Fahrten in Sekundenschnelle buchen und den Status in Echtzeit verfolgen.",
          "Automatisierte Disposition: KI-gestützte Systeme optimieren Routen und Fahrzeugzuweisungen automatisch.",
          "Digitale Dokumentation: Alle relevanten Unterlagen werden digital verwaltet und sind jederzeit abrufbar.",
          "Nahtlose Integration: Schnittstellen zu Krankenhaus- und Praxissystemen ermöglichen einen reibungslosen Datenaustausch."
        ]
      },
      {
        type: "heading",
        text: "Vorteile für alle Beteiligten"
      },
      {
        type: "paragraph",
        text: "Die Digitalisierung der Krankenfahrten bringt messbare Vorteile für alle Stakeholder. Patienten profitieren von kürzeren Wartezeiten und mehr Transparenz. Gesundheitseinrichtungen sparen administrative Aufwände und können sich auf ihre Kernaufgaben konzentrieren. Transportunternehmen arbeiten effizienter und können ihre Ressourcen besser auslasten."
      },
      {
        type: "heading",
        text: "Ein Blick in die Zukunft"
      },
      {
        type: "paragraph",
        text: "Die Entwicklung ist noch lange nicht abgeschlossen. Künstliche Intelligenz, prädiktive Analysen und die weitere Vernetzung im Gesundheitswesen werden die Patientenlogistik weiter verbessern. Wir bei katew arbeiten kontinuierlich daran, diese Technologien zu integrieren und die Zukunft der Krankenfahrten aktiv mitzugestalten."
      },
      {
        type: "paragraph",
        text: "Die Digitalisierung im Gesundheitswesen ist kein Trend, sondern eine Notwendigkeit. Wer jetzt die Weichen stellt, wird von den Vorteilen einer vernetzten, effizienten und patientenzentrierten Gesundheitslogistik profitieren."
      }
    ],
    relatedPosts: [
      {
        title: "Krankenfahrt richtig beantragen",
        slug: "krankenfahrt-richtig-beantragen",
        category: "Tipps & Ratgeber"
      },
      {
        title: "5 Tipps für die optimale Vorbereitung auf eine Krankenfahrt",
        slug: "tipps-vorbereitung-krankenfahrt",
        category: "Tipps & Ratgeber"
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  // JSON-LD structured data for SEO
  const jsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": { "@type": "Person", "name": post.author },
    "publisher": { "@type": "Organization", "name": "katew", "logo": { "@type": "ImageObject", "url": "https://katew.lovable.app/katew-logo.png" } },
    "datePublished": post.date,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://katew.lovable.app/blog/${slug}` }
  } : null;

  // FAQ JSON-LD for the Krankenfahrt article
  const faqJsonLd = slug === "krankenfahrt-richtig-beantragen" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kann ich eine Krankenfahrt auch ohne Muster 4 buchen?", "acceptedAnswer": { "@type": "Answer", "text": "Nein, für eine Kostenübernahme durch die Krankenkasse ist eine ärztliche Verordnung (Muster 4) zwingend erforderlich." } },
      { "@type": "Question", "name": "Wie lange dauert die Genehmigung durch die Krankenkasse?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel entscheidet die Krankenkasse innerhalb von 3–5 Werktagen." } },
      { "@type": "Question", "name": "Was passiert, wenn mein Antrag abgelehnt wird?", "acceptedAnswer": { "@type": "Answer", "text": "Sie können innerhalb eines Monats Widerspruch einlegen. Legen Sie eine ausführliche ärztliche Begründung bei." } },
      { "@type": "Question", "name": "Werden auch Fahrten zur Reha übernommen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Fahrten zu stationären und ambulanten Rehabilitationsmaßnahmen werden in der Regel übernommen, sofern eine ärztliche Verordnung vorliegt." } },
      { "@type": "Question", "name": "Kann ein Angehöriger die Krankenfahrt beantragen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, Angehörige oder gesetzliche Betreuer können die Verordnung beim Arzt beantragen und bei der Krankenkasse einreichen." } }
    ]
  } : null;

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
            <Link to="/blog">
              <Button>Zurück zum Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>
              
              <Badge variant="outline" className="mb-4 border-secondary/50 text-secondary">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none">
                {post.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list" && block.items) {
                    return (
                      <ul key={index} className="space-y-3 mb-6">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </article>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Artikel teilen:</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Ähnliche Artikel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((related, index) => (
                  <Link 
                    key={index}
                    to={`/blog/${related.slug}`}
                    className="group bg-card rounded-xl border border-border/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <Badge variant="outline" className="mb-3 border-secondary/50 text-secondary text-xs">
                      {related.category}
                    </Badge>
                    <h3 className="font-bold group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-sm mt-3">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bleiben Sie informiert
              </h2>
              <p className="text-muted-foreground mb-6">
                Entdecken Sie weitere Artikel rund um Krankenfahrten und Patientenlogistik.
              </p>
              <Link to="/blog">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8">
                  Alle Artikel ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}