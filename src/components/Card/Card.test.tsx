import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

describe('Card components suite', () => {
  test('renders Card and child elements correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título de Tarjeta</CardTitle>
          <CardDescription>Descripción corta</CardDescription>
        </CardHeader>
        <CardContent>Contenido de la tarjeta</CardContent>
        <CardFooter>Pie de tarjeta</CardFooter>
      </Card>
    );

    expect(screen.getByText('Título de Tarjeta')).toBeInTheDocument();
    expect(screen.getByText('Descripción corta')).toBeInTheDocument();
    expect(screen.getByText('Contenido de la tarjeta')).toBeInTheDocument();
    expect(screen.getByText('Pie de tarjeta')).toBeInTheDocument();
  });
});
