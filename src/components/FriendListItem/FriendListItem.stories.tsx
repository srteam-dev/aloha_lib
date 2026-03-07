import type { Meta, StoryObj } from '@storybook/react';
import { FriendListItem } from './FriendListItem';

const COLOR_OPTIONS = [
    'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
    'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala',
];

const SAMPLE_AVATARS = [
    { src: 'https://i.pravatar.cc/150?img=12' },
    { src: 'https://i.pravatar.cc/150?img=7' },
    { src: 'https://i.pravatar.cc/150?img=32' },
    { src: 'https://i.pravatar.cc/150?img=45' },
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
        count: { control: 'number' },
        countLabel: { control: 'text' },
        bgColor: { control: 'select', options: COLOR_OPTIONS },
        nameColor: { control: 'select', options: COLOR_OPTIONS },
        countColor: { control: 'select', options: COLOR_OPTIONS },
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
        avatarSrc: 'https://i.pravatar.cc/150?img=12',
        onClick: () => alert('Clic en usuario'),
    },
};

// ── Variante grupo ──────────────────────────────────────────────
export const Group: Story = {
    name: 'Variante: Group',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        count: 48,
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
        avatarFallback: 'V',
    },
};

// ── Colores personalizados ──────────────────────────────────────
export const CustomColors: Story = {
    name: 'Custom Colors (user)',
    args: {
        variant: 'user',
        name: 'María López',
        avatarSrc: 'https://i.pravatar.cc/150?img=45',
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
                count={48}
                name="Amigos del Cole"
                onClick={() => alert('Grupo')}
            />
            <FriendListItem
                variant="user"
                name="Alejandro García"
                avatarSrc="https://i.pravatar.cc/150?img=12"
                onClick={() => alert('Alejandro')}
            />
            <FriendListItem
                variant="user"
                name="Valentina Pérez"
                avatarSrc="https://i.pravatar.cc/150?img=45"
                onClick={() => alert('Valentina')}
            />
            <FriendListItem
                variant="user"
                name="Carlos Mínguez"
                avatarFallback="C"
                onClick={() => alert('Carlos')}
            />
        </div>
    ),
};
