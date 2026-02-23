import React from 'react';
import { cn } from '../lib/utils';
import { Avatar } from './Avatar';
import { colors, type ColorName } from '../colors';

// ── Tipos ────────────────────────────────────────────────────────

export type QuestionCardState = 'pending' | 'responded' | 'closed' | 'revealed';

export interface QuestionRespondent {
    /** Nombre del participante */
    name: string;
    avatarSrc?: string;
    avatarFallback?: string;
    /** Respuesta del participante (se muestra en estado 'revealed') */
    answer?: string;
}

export interface QuestionCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Texto del badge de la pregunta (ej: "Romper el hielo") */
    questionLabel: string;
    /** Texto completo de la pregunta, visible en estado 'revealed' */
    questionText?: string;
    /** Avatar del creador de la pregunta (mostrado en el badge) */
    labelAvatarSrc?: string;
    labelAvatarFallback?: string;
    /**
     * Estado del componente:
     * - 'pending'   → badge + botón Responder
     * - 'responded' → badge + quién respondió + botón Responder
     * - 'closed'    → badge + quién respondió, sin botón
     * - 'revealed'  → badge + pregunta + respuestas completas
     */
    state?: QuestionCardState;
    /** Lista de participantes */
    respondents?: QuestionRespondent[];
    /** Etiqueta del botón Responder */
    respondButtonLabel?: string;
    /** Callback al pulsar el botón Responder */
    onRespond?: () => void;

    // ── Colores configurables ─────────────────────────────────────
    /** Color de fondo de la tarjeta */
    bgColor?: ColorName;
    /** Color de fondo del badge/etiqueta */
    labelBgColor?: ColorName;
    /** Color del texto del badge */
    labelTextColor?: ColorName;
    /** Color de fondo del botón Responder */
    buttonBgColor?: ColorName;
    /** Color del texto del botón Responder */
    buttonTextColor?: ColorName;
    /** Color del texto de los respondents ("Ale ya ha respondido.") */
    respondedTextColor?: ColorName;
    /** Color del texto de la pregunta (estado revealed) */
    questionTextColor?: ColorName;
    /** Color de fondo de los chips de respuesta (estado revealed) */
    answerBgColor?: ColorName;
    /** Color del texto de los chips de respuesta (estado revealed) */
    answerTextColor?: ColorName;
}

// ── Defaults por color ────────────────────────────────────────────

const DEFAULT_COLORS: Required<
    Pick<
        QuestionCardProps,
        | 'bgColor'
        | 'labelBgColor'
        | 'labelTextColor'
        | 'buttonBgColor'
        | 'buttonTextColor'
        | 'respondedTextColor'
        | 'questionTextColor'
        | 'answerBgColor'
        | 'answerTextColor'
    >
> = {
    bgColor: 'koala',
    labelBgColor: 'lavanda',
    labelTextColor: 'hueso',
    buttonBgColor: 'marmol',
    buttonTextColor: 'olivo',
    respondedTextColor: 'hueso',
    questionTextColor: 'hueso',
    answerBgColor: 'hueso',
    answerTextColor: 'olivo',
};

// ── Componente ────────────────────────────────────────────────────

const QuestionCard = React.forwardRef<HTMLDivElement, QuestionCardProps>(
    (
        {
            questionLabel,
            questionText,
            labelAvatarSrc,
            labelAvatarFallback = '?',
            state = 'pending',
            respondents = [],
            respondButtonLabel = 'Responder',
            onRespond,
            bgColor,
            labelBgColor,
            labelTextColor,
            buttonBgColor,
            buttonTextColor,
            respondedTextColor,
            questionTextColor,
            answerBgColor,
            answerTextColor,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const resolved = {
            bg: colors[bgColor ?? DEFAULT_COLORS.bgColor],
            labelBg: colors[labelBgColor ?? DEFAULT_COLORS.labelBgColor],
            labelText: colors[labelTextColor ?? DEFAULT_COLORS.labelTextColor],
            btnBg: colors[buttonBgColor ?? DEFAULT_COLORS.buttonBgColor],
            btnText: colors[buttonTextColor ?? DEFAULT_COLORS.buttonTextColor],
            respText: colors[respondedTextColor ?? DEFAULT_COLORS.respondedTextColor],
            qText: colors[questionTextColor ?? DEFAULT_COLORS.questionTextColor],
            ansBg: colors[answerBgColor ?? DEFAULT_COLORS.answerBgColor],
            ansText: colors[answerTextColor ?? DEFAULT_COLORS.answerTextColor],
        };

        const showRespondents = state === 'responded' || state === 'closed';
        const showRevealed = state === 'revealed';
        const showButton = state === 'pending' || state === 'responded';

        return (
            <div
                ref={ref}
                className={cn('question-card', className)}
                style={{
                    '--qc-bg': resolved.bg,
                    '--qc-label-bg': resolved.labelBg,
                    '--qc-label-txt': resolved.labelText,
                    '--qc-btn-bg': resolved.btnBg,
                    '--qc-btn-txt': resolved.btnText,
                    '--qc-resp-txt': resolved.respText,
                    '--qc-q-txt': resolved.qText,
                    '--qc-ans-bg': resolved.ansBg,
                    '--qc-ans-txt': resolved.ansText,
                    ...style,
                } as React.CSSProperties}
                {...props}
            >
                {/* ── Badge de la pregunta ─────────────────────────── */}
                <div className="question-card__label">
                    <Avatar
                        src={labelAvatarSrc}
                        fallback={labelAvatarFallback}
                        size="sm"
                        className="question-card__label-avatar"
                    />
                    <span className="question-card__label-text">{questionLabel}</span>
                </div>

                {/* ── Estado: pregunta completa + respuestas ──────── */}
                {showRevealed && (
                    <div className="question-card__revealed">
                        {questionText && (
                            <p className="question-card__question-text">{questionText}</p>
                        )}
                        <ul className="question-card__answers">
                            {respondents.map((r, i) => (
                                <li key={i} className="question-card__answer-row">
                                    <Avatar
                                        src={r.avatarSrc}
                                        fallback={r.avatarFallback ?? r.name.charAt(0).toUpperCase()}
                                        size="sm"
                                        className="question-card__answer-avatar"
                                    />
                                    <span className="question-card__answer-name">{r.name}</span>
                                    {r.answer && (
                                        <span className="question-card__answer-chip">{r.answer}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* ── Estado: quién ha respondido ──────────────────── */}
                {showRespondents && (
                    <ul className="question-card__respondents">
                        {respondents.map((r, i) => (
                            <li key={i} className="question-card__respondent">
                                <Avatar
                                    src={r.avatarSrc}
                                    fallback={r.avatarFallback ?? r.name.charAt(0).toUpperCase()}
                                    size="sm"
                                    className="question-card__respondent-avatar"
                                />
                                <span className="question-card__respondent-text">
                                    {r.name} ya ha respondido.
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* ── Botón Responder ──────────────────────────────── */}
                {showButton && (
                    <button
                        type="button"
                        className="question-card__btn"
                        onClick={onRespond}
                    >
                        {respondButtonLabel}
                    </button>
                )}
            </div>
        );
    }
);

QuestionCard.displayName = 'QuestionCard';

export { QuestionCard };
