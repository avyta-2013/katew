import { motion } from "framer-motion";
import {
  User, CreditCard, FileText, Bell, HelpCircle, Shield, LogOut,
  ChevronRight, Settings, Heart
} from "lucide-react";
import { MobileHeader } from "@/components/mobile/MobileHeader";

const menuSections = [
  {
    title: "Konto",
    items: [
      { icon: User, label: "Persönliche Daten", subtitle: "Name, Adresse, Kontakt" },
      { icon: CreditCard, label: "Zahlungsmethoden", subtitle: "Karten & Bankverbindung" },
      { icon: FileText, label: "Rechnungen", subtitle: "Vergangene Abrechnungen" },
    ],
  },
  {
    title: "Einstellungen",
    items: [
      { icon: Bell, label: "Benachrichtigungen", subtitle: "Push & E-Mail" },
      { icon: Shield, label: "Datenschutz", subtitle: "Privatsphäre & Sicherheit" },
      { icon: Settings, label: "App-Einstellungen", subtitle: "Sprache, Design" },
    ],
  },
  {
    title: "Hilfe",
    items: [
      { icon: HelpCircle, label: "Hilfe & Support", subtitle: "FAQ & Kontakt" },
      { icon: Heart, label: "App bewerten", subtitle: "Im App Store bewerten" },
    ],
  },
];

const MobileProfile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Profil" />

      <div className="px-4 py-5 space-y-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
              MK
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Max Krause
            </h2>
            <p className="text-sm text-muted-foreground">max.krause@email.de</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs text-secondary font-medium">Verifiziert</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { value: "12", label: "Fahrten" },
            { value: "4.9", label: "Bewertung" },
            { value: "3", label: "Monate" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-card border border-border/50 text-center">
              <p className="text-xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Menu Sections */}
        {menuSections.map((section, sIdx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + sIdx * 0.1 }}
          >
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {section.title}
            </h3>
            <div className="rounded-2xl bg-card border border-border/50 overflow-hidden divide-y divide-border/50">
              {section.items.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Abmelden</span>
        </motion.button>

        <p className="text-center text-[10px] text-muted-foreground">
          katew v1.0.0 • Medical Transport
        </p>
      </div>
    </div>
  );
};

export default MobileProfile;
