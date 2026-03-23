import type { Meta, StoryObj } from '@storybook/react';
import { FriendListItem } from './FriendListItem';
import { type AvatarAttributes } from '../Avatar';

const COLOR_OPTIONS = [
    'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
    'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala',
];

const DEFAULT_EMOJI: AvatarAttributes = {
    skinId: 1, eyebrowId: 1, eyesId: 1, facialHairId: 1, hairId: 1, mouthId: 1,
};

const SAMPLE_AVATARS = [
    { emoji: { ...DEFAULT_EMOJI, skinId: 1, hairId: 2 } },
    { emoji: { ...DEFAULT_EMOJI, skinId: 2, hairId: 3 } },
    { emoji: { ...DEFAULT_EMOJI, skinId: 3, hairId: 4 } },
    { emoji: { ...DEFAULT_EMOJI, skinId: 4, hairId: 5 } },
];

const meta = {
    title: 'Components/FriendListItem',
    component: FriendListItem,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'ice',
            values: [
                { name: 'ice', value: '#F0F0E8' },
                { name: 'hueso', value: '#F5F5DC' },
                { name: 'piedra', value: '#4A443F' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'radio', options: ['user', 'group'] },
        name: { control: 'text' },
        showChevron: { control: 'boolean' },
        isSelected: { control: 'boolean' },
        bgColor: { control: 'select', options: COLOR_OPTIONS },
        nameColor: { control: 'select', options: COLOR_OPTIONS },
        chevronColor: { control: 'select', options: COLOR_OPTIONS },
        avatarRingColor: { control: 'select', options: COLOR_OPTIONS },
    },
} satisfies Meta<typeof FriendListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Variante usuario ────────────────────────────────────────────
export const User: Story = {
    name: 'Variante: User',
    args: {
        variant: 'user',
        name: 'Alejandro García',
        emoji: { ...DEFAULT_EMOJI, skinId: 2, hairId: 3 },
        onClick: () => alert('Clic en usuario'),
    },
};

// ── Variante grupo ──────────────────────────────────────────────
export const Group: Story = {
    name: 'Variante: Group',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Amigos del Cole',
        onClick: () => alert('Clic en grupo'),
    },
};

// ── Sin avatar (fallback) ───────────────────────────────────────
export const UserFallback: Story = {
    name: 'User (sin avatar)',
    args: {
        variant: 'user',
        name: 'Valentina Pérez',
        emoji: undefined,
    },
};

// ── Colores personalizados ──────────────────────────────────────
export const CustomColors: Story = {
    name: 'Custom Colors (user)',
    args: {
        variant: 'user',
        name: 'María López',
        emoji: { ...DEFAULT_EMOJI, skinId: 4, hairId: 5 },
        bgColor: 'lavanda',
        nameColor: 'hueso',
        chevronColor: 'hueso',
    },
};

// ── Lista completa ──────────────────────────────────────────────
export const FullList: Story = {
    name: 'Lista completa (users + group)',
    args: {
        variant: 'user',
        name: 'placeholder',
    },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <FriendListItem
                variant="group"
                avatars={SAMPLE_AVATARS}
                name="Amigos del Cole"
                onClick={() => alert('Grupo')}
            />
            <FriendListItem
                variant="user"
                name="Alejandro García"
                emoji={{ ...DEFAULT_EMOJI, skinId: 2, hairId: 3 }}
                onClick={() => alert('Alejandro')}
            />
            <FriendListItem
                variant="user"
                name="Valentina Pérez"
                emoji={{ ...DEFAULT_EMOJI, skinId: 4, hairId: 5 }}
                onClick={() => alert('Valentina')}
            />
            <FriendListItem
                variant="user"
                name="Carlos Mínguez"
                emoji={undefined}
                onClick={() => alert('Carlos')}
            />
        </div>
    ),
};
