import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPage } from './DashboardPage';

const meta: Meta<typeof DashboardPage> = {
  title: 'Pages/Dashboard',
  component: DashboardPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    defaultActive: {
      description: 'The nav item selected by default.',
      control: { type: 'select' },
      options: [
        'dashboard',
        'reporting:metrics', 'reporting:logs', 'reporting:bounce', 'reporting:tags', 'reporting:saved',
        'send:domains', 'send:templates', 'send:suppressions', 'send:webhooks', 'send:ips', 'send:mailing-lists', 'send:domain-settings', 'send:routes',
        'inspect:email-testing',
        'optimize:ai-insights', 'optimize:dmarc', 'optimize:health-score', 'optimize:email-preview',
        'validate', 'sms', 'integrations',
      ],
    },
    userName: {
      description: 'Display name shown in the greeting and account panel.',
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {
  args: {
    defaultActive: 'dashboard',
    userName: 'Gil Remy',
  },
};

export const ReportingActive: Story = {
  args: {
    defaultActive: 'reporting:metrics',
    userName: 'Gil Remy',
  },
};

export const SendActive: Story = {
  args: {
    defaultActive: 'send:domains',
    userName: 'Gil Remy',
  },
};
