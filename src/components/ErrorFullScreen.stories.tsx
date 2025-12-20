import type { Meta, StoryObj } from '@storybook/react';
import { ErrorFullScreen } from './ErrorFullScreen';

const meta: Meta<typeof ErrorFullScreen> = {
  title: 'Components/ErrorFullScreen',
  component: ErrorFullScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorFullScreen>;

export const Default: Story = {
  args: {
    title: 'Error',
    message: 'Algo salió mal. Por favor, intenta de nuevo.',
    onRetry: () => alert('Reintentando...'),
  },
};

export const CustomMessage: Story = {
  args: {
    title: 'Error de Conexión',
    message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet e intenta nuevamente.',
    onRetry: () => alert('Reintentando conexión...'),
    retryText: 'Reconectar',
  },
};

export const NoRetryButton: Story = {
  args: {
    title: 'Error Fatal',
    message: 'Ha ocurrido un error crítico. Por favor, contacta con soporte.',
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Error',
    message: 'Operación fallida.',
    showIcon: false,
    onRetry: () => alert('Reintentando...'),
  },
};

export const GrayBackground: Story = {
  args: {
    title: 'Error',
    message: 'Algo salió mal.',
    background: 'gray',
    onRetry: () => alert('Reintentando...'),
  },
};

export const DarkBackground: Story = {
  args: {
    title: 'Error',
    message: 'No se pudo completar la operación.',
    background: 'dark',
    onRetry: () => alert('Reintentando...'),
  },
};

export const NotFound404: Story = {
  args: {
    title: '404 - Página no encontrada',
    message: 'La página que buscas no existe o ha sido movida.',
    onRetry: () => window.history.back(),
    retryText: 'Volver atrás',
  },
};

export const Unauthorized: Story = {
  args: {
    title: 'Acceso Denegado',
    message: 'No tienes permisos para acceder a este recurso.',
    onRetry: () => alert('Ir a inicio de sesión'),
    retryText: 'Iniciar Sesión',
  },
};
