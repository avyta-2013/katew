import { Eye, Clock, Shield, Euro, FileText, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Echtzeit-Übersicht aller verfügbaren Fahrzeuge und transparente Preisgestaltung für jeden Transport.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Automatisierte Prozesse reduzieren den Aufwand bei der Transportorganisation um bis zu 80%.",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Maximale Sicherheit",
    description: "Geprüfte Transportunternehmen mit aktuellen Zertifizierungen und Versicherungen.",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Euro,
    title: "Kostenoptimierung",
    description: "Intelligente Algorithmen finden die beste Balance zwischen Qualität und Preis.",
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: FileText,
    title: "Ausschreibungen",
    description: "Effiziente Verwaltung von Tender-Prozessen für Kliniken und Einrichtungen.",
    color: "from-rose-500 to-pink-400",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: Users,
    title: "Zusammenarbeit",
    description: "Nahtlose Kommunikation zwischen allen Beteiligten in Echtzeit.",
    color: "from-indigo-500 to-blue-400",
    bgColor: "bg-indigo-500/10",
  },
];

export const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Warum KATEW?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Ihre Vorteile auf
            <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              einen Blick
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Moderne Technologie trifft auf zuverlässigen Krankentransport. 
            Entdecken Sie, was uns auszeichnet.
          </p>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                  <feature.icon className={`w-6 h-6 absolute`} style={{ 
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    WebkitBackgroundClip: 'text',
                    color: feature.color.includes('blue') ? '#3b82f6' : 
                           feature.color.includes('emerald') ? '#10b981' :
                           feature.color.includes('violet') ? '#8b5cf6' :
                           feature.color.includes('amber') ? '#f59e0b' :
                           feature.color.includes('rose') ? '#f43f5e' : '#6366f1'
                  }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Bereit, Ihre Transportprozesse zu optimieren?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
            Jetzt kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
