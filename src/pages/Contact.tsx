import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+49 151 155 612 31",
    description: "Mo-Fr 8-12 Uhr",
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    action: "Jetzt anrufen",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "support@katew.de",
    description: "Antwort < 48h",
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/20",
    action: "E-Mail senden",
  },
];


const reasons = [
  { value: "general", label: "Allgemeine Anfrage" },
  { value: "booking", label: "Frage zur Buchung" },
  { value: "partner", label: "Partnerschaft anfragen" },
  { value: "provider", label: "Als Anbieter registrieren" },
  { value: "press", label: "Presseanfrage" },
  { value: "other", label: "Sonstiges" },
];

const quickActions = [
  {
    icon: Users,
    title: "Für Partner",
    description: "Krankenfahrten einfach buchen und verwalten",
    href: "/partner",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Building2,
    title: "Für Anbieter",
    description: "Teil unseres Netzwerks werden und Aufträge erhalten",
    href: "/anbieter",
    gradient: "from-secondary to-secondary/80",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      reason: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section - Premium Design */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>Wir sind für Sie da</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Sprechen Sie
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  mit uns
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Persönlich, kompetent und immer für Sie erreichbar – unser Team freut sich auf Ihre Nachricht
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods - Premium Cards */}
        <section className="py-8 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-card rounded-3xl border border-border/50 p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-3xl ${method.bgGlow} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                          {method.title}
                        </h3>
                        <p className="font-bold text-xl mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground mb-6">{method.description}</p>
                        
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between group/btn hover:bg-primary/10"
                        >
                          {method.action}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* Main Content - Form & Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="relative bg-card rounded-3xl border border-border/50 p-8 md:p-10 shadow-xl">
                    {/* Decorative Elements */}
                    <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        Schreiben Sie uns
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-8 ml-[52px]">
                      Wir antworten garantiert innerhalb von 48 Stunden
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Ihr vollständiger Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-primary/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">E-Mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="ihre@email.de"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-primary/50 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">Telefon</Label>
                          <Input
                            id="phone"
                            placeholder="+49 123 456789"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-primary/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium">Unternehmen</Label>
                          <Input
                            id="company"
                            placeholder="Ihr Unternehmen"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-primary/50 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="reason" className="text-sm font-medium">Anliegen</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => setFormData({ ...formData, reason: value })}
                        >
                          <SelectTrigger className="rounded-xl h-12 bg-muted/50 border-border/50">
                            <SelectValue placeholder="Wählen Sie einen Grund" />
                          </SelectTrigger>
                          <SelectContent>
                            {reasons.map((reason) => (
                              <SelectItem key={reason.value} value={reason.value}>
                                {reason.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Nachricht *</Label>
                        <Textarea
                          id="message"
                          placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="rounded-xl bg-muted/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Wird gesendet...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Nachricht senden
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Sidebar - Takes 2 columns */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Map */}
                  <div className="relative h-64 rounded-3xl overflow-hidden border border-border/50 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.5!2d8.6821!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea2c7b!2sAllerheiligentor%2C%2060311%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">katew GmbH</p>
                            <p className="text-xs text-muted-foreground">Allerheiligentor 2-4, 60311 Frankfurt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Cards */}
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link
                        key={index}
                        to={action.href}
                        className="group block bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{action.title}</h3>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                        </div>
                      </Link>
                    );
                  })}

                  {/* Service Guarantee */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold">Service-Garantie</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Antwort innerhalb von 48 Stunden",
                        "Persönlicher Ansprechpartner",
                        "Kostenlose Beratung",
                        "Datenschutz nach DSGVO",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-bold">Öffnungszeiten</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Montag - Freitag</span>
                        <span className="font-medium">8:00 - 12:00 Uhr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Samstag - Sonntag</span>
                        <span className="font-medium text-muted-foreground">Geschlossen</span>
                      </div>
                      <div className="pt-2 mt-2 border-t border-border/50">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Online-Support</span>
                          <span className="font-medium text-primary">24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
