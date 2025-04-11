import type { Meta, StoryObj } from '@storybook/react';

import Sample from '@/app/_components/common/Sample';

const meta: Meta<typeof Sample> = {
  title: 'Components/Sample',
  component: Sample,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['gray', 'blue', 'green'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sample>;

export const Default: Story = {
  args: {
    label: '기본 Sample',
    color: 'gray',
  },
};

export const Blue: Story = {
  args: {
    label: '블루 Sample',
    color: 'blue',
  },
};

export const Green: Story = {
  args: {
    label: '그린 Sample',
    color: 'green',
  },
};
