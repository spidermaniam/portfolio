
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
				// Anatomically correct finger tapping animations
				'finger-tap-proximal': {
					'0%': { transform: 'rotate(0deg)' },
					'15%': { transform: 'rotate(-20deg)' },
					'45%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'finger-tap-middle': {
					'0%': { transform: 'rotate(0deg)' },
					'15%': { transform: 'rotate(-10deg)' },
					'45%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'finger-tap-distal': {
					'0%': { transform: 'rotate(0deg)' },
					'15%': { transform: 'rotate(-5deg)' },
					'45%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				// Palm motion with realistic dip and rotation
				'palm-motion': {
					'0%': { transform: 'translateY(0px) rotate(0deg)' },
					'15%': { transform: 'translateY(2px) rotate(-2deg)' },
					'45%': { transform: 'translateY(0px) rotate(1deg)' },
					'60%': { transform: 'translateY(0px) rotate(0deg)' },
					'100%': { transform: 'translateY(0px) rotate(0deg)' }
				},
				// Thumb subtle response
				'thumb-response': {
					'0%': { transform: 'rotate(0deg)' },
					'15%': { transform: 'rotate(-1deg)' },
					'45%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				
				// Index finger (no delay)
				'index-proximal': 'finger-tap-proximal 1.6s ease-in-out 0s infinite',
				'index-middle': 'finger-tap-middle 1.6s ease-in-out 0s infinite',
				'index-distal': 'finger-tap-distal 1.6s ease-in-out 0s infinite',
				
				// Middle finger (0.2s delay)
				'middle-proximal': 'finger-tap-proximal 1.6s ease-in-out 0.2s infinite',
				'middle-middle': 'finger-tap-middle 1.6s ease-in-out 0.2s infinite',
				'middle-distal': 'finger-tap-distal 1.6s ease-in-out 0.2s infinite',
				
				// Ring finger (0.4s delay)
				'ring-proximal': 'finger-tap-proximal 1.6s ease-in-out 0.4s infinite',
				'ring-middle': 'finger-tap-middle 1.6s ease-in-out 0.4s infinite',
				'ring-distal': 'finger-tap-distal 1.6s ease-in-out 0.4s infinite',
				
				// Pinky finger (0.6s delay)
				'pinky-proximal': 'finger-tap-proximal 1.6s ease-in-out 0.6s infinite',
				'pinky-middle': 'finger-tap-middle 1.6s ease-in-out 0.6s infinite',
				'pinky-distal': 'finger-tap-distal 1.6s ease-in-out 0.6s infinite',
				
				// Palm and thumb
				'palm': 'palm-motion 1.6s ease-in-out infinite',
				'thumb': 'thumb-response 1.6s ease-in-out infinite'
			},
			dropShadow: {
				'bone': '0 0 4px rgba(31,41,55,0.45)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		({ addUtilities }) => {
			addUtilities({
				'.bone-segment': {
					transformBox: 'fill-box',
				},
				'.vector-fixed': {
					vectorEffect: 'non-scaling-stroke'
				}
			});
		}
	],
} satisfies Config;
