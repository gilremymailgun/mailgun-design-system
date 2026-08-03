import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderBar } from './HeaderBar';

const meta: Meta<typeof HeaderBar> = {
  title: 'Navigation/HeaderBar',
  component: HeaderBar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {
  args: {
    region: 'US',
    accountName: 'John Doe',
    accountCompany: 'Mailgun',
    hasSubAccountTag: true,
  },
};

export const NoSubAccount: Story = {
  name: 'No subaccount tag',
  args: {
    ...Default.args,
    hasSubAccountTag: false,
  },
};
