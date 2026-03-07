import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['like', 'comment', 'follow', 'mention', 'info'],
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Like: Story = {
  args: {
    type: 'like',
    title: 'New Like',
    message: 'John Doe liked your post',
    timestamp: '5 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
    read: false,
  },
};

export const Comment: Story = {
  args: {
    type: 'comment',
    title: 'New Comment',
    message: 'Jane Smith commented on your post: "Great content!"',
    timestamp: '10 minutes ago',
    avatar: 'https://i.pravatar.cc/150?img=2',
    read: false,
  },
};

export const Follow: Story = {
  args: {
    type: 'follow',
    title: 'New Follower',
    message: 'Mike Johnson started following you',
    timestamp: '1 hour ago',
    avatar: 'https://i.pravatar.cc/150?img=3',
    read: false,
  },
};

export const Mention: Story = {
  args: {
    type: 'mention',
    title: 'You were mentioned',
    message: 'Sarah Williams mentioned you in a post',
    timestamp: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=4',
    read: false,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'System Update',
    message: 'Your profile has been successfully updated',
    timestamp: '1 day ago',
    read: false,
  },
};

export const Read: Story = {
  args: {
    type: 'like',
    title: 'Read Notification',
    message: 'This notification has been read',
    timestamp: '2 days ago',
    avatar: 'https://i.pravatar.cc/150?img=5',
    read: true,
  },
};

export const WithCloseButton: Story = {
  args: {
    type: 'info',
    title: 'Notification',
    message: 'This notification can be closed',
    timestamp: 'Just now',
    read: false,
    onClose: () => alert('Notification closed'),
  },
};
