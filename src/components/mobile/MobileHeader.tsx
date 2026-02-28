import { Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export const MobileHeader = ({ title, rightAction }: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border/50 pt-[env(safe-area-inset-top)]">
      <div className="flex items-center justify-between h-14 px-4">
        <h1 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {title}
        </h1>
        <div className="flex items-center gap-2">
          {rightAction || (
            <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-muted/60 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
