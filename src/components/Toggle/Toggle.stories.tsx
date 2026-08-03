import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Toggle } from './Toggle';
import { Icon } from '../../icons/Icon';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const TwoItems: Story = {
  name: '2 items',
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <Toggle
        value={value}
        onChange={setValue}
        options={[
          { value: 'a', label: 'Toggle', icon: <Icon name="ui/gear-gen2" /> },
          { value: 'b', label: 'Toggle', icon: <Icon name="ui/gear-gen2" /> },
        ]}
      />
    );
  },
};

export const FiveItems: Story = {
  name: '5 items',
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <Toggle
        value={value}
        onChange={setValue}
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
          { value: 'c', label: 'C' },
          { value: 'd', label: 'D' },
          { value: 'e', label: 'E' },
        ]}
      />
    );
  },
};
