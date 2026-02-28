import { Routes, Route, Navigate } from "react-router-dom";
import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import MobileHome from "./MobileHome";
import MobileBooking from "./MobileBooking";
import MobileTracking from "./MobileTracking";
import MobileProfile from "./MobileProfile";

const MobileApp = () => {
  return (
    <div className="max-w-md mx-auto bg-background min-h-screen relative">
      <Routes>
        <Route index element={<MobileHome />} />
        <Route path="buchen" element={<MobileBooking />} />
        <Route path="fahrten" element={<MobileTracking />} />
        <Route path="profil" element={<MobileProfile />} />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
      <MobileBottomNav />
    </div>
  );
};

export default MobileApp;
