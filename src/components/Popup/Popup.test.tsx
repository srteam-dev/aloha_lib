import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Popup } from './Popup';

describe('Popup component', () => {
  test('does not render when open is false', () => {
    render(
      <Popup open={false} onClose={() => {}}>
        Popup Content
      </Popup>
    );
    expect(screen.queryByText('Popup Content')).not.toBeInTheDocument();
  });

  test('renders title, content, and footer when open is true', () => {
    const handleClose = jest.fn();
    render(
      <Popup
        open={true}
        onClose={handleClose}
        title="Detalles"
        footer={<button>Cerrar Botón</button>}
      >
        Contenido del Popup
      </Popup>
    );

    expect(screen.getByText('Detalles')).toBeInTheDocument();
    expect(screen.getByText('Contenido del Popup')).toBeInTheDocument();
    expect(screen.getByText('Cerrar Botón')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText('Cerrar');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
