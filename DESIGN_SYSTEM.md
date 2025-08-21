# CelestialUI Design System

A comprehensive, theme-driven design system providing consistent colors, typography, spacing, and components across the entire application.

## 🎯 Single Source of Truth

All design tokens are defined in `src/config/design-system-config.json` and automatically generate CSS variables via `src/utils/designSystemGenerator.ts`.

## 📁 File Structure

```
src/
├── config/
│   └── design-system-config.json    # Complete design system configuration
├── utils/
│   └── designSystemGenerator.ts     # Generates CSS variables from config
├── styles/
│   └── design-system.css           # Generated CSS variables
└── providers/
    └── ThemeProvider.tsx           # Theme context provider
```

## 🎨 Color System

### Core Color Roles
- `primary` - Main brand color
- `secondary` - Supporting brand color
- `accent` - Highlight color
- `background` - Main background
- `surface` - Card/component surfaces
- `text` - Primary text color

### Semantic Colors
- `success` - Green for positive states
- `warning` - Yellow/orange for caution
- `error` - Red for errors/danger
- `info` - Blue for information
- `neutral` - Gray for neutral states

### Color Variants

Each color automatically generates variants:

#### Opacity Variants
```css
--cui-color-primary          /* 100% opacity */
--cui-color-primary-ghost    /* 5% opacity */
--cui-color-primary-subtle   /* 10% opacity */
--cui-color-primary-muted    /* 20% opacity */
--cui-color-primary-light    /* 40% opacity */
--cui-color-primary-medium   /* 60% opacity */
--cui-color-primary-strong   /* 80% opacity */
```

#### Shade Variants
```css
--cui-color-primary-25       /* Lightest */
--cui-color-primary-50
--cui-color-primary-100
--cui-color-primary-200
--cui-color-primary-300
--cui-color-primary-400
--cui-color-primary-500      /* Base color */
--cui-color-primary-600
--cui-color-primary-700
--cui-color-primary-800
--cui-color-primary-900
--cui-color-primary-950      /* Darkest */
```

#### State Variants
```css
--cui-color-primary-hover    /* Hover state */
--cui-color-primary-active   /* Active state */
--cui-color-primary-pressed  /* Pressed state */
--cui-color-primary-selected /* Selected state */
--cui-color-primary-disabled /* Disabled state */
--cui-color-primary-focus    /* Focus state */
```

### Contextual Colors

#### Text Colors
```css
--cui-color-text-primary     /* Main text */
--cui-color-text-secondary   /* Secondary text */
--cui-color-text-tertiary    /* Muted text */
--cui-color-text-disabled    /* Disabled text */
--cui-color-text-inverse     /* Text on dark backgrounds */
--cui-color-text-on-primary  /* Text on primary color */
--cui-color-text-on-secondary /* Text on secondary color */
```

#### Background Colors
```css
--cui-color-background-base      /* Main background */
--cui-color-background-surface   /* Card/component surfaces */
--cui-color-background-elevated  /* Elevated surfaces */
--cui-color-background-overlay   /* Modal/overlay backgrounds */
--cui-color-background-muted     /* Subtle backgrounds */
--cui-color-background-hover     /* Hover backgrounds */
--cui-color-background-pressed   /* Pressed backgrounds */
--cui-color-background-selected  /* Selected backgrounds */
--cui-color-background-disabled  /* Disabled backgrounds */
```

#### Border Colors
```css
--cui-color-border-base      /* Default borders */
--cui-color-border-light     /* Subtle borders */
--cui-color-border-strong    /* Prominent borders */
--cui-color-border-focus     /* Focus borders */
--cui-color-border-error     /* Error borders */
--cui-color-border-success   /* Success borders */
--cui-color-border-warning   /* Warning borders */
--cui-color-border-disabled  /* Disabled borders */
```

## 📝 Typography

### Font Families
```css
--cui-font-primary    /* Inter with system fallbacks */
--cui-font-secondary  /* Inter, sans-serif */
--cui-font-mono       /* SF Mono with monospace fallbacks */
```

### Font Weights
```css
--cui-font-weight-thin          /* 100 */
--cui-font-weight-extra-light   /* 200 */
--cui-font-weight-light         /* 300 */
--cui-font-weight-normal        /* 400 */
--cui-font-weight-medium        /* 500 */
--cui-font-weight-semi-bold     /* 600 */
--cui-font-weight-bold          /* 700 */
--cui-font-weight-extra-bold    /* 800 */
--cui-font-weight-black         /* 900 */
```

