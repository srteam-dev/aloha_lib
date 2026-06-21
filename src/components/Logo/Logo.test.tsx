import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './Logo';

describe('Logo component', () => {
  test('renders logo container with correct variant classes', () => {
    const { container } = render(<Logo variant="icon" size="sm" color="girasol" />);
    const logoContainer = container.firstChild as HTMLElement;
    expect(logoContainer).toBeInTheDocument();
    expect(logoContainer).toHaveClass('h-8 w-8'); // icon sm maps to w-8 h-8

    const innerMask = logoContainer.firstChild as HTMLElement;
    expect(innerMask).toHaveStyle({
      backgroundColor: '#FFD400', // girasol color hex
    });
  });
});
