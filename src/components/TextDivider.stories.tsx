import type { Meta, StoryObj } from '@storybook/react';
import { TextDivider } from './TextDivider';

const meta = {
  title: 'Components/TextDivider',
  component: TextDivider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Eliminar la cuenta',
  },
};

export const WithCustomColors: Story = {
  args: {
    text: 'Eliminar la cuenta',
    textColor: 'olivo',
    lineColor: 'olivo',
  },
};

export const ThickLine: Story = {
  args: {
    text: 'Configuración',
    lineColor: 'bosque',
    lineThickness: 2,
  },
};

export const ColorfulExample: Story = {
  args: {
    text: 'Sección importante',
    textColor: 'coral',
    lineColor: 'coral',
    lineThickness: 2,
  },
};

export const SubtleStyle: Story = {
  args: {
    text: 'Detalles adicionales',
    textColor: 'koala',
    lineColor: 'marmol',
    lineThickness: 1,
  },
};

export const ElectricStyle: Story = {
  args: {
    text: 'Nueva funcionalidad',
    textColor: 'electrico',
    lineColor: 'electrico',
    lineThickness: 2,
  },
};
