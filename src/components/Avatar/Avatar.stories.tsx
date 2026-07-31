import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    configuration: { control: 'select', options: ['filled', 'outlined'] },
    size: { control: 'select', options: ['small', 'large'] },
    label: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const FilledSmall: Story = { name: 'Filled, small', args: { configuration: 'filled', size: 'small', label: 'AB' } };
export const FilledLarge: Story = { name: 'Filled, large', args: { configuration: 'filled', size: 'large', label: 'AB' } };
export const OutlinedSmall: Story = { name: 'Outlined, small', args: { configuration: 'outlined', size: 'small', label: 'AB' } };
export const OutlinedLarge: Story = { name: 'Outlined, large', args: { configuration: 'outlined', size: 'large', label: 'AB' } };

export const WithIcon: Story = {
  name: 'With icon (filled)',
  args: { configuration: 'filled', size: 'large', showIcon: true },
};

export const WithIconOutlined: Story = {
  name: 'With icon (outlined)',
  args: { configuration: 'outlined', size: 'large', showIcon: true },
};

export const WithPhoto: Story = {
  name: 'With photo',
  args: {
    size: 'large',
    photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
  },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {(['filled', 'outlined'] as const).map((configuration) => (
        <div key={configuration} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '80px', fontSize: '12px', color: 'var(--sys-color-text-muted)' }}>
            {configuration}
          </span>
          <Avatar configuration={configuration} size="small" label="AB" />
          <Avatar configuration={configuration} size="large" label="AB" />
          <Avatar configuration={configuration} size="small" showIcon />
          <Avatar configuration={configuration} size="large" showIcon />
        </div>
      ))}
    </div>
  ),
};
