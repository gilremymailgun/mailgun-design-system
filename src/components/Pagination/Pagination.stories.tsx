import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['complete', 'mirrored', 'no-toggle'],
      description: 'Layout variant matching Figma',
    },
    currentPage: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    pageSize: { control: 'select', options: [10, 20, 30] },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Complete: Story = {
  name: 'Complete (sizer + navigator)',
  args: { variant: 'complete', currentPage: 1, totalPages: 10, pageSize: 10 },
};

export const Mirrored: Story = {
  name: 'Mirrored (navigator + sizer)',
  args: { variant: 'mirrored', currentPage: 1, totalPages: 10, pageSize: 10 },
};

export const NoToggle: Story = {
  name: 'No Toggle (navigator only)',
  args: { variant: 'no-toggle', currentPage: 1, totalPages: 10 },
};

export const MiddlePage: Story = {
  name: 'Middle page',
  args: { variant: 'complete', currentPage: 5, totalPages: 10, pageSize: 20 },
};

export const LastPage: Story = {
  name: 'Last page',
  args: { variant: 'complete', currentPage: 10, totalPages: 10, pageSize: 30 },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['complete', 'mirrored', 'no-toggle'] as const).map((variant) => (
        <div key={variant}>
          <div style={{ fontSize: '11px', color: '#808a91', textTransform: 'capitalize', marginBottom: '8px' }}>{variant}</div>
          <Pagination variant={variant} currentPage={1} totalPages={10} pageSize={10} />
        </div>
      ))}
    </div>
  ),
};
