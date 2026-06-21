import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColorSwatch, ColorPalette } from './ColorPalette';
import { colorEntries } from '../../colors';

describe('ColorSwatch Component', () => {
  it('renders swatch background, name and hex value', () => {
    const { container } = render(<ColorSwatch name="lima" value="#B4DE6E" />);
    
    // swatch background div
    const swatchBg = container.querySelector('.rounded-lg');
    expect(swatchBg).toBeInTheDocument();
    expect(swatchBg).toHaveStyle({ backgroundColor: '#B4DE6E' });
    expect(swatchBg).toHaveAttribute('title', 'lima: #B4DE6E');

    // label text
    expect(screen.getByText('lima')).toBeInTheDocument();
    expect(screen.getByText('#B4DE6E')).toBeInTheDocument();
  });

  it('hides hex value when showHex is false', () => {
    render(<ColorSwatch name="lima" value="#B4DE6E" showHex={false} />);
    expect(screen.getByText('lima')).toBeInTheDocument();
    expect(screen.queryByText('#B4DE6E')).not.toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { container, rerender } = render(<ColorSwatch name="lima" value="#B4DE6E" size="sm" />);
    let swatchBg = container.querySelector('.rounded-lg');
    expect(swatchBg).toHaveClass('w-16', 'h-16');

    rerender(<ColorSwatch name="lima" value="#B4DE6E" size="lg" />);
    swatchBg = container.querySelector('.rounded-lg');
    expect(swatchBg).toHaveClass('w-32', 'h-32');
  });
});

describe('ColorPalette Component', () => {
  it('renders all color entries in colors list', () => {
    render(<ColorPalette />);
    
    colorEntries.forEach(([name]) => {
      // Check each color name is displayed in the palette
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('applies grid columns class correctly', () => {
    const { container, rerender } = render(<ColorPalette columns={3} />);
    expect(container.firstChild).toHaveClass('grid', 'grid-cols-3');

    rerender(<ColorPalette columns={6} />);
    expect(container.firstChild).toHaveClass('grid', 'grid-cols-6');
  });
});
