/**
 * CelestialUI Theme Hook
 *
 * React hook for managing celestial themes with the new config-driven system.
 */

import { useState, useEffect, useCallback } from 'react'
import { themeManager, type CelestialTheme } from '../themes/themeManager'

// ============================================================================
// TYPES
// ============================================================================

export interface UseCelestialThemeReturn {
  // Current state
  currentTheme: CelestialTheme | null
  currentThemeId: string
  isDark: boolean
  isLight: boolean

  // Theme management
  setTheme: (themeId: string) => boolean
  toggleMode: () => void
  resetToSystemPreference: () => void

  // Theme collections
  allThemes: Array<[string, CelestialTheme]>
  featuredThemes: Array<[string, CelestialTheme]>
  lightThemes: Array<[string, CelestialTheme]>
  darkThemes: Array<[string, CelestialTheme]>
  celestialThemes: Array<[string, CelestialTheme]>
  defaultThemes: Array<[string, CelestialTheme]>

  // Utilities
  getThemePreview: (themeId: string) => CelestialTheme | null
  exportCurrentTheme: () => string
  isCurrentTheme: (themeId: string) => boolean
}

// ============================================================================
// HOOK IMPLEMENTATION
// ============================================================================

export function useCelestialTheme(): UseCelestialThemeReturn {
  // State
  const [currentTheme, setCurrentTheme] = useState<CelestialTheme | null>(
    themeManager.getCurrentTheme()
  )
  const [currentThemeId, setCurrentThemeId] = useState<string>(
    themeManager.getCurrentThemeId()
  )
  const [allThemes] = useState(() => Array.from(themeManager.getAllThemes().entries()))

  // Effect to subscribe to theme changes
  useEffect(() => {
    const unsubscribe = themeManager.subscribe((themeId, theme) => {
      setCurrentThemeId(themeId)
      setCurrentTheme(theme)
    })

    return unsubscribe
  }, [])

  // Theme management functions
  const setTheme = useCallback((themeId: string): boolean => {
    return themeManager.setTheme(themeId)
  }, [])

  const toggleMode = useCallback(() => {
    themeManager.toggleMode()
  }, [])

  const resetToSystemPreference = useCallback(() => {
    themeManager.resetToSystemPreference()
  }, [])

  // Computed values
  const isDark = currentTheme?.mode === 'dark'
  const isLight = currentTheme?.mode === 'light'

  // Theme collections
  const featuredThemes = themeManager.getFeaturedThemes()
  const lightThemes = themeManager.getThemesByMode('light')
  const darkThemes = themeManager.getThemesByMode('dark')
  const celestialThemes = themeManager.getThemesByCategory('celestial')
  const defaultThemes = themeManager.getThemesByCategory('default')

  // Utility functions
  const getThemePreview = useCallback((themeId: string): CelestialTheme | null => {
    return themeManager.getAllThemes().get(themeId) || null
  }, [])

  const exportCurrentTheme = useCallback((): string => {
    return themeManager.exportCurrentTheme()
  }, [])

  const isCurrentTheme = useCallback((themeId: string): boolean => {
    return currentThemeId === themeId
  }, [currentThemeId])

  return {
    // Current state
    currentTheme,
    currentThemeId,
    isDark,
    isLight,

    // Theme management
    setTheme,
    toggleMode,
    resetToSystemPreference,

    // Theme collections
    allThemes,
    featuredThemes,
    lightThemes,
    darkThemes,
    celestialThemes,
    defaultThemes,

    // Utilities
    getThemePreview,
    exportCurrentTheme,
    isCurrentTheme,
  }
}

// ============================================================================
// ADDITIONAL HOOKS
// ============================================================================

/**
 * Hook to get color values from the current theme
 */
export function useThemeColors() {
  const { currentTheme } = useCelestialTheme()

  const getColor = useCallback((path: string): string => {
    if (!currentTheme) return '#000000'

    const pathParts = path.split('.')
    let value: any = currentTheme.colors

    for (const part of pathParts) {
      value = value?.[part]
      if (value === undefined) break
    }

    return typeof value === 'string' ? value : '#000000'
  }, [currentTheme])

  const colors = currentTheme?.colors || null

  return {
    colors,
    getColor,
    primary: colors?.primary || {},
    secondary: colors?.secondary || {},
    neutral: colors?.neutral || {},
    success: colors?.success || {},
    warning: colors?.warning || {},
    error: colors?.error || {},
    background: colors?.background || {},
    text: colors?.text || {},
    border: colors?.border || {},
  }
}

