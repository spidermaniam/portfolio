import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Generic motions
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        // Finger & palm
        "finger-tap-proximal": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-18deg)" },
          "45%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "finger-tap-middle": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-12deg)" },
          "45%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "finger-tap-distal": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-6deg)" },
          "45%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "palm-motion": {
          "0%": { transform: "scaleY(1) translateY(0) rotate(0deg)" },
          "15%": { transform: "scaleY(0.88) translateY(8px) rotate(-4deg)" },
          "45%": { transform: "scaleY(1.08) translateY(-2px) rotate(3deg)" },
          "60%": { transform: "scaleY(1) translateY(0) rotate(0deg)" },
          "100%": { transform: "scaleY(1) translateY(0) rotate(0deg)" },
        },
        "thumb-response": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-5deg)" },
          "40%": { transform: "rotate(2deg)" },
          "70%": { transform: "rotate(-1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },

        // Progress stripes
        "bar-stripes": {
          from: { backgroundPositionX: "0%" },
          to: { backgroundPositionX: "100%" },
        },

        // Glitch effects
        flicker: {
          "0%, 100%": { opacity: "1" },
          "10%": { opacity: "0.8" },
          "20%": { opacity: "0.4" },
          "30%": { opacity: "0.95" },
          "40%": { opacity: "0.5" },
          "50%, 90%": { opacity: "1" },
        },
        chroma: {
          "0%": { textShadow: "1px 0 red, -1px 0 blue" },
          "50%": { textShadow: "2px 0 cyan, -2px 0 red" },
          "100%": { textShadow: "1px 0 red, -1px 0 blue" },
        },

        // Cursor typing
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#22c55e" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",

        "index-proximal": "finger-tap-proximal 1.6s ease-in-out infinite",
        "index-middle": "finger-tap-middle 1.6s ease-in-out infinite",
        "index-distal": "finger-tap-distal 1.6s ease-in-out infinite",
        "middle-proximal": "finger-tap-proximal 1.6s ease-in-out 0.2s infinite",
        "middle-middle": "finger-tap-middle 1.6s ease-in-out 0.2s infinite",
        "middle-distal": "finger-tap-distal 1.6s ease-in-out 0.2s infinite",
        "ring-proximal": "finger-tap-proximal 1.6s ease-in-out 0.4s infinite",
        "ring-middle": "finger-tap-middle 1.6s ease-in-out 0.4s infinite",
        "ring-distal": "finger-tap-distal 1.6s ease-in-out 0.4s infinite",
        "pinky-proximal": "finger-tap-proximal 1.6s ease-in-out 0.6s infinite",
        "pinky-middle": "finger-tap-middle 1.6s ease-in-out 0.6s infinite",
        "pinky-distal": "finger-tap-distal 1.6s ease-in-out 0.6s infinite",
        palm: "palm-motion 1.6s ease-in-out infinite",
        thumb: "thumb-response 3.2s ease-in-out infinite",

        "bar-stripes": "bar-stripes 1s linear infinite",
        flicker: "flicker 3s infinite",
        "chroma-glitch": "chroma 1.2s ease-in-out infinite alternate",
        typing: "typing 3s steps(30, end), blink 0.75s step-end infinite",
      },
    },
  },
  safelist: ["bg-primary", "bg-secondary", "bg-accent"],
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }) => {
      addUtilities({
        ".bone-segment": { transformBox: "fill-box" },
        ".vector-fixed": { vectorEffect: "non-scaling-stroke" },
        ".animate-bar": {
          backgroundImage:
            "linear-gradient(135deg,#d3d3d3_25%,transparent_25%,transparent_50%,#d3d3d3_50%,#d3d3d3_75%,transparent_75%,transparent)",
          backgroundSize: "32px 32px",
          animation: "bar-stripes 1s linear infinite",
        },
      });
    },
  ],
};

export default config;
