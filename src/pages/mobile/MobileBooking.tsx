import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, FileText, ArrowRight, Armchair, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { Button } from "@/components/ui/button";

const transportTypes = [
  { id: "sitting", label: "Sitzend", icon: UserIcon, desc: "Gehfähig" },
  { id: "wheelchair", label: "Rollstuhl", icon: Armchair, desc: "Rollstuhlfahrer" },
  { id: "stretcher", label: "Liegend", icon: FileText, desc: "Liegetransport" },
];

const MobileBooking = () => {
  const [selectedType, setSelectedType] = useState("sitting");
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Fahrt buchen" />

      <div className="px-4 py-5 space-y-6">
        {/* Progress */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Transport Type */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Transportart wählen
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Wählen Sie die passende Beförderungsart
          </p>

          <div className="grid grid-cols-3 gap-3">
            {transportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                  selectedType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border/50 bg-card"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedType === type.id ? "bg-primary/10" : "bg-muted"
                }`}>
                  <type.icon className={`w-5 h-5 ${
                    selectedType === type.id ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>
                <span className="text-xs font-semibold text-foreground">{type.label}</span>
                <span className="text-[10px] text-muted-foreground">{type.desc}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Route Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Route
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border" />

            <div className="space-y-2">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
                <div className="w-3 h-3 rounded-full bg-secondary border-2 border-secondary relative z-10" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Abholadresse</p>
                  <input
                    type="text"
                    placeholder="Straße, PLZ, Ort"
                    className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground/60 mt-0.5"
                  />
                </div>
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary relative z-10" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Zieladresse</p>
                  <input
                    type="text"
                    placeholder="Straße, PLZ, Ort"
                    className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground/60 mt-0.5"
                  />
                </div>
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Termin
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-card border border-border/50 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Datum</p>
                <p className="text-sm font-medium text-foreground">Heute</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border/50 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Uhrzeit</p>
                <p className="text-sm font-medium text-foreground">14:30</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button
            className="w-full h-14 rounded-2xl text-base font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => setStep(Math.min(step + 1, 3))}
          >
            Weiter
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileBooking;
