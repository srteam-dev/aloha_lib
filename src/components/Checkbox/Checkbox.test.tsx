import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  test('renders checkbox label', () => {
    render(<Checkbox label="Acepto los términos" />);
    expect(screen.getByText('Acepto los términos')).toBeInTheDocument();
  });

  test('toggles checked state when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Acepto" onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
