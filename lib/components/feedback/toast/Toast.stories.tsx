import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ToastContainer } from './ToastContainer'
import { useToast } from '../../../hooks/useToast'
import { Button } from '../../ui/button/Button'

const meta = {
  title: 'Feedback/Toast',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toast notification system using a global store. Use the hooks to trigger notifications and the container to render them.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => {
    const { success, error, warning, info, clearToasts } = useToast()
    const [position, setPosition] = useState<
      'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    >('top-right')
    return (
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button onClick={() => success('Saved successfully!')}>Success</Button>
          <Button variant="destructive" onClick={() => error('Something went wrong')}>
            Error
          </Button>
          <Button variant="outline" onClick={() => warning('Be careful with this action')}>
            Warning
          </Button>
          <Button variant="ghost" onClick={() => info('Here is some information')}>
            Info
          </Button>
          <Button variant="link" onClick={() => clearToasts()}>
            Clear
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(
            [
              'top-left',
              'top-center',
              'top-right',
              'bottom-left',
              'bottom-center',
              'bottom-right',
            ] as const
          ).map((p) => (
            <Button
              key={p}
              size="sm"
              variant={position === p ? 'primary' : 'outline'}
              onClick={() => setPosition(p)}
            >
              {p}
            </Button>
          ))}
        </div>
        <ToastContainer position={position} />
      </div>
    )
  },
}

