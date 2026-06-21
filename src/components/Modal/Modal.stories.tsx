import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { P } from '../Typography';

const meta = {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalDefaultWrapper = (args: React.ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
            <Button color="bosque" onClick={() => setIsOpen(false)}>Publicar</Button>
          </>
        }
      />
    </>
  );
};

export const Default: Story = {
  args: {
    title: 'Overlay/Modal',
    size: 'md',
    children: (
      <P className="m-0">
        Este es el cuerpo del modal. Aquí puedes añadir formularios, textos, imágenes o cualquier contenido que necesites mostrar.
      </P>
    ),
  },
  render: (args) => <ModalDefaultWrapper {...args} />,
};

const ModalSmallWrapper = (args: React.ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Confirmación</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>No</Button>
            <Button color="coral" onClick={() => setIsOpen(false)}>Sí, eliminar</Button>
          </>
        }
      />
    </>
  );
};

export const Small: Story = {
  args: {
    title: 'Overlay/Modal',
    size: 'sm',
    children: (
      <P className="m-0">
        ¿Estás seguro de que deseas eliminar esta publicación permanentemente? Esta acción no se puede deshacer.
      </P>
    ),
  },
  render: (args) => <ModalSmallWrapper {...args} />,
};
