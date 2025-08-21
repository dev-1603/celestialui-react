import { useState, useEffect, useMemo, useCallback } from 'react'
import type { ThemeConfig, ThemeTokens, CelestialUIOptions } from '../types'
import { getThemeTokens, generateCSSVariables, defaultTokens } from '../themes'
import { applyTheme } from '../../src/utils/designSystemGenerator'

// Global theme state - using a simple module-level state for now
let globalTheme: ThemeConfig = {
  framework: 'tailwind',
  mode: 'light',
  tokens: defaultTokens,
  themeId: 'corporate-midnight', // Default theme
}

let isDarkMode = false
const subscribers = new Set<() => void>()

// Notify all subscribers about theme changes
const notifySubscribers = () => {
  subscribers.forEach((callback) => callback())
}

export function useTheme(_options?: CelestialUIOptions) {
  // Local state to trigger re-renders
  const [, forceUpdate] = useState({})

  // Subscribe to theme changes
  useEffect(() => {
    const callback = () => forceUpdate({})
    subscribers.add(callback)
    return () => {
      subscribers.delete(callback)
    }
  }, [])

  // Computed theme tokens
  const tokens = useMemo(() => getThemeTokens(globalTheme), [globalTheme])

  // CSS variables
  const cssVariables = useMemo(() => generateCSSVariables(tokens), [tokens])

  // Theme mode management
  const toggleTheme = useCallback(() => {
    isDarkMode = !isDarkMode
    globalTheme = {
      ...globalTheme,
      mode: isDarkMode ? 'dark' : 'light',
    }
    updateTheme(globalTheme)
    notifySubscribers()
  }, [])

  const setTheme = useCallback((theme: Partial<ThemeConfig>) => {
    globalTheme = {
      ...globalTheme,
      ...theme,
    }
    isDarkMode = globalTheme.mode === 'dark'
    updateTheme(globalTheme)
    notifySubscribers()
  }, [])

  const setMode = useCallback((mode: 'light' | 'dark' | 'auto') => {
    if (mode === 'auto') {
      // Detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDarkMode = prefersDark
      globalTheme = {
        ...globalTheme,
        mode: prefersDark ? 'dark' : 'light',
      }
    } else {
      isDarkMode = mode === 'dark'
      globalTheme = {
        ...globalTheme,
        mode,
      }
    }
    updateTheme(globalTheme)
    notifySubscribers()
  }, [])

    // Apply theme to DOM
  const updateTheme = useCallback((theme: ThemeConfig) => {
    // Use the new design system generator if themeId is provided
    if (theme.themeId && theme.mode !== 'auto') {
      applyTheme(theme.themeId, theme.mode)
    } else {
      // Fallback to default theme tokens
      const root = document.documentElement

      // Remove existing theme classes
      root.classList.remove(
        'cui-light',
        'cui-dark',
        'cui-tailwind',
        'cui-scss',
        'cui-material',
        'cui-css',
      )

      // Add new theme classes
      root.classList.add(`cui-${theme.mode}`)
      root.classList.add(`cui-${theme.framework}`)

      const vars = generateCSSVariables(getThemeTokens(theme))
      Object.entries(vars).forEach(([property, value]) => {
        root.style.setProperty(property, value as string)
      })

      // Emit theme change event
      window.dispatchEvent(
        new CustomEvent('cui-theme-change', {
          detail: { theme, tokens: getThemeTokens(theme) },
        }),
      )
    }
  }, [])

  // Get color utility
  const getColor = useCallback(
    (path: string): string => {
      const keys = path.split('.')
      let value: any = tokens.colors

      for (const key of keys) {
        value = value?.[key]
      }

      return value || '#000000'
    },
    [tokens],
  )

  // Get token utility
  const getToken = useCallback(
    (category: keyof ThemeTokens, key: string): string => {
      const categoryTokens = tokens[category] as Record<string, any>
      return categoryTokens?.[key] || ''
    },
    [tokens],
  )

  // Responsive utilities
  const getBreakpoint = useCallback((size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
    const breakpoints = {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
    return breakpoints[size]
  }, [])

  // Watch for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (globalTheme.mode === 'auto') {
          isDarkMode = e.matches
          globalTheme = {
            ...globalTheme,
            mode: e.matches ? 'dark' : 'light',
          }
          updateTheme(globalTheme)
          notifySubscribers()
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [updateTheme])

  // Initialize theme on first use
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !document.documentElement.classList.contains('cui-light') &&
      !document.documentElement.classList.contains('cui-dark')
    ) {
      updateTheme(globalTheme)
    }
  }, [updateTheme])

  return {
    // State
    theme: globalTheme,
    tokens,
    cssVariables,
    isDark: isDarkMode,

    // Methods
    setTheme,
    setMode,
    toggleTheme,
    updateTheme,
    getColor,
    getToken,
    getBreakpoint,
  }
}

// Hook for component theming
export function useComponentTheme(componentName: string, props: any = {}) {
  const { theme, tokens, getColor, getToken } = useTheme()

  const componentClasses = useMemo(() => {
    const classes = [`cui-${componentName}`]

    if (props.variant) {
      classes.push(`cui-${componentName}--${props.variant}`)
    }

    if (props.size) {
      classes.push(`cui-${componentName}--${props.size}`)
    }

    if (props.disabled) {
      classes.push(`cui-${componentName}--disabled`)
    }

    if (props.loading) {
      classes.push(`cui-${componentName}--loading`)
    }

    return classes
  }, [componentName, props.variant, props.size, props.disabled, props.loading])

  const componentStyles = useMemo(() => {
    const styles: Record<string, string> = {}

    // Apply custom styles if provided
    if (props.style) {
      Object.assign(styles, props.style)
    }

    return styles
  }, [props.style])

  return {
    theme,
    tokens,
    componentClasses,
    componentStyles,
    getColor,
    getToken,
  }
}
