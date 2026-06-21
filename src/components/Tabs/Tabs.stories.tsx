import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { MessageSquare, User, Settings, Bell } from 'lucide-react';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'pills'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TAB_ITEMS = [
  { id: 'profile', label: 'Perfil', icon: <User size={16} /> },
  { id: 'messages', label: 'Mensajes', icon: <MessageSquare size={16} /> },
  { id: 'notifications', label: 'Notificaciones', icon: <Bell size={16} /> },
  { id: 'settings', label: 'Ajustes', icon: <Settings size={16} /> },
];

const TabsWrapper = ({ activeId: initialActiveId = 'profile', ...args }: React.ComponentProps<typeof Tabs>) => {
  const [activeId, setActiveId] = useState(initialActiveId);
  return (
    <Tabs
      {...args}
      activeId={activeId}
      onChange={setActiveId}
    />
  );
};

export const Interactive: Story = {
  args: {
    items: TAB_ITEMS,
    variant: 'default',
    fullWidth: false,
    activeId: 'profile',
  },
  render: (args) => <TabsWrapper {...args} />,
};

export const Outline: Story = {
  args: {
    items: TAB_ITEMS,
    variant: 'outline',
    activeId: 'messages',
  },
  render: (args) => <TabsWrapper {...args} />,
};

export const Pills: Story = {
  args: {
    items: TAB_ITEMS,
    variant: 'pills',
    activeId: 'notifications',
  },
  render: (args) => <TabsWrapper {...args} />,
};

export const FullWidthPills: Story = {
  args: {
    items: TAB_ITEMS,
    variant: 'pills',
    fullWidth: true,
    activeId: 'profile',
  },
  render: (args) => <TabsWrapper {...args} />,
};
