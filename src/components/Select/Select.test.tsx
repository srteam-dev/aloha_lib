import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

const MOCK_OPTIONS = [
  { value: 'opt-1', label: 'Opción 1' },
  { value: 'opt-2', label: 'Opción 2' },
];

describe('Select component', () => {
  test('renders options list correctly', () => {
    render(<Select options={MOCK_OPTIONS} placeholder="Selecciona uno" label="Escoge" />);
    expect(screen.getByText('Escoge')).toBeInTheDocument();
    expect(screen.getByText('Selecciona uno')).toBeInTheDocument();
    expect(screen.getByText('Opción 1')).toBeInTheDocument();
  });

  test('fires onChange handler when selecting', () => {
    const handleChange = jest.fn();
    render(<Select options={MOCK_OPTIONS} onChange={handleChange} defaultValue="" />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'opt-2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
