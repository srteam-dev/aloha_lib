import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input component', () => {
  test('renders standard text input with placeholder', () => {
    render(<Input placeholder="Nombre" label="Tu Nombre" />);
    expect(screen.getByText('Tu Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
  });

  test('toggles password visibility when type is password', () => {
    render(<Input type="password" placeholder="Clave" />);
    const inputElement = screen.getByPlaceholderText('Clave');
    expect(inputElement).toHaveAttribute('type', 'password');
    
    // Toggle button should be present
    const toggleBtn = screen.getByRole('button');
    expect(toggleBtn).toBeInTheDocument();
    
    fireEvent.click(toggleBtn);
    expect(inputElement).toHaveAttribute('type', 'text');
    
    fireEvent.click(toggleBtn);
    expect(inputElement).toHaveAttribute('type', 'password');
  });
});
