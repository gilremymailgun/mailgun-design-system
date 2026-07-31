import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'warning', 'success', 'error', 'tip'] },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Banner>;

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const Info: Story = { args: { type: 'info', children: LOREM, onClose: () => {} } };
export const Warning: Story = { args: { type: 'warning', children: LOREM, onClose: () => {} } };
export const Success: Story = { args: { type: 'success', children: LOREM, onClose: () => {} } };
export const Error: Story = { args: { type: 'error', children: LOREM, onClose: () => {} } };
export const Tip: Story = { args: { type: 'tip', children: LOREM, onClose: () => {} } };

export const WithTitle: Story = {
  name: 'With title',
  args: { type: 'info', title: 'Title', children: LOREM, onClose: () => {} },
};

export const WithActions: Story = {
  name: 'With actions',
  args: {
    type: 'warning',
    title: 'Title',
    children: LOREM,
    onClose: () => {},
    actions: (
      <>
        <Button hierarchy="tertiary" size="small">
          Dismiss
        </Button>
        <Button hierarchy="tertiary" size="small">
          Learn more
        </Button>
      </>
    ),
  },
};

export const NoCloseButton: Story = {
  name: 'No close button',
  args: { type: 'info', children: LOREM },
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', maxWidth: '672px' }}>
      {(['info', 'warning', 'success', 'error', 'tip'] as const).map((type) => (
        <Banner key={type} type={type} onClose={() => {}}>
          {LOREM}
        </Banner>
      ))}
    </div>
  ),
};
