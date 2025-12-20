import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    width: 400,
    height: 300,
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Failed image',
    fallbackSrc: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    width: 400,
    height: 300,
  },
};

export const Cover: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    width: 400,
    height: 200,
    objectFit: 'cover',
  },
};

export const Contain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    width: 400,
    height: 200,
    objectFit: 'contain',
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    width: 300,
    height: 300,
    className: 'rounded-full',
  },
};

export const WithBorder: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    alt: 'Beach sunset',
    width: 400,
    height: 300,
    className: 'rounded-lg border-4 border-primary',
  },
};

export const LazyLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Nature',
    width: 400,
    height: 300,
    loading: 'lazy',
  },
};

export const EagerLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    alt: 'Forest',
    width: 400,
    height: 300,
    loading: 'eager',
  },
};
