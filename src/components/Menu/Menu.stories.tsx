import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import type { MenuItem } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Menu>;

// ── Sample icon ───────────────────────────────────────────────────────────────

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM7.5 3.07V5H6C6.43 4.07 6.94 3.46 7.5 3.07ZM8.5 3.07C9.06 3.46 9.57 4.07 10 5H8.5V3.07ZM3.07 9H5.07C5.02 8.67 5 8.34 5 8C5 7.66 5.02 7.33 5.07 7H3.07C2.98 7.32 2.94 7.66 2.94 8C2.94 8.34 2.98 8.68 3.07 9ZM6.07 7C6.02 7.33 6 7.66 6 8C6 8.34 6.02 8.67 6.07 9H9.93C9.98 8.67 10 8.34 10 8C10 7.66 9.98 7.33 9.93 7H6.07ZM10.93 7C10.98 7.33 11 7.66 11 8C11 8.34 10.98 8.67 10.93 9H12.93C13.02 8.68 13.06 8.34 13.06 8C13.06 7.66 13.02 7.32 12.93 7H10.93ZM10 11H8.5V12.93C9.06 12.54 9.57 11.93 10 11ZM7.5 12.93V11H6C6.43 11.93 6.94 12.54 7.5 12.93ZM5.07 9H3.07C3.29 9.97 3.74 10.85 4.36 11.58L5.57 10.37C5.37 9.95 5.19 9.49 5.07 9ZM10.93 9C10.81 9.49 10.63 9.95 10.43 10.37L11.64 11.58C12.26 10.85 12.71 9.97 12.93 9H10.93ZM4.36 4.42L5.57 5.63C5.37 6.05 5.19 6.51 5.07 7H3.07C3.29 6.03 3.74 5.15 4.36 4.42ZM10.43 5.63L11.64 4.42C12.26 5.15 12.71 6.03 12.93 7H10.93C10.81 6.51 10.63 6.05 10.43 5.63Z" fill="currentColor" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5ZM6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1C7.45 1 7 1.45 7 2V2.07C6.48 2.19 5.99 2.39 5.54 2.66L5.49 2.61C5.1 2.22 4.47 2.22 4.08 2.61L2.61 4.08C2.22 4.47 2.22 5.1 2.61 5.49L2.66 5.54C2.39 5.99 2.19 6.48 2.07 7H2C1.45 7 1 7.45 1 8C1 8.55 1.45 9 2 9H2.07C2.19 9.52 2.39 10.01 2.66 10.46L2.61 10.51C2.22 10.9 2.22 11.53 2.61 11.92L4.08 13.39C4.47 13.78 5.1 13.78 5.49 13.39L5.54 13.34C5.99 13.61 6.48 13.81 7 13.93V14C7 14.55 7.45 15 8 15C8.55 15 9 14.55 9 14V13.93C9.52 13.81 10.01 13.61 10.46 13.34L10.51 13.39C10.9 13.78 11.53 13.78 11.92 13.39L13.39 11.92C13.78 11.53 13.78 10.9 13.39 10.51L13.34 10.46C13.61 10.01 13.81 9.52 13.93 9H14C14.55 9 15 8.55 15 8C15 7.45 14.55 7 14 7H13.93C13.81 6.48 13.61 5.99 13.34 5.54L13.39 5.49C13.78 5.1 13.78 4.47 13.39 4.08L11.92 2.61C11.53 2.22 10.9 2.22 10.51 2.61L10.46 2.66C10.01 2.39 9.52 2.19 9 2.07V2C9 1.45 8.55 1 8 1Z" fill="currentColor" />
  </svg>
);

// ── Stories ───────────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: MenuItem[] = [
  { id: 'title-1', label: 'SECTION ONE', type: 'title' },
  { id: 'btn-1', label: 'Button', type: 'button' },
  { id: 'item-1', label: 'Label', subLabel: 'SubLabel', leadingIcon: <GlobeIcon /> },
  { id: 'item-2', label: 'Label', subLabel: 'SubLabel', leadingIcon: <SettingsIcon /> },
  { id: 'item-3', label: 'Label', subLabel: 'SubLabel', disabled: true, leadingIcon: <SettingsIcon /> },
  { id: 'sep-1', label: '', type: 'separator' },
  { id: 'title-2', label: 'SECTION TWO', type: 'title' },
  { id: 'item-4', label: 'Label', subLabel: 'SubLabel' },
  { id: 'item-5', label: 'Label', subLabel: 'SubLabel' },
  { id: 'item-6', label: 'Label', subLabel: 'SubLabel' },
];

export const Default: Story = {
  args: {
    items: DEFAULT_ITEMS,
  },
};

export const SimpleList: Story = {
  args: {
    items: [
      { id: 'edit', label: 'Edit' },
      { id: 'duplicate', label: 'Duplicate' },
      { id: 'sep', label: '', type: 'separator' },
      { id: 'delete', label: 'Delete', disabled: true },
    ],
  },
};

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'title', label: 'DOMAINS', type: 'title' },
      { id: 'us', label: 'US Region', subLabel: 'app.mailgun.com', badge: 'US' },
      { id: 'eu', label: 'EU Region', subLabel: 'app.eu.mailgun.com', badge: 'EU' },
      { id: 'disabled', label: 'Disabled Region', disabled: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: 'domains', label: 'Domains', leadingIcon: <GlobeIcon /> },
      { id: 'settings', label: 'Settings', leadingIcon: <SettingsIcon /> },
      { id: 'sep', label: '', type: 'separator' },
      { id: 'disabled', label: 'Archived', leadingIcon: <GlobeIcon />, disabled: true },
    ],
  },
};
