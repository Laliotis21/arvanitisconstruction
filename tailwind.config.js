/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          soft: '#111113',
          card: '#161618',
          line: '#26262A',
        },
        gold: {
          DEFAULT: '#C79A5B',
          light: '#E4C489',
          deep: '#A67C42',
          muted: '#8A6C3E',
        },
        bone: '#EDE9E2',
        stone: '#A7A29A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.42em',
        wide2: '0.28em',
      },
      maxWidth: {
        content: '1240px',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #C79A5B, transparent)',
        'gold-fade': 'linear-gradient(135deg, #E4C489 0%, #C79A5B 45%, #A67C42 100%)',
        'ink-vignette':
          'radial-gradient(120% 120% at 50% 0%, #161618 0%, #0B0B0C 60%, #060607 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(199,154,91,0.35)',
        card: '0 24px 60px -30px rgba(0,0,0,0.85)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
