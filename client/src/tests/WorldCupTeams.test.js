import React from 'react';
import { render } from '@testing-library/react';
import WorldCupTeams from '../components/WorldCupTeams';

test('does the WorldCupTeams component render on the page', () => {
    render(<WorldCupTeams />);
});

test('do header elements render on the page', () => {
    
    const { findByText } = render(<WorldCupTeams />);

    const h1 = findByText(/country:/i);
    const h2 = findByText(/fifa code:/i);
    const h3 = findByText(/group id:/i);
    const h3GroupLetter = findByText(/group letter:/i);
    

});

test('how many divs are rendered on the page', () => {
    const { queryAllByText } = render(<WorldCupTeams />);

    const divs = queryAllByText(/country:/i);

});

