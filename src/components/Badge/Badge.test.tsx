import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from './Badge';

describe('Badge component', () => {
  test('renders badge with children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  test('applies custom background and text styles', () => {
    render(<Badge backgroundColor="lima" textColor="olivo">Lima Badge</Badge>);
    const badgeElement = screen.getByText('Lima Badge');
    expect(badgeElement).toHaveStyle({
      backgroundColor: '#B4DE6E',
      color: '#383517',
    });
  });
});
