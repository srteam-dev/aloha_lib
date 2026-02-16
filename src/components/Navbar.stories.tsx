import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { colorEntries } from '../colors';

const meta = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['nologin', 'onlogin'],
        },
        logoVariant: {
            control: 'select',
            options: ['horizontal', 'vertical', 'icon'],
        },
        logoSize: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        backgroundColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        textColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        activeColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        navItemsBgColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        buttonColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        buttonTextColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        buttonBorderColor: {
            control: 'select',
            options: colorEntries.map(([name]) => name),
        },
        currentLanguage: {
            control: 'text',
        },
        isRegister: {
            control: 'boolean',
        },
        buttonText: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// VARIANTE NOLOGIN
// ============================================

// Versión Login (como la imagen original)
export const NoLogin_Login: Story = {
    args: {
        variant: 'nologin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        backgroundColor: 'hueso',
        textColor: 'piedra',
        currentLanguage: 'ES',
        isRegister: false,
        onLanguageClick: () => alert('Cambiar idioma'),
        onActionClick: () => alert('Iniciar sesión'),
    },
};

// Versión Register
export const NoLogin_Register: Story = {
    args: {
        variant: 'nologin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        backgroundColor: 'hueso',
        textColor: 'piedra',
        currentLanguage: 'ES',
        isRegister: true,
        onLanguageClick: () => alert('Cambiar idioma'),
        onActionClick: () => alert('Registrarse'),
    },
};

// Login con botón de fondo de color
export const NoLogin_WithColoredButton: Story = {
    args: {
        variant: 'nologin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        backgroundColor: 'hueso',
        textColor: 'piedra',
        buttonColor: 'bosque',
        buttonTextColor: 'ice',
        currentLanguage: 'ES',
        isRegister: false,
        onLanguageClick: () => alert('Cambiar idioma'),
        onActionClick: () => alert('Iniciar sesión'),
    },
};

// Fondo oscuro
export const NoLogin_DarkBackground: Story = {
    args: {
        variant: 'nologin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        backgroundColor: 'piedra',
        textColor: 'ice',
        logoColor: 'ice',
        buttonBorderColor: 'ice',
        currentLanguage: 'EN',
        isRegister: false,
        onLanguageClick: () => alert('Change language'),
        onActionClick: () => alert('Sign In'),
    },
};

// ============================================
// VARIANTE ONLOGIN
// ============================================

// OnLogin básico (como la imagen) - Home activo
export const OnLogin_HomeActive: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'piedra',
        activeColor: 'bosque',
        navItemsBgColor: 'hueso',
        navItems: [
            { icon: 'home', label: 'Home', active: true, to: '/', onClick: () => alert('Home') },
            { icon: 'friends', label: 'Friends', active: false, to: '/friends', onClick: () => alert('Friends') },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats', onClick: () => alert('Chats') },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings', onClick: () => alert('Settings') },
        ],
        navigate: (path: string) => alert(`Navegando a: ${path}`),
    },
};

// OnLogin - Friends activo
export const OnLogin_FriendsActive: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'piedra',
        activeColor: 'coral',
        navItemsBgColor: 'hueso',
        navItems: [
            { icon: 'home', label: 'Home', active: false, to: '/' },
            { icon: 'friends', label: 'Friends', active: true, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats' },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings' },
        ],
        navigate: (path: string) => console.log(`Navegando a: ${path}`),
    },
};

// OnLogin - Chats activo
export const OnLogin_ChatsActive: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'piedra',
        activeColor: 'electrico',
        navItemsBgColor: 'hueso',
        navItems: [
            { icon: 'home', label: 'Home', active: false, to: '/' },
            { icon: 'friends', label: 'Friends', active: false, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: true, to: '/chats' },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings' },
        ],
    },
};

// OnLogin - Settings activo
export const OnLogin_SettingsActive: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'piedra',
        activeColor: 'lavanda',
        navItemsBgColor: 'hueso',
        navItems: [
            { icon: 'home', label: 'Home', active: false, to: '/' },
            { icon: 'friends', label: 'Friends', active: false, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats' },
            { icon: 'settings', label: 'Settings', active: true, to: '/settings' },
        ],
    },
};

