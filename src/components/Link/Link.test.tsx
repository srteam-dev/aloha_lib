import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from './Link';

describe('Link component', () => {
  test('renders normal anchor tag with href', () => {
    render(
      <Link href="https://google.com" external>
        Visitar Google
      </Link>
    );

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', 'https://google.com');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    expect(anchor).toHaveTextContent('Visitar Google');
  });

  test('renders span when neither to nor href are provided', () => {
    render(<Link>Solo texto</Link>);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('Solo texto')).toBeInTheDocument();
  });
});
