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
        title: "KI und Machine Learning im Patientenfahrdienst",
        slug: "ki-machine-learning-patientenfahrdienst",
        category: "Digitalisierung"
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