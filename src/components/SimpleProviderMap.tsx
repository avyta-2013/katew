import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

type City = {
  name: string;
  x: number;
  y: number;
  partners: number;
};

const cities: City[] = [
  { name: "Berlin", x: 72, y: 28, partners: 78 },
  { name: "Hamburg", x: 54, y: 18, partners: 52 },
  { name: "München", x: 62, y: 82, partners: 65 },
  { name: "Köln", x: 34, y: 46, partners: 41 },
  { name: "Frankfurt", x: 46, y: 52, partners: 48 },
  { name: "Stuttgart", x: 48, y: 70, partners: 35 },
  { name: "Düsseldorf", x: 33, y: 42, partners: 32 },
  { name: "Leipzig", x: 68, y: 38, partners: 28 },
  { name: "Dresden", x: 76, y: 42, partners: 24 },
  { name: "Hannover", x: 52, y: 32, partners: 29 },
];

const germanyPath = `
  M 54 6
  C 58 6, 62 8, 66 10
  C 72 12, 76 14, 80 18
  C 82 22, 82 28, 80 34
  C 78 38, 78 42, 80 46
  C 78 52, 74 58, 70 64
  C 66 70, 64 76, 62 82
  C 58 86, 54 88, 50 86
  C 46 84, 42 80, 40 76
  C 38 72, 36 68, 34 64
  C 32 60, 30 56, 28 52
  C 26 48, 28 44, 30 40
  C 32 36, 36 32, 40 28
  C 44 24, 48 20, 50 14
  C 52 10, 54 6, 54 6
`;

export const SimpleProviderMap = () => {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="simpleMapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
          </linearGradient>
          <filter id="simpleShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="hsl(var(--foreground))" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Germany shape */}
        <path
          d={germanyPath}
          fill="url(#simpleMapGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          filter="url(#simpleShadow)"
        />

        {/* City markers */}
        {cities.map((city, index) => (
          <g
            key={city.name}
            onMouseEnter={() => setHoveredCity(city)}
            onMouseLeave={() => setHoveredCity(null)}
            style={{ cursor: "pointer" }}
          >
            {/* Pulse animation for top cities */}
            {index < 5 && (
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={4}
                fill="hsl(var(--primary))"
                opacity={0.3}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
            )}
            
            {/* Main dot */}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={index < 5 ? 3 : 2}
              fill="hsl(var(--primary))"
              stroke="white"
              strokeWidth="0.5"
              whileHover={{ scale: 1.3 }}
            />

            {/* City label for top 5 */}
            {index < 5 && (
              <text
                x={city.x}
                y={city.y - 5}
                textAnchor="middle"
                className="fill-foreground"
                style={{ fontSize: "3px", fontWeight: 600 }}
              >
                {city.name}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredCity && (
        <motion.div
          className="absolute bg-card border border-border rounded-xl shadow-lg px-3 py-2 pointer-events-none z-10"
          style={{
            left: `${hoveredCity.x}%`,
            top: `${hoveredCity.y}%`,
            transform: "translate(-50%, -120%)",
          }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold text-sm">{hoveredCity.name}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {hoveredCity.partners} Partner
          </p>
        </motion.div>
      )}
    </div>
  );
};