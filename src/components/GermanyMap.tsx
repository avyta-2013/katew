import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Polyline, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Real German city coordinates [lat, lng]
const networkCities: { name: string; coords: [number, number]; size: number; partners: number }[] = [
  { name: "Berlin", coords: [52.52, 13.405], size: 12, partners: 78 },
  { name: "Hamburg", coords: [53.5511, 9.9937], size: 10, partners: 52 },
  { name: "München", coords: [48.1351, 11.582], size: 10, partners: 65 },
  { name: "Köln", coords: [50.9375, 6.9603], size: 9, partners: 41 },
  { name: "Frankfurt", coords: [50.1109, 8.6821], size: 10, partners: 48 },
  { name: "Stuttgart", coords: [48.7758, 9.1829], size: 8, partners: 35 },
  { name: "Düsseldorf", coords: [51.2277, 6.7735], size: 8, partners: 32 },
  { name: "Leipzig", coords: [51.3397, 12.3731], size: 7, partners: 28 },
  { name: "Dresden", coords: [51.0504, 13.7373], size: 7, partners: 24 },
  { name: "Hannover", coords: [52.3759, 9.732], size: 7, partners: 29 },
  { name: "Nürnberg", coords: [49.4521, 11.0767], size: 7, partners: 31 },
  { name: "Bremen", coords: [53.0793, 8.8017], size: 6, partners: 19 },
  { name: "Dortmund", coords: [51.5136, 7.4653], size: 7, partners: 26 },
  { name: "Essen", coords: [51.4556, 7.0116], size: 6, partners: 22 },
  { name: "Mannheim", coords: [49.4875, 8.466], size: 6, partners: 18 },
  { name: "Freiburg", coords: [47.999, 7.8421], size: 5, partners: 15 },
  { name: "Kiel", coords: [54.3233, 10.1228], size: 5, partners: 12 },
  { name: "Rostock", coords: [54.0924, 12.0991], size: 5, partners: 11 },
];

// Create connections between nearby cities
const getConnections = () => {
  const connections: { from: [number, number]; to: [number, number]; animated: boolean }[] = [];
  const mainCities = networkCities.slice(0, 10);
  
  mainCities.forEach((city, i) => {
    mainCities.slice(i + 1).forEach((otherCity) => {
      const distance = Math.sqrt(
        Math.pow(city.coords[0] - otherCity.coords[0], 2) +
        Math.pow(city.coords[1] - otherCity.coords[1], 2)
      );
      if (distance < 3) {
        connections.push({
          from: city.coords,
          to: otherCity.coords,
          animated: Math.random() > 0.5,
        });
      }
    });
  });
  
  return connections;
};

// Animated polyline component
const AnimatedPolyline = ({ from, to, animated }: { from: [number, number]; to: [number, number]; animated: boolean }) => {
  const polylineRef = useRef<L.Polyline>(null);

  useEffect(() => {
    if (animated && polylineRef.current) {
      const element = polylineRef.current.getElement();
      if (element) {
        element.classList.add("animated-line");
      }
    }
  }, [animated]);

  return (
    <Polyline
      ref={polylineRef}
      positions={[from, to]}
      pathOptions={{
        color: "hsl(168, 76%, 42%)",
        weight: 2,
        opacity: 0.4,
        dashArray: animated ? "10, 10" : undefined,
        className: animated ? "animated-dash" : undefined,
      }}
    />
  );
};

// Custom component to handle map setup
const MapSetup = () => {
  const map = useMap();
  
  useEffect(() => {
    map.scrollWheelZoom.disable();
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
  }, [map]);
  
  return null;
};

export const GermanyMap = () => {
  const connections = getConnections();
  const centerGermany: [number, number] = [51.1657, 10.4515];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* CSS for animated dashes */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-dash {
          animation: dash 1s linear infinite;
        }
        .leaflet-container {
          background: transparent !important;
        }
        .leaflet-tile-pane {
          filter: saturate(0.3) brightness(1.1);
        }
      `}</style>
      
      <MapContainer
        center={centerGermany}
        zoom={6}
        style={{ height: "100%", width: "100%", background: "transparent" }}
        zoomControl={false}
        attributionControl={false}
      >
        <MapSetup />
        
        {/* Light map tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />
        
        {/* Connection lines */}
        {connections.map((connection, index) => (
          <AnimatedPolyline
            key={index}
            from={connection.from}
            to={connection.to}
            animated={connection.animated}
          />
        ))}
        
        {/* City markers */}
        {networkCities.map((city, index) => (
          <CircleMarker
            key={index}
            center={city.coords}
            radius={city.size}
            pathOptions={{
              fillColor: "hsl(168, 76%, 42%)",
              fillOpacity: 0.8,
              color: "hsl(168, 76%, 32%)",
              weight: 2,
            }}
          >
            <Popup className="custom-popup">
              <div className="text-center p-1">
                <p className="font-semibold text-sm">{city.name}</p>
                <p className="text-xs text-muted-foreground">{city.partners} Partner</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
        
        {/* Pulsing outer rings for major cities */}
        {networkCities.slice(0, 6).map((city, index) => (
          <CircleMarker
            key={`pulse-${index}`}
            center={city.coords}
            radius={city.size + 4}
            pathOptions={{
              fillColor: "hsl(168, 76%, 42%)",
              fillOpacity: 0.2,
              color: "transparent",
              weight: 0,
              className: "animate-pulse",
            }}
          />
        ))}
      </MapContainer>
      
      {/* Overlay gradient for seamless blend */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card/20 via-transparent to-card/10 rounded-2xl" />
    </div>
  );
};
