import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from './Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['full', 'constrained', 'auto'],
      description: 'Tamaño de la card',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Borde redondeado',
    },
    showBorder: {
      control: 'boolean',
      description: 'Mostrar borde',
    },
    backgroundColor: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'marmol', 'ice', 'koala'
      ],
      description: 'Color de fondo',
    },
    borderColor: {
      control: 'select',
      options: [
        'default',
        'olivo', 'lima', 'bosque', 'hueso', 'piedra', 'corteza',
        'girasol', 'coral', 'aqua', 'lavanda', 'electrico',
        'marmol', 'ice', 'koala'
      ],
      description: 'Color del borde',
    },
    shadow: {
      control: 'boolean',
      description: 'Mostrar sombra',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'auto',
    borderRadius: 'lg',
    showBorder: true,
    backgroundColor: 'default',
    borderColor: 'default',
    shadow: true,
  },
  render: (args) => (
    <Card
      size={args.size}
      borderRadius={args.borderRadius}
      showBorder={args.showBorder}
      backgroundColor={args.backgroundColor}
      borderColor={args.borderColor}
      shadow={args.shadow}
      className="w-[350px]"
    >
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

// Playground interactivo
export const Playground: Story = {
  args: {
    size: 'auto',
    borderRadius: 'lg',
    showBorder: true,
    backgroundColor: 'default',
    borderColor: 'default',
    shadow: true,
  },
  render: (args) => (
    <Card
      size={args.size}
      borderRadius={args.borderRadius}
      showBorder={args.showBorder}
      backgroundColor={args.backgroundColor}
      borderColor={args.borderColor}
      shadow={args.shadow}
      className="w-[350px]"
    >
      <CardHeader>
        <CardTitle>Playground Card</CardTitle>
        <CardDescription>Experimenta con los controles</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cambia las opciones en los controles para ver los cambios.</p>
      </CardContent>
      <CardFooter>
        <Button>Acción</Button>
      </CardFooter>
    </Card>
  ),
};

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Card size="full" className="p-4">
        <p className="text-center font-bold">Full Width (w-full)</p>
      </Card>
      <Card size="constrained" className="p-4">
        <p className="text-center font-bold">Constrained (max-w-md)</p>
      </Card>
      <Card size="auto" className="p-4">
        <p className="text-center font-bold">Auto (w-auto)</p>
      </Card>
    </div>
  ),
};

// Tipos de bordes
export const BorderVariations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card borderRadius="none" className="p-4">
        <p className="text-center text-sm">None</p>
      </Card>
      <Card borderRadius="sm" className="p-4">
        <p className="text-center text-sm">Small</p>
      </Card>
      <Card borderRadius="md" className="p-4">
        <p className="text-center text-sm">Medium</p>
      </Card>
      <Card borderRadius="lg" className="p-4">
        <p className="text-center text-sm">Large</p>
      </Card>
      <Card borderRadius="xl" className="p-4">
        <p className="text-center text-sm">XL</p>
      </Card>
      <Card borderRadius="full" className="p-8">
        <p className="text-center text-sm">Full</p>
      </Card>
    </div>
  ),
};

// Colores de fondo
export const BackgroundColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card backgroundColor="hueso" className="p-4">
        <p className="text-center font-bold">Hueso</p>
      </Card>
      <Card backgroundColor="lima" className="p-4">
        <p className="text-center font-bold">Lima</p>
      </Card>
      <Card backgroundColor="bosque" className="p-4 text-white">
        <p className="text-center font-bold">Bosque</p>
      </Card>
      <Card backgroundColor="coral" className="p-4 text-white">
        <p className="text-center font-bold">Coral</p>
      </Card>
      <Card backgroundColor="aqua" className="p-4">
        <p className="text-center font-bold">Aqua</p>
      </Card>
      <Card backgroundColor="lavanda" className="p-4 text-white">
        <p className="text-center font-bold">Lavanda</p>
      </Card>
    </div>
  ),
};

// Colores de borde
export const BorderColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card borderColor="bosque" className="p-4 border-2">
        <p className="text-center">Bosque</p>
      </Card>
      <Card borderColor="coral" className="p-4 border-2">
        <p className="text-center">Coral</p>
      </Card>
      <Card borderColor="electrico" className="p-4 border-2">
        <p className="text-center">Eléctrico</p>
      </Card>
    </div>
  ),
};

// Sin borde
export const NoBorder: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card showBorder={true} className="p-4">
        <p className="text-center">Con Borde</p>
      </Card>
      <Card showBorder={false} className="p-4">
        <p className="text-center">Sin Borde</p>
      </Card>
    </div>
  ),
};

// Títulos personalizados
export const CustomTitles: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Card>
        <CardHeader>
          <CardTitle component="h1" titleColor="bosque" weight="black">
            Title H1
          </CardTitle>
          <CardDescription>Con componente H1 y color bosque</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle component="h2" font="jetbrains" titleColor="electrico">
            Title H2
          </CardTitle>
          <CardDescription>Con JetBrains Mono y color eléctrico</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle component="h4" weight="light" titleColor="coral">
            Title H4
          </CardTitle>
          <CardDescription small font="jetbrains">
            Descripción pequeña con JetBrains
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
};

// Contenido personalizado
export const CustomContent: Story = {
  render: () => (
    <Card size="constrained" backgroundColor="marmol" borderColor="koala">
      <CardHeader>
        <CardTitle component="h2" titleColor="bosque" weight="bold">
          Tarjeta Premium
        </CardTitle>
        <CardDescription descriptionColor="piedra" weight="medium">
          Con todo customizado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">✓ Fondo personalizado (marmol)</p>
          <p className="text-sm">✓ Borde personalizado (koala)</p>
          <p className="text-sm">✓ Título con Typography</p>
          <p className="text-sm">✓ Descripción con Typography</p>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Confirmar</Button>
      </CardFooter>
    </Card>
  ),
};

// Ejemplo completo
export const CompleteExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Card
        size="auto"
        borderRadius="xl"
        backgroundColor="hueso"
        borderColor="bosque"
        className="border-2"
      >
        <CardHeader>
          <CardTitle component="h3" titleColor="bosque" weight="black">
            Perfil de Usuario
          </CardTitle>
          <CardDescription weight="medium">
            Información del usuario actual
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Email:</strong> juan@example.com</p>
            <p><strong>Rol:</strong> Administrador</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Editar Perfil</Button>
        </CardFooter>
      </Card>

      <Card
        size="auto"
        borderRadius="lg"
        backgroundColor="electrico"
        showBorder={false}
        shadow={true}
        className="text-white"
      >
        <CardHeader>
          <CardTitle component="h3" titleColor="hueso" weight="bold">
            Notificación
          </CardTitle>
          <CardDescription descriptionColor="hueso" weight="light">
            Nuevo mensaje recibido
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Tienes 3 mensajes nuevos sin leer.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full bg-white text-blue-600">
            Ver Mensajes
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// Solo contenido (sin subcomponentes)
export const JustContent: Story = {
  render: () => (
    <Card
      size="constrained"
      backgroundColor="lavanda"
      borderRadius="xl"
      className="p-8 text-white text-center"
    >
      <h2 className="text-2xl font-bold mb-2">¡Bienvenido!</h2>
      <p className="text-sm">Esto es una card con contenido completamente personalizado</p>
      <p className="text-sm mt-4">Sin usar subcomponentes</p>
    </Card>
  ),
};
