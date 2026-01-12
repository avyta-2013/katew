import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, Mail, Clock, TrendingUp, Lightbulb, Newspaper, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    category: "Ratgeber",
    icon: Lightbulb,
    title: "Krankenfahrt richtig beantragen",
    excerpt: "Alles was Sie über Verordnungen und Kostenübernahme wissen müssen.",
    readTime: "5 Min",
    color: "from-amber-500 to-orange-500",
    featured: true,
  },
  {
    category: "News",
    icon: Newspaper,
    title: "Digitalisierung im Gesundheitswesen",
    excerpt: "Wie moderne Technologie die Krankenfahrt verändert.",
    readTime: "4 Min",
    color: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    category: "Tipps",
    icon: TrendingUp,
    title: "Checkliste für Ihre erste Buchung",
    excerpt: "Schritt für Schritt zur erfolgreichen Anfrage.",
    readTime: "3 Min",
    color: "from-emerald-500 to-teal-500",
    featured: false,
  },
];

const newsletterFeatures = [
  "Aktuelle Branchennews",
  "Exklusive Tipps & Guides",
  "Neue Features zuerst",
];

export const BlogNewsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Wissen & Insights</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aktuelles aus der Branche
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bleiben Sie informiert mit unseren neuesten Artikeln und Branchennews
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
            {/* Blog section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Featured post */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/blog" className="block group">
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/90 p-8 text-white"
                    whileHover={{ scale: 1.01, boxShadow: "0 30px 60px -20px rgba(59, 130, 246, 0.4)" }}
                  >
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                          Featured
                        </span>
                        <span className="flex items-center gap-1 text-white/80 text-sm">
                          <Clock className="w-4 h-4" />
                          {blogPosts[0].readTime} Lesezeit
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-white/80 mb-4 max-w-lg">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-white font-medium">
                        Artikel lesen
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Other posts */}
              <div className="grid sm:grid-cols-2 gap-4">
                {blogPosts.slice(1).map((post, index) => {
                  const Icon = post.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      onMouseEnter={() => setHoveredPost(index)}
                      onMouseLeave={() => setHoveredPost(null)}
                    >
                      <Link to="/blog" className="block group h-full">
                        <motion.div 
                          className="h-full p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all"
                          whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-primary">{post.category}</span>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* View all button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild variant="outline" className="rounded-xl font-semibold h-12 px-6">
                  <Link to="/blog">
                    Alle Artikel anzeigen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Newsletter section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="sticky top-24 bg-gradient-to-br from-muted/50 via-background to-muted/50 border border-border/50 rounded-3xl p-8 md:p-10 overflow-hidden"
                whileHover={{ boxShadow: "0 20px 50px -15px rgba(0,0,0,0.1)" }}
              >
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-xl shadow-primary/25"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-4">
                    Newsletter abonnieren
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Erhalten Sie relevante Updates direkt in Ihr Postfach – kostenlos und jederzeit abbestellbar.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {newsletterFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Ihre E-Mail-Adresse"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 pl-12 pr-4 rounded-2xl bg-background border-border/50 focus:border-primary text-base"
                        required
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit"
                        className="w-full h-14 rounded-2xl font-bold bg-gradient-to-r from-primary to-primary/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all text-base"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? (
                          <>
                            <CheckCircle2 className="mr-2 w-5 h-5" />
                            Erfolgreich abonniert!
                          </>
                        ) : (
                          <>
                            Jetzt abonnieren
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Kein Spam. Jederzeit abmelden. 
                    <Link to="/datenschutz" className="underline hover:text-foreground ml-1">
                      Datenschutzhinweise
                    </Link>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
