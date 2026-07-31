import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';
import { Icon } from '../../icons/Icon';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { children: 'Label' } };

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    children: 'Label',
    icon: <Icon name="navigate/check-large-gen2" />,
  },
};
