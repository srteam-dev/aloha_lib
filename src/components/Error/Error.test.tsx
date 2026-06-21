import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Error } from './Error';

describe('Error Component', () => {
  it('renders default title and message', () => {
    render(<Error />);
    expect(screen.getByRole('heading', { level: 3, name: 'Error' })).toBeInTheDocument();
    expect(screen.getByText('Algo salió mal.')).toBeInTheDocument();
  });

  it('renders custom title and message', () => {
    render(<Error title="Fallo de conexión" message="No se pudo conectar al servidor." />);
    expect(screen.getByRole('heading', { level: 3, name: 'Fallo de conexión' })).toBeInTheDocument();
    expect(screen.getByText('No se pudo conectar al servidor.')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(<Error showIcon={false} />);
    const icon = container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('shows icon when showIcon is true', () => {
    const { container } = render(<Error showIcon={true} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders retry button and calls onRetry when clicked', () => {
    const handleRetry = jest.fn();
    render(<Error onRetry={handleRetry} retryText="Intentar de nuevo" />);
    
    const retryBtn = screen.getByRole('button', { name: /intentar de nuevo/i });
    expect(retryBtn).toBeInTheDocument();
    
    fireEvent.click(retryBtn);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    const { container, rerender } = render(<Error variant="inline" />);
    let wrapper = container.firstChild;
    expect(wrapper).toHaveClass('inline-flex', 'flex-col', 'items-center');

    rerender(<Error variant="card" />);
    wrapper = container.firstChild;
    expect(wrapper).toHaveClass('border', 'border-red-200', 'bg-red-50', 'rounded-lg', 'p-6');
  });
});
