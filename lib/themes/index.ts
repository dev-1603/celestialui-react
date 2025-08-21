import type { ThemeConfig, ThemeTokens } from '../types'
import {
  colorConfig,
  lightModeColors,
  darkModeColors,
  generateColorCSSVariables,
  createCustomColorTheme,
  type ColorPalette
} from './colors'

// ============================================================================
// COMPLETE THEME TOKENS INCLUDING NEW COLOR SYSTEM
// ============================================================================

export const defaultTokens: ThemeTokens = {
  colors: {
    // Brand palettes
    primary: colorConfig.primary,
    secondary: colorConfig.secondary,
    neutral: colorConfig.neutral,

    // Status palettes
    success: colorConfig.success,
    warning: colorConfig.warning,
    error: colorConfig.error,
    info: colorConfig.info,

    // Semantic tokens (light mode)
    background: lightModeColors.background,
    text: lightModeColors.text,
    border: lightModeColors.border,
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SFMono-Regular", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      serif: 'Georgia, "Times New Roman", serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  borderRadius: {
    none: '0',
    xs: '0.125rem',
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    '2xl': '0 50px 100px -25px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

// ============================================================================
// DARK MODE TOKENS
// ============================================================================

export const darkTokens: Partial<ThemeTokens> = {
  colors: {
    ...defaultTokens.colors,
    // Override with dark mode semantic colors
    background: darkModeColors.background,
    text: darkModeColors.text,
    border: darkModeColors.border,
  },
  // Adjust shadows for dark mode
  shadows: {
    ...defaultTokens.shadows,
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.25)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
    base: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.4)',
    '2xl': '0 50px 100px -25px rgb(0 0 0 / 0.5)',
  },
}

// ============================================================================
// FRAMEWORK-SPECIFIC THEMES
// ============================================================================

export const tailwindTheme: ThemeConfig = {
  framework: 'tailwind',
  mode: 'light',
  tokens: defaultTokens,
}

export const scssTheme: ThemeConfig = {
  framework: 'scss',
  mode: 'light',
  tokens: defaultTokens,
}

export const materialTheme: ThemeConfig = {
  framework: 'material',
  mode: 'light',
  tokens: {
    ...defaultTokens,
    colors: {
      ...defaultTokens.colors,
      // Material Design primary color
      primary: {
        25: '#e8f5e8',
        50: '#c8e6c9',
        100: '#a5d6a7',
        200: '#81c784',
        300: '#66bb6a',
        400: '#4caf50', // Material Green
        500: '#43a047',
        600: '#388e3c',
        700: '#2e7d32',
        800: '#1b5e20',
        900: '#0d4715',
        950: '#0a2e0f',
      },
    },
    borderRadius: {
      ...defaultTokens.borderRadius,
      base: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
    },
  },
}

export const cssTheme: ThemeConfig = {
  framework: 'css',
  mode: 'light',
  tokens: defaultTokens,
  customProperties: {
    '--cui-primary': colorConfig.primary[400],
    '--cui-secondary': colorConfig.secondary[400],
    '--cui-success': colorConfig.success[400],
    '--cui-warning': colorConfig.warning[400],
    '--cui-error': colorConfig.error[400],
    '--cui-background': lightModeColors.background.base,
    '--cui-surface': lightModeColors.background.surface,
    '--cui-text': lightModeColors.text.primary,
    '--cui-border': lightModeColors.border.base,
  },
}

// ============================================================================
// PRESET COLOR THEMES
// ============================================================================

/**
 * Blue Ocean Theme - Cool, professional blue tones
 */
export const blueOceanTheme = createTheme({
  name: 'Blue Ocean',
  colors: createCustomColorTheme({
    primary: {
      25: '#f0f9ff',
      50: '#e0f2fe',
      100: '#bae6fd',
      200: '#7dd3fc',
      300: '#38bdf8',
      400: '#0ea5e9',
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#082f49',
      950: '#0c1821',
    }
  })
})

/**
 * Forest Green Theme - Nature-inspired green palette
 */
export const forestGreenTheme = createTheme({
  name: 'Forest Green',
  colors: createCustomColorTheme({
    primary: {
      25: '#f0fdf4',
      50: '#dcfce7',
      100: '#bbf7d0',
      200: '#86efac',
      300: '#4ade80',
      400: '#22c55e',
      500: '#16a34a',
      600: '#15803d',
      700: '#166534',
      800: '#14532d',
      900: '#052e16',
      950: '#021c0e',
    }
  })
})

/**
 * Sunset Orange Theme - Warm, energetic orange tones
 */
export const sunsetOrangeTheme = createTheme({
  name: 'Sunset Orange',
  colors: createCustomColorTheme({
    primary: {
      25: '#fff7ed',
      50: '#ffedd5',
      100: '#fed7aa',
      200: '#fdba74',
      300: '#fb923c',
      400: '#f97316',
      500: '#ea580c',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7c2d12',
      950: '#431407',
    }
  })
})

