import React, { useState, useRef, useMemo, useCallback, forwardRef, useEffect } from 'react'
import { useComponentTheme } from '../../../hooks/useTheme'
import { Icon } from '../icon/Icon'
import type { InputProps } from '../../../types'
import './Input.css'

interface ExtendedInputProps extends InputProps {
  id?: string
  name?: string
  autoComplete?: string
  floatingLabel?: boolean
  dense?: boolean
}

export const Input = forwardRef<HTMLInputElement, ExtendedInputProps>(({
  value,
  defaultValue,
  type = 'text',
  variant = 'outlined',
  size = 'md',
  placeholder,
  label,
  helperText,
  errorMessage,
  required = false,
  disabled = false,
  readOnly = false,
  clearable = false,
  prefixIcon,
  suffixIcon,
  loading = false,
  debounce = 0,
  floatingLabel = true,
  dense = false,
  className,
  style,
  onChange,
  onFocus,
  onBlur,
  id,
  name,
  autoComplete,
  ...props
}, ref) => {
  const { componentClasses, componentStyles } = useComponentTheme('input', {
    variant,
    size,
    disabled,
    loading
  })

  // Internal state
  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? '')
  const [isFocused, setIsFocused] = useState(false)
  const internalRef = useRef<HTMLInputElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)

  // Use either the passed ref or our internal ref
  const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef

  // Computed values
  const hasValue = useMemo(() => {
    return inputValue !== '' && inputValue != null
  }, [inputValue])

  const hasContent = useMemo(() => {
    return hasValue || isFocused
  }, [hasValue, isFocused])

  // Wrapper classes
  const wrapperClasses = useMemo(() => {
    const classes = [...componentClasses]

    if (variant) classes.push(`cui-input--${variant}`)
    if (size) classes.push(`cui-input--${size}`)
    if (disabled) classes.push('cui-input--disabled')
    if (readOnly) classes.push('cui-input--readonly')
    if (loading) classes.push('cui-input--loading')
    if (dense) classes.push('cui-input--dense')
    if (isFocused) classes.push('cui-input--focused')
    if (hasValue) classes.push('cui-input--has-value')
    if (errorMessage) classes.push('cui-input--error')
    if (prefixIcon) classes.push('cui-input--with-prefix')
    if (suffixIcon || (clearable && hasValue)) classes.push('cui-input--with-suffix')

    return classes.join(' ')
  }, [componentClasses, variant, size, disabled, readOnly, loading, dense, isFocused, hasValue, errorMessage, prefixIcon, suffixIcon, clearable])

  // Input classes
  const inputClasses = useMemo(() => {
    const classes = ['cui-input__field']
    if (className) classes.push(className)
    return classes.join(' ')
  }, [className])

  // Input styles
  const inputStyles = useMemo(() => {
    return {
      ...componentStyles,
      ...style
    }
  }, [componentStyles, style])

  // Label classes
  const labelClasses = useMemo(() => {
    const classes = []

    if (floatingLabel) {
      classes.push('cui-input__label--floating')
      if (hasContent) classes.push('cui-input__label--active')
    }

    if (isFocused) classes.push('cui-input__label--focused')
    if (errorMessage) classes.push('cui-input__label--error')

    return classes.join(' ')
  }, [floatingLabel, hasContent, isFocused, errorMessage])

  // Help classes
  const helpClasses = useMemo(() => {
    const classes = []
    if (errorMessage) classes.push('cui-input__help--error')
    return classes.join(' ')
  }, [errorMessage])

  // Event handlers
  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    if (debounce > 0) {
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
      debounceTimer.current = setTimeout(() => {
        setInputValue(newValue)
        if (onChange) onChange(event)
      }, debounce)
    } else {
      setInputValue(newValue)
      if (onChange) onChange(event)
    }
  }, [debounce, onChange])

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    if (onFocus) onFocus(event)
  }, [onFocus])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    if (onBlur) onBlur(event)
  }, [onBlur])

  const clearInput = useCallback(() => {
    setInputValue('')
    if (onChange) {
      // Create a synthetic event
      const event = {
        target: { value: '' },
        currentTarget: inputRef.current
      } as React.ChangeEvent<HTMLInputElement>
      onChange(event)
    }
    // Focus the input after clearing
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }, [onChange, inputRef])

  // Update internal value when external value changes
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value)
    }
  }, [value])

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [])

  return (
    <div className={`cui-input-wrapper ${wrapperClasses}`}>
      <div className="cui-input-container">
        {/* Prefix Icon */}
        {prefixIcon && (
          <div className="cui-input__icon cui-input__icon--prefix">
            <Icon name={prefixIcon} />
          </div>
        )}

        {/* Input Field */}
        <div className="cui-input__field-wrapper">
          <input
            ref={inputRef}
            value={inputValue}
            type={type}
            placeholder={floatingLabel ? '' : placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            name={name}
            id={id}
            className={inputClasses}
            style={inputStyles}
            onChange={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Floating Label */}
          {label && (
            <label
              htmlFor={id}
              className={`cui-input__label ${labelClasses}`}
            >
              {label}
              {required && <span className="cui-input__required">*</span>}
            </label>
          )}
        </div>

        {/* Suffix Icon / Clear Button */}
        {(suffixIcon || (clearable && hasValue)) && (
          <div className="cui-input__icon cui-input__icon--suffix">
            {clearable && hasValue && !disabled ? (
              <button
                type="button"
                className="cui-input__clear"
                onClick={clearInput}
                aria-label={`Clear ${label || 'input'}`}
              >
                <Icon name="times" />
              </button>
            ) : suffixIcon ? (
              <Icon name={suffixIcon} />
            ) : null}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="cui-input__loading">
            <Icon name="spinner" spin />
          </div>
        )}
      </div>

      {/* Helper Text / Error Message */}
      {(helperText || errorMessage) && (
        <div className={`cui-input__help ${helpClasses}`}>
          {errorMessage || helperText}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
