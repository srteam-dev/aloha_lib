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
    title: 'Data Display/FriendListItem',
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
    name: '✨ User (Default)',
    args: {
        variant: 'user',
        name: 'Alejandro García',
        emoji: { ...DEFAULT_EMOJI, skinId: 2, hairId: 3 },
        onClick: () => alert('Clic en usuario'),
    },
};

// ── Variante grupo ──────────────────────────────────────────────
export const Group: Story = {
    name: '✨ Group (Default)',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Amigos del Cole',
        onClick: () => alert('Clic en grupo'),
    },
};

// ── User - Selected ─────────────────────────────────────────────
export const UserSelected: Story = {
    name: 'User - Selected',
    args: {
        variant: 'user',
        name: 'Valentina Pérez',
        emoji: { ...DEFAULT_EMOJI, skinId: 3, hairId: 4 },
        isSelected: true,
        onClick: () => alert('Seleccionado'),
    },
};

// ── Group - Selected ────────────────────────────────────────────
export const GroupSelected: Story = {
    name: 'Group - Selected',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Team Dev',
        isSelected: true,
        onClick: () => alert('Grupo seleccionado'),
    },
};

// ── Sin chevron ─────────────────────────────────────────────────
export const UserNoChevron: Story = {
    name: 'User - Sin Chevron',
    args: {
        variant: 'user',
        name: 'María López',
        emoji: { ...DEFAULT_EMOJI, skinId: 4, hairId: 5 },
        showChevron: false,
    },
};

export const GroupNoChevron: Story = {
    name: 'Group - Sin Chevron',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Grupo',
        showChevron: false,
    },
};

// ── Sin avatar (fallback) ───────────────────────────────────────
export const UserFallback: Story = {
    name: 'User - Sin Avatar',
    args: {
        variant: 'user',
        name: 'Valentina Pérez',
        emoji: undefined,
    },
};

// ── Colores personalizados (User) ───────────────────────────────
export const UserCustomColors: Story = {
    name: 'User - Custom Colors',
    args: {
        variant: 'user',
        name: 'María López',
        emoji: { ...DEFAULT_EMOJI, skinId: 4, hairId: 5 },
        bgColor: 'lavanda',
        nameColor: 'ice',
        chevronColor: 'hueso',
    },
};

// ── Colores personalizados (Group) ──────────────────────────────
export const GroupCustomColors: Story = {
    name: 'Group - Custom Colors',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Team Especial',
        bgColor: 'coral',
        nameColor: 'hueso',
        chevronColor: 'hueso',
        avatarRingColor: 'girasol',
    },
};

// ── Avatar Ring Color ───────────────────────────────────────────
export const UserWithRing: Story = {
    name: 'User - Custom Ring Color',
    args: {
        variant: 'user',
        name: 'Carlos García',
        emoji: { ...DEFAULT_EMOJI, skinId: 5, hairId: 1 },
        avatarRingColor: 'electrico',
    },
};

export const GroupWithRing: Story = {
    name: 'Group - Custom Ring Color',
    args: {
        variant: 'group',
        avatars: SAMPLE_AVATARS,
        name: 'Ring Test',
        avatarRingColor: 'coral',
    },
};

// ── Sin avatar (fallback) ───────────────────────────────────────
export const UserNoAvatarSelected: Story = {
    name: 'User - Sin Avatar + Selected',
    args: {
        variant: 'user',
        name: 'Sin Avatar',
        emoji: undefined,
        isSelected: true,
    },
};

// ── Lista completa ──────────────────────────────────────────────
export const FullList: Story = {
    name: '📋 Full List Showcase',
    args: {
        variant: 'user',
        name: 'placeholder',
    },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Groups</h3>
            <FriendListItem
                variant="group"
                avatars={SAMPLE_AVATARS}
                name="Amigos del Cole"
                onClick={() => alert('Grupo')}
            />
            <FriendListItem
                variant="group"
                avatars={SAMPLE_AVATARS}
                name="Team Dev"
                isSelected={true}
                onClick={() => alert('Grupo seleccionado')}
            />
            
            <h3 style={{ margin: '16px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Users</h3>
            <FriendListItem
                variant="user"
                name="Alejandro García"
                emoji={{ ...DEFAULT_EMOJI, skinId: 2, hairId: 3 }}
                onClick={() => alert('Alejandro')}
            />
            <FriendListItem
                variant="user"
                name="Valentina Pérez (Selected)"
                emoji={{ ...DEFAULT_EMOJI, skinId: 4, hairId: 5 }}
                isSelected={true}
                onClick={() => alert('Valentina')}
            />
            <FriendListItem
                variant="user"
                name="Carlos Mínguez (Sin Avatar)"
                emoji={undefined}
                onClick={() => alert('Carlos')}
            />
            <FriendListItem
                variant="user"
                name="María López (Custom Colors)"
                emoji={{ ...DEFAULT_EMOJI, skinId: 3, hairId: 2 }}
                bgColor="lavanda"
                nameColor="ice"
                chevronColor="hueso"
                onClick={() => alert('María')}
            />
        </div>
    ),
};
