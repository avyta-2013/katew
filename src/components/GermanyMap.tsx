import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";

// City type definition
type City = {
  name: string;
  x: number;
  y: number;
  size: number;
  partners: number;
};

// Real German city positions mapped to SVG coordinates (approximate)
const networkCities: City[] = [
  { name: "Berlin", x: 72, y: 28, size: 8, partners: 78 },
  { name: "Hamburg", x: 54, y: 18, size: 7, partners: 52 },
  { name: "München", x: 62, y: 82, size: 7, partners: 65 },
  { name: "Köln", x: 34, y: 46, size: 6, partners: 41 },
  { name: "Frankfurt", x: 46, y: 52, size: 7, partners: 48 },
  { name: "Stuttgart", x: 48, y: 70, size: 6, partners: 35 },
  { name: "Düsseldorf", x: 33, y: 42, size: 5, partners: 32 },
  { name: "Leipzig", x: 68, y: 38, size: 5, partners: 28 },
  { name: "Dresden", x: 76, y: 42, size: 5, partners: 24 },
  { name: "Hannover", x: 52, y: 32, size: 5, partners: 29 },
  { name: "Nürnberg", x: 58, y: 62, size: 5, partners: 31 },
  { name: "Bremen", x: 46, y: 22, size: 4, partners: 19 },
  { name: "Dortmund", x: 38, y: 42, size: 5, partners: 26 },
  { name: "Essen", x: 35, y: 44, size: 4, partners: 22 },
  { name: "Mannheim", x: 44, y: 60, size: 4, partners: 18 },
  { name: "Freiburg", x: 40, y: 78, size: 4, partners: 15 },
  { name: "Kiel", x: 54, y: 10, size: 4, partners: 12 },
  { name: "Rostock", x: 66, y: 12, size: 4, partners: 11 },
];

// Partner data per city
const cityPartners: Record<string, { name: string; rating: number; reviews: number }[]> = {
  Berlin: [
    { name: "MediTrans Berlin", rating: 4.9, reviews: 234 },
    { name: "Hauptstadt Krankenfahrt", rating: 4.8, reviews: 189 },
    { name: "Berlin Care Mobil", rating: 4.7, reviews: 156 },
    { name: "Spree MediService", rating: 4.8, reviews: 122 },
  ],
  Hamburg: [
    { name: "Hanseatic MediTrans", rating: 4.9, reviews: 198 },
    { name: "Elbe Krankenfahrt", rating: 4.7, reviews: 145 },
    { name: "Nord Care Hamburg", rating: 4.8, reviews: 167 },
  ],
  München: [
    { name: "Bavaria MediTrans", rating: 4.9, reviews: 312 },
    { name: "Isar Krankenfahrt", rating: 4.8, reviews: 245 },
    { name: "München Care Plus", rating: 4.7, reviews: 189 },
    { name: "Alpen MediService", rating: 4.9, reviews: 156 },
  ],
  Frankfurt: [
    { name: "Frankfurt Krankenfahrt", rating: 4.9, reviews: 89 },
    { name: "Main-Taunus Care", rating: 4.8, reviews: 67 },
    { name: "Rhein-Main MediTaxi", rating: 4.7, reviews: 54 },
    { name: "Hessen Mobil Plus", rating: 4.9, reviews: 112 },
  ],
  Köln: [
    { name: "Dom City MediTrans", rating: 4.8, reviews: 178 },
    { name: "Rheinland Krankenfahrt", rating: 4.7, reviews: 145 },
    { name: "Köln Care Service", rating: 4.8, reviews: 123 },
  ],
  Stuttgart: [
    { name: "Schwaben MediTrans", rating: 4.9, reviews: 156 },
    { name: "Neckar Krankenfahrt", rating: 4.7, reviews: 134 },
    { name: "Stuttgart Care Plus", rating: 4.8, reviews: 112 },
  ],
};

// Create connections between nearby cities
const getConnections = () => {
  const connections: { from: City; to: City; id: string }[] = [];
  const mainCities = networkCities.slice(0, 12);
  
  mainCities.forEach((city, i) => {
    mainCities.slice(i + 1).forEach((otherCity, j) => {
      const distance = Math.sqrt(
        Math.pow(city.x - otherCity.x, 2) + Math.pow(city.y - otherCity.y, 2)
      );
      if (distance < 22) {
        connections.push({
          from: city,
          to: otherCity,
          id: `${i}-${j}`,
        });
      }
    });
  });
  
  return connections;
};

