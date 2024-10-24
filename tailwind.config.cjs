/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        main: "url('/Background.jpg')",
        about:
          "url('https://images.unsplash.com/photo-1582731489225-24fc0a720737?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        services:
          "url('https://images.pexels.com/photos/27543242/pexels-photo-27543242/free-photo-of-a-bedroom-with-a-bed-and-a-large-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        simple:
          "url('https://i.ibb.co/CP9FKjb/Whats-App-Image-2024-10-07-at-3-32-49-PM-4.jpg')",
        doble:
          "url('https://i.ibb.co/2NnTSB3/Whats-App-Image-2024-10-07-at-3-32-49-PM-5.jpg')",
        matrimonial:
          "url('https://i.ibb.co/vYRCqD0/Whats-App-Image-2024-10-07-at-3-32-49-PM-8.jpg')",
        contact:
          "url('https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#CDA274",
          200: "#292F36",
          300: "#F4F0EC",
          400: "#E2E2E2",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
