/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          866: "#1c1c1f",
          850: "#202023",
          833: "#232326",
          766: "#2d2d30",
          750: "#343435",
          733: "#3a3a3b",
        },
      },
    },
  },
  plugins: [],
};
