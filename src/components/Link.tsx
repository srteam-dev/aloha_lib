import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { cn } from '../lib/utils';

export type ColorOption = 
  | 'olivo' | 'lima' | 'bosque' | 'hueso' | 'piedra' | 'corteza' 
  | 'girasol' | 'coral' | 'aqua' | 'lavanda' | 'electrico'
  | 'marmol' | 'ice' | 'koala'
  | 'default';

export type UnderlineOption = 'none' | 'always' | 'hover';

const getColorClass = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'text-blue-600';
  
  const colorMap: Record<string, string> = {
    olivo: 'text-[#383517]',
    lima: 'text-[#B4DE6E]',
    bosque: 'text-[#648C2C]',
    hueso: 'text-[#F5F5DC]',
    piedra: 'text-[#4A443F]',
    corteza: 'text-[#6B5B3E]',
    girasol: 'text-[#FFD400]',
    coral: 'text-[#FF6F61]',
    aqua: 'text-[#66FFCC]',
    lavanda: 'text-[#B388D3]',
    electrico: 'text-[#0084FF]',
    marmol: 'text-[#D8D8C1]',
    ice: 'text-[#FEFEFC]',
    koala: 'text-[#A69C8A]',
  };
  
  return colorMap[color] || 'text-blue-600';
};

const getHoverColorClass = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'hover:text-blue-800';
  
  const colorMap: Record<string, string> = {
    olivo: 'hover:text-[#2a2811]',
    lima: 'hover:text-[#9bc95a]',
    bosque: 'hover:text-[#4f7023]',
    hueso: 'hover:text-[#e5e5cc]',
    piedra: 'hover:text-[#363230]',
    corteza: 'hover:text-[#564b33]',
    girasol: 'hover:text-[#e5be00]',
    coral: 'hover:text-[#e55b4d]',
    aqua: 'hover:text-[#52e5b8]',
    lavanda: 'hover:text-[#9f73bf]',
    electrico: 'hover:text-[#0070d9]',
    marmol: 'hover:text-[#c4c4ad]',
    ice: 'hover:text-[#eeeeea]',
    koala: 'hover:text-[#94897a]',
  };
  
  return colorMap[color] || 'hover:text-blue-800';
};

const getUnderlineClass = (underline: UnderlineOption): string => {
  switch (underline) {
    case 'always':
      return 'underline';
    case 'hover':
      return 'no-underline hover:underline';
    case 'none':
    default:
      return 'no-underline';
  }
};

type BaseLinkProps = {
  /** Color del texto del enlace */
  color?: ColorOption;
  /** Color del texto en hover (si no se especifica, usa una versión más oscura del color) */
  hoverColor?: ColorOption;
  /** Estilo del subrayado */
  underline?: UnderlineOption;
  /** Si se abre en una nueva pestaña (solo para enlaces externos con href) */
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
};

// Props cuando se usa con react-router (to)
type RouterLinkVariant = BaseLinkProps & {
  to: string | Partial<Location>;
  href?: never;
} & Omit<RouterLinkProps, 'to' | 'className' | 'children'>;

// Props cuando se usa como enlace normal (href)
type AnchorLinkVariant = BaseLinkProps & {
  href: string;
  to?: never;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

export type LinkProps = RouterLinkVariant | AnchorLinkVariant;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    children, 
    color = 'electrico', 
    hoverColor, 
    underline = 'hover',
    external = false,
    ...props 
  }, ref) => {
    const linkClasses = cn(
      'inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      getColorClass(color),
      hoverColor ? '' : getHoverColorClass(color),
      getUnderlineClass(underline),
      className
    );

    // Si tiene la prop "to", usar React Router Link
    if ('to' in props && props.to) {
      const { to, ...routerProps } = props;
      return (
        <RouterLink
          ref={ref}
          to={to}
          className={linkClasses}
          {...routerProps}
        >
          {children}
        </RouterLink>
      );
    }

    // Si tiene la prop "href", usar un <a> normal
    if ('href' in props && props.href) {
      const { href, target, rel, ...anchorProps } = props;
      const linkTarget = external ? '_blank' : target;
      const linkRel = external ? 'noopener noreferrer' : rel;

      return (
        <a
          ref={ref}
          href={href}
          className={linkClasses}
          target={linkTarget}
          rel={linkRel}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    // Fallback: devolver un span si no hay to ni href
    return (
      <span ref={ref as any} className={linkClasses}>
        {children}
      </span>
    );
  }
);

Link.displayName = 'Link';

export { Link };
