import type { Meta, StoryObj } from '@storybook/react';
import { Pattern, patternMap, type PatternName } from './Pattern';
import { colorEntries } from '../colors';

const meta = {
    title: 'Components/Pattern',
    component: Pattern,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(patternMap),
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
        color: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        backgroundColor: {
            control: 'select',
            options: ['transparent', ...colorEntries.map(([name]) => name)],
        },
        repeat: {
            control: 'boolean',
        },
        padding: {
            control: 'number',
        },
        rounded: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        },
    },
} satisfies Meta<typeof Pattern>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PATRONES INDIVIDUALES
// ============================================

export const Face1: Story = {
    args: {
        name: 'face1',
        size: 'md',
    },
};

export const Face2: Story = {
    args: {
        name: 'face2',
        size: 'md',
    },
};

export const Face3: Story = {
    args: {
        name: 'face3',
        size: 'md',
    },
};

export const Face4: Story = {
    args: {
        name: 'face4',
        size: 'md',
    },
};

export const Face5: Story = {
    args: {
        name: 'face5',
        size: 'md',
    },
};

export const Face6: Story = {
    args: {
        name: 'face6',
        size: 'md',
    },
};

// ============================================
// GALERÍA DE PATRONES
// ============================================

export const AllPatterns: Story = {
    args: { name: 'face1' },
    render: () => {
        const patternNames = Object.keys(patternMap) as PatternName[];
        return (
            <div className="flex flex-wrap gap-6 p-6 bg-hueso rounded-lg">
                {patternNames.map((name) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm"
                    >
                        <Pattern name={name} size="xl" />
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
    args: { name: 'face1' },
    render: () => (
        <div className="flex flex-col gap-6 p-6 bg-hueso rounded-lg">
            <div className="flex items-end gap-4">
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="xs" />
                    <span className="text-xs text-piedra">xs</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="sm" />
                    <span className="text-xs text-piedra">sm</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="md" />
                    <span className="text-xs text-piedra">md</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="lg" />
                    <span className="text-xs text-piedra">lg</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="xl" />
                    <span className="text-xs text-piedra">xl</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="2xl" />
                    <span className="text-xs text-piedra">2xl</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Pattern name="face1" size="3xl" />
                    <span className="text-xs text-piedra">3xl</span>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// PATRONES CON COLORES (como la imagen 2)
// ============================================

export const WithColors: Story = {
    args: { name: 'face1' },
    render: () => {
        const patternNames = Object.keys(patternMap) as PatternName[];
        const colors: Array<'bosque' | 'lima' | 'coral' | 'aqua' | 'lavanda' | 'electrico'> = [
            'bosque',
            'lima',
            'coral',
            'aqua',
            'lavanda',
            'electrico',
        ];

        return (
            <div className="flex flex-wrap gap-4 p-6 bg-white rounded-lg">
                {patternNames.map((name, index) => (
                    <Pattern
                        key={name}
                        name={name}
                        size="xl"
                        color={colors[index % colors.length]}
                    />
                ))}
            </div>
        );
    },
};

// ============================================
// FONDOS REPETITIVOS (como la imagen 1)
// ============================================

// Fondo con face1 repetido
export const RepeatingBackground_Face1: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="w-[600px] h-[300px] rounded-lg overflow-hidden border-2 border-piedra">
            <Pattern name="face1" repeat width={80} height={80} backgroundColor="ice" />
        </div>
    ),
};

// Fondo con face2 repetido
export const RepeatingBackground_Face2: Story = {
    args: { name: 'face2' },
    render: () => (
        <div className="w-[600px] h-[300px] rounded-lg overflow-hidden border-2 border-piedra">
            <Pattern name="face2" repeat width={80} height={80} backgroundColor="hueso" />
        </div>
    ),
};

// Fondo con face3 repetido
export const RepeatingBackground_Face3: Story = {
    args: { name: 'face3' },
    render: () => (
        <div className="w-[600px] h-[300px] rounded-lg overflow-hidden border-2 border-piedra">
            <Pattern name="face3" repeat width={80} height={80} backgroundColor="lima" />
        </div>
    ),
};

// Grid mostrando todos los fondos
export const AllRepeatingBackgrounds: Story = {
    args: { name: 'face1' },
    render: () => {
        const patternNames = Object.keys(patternMap) as PatternName[];
        const backgrounds: Array<'ice' | 'hueso' | 'lima' | 'aqua' | 'lavanda' | 'koala'> = [
            'ice',
            'hueso',
            'lima',
            'aqua',
            'lavanda',
            'koala',
        ];

        return (
            <div className="grid grid-cols-2 gap-4 p-6 bg-piedra rounded-lg">
                {patternNames.map((name, index) => (
                    <div
                        key={name}
                        className="h-[200px] rounded-lg overflow-hidden border-2 border-white shadow-lg"
                    >
                        <Pattern
                            name={name}
                            repeat
                            width={80}
                            height={80}
                            backgroundColor={backgrounds[index % backgrounds.length]}
                        />
                    </div>
                ))}
            </div>
        );
    },
};

// ============================================
// TARJETAS CON PATRONES DE FONDO
// ============================================

export const PatternCards: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="grid grid-cols-3 gap-4 p-6">
            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                <Pattern name="face1" repeat width={60} height={60} backgroundColor="lima" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-bosque">¡Feliz!</h3>
                    </div>
                </div>
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                <Pattern name="face3" repeat width={60} height={60} backgroundColor="coral" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-coral">¡Emocionado!</h3>
                    </div>
                </div>
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                <Pattern name="face5" repeat width={60} height={60} backgroundColor="aqua" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-electrico">¡Genial!</h3>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// SECCIÓN DE HERO CON PATRÓN
// ============================================

export const HeroSection: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="relative w-[800px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Pattern name="face2" repeat width={100} height={100} backgroundColor="lima" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="bg-white/95 backdrop-blur-sm px-12 py-8 rounded-2xl shadow-2xl">
                    <h1 className="text-5xl font-bold text-bosque mb-4">Bienvenido a Aloha</h1>
                    <p className="text-xl text-piedra mb-6">
                        Componentes hermosos con patrones únicos
                    </p>
                    <button className="px-8 py-3 bg-bosque text-white rounded-lg hover:bg-olivo transition-colors text-lg font-semibold">
                        Comenzar
                    </button>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// PATRONES COMO DECORACIÓN
// ============================================

export const AsDecoration: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="flex flex-col gap-6 p-8 bg-gradient-to-br from-ice to-aqua rounded-xl">
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
                <Pattern name="face1" size="lg" color="bosque" />
                <div>
                    <h3 className="text-xl font-bold text-piedra">Notificación 1</h3>
                    <p className="text-piedra">Todo está funcionando perfectamente</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
                <Pattern name="face3" size="lg" color="coral" />
                <div>
                    <h3 className="text-xl font-bold text-piedra">Notificación 2</h3>
                    <p className="text-piedra">¡Tienes un nuevo mensaje!</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
                <Pattern name="face5" size="lg" color="electrico" />
                <div>
                    <h3 className="text-xl font-bold text-piedra">Notificación 3</h3>
                    <p className="text-piedra">Proyecto completado con éxito</p>
                </div>
            </div>
        </div>
    ),
};

// Pequeños patrones (como los de la imagen 1)
export const SmallRepeatingPattern: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="w-[800px] h-[200px] rounded-lg overflow-hidden border-2 border-piedra">
            <Pattern name="face1" repeat width={60} height={60} backgroundColor="transparent" />
        </div>
    ),
};

