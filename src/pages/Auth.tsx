import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";

type UserType = "anbieter" | "partner";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [userType, setUserType] = useState<UserType>("anbieter");

  useEffect(() => {
    const register = searchParams.get("register");
    const type = searchParams.get("type");
    
    if (register === "true") {
      setAuthMode("register");
    }
    if (type === "anbieter" || type === "partner") {
      setUserType(type);
      setAuthMode("register");
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {authMode === "login" ? "Willkommen zurück" : "Jetzt registrieren"}
              </h1>
              <p className="text-muted-foreground">
                {authMode === "login" 
                  ? "Melden Sie sich an, um fortzufahren" 
                  : "Erstellen Sie Ihr kostenloses Konto"}
              </p>
            </div>

            {/* User Type Selection */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setUserType("anbieter")}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  userType === "anbieter"
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  userType === "anbieter" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Anbieter</h3>
                <p className="text-sm text-muted-foreground">
                  Für Transportunternehmen
                </p>
              </button>

              <button
                onClick={() => setUserType("partner")}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  userType === "partner"
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  userType === "partner" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}>
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Partner</h3>
                <p className="text-sm text-muted-foreground">
                  Für Einrichtungen & Partner
                </p>
              </button>
            </div>

            {/* Auth Card */}
            <Card className="border-border/50 shadow-xl">
              <CardHeader className="text-center pb-4">
                <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as "login" | "register")} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Anmelden</TabsTrigger>
                    <TabsTrigger value="register">Registrieren</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>

              <CardContent className="pt-2">
                {authMode === "login" ? (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="ihre@email.de" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Passwort</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-muted-foreground">Angemeldet bleiben</span>
                      </label>
                      <a href="#" className="text-primary hover:underline">
                        Passwort vergessen?
                      </a>
                    </div>

                    <Button className="w-full gap-2" size="lg">
                      Anmelden
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <form className="space-y-4">
                    {userType === "anbieter" ? (
                      <div className="space-y-2">
                        <Label htmlFor="company">Unternehmensname</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            id="company" 
                            type="text" 
                            placeholder="Ihr Unternehmen" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="organization">Einrichtung / Organisation</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            id="organization" 
                            type="text" 
                            placeholder="Ihre Einrichtung" 
                            className="pl-10"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="name">Ansprechpartner</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Vor- und Nachname" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">E-Mail</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="register-email" 
                          type="email" 
                          placeholder="ihre@email.de" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+49 123 456789" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Passwort</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input 
                          id="register-password" 
                          type="password" 
                          placeholder="Mindestens 8 Zeichen" 
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-sm">
                      <input type="checkbox" className="rounded border-border mt-1" />
                      <span className="text-muted-foreground">
                        Ich akzeptiere die <a href="#" className="text-primary hover:underline">AGB</a> und <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a>
                      </span>
                    </div>

                    <Button className="w-full gap-2" size="lg">
                      Kostenlos registrieren
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Bottom Info */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              {authMode === "login" ? (
                <>
                  Noch kein Konto?{" "}
                  <button 
                    onClick={() => setAuthMode("register")} 
                    className="text-primary hover:underline font-medium"
                  >
                    Jetzt registrieren
                  </button>
                </>
              ) : (
                <>
                  Bereits registriert?{" "}
                  <button 
                    onClick={() => setAuthMode("login")} 
                    className="text-primary hover:underline font-medium"
                  >
                    Anmelden
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Auth;