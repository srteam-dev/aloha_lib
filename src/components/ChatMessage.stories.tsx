import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from './ChatMessage';

const COLOR_OPTIONS = [
    'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
    'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala',
];

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
        avatarSrc: { control: 'text' },
        avatarFallback: { control: 'text' },
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
        avatarSrc: 'https://i.pravatar.cc/150?img=12',
    },
};

// ── Mensaje enviado ───────────────────────────────────────────
export const Sent: Story = {
    args: {
        variant: 'sent',
        name: 'Tú',
        time: '15:51',
        message: 'No te hagas el interesante y dilooooo',
        avatarSrc: 'https://i.pravatar.cc/150?img=7',
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
        avatarSrc: 'https://i.pravatar.cc/150?img=12',
        bgColor: 'lavanda',
        messageColor: 'olivo',
        headerColor: 'piedra',
    },
};

// ── Sin avatar (fallback inicial) ─────────────────────────────
export const NoAvatar: Story = {
    args: {
        variant: 'received',
        name: 'Carlos',
        time: '10:05',
        message: '¿Quedamos a las 7?',
        avatarFallback: 'C',
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
    },
    render: () => (
        <div className="chat-thread">
            <ChatMessage
                variant="received"
                name="Ale"
                time="15:50"
                message="No te hagas el interesante y dilooooo"
                avatarSrc="https://i.pravatar.cc/150?img=12"
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="15:51"
                message="¿El qué? 😇"
                avatarSrc="https://i.pravatar.cc/150?img=7"
            />
            <ChatMessage
                variant="received"
                name="Ale"
                time="16:34"
                message="Perdon estaba comiendo"
                avatarSrc="https://i.pravatar.cc/150?img=12"
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="16:35"
                message="Jaja no te preocupes 😄"
                avatarSrc="https://i.pravatar.cc/150?img=7"
            />
            <ChatMessage
                variant="received"
                name="Ale"
                time="16:36"
                message="Oye y para el finde quedan planes 🤙"
                avatarSrc="https://i.pravatar.cc/150?img=12"
            />
            <ChatMessage
                variant="sent"
                name="Tú"
                time="16:38"
                message="Sí! Te aviso esta tarde 👌"
                avatarSrc="https://i.pravatar.cc/150?img=7"
            />
        </div>
    ),
};
