import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2EFEA',
        foreground: '#2A2A2A',
        muted: '#9A9490',
        border: 'rgba(42,42,42,0.09)',
        cream: '#EEE9EA',
        sage: '#B5C8AB',
        'sage-dark': '#768F87',
        series: {
          qi: '#4A6B8A',
          hl: '#C47B7B',
          sc: '#7B6B9E',
          co: '#C4784A',
          as: '#5E8E8A',
          ts: '#B09070',
        },
      },
      fontFamily: {
        display: ['var(--f-display)', 'sans-serif'],
        zh: ['var(--f-zh)', 'serif'],
        'zh-sans': ['var(--f-zh-sans)', 'sans-serif'],
        body: ['var(--f-body)', 'sans-serif'],
        mono: ['var(--f-mono)', 'monospace'],
        elegant: ['var(--f-elegant)', 'serif'],
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        'ink-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        breathe: 'breathe 3.5s ease-in-out infinite',
        'ink-reveal': 'ink-reveal 1.1s cubic-bezier(.4,0,.2,1) forwards',
        'fade-slide': 'fade-slide 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
