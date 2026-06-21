import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextArea } from './TextArea';

describe('TextArea component', () => {
  test('renders label and placeholder', () => {
    render(<TextArea label="Biografía" placeholder="Escribe algo..." />);
    expect(screen.getByText('Biografía')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe algo...')).toBeInTheDocument();
  });

  test('applies helper text', () => {
    render(<TextArea label="Biografía" helperText="Máximo 200 caracteres" />);
    expect(screen.getByText('Máximo 200 caracteres')).toBeInTheDocument();
  });

  test('renders error message', () => {
    render(<TextArea label="Biografía" error="El texto es demasiado corto" />);
    expect(screen.getByText('El texto es demasiado corto')).toBeInTheDocument();
  });

  test('fires onChange handler when typing', () => {
    const handleChange = jest.fn();
    render(<TextArea placeholder="Escribe..." onChange={handleChange} />);
    const textarea = screen.getByPlaceholderText('Escribe...');
    fireEvent.change(textarea, { target: { value: 'Hola' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
