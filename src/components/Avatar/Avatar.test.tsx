import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  test('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User avatar');
  });

  test('renders fallback initials when fallback is provided and no emoji', () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  test('renders layers when emoji attributes are provided', () => {
    const emojiConfig = { skinId: 1, eyesId: 1, mouthId: 1 };
    render(<Avatar emoji={emojiConfig} />);
    // When emoji is provided, multiple images are rendered for layers (skin, eyes, mouth, etc.)
    const layers = screen.getAllByRole('img');
    expect(layers.length).toBeGreaterThan(0);
  });
});
