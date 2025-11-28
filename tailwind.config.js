export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths to your project
  ],
  theme: {
    extend: {
      colors: {
        serene: {
          900: "#0f172a",
          800: "#112240",
          700: "#1e3a8a",
          600: "#0d9488",
          500: "#14b8a6",
          400: "#2dd4bf",
          300: "#5eead4",
          100: "#ccfbf1",
          50: "#f0fdfa",
        },
        accent: {
          gold: "#fbbf24",
          rose: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
