import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, P, Subtitle, Lead, Small, Muted, FontFamily, ColorOption } from './Typography';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    font: {
      control: 'select',
      options: ['nunito', 'jetbrains', 'default'],
      description: 'Familia de fuente',
      table: {
        defaultValue: { summary: 'nunito' },
      },
    },
    weight: {
      control: 'select',
      options: ['light', 'medium', 'bold', 'black'],
      description: 'Peso de la fuente',
    },
    color: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'theme-background', 'theme-text', 'theme-highlight', 'theme-primary'
      ],
      description: 'Color del texto',
    },
  },
} satisfies Meta;

export default meta;

// Playground interactivo principal
export const Playground: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption; text: string }> = {
  args: {
    font: 'nunito',
    weight: 'medium',
    color: 'default',
    text: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto a mostrar',
    },
  },
  render: ({ font, weight, color, text }) => (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-gray-500 mb-2">H1</p>
        <H1 font={font} weight={weight} color={color}>{text}</H1>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">H2</p>
        <H2 font={font} weight={weight} color={color}>{text}</H2>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">H3</p>
        <H3 font={font} weight={weight} color={color}>{text}</H3>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">H4</p>
        <H4 font={font} weight={weight} color={color}>{text}</H4>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">Paragraph</p>
        <P font={font} weight={weight} color={color}>{text}</P>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-2">Small</p>
        <Small font={font} weight={weight} color={color}>{text}</Small>
      </div>
    </div>
  ),
};

// Comparación de fuentes
export const FontComparison: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold mb-6 border-b pb-2">Nunito Sans (Por defecto)</h3>
        <div className="space-y-4">
          <H1>Heading 1 - Nunito Sans</H1>
          <H2>Heading 2 - Nunito Sans</H2>
          <H3>Heading 3 - Nunito Sans</H3>
          <P>Paragraph with Nunito Sans. The quick brown fox jumps over the lazy dog. 0123456789</P>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6 border-b pb-2">JetBrains Mono</h3>
        <div className="space-y-4">
          <H1 font="jetbrains">Heading 1 - JetBrains Mono</H1>
          <H2 font="jetbrains">Heading 2 - JetBrains Mono</H2>
          <H3 font="jetbrains">Heading 3 - JetBrains Mono</H3>
          <P font="jetbrains">Paragraph with JetBrains Mono. The quick brown fox jumps over the lazy dog. 0123456789</P>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6 border-b pb-2">Sistema (default)</h3>
        <div className="space-y-4">
          <H1 font="default">Heading 1 - System Font</H1>
          <H2 font="default">Heading 2 - System Font</H2>
          <H3 font="default">Heading 3 - System Font</H3>
          <P font="default">Paragraph with system font. The quick brown fox jumps over the lazy dog. 0123456789</P>
        </div>
      </div>
    </div>
  ),
};

// Pesos de fuente
export const FontWeights: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold mb-6 border-b pb-2">Nunito Sans - Pesos disponibles</h3>
        <div className="space-y-3">
          <P weight="light">Light (300) - The quick brown fox jumps over the lazy dog</P>
          <P weight="medium">Medium (500) - The quick brown fox jumps over the lazy dog</P>
          <P weight="bold">Bold (700) - The quick brown fox jumps over the lazy dog</P>
          <P weight="black">Black (900) - The quick brown fox jumps over the lazy dog</P>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6 border-b pb-2">JetBrains Mono - Pesos disponibles</h3>
        <div className="space-y-3">
          <P font="jetbrains" weight="light">Light (300) - The quick brown fox jumps over the lazy dog</P>
          <P font="jetbrains" weight="medium">Medium (500) - The quick brown fox jumps over the lazy dog</P>
          <P font="jetbrains" weight="bold">Bold (700) - The quick brown fox jumps over the lazy dog</P>
        </div>
      </div>
    </div>
  ),
};

