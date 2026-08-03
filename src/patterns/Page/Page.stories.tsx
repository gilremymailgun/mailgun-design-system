import type { Meta, StoryObj } from '@storybook/react-vite';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Patterns/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    pageHeaderProps: {
      title: 'Title of the page',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien odio, feugiat sed laoreet vel, sodales id lectus. Pellentesque consectetur lorem ac massa posuere, non placerat est consequat. Aliquam id pretium orci. Phasellus ullamcorper risus eu pharetra feugiat. Phasellus eu est odio.',
      primaryButtonLabel: 'Validate',
    },
    children: null,
  },
};
