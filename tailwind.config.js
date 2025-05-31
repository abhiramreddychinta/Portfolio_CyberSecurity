/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220, 30%, 10%)',
        foreground: 'hsl(220, 10%, 98%)', // Increased brightness for better contrast
        primary: {
          DEFAULT: 'hsl(230, 80%, 60%)', // Increased saturation and brightness
          foreground: 'hsl(0, 0%, 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(220, 20%, 20%)',
          foreground: 'hsl(220, 10%, 98%)' // Increased brightness
        },
        accent: {
          DEFAULT: 'hsl(280, 90%, 65%)', // Increased saturation and brightness
          foreground: 'hsl(0, 0%, 100%)'
        },
        card: {
          DEFAULT: 'hsl(220, 25%, 15%)',
          foreground: 'hsl(220, 10%, 98%)' // Increased brightness
        },
        muted: {
          DEFAULT: 'hsl(220, 20%, 20%)',
          foreground: 'hsl(220, 10%, 80%)' // Increased brightness
        },
        border: 'hsl(220, 20%, 25%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      }
    },
  },
  plugins: [],
}
