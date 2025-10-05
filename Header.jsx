import React from 'react';
import Button from '../common/Button';
import { navLinks } from '../../data/websiteData';

const Header = () => (
    <header className="header">
        <div className="container header-layout">
            {/* Logo */}
            <div className="logo-text">
                INTI <span className="logo-subtitle">International University</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="nav-menu">
                {navLinks.map(link => (
                    <a key={link} href="#" className="nav-link">
                        {link}
                    </a>
                ))}
            </nav>

            {/* Apply Now Button */}
            <Button primary className="apply-btn-desktop">Apply Now</Button>
        </div>
    </header>
);

export default Header;