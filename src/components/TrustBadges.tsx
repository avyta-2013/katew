import { motion } from "framer-motion";
import badgeMadeInGermany from "@/assets/badge-made-in-germany.png";
import badgeDsgvo from "@/assets/badge-dsgvo.png";
import badgeEuHosting from "@/assets/badge-eu-hosting.png";
import badgeSsl from "@/assets/badge-ssl.png";
import badgeTrustedShop from "@/assets/badge-trusted-shop.png";

const badges = [
  { src: badgeMadeInGermany, alt: "Made in Germany" },
  { src: badgeDsgvo, alt: "DSGVO Konform" },
  { src: badgeEuHosting, alt: "EU Hosting" },
  { src: badgeSsl, alt: "SSL / HTTPS Secured" },
  { src: badgeTrustedShop, alt: "Trusted Shop Verified" },
];

export const TrustBadges = () => {
  return (
    <section className="py-8 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, i) => (
            <motion.img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              loading="lazy"
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.08 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
