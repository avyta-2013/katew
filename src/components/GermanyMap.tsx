import { useState } from "react";

// Real German city positions mapped to SVG coordinates (approximate)
const networkCities = [
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

// Create connections between nearby cities
const getConnections = () => {
  const connections: { from: typeof networkCities[0]; to: typeof networkCities[0]; id: string }[] = [];
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
  const [hoveredCity, setHoveredCity] = useState<typeof networkCities[0] | null>(null);

  return (
    <div className="relative w-full h-full">
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
      `}</style>
      
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          {/* Gradient for Germany shape */}
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Line gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Background grid */}
        <pattern id="smallGrid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.15" opacity="0.4" />
        </pattern>
        <rect width="100" height="100" fill="url(#smallGrid)" />
        
        {/* Germany shape */}
        <path
          d={germanyPath}
          fill="url(#mapGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          strokeOpacity="0.4"
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
              strokeWidth="0.5"
            />
            
            {/* City label for major cities */}
            {index < 8 && (
              <text
                x={city.x}
                y={city.y - city.size * 0.6 - 2}
                textAnchor="middle"
                className="fill-foreground"
                style={{ fontSize: "3px", fontWeight: 500 }}
              >
                {city.name}
              </text>
            )}
          </g>
        ))}
      </svg>
      
      {/* Tooltip */}
      {hoveredCity && (
        <div 
          className="absolute bg-card border border-border rounded-lg shadow-lg p-3 pointer-events-none z-10 transition-all duration-200"
          style={{
            left: `${hoveredCity.x}%`,
            top: `${hoveredCity.y}%`,
            transform: "translate(-50%, -120%)",
          }}
        >
          <p className="font-semibold text-sm">{hoveredCity.name}</p>
          <p className="text-xs text-muted-foreground">{hoveredCity.partners} Partner</p>
        </div>
      )}
      
      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-card/20 rounded-2xl" />
    </div>
  );
};
