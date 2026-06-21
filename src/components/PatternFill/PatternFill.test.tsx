import React from 'react';
import { render } from '@testing-library/react';
import { PatternFill } from './PatternFill';

describe('PatternFill Component', () => {
  it('renders pattern fill container', () => {
    const { container } = render(<PatternFill width={200} height={200} patternSize={40} gap={10} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('overflow-hidden');
  });

  it('applies custom dimensions and background color', () => {
    const { container } = render(
      <PatternFill width="100%" height={300} backgroundColor="lima" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({
      width: '100%',
      height: '300px',
      backgroundColor: 'lima',
    });
  });

  it('generates pattern items in a grid layout', () => {
    const { container } = render(
      <PatternFill
        width={300}
        height={200}
        patternSize={50}
        gap={10}
        padding={10}
        patterns={['face1']}
      />
    );
    
    // effective width = 300 - 20 = 280
    // items per row = 280 / 60 = 4
    // effective height = 200 - 20 = 180
    // rows = 180 / 60 = 3
    // totalItems = 12
    const gridItems = container.querySelectorAll('.overflow-hidden > div > div');
    expect(gridItems.length).toBe(12);
  });

  it('applies rotation, scale, and opacity styles to items', () => {
    const { container } = render(
      <PatternFill
        width={100}
        height={100}
        patternSize={40}
        gap={5}
        randomRotation={true}
        randomScale={true}
        randomOpacity={true}
      />
    );

    const firstItem = container.querySelector('.overflow-hidden > div > div') as HTMLElement;
    if (firstItem) {
      expect(firstItem.style.transform).toMatch(/rotate\(\d+deg\) scale\([\d.]+\)/);
      expect(Number(firstItem.style.opacity)).toBeGreaterThanOrEqual(0.5);
      expect(Number(firstItem.style.opacity)).toBeLessThanOrEqual(1.0);
    }
  });

  it('applies border radius and padding', () => {
    const { container } = render(<PatternFill rounded="lg" padding={16} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass('rounded-lg');
    expect(root).toHaveStyle({
      padding: '16px',
    });
  });
});
