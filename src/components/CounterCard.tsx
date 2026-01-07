import { useCountUp } from "@/hooks/useCountUp";
import { LucideIcon } from "lucide-react";

interface CounterCardProps {
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  title: string;
  description: string;
  delay?: string;
}

export const CounterCard = ({
  icon: Icon,
  stat,
  statLabel,
  title,
  description,
  delay = "0ms",
}: CounterCardProps) => {
  // Parse the stat to extract number and suffix
  const parseStatValue = (stat: string) => {
    const match = stat.match(/^([+]?)(\d+)(.*)$/);
    if (match) {
      return {
        prefix: match[1],
        number: parseInt(match[2], 10),
        suffix: match[3],
      };
    }
    return { prefix: "", number: 0, suffix: stat };
  };

  const { prefix, number, suffix } = parseStatValue(stat);
  const { ref, displayValue } = useCountUp({
    end: number,
    duration: 2000,
    prefix,
    suffix,
  });

  return (
    <div
      className="group relative"
      style={{ animationDelay: delay }}
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

      <div
        ref={ref}
        className="relative h-full backdrop-blur-xl bg-card/60 border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
      >
        {/* Inner gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] -translate-y-6 translate-x-6" />

        <div className="relative">
          {/* Icon with ring */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-card rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Stat number with counter animation */}
          <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
            {displayValue}
          </div>
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-4">
            {statLabel}
          </div>

          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
