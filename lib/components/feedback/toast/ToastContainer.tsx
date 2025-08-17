import React from 'react'
import { createPortal } from 'react-dom'
import { useToast } from '../../../hooks/useToast'
import { Toast } from './Toast'
import type { ToastOptions } from '../../../types'

interface ToastContainerProps {
  position?: ToastOptions['position']
  zIndex?: number
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  zIndex = 9999
}) => {
  const { toasts, removeToast } = useToast()

  const getPositionClass = () => {
    return `cui-toast-container--${position}`
  }

  const containerStyle = {
    zIndex
  }

  if (toasts.length === 0) return null

  const content = (
    <div
      className={`cui-toast-container ${getPositionClass()}`}
      style={containerStyle}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )

  return createPortal(content, document.body)
}

export default ToastContainer
