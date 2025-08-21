import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Font-based icon component. Defaults to FontAwesome classes. Supports size, color and spin.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Icon name (e.g., spinner, check-circle)' },
    size: { control: 'text', description: 'Size (e.g., 16px, 1.5rem, 24)' },
    color: { control: 'color', description: 'Icon color' },
    spin: { control: 'boolean', description: 'Animate with spinning' },
  },
  args: {
    name: 'star',
    size: '24px',
    color: undefined,
    spin: false,
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Icon name="check-circle" color="#10b981" size="24px" />
      <Icon name="exclamation-triangle" color="#f59e0b" size="24px" />
      <Icon name="times-circle" color="#ef4444" size="24px" />
      <Icon name="info-circle" color="#3b82f6" size="24px" />
      <Icon name="spinner" spin size="24px" />
    </div>
  ),
}

