/**
 * Design System Generator
 *
 * This utility generates complete CSS variable sets from the design system configuration
 * and theme data, ensuring consistency across the entire application.
 */

import designSystemConfig from '../config/design-system-config.json'
import themesData from '../../lib/themes/themes.json'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
}

export interface GeneratedColorSystem {
  [key: string]: string
}

/**
 * Converts hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

/**
 * Adjusts color brightness
 */
function adjustColorBrightness(hex: string, adjustment: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex

  const newR = Math.max(0, Math.min(255, rgb.r + adjustment))
  const newG = Math.max(0, Math.min(255, rgb.g + adjustment))
  const newB = Math.max(0, Math.min(255, rgb.b + adjustment))

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
}

/**
 * Creates RGBA color with opacity
 */
function createRgbaColor(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
}

/**
 * Generates all color variants for a single color
 */
function generateColorVariants(colorName: string, colorValue: string): GeneratedColorSystem {
  const variants: GeneratedColorSystem = {}
  const config = designSystemConfig.colorSystem.variants

  // Base color
  variants[colorName] = colorValue

  // Opacity variants
  config.opacity.forEach(opacity => {
    if (opacity.suffix) {
      variants[`${colorName}${opacity.suffix}`] = createRgbaColor(colorValue, opacity.value)
    }
  })

  // Shade variants
  config.shades.forEach(shade => {
    variants[`${colorName}_${shade.name}`] = adjustColorBrightness(colorValue, shade.adjustment)
  })

  // State variants
  config.states.forEach(state => {
    if (state.opacity !== undefined) {
      variants[`${colorName}${state.suffix}`] = createRgbaColor(colorValue, state.opacity)
    } else {
      variants[`${colorName}${state.suffix}`] = adjustColorBrightness(colorValue, state.adjustment)
    }
  })

  return variants
}

/**
 * Generates semantic color mappings based on mode
 */
function generateSemanticColors(mode: 'light' | 'dark'): GeneratedColorSystem {
  const semanticColors: GeneratedColorSystem = {}

  // Success colors
  const successBase = mode === 'dark' ? '#10b981' : '#059669'
  Object.assign(semanticColors, generateColorVariants('success', successBase))

  // Warning colors
  const warningBase = mode === 'dark' ? '#f59e0b' : '#d97706'
  Object.assign(semanticColors, generateColorVariants('warning', warningBase))

  // Error colors
  const errorBase = mode === 'dark' ? '#ef4444' : '#dc2626'
  Object.assign(semanticColors, generateColorVariants('error', errorBase))

  // Info colors
  const infoBase = mode === 'dark' ? '#3b82f6' : '#2563eb'
  Object.assign(semanticColors, generateColorVariants('info', infoBase))

  // Neutral colors
  const neutralBase = mode === 'dark' ? '#6b7280' : '#9ca3af'
  Object.assign(semanticColors, generateColorVariants('neutral', neutralBase))

  return semanticColors
}

/**
 * Generates complete color system from theme colors
 */
export function generateCompleteColorSystem(themeColors: ThemeColors, mode: 'light' | 'dark'): GeneratedColorSystem {
  const colorSystem: GeneratedColorSystem = {}

  // Generate variants for core theme colors
  const coreColors = designSystemConfig.colorSystem.coreRoles
  coreColors.forEach(colorRole => {
    if (themeColors[colorRole as keyof ThemeColors]) {
      const variants = generateColorVariants(colorRole, themeColors[colorRole as keyof ThemeColors])
      Object.assign(colorSystem, variants)
    }
  })

  // Add semantic colors
  const semanticColors = generateSemanticColors(mode)
  Object.assign(colorSystem, semanticColors)

  // Generate contextual text colors
  const textColors = {
    text_primary: themeColors.text,
    text_secondary: mode === 'dark' ? '#a1a1aa' : '#64748b',
    text_tertiary: mode === 'dark' ? '#71717a' : '#9ca3af',
    text_muted: mode === 'dark' ? '#52525b' : '#6b7280',
    text_disabled: mode === 'dark' ? '#3f3f46' : '#d1d5db',
    text_inverse: mode === 'dark' ? '#fafafa' : '#111827',
    text_on_primary: '#ffffff',
    text_on_secondary: '#ffffff',
    text_on_accent: '#ffffff',
    text_on_success: '#ffffff',
    text_on_warning: '#111827',
    text_on_error: '#ffffff'
  }
  Object.assign(colorSystem, textColors)

  // Generate background variations
  const backgroundColors = {
    background_base: themeColors.background,
    background_surface: themeColors.surface,
    background_elevated: mode === 'dark' ? adjustColorBrightness(themeColors.surface, 10) : '#ffffff',
    background_overlay: mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    background_muted: mode === 'dark' ? '#1a1a1a' : '#f8f9fa',
    background_hover: mode === 'dark' ? '#262626' : '#f1f5f9',
    background_pressed: mode === 'dark' ? '#171717' : '#e2e8f0',
    background_selected: createRgbaColor(themeColors.primary, 0.1),
    background_disabled: mode === 'dark' ? '#0a0a0a' : '#f9fafb'
  }
  Object.assign(colorSystem, backgroundColors)

  // Generate surface variations
  const surfaceColors = {
    surface_primary: themeColors.surface,
    surface_secondary: mode === 'dark' ? adjustColorBrightness(themeColors.surface, 5) : adjustColorBrightness(themeColors.surface, -5),
    surface_tertiary: mode === 'dark' ? adjustColorBrightness(themeColors.surface, 10) : adjustColorBrightness(themeColors.surface, -10),
    surface_raised: mode === 'dark' ? adjustColorBrightness(themeColors.surface, 15) : '#ffffff',
    surface_overlay: mode === 'dark' ? adjustColorBrightness(themeColors.surface, 20) : 'rgba(255, 255, 255, 0.95)',
    surface_inverse: mode === 'dark' ? '#ffffff' : '#111827'
  }
  Object.assign(colorSystem, surfaceColors)

  // Generate border colors
  const borderColors = {
    border_base: mode === 'dark' ? '#333333' : '#e5e7eb',
    border_light: mode === 'dark' ? '#404040' : '#d1d5db',
    border_strong: mode === 'dark' ? '#555555' : '#9ca3af',
    border_focus: themeColors.primary,
    border_error: semanticColors.error || '#dc2626',
    border_success: semanticColors.success || '#059669',
    border_warning: semanticColors.warning || '#d97706',
    border_disabled: mode === 'dark' ? '#262626' : '#f3f4f6'
  }
  Object.assign(colorSystem, borderColors)

  return colorSystem
}

