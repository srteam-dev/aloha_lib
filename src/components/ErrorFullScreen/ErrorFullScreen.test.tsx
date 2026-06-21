import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorFullScreen } from './ErrorFullScreen';

describe('ErrorFullScreen Component', () => {
  it('renders default title and message', () => {
    render(<ErrorFullScreen />);
    expect(screen.getByRole('heading', { level: 2, name: 'Error' })).toBeInTheDocument();
    expect(screen.getByText('Algo salió mal. Por favor, intenta de nuevo.')).toBeInTheDocument();
  });

  it('renders custom title and message', () => {
    render(<ErrorFullScreen title="Error Fatal" message="El servicio no está disponible." />);
    expect(screen.getByRole('heading', { level: 2, name: 'Error Fatal' })).toBeInTheDocument();
    expect(screen.getByText('El servicio no está disponible.')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(<ErrorFullScreen showIcon={false} />);
    const icon = container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('renders retry button and calls onRetry when clicked', () => {
    const handleRetry = jest.fn();
    render(<ErrorFullScreen onRetry={handleRetry} retryText="Recargar" />);
    
    const retryBtn = screen.getByRole('button', { name: /recargar/i });
    expect(retryBtn).toBeInTheDocument();
    
    fireEvent.click(retryBtn);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('applies background classes correctly', () => {
    const { container, rerender } = render(<ErrorFullScreen background="white" />);
    let wrapper = container.firstChild;
    expect(wrapper).toHaveClass('bg-white');

    rerender(<ErrorFullScreen background="dark" />);
    wrapper = container.firstChild;
    expect(wrapper).toHaveClass('bg-gray-900', 'text-white');

    rerender(<ErrorFullScreen background="transparent" />);
    wrapper = container.firstChild;
    expect(wrapper).toHaveClass('bg-transparent');
  });

  it('applies basic fullscreen container layout styles', () => {
    const { container } = render(<ErrorFullScreen />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('fixed', 'inset-0', 'z-50', 'flex', 'flex-col', 'items-center', 'justify-center');
  });
});
