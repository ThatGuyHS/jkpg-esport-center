import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-pattern': "url('https://lh4.googleusercontent.com/y6ZeyLBqN5iO-Jw6ruTmcoHjyi3q7l6dm9zwV736fLPIouWfujzH66KKHh0QaddWMSEa72-EXN8qrYiVyEKSC8c=w16383')"
      },
    },
  },
  plugins: [],
};
export default config;
