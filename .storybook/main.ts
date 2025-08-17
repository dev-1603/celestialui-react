import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.mdx',
    '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  features: {
    buildStoriesJson: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/lib'
        }
      },
      define: {
        global: 'globalThis'
      }
    })
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  },

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  }
}

export default config