/**
 * Purple Dreams Theme - Creative, modern purple palette
 */
export const purpleDreamsTheme = createTheme({
  name: 'Purple Dreams',
  colors: createCustomColorTheme({
    primary: {
      25: '#faf5ff',
      50: '#f3e8ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fc',
      400: '#a855f7',
      500: '#9333ea',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    }
  })
})

// ============================================================================
// THEME UTILITIES
// ============================================================================

/**
 * Create a complete theme configuration
 */
export function createTheme(config: {
  name?: string
  framework?: 'tailwind' | 'scss' | 'css' | 'material'
  mode?: 'light' | 'dark' | 'auto'
  colors?: ReturnType<typeof createCustomColorTheme>
  tokens?: Partial<ThemeTokens>
  customProperties?: Record<string, string>
}): ThemeConfig {
  const baseTokens = config.colors ? {
    ...defaultTokens,
    colors: {
      ...defaultTokens.colors,
      ...config.colors,
    }
  } : defaultTokens

  return {
    framework: config.framework || 'tailwind',
    mode: config.mode || 'light',
    tokens: {
      ...baseTokens,
      ...config.tokens,
    },
    customProperties: config.customProperties,
  }
}

/**
 * Get theme tokens with dark mode support
 */
export function getThemeTokens(theme: ThemeConfig): ThemeTokens {
  if (theme.mode === 'dark') {
    return {
      ...theme.tokens,
      colors: {
        ...theme.tokens.colors,
        background: darkModeColors.background,
        text: darkModeColors.text,
        border: darkModeColors.border,
      },
      shadows: {
        ...theme.tokens.shadows,
        ...darkTokens.shadows,
      },
    } as ThemeTokens
  }
  return theme.tokens as ThemeTokens
}

/**
 * Enhanced CSS variable generation with new color system
 */
export function generateCSSVariables(tokens: ThemeTokens, mode: 'light' | 'dark' = 'light'): Record<string, string> {
  const cssVars: Record<string, string> = {}

  // Generate color variables using the new color system
  const colorVars = generateColorCSSVariables(mode)
  Object.assign(cssVars, colorVars)

  // Generate spacing variables
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars[`--cui-spacing-${key}`] = value
  })

  // Generate typography variables
  Object.entries(tokens.typography).forEach(([category, values]) => {
    Object.entries(values).forEach(([key, value]) => {
      cssVars[`--cui-${category}-${key.replace('2xl', '2xl').replace('3xl', '3xl').replace('4xl', '4xl').replace('5xl', '5xl').replace('6xl', '6xl')}`] = value
    })
  })

  // Generate border radius variables
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars[`--cui-radius-${key.replace('2xl', '2xl').replace('3xl', '3xl')}`] = value
  })

  // Generate shadow variables
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    cssVars[`--cui-shadow-${key.replace('2xl', '2xl')}`] = value
  })

  // Generate transition variables
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    cssVars[`--cui-transition-${key}`] = value
  })

  return cssVars
}

/**
 * Theme validation utility
 */
export function validateTheme(theme: ThemeConfig): boolean {
  try {
    // Basic validation
    if (!theme.framework || !theme.mode || !theme.tokens) {
      return false
    }

    // Validate required color palettes
    const requiredColors = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error']
    for (const colorKey of requiredColors) {
      if (!theme.tokens.colors[colorKey as keyof typeof theme.tokens.colors]) {
        return false
      }
    }

    return true
  } catch {
    return false
  }
}

/**
 * Get accessible color pair (foreground/background)
 */
export function getAccessibleColorPair(backgroundColor: string, theme: ThemeConfig) {
  // Simple heuristic - in production you'd use proper contrast calculation
  const tokens = getThemeTokens(theme)
  const isLight = backgroundColor.includes('50') || backgroundColor.includes('100') || backgroundColor.includes('200')

  return {
    background: backgroundColor,
    foreground: isLight ? tokens.colors.text.primary : tokens.colors.text.inverse,
    border: isLight ? tokens.colors.border.base : tokens.colors.border.strong,
  }
}

// ============================================================================
// EXPORTS
// ============================================================================

// Re-export color system
export {
  colorConfig,
  lightModeColors,
  darkModeColors,
  generateColorCSSVariables,
  createCustomColorTheme,
} from './colors'

// Export preset themes
export const presetThemes = {
  default: tailwindTheme,
  blueOcean: blueOceanTheme,
  forestGreen: forestGreenTheme,
  sunsetOrange: sunsetOrangeTheme,
  purpleDreams: purpleDreamsTheme,
  material: materialTheme,
  scss: scssTheme,
  css: cssTheme,
}

// Default export
export default {
  defaultTokens,
  darkTokens,
  presetThemes,
  utils: {
    createTheme,
    getThemeTokens,
    generateCSSVariables,
    validateTheme,
    getAccessibleColorPair,
  }
}
