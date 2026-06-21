import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './Radio';

const meta = {
  title: 'Form/Radio',
  component: RadioGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioGroupWrapper = (args: React.ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = useState('option-1');
  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={setValue}
    >
      <RadioGroupItem value="option-1" label="Opción 1: Interesante" />
      <RadioGroupItem value="option-2" label="Opción 2: Divertido" />
      <RadioGroupItem value="option-3" label="Opción 3: Relajado" />
    </RadioGroup>
  );
};

export const Default: Story = {
  args: {
    name: 'custom-options',
    disabled: false,
  },
  render: (args) => <RadioGroupWrapper {...args} />,
};

export const DisabledGroup: Story = {
  args: {
    name: 'disabled-options',
    disabled: true,
  },
  render: (args) => <RadioGroupWrapper {...args} />,
};
