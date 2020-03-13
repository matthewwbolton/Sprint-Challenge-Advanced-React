import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('does the navbar render to the window', () => {
    render(<NavBar />);
});