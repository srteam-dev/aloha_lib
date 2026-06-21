import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioGroup, RadioGroupItem } from './Radio';

describe('Radio component', () => {
  test('renders option labels correctly', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroupItem value="option-1" label="Opción A" />
        <RadioGroupItem value="option-2" label="Opción B" />
      </RadioGroup>
    );
    expect(screen.getByText('Opción A')).toBeInTheDocument();
    expect(screen.getByText('Opción B')).toBeInTheDocument();
  });

  test('toggles selection when clicked', () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup onChange={handleChange}>
        <RadioGroupItem value="option-1" label="Opción A" />
        <RadioGroupItem value="option-2" label="Opción B" />
      </RadioGroup>
    );
    const radioB = screen.getByLabelText('Opción B');
    fireEvent.click(radioB);
    expect(handleChange).toHaveBeenCalledWith('option-2');
  });

  test('does not toggle when disabled', () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup onChange={handleChange} disabled>
        <RadioGroupItem value="option-1" label="Opción A" />
        <RadioGroupItem value="option-2" label="Opción B" />
      </RadioGroup>
    );
    const radioB = screen.getByLabelText('Opción B');
    fireEvent.click(radioB);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
