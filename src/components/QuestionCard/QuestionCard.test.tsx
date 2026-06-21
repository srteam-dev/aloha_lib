import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QuestionCard } from './QuestionCard';

const MOCK_RESPONDENTS = [
  { name: 'Ana', emoji: { skinId: 1 } as never, answer: 'Helado de Chocolate' },
];

describe('QuestionCard component', () => {
  test('renders badge label and responder button in pending state', () => {
    const handleRespond = jest.fn();
    render(
      <QuestionCard
        questionLabel="Romper el hielo"
        state="pending"
        onRespond={handleRespond}
      />
    );

    expect(screen.getByText('Romper el hielo')).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: 'Responder' });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleRespond).toHaveBeenCalledTimes(1);
  });

  test('renders respondents list when state is revealed', () => {
    render(
      <QuestionCard
        questionLabel="Romper el hielo"
        questionText="¿Cuál es tu postre favorito?"
        state="revealed"
        respondents={MOCK_RESPONDENTS}
      />
    );

    expect(screen.getByText('¿Cuál es tu postre favorito?')).toBeInTheDocument();
    expect(screen.getByText('Ana')).toBeInTheDocument();
    expect(screen.getByText('Helado de Chocolate')).toBeInTheDocument();
  });
});
