import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { colorEntries } from '../../colors';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    backgroundColor: {
      control: 'select',
      options: colorEntries.map(([name]) => name),
    },
    textColor: {
      control: 'select',
      options: colorEntries.map(([name]) => name),
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const WithNumber: Story = {
  args: {
    children: '99+',
    variant: 'default',
  },
};

export const Active: Story = {
  args: {
    children: 'Active',
    variant: 'default',
  },
};

// ── Custom Colors ────────────────────────────────────────────────
export const CustomColors: Story = {
  args: {
    children: 'Custom Badge',
    backgroundColor: 'lima',
    textColor: 'olivo',
  },
};

export const CoralBadge: Story = {
  args: {
    children: 'Alert',
    backgroundColor: 'coral',
    textColor: 'hueso',
  },
};

export const GirasolBadge: Story = {
  args: {
    children: 'Premium',
    backgroundColor: 'girasol',
    textColor: 'olivo',
  },
};

export const LavandaBadge: Story = {
  args: {
    children: 'Special',
    backgroundColor: 'lavanda',
    textColor: 'ice',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge backgroundColor="olivo" textColor="hueso">Olivo</Badge>
      <Badge backgroundColor="lima" textColor="olivo">Lima</Badge>
      <Badge backgroundColor="bosque" textColor="hueso">Bosque</Badge>
      <Badge backgroundColor="coral" textColor="hueso">Coral</Badge>
      <Badge backgroundColor="girasol" textColor="olivo">Girasol</Badge>
      <Badge backgroundColor="aqua" textColor="olivo">Aqua</Badge>
      <Badge backgroundColor="lavanda" textColor="ice">Lavanda</Badge>
      <Badge backgroundColor="electrico" textColor="hueso">Eléctrico</Badge>
    </div>
  ),
};

