/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Corporate Design System ─────────────────────────
        'corp-green':       '#2E7D32',  // Primary CTA, icons
        'corp-green-light': '#66BB6A',  // Accents, hover states
        'corp-green-dark':  '#1B5E20',  // Button hover, deep accent
        'corp-green-bg':    '#E8F5E9',  // Tag backgrounds, tints
        'corp-text':        '#1A1A1A',  // Headings, body
        'corp-text-2':      '#666666',  // Secondary text
        'corp-border':      '#E0E0E0',  // Card borders, dividers
        'corp-bg':          '#FFFFFF',  // Page background
        'corp-surface':     '#F5F5F5',  // Section alternates
        'corp-blue':        '#1E3A8A',  // Optional link/highlight
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)',
        'nav':        '0 1px 4px rgba(0,0,0,0.09)',
        'green':      '0 4px 14px rgba(46,125,50,0.22)',
        'modal':      '0 20px 60px rgba(0,0,0,0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
