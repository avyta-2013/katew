import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

const blogPosts = [
  {
    category: "Ratgeber",
    title: "Krankenfahrt richtig beantragen",
    excerpt: "Alles was Sie über Verordnungen und Kostenübernahme wissen müssen.",
    readTime: "5 Min",
  },
  {
    category: "News",
    title: "Digitalisierung im Gesundheitswesen",
    excerpt: "Wie moderne Technologie die Krankenfahrt verändert.",
    readTime: "4 Min",
  },
  {
    category: "Tipps",
    title: "Checkliste für Ihre erste Buchung",
    excerpt: "Schritt für Schritt zur erfolgreichen Anfrage.",
    readTime: "3 Min",
  },
];

export const BlogNewsletter = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Blog section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Wissen & Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aktuelles aus der Branche
              </h2>

              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-5 bg-card border border-border/50 rounded-xl hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime} Lesezeit</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </a>
                ))}
              </div>

              <Button variant="ghost" className="mt-6 text-primary hover:text-primary/80">
                Alle Artikel anzeigen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Newsletter section */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Bleiben Sie informiert
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Erhalten Sie relevante Updates zu Änderungen im Gesundheitswesen, 
                  neue Features und hilfreiche Tipps – direkt in Ihr Postfach.
                </p>

                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="h-12 rounded-xl bg-background border-border/50 focus:border-primary"
                  />
                  <Button className="w-full h-12 rounded-xl font-semibold">
                    Newsletter abonnieren
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Kein Spam. Jederzeit abmelden. 
                  <a href="#" className="underline hover:text-foreground ml-1">
                    Datenschutzhinweise
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
