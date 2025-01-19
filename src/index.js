import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement); // Create the root
  root.render(<App />); // Render the app
} else {
  console.error("Root container not found. Make sure your HTML contains a <div id='root'></div>.");
}