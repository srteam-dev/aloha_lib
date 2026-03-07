import type { Meta, StoryObj } from '@storybook/react';
import { FullPage } from './FullPage';

const meta: Meta<typeof FullPage> = {
  title: 'Components/FullPage',
  component: FullPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FullPage>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Contenido de la página</h1>
        <p className="mt-4">Este es un contenedor de página completa.</p>
      </div>
    ),
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    children: (
      <div className="text-center">
        <h1 className="text-4xl font-bold">Contenido Centrado</h1>
        <p className="mt-4 text-gray-600">Este contenido está centrado vertical y horizontalmente.</p>
      </div>
    ),
  },
};

export const GrayBackground: Story = {
  args: {
    background: 'gray',
    centered: true,
    children: (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Tarjeta en fondo gris</h1>
        <p className="mt-2 text-gray-600">Fondo gris con contenido en tarjeta blanca.</p>
      </div>
    ),
  },
};

export const DarkBackground: Story = {
  args: {
    background: 'dark',
    centered: true,
    children: (
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Tema Oscuro</h1>
        <p className="mt-4 text-gray-300">Página con fondo oscuro.</p>
      </div>
    ),
  },
};

export const TransparentBackground: Story = {
  args: {
    background: 'transparent',
    centered: true,
    children: (
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg">
        <h1 className="text-2xl font-bold">Fondo Transparente</h1>
        <p className="mt-2 text-gray-600">Útil para overlays y modales.</p>
      </div>
    ),
  },
};
