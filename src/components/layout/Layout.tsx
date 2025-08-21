import { useState, ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { ToastContainer } from '../../../lib/main'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="app-layout">
      <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="app-body">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <main className="app-main">
          <div className="app-content">
            {children}
          </div>
        </main>
      </div>

      <ToastContainer position="top-right" />
    </div>
  )
}
