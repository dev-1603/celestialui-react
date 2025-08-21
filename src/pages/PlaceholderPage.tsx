import { useParams } from 'react-router-dom'
import { Button, Card } from '../../lib/main'
import { componentData } from '../data/components'
import './PlaceholderPage.css'

const loremIpsum = {
  short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  medium: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
}

const categoryEmojis = {
  ATOMIC: '⚛️',
  MOLECULAR: '🧩',
  ORGANISM: '🏗️',
  TEMPLATE: '📐',
  ADVANCED: '🚀'
}

const getRandomFeatures = (componentName: string) => {
  const baseFeatures = [
    'TypeScript support with comprehensive type definitions',
    'Accessibility compliance (WCAG 2.1 AA)',
    'Multiple size variants (xs, sm, md, lg, xl)',
    'Theme support (light/dark mode)',
    'Customizable with CSS custom properties',
    'Responsive design patterns'
  ]

  const componentSpecific = {
    checkbox: ['Indeterminate state support', 'Custom check icons', 'Form validation integration'],
    radio: ['Radio group management', 'Keyboard navigation', 'Custom radio styles'],
    switch: ['Animation transitions', 'Loading state', 'Custom track colors'],
    select: ['Search/filter options', 'Multi-select support', 'Virtual scrolling for large lists'],
    tabs: ['Keyboard navigation', 'Lazy loading tab content', 'Vertical and horizontal orientations'],
    slider: ['Range selection', 'Custom thumb styles', 'Logarithmic scales'],
    progress: ['Animated progress states', 'Circular and linear variants', 'Custom progress colors'],
    avatar: ['Image loading states', 'Fallback text/icons', 'Status indicators'],
    badge: ['Notification dots', 'Custom positioning', 'Animation on value change']
  }

  const specific = componentSpecific[componentName.toLowerCase()] || []
  return [...baseFeatures, ...specific]
}

export const PlaceholderPage = () => {
  const { category, componentName } = useParams()

  // Find component data
  const docPath = category === 'templates' || category === 'advanced'
    ? `/${category}/${componentName}`
    : `/components/${componentName}`

  const component = componentData.find(c => c.docPath === docPath)

  if (!component) {
    return (
      <div className="placeholder-page">
        <div className="placeholder-header error">
          <h1>Component Not Found</h1>
          <p>The component you're looking for doesn't exist in our roadmap.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  const features = getRandomFeatures(component.name)
  const emoji = categoryEmojis[component.category] || '🔧'

  return (
    <div className="placeholder-page">
      <div className="placeholder-header">
        <div className="component-breadcrumb">
          <span className="breadcrumb-category">{component.category}</span>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-component">{component.name}</span>
        </div>

        <h1 className="component-title">
          <span className="component-emoji">{emoji}</span>
          {component.name}
          <span className="status-badge status-planned">Coming Soon</span>
        </h1>

        <p className="component-description">{component.description}</p>

        <div className="placeholder-actions">
          <Button variant="outline" leftIcon="github" onClick={() => window.open('https://github.com/dev-1603/celestialui-react', '_blank')}>
            Follow Progress
          </Button>
          <Button leftIcon="home" onClick={() => window.location.href = '/'}>
            Back to Components
          </Button>
        </div>
      </div>

      <div className="placeholder-content">
        <div className="content-grid">
          <Card className="placeholder-section" title="🎯 Component Overview" padding>
            <p><strong>Status:</strong> Planned for development</p>
            <p><strong>Category:</strong> {component.category} Component</p>
            <p><strong>Priority:</strong> This component is part of our comprehensive UI library roadmap.</p>
            <p>{loremIpsum.medium}</p>
          </Card>

          <Card className="placeholder-section" title="✨ Planned Features" padding>
            <p>When implemented, this component will include:</p>
            <ul className="feature-list">
              {features.slice(0, 6).map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
          </Card>

          <Card className="placeholder-section" title="📋 Implementation Roadmap" padding>
            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Design & Planning</h4>
                  <p>Component API design, accessibility requirements, and visual specifications.</p>
                </div>
              </div>
              <div className="roadmap-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Development</h4>
                  <p>React implementation with TypeScript, comprehensive testing, and documentation.</p>
                </div>
              </div>
              <div className="roadmap-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Integration</h4>
                  <p>Storybook examples, theme integration, and framework compatibility testing.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="placeholder-section" title="🎨 Design Mockup" padding>
            <div className="mockup-placeholder">
              <div className="mockup-header">
                <div className="mockup-title">{component.name} Component</div>
                <div className="mockup-subtitle">Visual representation</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-element primary">
                  <span>Primary State</span>
                </div>
                <div className="mockup-element secondary">
                  <span>Secondary State</span>
                </div>
                <div className="mockup-element disabled">
                  <span>Disabled State</span>
                </div>
              </div>
              <div className="mockup-footer">
                <small>Design mockup - actual implementation may vary</small>
              </div>
            </div>
          </Card>

          <Card className="placeholder-section" title="🔗 Related Components" padding>
            <p>This component works well with:</p>
            <div className="related-components">
              {componentData
                .filter(c => c.category === component.category && c.name !== component.name)
                .slice(0, 4)
                .map(relatedComponent => (
                  <a
                    key={relatedComponent.name}
                    href={relatedComponent.docPath}
                    className="related-component-link"
                  >
                    <span className="related-emoji">{categoryEmojis[relatedComponent.category]}</span>
                    <span className="related-name">{relatedComponent.name}</span>
                    <span className={`related-status ${relatedComponent.implemented ? 'ready' : 'planned'}`}>
                      {relatedComponent.implemented ? '✅' : '⏳'}
                    </span>
                  </a>
                ))}
            </div>
          </Card>

          <Card className="placeholder-section" title="💬 Feedback & Suggestions" padding>
            <p>{loremIpsum.short}</p>
            <div className="feedback-actions">
              <Button
                size="sm"
                variant="outline"
                leftIcon="comment"
                onClick={() => window.open('https://github.com/dev-1603/celestialui-react/discussions', '_blank')}
              >
                Share Feedback
              </Button>
              <Button
                size="sm"
                variant="outline"
                leftIcon="bug"
                onClick={() => window.open('https://github.com/dev-1603/celestialui-react/issues', '_blank')}
              >
                Request Feature
              </Button>
            </div>
          </Card>
        </div>

        <div className="placeholder-sidebar">
          <Card title="📊 Development Stats" padding>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Category</span>
                <span className="stat-value">{component.category}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Status</span>
                <span className="stat-value">Planned</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Priority</span>
                <span className="stat-value">Medium</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Complexity</span>
                <span className="stat-value">
                  {component.category === 'ATOMIC' ? 'Low' :
                   component.category === 'MOLECULAR' ? 'Medium' :
                   component.category === 'ORGANISM' ? 'High' : 'Very High'}
                </span>
              </div>
            </div>
          </Card>

          <Card title="🔄 Updates" padding>
            <div className="updates-list">
              <div className="update-item">
                <div className="update-date">Coming Soon</div>
                <div className="update-text">Component added to roadmap</div>
              </div>
              <div className="update-item">
                <div className="update-date">TBD</div>
                <div className="update-text">Development start</div>
              </div>
              <div className="update-item">
                <div className="update-date">TBD</div>
                <div className="update-text">Beta release</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
