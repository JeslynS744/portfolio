/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#faf9f6',
          subtle: '#f4f3ef',
          muted: '#ebe9e3',
        },
        ink: {
          DEFAULT: '#121212',
          pure: '#000000',
          muted: '#555555',
          faint: '#888888',
          border: '#e4e2dc',
          borderDark: '#262626',
        },
        mono: {
          50: '#faf9f6',
          100: '#f4f3ef',
          200: '#e7e5df',
          300: '#d3d0c7',
          400: '#9e9a90',
          500: '#6c685f',
          600: '#4f4c45',
          700: '#383631',
          800: '#23221e',
          900: '#141412',
          950: '#0a0a09',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
