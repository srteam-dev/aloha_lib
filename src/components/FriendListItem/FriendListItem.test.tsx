import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FriendListItem } from './FriendListItem';

const MOCK_AVATARS = [
  { emoji: { skinId: 1 } },
  { emoji: { skinId: 2 } },
];

describe('FriendListItem component', () => {
  test('renders user variant name', () => {
    const handleClick = jest.fn();
    render(
      <FriendListItem
        variant="user"
        name="Carlos Mínguez"
        onClick={handleClick}
      />
    );

    const btn = screen.getByRole('button');
    expect(screen.getByText('Carlos Mínguez')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders group variant stack', () => {
    render(
      <FriendListItem
        variant="group"
        name="Developers"
        avatars={MOCK_AVATARS}
      />
    );

    expect(screen.getByText('Developers')).toBeInTheDocument();
  });
});