/**
 * Applies all design system CSS variables to document root
 */
export function applyDesignSystemVariables(themeColors: ThemeColors, mode: 'light' | 'dark'): void {
  const root = document.documentElement

  // Generate complete color system
  const colorSystem = generateCompleteColorSystem(themeColors, mode)

  // Apply color variables
  Object.entries(colorSystem).forEach(([colorName, colorValue]) => {
    root.style.setProperty(`--cui-color-${colorName.replace(/_/g, '-')}`, colorValue)
  })

  // Apply typography variables
  const typography = designSystemConfig.typography

  // Font families
  Object.entries(typography.fontFamilies).forEach(([name, font]) => {
    root.style.setProperty(font.variable, `${font.name}, ${font.fallback}`)
  })

  // Font weights
  Object.entries(typography.fontWeights).forEach(([name, weight]) => {
    root.style.setProperty(weight.variable, weight.value.toString())
  })

  // Font sizes
  Object.entries(typography.fontSizes).forEach(([name, size]) => {
    root.style.setProperty(size.variable, size.value)
  })

  // Line heights
  Object.entries(typography.lineHeights).forEach(([name, lineHeight]) => {
    root.style.setProperty(lineHeight.variable, lineHeight.value.toString())
  })

  // Letter spacing
  Object.entries(typography.letterSpacing).forEach(([name, spacing]) => {
    root.style.setProperty(spacing.variable, spacing.value)
  })

  // Apply spacing variables
  Object.entries(designSystemConfig.spacing.scale).forEach(([name, spacing]) => {
    root.style.setProperty(spacing.variable, spacing.value)
  })

  // Apply semantic spacing
  Object.entries(designSystemConfig.spacing.semantic).forEach(([name, spacing]) => {
    root.style.setProperty(spacing.variable, spacing.value)
  })

  // Apply border radius
  Object.entries(designSystemConfig.borderRadius).forEach(([name, radius]) => {
    root.style.setProperty(radius.variable, radius.value)
  })

  // Apply shadows
  Object.entries(designSystemConfig.shadows).forEach(([name, shadow]) => {
    root.style.setProperty(shadow.variable, shadow.value)
  })

  // Apply animation variables
  Object.entries(designSystemConfig.animation.duration).forEach(([name, duration]) => {
    root.style.setProperty(duration.variable, duration.value)
  })

  Object.entries(designSystemConfig.animation.easing).forEach(([name, easing]) => {
    root.style.setProperty(easing.variable, easing.value)
  })

  // Apply z-index variables
  Object.entries(designSystemConfig.zIndex).forEach(([name, zIndex]) => {
    root.style.setProperty(zIndex.variable, zIndex.value.toString())
  })
}

/**
 * Gets all available themes from themes.json
 */
export function getAvailableThemes(): Array<{id: string, name: string, colors: {dark: ThemeColors, light: ThemeColors}}> {
  return Object.entries(themesData.themes).map(([id, theme]: [string, any]) => ({
    id,
    name: theme.name,
    colors: {
      dark: theme.dark,
      light: theme.light
    }
  }))
}

/**
 * Applies a complete theme with all design system variables
 */
export function applyTheme(themeId: string, mode: 'light' | 'dark'): void {
  const themes = getAvailableThemes()
  const theme = themes.find(t => t.id === themeId)

  if (!theme) {
    console.warn(`Theme "${themeId}" not found`)
    return
  }

  const themeColors = theme.colors[mode]
  applyDesignSystemVariables(themeColors, mode)

  // Add theme classes to document
  document.documentElement.classList.remove('cui-light', 'cui-dark')
  document.documentElement.classList.add(`cui-${mode}`)

  // Apply to body as well
  document.body.style.backgroundColor = themeColors.background
  document.body.style.color = themeColors.text

  // Emit theme change event
  window.dispatchEvent(new CustomEvent('cui-theme-changed', {
    detail: { themeId, mode, colors: themeColors }
  }))
}

export default {
  generateCompleteColorSystem,
  applyDesignSystemVariables,
  applyTheme,
  getAvailableThemes
}
