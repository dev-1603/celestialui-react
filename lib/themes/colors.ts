/**
 * CelestialUI Color Palette Configuration
 *
 * Centralized color system that can be easily customized from a single location.
 * Supports light/dark modes and provides semantic color tokens.
 *
 * To customize colors:
 * 1. Modify the color values in the palettes below
 * 2. Colors will automatically apply to both light and dark modes
 * 3. Semantic tokens will inherit from the base palette
 */

// ============================================================================
// BASE COLOR PALETTES
// ============================================================================

/**
 * Primary Brand Colors
 * Main brand color used for primary actions, links, and highlights
 */
export const primaryPalette = {
  25: '#f0f9ff',
  50: '#e0f2fe',
  100: '#bae6fd',
  200: '#7dd3fc',
  300: '#38bdf8',
  400: '#0ea5e9', // Main brand color
  500: '#0284c7',
  600: '#0369a1',
  700: '#075985',
  800: '#0c4a6e',
  900: '#082f49',
  950: '#0c1821'
} as const

/**
 * Secondary Brand Colors
 * Supporting colors for secondary actions and accents
 */
export const secondaryPalette = {
  25: '#f8fafc',
  50: '#f1f5f9',
  100: '#e2e8f0',
  200: '#cbd5e1',
  300: '#94a3b8',
  400: '#64748b', // Main secondary color
  500: '#475569',
  600: '#334155',
  700: '#1e293b',
  800: '#0f172a',
  900: '#020617',
  950: '#010409'
} as const

/**
 * Neutral/Gray Scale
 * Used for text, borders, and backgrounds
 */
export const neutralPalette = {
  0: '#ffffff',
  25: '#fafafa',
  50: '#f5f5f5',
  100: '#e5e5e5',
  200: '#d4d4d4',
  300: '#a3a3a3',
  400: '#737373',
  500: '#525252',
  600: '#404040',
  700: '#262626',
  800: '#171717',
  900: '#0a0a0a',
  950: '#050505'
} as const

/**
 * Semantic Color Palettes
 * Status and feedback colors
 */
export const successPalette = {
  25: '#f0fdf4',
  50: '#dcfce7',
  100: '#bbf7d0',
  200: '#86efac',
  300: '#4ade80',
  400: '#22c55e', // Main success color
  500: '#16a34a',
  600: '#15803d',
  700: '#166534',
  800: '#14532d',
  900: '#052e16',
  950: '#021c0e'
} as const

export const warningPalette = {
  25: '#fffbeb',
  50: '#fef3c7',
  100: '#fde68a',
  200: '#fcd34d',
  300: '#fbbf24',
  400: '#f59e0b', // Main warning color
  500: '#d97706',
  600: '#b45309',
  700: '#92400e',
  800: '#78350f',
  900: '#451a03',
  950: '#2d0a02'
} as const

export const errorPalette = {
  25: '#fef2f2',
  50: '#fee2e2',
  100: '#fecaca',
  200: '#fca5a5',
  300: '#f87171',
  400: '#ef4444', // Main error color
  500: '#dc2626',
  600: '#b91c1c',
  700: '#991b1b',
  800: '#7f1d1d',
  900: '#450a0a',
  950: '#2d0505'
} as const

export const infoPalette = {
  25: '#f0f9ff',
  50: '#e0f2fe',
  100: '#bae6fd',
  200: '#7dd3fc',
  300: '#38bdf8',
  400: '#0ea5e9', // Main info color (same as primary)
  500: '#0284c7',
  600: '#0369a1',
  700: '#075985',
  800: '#0c4a6e',
  900: '#082f49',
  950: '#0c1821'
} as const

// ============================================================================
// COLOR CONFIGURATION
// ============================================================================

/**
 * Main Color Configuration
 * All brand and semantic colors in one place for easy customization
 */
export const colorConfig = {
  primary: primaryPalette,
  secondary: secondaryPalette,
  neutral: neutralPalette,
  success: successPalette,
  warning: warningPalette,
  error: errorPalette,
  info: infoPalette
} as const

// ============================================================================
// LIGHT MODE SEMANTIC TOKENS
// ============================================================================

export const lightModeColors = {
  // Background colors
  background: {
    base: neutralPalette[0],        // Pure white
    surface: neutralPalette[0],     // White for cards, modals
    muted: neutralPalette[50],      // Light gray for subtle backgrounds
    hover: neutralPalette[100],     // Hover state backgrounds
    active: neutralPalette[200],    // Active state backgrounds
    disabled: neutralPalette[100],  // Disabled backgrounds
    inverse: neutralPalette[900],   // Dark backgrounds for contrast
  },

  // Text colors
  text: {
    primary: neutralPalette[900],   // Main text
    secondary: neutralPalette[600], // Secondary text
    muted: neutralPalette[400],     // Muted text
    disabled: neutralPalette[300],  // Disabled text
    inverse: neutralPalette[0],     // Text on dark backgrounds
    link: primaryPalette[500],      // Link text
    linkHover: primaryPalette[600], // Link hover state
  },

  // Border colors
  border: {
    base: neutralPalette[200],      // Default borders
    light: neutralPalette[100],     // Light borders
    strong: neutralPalette[300],    // Strong borders
    focus: primaryPalette[400],     // Focus ring borders
    error: errorPalette[300],       // Error borders
    success: successPalette[300],   // Success borders
    warning: warningPalette[300],   // Warning borders
  },

  // Brand colors (inherit from palettes)
  primary: primaryPalette,
  secondary: secondaryPalette,
  neutral: neutralPalette,

  // Status colors (inherit from palettes)
  success: successPalette,
  warning: warningPalette,
  error: errorPalette,
  info: infoPalette,
} as const

