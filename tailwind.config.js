/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text-color": "#1A181E",
        "sub-text-color": "#4D4D4D",
        "blue-text": "#146EB4",
        "stroke-color": "#D9D9D9",
        "xlight-gray": "#f2f2f2",
      },
    },
  },
  plugins: [],
}

