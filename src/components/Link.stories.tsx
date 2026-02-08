import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Este es un enlace',
  },
};

export const ReactRouterLink: Story = {
  args: {
    to: '/about',
    children: 'Enlace con React Router',
    color: 'piedra',
  },
};

export const WithAlwaysUnderline: Story = {
  args: {
    to: '/terms',
    children: 'Enlace siempre subrayado',
    underline: 'always',
  },
};

export const WithoutUnderline: Story = {
  args: {
    href: '#',
    children: 'Enlace sin subrayado',
    underline: 'none',
  },
};

export const CustomColor: Story = {
  args: {
    href: '#',
    children: 'Enlace color coral',
    color: 'coral',
  },
};

export const OlivoColor: Story = {
  args: {
    href: '#',
    children: 'Enlace color olivo',
    color: 'olivo',
    underline: 'always',
  },
};

export const BosqueColor: Story = {
  args: {
    to: '/forest',
    children: 'Enlace color bosque',
    color: 'bosque',
  },
};

export const PiedraColor: Story = {
  args: {
    to: '/details',
    children: 'Ver más detalles',
    color: 'piedra',
    underline: 'hover',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'Enlace externo (se abre en nueva pestaña)',
    external: true,
    color: 'electrico',
  },
};

export const WithIcon: Story = {
  args: {
    to: '/settings',
    children: (
      <>
        <span style={{ marginRight: '4px' }}>→</span>
        Ir a configuración
      </>
    ),
    color: 'piedra',
  },
};

export const InText: Story = {
  render: () => (
    <p style={{ maxWidth: '400px', lineHeight: '1.6' }}>
      Este es un párrafo de ejemplo que contiene un{' '}
      <Link to="/help" color="electrico">
        enlace con React Router
      </Link>
      {' '}y también un{' '}
      <Link href="#" color="coral">
        enlace tradicional
      </Link>
      {' '}que se integran perfectamente con el contenido.
    </p>
  ),
};

export const MultipleStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link to="/terms" color="olivo" underline="always">Términos y condiciones</Link>
      <Link to="/privacy" color="coral" underline="hover">Política de privacidad</Link>
      <Link to="/contact" color="bosque" underline="none">Contacto</Link>
      <Link href="https://help.example.com" external color="electrico" underline="hover">Ayuda</Link>
    </div>
  ),
};
