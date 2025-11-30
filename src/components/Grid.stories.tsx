import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: '1rem',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Item 1</CardTitle>
          </CardHeader>
          <CardContent>Content for item 1</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Item 2</CardTitle>
          </CardHeader>
          <CardContent>Content for item 2</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Item 3</CardTitle>
          </CardHeader>
          <CardContent>Content for item 3</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader>
            <CardTitle>Item 4</CardTitle>
          </CardHeader>
          <CardContent>Content for item 4</CardContent>
        </Card>
      </GridItem>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: '1.5rem',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <GridItem key={num}>
          <Card>
            <CardHeader>
              <CardTitle>Item {num}</CardTitle>
            </CardHeader>
            <CardContent>Content for item {num}</CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: '1rem',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <GridItem key={num}>
          <Card>
            <CardHeader>
              <CardTitle>Item {num}</CardTitle>
            </CardHeader>
            <CardContent>Content for item {num}</CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
};

export const CustomGap: Story = {
  args: {
    columns: 3,
    gap: '2rem',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3].map((num) => (
        <GridItem key={num}>
          <Card>
            <CardHeader>
              <CardTitle>Item {num}</CardTitle>
            </CardHeader>
            <CardContent>Large gap between items</CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
};

export const WithDifferentContent: Story = {
  args: {
    columns: 2,
    gap: '1.5rem',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Short Content</CardTitle>
          </CardHeader>
          <CardContent>Brief text</CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Long Content</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Medium Content</CardTitle>
          </CardHeader>
          <CardContent>
            Some content that is longer than brief but not too long.
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Another Item</CardTitle>
          </CardHeader>
          <CardContent>More content here</CardContent>
        </Card>
      </GridItem>
    </Grid>
  ),
};
