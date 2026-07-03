import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0B2E63",
        secondary: "#1E88E5",
        accent: "#D4AF37",
        dark: "#081C3A",
        light: "#F7F9FC"
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },

      boxShadow: {
        glass: "0 8px 32px rgba(11,46,99,.12)",
        card: "0 20px 60px rgba(11,46,99,.10)"
      },

      borderRadius: {
        xl2: "24px"
      },

      backgroundImage: {
        hero:
          "linear-gradient(rgba(11,46,99,.72),rgba(11,46,99,.72))"
      }
    }
  },

  plugins: []
};

export default config;