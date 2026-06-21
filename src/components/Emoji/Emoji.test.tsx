import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Emoji } from './Emoji';

describe('Emoji component', () => {
  test('renders specific emoji and size variant', () => {
    render(<Emoji name="crazy" size="lg" alt="Crazy face" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Crazy face');
    expect(img).toHaveClass('w-10 h-10'); // lg size maps to w-10 h-10
  });
});
