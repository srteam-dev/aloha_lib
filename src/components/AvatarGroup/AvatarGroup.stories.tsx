import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const SAMPLE_AVATARS = [
  { src: 'https://i.pravatar.cc/150?img=12' },
  { src: 'https://i.pravatar.cc/150?img=7' },
  { src: 'https://i.pravatar.cc/150?img=32' },
  { src: 'https://i.pravatar.cc/150?img=47' },
  { src: 'https://i.pravatar.cc/150?img=59' },
  { src: 'https://i.pravatar.cc/150?img=63' },
];

const meta = {
  title: 'Data Display/AvatarGroup',
  component: AvatarGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 40, 60],
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
    },
    ringColor: {
      control: 'select',
      options: [
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza', 
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala'
      ],
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: SAMPLE_AVATARS,
    size: 'md',
    max: 4,
    ringColor: 'hueso',
  },
};

export const Small: Story = {
  args: {
    avatars: SAMPLE_AVATARS,
    size: 'sm',
    max: 3,
    ringColor: 'hueso',
  },
};

export const CustomRing: Story = {
  args: {
    avatars: SAMPLE_AVATARS,
    size: 'md',
    max: 4,
    ringColor: 'coral',
  },
};

export const ManyAvatars: Story = {
  args: {
    avatars: SAMPLE_AVATARS,
    size: 'lg',
    max: 5,
    ringColor: 'hueso',
  },
};
