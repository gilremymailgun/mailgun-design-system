import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['normal', 'small'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Placeholder',
    label: 'Label',
    labelOptionText: '(Optional message)',
    showLabelTooltip: true,
    additionalCustomText: 'Additional custom text',
    showTrailingIcon: true,
    buttonLabel: 'Add',
    helpText: 'Help text',
    showHelpIcon: true,
    counterText: '0/10',
    size: 'normal',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Minimal: Story = {
  name: 'Minimal (no label/helper)',
  args: {
    value: '',
    placeholder: 'Placeholder',
    size: 'normal',
  },
};

export const ErrorState: Story = {
  name: 'Error',
  args: {
    ...Default.args,
    value: 'Invalid value',
    error: true,
    helpText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Disabled value',
    disabled: true,
  },
};

export const Interactive: Story = {
  name: 'Interactive (controlled)',
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Field
        value={value}
        onChange={setValue}
        placeholder="Type something..."
        label="Domain"
        helpText="Enter your custom domain"
        showHelpIcon
      />
    );
  },
};
