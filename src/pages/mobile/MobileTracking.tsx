import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, CheckCircle2, Circle, Truck } from "lucide-react";
import { MobileHeader } from "@/components/mobile/MobileHeader";

const bookings = [
  {
    id: 1,
    from: "Uniklinik Frankfurt",
    to: "Seniorenheim Sachsenhausen",
    date: "Heute, 14:30",
    driver: "Thomas M.",
    vehicle: "VW Caddy",
    status: "unterwegs",
    progress: 65,
    steps: [
      { label: "Bestätigt", done: true, time: "13:45" },
      { label: "Fahrer zugewiesen", done: true, time: "14:00" },
      { label: "Unterwegs zur Abholung", done: true, time: "14:20" },
      { label: "Patient abgeholt", done: false, time: "" },
      { label: "Angekommen", done: false, time: "" },
    ],
  },
  {
    id: 2,
    from: "Praxis Dr. Müller",
    to: "Hauptbahnhof Frankfurt",
    date: "Morgen, 09:00",
    driver: "—",
    vehicle: "—",
    status: "geplant",
    progress: 0,
    steps: [
      { label: "Bestätigt", done: true, time: "Gestern" },
      { label: "Fahrer zugewiesen", done: false, time: "" },
      { label: "Unterwegs", done: false, time: "" },
      { label: "Angekommen", done: false, time: "" },
    ],
  },
];

const MobileTracking = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Meine Fahrten" />

      <div className="px-4 py-5 space-y-4">
        {bookings.map((booking, idx) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="rounded-2xl bg-card border border-border/50 overflow-hidden"
          >
            {/* Status Header */}
            <div className={`px-4 py-3 flex items-center justify-between ${
              booking.status === "unterwegs"
                ? "bg-primary/10"
                : "bg-muted/50"
            }`}>
              <div className="flex items-center gap-2">
                <Truck className={`w-4 h-4 ${
                  booking.status === "unterwegs" ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  booking.status === "unterwegs" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {booking.status}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{booking.date}</span>
            </div>

            <div className="p-4 space-y-4">
              {/* Route */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <p className="text-sm font-medium text-foreground">{booking.from}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-sm font-medium text-foreground">{booking.to}</p>
                </div>
              </div>

              {/* Progress Bar */}
              {booking.status === "unterwegs" && (
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${booking.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              )}

              {/* Driver Info */}
              {booking.status === "unterwegs" && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">TM</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{booking.driver}</p>
                      <p className="text-xs text-muted-foreground">{booking.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div className="space-y-0">
                {booking.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 relative">
                    {i < booking.steps.length - 1 && (
                      <div className={`absolute left-[7px] top-5 w-0.5 h-full ${
                        step.done ? "bg-primary" : "bg-border"
                      }`} />
                    )}
                    {step.done ? (
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-4 h-4 text-border shrink-0 mt-0.5" />
                    )}
                    <div className="pb-4">
                      <p className={`text-xs font-medium ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.label}
                      </p>
                      {step.time && (
                        <p className="text-[10px] text-muted-foreground">{step.time}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileTracking;
