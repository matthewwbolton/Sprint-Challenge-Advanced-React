import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerDataCard from '../components/PlayerDataCard';

test('does the PlayerDataCard component render on the page', () => {
    render(<PlayerDataCard />);
});