/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#f9f3e3',
          200: '#f2e4c3',
          300: '#e9d09a',
          400: '#ddb86e',
          500: '#d4a54a',
          600: '#c4903d',
          700: '#a37334',
          800: '#845c30',
          900: '#6c4c2a',
        },
        navy: {
          50: '#f4f6f9',
          100: '#e8ecf2',
          200: '#cdd6e3',
          300: '#a3b5cc',
          400: '#728fb1',
          500: '#517298',
          600: '#3f5b7f',
          700: '#344a67',
          800: '#2e4057',
          900: '#1a2433',
          950: '#0f1520',
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}