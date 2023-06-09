import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/templates/Styles/global-styles';
import { theme } from '../src/templates/Styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default:'light',
      values:[
        {
          name:'light',
          value:theme.colors.white,
        },
        {
          name:'dark',
          value:theme.colors.primaryColor,
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story/>
      <GlobalStyles/>
    </ThemeProvider>
  )
]
