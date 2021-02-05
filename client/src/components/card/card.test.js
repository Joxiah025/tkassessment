import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

test('renders learn react link', () => {
    render(<Card />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});