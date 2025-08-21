import { useState } from 'react'
import { Button, Input, Card, Modal, useTheme, useToast } from '../../lib/main'
import { ThemeSelector } from '../components/accessibilty/ThemeSelector'
import { Link } from 'react-router-dom'
import './PlaygroundPage.css'

export const PlaygroundPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()
  const { success, error, info, warning } = useToast()

  const handleShowToasts = () => {
    success('Success! Operation completed successfully.', { duration: 4000 })
    setTimeout(() => error('Error! Something went wrong.'), 500)
    setTimeout(() => warning('Warning! Please check your input.'), 1000)
    setTimeout(() => info('Info! This is an informational message.'), 1500)
  }

  return (
    <div className="playground-page">
      <div className="playground-header">
        <h1>🎮 Component Playground</h1>
        <p>
          Interact with CelestialUI components in real-time. This playground showcases
          the implemented components with various configurations and states.
        </p>
        <div className="playground-stats">
          <span className="stat-pill">✅ 6 Components Ready</span>
          <span className="stat-pill">🔄 Live Examples</span>
          <span className="stat-pill">🎨 Interactive</span>
        </div>
      </div>

      <div className="playground-content">
        {/* Button Examples */}
        <section className="playground-section">
          <Card title="🔘 Button Components" subtitle="Various button variants, sizes, and states" padding>
            <div className="demo-grid">
              <div className="demo-group">
                <h4>Variants</h4>
                <div className="button-grid">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div className="demo-group">
                <h4>With Icons</h4>
                <div className="button-grid">
                  <Button leftIcon="star" variant="primary">Star</Button>
                  <Button rightIcon="chevron-right" variant="outline">Next</Button>
                  <Button leftIcon="download" rightIcon="chevron-down">Download</Button>
                  <Button iconOnly leftIcon="cog" aria-label="Settings" />
                  <Button iconOnly leftIcon="heart" variant="outline" rounded aria-label="Like" />
                </div>
              </div>

              <div className="demo-group">
                <h4>Sizes</h4>
                <div className="button-grid">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div className="demo-group">
                <h4>States</h4>
                <div className="button-grid">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading iconOnly aria-label="Loading" />
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Theme Selector Examples */}
        <section className="playground-section">
          <Card title="🎨 Theme System" subtitle="Professional themes with both light and dark modes" padding>
            <div className="theme-showcase">
              <div className="theme-demo">
                <h4>New Professional Theme System</h4>
                <p className="theme-description">
                  This updated system includes 20 professional themes, each with both light and dark modes.
                  Use the 🌙/☀️ toggle in the header to switch between light and dark modes globally.
                </p>
                <div className="theme-selector-demo">
                  <ThemeSelector />
                </div>
              </div>

              <div className="theme-features">
                <h4>Features</h4>
                <ul className="feature-list">
                  <li>🎯 20 professional themes for enterprise applications</li>
                  <li>🌙☀️ Global dark/light mode toggle in header</li>
                  <li>🌈 Each theme has both light and dark palettes</li>
                  <li>🔍 Hover to see color details with hex codes</li>
                  <li>📱 Responsive design for mobile and desktop</li>
                  <li>✨ Clean, modern interface design</li>
                </ul>

                <h4>Theme Categories</h4>
                <ul className="feature-list">
                  <li>🏢 Corporate: Enterprise-ready themes</li>
                  <li>📊 Analytics: Data-focused palettes</li>
                  <li>🎨 Creative: Bold and expressive</li>
                  <li>💼 Professional: Balanced and trustworthy</li>
                  <li>🌿 Nature: Calming and sustainable</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Input Examples */}
        <section className="playground-section">
          <Card title="📝 Input Components" subtitle="Form inputs with different states and features" padding>
            <div className="input-showcase">
              <div className="input-grid">
                <Input
                  label="Basic Input"
                  placeholder="Enter your name..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Email Input"
                  type="email"
                  placeholder="you@example.com"
                  prefixIcon="envelope"
                  clearable
                  helperText="We'll never share your email"
                />
                <Input
                  label="Search Input"
                  placeholder="Search components..."
                  prefixIcon="search"
                  clearable
                  suffixIcon="filter"
                />
                <Input
                  label="Password Input"
                  type="password"
                  placeholder="Enter password"
                  suffixIcon="eye"
                  required
                />
                <Input
                  label="Error State"
                  placeholder="Invalid input"
                  errorMessage="This field has an error"
                  value="invalid@"
                  prefixIcon="times-circle"
                />
                <Input
                  label="Loading State"
                  placeholder="Please wait..."
                  loading
                  helperText="Validating input..."
                />
                <Input
                  label="Disabled Input"
                  placeholder="Read-only field"
                  disabled
                  value="Cannot edit this"
                />
                <Input
                  label="Dense Input"
                  placeholder="Compact input"
                  dense
                  clearable
                  helperText="Smaller height variant"
                />
              </div>

              <div className="input-demo-result">
                <h4>Live Input Value:</h4>
                <div className="result-display">
                  {inputValue || <em>Type in the basic input above...</em>}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Card Examples */}
        <section className="playground-section">
          <Card title="🃏 Card Components" subtitle="Flexible containers with various configurations" padding>
            <div className="card-showcase">
              <div className="card-grid">
                <Card
                  variant="elevated"
                  hoverable
                  title="Elevated Card"
                  subtitle="Hover to see effect"
                  actions={<Button size="sm" variant="ghost">•••</Button>}
                  padding
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <Button size="sm">Action</Button>
                    <Button size="sm" variant="outline">Cancel</Button>
                  </div>
                </Card>

                <Card
                  variant="outlined"
                  hoverable
                  title="Outlined Card"
                  subtitle="With media content"
                  media={
                    <div style={{
                      height: '120px',
                      background: 'linear-gradient(135deg, var(--cui-color-primary) 0%, var(--cui-color-accent) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      Media Area
                    </div>
                  }
                  padding
                >
                  <p>Cards can include media elements and are perfect for displaying content with images.</p>
                </Card>

                <Card
                  variant="filled"
                  clickable
                  title="Interactive Card"
                  subtitle="Click me!"
                  padding
                  onClick={() => info('Card clicked! 🎉')}
                >
                  <p>This card is clickable and will show a toast notification when clicked.</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cui-color-text-secondary)', marginTop: '1rem' }}>
                    ✨ Try clicking anywhere on this card
                  </p>
                </Card>

                <Card
                  title="Card with Footer"
                  subtitle="Complete example"
                  footer={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--cui-color-text-secondary)' }}>
                        Last updated: Just now
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm">Save</Button>
                      </div>
                    </div>
                  }
                  padding
                >
                  <p>This card demonstrates the footer prop with custom actions and metadata.</p>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        {/* Interactive Components */}
        <section className="playground-section">
          <Card title="⚡ Interactive Components" subtitle="Components with dynamic behavior" padding>
            <div className="interactive-showcase">
              <div className="interactive-grid">
                <div className="demo-item">
                  <h4>Modal Dialog</h4>
                  <p>Open modal dialogs with custom content and actions.</p>
                  <Button onClick={() => setIsModalOpen(true)} leftIcon="window-maximize">
                    Open Modal
                  </Button>
                </div>

                <div className="demo-item">
                  <h4>Toast Notifications</h4>
                  <p>Show toast notifications with different types and positions.</p>
                  <Button onClick={handleShowToasts} leftIcon="bell">
                    Show All Toasts
                  </Button>
                </div>

                <div className="demo-item">
                  <h4>Theme Toggle</h4>
                  <p>Switch between light and dark themes dynamically.</p>
                  <Button onClick={toggleTheme} leftIcon={isDark ? 'sun' : 'moon'} variant="outline">
                    {isDark ? 'Light' : 'Dark'} Mode
                  </Button>
                </div>

                <div className="demo-item">
                  <h4>Quick Toasts</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Button size="sm" onClick={() => success('Success!')} leftIcon="check">Success</Button>
                    <Button size="sm" onClick={() => error('Error!')} leftIcon="times" variant="destructive">Error</Button>
                    <Button size="sm" onClick={() => warning('Warning!')} leftIcon="exclamation-triangle" variant="outline">Warning</Button>
                    <Button size="sm" onClick={() => info('Info!')} leftIcon="info-circle" variant="ghost">Info</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Coming Soon Components */}
        <section className="playground-section">
          <Card title="🚧 Coming Soon" subtitle="Components in development" padding>
            <div className="coming-soon-grid">
              {[
                { name: 'Checkbox', path: '/components/checkbox', icon: '☑️' },
                { name: 'Radio', path: '/components/radio', icon: '🔘' },
                { name: 'Switch', path: '/components/switch', icon: '🎚️' },
                { name: 'Select', path: '/components/select', icon: '📋' },
                { name: 'Tabs', path: '/components/tabs', icon: '📑' },
                { name: 'Slider', path: '/components/slider', icon: '🎛️' },
              ].map(component => (
                <Link key={component.name} to={component.path} className="coming-soon-item">
                  <span className="coming-soon-icon">{component.icon}</span>
                  <span className="coming-soon-name">{component.name}</span>
                  <span className="coming-soon-status">Coming Soon</span>
                </Link>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--cui-color-text-secondary)' }}>
              <strong>More components are being developed!</strong> Check back soon or
              <Link to="/" style={{ marginLeft: '0.25rem' }}>view the full roadmap</Link>.
            </p>
          </Card>
        </section>
      </div>

      {/* Enhanced Modal */}
      <Modal
        isOpen={isModalOpen}
        title="🎉 Demo Modal"
        onClose={() => setIsModalOpen(false)}
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--cui-color-text-secondary)' }}>
              Modal opened at {new Date().toLocaleTimeString()}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                success('Modal confirmed!')
                setIsModalOpen(false)
              }}>
                Confirm
              </Button>
            </div>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p><strong>This is an enhanced modal example!</strong></p>
          <p>The Modal component supports:</p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
            <li>✅ Custom headers and footers</li>
            <li>✅ Scrollable content for long forms</li>
            <li>✅ Fullscreen mode for mobile</li>
            <li>✅ Persistent mode (disable outside click)</li>
            <li>✅ Keyboard navigation (ESC to close)</li>
            <li>✅ Focus management for accessibility</li>
          </ul>
          <div style={{
            padding: '1rem',
            background: 'var(--cui-color-primary-25)',
            borderRadius: '0.5rem',
            border: '1px solid var(--cui-color-primary-200)'
          }}>
            <p style={{ margin: '0', fontSize: '0.875rem' }}>
              <strong>Pro Tip:</strong> Try pressing ESC to close this modal, or click outside the modal area!
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
