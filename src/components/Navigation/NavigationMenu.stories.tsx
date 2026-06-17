import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    sections: {
      description: 'Which top-level sections to show in the nav. Defaults to all.',
      control: { type: 'check' },
      options: ['dashboard', 'reporting', 'send', 'inspect', 'optimize', 'validate', 'sms', 'integrations'],
    },
    defaultActive: {
      description: 'The item selected by default on mount.',
      control: { type: 'select' },
      options: [
        'dashboard',
        'reporting:metrics', 'reporting:logs', 'reporting:bounce', 'reporting:tags', 'reporting:saved',
        'send:domains', 'send:templates', 'send:suppressions', 'send:webhooks', 'send:ips', 'send:mailing-lists', 'send:domain-settings', 'send:routes',
        'inspect:email-testing',
        'optimize:ai-insights', 'optimize:dmarc', 'optimize:health-score', 'optimize:email-preview', 'optimize:postmaster', 'optimize:snds', 'optimize:spam-trap', 'optimize:bl-domains', 'optimize:bl-ips', 'optimize:ip-reports', 'optimize:seed-lists',
        'validate', 'sms', 'integrations',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    defaultActive: 'dashboard',
  },
};

export const ReportingActive: Story = {
  args: {
    defaultActive: 'reporting:metrics',
  },
};

export const SendActive: Story = {
  args: {
    defaultActive: 'send:domains',
  },
};

export const OptimizeActive: Story = {
  args: {
    defaultActive: 'optimize:ai-insights',
  },
};

export const SendAndReportingOnly: Story = {
  name: 'Custom sections — Send + Reporting only',
  args: {
    sections: ['dashboard', 'reporting', 'send'],
    defaultActive: 'send:domains',
  },
};

export const NoExpandableSections: Story = {
  name: 'Standalone items only',
  args: {
    sections: ['dashboard', 'validate', 'sms', 'integrations'],
    defaultActive: 'dashboard',
  },
};
