import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from './ChatMessage';
import type { AvatarAttributes } from '../Avatar';

const COLOR_OPTIONS = [
    'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
    'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala',
];

const avatarAle: AvatarAttributes = {
    eyebrowId: 1,
    eyesId: 1,
    facialHairId: 1,
    hairId: 1,
    mouthId: 1,
    skinId: 1,
};

const avatarTu: AvatarAttributes = {
    eyebrowId: 2,
    eyesId: 3,
    facialHairId: 1,
    hairId: 2,
    mouthId: 2,
    skinId: 2,
};

const avatarCarlos: AvatarAttributes = {
    eyebrowId: 3,
    eyesId: 2,
    facialHairId: 2,
    hairId: 3,
    mouthId: 3,
    skinId: 3,
};

const meta = {
    title: 'Components/ChatMessage',
    component: ChatMessage,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'hueso',
            values: [
                { name: 'hueso', value: '#F5F5DC' },
                { name: 'piedra', value: '#4A443F' },
                { name: 'white', value: '#ffffff' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['received', 'sent'],
            description: "'received' = izquierda  |  'sent' = derecha",
            table: { defaultValue: { summary: 'received' } },
        },
        name: { control: 'text' },
        time: { control: 'text' },
        message: { control: 'text' },
        bgColor: {
            control: 'select',
            options: COLOR_OPTIONS,
            description: 'Color de fondo de la burbuja',
        },
        messageColor: {
            control: 'select',
            options: COLOR_OPTIONS,
            description: 'Color del texto del mensaje',
        },
        headerColor: {
            control: 'select',
            options: COLOR_OPTIONS,
            description: 'Color del header (nombre + hora)',
        },
    },
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Mensaje recibido (por defecto) ────────────────────────────
export const Received: Story = {
    args: {
        variant: 'received',
        name: 'Ale',
        time: '16:34',
        message: 'Perdon estaba comiendo',
        emoji: avatarAle,
    },
};

// ── Mensaje enviado ───────────────────────────────────────────
export const Sent: Story = {
    args: {
        variant: 'sent',
        name: 'Tú',
        time: '15:51',
        message: 'No te hagas el interesante y dilooooo',
        emoji: avatarTu,
    },
};

// ── Colores personalizados ────────────────────────────────────
export const CustomColors: Story = {
    name: 'Custom Colors',
    args: {
        variant: 'received',
        name: 'Ale',
        time: '16:34',
        message: 'Puedes cambiar todos mis colores en los controles ↗',
        emoji: avatarAle,
        bgColor: 'lavanda',
        messageColor: 'olivo',
        headerColor: 'piedra',
    },
};

// ── Avatar de Carlos ─────────────────────────────
export const WithAvatar: Story = {
    args: {
        variant: 'received',
        name: 'Carlos',
        time: '10:05',
        message: '¿Quedamos a las 7?',
        emoji: avatarCarlos,
    },
};

// ── Conversación completa (izquierda Y derecha) ───────────────
export const Conversation: Story = {
    name: 'Conversation (izquierda + derecha)',
    args: {
        // args mínimos requeridos por el tipo (no se usan en render)
        variant: 'received',
        name: 'Ale',
        time: '15:50',
        message: 'No te hagas el interesante y dilooooo',
        emoji: avatarAle,
    },
    render: () => (
        <div className="chat-thread">
            <ChatMessage
                variant="received"
                name="Ale"
                time="15:50"
                message="No te hagas el interesante y dilooooo"
                emoji={avatarAle}
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="15:51"
                message="¿El qué? 😇"
                emoji={avatarTu}
            />
            <ChatMessage
                variant="received"
                name="Ale"
                time="16:34"
                message="Perdon estaba comiendo"
                emoji={avatarAle}
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="16:35"
                message="Jaja no te preocupes 😄"
                emoji={avatarTu}
            />
            <ChatMessage
                variant="received"
                name="Ale"
                time="16:36"
                message="Oye y para el finde quedan planes 🤙"
                emoji={avatarAle}
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="16:38"
                message="Sí! Te aviso esta tarde 👌"
                emoji={avatarTu}
            />
        </div>
    ),
};
