# katew Style Guide

## Markenidentität

### Logo
- **Primäres Logo**: `src/assets/logo.png`
- **Transparentes Logo**: `src/assets/katew-logo-transparent.png`
- **Email Logo**: `public/email-logo.png`
- **Schriftart**: Outfit (modern, nicht steif)
- **Tagline**: "Medical Transport"

### Markenterminologie
- Verwende "Krankenfahrt" statt "Krankentransport"
- Verwende "uns" für Vertrauensaussagen (z.B. "Über 500 Krankenfahrtunternehmen vertrauen auf uns")
- "Anbieter" = Transportunternehmen
- "Partner" = Kooperationspartner (Krankenhäuser, Pflegeeinrichtungen)

---

## Farbsystem

### Primäre Farben (HSL)

```css
/* Helle Variante (Light Mode) */
--primary: 221 83% 53%;           /* Hauptblau */
--primary-foreground: 0 0% 100%;  /* Weiß auf Blau */

--secondary: 142 76% 46%;          /* Grün */
--secondary-foreground: 0 0% 100%; /* Weiß auf Grün */
```

### Neutrale Farben

```css
--background: 0 0% 100%;           /* Weiß */
--foreground: 222 47% 11%;         /* Dunkelblau/Schwarz */

--muted: 220 13% 95%;              /* Hellgrau */
--muted-foreground: 220 9% 46%;    /* Mittelgrau */

--border: 220 13% 91%;             /* Randfarbe */
--input: 220 13% 91%;              /* Input-Rahmen */
```

### Akzentfarben

```css
--accent: 221 83% 53%;             /* Gleich wie Primary */
--destructive: 0 84% 60%;          /* Rot für Fehler */
```

### Dunkelmodus

```css
--background: 222 47% 11%;
--foreground: 0 0% 98%;
--card: 222 47% 14%;
--muted: 217 33% 17%;
--border: 217 33% 20%;
```

---

## Gradienten

### Primärer Gradient (Blau-Töne)
Für Titel, Buttons und interaktive Elemente:
```css
/* Bevorzugt: Blau-Töne */
background: linear-gradient(135deg, hsl(221 83% 53%) 0%, hsl(221 83% 63% / 0.7) 50%, hsl(221 83% 53%) 100%);

/* Tailwind Klasse */
bg-gradient-to-r from-primary via-primary/70 to-accent
```

### Sekundärer Gradient (Blau zu Grün)
Nur für spezielle Akzente wie CTA-Buttons:
```css
background: linear-gradient(135deg, hsl(221 83% 53%) 0%, hsl(142 76% 46%) 100%);

/* Tailwind Klasse */
bg-gradient-to-r from-primary to-secondary
```

### Hero Gradient
```css
--gradient-hero: linear-gradient(135deg, hsl(221 83% 53% / 0.05) 0%, hsl(142 76% 46% / 0.05) 100%);
```

### Animierter Gradient
```css
bg-[length:200%_auto] hover:bg-right transition-all duration-500
```

---

## Typografie

### Schriftfamilien
```css
/* Primär */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Logo & Headers */
font-family: 'Outfit', sans-serif;
```

### Schriftgrößen

| Element | Größe | Gewicht | Klasse |
|---------|-------|---------|--------|
| H1 | 3rem - 4rem | 800 | `text-4xl md:text-5xl lg:text-6xl font-extrabold` |
| H2 | 2rem - 2.5rem | 700 | `text-3xl md:text-4xl font-bold` |
| H3 | 1.5rem | 600 | `text-2xl font-semibold` |
| H4 | 1.25rem | 600 | `text-xl font-semibold` |
| Body | 1rem | 400 | `text-base` |
| Small | 0.875rem | 400 | `text-sm` |
| Caption | 0.75rem | 500 | `text-xs font-medium` |

### Heading-Stil
```jsx
<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/70 to-accent bg-clip-text text-transparent">
  Überschrift
</h2>
```

---

## Abstände (Spacing)

### Container
```css
container mx-auto px-4
/* Max-width: 1400px, zentriert, 2rem padding */
```

### Sektionen
```css
py-16 md:py-24    /* Vertikaler Abstand zwischen Sektionen */
py-20 md:py-32    /* Große Sektionen (Hero) */
```

### Komponenten
| Verwendung | Klasse |
|------------|--------|
| Zwischen Karten | `gap-6` oder `gap-8` |
| Innerhalb Karten | `p-6` oder `p-8` |
| Text-Abstände | `space-y-4` |
| Button-Gruppen | `gap-3` oder `gap-4` |

---

## Border Radius

```css
--radius: 1rem;  /* 16px */

/* Varianten */
rounded-sm: calc(var(--radius) - 4px)  /* 12px */
rounded-md: calc(var(--radius) - 2px)  /* 14px */
rounded-lg: var(--radius)              /* 16px */
rounded-xl: 1.25rem                    /* 20px */
rounded-2xl: 1.5rem                    /* 24px */
rounded-full: 9999px                   /* Kreise/Pills */
```

---

## Schatten

```css
--shadow-glow: 0 0 40px hsl(221 83% 53% / 0.15);
--shadow-card: 0 4px 20px hsl(0 0% 0% / 0.08);
--shadow-elevated: 0 10px 40px hsl(0 0% 0% / 0.12);
```

### Tailwind Klassen
```css
shadow-sm          /* Subtil */
shadow-md          /* Standard */
shadow-lg          /* Erhöht */
shadow-elevated    /* Custom: Karten */
hover:shadow-xl    /* Hover-Effekt */
hover:shadow-primary/25  /* Farbiger Schatten */
```

---

## Glassmorphism

