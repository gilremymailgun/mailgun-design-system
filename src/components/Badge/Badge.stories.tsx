import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { Icon } from '../../icons/Icon';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    configuration: { control: 'select', options: ['filled', 'outline'] },
    children: { control: 'text' },
    dotStatus: { control: 'select', options: [undefined, 'info', 'success', 'error', 'warning'] },
    notificationStatus: { control: 'select', options: [undefined, 'info', 'success', 'error', 'warning'] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Filled: Story = { args: { configuration: 'filled', children: 'Badge' } };
export const Outline: Story = { args: { configuration: 'outline', children: 'Badge' } };

export const WithIconAndDot: Story = {
  name: 'With icon and dot',
  args: {
    configuration: 'filled',
    children: 'Badge',
    icon: <Icon name="ui/lock-locked-gen2" />,
    dotStatus: 'success',
  },
};

export const WithNotification: Story = {
  name: 'With notification',
  args: {
    configuration: 'filled',
    children: 'Badge',
    notificationStatus: 'error',
  },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {(['filled', 'outline'] as const).map((configuration) => (
        <div key={configuration} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '80px', fontSize: '12px', color: 'var(--sys-color-text-muted)' }}>
            {configuration}
          </span>
          <Badge configuration={configuration}>Badge</Badge>
          <Badge configuration={configuration} dotStatus="success">
            Badge
          </Badge>
          <Badge configuration={configuration} icon={<Icon name="ui/lock-locked-gen2" />}>
            Badge
          </Badge>
          <Badge configuration={configuration} notificationStatus="error">
            Badge
          </Badge>
        </div>
      ))}
    </div>
  ),
};
