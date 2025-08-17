import React, { useEffect, useMemo, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useComponentTheme } from '../../../hooks/useTheme'
import { Icon } from '../icon/Icon'
import type { ModalProps } from '../../../types'
import './Modal.css'

interface ExtendedModalProps extends ModalProps {
  closable?: boolean
  overlayClassName?: string
  zIndex?: number
  header?: ReactNode
  footer?: ReactNode
}

export const Modal: React.FC<ExtendedModalProps> = ({
  children,
  isOpen = false,
  title,
  persistent = false,
  fullscreen = false,
  maxWidth = '500px',
  scrollable = false,
  closeOnEscape = true,
  closeOnClickOutside = true,
  closable = true,
  className,
  style,
  onClose,
  header,
  footer,
  overlayClassName,
  zIndex = 1000,
  ...props
}) => {
  const { componentClasses, componentStyles } = useComponentTheme('modal', props)

  // Modal classes
  const modalClasses = useMemo(() => {
    const classes = [...componentClasses]

    if (fullscreen) classes.push('cui-modal--fullscreen')
    if (scrollable) classes.push('cui-modal--scrollable')
    if (className) classes.push(className)

    return classes.join(' ')
  }, [componentClasses, fullscreen, scrollable, className])

  // Overlay classes
  const overlayClasses = useMemo(() => {
    const classes = ['cui-modal-overlay']
    if (overlayClassName) classes.push(overlayClassName)
    return classes.join(' ')
  }, [overlayClassName])

  // Modal styles
  const modalStyles = useMemo(() => {
    const styles = { ...componentStyles, ...style }
    if (maxWidth && !fullscreen) {
      styles.maxWidth = maxWidth
    }
    return styles
  }, [componentStyles, style, maxWidth, fullscreen])

  // Overlay styles
  const overlayStyles = useMemo(() => {
    return { zIndex }
  }, [zIndex])

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !persistent && onClose) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [isOpen, closeOnEscape, persistent, onClose])

  // Handle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  // Event handlers
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnClickOutside && !persistent && event.target === event.currentTarget && onClose) {
      onClose()
    }
  }

  const handleClose = () => {
    if (!persistent && onClose) {
      onClose()
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <div 
      className={overlayClasses}
      style={overlayStyles}
      onClick={handleOverlayClick}
    >
      <div
        className={modalClasses}
        style={modalStyles}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'cui-modal-title' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(header || title || closable) && (
          <div className="cui-modal__header">
            {header || (
              title && <h2 id="cui-modal-title" className="cui-modal__title">{title}</h2>
            )}

            {closable && (
              <button
                type="button"
                className="cui-modal__close"
                onClick={handleClose}
                aria-label={`Close ${title || 'modal'}`}
              >
                <Icon name="times" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`cui-modal__content ${scrollable ? 'cui-modal__content--scrollable' : ''}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="cui-modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default Modal
