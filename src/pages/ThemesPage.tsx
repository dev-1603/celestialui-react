import { useState } from 'react'
import { Button, Card, ThemeSelector, useCelestialTheme, useThemeColors } from '../../lib/main'
import './ThemesPage.css'

export const ThemesPage = () => {
  const { currentTheme, currentThemeId, featuredThemes } = useCelestialTheme()
  const { colors, getColor } = useThemeColors()
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleThemeChange = (themeId: string, theme: any) => {
    console.log(`Theme changed to: ${theme.name} (${themeId})`)
  }

  return (
    <div className="themes-page">
      {/* Hero Section */}
      <section className="themes-hero">
        <div className="themes-hero-content">
          <h1 className="themes-hero-title">
            Celestial Themes
          </h1>
          <p className="themes-hero-description">
            Transform your interface with our collection of celestial-inspired color palettes.
            Each theme is carefully crafted to evoke the beauty of the cosmos while maintaining
            excellent accessibility and usability.
          </p>

          {currentTheme && (
            <Card elevation={2} className="current-theme-showcase">
              <div className="current-theme-info">
                <div className="current-theme-header">
                  <h3>Currently Active: {currentTheme.name}</h3>
                  <div className="theme-mode-badge theme-mode-badge--{currentTheme.mode}">
                    {currentTheme.mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
                  </div>
                </div>
                <p className="current-theme-desc">{currentTheme.description}</p>

                <div className="current-theme-colors">
                  <div className="color-palette">
                    <div className="color-group">
                      <span className="color-label">Primary</span>
                      <div className="color-swatches">
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.primary?.['300'] }}
                          title="Primary 300"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.primary?.['400'] }}
                          title="Primary 400"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.primary?.['500'] }}
                          title="Primary 500"
                        />
                      </div>
                    </div>
                    <div className="color-group">
                      <span className="color-label">Secondary</span>
                      <div className="color-swatches">
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.secondary?.['300'] }}
                          title="Secondary 300"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.secondary?.['400'] }}
                          title="Secondary 400"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.secondary?.['500'] }}
                          title="Secondary 500"
                        />
                      </div>
                    </div>
                    <div className="color-group">
                      <span className="color-label">Background</span>
                      <div className="color-swatches">
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.background?.base }}
                          title="Base Background"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.background?.surface }}
                          title="Surface Background"
                        />
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: colors?.background?.muted }}
                          title="Muted Background"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Theme Selector */}
      <section className="themes-selector-section">
        <ThemeSelector
          onThemeChange={handleThemeChange}
          showSystemPreference={true}
          groupByMode={true}
          showOnlyFeatured={false}
        />
      </section>

      {/* Advanced Options */}
      <section className="themes-advanced-section">
        <Card elevation={1} className="advanced-options">
          <div className="advanced-header">
            <h3>Advanced Theme Options</h3>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={showAdvanced ? 'chevron-up' : 'chevron-down'}
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? 'Hide' : 'Show'} Advanced
            </Button>
          </div>

          {showAdvanced && (
            <div className="advanced-content">
              <div className="advanced-grid">
                <div className="advanced-item">
                  <h4>Theme Information</h4>
                  <div className="theme-stats">
                    <div className="stat-item">
                      <span className="stat-label">Current Theme ID:</span>
                      <code className="stat-value">{currentThemeId}</code>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Mode:</span>
                      <span className="stat-value">{currentTheme?.mode || 'Unknown'}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Category:</span>
                      <span className="stat-value">{currentTheme?.category || 'Unknown'}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Featured:</span>
                      <span className="stat-value">
                        {currentTheme?.featured ? '✨ Yes' : '❌ No'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="advanced-item">
                  <h4>Color Values</h4>
                  <div className="color-values">
                    <div className="color-value-item">
                      <span className="color-value-label">Primary 500:</span>
                      <code className="color-value-code">
                        {getColor('primary.500')}
                      </code>
                      <div
                        className="color-value-swatch"
                        style={{ backgroundColor: getColor('primary.500') }}
                      />
                    </div>
                    <div className="color-value-item">
                      <span className="color-value-label">Text Primary:</span>
                      <code className="color-value-code">
                        {getColor('text.primary')}
                      </code>
                      <div
                        className="color-value-swatch"
                        style={{ backgroundColor: getColor('text.primary') }}
                      />
                    </div>
                    <div className="color-value-item">
                      <span className="color-value-label">Background Base:</span>
                      <code className="color-value-code">
                        {getColor('background.base')}
                      </code>
                      <div
                        className="color-value-swatch"
                        style={{ backgroundColor: getColor('background.base') }}
                      />
                    </div>
                  </div>
                </div>

                <div className="advanced-item">
                  <h4>Theme Actions</h4>
                  <div className="theme-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const data = JSON.stringify(currentTheme, null, 2)
                        navigator.clipboard.writeText(data)
                        // TODO: Show toast notification
                        console.log('Theme data copied to clipboard')
                      }}
                    >
                      📋 Copy Theme JSON
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const cssVars = Object.entries(colors || {})
                          .flatMap(([category, colorObj]) =>
                            Object.entries(colorObj as any).map(([key, value]) =>
                              `--cui-color-${category}-${key}: ${value};`
                            )
                          ).join('\n')
                        navigator.clipboard.writeText(cssVars)
                        console.log('CSS variables copied to clipboard')
                      }}
                    >
                      🎨 Copy CSS Variables
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </section>

      {/* Featured Themes Quick Access */}
      <section className="featured-themes-section">
        <h2>Featured Celestial Themes</h2>
        <p>Our most popular and versatile themes, perfect for any application.</p>

        <div className="featured-themes-grid">
          {featuredThemes.map(([themeId, theme]) => (
            <Card
              key={themeId}
              elevation={2}
              className={`featured-theme-card ${currentThemeId === themeId ? 'featured-theme-card--active' : ''}`}
            >
              <div className="featured-theme-preview">
                <div className="featured-theme-colors">
                  <div
                    className="featured-color featured-color--primary"
                    style={{ backgroundColor: theme.colors.primary['500'] }}
                  />
                  <div
                    className="featured-color featured-color--secondary"
                    style={{ backgroundColor: theme.colors.secondary['500'] }}
                  />
                  <div
                    className="featured-color featured-color--bg"
                    style={{ backgroundColor: theme.colors.background.base }}
                  />
                </div>
                <div className="featured-theme-mode">
                  {theme.mode === 'dark' ? '🌙' : '☀️'}
                </div>
              </div>

              <div className="featured-theme-info">
                <h4>{theme.name}</h4>
                <p>{theme.description}</p>

                {currentThemeId === themeId ? (
                  <Button variant="filled" size="sm" disabled>
                    ✓ Active
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleThemeChange(themeId, theme)}
                  >
                    Apply Theme
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Theme Guidelines */}
      <section className="theme-guidelines">
        <Card elevation={1}>
          <h2>Theme Usage Guidelines</h2>

          <div className="guidelines-grid">
            <div className="guideline-item">
              <h4>🌌 Celestial Themes</h4>
              <p>
                Our celestial themes draw inspiration from the cosmos - deep space colors,
                starlit nights, and cosmic phenomena. Perfect for creating immersive,
                sophisticated interfaces.
              </p>
            </div>

            <div className="guideline-item">
              <h4>♿ Accessibility</h4>
              <p>
                All themes meet WCAG 2.1 AA standards for color contrast. Text remains
                readable across all color combinations, ensuring your app is accessible
                to everyone.
              </p>
            </div>

            <div className="guideline-item">
              <h4>🎨 Customization</h4>
              <p>
                Themes are config-driven and easily customizable. Modify colors in the
                JSON configuration or extend themes with your own brand colors while
                maintaining consistency.
              </p>
            </div>

            <div className="guideline-item">
              <h4>📱 Responsive Design</h4>
              <p>
                All themes work seamlessly across devices and screen sizes. Colors are
                optimized for both light and dark environments, with proper contrast
                adjustments.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
