import React, { useEffect } from 'react'
import { useTheme } from '../../lib/hooks/useTheme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { updateTheme, theme } = useTheme()

  // Initialize theme on mount
  useEffect(() => {
    updateTheme(theme)
  }, [updateTheme, theme])

  return <>{children}</>
}
