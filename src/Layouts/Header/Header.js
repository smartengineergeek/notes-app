import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => (
    <div className="header">
        <NavLink to="/">Notes App</NavLink>
        <NavLink to="/create" className="create-navlink">
            <div className="create-btn">Create +</div>
        </NavLink>
    </div>
);

export const Footer = () => (
    <div className="footer">
        Developed in reactjs by Avinash Mahlawat
    </div>
);
