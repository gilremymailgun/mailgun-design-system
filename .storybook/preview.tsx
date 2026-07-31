import type { Preview } from '@storybook/react-vite';
import '../src/tokens.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Brand theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'mailgun', title: 'Mailgun', icon: 'circlehollow' },
          { value: 'mailjet', title: 'Mailjet', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'mailgun',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'mailgun';
      document.documentElement.setAttribute('data-brand', theme);
document.documentElement.setAttribute('data-theme', 'light');
      return <Story />;
    },
  ],
};

export default preview;
