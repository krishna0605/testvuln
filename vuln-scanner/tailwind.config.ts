import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0ea5e9",
        "background-light": "#f5f7f8",
        "background-dark": "#0B0D12",
        "heading": "#F0F0F0",
        "body-text": "#A0A0B0",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.05)",
        "severity-critical": "#ef4444",
        "severity-high": "#f97316",
        "severity-medium": "#eab308",
        "severity-low": "#3b82f6",
        "severity-info": "#6b7280",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'neon-primary': '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary/30)',
        'glow': '0 0 15px 0 rgba(14, 165, 233, 0.5)',
        'cyan-glow': '0 0 15px 0 rgba(14, 165, 233, 0.5), 0 0 5px 0 rgba(14, 165, 233, 0.6)',
        'green-glow': '0 0 8px 0 rgba(34, 197, 94, 0.6)',
        'red-glow': '0 0 8px 0 rgba(239, 68, 68, 0.6)',
        'yellow-glow': '0 0 8px 0 rgba(234, 179, 8, 0.6)',
        'cyan-glow-hover': '0 0 15px 0 rgba(14, 165, 233, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
