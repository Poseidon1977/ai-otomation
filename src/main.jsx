import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root');
if (root) {
    try {
        console.log('Mounting React application...');
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        );
        console.log('React mount initiated.');
    } catch (err) {
        console.error('Mounting Error:', err);
        document.body.innerHTML = `<div style="background: red; color: white; padding: 20px; font-family: sans-serif;">
            <h1>REACT MOUNT ERROR</h1>
            <pre>${err.stack || err.message}</pre>
        </div>`;
    }
} else {
    console.error('Root element not found!');
    document.body.innerHTML = '<h1 style="background:red; color:white; padding:20px;">CRITICAL: #root element missing!</h1>';
}

window.onerror = function (msg, url, line, col, error) {
    console.error('Global JS Error:', msg, error);
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = "position:fixed; bottom:0; left:0; right:0; background:rgba(255,0,0,0.9); color:white; padding:10px; font-size:12px; z-index:9999;";
    errorDiv.textContent = `Global Error: ${msg} (Line: ${line})`;
    document.body.appendChild(errorDiv);
    return false;
};
