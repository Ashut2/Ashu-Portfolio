import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Retro terminal theme colors
        'terminal-bg': '#1a1a2e',
        'terminal-bg-light': '#1e1e2f',
        'terminal-bg-dark': '#0d0d0d',
        'terminal-accent': '#f9bd2b',
        'terminal-accent-2': '#e05c2d',
        'terminal-text': '#f1f1f1',
        'terminal-muted': '#888888',
        'terminal-border': '#2a2a3e',
        'terminal-border-light': '#333333',
      },
      fontFamily: {
        'sans': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #f9bd2b, 0 0 10px #f9bd2b' },
          'to': { boxShadow: '0 0 10px #f9bd2b, 0 0 20px #f9bd2b' },
        },
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle, #2a2a3e 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
      },
    },
  },
  plugins: [],
} satisfies Config;
