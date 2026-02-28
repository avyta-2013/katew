import { Home, Search, MapPin, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", label: "Start", icon: Home, path: "/app" },
  { id: "booking", label: "Buchen", icon: Search, path: "/app/buchen" },
  { id: "tracking", label: "Fahrten", icon: MapPin, path: "/app/fahrten" },
  { id: "profile", label: "Profil", icon: User, path: "/app/profil" },
];

export const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = tabs.find(t => location.pathname.startsWith(t.path))?.id || "home";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border/50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="relative flex flex-col items-center justify-center w-full h-full gap-0.5"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-0.5 w-8 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <tab.icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
