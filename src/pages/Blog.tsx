import { useState } from "react";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Search, 
  Tag,
  TrendingUp,
  User,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const categories = [
  { name: "Alle", count: 12 },
  { name: "Branchennews", count: 4 },
  { name: "Tipps & Ratgeber", count: 3 },
  { name: "Digitalisierung", count: 3 },
  { name: "Erfolgsgeschichten", count: 2 },
];

const featuredPost = {
  title: "Die Zukunft der Krankenfahrten: Digitalisierung im Gesundheitswesen",
  excerpt: "Erfahren Sie, wie digitale Plattformen die Patientenlogistik revolutionieren und welche Vorteile sich für alle Beteiligten ergeben.",
  category: "Digitalisierung",
  author: "Dr. Maria Schmidt",
  date: "15. Januar 2025",
  readTime: "8 Min.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
};

const posts = [
  {
    title: "Krankenfahrt richtig beantragen: Verordnung & Kostenübernahme",
    excerpt: "Alles was Sie über Verordnungen, Muster 4 und Kostenübernahme wissen müssen – Schritt für Schritt erklärt.",
    category: "Tipps & Ratgeber",
    author: "Redaktion katew",
    date: "28. Februar 2026",
    readTime: "12 Min.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    slug: "krankenfahrt-richtig-beantragen",
  },
  {
    title: "Krankentransport Kosten: Was kostet ein Krankentransport?",
    excerpt: "Alle Kosten für Krankentransport, Krankenfahrt und Rettungswagen im Überblick – mit Tipps zur Kostenübernahme.",
    category: "Tipps & Ratgeber",
    author: "Redaktion katew",
    date: "28. Februar 2026",
    readTime: "13 Min.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop",
    slug: "krankentransport-kosten",
  },
  {
    title: "5 Tipps für die optimale Vorbereitung auf eine Krankenfahrt",
    excerpt: "Praktische Ratschläge für Patienten und Angehörige zur Vorbereitung auf den Transport.",
    category: "Tipps & Ratgeber",
    author: "Thomas Müller",
    date: "10. Januar 2025",
    readTime: "5 Min.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop",
  },
  {
    title: "Neue Regelungen für Krankenfahrten ab 2025",
    excerpt: "Wichtige Änderungen bei der Kostenübernahme und Verordnung von Krankenfahrten.",
    category: "Branchennews",
    author: "Anna Weber",
    date: "5. Januar 2025",
    readTime: "6 Min.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
  {
    title: "Erfolgsgeschichte: Klinikum Musterstadt spart 30% Transportkosten",
    excerpt: "Wie ein Krankenhaus durch die digitale Transportkoordination erheblich profitiert.",
    category: "Erfolgsgeschichten",
    author: "Dr. Maria Schmidt",
    date: "28. Dezember 2024",
    readTime: "7 Min.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
  },
  {
    title: "Barrierefreier Transport: Worauf es ankommt",
    excerpt: "Alles Wichtige über Rollstuhl- und Liegetransporte für mobilitätseingeschränkte Patienten.",
    category: "Tipps & Ratgeber",
    author: "Petra Hoffmann",
    date: "20. Dezember 2024",
    readTime: "4 Min.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
  },
  {
    title: "Interview: So arbeiten moderne Krankenfahrt-Unternehmen",
    excerpt: "Ein Blick hinter die Kulissen eines zertifizierten Transportunternehmens.",
    category: "Branchennews",
    author: "Thomas Müller",
    date: "15. Dezember 2024",
    readTime: "10 Min.",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&h=400&fit=crop",
  },
  {
    title: "Digitalisierung im Gesundheitswesen: Chancen für die Patientenbeförderung",
    excerpt: "Wie die digitale Transformation das Gesundheitswesen verändert – von der ePA bis zur intelligenten Krankenfahrt-Buchung.",
    category: "Digitalisierung",
    author: "Redaktion katew",
    date: "28. Februar 2026",
    readTime: "14 Min.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop",
    slug: "digitalisierung-im-gesundheitswesen",
  },
  {
    title: "KI und Machine Learning im Patientenfahrdienst",
    excerpt: "Wie künstliche Intelligenz die Routenplanung und Disposition optimiert.",
    category: "Digitalisierung",
    author: "Dr. Maria Schmidt",
    date: "10. Dezember 2024",
    readTime: "9 Min.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "Alle" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[200px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-40 right-[15%] w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
            <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
            <div className="absolute bottom-20 right-[25%] w-24 h-24 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-2xl -rotate-12 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium mb-8 animate-fade-in">
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-4 h-4 text-primary opacity-50" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                  Aktuelles aus der Branche
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Blog &{" "}
                </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  News
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Insights, Tipps und Neuigkeiten rund um Krankenfahrten und Patientenlogistik
              </p>
              
              {/* Search */}
              <div className="relative max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-border/50 bg-card/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                      : "bg-card border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:bg-gradient-to-l" />
                    <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 border-secondary/50 text-secondary">
                      <Tag className="w-3 h-3 mr-1" />
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link to="/blog/zukunft-krankenfahrten-digitalisierung">
                      <Button className="w-fit bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Artikel lesen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10">
                {selectedCategory === "Alle" ? "Alle Artikel" : selectedCategory}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => {
                  const postSlug = (post as any).slug;
                  const Wrapper = postSlug ? Link : "div" as any;
                  const wrapperProps = postSlug ? { to: `/blog/${postSlug}` } : {};
                  return (
                  <Wrapper
                    key={index}
                    {...wrapperProps}
                    className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300 block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      <Badge 
                        variant="outline" 
                        className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border-secondary/50 text-secondary"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Wrapper>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">1</Button>
                <Button variant="outline" className="rounded-full">2</Button>
                <Button variant="outline" className="rounded-full">3</Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bleiben Sie informiert
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Erhalten Sie die neuesten Artikel und Branchennews direkt in Ihr Postfach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse" 
                  className="max-w-sm rounded-full"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-8">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}