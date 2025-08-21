/**
 * CelestialUI Theme Selector Component
 *
 * A beautiful theme selector that showcases all available celestial themes
 * with live previews and easy switching.
 */

import React, { useState } from 'react'
import { useCelestialTheme, useThemeSystemStatus } from '../../hooks/useCelestialTheme'
import { Button } from '../ui/button/Button'
import { Card } from '../ui/card/Card'
import type { CelestialTheme } from '../../themes/themeManager'
import './ThemeSelector.css'

// ============================================================================
// TYPES
// ============================================================================

interface ThemeSelectorProps {
  className?: string
  showSystemPreference?: boolean
  showOnlyFeatured?: boolean
  groupByMode?: boolean
  onThemeChange?: (themeId: string, theme: CelestialTheme) => void
}

interface ThemePreviewProps {
  themeId: string
  theme: CelestialTheme
  isActive: boolean
  onSelect: (themeId: string) => void
  showDetails?: boolean
}

// ============================================================================
// THEME PREVIEW COMPONENT
// ============================================================================

const ThemePreview: React.FC<ThemePreviewProps> = ({
  themeId,
  theme,
  isActive,
  onSelect,
  showDetails = true,
}) => {
  return (
    <Card
      className={`theme-preview ${isActive ? 'theme-preview--active' : ''}`}
      elevation={isActive ? 3 : 1}
      hoverable
      clickable
      onClick={() => onSelect(themeId)}
      style={{
        '--preview-primary': theme.colors.primary['400'] || theme.colors.primary['500'],
        '--preview-secondary': theme.colors.secondary['400'] || theme.colors.secondary['500'],
        '--preview-background': theme.colors.background.base,
        '--preview-surface': theme.colors.background.surface,
        '--preview-text': theme.colors.text.primary,
        '--preview-muted': theme.colors.text.muted,
        '--preview-border': theme.colors.border.base,
      } as React.CSSProperties}
    >
      <div className="theme-preview-header">
        <div className="theme-preview-colors">
          <div
            className="theme-preview-color theme-preview-color--primary"
            style={{ backgroundColor: theme.colors.primary['400'] || theme.colors.primary['500'] }}
          />
          <div
            className="theme-preview-color theme-preview-color--secondary"
            style={{ backgroundColor: theme.colors.secondary['400'] || theme.colors.secondary['500'] }}
          />
          <div
            className="theme-preview-color theme-preview-color--accent"
            style={{ backgroundColor: theme.colors.success['400'] || theme.colors.success['500'] }}
          />
        </div>

        <div className="theme-preview-mode">
          <div className={`theme-mode-indicator theme-mode-indicator--${theme.mode}`}>
            {theme.mode === 'dark' ? '🌙' : '☀️'}
          </div>
        </div>
      </div>

      <div className="theme-preview-content">
        <div className="theme-preview-mockup">
          <div
            className="mockup-background"
            style={{ backgroundColor: theme.colors.background.base }}
          >
            <div
              className="mockup-surface"
              style={{ backgroundColor: theme.colors.background.surface }}
            >
              <div
                className="mockup-primary"
                style={{ backgroundColor: theme.colors.primary['500'] }}
              />
              <div
                className="mockup-text mockup-text--primary"
                style={{ backgroundColor: theme.colors.text.primary }}
              />
              <div
                className="mockup-text mockup-text--secondary"
                style={{ backgroundColor: theme.colors.text.secondary }}
              />
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="theme-preview-details">
            <h3 className="theme-preview-name">
              {theme.name}
              {theme.featured && (
                <span className="theme-featured-badge">✨</span>
              )}
            </h3>
            <p className="theme-preview-description">{theme.description}</p>

            {isActive && (
              <div className="theme-preview-status">
                <span className="theme-active-indicator">• Active</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  className,
  showSystemPreference = true,
  showOnlyFeatured = false,
  groupByMode = true,
  onThemeChange,
}) => {
  const {
    currentThemeId,
    setTheme,
    toggleMode,
    resetToSystemPreference,
    featuredThemes,
    lightThemes,
    darkThemes,
    celestialThemes,
    defaultThemes,
  } = useCelestialTheme()

  const {
    systemPrefersDark,
    hasManualPreference,
    isFollowingSystem,
    currentThemeMatchesSystem,
  } = useThemeSystemStatus()

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'celestial' | 'default'>('celestial')

  // Get themes to display
  const getThemesToShow = () => {
    if (showOnlyFeatured) {
      return featuredThemes
    }

    switch (selectedCategory) {
      case 'celestial':
        return celestialThemes
      case 'default':
        return defaultThemes
      default:
        return [...celestialThemes, ...defaultThemes]
    }
  }

  const handleThemeSelect = (themeId: string) => {
    const success = setTheme(themeId)
    if (success && onThemeChange) {
      const theme = celestialThemes.find(([id]) => id === themeId)?.[1] ||
                   defaultThemes.find(([id]) => id === themeId)?.[1]
      if (theme) {
        onThemeChange(themeId, theme)
      }
    }
  }

  const handleSystemPreferenceReset = () => {
    resetToSystemPreference()
  }

  const themesToShow = getThemesToShow()
  const lightThemesToShow = themesToShow.filter(([_, theme]) => theme.mode === 'light')
  const darkThemesToShow = themesToShow.filter(([_, theme]) => theme.mode === 'dark')

  return (
    <div className={`theme-selector ${className || ''}`}>
      {/* Header */}
      <div className="theme-selector-header">
        <div className="theme-selector-title">
          <h2>Choose Your Theme</h2>
          <p>Celestial-inspired color palettes for your perfect interface</p>
        </div>

        <div className="theme-selector-controls">
          {/* Category Filter */}
          {!showOnlyFeatured && (
            <div className="theme-category-filter">
              <Button
                variant={selectedCategory === 'celestial' ? 'filled' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory('celestial')}
              >
                🌌 Celestial
              </Button>
              <Button
                variant={selectedCategory === 'default' ? 'filled' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory('default')}
              >
                ⚪ Default
              </Button>
              <Button
                variant={selectedCategory === 'all' ? 'filled' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                🎨 All
              </Button>
            </div>
          )}

          {/* Quick Actions */}
          <div className="theme-quick-actions">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMode}
              leftIcon={systemPrefersDark ? 'sun' : 'moon'}
            >
              Switch Mode
            </Button>

            {showSystemPreference && (
              <Button
                variant={isFollowingSystem ? 'filled' : 'outline'}
                size="sm"
                onClick={handleSystemPreferenceReset}
                leftIcon="sync"
                disabled={isFollowingSystem && currentThemeMatchesSystem}
              >
                {isFollowingSystem ? 'Following System' : 'Use System'}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* System Status */}
      {showSystemPreference && (
        <Card elevation={1} className="theme-system-status">
          <div className="system-status-content">
            <div className="system-status-info">
              <span className="system-status-icon">
                {systemPrefersDark ? '🌙' : '☀️'}
              </span>
              <div>
                <span className="system-status-label">
                  System Preference: {systemPrefersDark ? 'Dark' : 'Light'} Mode
                </span>
                {hasManualPreference && (
                  <span className="system-status-note">
                    You have manually selected a theme
                  </span>
                )}
              </div>
            </div>

            {!currentThemeMatchesSystem && (
              <div className="system-status-mismatch">
                <span className="status-warning">
                  ⚠️ Current theme doesn't match system preference
                </span>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Theme Grid */}
      <div className="theme-selector-content">
        {groupByMode ? (
          <div className="theme-groups">
            {/* Light Themes */}
            {lightThemesToShow.length > 0 && (
              <div className="theme-group">
                <h3 className="theme-group-title">
                  ☀️ Light Themes
                  <span className="theme-count">({lightThemesToShow.length})</span>
                </h3>
                <div className="theme-grid">
                  {lightThemesToShow.map(([themeId, theme]) => (
                    <ThemePreview
                      key={themeId}
                      themeId={themeId}
                      theme={theme}
                      isActive={currentThemeId === themeId}
                      onSelect={handleThemeSelect}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Dark Themes */}
            {darkThemesToShow.length > 0 && (
              <div className="theme-group">
                <h3 className="theme-group-title">
                  🌙 Dark Themes
                  <span className="theme-count">({darkThemesToShow.length})</span>
                </h3>
                <div className="theme-grid">
                  {darkThemesToShow.map(([themeId, theme]) => (
                    <ThemePreview
                      key={themeId}
                      themeId={themeId}
                      theme={theme}
                      isActive={currentThemeId === themeId}
                      onSelect={handleThemeSelect}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="theme-grid">
            {themesToShow.map(([themeId, theme]) => (
              <ThemePreview
                key={themeId}
                themeId={themeId}
                theme={theme}
                isActive={currentThemeId === themeId}
                onSelect={handleThemeSelect}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="theme-selector-footer">
        <p className="theme-footer-note">
          Themes are automatically saved and will persist across sessions.
          {showSystemPreference && ' Reset to follow your system preference anytime.'}
        </p>
      </div>
    </div>
  )
}

// ============================================================================
// COMPACT THEME SELECTOR
// ============================================================================

interface CompactThemeSelectorProps {
  className?: string
  showLabels?: boolean
}

export const CompactThemeSelector: React.FC<CompactThemeSelectorProps> = ({
  className,
  showLabels = true,
}) => {
  const { currentThemeId, setTheme, featuredThemes, toggleMode } = useCelestialTheme()

  return (
    <div className={`compact-theme-selector ${className || ''}`}>
      <div className="compact-theme-grid">
        {featuredThemes.map(([themeId, theme]) => (
          <button
            key={themeId}
            className={`compact-theme-option ${
              currentThemeId === themeId ? 'compact-theme-option--active' : ''
            }`}
            onClick={() => setTheme(themeId)}
            title={theme.name}
            style={{
              '--theme-primary': theme.colors.primary['400'] || theme.colors.primary['500'],
              '--theme-secondary': theme.colors.secondary['400'] || theme.colors.secondary['500'],
            } as React.CSSProperties}
          >
            <div className="compact-theme-colors">
              <div
                className="compact-theme-color"
                style={{ backgroundColor: theme.colors.primary['400'] || theme.colors.primary['500'] }}
              />
              <div
                className="compact-theme-color"
                style={{ backgroundColor: theme.colors.secondary['400'] || theme.colors.secondary['500'] }}
              />
            </div>
            {showLabels && (
              <span className="compact-theme-label">
                {theme.name}
              </span>
            )}
          </button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMode}
        className="compact-mode-toggle"
        title="Switch between light and dark mode"
      >
        🔄
      </Button>
    </div>
  )
}

export default ThemeSelector
