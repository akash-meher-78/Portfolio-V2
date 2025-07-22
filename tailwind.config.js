// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // make sure it's correct
  theme: {
    extend: {
      screen: {
        'max-sm': { 'raw': '(max-width: 425px)' }
      },
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
      },
      keyframes: {
        "fade-in": {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 0.8, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
