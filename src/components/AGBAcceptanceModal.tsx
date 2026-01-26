import { useState, useRef, useEffect } from "react";
import { Scale, CheckCircle2, ScrollText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface AGBAcceptanceModalProps {
  open: boolean;
  onAccept: () => void;
}

const AGBAcceptanceModal = ({ open, onAccept }: AGBAcceptanceModalProps) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setHasScrolledToBottom(false);
      setIsChecked(false);
    }
  }, [open]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const canAccept = hasScrolledToBottom && isChecked;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] p-0 gap-0 overflow-hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
              <Scale className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">Allgemeine Geschäftsbedingungen</DialogTitle>
              <DialogDescription className="mt-1">
                Bitte lesen Sie unsere AGB sorgfältig durch und bestätigen Sie diese.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Scroll Instruction */}
        <div className={cn(
          "px-6 py-3 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-3 transition-all duration-300",
          hasScrolledToBottom && "bg-secondary/10 border-secondary/20"
        )}>
          {hasScrolledToBottom ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-secondary font-medium">
                Sie haben die AGB vollständig gelesen.
              </p>
            </>
          ) : (
            <>
              <ScrollText className="w-5 h-5 text-amber-600 flex-shrink-0 animate-bounce" />
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Bitte scrollen Sie bis zum Ende, um die AGB vollständig zu lesen.
              </p>
            </>
          )}
        </div>

        {/* AGB Content */}
        <ScrollArea 
          className="h-[350px] px-6" 
          onScrollCapture={handleScroll}
          ref={scrollRef}
        >
          <div className="py-4 space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 1 Geltungsbereich</h3>
              <p className="mb-2">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge, die zwischen der katew GmbH (nachfolgend „Anbieter") und dem Nutzer (nachfolgend „Kunde") über die Plattform katew.de geschlossen werden.
              </p>
              <p>
                (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 2 Vertragsgegenstand</h3>
              <p className="mb-2">
                katew ist eine Vermittlungsplattform für Krankenfahrten. Der Anbieter vermittelt Transportleistungen zwischen Kunden und registrierten Transportunternehmen (nachfolgend „Dienstleister").
              </p>
              <p className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <strong className="text-foreground">Wichtig:</strong> Der Beförderungsvertrag kommt ausschließlich zwischen dem Kunden und dem jeweiligen Dienstleister zustande. Der Anbieter ist nicht Vertragspartei des Beförderungsvertrages.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 3 Registrierung und Nutzerkonto</h3>
              <p className="mb-2">
                Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Der Kunde ist verpflichtet, wahrheitsgemäße Angaben zu machen und diese aktuell zu halten.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Geheimhaltung der Zugangsdaten</li>
                <li>Haftung für alle Aktivitäten unter dem eigenen Konto</li>
                <li>Sofortige Meldung bei Verdacht auf unbefugte Nutzung</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 4 Buchung und Vermittlung</h3>
              <p className="mb-2">
                (1) Der Kunde kann über die Plattform Anfragen für Krankenfahrten stellen. Nach Eingang einer Anfrage erhalten geeignete Dienstleister die Möglichkeit, Angebote abzugeben.
              </p>
              <p className="mb-2">
                (2) Mit Annahme eines Angebots durch den Kunden kommt ein Beförderungsvertrag zwischen dem Kunden und dem jeweiligen Dienstleister zustande.
              </p>
              <p className="p-3 bg-secondary/10 rounded-lg border border-secondary/20 text-secondary">
                Die Nutzung der Vermittlungsplattform ist für Kunden kostenlos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 5 Stornierung</h3>
              <p className="mb-2">
                Stornierungen sind nach Maßgabe der jeweiligen Stornierungsbedingungen des Dienstleisters möglich.
              </p>
              <p className="text-amber-700 dark:text-amber-400">
                Bei kurzfristigen Stornierungen können Stornogebühren anfallen, die vom Dienstleister festgelegt werden.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 6 Haftung</h3>
              <p className="mb-2">
                (1) Der Anbieter haftet als Vermittler nicht für die Durchführung der Beförderung. Die Haftung für die Beförderung liegt beim jeweiligen Dienstleister.
              </p>
              <p className="mb-2">
                (2) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
              </p>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium text-foreground mb-1">Haftungsausschluss gilt nicht bei:</p>
                <div className="grid grid-cols-2 gap-2">
                  <span>• Vorsatz</span>
                  <span>• Grobe Fahrlässigkeit</span>
                  <span>• Körperschäden</span>
                  <span>• Wesentliche Vertragspflichten</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 7 Datenschutz</h3>
              <p>
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
                <Link to="/datenschutz" className="text-primary hover:underline font-medium" target="_blank">
                  Datenschutzerklärung
                </Link>.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">§ 8 Schlussbestimmungen</h3>
              <p className="mb-2">
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mb-2">
                (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Berlin.
              </p>
              <p>
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            {/* End marker */}
            <div className="pt-4 pb-2 border-t border-border/50">
              <p className="text-center text-xs text-muted-foreground">
                Stand: Januar 2026 • katew GmbH, Berlin
              </p>
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-border/50 bg-muted/20 space-y-4">
          <div 
            className={cn(
              "flex items-start gap-3 p-3 rounded-xl transition-all duration-300",
              hasScrolledToBottom 
                ? "bg-background border border-border cursor-pointer hover:bg-muted/30" 
                : "bg-muted/50 cursor-not-allowed opacity-60"
            )}
            onClick={() => hasScrolledToBottom && setIsChecked(!isChecked)}
          >
            <Checkbox 
              id="agb-accept" 
              checked={isChecked}
              onCheckedChange={(checked) => hasScrolledToBottom && setIsChecked(checked as boolean)}
              disabled={!hasScrolledToBottom}
              className="mt-0.5"
            />
            <label 
              htmlFor="agb-accept" 
              className={cn(
                "text-sm leading-relaxed",
                hasScrolledToBottom ? "cursor-pointer" : "cursor-not-allowed"
              )}
            >
              Ich habe die <Link to="/agb" className="text-primary hover:underline font-medium" target="_blank">Allgemeinen Geschäftsbedingungen</Link> gelesen und akzeptiere diese. Mir ist bekannt, dass ich mit der Nutzung der Plattform an diese Bedingungen gebunden bin.
            </label>
          </div>

          <Button
            onClick={onAccept}
            disabled={!canAccept}
            className={cn(
              "w-full h-12 text-base font-semibold transition-all duration-300",
              canAccept
                ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25"
                : "opacity-50"
            )}
          >
            {canAccept ? (
              <>
                <CheckCircle2 className="w-5 h-5 mr-2" />
                AGB akzeptieren und fortfahren
              </>
            ) : hasScrolledToBottom ? (
              "Bitte bestätigen Sie die Checkbox"
            ) : (
              "Bitte lesen Sie die AGB vollständig"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AGBAcceptanceModal;
