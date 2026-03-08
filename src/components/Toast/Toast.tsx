import React, { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { colors } from '../../colors';
import { P } from '../Typography';

export interface ToastProps {
    message: string;
    type?: 'error' | 'success' | 'info';
    onClose: () => void;
    duration?: number;
    className?: string;
    position?: 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-center' | 'top-right' | 'top-left';
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
    (
        { message, type = 'error', onClose, duration = 3000, className, position = 'bottom-center', ...props },
        ref
    ) => {
        useEffect(() => {
            if (duration > 0) {
                const timer = setTimeout(onClose, duration);
                return () => clearTimeout(timer);
            }
        }, [duration, onClose]);

        const typeConfig = {
            error: {
                icon: <AlertCircle className="w-5 h-5 text-white" />,
                bgColor: colors.coral,
            },
            success: {
                icon: <CheckCircle className="w-5 h-5 text-white" />,
                bgColor: colors.lima,
            },
            info: {
                icon: <Info className="w-5 h-5 text-white" />,
                bgColor: colors.electrico,
            },
        };

        const config = typeConfig[type];

        const positionClasses = {
            'top-left': 'top-4 left-4',
            'top-center': 'top-4 left-1/2 -translate-x-1/2',
            'top-right': 'top-4 right-4',
            'bottom-left': 'bottom-4 left-4',
            'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
            'bottom-right': 'bottom-4 right-4',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'fixed z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] animate-in fade-in slide-in-from-bottom-5',
                    positionClasses[position],
                    className
                )}
                style={{ backgroundColor: config.bgColor }}
                role="alert"
                {...props}
            >
                <div className="flex-shrink-0">{config.icon}</div>
                <P className="text-white m-0 font-medium flex-1 text-sm">{message}</P>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        );
    }
);

Toast.displayName = 'Toast';

export { Toast };
