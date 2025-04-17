import React, { useState } from 'react';

const Navbar = () => {

    const myCurrentPath = window.location.pathname;
    
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(myCurrentPath);

    const handleClick = (link) => {
        setActiveLink(link);
        if (isOpen) {
            toggleMenu()
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${isOpen ? 'active-bg' : ''}`}>
            <div className="navbar-logo">Birds</div>

            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="home" className={activeLink === '/home' ? 'active' : ''} onClick={() => handleClick('Home')}>Home</a>
                <a href="about" className={activeLink === '/about' ? 'active' : ''} onClick={() => handleClick('About')}>About</a>
                <a href="services" className={activeLink === '/services' ? 'active' : ''} onClick={() => handleClick('Services')}>Services</a>
                <a href="contact" className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleClick('Contact')}>Contact</a>
            </div>

            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
