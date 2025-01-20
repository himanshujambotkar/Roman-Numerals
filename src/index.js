import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import App from './App';

// Get the root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    // Provider is the container for the Adobe React Spectrum Library.
    // It must be at the root of the application.
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  );
} else {
  console.error("Root container not found. Make sure your HTML contains a <div id='root'></div>.");
}
