import React from 'react';

const Button = ({ children, primary = false, className = '' }) => {
    // Relying on the style.css file to define btn-filled and btn-outlined styles.
    const baseClass = primary ? 'btn-filled' : 'btn-outlined';
    return (
        <button
            className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
