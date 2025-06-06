
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'tap-down': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-20deg)' }
				},
				'tap-up-fast': {
					'0%': { transform: 'rotate(-20deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'tap-up-slow': {
					'0%': { transform: 'rotate(-20deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'palm-dip': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'15%': { transform: 'translateY(2px) rotate(-2deg)' },
					'45%': { transform: 'translateY(0) rotate(1deg)' },
					'60%': { transform: 'translateY(0) rotate(0deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'index-prox': 'tap-down 0.12s ease-out 0s forwards, tap-up-fast 0.32s ease-in 0.12s forwards',
				'index-mid': 'tap-down 0.12s ease-out 0s forwards, tap-up-fast 0.32s ease-in 0.12s forwards',
				'index-dist': 'tap-down 0.12s ease-out 0s forwards, tap-up-fast 0.32s ease-in 0.12s forwards',
				'middle-prox': 'tap-down 0.12s ease-out 0.08s forwards, tap-up-fast 0.32s ease-in 0.20s forwards',
				'middle-mid': 'tap-down 0.12s ease-out 0.08s forwards, tap-up-fast 0.32s ease-in 0.20s forwards',
				'middle-dist': 'tap-down 0.12s ease-out 0.08s forwards, tap-up-fast 0.32s ease-in 0.20s forwards',
				'ring-prox': 'tap-down 0.14s ease-out 0.14s forwards, tap-up-slow 0.40s ease-in 0.28s forwards',
				'ring-mid': 'tap-down 0.14s ease-out 0.14s forwards, tap-up-slow 0.40s ease-in 0.28s forwards',
				'ring-dist': 'tap-down 0.14s ease-out 0.14s forwards, tap-up-slow 0.40s ease-in 0.28s forwards',
				'pinky-prox': 'tap-down 0.16s ease-out 0.19s forwards, tap-up-slow 0.44s ease-in 0.35s forwards',
				'pinky-mid': 'tap-down 0.16s ease-out 0.19s forwards, tap-up-slow 0.44s ease-in 0.35s forwards',
				'pinky-dist': 'tap-down 0.16s ease-out 0.19s forwards, tap-up-slow 0.44s ease-in 0.35s forwards',
				'palm': 'palm-dip 0.60s ease-out 0s infinite'
			},
			dropShadow: {
				'bone': '0 0 4px rgba(31,41,55,0.45)'
			},
			animationIterationCount: {
				'infinite': 'infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		({ addUtilities }) => {
			addUtilities({
				'.knuckle': {
					transformBox: 'fill-box',
					transformOrigin: 'bottom center',
				},
				'.vector-fixed': {
					vectorEffect: 'non-scaling-stroke'
				},
				'.animation-infinite': {
					animationIterationCount: 'infinite'
				}
			});
		}
	],
} satisfies Config;
