import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'error'] },
    onClose: { action: 'dismissed' },
  },
};
export default meta;
type Story = StoryObj<typeof Toast>;

const ToastPreview = ({ type, message }: { type: 'default' | 'error'; message: string }) => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <Toast type={type} onClose={() => setVisible(false)}>
      {message}
    </Toast>
  ) : (
    <button type="button" onClick={() => setVisible(true)}>Show toast</button>
  );
};

export const Default: Story = {
  render: () => (
    <ToastPreview type="default" message="You’ll get an email when your score is ready." />
  ),
};

export const Error: Story = {
  render: () => <ToastPreview type="error" message="The notification preference could not be saved." />,
};
