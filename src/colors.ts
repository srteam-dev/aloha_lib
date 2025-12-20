/**
 * Paleta de colores de Aloha UI
 * Importa estos colores para usarlos en tus componentes
 * 
 * @example
 * import { colors, cssVars } from '@srteam-dev/aloha-ui';
 * 
 * // Usar con valor hexadecimal directo
 * <div style={{ backgroundColor: colors.olivo }}>
 *   Contenido
 * </div>
 * 
 * // Usar con variable CSS
 * <div style={{ backgroundColor: cssVars.olivo }}>
 *   Contenido
 * </div>
 */

export const colors = {
  olivo: '#383517',
  lima: '#B4DE6E',
  bosque: '#648C2C',
  hueso: '#F5F5DC',
  piedra: '#4A443F',
  corteza: '#6B5B3E',
  girasol: '#FFD400',
  coral: '#FF6F61',
  aqua: '#66FFCC',
  lavanda: '#B388D3',
  electrico: '#0084FF',
} as const;

/**
 * Variables CSS para usar los colores
 * Usa estas variables para aprovechar las CSS custom properties
 * 
 * @example
 * import { cssVars } from '@srteam-dev/aloha-ui';
 * 
 * <div style={{ backgroundColor: cssVars.olivo }}>
 *   Contenido con variable CSS
 * </div>
 */
export const cssVars = {
  olivo: 'var(--colors-olivo)',
  lima: 'var(--colors-lima)',
  bosque: 'var(--colors-bosque)',
  hueso: 'var(--colors-hueso)',
  piedra: 'var(--colors-piedra)',
  corteza: 'var(--colors-corteza)',
  girasol: 'var(--colors-girasol)',
  coral: 'var(--colors-coral)',
  aqua: 'var(--colors-aqua)',
  lavanda: 'var(--colors-lavanda)',
  electrico: 'var(--colors-electrico)',
} as const;

export type ColorName = keyof typeof colors;
export type ColorValue = typeof colors[ColorName];

/**
 * Obtiene el valor hexadecimal de un color por su nombre
 */
export const getColor = (colorName: ColorName): ColorValue => {
  return colors[colorName];
};

/**
 * Lista de todos los colores disponibles
 */
export const colorEntries = Object.entries(colors) as [ColorName, ColorValue][];

/**
 * Obtiene la variable CSS de un color por su nombre
 */
export const getCssVar = (colorName: ColorName): string => {
  return cssVars[colorName];
};

/**
 * Variables CSS para el tema (se adaptan automáticamente a modo claro/oscuro)
 * 
 * Modo claro:
 * - background: hueso (#F5F5DC)
 * - text: olivo (#383517)
 * - highlight: corteza (#6B5B3E)
 * - primary: lima (#B4DE6E)
 * 
 * Modo oscuro:
 * - background: piedra (#4A443F)
 * - text: hueso (#F5F5DC)
 * - highlight: corteza (#6B5B3E)
 * - primary: bosque (#648C2C)
 * 
 * @example
 * import { themeVars } from '@srteam-dev/aloha-ui';
 * 
 * <div style={{ 
 *   backgroundColor: themeVars.background,
 *   color: themeVars.text 
 * }}>
 *   Este div se adapta automáticamente al tema
 * </div>
 */
export const themeVars = {
  background: 'var(--theme-background)',
  text: 'var(--theme-text)',
  highlight: 'var(--theme-highlight)',
  primary: 'var(--theme-primary)',
} as const;

export type ThemeName = keyof typeof themeVars;
