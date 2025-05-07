import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This will need to become App.tsx eventually
// Ensure your global styles and Tailwind theme from input.css are imported
// Vite handles this when it's linked in index.html and processed by @tailwindcss/vite
// import './input.css'; // Usually not needed here if linked in HTML and processed by Vite+Tailwind plugin

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 