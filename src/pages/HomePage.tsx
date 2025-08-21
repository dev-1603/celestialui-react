import { Link } from 'react-router-dom'
import { getComponentsByCategory, getCategoryStats } from '../data/components'
import { Button } from '../../lib/main'
import './HomePage.css'

const categoryDescriptions = {
  ATOMIC: 'Basic building blocks - fundamental components that cannot be broken down further',
  MOLECULAR: 'Simple combinations - components built by combining atomic components',
  ORGANISM: 'Complex UI patterns - sophisticated components with multiple features',
  TEMPLATE: 'Layout patterns - page-level structure and navigation components',
  ADVANCED: 'Complex interactions - feature-rich components with advanced functionality'
}

export const HomePage = () => {
  const componentsByCategory = getComponentsByCategory()
  const categoryStats = getCategoryStats()
  const totalImplemented = categoryStats.reduce((sum, stat) => sum + stat.implemented, 0)
  const totalComponents = categoryStats.reduce((sum, stat) => sum + stat.total, 0)

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>CelestialUI Components</h1>
        <p className="home-description">
          A comprehensive React component library with multi-framework styling support.
          Build beautiful, accessible interfaces with our growing collection of components.
        </p>

        <div className="home-stats">
          <div className="stat-card">
            <div className="stat-number">{totalImplemented}</div>
            <div className="stat-label">Components Ready</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalComponents}</div>
            <div className="stat-label">Total Planned</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{Math.round((totalImplemented / totalComponents) * 100)}%</div>
            <div className="stat-label">Progress</div>
          </div>
        </div>

        <div className="home-actions">
          <Button
            leftIcon="book"
            onClick={() => window.open('http://localhost:6006', '_blank')}
          >
            View Storybook
          </Button>
          <Button
            variant="outline"
            leftIcon="github"
            onClick={() => window.open('https://github.com/dev-1603/celestialui-react', '_blank')}
          >
            GitHub
          </Button>
        </div>
      </div>

      <div className="home-content">
        {Object.entries(componentsByCategory).map(([category, components]) => {
          const stats = categoryStats.find(s => s.category === category)

          return (
            <section key={category} className="category-section">
              <div className="category-header">
                <div className="category-title-group">
                  <h2 className="category-title">
                    {category} Components
                    <span className="category-count">({stats?.total || 0})</span>
                  </h2>
                  <p className="category-description">
                    {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                  </p>
                </div>
                <div className="category-progress">
                  <div className="progress-stats">
                    <span className="progress-text">
                      {stats?.implemented || 0} of {stats?.total || 0} implemented
                    </span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${((stats?.implemented || 0) / (stats?.total || 1)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="components-table-container">
                <table className="components-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {components.map(component => (
                      <tr key={component.name} className={component.implemented ? '' : 'component-row--pending'}>
                        <td>
                          <Link
                            to={component.docPath}
                            className="component-name-link"
                          >
                            {component.name}
                          </Link>
                        </td>
                        <td className="component-description">
                          {component.description}
                        </td>
                        <td>
                          <span className={`status-badge ${component.implemented ? 'status-badge--ready' : 'status-badge--pending'}`}>
                            {component.implemented ? '✓ Ready' : '⏳ Planned'}
                          </span>
                        </td>
                        <td>
                          <div className="component-actions">
                            <Link to={component.docPath}>
                              <Button size="sm" variant="ghost">
                                Docs
                              </Button>
                            </Link>
                            {component.implemented && component.storybookPath && (
                              <Button
                                size="sm"
                                variant="outline"
                                leftIcon="external-link-alt"
                                onClick={() => window.open(`http://localhost:6006${component.storybookPath}`, '_blank')}
                              >
                                Storybook
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
