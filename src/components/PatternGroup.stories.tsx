import type { Meta, StoryObj } from '@storybook/react';
import { PatternGroup } from './PatternGroup';

const meta = {
    title: 'Components/PatternGroup',
    component: PatternGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['row', 'column', 'grid'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
        rounded: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        },
        gap: {
            control: 'number',
        },
        padding: {
            control: 'number',
        },
        columns: {
            control: 'number',
        },
    },
} satisfies Meta<typeof PatternGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// GRUPOS EN FILA
// ============================================

export const RowLayout: Story = {
    args: {
        direction: 'row',
        size: 'lg',
        gap: 8,
        patterns: [
            { pattern: 'face1', color: 'bosque' },
            { pattern: 'face2', color: 'lima' },
            { pattern: 'face3', color: 'coral' },
            { pattern: 'face4', color: 'aqua' },
            { pattern: 'face5', color: 'lavanda' },
            { pattern: 'face6', color: 'electrico' },
        ],
    },
};

// ============================================
// GRUPOS EN COLUMNA
// ============================================

export const ColumnLayout: Story = {
    args: {
        direction: 'column',
        size: 'lg',
        gap: 8,
        patterns: [
            { pattern: 'face1', color: 'bosque' },
            { pattern: 'face2', color: 'lima' },
            { pattern: 'face3', color: 'coral' },
        ],
    },
};

// ============================================
// GRUPOS EN GRID
// ============================================

export const GridLayout: Story = {
    args: {
        direction: 'grid',
        columns: 3,
        size: 'lg',
        gap: 12,
        patterns: [
            { pattern: 'face1', color: 'bosque' },
            { pattern: 'face2', color: 'lima' },
            { pattern: 'face3', color: 'coral' },
            { pattern: 'face4', color: 'aqua' },
            { pattern: 'face5', color: 'lavanda' },
            { pattern: 'face6', color: 'electrico' },
        ],
    },
};

// ============================================
// CON ROTACIONES
// ============================================

export const WithRotations: Story = {
    args: { patterns: [] },
    render: () => (
        <PatternGroup
            direction="row"
            size="xl"
            gap={16}
            patterns={[
                { pattern: 'face1', color: 'bosque', rotation: 0 },
                { pattern: 'face2', color: 'lima', rotation: 45 },
                { pattern: 'face3', color: 'coral', rotation: 90 },
                { pattern: 'face4', color: 'aqua', rotation: 135 },
                { pattern: 'face5', color: 'lavanda', rotation: 180 },
                { pattern: 'face6', color: 'electrico', rotation: 270 },
            ]}
        />
    ),
};

// ============================================
// CON ESCALAS DIFERENTES
// ============================================

export const WithScales: Story = {
    args: { patterns: [] },
    render: () => (
        <PatternGroup
            direction="row"
            size="lg"
            gap={16}
            patterns={[
                { pattern: 'face1', color: 'bosque', scale: 0.7 },
                { pattern: 'face2', color: 'lima', scale: 0.85 },
                { pattern: 'face3', color: 'coral', scale: 1 },
                { pattern: 'face4', color: 'aqua', scale: 1.15 },
                { pattern: 'face5', color: 'lavanda', scale: 1.3 },
            ]}
        />
    ),
};

// ============================================
// CON OPACIDADES DIFERENTES
// ============================================

export const WithOpacity: Story = {
    args: { patterns: [] },
    render: () => (
        <div className="bg-hueso p-8 rounded-lg">
            <PatternGroup
                direction="row"
                size="xl"
                gap={12}
                patterns={[
                    { pattern: 'face1', color: 'bosque', opacity: 1 },
                    { pattern: 'face2', color: 'lima', opacity: 0.8 },
                    { pattern: 'face3', color: 'coral', opacity: 0.6 },
                    { pattern: 'face4', color: 'aqua', opacity: 0.4 },
                    { pattern: 'face5', color: 'lavanda', opacity: 0.2 },
                ]}
            />
        </div>
    ),
};

// ============================================
// COMBINACIÓN: ROTACIÓN + ESCALA
// ============================================

export const RotationAndScale: Story = {
    args: { patterns: [] },
    render: () => (
        <PatternGroup
            direction="grid"
            columns={3}
            size="xl"
            gap={20}
            padding={16}
            rounded="lg"
            className="bg-ice"
            patterns={[
                { pattern: 'face1', color: 'bosque', rotation: 0, scale: 1 },
                { pattern: 'face2', color: 'lima', rotation: 45, scale: 1.1 },
                { pattern: 'face3', color: 'coral', rotation: -30, scale: 0.9 },
                { pattern: 'face4', color: 'aqua', rotation: 90, scale: 1.2 },
                { pattern: 'face5', color: 'lavanda', rotation: -45, scale: 0.85 },
                { pattern: 'face6', color: 'electrico', rotation: 180, scale: 1.15 },
            ]}
        />
    ),
};

// ============================================
// DISEÑO CAÓTICO (ALEATORIO)
// ============================================

