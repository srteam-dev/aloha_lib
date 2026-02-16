import type { Meta, StoryObj } from '@storybook/react';
import { PatternFill } from './PatternFill';
import { colorEntries } from '../colors';

const meta = {
    title: 'Components/PatternFill',
    component: PatternFill,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'number',
        },
        height: {
            control: 'number',
        },
        patternSize: {
            control: 'number',
        },
        gap: {
            control: 'number',
        },
        patterns: {
            control: 'multi-select',
            options: ['face1', 'face2', 'face3', 'face4', 'face5', 'face6'],
        },
        colors: {
            control: 'multi-select',
            options: colorEntries.map(([name]) => name),
        },
        backgroundColor: {
            control: 'select',
            options: ['transparent', ...colorEntries.map(([name]) => name)],
        },
        rounded: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
        },
        randomRotation: {
            control: 'boolean',
        },
        randomScale: {
            control: 'boolean',
        },
        randomOpacity: {
            control: 'boolean',
        },
        padding: {
            control: 'number',
        },
    },
} satisfies Meta<typeof PatternFill>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PLAYGROUND - EXPERIMENTA CON LOS CONTROLES
// ============================================

export const Playground: Story = {
    args: {
        width: 800,
        height: 400,
        patternSize: 80,
        gap: 10,
        backgroundColor: 'ice',
        padding: 16,
        rounded: 'xl',
        randomRotation: false,
        randomScale: false,
        randomOpacity: false,
    },
    render: (args) => (
        <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-piedra mb-2">Experimenta con los controles ➡️</h3>
                <p className="text-sm text-piedra">
                    Ajusta los parámetros en el panel de controles de la derecha para ver los cambios en tiempo real.
                </p>
            </div>
            <PatternFill {...args} />
        </div>
    ),
};

// ============================================
// GALERÍA COMPARATIVA
// ============================================

export const ComparativeGallery: Story = {
    args: {},
    render: () => (
        <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-piedra mb-2">Galería Comparativa</h3>
                <p className="text-sm text-piedra">
                    Compara diferentes configuraciones para encontrar tu estilo favorito
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Ejemplo 1: Ordenado */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Ordenado y Simple</h4>
                        <p className="text-xs text-piedra">Sin aleatoriedad, grid perfecto</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={300}
                        patternSize={70}
                        gap={8}
                        backgroundColor="ice"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Ejemplo 2: Con rotaciones */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Con Rotaciones</h4>
                        <p className="text-xs text-piedra">Rotación aleatoria, más dinámico</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={300}
                        patternSize={70}
                        gap={12}
                        randomRotation
                        backgroundColor="lima"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Ejemplo 3: Con escalas */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Con Escalas</h4>
                        <p className="text-xs text-piedra">Tamaños variados, más orgánico</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={300}
                        patternSize={70}
                        gap={16}
                        randomScale
                        backgroundColor="coral"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Ejemplo 4: Todo combinado */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Todo Combinado</h4>
                        <p className="text-xs text-piedra">Rotación + escala + opacidad</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={300}
                        patternSize={70}
                        gap={14}
                        randomRotation
                        randomScale
                        randomOpacity
                        backgroundColor="lavanda"
                        padding={12}
                        rounded="lg"
                    />
                </div>
            </div>
        </div>
    ),
};

// ============================================
// BÁSICO
// ============================================

export const Basic: Story = {
    args: {
        width: 600,
        height: 400,
        patternSize: 80,
        gap: 8,
    },
};

// ============================================
// COMO LA IMAGEN 2 - GRID COLORIDO
// ============================================

export const ColorfulGrid: Story = {
    args: {
        width: 800,
        height: 400,
        patternSize: 100,
        gap: 10,
        backgroundColor: 'transparent',
        padding: 0,
    },
};

// Tamaño pequeño (como la segunda imagen del usuario)
export const SmallPatternGrid: Story = {
    args: {
        width: 800,
        height: 400,
        patternSize: 80,
        gap: 8,
        backgroundColor: 'ice',
        padding: 16,
        rounded: 'lg',
    },
};

// ============================================
// CON ROTACIONES ALEATORIAS
// ============================================

export const WithRandomRotation: Story = {
    args: {
        width: 700,
        height: 400,
        patternSize: 90,
        gap: 12,
        randomRotation: true,
        backgroundColor: 'hueso',
        padding: 20,
        rounded: 'xl',
    },
};

// ============================================
// CON ESCALAS ALEATORIAS
// ============================================

