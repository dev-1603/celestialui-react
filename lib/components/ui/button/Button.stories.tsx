import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'Visual style variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state'
    },
    leftIcon: {
      control: { type: 'text' },
      description: 'Icon to display on the left side'
    },
    rightIcon: {
      control: { type: 'text' },
      description: 'Icon to display on the right side'
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Whether the button only contains an icon'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button takes full width'
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the button has rounded corners'
    },
    onClick: { action: 'clicked' }
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    iconOnly: false,
    fullWidth: false,
    rounded: false,
    children: 'Button'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic button variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete'
  }
}

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  )
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button leftIcon="plus">Add Item</Button>
      <Button rightIcon="chevron-right">Continue</Button>
      <Button leftIcon="download" rightIcon="chevron-down">Download</Button>
    </div>
  )
}

// Icon only buttons
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button leftIcon="heart" iconOnly aria-label="Like" />
      <Button leftIcon="star" iconOnly variant="outline" aria-label="Favorite" />
      <Button leftIcon="share" iconOnly variant="ghost" aria-label="Share" />
      <Button leftIcon="settings" iconOnly rounded aria-label="Settings" />
    </div>
  )
}

// Loading states
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button loading>Loading...</Button>
      <Button loading variant="outline">Please wait</Button>
      <Button loading iconOnly aria-label="Loading" />
    </div>
  )
}

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">Disabled Outline</Button>
      <Button disabled variant="ghost">Disabled Ghost</Button>
    </div>
  )
}

// Full width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  )
}

// Interactive playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    leftIcon: 'star',
    disabled: false,
    loading: false,
    children: 'Playground Button'
  }
}