/**
 * Hook for theme system status
 */
export function useThemeSystemStatus() {
  const { currentTheme, currentThemeId } = useCelestialTheme()
  const [systemPrefersDark, setSystemPrefersDark] = useState(false)
  const [hasManualPreference, setHasManualPreference] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemPrefersDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check if user has manual preference
    const hasPreference = localStorage.getItem('cui-theme-preference') !== null
    setHasManualPreference(hasPreference)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Update hasManualPreference when theme changes
  useEffect(() => {
    const hasPreference = localStorage.getItem('cui-theme-preference') !== null
    setHasManualPreference(hasPreference)
  }, [currentThemeId])

  return {
    systemPrefersDark,
    hasManualPreference,
    isFollowingSystem: !hasManualPreference,
    currentThemeMatchesSystem: currentTheme?.mode === (systemPrefersDark ? 'dark' : 'light'),
  }
}

/**
 * Hook for theme preview functionality (useful for theme selectors)
 */
export function useThemePreview() {
  const [previewTheme, setPreviewTheme] = useState<CelestialTheme | null>(null)
  const [isPreviewActive, setIsPreviewActive] = useState(false)

  const startPreview = useCallback((themeId: string) => {
    const theme = themeManager.getAllThemes().get(themeId)
    if (theme) {
      setPreviewTheme(theme)
      setIsPreviewActive(true)

      // Apply preview temporarily (without persisting)
      themeManager['applyTheme'](themeId)
    }
  }, [])

  const endPreview = useCallback(() => {
    if (isPreviewActive) {
      setPreviewTheme(null)
      setIsPreviewActive(false)

      // Restore original theme
      const currentId = themeManager.getCurrentThemeId()
      themeManager['applyTheme'](currentId)
    }
  }, [isPreviewActive])

  const commitPreview = useCallback(() => {
    if (isPreviewActive && previewTheme) {
      const themeId = Array.from(themeManager.getAllThemes().entries())
        .find(([_, theme]) => theme === previewTheme)?.[0]

      if (themeId) {
        themeManager.setTheme(themeId)
      }

      setPreviewTheme(null)
      setIsPreviewActive(false)
    }
  }, [isPreviewActive, previewTheme])

  return {
    previewTheme,
    isPreviewActive,
    startPreview,
    endPreview,
    commitPreview,
  }
}

// ============================================================================
// LEGACY COMPATIBILITY
// ============================================================================

/**
 * Legacy hook compatibility - bridges to the new theme system
 * @deprecated Use useCelestialTheme instead
 */
export function useTheme() {
  const {
    currentTheme,
    currentThemeId,
    isDark,
    setTheme,
    toggleMode,
  } = useCelestialTheme()

  const { getColor } = useThemeColors()

  // Convert to legacy format for compatibility
  const legacyTheme = currentTheme ? {
    framework: 'tailwind' as const,
    mode: currentTheme.mode,
    tokens: {
      colors: currentTheme.colors,
    },
  } : null

  return {
    theme: legacyTheme,
    isDark,
    toggleTheme: toggleMode,
    setTheme,
    getColor,
    // Additional legacy properties
    tokens: legacyTheme?.tokens,
    cssVariables: {},
    setMode: (mode: 'light' | 'dark') => {
      const themes = mode === 'dark' ? themeManager.getThemesByMode('dark') : themeManager.getThemesByMode('light')
      const featuredTheme = themes.find(([_, theme]) => theme.featured)
      if (featuredTheme) {
        setTheme(featuredTheme[0])
      }
    },
    updateTheme: () => {}, // No-op for legacy compatibility
    getToken: (category: string, key: string) => getColor(`${category}.${key}`),
    getBreakpoint: (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      const breakpoints = {
        xs: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
      return breakpoints[size]
    },
  }
}