// Paleta de colores
export const ColorPalette: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Colores de la paleta Aloha</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <H3 color="olivo">Olivo</H3>
            <P color="olivo">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="lima">Lima</H3>
            <P color="lima">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="bosque">Bosque</H3>
            <P color="bosque">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="hueso">Hueso</H3>
            <P color="hueso">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="piedra">Piedra</H3>
            <P color="piedra">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="corteza">Corteza</H3>
            <P color="corteza">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="girasol">Girasol</H3>
            <P color="girasol">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="coral">Coral</H3>
            <P color="coral">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="aqua">Aqua</H3>
            <P color="aqua">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="lavanda">Lavanda</H3>
            <P color="lavanda">The quick brown fox jumps over the lazy dog</P>
          </div>
          <div className="p-4 border rounded">
            <H3 color="electrico">Eléctrico</H3>
            <P color="electrico">The quick brown fox jumps over the lazy dog</P>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Colores del tema (adaptan a light/dark)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <H4 color="theme-primary">Theme Primary</H4>
            <P color="theme-primary">Cambia según el tema</P>
          </div>
          <div className="p-4 border rounded">
            <H4 color="theme-text">Theme Text</H4>
            <P color="theme-text">Cambia según el tema</P>
          </div>
          <div className="p-4 border rounded">
            <H4 color="theme-highlight">Theme Highlight</H4>
            <P color="theme-highlight">Cambia según el tema</P>
          </div>
          <div className="p-4 border rounded">
            <H4 color="theme-background">Theme Background</H4>
            <P color="theme-background">Cambia según el tema</P>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Ejemplo combinado de fuente y color
export const FontAndColorCombinations: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Nunito Sans + Colores</h3>
        <div className="space-y-3">
          <H2 font="nunito" color="bosque">Título Principal en Bosque</H2>
          <P font="nunito" color="olivo">Párrafo en Olivo con Nunito Sans</P>
          <P font="nunito" color="coral" weight="bold">Texto destacado en Coral</P>
          <Small font="nunito" color="lavanda">Texto pequeño en Lavanda</Small>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 border-b pb-2">JetBrains Mono + Colores</h3>
        <div className="space-y-3">
          <H2 font="jetbrains" color="electrico">Título Técnico en Eléctrico</H2>
          <P font="jetbrains" color="piedra">Código o texto técnico en Piedra</P>
          <P font="jetbrains" color="girasol" weight="bold">Alerta en Girasol</P>
          <Small font="jetbrains" color="aqua">Nota técnica en Aqua</Small>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Combinación Premium</h3>
        <H1 font="nunito" weight="black" color="bosque">
          Aloha Design System
        </H1>
        <Subtitle font="nunito" weight="light" color="corteza">
          Componentes hermosos y funcionales
        </Subtitle>
        <Lead font="nunito" color="olivo">
          Un sistema de diseño completo con tipografías elegantes y una paleta de colores cuidadosamente seleccionada.
        </Lead>
        <P font="nunito" color="theme-text">
          Utiliza Nunito Sans como fuente principal para textos legibles y amigables,
          y JetBrains Mono para código y contenido técnico.
        </P>
      </div>
    </div>
  ),
};

// Vista completa de todos los componentes
export const AllComponents: StoryObj = {
  render: () => (
    <div className="max-w-3xl space-y-6">
      <H1>Heading 1 - Welcome to Aloha</H1>
      <Subtitle>Build amazing applications with our component library</Subtitle>

      <Lead>
        Our library provides a comprehensive set of components designed to help you
        create beautiful and functional user interfaces quickly and efficiently.
      </Lead>

      <H2>Getting Started</H2>
      <P>
        To begin using our components, simply install the package and import what you need.
        Each component is fully typed and comes with extensive documentation.
      </P>

      <H3>Installation</H3>
      <P>Run the following command in your terminal:</P>
      <Small font="jetbrains">npm install @srteam-dev/aloha-ui</Small>

      <H4>Important Notes</H4>
      <Muted>
        Make sure you have React 18 or higher installed in your project before using this library.
      </Muted>
    </div>
  ),
};

// Story específica para cada componente individual
export const H1Example: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption }> = {
  args: {
    font: 'nunito',
    color: 'default',
  },
  render: (args) => <H1 {...args}>This is a Heading 1</H1>,
};

export const H2Example: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption }> = {
  args: {
    font: 'nunito',
    color: 'default',
  },
  render: (args) => <H2 {...args}>This is a Heading 2</H2>,
};

export const H3Example: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption }> = {
  args: {
    font: 'nunito',
    color: 'default',
  },
  render: (args) => <H3 {...args}>This is a Heading 3</H3>,
};

export const H4Example: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption }> = {
  args: {
    font: 'nunito',
    color: 'default',
  },
  render: (args) => <H4 {...args}>This is a Heading 4</H4>,
};

export const ParagraphExample: StoryObj<{ font: FontFamily; weight?: 'light' | 'medium' | 'bold' | 'black'; color?: ColorOption }> = {
  args: {
    font: 'nunito',
    color: 'default',
  },
  render: (args) => (
    <P {...args}>
      This is a paragraph. The quick brown fox jumps over the lazy dog.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </P>
  ),
};
