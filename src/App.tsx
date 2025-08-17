import { useState } from 'react'
import { Button, Input, Card, Modal, useTheme, useToast, ToastContainer } from '../lib/main'
import '../lib/themes/base.css'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()
  const { success, error, info, warning } = useToast()

  const handleShowToasts = () => {
    success('Success! Operation completed successfully.')
    error('Error! Something went wrong.')
    warning('Warning! Please check your input.')
    info('Info! This is an informational message.')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>CelestialUI React Demo</h1>
        <p>A comprehensive React component library</p>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={toggleTheme}
          rightIcon={isDark ? 'sun' : 'moon'}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>

      <main className="app-main">
        <section className="demo-section">
          <Card title="Button Components" padding>
            <div className="button-grid">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button loading>Loading</Button>
              <Button leftIcon="star">With Icon</Button>
              <Button iconOnly>
                <span>⚙️</span>
              </Button>
            </div>
          </Card>
        </section>

        <section className="demo-section">
          <Card title="Input Components" padding>
            <div className="input-grid">
              <Input 
                label="Basic Input"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input 
                label="Required Input"
                placeholder="Required field"
                required
                prefixIcon="user"
                helperText="This field is required"
              />
              <Input 
                label="Clearable Input"
                placeholder="Clearable text"
                clearable
                suffixIcon="search"
              />
              <Input 
                label="Error State"
                placeholder="Invalid input"
                errorMessage="This field has an error"
                value="invalid value"
              />
            </div>
          </Card>
        </section>

        <section className="demo-section">
          <Card title="Interactive Components" padding>
            <div className="interactive-grid">
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              <Button onClick={handleShowToasts}>
                Show Toasts
              </Button>
            </div>
          </Card>
        </section>

        <section className="demo-section">
          <div className="card-grid">
            <Card 
              variant="elevated"
              hoverable
              title="Elevated Card"
              subtitle="This card has elevation"
              padding
            >
              <p>This is an elevated card with hover effects. It demonstrates the card component with various props.</p>
            </Card>

            <Card 
              variant="outlined"
              hoverable
              title="Outlined Card"
              subtitle="This card is outlined"
              padding
            >
              <p>This is an outlined card that becomes interactive on hover.</p>
            </Card>

            <Card 
              variant="filled"
              clickable
              title="Filled Card"
              subtitle="Click me!"
              padding
              onClick={() => info('Card clicked!')}
            >
              <p>This is a filled card that can be clicked for interaction.</p>
            </Card>
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        title="Demo Modal"
        onClose={() => setIsModalOpen(false)}
        footer={
          <div>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </div>
        }
      >
        <p>This is a modal dialog demonstrating the Modal component from CelestialUI React.</p>
        <p>You can close it by clicking the close button, pressing Escape, or clicking outside.</p>
      </Modal>

      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
