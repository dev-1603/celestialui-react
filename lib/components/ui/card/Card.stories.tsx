import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible container with optional header, media, content and footer slots. Supports variants, elevation, hover and click interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled'],
      description: 'Visual style of the card',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Shadow elevation (only for elevated variant)',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Apply hover styles on pointer over',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Apply clickable styles and onClick handler',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable interactions',
    },
    padding: {
      control: 'boolean',
      description: 'Apply default padding to content area',
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: {
    variant: 'elevated',
    elevation: 1,
    hoverable: true,
    clickable: false,
    disabled: false,
    padding: true,
    title: 'Card title',
    subtitle: 'Card subtitle',
    children: 'This is the card content. Use header, media and footer to compose rich cards.',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <div
      style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))' }}
    >
      <Card variant="elevated" title="Elevated" subtitle="elevation=1">
        Content
      </Card>
      <Card variant="outlined" title="Outlined">
        Content
      </Card>
      <Card variant="filled" title="Filled">
        Content
      </Card>
    </div>
  ),
}

export const Elevations: Story = {
  render: () => (
    <div
      style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))' }}
    >
      {[0, 1, 2, 3, 4].map((lvl) => (
        <Card key={lvl} variant="elevated" elevation={lvl} title={`Elevation ${lvl}`}>
          Elevation level {lvl}
        </Card>
      ))}
    </div>
  ),
}

export const WithHeaderMediaFooter: Story = {
  render: () => (
    <Card
      title="Project"
      subtitle="Status: Active"
      actions={<button style={{ padding: '0.25rem 0.5rem' }}>Action</button>}
      media={
        <img
          src="https://picsum.photos/seed/cui/600/240"
          alt="Banner"
          style={{ width: '100%', display: 'block' }}
        />
      }
      footer={
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      }
    >
      Use the header, media and footer props to compose rich layouts.
    </Card>
  ),
}

export const Interactive: Story = {
  args: {
    clickable: true,
    children: 'Click me to trigger onClick (see Actions panel)',
  },
  argTypes: { onClick: { action: 'card clicked' } },
}

