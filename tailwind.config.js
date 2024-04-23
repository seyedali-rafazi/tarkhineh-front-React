/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/icons/Empty-page.svg')", // Replace with the actual path or URL
        "home-slide-one": "url('/styles/slider.jpg')", // Replace with the actual path or URL
        "home-slide-two": "url('/styles/slider2.jpg')", // Replace with the actual path or URL
        "home-slide-three": "url('/styles/slider3.jpg')", // Replace with the actual path or URL
        "home-intruduction": "url('/styles/introduction.jpg')", // Replace with the actual path or URL
        "home-footer": "url('/styles/footer.jpg')", // Replace with the actual path or URL
        "home-branch-1": "url('/styles/ekbatan.jpg')", // Replace with the actual path or URL
        "home-branch-2": "url('/styles/chalos.jpg')", // Replace with the actual path or URL
        "home-branch-3": "url('/styles/aghdasieh.jpg')", // Replace with the actual path or URL
        "home-branch-4": "url('/styles/vanak.jpg')", // Replace with the actual path or URL
        "successful-payment":
          "url('/styles/successful-payment-Background.jpg')", // Replace with the actual path or URL
        "franchise-banner": "url('/styles/franchise-banner.jpg')", // Replace with the actual path or URL
        "about-banner": "url('/styles/about-us-banner.jpg')", // Replace with the actual path or URL
        "call-banner": "url('/styles/contact-us-banner.jpg')", // Replace with the actual path or URL

      },
      container: {
        center: true,
      },

      colors: {
        tint: {
          100: "#E5F2E9",
          200: "#CAE4D3",
          300: "#B0D7BD",
          400: "#96C9A7",
          500: "#7CBC91",
          600: "#61AE7B",
          700: "#4E9968",
        },

        primary: "#417f56",

        shade: {
          100: "#396F4B",
          200: "#315F41",
          300: "#294F36",
          400: "#21402B",
          500: "#183020",
          600: "#102016",
          700: "#08100B",
        },

        secondery: {
          0: "#0C0C0C",
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "E1E1E1",
          300: "#EDEDED",
          400: "#CBCBCB",
          500: "#ADADAD",
          600: "#757575",
          700: "#717171",
          800: "#353535",
        },
        success: {
          100: "#F3FDFA",
          200: "#00BA88",
          300: "#00966D",
        },
        warning: {
          100: "#FFF8E1",
          200: "#F4B740",
          300: "#A9791C",
        },
        error: {
          100: "#FFF2F2",
          200: "#ED2E2E",
          300: "#C30000",
        },
      },

      fontFamily: {
        sans: ["Estedad", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