export const WithRandomScale: Story = {
    args: {
        width: 700,
        height: 400,
        patternSize: 90,
        gap: 16,
        randomScale: true,
        backgroundColor: 'ice',
        padding: 20,
        rounded: 'xl',
    },
};

// ============================================
// CON OPACIDAD ALEATORIA
// ============================================

export const WithRandomOpacity: Story = {
    args: {
        width: 700,
        height: 400,
        patternSize: 90,
        gap: 12,
        randomOpacity: true,
        backgroundColor: 'lima',
        padding: 20,
        rounded: 'xl',
    },
};

// ============================================
// TODO ALEATORIO (CAÓTICO)
// ============================================

export const FullyRandom: Story = {
    args: {
        width: 800,
        height: 500,
        patternSize: 80,
        gap: 10,
        randomRotation: true,
        randomScale: true,
        randomOpacity: true,
        backgroundColor: 'hueso',
        padding: 24,
        rounded: '2xl',
    },
};

// ============================================
// PATRONES ESPECÍFICOS
// ============================================

export const OnlyHappyFaces: Story = {
    args: {
        patterns: ['face1', 'face2', 'face3'],
    },
    render: (args) => (
        <PatternFill
            {...args}
            width={600}
            height={400}
            patternSize={90}
            gap={12}
            backgroundColor="ice"
            padding={16}
            rounded="lg"
        />
    ),
};

export const OnlyCoolFaces: Story = {
    args: {
        patterns: ['face4', 'face5', 'face6'],
    },
    render: (args) => (
        <PatternFill
            {...args}
            width={600}
            height={400}
            patternSize={90}
            gap={12}
            backgroundColor="lavanda"
            padding={16}
            rounded="lg"
        />
    ),
};

// ============================================
// COLORES ESPECÍFICOS
// ============================================

export const GreenTheme: Story = {
    args: {
        colors: ['bosque', 'lima', 'olivo'],
    },
    render: (args) => (
        <PatternFill
            {...args}
            width={700}
            height={400}
            patternSize={85}
            gap={10}
            backgroundColor="hueso"
            padding={20}
            rounded="xl"
        />
    ),
};

export const BlueTheme: Story = {
    args: {
        colors: ['aqua', 'electrico', 'ice'],
    },
    render: (args) => (
        <PatternFill
            {...args}
            width={700}
            height={400}
            patternSize={85}
            gap={10}
            backgroundColor="hueso"
            padding={20}
            rounded="xl"
        />
    ),
};

export const WarmTheme: Story = {
    args: {
        colors: ['coral', 'lavanda'],
    },
    render: (args) => (
        <PatternFill
            {...args}
            width={700}
            height={400}
            patternSize={85}
            gap={10}
            backgroundColor="ice"
            padding={20}
            rounded="xl"
        />
    ),
};

// ============================================
// EJEMPLO: CÓMO USAR TUS PROPIOS COLORES
// ============================================

export const CustomColorsList: Story = {
    args: {},
    render: () => (
        <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-piedra mb-2">Usando lista de colores personalizada</h3>
                <p className="text-sm text-piedra mb-3">
                    Usa la prop <code className="bg-hueso px-2 py-1 rounded">colors</code> para especificar exactamente qué colores quieres usar:
                </p>
                <div className="bg-hueso p-3 rounded font-mono text-xs">
                    {'<PatternFill colors={[\'bosque\', \'lima\']} />'}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Solo verdes */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Solo tonos verdes</h4>
                        <p className="text-xs text-piedra font-mono">colors: ['bosque', 'lima', 'olivo']</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={250}
                        patternSize={70}
                        gap={10}
                        colors={['bosque', 'lima', 'olivo']}
                        randomRotation
                        backgroundColor="hueso"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Solo azules */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Solo tonos azules</h4>
                        <p className="text-xs text-piedra font-mono">colors: ['aqua', 'electrico', 'ice']</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={250}
                        patternSize={70}
                        gap={10}
                        colors={['aqua', 'electrico', 'ice']}
                        randomRotation
                        backgroundColor="hueso"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Un solo color */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Solo un color</h4>
                        <p className="text-xs text-piedra font-mono">colors: ['coral']</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={250}
                        patternSize={70}
                        gap={10}
                        colors={['coral']}
                        randomRotation
                        backgroundColor="ice"
                        padding={12}
                        rounded="lg"
                    />
                </div>

                {/* Dos colores complementarios */}
                <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-bold text-piedra text-sm">Dos complementarios</h4>
                        <p className="text-xs text-piedra font-mono">colors: ['coral', 'lavanda']</p>
                    </div>
                    <PatternFill
                        width={400}
                        height={250}
                        patternSize={70}
                        gap={10}
                        colors={['coral', 'lavanda']}
                        randomRotation
                        backgroundColor="ice"
                        padding={12}
                        rounded="lg"
                    />
                </div>
            </div>
        </div>
    ),
};

