import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// CRITICAL FIX: Import the main CSS file to apply all custom styles
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

// Renders the main App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);