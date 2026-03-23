import { motion } from "framer-motion";
import { Shield, Lock, Server, Flag, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Flag, label: "Made in Germany", sublabel: "🇩🇪" },
  { icon: Shield, label: "DSGVO Konform", sublabel: "Datenschutz" },
  { icon: Server, label: "EU Hosting", sublabel: "Frankfurt" },
  { icon: Lock, label: "SSL / HTTPS", sublabel: "Verschlüsselt" },
  { icon: BadgeCheck, label: "Trusted Shop", sublabel: "Geprüft" },
];

export const TrustBadges = () => {
  return (
    <section className="py-6 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2.5 text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="leading-tight">
                  <span className="text-sm font-semibold text-foreground block">{badge.label}</span>
                  <span className="text-xs text-muted-foreground">{badge.sublabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
