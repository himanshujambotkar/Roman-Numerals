import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import App from './App';

// Get the root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  );
} else {
  console.error("Root container not found. Make sure your HTML contains a <div id='root'></div>.");
}
