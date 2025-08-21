import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
  import { Card } from '../../../lib/main'
import { ThemeSelector } from '../accessibilty/ThemeSelector'
import { getComponentsByCategory, getCategoryStats } from '../../data/components'
import './Sidebar.css'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const categoryIcons = {
  ATOMIC: 'atom',
  MOLECULAR: 'cubes',
  ORGANISM: 'sitemap',
  TEMPLATE: 'layer-group',
  ADVANCED: 'rocket'
}

const categoryDescriptions = {
  ATOMIC: 'Basic building blocks',
  MOLECULAR: 'Simple combinations',
  ORGANISM: 'Complex UI patterns',
  TEMPLATE: 'Layout patterns',
  ADVANCED: 'Complex interactions'
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation()
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    ATOMIC: true,
    MOLECULAR: false,
    ORGANISM: false,
    TEMPLATE: false,
    ADVANCED: false
  })

  const componentsByCategory = getComponentsByCategory()
  const categoryStats = getCategoryStats()

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-content">
          {/* Theme Selector */}
          <div className="sidebar-theme-section">
            <ThemeSelector />
          </div>

          <Card elevation={1} className="sidebar-card" padding={false}>
            <div className="sidebar-section">
              <h3 className="sidebar-section-title">Overview</h3>
              <ul className="sidebar-nav">
                <li>
                  <Link
                    to="/"
                    className={`sidebar-link ${isActivePath('/') ? 'sidebar-link--active' : ''}`}
                    onClick={onClose}
                  >
                    <span className="sidebar-icon">🏠</span>
                    All Components
                  </Link>
                </li>
                <li>
                  <Link
                    to="/playground"
                    className={`sidebar-link ${isActivePath('/playground') ? 'sidebar-link--active' : ''}`}
                    onClick={onClose}
                  >
                    <span className="sidebar-icon">🎮</span>
                    Playground
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-section-title">Components by Category</h3>

              {Object.entries(componentsByCategory).map(([category, components]) => {
                const stats = categoryStats.find(s => s.category === category)
                const isExpanded = expandedCategories[category]

                return (
                  <div key={category} className="sidebar-category">
                    <button
                      className={`sidebar-category-toggle ${isExpanded ? 'sidebar-category-toggle--expanded' : ''}`}
                      onClick={() => toggleCategory(category)}
                    >
                      <div className="sidebar-category-header">
                        <span className="sidebar-icon">
                          <i className={`fas fa-${categoryIcons[category as keyof typeof categoryIcons]}`} />
                        </span>
                        <div className="sidebar-category-info">
                          <span className="sidebar-category-name">{category}</span>
                          <span className="sidebar-category-desc">
                            {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                          </span>
                        </div>
                        <div className="sidebar-category-stats">
                          <span className="sidebar-stats-badge">
                            {stats?.implemented || 0}/{stats?.total || 0}
                          </span>
                          <span className={`sidebar-chevron ${isExpanded ? 'sidebar-chevron--expanded' : ''}`}>
                            <i className="fas fa-chevron-down" />
                          </span>
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <ul className="sidebar-component-list">
                        {components.map(component => (
                          <li key={component.name}>
                            <Link
                              to={component.docPath}
                              className={`sidebar-component-link ${isActivePath(component.docPath) ? 'sidebar-component-link--active' : ''} ${component.implemented ? '' : 'sidebar-component-link--disabled'}`}
                              onClick={onClose}
                            >
                              <div className="sidebar-component-info">
                                <span className="sidebar-component-name">
                                  {component.name}
                                  {component.implemented && (
                                    <span className="sidebar-component-badge">✓</span>
                                  )}
                                </span>
                                <span className="sidebar-component-desc">
                                  {component.description}
                                </span>
                              </div>
                              {component.implemented && component.storybookPath && (
                                <a
                                  href={`http://localhost:6006${component.storybookPath}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="sidebar-storybook-link"
                                  onClick={(e) => e.stopPropagation()}
                                  title="View in Storybook"
                                >
                                  <i className="fas fa-external-link-alt" />
                                </a>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="sidebar-section sidebar-section--bottom">
              <div className="sidebar-stats">
                <h4>Progress Overview</h4>
                {categoryStats.map(stat => (
                  <div key={stat.category} className="stat-row">
                    <span className="stat-label">{stat.category}</span>
                    <span className="stat-value">{stat.implemented}/{stat.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </aside>
    </>
  )
}
