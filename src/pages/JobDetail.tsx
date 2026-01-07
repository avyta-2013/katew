import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  CheckCircle,
  Users,
  Heart,
  Zap,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const jobData = {
  "sales-manager": {
    title: "Sales Manager/in",
    department: "Vertrieb",
    location: "Frankfurt / Remote",
    type: "Vollzeit, Teilzeit, Aushilfe",
    description: "Als Sales Manager/in bei katew bist du verantwortlich für den Aufbau und die Pflege unserer Kundenbeziehungen im Gesundheitswesen. Du arbeitest eng mit Kliniken, Pflegeeinrichtungen und Krankenkassen zusammen, um unsere innovative Plattform für Krankenfahrten zu etablieren.",
    responsibilities: [
      "Akquise und Betreuung von Neukunden im Gesundheitswesen",
      "Aufbau langfristiger Kundenbeziehungen zu Kliniken und Pflegeeinrichtungen",
      "Präsentation unserer Plattform bei potenziellen Partnern",
      "Entwicklung und Umsetzung von Vertriebsstrategien",
      "Marktanalyse und Identifikation neuer Geschäftsmöglichkeiten",
      "Enge Zusammenarbeit mit dem Marketing- und Produktteam",
    ],
    requirements: [
      "Abgeschlossene kaufmännische Ausbildung oder Studium",
      "Erfahrung im B2B-Vertrieb, idealerweise im Gesundheitswesen",
      "Ausgeprägte Kommunikations- und Verhandlungsfähigkeiten",
      "Selbstständige und zielorientierte Arbeitsweise",
      "Sehr gute Deutschkenntnisse in Wort und Schrift",
      "Führerschein Klasse B von Vorteil",
    ],
    benefits: [
      "Flexible Arbeitszeiten und Remote-Option",
      "Attraktives Grundgehalt plus Provision",
      "Weiterbildungsbudget und Karrierechancen",
      "Moderne Arbeitsumgebung in Frankfurt",
      "Betriebliche Gesundheitsvorsorge",
      "Team-Events und Offsites",
    ],
  },
};

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const job = slug ? jobData[slug as keyof typeof jobData] : null;

  if (!job) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Stelle nicht gefunden</h1>
            <Link to="/karriere">
              <Button>Zurück zu Karriere</Button>
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
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/karriere" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zu allen Stellen
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  <Briefcase className="w-3 h-3 mr-1" />
                  {job.department}
                </Badge>
                <Badge variant="outline" className="border-secondary/50 text-secondary">
                  <MapPin className="w-3 h-3 mr-1" />
                  {job.location}
                </Badge>
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" />
                  {job.type}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                {job.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {job.description}
              </p>
              
              <a href="mailto:support@katew.de?subject=Bewerbung: Sales Manager/in">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8">
                  <Send className="mr-2 w-5 h-5" />
                  Jetzt bewerben
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid gap-12">
              {/* Responsibilities */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Deine Aufgaben</h2>
                </div>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Das bringst du mit</h2>
                </div>
                <ul className="space-y-4">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Das bieten wir dir</h2>
                </div>
                <ul className="space-y-4">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interesse geweckt?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sende uns deine Bewerbung mit Lebenslauf und Anschreiben. Wir freuen uns darauf, dich kennenzulernen!
              </p>
              <a href="mailto:support@katew.de?subject=Bewerbung: Sales Manager/in">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-8">
                  <Send className="mr-2 w-5 h-5" />
                  Bewerbung senden
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                Fragen? Schreib uns an{" "}
                <a href="mailto:support@katew.de" className="text-primary hover:underline">
                  support@katew.de
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}