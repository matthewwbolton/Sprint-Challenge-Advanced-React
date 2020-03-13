import React from 'react';
import { render } from '@testing-library/react';
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

    const divs = queryAllByText(/player name:/i);
});

test('renders Player Name: on the component', () => {
    const { findByText } = render(<PlayerDataCard />);

    const playerName = findByText(/player name:/i);
    const playerCountry = findByText(/player country:/i);
    const numberOfSearches = findByText(/number of searches:/i);
}) 