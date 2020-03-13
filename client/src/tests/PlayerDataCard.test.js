import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import PlayerDataCard from '../components/PlayerDataCard';

test('does the PlayerDataCard component render on the page', () => {
    render(<PlayerDataCard />);
});

test('header elements render on the page', () => {
    const { findByText } = render(<PlayerDataCard />);

    const h2 = findByText(/player name:/i);
    const h3 = findByText(/player country:/i);
    const h4 = findByText(/number of searches:/i);

});

test(`how many divs are rendered on the page`, () => {
    const { queryAllByText } = render(<PlayerDataCard />);

    const divs = queryAllByText(/fifa code:/i);
})