### Font Sizes
```css
--cui-font-size-xs     /* 0.75rem / 12px */
--cui-font-size-sm     /* 0.875rem / 14px */
--cui-font-size-base   /* 1rem / 16px */
--cui-font-size-lg     /* 1.125rem / 18px */
--cui-font-size-xl     /* 1.25rem / 20px */
--cui-font-size-2xl    /* 1.5rem / 24px */
--cui-font-size-3xl    /* 1.875rem / 30px */
--cui-font-size-4xl    /* 2.25rem / 36px */
--cui-font-size-5xl    /* 3rem / 48px */
--cui-font-size-6xl    /* 4rem / 64px */
```

## 📏 Spacing System

### Base Scale
```css
--cui-spacing-0     /* 0 */
--cui-spacing-1     /* 0.25rem / 4px */
--cui-spacing-2     /* 0.5rem / 8px */
--cui-spacing-3     /* 0.75rem / 12px */
--cui-spacing-4     /* 1rem / 16px */
--cui-spacing-5     /* 1.25rem / 20px */
--cui-spacing-6     /* 1.5rem / 24px */
--cui-spacing-8     /* 2rem / 32px */
--cui-spacing-10    /* 2.5rem / 40px */
--cui-spacing-12    /* 3rem / 48px */
--cui-spacing-16    /* 4rem / 64px */
--cui-spacing-20    /* 5rem / 80px */
--cui-spacing-24    /* 6rem / 96px */
```

### Semantic Spacing
```css
--cui-component-padding-xs   /* Extra small component padding */
--cui-component-padding-sm   /* Small component padding */
--cui-component-padding-md   /* Medium component padding */
--cui-component-padding-lg   /* Large component padding */
--cui-component-padding-xl   /* Extra large component padding */

--cui-section-margin-sm      /* Small section margins */
--cui-section-margin-md      /* Medium section margins */
--cui-section-margin-lg      /* Large section margins */

--cui-container-gap-sm       /* Small container gaps */
--cui-container-gap-md       /* Medium container gaps */
--cui-container-gap-lg       /* Large container gaps */
```

## 🔲 Border Radius
```css
--cui-radius-none    /* 0 */
--cui-radius-xs      /* 0.125rem / 2px */
--cui-radius-sm      /* 0.25rem / 4px */
--cui-radius-base    /* 0.375rem / 6px */
--cui-radius-md      /* 0.5rem / 8px */
--cui-radius-lg      /* 0.75rem / 12px */
--cui-radius-xl      /* 1rem / 16px */
--cui-radius-2xl     /* 1.5rem / 24px */
--cui-radius-3xl     /* 2rem / 32px */
--cui-radius-full    /* 9999px */
```

## 🌘 Shadows
```css
--cui-shadow-none    /* none */
--cui-shadow-xs      /* Very subtle shadow */
--cui-shadow-sm      /* Small shadow */
--cui-shadow-base    /* Default shadow */
--cui-shadow-md      /* Medium shadow */
--cui-shadow-lg      /* Large shadow */
--cui-shadow-xl      /* Extra large shadow */
--cui-shadow-2xl     /* Very large shadow */
--cui-shadow-inner   /* Inner shadow */
```

## ⚡ Animation
```css
/* Duration */
--cui-duration-fast     /* 150ms */
--cui-duration-normal   /* 250ms */
--cui-duration-slow     /* 350ms */
--cui-duration-slower   /* 500ms */

/* Easing */
--cui-easing-linear      /* linear */
--cui-easing-ease        /* ease */
--cui-easing-ease-in     /* cubic-bezier(0.4, 0, 1, 1) */
--cui-easing-ease-out    /* cubic-bezier(0, 0, 0.2, 1) */
--cui-easing-ease-in-out /* cubic-bezier(0.4, 0, 0.2, 1) */
--cui-easing-bounce      /* cubic-bezier(0.68, -0.55, 0.265, 1.55) */
```

