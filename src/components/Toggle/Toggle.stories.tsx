import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Navigation/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

const IconPlaceholder = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="6" r="2" fill="currentColor"/>
  </svg>
);

export const TwoItems: Story = {
  name: '2 items',
  args: {
    items: [
      { value: 'a', label: 'Toggle' },
      { value: 'b', label: 'Toggle' },
    ],
    defaultValue: 'b',
  },
};

export const ThreeItems: Story = {
  name: '3 items',
  args: {
    items: [
      { value: 'a', label: 'Toggle' },
      { value: 'b', label: 'Toggle' },
      { value: 'c', label: 'Toggle' },
    ],
    defaultValue: 'c',
  },
};

export const FourItems: Story = {
  name: '4 items',
  args: {
    items: [
      { value: 'a', label: 'Toggle' },
      { value: 'b', label: 'Toggle' },
      { value: 'c', label: 'Toggle' },
      { value: 'd', label: 'Toggle' },
    ],
    defaultValue: 'd',
  },
};

export const FiveItems: Story = {
  name: '5 items',
  args: {
    items: [
      { value: 'a', label: 'Toggle' },
      { value: 'b', label: 'Toggle' },
      { value: 'c', label: 'Toggle' },
      { value: 'd', label: 'Toggle' },
      { value: 'e', label: 'Toggle' },
    ],
    defaultValue: 'e',
  },
};

export const WithIcons: Story = {
  name: 'With icons',
  args: {
    items: [
      { value: 'a', label: 'Toggle', icon: <IconPlaceholder /> },
      { value: 'b', label: 'Toggle', icon: <IconPlaceholder /> },
      { value: 'c', label: 'Toggle', icon: <IconPlaceholder /> },
    ],
    defaultValue: 'c',
  },
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {[2, 3, 4, 5].map((n) => (
        <Toggle
          key={n}
          defaultValue={String.fromCharCode(96 + n)}
          items={Array.from({ length: n }, (_, i) => ({
            value: String.fromCharCode(97 + i),
            label: 'Toggle',
            icon: <IconPlaceholder />,
          }))}
        />
      ))}
    </div>
  ),
};
