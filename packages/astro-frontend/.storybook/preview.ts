import type { Preview } from '@storybook/react-vite'

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'
import '../src/styles/styles.css'
import '../src/styles/fonts.css'
import '../src/styles/onetrust.css'

const customViewports = {
  xs: {
    name: 'Mobile XS',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  sm: {
    name: 'Mobile',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  md: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  xl: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
} as const

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'responsive',
    },
  },
}

export default preview
