import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      mixBlendMode: {
        difference: "difference",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "hsl(var(--foreground))",
        violet: {
          1: "#601DFF",
          2: "#2B0092",
          3: "#573F77",
        },
        white: {
          1: "#FFFFFF",
          2: "#EAEAEA",
          3: "#F1F1F1",
          4: "#999999",
        },
        slate: {
          950: "#020617",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0em",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        "open-sans": ["var(--font-open-sans)"],
        staatliches: ["var(--font-staatliches)"],
        antonio: ["var(--font-antonio)"],
        anton: ["var(--font-anton)"],
      },
      fontSize: {
        // H1 - Montserrat SemiBold
        h1: ["106px", { lineHeight: "106px", letterSpacing: "-0.03em" }],
        // H2 - Montserrat Bold
        h2: ["54px", { lineHeight: "64px", letterSpacing: "-0.03em" }],
        // H3 - Montserrat SemiBold
        h3: ["42px", { lineHeight: "46px", letterSpacing: "-0.03em" }],
        // H4 - Montserrat SemiBold
        h4: ["28px", { lineHeight: "40px", letterSpacing: "-0.03em" }],
        // H5 - Montserrat Medium
        h5: ["24px", { lineHeight: "34px", letterSpacing: "-0.02em" }],
        // H6 - Montserrat Medium
        h6: ["18px", { lineHeight: "26px", letterSpacing: "-0.02em" }],
        // P1 - Open Sans Regular
        p1: ["18px", { lineHeight: "28px", letterSpacing: "0em" }],
        // P2 - Open Sans Regular
        p2: ["16px", { lineHeight: "28px", letterSpacing: "0em" }],
        // BUTTONS - Montserrat Medium
        buttons: ["28px", { lineHeight: "40px", letterSpacing: "-0.02em" }],
        // P3 - Open Sans Regular
        p3: ["14px", { lineHeight: "auto", letterSpacing: "0em" }],
        // P4 - Open Sans Regular
        p4: ["14px", { lineHeight: "auto", letterSpacing: "0em" }],
        // TAGS - Montserrat SemiBold
        tags: ["14px", { lineHeight: "26px", letterSpacing: "0em" }],
        // P5 - Open Sans Regular
        p5: ["12px", { lineHeight: "150%", letterSpacing: "0em" }],
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
          "0%, 100%": {
            boxShadow: "0 0 0 0 red",
          },
          "50%": {
            boxShadow: "0 0 0 8px red",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        marqueeBanner: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse var(--duration) ease-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        marqueeBanner: "marqueeBanner 20s linear infinite",
        shine: "shine var(--duration) infinite linear",
      },
      backgroundImage: {
        "date-gradient": "linear-gradient(258.27deg, #FFFFFF 16.23%, #7338FF 134.71%)",
        "card-border": "linear-gradient(36.15deg, #FFFFFF -51.02%, #171719 33.23%)",
        "roadshow-gradient": "linear-gradient(120.16deg, #100327 63.73%, #3A0B8D 151.7%)",
        "roadshow-border":
          "linear-gradient(105.28deg, rgba(229, 218, 255, 0.2) 3.74%, rgba(96, 29, 255, 0.2) 60.73%)",
        "roadshow-stats-border":
          "linear-gradient(259.62deg, rgba(255, 255, 255, 0.2) -1.03%, rgba(12, 3, 24, 0.2) 107%)",
        "roadshow-city-card-gradient":
          "linear-gradient(259.62deg, rgba(255, 255, 255, 0.2) -1.03%, rgba(12, 3, 24, 0.2) 107%)",
        "slider-border":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.36) -8.42%, rgba(85, 84, 84, 0.36) 100%)",
        "quranium-text-gradient":
          "linear-gradient(90deg, #9B9B9B 17.16%, #FFFFFF 53.21%, #757575 87.23%)",
        "roadshow-reverse-border":
          "linear-gradient(259.62deg, rgba(255, 255, 255, 0.2) -1.03%, rgba(12, 3, 24, 0.2) 107%)",
        "team-gradient": `
          linear-gradient(182.72deg, rgba(0,0,0,0) 73.87%, #0C0318 96.61%),
          linear-gradient(358.49deg, rgba(0,0,0,0) 77.87%, #0C0318 98.75%)
        `,
        "multi-layer-gradient": `
          linear-gradient(0deg, #000000, #000000),
          linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          linear-gradient(0deg, #0C0318, #0C0318);`,
        "globe-gradient": `
          linear-gradient(14.83deg, #07050E 52.58%, #25007D 140.43%);
        `,
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".font-montserrat": {
          letterSpacing: theme("letterSpacing.tight"),
        },
        ".font-open-sans": {
          letterSpacing: theme("letterSpacing.normal"),
        },
      });
    }),
  ],
} satisfies Config;

export default config;
