import { motion } from "framer-motion";
import { ArrowRight, Ambulance, Clock, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileHeader } from "@/components/mobile/MobileHeader";

const quickActions = [
  { icon: Ambulance, label: "Neue Fahrt", color: "bg-primary/10 text-primary", path: "/app/buchen" },
  { icon: Clock, label: "Letzte Fahrt", color: "bg-secondary/10 text-secondary", path: "/app/fahrten" },
  { icon: Shield, label: "Rezept", color: "bg-accent/10 text-accent", path: "/app/buchen" },
  { icon: Star, label: "Favoriten", color: "bg-muted text-muted-foreground", path: "/app/fahrten" },
];

const recentBookings = [
  { id: 1, from: "Uniklinik Frankfurt", to: "Hauptbahnhof", date: "Heute, 14:30", status: "Bestätigt", statusColor: "text-secondary" },
  { id: 2, from: "Praxis Dr. Müller", to: "Seniorenheim Linden", date: "Morgen, 09:00", status: "Ausstehend", statusColor: "text-primary" },
];

const MobileHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="katew" />

      <div className="px-4 py-5 space-y-6">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-muted-foreground text-sm">Willkommen zurück</p>
          <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Guten Tag! 👋
          </h2>
        </motion.div>

        {/* CTA Banner */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={() => navigate("/app/buchen")}
          className="w-full p-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-sm font-medium opacity-90">Jetzt Krankenfahrt</p>
          <p className="text-xl font-bold mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Fahrt buchen
          </p>
          <div className="flex items-center gap-1 mt-3 text-sm font-medium">
            <span>Termin vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.button>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Schnellzugriff
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-foreground">{action.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Aktuelle Fahrten
            </h3>
            <button
              onClick={() => navigate("/app/fahrten")}
              className="text-xs font-medium text-primary"
            >
              Alle anzeigen
            </button>
          </div>
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">{booking.from}</p>
                    <p className="text-xs text-muted-foreground">→ {booking.to}</p>
                  </div>
                  <span className={`text-xs font-semibold ${booking.statusColor}`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {booking.date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileHome;
