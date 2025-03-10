/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9f6',
          100: '#e6f3ea',
          200: '#cce7d5',
          300: '#a3d2b3',
          400: '#73b68c',
          500: '#4e9a6e',
          600: '#3a7d57',
          700: '#316548',
          800: '#2b513c',
          900: '#254434',
          950: '#132619',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dbe6',
          300: '#adbdcf',
          400: '#839ab3',
          500: '#637d99',
          600: '#4d647e',
          700: '#405267',
          800: '#384656',
          900: '#323d4a',
          950: '#202731',
        },
        accent: {
          50: '#fdf6ef',
          100: '#f9ebdc',
          200: '#f3d4b7',
          300: '#eab688',
          400: '#e39158',
          500: '#dc7232',
          600: '#cb5827',
          700: '#a94222',
          800: '#883722',
          900: '#6f301e',
          950: '#3c170e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(115, 182, 140, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 20s linear infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'soft-light': 'linear-gradient(to right, #f5f9f6, #ebeef3, #f5f9f6)',
        'soft-dark': 'linear-gradient(to right, #202731, #132619, #202731)',
      },
    },
  },
  plugins: [],
};