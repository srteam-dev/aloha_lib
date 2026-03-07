import type { Meta, StoryObj } from '@storybook/react';
import { Streak } from './Streak';

const meta = {
    title: 'Components/Streak',
    component: Streak,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: { type: 'number', min: 0 },
            description: 'Número de días de racha',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Tamaño del componente',
        },
        color: {
            control: 'select',
            options: [
                'default',
                'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
                'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
                'marmol', 'ice', 'koala',
                'theme-background', 'theme-text', 'theme-highlight', 'theme-primary',
            ],
            description: 'Color del icono y del número',
        },
    },
} satisfies Meta<typeof Streak>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
    args: {
        count: 7,
        size: 'md',
        color: 'girasol',
    },
};

// Playground interactivo
export const Playground: Story = {
    args: {
        count: 42,
        size: 'lg',
        color: 'coral',
    },
};

// Diferentes tamaños
export const Sizes: Story = {
    args: { count: 7 },
    render: () => (
        <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="xs" />
                <span className="text-xs">XS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="sm" />
                <span className="text-xs">SM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="md" />
                <span className="text-xs">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="lg" />
                <span className="text-xs">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="xl" />
                <span className="text-xs">XL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={7} size="2xl" />
                <span className="text-xs">2XL</span>
            </div>
        </div>
    ),
};

// Diferentes colores
export const Colors: Story = {
    args: { count: 15 },
    render: () => (
        <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="girasol" />
                <span className="text-sm">Girasol</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="coral" />
                <span className="text-sm">Coral</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="lima" />
                <span className="text-sm">Lima</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="electrico" />
                <span className="text-sm">Eléctrico</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="aqua" />
                <span className="text-sm">Aqua</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="lavanda" />
                <span className="text-sm">Lavanda</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="bosque" />
                <span className="text-sm">Bosque</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Streak count={15} size="xl" color="olivo" />
                <span className="text-sm">Olivo</span>
            </div>
        </div>
    ),
};

// Números grandes
export const LargeNumbers: Story = {
    args: { count: 365 },
    render: () => (
        <div className="flex items-center gap-8">
            <Streak count={1} size="lg" color="girasol" />
            <Streak count={7} size="lg" color="girasol" />
            <Streak count={30} size="lg" color="coral" />
            <Streak count={100} size="lg" color="coral" />
            <Streak count={365} size="lg" color="lima" />
        </div>
    ),
};

// En contexto (dentro de una card)
export const InContext: Story = {
    args: { count: 21 },
    render: () => (
        <div className="w-[280px] p-6 border rounded-xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">Tu racha</span>
                <Streak count={21} size="lg" color="girasol" />
            </div>
            <p className="text-sm text-gray-500">
                ¡Llevas 21 días seguidos practicando! Sigue así.
            </p>
            <div className="flex items-center gap-4 pt-2 border-t">
                <div className="flex flex-col items-center">
                    <Streak count={7} size="sm" color="coral" />
                    <span className="text-xs text-gray-400 mt-1">Semana</span>
                </div>
                <div className="flex flex-col items-center">
                    <Streak count={21} size="sm" color="girasol" />
                    <span className="text-xs text-gray-400 mt-1">Mes</span>
                </div>
                <div className="flex flex-col items-center">
                    <Streak count={150} size="sm" color="lima" />
                    <span className="text-xs text-gray-400 mt-1">Total</span>
                </div>
            </div>
        </div>
    ),
};
