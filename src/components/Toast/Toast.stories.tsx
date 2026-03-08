import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['error', 'success', 'info'],
        },
        position: {
            control: 'select',
            options: [
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
            ],
        },
    },
    args: {
        onClose: () => console.log('Close clicked'),
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
    args: {
        message: 'Hubo un error al procesar tu solicitud.',
        type: 'error',
        position: 'bottom-center',
        duration: 3000,
    },
};

export const Success: Story = {
    args: {
        message: 'La cuenta ha sido creada exitosamente.',
        type: 'success',
        position: 'bottom-center',
        duration: 3000,
    },
};

export const Info: Story = {
    args: {
        message: 'Tienes nuevos mensajes en tu bandeja de entrada.',
        type: 'info',
        position: 'bottom-center',
        duration: 3000,
    },
};

export const Persistent: Story = {
    args: {
        message: 'Esta notificación no desaparecerá hasta que la cierres.',
        type: 'error',
        position: 'top-right',
        duration: 0,
    },
};
