import type { Meta, StoryObj } from '@storybook/react';
import { NavIcon } from './NavIcons';
import type { NavIconName } from './NavIcons';

const meta: Meta = {
  title: 'Foundations/Icons/NavIcons',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

const ALL_ICONS: NavIconName[] = [
  'dashboard',
  'reporting',
  'send',
  'inspect',
  'optimize',
  'validate',
  'sms',
  'integrations',
];

export const AllIcons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '16px' }}>
      {ALL_ICONS.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            width: '80px',
          }}
        >
          <NavIcon name={name} />
          <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const DefaultState: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', color: 'var(--color-neutral-600)' }}>
      {ALL_ICONS.map((name) => (
        <NavIcon key={name} name={name} />
      ))}
    </div>
  ),
};

export const ActiveState: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', color: 'var(--color-cta-brand-default)' }}>
      {ALL_ICONS.map((name) => (
        <NavIcon key={name} name={name} />
      ))}
    </div>
  ),
};
