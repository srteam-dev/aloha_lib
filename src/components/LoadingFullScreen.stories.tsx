import type { Meta, StoryObj } from '@storybook/react';
import { LoadingFullScreen } from './LoadingFullScreen';

const meta: Meta<typeof LoadingFullScreen> = {
  title: 'Components/LoadingFullScreen',
  component: LoadingFullScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingFullScreen>;

export const Default: Story = {
  args: {
    message: 'Cargando...',
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: 'Procesando tu solicitud, por favor espera...',
  },
};

export const SmallSpinner: Story = {
  args: {
    message: 'Cargando',
    spinnerSize: 'sm',
  },
};

export const MediumSpinner: Story = {
  args: {
    message: 'Cargando',
    spinnerSize: 'md',
  },
};

export const LargeSpinner: Story = {
  args: {
    message: 'Cargando datos...',
    spinnerSize: 'lg',
  },
};

export const ExtraLargeSpinner: Story = {
  args: {
    message: 'Iniciando aplicación...',
    spinnerSize: 'xl',
  },
};

export const NoMessage: Story = {
  args: {
    message: '',
  },
};

export const GrayBackground: Story = {
  args: {
    message: 'Cargando...',
    background: 'gray',
  },
};

export const DarkBackground: Story = {
  args: {
    message: 'Cargando...',
    background: 'dark',
  },
};

export const TransparentBackground: Story = {
  args: {
    message: 'Cargando...',
    background: 'transparent',
  },
};
