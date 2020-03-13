import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WorldCupTeams from '../components/WorldCupTeams';

test('does the WorldCupTeams component render on the page', () => {
    render(<WorldCupTeams />);
});