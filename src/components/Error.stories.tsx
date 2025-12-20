import type { Meta, StoryObj } from '@storybook/react';
import { Error } from './Error';

const meta: Meta<typeof Error> = {
  title: 'Components/Error',
  component: Error,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    title: 'Error',
    message: 'Algo salió mal.',
    onRetry: () => alert('Reintentando...'),
  },
};

export const InlineVariant: Story = {
  args: {
    title: 'Error al cargar',
    message: 'No se pudieron cargar los datos.',
    variant: 'inline',
    onRetry: () => alert('Reintentando...'),
  },
};

export const CardVariant: Story = {
  args: {
    title: 'Error de Conexión',
    message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
    variant: 'card',
    onRetry: () => alert('Reintentando conexión...'),
    retryText: 'Reintentar',
  },
};

export const WithoutRetry: Story = {
  args: {
    title: 'Error',
    message: 'Operación no permitida.',
    variant: 'card',
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Error',
    message: 'Algo salió mal.',
    showIcon: false,
    onRetry: () => alert('Reintentando...'),
  },
};

export const CustomRetryText: Story = {
  args: {
    title: 'Error de Carga',
    message: 'No se pudo cargar el contenido.',
    onRetry: () => alert('Recargando...'),
    retryText: 'Recargar',
    variant: 'card',
  },
};

export const InContainer: Story = {
  args: {
    title: 'Sin Resultados',
    message: 'No se encontraron datos que coincidan con tu búsqueda.',
    onRetry: () => alert('Limpiando búsqueda...'),
    retryText: 'Limpiar Búsqueda',
    variant: 'card',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};
