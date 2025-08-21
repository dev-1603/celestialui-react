import { Button } from '../../../lib/main'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../lib/hooks/useTheme'
import './Header.css'

interface HeaderProps {
  onToggleSidebar: () => void
  sidebarOpen: boolean
}

export const Header = ({ onToggleSidebar, sidebarOpen }: HeaderProps) => {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme?.mode === 'dark'

  const toggleThemeMode = () => {
    setTheme({
      ...theme,
      mode: isDarkMode ? 'light' : 'dark',
      framework: 'tailwind'
    })
  }

  return (
    <header className="app-header">
      {/* Left Section */}
      <div className="header-left">
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          leftIcon={sidebarOpen ? 'times' : 'bars'}
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          className="sidebar-toggle"
        />
        <Link
          to="/"
          className="header-logo"
        >
          <h1>CelestialUI</h1>
          <span className="version">v1.0.0</span>
        </Link>
      </div>

      {/* Center Navigation */}
      <nav className="header-nav">
        <Button
          variant="ghost"
          size="sm"
          className="nav-button"
          onClick={() => window.location.href = '/'}
        >
          Components
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="nav-button"
          onClick={() => window.location.href = '/playground'}
        >
          Playground
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="nav-button"
          onClick={() => window.location.href = '/themes'}
        >
          Themes
        </Button>
        <Button
          variant="ghost"
          size="sm"
          rightIcon="external-link"
          className="nav-button"
          onClick={() => window.open('http://localhost:6006', '_blank')}
        >
          Storybook
        </Button>
        <Button
          variant="ghost"
          size="sm"
          rightIcon="external-link"
          className="nav-button"
          onClick={() => window.open('http://localhost:3000', '_blank')}
        >
          Docs
        </Button>
      </nav>

      {/* Right Section */}
      <div className="header-actions">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleThemeMode}
          className="theme-mode-toggle"
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {!isDarkMode ? '☀️' : '🌙'}
        </Button>
      </div>
    </header>
  )
}
