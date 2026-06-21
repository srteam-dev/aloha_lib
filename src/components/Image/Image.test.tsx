import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Image } from './Image';

describe('Image component', () => {
  test('renders image with standard src and alt', () => {
    render(<Image src="https://example.com/test.jpg" alt="Test image" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  test('falls back to fallbackSrc when onError fires', () => {
    render(
      <Image
        src="https://example.com/broken.jpg"
        fallbackSrc="https://example.com/fallback.jpg"
        alt="Fallback test"
      />
    );
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', 'https://example.com/fallback.jpg');
  });

  test('displays error block when image fails and no fallbackSrc provided', () => {
    render(<Image src="https://example.com/broken.jpg" alt="Broken test" />);
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(screen.getByText('Failed to load image')).toBeInTheDocument();
  });
});
