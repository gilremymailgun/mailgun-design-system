import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: { control: 'select', options: ['critical', 'warning'] },
    children: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Critical: Story = {
  args: {
    type: 'critical',
    children: 'A temporary sending limit of 200 emails has been applied on your account. Please contact support.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Your account is approaching its monthly sending limit.',
  },
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', maxWidth: '600px' }}>
      <Alert type="critical">
        A temporary sending limit of 200 emails has been applied on your account. Please contact support.
      </Alert>
      <Alert type="warning">Your account is approaching its monthly sending limit.</Alert>
    </div>
  ),
};
