const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", ...defaultTheme.fontFamily.sans],
        inter: ["Inter"],
      },
      colors: {
        primary: "rgb(22, 28, 36)",
        secondary: "rgb(33, 43, 54)",
        successGreen: "rgb(84, 214, 44)",
        purple: "#5271FF",
        darkRed: "rgb(149, 4, 46)",
        gray: "rgb(145, 158, 171)",
        grayHover: "rgba(145, 158, 171, 0.08)",
        cyan: "#4EDADD",
        darkCyan: "rgb(8, 173, 179)",
        progressBronze: "#CD7F32",
        progressSilver: "#C0C0C0",
        progressGold: "#FFD700",
        progressDiamond: "#4EE2EC",
      },
      backgroundImage: {
        landingTopNote:
          "linear-gradient(35deg,#4EDADD,#192020,#192020,#4EDADD)",
        landingSections: "url('/bg-sections-landing.svg')",
        arrowTitle: "url('/title-arrow.svg')",
        ownerBorderEffect: "url('/owner-border-effect.gif')",
        overlay:
          "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgb(22, 28, 36) 100%)",
        presaleCardHoverBronze:
          "conic-gradient(transparent, transparent, transparent, rgba(205, 127, 50, 1))",
        presaleCardHoverBronze2:
          "conic-gradient(transparent, transparent, transparent, rgba(205, 127, 50, 0.314))",
        presaleCardHoverSilver:
          "conic-gradient(transparent, transparent, transparent, rgba(192, 192, 192, 1))",
        presaleCardHoverSilver2:
          "conic-gradient(transparent, transparent, transparent, rgba(192, 192, 192, 0.314))",
        presaleCardHoverGold:
          "conic-gradient(transparent, transparent, transparent, rgba(255, 215, 0, 1))",
        presaleCardHoverGold2:
          "conic-gradient(transparent, transparent, transparent, rgba(255, 215, 0, 0.314))",
        presaleCardHoverDiamond:
          "conic-gradient(transparent, transparent, transparent, rgba(78, 226, 236, 1))",
        presaleCardHoverDiamond2:
          "conic-gradient(transparent, transparent, transparent, rgba(78, 226, 236, 0.314))",
        statusBg: "url('/status-bg.svg')",
        presaleIcoBorderBronze:
          "linear-gradient(132deg, rgba(205, 127, 50, 1), rgb(180, 67, 60) 43%, rgba(205, 127, 50, 1)), linear-gradient(132deg, rgba(205, 127, 50, 1), rgb(180, 67, 60) 43%, rgba(205, 127, 50, 1)), linear-gradient(132deg, rgba(205, 127, 50, 1), rgb(180, 67, 60) 43%, rgba(205, 127, 50, 1)), linear-gradient(132deg, rgba(205, 127, 50, 1), rgb(180, 67, 60) 43%, rgba(205, 127, 50, 1))",
        presaleIcoBorderSilver:
          "linear-gradient(132deg, rgba(192, 192, 192, 1), rgb(167, 167, 160) 43%, rgba(192, 192, 192, 1)), linear-gradient(132deg, rgba(192, 192, 192, 1), rgb(167, 167, 160) 43%, rgba(192, 192, 192, 1)), linear-gradient(132deg, rgba(192, 192, 192, 1), rgb(167, 167, 160) 43%, rgba(192, 192, 192, 1)), linear-gradient(132deg, rgba(192, 192, 192, 1), rgb(167, 167, 160) 43%, rgba(192, 192, 192, 1))",
        presaleIcoBorderGold:
          "linear-gradient(132deg, rgba(255, 215, 0, 1), rgb(175, 155, 0) 43%, rgba(255, 215, 0, 1)), linear-gradient(132deg, rgba(255, 215, 0, 1), rgb(175, 155, 0) 43%, rgba(255, 215, 0, 1)), linear-gradient(132deg, rgba(255, 215, 0, 1), rgb(175, 155, 0) 43%, rgba(255, 215, 0, 1)), linear-gradient(132deg, rgba(255, 215, 0, 1), rgb(175, 155, 0) 43%, rgba(255, 215, 0, 1))",
        presaleIcoBorderDiamond:
          "linear-gradient(132deg, rgba(78, 226, 236, 1), rgb(28, 156, 190) 43%, rgba(78, 226, 236, 1)), linear-gradient(132deg, rgba(78, 226, 236, 1), rgb(28, 156, 190) 43%, rgba(78, 226, 236, 1)), linear-gradient(132deg, rgba(78, 226, 236, 1), rgb(28, 156, 190) 43%, rgba(78, 226, 236, 1)), linear-gradient(132deg, rgba(78, 226, 236, 1), rgb(28, 156, 190) 43%, rgba(78, 226, 236, 1))",
        presaleTopbarColor1:
          "conic-gradient(transparent, transparent, transparent, #5271FF)",
        presaleTopbarColor2:
          "conic-gradient(transparent, transparent, transparent, #4edadd)",
        mintShare:
          "linear-gradient(184deg,rgba(148,175,247,.15) 3.27%,rgba(170,192,252,0) 158.71%)",
      },
      boxShadow: {
        icoShadowPresaleBronze: "rgba(205, 127, 50, 1) 0px 0px 10px 2px",
        icoShadowPresaleSilver: "rgba(192, 192, 192, 1) 0px 0px 10px 2px",
        icoShadowPresaleGold: "rgba(255, 215, 0, 1) 0px 0px 10px 2px",
        icoShadowPresaleDiamond: "rgba(78, 226, 236, 1) 0px 0px 10px 2px",
        shadowPresaleBox:
          "rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 16px 32px -4px",
        shadowCyanBtn: "rgba(89, 241, 246, 0.24) 0px 8px 16px 0px",
        shadowGreenBtn: "rgba(84, 214, 44, 0.24) 0px 8px 16px 0px",
        shadowRedBtn: "rgba(255, 72, 66, 0.24) 0px 8px 16px 0px",
        shadowPurpleBtn: "#5271ff40 0px 8px 16px 0px",
        createLockBox:
          "rgba(0, 0, 0, 0.24) 0px 0px 4px 0px, rgba(0, 0, 0, 0.24) 0px 24px 48px 0px",
        statsBox:
          "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
      },
      keyframes: {
        animationRotate: {
          "100%": { transform: "rotate(2turn)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.5) ", opacity: "0.2" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },

      animation: {
        animationRotate:
          "4s linear infinite normal none running animationRotate",
        animationRotateSlow:
          "10s linear infinite normal none running animationRotate",
        scaleOne: "scaleIn 4s cubic-bezier(.36,.11,.89,.32) infinite",
        scaleTwo: "scaleIn 4s cubic-bezier(.36,.11,.89,.32) 1s infinite",
        scaleThree: "scaleIn 4s cubic-bezier(.36,.11,.89,.32) 2s infinite",
        scaleFour: "scaleIn 4s cubic-bezier(.36,.11,.89,.32) 3s infinite",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(330px, 1fr))",
        "fluid-collection": "repeat(auto-fill, minmax(260px, 1fr))",
        percentBox: "repeat(auto-fill, minmax(157px, 1fr))",
      },
    },
  },
  plugins: [],
};
