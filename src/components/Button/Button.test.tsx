import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('applies custom background and text styles', () => {
    render(<Button color="lima" textColor="olivo">Lima Button</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#B4DE6E',
      color: '#383517',
    });
  });

  test('fires onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables the button when loading is true', () => {
    render(<Button loading>Loading...</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
