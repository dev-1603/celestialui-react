import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { PlaygroundPage } from './pages/PlaygroundPage'
import { ComponentDocPage } from './pages/ComponentDocPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { ThemeProvider } from './providers/ThemeProvider'
import '../lib/themes/base.css'
import './styles/design-system.css'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />

          {/* Developed component routes */}
          <Route path="/components/button" element={<ComponentDocPage />} />
          <Route path="/components/input" element={<ComponentDocPage />} />
          <Route path="/components/icon" element={<ComponentDocPage />} />
          <Route path="/components/card" element={<ComponentDocPage />} />
          <Route path="/components/modal" element={<ComponentDocPage />} />
          <Route path="/components/toast" element={<ComponentDocPage />} />

          {/* Placeholder routes for undeveloped components */}
          <Route path="/components/checkbox" element={<PlaceholderPage />} />
          <Route path="/components/radio" element={<PlaceholderPage />} />
          <Route path="/components/switch" element={<PlaceholderPage />} />
          <Route path="/components/slider" element={<PlaceholderPage />} />
          <Route path="/components/progress" element={<PlaceholderPage />} />
          <Route path="/components/avatar" element={<PlaceholderPage />} />
          <Route path="/components/badge" element={<PlaceholderPage />} />
          <Route path="/components/divider" element={<PlaceholderPage />} />
          <Route path="/components/skeleton" element={<PlaceholderPage />} />
          <Route path="/components/spinner" element={<PlaceholderPage />} />
          <Route path="/components/heading" element={<PlaceholderPage />} />
          <Route path="/components/text" element={<PlaceholderPage />} />
          <Route path="/components/code" element={<PlaceholderPage />} />
          <Route path="/components/link" element={<PlaceholderPage />} />
          <Route path="/components/icon-button" element={<PlaceholderPage />} />
          <Route path="/components/kbd" element={<PlaceholderPage />} />

          {/* Molecular Components */}
          <Route path="/components/select" element={<PlaceholderPage />} />
          <Route path="/components/multiselect" element={<PlaceholderPage />} />
          <Route path="/components/textarea" element={<PlaceholderPage />} />
          <Route path="/components/file-upload" element={<PlaceholderPage />} />
          <Route path="/components/date-picker" element={<PlaceholderPage />} />
          <Route path="/components/time-picker" element={<PlaceholderPage />} />
          <Route path="/components/color-picker" element={<PlaceholderPage />} />
          <Route path="/components/number-input" element={<PlaceholderPage />} />
          <Route path="/components/search-input" element={<PlaceholderPage />} />
          <Route path="/components/password-input" element={<PlaceholderPage />} />
          <Route path="/components/pin-input" element={<PlaceholderPage />} />
          <Route path="/components/form-field" element={<PlaceholderPage />} />
          <Route path="/components/form-label" element={<PlaceholderPage />} />
          <Route path="/components/form-helper-text" element={<PlaceholderPage />} />
          <Route path="/components/form-error-message" element={<PlaceholderPage />} />
          <Route path="/components/fieldset" element={<PlaceholderPage />} />
          <Route path="/components/input-group" element={<PlaceholderPage />} />
          <Route path="/components/tabs" element={<PlaceholderPage />} />
          <Route path="/components/breadcrumb" element={<PlaceholderPage />} />
          <Route path="/components/pagination" element={<PlaceholderPage />} />
          <Route path="/components/steps" element={<PlaceholderPage />} />
          <Route path="/components/menu" element={<PlaceholderPage />} />
          <Route path="/components/context-menu" element={<PlaceholderPage />} />
          <Route path="/components/alert" element={<PlaceholderPage />} />
          <Route path="/components/notification" element={<PlaceholderPage />} />
          <Route path="/components/popover" element={<PlaceholderPage />} />
          <Route path="/components/tooltip" element={<PlaceholderPage />} />
          <Route path="/components/dialog" element={<PlaceholderPage />} />
          <Route path="/components/drawer" element={<PlaceholderPage />} />
          <Route path="/components/sheet" element={<PlaceholderPage />} />

          {/* Organism Components */}
          <Route path="/components/table" element={<PlaceholderPage />} />
          <Route path="/components/data-table" element={<PlaceholderPage />} />
          <Route path="/components/virtual-table" element={<PlaceholderPage />} />
          <Route path="/components/list" element={<PlaceholderPage />} />
          <Route path="/components/infinite-scroll" element={<PlaceholderPage />} />
          <Route path="/components/image" element={<PlaceholderPage />} />
          <Route path="/components/carousel" element={<PlaceholderPage />} />
          <Route path="/components/gallery" element={<PlaceholderPage />} />
          <Route path="/components/video-player" element={<PlaceholderPage />} />
          <Route path="/components/container" element={<PlaceholderPage />} />
          <Route path="/components/stack" element={<PlaceholderPage />} />
          <Route path="/components/grid" element={<PlaceholderPage />} />
          <Route path="/components/flex" element={<PlaceholderPage />} />
          <Route path="/components/box" element={<PlaceholderPage />} />
          <Route path="/components/center" element={<PlaceholderPage />} />
          <Route path="/components/spacer" element={<PlaceholderPage />} />
          <Route path="/components/sidebar" element={<PlaceholderPage />} />
          <Route path="/components/header" element={<PlaceholderPage />} />
          <Route path="/components/footer" element={<PlaceholderPage />} />
          <Route path="/components/app-shell" element={<PlaceholderPage />} />
          <Route path="/components/form-wizard" element={<PlaceholderPage />} />
          <Route path="/components/form-builder" element={<PlaceholderPage />} />
          <Route path="/components/survey" element={<PlaceholderPage />} />
          <Route path="/components/autocomplete" element={<PlaceholderPage />} />
          <Route path="/components/combo-box" element={<PlaceholderPage />} />
          <Route path="/components/mention" element={<PlaceholderPage />} />
          <Route path="/components/tag-input" element={<PlaceholderPage />} />

          {/* Template Components */}
          <Route path="/templates/dashboard-layout" element={<PlaceholderPage />} />
          <Route path="/templates/admin-layout" element={<PlaceholderPage />} />
          <Route path="/templates/auth-layout" element={<PlaceholderPage />} />
          <Route path="/templates/landing-layout" element={<PlaceholderPage />} />
          <Route path="/templates/error-layout" element={<PlaceholderPage />} />
          <Route path="/templates/app-bar" element={<PlaceholderPage />} />
          <Route path="/templates/navigation-rail" element={<PlaceholderPage />} />
          <Route path="/templates/bottom-navigation" element={<PlaceholderPage />} />
          <Route path="/templates/side-navigation" element={<PlaceholderPage />} />

          {/* Advanced Components */}
          <Route path="/advanced/rich-text-editor" element={<PlaceholderPage />} />
          <Route path="/advanced/code-editor" element={<PlaceholderPage />} />
          <Route path="/advanced/markdown-editor" element={<PlaceholderPage />} />
          <Route path="/advanced/calendar" element={<PlaceholderPage />} />
          <Route path="/advanced/timeline" element={<PlaceholderPage />} />
          <Route path="/advanced/kanban" element={<PlaceholderPage />} />
          <Route path="/advanced/chart" element={<PlaceholderPage />} />
          <Route path="/advanced/graph" element={<PlaceholderPage />} />
          <Route path="/advanced/sparkline" element={<PlaceholderPage />} />
          <Route path="/advanced/heatmap" element={<PlaceholderPage />} />
          <Route path="/advanced/command" element={<PlaceholderPage />} />
          <Route path="/advanced/spotlight" element={<PlaceholderPage />} />
          <Route path="/advanced/tree-view" element={<PlaceholderPage />} />
          <Route path="/advanced/file-explorer" element={<PlaceholderPage />} />
          <Route path="/advanced/virtual-list" element={<PlaceholderPage />} />

          {/* Catch-all for any other component routes */}
          <Route path="/components/:componentName" element={<PlaceholderPage />} />
          <Route path="/templates/:componentName" element={<PlaceholderPage />} />
          <Route path="/advanced/:componentName" element={<PlaceholderPage />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
