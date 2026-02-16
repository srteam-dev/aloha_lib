import React from 'react';
import { cn } from '../lib/utils';
import { Logo, LogoVariant, LogoSize } from './Logo';
import { Icon, IconName } from './Icon';
import { Button } from './Button';
import { ColorOption } from './Typography';
import { ColorName, colors } from '../colors';

export type NavbarVariant = 'nologin' | 'onlogin';

export interface NavItem {
    /** Icon name */
    icon: IconName;
    /** Label text */
    label: string;
    /** Click handler */
    onClick?: () => void;
    /** Navigation path (for use with router navigate) */
    to?: string;
    /** If true, this item is active/selected */
    active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    /** Navbar variant */
    variant?: NavbarVariant;
    /** Logo variant to display */
    logoVariant?: LogoVariant;
    /** Logo size */
    logoSize?: LogoSize;
    /** Logo color */
    logoColor?: ColorOption;
    /** Background color from Aloha palette (only for nologin) */
    backgroundColor?: ColorName;
    /** Text color */
    textColor?: ColorName;
    /** Active item indicator color (border around icon) */
    activeColor?: ColorName;
    /** Nav items background color (onlogin only) */
    navItemsBgColor?: ColorName;
    /** Button background color (nologin only) */
    buttonColor?: ColorName;
    /** Button text color (nologin only) */
    buttonTextColor?: ColorName;
    /** Button border color (nologin only) */
    buttonBorderColor?: ColorName;
    /** Current language label (e.g., "ES", "EN") (nologin only) */
    currentLanguage?: string;
    /** Language selector click handler (nologin only) */
    onLanguageClick?: () => void;
    /** Action button click handler (nologin only) */
    onActionClick?: () => void;
    /** Custom logo element (overrides default Logo component) */
    customLogo?: React.ReactNode;
    /** If true, shows "Register" instead of "Login" (nologin only) */
    isRegister?: boolean;
    /** Button text (overrides default "Iniciar Sesión" or "Registrarse") (nologin only) */
    buttonText?: string;
    /** Navigation items (onlogin only) */
    navItems?: NavItem[];
    /** Navigate function from router (onlogin only) */
    navigate?: (path: string) => void;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
    (
        {
            className,
            variant = 'nologin',
            logoVariant = 'horizontal',
            logoSize = 'sm',
            logoColor = 'default',
            backgroundColor = 'hueso',
            textColor = 'piedra',
            activeColor = 'bosque',
            navItemsBgColor = 'hueso',
            buttonColor,
            buttonTextColor,
            buttonBorderColor,
            currentLanguage = 'ES',
            onLanguageClick,
            onActionClick,
            customLogo,
            isRegister = false,
            buttonText,
            navItems = [],
            navigate,
            ...props
        },
        ref
    ) => {
        // Determinar el texto del botón para nologin
        const defaultButtonText = isRegister ? 'Registrarse' : 'Iniciar Sesión';
        const finalButtonText = buttonText || defaultButtonText;

        // Handler para items del menú
        const handleNavItemClick = (item: NavItem) => {
            // Si tiene onClick, ejecutarlo
            if (item.onClick) {
                item.onClick();
            }
            // Si tiene to y navigate está disponible, navegar
            if (item.to && navigate) {
                navigate(item.to);
            }
        };

        return (
            <nav
                ref={ref}
                className={cn(
                    'w-full px-6 py-3 flex items-center justify-between',
                    'border-b border-black/10',
                    className
                )}
                style={{
                    backgroundColor: variant === 'nologin' ? colors[backgroundColor] : 'transparent',
                }}
                {...props}
            >
                {/* Logo Section */}
                <div className="flex items-center flex-shrink-0">
                    {customLogo || (
                        <Logo variant={logoVariant} size={logoSize} color={logoColor} />
                    )}
                </div>

                {/* Content Section - depends on variant */}
                {variant === 'nologin' ? (
                    // NoLogin Variant: Language selector + Action button
                    <div className="flex items-center gap-2">
                        {/* Language Selector */}
                        <button
                            onClick={onLanguageClick}
                            className={cn(
                                'flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-black/5',
                                'text-sm font-medium'
                            )}
                            style={{ color: colors[textColor] }}
                        >
                            <Icon name="lang" size="sm" color={textColor as ColorOption} />
                            <span>Idioma ({currentLanguage})</span>
                        </button>

                        {/* Action Button */}
                        <Button
                            variant={buttonColor ? 'default' : 'outline'}
                            size="sm"
                            color={buttonColor}
                            borderColor={buttonBorderColor || textColor}
                            textColor={buttonTextColor || textColor}
                            borderWidth={2}
                            onClick={onActionClick}
                            className="ml-2"
                        >
                            {finalButtonText}
                        </Button>
                    </div>
                ) : (
                    // OnLogin Variant: Navigation menu (fondo continuo)
                    <div
                        className="flex items-center gap-1 px-3 py-2 rounded-lg"
                        style={{ backgroundColor: colors[navItemsBgColor] }}
                    >
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavItemClick(item)}
                                className={cn(
                                    'flex items-center gap-2 px-3 py-2 rounded-md transition-all',
                                    'text-sm font-medium',
                                    'hover:opacity-80'
                                )}
                                style={{
                                    color: colors[textColor],
                                }}
                            >
                                {/* Icon with active fill */}
                                <div
                                    className={cn(
                                        'flex items-center justify-center p-1.5 rounded-md transition-all'
                                    )}
                                    style={{
                                        backgroundColor: item.active ? colors[activeColor] : 'transparent',
                                    }}
                                >
                                    <Icon
                                        name={item.icon}
                                        size="sm"
                                        color={item.active ? 'ice' : (textColor as ColorOption)}
                                    />
                                </div>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        );
    }
);

Navbar.displayName = 'Navbar';

export { Navbar };
