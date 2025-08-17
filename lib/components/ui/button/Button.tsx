import React, { useMemo, forwardRef } from 'react'
import { useComponentTheme } from '../../../hooks/useTheme'
import { Icon } from '../icon/Icon'
import type { ButtonProps } from '../../../types'
import './Button.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconOnly = false,
  fullWidth = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
  href,
  target,
  rel,
  ...props
}, ref) => {
  const { componentClasses, componentStyles } = useComponentTheme('button', {
    variant,
    size,
    disabled,
    loading
  })

  // Determine the component tag
  const ElementType = href ? 'a' : 'button'

  // Button classes
  const buttonClasses = useMemo(() => {
    const classes = [...componentClasses]

    // Variant classes
    classes.push(`cui-button--${variant}`)

    // Size classes
    classes.push(`cui-button--${size}`)

    // State classes
    if (loading) classes.push('cui-button--loading')
    if (disabled) classes.push('cui-button--disabled')
    if (fullWidth) classes.push('cui-button--full-width')
    if (rounded) classes.push('cui-button--rounded')
    if (iconOnly) classes.push('cui-button--icon-only')

    // Icon position classes
    if (leftIcon && !iconOnly) classes.push('cui-button--with-left-icon')
    if (rightIcon && !iconOnly) classes.push('cui-button--with-right-icon')

    if (className) classes.push(className)

    return classes.join(' ')
  }, [componentClasses, variant, size, loading, disabled, fullWidth, rounded, iconOnly, leftIcon, rightIcon, className])

  // Button styles
  const buttonStyles = useMemo(() => {
    return {
      ...componentStyles,
      ...style
    }
  }, [componentStyles, style])

  // Event handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled || loading) {
      event.preventDefault()
      return
    }
    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>)
    }
  }

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onFocus) {
      onFocus(event as React.FocusEvent<HTMLButtonElement>)
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onBlur) {
      onBlur(event as React.FocusEvent<HTMLButtonElement>)
    }
  }

  // Common props for both button and anchor elements
  const commonProps = {
    className: buttonClasses,
    style: buttonStyles,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...props
  }

  const content = (
    <>
      {loading && (
        <span className="cui-button__loading">
          <Icon name="spinner" spin />
        </span>
      )}

      {leftIcon && !loading && (
        <Icon 
          name={leftIcon}
          className="cui-button__icon cui-button__icon--left"
        />
      )}

      {!iconOnly && (
        <span className="cui-button__content">
          {children}
        </span>
      )}

      {rightIcon && !loading && (
        <Icon 
          name={rightIcon}
          className="cui-button__icon cui-button__icon--right"
        />
      )}
    </>
  )

  const Component = ElementType as any

  if (href) {
    return (
      <Component 
        {...commonProps}
        href={href}
        target={target}
        rel={rel}
      >
        {content}
      </Component>
    )
  }

  return (
    <Component
      {...commonProps}
      ref={ref}
      type={type}
      disabled={disabled || loading}
    >
      {content}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
