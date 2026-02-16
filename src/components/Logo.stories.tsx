import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['horizontal', 'vertical', 'icon'],
            description: 'Variante del logo',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Tamaño del logo',
        },
        color: {
            control: 'select',
            options: [
                'default',
                'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
                'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
                'marmol', 'ice', 'koala',
                'theme-background', 'theme-text', 'theme-highlight', 'theme-primary'
            ],
            description: 'Color del logo',
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'horizontal',
        size: 'md',
        color: 'default',
    },
};

// Playground interactivo
export const Playground: Story = {
    args: {
        variant: 'horizontal',
        size: 'lg',
        color: 'bosque',
    },
};

// Todas las variantes
export const AllVariants: Story = {
    args: { variant: 'horizontal' },
    render: () => (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" />
                <span className="text-sm">Horizontal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="lg" />
                <span className="text-sm">Vertical</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="lg" />
                <span className="text-sm">Only Icon</span>
            </div>
        </div>
    ),
};

// Diferentes tamaños - Horizontal
export const HorizontalSizes: Story = {
    args: { variant: 'horizontal' },
    render: () => (
        <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="xs" />
                <span className="text-xs">XS</span>
            </div>
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="sm" />
                <span className="text-xs">SM</span>
            </div>
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="md" />
                <span className="text-xs">MD</span>
            </div>
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="lg" />
                <span className="text-xs">LG</span>
            </div>
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="xl" />
                <span className="text-xs">XL</span>
            </div>
            <div className="flex items-center gap-4">
                <Logo variant="horizontal" size="2xl" />
                <span className="text-xs">2XL</span>
            </div>
        </div>
    ),
};

// Diferentes tamaños - Vertical
export const VerticalSizes: Story = {
    args: { variant: 'vertical' },
    render: () => (
        <div className="flex gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="xs" />
                <span className="text-xs">XS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="sm" />
                <span className="text-xs">SM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="md" />
                <span className="text-xs">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="lg" />
                <span className="text-xs">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="xl" />
                <span className="text-xs">XL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="vertical" size="2xl" />
                <span className="text-xs">2XL</span>
            </div>
        </div>
    ),
};

// Diferentes tamaños - Icon
export const IconSizes: Story = {
    args: { variant: 'icon' },
    render: () => (
        <div className="flex gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="xs" />
                <span className="text-xs">XS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="sm" />
                <span className="text-xs">SM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="md" />
                <span className="text-xs">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="lg" />
                <span className="text-xs">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="xl" />
                <span className="text-xs">XL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="icon" size="2xl" />
                <span className="text-xs">2XL</span>
            </div>
        </div>
    ),
};

// Diferentes colores
export const Colors: Story = {
    args: { variant: 'horizontal' },
    render: () => (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="olivo" />
                <span className="text-sm">Olivo</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="lima" />
                <span className="text-sm">Lima</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="bosque" />
                <span className="text-sm">Bosque</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="coral" />
                <span className="text-sm">Coral</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="aqua" />
                <span className="text-sm">Aqua</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="lavanda" />
                <span className="text-sm">Lavanda</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="electrico" />
                <span className="text-sm">Eléctrico</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Logo variant="horizontal" size="lg" color="girasol" />
                <span className="text-sm">Girasol</span>
            </div>
        </div>
    ),
};

// En un navbar
export const InNavbar: Story = {
    args: { variant: 'horizontal' },
    render: () => (
        <div className="w-full bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
                <Logo variant="horizontal" size="md" color="bosque" />
                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:text-bosque-600">Inicio</a>
                    <a href="#" className="hover:text-bosque-600">Productos</a>
                    <a href="#" className="hover:text-bosque-600">Contacto</a>
                </div>
            </div>
        </div>
    ),
};

// En un footer
export const InFooter: Story = {
    args: { variant: 'vertical' },
    render: () => (
        <div className="w-full bg-gray-900 text-white p-8">
            <div className="flex justify-between items-start max-w-6xl mx-auto">
                <div>
                    <Logo variant="vertical" size="lg" color="hueso" />
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold">Enlaces</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li>Sobre nosotros</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold">Legal</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li>Privacidad</li>
                        <li>Términos</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    ),
};

// Como favicon/icono
export const AsFavicon: Story = {
    args: { variant: 'icon' },
    render: () => (
        <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow">
                <Logo variant="icon" size="sm" color="bosque" />
                <span className="font-bold text-gray-800">Mi App</span>
            </div>
            <div className="w-16 h-16 bg-bosque-600 rounded-full flex items-center justify-center">
                <Logo variant="icon" size="md" color="hueso" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-bosque-500 to-lima-500 rounded-lg flex items-center justify-center">
                <Logo variant="icon" size="sm" color="ice" />
            </div>
        </div>
    ),
};

// Con fondos de colores
export const WithBackgrounds: Story = {
    args: { variant: 'horizontal' },
    render: () => (
        <div className="grid grid-cols-2 gap-6">
            <div className="bg-bosque-100 p-6 rounded-lg">
                <Logo variant="horizontal" size="lg" color="bosque" />
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
                <Logo variant="horizontal" size="lg" color="hueso" />
            </div>
            <div className="bg-gradient-to-r from-lima-400 to-bosque-600 p-6 rounded-lg">
                <Logo variant="vertical" size="xl" color="ice" />
            </div>
            <div className="bg-coral-500 p-6 rounded-lg">
                <Logo variant="icon" size="2xl" color="ice" />
            </div>
        </div>
    ),
};
