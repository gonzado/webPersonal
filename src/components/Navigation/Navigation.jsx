import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
    <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    );
};

export default Navigation;