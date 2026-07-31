import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Patterns/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien odio, feugiat sed laoreet vel, sodales id lectus. Pellentesque consectetur lorem ac massa posuere, non placerat est consequat. Aliquam id pretium orci. Phasellus ullamcorper risus eu pharetra feugiat. Phasellus eu est odio.';

export const Full: Story = {
  args: {
    title: 'Title of the page',
    breadcrumbItems: [
      { label: 'Item 1', onClick: () => {} },
      { label: 'Item 2', onClick: () => {} },
      { label: 'Item 3', onClick: () => {} },
      { label: 'Item 4', onClick: () => {} },
      { label: 'Item 5' },
    ],
    description: DESCRIPTION,
    domain: 'domain1.company.com',
    inputValue: '',
    inputPlaceholder: 'acme.com',
    onCopy: () => {},
    secondaryButtonLabel: 'Preview list',
    primaryButtonLabel: 'Validate',
    onMore: () => {},
    infoText: "You've used 2,153 of 20,000 validations",
  },
};

export const Minimal: Story = {
  name: 'Minimal (title only)',
  args: {
    title: 'Title of the page',
  },
};

export const WithoutDomain: Story = {
  name: 'Without domain field',
  args: {
    title: 'Title of the page',
    breadcrumbItems: [{ label: 'Item 1', onClick: () => {} }, { label: 'Item 2' }],
    description: DESCRIPTION,
    primaryButtonLabel: 'Validate',
  },
};
