import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ['chat', 'friends', 'home', 'lang', 'location', 'mail', 'music', 'notify', 'settings', 'streak'],
            description: 'Nombre del icono',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            description: 'Tamaño del icono',
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
            description: 'Color del icono',
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'home',
        size: 'md',
        color: 'default',
    },
};

// Playground interactivo
export const Playground: Story = {
    args: {
        name: 'home',
        size: 'md',
        color: 'bosque',
    },
};

// Todos los iconos
export const AllIcons: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="lg" />
                <span className="text-sm">Home</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="chat" size="lg" />
                <span className="text-sm">Chat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="friends" size="lg" />
                <span className="text-sm">Friends</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="mail" size="lg" />
                <span className="text-sm">Mail</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="notify" size="lg" />
                <span className="text-sm">Notify</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="settings" size="lg" />
                <span className="text-sm">Settings</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="location" size="lg" />
                <span className="text-sm">Location</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="music" size="lg" />
                <span className="text-sm">Music</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="lang" size="lg" />
                <span className="text-sm">Lang</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="streak" size="lg" />
                <span className="text-sm">Streak</span>
            </div>
        </div>
    ),
};

// Diferentes tamaños
export const Sizes: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="flex items-end gap-4">
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xs" />
                <span className="text-xs">XS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="sm" />
                <span className="text-xs">SM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="md" />
                <span className="text-xs">MD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="lg" />
                <span className="text-xs">LG</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" />
                <span className="text-xs">XL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="2xl" />
                <span className="text-xs">2XL</span>
            </div>
        </div>
    ),
};

// Diferentes colores
export const Colors: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="olivo" />
                <span className="text-sm">Olivo</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="lima" />
                <span className="text-sm">Lima</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="bosque" />
                <span className="text-sm">Bosque</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="coral" />
                <span className="text-sm">Coral</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="aqua" />
                <span className="text-sm">Aqua</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="lavanda" />
                <span className="text-sm">Lavanda</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="electrico" />
                <span className="text-sm">Eléctrico</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icon name="home" size="xl" color="girasol" />
                <span className="text-sm">Girasol</span>
            </div>
        </div>
    ),
};

// Iconos con colores variados
export const MixedExample: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="grid grid-cols-3 gap-6 p-6">
            <Icon name="chat" size="xl" color="electrico" />
            <Icon name="friends" size="xl" color="coral" />
            <Icon name="mail" size="xl" color="lima" />
            <Icon name="notify" size="xl" color="girasol" />
            <Icon name="settings" size="xl" color="piedra" />
            <Icon name="home" size="xl" color="bosque" />
            <Icon name="location" size="xl" color="aqua" />
            <Icon name="music" size="xl" color="lavanda" />
            <Icon name="lang" size="xl" color="corteza" />
        </div>
    ),
};

// En una card
export const InCard: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="w-[300px] p-6 border rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
                <Icon name="home" size="xl" color="bosque" />
                <div>
                    <h3 className="font-bold text-lg">Home</h3>
                    <p className="text-sm text-gray-600">Dashboard principal</p>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <Icon name="chat" size="xl" color="electrico" />
                <div>
                    <h3 className="font-bold text-lg">Mensajes</h3>
                    <p className="text-sm text-gray-600">5 mensajes nuevos</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Icon name="settings" size="xl" color="piedra" />
                <div>
                    <h3 className="font-bold text-lg">Configuración</h3>
                    <p className="text-sm text-gray-600">Ajustes de cuenta</p>
                </div>
            </div>
        </div>
    ),
};

// Con fondo
export const WithBackground: Story = {
    args: { name: 'home' },
    render: () => (
        <div className="flex gap-4">
            <div className="w-16 h-16 bg-bosque-100 rounded-lg flex items-center justify-center">
                <Icon name="home" size="lg" color="bosque" />
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="chat" size="lg" color="electrico" />
            </div>
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                <Icon name="notify" size="lg" color="coral" />
            </div>
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon name="music" size="lg" color="lavanda" />
            </div>
        </div>
    ),
};
