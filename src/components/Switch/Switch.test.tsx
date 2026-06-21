import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from './Switch';

describe('Switch component', () => {
  test('renders with label', () => {
    render(<Switch label="Activar notificaciones" />);
    expect(screen.getByText('Activar notificaciones')).toBeInTheDocument();
  });

  test('toggles state when checked', () => {
    const handleChange = jest.fn();
    render(<Switch label="Activar" onChange={handleChange} />);
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).not.toBeChecked();

    fireEvent.click(switchInput);
    expect(switchInput).toBeChecked();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
