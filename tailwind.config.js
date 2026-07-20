/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#fafafa",
        canvasElevated: "#ffffff",
        ink: "#171717",
        body: "#4d4d4d",
        mute: "#8f8f8f",
        faint: "#a1a1a1",
        hairline: "#ebebeb",
        primary: "#171717",
        onPrimary: "#ffffff",
        link: "#0070f3",
        linkDeep: "#0761d1",
        linkSoft: "#d3e5ff",
        violet: "#7928ca",
        cyan: "#50e3c2",
        pink: "#ff0080",
        magenta: "#eb367f",
        gradientDevelopStart: "#007cf0",
        gradientDevelopEnd: "#00dfd8",
        gradientPreviewStart: "#7928ca",
        gradientPreviewEnd: "#ff0080",
        gradientShipStart: "#ff4d4d",
        gradientShipEnd: "#f9cb28",
      },
      fontFamily: {
        sans: ["PlusJakartaSans_400Regular"],
        medium: ["PlusJakartaSans_500Medium"],
        semibold: ["PlusJakartaSans_600SemiBold"],
        bold: ["PlusJakartaSans_700Bold"],
        mono: ["PlusJakartaSans_400Regular"],
      },
    },
  },
  plugins: [],
};
