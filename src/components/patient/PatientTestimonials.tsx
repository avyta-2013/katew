import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    role: "Patientin, Berlin",
    text: "Die Buchung war so einfach! Innerhalb von 5 Minuten hatte ich eine Bestätigung und der Fahrer war pünktlich und sehr freundlich.",
    rating: 5,
  },
  {
    name: "Dr. Thomas K.",
    role: "Hausarzt, München",
    text: "Ich empfehle katew meinen Patienten regelmäßig. Die Vermittlung ist zuverlässig und spart meinem Praxisteam viel Organisationsaufwand.",
    rating: 5,
  },
  {
    name: "Sabine W.",
    role: "Pflegedienstleitung, Hamburg",
    text: "Für unsere Einrichtung ist katew ein Segen. Wir buchen täglich mehrere Fahrten und alles läuft reibungslos digital.",
    rating: 5,
  },
];

export const PatientTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Users className="w-4 h-4 text-primary" />
            <span>Erfahrungen</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Das sagen unsere{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kunden
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tausende zufriedene Patienten und Einrichtungen vertrauen auf katew
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-7 relative"
                whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                  „{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
