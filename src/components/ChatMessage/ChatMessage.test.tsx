import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChatMessage } from './ChatMessage';

describe('ChatMessage component', () => {
  test('renders message text, name and time', () => {
    render(
      <ChatMessage
        variant="received"
        name="Carlos"
        message="Hola, ¿cómo estás?"
        time="10:30 AM"
      />
    );

    expect(screen.getByText('Carlos')).toBeInTheDocument();
    expect(screen.getByText('Hola, ¿cómo estás?')).toBeInTheDocument();
    expect(screen.getByText('10:30 AM')).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    const { container: sentContainer } = render(
      <ChatMessage variant="sent" name="Me" message="Hello" time="10:31" />
    );
    expect(sentContainer.firstChild).toHaveClass('chat-message--sent');

    const { container: recContainer } = render(
      <ChatMessage variant="received" name="Them" message="Hello" time="10:31" />
    );
    expect(recContainer.firstChild).toHaveClass('chat-message--received');
  });
});
