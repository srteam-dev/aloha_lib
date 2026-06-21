import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchInput } from './SearchInput';

describe('SearchInput component', () => {
  test('renders input box with placeholder', () => {
    render(<SearchInput placeholder="Buscar amigos..." />);
    expect(screen.getByPlaceholderText('Buscar amigos...')).toBeInTheDocument();
  });

  test('calls onSearch when pressing Enter key', () => {
    const handleSearch = jest.fn();
    render(<SearchInput placeholder="Buscar..." onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'Alejandro' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(handleSearch).toHaveBeenCalledWith('Alejandro');
  });
});
