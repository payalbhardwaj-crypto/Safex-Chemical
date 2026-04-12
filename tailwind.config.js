/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Corporate Design System (light pages / inner pages) ──────
        'corp-green':       '#2E7D32',
        'corp-green-light': '#66BB6A',
        'corp-green-dark':  '#1B5E20',
        'corp-green-bg':    '#E8F5E9',
        'corp-text':        '#1A1A1A',
        'corp-text-2':      '#666666',
        'corp-border':      '#E0E0E0',
        'corp-bg':          '#FFFFFF',
        'corp-surface':     '#F7F7F7',

        // ── Dark Theme Palette (homepage) ────────────────────────────
        'dark-bg':          '#07100a',   // near-black with deep green tint
        'dark-surface':     '#0b160d',   // slightly lighter for alternating sections
        'dark-card':        '#0f1e11',   // card base (before glass)
        'dark-border':      '#1a2e1d',   // subtle border on dark
        'dark-text':        '#e8f5e9',   // near-white, faint green tint
        'dark-text-2':      '#6b9e6f',   // muted green-grey for body
        'glow-green':       '#22c55e',   // bright green for glows/accents on dark bg
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // light
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 6px 20px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05)',
        'nav':        '0 1px 4px rgba(0,0,0,0.08)',
        'green':      '0 4px 14px rgba(46,125,50,0.25)',
        'modal':      '0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)',
        // dark theme
        'glass':      '0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-hover':'0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.09)',
        'glow-sm':    '0 0 16px rgba(34,197,94,0.18)',
        'glow-md':    '0 0 28px rgba(34,197,94,0.22)',
        'glow-btn':   '0 4px 20px rgba(34,197,94,0.30)',
      },
      borderRadius: {
        'card': '10px',
        'glass': '14px',
      },
      backgroundImage: {
        'dark-grad':    'linear-gradient(135deg, #060e07 0%, #07120a 50%, #060e07 100%)',
        'green-glow':   'radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%)',
        'green-glow-b': 'radial-gradient(ellipse at 50% 100%, rgba(34,197,94,0.10) 0%, transparent 65%)',
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in':     'fadeIn 0.25s ease-out',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