## 🔢 Z-Index Scale
```css
--cui-z-hide        /* -1 */
--cui-z-auto        /* auto */
--cui-z-base        /* 0 */
--cui-z-docked      /* 10 */
--cui-z-dropdown    /* 1000 */
--cui-z-sticky      /* 1100 */
--cui-z-banner      /* 1200 */
--cui-z-overlay     /* 1300 */
--cui-z-modal       /* 1400 */
--cui-z-popover     /* 1500 */
--cui-z-skip-link   /* 1600 */
--cui-z-toast       /* 1700 */
--cui-z-tooltip     /* 1800 */
```

## 📱 Breakpoints
```css
--cui-breakpoint-xs    /* 0px */
--cui-breakpoint-sm    /* 640px */
--cui-breakpoint-md    /* 768px */
--cui-breakpoint-lg    /* 1024px */
--cui-breakpoint-xl    /* 1280px */
--cui-breakpoint-2xl   /* 1536px */
```

## 🎯 Usage Examples

### Using Colors in CSS
```css
.my-component {
  background-color: var(--cui-color-primary);
  color: var(--cui-color-text-on-primary);
  border: 1px solid var(--cui-color-border-base);
}

.my-component:hover {
  background-color: var(--cui-color-primary-hover);
}

.my-component.error {
  border-color: var(--cui-color-border-error);
  color: var(--cui-color-error);
}
```

### Using Spacing
```css
.card {
  padding: var(--cui-component-padding-md);
  margin-bottom: var(--cui-section-margin-sm);
  border-radius: var(--cui-radius-lg);
  box-shadow: var(--cui-shadow-sm);
}
```

### Using Typography
```css
.heading {
  font-family: var(--cui-font-primary);
  font-size: var(--cui-font-size-2xl);
  font-weight: var(--cui-font-weight-bold);
  line-height: var(--cui-line-height-tight);
  color: var(--cui-color-text-primary);
}
```

## 🔧 Theme Integration

### Applying a Theme
```typescript
import { applyTheme } from './utils/designSystemGenerator'

// Apply Corporate Midnight theme in dark mode
applyTheme('corporate-midnight', 'dark')

// Apply Ruby Statement theme in light mode
applyTheme('ruby-statement', 'light')
```

### Creating Custom Themes
Add new themes to `lib/themes/themes.json`:
```json
{
  "themes": {
    "my-custom-theme": {
      "name": "My Custom Theme",
      "mode": "both",
      "description": "A custom theme",
      "category": "custom",
      "featured": true,
      "dark": {
        "primary": "#ff6b35",
        "secondary": "#f7931e",
        "accent": "#ffb700",
        "background": "#1a1a1a",
        "surface": "#2a2a2a",
        "text": "#ffffff"
      },
      "light": {
        "primary": "#e55a2b",
        "secondary": "#d4831f",
        "accent": "#e6a500",
        "background": "#ffffff",
        "surface": "#f8f9fa",
        "text": "#1a1a1a"
      }
    }
  }
}
```

## 🎨 Component Styling

All components should use design system variables:

### ✅ Good
```css
.button {
  background: var(--cui-color-primary);
  color: var(--cui-color-text-on-primary);
  padding: var(--cui-component-padding-md);
  border-radius: var(--cui-radius-base);
  font-size: var(--cui-font-size-base);
  transition: all var(--cui-duration-normal) var(--cui-easing-ease-out);
}
```

### ❌ Bad
```css
.button {
  background: #1976d2;           /* Hardcoded color */
  color: white;                  /* Hardcoded color */
  padding: 12px 16px;           /* Hardcoded spacing */
  border-radius: 4px;           /* Hardcoded radius */
  font-size: 16px;              /* Hardcoded size */
  transition: all 250ms ease;   /* Hardcoded animation */
}
```

## 🔄 Automatic Generation

The design system automatically generates:
- All color variants (opacity, shades, states)
- Semantic color mappings
- Mode-specific overrides
- Complete CSS variable sets

This ensures:
- **Consistency** across all components
- **Automatic theming** when switching themes
- **No hardcoded values** in component styles
- **Single source of truth** for all design decisions

## 🚀 Benefits

1. **Consistency**: All components use the same design tokens
2. **Maintainability**: Change design system config to update entire app
3. **Theming**: Automatic support for unlimited themes
4. **Accessibility**: Proper contrast ratios and semantic colors
5. **Developer Experience**: Autocomplete and type safety
6. **Performance**: CSS variables are optimized by browsers
7. **Scalability**: Easy to add new components and variants
