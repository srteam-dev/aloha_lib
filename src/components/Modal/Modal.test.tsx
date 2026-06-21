import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from './Modal';

describe('Modal component', () => {
  test('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('renders dialog, title, children and footer actions', () => {
    const handleClose = jest.fn();
    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        title="Crear Post"
        footer={<button>Enviar</button>}
      >
        Contenido del modal
      </Modal>
    );

    expect(screen.getByText('Crear Post')).toBeInTheDocument();
    expect(screen.getByText('Contenido del modal')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText('Close modal');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
