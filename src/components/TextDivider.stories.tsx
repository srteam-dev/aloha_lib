import type { Meta, StoryObj } from '@storybook/react';
import { TextDivider } from './TextDivider';
import { Button } from './Button';

// Avatares de muestra incrustados (no dependen de controles)
const SAMPLE_AVATARS = [
  { src: 'https://i.pravatar.cc/150?img=12' },
  { src: 'https://i.pravatar.cc/150?img=7' },
  { src: 'https://i.pravatar.cc/150?img=32' },
];

// ── Meta ────────────────────────────────────────────────────────
const meta = {
  title: 'Components/TextDivider',
  component: TextDivider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    // ── Contenido controlable ────────────────────────────────
    text: { control: 'text', description: 'Texto del divider' },
    component: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'p', 'small', 'muted'] },
    font: { control: 'select', options: ['nunito', 'jetbrains', 'default'] },
    weight: { control: 'select', options: ['light', 'medium', 'bold', 'black'] },
    textColor: {
      control: 'select',
      options: ['default', 'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala'],
    },
    lineColor: {
      control: 'select',
      options: ['default', 'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala'],
      description: 'Color de la línea divisora',
    },
    lineThickness: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
      description: 'Grosor de la línea (px)',
    },
    // ── Opciones de layout (booleans controlables) ───────────
    withAvatars: {
      control: 'boolean',
      description: 'Mostrar avatares a la izquierda del texto',
    },
    withButton: {
      control: 'boolean',
      description: 'Mostrar botón a la derecha de la línea',
    },
    buttonLabel: {
      control: 'text',
      description: 'Texto del botón (si withButton = true)',
    },
    // Ocultar las props que se manejan internamente en el Playground
    avatars: { table: { disable: true } },
    rightSlot: { table: { disable: true } },
    avatarRingColor: { table: { disable: true } },
  },
} satisfies Meta<typeof TextDivider & {
  withAvatars?: boolean;
  withButton?: boolean;
  buttonLabel?: string;
}>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Helper para el render del Playground ─────────────────────────
const PlaygroundRender = ({
  withAvatars,
  withButton,
  buttonLabel = 'Ver todos',
  ...args
}: typeof meta extends Meta<infer T> ? T : never & {
  withAvatars?: boolean;
  withButton?: boolean;
  buttonLabel?: string;
}) => (
  <TextDivider
    {...args}
    avatars={withAvatars ? SAMPLE_AVATARS : undefined}
    rightSlot={withButton ? <Button size="sm" variant="outline">{buttonLabel}</Button> : undefined}
  />
);

// ── Stories ──────────────────────────────────────────────────────

/** Playground interactivo: activa/desactiva avatares y botón desde Controls */
export const Playground: Story = {
  name: '⚡ Playground',
  args: {
    text: 'Amigos',
    lineColor: 'piedra',
    lineThickness: 1,
    withAvatars: false,
    withButton: false,
    buttonLabel: 'Ver todos',
  } as any,
  render: PlaygroundRender as any,
};

// ── Casos fijos ──────────────────────────────────────────────────

export const Default: Story = {
  name: '1 · Solo texto + línea',
  args: { text: 'Amigos', lineColor: 'piedra' },
};

export const WithButton: Story = {
  name: '2 · Texto + línea + botón',
  args: { text: 'Amigos', lineColor: 'piedra' },
  render: (args) => (
    <TextDivider
      {...args}
      rightSlot={<Button size="sm" variant="outline">Ver todos</Button>}
    />
  ),
};

export const WithAvatars: Story = {
  name: '3 · Avatares + texto + línea',
  args: { text: 'Amigos', lineColor: 'piedra' },
  render: (args) => (
    <TextDivider
      {...args}
      avatars={SAMPLE_AVATARS}
      avatarRingColor="#F5F5DC"
    />
  ),
};

export const WithAvatarsAndButton: Story = {
  name: '4 · Avatares + texto + línea + botón',
  args: { text: 'Grupo de Amigos', lineColor: 'piedra' },
  render: (args) => (
    <TextDivider
      {...args}
      avatars={SAMPLE_AVATARS}
      avatarRingColor="#F5F5DC"
      rightSlot={<Button size="sm" variant="outline">Ver grupo</Button>}
    />
  ),
};

export const AllVariants: Story = {
  name: 'Todos los casos',
  args: { text: '' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 11, opacity: 0.4, fontFamily: 'sans-serif' }}>1 · Solo texto + línea</p>
        <TextDivider text="Amigos" lineColor="piedra" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 11, opacity: 0.4, fontFamily: 'sans-serif' }}>2 · Texto + línea + botón</p>
        <TextDivider
          text="Amigos"
          lineColor="piedra"
          rightSlot={<Button size="sm" variant="outline">Ver todos</Button>}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 11, opacity: 0.4, fontFamily: 'sans-serif' }}>3 · Avatares + texto + línea</p>
        <TextDivider
          text="Amigos"
          lineColor="piedra"
          avatars={SAMPLE_AVATARS}
          avatarRingColor="#F5F5DC"
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 11, opacity: 0.4, fontFamily: 'sans-serif' }}>4 · Avatares + texto + línea + botón</p>
        <TextDivider
          text="Grupo de Amigos"
          lineColor="piedra"
          avatars={SAMPLE_AVATARS}
          avatarRingColor="#F5F5DC"
          rightSlot={<Button size="sm" variant="outline">Ver grupo</Button>}
        />
      </div>
    </div>
  ),
};
