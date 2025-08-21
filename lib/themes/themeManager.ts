/**
 * CelestialUI Theme Manager
 *
 * Config-driven theme system that loads themes from JSON configuration
 * and provides easy theme switching capabilities.
 */

import themeConfig from './themes.json'
import type { ThemeConfig, ThemeTokens } from '../types'

// ============================================================================
// TYPES
// ============================================================================

export interface CelestialTheme {
  name: string
  mode: 'light' | 'dark'
  description: string
  category: 'celestial' | 'default'
  featured: boolean
  colors: {
    primary: Record<string, string>
    secondary: Record<string, string>
    neutral: Record<string, string>
    success: Record<string, string>
    warning: Record<string, string>
    error: Record<string, string>
    background: Record<string, string>
    text: Record<string, string>
    border: Record<string, string>
  }
}

export interface ThemeManagerConfig {
  defaultTheme?: string
  autoDetectSystemTheme?: boolean
  persistThemeChoice?: boolean
  storageKey?: string
}

// ============================================================================
// THEME MANAGER CLASS
// ============================================================================

export class ThemeManager {
  private currentThemeId: string
  private themes: Map<string, CelestialTheme>
  private subscribers: Set<(themeId: string, theme: CelestialTheme) => void>
  private config: ThemeManagerConfig
  private systemThemeMediaQuery?: MediaQueryList

  constructor(config: ThemeManagerConfig = {}) {
    this.config = {
      defaultTheme: 'celestial-ocean',
      autoDetectSystemTheme: true,
      persistThemeChoice: true,
      storageKey: 'cui-theme-preference',
      ...config
    }

    this.themes = new Map()
    this.subscribers = new Set()
    this.currentThemeId = this.config.defaultTheme!

    this.loadThemesFromConfig()
    this.initializeTheme()
  }

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  private loadThemesFromConfig(): void {
    Object.entries(themeConfig.themes).forEach(([id, theme]) => {
      this.themes.set(id, theme as CelestialTheme)
    })
  }

  private initializeTheme(): void {
    // Load persisted theme preference
    if (this.config.persistThemeChoice && typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(this.config.storageKey!)
      if (savedTheme && this.themes.has(savedTheme)) {
        this.currentThemeId = savedTheme
      }
    }

    // Auto-detect system theme if enabled
    if (this.config.autoDetectSystemTheme && typeof window !== 'undefined') {
      this.setupSystemThemeDetection()
    }

    // Apply initial theme
    this.applyTheme(this.currentThemeId)
  }

  private setupSystemThemeDetection(): void {
    if (typeof window === 'undefined') return

    this.systemThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually selected a theme
      const hasManualPreference = localStorage.getItem(this.config.storageKey!)
      if (!hasManualPreference) {
        const systemPrefersDark = e.matches
        const appropriateTheme = this.findBestThemeForMode(systemPrefersDark ? 'dark' : 'light')
        if (appropriateTheme) {
          this.setTheme(appropriateTheme)
        }
      }
    }

