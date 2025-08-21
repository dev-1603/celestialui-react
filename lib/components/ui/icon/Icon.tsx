import React, { useMemo, CSSProperties } from 'react'
import { useComponentTheme } from '../../../hooks/useTheme'
import type { IconProps } from '../../../types'
import './Icon.css'

export const Icon: React.FC<IconProps> = ({
  name,
  size = '1em',
  color,
  spin = false,
  className,
  style,
  ...props
}) => {
  const { componentClasses, componentStyles } = useComponentTheme('icon', props)

  // Generate icon classes
  const iconClasses = useMemo(() => {
    const classes = [...componentClasses]

    // Default to FontAwesome solid icons
    classes.push('fas', `fa-${name}`)

    // Add animation classes
    if (spin) classes.push('fa-spin')

    if (className) {
      classes.push(className)
    }

    return classes.join(' ')
  }, [componentClasses, name, spin, className])

  // Generate icon styles
  const iconStyles = useMemo((): CSSProperties => {
    const styles = { ...componentStyles }

    // Size handling
    if (size) {
      const sizeValue = typeof size === 'number' ? `${size}px` : size
      styles.fontSize = sizeValue
      styles.width = sizeValue
      styles.height = sizeValue
    }

    // Color handling
    if (color) {
      styles.color = color
    }

    // Custom animation for spin if not using FontAwesome
    if (spin) {
      styles.animation = 'cui-spin 1s linear infinite'
    }

    return {
      ...styles,
      ...style,
    }
  }, [componentStyles, size, color, spin, style])

  // For now, we'll use FontAwesome icons as the default
  // This can be extended to support other providers later
  return <i className={iconClasses} style={iconStyles} {...props} />
}

export default Icon
