import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
import { Icon } from '../../icons/Icon';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const paperclip = <Icon name="ui/paper-clip-gen1" />;

export const Default: Story = {
  args: {
    type: 'default',
    items: [
      { label: 'Item 1', icon: paperclip, onClick: () => {} },
      { label: 'Item 2', icon: paperclip, onClick: () => {} },
      { label: 'Item 3', icon: paperclip, onClick: () => {} },
      { label: 'Item 4', icon: paperclip, onClick: () => {} },
      { label: 'Item 5', icon: paperclip },
    ],
  },
};

export const Short: Story = {
  args: {
    type: 'default',
    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Settings', onClick: () => {} },
      { label: 'Profile' },
    ],
  },
};

export const Back: Story = {
  args: {
    type: 'back',
    backLabel: 'Back',
    onBack: () => {},
  },
};
