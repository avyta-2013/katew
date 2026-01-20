import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, TrendingUp, Users, Zap, Award } from "lucide-react";

const timelineSteps = [
  {
    icon: Calendar,
    title: "Erstgespräch",
    description: "In einem kurzen 15-minütigen Gespräch lernen wir Ihre Anforderungen kennen.",
  },
  {
    icon: CheckCircle2,
    title: "Onboarding",
    description: "Wir richten Ihren Account ein und integrieren Sie in unser Netzwerk.",
  },
  {
    icon: Users,
    title: "Erste Fahrten",
    description: "Sie erhalten die ersten Fahrtanfragen über unsere Plattform.",
  },
  {
    icon: TrendingUp,
    title: "Wachstum",
    description: "Mit steigender Zuverlässigkeit erhalten Sie mehr Aufträge.",
  },
  {
    icon: Zap,
    title: "Optimierung",
    description: "Wir helfen Ihnen, Ihre Prozesse zu optimieren und effizienter zu werden.",
  },
  {
    icon: Award,
    title: "Premium Partner",
    description: "Werden Sie Teil unserer exklusiven Premium-Partner mit Vorzugsbehandlung.",
  },
];

const Timeline = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="py-24 md:py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Headline */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Mehr Fahrten. Mehr Umsatz.
            </h1>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform -translate-x-1/2 hidden md:block" />
            
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } md:mb-16`}
                  >
                    {/* Content card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center md:hidden">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center icon (desktop only) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 items-center justify-center shadow-lg shadow-primary/20 z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16 md:mt-24">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Jetzt ein 15 Minuten Erstgespräch buchen
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Timeline;