// ============================================
// CON PADDING Y ROUNDED
// ============================================

export const WithPadding: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="flex gap-6 p-6 bg-hueso rounded-lg">
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face1" size="lg" backgroundColor="lima" padding={0} rounded="lg" />
                <span className="text-xs text-piedra">Sin padding</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face1" size="lg" backgroundColor="lima" padding={8} rounded="lg" />
                <span className="text-xs text-piedra">Padding 8px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face1" size="lg" backgroundColor="lima" padding={16} rounded="lg" />
                <span className="text-xs text-piedra">Padding 16px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face1" size="lg" backgroundColor="lima" padding={24} rounded="lg" />
                <span className="text-xs text-piedra">Padding 24px</span>
            </div>
        </div>
    ),
};

export const WithRounded: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="flex gap-6 p-6 bg-hueso rounded-lg">
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="none" />
                <span className="text-xs text-piedra">None</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="sm" />
                <span className="text-xs text-piedra">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="md" />
                <span className="text-xs text-piedra">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="lg" />
                <span className="text-xs text-piedra">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="xl" />
                <span className="text-xs text-piedra">XL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Pattern name="face2" size="lg" backgroundColor="coral" padding={12} rounded="full" />
                <span className="text-xs text-piedra">Full</span>
            </div>
        </div>
    ),
};

export const PaddingAndRoundedCombinations: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="grid grid-cols-3 gap-6 p-6">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md">
                <Pattern name="face1" size="xl" color="bosque" backgroundColor="lima" padding={16} rounded="xl" />
                <span className="text-sm text-piedra font-medium">Lima + Verde</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md">
                <Pattern name="face3" size="xl" color="coral" backgroundColor="ice" padding={16} rounded="full" />
                <span className="text-sm text-piedra font-medium">Ice + Coral</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md">
                <Pattern name="face5" size="xl" color="electrico" backgroundColor="lavanda" padding={16} rounded="lg" />
                <span className="text-sm text-piedra font-medium">Lavanda + Azul</span>
            </div>
        </div>
    ),
};

// Patrón como avatar o badge
export const AsAvatarOrBadge: Story = {
    args: { name: 'face1' },
    render: () => (
        <div className="flex gap-8 p-6 items-center">
            {/* Avatar grande */}
            <div className="flex items-center gap-4">
                <Pattern
                    name="face1"
                    size="2xl"
                    color="bosque"
                    backgroundColor="lima"
                    padding={20}
                    rounded="full"
                    className="shadow-lg"
                />
                <div>
                    <h3 className="text-xl font-bold text-piedra">Usuario Feliz</h3>
                    <p className="text-piedra">usuario@aloha.com</p>
                </div>
            </div>

            {/* Badges pequeños */}
            <div className="flex gap-3">
                <Pattern name="face2" size="md" color="coral" backgroundColor="hueso" padding={8} rounded="full" className="shadow-md" />
                <Pattern name="face3" size="md" color="aqua" backgroundColor="ice" padding={8} rounded="full" className="shadow-md" />
                <Pattern name="face4" size="md" color="lavanda" backgroundColor="ice" padding={8} rounded="full" className="shadow-md" />
            </div>
        </div>
    ),
};
