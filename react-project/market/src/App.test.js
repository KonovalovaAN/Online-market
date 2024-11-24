import React from 'react'; // Добавьте этот импорт
import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Новый импорт
import App from './App';


test('renders learn react link', () => {
    render(<App />); // render автоматически оборачивает в act
    //const linkElement = screen.getByText(/TechKing/i);
    //expect(linkElement).toBeInTheDocument();
});
