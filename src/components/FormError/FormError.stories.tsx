import type { Meta, StoryObj } from '@storybook/react';
import { FormError } from './FormError';

const meta = {
    title: 'Components/FormError',
    component: FormError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        error: {
            control: 'text',
        },
    },
} satisfies Meta<typeof FormError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        error: 'Este campo es obligatorio.',
    },
};

export const WithoutError: Story = {
    args: {
        error: null,
    },
};
