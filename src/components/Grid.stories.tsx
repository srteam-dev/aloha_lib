import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    gap: {
      control: 'number',
    },
    responsive: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'select',
      options: ['transparent', 'hueso', 'ice', 'lima', 'coral'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// BÁSICO
// ============================================

export const Basic: Story = {
  args: {
    columns: 3,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem backgroundColor="lima" padding={6} rounded="lg" flex align="center" justify="center">
        <div className="text-xl font-bold text-bosque">Item 1</div>
      </GridItem>
      <GridItem backgroundColor="coral" padding={6} rounded="lg" flex align="center" justify="center">
        <div className="text-xl font-bold text-white">Item 2</div>
      </GridItem>
      <GridItem backgroundColor="aqua" padding={6} rounded="lg" flex align="center" justify="center">
        <div className="text-xl font-bold text-white">Item 3</div>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// BENTO UI - ESTILO 1
// ============================================

export const BentoStyle1: Story = {
  args: {},
  render: () => (
    <Grid columns={4} gap={4} className="max-w-6xl">
      {/* Item grande a la izquierda */}
      <GridItem
        colSpan={2}
        rowSpan={2}
        backgroundColor="bosque"
        padding={8}
        rounded="2xl"
        flex
        flexDirection="col"
        justify="between"
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Título Principal</h2>
          <p className="text-lime-100">Descripción del contenido principal aquí</p>
        </div>
        <button className="mt-4 px-6 py-2 bg-white text-bosque rounded-lg font-semibold self-start">
          Acción
        </button>
      </GridItem>

      {/* Items pequeños a la derecha */}
      <GridItem backgroundColor="lima" padding={6} rounded="xl" flex align="center" justify="center">
        <div className="text-center">
          <div className="text-4xl font-bold text-bosque">24</div>
          <div className="text-sm text-olivo">Proyectos</div>
        </div>
      </GridItem>

      <GridItem backgroundColor="coral" padding={6} rounded="xl" flex align="center" justify="center">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">12K</div>
          <div className="text-sm text-white opacity-80">Usuarios</div>
        </div>
      </GridItem>

      <GridItem
        colSpan={2}
        backgroundColor="ice"
        padding={6}
        rounded="xl"
        flex
        flexDirection="col"
        justify="center"
      >
        <h3 className="text-xl font-bold text-electrico mb-2">Estadísticas</h3>
        <p className="text-piedra text-sm">Crecimiento del 23% este mes</p>
      </GridItem>

      {/* Fila inferior */}
      <GridItem
        colSpan={3}
        backgroundColor="lavanda"
        padding={6}
        rounded="xl"
        flex
        align="center"
        justify="between"
      >
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Progreso del Proyecto</h3>
          <p className="text-sm text-white opacity-80">75% completado</p>
        </div>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-lavanda">75%</span>
        </div>
      </GridItem>

      <GridItem backgroundColor="aqua" padding={6} rounded="xl" flex align="center" justify="center">
        <div className="text-center">
          <div className="text-4xl">🎉</div>
          <div className="text-sm text-white mt-2">¡Nuevo!</div>
        </div>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// BENTO UI - ESTILO 2
// ============================================

export const BentoStyle2: Story = {
  args: {},
  render: () => (
    <Grid columns={6} gap={4} className="max-w-6xl">
      {/* Header completo */}
      <GridItem
        colSpan={6}
        backgroundColor="bosque"
        padding={8}
        rounded="2xl"
        flex
        align="center"
        justify="between"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard Aloha</h1>
          <p className="text-lime-100">Bienvenido de vuelta</p>
        </div>
        <div className="w-16 h-16 bg-lima rounded-full"></div>
      </GridItem>

      {/* Segunda fila - 3 columnas iguales */}
      <GridItem colSpan={2} backgroundColor="coral" padding={6} rounded="xl" flex flexDirection="col">
        <div className="text-5xl mb-3">📊</div>
        <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
        <p className="text-sm text-white opacity-80">Ver métricas</p>
      </GridItem>

      <GridItem colSpan={2} backgroundColor="lima" padding={6} rounded="xl" flex flexDirection="col">
        <div className="text-5xl mb-3">💼</div>
        <h3 className="text-xl font-bold text-bosque mb-2">Proyectos</h3>
        <p className="text-sm text-olivo">Gestionar</p>
      </GridItem>

      <GridItem colSpan={2} backgroundColor="aqua" padding={6} rounded="xl" flex flexDirection="col">
        <div className="text-5xl mb-3">👥</div>
        <h3 className="text-xl font-bold text-white mb-2">Equipo</h3>
        <p className="text-sm text-white opacity-80">Ver miembros</p>
      </GridItem>

      {/* Tercera fila - Mix */}
      <GridItem
        colSpan={4}
        backgroundColor="ice"
        padding={8}
        rounded="2xl"
        flex
        flexDirection="col"
      >
        <h2 className="text-2xl font-bold text-electrico mb-4">Actividad Reciente</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lima rounded-full"></div>
            <div>
              <div className="font-semibold text-piedra">Nuevo proyecto creado</div>
              <div className="text-sm text-piedra opacity-60">Hace 2 horas</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral rounded-full"></div>
            <div>
              <div className="font-semibold text-piedra">Tarea completada</div>
              <div className="text-sm text-piedra opacity-60">Hace 5 horas</div>
            </div>
          </div>
        </div>
      </GridItem>

      <GridItem
        colSpan={2}
        backgroundColor="lavanda"
        padding={6}
        rounded="2xl"
        flex
        flexDirection="col"
        justify="center"
        align="center"
      >
        <div className="text-6xl font-bold text-white mb-2">42</div>
        <div className="text-white opacity-80">Tareas Pendientes</div>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// BENTO UI - ESTILO 3 (ASIMÉTRICO)
// ============================================

export const BentoAsymmetric: Story = {
  args: {},
  render: () => (
    <Grid columns={5} gap={4} className="max-w-6xl">
      <GridItem
        colSpan={2}
        rowSpan={2}
        backgroundColor="electrico"
        padding={8}
        rounded="2xl"
        flex
        flexDirection="col"
        justify="between"
      >
        <div>
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-white mb-2">Lanzamiento</h2>
          <p className="text-white opacity-80">Próximamente...</p>
        </div>
        <div className="mt-4 text-sm text-white">23 de Febrero</div>
      </GridItem>

      <GridItem colSpan={3} backgroundColor="lima" padding={6} rounded="xl">
        <h3 className="text-xl font-bold text-bosque mb-2">Banner Promocional</h3>
        <p className="text-olivo">¡Aprovecha nuestras ofertas especiales!</p>
      </GridItem>

      <GridItem backgroundColor="coral" padding={6} rounded="xl" flex align="center" justify="center">
        <div className="text-3xl font-bold text-white">15%</div>
      </GridItem>

      <GridItem colSpan={2} backgroundColor="ice" padding={6} rounded="xl">
        <h3 className="text-lg font-bold text-electrico mb-2">Notificaciones</h3>
        <div className="space-y-2">
          <div className="text-sm text-piedra">• Nuevo mensaje</div>
          <div className="text-sm text-piedra">• Actualización disponible</div>
        </div>
      </GridItem>

      <GridItem
        colSpan={5}
        backgroundColor="hueso"
        padding={6}
        rounded="xl"
        flex
        align="center"
        justify="center"
      >
        <p className="text-piedra text-center">
          Footer completo con información adicional
        </p>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// GALERÍA DE IMÁGENES
// ============================================

export const ImageGallery: Story = {
  args: {},
  render: () => (
    <Grid columns={4} gap={3} className="max-w-6xl">
      <GridItem colSpan={2} rowSpan={2} backgroundColor="bosque" padding={0} rounded="xl" className="overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white text-2xl">
          Imagen Principal
        </div>
      </GridItem>

      <GridItem backgroundColor="lima" padding={0} rounded="lg" className="overflow-hidden h-40">
        <div className="w-full h-full flex items-center justify-center text-bosque">Imagen 2</div>
      </GridItem>

      <GridItem backgroundColor="coral" padding={0} rounded="lg" className="overflow-hidden h-40">
        <div className="w-full h-full flex items-center justify-center text-white">Imagen 3</div>
      </GridItem>

      <GridItem backgroundColor="aqua" padding={0} rounded="lg" className="overflow-hidden h-40">
        <div className="w-full h-full flex items-center justify-center text-white">Imagen 4</div>
      </GridItem>

      <GridItem backgroundColor="lavanda" padding={0} rounded="lg" className="overflow-hidden h-40">
        <div className="w-full h-full flex items-center justify-center text-white">Imagen 5</div>
      </GridItem>

      <GridItem colSpan={2} backgroundColor="ice" padding={0} rounded="lg" className="overflow-hidden h-32">
        <div className="w-full h-full flex items-center justify-center text-electrico">Imagen 6</div>
      </GridItem>

      <GridItem colSpan={2} backgroundColor="hueso" padding={0} rounded="lg" className="overflow-hidden h-32">
        <div className="w-full h-full flex items-center justify-center text-piedra">Imagen 7</div>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// PRICING TABLE
// ============================================

export const PricingTable: Story = {
  args: {},
  render: () => (
    <Grid columns={3} gap={6} className="max-w-6xl">
      {/* Plan Básico */}
      <GridItem backgroundColor="hueso" padding={8} rounded="2xl" flex flexDirection="col">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-piedra mb-2">Básico</h3>
          <div className="text-5xl font-bold text-bosque mb-2">$9</div>
          <div className="text-piedra opacity-60">/mes</div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="text-piedra">✓ 5 Proyectos</div>
          <div className="text-piedra">✓ 10GB Almacenamiento</div>
          <div className="text-piedra">✓ Soporte por email</div>
        </div>
        <button className="mt-auto px-6 py-3 bg-bosque text-white rounded-lg font-semibold hover:bg-olivo transition-colors">
          Comenzar
        </button>
      </GridItem>

      {/* Plan Pro (destacado) */}
      <GridItem backgroundColor="bosque" padding={8} rounded="2xl" flex flexDirection="col" className="transform scale-105 shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 bg-lima text-bosque text-xs font-bold rounded-full mb-3">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <div className="text-5xl font-bold text-lima mb-2">$29</div>
          <div className="text-white opacity-80">/mes</div>
        </div>
        <div className="space-y-3 mb-6 text-white">
          <div>✓ Proyectos ilimitados</div>
          <div>✓ 100GB Almacenamiento</div>
          <div>✓ Soporte prioritario</div>
          <div>✓ Analíticas avanzadas</div>
        </div>
        <button className="mt-auto px-6 py-3 bg-lima text-bosque rounded-lg font-semibold hover:bg-lime-400 transition-colors">
          Comenzar
        </button>
      </GridItem>

      {/* Plan Enterprise */}
      <GridItem backgroundColor="hueso" padding={8} rounded="2xl" flex flexDirection="col">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-piedra mb-2">Enterprise</h3>
          <div className="text-5xl font-bold text-bosque mb-2">$99</div>
          <div className="text-piedra opacity-60">/mes</div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="text-piedra">✓ Todo de Pro</div>
          <div className="text-piedra">✓ 1TB Almacenamiento</div>
          <div className="text-piedra">✓ Soporte 24/7</div>
          <div className="text-piedra">✓ API Access</div>
        </div>
        <button className="mt-auto px-6 py-3 bg-bosque text-white rounded-lg font-semibold hover:bg-olivo transition-colors">
          Contactar
        </button>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// FEATURE SHOWCASE
// ============================================

export const FeatureShowcase: Story = {
  args: {},
  render: () => (
    <Grid columns={3} gap={5} className="max-w-6xl">
      <GridItem
        colSpan={3}
        backgroundColor="bosque"
        padding={10}
        rounded="2xl"
        flex
        flexDirection="col"
        align="center"
      >
        <h1 className="text-5xl font-bold text-white mb-4">Nuestras Características</h1>
        <p className="text-lime-100 text-xl">Todo lo que necesitas en un solo lugar</p>
      </GridItem>

      <GridItem
        colSpan={2}
        backgroundColor="lima"
        padding={8}
        rounded="xl"
        flex
        flexDirection="col"
        justify="between"
      >
        <div>
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="text-3xl font-bold text-bosque mb-3">Rápido y Eficiente</h2>
          <p className="text-olivo text-lg">
            Optimizado para la máxima velocidad y rendimiento en todas tus tareas.
          </p>
        </div>
      </GridItem>

      <GridItem backgroundColor="coral" padding={6} rounded="xl" flex flexDirection="col" justify="center" align="center">
        <div className="text-5xl mb-3">🔒</div>
        <h3 className="text-xl font-bold text-white mb-2">Seguro</h3>
        <p className="text-white opacity-80 text-center text-sm">Protección total</p>
      </GridItem>

      <GridItem backgroundColor="aqua" padding={6} rounded="xl" flex flexDirection="col" justify="center" align="center">
        <div className="text-5xl mb-3">🎨</div>
        <h3 className="text-xl font-bold text-white mb-2">Bonito</h3>
        <p className="text-white opacity-80 text-center text-sm">Diseño moderno</p>
      </GridItem>

      <GridItem
        colSpan={2}
        backgroundColor="lavanda"
        padding={8}
        rounded="xl"
        flex
        flexDirection="col"
        justify="between"
      >
        <div>
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-white mb-3">Escalable</h2>
          <p className="text-white opacity-90 text-lg">
            Crece con tu negocio sin limitaciones ni complicaciones.
          </p>
        </div>
      </GridItem>
    </Grid>
  ),
};

// ============================================
// AUTO-FIT GRID
// ============================================

export const AutoFitGrid: Story = {
  args: {},
  render: () => (
    <Grid autoFit="250px" gap={4} className="max-w-6xl">
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem
          key={i}
          backgroundColor={['lima', 'coral', 'aqua', 'lavanda'][i % 4]}
          padding={6}
          rounded="xl"
          flex
          align="center"
          justify="center"
        >
          <div className="text-xl font-bold text-white">Item {i + 1}</div>
        </GridItem>
      ))}
    </Grid>
  ),
};

// ============================================
// COMPLEX LAYOUT
// ============================================

export const ComplexLayout: Story = {
  args: {},
  render: () => (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <Grid columns={12} gap={4}>
        <GridItem colSpan={12} backgroundColor="bosque" padding={6} rounded="xl">
          <h1 className="text-3xl font-bold text-white">Mi Aplicación</h1>
        </GridItem>
      </Grid>

      {/* Contenido principal */}
      <Grid columns={12} gap={4}>
        {/* Sidebar */}
        <GridItem colSpan={3} backgroundColor="hueso" padding={5} rounded="xl">
          <h2 className="font-bold text-piedra mb-4">Navegación</h2>
          <div className="space-y-2">
            <div className="p-2 bg-bosque text-white rounded">Dashboard</div>
            <div className="p-2 hover:bg-ice rounded cursor-pointer">Proyectos</div>
            <div className="p-2 hover:bg-ice rounded cursor-pointer">Equipo</div>
            <div className="p-2 hover:bg-ice rounded cursor-pointer">Configuración</div>
          </div>
        </GridItem>

        {/* Contenido */}
        <GridItem colSpan={9}>
          <Grid columns={3} gap={4}>
            <GridItem backgroundColor="lima" padding={6} rounded="lg">
              <h3 className="font-bold text-bosque mb-2">Card 1</h3>
              <p className="text-olivo text-sm">Contenido de la tarjeta</p>
            </GridItem>
            <GridItem backgroundColor="coral" padding={6} rounded="lg">
              <h3 className="font-bold text-white mb-2">Card 2</h3>
              <p className="text-white opacity-80 text-sm">Contenido de la tarjeta</p>
            </GridItem>
            <GridItem backgroundColor="aqua" padding={6} rounded="lg">
              <h3 className="font-bold text-white mb-2">Card 3</h3>
              <p className="text-white opacity-80 text-sm">Contenido de la tarjeta</p>
            </GridItem>
            <GridItem colSpan={3} backgroundColor="lavanda" padding={8} rounded="lg">
              <h2 className="text-2xl font-bold text-white mb-3">Sección Principal</h2>
              <p className="text-white opacity-90">
                Este es el contenido principal de la página con información importante.
              </p>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  ),
};
