import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingFullScreen } from './LoadingFullScreen';

describe('LoadingFullScreen Component', () => {
  it('renders default message', () => {
    render(<LoadingFullScreen />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders custom message', () => {
    render(<LoadingFullScreen message="Por favor, espere..." />);
    expect(screen.getByText('Por favor, espere...')).toBeInTheDocument();
  });

  it('applies spinner size classes correctly', () => {
    const { container, rerender } = render(<LoadingFullScreen spinnerSize="sm" />);
    let spinner = container.querySelector('.animate-spin');
    expect(spinner).toHaveClass('w-8', 'h-8');

    rerender(<LoadingFullScreen spinnerSize="xl" />);
    spinner = container.querySelector('.animate-spin');
    expect(spinner).toHaveClass('w-24', 'h-24');
  });

  it('applies background class names correctly', () => {
    const { container, rerender } = render(<LoadingFullScreen background="white" />);
    let root = container.firstChild;
    expect(root).toHaveClass('bg-white');

    rerender(<LoadingFullScreen background="dark" />);
    root = container.firstChild;
    expect(root).toHaveClass('bg-gray-900', 'text-white');

    rerender(<LoadingFullScreen background="transparent" />);
    root = container.firstChild;
    expect(root).toHaveClass('bg-transparent');
  });

  it('contains full page fixed container classes', () => {
    const { container } = render(<LoadingFullScreen />);
    const root = container.firstChild;
    expect(root).toHaveClass('fixed', 'inset-0', 'z-50', 'flex', 'flex-col', 'items-center', 'justify-center');
  });
});
