/* eslint-disable @typescript-eslint/no-var-requires */
const sharedConfig = require('tailwind-config')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    ...sharedConfig.default.theme,
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
        display: ['var(--font-alata)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
