import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pattern } from './Pattern';
import { colors } from '../../colors';

describe('Pattern Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders pattern image with alt text in individual mode', () => {
    render(<Pattern name="face1" />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Pattern face1');
  });

  it('applies preset size classes in individual mode', () => {
    const { container, rerender } = render(<Pattern name="face2" size="sm" />);
    let wrapper = container.firstChild;
    expect(wrapper).toHaveClass('w-12', 'h-12');

    rerender(<Pattern name="face2" size="xl" />);
    wrapper = container.firstChild;
    expect(wrapper).toHaveClass('w-24', 'h-24');
  });

  it('applies custom width and height in individual mode', () => {
    const { container } = render(<Pattern name="face3" width={100} height={150} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({
      width: '100px',
      height: '150px',
    });
  });

  it('applies background color', () => {
    const { container } = render(<Pattern name="face4" backgroundColor="lima" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({
      backgroundColor: colors.lima,
    });
  });

  it('applies border radius and padding', () => {
    const { container } = render(<Pattern name="face4" rounded="lg" padding={12} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('rounded-lg');
    expect(wrapper).toHaveStyle({
      padding: '12px',
    });
  });

  it('renders tile/repeat div in repeat mode', () => {
    const { container } = render(
      <Pattern name="face5" repeat backgroundColor="bosque" width={50} height={50} />
    );
    const div = container.firstChild as HTMLElement;
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveStyle({
      backgroundColor: colors.bosque,
      backgroundRepeat: 'repeat',
      backgroundSize: '50px 50px',
    });
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('returns null and warns when pattern is not found', () => {
    const { container } = render(<Pattern name={'non-existent' as never} />);
    expect(container.firstChild).toBeNull();
    expect(console.warn).toHaveBeenCalledWith('Pattern "non-existent" not found');
  });
});
