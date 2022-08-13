import React from 'react';
import { NavLink } from 'react-router-dom';
import N from './navBar.module.css';

let activeStyle = {
    textDecoration: 'underline'
};
const NavBar = () => {
    return (
        <div className={N.navBar}>
            <div className={N.links}>
                <div className={N.lk}><NavLink className={N.link} to={'/'} style={({isActive}) => isActive ? activeStyle : undefined}>Люстры</NavLink></div>
                <div className={N.lk}><NavLink className={N.link} to={'/luminaire'} style={({isActive}) => isActive ? activeStyle : undefined}>Светильники</NavLink></div>
                <div className={N.lk}><NavLink className={N.link} to={'/kabel'} style={({isActive}) => isActive ? activeStyle : undefined}>Кабели</NavLink></div>
            </div>
        </div>
    );
}

export default NavBar;
