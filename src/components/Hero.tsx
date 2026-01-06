import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-foreground">
              Krankentransport
              <br />
              neu gedacht
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Zuverlässige Transportunternehmen in Ihrer Nähe – schnell, sicher und transparent vermittelt.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base font-semibold shadow-card hover:shadow-elevated transition-all duration-300"
              >
                Jetzt Fahrt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-border hover:bg-muted/50 px-8 h-14 text-base font-semibold transition-all duration-300"
              >
                Partner werden
              </Button>
            </div>
          </div>

          {/* Right Side - Floating UI Cards */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main Dashboard Card */}
            <div className="bg-card rounded-3xl shadow-float p-6 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Verfügbare Transporte</h3>
                <span className="text-sm text-muted-foreground">Sortieren ↓</span>
              </div>
              
              {/* Transport Items */}
              {[
                { name: "TransportMed Hamburg", type: "Rollstuhl", status: "Verfügbar", color: "bg-primary" },
                { name: "QuickCare Berlin", type: "Liegend", status: "In 15 Min", color: "bg-muted" },
                { name: "MediMove München", type: "Sitzend", status: "Verfügbar", color: "bg-secondary" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl mb-3 ${idx === 0 ? 'bg-primary/10' : 'hover:bg-muted/50'} transition-colors cursor-pointer`}>
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                    <span className="text-sm font-semibold text-primary-foreground">{item.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                  <span className={`text-sm font-medium ${item.status === 'Verfügbar' ? 'text-secondary' : 'text-muted-foreground'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
              
              <p className="text-sm text-muted-foreground mt-4">Alle anzeigen →</p>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -right-8 top-1/2 bg-card rounded-2xl shadow-elevated p-5 border border-border/50 transform translate-x-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-secondary font-semibold">+24%</span>
                <span className="text-xs text-muted-foreground">diese Woche</span>
              </div>
              <p className="text-3xl font-bold mb-1">847</p>
              <p className="text-sm text-muted-foreground">Transporte</p>
              
              {/* Mini Chart */}
              <div className="flex items-end gap-1 mt-4 h-12">
                {[40, 65, 45, 80, 55, 70, 90].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-primary/20 rounded-t"
                    style={{ height: `${height}%` }}
                  >
                    <div 
                      className="w-full bg-primary rounded-t" 
                      style={{ height: idx === 6 ? '100%' : '60%' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};