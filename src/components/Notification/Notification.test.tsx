import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Notification } from './Notification';

describe('Notification Component', () => {
  const defaultProps = {
    type: 'info' as const,
    title: 'Nueva Notificación',
    message: 'Tienes un nuevo mensaje.',
    timestamp: 'Hace 5 minutos',
  };

  it('renders notification title, message, and timestamp', () => {
    render(<Notification {...defaultProps} />);
    expect(screen.getByText('Nueva Notificación')).toBeInTheDocument();
    expect(screen.getByText('Tienes un nuevo mensaje.')).toBeInTheDocument();
    expect(screen.getByText('Hace 5 minutos')).toBeInTheDocument();
  });

  it('renders Avatar when avatar prop is provided', () => {
    const avatarConfig = { fallback: 'US' };
    render(<Notification {...defaultProps} avatar={avatarConfig} />);
    
    expect(screen.getByText('US')).toBeInTheDocument();
    expect(screen.queryByTestId('bell-icon')).not.toBeInTheDocument();
  });

  it('renders fallback icon when avatar prop is not provided', () => {
    const { container } = render(<Notification {...defaultProps} />);
    
    // The Bell icon should be rendered
    const iconContainer = container.querySelector('.aloha-notification__icon-container');
    expect(iconContainer).toBeInTheDocument();
    const bellIcon = iconContainer?.querySelector('svg');
    expect(bellIcon).toBeInTheDocument();
  });

  it('applies unread class name when read is false', () => {
    const { container, rerender } = render(<Notification {...defaultProps} read={false} />);
    expect(container.firstChild).toHaveClass('aloha-notification--unread');

    rerender(<Notification {...defaultProps} read={true} />);
    expect(container.firstChild).not.toHaveClass('aloha-notification--unread');
  });

  it('calls onClick when notification container is clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<Notification {...defaultProps} onClick={handleClick} />);
    
    fireEvent.click(container.firstChild!);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(container.firstChild).toHaveClass('aloha-notification--clickable');
  });

  it('calls onClose and stops propagation when close button is clicked', () => {
    const handleClose = jest.fn();
    const handleClick = jest.fn();
    render(
      <Notification 
        {...defaultProps} 
        onClose={handleClose} 
        onClick={handleClick} 
      />
    );
    
    const closeBtn = screen.getByRole('button', { name: /close notification/i });
    expect(closeBtn).toBeInTheDocument();
    
    fireEvent.click(closeBtn);
    
    // onClose is called
    expect(handleClose).toHaveBeenCalledTimes(1);
    // onClick is NOT called because of stopPropagation
    expect(handleClick).not.toHaveBeenCalled();
  });
});
