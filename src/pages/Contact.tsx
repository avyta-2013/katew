import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building2,
  Users,
  CheckCircle
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

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+49 155 61 231",
    description: "Mo-Fr 8-12 Uhr",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "support@katew.de",
    description: "Antwort innerhalb 48 Stunden",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Allerheiligentor 2-4",
    description: "60311 Frankfurt",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    value: "Mo-Fr 8-12 Uhr",
    description: "Telefonische Erreichbarkeit",
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
    
    // Simulate form submission
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
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Wir freuen uns auf Sie
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                  Kontakt
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Haben Sie Fragen? Wir sind für Sie da – persönlich und kompetent.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-card rounded-2xl border border-border/50 p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="font-bold text-lg mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Schreiben Sie uns
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 48 Stunden
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Ihr Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ihre@email.de"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          placeholder="Ihre Telefonnummer"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Unternehmen</Label>
                        <Input
                          id="company"
                          placeholder="Ihr Unternehmen"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reason">Anliegen</Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) => setFormData({ ...formData, reason: value })}
                      >
                        <SelectTrigger className="rounded-xl">
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
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        placeholder="Wie können wir Ihnen helfen?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Wird gesendet..."
                      ) : (
                        <>
                          Nachricht senden
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Map & Additional Info */}
                <div className="space-y-8">
                  {/* Map Placeholder */}
                  <div className="relative h-80 rounded-3xl overflow-hidden border border-border/50 bg-muted/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4161405123745!2d13.3761!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjInMzQuMCJF!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort"
                    />
                  </div>

                  {/* Quick Contact Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                      <Building2 className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold mb-2">Für Unternehmen</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sie möchten Partner werden? Kontaktieren Sie unser Business-Team.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Business-Anfrage
                      </Button>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                      <Users className="w-8 h-8 text-secondary mb-4" />
                      <h3 className="font-bold mb-2">Karriere</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Werden Sie Teil unseres Teams. Aktuelle Stellenangebote finden Sie hier.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Jobs ansehen
                      </Button>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">Unsere Service-Garantie</span>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Antwort innerhalb von 48 Stunden
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Persönlicher Ansprechpartner für Partner
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Kostenlose telefonische Beratung
                      </li>
                    </ul>
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