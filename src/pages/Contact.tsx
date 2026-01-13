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
  Shield,
  MessageCircle,
  Headphones,
  Calendar,
  Globe,
  ChevronRight,
  Zap
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

const reasons = [
  { value: "general", label: "Allgemeine Anfrage" },
  { value: "booking", label: "Frage zur Buchung" },
  { value: "partner", label: "Partnerschaft anfragen" },
  { value: "provider", label: "Als Anbieter registrieren" },
  { value: "press", label: "Presseanfrage" },
  { value: "other", label: "Sonstiges" },
];

const contactCards = [
  {
    icon: Phone,
    title: "Telefonisch erreichen",
    description: "Sprechen Sie direkt mit unserem Team",
    value: "+49 151 155 612 31",
    subtext: "Mo-Fr 8:00 - 12:00 Uhr",
    action: "Jetzt anrufen",
    href: "tel:+4915115561231",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Mail,
    title: "E-Mail schreiben",
    description: "Wir antworten innerhalb von 48 Stunden",
    value: "support@katew.de",
    subtext: "24/7 erreichbar",
    action: "E-Mail senden",
    href: "mailto:support@katew.de",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Uns besuchen",
    description: "Besuchen Sie uns in Frankfurt",
    value: "Allerheiligentor 2-4",
    subtext: "60311 Frankfurt am Main",
    action: "Route planen",
    href: "https://maps.google.com/?q=Allerheiligentor+2-4+Frankfurt",
    gradient: "from-violet-500 to-purple-500",
  },
];

const features = [
  { icon: Zap, text: "Schnelle Antwort in < 48h" },
  { icon: Headphones, text: "Persönlicher Ansprechpartner" },
  { icon: Shield, text: "DSGVO-konform" },
  { icon: Globe, text: "Deutschlandweit verfügbar" },
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        {/* Hero Section - Keep existing */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-40 right-[15%] w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
            <div className="absolute bottom-20 right-[20%] w-20 h-20 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-2xl -rotate-12 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
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
                  Wir sind für Sie da
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Sprechen Sie
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  mit uns
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Persönlich, kompetent und immer für Sie erreichbar
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-8 relative -mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={index}
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group relative"
                    >
                      {/* Glow on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
                      
                      <div className="relative h-full bg-card rounded-3xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                        
                        <div className="mb-4">
                          <p className="font-semibold text-foreground">{card.value}</p>
                          <p className="text-xs text-muted-foreground">{card.subtext}</p>
                        </div>
                        
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          {card.action}
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-20 md:py-32 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column - Info */}
                <div className="lg:sticky lg:top-32">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <MessageCircle className="w-4 h-4" />
                    Kontaktformular
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Schreiben Sie uns eine{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Nachricht
                    </span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    Ob Fragen zu Buchungen, Partnerschaften oder allgemeine Anfragen – 
                    wir sind hier, um Ihnen zu helfen. Füllen Sie einfach das Formular aus 
                    und wir melden uns schnellstmöglich bei Ihnen.
                  </p>

                  {/* Quick Links */}
                  <div className="space-y-4 mb-10">
                    <h3 className="font-semibold text-foreground">Schnellzugriff</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link
                        to="/partner"
                        className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">Für Partner</p>
                          <p className="text-xs text-muted-foreground">Mehr erfahren</p>
                        </div>
                      </Link>
                      <Link
                        to="/anbieter"
                        className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">Für Anbieter</p>
                          <p className="text-xs text-muted-foreground">Mehr erfahren</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-bold">Erreichbarkeit</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Telefon</span>
                        <span className="font-medium">Mo-Fr 8:00 - 12:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">E-Mail Support</span>
                        <span className="font-medium text-primary">24/7</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Antwortzeit</span>
                        <span className="font-medium">{"< 48 Stunden"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[2rem] blur-2xl opacity-30" />
                  
                  <div className="relative bg-card rounded-3xl border border-border/50 p-8 md:p-10 shadow-2xl">
                    {/* Decorative top line */}
                    <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                            Name <span className="text-primary">*</span>
                          </Label>
                          <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                            <Input
                              id="name"
                              placeholder="Max Mustermann"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary focus:bg-background transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                            E-Mail <span className="text-primary">*</span>
                          </Label>
                          <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                            <Input
                              id="email"
                              type="email"
                              placeholder="max@beispiel.de"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary focus:bg-background transition-all"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Phone & Company Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">Telefon</Label>
                          <Input
                            id="phone"
                            placeholder="+49 123 456789"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary focus:bg-background transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium">Unternehmen</Label>
                          <Input
                            id="company"
                            placeholder="Firma GmbH"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary focus:bg-background transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Reason Select */}
                      <div className="space-y-2">
                        <Label htmlFor="reason" className="text-sm font-medium">Ihr Anliegen</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => setFormData({ ...formData, reason: value })}
                        >
                          <SelectTrigger className="rounded-xl h-12 bg-muted/30 border-border/50 focus:border-primary">
                            <SelectValue placeholder="Bitte wählen Sie einen Grund" />
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
                      
                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                          Ihre Nachricht <span className="text-primary">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="rounded-xl bg-muted/30 border-border/50 focus:border-primary focus:bg-background transition-all resize-none"
                        />
                      </div>

                      {/* Privacy Notice */}
                      <p className="text-xs text-muted-foreground">
                        Mit dem Absenden stimmen Sie unserer{" "}
                        <Link to="/datenschutz" className="text-primary hover:underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        zu.
                      </p>
                      
                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Wird gesendet...
                          </span>
                        ) : (
                          <span className="flex items-center gap-3">
                            Nachricht absenden
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>

                      {/* Trust Indicators */}
                      <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-border/50">
                        {[
                          { icon: Shield, text: "SSL verschlüsselt" },
                          { icon: CheckCircle, text: "DSGVO-konform" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <item.icon className="w-3.5 h-3.5 text-primary" />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 md:py-32 relative bg-muted/30">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  Unser Standort
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Besuchen Sie uns in{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Frankfurt
                  </span>
                </h2>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.5!2d8.6821!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea2c7b!2sAllerheiligentor%2C%2060311%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort katew"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
                  <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">katew GmbH</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Allerheiligentor 2-4<br />
                          60311 Frankfurt am Main
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Allerheiligentor+2-4+Frankfurt"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                        >
                          Route berechnen
                          <ArrowRight className="w-4 h-4" />
                        </a>
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
