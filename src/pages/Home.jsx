import React from 'react'
import Navigation from '../components/Navigation/Navigation';
import GridMenu from '../components/GridMenu/GridMenu';
import '../css/home.css';

const Home = () => {
    return (
        <>
        <Navigation />
        <div className="home-container">
            <GridMenu />
            {/* Puedes agregar aquí más componentes si lo necesitas */}
        </div>
        </>
    );
};

export default Home;