// Germany outline path (more accurate shape)
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

export const GermanyMap = () => {
  const connections = getConnections();
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  const getPartnersForCity = (cityName: string) => {
    return cityPartners[cityName] || [
      { name: `${cityName} MediTrans`, rating: 4.7, reviews: 45 },
      { name: `${cityName} Care Service`, rating: 4.6, reviews: 32 },
    ];
  };

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      {/* CSS for animations */}
      <style>{`
        @keyframes dash-move {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        .animated-line {
          animation: dash-move 1.5s linear infinite;
        }
        .pulse-ring {
          transform-origin: center;
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .map-3d {
          transform: rotateX(15deg) rotateZ(-2deg);
          transform-style: preserve-3d;
        }
      `}</style>
      
      {/* 3D Map Container */}
      <div className="relative w-full h-full map-3d">
        {/* Shadow layer */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, transparent 30%, hsl(var(--primary) / 0.1) 100%)",
            transform: "translateZ(-20px) translateY(8px) translateX(8px)",
            filter: "blur(12px)",
          }}
        />
        
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
          <defs>
            {/* Gradient for Germany shape */}
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
            
            {/* 3D shadow gradient */}
            <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Drop shadow filter */}
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="hsl(var(--foreground))" floodOpacity="0.15" />
            </filter>
            
            {/* Line gradient */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Background grid */}
          <pattern id="smallGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.15" opacity="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#smallGrid)" />
          
          {/* Germany shadow */}
          <path
            d={germanyPath}
            fill="hsl(var(--foreground))"
            opacity="0.08"
            transform="translate(2, 2)"
          />
          
          {/* Germany shape with 3D effect */}
          <path
            d={germanyPath}
            fill="url(#mapGradient)"
            stroke="hsl(var(--primary))"
            strokeWidth="0.8"
            strokeOpacity="0.5"
            filter="url(#dropShadow)"
          />
          
          {/* Inner highlight for 3D effect */}
          <path
            d={germanyPath}
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.3"
            transform="translate(-0.5, -0.5)"
          />
          
          {/* Animated connection lines */}
          {connections.map((conn, index) => (
            <line
              key={conn.id}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              strokeDasharray="3,2"
              className="animated-line"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          
          {/* City markers */}
          {networkCities.map((city, index) => (
            <g 
              key={city.name}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
              onClick={() => handleCityClick(city)}
              style={{ cursor: "pointer" }}
            >
              {/* Pulsing outer ring for major cities */}
              {index < 6 && (
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={city.size * 0.8}
                  fill="hsl(var(--primary))"
                  opacity="0.3"
                  className="pulse-ring"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              )}
              
              {/* City shadow */}
              <circle
                cx={city.x + 0.5}
                cy={city.y + 0.5}
                r={city.size * 0.5}
                fill="hsl(var(--foreground))"
                opacity="0.15"
              />
              
              {/* Outer glow circle */}
              <circle
                cx={city.x}
                cy={city.y}
                r={city.size * 0.6}
                fill="hsl(var(--primary))"
                opacity="0.4"
                filter="url(#glow)"
              />
              
              {/* Main city dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={city.size * 0.4}
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth="0.6"
              />
              
              {/* City label for major cities */}
              {index < 8 && (
                <text
                  x={city.x}
                  y={city.y - city.size * 0.6 - 2}
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
      </div>
      
      {/* Tooltip */}
      {hoveredCity && !selectedCity && (
        <div 
          className="absolute bg-card border border-border rounded-xl shadow-lg p-3 pointer-events-none z-20 transition-all duration-200"
          style={{
            left: `${hoveredCity.x}%`,
            top: `${hoveredCity.y - 5}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="font-semibold text-sm">{hoveredCity.name}</p>
          <p className="text-xs text-muted-foreground">{hoveredCity.partners} Partner</p>
          <p className="text-xs text-primary mt-1">Klicken für Details</p>
        </div>
      )}
      
      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card/30 via-transparent to-transparent rounded-2xl" />
      
      {/* City Partners Modal */}
      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Partner in {selectedCity?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {selectedCity && getPartnersForCity(selectedCity.name).map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{partner.name}</p>
                    <p className="text-xs text-muted-foreground">{partner.reviews} Bewertungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 rounded-lg">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-xs">{partner.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4">
            Alle Partner in {selectedCity?.name} anzeigen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
