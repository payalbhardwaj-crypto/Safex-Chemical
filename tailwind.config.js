/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#006400',
        'primary':      '#4CAF50',
        'accent':       '#FF9800',
        'sky-blue':     '#2196F3',
        'beige':        '#F5F0E8',
        'dark-bg':      '#0d1a0d',
        'dark-card':    '#1a2e1a',
        'dark-border':  '#2a4a2a',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
