import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../button/Button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accessible modal dialog with overlay, header, close button, and optional footer. Supports fullscreen, scrollable content and keyboard interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    persistent: { control: 'boolean' },
    fullscreen: { control: 'boolean' },
    maxWidth: { control: 'text' },
    scrollable: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    closeOnClickOutside: { control: 'boolean' },
    closable: { control: 'boolean' },
  },
  args: {
    isOpen: true,
    title: 'Modal Title',
    persistent: false,
    fullscreen: false,
    maxWidth: '500px',
    scrollable: false,
    closeOnEscape: true,
    closeOnClickOutside: true,
    closable: true,
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <Modal {...args}>
      <p>Here is some content inside the modal.</p>
      <p>You can close it with the close button or by clicking outside.</p>
    </Modal>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Modal
      isOpen
      title="Confirm Action"
      footer={
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      }
    >
      Are you sure you want to proceed?
    </Modal>
  ),
}

export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} title="Playground" onClose={() => setOpen(false)}>
          Use the button to open/close this modal.
        </Modal>
      </div>
    )
  },
}

