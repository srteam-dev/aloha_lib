import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Descripción de tu perfil',
    placeholder: 'Escribe algo sobre ti...',
    helperText: 'Este texto será visible públicamente.',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Comentario',
    placeholder: 'Tu opinión...',
    error: 'El comentario no puede estar vacío y debe tener al menos 10 caracteres.',
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    placeholder: 'No puedes escribir aquí...',
    disabled: true,
    rows: 3,
  },
};

export const NonResizable: Story = {
  args: {
    label: 'Tamaño Fijo',
    placeholder: 'Este textarea no se puede redimensionar...',
    resize: 'none',
    rows: 4,
  },
};
