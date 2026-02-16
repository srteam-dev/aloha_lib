import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { colorEntries } from '../colors';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    color: {
      control: 'select',
      options: colorEntries.map(([name]) => name),
    },
    textColor: {
      control: 'select',
      options: colorEntries.map(([name]) => name),
    },
    borderColor: {
      control: 'select',
      options: colorEntries.map(([name]) => name),
    },
    borderWidth: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Button clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
};

export const LoadingSecondary: Story = {
  args: {
    children: 'Processing',
    loading: true,
    variant: 'secondary',
  },
};

// Botones con colores personalizados
export const ColorOlivo: Story = {
  args: {
    children: 'Olivo',
    color: 'olivo',
  },
};

export const ColorLima: Story = {
  args: {
    children: 'Lima',
    color: 'lima',
  },
};

export const ColorBosque: Story = {
  args: {
    children: 'Bosque',
    color: 'bosque',
  },
};

export const ColorCoral: Story = {
  args: {
    children: 'Coral',
    color: 'coral',
  },
};

export const ColorAqua: Story = {
  args: {
    children: 'Aqua',
    color: 'aqua',
  },
};

export const ColorMarmol: Story = {
  args: {
    children: 'Mármol',
    color: 'marmol',
  },
};

export const ColorIce: Story = {
  args: {
    children: 'Ice',
    color: 'ice',
    textColor: 'piedra', // Texto oscuro para mejor contraste
  },
};

export const ColorKoala: Story = {
  args: {
    children: 'Koala',
    color: 'koala',
  },
};

// Botones Outline con colores personalizados
export const OutlineOlivo: Story = {
  args: {
    children: 'Outline Olivo',
    variant: 'outline',
    color: 'olivo',
  },
};

export const OutlineLima: Story = {
  args: {
    children: 'Outline Lima',
    variant: 'outline',
    color: 'lima',
  },
};

export const OutlineBosque: Story = {
  args: {
    children: 'Outline Bosque',
    variant: 'outline',
    color: 'bosque',
  },
};

export const OutlineCoral: Story = {
  args: {
    children: 'Outline Coral',
    variant: 'outline',
    color: 'coral',
  },
};

export const OutlineAqua: Story = {
  args: {
    children: 'Outline Aqua',
    variant: 'outline',
    color: 'aqua',
  },
};

export const OutlineElectrico: Story = {
  args: {
    children: 'Outline Eléctrico',
    variant: 'outline',
    color: 'electrico',
  },
};

export const OutlineLavanda: Story = {
  args: {
    children: 'Outline Lavanda',
    variant: 'outline',
    color: 'lavanda',
  },
};

// Botones outline con diferentes grosores de borde
export const OutlineThin: Story = {
  args: {
    children: 'Borde Delgado (1px)',
    variant: 'outline',
    color: 'olivo',
    borderWidth: 1,
  },
};

export const OutlineMedium: Story = {
  args: {
    children: 'Borde Medio (2px)',
    variant: 'outline',
    color: 'coral',
    borderWidth: 2,
  },
};

export const OutlineThick: Story = {
  args: {
    children: 'Borde Grueso (3px)',
    variant: 'outline',
    color: 'electrico',
    borderWidth: 3,
  },
};

export const OutlineExtraThick: Story = {
  args: {
    children: 'Borde Extra Grueso (4px)',
    variant: 'outline',
    color: 'lavanda',
    borderWidth: 4,
  },
};

// Outline con color de texto personalizado
export const OutlineCustomText: Story = {
  args: {
    children: 'Outline Bosque con texto Coral',
    variant: 'outline',
    color: 'bosque',
    textColor: 'coral',
    borderWidth: 2,
  },
};

// Botones con iconos
export const WithIcon: Story = {
  args: {
    children: 'Download',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
};

export const WithIconAndColor: Story = {
  args: {
    children: 'Save',
    color: 'bosque',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
    ),
  },
};

