import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '360px',  // Example custom breakpoint
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        primary_darkblue: '#0A192F',
        secondary_lightgray: '#BFD2F5',
        secondary_darkgray: '#8992B0',
        comp_green: {
          DEFAULT: '#47BEA6',
          100: '#4EC7B1'
        },
      },
      fontFamily: {
        'oriya': "var(--font-oriya)",
      },
      backgroundImage: {
        'pattern': "url('/pattern.svg')",
      }
    },
  },
  plugins: [],
}
export default config
