import React from 'react';
import { render, screen } from '@testing-library/react';
import { FullPage } from './FullPage';

describe('FullPage Component', () => {
  it('renders children content', () => {
    render(<FullPage>Page Content</FullPage>);
    expect(screen.getByText('Page Content')).toBeInTheDocument();
  });

  it('applies centered layout classes when centered is true', () => {
    const { container } = render(<FullPage centered>Content</FullPage>);
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('does not apply centered classes when centered is false', () => {
    const { container } = render(<FullPage centered={false}>Content</FullPage>);
    expect(container.firstChild).not.toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('applies custom className', () => {
    const { container } = render(<FullPage className="custom-test-class">Content</FullPage>);
    expect(container.firstChild).toHaveClass('custom-test-class');
  });

  it('applies the background styles correctly', () => {
    const { container, rerender } = render(<FullPage background="white">Content</FullPage>);
    expect(container.firstChild).toHaveClass('bg-white');

    rerender(<FullPage background="gray">Content</FullPage>);
    expect(container.firstChild).toHaveClass('bg-gray-50');

    rerender(<FullPage background="dark">Content</FullPage>);
    expect(container.firstChild).toHaveClass('bg-gray-900');

    rerender(<FullPage background="transparent">Content</FullPage>);
    expect(container.firstChild).toHaveClass('bg-transparent');
  });
});
