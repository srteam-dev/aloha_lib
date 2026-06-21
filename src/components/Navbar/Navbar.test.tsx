import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './Navbar';

const MOCK_NAV_ITEMS = [
  { icon: 'home' as const, label: 'Inicio', active: true },
  { icon: 'chat' as const, label: 'Chats', active: false },
];

describe('Navbar component', () => {
  test('renders nologin variant with language and action button', () => {
    const handleActionClick = jest.fn();
    render(
      <Navbar
        variant="nologin"
        currentLanguage="ES"
        buttonText="Ingresar"
        onActionClick={handleActionClick}
      />
    );

    expect(screen.getByText('Idioma (ES)')).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: 'Ingresar' });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleActionClick).toHaveBeenCalledTimes(1);
  });

  test('renders onlogin variant with menu items', () => {
    const handleItemClick = jest.fn();
    const items = MOCK_NAV_ITEMS.map(item => ({
      ...item,
      onClick: item.label === 'Chats' ? handleItemClick : undefined,
    }));

    render(<Navbar variant="onlogin" navItems={items} />);

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    const chatsBtn = screen.getByText('Chats');
    expect(chatsBtn).toBeInTheDocument();
    
    fireEvent.click(chatsBtn);
    expect(handleItemClick).toHaveBeenCalledTimes(1);
  });
});
