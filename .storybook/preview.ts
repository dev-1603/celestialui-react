import type { Preview } from '@storybook/react'

// Load global styles (CSS variables, utilities)
import '../lib/themes/base.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
}

export default preview


