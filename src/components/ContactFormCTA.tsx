import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

interface ContactFormCTAProps {
  variant?: "providers" | "about" | "partners";
}

export const ContactFormCTA = ({ variant = "providers" }: ContactFormCTAProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const isProviders = variant === "providers";
  const isPartners = variant === "partners";

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                {isProviders ? "Bereit durchzustarten?" : isPartners ? "Interesse geweckt?" : "Kontaktieren Sie uns"}
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {isProviders ? (
                  <>
                    Werden Sie{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Anbieter
                    </span>
                  </>
                ) : isPartners ? (
                  <>
                    Werden Sie{" "}
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      Partner
                    </span>
                  </>
                ) : (
                  <>
                    Lassen Sie uns{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      sprechen
                    </span>
                  </>
                )}
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                {isProviders
                  ? "Werden Sie noch heute Teil unseres Netzwerks und profitieren Sie von mehr Aufträgen und weniger Aufwand."
                  : isPartners
                  ? "Verbinden Sie Ihre Einrichtung mit dem führenden Netzwerk für Krankenfahrten in Deutschland."
                  : "Haben Sie Fragen oder möchten mehr erfahren? Wir freuen uns auf Ihre Nachricht."}
              </p>

              {/* CTA Button */}
              <div className="mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25"
                  onClick={() => window.location.href = '/auth'}
                >
                  Jetzt registrieren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+4915115561231"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Telefon</div>
                    <div className="font-semibold">+49 151 155 612 31</div>
                  </div>
                </a>
                <a
                  href="mailto:support@katew.de"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">E-Mail</div>
                    <div className="font-semibold">support@katew.de</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="relative">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative backdrop-blur-xl bg-card/80 border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
                    <p className="text-muted-foreground">
                      Wir melden uns in Kürze bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          required
                          placeholder="Ihr Name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="h-12 bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">E-Mail *</label>
                        <Input
                          required
                          type="email"
                          placeholder="ihre@email.de"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="h-12 bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Unternehmen</label>
                      <Input
                        placeholder="Ihr Unternehmen"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Nachricht *</label>
                      <Textarea
                        required
                        placeholder="Wie können wir Ihnen helfen?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Nachricht senden
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="#" className="underline hover:text-primary">Datenschutzerklärung</a> zu.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
