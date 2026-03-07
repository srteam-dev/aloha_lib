import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'Jane Smith',
    fallback: 'JS',
  },
};

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'User',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'User',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User',
    size: 'xl',
  },
};

export const NoImage: Story = {
  args: {
    alt: 'Anonymous',
    fallback: 'A',
  },
};
