import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'mango', label: 'Mango' },
  { value: 'grape', label: 'Grape', disabled: true },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Select an option...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Favourite fruit',
    options: fruitOptions,
    placeholder: 'Select a fruit...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Favourite fruit',
    helperText: 'Pick the one you enjoy the most.',
    options: fruitOptions,
    placeholder: 'Select a fruit...',
  },
};

export const Required: Story = {
  args: {
    label: 'Favourite fruit',
    required: true,
    options: fruitOptions,
    placeholder: 'Select a fruit...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Favourite fruit',
    required: true,
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    error: 'Please select a fruit.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Favourite fruit',
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    disabled: true,
  },
};

export const WithChildren: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country...',
    children: (
      <>
        <option value="us">United States</option>
        <option value="es">Spain</option>
        <option value="mx">Mexico</option>
        <option value="ar">Argentina</option>
      </>
    ),
  },
};
