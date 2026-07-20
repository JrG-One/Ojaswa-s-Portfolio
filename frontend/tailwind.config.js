/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Outfit', 'Inter', 'sans-serif'],
  			mono: ['JetBrains Mono', 'monospace'],
  			display: ['Outfit', 'sans-serif'],
  		},
  		fontSize: {
  			// Fluid typography overrides per ui-typography spec
  			'fluid-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
  			'fluid-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
  			'fluid-lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
  			'fluid-xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
  			'fluid-2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
  			'fluid-3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
  			'fluid-4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
  			'fluid-5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
            scan: {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(800px)' }
            }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
            'scan': 'scan 2s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};