/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '.cui-dark'],
  theme: {
    extend: {
      colors: {
        // CelestialUI color system using CSS custom properties
        primary: {
          25: 'var(--cui-color-primary-25)',
          50: 'var(--cui-color-primary-50)',
          100: 'var(--cui-color-primary-100)',
          200: 'var(--cui-color-primary-200)',
          300: 'var(--cui-color-primary-300)',
          400: 'var(--cui-color-primary-400)',
          500: 'var(--cui-color-primary-500)',
          600: 'var(--cui-color-primary-600)',
          700: 'var(--cui-color-primary-700)',
          800: 'var(--cui-color-primary-800)',
          900: 'var(--cui-color-primary-900)',
          950: 'var(--cui-color-primary-950)',
        },
        secondary: {
          25: 'var(--cui-color-secondary-25)',
          50: 'var(--cui-color-secondary-50)',
          100: 'var(--cui-color-secondary-100)',
          200: 'var(--cui-color-secondary-200)',
          300: 'var(--cui-color-secondary-300)',
          400: 'var(--cui-color-secondary-400)',
          500: 'var(--cui-color-secondary-500)',
          600: 'var(--cui-color-secondary-600)',
          700: 'var(--cui-color-secondary-700)',
          800: 'var(--cui-color-secondary-800)',
          900: 'var(--cui-color-secondary-900)',
          950: 'var(--cui-color-secondary-950)',
        },
        neutral: {
          0: 'var(--cui-color-neutral-0)',
          25: 'var(--cui-color-neutral-25)',
          50: 'var(--cui-color-neutral-50)',
          100: 'var(--cui-color-neutral-100)',
          200: 'var(--cui-color-neutral-200)',
          300: 'var(--cui-color-neutral-300)',
          400: 'var(--cui-color-neutral-400)',
          500: 'var(--cui-color-neutral-500)',
          600: 'var(--cui-color-neutral-600)',
          700: 'var(--cui-color-neutral-700)',
          800: 'var(--cui-color-neutral-800)',
          900: 'var(--cui-color-neutral-900)',
          950: 'var(--cui-color-neutral-950)',
        },
        success: {
          25: 'var(--cui-color-success-25)',
          50: 'var(--cui-color-success-50)',
          100: 'var(--cui-color-success-100)',
          200: 'var(--cui-color-success-200)',
          300: 'var(--cui-color-success-300)',
          400: 'var(--cui-color-success-400)',
          500: 'var(--cui-color-success-500)',
          600: 'var(--cui-color-success-600)',
          700: 'var(--cui-color-success-700)',
          800: 'var(--cui-color-success-800)',
          900: 'var(--cui-color-success-900)',
          950: 'var(--cui-color-success-950)',
        },
        warning: {
          25: 'var(--cui-color-warning-25)',
          50: 'var(--cui-color-warning-50)',
          100: 'var(--cui-color-warning-100)',
          200: 'var(--cui-color-warning-200)',
          300: 'var(--cui-color-warning-300)',
          400: 'var(--cui-color-warning-400)',
          500: 'var(--cui-color-warning-500)',
          600: 'var(--cui-color-warning-600)',
          700: 'var(--cui-color-warning-700)',
          800: 'var(--cui-color-warning-800)',
          900: 'var(--cui-color-warning-900)',
          950: 'var(--cui-color-warning-950)',
        },
        error: {
          25: 'var(--cui-color-error-25)',
          50: 'var(--cui-color-error-50)',
          100: 'var(--cui-color-error-100)',
          200: 'var(--cui-color-error-200)',
          300: 'var(--cui-color-error-300)',
          400: 'var(--cui-color-error-400)',
          500: 'var(--cui-color-error-500)',
          600: 'var(--cui-color-error-600)',
          700: 'var(--cui-color-error-700)',
          800: 'var(--cui-color-error-800)',
          900: 'var(--cui-color-error-900)',
          950: 'var(--cui-color-error-950)',
        },
        // Semantic colors
        background: {
          base: 'var(--cui-color-background-base)',
          surface: 'var(--cui-color-background-surface)',
          muted: 'var(--cui-color-background-muted)',
          hover: 'var(--cui-color-background-hover)',
          active: 'var(--cui-color-background-active)',
          disabled: 'var(--cui-color-background-disabled)',
          inverse: 'var(--cui-color-background-inverse)',
        },
        text: {
          primary: 'var(--cui-color-text-primary)',
          secondary: 'var(--cui-color-text-secondary)',
          muted: 'var(--cui-color-text-muted)',
          disabled: 'var(--cui-color-text-disabled)',
          inverse: 'var(--cui-color-text-inverse)',
          link: 'var(--cui-color-text-link)',
          'link-hover': 'var(--cui-color-text-link-hover)',
        },
        border: {
          base: 'var(--cui-color-border-base)',
          light: 'var(--cui-color-border-light)',
          strong: 'var(--cui-color-border-strong)',
          focus: 'var(--cui-color-border-focus)',
          error: 'var(--cui-color-border-error)',
          success: 'var(--cui-color-border-success)',
          warning: 'var(--cui-color-border-warning)',
        },
      },
      fontFamily: {
        sans: 'var(--cui-fontFamily-sans)',
        mono: 'var(--cui-fontFamily-mono)',
        serif: 'var(--cui-fontFamily-serif)',
      },
      fontSize: {
        xs: 'var(--cui-fontSize-xs)',
        sm: 'var(--cui-fontSize-sm)',
        base: 'var(--cui-fontSize-base)',
        lg: 'var(--cui-fontSize-lg)',
        xl: 'var(--cui-fontSize-xl)',
        '2xl': 'var(--cui-fontSize-2xl)',
        '3xl': 'var(--cui-fontSize-3xl)',
        '4xl': 'var(--cui-fontSize-4xl)',
        '5xl': 'var(--cui-fontSize-5xl)',
        '6xl': 'var(--cui-fontSize-6xl)',
      },
      borderRadius: {
        xs: 'var(--cui-radius-xs)',
        sm: 'var(--cui-radius-sm)',
        base: 'var(--cui-radius-base)',
        md: 'var(--cui-radius-md)',
        lg: 'var(--cui-radius-lg)',
        xl: 'var(--cui-radius-xl)',
        '2xl': 'var(--cui-radius-2xl)',
        '3xl': 'var(--cui-radius-3xl)',
      },
      boxShadow: {
        xs: 'var(--cui-shadow-xs)',
        sm: 'var(--cui-shadow-sm)',
        base: 'var(--cui-shadow-base)',
        md: 'var(--cui-shadow-md)',
        lg: 'var(--cui-shadow-lg)',
        xl: 'var(--cui-shadow-xl)',
        '2xl': 'var(--cui-shadow-2xl)',
        inner: 'var(--cui-shadow-inner)',
      },
      transitionDuration: {
        fast: 'var(--cui-transition-fast)',
        base: 'var(--cui-transition-base)',
        slow: 'var(--cui-transition-slow)',
        slower: 'var(--cui-transition-slower)',
      },
      spacing: {
        0: 'var(--cui-spacing-0)',
        1: 'var(--cui-spacing-1)',
        2: 'var(--cui-spacing-2)',
        3: 'var(--cui-spacing-3)',
        4: 'var(--cui-spacing-4)',
        5: 'var(--cui-spacing-5)',
        6: 'var(--cui-spacing-6)',
        8: 'var(--cui-spacing-8)',
        10: 'var(--cui-spacing-10)',
        12: 'var(--cui-spacing-12)',
        16: 'var(--cui-spacing-16)',
        20: 'var(--cui-spacing-20)',
        24: 'var(--cui-spacing-24)',
        32: 'var(--cui-spacing-32)',
        40: 'var(--cui-spacing-40)',
        48: 'var(--cui-spacing-48)',
        56: 'var(--cui-spacing-56)',
        64: 'var(--cui-spacing-64)',
      },
      animation: {
        'spin': 'cui-spin 1s linear infinite',
        'pulse': 'cui-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'cui-bounce 1s infinite',
        'fade-in': 'cui-fade-in 0.3s ease-out',
        'fade-out': 'cui-fade-out 0.3s ease-out',
        'slide-in-from-top': 'cui-slide-in-from-top 0.3s ease-out',
        'slide-in-from-bottom': 'cui-slide-in-from-bottom 0.3s ease-out',
        'slide-in-from-left': 'cui-slide-in-from-left 0.3s ease-out',
        'slide-in-from-right': 'cui-slide-in-from-right 0.3s ease-out',
        'scale-in': 'cui-scale-in 0.2s ease-out',
        'scale-out': 'cui-scale-out 0.2s ease-out',
      },
      keyframes: {
        'cui-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        'cui-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' }
        },
        'cui-bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        },
        'cui-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'cui-fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        'cui-slide-in-from-top': {
          from: { opacity: '0', transform: 'translateY(-100%)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'cui-slide-in-from-bottom': {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'cui-slide-in-from-left': {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'cui-slide-in-from-right': {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'cui-scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        'cui-scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' }
        }
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1010',
        'fixed': '1020',
        'modal-backdrop': '1030',
        'modal': '1040',
        'popover': '1050',
        'tooltip': '1060',
        'toast': '1070',
        'maximum': '2147483647',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
