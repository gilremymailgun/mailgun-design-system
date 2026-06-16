import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'Components/Split Button',
  component: SplitButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: { label: 'Split' },
};

export const Disabled: Story = {
  args: { label: 'Split', disabled: true },
};

export const Loading: Story = {
  args: { label: 'Split', loading: true },
};

export const AllStates: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
      <SplitButton label="Split" />
      <SplitButton label="Split" disabled />
      <SplitButton label="Split" loading />
    </div>
  ),
};
