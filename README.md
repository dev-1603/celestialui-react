# CelestialUI React

A comprehensive React component library with multi-framework styling support, built with TypeScript and designed for modern web applications.

## Features

- 🎨 **Modern Design System** - Beautiful, consistent components with a comprehensive design system
- 🌈 **Multiple Themes** - Light/Dark mode support with customizable theme tokens
- 📱 **Responsive** - Mobile-first design with responsive breakpoints
- ♿ **Accessible** - WCAG-compliant components with proper ARIA support
- 🔧 **TypeScript** - Full TypeScript support with comprehensive type definitions
- 🎯 **Tree-shakable** - Import only what you need
- 🎪 **Multiple Variants** - Each component supports multiple variants and sizes

## Quick Start

### Installation

```bash
npm install @celestial-ui/react
# or
yarn add @celestial-ui/react
# or
pnpm add @celestial-ui/react
```

### Basic Usage

```tsx
import React from 'react'
import { Button, Card, Input, useTheme, ToastContainer } from '@celestial-ui/react'
import '@celestial-ui/react/style.css'

function App() {
  const { toggleTheme, isDark } = useTheme()

  return (
    <div>
      <Card title="Welcome" padding>
        <Input 
          label="Your name"
          placeholder="Enter your name"
        />
        <Button onClick={toggleTheme}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </Button>
      </Card>
      <ToastContainer />
    </div>
  )
}
```

## Components

### Button
Versatile button component with multiple variants and states:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="outline" leftIcon="star">With Icon</Button>
<Button loading>Loading</Button>
<Button iconOnly>⚙️</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `link` | `destructive`
- `size`: `xs` | `sm` | `md` | `lg` | `xl`
- `loading`, `disabled`, `fullWidth`, `rounded`
- `leftIcon`, `rightIcon`, `iconOnly`

### Input
Feature-rich input component with validation and styling:

```tsx
<Input 
  label="Email"
  type="email"
  required
  prefixIcon="email"
  helperText="Enter a valid email address"
/>
```

**Props:**
- `variant`: `outlined` | `filled` | `underlined`
- `size`: `xs` | `sm` | `md` | `lg` | `xl`
- `label`, `helperText`, `errorMessage`
- `prefixIcon`, `suffixIcon`, `clearable`
- `floatingLabel`, `dense`

### Card
Flexible card component for content organization:

```tsx
<Card 
  variant="elevated"
  hoverable
  title="Card Title"
  subtitle="Card subtitle"
>
  Card content
</Card>
```

**Props:**
- `variant`: `elevated` | `outlined` | `filled`
- `elevation`: `0` to `5` (for elevated variant)
- `hoverable`, `clickable`, `padding`
- `title`, `subtitle`, `header`, `footer`, `actions`

### Modal
Full-featured modal with backdrop and animations:

```tsx
<Modal
  isOpen={isOpen}
  title="Modal Title"
  onClose={() => setIsOpen(false)}
  footer={
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  }
>
  Modal content
</Modal>
```

### Icon
Flexible icon component (currently supports FontAwesome):

```tsx
<Icon name="star" />
<Icon name="spinner" spin />
<Icon name="heart" color="red" size="24px" />
```

### Toast System
Toast notifications with multiple types:

```tsx
const { success, error, info, warning } = useToast()

// Show toasts
success('Operation completed!')
error('Something went wrong!')

// Include ToastContainer in your app
<ToastContainer position="top-right" />
```

## Theme System

CelestialUI React includes a comprehensive theme system:

```tsx
import { useTheme } from '@celestial-ui/react'

function ThemeToggle() {
  const { theme, isDark, toggleTheme, setMode } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </Button>
  )
}
```

### Custom Themes

You can customize the theme by providing your own theme configuration:

```tsx
import { createTheme } from '@celestial-ui/react'

const customTheme = createTheme({
  framework: 'tailwind',
  mode: 'light',
  tokens: {
    colors: {
      primary: {
        500: '#your-primary-color'
      }
    }
  }
})
```

## Development

### Running the Demo

```bash
npm install
npm run dev
```

### Building the Library

```bash
npm run build
```

This creates:
- `dist/celestial-ui.es.js` - ES modules build
- `dist/celestial-ui.umd.js` - UMD build  
- `dist/style.css` - CSS styles
- `dist/index.d.ts` - TypeScript definitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

MIT License - see the [LICENSE](./LICENSE) file for details.

## Inspiration

This library is inspired by modern design systems and aims to provide a comprehensive set of components for React applications. It draws inspiration from Material Design, Ant Design, and other popular component libraries while maintaining its own unique identity.