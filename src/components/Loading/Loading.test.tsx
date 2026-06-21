import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading Component', () => {
  it('renders loading spinner', () => {
    const { container } = render(<Loading />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('renders with message', () => {
    render(<Loading message="Loading data..." />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { container, rerender } = render(<Loading size="sm" />);
    let spinner = container.querySelector('.animate-spin');
    expect(spinner).toHaveClass('w-4', 'h-4');

    rerender(<Loading size="lg" />);
    spinner = container.querySelector('.animate-spin');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });

  it('applies centered layout styles when centered is true', () => {
    const { container } = render(<Loading centered />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center');
  });

  it('applies inline-flex styles when centered is false', () => {
    const { container } = render(<Loading centered={false} />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('inline-flex', 'flex-col', 'items-center');
  });
});
