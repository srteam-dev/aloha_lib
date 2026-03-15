import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarAttributes } from './Avatar';
import { getAvatarPartsByType } from './avatarParts';
import './Avatar.css';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Tamaño del avatar en píxeles',
      min: 50,
      max: 400,
      step: 10,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== AVATAR COMPOSITOR ==========

const mockAvatarConfig1: AvatarAttributes = {
  skinId: 1,
  eyebrowId: 1,
  eyesId: 1,
  facialHairId: 1,
  hairId: 1,
  mouthId: 1,
};

const mockAvatarConfig2: AvatarAttributes = {
  skinId: 3,
  eyebrowId: 3,
  eyesId: 5,
  hairId: 2,
  mouthId: 4,
};

const mockAvatarConfig3: AvatarAttributes = {
  skinId: 5,
  eyebrowId: 2,
  eyesId: 7,
  facialHairId: 1,
  hairId: 3,
  mouthId: 6,
};

export const Default: Story = {
  args: {
    emoji: mockAvatarConfig1,
    size: 150,
  },
  argTypes: {
    'emoji.skinId': {
      control: 'select',
      options: getAvatarPartsByType('skin').map(s => s.id),
      description: 'Selecciona el tono de piel (1-6)',
    },
    'emoji.eyesId': {
      control: 'select',
      options: getAvatarPartsByType('eyes').map(e => e.id),
      description: 'Selecciona los ojos (1-7)',
    },
    'emoji.eyebrowId': {
      control: 'select',
      options: getAvatarPartsByType('eyebrow').map(e => e.id),
      description: 'Selecciona las cejas (1-5)',
    },
    'emoji.mouthId': {
      control: 'select',
      options: getAvatarPartsByType('mouth').map(m => m.id),
      description: 'Selecciona la boca (1-8)',
    },
    'emoji.hairId': {
      control: 'select',
      options: getAvatarPartsByType('hair').map(h => h.id),
      description: 'Selecciona el cabello (1-3)',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar completamente personalizable - ajusta cada parte en tiempo real desde los controles',
      },
    },
  },
};

export const Small: Story = {
  args: {
    emoji: mockAvatarConfig1,
    size: 80,
  },
};

export const Medium: Story = {
  args: {
    emoji: mockAvatarConfig2,
    size: 150,
  },
};

export const Large: Story = {
  args: {
    emoji: mockAvatarConfig3,
    size: 250,
  },
};

export const Preview: Story = {
  args: {
    emoji: mockAvatarConfig1,
    size: 300,
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar en tamaño preview (300px)',
      },
    },
  },
};

// ========== CONTEXTOS Y VARIACIONES ==========

export const InPreviewContext: Story = {
  args: {
    emoji: mockAvatarConfig2,
    size: 300,
  },
  decorators: [
    (Story) => (
      <div className="avatar-preview" style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Avatar dentro de contexto avatar-preview (300px con fondo)',
      },
    },
  },
};

export const InMenuContext: Story = {
  args: {
    emoji: mockAvatarConfig2,
    size: 50,
  },
  decorators: [
    (Story) => (
      <div className="menu-icon" style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Avatar dentro de contexto menu-icon (50px circular)',
      },
    },
  },
};

export const AllSizesGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', marginBottom: '0.5rem', fontWeight: 'bold', color: '#666' }}>Extra Pequeño (50px)</p>
        <div className="menu-icon">
          <Avatar emoji={mockAvatarConfig1} size={50} />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', marginBottom: '0.5rem', fontWeight: 'bold', color: '#666' }}>Pequeño (80px)</p>
        <Avatar emoji={mockAvatarConfig1} size={80} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', marginBottom: '0.5rem', fontWeight: 'bold', color: '#666' }}>Medio (150px)</p>
        <Avatar emoji={mockAvatarConfig1} size={150} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', marginBottom: '0.5rem', fontWeight: 'bold', color: '#666' }}>Grande (250px)</p>
        <Avatar emoji={mockAvatarConfig1} size={250} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', marginBottom: '0.5rem', fontWeight: 'bold', color: '#666' }}>Preview (300px)</p>
        <div className="avatar-preview">
          <Avatar emoji={mockAvatarConfig1} size={300} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Galería con todos los tamaños disponibles',
      },
    },
  },
};

export const PersonalityVariations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Variación 1<br/><span style={{ fontSize: '12px', color: '#999' }}>Morado claro</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={mockAvatarConfig1} size={150} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Variación 2<br/><span style={{ fontSize: '12px', color: '#999' }}>Café oscuro</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={mockAvatarConfig2} size={150} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Variación 3<br/><span style={{ fontSize: '12px', color: '#999' }}>Bronceado cálido</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={mockAvatarConfig3} size={150} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Minimal<br/><span style={{ fontSize: '12px', color: '#999' }}>Solo piel y ojos</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={{ skinId: 2, eyesId: 4 }} size={150} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Con Barba<br/><span style={{ fontSize: '12px', color: '#999' }}>Facial hair included</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={{ 
            skinId: 4, 
            eyesId: 2,
            mouthId: 2,
            facialHairId: 1
          }} size={150} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>Completo<br/><span style={{ fontSize: '12px', color: '#999' }}>Todas las partes</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Avatar emoji={{
            skinId: 6,
            eyebrowId: 5,
            eyesId: 6,
            facialHairId: 1,
            hairId: 3,
            mouthId: 8
          }} size={150} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Galería de variaciones de personalidad con diferentes combinaciones',
      },
    },
  },
};

export const PartialCustomization: Story = {
  args: {
    emoji: {
      skinId: 2,
      eyesId: 4,
      mouthId: 3,
      // Sin cabello, sin barba, sin cejas
    },
    size: 150,
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar con solo algunas capas especificadas (sin cabello ni accesorios)',
      },
    },
  },
};

export const SkinToneShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap' }}>
      {getAvatarPartsByType('skin').map((skin) => (
        <div key={skin.id} style={{ textAlign: 'center' }}>
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '4px', 
              background: skin.color || '#ccc',
              marginBottom: '0.5rem',
              border: '2px solid #ddd'
            }} 
          />
          <p style={{ fontSize: '11px', color: '#666' }}>Skin {skin.id}</p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vitrina de todos los tonos de piel disponibles',
      },
    },
  },
};
