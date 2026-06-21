import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextDivider } from './TextDivider';

describe('TextDivider component', () => {
  test('renders divider text', () => {
    render(<TextDivider text="Sección 1" />);
    expect(screen.getByText('Sección 1')).toBeInTheDocument();
  });

  test('renders with custom lineColor class', () => {
    const { container } = render(<TextDivider text="Divider" lineColor="lima" />);
    const lineElement = container.querySelector('.text-divider__line');
    expect(lineElement).toBeInTheDocument();
    expect(lineElement).toHaveClass('bg-[#B4DE6E]'); // lima color hex class
  });
});
