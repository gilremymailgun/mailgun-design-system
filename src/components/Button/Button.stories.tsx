import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    hierarchy: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'secondary-dark',
        'secondary-neutral',
        'tertiary',
        'destructive',
        'brand',
      ],
    },
    size: { control: 'select', options: ['small', 'default'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Button', hierarchy: 'primary', size: 'default' } };
export const Secondary: Story = { args: { children: 'Button', hierarchy: 'secondary', size: 'default' } };
export const SecondaryDark: Story = { args: { children: 'Button', hierarchy: 'secondary-dark', size: 'default' } };
export const SecondaryNeutral: Story = { args: { children: 'Button', hierarchy: 'secondary-neutral', size: 'default' } };
export const Tertiary: Story = { args: { children: 'Button', hierarchy: 'tertiary', size: 'default' } };
export const Destructive: Story = { args: { children: 'Delete', hierarchy: 'destructive', size: 'default' } };
export const Brand: Story = { args: { children: 'Get started', hierarchy: 'brand', size: 'default' } };

export const Small: Story = { args: { children: 'Button', hierarchy: 'primary', size: 'small' } };
export const Disabled: Story = { args: { children: 'Button', hierarchy: 'primary', size: 'default', disabled: true } };
export const Loading: Story = { args: { children: 'Saving...', hierarchy: 'primary', size: 'default', loading: true } };

export const AllHierarchies: Story = {
  name: 'All hierarchies',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {(
        [
          'primary',
          'secondary',
          'secondary-dark',
          'secondary-neutral',
          'tertiary',
          'destructive',
          'brand',
        ] as const
      ).map((hierarchy) => (
        <div key={hierarchy} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '140px', fontSize: '12px', color: 'var(--sys-color-text-muted)' }}>
            {hierarchy}
          </span>
          <Button hierarchy={hierarchy} size="default">
            Button
          </Button>
          <Button hierarchy={hierarchy} size="small">
            Button
          </Button>
          <Button hierarchy={hierarchy} size="default" disabled>
            Disabled
          </Button>
          <Button hierarchy={hierarchy} size="default" loading>
            Loading
          </Button>
        </div>
      ))}
    </div>
  ),
};
