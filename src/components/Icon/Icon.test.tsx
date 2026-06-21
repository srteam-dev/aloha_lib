import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './Icon';

describe('Icon component', () => {
  test('renders icon container and mask styling', () => {
    const { container } = render(<Icon name="settings" size="lg" color="coral" />);
    const iconContainer = container.firstChild as HTMLElement;
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveClass('w-12 h-12'); // lg maps to w-12 h-12
    
    const iconMask = iconContainer.firstChild as HTMLElement;
    expect(iconMask).toBeInTheDocument();
    expect(iconMask).toHaveStyle({
      backgroundColor: '#FF6F61', // coral color hex
    });
  });
});
