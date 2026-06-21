import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormError } from './FormError';
import { colors } from '../../colors';

describe('FormError Component', () => {
  it('returns null if error is falsy', () => {
    const { container } = render(<FormError error={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the error message when error is a string', () => {
    render(<FormError error="El email es obligatorio" />);
    expect(screen.getByText('El email es obligatorio')).toBeInTheDocument();
  });

  it('renders with correct color styling for error icon and text', () => {
    const { container } = render(<FormError error="Error de validación" />);
    const textEl = screen.getByText('Error de validación');
    expect(textEl).toHaveStyle({ color: colors.coral });

    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle({ color: colors.coral });
  });

  it('applies custom class names', () => {
    const { container } = render(<FormError error="Custom error" className="custom-class" />);
    const element = container.firstChild;
    expect(element).toHaveClass('custom-class');
  });
});
