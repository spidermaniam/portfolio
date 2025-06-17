// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Section specific colors
        'section-hero-bg': 'hsl(var(--section-hero-bg))',
        'section-hero-text-primary': 'hsl(var(--section-hero-text-primary))',
        'section-hero-text-secondary': 'hsl(var(--section-hero-text-secondary))',
        'section-hero-accent': 'hsl(var(--section-hero-accent))',
        'section-hero-accent-foreground': 'hsl(var(--section-hero-accent-foreground))',
        'section-hero-border': 'hsl(var(--section-hero-border))',
        'section-hero-card-bg': 'hsl(var(--section-hero-card-bg))',
        'section-hero-card-foreground': 'hsl(var(--section-hero-card-foreground))',

        'section-about-bg': 'hsl(var(--section-about-bg))',
        'section-about-text-primary': 'hsl(var(--section-about-text-primary))',
        'section-about-text-secondary': 'hsl(var(--section-about-text-secondary))',
        'section-about-accent': 'hsl(var(--section-about-accent))',
        'section-about-accent-foreground': 'hsl(var(--section-about-accent-foreground))',
        'section-about-border': 'hsl(var(--section-about-border))',
        'section-about-card-bg': 'hsl(var(--section-about-card-bg))',
        'section-about-card-foreground': 'hsl(var(--section-about-card-foreground))',

        'section-skills-bg': 'hsl(var(--section-skills-bg))',
        'section-skills-text-primary': 'hsl(var(--section-skills-text-primary))',
        'section-skills-text-secondary': 'hsl(var(--section-skills-text-secondary))',
        'section-skills-accent': 'hsl(var(--section-skills-accent))',
        'section-skills-accent-foreground': 'hsl(var(--section-skills-accent-foreground))',
        'section-skills-border': 'hsl(var(--section-skills-border))',
        'section-skills-card-bg': 'hsl(var(--section-skills-card-bg))',
        'section-skills-card-foreground': 'hsl(var(--section-skills-card-foreground))',

        'section-projects-bg': 'hsl(var(--section-projects-bg))',
        'section-projects-text-primary': 'hsl(var(--section-projects-text-primary))',
        'section-projects-text-secondary': 'hsl(var(--section-projects-text-secondary))',
        'section-projects-accent': 'hsl(var(--section-projects-accent))',
        'section-projects-accent-foreground': 'hsl(var(--section-projects-accent-foreground))',
        'section-projects-border': 'hsl(var(--section-projects-border))',
        'section-projects-card-bg': 'hsl(var(--section-projects-card-bg))',
        'section-projects-card-foreground': 'hsl(var(--section-projects-card-foreground))',

        'section-certifications-bg': 'hsl(var(--section-certifications-bg))',
        'section-certifications-text-primary': 'hsl(var(--section-certifications-text-primary))',
        'section-certifications-text-secondary': 'hsl(var(--section-certifications-text-secondary))',
        'section-certifications-accent': 'hsl(var(--section-certifications-accent))',
        'section-certifications-accent-foreground': 'hsl(var(--section-certifications-accent-foreground))',
        'section-certifications-border': 'hsl(var(--section-certifications-border))',
        'section-certifications-card-bg': 'hsl(var(--section-certifications-card-bg))',
        'section-certifications-card-foreground': 'hsl(var(--section-certifications-card-foreground))',

        'section-experience-bg': 'hsl(var(--section-experience-bg))',
        'section-experience-text-primary': 'hsl(var(--section-experience-text-primary))',
        'section-experience-text-secondary': 'hsl(var(--section-experience-text-secondary))',
        'section-experience-accent': 'hsl(var(--section-experience-accent))',
        'section-experience-accent-foreground': 'hsl(var(--section-experience-accent-foreground))',
        'section-experience-border': 'hsl(var(--section-experience-border))',
        'section-experience-card-bg': 'hsl(var(--section-experience-card-bg))',
        'section-experience-card-foreground': 'hsl(var(--section-experience-card-foreground))',

        'section-testimonials-bg': 'hsl(var(--section-testimonials-bg))',
        'section-testimonials-text-primary': 'hsl(var(--section-testimonials-text-primary))',
        'section-testimonials-text-secondary': 'hsl(var(--section-testimonials-text-secondary))',
        'section-testimonials-accent': 'hsl(var(--section-testimonials-accent))',
        'section-testimonials-accent-foreground': 'hsl(var(--section-testimonials-accent-foreground))',
        'section-testimonials-border': 'hsl(var(--section-testimonials-border))',
        'section-testimonials-card-bg': 'hsl(var(--section-testimonials-card-bg))',
        'section-testimonials-card-foreground': 'hsl(var(--section-testimonials-card-foreground))',

        'section-contact-bg': 'hsl(var(--section-contact-bg))',
        'section-contact-text-primary': 'hsl(var(--section-contact-text-primary))',
        'section-contact-text-secondary': 'hsl(var(--section-contact-text-secondary))',
        'section-contact-accent': 'hsl(var(--section-contact-accent))',
        'section-contact-accent-foreground': 'hsl(var(--section-contact-accent-foreground))',
        'section-contact-border': 'hsl(var(--section-contact-border))',
        'section-contact-card-bg': 'hsl(var(--section-contact-card-bg))',
        'section-contact-card-foreground': 'hsl(var(--section-contact-card-foreground))',

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
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#22c55e" },
        },
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
      },
      animation: {
        typing: "typing 3s steps(30, end), blink 0.75s step-end infinite",
        flicker: "flicker 3s infinite",
        "chroma-glitch": "chroma 1.2s ease-in-out infinite alternate",
      },
    },
  },
  safelist: ["bg-primary", "bg-secondary", "bg-accent"],
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
