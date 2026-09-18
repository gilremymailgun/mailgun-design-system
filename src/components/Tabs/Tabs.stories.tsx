import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showSupportingText: {
      description: 'Show supporting text (e.g. count) next to each tab label.',
      control: 'boolean',
    },
    defaultActiveId: {
      description: 'ID of the tab selected on mount.',
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const DEFAULT_TABS = [
  { id: 'item-1', label: 'Item 1' },
  { id: 'item-2', label: 'Item 2' },
  { id: 'item-3', label: 'Item 3' },
  { id: 'item-4', label: 'Item 4', disabled: true },
  { id: 'item-5', label: 'Item 5' },
  { id: 'item-6', label: 'Item 6' },
  { id: 'item-7', label: 'Item 7' },
  { id: 'item-8', label: 'Item 8' },
  { id: 'item-9', label: 'Item 9' },
];

const TABS_WITH_COUNT = [
  { id: 'send', label: 'Send', supportingText: '(203)' },
  { id: 'optimize', label: 'Optimize', supportingText: '(12)' },
  { id: 'reporting', label: 'Reporting', supportingText: '(5)' },
  { id: 'archived', label: 'Archived', supportingText: '(0)', disabled: true },
];

export const Default: Story = {
  args: {
    tabs: DEFAULT_TABS,
    defaultActiveId: 'item-1',
    showSupportingText: false,
  },
};

export const WithSupportingText: Story = {
  args: {
    tabs: TABS_WITH_COUNT,
    defaultActiveId: 'send',
    showSupportingText: true,
  },
};

export const SecondTabSelected: Story = {
  args: {
    tabs: DEFAULT_TABS,
    defaultActiveId: 'item-2',
    showSupportingText: false,
  },
};
