import React from 'react'
import { Icon } from '../../ui/icon/Icon'
import type { ToastOptions } from '../../../types'
import './Toast.css'

interface ToastProps extends Required<Omit<ToastOptions, 'action' | 'title'>> {
  onClose: () => void
  title?: string
  action?: ToastOptions['action']
}

export const Toast: React.FC<ToastProps> = ({
  id: _id,
  title,
  message,
  type,
  persistent: _persistent,
  action,
  onClose
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success': return 'check-circle'
      case 'error': return 'exclamation-circle'
      case 'warning': return 'exclamation-triangle'
      case 'info':
      default: return 'info-circle'
    }
  }

  const getIconColor = () => {
    switch (type) {
      case 'success': return 'var(--cui-color-success-500)'
      case 'error': return 'var(--cui-color-error-500)'
      case 'warning': return 'var(--cui-color-warning-500)'
      case 'info':
      default: return 'var(--cui-color-primary-500)'
    }
  }

  return (
    <div className={`cui-toast cui-toast--${type}`}>
      <div className="cui-toast__icon">
        <Icon name={getIcon()} color={getIconColor()} />
      </div>

      <div className="cui-toast__content">
        {title && <div className="cui-toast__title">{title}</div>}
        <div className="cui-toast__message">{message}</div>
      </div>

      {action && (
        <button
          className="cui-toast__action"
          onClick={action.handler}
        >
          {action.label}
        </button>
      )}

      <button
        className="cui-toast__close"
        onClick={onClose}
        aria-label="Close notification"
      >
        <Icon name="times" />
      </button>
    </div>
  )
}

export default Toast
