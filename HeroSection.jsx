import React from 'react';
import Button from '../common/Button';
import { INTI_RED } from '../../data/websiteData';

const HeroSection = () => (
    <section className="hero-section">
        <div className="container hero-layout">
            {/* Left Content Column */}
            <div className="hero-content">
                <h1 className="hero-title">
                    We Empower Global Leaders with Career-Ready, <span className="text-primary">International Education.</span>
                </h1>
                <p className="hero-subtitle">
                    Join a vibrant, cross-cultural community committed to innovative learning and industry exposure, giving you the **INTI Edge** for a successful career.
                </p>
                <div className="hero-actions">
                    <Button primary>Explore Programmes</Button>
                    <Button>Request Info</Button>
                </div>
            </div>

            {/* Right Image/Card Column */}
            <div className="hero-card-wrapper">
                {/* Red Box Effect */}
                <div className="hero-card">
                    <h2 className="hero-card-title">
                        INTI Global Campus Life
                    </h2>
                </div>
                {/* Placeholder image for visual context */}
                <div 
                    className="hero-card-image-overlay" 
                    style={{ backgroundImage: `url(https://placehold.co/800x600/${INTI_RED.substring(1)}/ffffff?text=INTI+Campus)` }}
                ></div>
            </div>
        </div>
    </section>
);

export default HeroSection;