// ============================================
// DIFERENTES TAMAÑOS
// ============================================

export const TinyPatterns: Story = {
    args: {
        width: 600,
        height: 400,
        patternSize: 50,
        gap: 6,
        backgroundColor: 'ice',
        padding: 12,
        rounded: 'lg',
    },
};

export const LargePatterns: Story = {
    args: {
        width: 800,
        height: 500,
        patternSize: 120,
        gap: 16,
        backgroundColor: 'hueso',
        padding: 24,
        rounded: 'xl',
    },
};

// ============================================
// COMO FONDO DE SECCIÓN
// ============================================

export const AsHeroBackground: Story = {
    args: {
        width: 800,
        height: 400,
    },
    render: () => (
        <div className="relative">
            <PatternFill
                width={800}
                height={400}
                patternSize={70}
                gap={8}
                randomRotation
                randomOpacity
                backgroundColor="lima"
                padding={0}
                rounded="2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm px-12 py-8 rounded-2xl shadow-2xl text-center">
                    <h1 className="text-5xl font-bold text-bosque mb-4">¡Aloha!</h1>
                    <p className="text-xl text-piedra mb-6">Patrones que se adaptan a tu espacio</p>
                    <button className="px-8 py-3 bg-bosque text-white rounded-lg hover:bg-olivo transition-colors text-lg font-semibold shadow-lg">
                        Comenzar
                    </button>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// TARJETAS CON FONDO AUTOFILL
// ============================================

export const CardsWithAutoFill: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-2 gap-6 p-6">
            <div className="relative h-[250px]">
                <PatternFill
                    width="100%"
                    height={250}
                    patternSize={60}
                    gap={6}
                    randomRotation
                    backgroundColor="lima"
                    rounded="xl"
                    patterns={['face1', 'face2']}
                    colors={['bosque', 'olivo']}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold text-bosque">Felices</h3>
                    </div>
                </div>
            </div>

            <div className="relative h-[250px]">
                <PatternFill
                    width="100%"
                    height={250}
                    patternSize={60}
                    gap={6}
                    randomRotation
                    backgroundColor="coral"
                    rounded="xl"
                    patterns={['face3', 'face4']}
                    colors={['koala', 'piedra']}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold text-coral">Emocionados</h3>
                    </div>
                </div>
            </div>

            <div className="relative h-[250px]">
                <PatternFill
                    width="100%"
                    height={250}
                    patternSize={60}
                    gap={6}
                    randomRotation
                    backgroundColor="aqua"
                    rounded="xl"
                    patterns={['face5', 'face6']}
                    colors={['electrico', 'ice']}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold text-electrico">Geniales</h3>
                    </div>
                </div>
            </div>

            <div className="relative h-[250px]">
                <PatternFill
                    width="100%"
                    height={250}
                    patternSize={60}
                    gap={6}
                    randomRotation
                    randomScale
                    backgroundColor="lavanda"
                    rounded="xl"
                    colors={['coral', 'lavanda']}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold text-lavanda">Creativos</h3>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// BANNER COMPLETO
// ============================================

export const FullWidthBanner: Story = {
    args: {},
    render: () => (
        <div className="relative w-[900px]">
            <PatternFill
                width={900}
                height={300}
                patternSize={75}
                gap={10}
                randomRotation
                randomOpacity
                backgroundColor="ice"
                rounded="2xl"
                padding={20}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="bg-white/90 backdrop-blur-sm px-10 py-6 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-bold text-bosque mb-2">Patrones Auto-Fill</h2>
                    <p className="text-lg text-piedra">Se adaptan automáticamente al espacio disponible</p>
                </div>
            </div>
        </div>
    ),
};

// Responsivo - se adapta al ancho del contenedor
export const ResponsiveWidth: Story = {
    args: {},
    render: () => (
        <div className="w-full max-w-4xl">
            <PatternFill
                width="100%"
                height={350}
                patternSize={80}
                gap={10}
                randomRotation
                backgroundColor="hueso"
                rounded="xl"
                padding={16}
            />
        </div>
    ),
};
