import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';

// Vite's define plugin makes this variable available
const targetPackage = process.env.TARGET_PACKAGE;

if (!targetPackage) {
  throw new Error("TARGET_PACKAGE environment variable is not set!");
}

// Dynamically import the App component from the target package
const App = lazy(() => import(`@current-package/src/App.tsx`));

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading Brochure...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
