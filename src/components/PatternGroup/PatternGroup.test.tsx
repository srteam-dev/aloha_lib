import React from 'react';
import { render, screen } from '@testing-library/react';
import { PatternGroup, PatternGroupItem } from './PatternGroup';

describe('PatternGroup Component', () => {
  const mockPatterns: PatternGroupItem[] = [
    { pattern: 'face1', color: 'lima', rotation: 90, scale: 1.2, opacity: 0.8 },
    { pattern: 'face2', color: 'coral', rotation: 180, scale: 0.8, opacity: 0.5 },
    { pattern: 'face3', color: 'bosque' },
  ];

  it('renders all patterns in the group', () => {
    render(<PatternGroup patterns={mockPatterns} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
    expect(images[0]).toHaveAttribute('alt', 'Pattern face1');
    expect(images[1]).toHaveAttribute('alt', 'Pattern face2');
    expect(images[2]).toHaveAttribute('alt', 'Pattern face3');
  });

  it('applies rotation, scale, and opacity styles to items', () => {
    const { container } = render(<PatternGroup patterns={mockPatterns} />);
    const itemWrappers = container.querySelectorAll('.flex-row > div');
    
    expect(itemWrappers[0]).toHaveStyle({
      transform: 'rotate(90deg) scale(1.2)',
      opacity: '0.8',
    });
    expect(itemWrappers[1]).toHaveStyle({
      transform: 'rotate(180deg) scale(0.8)',
      opacity: '0.5',
    });
    expect(itemWrappers[2]).toHaveStyle({
      transform: 'rotate(0deg) scale(1)',
      opacity: '1',
    });
  });

  it('applies layout directions classes correctly', () => {
    const { container, rerender } = render(
      <PatternGroup patterns={mockPatterns} direction="row" />
    );
    expect(container.firstChild).toHaveClass('flex', 'flex-row');

    rerender(<PatternGroup patterns={mockPatterns} direction="column" />);
    expect(container.firstChild).toHaveClass('flex', 'flex-col');

    rerender(<PatternGroup patterns={mockPatterns} direction="grid" columns={4} />);
    expect(container.firstChild).toHaveClass('grid');
    expect(container.firstChild).toHaveStyle({
      gridTemplateColumns: 'repeat(4, 1fr)',
    });
  });

  it('applies gap, padding, and border radius', () => {
    const { container } = render(
      <PatternGroup patterns={mockPatterns} gap={15} padding={12} rounded="xl" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({
      gap: '15px',
      padding: '12px',
    });
    expect(root).toHaveClass('rounded-xl');
  });
});