```css
/* Standard Glassmorphism */
bg-background/80 backdrop-blur-xl border border-border/50

/* Karten mit Glassmorphism */
bg-card/80 backdrop-blur-lg border border-border/30 shadow-card

/* Header (scrolled) */
bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm
```

---

## Buttons

### Varianten

#### Primary (Default)
```jsx
<Button variant="default">
  Primärer Button
</Button>
```
```css
bg-primary text-primary-foreground hover:bg-primary/90
```

#### Secondary
```jsx
<Button variant="secondary">
  Sekundärer Button
</Button>
```
```css
bg-secondary text-secondary-foreground hover:bg-secondary/80
```

#### Outline
```jsx
<Button variant="outline">
  Outline Button
</Button>
```
```css
border border-input bg-background hover:bg-accent hover:text-accent-foreground
```

#### Ghost
```jsx
<Button variant="ghost">
  Ghost Button
</Button>
```
```css
hover:bg-accent hover:text-accent-foreground
```

### Gradient Button (CTA)
```jsx
<button className="px-6 py-3 text-sm font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25">
  Fahrt buchen
</button>
```

### Button Größen
```css
size="sm"      /* h-9, px-3 */
size="default" /* h-10, px-4, py-2 */
size="lg"      /* h-11, px-8 */
size="icon"    /* h-10, w-10 */
```

---

## Karten

### Standard Karte
```jsx
<Card className="bg-card border border-border/50 rounded-2xl shadow-card hover:shadow-elevated transition-all">
  <CardHeader>
    <CardTitle>Titel</CardTitle>
    <CardDescription>Beschreibung</CardDescription>
  </CardHeader>
  <CardContent>
    Inhalt
  </CardContent>
</Card>
```

### Feature Karte mit Hover
```jsx
<div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
    <Icon className="w-6 h-6 text-primary" />
  </div>
  <h3 className="font-semibold mb-2">Feature Titel</h3>
  <p className="text-muted-foreground text-sm">Beschreibung</p>
</div>
```

---

## Animationen

### Keyframes
```css
fade-in: opacity 0→1, translateY 20px→0, 0.6s ease-out
fade-in-up: opacity 0→1, translateY 30px→0, 0.8s ease-out
scale-in: opacity 0→1, scale 0.95→1, 0.4s cubic-bezier
gradient: backgroundPosition 0%→100%→0%, 6s linear infinite
scroll: translateX 0→-50%, 30s linear infinite
```

### Tailwind Klassen
```css
animate-fade-in
animate-fade-in-up
animate-scale-in
animate-gradient
animate-scroll
```

### Framer Motion Beispiele
```jsx
import { motion } from "framer-motion";

// Fade In beim Scrollen
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Hover Scale
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.2 }}
>

// Stagger Children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Transitions
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Tailwind */
transition-all duration-300
transition-colors duration-200
hover:scale-105 transition-transform
```

---

## Icons

### Bibliothek
**Lucide React** (`lucide-react`)

### Größen
```css
w-4 h-4   /* 16px - Inline, Buttons */
w-5 h-5   /* 20px - Standard */
w-6 h-6   /* 24px - Feature Icons */
w-8 h-8   /* 32px - Große Icons */
w-12 h-12 /* 48px - Hero Icons */
```

### Farben
```jsx
<Icon className="text-primary" />
<Icon className="text-muted-foreground" />
<Icon className="text-secondary" />
```

### Icon Container
```jsx
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
  <Icon className="w-5 h-5 text-primary" />
</div>
```

---

## Formulare

### Input
```jsx
<Input 
  className="rounded-xl border-border/50 focus:border-primary focus:ring-primary"
  placeholder="Platzhalter..."
/>
```

### Label
```jsx
<Label className="text-sm font-medium text-foreground">
  Feldname
</Label>
```

### Form Group
```jsx
<div className="space-y-2">
  <Label>Email</Label>
  <Input type="email" placeholder="ihre@email.de" />
  <p className="text-xs text-muted-foreground">Hilftext</p>
</div>
```

---

## Email Templates

### Farben
```css
Header Gradient: #2563eb → #22c55e
CTA Button: #2563eb → #22c55e
Text: #1e293b (Dunkel)
Muted Text: #64748b (Grau)
Background: #f8fafc (Hellgrau)
Card: #ffffff (Weiß)
```

### Struktur
1. **Header**: Logo + Gradient-Banner
2. **Mitte**: Begrüßung + Inhalt + CTA-Button
3. **Fußzeile**: Kontaktdaten + Links + Copyright

### Kontaktdaten
- Email: support@katew.de
- Telefon: +49 151 155 612 31
- Adresse: Allerheiligentor 2-4, 60311 Frankfurt

---

## Responsive Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1400px  /* Container max-width */
```

### Mobile-First Patterns
```jsx
// Text Größen
className="text-2xl md:text-3xl lg:text-4xl"

// Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Spacing
className="py-12 md:py-20"

// Visibility
className="hidden md:block"
className="block md:hidden"
```

---

## Do's & Don'ts

### ✅ Do's
- Semantic Tokens aus `index.css` verwenden
- HSL-Farben für alle Farbwerte
- Konsistente Border-Radii (meist `rounded-xl` oder `rounded-2xl`)
- Framer Motion für komplexe Animationen
- Glassmorphism für schwebende Elemente
- Blau-Töne für primäre Gradienten

### ❌ Don'ts
- Keine Hex-Farben direkt in Komponenten
- Keine fest codierten Farben (z.B. `text-white`, `bg-black`)
- Keine generischen AI-Ästhetiken (lila Gradienten auf Weiß)
- Keine Inline-Styles für Farben
- Kein Blau-zu-Grün für normale UI (nur CTAs)

---

## Beispiel-Komponente

```jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:bg-transparent">
      Mehr erfahren
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </motion.div>
);
```

---

*Letzte Aktualisierung: Februar 2026*
