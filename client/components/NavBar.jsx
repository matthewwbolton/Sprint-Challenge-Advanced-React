import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import styled from 'styled-components';

const NewNav = styled.nav`
max-width: -webkit-fill-available;
`;



const NavBar = () => {
    
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    
    return (
        <NewNav className='navbar'>
            <h1>2019 FIFA Women's World Cup</h1>
            <Link to='/'>2019 Women's World Cup Players</Link>
            <Link to='/teams'>2019 Women's World Cup Teams</Link>
            <div className="dark-mode__toggle">
            <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            </div>
        </NewNav>
    );
};

export default NavBar;