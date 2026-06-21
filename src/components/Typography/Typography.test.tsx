import React from 'react';
import { render, screen } from '@testing-library/react';
import { H1, H2, H3, H4, P, Subtitle, Lead, Small, Muted } from './Typography';

describe('Typography Components', () => {
  describe('H1 Component', () => {
    it('renders text content with h1 tag', () => {
      render(<H1>Heading 1</H1>);
      const el = screen.getByRole('heading', { level: 1 });
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Heading 1');
      expect(el).toHaveClass('font-nunito'); // default font family
    });
  });

  describe('H2 Component', () => {
    it('renders text content with h2 tag', () => {
      render(<H2>Heading 2</H2>);
      const el = screen.getByRole('heading', { level: 2 });
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Heading 2');
    });
  });

  describe('H3 Component', () => {
    it('renders text content with h3 tag', () => {
      render(<H3>Heading 3</H3>);
      const el = screen.getByRole('heading', { level: 3 });
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Heading 3');
    });
  });

  describe('H4 Component', () => {
    it('renders text content with h4 tag', () => {
      render(<H4>Heading 4</H4>);
      const el = screen.getByRole('heading', { level: 4 });
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Heading 4');
    });
  });

  describe('P Component', () => {
    it('renders paragraph content', () => {
      const { container } = render(<P>Paragraph text</P>);
      const el = container.querySelector('p');
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Paragraph text');
    });
  });

  describe('Subtitle Component', () => {
    it('renders subtitle content', () => {
      const { container } = render(<Subtitle>Subtitle text</Subtitle>);
      const el = container.querySelector('p');
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Subtitle text');
      expect(el).toHaveClass('text-xl', 'text-muted-foreground');
    });
  });

  describe('Lead Component', () => {
    it('renders lead content', () => {
      const { container } = render(<Lead>Lead text</Lead>);
      const el = container.querySelector('p');
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Lead text');
    });
  });

  describe('Small Component', () => {
    it('renders small tag text content', () => {
      const { container } = render(<Small>Small text</Small>);
      const el = container.querySelector('small');
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Small text');
    });
  });

  describe('Muted Component', () => {
    it('renders muted text content', () => {
      const { container } = render(<Muted>Muted text</Muted>);
      const el = container.querySelector('p');
      expect(el).toBeInTheDocument();
      expect(el).toHaveTextContent('Muted text');
    });
  });

  describe('Shared styles and classes', () => {
    it('applies custom font family and weight classes', () => {
      render(
        <H1 font="jetbrains" weight="black">
          Title
        </H1>
      );
      const el = screen.getByRole('heading', { level: 1 });
      expect(el).toHaveClass('font-jetbrains', 'font-black');
    });

    it('applies basic color options using custom css properties', () => {
      render(
        <P color="lima">
          Text
        </P>
      );
      const el = screen.getByText('Text');
      expect(el).toHaveStyle({ color: 'var(--colors-lima)' });
    });

    it('applies theme color options using custom css properties', () => {
      render(
        <P color="theme-primary">
          Text
        </P>
      );
      const el = screen.getByText('Text');
      expect(el).toHaveStyle({ color: 'var(--theme-primary)' });
    });

    it('accepts and applies custom className and inline style', () => {
      render(
        <P className="custom-class" style={{ fontSize: '24px' }}>
          Text
        </P>
      );
      const el = screen.getByText('Text');
      expect(el).toHaveClass('custom-class');
      expect(el).toHaveStyle({ fontSize: '24px' });
    });
  });
});
