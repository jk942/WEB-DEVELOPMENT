import React from 'react';
import { INTI_RED, footerLinks } from '../../data/websiteData';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">
            {/* Column 1: INTI IU Branding */}
            <div className="footer-branding">
                <div className="footer-logo-text" style={{ color: INTI_RED }}>
                    INTI IU
                </div>
                <p className="footer-description">
                    Committed to shaping students into highly competitive and innovative global leaders through career-focused education.
                </p>
            </div>

            {/* Columns 2 & 3: Links */}
            {footerLinks.slice(0, 2).map(col => (
                <div key={col.title} className="footer-column">
                    <h5 className="footer-title">{col.title}</h5>
                    <ul className="footer-link-list">
                        {col.links.map(link => (
                            <li key={link}><a href="#" className="footer-link">{link}</a></li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* Column 4: Get in Touch */}
            <div className="footer-column">
                <h5 className="footer-title">{footerLinks[2].title}</h5>
                <p className="contact-info">{footerLinks[2].contact.phone}</p>
                <p className="contact-info">{footerLinks[2].contact.email}</p>
                <div className="social-links">
                    {footerLinks[2].contact.social.map(icon => (
                        <a key={icon} href="#" className="social-icon">
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Copyright Placeholder */}
        <div className="footer-copyright">
            &copy; 2025 INTI International University. All rights reserved. 
        </div>
    </footer>
);

export default Footer;
