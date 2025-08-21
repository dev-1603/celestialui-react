import React, { useState, useEffect } from 'react'
import { useTheme } from '../../../lib/hooks/useTheme'
import type { ThemeConfig } from '../../../lib/types'
import themesData from '../../../lib/themes/themes.json'
import './ThemeSelector.css'

interface Theme {
  id: string
  name: string
  mode: string
  description: string
  category: string
  featured: boolean
  dark: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
  light: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
}

interface JsonThemeData {
  name: string
  mode: string
  description: string
  category: string
  featured: boolean
  dark: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
  light: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
}

export const ThemeSelector: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Convert themes.json data to our Theme interface format
  const themes: Theme[] = Object.entries(themesData.themes).map(
    ([id, themeData]: [string, JsonThemeData]) => ({
      id,
      name: themeData.name,
      mode: themeData.mode,
      description: themeData.description,
      category: themeData.category,
      featured: themeData.featured,
      dark: {
        primary: themeData.dark.primary,
        secondary: themeData.dark.secondary,
        accent: themeData.dark.accent,
        background: themeData.dark.background,
        surface: themeData.dark.surface,
        text: themeData.dark.text,
      },
      light: {
        primary: themeData.light.primary,
        secondary: themeData.light.secondary,
        accent: themeData.light.accent,
        background: themeData.light.background,
        surface: themeData.light.surface,
        text: themeData.light.text,
      },
    }),
  )

  const currentTheme = themes.find(t => t.id === (theme as any)?.themeId) || themes[0] || null
  const isDarkMode = theme?.mode === 'dark'
  const currentThemeColors = currentTheme
    ? isDarkMode
      ? currentTheme.dark
      : currentTheme.light
    : null

  const handleThemeSelect = (selectedTheme: Theme) => {
    setTheme({
      mode: theme?.mode || 'light',
      framework: 'tailwind',
      themeId: selectedTheme.id,
    } as Partial<ThemeConfig>)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Position dropdown as floating menu outside sidebar
  useEffect(() => {
    if (isOpen) {
      const dropdown = document.querySelector('.theme-dropdown') as HTMLElement
      const card = document.querySelector('.theme-card') as HTMLElement

      if (dropdown && card) {
        const cardRect = card.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const dropdownWidth = 300
        const dropdownHeight = Math.min(viewportHeight * 0.8, 600)

        // Calculate best position for floating menu
        let left = cardRect.right + 12 // 12px gap
        let top = cardRect.top

        // Check if dropdown goes off-screen horizontally
        if (left + dropdownWidth > viewportWidth - 20) {
          left = cardRect.left - dropdownWidth - 12 // Position to the left
        }

        // Check if dropdown goes off-screen vertically
        if (top + dropdownHeight > viewportHeight - 20) {
          top = Math.max(20, viewportHeight - dropdownHeight - 20)
        }

        // Ensure minimum margins from edges
        left = Math.max(20, Math.min(left, viewportWidth - dropdownWidth - 20))
        top = Math.max(20, top)

        // Apply positioning
        dropdown.style.left = `${left}px`
        dropdown.style.top = `${top}px`
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.theme-selector')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!currentTheme || !currentThemeColors) {
    return null
  }

  return (
    <div className={`theme-selector ${className}`}>
      <div
        className="theme-card"
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        aria-label="Select theme"
      >
        <div className="theme-header">
          <span className="theme-title">Theme</span>
          <span className={`theme-chevron ${isOpen ? 'theme-chevron--open' : ''}`}>
            {isOpen ? '▼' : '▶'}
          </span>
        </div>

        <div className="theme-content">
          <div className="theme-meta">
            <div className="theme-name">{currentTheme.name}</div>
            <div className="theme-category">{currentTheme.category}</div>
          </div>

          <div className="theme-status">
            <div className={`mode-indicator mode-indicator--${isDarkMode ? 'dark' : 'light'}`}>
              <span className="mode-icon">{isDarkMode ? '🌙' : '☀️'}</span>
              <span className="mode-text">{isDarkMode ? 'Dark' : 'Light'}</span>
            </div>

            <div className="theme-colors">
              <div
                className="color-dot color-dot--primary"
                style={{ backgroundColor: currentThemeColors.primary }}
                title={`Primary: ${currentThemeColors.primary}`}
                data-label="Primary"
              />
              <div
                className="color-dot color-dot--secondary"
                style={{ backgroundColor: currentThemeColors.secondary }}
                title={`Secondary: ${currentThemeColors.secondary}`}
                data-label="Secondary"
              />
              <div
                className="color-dot color-dot--accent"
                style={{ backgroundColor: currentThemeColors.accent }}
                title={`Accent: ${currentThemeColors.accent}`}
                data-label="Accent"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-dropdown-content">
            {themes.map((themeOption) => (
              <div
                key={themeOption.id}
                className={`theme-card-item ${currentTheme?.id === themeOption.id ? 'theme-card-item--selected' : ''}`}
                onClick={() => handleThemeSelect(themeOption)}
              >
                <div className="theme-card-header">
                  <div className="theme-card-title">
                    {themeOption.name}
                    {currentTheme?.id === themeOption.id && (
                      <span className="selected-indicator">✓</span>
                    )}
                  </div>
                </div>

                <div className="theme-modes-section">
                  {/* Dark Mode */}
                  <div className="mode-row mode-row--dark">
                    <div className="mode-label">Dark</div>
                    <div className="mode-colors">
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.dark.primary }}
                        title={`Primary: ${themeOption.dark.primary}`}
                      />
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.dark.secondary }}
                        title={`Secondary: ${themeOption.dark.secondary}`}
                      />
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.dark.accent }}
                        title={`Accent: ${themeOption.dark.accent}`}
                      />
                    </div>
                  </div>

                  {/* Light Mode */}
                  <div className="mode-row mode-row--light">
                    <div className="mode-label">Light</div>
                    <div className="mode-colors">
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.light.primary }}
                        title={`Primary: ${themeOption.light.primary}`}
                      />
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.light.secondary }}
                        title={`Secondary: ${themeOption.light.secondary}`}
                      />
                      <div
                        className="mode-color-dot"
                        style={{ backgroundColor: themeOption.light.accent }}
                        title={`Accent: ${themeOption.light.accent}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
