// Main exports
export { Button, buttonVariants, type ButtonProps } from './components/Button';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/Card';
export { Avatar, type AvatarProps } from './components/Avatar';
export { Badge, badgeVariants, type BadgeProps } from './components/Badge';
export { Input, type InputProps } from './components/Input';
export { Checkbox, type CheckboxProps } from './components/Checkbox';
export { Switch, type SwitchProps } from './components/Switch';
export { SearchInput, type SearchInputProps } from './components/SearchInput';
export { Notification, type NotificationProps } from './components/Notification';
export { Image, type ImageProps } from './components/Image';
export { Popup, type PopupProps } from './components/Popup';
export { Error, type ErrorProps } from './components/Error';
export { Loading, type LoadingProps } from './components/Loading';

// Typography
export { H1, H2, H3, H4, P, Subtitle, Lead, Small, Muted, type HeadingProps, type ParagraphProps, type SmallProps, type FontFamily, type FontWeight, type ColorOption } from './components/Typography';

// Layout
export { Grid, GridItem, type GridProps, type GridItemProps } from './components/Grid';
export { FullPage, type FullPageProps } from './components/FullPage';
export { LoadingFullScreen, type LoadingFullScreenProps } from './components/LoadingFullScreen';
export { ErrorFullScreen, type ErrorFullScreenProps } from './components/ErrorFullScreen';

// Utilities
export { cn } from './lib/utils';

// Colors
export { colors, cssVars, themeVars, getColor, getCssVar, colorEntries, type ColorName, type ColorValue, type ThemeName } from './colors';
export { ColorPalette, ColorSwatch, type ColorPaletteProps, type ColorSwatchProps } from './components/ColorPalette';

// Styles
import './styles/globals.css';
