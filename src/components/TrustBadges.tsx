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
    <div className="relative z-20 -mt-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge, i) => (
            <motion.img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              loading="lazy"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -4 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
