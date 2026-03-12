import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
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
        serif: ["'Palatino Linotype'", "'Book Antiqua'", "Palatino", "Georgia", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "system-ui", "sans-serif"],
        accent: ["'Palatino Linotype'", "'Book Antiqua'", "Palatino", "'Hoefler Text'", "Georgia", "serif"],
        display: ["'Palatino Linotype'", "'Book Antiqua'", "Palatino", "Georgia", "serif"],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // Brand colors
        beige: "#F5F0E8",
        cream: "#FFF8E7",
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4AF37",
          dark: "#B8860B",
          deep: "#8B6914",
        },
        brown: {
          light: "#8B7355",
          medium: "#5C4033",
          dark: "#3D2B1F",
          text: "#2C1810",
        },
        terracotta: {
          DEFAULT: "#C46B2D",
          light: "#D4854A",
          dark: "#A0531E",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        gold: "0 0 20px rgba(201,168,76,0.3)",
        "gold-lg": "0 0 40px rgba(201,168,76,0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.4" },
          "70%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.3), 0 0 40px rgba(201,168,76,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.25)" },
        },
        "float-particle": {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.3" },
          "25%": { transform: "translateY(-30px) translateX(10px) scale(1.1)", opacity: "0.6" },
          "50%": { transform: "translateY(-15px) translateX(-8px) scale(0.95)", opacity: "0.4" },
          "75%": { transform: "translateY(-25px) translateX(5px) scale(1.05)", opacity: "0.5" },
        },
        "draw-line": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "urgency-pulse": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "float-particle": "float-particle 6s ease-in-out infinite",
        "draw-line": "draw-line 1.5s cubic-bezier(0.4,0,0.2,1) forwards",
        "urgency-pulse": "urgency-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