// ============================================================================
// DARK MODE SEMANTIC TOKENS
// ============================================================================

export const darkModeColors = {
  // Background colors (inverted approach)
  background: {
    base: neutralPalette[900],      // Dark base
    surface: neutralPalette[800],   // Slightly lighter for cards
    muted: neutralPalette[700],     // Muted backgrounds
    hover: neutralPalette[700],     // Hover state
    active: neutralPalette[600],    // Active state
    disabled: neutralPalette[800],  // Disabled backgrounds
    inverse: neutralPalette[0],     // Light backgrounds for contrast
  },

  // Text colors (inverted)
  text: {
    primary: neutralPalette[50],    // Main text (near white)
    secondary: neutralPalette[300], // Secondary text
    muted: neutralPalette[400],     // Muted text
    disabled: neutralPalette[600],  // Disabled text
    inverse: neutralPalette[900],   // Text on light backgrounds
    link: primaryPalette[300],      // Lighter link color for dark mode
    linkHover: primaryPalette[200], // Link hover state
  },

  // Border colors (adjusted for dark mode)
  border: {
    base: neutralPalette[700],      // Default borders
    light: neutralPalette[800],     // Light borders
    strong: neutralPalette[600],    // Strong borders
    focus: primaryPalette[400],     // Focus ring (keep bright)
    error: errorPalette[500],       // Error borders (brighter)
    success: successPalette[500],   // Success borders (brighter)
    warning: warningPalette[500],   // Warning borders (brighter)
  },

  // Brand colors (same palettes, components will use appropriate shades)
  primary: primaryPalette,
  secondary: secondaryPalette,
  neutral: neutralPalette,

  // Status colors (same palettes)
  success: successPalette,
  warning: warningPalette,
  error: errorPalette,
  info: infoPalette,
} as const

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get color value from palette
 */
export function getColorValue(
  palette: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info',
  shade: keyof typeof primaryPalette
): string {
  return colorConfig[palette][shade] || colorConfig.neutral[500]
}

/**
 * Get semantic color based on theme mode
 */
export function getSemanticColor(
  category: keyof typeof lightModeColors,
  key: string,
  mode: 'light' | 'dark' = 'light'
): string {
  const colors = mode === 'dark' ? darkModeColors : lightModeColors
  const categoryColors = colors[category] as any
  return categoryColors?.[key] || colors.neutral[500]
}

/**
 * Generate CSS custom properties from color configuration
 */
export function generateColorCSSVariables(mode: 'light' | 'dark' = 'light') {
  const colors = mode === 'dark' ? darkModeColors : lightModeColors
  const cssVars: Record<string, string> = {}

  // Generate semantic color variables
  Object.entries(colors).forEach(([category, categoryColors]) => {
    if (typeof categoryColors === 'object') {
      Object.entries(categoryColors).forEach(([key, value]) => {
        if (typeof value === 'string') {
          cssVars[`--cui-color-${category}-${key}`] = value
        } else if (typeof value === 'object') {
          // Handle nested color objects (like palette colors)
          Object.entries(value).forEach(([shade, shadeValue]) => {
            cssVars[`--cui-color-${category}-${shade}`] = shadeValue as string
          })
        }
      })
    }
  })

  return cssVars
}

/**
 * Create custom color theme
 * Override specific colors while maintaining the system
 */
export function createCustomColorTheme(overrides: {
  primary?: Partial<typeof primaryPalette>
  secondary?: Partial<typeof secondaryPalette>
  success?: Partial<typeof successPalette>
  warning?: Partial<typeof warningPalette>
  error?: Partial<typeof errorPalette>
  neutral?: Partial<typeof neutralPalette>
}) {
  return {
    ...colorConfig,
    ...overrides,
    // Merge each palette with overrides
    primary: { ...colorConfig.primary, ...overrides.primary },
    secondary: { ...colorConfig.secondary, ...overrides.secondary },
    success: { ...colorConfig.success, ...overrides.success },
    warning: { ...colorConfig.warning, ...overrides.warning },
    error: { ...colorConfig.error, ...overrides.error },
    neutral: { ...colorConfig.neutral, ...overrides.neutral },
  }
}

/**
 * Color accessibility utilities
 */
export function getContrastColor(backgroundColor: string): 'light' | 'dark' {
  // Simple heuristic - in a real implementation, you'd calculate actual contrast
  const isLight = backgroundColor.includes('50') ||
                  backgroundColor.includes('100') ||
                  backgroundColor.includes('200') ||
                  backgroundColor === neutralPalette[0]
  return isLight ? 'dark' : 'light'
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  config: colorConfig,
  light: lightModeColors,
  dark: darkModeColors,
  palettes: {
    primary: primaryPalette,
    secondary: secondaryPalette,
    neutral: neutralPalette,
    success: successPalette,
    warning: warningPalette,
    error: errorPalette,
    info: infoPalette,
  },
  utils: {
    getColorValue,
    getSemanticColor,
    generateColorCSSVariables,
    createCustomColorTheme,
    getContrastColor,
  }
}
