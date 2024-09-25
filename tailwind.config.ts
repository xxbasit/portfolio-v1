import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at center top, rgba(97, 99, 108, 0.311) 0%, rgba(31, 32, 37, 0.158) 50%), #151519",
      },
    },
  },
  plugins: [],
};
export default config;
