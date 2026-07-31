import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';
import { Icon } from '../../icons/Icon';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    dotStatus: { control: 'select', options: [undefined, 'info', 'success', 'error', 'warning'] },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: 'Tag', onRemove: () => alert('removed') } };

export const WithIconAndDot: Story = {
  name: 'With icon and dot',
  args: {
    children: 'Tag',
    icon: <Icon name="navigate/home-gen2" />,
    dotStatus: 'success',
    onRemove: () => alert('removed'),
  },
};

export const NotRemovable: Story = {
  name: 'Not removable (no remove action passed)',
  args: { children: 'Tag' },
};
