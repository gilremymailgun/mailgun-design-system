import type { Preview } from '@storybook/react-vite';
import '../src/tokens.css';
import '../src/fonts.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'mailgun', title: 'Mailgun', icon: 'circlehollow' },
          { value: 'mailjet', title: 'Mailjet', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
    appearance: {
      description: 'Light or dark mode',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'mailgun',
    appearance: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'mailgun';
      const appearance = context.globals.appearance || 'light';
      document.documentElement.setAttribute('data-brand', theme);
      document.documentElement.setAttribute('data-theme', appearance);
      return <Story />;
    },
  ],
};

export default preview;
