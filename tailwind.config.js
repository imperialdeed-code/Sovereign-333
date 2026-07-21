module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'matrix-node',
    'rank-prime',
    'rank-gold',
    'rank-golden',
    'rank-silver',
    'rank-red',
    'rank-imperial',
    'node-active',
    'aspect-square',
    'bg-slate-950',
    'border'
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a1128',
        blueCore: '#2563eb',
        blueLight: '#60a5fa',
        royal: '#a855f7'
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [],
}
