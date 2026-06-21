import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs } from './Tabs';

const MOCK_ITEMS = [
  { id: 'tab-1', label: 'General' },
  { id: 'tab-2', label: 'Seguridad' },
];

describe('Tabs component', () => {
  test('renders labels and applies active classes', () => {
    render(<Tabs items={MOCK_ITEMS} activeId="tab-1" onChange={() => {}} />);
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Seguridad')).toBeInTheDocument();
    
    const activeTab = screen.getByRole('tab', { name: 'General' });
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
  });

  test('calls onChange callback when tab trigger is clicked', () => {
    const handleChange = jest.fn();
    render(<Tabs items={MOCK_ITEMS} activeId="tab-1" onChange={handleChange} />);
    const secondTab = screen.getByRole('tab', { name: 'Seguridad' });
    
    fireEvent.click(secondTab);
    expect(handleChange).toHaveBeenCalledWith('tab-2');
  });
});
