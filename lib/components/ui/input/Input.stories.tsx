import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Text input with variants, sizes, floating labels, prefix/suffix icons, loading and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    clearable: { control: 'boolean' },
    prefixIcon: { control: 'text' },
    suffixIcon: { control: 'text' },
    loading: { control: 'boolean' },
    debounce: { control: { type: 'number', min: 0, step: 50 } },
    floatingLabel: { control: 'boolean' },
    dense: { control: 'boolean' },
  },
  args: {
    variant: 'outlined',
    size: 'md',
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
    required: false,
    disabled: false,
    readOnly: false,
    clearable: true,
    prefixIcon: 'envelope',
    suffixIcon: undefined,
    loading: false,
    debounce: 0,
    floatingLabel: true,
    dense: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', width: 360 }}>
      <Input label="Search" placeholder="Search" prefixIcon="search" clearable />
      <Input label="Password" type="password" suffixIcon="eye" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', width: 360 }}>
      <Input label="Disabled" placeholder="Disabled" disabled />
      <Input label="Error" placeholder="Invalid" errorMessage="This field is required" />
      <Input label="Loading" placeholder="Loading" loading />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', width: 420 }}>
      <Input size="xs" label="XS" />
      <Input size="sm" label="SM" />
      <Input size="md" label="MD" />
      <Input size="lg" label="LG" />
      <Input size="xl" label="XL" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ display: 'grid', gap: '0.5rem', width: 360 }}>
        <Input
          label="Controlled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          clearable
        />
        <div>Value: {value || '(empty)'}</div>
      </div>
    )
  },
}

