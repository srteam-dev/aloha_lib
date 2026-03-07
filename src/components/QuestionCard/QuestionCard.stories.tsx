import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCard } from './QuestionCard';

const COLOR_OPTIONS = [
    'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
    'girasol', 'coral', 'aqua', 'lavanda', 'electrico', 'marmol', 'ice', 'koala',
];

const meta = {
    title: 'Components/QuestionCard',
    component: QuestionCard,
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
        state: {
            control: 'radio',
            options: ['pending', 'responded', 'closed', 'revealed'],
            description: 'Estado del componente',
        },
        questionLabel: { control: 'text' },
        questionText: { control: 'text' },
        respondButtonLabel: { control: 'text' },
        bgColor: { control: 'select', options: COLOR_OPTIONS },
        labelBgColor: { control: 'select', options: COLOR_OPTIONS },
        labelTextColor: { control: 'select', options: COLOR_OPTIONS },
        buttonBgColor: { control: 'select', options: COLOR_OPTIONS },
        buttonTextColor: { control: 'select', options: COLOR_OPTIONS },
        respondedTextColor: { control: 'select', options: COLOR_OPTIONS },
        questionTextColor: { control: 'select', options: COLOR_OPTIONS },
        answerBgColor: { control: 'select', options: COLOR_OPTIONS },
        answerTextColor: { control: 'select', options: COLOR_OPTIONS },
    },
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Base respondents shared across stories ──────────────────────
const sampleRespondents = [
    { name: 'Ale', avatarSrc: 'https://i.pravatar.cc/150?img=12', answer: 'Huevo' },
    { name: 'Tú', avatarSrc: 'https://i.pravatar.cc/150?img=7', answer: 'Gallina' },
];

// ── Estado 1: Pending ───────────────────────────────────────────
export const Pending: Story = {
    name: '1 · Pending (solo pregunta + botón)',
    args: {
        state: 'pending',
        questionLabel: 'Romper el hielo',
        labelAvatarSrc: 'https://i.pravatar.cc/150?img=5',
        respondButtonLabel: 'Responder',
    },
};

// ── Estado 2: Responded ─────────────────────────────────────────
export const Responded: Story = {
    name: '2 · Responded (quién ha respondido + botón)',
    args: {
        state: 'responded',
        questionLabel: 'Romper el hielo',
        labelAvatarSrc: 'https://i.pravatar.cc/150?img=5',
        respondButtonLabel: 'Responder',
        respondents: sampleRespondents,
    },
};

// ── Estado 3: Closed (sin botón) ────────────────────────────────
export const Closed: Story = {
    name: '3 · Closed (sin botón Responder)',
    args: {
        state: 'closed',
        questionLabel: 'Romper el hielo',
        labelAvatarSrc: 'https://i.pravatar.cc/150?img=5',
        respondents: sampleRespondents,
    },
};

// ── Estado 4: Revealed (pregunta + todas las respuestas) ────────
export const Revealed: Story = {
    name: '4 · Revealed (pregunta + respuestas)',
    args: {
        state: 'revealed',
        questionLabel: 'Romper el hielo',
        questionText: '¿Que fue antes el huevo o la gallina?',
        labelAvatarSrc: 'https://i.pravatar.cc/150?img=5',
        respondents: sampleRespondents,
    },
};

// ── Todos los estados juntos ────────────────────────────────────
export const AllStates: Story = {
    name: 'Todos los estados',
    args: {
        state: 'pending',
        questionLabel: 'Romper el hielo',
    },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <div>
                <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.5, fontFamily: 'sans-serif' }}>Estado 1: Pending</p>
                <QuestionCard
                    state="pending"
                    questionLabel="Romper el hielo"
                    labelAvatarSrc="https://i.pravatar.cc/150?img=5"
                    respondButtonLabel="Responder"
                />
            </div>
            <div>
                <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.5, fontFamily: 'sans-serif' }}>Estado 2: Responded</p>
                <QuestionCard
                    state="responded"
                    questionLabel="Romper el hielo"
                    labelAvatarSrc="https://i.pravatar.cc/150?img=5"
                    respondButtonLabel="Responder"
                    respondents={sampleRespondents}
                />
            </div>
            <div>
                <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.5, fontFamily: 'sans-serif' }}>Estado 3: Closed</p>
                <QuestionCard
                    state="closed"
                    questionLabel="Romper el hielo"
                    labelAvatarSrc="https://i.pravatar.cc/150?img=5"
                    respondents={sampleRespondents}
                />
            </div>
            <div>
                <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.5, fontFamily: 'sans-serif' }}>Estado 4: Revealed</p>
                <QuestionCard
                    state="revealed"
                    questionLabel="Romper el hielo"
                    questionText="¿Que fue antes el huevo o la gallina?"
                    labelAvatarSrc="https://i.pravatar.cc/150?img=5"
                    respondents={sampleRespondents}
                />
            </div>
        </div>
    ),
};
