import { defineConfig } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

export default defineConfig({
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [flowbite],
});
