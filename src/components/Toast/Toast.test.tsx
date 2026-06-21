import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { Toast } from './Toast';
import { colors } from '../../colors';

describe('Toast Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders with message and correct role', () => {
        const handleClose = jest.fn();
        render(<Toast message="Test toast message" onClose={handleClose} />);
        
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText('Test toast message')).toBeInTheDocument();
    });

    it('applies the correct background color according to type', () => {
        const handleClose = jest.fn();
        
        // Default / Error type
        const { rerender } = render(<Toast message="Error message" type="error" onClose={handleClose} />);
        let toastEl = screen.getByRole('alert');
        expect(toastEl).toHaveStyle({ backgroundColor: colors.coral });

        // Success type
        rerender(<Toast message="Success message" type="success" onClose={handleClose} />);
        toastEl = screen.getByRole('alert');
        expect(toastEl).toHaveStyle({ backgroundColor: colors.lima });

        // Info type
        rerender(<Toast message="Info message" type="info" onClose={handleClose} />);
        toastEl = screen.getByRole('alert');
        expect(toastEl).toHaveStyle({ backgroundColor: colors.electrico });
    });

    it('triggers onClose when close button is clicked', () => {
        const handleClose = jest.fn();
        render(<Toast message="Click to close" onClose={handleClose} />);
        
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('triggers onClose automatically after duration', () => {
        const handleClose = jest.fn();
        render(<Toast message="Auto close" onClose={handleClose} duration={1000} />);
        
        expect(handleClose).not.toHaveBeenCalled();
        
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('applies correct class names for different positions', () => {
        const handleClose = jest.fn();
        const { rerender } = render(
            <Toast message="Pos" position="top-right" onClose={handleClose} />
        );
        
        expect(screen.getByRole('alert')).toHaveClass('top-4', 'right-4');

        rerender(<Toast message="Pos" position="bottom-left" onClose={handleClose} />);
        expect(screen.getByRole('alert')).toHaveClass('bottom-4', 'left-4');
    });
});
