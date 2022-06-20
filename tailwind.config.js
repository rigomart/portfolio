module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#D4E2FF",
          100: "#99BBFF",
          200: "#4785FF",
          300: "#1F69FF",
          400: "#0043CE",
          500: "#002D9C",
          600: "#001D6C",
          700: "#001141",
          800: "#000A29",
          900: "#000514",
        },
      },
      fontFamily: {
        "mono-title": ["'Azeret Mono'", "monospace"],
        mono: ["'DM Mono'", "monospace"],
        body1: ['"Open Sans"', "sans-serif"],
        body2: ['"IBM Plex Sans"', "sans-serif"],
        title: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
