import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { iconRegistry } from './icons';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: Object.keys(iconRegistry) },
    size: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const SingleIcon: Story = {
  args: { name: 'arrows/arrow-left-gen1', size: 16 },
};

export const AllIcons: Story = {
  name: 'All icons',
  render: () => {
    const names = Object.keys(iconRegistry).sort();
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
          padding: '24px',
        }}
      >
        {names.map((name) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              border: '1px solid var(--sys-color-border-subtle)',
              borderRadius: 'var(--ref-radius-s)',
            }}
          >
            <Icon name={name} size={24} />
            <span
              style={{
                fontSize: '10px',
                color: 'var(--sys-color-text-muted)',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
