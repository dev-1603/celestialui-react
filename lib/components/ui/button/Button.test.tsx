import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

// Mock the icon component
vi.mock('../icon/Icon', () => ({
  Icon: ({ name, spin, ...props }: { name: string; spin?: boolean }) => (
    <i data-testid={`icon-${name}`} data-spin={spin} {...props}>{name}</i>
  )
}))

describe('Button', () => {
  it('renders properly with default props', () => {
    render(<Button>Test Button</Button>)
    
    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('cui-button')
    expect(button).toHaveClass('cui-button--primary')
    expect(button).toHaveClass('cui-button--md')
  })

  it('applies variant classes correctly', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'] as const

    variants.forEach(variant => {
      const { container } = render(<Button variant={variant}>Test</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass(`cui-button--${variant}`)
    })
  })

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    sizes.forEach(size => {
      const { container } = render(<Button size={size}>Test</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass(`cui-button--${size}`)
    })
  })

  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cui-button--disabled')
  })

  it('handles loading state correctly', () => {
    render(<Button loading>Loading Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cui-button--loading')
    expect(screen.getByTestId('icon-spinner')).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    render(<Button leftIcon="star">Button with Icon</Button>)
    
    expect(screen.getByTestId('icon-star')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('cui-button--with-left-icon')
  })

  it('renders with right icon', () => {
    render(<Button rightIcon="chevron-right">Button with Icon</Button>)
    
    expect(screen.getByTestId('icon-chevron-right')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('cui-button--with-right-icon')
  })

  it('renders icon-only button correctly', () => {
    render(<Button iconOnly leftIcon="settings" aria-label="Settings" />)
    
    const button = screen.getByRole('button', { name: 'Settings' })
    expect(button).toHaveClass('cui-button--icon-only')
    expect(screen.getByTestId('icon-settings')).toBeInTheDocument()
  })

  it('renders full-width button correctly', () => {
    render(<Button fullWidth>Full Width Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('cui-button--full-width')
  })

  it('renders rounded button correctly', () => {
    render(<Button rounded>Rounded Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('cui-button--rounded')
  })

  it('handles click events correctly', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('prevents click when disabled', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('prevents click when loading', () => {
    const handleClick = vi.fn()
    render(<Button loading onClick={handleClick}>Loading Button</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders as anchor when href is provided', () => {
    render(
      <Button href="https://example.com" target="_blank">
        Link Button
      </Button>
    )
    
    const link = screen.getByRole('link', { name: 'Link Button' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    render(
      <Button onFocus={handleFocus} onBlur={handleBlur}>
        Focus Button
      </Button>
    )
    
    const button = screen.getByRole('button')
    fireEvent.focus(button)
    expect(handleFocus).toHaveBeenCalledTimes(1)
    
    fireEvent.blur(button)
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('cui-button')
  })

  it('applies custom styles', () => {
    render(<Button style={{ backgroundColor: 'red' }}>Styled Button</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveStyle('background-color: red')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Button with Ref</Button>)
    
    expect(ref).toHaveBeenCalled()
  })
})
