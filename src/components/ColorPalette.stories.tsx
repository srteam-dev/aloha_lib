import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette, ColorSwatch } from './ColorPalette';
import { colorEntries, themeVars } from '../colors';

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/ColorPalette',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  args: {},
};

export const WithoutHexValues: Story = {
  args: {
    showHex: false,
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    columns: 6,
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    columns: 4,
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
  },
};

export const SixColumns: Story = {
  args: {
    columns: 6,
    size: 'sm',
  },
};

// Individual color swatches
export const IndividualColors: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6">
      {colorEntries.map(([name, value]) => (
        <ColorSwatch key={name} name={name} value={value} size="md" />
      ))}
    </div>
  ),
};

// Color grid with labels
export const ColorGrid: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Paleta de Colores Aloha</h2>
        <p className="text-gray-600 mb-6">
          Esta es la paleta de colores oficial de Aloha UI. Puedes usar estos
          colores importándolos desde el paquete.
        </p>
      </div>
      <ColorPalette />
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Cómo usar:</h3>
        <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
          {`import { colors, cssVars, themeVars } from '@srteam-dev/aloha-ui';

// Opción 1: Usar valores hexadecimales directos
<div style={{ backgroundColor: colors.olivo }}>
  Contenido
</div>

// Opción 2: Usar variables CSS (recomendado)
<div style={{ backgroundColor: cssVars.olivo }}>
  Contenido
</div>

// Opción 3: Usar variables de tema (se adaptan a modo claro/oscuro)
<div style={{ 
  backgroundColor: themeVars.background,
  color: themeVars.text 
}}>
  Contenido que se adapta al tema
</div>

// Opción 4: Directamente en CSS
.mi-clase {
  background-color: var(--colors-olivo);
  color: var(--theme-text); /* Se adapta al tema */
}

// Opción 5: En Tailwind con arbitrary values
<div className="bg-[#383517]">
  Contenido
</div>

// Acceder a todos los colores
import { colorEntries } from '@srteam-dev/aloha-ui';`}
        </pre>
      </div>
    </div>
  ),
};

// Color showcase with examples
export const ColorShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Paleta de Colores</h2>
      {colorEntries.map(([name, value]) => (
        <div
          key={name}
          className="flex items-center gap-4 p-4 rounded-lg border border-gray-200"
        >
          <div
            className="w-20 h-20 rounded-lg shadow-md flex-shrink-0"
            style={{ backgroundColor: value }}
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold capitalize">{name}</h3>
            <p className="text-gray-600 font-mono">{value}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded"
              style={{ backgroundColor: value, color: '#fff' }}
            >
              Botón
            </button>
            <div
              className="px-4 py-2 rounded border-2"
              style={{ borderColor: value, color: value }}
            >
              Borde
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// Theme variables demonstration
export const ThemeVariables: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Variables de Tema</h2>
        <p className="text-gray-600 mb-6">
          Estas variables se adaptan automáticamente al modo claro u oscuro.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Light mode preview */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Modo Claro</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#F5F5DC' }} />
              <div>
                <p className="font-semibold">background</p>
                <p className="text-sm text-gray-500">hueso (#F5F5DC)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#383517' }} />
              <div>
                <p className="font-semibold">text</p>
                <p className="text-sm text-gray-500">olivo (#383517)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#6B5B3E' }} />
              <div>
                <p className="font-semibold">highlight</p>
                <p className="text-sm text-gray-500">corteza (#6B5B3E)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#B4DE6E' }} />
              <div>
                <p className="font-semibold">primary</p>
                <p className="text-sm text-gray-500">lima (#B4DE6E)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dark mode preview */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Modo Oscuro</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#4A443F' }} />
              <div>
                <p className="font-semibold">background</p>
                <p className="text-sm text-gray-500">piedra (#4A443F)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#F5F5DC' }} />
              <div>
                <p className="font-semibold">text</p>
                <p className="text-sm text-gray-500">hueso (#F5F5DC)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#6B5B3E' }} />
              <div>
                <p className="font-semibold">highlight</p>
                <p className="text-sm text-gray-500">corteza (#6B5B3E)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: '#648C2C' }} />
              <div>
                <p className="font-semibold">primary</p>
                <p className="text-sm text-gray-500">bosque (#648C2C)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live demo */}
      <div>
        <h3 className="text-xl font-bold mb-4">Ejemplo en Vivo</h3>
        <div 
          className="p-8 rounded-lg"
          style={{ 
            backgroundColor: themeVars.background,
            color: themeVars.text 
          }}
        >
          <h4 className="text-2xl font-bold mb-4">Título con color de tema</h4>
          <p className="mb-4">
            Este contenedor usa las variables de tema y se adaptará automáticamente
            cuando cambies entre modo claro y oscuro.
          </p>
          <button
            className="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ 
              backgroundColor: themeVars.primary,
              color: themeVars.text 
            }}
          >
            Botón con color primario
          </button>
          <div 
            className="mt-4 p-4 rounded"
            style={{ 
              backgroundColor: themeVars.highlight,
              color: '#fff'
            }}
          >
            Elemento destacado con color highlight
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Nota:</strong> Para ver los cambios de tema, necesitas implementar
          el cambio de clase "dark" en el elemento raíz de tu aplicación.
        </p>
      </div>
    </div>
  ),
};
