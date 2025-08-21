import React, { useState, useMemo, ReactNode, ElementType } from 'react'
import { useComponentTheme } from '../../../hooks/useTheme'
import type { CardProps } from '../../../types'
import './Card.css'

interface ExtendedCardProps extends CardProps {
  tag?: ElementType
  title?: string
  subtitle?: string
  elevation?: number
  interactive?: boolean
  header?: ReactNode
  media?: ReactNode
  footer?: ReactNode
  actions?: ReactNode
}

export const Card: React.FC<ExtendedCardProps> = ({
  children,
  tag: Component = 'div',
  variant = 'elevated',
  padding = true,
  hoverable = false,
  clickable = false,
  interactive = false,
  disabled = false,
  elevation = 1,
  title,
  subtitle,
  className,
  style,
  onClick,
  header,
  media,
  footer,
  actions,
  ...props
}) => {
  const { componentClasses, componentStyles } = useComponentTheme('card', {
    variant,
    disabled,
  })

  // State
  const [isHovered, setIsHovered] = useState(false)

  // Computed classes
  const cardClasses = useMemo(() => {
    const classes = [...componentClasses]

    // Variant
    classes.push(`cui-card--${variant}`)

    // Elevation
    if (variant === 'elevated' && elevation) {
      classes.push(`cui-card--elevation-${elevation}`)
    }

    // States
    if (hoverable) classes.push('cui-card--hoverable')
    if (clickable || interactive) classes.push('cui-card--clickable')
    if (disabled) classes.push('cui-card--disabled')
    if (isHovered && hoverable) classes.push('cui-card--hovered')

    if (className) classes.push(className)

    return classes.join(' ')
  }, [
    componentClasses,
    variant,
    elevation,
    hoverable,
    clickable,
    interactive,
    disabled,
    isHovered,
    className,
  ])

  // Computed styles
  const cardStyles = useMemo(() => {
    return {
      ...componentStyles,
      ...style,
    }
  }, [componentStyles, style])

  // Event handlers
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    if (clickable || interactive) {
      if (onClick) onClick(event)
    }
  }

  const handleMouseEnter = () => {
    if (disabled) return
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const hasHeader = header || title || subtitle || actions

  return (
    <Component
      className={cardClasses}
      style={cardStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Header */}
      {hasHeader && (
        <div className="cui-card__header">
          {header || (
            <div className="cui-card__header-content">
              {title && <h3 className="cui-card__title">{title}</h3>}
              {subtitle && <p className="cui-card__subtitle">{subtitle}</p>}
            </div>
          )}
          {actions && <div className="cui-card__actions">{actions}</div>}
        </div>
      )}

      {/* Media */}
      {media && <div className="cui-card__media">{media}</div>}

      {/* Content */}
      {children && (
        <div className={`cui-card__content ${padding ? 'cui-card__content--padded' : ''}`}>
          {children}
        </div>
      )}

      {/* Footer */}
      {footer && <div className="cui-card__footer">{footer}</div>}
    </Component>
  )
}

export default Card
