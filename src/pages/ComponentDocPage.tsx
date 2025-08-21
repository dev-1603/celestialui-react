import { useParams, Navigate } from 'react-router-dom'
import { componentData } from '../data/components'
import { Button, Card } from '../../lib/main'
import './ComponentDocPage.css'

export const ComponentDocPage = () => {
  const { category, componentName } = useParams()

  // Find the component by constructing the path
  const docPath = category === 'templates' || category === 'advanced'
    ? `/${category}/${componentName}`
    : `/components/${componentName}`

  const component = componentData.find(c => c.docPath === docPath)

  if (!component) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="component-doc-page">
      <div className="doc-header">
        <div className="doc-breadcrumb">
          <span className="breadcrumb-category">{component.category}</span>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-component">{component.name}</span>
        </div>

        <h1 className="doc-title">{component.name}</h1>
        <p className="doc-description">{component.description}</p>

        <div className="doc-status">
          <span className={`status-badge ${component.implemented ? 'status-ready' : 'status-planned'}`}>
            {component.implemented ? '✓ Ready' : '⏳ Planned'}
          </span>
          <span className="category-badge">{component.category}</span>
        </div>

        {component.implemented && (
          <div className="doc-actions">
            {component.storybookPath && (
              <Button
                leftIcon="book"
                onClick={() => window.open(`http://localhost:6006${component.storybookPath}`, '_blank')}
              >
                View in Storybook
              </Button>
            )}
            <Button
              variant="outline"
              leftIcon="github"
              onClick={() => window.open('https://github.com/dev-1603/celestialui-react', '_blank')}
            >
              View Source
            </Button>
          </div>
        )}
      </div>

      <div className="doc-content">
        {component.implemented ? (
          <div className="doc-sections">
            <Card className="doc-section" padding>
              <h2>Overview</h2>
              <p>
                The <strong>{component.name}</strong> component is part of the {component.category.toLowerCase()}
                component category. {component.description}
              </p>

              {component.storybookPath && (
                <p>
                  <strong>Interactive Examples:</strong> View live examples and play with component
                  properties in our <a
                    href={`http://localhost:6006${component.storybookPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Storybook documentation
                  </a>.
                </p>
              )}
            </Card>

            <Card className="doc-section" padding>
              <h2>Usage</h2>
              <div className="code-block">
                <pre><code>{`import { ${component.name} } from '@celestial-ui/react'

// Basic usage
<${component.name} />

// With props (example)
<${component.name}
  variant="primary"
  size="md"
>
  Content
</${component.name}>`}</code></pre>
              </div>
            </Card>

            <Card className="doc-section" padding>
              <h2>Features</h2>
              <ul>
                <li>✅ TypeScript support with full type definitions</li>
                <li>✅ Accessible by default with ARIA attributes</li>
                <li>✅ Customizable with CSS custom properties</li>
                <li>✅ Multiple variants and sizes</li>
                <li>✅ Responsive design</li>
                <li>✅ Theme support (light/dark mode)</li>
              </ul>
            </Card>

            <Card className="doc-section" padding>
              <h2>Documentation</h2>
              <p>
                For comprehensive documentation including API reference, examples, and advanced usage patterns,
                visit our full documentation site powered by Docusaurus.
              </p>
              <Button
                variant="outline"
                leftIcon="external-link-alt"
                onClick={() => window.open('http://localhost:3000', '_blank')}
              >
                View Full Documentation
              </Button>
            </Card>
          </div>
        ) : (
          <Card className="doc-section doc-section--planned" padding>
            <h2>Component Planned</h2>
            <p>
              The <strong>{component.name}</strong> component is currently in the planning phase.
              This component will be implemented as part of our roadmap to provide a comprehensive
              component library.
            </p>

            <h3>What to expect:</h3>
            <ul>
              <li>Full TypeScript support</li>
              <li>Accessibility compliance (WCAG 2.1 AA)</li>
              <li>Multiple variants and customization options</li>
              <li>Comprehensive Storybook documentation</li>
              <li>Unit and integration tests</li>
            </ul>

            <h3>Stay Updated</h3>
            <p>
              Follow our progress on GitHub or check back here for updates on implementation status.
            </p>

            <div className="planned-actions">
              <Button
                variant="outline"
                leftIcon="github"
                onClick={() => window.open('https://github.com/dev-1603/celestialui-react', '_blank')}
              >
                Follow on GitHub
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