export const WithIconSmall: Story = {
  args: {
    children: 'Send',
    size: 'sm',
    color: 'electrico',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
};

export const WithIconLarge: Story = {
  args: {
    children: 'Upload File',
    size: 'lg',
    color: 'lavanda',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
};

// Outline con icono
export const OutlineWithIcon: Story = {
  args: {
    children: 'Agregar',
    variant: 'outline',
    color: 'bosque',
    borderWidth: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
};

// Grid de todos los colores
export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {colorEntries.map(([name]) => (
        <Button key={name} color={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

// Grid de todos los colores en outline
export const AllColorsOutline: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {colorEntries.map(([name]) => (
        <Button key={name} variant="outline" color={name} borderWidth={2}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

// Botones con color de texto personalizado
export const CustomTextColor: Story = {
  args: {
    children: 'Ice con texto Olivo',
    color: 'ice',
    textColor: 'olivo',
  },
};

export const MarmoWithBosque: Story = {
  args: {
    children: 'Mármol con texto Bosque',
    color: 'marmol',
    textColor: 'bosque',
  },
};

export const LimaWithPiedra: Story = {
  args: {
    children: 'Lima con texto Piedra',
    color: 'lima',
    textColor: 'piedra',
  },
};

export const HuesoWithCoral: Story = {
  args: {
    children: 'Hueso con texto Coral',
    color: 'hueso',
    textColor: 'coral',
  },
};

export const CustomWithIcon: Story = {
  args: {
    children: 'Koala con texto Ice',
    color: 'koala',
    textColor: 'ice',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
};

// Botones con borde, fondo y texto independientes
export const BorderBackgroundText: Story = {
  args: {
    children: 'Borde + Fondo + Texto',
    borderColor: 'bosque',
    color: 'lima',
    textColor: 'olivo',
    borderWidth: 2,
  },
};

export const BorderBackgroundText2: Story = {
  args: {
    children: 'Coral Border + Aqua BG',
    borderColor: 'coral',
    color: 'aqua',
    textColor: 'piedra',
    borderWidth: 3,
  },
};

export const BorderBackgroundText3: Story = {
  args: {
    children: 'Eléctrico Border + Ice BG',
    borderColor: 'electrico',
    color: 'ice',
    textColor: 'electrico',
    borderWidth: 2,
  },
};

export const BorderBackgroundText4: Story = {
  args: {
    children: 'Lavanda Border + Bosque BG',
    borderColor: 'lavanda',
    color: 'bosque',
    textColor: 'ice',
    borderWidth: 2,
  },
};

// Solo borde sin fondo (transparente)
export const OnlyBorder: Story = {
  args: {
    children: 'Solo Borde Coral',
    borderColor: 'coral',
    textColor: 'coral',
    borderWidth: 2,
  },
};

export const OnlyBorderThick: Story = {
  args: {
    children: 'Solo Borde Grueso',
    borderColor: 'electrico',
    textColor: 'electrico',
    borderWidth: 4,
  },
};

// Borde + fondo sin especificar texto (usa automático)
export const BorderAndBackground: Story = {
  args: {
    children: 'Borde + Fondo',
    borderColor: 'girasol',
    color: 'olivo',
    borderWidth: 2,
  },
};

// Con iconos
export const BorderBackgroundTextIcon: Story = {
  args: {
    children: 'Agregar Item',
    borderColor: 'bosque',
    color: 'lima',
    textColor: 'olivo',
    borderWidth: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
};

export const BorderTextIcon: Story = {
  args: {
    children: 'Enviar',
    borderColor: 'electrico',
    textColor: 'electrico',
    borderWidth: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
};

// Grid de combinaciones creativas
export const CreativeCombinations: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Button borderColor="bosque" color="lima" textColor="olivo" borderWidth={2}>
        Bosque + Lima
      </Button>
      <Button borderColor="coral" color="aqua" textColor="piedra" borderWidth={2}>
        Coral + Aqua
      </Button>
      <Button borderColor="electrico" color="ice" textColor="electrico" borderWidth={2}>
        Eléctrico + Ice
      </Button>
      <Button borderColor="lavanda" color="koala" textColor="ice" borderWidth={2}>
        Lavanda + Koala
      </Button>
      <Button borderColor="girasol" color="olivo" textColor="ice" borderWidth={3}>
        Girasol + Olivo
      </Button>
      <Button borderColor="bosque" borderWidth={3} textColor="bosque">
        Solo Borde
      </Button>
    </div>
  ),
};

// Diferentes grosores con combinaciones
export const ThicknessVariations: Story = {
  render: () => (
    <div className="flex gap-4 flex-col">
      <Button borderColor="coral" color="ice" textColor="coral" borderWidth={1}>
        Borde 1px
      </Button>
      <Button borderColor="coral" color="ice" textColor="coral" borderWidth={2}>
        Borde 2px
      </Button>
      <Button borderColor="coral" color="ice" textColor="coral" borderWidth={3}>
        Borde 3px
      </Button>
      <Button borderColor="coral" color="ice" textColor="coral" borderWidth={4}>
        Borde 4px
      </Button>
    </div>
  ),
};

