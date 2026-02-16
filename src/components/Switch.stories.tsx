import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    font: {
      control: 'select',
      options: ['nunito', 'jetbrains', 'default'],
      description: 'Familia de fuente para el label',
    },
    weight: {
      control: 'select',
      options: ['light', 'medium', 'bold', 'black'],
      description: 'Peso de la fuente del label',
    },
    labelColor: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'marmol', 'ice', 'koala',
        'theme-background', 'theme-text', 'theme-highlight', 'theme-primary'
      ],
      description: 'Color del texto del label',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Cada vez que entra un mensaje.',
  },
};

export const Checked: Story = {
  args: {
    label: 'Cada vez que entra un mensaje.',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const WithCustomFont: Story = {
  args: {
    label: 'Texto con JetBrains Mono',
    font: 'jetbrains',
  },
};

export const WithBoldWeight: Story = {
  args: {
    label: 'Texto en negrita',
    weight: 'bold',
  },
};

export const WithColor: Story = {
  args: {
    label: 'Notificaciones importantes',
    labelColor: 'coral',
    weight: 'bold',
  },
};

export const FullyCustomized: Story = {
  args: {
    label: 'Sistema activado',
    font: 'nunito',
    weight: 'black',
    labelColor: 'bosque',
    defaultChecked: true,
  },
};

export const MultipleExamples: Story = {
  args: {
    label: '',
  },
  render: () => (
    <div className="space-y-6 p-8">
      <Switch
        label="Switch por defecto"
      />
      <Switch
        label="Con Nunito Bold"
        weight="bold"
      />
      <Switch
        label="Con JetBrains Mono"
        font="jetbrains"
      />
      <Switch
        label="Color personalizado"
        labelColor="electrico"
        weight="bold"
      />
      <Switch
        label="Completamente personalizado"
        font="nunito"
        weight="black"
        labelColor="bosque"
        defaultChecked={true}
      />
    </div>
  ),
};
