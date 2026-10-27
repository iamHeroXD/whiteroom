/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        room: {
          bg: '#F5F5F2',
          surface: '#FFFFFF',
          subtle: '#ECECE7',
          border: '#DEDEDA',
          text: '#171717',
          muted: '#777777',
          darkBg: '#141414',
          darkSurface: '#1D1D1D',
          darkSubtle: '#262626',
          darkBorder: '#343434',
          darkText: '#EFEFEF',
          darkMuted: '#999999',
          accent: '#2B2B2B',
          accentLight: '#E5E5E0',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
