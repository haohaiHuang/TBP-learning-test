/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#4A90D9",
        secondary: "#5AC8FA",
        accent: "#FF9500",
        success: "#34C759",
        error: "#FF3B30",
        background: "#F5F5F7",
        "text-main": "#1D1D1F",
        "text-muted": "#86868B",
      },
      fontFamily: {
        sans: ['"PingFang SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
