import React from 'react';
import { INTI_RED, INTI_YELLOW, mobilityPrograms, dualDegreePartners, mouPartners, icons } from '../../data/websiteData';

// Sub-components for ReachSection

// === ProgramCard ===
const ProgramCard = ({ title, description, icon }) => (
    <div className="program-card">
        <div className="program-card-header">
            {icon}
            <h4 className="card-title">{title}</h4>
        </div>
        <p className="card-description">{description}</p>
    </div>
);

// === PartnerCard (Dual Degree) ===
const PartnerCard = ({ flag, university, details }) => (
    <div className="partner-card">
        <span className="partner-flag">{flag}</span>
        <h4 className="card-title">{university}</h4>
        <ul className="partner-details-list">
            {details.map((detail, index) => (
                <li key={index} className="partner-detail-item">
                    <span>•</span>{detail}
                </li>
            ))}
        </ul>
    </div>
);

// === MOUCard ===
const MOUCard = ({ name, details }) => (
    <div className="mou-card">
        <h4 className="card-title">{name}</h4>
        <p className="card-description">{details}</p>
    </div>
);


// === Main ReachSection ===
const ReachSection = () => (
    <section className="section-wrapper bg-light-gray border-y">
        <div className="container">
            <h2 className="section-heading">INTI Global Reach: Dual Degrees & Partnerships</h2>
            <p className="section-subtitle">
                Expand your career prospects with our strategic international alliances, offering mobility, dual qualifications, and exposure to global academic standards.
            </p>

            {/* Student Mobility Programs */}
            <h3 className="sub-heading-accent text-center mt-10">
                <icons.Plane className="icon-accent" /> Student Mobility Programs
            </h3>
            
            <div className="program-card-grid">
                {mobilityPrograms.map((program, index) => (
                    <ProgramCard
                        key={index}
                        title={program.title}
                        description={program.description}
                        icon={program.icon}
                    />
                ))}
            </div>

            {/* Dual Degree Opportunities */}
            <h3 className="sub-heading-accent text-center mt-20">
                <icons.GraduationCap className="icon-accent" /> Dual Degree Opportunities
            </h3>

            <div className="partner-card-grid">
                {dualDegreePartners.map((partner, index) => (
                    <PartnerCard
                        key={index}
                        flag={partner.flag}
                        university={partner.university}
                        details={partner.details}
                    />
                ))}
            </div>

            {/* View All Button (Style applied via custom button component) */}
            <div className="text-center mt-10">
                <button className="btn-filled btn-yellow">
                    View All Dual Award Programmes
                </button>
            </div>

            {/* Memorandums of Understanding (MOUs) */}
            <div className="mou-section">
                <h3 className="sub-heading-accent mou-heading">
                    <icons.ArrowLeft className="icon-accent mou-icon" />
                    Memorandums of Understanding (MOUs)
                </h3>
                
                {/* MOU Partners Grid */}
                <div className="mou-card-grid">
                    {mouPartners.map((partner, index) => (
                        <MOUCard
                            key={index}
                            name={partner.name}
                            details={partner.details}
                        />
                    ))}
                </div>

                <p className="mou-text-footer">
                    INTI proudly maintains **over 100+ active MOUs** with institutions globally for robust collaboration.
                </p>
            </div>
        </div>
    </section>
);

export default ReachSection;
