import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gridMenu.css';

const GridMenu = () => {
    const navigate = useNavigate();

    const navigateToSection = (path) => {
        navigate(path);
    };

    return (
        <div className="grid-menu">
            <div className="grid-item portfolio" onClick={() => navigateToSection('/portfolio')}>
                Portfolio
            </div>
            <div className="grid-item aboutMe" onClick={() => navigateToSection('/about')}>
                About Me
            </div>
            <div className="grid-item" onClick={() => navigateToSection('/education')}>
                Education
            </div>
            <div className="grid-item" onClick={() => navigateToSection('/skills')}>
                Skills
            </div>
            <div className="grid-item contact" onClick={() => navigateToSection('/contact')}>
                Contact
            </div>
        </div>
    );
};

export default GridMenu;
