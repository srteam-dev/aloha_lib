import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid, GridItem } from './Grid';
import { colors } from '../../colors';

describe('Grid Component', () => {
  it('renders grid container and children', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies gap and padding values as styles', () => {
    const { container } = render(
      <Grid gap={6} padding={4} backgroundColor="lima">
        <div>Item 1</div>
      </Grid>
    );
    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveStyle({
      gap: '24px',
      padding: '16px',
      backgroundColor: colors.lima,
    });
  });

  it('sets grid-template-columns when autoFit is specified', () => {
    const { container } = render(
      <Grid autoFit="200px">
        <div>Item 1</div>
      </Grid>
    );
    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveStyle({
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    });
  });

  it('sets gridTemplateRows when rows number is specified', () => {
    const { container } = render(
      <Grid rows={3}>
        <div>Item 1</div>
      </Grid>
    );
    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveStyle({
      gridTemplateRows: 'repeat(3, 1fr)',
    });
  });

  it('applies responsive classes according to columns count', () => {
    const { container, rerender } = render(
      <Grid columns={3} responsive={true}>
        <div>Item 1</div>
      </Grid>
    );
    expect(container.firstChild).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');

    rerender(
      <Grid columns={3} responsive={false}>
        <div>Item 1</div>
      </Grid>
    );
    expect(container.firstChild).toHaveClass('grid-cols-3');
    expect(container.firstChild).not.toHaveClass('grid-cols-1');
  });

  it('applies border radius class', () => {
    const { container } = render(
      <Grid rounded="lg">
        <div>Item 1</div>
      </Grid>
    );
    expect(container.firstChild).toHaveClass('rounded-lg');
  });
});

describe('GridItem Component', () => {
  it('renders grid item and children', () => {
    render(<GridItem>Grid Item Content</GridItem>);
    expect(screen.getByText('Grid Item Content', { exact: false })).toBeInTheDocument();
  });

  it('applies colSpan and rowSpan classes', () => {
    const { container } = render(
      <GridItem colSpan={4} rowSpan={2}>
        Content
      </GridItem>
    );
    const itemEl = container.firstChild;
    expect(itemEl).toHaveClass('col-span-4', 'row-span-2');
  });

  it('applies offset start positions', () => {
    const { container } = render(
      <GridItem colStart={2} rowStart={3}>
        Content
      </GridItem>
    );
    const itemEl = container.firstChild;
    expect(itemEl).toHaveClass('col-start-2', 'row-start-3');
  });

  it('applies flex classes when flex prop is true', () => {
    const { container, rerender } = render(
      <GridItem flex flexDirection="row" align="center" justify="between">
        Content
      </GridItem>
    );
    let itemEl = container.firstChild;
    expect(itemEl).toHaveClass('flex', 'flex-row', 'items-center', 'justify-between');

    rerender(
      <GridItem flex flexDirection="col" align="start" justify="end">
        Content
      </GridItem>
    );
    itemEl = container.firstChild;
    expect(itemEl).toHaveClass('flex', 'flex-col', 'items-start', 'justify-end');
  });

  it('applies styling including padding and background color', () => {
    const { container } = render(
      <GridItem padding={3} backgroundColor="olivo">
        Content
      </GridItem>
    );
    const itemEl = container.firstChild as HTMLElement;
    expect(itemEl).toHaveStyle({
      padding: '12px',
      backgroundColor: colors.olivo,
    });
  });
});
