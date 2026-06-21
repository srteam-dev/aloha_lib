import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvatarGroup } from './AvatarGroup';

const MOCK_AVATARS = [
  { src: 'https://i.pravatar.cc/150?img=1', fallback: 'A' },
  { src: 'https://i.pravatar.cc/150?img=2', fallback: 'B' },
  { src: 'https://i.pravatar.cc/150?img=3', fallback: 'C' },
  { src: 'https://i.pravatar.cc/150?img=4', fallback: 'D' },
  { src: 'https://i.pravatar.cc/150?img=5', fallback: 'E' },
];

describe('AvatarGroup component', () => {
  test('renders visible avatars up to max', () => {
    render(<AvatarGroup avatars={MOCK_AVATARS} max={3} />);
    const images = screen.getAllByRole('img');
    // Visible avatars are capped at max=3
    expect(images.length).toBe(3);
  });

  test('displays extra count indicator when length > max', () => {
    render(<AvatarGroup avatars={MOCK_AVATARS} max={3} />);
    // 5 avatars - max 3 = +2
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  test('does not display extra count indicator when length <= max', () => {
    render(<AvatarGroup avatars={MOCK_AVATARS.slice(0, 3)} max={3} />);
    expect(screen.queryByText('+')).not.toBeInTheDocument();
  });
});
