import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from './SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    label: 'Split',
    onClick: () => alert('main action'),
    options: [
      { label: 'Option 1', onClick: () => alert('Option 1') },
      { label: 'Option 2', onClick: () => alert('Option 2') },
      { label: 'Option 3', onClick: () => alert('Option 3') },
    ],
  },
};

export const Loading: Story = {
  args: { ...Default.args, loading: true },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
