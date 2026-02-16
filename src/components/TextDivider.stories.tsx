import type { Meta, StoryObj } from '@storybook/react';
import { TextDivider } from './TextDivider';

const meta = {
  title: 'Components/TextDivider',
  component: TextDivider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'small', 'muted'],
      description: 'Componente tipográfico a usar',
    },
    font: {
      control: 'select',
      options: ['nunito', 'jetbrains', 'default'],
      description: 'Familia de fuente',
    },
    weight: {
      control: 'select',
      options: ['light', 'medium', 'bold', 'black'],
      description: 'Peso de la fuente',
    },
    textColor: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'theme-background', 'theme-text', 'theme-highlight', 'theme-primary'
      ],
      description: 'Color del texto',
    },
    lineColor: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'marmol', 'ice', 'koala'
      ],
      description: 'Color de la línea',
    },
    lineThickness: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
      description: 'Grosor de la línea en píxeles',
    },
  },
} satisfies Meta<typeof TextDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Eliminar la cuenta',
  },
};

export const WithHeading: Story = {
  args: {
    text: 'Sección Principal',
    component: 'h2',
    textColor: 'bosque',
    lineColor: 'bosque',
  },
};

export const WithCustomFont: Story = {
  args: {
    text: 'Código Técnico',
    component: 'p',
    font: 'jetbrains',
    textColor: 'electrico',
    lineColor: 'electrico',
  },
};

export const WithWeight: Story = {
  args: {
    text: 'Título en Bold',
    component: 'h3',
    weight: 'bold',
    textColor: 'coral',
    lineColor: 'coral',
    lineThickness: 2,
  },
};

export const SmallText: Story = {
  args: {
    text: 'Detalles adicionales',
    component: 'small',
    textColor: 'koala',
    lineColor: 'marmol',
    lineThickness: 1,
  },
};

export const MutedStyle: Story = {
  args: {
    text: 'Información secundaria',
    component: 'muted',
    lineColor: 'piedra',
  },
};

export const ColorfulExample: Story = {
  args: {
    text: 'Sección importante',
    component: 'h3',
    font: 'nunito',
    weight: 'black',
    textColor: 'coral',
    lineColor: 'coral',
    lineThickness: 2,
  },
};

export const ElectricStyle: Story = {
  args: {
    text: 'Nueva funcionalidad',
    component: 'h4',
    font: 'jetbrains',
    weight: 'bold',
    textColor: 'electrico',
    lineColor: 'electrico',
    lineThickness: 2,
  },
};

export const MultipleExamples: Story = {
  args: {
    text: '',
  },
  render: () => (
    <div className="space-y-8">
      <TextDivider
        text="Heading 1 con Nunito"
        component="h1"
        textColor="bosque"
        lineColor="bosque"
      />
      <TextDivider
        text="Heading 2 con JetBrains"
        component="h2"
        font="jetbrains"
        textColor="electrico"
        lineColor="electrico"
      />
      <TextDivider
        text="Párrafo regular"
        component="p"
        textColor="olivo"
        lineColor="lima"
      />
      <TextDivider
        text="Texto pequeño"
        component="small"
        textColor="lavanda"
        lineColor="lavanda"
        lineThickness={1}
      />
      <TextDivider
        text="Texto muted"
        component="muted"
        lineColor="marmol"
      />
    </div>
  ),
};
