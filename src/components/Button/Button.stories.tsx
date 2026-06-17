import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Navigation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    hierarchy: { control: 'select', options: ['primary', 'secondary', 'destructive', 'neutral'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { label: 'Button', hierarchy: 'primary', size: 'md' } };
export const Secondary: Story = { args: { label: 'Button', hierarchy: 'secondary', size: 'md' } };
export const Destructive: Story = { args: { label: 'Delete', hierarchy: 'destructive', size: 'md' } };
export const Neutral: Story = { args: { label: 'Cancel', hierarchy: 'neutral', size: 'md' } };
export const Disabled: Story = { args: { label: 'Button', hierarchy: 'primary', size: 'md', disabled: true } };
export const Loading: Story = { args: { label: 'Saving...', hierarchy: 'primary', size: 'md', loading: true } };

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['primary', 'secondary', 'destructive', 'neutral'] as const).map((hierarchy) => (
        <div key={hierarchy} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '100px', fontSize: '12px', color: '#808a91', textTransform: 'capitalize' }}>{hierarchy}</span>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Button key={size} label="Button" hierarchy={hierarchy} size={size} />
          ))}
          <Button label="Disabled" hierarchy={hierarchy} size="md" disabled />
          <Button label="Loading" hierarchy={hierarchy} size="md" loading />
        </div>
      ))}
    </div>
  ),
};
