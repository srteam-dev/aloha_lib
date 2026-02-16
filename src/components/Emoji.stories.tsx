import type { Meta, StoryObj } from '@storybook/react';
import { Emoji, emojiMap, type EmojiName } from './Emoji';

const meta = {
    title: 'Components/Emoji',
    component: Emoji,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(emojiMap),
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
    },
} satisfies Meta<typeof Emoji>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// EMOJIS INDIVIDUALES
// ============================================

export const Crazy: Story = {
    args: {
        name: 'crazy',
        size: 'md',
    },
};

export const Explosion: Story = {
    args: {
        name: 'explosion',
        size: 'md',
    },
};

export const Happy: Story = {
    args: {
        name: 'happy',
        size: 'md',
    },
};

export const Hi: Story = {
    args: {
        name: 'hi',
        size: 'md',
    },
};

export const Impact: Story = {
    args: {
        name: 'impact',
        size: 'md',
    },
};

export const Interesting: Story = {
    args: {
        name: 'interesting',
        size: 'md',
    },
};

export const Melt: Story = {
    args: {
        name: 'melt',
        size: 'md',
    },
};

export const Mewing: Story = {
    args: {
        name: 'mewing',
        size: 'md',
    },
};

// ============================================
// TODOS LOS EMOJIS
// ============================================

export const AllEmojis: Story = {
    args: { name: 'happy' },
    render: () => {
        const emojiNames = Object.keys(emojiMap) as EmojiName[];
        return (
            <div className="flex flex-wrap gap-6 p-6 bg-hueso rounded-lg">
                {emojiNames.map((name) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm"
                    >
                        <Emoji name={name} size="xl" />
                        <span className="text-sm font-medium text-piedra capitalize">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        );
    },
};

// ============================================
// TAMAÑOS
// ============================================

export const Sizes: Story = {
    args: { name: 'happy' },
    render: () => (
        <div className="flex flex-col gap-6 p-6 bg-hueso rounded-lg">
            <div className="flex items-end gap-4">
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="xs" />
                    <span className="text-xs text-piedra">xs</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="sm" />
                    <span className="text-xs text-piedra">sm</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="md" />
                    <span className="text-xs text-piedra">md</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="lg" />
                    <span className="text-xs text-piedra">lg</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="xl" />
                    <span className="text-xs text-piedra">xl</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="2xl" />
                    <span className="text-xs text-piedra">2xl</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Emoji name="happy" size="3xl" />
                    <span className="text-xs text-piedra">3xl</span>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// USO EN CONTEXTO
// ============================================

export const InText: Story = {
    args: { name: 'happy' },
    render: () => (
        <div className="max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
                <Emoji name="hi" size="md" />
                <span className="text-lg font-medium text-piedra">
                    ¡Hola! Bienvenido
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Emoji name="happy" size="md" />
                <span className="text-lg font-medium text-piedra">
                    Todo está funcionando perfectamente
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Emoji name="explosion" size="md" />
                <span className="text-lg font-medium text-piedra">
                    ¡Increíble trabajo!
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Emoji name="interesting" size="md" />
                <span className="text-lg font-medium text-piedra">
                    Esto es muy interesante...
                </span>
            </div>
        </div>
    ),
};

// En botones
export const InButtons: Story = {
    args: { name: 'happy' },
    render: () => (
        <div className="flex flex-wrap gap-4 p-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-bosque text-white rounded-lg hover:bg-olivo transition-colors">
                <Emoji name="hi" size="sm" />
                <span>Saludar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/80 transition-colors">
                <Emoji name="explosion" size="sm" />
                <span>¡Wow!</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-electrico text-white rounded-lg hover:bg-electrico/80 transition-colors">
                <Emoji name="happy" size="sm" />
                <span>Me gusta</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-lavanda text-white rounded-lg hover:bg-lavanda/80 transition-colors">
                <Emoji name="mewing" size="sm" />
                <span>Silencio</span>
            </button>
        </div>
    ),
};

// En tarjetas
export const InCards: Story = {
    args: { name: 'happy' },
    render: () => (
        <div className="grid grid-cols-2 gap-4 p-6">
            <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-lima to-bosque text-white rounded-xl shadow-lg">
                <Emoji name="happy" size="2xl" />
                <h3 className="text-xl font-bold">¡Feliz!</h3>
                <p className="text-sm text-center opacity-90">
                    Todo va genial hoy
                </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-coral to-red-500 text-white rounded-xl shadow-lg">
                <Emoji name="explosion" size="2xl" />
                <h3 className="text-xl font-bold">¡Boom!</h3>
                <p className="text-sm text-center opacity-90">
                    Algo increíble pasó
                </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-electrico to-blue-600 text-white rounded-xl shadow-lg">
                <Emoji name="interesting" size="2xl" />
                <h3 className="text-xl font-bold">Interesante</h3>
                <p className="text-sm text-center opacity-90">
                    Esto merece atención
                </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-lavanda to-purple-500 text-white rounded-xl shadow-lg">
                <Emoji name="crazy" size="2xl" />
                <h3 className="text-xl font-bold">¡Loco!</h3>
                <p className="text-sm text-center opacity-90">
                    No lo puedo creer
                </p>
            </div>
        </div>
    ),
};

// Grid de todos con diferentes tamaños
export const EmojiGrid: Story = {
    args: { name: 'happy' },
    render: () => {
        const emojiNames = Object.keys(emojiMap) as EmojiName[];
        return (
            <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-br from-ice to-aqua rounded-xl">
                {emojiNames.map((name) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                    >
                        <Emoji name={name} size="xl" />
                        <span className="text-sm font-semibold text-piedra capitalize">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        );
    },
};