// OnLogin con fondo de items diferente
export const OnLogin_GreenItems: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'olivo',
        activeColor: 'coral',
        navItemsBgColor: 'lima',
        navItems: [
            { icon: 'home', label: 'Home', active: false, to: '/' },
            { icon: 'friends', label: 'Friends', active: true, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats' },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings' },
        ],
    },
};

// OnLogin con items oscuros
export const OnLogin_DarkItems: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        logoColor: 'ice',
        textColor: 'ice',
        activeColor: 'lima',
        navItemsBgColor: 'piedra',
        navItems: [
            { icon: 'home', label: 'Home', active: true, to: '/' },
            { icon: 'friends', label: 'Friends', active: false, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats' },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings' },
        ],
    },
};

// OnLogin con más items
export const OnLogin_Extended: Story = {
    args: {
        variant: 'onlogin',
        logoVariant: 'horizontal',
        logoSize: 'sm',
        textColor: 'piedra',
        activeColor: 'bosque',
        navItemsBgColor: 'hueso',
        navItems: [
            { icon: 'home', label: 'Home', active: true, to: '/' },
            { icon: 'friends', label: 'Friends', active: false, to: '/friends' },
            { icon: 'chat', label: 'Chats', active: false, to: '/chats' },
            { icon: 'mail', label: 'Mail', active: false, to: '/mail' },
            { icon: 'notify', label: 'Notifications', active: false, to: '/notifications' },
            { icon: 'settings', label: 'Settings', active: false, to: '/settings' },
        ],
    },
};

// OnLogin con diferentes colores de borde activo
export const OnLogin_DifferentActiveColors: Story = {
    render: () => (
        <div className="flex flex-col gap-0">
            <Navbar
                variant="onlogin"
                textColor="piedra"
                activeColor="bosque"
                navItemsBgColor="hueso"
                navItems={[
                    { icon: 'home', label: 'Home', active: true },
                    { icon: 'friends', label: 'Friends', active: false },
                    { icon: 'chat', label: 'Chats', active: false },
                    { icon: 'settings', label: 'Settings', active: false },
                ]}
            />
            <Navbar
                variant="onlogin"
                textColor="piedra"
                activeColor="coral"
                navItemsBgColor="ice"
                navItems={[
                    { icon: 'home', label: 'Home', active: false },
                    { icon: 'friends', label: 'Friends', active: true },
                    { icon: 'chat', label: 'Chats', active: false },
                    { icon: 'settings', label: 'Settings', active: false },
                ]}
            />
            <Navbar
                variant="onlogin"
                textColor="piedra"
                activeColor="electrico"
                navItemsBgColor="hueso"
                navItems={[
                    { icon: 'home', label: 'Home', active: false },
                    { icon: 'friends', label: 'Friends', active: false },
                    { icon: 'chat', label: 'Chats', active: true },
                    { icon: 'settings', label: 'Settings', active: false },
                ]}
            />
            <Navbar
                variant="onlogin"
                textColor="piedra"
                activeColor="lavanda"
                navItemsBgColor="ice"
                navItems={[
                    { icon: 'home', label: 'Home', active: false },
                    { icon: 'friends', label: 'Friends', active: false },
                    { icon: 'chat', label: 'Chats', active: false },
                    { icon: 'settings', label: 'Settings', active: true },
                ]}
            />
        </div>
    ),
};

// ============================================
// COMPARACIONES
// ============================================

// Comparación de ambas variantes
export const Comparison_BothVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4 p-4" style={{ backgroundColor: '#f0f0f0' }}>
            <div>
                <h3 className="text-sm font-bold mb-2 text-piedra">Variante: nologin</h3>
                <Navbar
                    variant="nologin"
                    backgroundColor="hueso"
                    textColor="piedra"
                    currentLanguage="ES"
                    isRegister={false}
                />
            </div>
            <div>
                <h3 className="text-sm font-bold mb-2 text-piedra">Variante: onlogin</h3>
                <Navbar
                    variant="onlogin"
                    textColor="piedra"
                    activeColor="bosque"
                    navItemsBgColor="hueso"
                    navItems={[
                        { icon: 'home', label: 'Home', active: true },
                        { icon: 'friends', label: 'Friends', active: false },
                        { icon: 'chat', label: 'Chats', active: false },
                        { icon: 'settings', label: 'Settings', active: false },
                    ]}
                />
            </div>
        </div>
    ),
};
