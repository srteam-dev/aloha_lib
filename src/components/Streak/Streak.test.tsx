import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Streak } from './Streak';

describe('Streak component', () => {
  test('renders day count and icon correctly', () => {
    render(<Streak count={42} size="lg" color="coral" />);
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('42')).toHaveClass('text-lg');
  });
});