    this.systemThemeMediaQuery.addEventListener('change', handleSystemThemeChange)
  }

  private findBestThemeForMode(mode: 'light' | 'dark'): string | null {
    // Prioritize featured celestial themes
    const featuredThemes = Array.from(this.themes.entries())
      .filter(([_, theme]) => theme.mode === mode && theme.featured && theme.category === 'celestial')

    if (featuredThemes.length > 0) {
      return featuredThemes[0][0] // Return first featured celestial theme
    }

    // Fallback to any theme of the correct mode
    const anyTheme = Array.from(this.themes.entries())
      .find(([_, theme]) => theme.mode === mode)

    return anyTheme ? anyTheme[0] : null
  }

  // ============================================================================
  // THEME MANAGEMENT
  // ============================================================================

  public setTheme(themeId: string): boolean {
    if (!this.themes.has(themeId)) {
      console.warn(`Theme "${themeId}" not found`)
      return false
    }

    const previousTheme = this.currentThemeId
    this.currentThemeId = themeId

    // Persist theme choice
    if (this.config.persistThemeChoice && typeof window !== 'undefined') {
      localStorage.setItem(this.config.storageKey!, themeId)
    }

    // Apply theme to DOM
    this.applyTheme(themeId)

    // Notify subscribers
    const theme = this.themes.get(themeId)!
    this.notifySubscribers(themeId, theme)

    return true
  }

  public getCurrentTheme(): CelestialTheme | null {
    return this.themes.get(this.currentThemeId) || null
  }

  public getCurrentThemeId(): string {
    return this.currentThemeId
  }

  public getAllThemes(): Map<string, CelestialTheme> {
    return new Map(this.themes)
  }

  public getThemesByCategory(category: 'celestial' | 'default'): Array<[string, CelestialTheme]> {
    return Array.from(this.themes.entries())
      .filter(([_, theme]) => theme.category === category)
  }

  public getFeaturedThemes(): Array<[string, CelestialTheme]> {
    return Array.from(this.themes.entries())
      .filter(([_, theme]) => theme.featured)
  }

  public getThemesByMode(mode: 'light' | 'dark'): Array<[string, CelestialTheme]> {
    return Array.from(this.themes.entries())
      .filter(([_, theme]) => theme.mode === mode)
  }

  // ============================================================================
  // THEME APPLICATION
  // ============================================================================

  private applyTheme(themeId: string): void {
    const theme = this.themes.get(themeId)
    if (!theme || typeof window === 'undefined') return

    const root = document.documentElement

    // Remove existing theme classes
    root.classList.remove('cui-light', 'cui-dark')
    Array.from(this.themes.keys()).forEach(id => {
      root.classList.remove(`cui-theme-${id}`)
    })

    // Add new theme classes
    root.classList.add(`cui-${theme.mode}`)
    root.classList.add(`cui-theme-${themeId}`)

    // Apply CSS custom properties
    this.applyCSSVariables(theme)

    // Emit theme change event
    window.dispatchEvent(new CustomEvent('cui-theme-changed', {
      detail: { themeId, theme }
    }))
  }

  private applyCSSVariables(theme: CelestialTheme): void {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    // Apply all color variables
    Object.entries(theme.colors).forEach(([category, colors]) => {
      if (typeof colors === 'object') {
        Object.entries(colors).forEach(([key, value]) => {
          root.style.setProperty(`--cui-color-${category}-${key}`, value)
        })
      }
    })
  }

  // ============================================================================
  // SUBSCRIPTION MANAGEMENT
  // ============================================================================

  public subscribe(callback: (themeId: string, theme: CelestialTheme) => void): () => void {
    this.subscribers.add(callback)

    // Return unsubscribe function
    return () => {
      this.subscribers.delete(callback)
    }
  }

  private notifySubscribers(themeId: string, theme: CelestialTheme): void {
    this.subscribers.forEach(callback => {
      try {
        callback(themeId, theme)
      } catch (error) {
        console.error('Error in theme change subscriber:', error)
      }
    })
  }

  // ============================================================================
  // UTILITY METHODS
  // ============================================================================

  public toggleMode(): void {
    const currentTheme = this.getCurrentTheme()
    if (!currentTheme) return

    const oppositeMode = currentTheme.mode === 'light' ? 'dark' : 'light'
    const oppositeTheme = this.findBestThemeForMode(oppositeMode)

    if (oppositeTheme) {
      this.setTheme(oppositeTheme)
    }
  }

  public resetToSystemPreference(): void {
    if (typeof window === 'undefined') return

    // Remove manual preference
    if (this.config.persistThemeChoice) {
      localStorage.removeItem(this.config.storageKey!)
    }

    // Apply system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const appropriateTheme = this.findBestThemeForMode(prefersDark ? 'dark' : 'light')

    if (appropriateTheme) {
      this.setTheme(appropriateTheme)
    }
  }

  public exportCurrentTheme(): string {
    const theme = this.getCurrentTheme()
    return theme ? JSON.stringify({ [this.currentThemeId]: theme }, null, 2) : '{}'
  }

  // ============================================================================
  // CLEANUP
  // ============================================================================

  public destroy(): void {
    if (this.systemThemeMediaQuery) {
      this.systemThemeMediaQuery.removeEventListener('change', () => {})
    }
    this.subscribers.clear()
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const themeManager = new ThemeManager()

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get all available themes
 */
export function getAllThemes(): Array<[string, CelestialTheme]> {
  return Array.from(themeManager.getAllThemes().entries())
}

/**
 * Get featured celestial themes
 */
export function getFeaturedThemes(): Array<[string, CelestialTheme]> {
  return themeManager.getFeaturedThemes()
}

/**
 * Get themes by mode
 */
export function getThemesByMode(mode: 'light' | 'dark'): Array<[string, CelestialTheme]> {
  return themeManager.getThemesByMode(mode)
}

/**
 * Convert CelestialTheme to legacy ThemeConfig format
 */
export function convertToLegacyThemeConfig(theme: CelestialTheme): ThemeConfig {
  const tokens: ThemeTokens = {
    colors: {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      neutral: theme.colors.neutral,
      success: theme.colors.success,
      warning: theme.colors.warning,
      error: theme.colors.error,
      background: theme.colors.background,
      text: theme.colors.text,
      border: theme.colors.border,
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

  return {
    framework: 'tailwind',
    mode: theme.mode,
    tokens,
  }
}

// ============================================================================
// THEME PRESETS
// ============================================================================

export const CELESTIAL_THEMES = {
  STARLIT_NIGHT: 'starlit-night',
  NEBULA_DREAM: 'nebula-dream',
  CELESTIAL_OCEAN: 'celestial-ocean',
  SOLAR_FLARE: 'solar-flare',
} as const

export const DEFAULT_THEMES = {
  DEFAULT_LIGHT: 'default-light',
  DEFAULT_DARK: 'default-dark',
} as const

export default themeManager
