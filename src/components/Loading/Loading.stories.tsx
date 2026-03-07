import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};

export const WithMessage: Story = {
  args: {
    message: 'Cargando datos...',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    message: 'Cargando',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    message: 'Cargando',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    message: 'Cargando',
  },
};

export const Centered: Story = {
  args: {
    message: 'Cargando contenido...',
    centered: true,
  },
  decorators: [
    (Story) => (
      <div className="h-96 border border-gray-200 rounded">
        <Story />
      </div>
    ),
  ],
};

export const InButton: Story = {
  args: {
    size: 'sm',
  },
  decorators: [
    (Story) => (
      <button className="px-4 py-2 bg-blue-500 text-white rounded inline-flex items-center gap-2">
        <Story />
        <span>Guardando...</span>
      </button>
    ),
  ],
};

export const InCard: Story = {
  args: {
    message: 'Cargando información...',
    centered: true,
  },
  decorators: [
    (Story) => (
      <div className="border border-gray-200 rounded-lg p-8">
        <Story />
      </div>
    ),
  ],
};