export const ChaoticDesign: Story = {
    args: { patterns: [] },
    render: () => (
        <div className="w-[500px] h-[400px] relative bg-gradient-to-br from-hueso to-ice rounded-2xl overflow-hidden p-8">
            <PatternGroup
                direction="grid"
                columns={4}
                size="lg"
                gap={8}
                patterns={[
                    { pattern: 'face1', color: 'bosque', rotation: 15, scale: 0.9, opacity: 0.8 },
                    { pattern: 'face2', color: 'lima', rotation: -20, scale: 1.1, opacity: 0.9 },
                    { pattern: 'face3', color: 'coral', rotation: 45, scale: 0.85, opacity: 0.7 },
                    { pattern: 'face4', color: 'aqua', rotation: -35, scale: 1.2, opacity: 1 },
                    { pattern: 'face5', color: 'lavanda', rotation: 90, scale: 0.95, opacity: 0.6 },
                    { pattern: 'face6', color: 'electrico', rotation: -60, scale: 1.05, opacity: 0.85 },
                    { pattern: 'face1', color: 'coral', rotation: 30, scale: 1.1, opacity: 0.75 },
                    { pattern: 'face2', color: 'aqua', rotation: -15, scale: 0.9, opacity: 0.9 },
                    { pattern: 'face3', color: 'bosque', rotation: 120, scale: 1.15, opacity: 0.8 },
                    { pattern: 'face4', color: 'lavanda', rotation: -45, scale: 0.8, opacity: 0.7 },
                    { pattern: 'face5', color: 'lima', rotation: 60, scale: 1.0, opacity: 1 },
                    { pattern: 'face6', color: 'coral', rotation: -90, scale: 1.1, opacity: 0.85 },
                ]}
            />
        </div>
    ),
};

// ============================================
// BANNER CON PATRONES
// ============================================

export const BannerWithPatterns: Story = {
    args: { patterns: [] },
    render: () => (
        <div className="relative w-[600px] h-[200px] bg-gradient-to-r from-bosque to-lima rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4">
                <PatternGroup
                    direction="row"
                    size="md"
                    gap={8}
                    patterns={[
                        { pattern: 'face1', rotation: 15, opacity: 0.3 },
                        { pattern: 'face2', rotation: -10, opacity: 0.3 },
                        { pattern: 'face3', rotation: 20, opacity: 0.3 },
                    ]}
                />
            </div>
            <div className="absolute bottom-4 right-4">
                <PatternGroup
                    direction="row"
                    size="md"
                    gap={8}
                    patterns={[
                        { pattern: 'face4', rotation: -15, opacity: 0.3 },
                        { pattern: 'face5', rotation: 10, opacity: 0.3 },
                        { pattern: 'face6', rotation: -20, opacity: 0.3 },
                    ]}
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-bosque">¡Patrones Aloha!</h2>
                    <p className="text-piedra text-center">Diseños únicos y creativos</p>
                </div>
            </div>
        </div>
    ),
};

// ============================================
// GALERÍA DE ESTILOS
// ============================================

export const StyleGallery: Story = {
    args: { patterns: [] },
    render: () => (
        <div className="grid grid-cols-2 gap-6 p-6">
            {/* Estilo 1: Ordenado */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-piedra mb-4">Ordenado</h3>
                <PatternGroup
                    direction="grid"
                    columns={3}
                    size="md"
                    gap={8}
                    patterns={[
                        { pattern: 'face1', color: 'bosque' },
                        { pattern: 'face2', color: 'bosque' },
                        { pattern: 'face3', color: 'bosque' },
                        { pattern: 'face4', color: 'bosque' },
                        { pattern: 'face5', color: 'bosque' },
                        { pattern: 'face6', color: 'bosque' },
                    ]}
                />
            </div>

            {/* Estilo 2: Colorido */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-piedra mb-4">Colorido</h3>
                <PatternGroup
                    direction="grid"
                    columns={3}
                    size="md"
                    gap={8}
                    patterns={[
                        { pattern: 'face1', color: 'coral' },
                        { pattern: 'face2', color: 'lima' },
                        { pattern: 'face3', color: 'aqua' },
                        { pattern: 'face4', color: 'lavanda' },
                        { pattern: 'face5', color: 'electrico' },
                        { pattern: 'face6', color: 'bosque' },
                    ]}
                />
            </div>

            {/* Estilo 3: Rotado */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-piedra mb-4">Rotado</h3>
                <PatternGroup
                    direction="grid"
                    columns={3}
                    size="md"
                    gap={12}
                    patterns={[
                        { pattern: 'face1', color: 'coral', rotation: 45 },
                        { pattern: 'face2', color: 'lima', rotation: -45 },
                        { pattern: 'face3', color: 'aqua', rotation: 90 },
                        { pattern: 'face4', color: 'lavanda', rotation: -90 },
                        { pattern: 'face5', color: 'electrico', rotation: 135 },
                        { pattern: 'face6', color: 'bosque', rotation: -135 },
                    ]}
                />
            </div>

            {/* Estilo 4: Escalado */}
            <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-piedra mb-4">Escalado</h3>
                <PatternGroup
                    direction="grid"
                    columns={3}
                    size="md"
                    gap={16}
                    patterns={[
                        { pattern: 'face1', color: 'coral', scale: 0.7 },
                        { pattern: 'face2', color: 'lima', scale: 0.85 },
                        { pattern: 'face3', color: 'aqua', scale: 1 },
                        { pattern: 'face4', color: 'lavanda', scale: 1.15 },
                        { pattern: 'face5', color: 'electrico', scale: 1.3 },
                        { pattern: 'face6', color: 'bosque', scale: 1.5 },
                    ]}
                />
            </div>
        </div>
    ),
};
