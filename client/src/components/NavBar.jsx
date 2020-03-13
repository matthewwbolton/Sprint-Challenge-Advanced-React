import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to='/'>2019 Women's World Cup Players</NavLink>
            <NavLink to='/teams'>2019 Women's World Cup Teams</NavLink>
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