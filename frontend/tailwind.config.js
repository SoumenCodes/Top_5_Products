/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: "#0a0a23", // Dark blue
        bgpurple: "#6366f1", // Purple
        bglight: "#171744", // Purple
        accent: "#6366f1", // Yellow
        background: "#171744", // Light gray
        textPrimary: "#111827", // Dark gray
        textSecondary: "#6B7280", // Medium gray
      },
    },
  },
  plugins: [],
};
